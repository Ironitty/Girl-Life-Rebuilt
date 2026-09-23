import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).region ?? 0) === 'city') {
    qspGoto(s, 'city_center', '');
  } else {
    qspGoto(s, 'pav_commercial', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterOpenAccount(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).bankAccount = 1;
  (s as any).bankShortCutMoney = 1000;
  (s as any).bankDebtLimit = 0;
  qspCall(s, 'money', 'bank_transfer', 1000, 'to_bank');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: 'You''re led to an open office where a member of the bank staff goes through you...
  scene.text('You\'re led to an open office where a member of the bank staff goes through your details and ID, then takes 1000₽ from you before setting up your account.');
  // TODO-QSP: dynamic text: '"Your account is now open with your ' + $func('money', 'string_price', 1000) + ...
  scene.text('"Your account is now open with your 1000₽. Your account is not allotted an overdraft protection at this time, so be careful."');
  scene.actions([
{ label: 'Return to the lobby', goto: ['bank', 'start'] },
{ label: 'Leave the bank', goto: ['bank', 'leave'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAskOverdraft(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.text('You approach the teller. "Hello. I\'d like to set up an overdraft protection on my account."');
  // TODO-QSP: dynamic text: The teller scans your card and nods. "Certainly, Miss <<$pcs_lastname>>. There i...
  scene.text(`The teller scans your card and nods. "Certainly, Miss ${((s as any).pcs_lastname ?? '')}. There is a small fee of ${qspFunc(s, 'money', 'format', 500)} for this service, but it will allow you to withdraw more money than you have in your account up to a certain limit. However, overdraft protection is only available to account holders of good standing with the bank. Specifically, we require you to have maintained a minimum balance of ${qspFunc(s, 'money', 'format', 10000)} for the last 60 days. Alternatively, a minimum bank credit of ${qspFunc(s, 'money', 'format', 50000)} will also qualify you for this service. Please give me a moment to check your account details."`);
  if (((s as any).bank_last_less_than_10k ?? 0) + 60 <= ((s as any).daystart ?? 0)  ||  (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0)) >= 50000) {
    // TODO-QSP: dynamic text: After a few moments, she looks up and smiles. "You''re all set, Miss <<$pcs_last...
    scene.text(`After a few moments, she looks up and smiles. "You're all set, Miss ${((s as any).pcs_lastname ?? '')}. Your overdraft protection is now active with a limit of ${qspFunc(s, 'money', 'format', 5000)}. Please remember that any overdraft amounts will incur a daily fee of 0.055% of the overdraft amount until it is repaid."`);
    (s as any).bankDebtLimit = 5000;
    (s as any).karta = ((s as any).karta ?? 0) + (4500);
  } else {
    // TODO-QSP: dynamic text: After a few moments, she looks up and frowns. "I''m sorry, Miss <<$pcs_lastname>...
    scene.text(`After a few moments, she looks up and frowns. "I'm sorry, Miss ${((s as any).pcs_lastname ?? '')}, but it appears you do not meet the requirements for overdraft protection at this time. Please feel free to check back in the future once you have maintained a higher balance for a longer period."`);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['bank', 'start'] },
    { label: 'Leave the bank', goto: ['bank', 'leave'] },
  ]);
  scene.build();
}

function enterDepositAmount(s: GameState, scene: SceneBuilder): void {
  (s as any).kartaIN = window.prompt("How much money you want to deposit into the account?") ?? '';
  if (((s as any).kartaIN ?? 0) <= 0  ||  ((s as any).kartaIN ?? 0) > ((s as any).money ?? 0)) {
    scene.text('That is not a valid operation.');
  } else {
    qspCall(s, 'money', 'bank_transfer', ((s as any).kartaIN ?? 0), 'to_bank');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).kartaIN ?? 0)]; enterSetDepositText(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['bank', 'start'] },
    { label: 'Leave the bank', goto: ['bank', 'leave'] },
  ]);
  scene.build();
}

function enterDepositShortcut(s: GameState, scene: SceneBuilder): void {
  (s as any).kartaIN = ((s as any).money ?? 0) - ((s as any).bankShortCutMoney ?? 0);
  qspCall(s, 'money', 'bank_transfer', ((s as any).kartaIN ?? 0), 'to_bank');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).kartaIN ?? 0)]; enterSetDepositText(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['bank', 'start'] },
    { label: 'Leave the bank', goto: ['bank', 'leave'] },
  ]);
  scene.build();
}

function enterDepositAll(s: GameState, scene: SceneBuilder): void {
  (s as any).kartaIN = ((s as any).money ?? 0);
  qspCall(s, 'money', 'bank_transfer', ((s as any).kartaIN ?? 0), 'to_bank');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).kartaIN ?? 0)]; enterSetDepositText(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['bank', 'start'] },
    { label: 'Leave the bank', goto: ['bank', 'leave'] },
  ]);
  scene.build();
}

function enterWithdrawAmount(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 0]; enterWithdrawCash(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['bank', 'start'] },
    { label: 'Leave the bank', goto: ['bank', 'leave'] },
  ]);
  scene.build();
}

function enterWithdrawShortcut(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'bank_transfer', ((s as any).bankShortCutMoney ?? 0), 'to_cash');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bankShortCutMoney ?? 0)]; enterSetWithdrawText(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['bank', 'start'] },
    { label: 'Leave the bank', goto: ['bank', 'leave'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'bank';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'bank';
  (s as any).menu_arg = 'start';
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Bank</b></center>');
  scene.img('images/locations/city/citycenter/bank/bank.jpg');
  if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) === 16  &&  ((s as any).minut ?? 0) >= 30  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 32  &&  ((s as any).region ?? 0) === 'city') {
    scene.text('Seems like <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mey_tamara_events/u0027, /u0027tamara/u0027); return false;">Tamara Meynold</a> is heading home.');
  }
  if ((!((s as any).bankAccount ?? 0))) {
    scene.text('Do you want to open an account?');
    scene.actions([
      { label: 'Open account', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOpenAccount(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: The bank teller looks at you apologetically. "I''m sorry, but to open an account...
      scene.text(`The bank teller looks at you apologetically. "I'm sorry, but to open an account we require a minimum initial deposit of ${qspFunc(s, 'money', 'string_price', 1000)}."`);
    }
  } },
    ]);
  } else {
    if (((s as any).money ?? 0) > 0) {
      if (((s as any).bankShortCutMoney ?? 0) > 0  &&  ((s as any).money ?? 0) > ((s as any).bankShortCutMoney ?? 0)) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Deposit all of your cash, except ' + String(qspFunc(s, 'money', 'format', ((s as any).bankShortCutMoney ?? '')) ?? '') + '.', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDepositShortcut(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Deposit money', handler: (st: GameState) => {
    qspCall(st, 'bank', 'deposit_amount');
  } },
        { label: 'Deposit all of your cash', handler: (st: GameState) => {
    qspCall(st, 'bank', 'deposit_all');
  } },
      ]);
    }
    if (((s as any).karta ?? 0) > 0) {
      if (((s as any).bankShortCutMoney ?? 0) > 0  &&  ((s as any).karta ?? 0) >= ((s as any).bankShortCutMoney ?? 0)) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Withdraw ' + String(qspFunc(s, 'money', 'format', ((s as any).bankShortCutMoney ?? '')) ?? ''), handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWithdrawShortcut(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Withdraw money', handler: (st: GameState) => {
    qspCall(st, 'bank', 'withdraw_amount');
  } },
      ]);
    }
    if ((!((s as any).bankDebtLimit ?? 0))) {
      scene.actions([
        { label: 'See about getting basic credit or overdraft protection', handler: (st: GameState) => {
    qspCall(st, 'bank', 'ask_overdraft');
  } },
      ]);
    } else {
      if (((s as any).bankDebtLimit ?? 0) === 5000) {
        scene.actions([
          { label: 'See about increasing your credit limit', handler: (st: GameState) => {
    if (((st as any).region ?? 0) === 'city') {
      qspGoto(st, 'bank', 'loan_officer', 'start');
    } else {
      // TODO-QSP: delact $selact
      scene.text('You approach the teller. "Hello. I\'d like to talk to someone about increasing my credit limit."');
      scene.text('The teller nods. "Unfortunately, our advanced credit limit functions are being handled through our Saint Petersburg branch. I\'m sure they\'d be happy to help you there."');
    }
  } },
        ]);
      }
    }
    if (((s as any).karta ?? 0) < ((s as any).bankDebtLimit ?? 0)) {
      // TODO-QSP: 'You have a debt of ' + $func('wrap', 'neg', '<<$func(''money'', ''format'', bankDebtLimit - karta)>...
      // TODO-QSP: 'You can take out a loan of ' + $func('wrap', 'accent','<<$func(''money'', ''format'', karta)>>!')
    } else {
      // TODO-QSP: dynamic text: You have <<$func(''money'', ''format'', karta - bankDebtLimit)>> in your account...
      scene.text(`You have ${qspFunc(s, 'money', 'format', ((s as any).karta ?? '') - ((s as any).bankDebtLimit ?? ''))} in your account.`);
      if ((!((s as any).bankDebtLimit ?? 0))) {
        scene.text('You do not have an overdraft protection on your account.');
      } else {
        // TODO-QSP: 'You can take out a loan of ' + $func('wrap', 'accent','<<$func(''money'', ''format'', bankDebtLimit...
      }
    }
    scene.actions([
      { label: 'Modify shortcut amount', handler: (st: GameState) => {
    (st as any).temp_bankShortCutMoney = window.prompt("How much money would you like to use in the shortcuts? [-1 to disable]") ?? '';
    if (((st as any).temp_bankShortCutMoney ?? 0) < 0) {
      (st as any).bankShortCutMoney = (-1);
    } else {
      if (((st as any).temp_bankShortCutMoney ?? 0) > 0) {
        (st as any).bankShortCutMoney = ((st as any).temp_bankShortCutMoney ?? 0);
      }
    }
    qspGoto(st, 'bank', 'start');
  } },
    ]);
  }
  if (((s as any).BurgerQW ?? 0)?.['BankTask'] === 1  &&  ((s as any).BurgerQW ?? 0)?.['BankTaskDay'] === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Show documents', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['BankTask'] = 2;
    qspCall(st, 'stat', '');
    scene.text('You enter the office and show the required documents to the manager.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['bank', 'leave'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['bank', 'leave'] },
  ]);
  scene.build();
}

function enterLoanOfficer(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'start') {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/bank/sex/001.jpg');
    scene.text('You speak to the teller, who tells you to have a seat in the waiting room.');
    scene.text('After waiting about 15 minutes, you\'re called back to an office where a handsome young executive awaits.');
    // TODO-QSP: dynamic text: He extends his hand. "Hello, Miss <<$pcs_lastname>>, I''m Filip Karpenko, the Lo...
    scene.text(`He extends his hand. "Hello, Miss ${((s as any).pcs_lastname ?? '')}, I'm Filip Karpenko, the Loan Officer here at VTB Bank. How can I help you today?"`);
    scene.actions([
      { label: 'Talk about increasing your credit limit', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/002.jpg');
    scene.text('Karpenko nods. "How large a loan were you thinking of taking out?"');
    // TODO-QSP: dynamic text: You try to appear confident. "I was thinking of maybe… <<$func(''money'', ''form...
    scene.text(`You try to appear confident. "I was thinking of maybe… ${qspFunc(s, 'money', 'format', 50000)}?"`);
    scene.text('"Let me just review your information for a moment," he replies and starts typing into his computer.');
    scene.text('He reads what appears on his monitor, a ghost of a frown appearing on his face as you suddenly feel rather foolish for asking for so much money.');
    qspCall(st, 'stat', '');
    if (((st as any).bank_last_less_than_100k ?? 0) + 100 <= ((st as any).daystart ?? 0)  ||  (((st as any).karta ?? 0) - ((st as any).bankDebtLimit ?? 0)) >= 200000) {
      // TODO-QSP: dynamic text: You shift in your chair and the next few minutes seem to drag in before Karpenko...
      scene.text(`You shift in your chair and the next few minutes seem to drag in before Karpenko finally looks up from his screen. "I'm pleased to inform you that based on your excellent account history, the bank is happy to increase your credit limit to ${qspFunc(s, 'money', 'format', 50000)}."`);
      (st as any).bankDebtLimit = ((st as any).bankDebtLimit ?? 0) + (45000);
      (st as any).karta = ((st as any).karta ?? 0) + (45000);
      scene.actions([
        { label: 'Thank him and go back to the lobby', goto: ['bank', 'start'] },
        { label: 'Thank him and leave the bank', goto: ['bank', 'leave'] },
      ]);
    } else {
      scene.text('You shift in your chair and the next few minutes seem to drag in before Karpenko finally looks up from his screen. "I\'m sorry, but you seem to have very little in the way of assets or collateral, and you\'re very young to be taking out such a significant loan. I\'m afraid the bank can\'t take a risk on this proposition at this time."');
      if (((st as any).pcs_inhib ?? 0) >= 35  &&  ((st as any).stat ?? 0)?.['vaginal'] !== 0) {
        scene.actions([
          { label: 'Try and seduce him', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/003.jpg');
    // TODO-QSP: dynamic text: "I''m sorry, Miss <<$pcs_lastname>>, but my decision is final," he says firmly.
    scene.text(`"I'm sorry, Miss ${((st as any).pcs_lastname ?? '')}, but my decision is final," he says firmly.`);
    scene.text('You rise from your chair, but you don\'t turn and walk away. Instead, you approach him and lean in, giving him an excellent view of your cleavage.');
    scene.text('"It\'s true I don\'t have any real collateral," you tell him in a soft, sultry voice. "but that doesn\'t mean I don\'t have something you want. If we put our minds to it, we can come up with conditions that benefit us both…"');
    scene.text('Karpenko stares at your breasts, then looks into your eyes. "I suppose there may be some way we can work out a deal, if you\'re willing to be… cooperative."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'sex_start']; enterLoanOfficer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask about the requirements for a credit extension', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    scene.text('"I see," you murmur. "What sort of requirements would I need to meet in order to qualify for more credit?"');
    // TODO-QSP: dynamic text: "Well, Miss <<$pcs_lastname>>," Karpenko replies, "the bank would need to see yo...
    scene.text(`"Well, Miss ${((st as any).pcs_lastname ?? '')}," Karpenko replies, "the bank would need to see you are capable of repaying such a loan. For someone in your position, that would mean maintaining a minimum balance of ${qspFunc(s, 'money', 'format', 100000)} for at least 100 days, or alternatively having a current balance of ${qspFunc(s, 'money', 'format', 200000)}."`);
  } },
        { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/004.jpg');
    // TODO-QSP: dynamic text: "Wait, Miss <<$pcs_lastname>>," Karpenko says as you turn away. "You seem like a...
    scene.text(`"Wait, Miss ${((st as any).pcs_lastname ?? '')}," Karpenko says as you turn away. "You seem like a trustworthy young lady. There may be a way I can arrange this loan if you're willing to be… cooperative."`);
    scene.text('You\'re young, but even so there\'s little doubt about what sort of cooperation he\'s implying. The way his eyes are undressing you as you stand before him makes his intentions quite plain.');
    scene.text('He wants you to use your body as collateral! Is that really something you would consider? Is the loan really worth that much to you?');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'sex_start']; enterLoanOfficer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
      { label: 'Change your mind', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspGoto(st, 'bank', 'start');
  } },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'sex_start') {
      qspCall(s, 'stat', '');
      if (((s as any).pcs_inhib ?? 0) >= 35  &&  ((s as any).stat ?? 0)?.['vaginal'] !== 0) {
        qspCall(s, 'willpower', 'sex', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Co-operate', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Co-operate', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'npcgeneratec', '', 0, 'Mr. Karpenko, Loan Officer for VTB Bank', (Math.floor(Math.random() * 7) + 21));
    // TODO-QSP: $npc_thdick[$npclastgenerated] = 'thick'
    ((st as any).npc_dick = (st as any).npc_dick ?? {})[String((st as any).npclastgenerated ?? 0)] = 21;
    // TODO-QSP: $npc_firstname[$npclastgenerated] = 'Filip'
    // TODO-QSP: $npc_nickname[$npclastgenerated] = 'Mr. Karpenko'
    // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Karpenko'
    // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Karpenko'
    // TODO-QSP: $npc_notes[$npclastgenerated] = 'A young Loan Officer for VTB Bank'
    qspCall(st, 'npcpreservec', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'npcStat', '', ((st as any).npclastsaved ?? 0));
    scene.img('images/locations/city/citycenter/bank/sex/005.jpg');
    scene.text('"Time to put your mouth where my money is, girl," Karpenko says with a grin that\'s just a little unnerving. You start to get the sense that you might just be in for more than you bargained for with this man, but it\'s too late to back out now.');
    scene.text('Affecting your sultriest walk and your hungriest gaze, you approach him as he rises from his chair. You open your mouth to say some sophisticated-sounding banter, but Karpenko cuts you off by grabbing your waist and pulling you toward him, stopping your speech by filling your mouth with his probing tongue.');
    scene.text('You gasp involuntarily at his forceful approach, but after a moment you regain some sense of composure. You begin kissing him back, alternately probing his mouth and sucking his tongue like a miniature cock.');
    qspCall(st, 'arousal', 'kiss', 10, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get his cock ready', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/007.jpg');
    scene.text('After a few minutes, Karpenko sits on his chair with a nasty grin. "You came in here to beg for a loan, didn\'t you? I think sluts beg best on their knees with their mouths full."');
    scene.text('"Yes, sir," you murmur as you sink to your knees and crawl under the table.');
    scene.text('His cock is already hard in his pants as you undo his zipper and fish it out. You pause only for a moment to admire the tool – at 21 thick, glorious centimeters, it\'s worthy of a little admiration – before putting your skilled mouth to work. You run your tongue up the thick vein on the underside, feeling his heat and tasting his salty flavor until you come to his flaring head. Your eyes lock with his as you swirl your tongue around the glans before you swallow him into your throat.');
    scene.text('Finally your efforts bear fruit. "Let\'s move over to the sofa. Time to put that pussy of yours to work!"');
    qspCall(st, 'arousal', 'bj', 15, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lie on your side', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/008.jpg');
    scene.text('Karpenko leads you to the leather-covered sofa and lies down on it, pulling you in to spoon with him. You barely get settled before he turns your head and starts kissing you. A few minutes later, he pushes his cock into your pussy.');
    scene.text('In a single, swift movement, he has buried himself in you, his thick length making you gasp into his mouth as he starts to fuck you, his hips pushing forward into your ass. Before long, you lose yourself in the pleasure and find yourself pushing back into him.');
    qspCall(st, 'arousal', 'kiss', (-5), 'sub');
    qspCall(st, 'arousal', 'vaginal', 15, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Climb on top and ride him', handler: (st: GameState) => {
    scene.text('<center><b>Mr. Karpenko</b></center>');
    scene.img('images/locations/city/citycenter/bank/sex/009.jpg');
    scene.text('"I want you on top, you sweet little whore," he growls as pulls his dick out of you and rolls onto his back. You swing atop him, and he holds your hips as you reach between your legs and grasp his cock. Both of you gasp in unison as you settle down on it and feel it fill your pussy once again. You take it all inside you and then, eyes closed, begin to ride him.');
    // TODO-QSP: dynamic text: "You''re a dirty little slut, Miss <<$pcs_lastname>>," Karpenko muses as you bou...
    scene.text(`"You're a dirty little slut, Miss ${((st as any).pcs_lastname ?? '')}," Karpenko muses as you bounce on him, his thick cock stretching you and finding wonderful depths to your pussy. You grind your hips against him, putting friction on your clit as you take him to the hilt.`);
    qspCall(st, 'arousal', 'vaginal', 15, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take it', goto: ['bank', 'loan_officer', 'sex_finish'] },
    ]);
  } },
    ]);
  } },
      { label: 'Get on top', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/009.jpg');
    scene.text('Karpenko leads you to the plush leather sofa and lies down on his back. You waste no time climbing atop him and he holds your hips as you reach between your legs and grasp his cock. Both of you gasp in unison as you settle down on it and feel it fill your pussy once again. You take it all inside you and then, eyes closed, begin to ride him.');
    // TODO-QSP: dynamic text: "You''re a dirty little slut, Miss <<$pcs_lastname>>," Karpenko muses as you bou...
    scene.text(`"You're a dirty little slut, Miss ${((st as any).pcs_lastname ?? '')}," Karpenko muses as you bounce on him, his thick cock stretching you and finding wonderful depths to your pussy. You grind your hips against him, putting friction on your clit as you take him to the hilt.`);
    qspCall(st, 'arousal', 'vaginal', 15, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Spoon-fucking', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/008.jpg');
    scene.text('"On your side now," Karpenko tells you gruffly and you clamber off and let him adjust himself against the back of the sofa before moving to join him. He grabs you roughly, pulling you in to spoon with him. You barely get settled before he turns your head and starts kissing you. A few minutes later, he pushes his cock into your pussy.');
    scene.text('In a single, swift movement, he has buried himself in you, his thick length making you gasp into his mouth as he starts to fuck you, his hips pushing forward into your ass. Before long, you lose yourself in the pleasure and find yourself pushing back into him.');
    qspCall(st, 'arousal', 'kiss', (-5));
    qspCall(st, 'arousal', 'vaginal', 15, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Taking it like a bitch', goto: ['bank', 'loan_officer', 'sex_finish'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/006.jpg');
    scene.text('"I\'m sorry," you say as you pull away, "I\'m just not that sort of girl. Sorry to waste your time."');
    // TODO-QSP: dynamic text: You turn and head for the door, but Karpenko''s voice stops you before you reach...
    scene.text(`You turn and head for the door, but Karpenko's voice stops you before you reach it. "Wait a moment, Miss ${((st as any).pcs_lastname ?? '')}. Before you go, I want you to know that this offer remains open. If you change your mind, you can return at any time and we can arrange the loan you desire."`);
    scene.text('"I\'ll… Keep that in mind," you mutter as you throw the door open and run back to the safety of the lobby.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Flee', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'bank', 'start');
  } },
    ]);
  } },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'sex_finish') {
        scene.img('images/locations/city/citycenter/bank/sex/010.jpg');
        scene.text('After several minutes, Karpenko smacks your ass. "I want to fuck you from behind now. Bend over the table."');
        scene.text('You slide off the couch and move to bend over, swinging one leg up onto the surface to brace yourself. An instant later, Karepenko\'s hands are on your ass and his cock is back inside you. He thrusts so fiercely that your whole body shakes every time his hips collide with your ass and your pussy clenches tightly around him as he hammers in and out.');
        scene.text('You\'re trying to be quiet, but he\'s too forceful and you\'re soon letting out loud, moaning gasps with every thrust, too lost in the bliss he\'s giving you to care what happens. You don\'t know how long this lasts, lost in pleasure as you are, but you suddenly become aware that he has given you one last particularly deep thrust and suddenly feel his cock twitching inside you.');
        qspCall(s, 'arousal', 'vaginal', 15, 'sub');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'What did you do?!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/bank/sex/011.jpg');
    scene.text('Sudden panic surges in your chest and dispels the pleasure in an instant. "Did you just cum inside me?!?"');
    // TODO-QSP: dynamic text: Karpenko steps back and you feel his cum dribbling out of your pussy and down yo...
    scene.text(`Karpenko steps back and you feel his cum dribbling out of your pussy and down your thigh as he pants loudly. "You just got a loan of ${qspFunc(s, 'money', 'format', 50000)}. Did you really think I would authorize that sort of loan to a girl like you and not finish inside?"`);
    scene.text('"But I could get pregnant!" you object.');
    scene.text('"You can afford a hell of a lot of morning after pills," he says with a shrug as he tucks his cock away and sits back at his desk. "Remember, you\'ll need to pay this loan back like any other, and don\'t think you can come back for another loan like it in the future. Now, if you\'ll excuse me, I have work to do. I trust you can see yourself out."');
    scene.text('Feeling humiliated, you adjust your clothing and open the office door to step out into the hallway. The first thing you see is a cluster of three female bank employees looking at you, and you can see from their smirks and how they whisper to each other that they know exactly what you were up to with the loan officer. Cheeks burning with shame, you hurry away.');
    qspCall(st, 'cum_call', '', '', ((st as any).boy ?? 0), 1, '', '', 110);
    qspCall(st, 'cuminsidereact', 'Mr. Karpenko');
    qspCall(st, 'fame', 'city', 'sex', 3);
    qspCall(st, 'arousal', 'end');
    (st as any).bankDebtLimit = ((st as any).bankDebtLimit ?? 0) + (45000);
    (st as any).karta = ((st as any).karta ?? 0) + (45000);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <i>Your maximum credit has been increased to <<$func(''money'', ''format'', bank...
    scene.text(`<i>Your maximum credit has been increased to ${qspFunc(s, 'money', 'format', ((st as any).bankDebtLimit ?? ''))}</i>`);
    scene.actions([
      { label: 'Head back to the lobby', goto: ['bank', 'start'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDepositCash(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 100;
  }
  // TODO-QSP: kartaIN = input("How much money do you want to deposit into your account?" + iif(ARGS[1] <= 0, "", " (There''s a <<$func('money', 'format', ARGS[1])>> fee)"))
  if (((s as any).kartaIN ?? 0) <= String((s as any).locArgs?.[1] ?? '')  ||  ((s as any).kartaIN ?? 0) > ((s as any).money ?? 0)) {
    scene.text('Invalid operation.');
  } else {
    // TODO-QSP: atmDeposit[] = kartaIN - ARGS[1]
    // TODO-QSP: atmDepositDate[] = daystart + 2
    (s as any).money = ((s as any).money ?? 0) - (((s as any).kartaIN ?? 0));
    // TODO-QSP: dynamic text: <br>After the fee, you deposit <<$func(''money'', ''format'', atmDeposit[])>> in...
    scene.text(`<br>After the fee, you deposit ${qspFunc(s, 'money', 'format', qspUntranslated(s, "atmDeposit[]", { location: "bank" }))} into your account.`);
    // TODO-QSP: dynamic text: It will take 2 days for funds to be available. Your new balance will be <<$func(...
    scene.text(`It will take 2 days for funds to be available. Your new balance will be ${qspFunc(s, 'money', 'format', ((s as any).karta ?? '') - ((s as any).bankDebtLimit ?? '') + ((s as any).atmDeposit ?? 0))}.`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWithdrawCash(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 0;
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 0;
  }
  // TODO-QSP: kartaOUT = input("How much money do you want to withdraw?" + iif(ARGS[1] <= 0, "", " (There's a <<$func('money', 'format', ARGS[1])>> fee)"))
  if (((s as any).kartaOUT ?? 0) <= String((s as any).locArgs?.[1] ?? '')  ||  ((s as any).kartaOUT ?? 0) > ((s as any).karta ?? 0)) {
    scene.text('<br>Invalid operation.');
  } else {
    qspCall(s, 'money', 'bank_transfer', ((s as any).kartaOUT ?? 0), 'to_cash');
    if (String((s as any).locArgs?.[1] ?? '') > 0) {
      (s as any).money = ((s as any).money ?? 0) - (((s as any).locArgs?.[1] ?? 0));
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).kartaOUT ?? 0)]; enterSetWithdrawText(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetWithdrawText(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <br>You withdraw <<$func('money', 'format', ARGS[1])>>. 
  scene.text(`<br>You withdraw ${qspFunc(s, 'money', 'format', ((s as any).locArgs?.[1] ?? ''))}. `);
  if (((s as any).karta ?? 0) > ((s as any).bankDebtLimit ?? 0)) {
  } else {
    if (((s as any).karta ?? 0) === ((s as any).bankDebtLimit ?? 0)) {
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetDepositText(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <br>You deposit <<$func('money', 'format', ARGS[1])>>. 
  scene.text(`<br>You deposit ${qspFunc(s, 'money', 'format', ((s as any).locArgs?.[1] ?? ''))}. `);
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bankAccount ?? 0) === 1) {
    (s as any).kartatotal = ((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0);
    // TODO-QSP: :kartaloop
    if (((s as any).kartatotal ?? 0) > 20000000) {
      (s as any).kartacount = ((s as any).kartacount ?? 0) + (1);
      ((s as any).largekarta = (s as any).largekarta ?? {})[String((s as any).kartacount ?? 0)] = 20000000;
      (s as any).kartatotal = ((s as any).kartatotal ?? 0) - (20000000);
      // TODO-QSP: jump 'kartaloop'
    } else {
      ((s as any).largekarta = (s as any).largekarta ?? {})[0] = ((s as any).kartatotal ?? 0);
    }
    if (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0) >= 2000000) {
      (s as any).intrate = 60;
    } else {
      if (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0) >= 0) {
        (s as any).intrate = 30;
      } else {
        (s as any).intrate = 550;
      }
    }
    // TODO-QSP: :intloop
    if ((!((s as any).kartacount ?? 0))) {
      (s as any).smallmoneypos = ((s as any).smallmoneypos ?? 0) + ((((s as any).largekarta ?? 0)[0] * ((s as any).intrate ?? 0)));
      ((s as any).largekarta = (s as any).largekarta ?? {})[0] = 0;
      (s as any).kartacount = 0;
    } else {
      (s as any).smallmoneypos = ((s as any).smallmoneypos ?? 0) + ((((s as any).largekarta ?? 0)?.[String((s as any).kartacount ?? 0)] * ((s as any).intrate ?? 0)));
      if (((s as any).smallmoneypos ?? 0) >= 1000000  ||  ((s as any).smallmoneypos ?? 0) <= -1000000) {
        (s as any).karta = ((s as any).karta ?? 0) + (((s as any).smallmoneypos ?? 0) / 1000000);
        (s as any).smallmoneypos = ((s as any).smallmoneypos ?? 0) % 1000000;
      }
      ((s as any).largekarta = (s as any).largekarta ?? {})[String((s as any).kartacount ?? 0)] = 0;
      (s as any).kartacount = ((s as any).kartacount ?? 0) - (1);
      // TODO-QSP: jump 'intloop'
    }
    if (((s as any).smallmoneypos ?? 0) >= 1000000  ||  ((s as any).smallmoneypos ?? 0) <= -1000000) {
      (s as any).karta = ((s as any).karta ?? 0) + (((s as any).smallmoneypos ?? 0) / 1000000);
      (s as any).smallmoneypos = ((s as any).smallmoneypos ?? 0) % 1000000;
    }
    (s as any).bank_i = 0;
    // TODO-QSP: :atmdeposit_loop
    if (((s as any).bank_i ?? 0) < Object.keys((s as any).atmDeposit ?? {}).length) {
      if (((s as any).atmDepositDate ?? 0)?.[String((s as any).bank_i ?? 0)] <= ((s as any).daystart ?? 0)) {
        if (((s as any).atmDeposit ?? 0)?.[String((s as any).bank_i ?? 0)] > 0) {
          (s as any).karta = ((s as any).karta ?? 0) + (((s as any).atmDeposit ?? 0)?.[String((s as any).bank_i ?? 0)]);
        }
      } else {
        (s as any).bank_i = ((s as any).bank_i ?? 0) + (1);
      }
      // TODO-QSP: jump 'atmdeposit_loop'
    }
    qspCall(s, 'internet_mobile', 'check_subscription_actions');
    (s as any).bank_max_i = 0;
    if (((s as any).bank_max_i ?? 0) > 0) {
      (s as any).bank_i = 0;
      // TODO-QSP: :loop_messages
      if (((s as any).internet_action_messages ?? 0)?.[String((s as any).bank_i ?? 0)] !== '') {
        // TODO-QSP: dynamic text: l $internet_action_messages[bank_i]
        scene.text('l $internet_action_messages[bank_i]');
      }
      (s as any).bank_i = ((s as any).bank_i ?? 0) + (1);
      if (((s as any).bank_i ?? 0) < ((s as any).bank_max_i ?? 0)) {
        // TODO-QSP: jump 'loop_messages'
      }
    }
  }
  if (((s as any).day ?? 0) !== 25) {
    if (((s as any).paydayHusb ?? 0) === 1) {
      (s as any).paydayHusb = 0;
    }
    if (((s as any).haday ?? 0) === 1) {
      (s as any).haday = 0;
    }
    if (((s as any).electroday ?? 0) === 1) {
      (s as any).electroday = 0;
    }
    if (((s as any).kabelday ?? 0) === 1) {
      (s as any).kabelday = 0;
    }
    if (((s as any).scholarshipday ?? 0) === 1) {
      (s as any).scholarshipday = 0;
    }
    if (((s as any).nopaytanwork ?? 0) === 1) {
      (s as any).nopaytanwork = 0;
    }
  } else {
    if (((s as any).bankAccount ?? 0) === 1) {
      (s as any).temp_pay_method = 'bank';
      (s as any).temp_pay_display = 'has been deposited into your bank account';
    } else {
      (s as any).temp_pay_method = 'cash';
      (s as any).temp_pay_display = 'has mysteriously appeared in your pocket';
    }
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 35  &&  ((s as any).mey_tamara ?? 0)?.['qw_end'] === 0) {
      if (((s as any).mey_tamara ?? 0)?.['help_count'] < 10) {
        qspCall(s, 'money', 'earn', 10000, ((s as any).temp_pay_method ?? 0));
        // TODO-QSP: dynamic text: <b><font color=green>Aunt Tamara gave you <<$func(''money'', ''string_profit'', ...
        scene.text(`<b><font color=green>Aunt Tamara gave you ${qspFunc(s, 'money', 'string_profit', 10000)} for your efforts</font></b>`);
      } else {
        qspCall(s, 'money', 'earn', 15000, ((s as any).temp_pay_method ?? 0));
        // TODO-QSP: dynamic text: <b><font color=green>Aunt Tamara gave you <<$func(''money'', ''string_profit'', ...
        scene.text(`<b><font color=green>Aunt Tamara gave you ${qspFunc(s, 'money', 'string_profit', 15000)} for your efforts</font></b>`);
      }
      ((s as any).mey_tamara = (s as any).mey_tamara ?? {})['help_count'] = 0;
    }
    if (((s as any).job_status ?? 0)?.['city_diner_secretary'] === 'employed'  &&  ((s as any).job_worked_count ?? 0)?.['city_diner_secretary'] > 0) {
      (s as any).pay = qspFunc(s, 'jobs', 'paycheck', 'city_diner_secretary', ((s as any).temp_pay_method ?? 0));
      scene.text(`<center><b>Your salary of ${qspFunc(s, 'money', 'string_profit', ((s as any).pay ?? ''))} ${((s as any).temp_pay_display ?? '')} for your job as a secretary.</b></center>`);
    }
    if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  ((s as any).job_worked_count ?? 0)?.['city_cafe_waitress'] > 0) {
      (s as any).pay = qspFunc(s, 'jobs', 'paycheck', 'city_cafe_waitress', ((s as any).temp_pay_method ?? 0));
      scene.text(`<center><b>Your salary of ${qspFunc(s, 'money', 'string_profit', ((s as any).pay ?? ''))} ${((s as any).temp_pay_display ?? '')} for your job as a waitress in a cafe.</b></center>`);
    }
    if (((s as any).job_status ?? 0)?.['city_hospital_nurse'] === 'employed'  &&  ((s as any).job_worked_count ?? 0)?.['city_hospital_nurse'] > 0) {
      (s as any).pay = qspFunc(s, 'jobs', 'paycheck', 'city_hospital_nurse', ((s as any).temp_pay_method ?? 0));
      scene.text(`<center><b>Your salary of ${qspFunc(s, 'money', 'string_profit', ((s as any).pay ?? ''))} ${((s as any).temp_pay_display ?? '')} for your work at the hospital.</b></center>`);
    }
    if (((s as any).tanwork ?? 0) === 1  &&  (!((s as any).nopaytanwork ?? 0))) {
      (s as any).nopaytanwork = 1;
      qspCall(s, 'money', 'earn', 10000, ((s as any).temp_pay_method ?? 0));
      scene.text(`<center><b>Your salary of ${qspFunc(s, 'money', 'string_profit', 10000)} ${((s as any).temp_pay_display ?? '')} for your work as a house maid.</b></center>`);
    }
    if (((s as any).job_status ?? 0)?.['city_office_secretary'] === 'employed'  &&  ((s as any).job_worked_count ?? 0)?.['city_office_secretary'] > 0) {
      (s as any).pay = qspFunc(s, 'jobs', 'paycheck', 'city_office_secretary', ((s as any).temp_pay_method ?? 0));
      scene.text(`<center><b>Your salary of ${qspFunc(s, 'money', 'string_profit', ((s as any).pay ?? ''))} ${((s as any).temp_pay_display ?? '')} for your job as a secretary.</b></center>`);
    }
    if (((s as any).job_status ?? 0)?.['pav_factory'] === 'employed') {
      (s as any).pay = qspFunc(s, 'jobs', 'paycheck', 'pav_factory', ((s as any).temp_pay_method ?? 0));
      scene.text(`<center><b>Your salary of ${qspFunc(s, 'money', 'string_profit', ((s as any).pay ?? ''))} ${((s as any).temp_pay_display ?? '')} for your job at the garment factory.</b></center>`);
    }
    if (((s as any).husID ?? 0) !== ''  &&  (!((s as any).paydayHusb ?? 0))) {
      (s as any).paydayHusb = 1;
      if (((s as any).npc_finance ?? 0)?.[String((s as any).husID ?? 0)] === 0) {
        (s as any).huspay = 20000;
      } else {
        if (((s as any).npc_finance ?? 0)?.[String((s as any).husID ?? 0)] === 1) {
          (s as any).huspay = 30000;
        } else {
          (s as any).huspay = 40000;
        }
      }
      qspCall(s, 'money', 'earn', ((s as any).huspay ?? 0), ((s as any).temp_pay_method ?? 0));
      scene.text(`<center><b>${qspFunc(s, 'money', 'string_profit', ((s as any).huspay ?? ''))} from your husband ${((s as any).temp_pay_display ?? '')}.</b></center>`);
    }
    if (((s as any).wifID ?? 0) !== ''  &&  (!((s as any).paydayWife ?? 0))) {
      (s as any).paydayWife = 1;
      if (((s as any).npc_finance ?? 0)?.[String((s as any).wifID ?? 0)] === 0) {
        (s as any).wifpay = 20000;
      } else {
        if (((s as any).npc_finance ?? 0)?.[String((s as any).wifID ?? 0)] === 1) {
          (s as any).wifpay = 30000;
        } else {
          (s as any).wifpay = 40000;
        }
      }
      qspCall(s, 'money', 'earn', ((s as any).wifpay ?? 0), ((s as any).temp_pay_method ?? 0));
      scene.text(`<center><b>${qspFunc(s, 'money', 'string_profit', ((s as any).wifpay ?? ''))} from your wife ${((s as any).temp_pay_display ?? '')}.</b></center>`);
    }
    if (qspFunc(s, 'uniutil', 'scholarship', 'is_active')  &&  (!((s as any).scholarshipday ?? 0))) {
      (s as any).scholarshipday = 1;
      qspCall(s, 'money', 'earn', qspFunc(s, 'uniutil', 'scholarship', 'get'), ((s as any).temp_pay_method ?? 0));
      // TODO-QSP: $func('wrap', 'v_pos b', 'You have received ' + $func('money', 'string_price', func('uniutil', 'scho...
    }
    if (qspFunc(s, 'homes_properties', 'get_owned_homes_count') > 0  &&  (!((s as any).electroday ?? 0))) {
      qspCall(s, 'housing', 'util');
      if (((s as any).bankAccount ?? 0) === 1  &&  qspFunc(s, 'money', 'can_afford', ((s as any).elektro ?? 0) * ((s as any).hcount_util ?? 0), 'bank')) {
        scene.text(`<center><b>${qspFunc(s, 'money', 'string_price', ((s as any).elektro ?? '') * ((s as any).hcount_util ?? ''))} for utilities has been automatically deducted from your bank account.</b></center>`);
        (s as any).electroday = 1;
        if (((s as any).elektro ?? 0) >= 2000) {
          (s as any).elektro = 2000 + (Math.floor(Math.random() * 101) + 0);
          // TODO-QSP: gs 'money', 'pay', elektro * hcount_util, 'bank'
        }
      } else {
        if (((s as any).bankAccount ?? 0) === 0  &&  ((s as any).money ?? 0) >= ((s as any).elektro ?? 0)) {
          scene.text(`<center><b>You currently do not have a bank account set up for automatic utilities payments. ${qspFunc(s, 'money', 'string_price', ((s as any).elektro ?? '') * ((s as any).hcount_util ?? ''))} has been deducted from your cash holdings.</b></center>`);
          (s as any).electroday = 1;
          if (((s as any).elektro ?? 0) >= 2000) {
            (s as any).elektro = 2000 + (Math.floor(Math.random() * 101) + 0);
            // TODO-QSP: gs 'money', 'pay', elektro * hcount_util, 'cash'
          }
        } else {
          scene.text(`<center><b>Your card was declined during automatic debit of ${qspFunc(s, 'money', 'string_price', ((s as any).elektro ?? '') * ((s as any).hcount_util ?? ''))} for automatic utilities payment.</b></center>`);
        }
      }
    }
    if (((s as any).kabel ?? 0) > 0  &&  (!((s as any).kabelday ?? 0))) {
      qspCall(s, 'housing', 'cable');
      if (((s as any).bankAccount ?? 0) === 1  &&  ((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0) >= (300 * ((s as any).hcount_cable ?? 0))) {
        scene.text(`<center><b>${qspFunc(s, 'money', 'string_price', 300 * ((s as any).hcount_cable ?? ''))} has been deducted from your bank account for your cable TV subscription.</b></center>`);
        (s as any).kabelday = 1;
        // TODO-QSP: gs 'money', 'pay', 300 * hcount_cable, 'bank'
      } else {
        if (((s as any).bankAccount ?? 0) === 1  &&  ((s as any).karta ?? 0) >= (300 * ((s as any).hcount_cable ?? 0))) {
          scene.text(`<center><b>${qspFunc(s, 'money', 'string_price', 300 * ((s as any).hcount_cable ?? ''))} has been deducted from your bank account and overdraw facility for your cable TV subscription.</b></center>`);
          (s as any).kabelday = 1;
          // TODO-QSP: gs 'money', 'pay', 300 * hcount_cable, 'bank'
        } else {
          if (((s as any).bankAccount ?? 0) === 0  &&  ((s as any).money ?? 0) >= (300 * ((s as any).hcount_cable ?? 0))) {
            scene.text(`<center><b>You currently do not have a bank account set up for automatic payment of your cable TV subscription. ${qspFunc(s, 'money', 'string_price', 300 * ((s as any).hcount_cable ?? ''))} has been deducted from your cash holdings.</b></center>`);
            (s as any).kabelday = 1;
            // TODO-QSP: gs 'money', 'pay', 300 * hcount_cable, 'cash'
          } else {
            scene.text(`<center><b>Your card was declined during automatic debit of ${qspFunc(s, 'money', 'string_price', 300 * ((s as any).hcount_cable ?? ''))} for cable TV subscription.</b></center>`);
          }
        }
      }
    }
  }
  qspCall(s, 'homes_properties', 'tenant_move_out_check');
  qspCall(s, 'homes_properties', 'get_rented_properties');
  (s as any).bank_max_i = 0;
  if (((s as any).bank_max_i ?? 0) > 0) {
    (s as any).bank_i = 0;
    // TODO-QSP: :loop_rent_payments
    if (((s as any).property_days ?? 0)?.[String((s as any).bank_i ?? 0)] <= 2) {
      if (((s as any).bankAccount ?? 0) === 1  &&  qspFunc(s, 'money', 'can_afford', ((s as any).property_rent ?? 0)?.[String((s as any).bank_i ?? 0)], 'bank')) {
        if (((s as any).property_rent ?? 0)?.[String((s as any).bank_i ?? 0)] > 0) {
          // TODO-QSP: dynamic text: '<font color="green">Your rent payment of <<$func(''money'', ''string_price'', p...
          scene.text('<font color="green">Your rent payment of ' + qspFunc(s, 'money', 'string_price', ((s as any).property_rent ?? 0)?.[String((s as any).bank_i ?? 0)] ?? '') + ' for your ' + ((s as any).property_name ?? 0)?.[String((s as any).bank_i ?? 0)] ?? '' + ', has automatically been deducted from your bank account\' + iif(karta >= bankDebtLimit, \', \' and overdraw facility. Please contact your bank regarding your overdraw repayment\') + \'.</font><br>');
        }
        // TODO-QSP: gs 'homes_properties', 'pay_rent', $property_code[bank_i], 'bank'
      } else {
        if (((s as any).property_days ?? 0)?.[String((s as any).bank_i ?? 0)] <= 0) {
          // TODO-QSP: gs 'homes_properties', 'cancel_rent', $property_code[bank_i]
        } else {
          if ((!((s as any).bankAccount ?? 0))) {
            scene.text(`You currently do not have a bank account setup for automatic rent deduction of ${qspFunc(s, 'money', 'string_price', ((s as any).property_rent ?? 0)?.[String((s as any).bank_i ?? 0)] ?? '')} for your ${((s as any).property_name ?? 0)?.[String((s as any).bank_i ?? 0)] ?? ''}. To avoid eviction, please make a manual payment as soon as possible.<br>`);
          } else {
            scene.text(`Your card was declined during automatic rent deduction of ${qspFunc(s, 'money', 'string_price', ((s as any).property_rent ?? 0)?.[String((s as any).bank_i ?? 0)] ?? '')} for your ${((s as any).property_name ?? 0)?.[String((s as any).bank_i ?? 0)] ?? ''}. To avoid eviction, please rectify as soon as possible.<br>`);
          }
        }
      }
    }
    (s as any).bank_i = ((s as any).bank_i ?? 0) + (1);
    if (((s as any).bank_i ?? 0) < ((s as any).bank_max_i ?? 0)) {
      // TODO-QSP: jump 'loop_rent_payments'
    }
    qspCall(s, 'homes_properties', 'clean_up_property_data');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'open_account':
      enterOpenAccount(s, scene);
      break;
    case 'ask_overdraft':
      enterAskOverdraft(s, scene);
      break;
    case 'deposit_amount':
      enterDepositAmount(s, scene);
      break;
    case 'deposit_shortcut':
      enterDepositShortcut(s, scene);
      break;
    case 'deposit_all':
      enterDepositAll(s, scene);
      break;
    case 'withdraw_amount':
      enterWithdrawAmount(s, scene);
      break;
    case 'withdraw_shortcut':
      enterWithdrawShortcut(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'loan_officer':
      enterLoanOfficer(s, scene);
      break;
    case 'deposit_cash':
      enterDepositCash(s, scene);
      break;
    case 'withdraw_cash':
      enterWithdrawCash(s, scene);
      break;
    case 'set_withdraw_text':
      enterSetWithdrawText(s, scene);
      break;
    case 'set_deposit_text':
      enterSetDepositText(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bank: LocationDef = {
  name: 'bank',
  title: 'Bank',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
