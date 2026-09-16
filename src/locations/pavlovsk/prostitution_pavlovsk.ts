import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterChance(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPavRnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).prostitute ?? 0)?.['pav_daily_count'] < ((s as any).prostitute ?? 0)?.['pav_daily_max']  &&  (Math.floor(Math.random() * 1000) + 1) < Math.min(((s as any).prostitute ?? 0)?.['pav_rnd'], 400)) {
    qspGoto(s, 'prostitution_pavlovsk', 'rng');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPavRnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_functions', 'work_clothes');
  if (((s as any).prostitute ?? 0)?.['pav_timer_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_daily_count'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_timer_day'] = ((s as any).daystart ?? 0);
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_timer_hour'] = ((s as any).hour ?? 0);
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_daily_max'] = ((((s as any).fame ?? {})?.['pav_prostitute'] ?? 0) / 100) + 2;
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_rnd'] = (((s as any).fame ?? {})?.['pav_prostitute'] ?? 0) + 50 + (((s as any).prostitute ?? {})?.['pav_rnd_pity'] ?? 0);
  if (((s as any).prostitute ?? 0)?.['work_clothes']) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_rnd'] = ((s as any).prostitute['pav_rnd'] ?? 0) + (100);
  }
  if (((s as any).pcs_makeup ?? 0) === 4) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_rnd'] = ((s as any).prostitute['pav_rnd'] ?? 0) + (50);
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_rnd'] = ((s as any).prostitute['pav_rnd'] ?? 0) - (((((s as any).prostitute ?? {})?.['pav_cooldown'] ?? 0) * 100));
  if (((s as any).prostitute ?? 0)?.['pav_cooldown'] > 0) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_cooldown'] = ((s as any).prostitute['pav_cooldown'] ?? 0) - (1);
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_rnd_pity'] = ((s as any).prostitute['pav_rnd_pity'] ?? 0) + (20);
  // TODO-QSP: end
  scene.build();
}

function enterRng(s: GameState, scene: SceneBuilder): void {
  (s as any).pro_rand = Math.floor(Math.random() * 8) + 0;
  if (((s as any).pro_rand ?? 0) > 5) {
    (s as any).pro_rand = ((s as any).pro_rand ?? 0) + (2);
  }
  qspCall(s, 'prostitution_functions', 'pav_client');
  qspCall(s, 'prostitution_functions', 'payment', 'pav');
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['std_mod'] === 1) {
    dynamicGoto(s, 'prevLoc', 'prevArg');
  } else {
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_search'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_rnd_pity'] = 0;
    qspGoto(s, 'prostitution_pavlovsk', 'start');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSearch(s: GameState, scene: SceneBuilder): void {
  (s as any).pro_rand = Math.floor(Math.random() * 8) + 0;
  if (((s as any).pro_rand ?? 0) > 5) {
    (s as any).pro_rand = ((s as any).pro_rand ?? 0) + (2);
  }
  qspCall(s, 'prostitution_functions', 'pav_client');
  qspCall(s, 'prostitution_functions', 'payment', 'pav');
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/pavlovsk/street/search.mp4');
  // TODO-QSP: 'You can walk around Pavlovsk to look for somebody that''s interested in buying your services. Since...
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1) {
    scene.text('People can see cum on you. You should clean it before searching for a client.');
  }
  if (((s as any).prostitute ?? 0)?.['std_mod'] === 1) {
    scene.text('Customers won\'t approach you as long as you show signs of an STD.');
  }
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 0  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 0) {
    if (((s as any).hour ?? 0) === 23  ||  ((s as any).hour ?? 0) < 7) {
      scene.text('<br>Pavlovsk is a small town and its streets are empty at this hour.');
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_daily_count'] >= ((s as any).prostitute ?? 0)?.['pav_daily_max']) {
        scene.text('<br>It\'s probably not worthwhile to keep looking for clients. You can try again tomorrow.');
      } else {
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Look for a customer', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Look for a customer', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPavRnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_rnd'] = ((s as any).prostitute['pav_rnd'] ?? 0) + (100);
    if ((Math.floor(Math.random() * 1000) + 1) < Math.min(((s as any).prostitute ?? 0)?.['pav_rnd'], 600)) {
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 36) + 5);
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_search'] = 1;
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_rnd_pity'] = 0;
      qspGoto(s, 'prostitution_pavlovsk', 'start');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 40;
      qspCall(s, 'stat', '');
      scene.img('images/shared/prostitution/pavlovsk/street/search.mp4');
      scene.text('You walked around Pavlovsk for an hour, but nobody was interested in you.');
      scene.actions([
        { label: 'Continue', goto: ['prostitution_pavlovsk', 'search'] },
      ]);
    }
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] === 0) {
    scene.text('<br>You don\'t have any tissues with you to remove cum from your body.');
  } else {
    if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_undressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_vaginal_mod'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_anal_mod'] === 1) {
      scene.actions([
        { label: 'Remove the cum from your body (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['makeup_wipes'] = ((s as any).mc_inventory['makeup_wipes'] ?? 0) - (1);
    (s as any).cumspclnt = 20;
    qspCall(s, 'cum_cleanup', '');
    qspGoto(s, 'prostitution_pavlovsk', 'search');
  } },
      ]);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).pro_drugs ?? 0)?.['status'] > 0  &&  ((s as any).pro_drugs ?? 0)?.['timer_pavlovsk'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Take a break and smoke a joint', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).pro_drugs = (s as any).pro_drugs ?? {})['timer_pavlovsk'] = ((s as any).daystart ?? 0);
    qspCall(s, 'drugs', 'joint');
    scene.img('images/shared/drugs/joint_smoking.jpg');
    scene.text('You head into a nearby back alley and pull a joint out of your purse and light it up. Not before long you\'re starting to feel the relaxing effects as you\'re getting high.');
    scene.actions([
      { label: 'Go back', goto: ['prostitution_pavlovsk', 'search'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop working', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_daily_count'] = ((s as any).prostitute['pav_daily_count'] ?? 0) + (1);
  qspCall(s, 'willpower', 'prostitution', 'self', ((((s as any).prostitute ?? 0)?.['pav_regular'] === 1) ? ('easy') : ('medium')));
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/pavlovsk/street/set_\' + iif(prostitute[\'pav_regular\'] = 0, rand(0, 3), pro_rand) + \'/start.mp4');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice'  &&  ((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
    // TODO-QSP: dynamic text: "Excuse me," an approaching man says. "I'm sorry to disturb you, but are you by ...
    scene.text(`"Excuse me," an approaching man says. "I'm sorry to disturb you, but are you by any chance ${((s as any).pcs_nickname || '')}? A friend of mine showed me a photo of you and said you...," he hesitates and looks around to make sure that nobody is in earshot. "Could I buy your services?"`);
  } else {
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice'  &&  ((s as any).prostitute ?? 0)?.['pav_regular'] === 1) {
      // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>," one of your regulars says. "It's a good to see you ag...
      scene.text(`"Hello ${((s as any).pcs_nickname || '')}," one of your regulars says. "It's a good to see you again. How are you?"`);
      scene.text('You smile. "Nice to see you again and I\'m fine, thanks for asking."');
      scene.text('He takes a look around to make sure that nobody is around to see you, before asking. "Could I buy your services again?"');
    } else {
      if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive'  &&  ((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
        if (((s as any).pro_rand ?? 0) < 2) {
          qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).PCloStyle ?? 0) === 4) ? (2) : (1)));
        }
        // TODO-QSP: dynamic text: "Hey!" a man shouts and waves towards you. "Aren't you that teen whore <<$pcs_ni...
        scene.text(`"Hey!" a man shouts and waves towards you. "Aren't you that teen whore ${((s as any).pcs_nickname || '')}?"' + iif(pro_rand < 4, ' He's so loud that a few people turn around and stare at you disapprovingly.', ' To your relief nobody else is in earshot.') + ' "Are you available? I always wanted to fuck a young slut like you."`);
      } else {
        if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive'  &&  ((s as any).prostitute ?? 0)?.['pav_regular'] === 1) {
          if (((s as any).pro_rand ?? 0) < 2) {
            qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).PCloStyle ?? 0) === 4) ? (2) : (1)));
          }
          // TODO-QSP: dynamic text: "If that isn't my favorite ' + iif(rand(0, 1) = 0, 'whore', 'fuckmeat') + '," on...
          scene.text(`"If that isn't my favorite ' + iif(rand(0, 1) = 0, 'whore', 'fuckmeat') + '," one of your regulars says so loud that ' + iif(pro_rand < 4, 'several people turn around to take a look at who he's talking about.', 'people could have overheard that if somebody else would have been around.') + ' "Are you up for some fun ${((s as any).pcs_nickname || '')}?"`);
        }
      }
    }
  }
  // TODO-QSP: dynamic text: He wants ' + iif($prostitute['pav_scene'] = 'blowjob', 'you to give him a blowjo...
  scene.text(`He wants ' + iif($prostitute['pav_scene'] = 'blowjob', 'you to give him a blowjob', 'to fuck your ' + iif($prostitute['pav_scene'] = 'anal', 'ass', 'pussy')) + ' and offers to pay ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'] ?? '')}. He wants to do it without a condom and it would take some convincing and a price reduction of ' + $func('money', 'string_price', iif($prostitute['pav_scene'] = 'blowjob', 75, 200)) + ' to change his mind.`);
  qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
    (s as any).will_cost = (((s as any).will_cost ?? 0) * 60) / 100;
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Decline and walk away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Decline and walk away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
      (s as any).will_cost = (((s as any).will_cost ?? 0) * 60) / 100;
    }
    qspCall(s, 'willpower', 'pay', 'resist');
    dynamicGoto(s, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).prostitute ?? 0)?.['pav_condom_refusal'] === 1) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_condom_refusal'] = 0;
    scene.text('<br>He\'s one of those guys who always refuses to put on a condom. It makes no sense to ask him to use one.');
  } else {
    qspCall(s, 'prostitution_functions', 'will_unprotected', 'resist', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('medium') : ('easy')));
    if ((((s as any).mc_inventory ?? 0)?.['normal_condoms'] <= 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] <= 0)) {
      scene.text('<br>You\'re out of condoms.');
    } else {
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Accept, but demand a condom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Accept, but demand a condom', handler: (st: GameState) => {
    (s as any).cumnostd = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).prostitute = (s as any).prostitute ?? {})['payment'] = ((s as any).prostitute['payment'] ?? 0) - (((((s as any).prostitute ?? 0)?.['pav_scene'] === 'blowjob') ? (75) : (200)));
    // TODO-QSP: gs 'money', 'earn', prostitute['payment'], 'cash'
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_condom'] = 1;
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_total'] = ((s as any).prostitute['pav_total'] ?? 0) + (1);
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_cooldown'] = ((s as any).prostitute['pav_cooldown'] ?? 0) + (2);
    if ((((s as any).pro_rand ?? 0) !== 3  &&  ((s as any).pro_rand ?? 0) !== 8)  ||  (((s as any).pro_rand ?? 0) === 3  &&  ((s as any).prostitute ?? 0)?.['pav_scene'] !== 'private')) {
      qspCall(s, 'prostitution_functions', 'remove_condom');
    }
    qspCall(s, 'prostitution_functions', 'will_unprotected', 'resist', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('hard') : ('easy')));
    qspCall(s, 'willpower', 'pay', 'self');
    if (((s as any).pro_mother ?? 0)?.['knows'] === 0  &&  ((s as any).fame ?? 0)?.['pav_prostitute'] > 200  &&  ((s as any).prostitute ?? 0)?.['pav_total'] > 25  &&  ((((s as any).prostitute ?? 0)?.['pav_location'] === 'public'  &&  (Math.floor(Math.random() * 1001) + 0) < ((s as any).fame ?? 0)?.['pav_prostitute'])  ||  (((s as any).prostitute ?? 0)?.['pav_location'] === 'private'  &&  (Math.floor(Math.random() * 2001) + 0) < ((s as any).fame ?? 0)?.['pav_prostitute']))) {
      ((s as any).pro_mother = (s as any).pro_mother ?? {})['knows'] = 1;
    }
    // TODO-QSP: gt 'prostitution_pavlovsk', iif(prostitute['pay_regular'] > -1, 'set_<<pro_rand>>', 'rape')
  } },
        ]);
      }
    }
  }
  if (((s as any).prostitute ?? 0)?.['pav_regular'] === 0  &&  ((s as any).prostitute ?? 0)?.['pav_search'] === 0) {
    qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
    (s as any).will_cost = (((s as any).will_cost ?? 0) * ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? (120) : (80))) / 100;
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'React angrily', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'React angrily', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).PCloStyle ?? 0) === 4  &&  ((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ((-1)) : ((-2))));
    qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
    (s as any).will_cost = (((s as any).will_cost ?? 0) * ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? (120) : (80))) / 100;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "What? Did you just ' + iif($prostitute['client_behavior'] = 'abusive', 'call me...
    scene.text('"What? Did you just \' + iif($prostitute[\'client_behavior\'] = \'abusive\', \'call me\', \'imply that I\'m\') + \' a whore?" you hiss angrily and take a step back from him.');
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      // TODO-QSP: '"You aren''t? Damn babe... really? Sorry about that. I knew that he was lying to me, when my friend...
    } else {
      scene.text('"Uhm... I...," he stammers, turns around and quickly walks away without saying another word.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    (s as any).cumnostd = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    // TODO-QSP: gs 'money', 'earn', prostitute['payment'], 'cash'
    ((s as any).pro_stats = (s as any).pro_stats ?? {})['unprotected'] = ((s as any).pro_stats['unprotected'] ?? 0) + (1);
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_condom'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_total'] = ((s as any).prostitute['pav_total'] ?? 0) + (1);
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_cooldown'] = ((s as any).prostitute['pav_cooldown'] ?? 0) + (2);
    if (((s as any).pro_mother ?? 0)?.['knows'] === 0  &&  ((s as any).fame ?? 0)?.['pav_prostitute'] > (Math.floor(Math.random() * 101) + 100)  &&  ((s as any).prostitute ?? 0)?.['pav_total'] > 25  &&  ((((s as any).prostitute ?? 0)?.['pav_location'] === 'public'  &&  (Math.floor(Math.random() * 1001) + 0) < ((s as any).fame ?? 0)?.['pav_prostitute'])  ||  (((s as any).prostitute ?? 0)?.['pav_location'] === 'private'  &&  (Math.floor(Math.random() * 2001) + 0) < ((s as any).fame ?? 0)?.['pav_prostitute']))) {
      ((s as any).pro_mother = (s as any).pro_mother ?? {})['knows'] = 1;
    }
    // TODO-QSP: gt 'prostitution_pavlovsk', iif(prostitute['pay_regular'] > -1, 'set_<<pro_rand>>', 'rape')
  } },
  ]);
  scene.build();
}

function enterSet_0(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_walk'] = (((!(Math.floor(Math.random() * 2) + 0))) ? ('pav_residential') : ('pav_complex'));
  // TODO-QSP: gs 'prostitution_pavlovsk', 'travel', $prostitute['pav_walk']
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/private/bj_' + rand(0, 3) + '.mp4`);
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    qspCall(s, 'pain', '', 8, 'head', 'slap');
    qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).prostitute ?? 0)?.['pav_scene'] === 'blowjob') ? (Math.floor(Math.random() * 3) + 2) : (Math.floor(Math.random() * 4) + 3)));
    // TODO-QSP: dynamic text: You walk together to ' + iif($prostitute['pav_walk'] = 'pav_residential', 'his a...
    scene.text('You walk together to \' + iif($prostitute[\'pav_walk\'] = \'pav_residential\', \'his apartment in the residential area\', \'the Five Eight Estate\') + \'. The whole time he verbally abuses you by calling you whore, slut or something like fucktoy and loudly asks you embarrassing questions about your work and live as he grabs or slaps your ass from time to time.');
    scene.text('He pushes you down to your knees, the second you are through the door. "Get to work whore," he commands and whips out his rock-hard cock. You take it into your mouth like the good whore that you are. "Yeah that\'s it." He spits down on your face, before he continues. "Use that filthy mouth-pussy of yours." The verbally abuse continues until he pulls out a few minutes later and suddenly slaps your face hard. "You like that don\'t you?" He slaps you again, before he grabs your head and rams his dick as deep as he can down your throat. "And don\'t say no," he says with his cock buried balls deep into your mouth. "No self-respecting girl would whore herself out like this."');
    qspCall(s, 'arousal', 'bj', (-9), 'prostitution', 'rough', 'deepthroat', 'sub');
  } else {
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 2) + 1);
    // TODO-QSP: dynamic text: You walk together to ' + iif($prostitute['pav_walk'] = 'pav_residential', 'his a...
    scene.text('You walk together to \' + iif($prostitute[\'pav_walk\'] = \'pav_residential\', \'his apartment in the residential area\', \'Five Eight Estate\') + \'. He always stays a few meters in front of you so that it doesn\'t look like you two are walking together. It\'s a nice gesture trying to make sure that it isn\'t to obvious what you two are up to.');
    scene.text('He isn\'t much of a talker and leads you directly to the living room. "Here? Not the bedroom?" you ask as he takes of his jacket.');
    scene.text('"Is that a problem for you?" You shake your head and follow his example. Taking of your clothes piece by piece. He intently watches you undress and compared with other clients he\'s completely comfortable with you setting the pace. You take him by the hand, when he has taken off his clothes as well and walk him towards the couch. First you gently kiss the tip of his penis, before you swirl your tongue around it and softly suck on it. He never complains or tells you what to do. So you go through your routine which starts with a simple blowjob and ends with an impressive deepthroat.');
    qspCall(s, 'arousal', 'bj', (-9), 'prostitution');
  }
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['pav_scene'] !== 'pussy') {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
      qspCall(s, 'prostitution_functions', 'std_check_oral');
    }
    qspGoto(s, 'prostitution_pavlovsk', 's0_facial');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move on to the main course', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 12;
    qspCall(s, 'arousal', 'auto_lube', 'vaginal', 'custom');
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/private/vag_' + rand(0, 2) + '.mp4`);
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      scene.text('"Move your ass to the couch," he shouts, but he doesn\'t even wait for you to comply. His hands push you hard and you can feel his weight on you only two heartbeats after you have landed on the couch. "Gonna ruin that hole," he says and forces his cock completely inside you in one hard push. He laughs as he starts to fuck you hard. "Not much left for me to ruin."');
      (s as any).orgasm_txt = 'It starts between your legs, wanders down your legs and up your spine until your pussy clamps down hard and you moan uncontrollably as your whole body vibrates from the orgasm. "Yeah, cum you filthy slut. I knew that you like it rough."';
      qspCall(s, 'arousal', 'vaginal', (-9), 'prostitution');
    } else {
      scene.text('You lay back against the sofa and spread your legs wide revealing your inviting pussy. "Ready for more?" you ask teasingly and spread your pussy lips with your fingers. You move your hips towards him, when he\'s to careful and takes too much time to enter you. "You don\'t have to be careful," you assure him. "I won\'t break." He nods, pulls out and forcefully shoves his cock back into you. "Yeah, like that," you moan, close your eyes and enjoy the fuck.');
      (s as any).orgasm_txt = 'It starts between your legs, wanders down your legs and up your spine until your pussy clamps down hard and you moan uncontrollably as your whole body vibrates from the orgasm.';
      qspCall(s, 'arousal', 'vaginal', (-9), 'prostitution', 'rough', 'sub');
    }
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.actions([
        { label: 'Get on your knees', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
      qspCall(s, 'prostitution_functions', 'std_check');
    }
    qspGoto(s, 'prostitution_pavlovsk', 's0_facial');
  } },
      ]);
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
        scene.actions([
          { label: 'Let him cum inside the condom', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive'  &&  (Math.floor(Math.random() * 100) + 1) > ((s as any).iif ?? 0)(((s as any).pro_brand ?? 0)?.['text_pubic'] === 'cumslut', 84, 92)) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
    }
    qspGoto(s, 'prostitution_pavlovsk', 's0_internal');
  } },
        ]);
      } else {
        qspCall(s, 'willpower', 'cum_inside', 'self', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('hard') : ('easy')));
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Tell him to pull out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Tell him to pull out', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (((Math.floor(Math.random() * 4) + 0) === 3  ||  ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).pro_brand ?? 0)?.['text_pubic'] === 'cumslut'))  &&  ((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
      qspGoto(s, 'prostitution_pavlovsk', 's0_internal');
    } else {
      qspCall(s, 'prostitution_functions', 'std_check');
      qspGoto(s, 'prostitution_pavlovsk', 's0_facial');
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Let him cum inside you', goto: ['prostitution_pavlovsk', 's0_internal'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterS0Facial(s: GameState, scene: SceneBuilder): void {
  (s as any).facial = ((s as any).facial ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/private/end_facial.mp4`);
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    // TODO-QSP: dynamic text: It's finally over, you think, when he forces you onto your knees and aims his di...
    scene.text('It\'s finally over, you think, when he forces you onto your knees and aims his dick at your face\' + iif(prostitute[\'pav_condom\'] = 1, \' and pulls the condom off.\', \'.\') + \'"Take it slut," he shouts as he furiously rubs his cock until he coats your entire face in cum. "Yeah bitch, that\'s looks really nice on you," he looks at you like an artist who examines his latest masterpiece. Then he suddenly grabs you and pulls you towards the door. "Now get the fuck out," he shouts, opens the door and pushes you out of the apartment.');
    scene.text('"Please, my clothes," you beg. He throws them onto the dirty floor and closes the door without saying another word. You quickly get dressed and...');
    qspCall(s, 'arousal', 'bj', (-6), 'prostitution', 'rough', 'deepthroat', 'sub');
  } else {
    // TODO-QSP: dynamic text: "Can I cum on your face?" He asks shyly. You pull your mouth away from his hard ...
    scene.text(`"Can I cum on your face?" He asks shyly. You pull your mouth away from his hard meat and submissively look up to him. "Of course you can, sweetie," you reply. ' + iif(prostitute['pav_condom'] = 1, 'He takes the condom off and', 'He') + ' doesn't waste a second before he takes his cock into his hand and after a few furious strokes coats your entire face in a huge load. "Thanks ${((s as any).pcs_nickname || '')}, that was great. The bathroom is down the hall. You can clean up there before you leave."`);
    qspCall(s, 'arousal', 'bj', (-6), 'prostitution');
  }
  qspCall(s, 'cum_call', 'face', 'a client');
  qspCall(s, 'arousal', 'end');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    scene.actions([
      { label: '... leave with cum on your face', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Clean up and leave', goto: ['prostitution_pavlovsk', 'end', 'clean'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterS0Internal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/private/end_vag.mp4`);
  qspCall(s, 'arousal', 'vaginal', (-6), 'prostitution', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('rough') : ('')));
  qspCall(s, 'arousal', 'end');
  if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
    if (((s as any).prostitute ?? 0)?.['pav_internal'] === 0  &&  (Math.floor(Math.random() * 100) + 1) > 98) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
      scene.text('He stiffens and pushes his cock deeper inside your pussy and you can suddenly feel warmth flooding your insides. Your eyes grow wide, when you realize what\'s happening. "What the fuck? Did you remove the condom?"');
      if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
        // TODO-QSP: 'He looks confused for a second, pulls out and starts to laugh. "The condom broke you lucky bitch," ...
      } else {
        // TODO-QSP: dynamic text: He looks confused for a second and then a horrified expression takes shape on hi...
        scene.text(`He looks confused for a second and then a horrified expression takes shape on his face. "No, of course not," he pulls out and takes the condom off. "It broke," he holds the empty condom up. "See? I'm so sorry ${((s as any).pcs_nickname || '')}."`);
        scene.text('You sigh and stop him with one gesture of your hand. "It\'s not your fault. Shit happens."');
      }
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
        qspCall(s, 'pain', '', 8, 'head', 'slap');
        scene.text('He stiffens and pushes his cock deeper inside your pussy and you can suddenly feel warmth flooding your insides. Your eyes grow wide, when you realize what\'s happening. "What the fuck? Did you remove the condom?"');
        scene.text('"Yeah I did you stupid cunt," he slaps your face hard. You let out a yelp while he continues, "and that\'s no way to say thank you for receiving my seed you ungrateful whore."');
        // TODO-QSP: '"Thank you," you say rubbing your burning with your hand' + iif($pro_brand['text_pubic'] = 'cumslut...
      } else {
        scene.text('He stiffens and pushes his cock deeper inside your pussy, you can feel his meat pulsate inside you filling the condom.');
      }
    }
  } else {
    if (((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
      scene.text('He stiffens and pushes his cock deeper inside your pussy and you can suddenly feel warmth flooding your insides. Your eyes grow wide, when you realize what\'s happening. "What the fuck? I told you to pull out."');
      // TODO-QSP: 'He slaps your face hard. You let out a yelp while he says, "that''s no way to say thank you for rec...
      scene.text('"Thank you," you say rubbing your burning with your hand."');
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_internal'] === 0  &&  ((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
        // TODO-QSP: 'He stiffens and pushes his cock deeper inside your pussy and you can suddenly feel warmth flooding ...
      }
    }
  }
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    scene.text('Then he suddenly grabs you and pulls you towards the door. "Now get the fuck out," he shouts, opens the door and pushes you out of the apartment.');
    scene.text('"Please, my clothes," you beg. He throws them onto the dirty floor and closes the door without saying another word. You quickly get dressed and...');
  } else {
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, that was great. The bathroom is down the hall. You ca...
    scene.text(`"Thanks ${((s as any).pcs_nickname || '')}, that was great. The bathroom is down the hall. You can clean up there before you leave."`);
  }
  if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0  ||  ((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
    qspCall(s, 'prostitution_functions', 'std_check');
    qspCall(s, 'cum_call', '', '', 'a client');
  }
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    scene.actions([
      { label: '... leave', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Clean up and leave', goto: ['prostitution_pavlovsk', 'end', 'clean'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSet_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_walk'] = ((((s as any).prostitute ?? 0)?.['pav_location'] === 'public') ? ('pav_industrial') : ('pav_residential'));
  // TODO-QSP: gs 'prostitution_pavlovsk', 'travel', $prostitute['pav_walk']
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/bj_' + rand(0, 2) + '.mp4`);
  if (((s as any).prostitute ?? 0)?.['pav_location'] === 'public') {
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 2);
    scene.text('"Come on slut, let\'s go." After several minutes it\'s become clear that you\'re walking towards the outskirts of the industrial area, but he turns right into a small empty street before you can reach the warehouse. He abruptly turns around and points to the ground. "Get on your knees," he tells you unbuckling his belt at the same time. He opens his mouth again, when you didn\'t comply with his wishes. "I paid, so do what I say you piece of shit," he growls and lifts his hand ready to strike. You quickly drop down kneeling on the hard uncomfortable asphalt and submissively open your mouth to not give him a reason to hit you. "Good slut, somebody trained you well." He aligns his cock with your mouth and slowly moves his hips forward until his pubic hairs tickle your nose. "I\'ll fuck you so hard, that you\'re going to puke," he predicts, grabs your head with both hands and uses your mouth like a pussy.');
  } else {
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 2) + 1);
    // TODO-QSP: dynamic text: It's obvious that he's a' + iif(prostitute['pav_regular'] = 1, ' still ', ' ') +...
    scene.text('It\'s obvious that he\'s a\' + iif(prostitute[\'pav_regular\'] = 1, \' still \', \' \') + \'bit nervous as you walk to his home \' + iif(prostitute[\'pav_regular\'] = 1, \'even if it isn\'t the first time that he bought your services\', \'in the residential area\') + \'. He talks a lot, tells you about his life, his work and seems fine with you saying only the occasional \'yes\' and \'OK\'. "Uhm...," he murmurs when the apartment door shuts behind the two of you and he looks to your for guidance for what to do next. You grab his arm and lead him to the bedroom at the end of the hallway, sit down on the bed, pull out his cock and suck the entire length of his cock into your mouth. He doesn\'t say a word and you only stop your masterful blowjob to undress.');
  }
  qspCall(s, 'arousal', 'bj', (-9), 'prostitution', 'deepthroat', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('rough') : ('')), ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('exhibitionism') : ('')));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 12;
    qspCall(s, 'arousal', 'auto_lube', 'vaginal', 'custom');
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/vag_' + iif($prostitute['pav_location'] = 'public', rand(0, 3), rand(0, 7)) + '.mp4`);
    if (((s as any).prostitute ?? 0)?.['pav_location'] === 'public') {
      qspCall(s, 'pain', '', 10, 'asscheeks', 'slap');
      scene.text('You suck in air, when he finally relents and pulls his cock far enough out of your mouth that you can take more than one quick breath which was all you could do in the last ten minutes. He grabs you by the hip, turns you around and slams your body on the hood of a nearby old car. "You should be glad that I pay you. Rapemeat like you doesn\'t deserve to be treated this nicely." he tells you coldly before he forces his cock deep inside your cunt. His hand slaps your ass with all the strength he can muster as he brutally shoves his tool into your snatch. "Fuck that hurts," you say and in response he slaps your ass again. "What was that?"');
      scene.text('"Thanks for fucking me," you lie and swallow a bunch of insults you wish you could say instead.');
      (s as any).orgasm_txt = 'You don\'t want to, but you can\'t stop the orgasm that approaches quickly. It\'s humiliating to cum like this pressed against an old rusty car in the middle of the street, but you uncontrollably moan like a bitch in heat, when wave after wave of pleasure floods every cell of your body.';
      qspCall(s, 'arousal', 'vaginal', (-9), 'prostitution', 'rough', 'exhibitionism', 'sub');
    } else {
      // TODO-QSP: dynamic text: "Did anybody ever tell you how beautiful you are?" he says as he slowly eases hi...
      scene.text('"Did anybody ever tell you how beautiful you are?" he says as he slowly eases his cock inside you while caressing your body with his hands. He moves a single finger over your lips, down your neck and between your breasts down to your \' + iif($pro_brand[\'text_pubic\'] = \'cumslut\', \'cumslut tattoo\', \'pussy\') + \'. "You aren\'t ashamed of what you are." It isn\'t a question, it\'s a statement of fact. "I love that. Without girls like you men like me would be totally alone." You look around in the bedroom and can\'t see any pictures of a wife, kids or any other family or friends. "Everybody needs somebody," you say smiling up at him, before he starts to move his hips. His movements are slow at first, but his confidence grows with every thrust until he fucks you like the whore that you are.');
      qspCall(s, 'arousal', 'vaginal', (-9), 'prostitution');
    }
    qspCall(s, 'stat', '');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
      scene.actions([
        { label: 'Let him cum inside the condom', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive'  &&  (Math.floor(Math.random() * 100) + 1) > ((s as any).iif ?? 0)(((s as any).pro_brand ?? 0)?.['text_pubic'] === 'cumslut', 84, 92)) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
    }
    qspGoto(s, 'prostitution_pavlovsk', 's1_end');
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'cum_inside', 'self', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('hard') : ('easy')));
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him to pull out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him to pull out', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (((Math.floor(Math.random() * 4) + 0) === 3  ||  ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).pro_brand ?? 0)?.['text_pubic'] === 'cumslut'))  &&  ((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
      qspGoto(s, 'prostitution_pavlovsk', 's1_end');
    } else {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = (-1);
      qspCall(s, 'prostitution_functions', 'std_check');
      qspGoto(s, 'prostitution_pavlovsk', 's1_end');
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Don\'t say anything', goto: ['prostitution_pavlovsk', 's1_end'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterS1End(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/end.mp4`);
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    qspCall(s, 'arousal', 'vaginal', (-6), 'prostitution', 'rough', 'exhibitionism', 'sub');
  } else {
    qspCall(s, 'arousal', 'vaginal', (-6), 'prostitution');
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).prostitute ?? 0)?.['pav_location'] === 'public') {
    scene.text('He roughly pushes your body against the car with every thrust and you know he\'s close, when his movements become more erratic while he pants loudly. "Damn... take my cum bitch."');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
      if (((s as any).prostitute ?? 0)?.['pav_internal'] === 0  &&  (Math.floor(Math.random() * 100) + 1) > 98) {
        ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
        scene.text('"Yes, fill me up," you encourage him, because you know he\'s wearing a condom, but something doesn\'t feel right. Is he still wearing a condom?');
        // TODO-QSP: dynamic text: He laughs, when he pulls out his dick. "You should be careful what you wish for,...
        scene.text('He laughs, when he pulls out his dick. "You should be careful what you wish for," he throws a broken condom on the car next to your head. "Your shitty condom broke.\' + iif($pro_brand[\'text_pubic\'] = \'cumslut\', \' But maybe you already knew that... didn\'t you cumdump?" He asks and shoves his hand between your the car and your belly. "You want to get pregnant, don\'t you? I bet you manipulated it," he taunts you as he slowly caresses your \'cumslut\' tat until he \', \'." He says and \') + \'pulls up his jeans.');
      } else {
        if (((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
          scene.text('"Yes, fill me up," you encourage him knowing he\'s wearing a condom. But he pulls out instead and you wait a few seconds expecting to feel his warm seed on your butt, when he without warning pushes back inside and you can feel his cock throb in your pussy. "I knew it, a filthy cumdump like you wants it inside. Why do you insist on the condom in the first place?" he taunts you, when his finished unloading into your unwilling cunt.');
          // TODO-QSP: dynamic text: "What? Why did you cum inside me? Did you really believe I meant it?" you shout ...
          scene.text('"What? Why did you cum inside me? Did you really believe I meant it?" you shout angrily, but he grabs you roughly by the shoulder and turns you around. \' + iif($pro_brand[\'text_pubic\'] = \'cumslut\', \'"Really? You\'re going to complain, when you have a \'cumslut\' tat?"\', \'"Shut up I paid for it and you said I could. So stop complaining."\') + \' he says, before he takes a step back and pulls his jeans up.');
        } else {
          scene.text('"Yes, fill me up," you encourage him, because you know he\'s wearing a condom.');
          // TODO-QSP: '"So you want me to take the condom off?" he taunts you and for a second you fear he would do that, ...
        }
      }
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
        scene.text('"Please, don\'t cum inside my," you plead as he presses your face with his hand against the cold metal of the car. He doesn\'t show any sign of pulling out and a few seconds later you can feel his cock twitching in your pussy. "Yes, take it," he growls and forces his cock one last time inside you.');
        scene.text('"Why did you do that?" you ask weakly when he takes a small step back.');
        // TODO-QSP: iif($pro_brand['text_pubic'] = 'cumslut', 'He points at your tattoo. "That''s why, we both know you ...
      } else {
        if (((s as any).prostitute ?? 0)?.['pav_internal'] === -1) {
          scene.text('"Please, don\'t cum inside my," you plead as he presses your face with his hand against the cold metal of the car. To your surprise he actually listens to you. He let\'s go, takes a step back and shots his load all over your naked ass. "What a waste," he says as he takes his dick and spreads the cum around on your ass.');
        } else {
          if (((s as any).prostitute ?? 0)?.['pav_internal'] === 0  &&  ((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
            scene.text('"Yes, fill me up," you encourage him. This takes him over the edge and his throbbing cock fills your pussy with his warm seed.');
            // TODO-QSP: iif($pro_brand['text_pubic'] = 'cumslut', '"You made a good choice with your tat. Maybe you should a...
          }
        }
      }
    }
    scene.text('"See ya slut," is the last thing he says to you before he walks away.');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0  ||  ((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
      qspCall(s, 'prostitution_functions', 'std_check');
      qspCall(s, 'cum_call', '', ((((s as any).prostitute ?? 0)?.['pav_internal'] === -1) ? ('butt') : ('vaginal')), 'a client');
    }
  } else {
    // TODO-QSP: dynamic text: "Can I cum on you?" He asks shyly as his' + iif(prostitute['pav_condom'] = 1, ' ...
    scene.text('"Can I cum on you?" He asks shyly as his\' + iif(prostitute[\'pav_condom\'] = 1, \' condom covered \', \' \') + \'cock moves rapidly in and out of your cunt. Most men wouldn\'t ask, some would even cum inside you against your will. It\'s sweet and a bit sad that not more men are like him. "Of course you can sweetie."');
    // TODO-QSP: dynamic text: "Thanks...," he tries to say, but isn't able to utter a whole sentence while his...
    scene.text('"Thanks...," he tries to say, but isn\'t able to utter a whole sentence while his cum lands on your \' + iif($pro_brand[\'text_pubic\'] = \'cumslut\', \'cumslut tattoo.\', \'labia.\') + \' "Great," he murmurs as his body lands exhausted next to you on the bed. "That was really great."');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1  &&  (Math.floor(Math.random() * 100) + 1) > 98) {
      scene.text('"Yeah it was," you agree, but something catches your eye, when you sit up. The condom doesn\'t look right. You pick it up and see that\'s broken. Good thing he came outside, you think and hope that he was clean and didn\'t infect you with a STD.');
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
        qspCall(s, 'prostitution_functions', 'std_check');
      }
    }
    scene.text('He offers you to use the bathroom before you go and you gladly accept.');
    qspCall(s, 'cum_call', '', ((((s as any).prostitute ?? 0)?.['pav_internal'] === -1) ? ('labia') : ('vaginal')), 'a client');
  }
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    scene.actions([
      { label: 'Continue', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Clean up and leave', goto: ['prostitution_pavlovsk', 'end', 'clean'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSet_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_walk'] = ((((s as any).prostitute ?? 0)?.['pav_location'] === 'public') ? ('pav_commercial') : ('pav_complex'));
  // TODO-QSP: gs 'prostitution_pavlovsk', 'travel', $prostitute['pav_walk']
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/bj_' + iif($prostitute['pav_location'] = 'public', rand(0, 1), rand(0, 3)) + '.mp4`);
  qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') ? (Math.floor(Math.random() * 2) + 1) : (Math.floor(Math.random() * 3) + 2)));
  if (((s as any).prostitute ?? 0)?.['pav_location'] === 'public') {
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
      scene.text('"I don\'t have much time," he explains as you walk next to him in Pavlovsk\'s commercial area. "I need to get back to work in a few minutes," he adds as he pushes open a backdoor to one of the small office buildings.');
      scene.text('"You want to do it here?" you ask skeptical. "Won\'t we get caught?"');
      scene.text('He shakes his head and walks through another door into an empty hallway. "Nobody comes here except for the clinic lady and she won\'t be here until tomorrow," he explains while he unbuckles his belt and drops his pants. "Take of your shirt. I want to see your tits."');
      scene.text('You take another look around, before you surrender to your fate, take of your top and get on your knees. "I don\'t need some fancy shit, just get me off quickly, before my break ends."');
      scene.text('"Roger that. One efficient blowjob coming right up," you say with a wink.');
      qspCall(s, 'arousal', 'bj', (-9), 'prostitution', 'exhibitionism');
    } else {
      scene.text('"Move your ass slut. I don\'t have much time," he says angrily as you follow him to the commercial district. "My fucking boss wants me back in the office in a few minutes. She\'s such a retard. If the company goes to hell it\'s her fault...," he rants. You stop listening after a few minutes and silently walk beside him as he goes on and on about his job, his boss, his colleagues and everything else that is getting on his nerves. He suddenly grabs your arm and pulls you through the back entrance into one of the small office buildings.');
      scene.text('"Here?" you ask unsure, but nobody seems to be around.');
      // TODO-QSP: dynamic text: "Of course here. I can hardly take you up to my office," he replies annoyed and ...
      scene.text('"Of course here. I can hardly take you up to my office," he replies annoyed and pushes you down to your knees. "And now do what you\'re told and get to it." You kneel down on the hard concrete floor and pull down his pants. "Take of your top, I want to see your tits," he commands and you obey just like he wants. You stroke his cock a few times to get it hard and lick the entire length while you submissively look into his eyes. "Why can\'t \' + iif(rand(0, 1), \'my boss\', \'stupid Masha in accounting\') + \' know her place like you do?" You don\'t think, he really expects an answer from you. So, you continue to lavish his cock with in attention and tease the tip with your experienced tongue, when he adds. "I asked you a question..."');
      scene.text('You look up and the serious expression on his face tells you, yes he seriously wants an answer. You let his cock slip out of your mouth with a naughty plop. "They probably never experienced how good it feels to be told what to do?" you say unsure if that\'s what he wants to hear.');
      scene.text('"Good answer slut." He wiggles his hips to make the cock dance in front of your face. "Get back to it."');
      qspCall(s, 'arousal', 'bj', (-9), 'prostitution', 'exhibitionism', 'sub');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'a client', Math.floor(Math.random() * 26) + 30);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/end.mp4`);
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
      scene.text('You lavish his dick in attention and give everything you got. Not to show of your skill, but to get him off as quickly as possible. And your treatment works. Only a few minutes later you can see the signs that he\'s close to the edge. You pull your head back, take the cock in your hand and give it a few hard strokes. "Ready to cum?"');
      // TODO-QSP: dynamic text: "Oh god yes," he says moaning like a girl. You close your lips around the sensit...
      scene.text('"Oh god yes," he says moaning like a girl. You close your lips around the sensitive tip and he cums. Hot seed floods \' + iif(prostitute[\'pav_condom\'] = 1, \'the condom\', \'your mouth\') + \' with hot salty seed.');
    } else {
      // TODO-QSP: 'You softly massage his balls with your hand as your head bobs up and down on his shaft. Your other ...
    }
    scene.text('Satisfied he pulls up his pants. "Shit, I have to go," he says and hastily walks away after checking the time on his phone.');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
      qspCall(s, 'prostitution_functions', 'std_check_oral');
    }
    qspCall(s, 'arousal', 'bj', (-6), 'prostitution', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } },
    ]);
  } else {
    scene.text('You hope nobody you know sees you, when you walk through the courtyard of the Five Eight Estate, where your parents live.');
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.text('"It\'s right there," your client says, pointing at one of the apartment blocks at the other side of the courtyard. At least he doesn\'t live in the same building as your parents.');
      scene.text('"Do you want something to drink?" he asks you as he unlocks the door to his apartment.');
      // TODO-QSP: dynamic text: "That's very considerate of you to ask," you answer. ' + iif(pcs_hydra < 60, '"S...
      scene.text('"That\'s very considerate of you to ask," you answer. \' + iif(pcs_hydra < 60, \'"Some water would be nice."\', \'"But no, I\'m fine thanks."\') + \' He leads you down a small hallway into the kitchen, where he pulls a beer from the nearly empty fridge\' + iif(pcs_hydra < 60, \' and hands you a glass of water.\', \'.\') + \' The furniture and kitchen appliances look old, even older than your parents and it\'s painfully obvious that he lives alone and probably is unemployed. The two of you spend several minutes making small talk like talking about the weather and you get the feeling this is more important to him then what will follow in the bedroom. There are some guys like him who hire you just to have some form of human contact.');
      if (((s as any).pcs_hydra ?? 0) < 60) {
        (s as any).pcs_hydra = 100;
      }
      scene.text('But you didn\'t get paid to have a conversation and after a few more minutes you move into the bedroom. "Can you do it slowly?" is the only thing he asks of you for the rest of the time and one sensual striptease later he lies down on the bed to indulge in your masterful blowjob.');
      qspCall(s, 'arousal', 'striptease', 5);
    } else {
      qspCall(s, 'pain', '', 8, 'slap', 'head');
      scene.text('"What\'s wrong? Why are you so nervous?" he asks you annoyed.');
      scene.text('"I\'m not, everything is fine," you reply but immediately regret the answer, when he turns around and slaps you hard. Pain flares up on your cheek. You stumble and nearly fall to the ground.');
      scene.text('"Stop lying to me bitch. I owe you for the next hour, remember that," he growls.');
      scene.text('Owe you? That\'s ludicrous. He only rented your services for a short time and doesn\'t owe you. You\'re not his slave. But you bite your tongue and swallow the truth. An honest responds would probably earn you another slap in the face. Even returning the money and walking away isn\'t an option. The scene he would make would draw the attention of everyone in the area. "I\'m sorry, I didn\'t want to annoy you with my problems. They aren\'t worthy of your attention," you reply meekly." He looks speechless for a moment. Did you say the wrong thing again?');
      scene.text('"You\'re right. You really aren\'t worthy of my concern. Why should I give a shit about some fucked-up whore."');
      scene.text('A few minutes later you\'re already undressed, kneeling on his bed, his cock down your throat. "Suck it deeper bitch," he commands as you try your best to fulfill his wish. "Yes, just like that, good girl," he praises you as you manage to swallow it completely. "We finally found something that is worthy of somebodies attention. Didn\'t we?"');
      scene.text('You pull your head up, leaving a sloppy trail of saliva on his meat. "Yes, we did," you say with the best fake smile you can muster.');
    }
    qspCall(s, 'arousal', 'bj', (-9), 'prostitution', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') ? ('') : ('deepthroat')), ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') ? ('') : ('sub')));
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 12;
    qspCall(s, 'arousal', 'auto_lube', 'vaginal', 'custom');
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/vag_' + iif($prostitute['client_behavior'] = 'nice', rand(0, 2), rand(3, 5)) + '.mp4`);
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
      (s as any).orgasm_or = 'no';
      // TODO-QSP: dynamic text: You position yourself on top of him and guide his' + iif(prostitute['pav_condom'...
      scene.text('You position yourself on top of him and guide his\' + iif(prostitute[\'pav_condom\'] = 1, \' condom covered \', \' \') + \'dick into your inviting sex. His hand moves up and tenderly caress your breasts. "Perfect," he whispers as his hands slowly wander down your sides.');
      scene.text('You send him an honest smile and increase the pace, really jumping up and down on his cock. It\'s so much easier to give it all you\'ve got when they manage to behave like a normal human being. After a few more minutes of hard fucking your muscles get tired and you take a break for a moment only rotating your hips to keep his cock entertained. "How about we switch positions? Me on all fours?" He nods and you get on all fours presenting your ass.');
      scene.text('He takes his time as explores your backside with his hands. "Even more perfect," he says and you unexpectedly feel wetness on your right ass-cheek. He placed a loud smacker on your ass.');
      scene.text('"Did you just kiss my ass?" you ask and turn around to see him grinning like a little boy caught with his hand in the cookie jar. "I couldn\'t help it. It\'s just too cute."');
      scene.text('You laugh and wiggle your ass. "It\'s not often that somebody says my ass is cute."');
      scene.text('"Then let me repeat that. It... is... cute," he emphasizes every word and kisses your ass again in the pauses between every word.');
    } else {
      qspCall(s, 'pain', '', 10, 'asscheeks', 'slap');
      qspCall(s, 'pain', '', 10, 'asscheeks', 'slap');
      qspCall(s, 'pain', '', 10, 'asscheeks', 'slap');
      scene.text('He quickly moved on from the blowjob. Demanding from you to get on all fours. "Yes, present me your fat ass," he berates you as you stick out your bum. He grabs your tender flesh with two rough hands and pulls you ass back to bury his meat into you. His hands violently knead your flesh. "I think we again found something worthy of attention," he says and withdraws one hand only to slap your ass hard. You yelp, but that only makes him laugh. "We both know that you deserve it bitch... And now start counting."');
      scene.text('"What?" you shout not sure you heard him correctly.');
      scene.text('"Count. I want to know how many slaps you took before I cum," he shouts and slaps your behind again.');
      scene.text('"Three," you scream and wince, when his hand connects with your flesh again.');
      scene.text('"Four...," you continue as he starts an unrelenting assault. But four isn\'t enough. He smacks your ass hard again and again and again until your flesh turns blazing red.');
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        if (((s as any).pcs_horny ?? 0) < 100) {
          (s as any).pcs_horny = 100;
        }
        (s as any).orgasm_or = 'custom';
        (s as any).orgasm_txt = '"Thirty-four...," you scream as he hits you again, but this time the result isn\'t pain, but an explosion of pleasure, when his hard slap triggers an intense orgasm. Your eyes roll back and for a moment only his hard cock in your pussy and the pleasurable pain exist. The strength in your arms vanishes and your upper body falls down onto the bad and only his strong hands keep your ass aligned with his cock. "Fucking painslut. I knew it from the moment I saw you," he taunts you sounding immensely satisfied with himself.';
      } else {
        (s as any).orgasm_or = 'no';
        (s as any).pcs_horny = 0;
      }
    }
    qspCall(s, 'arousal', 'vaginal', (-9), 'prostitution', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('rough') : ('')), ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('sub') : ('')));
    qspCall(s, 'stat', '');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
      scene.actions([
        { label: 'Let him cum inside the condom', goto: ['prostitution_pavlovsk', 's2_end'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'cum_inside', 'self', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('hard') : ('easy')));
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him to pull out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him to pull out', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspGoto(s, 'prostitution_pavlovsk', 's2_end');
  } },
        ]);
      }
      scene.actions([
        { label: 'Don\'t say anything', goto: ['prostitution_pavlovsk', 's2_end'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterS2End(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/end.mp4`);
  qspCall(s, 'arousal', 'vaginal', (-6), 'prostitution', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('rough') : ('')), ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('sub') : ('')));
  qspCall(s, 'arousal', 'end');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
    scene.text('"Can I cum on your cute butt?" he asks as his movements become more erratic by the second.');
    // TODO-QSP: dynamic text: "Of course," you reply immediately and not a second too soon. He withdraws his c...
    scene.text('"Of course," you reply immediately and not a second too soon. He withdraws his cock\' + iif(prostitute[\'pav_condom\'] = 1, \', takes the condom off \', \' \') + \'and shoots his cum on your backside. "Thanks, I really needed that.');
    scene.text('You look over your shoulder at the mess he made on your ass and say with a cute wink. "Your welcome."');
    scene.text('"The bathroom is on the other end of the hallway, if you want to freshen up before you go," he says before getting of the bed to collect his clothes.');
  } else {
    qspCall(s, 'pain', '', 10, 'asscheeks', 'slap');
    qspCall(s, 'pain', '', 10, 'asscheeks', 'slap');
    qspCall(s, 'pain', '', 10, 'asscheeks', 'slap');
    // TODO-QSP: dynamic text: "' + iif(rand(0, 1) = 1, 'Fifty-two', 'Forty-four') + '," you cry out. The pain ...
    scene.text('"\' + iif(rand(0, 1) = 1, \'Fifty-two\', \'Forty-four\') + \'," you cry out. The pain is fucking unbearable.');
    scene.text('"Had enough?" he asks and you can\'t manage to lie to him. You need it to stop. "Yes," you sob. "Please, no more."');
    // TODO-QSP: dynamic text: "Probably the first honest thing you said today," he says chuckling. "I bet it h...
    scene.text('"Probably the first honest thing you said today," he says chuckling. "I bet it hurts. Let me put on some ointment. He pulls out\' + iif(prostitute[\'pav_condom\'] = 1, \', tears the condom off \', \' \') + \'and sprays cum all over your butt. "Does this feel better?" he asks you as he distributes the cum with his cock all over your burning cheeks.');
    scene.text('"No," you sob and crawl away from him. He doesn\'t stop you, when you put your clothes back on and...');
  }
  qspCall(s, 'cum_call', 'butt', 'a client');
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    scene.actions([
      { label: '... flee out of the apartment', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Clean up and leave', goto: ['prostitution_pavlovsk', 'end', 'clean'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSet_3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pro_temp = Math.floor(Math.random() * 3) + 0;
  if (((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_walk'] = 'pav_residential';
  // TODO-QSP: gs 'prostitution_pavlovsk', 'travel', $prostitute['pav_walk']
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/bj_${((s as any).pro_temp || '')}.mp4`);
  qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') ? (Math.floor(Math.random() * 3) + 2) : (Math.floor(Math.random() * 4) + 3)));
  if (((s as any).prostitute ?? 0)?.['pav_location'] === 'public') {
    if ((!((s as any).pro_temp ?? 0))) {
      qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).PCloStyle ?? 0) === 4) ? (2) : (1)));
    }
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
      // TODO-QSP: dynamic text: "My car is right over there," he says pointing to a single car in an empty parki...
      scene.text('"My car is right over there," he says pointing to a single car in an empty parking lot on the edge of the residential area. He opens the door on the \' + iif(pro_temp = 0, \'driver\', \'passenger\') + \' side, but he stops you from \' + iif(pro_temp = 0, \'going around the car to the passenger side.\', \'getting inside the car.\') + \' "No, we don\'t need to drive anywhere. We can do it here."');
      // TODO-QSP: '"Here? In public?" you ask skeptical' + iif(pro_temp = 0, ', but go back to him.', '.')
      scene.text('"Sure, why not?" He points to the door. With the door open nobody will see what\'s going on."');
      scene.text('You take a look around and shake your head. "But there\'s a road behind us. We will be completely exposed."');
      scene.text('"No, no." He pulls down his pants. "Nobody drives on that road," he tries to reassure you. "We can debate this the whole day if you want." He suddenly pulls down his pants in one quick move. "Or you can get down from your high horse and down to your knees and get it over with. The faster you get me off the faster you\'re out of here."');
      scene.text('You resign to your fate and squat down in front of him. He paid and you accepted. If he wants to get sucked of in public there\'s nothing you can do about it. Judging by how hard he is, this turns him on immensely and it probably was his plan all along.');
      if ((!((s as any).pro_temp ?? 0))) {
        scene.text('"You need to stop," he says sounding anxious, but his warning comes too late, when a car honks behind you several times. "Shit, they saw us," he explains the obvious. Should you stop? You ask yourself for a moment, but make the decision not to. You can\'t change what happened and stopping now won\'t help anybody.');
      }
    } else {
      scene.text('"My car is right over there," he says pointing to a single car in an empty parking lot on the edge of the residential area. But when you get there, he doesn\'t open the door instead he pulls down his pants and reveals his hard cock to the world.');
      scene.text('"Uhm... here?" you asks shocked and take a look around. There are houses and two streets. "I can\'t do it here. Everybody can see us."');
      scene.text('He rolls his eyes and opens the driver side door to grant you some cover. "Satisfied? Now we can\'t be seen."');
      scene.text('You sigh and look behind you to the other road. Nobody drives on that street, most take the one near the houses. "Fine," you tell him and squat down in front of him.');
      scene.text('"Are you wet?" he asks with a smirk on his face as you lick the entire length of his dick. "Does it turn you on that someone could see what a slut you are?"');
      // TODO-QSP: dynamic text: "No, of course not," you say' + iif(pcs_horny < 40, ' and your dry pussy agrees ...
      scene.text('"No, of course not," you say\' + iif(pcs_horny < 40, \' and your dry pussy agrees with you.\', \', but your wet pussy disagrees with you.\') + \' Sucking his cock into your mouth shuts him up for now and he has to grab the passenger side door to steady himself, when your talented tongue works her magic.');
      if ((!((s as any).pro_temp ?? 0))) {
        scene.text('A car honks behind you several time and your client suddenly laughs. Your eyes shift upwards and you can see giving a thumps up to somebody. His cock slips out of your mouth. "What the fuck? Why didn\'t you warn me?"');
        scene.text('He grins. "Oh come on, they only saw your back. If somebody has a reason to complain, it would be me. They saw my face." You mull his words and respond with a shrug. He\'s right. They only saw your back, you agree and suck his cock back into your hot wet hole.');
      }
    }
    qspCall(s, 'arousal', 'bj', (-9), 'prostitution', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'a client', Math.floor(Math.random() * 26) + 30);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/end.mp4`);
    // TODO-QSP: 'He draws in a sharp breath and his eyes close, when you sensually suck on the head out of his penis...
    // TODO-QSP: iif($prostitute['client_behavior'] = 'nice', '"Thanks for doing this,"', '"Good job bitch. We need t...
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
      qspCall(s, 'prostitution_functions', 'std_check_oral');
    }
    qspCall(s, 'arousal', 'bj', (-6), 'prostitution', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } },
    ]);
  } else {
    (s as any).orgasm_or = 'no';
    scene.text('One of his strong arms grabs you the instant you walk into the door of his house in the residential area. You nearly stumble and fall as he roughly pulls you into the bedroom. "Undress and get on your knees," he tells you with a stern and commanding voice.');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
      // TODO-QSP: gs 'money', 'earn', 100 * rand(4, 6), 'cash'
      scene.text('You obey, but when you pull out the condom, he shakes his head. "No condom, I need to feel you raw."');
      scene.text('"No, no... we agreed on a condom," you insist and try to get up, but he pushes you back down. "Stay there," he commands you as he picks up his pants and pulls out a few banknotes. "Is this enough?" he shouts angrily and throws them into your face, before grabbing your head and forces his dick between your lips. "I have paid, so do your job whore."');
      scene.text('He shouldn\'t be able to just throw money in your face and expect that it makes it OK, but what can you do except to do what he said... to do your job.');
    } else {
      scene.text('You paint a smile on your face and kneel in front of him, looking up at him like a submissive bitch. "Yeah, that\'s a good look for you, now swallow my cock."');
    }
    scene.text('Opening your mouth wide to avoid scraping his shaft with your teeth, you shove your tongue under his cock and let inch after inch disappear down your throat. In the next minute you switch between different techniques to keep him happy. Sometimes you concentrate your effort on his balls, sucking softly on one of them while your hands stroke his cock or you lick the entire length of him.');
    qspCall(s, 'arousal', 'bj', (-9), 'prostitution', 'rough', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Follow his lead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).orgasm_or = 'custom';
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_condom'] = 0;
    }
    qspCall(s, 'arousal', 'auto_lube', 'vaginal', 'custom');
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/vag_' + rand(0, 1) + '.mp4`);
    scene.text('He suddenly rips his cock free from your hole, grabs you by the arms and pushes you onto the bed. You let out a yelp of surprise, but he doesn\'t care and instead roughly spreads your legs and forces his member into you. "I will fuck a child into you," he says.');
    scene.text('You want to say something, respond to what he said, but he never gives you a chance. It\'s like his cock pierces through your whole body and fucks every thought out of your brain. His movements are an unending assault on your sanity as his rough but skillful thrusts trigger small explosions of pleasure inside your pussy. You can only hold on to your legs, enjoy the ride and moan like a bitch in heat ready to be bred.');
    (s as any).orgasm_txt = 'Your eyes roll back into your head and you eyes flutter shut, when you finally orgasm. But he doesn\'t seem to be close. His stamina is insane and the constant stimulation of your g-spot is already pushing you towards your next orgasm only seconds after your first one ended.';
    qspCall(s, 'arousal', 'vaginal', (-20), 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him do whatever he wants', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).orgasm_or = 'custom';
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/end.mp4`);
    (s as any).orgasm_txt = 'The world doesn\'t exist anymore. It has transformed into a unrecognizable red haze of lust, when he finally unloads his load into your young womb.';
    qspCall(s, 'arousal', 'vaginal', (-6), 'prostitution', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('rough') : ('')));
    qspCall(s, 'arousal', 'end');
    scene.text('"Stay like this," he tells you as he pulls out and your orgasm finally ends and it\'s like a floodgate has been opened and your consciousness flows back into your brain.');
    scene.text('"What?" you ask still confused by your mind-blowing orgasm while his eyes are fixed on the cum leaking out of your hole.');
    scene.text('"Somebody is responsive again," he say with a satisfied smirk. "When you feel up to it, you can get dressed and leave. Your job here is done," he leans closer and pushes some of the cum with his finger back inside. "And mine as well."');
    qspCall(s, 'cum_call', '', '', 'a client');
    qspCall(s, 'prostitution_functions', 'std_check');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSet_4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  if (((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') ? (Math.floor(Math.random() * 2) + 1) : (Math.floor(Math.random() * 4) + 3)));
  if (((s as any).loc ?? 0) === 'pav_commcenter'  ||  ((s as any).loc ?? 0) === 'pav_park') {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).loc = 'pav_residential';
    (s as any).loc_arg = '';
  }
  if (((s as any).prostitute ?? 0)?.['pav_scene'] === 'blowjob') {
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/public/bj_' + rand(0, 2) + '.mp4`);
    // TODO-QSP: 'He turns into a small alley, but he doesn''t head towards one of the houses. Instead he pulls you t...
    scene.text('"Really? Here? Behind a dumpster?" you ask wrinkling your nose. "Can\'t we go anywhere else? Don\'t you have a house or an apartment we could go to?"');
    // TODO-QSP: iif($prostitute['client_behavior'] = 'nice', 'He shakes his head. "My wife and kids are at home, we ...
    qspCall(s, 'arousal', 'bj', (-9), 'prostitution');
    scene.actions([
      { label: '... suck him dry', handler: (st: GameState) => {
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
      qspCall(s, 'prostitution_functions', 'std_check_oral');
    }
    qspGoto(s, 'prostitution_pavlovsk', 's4_swallow');
  } },
    ]);
  } else {
    (s as any).orgasm_or = 'no';
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/public/vag_' + rand(1,  2) + '.mp4`);
    qspCall(s, 'arousal', 'auto_lube', 'vaginal', 'custom');
    scene.text('He turns into a small alley, but he doesn\'t head towards one of the houses. Instead he pulls you through a huge gap in a chain-link fence. "What are you doing?" You ask, when he pushes you against the wall and tugs on his pants to free his cock.');
    // TODO-QSP: '"I can''t wait anymore, you''re too fucking hot. We need to do it right here, right now," he hisses...
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1  &&  (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice'  ||  (Math.floor(Math.random() * 100) + 1) < ((s as any).iif ?? 0)(((s as any).pro_brand ?? 0)?.['text_pubic'] === 'cumslut', 84, 92))) {
      scene.text('"Please, at least use the condom," you beg even if you\'re sure that he has no self-control left. There\'s nothing else you could do anyway. So you close your eyes resigning to your fate, when he suddenly stops his movements. "Fuck...," he swears loudly, but when his cock appears back between your legs it\'s wearing the condom.');
    } else {
      scene.text('"Please, at least use the condom," you beg even if you\'re sure that he has no self-control left. There\'s nothing else you could do anyway. So you close your eyes resigning to your fate. He doesn\'t care as you predicted. Instead his dick forces himself into your unprotected pussy.');
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_condom'] = 0;
    }
    scene.text('His movements are rough, hectic and reminds you of an mindless animal in heat. He won\'t last long and your ordeal will be over in a minute or two.');
    qspCall(s, 'arousal', 'vaginal', (-1));
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
      scene.actions([
        { label: 'Let him cum inside the condom', goto: ['prostitution_pavlovsk', 's4_internal'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'cum_inside', 'self', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('hard') : ('easy')));
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him to pull out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him to pull out', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (((Math.floor(Math.random() * 4) + 0) === 3  ||  ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).pro_brand ?? 0)?.['text_pubic'] === 'cumslut'))  &&  ((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
      qspGoto(s, 'prostitution_pavlovsk', 's4_internal');
    } else {
      qspCall(s, 'prostitution_functions', 'std_check');
      qspGoto(s, 'prostitution_pavlovsk', 's4_swallow');
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Don\'t say anything', goto: ['prostitution_pavlovsk', 's4_internal'] },
      ]);
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterS4Swallow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'a client', Math.floor(Math.random() * 26) + 30);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/public/end_bj.mp4`);
  // TODO-QSP: 'At least it''s over quickly. He ' + iif($prostitute['pav_scene'] = 'pussy', 'only manages to fuck y...
  // TODO-QSP: 'The second he''s finished he rips his cock free and stuff it inside his pants ' + iif(prostitute['p...
  if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
  }
  qspCall(s, 'arousal', 'bj', (-3), 'prostitution');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterS4Internal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/public/end_vag.mp4`);
  qspCall(s, 'arousal', 'vaginal', (-1), 'prostitution', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('rough') : ('')));
  qspCall(s, 'arousal', 'end');
  scene.text('"That\'s what I\'m talking about," he says more to himself than to you while he buries his cock balls deep inside you.');
  if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
    if (((s as any).prostitute ?? 0)?.['pav_internal'] === 0  &&  (Math.floor(Math.random() * 100) + 1) > 98) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
      scene.text('You can feel his cock twitching inside your snatch as he unloads everything he has inside the condom... But something doesn\'t feel right, when warmth floods your insides. He couldn\'t have taken the condom of. He never had the time to do it.');
      scene.text('"Did the condom break?" you ask him, but he either doesn\'t listen or doesn\'t care.');
    } else {
      scene.text('You can feel his cock twitching inside your snatch as he unloads everything he has inside the condom.');
    }
  } else {
    scene.text('You can feel his cock twitching inside your snatch as he unloads everything he has inside you.');
    if (((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
      scene.text('"Why? I told you to cum outside," you hiss angrily, but he doesn\'t seem to care. He doesn\'t even bother with giving your an answer.');
    }
  }
  scene.text('If there wasn\'t a wall in front of you, you would have fallen face first to the ground when he pushes you away from him. "Hey," you shout protecting your face at the same time, when you crash against the wall. "What\'s the matter with you?" But when you turn around he\'s already stuffing his dick back inside his pants and runs away.');
  if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0  ||  ((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
    qspCall(s, 'prostitution_functions', 'std_check');
    qspCall(s, 'cum_call', '', '', 'a client');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['prostitution_pavlovsk', 'end'] },
  ]);
  scene.build();
}

function enterSet_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_walk'] = ((((s as any).prostitute ?? 0)?.['pav_location'] === 'private') ? ('pav_residential') : ('pav_market'));
  // TODO-QSP: gs 'prostitution_pavlovsk', 'travel', $prostitute['pav_walk']
  if (((s as any).prostitute ?? 0)?.['pav_scene'] === 'blowjob') {
    qspCall(s, 'npcgeneratec', '', 0, 'a client', Math.floor(Math.random() * 26) + 30);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 2);
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/bj_' + rand(0, 3) + '.mp4`);
    scene.text('He walks with you to a parking lot at the outskirts of Pavlovsk. A single car stands as far away as possible from the road, but it\'s clearly visible from the train tracks which lead to the nearby train station. He doesn\'t open the car, when you reach it, he leads you instead behind a big dumpster next to it. "Can\'t we use the car?" you ask and for a moment he looks at you completely confused. You point at it. "Oh, that\'s not mine."');
    scene.text('A minute later you\'re squatting in front of him, cock in your mouth and you head bobbing up and down on his meat. You aren\'t visible from the street. The car and the dumpster are shielding you from any wandering eyes, but you still have to suck him off quickly before a train comes by and hundreds of people see you like this.');
    qspCall(s, 'arousal', 'bj', (-9), 'prostitution', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/public/end_bj.mp4`);
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    (s as any).pro_temp = (Math.floor(Math.random() * (8 - (-8) + 1)) + ((-8)));
    qspCall(s, 'fame', 'pav', 'prostitute', Math.max(((s as any).pro_temp ?? 0), 0));
    // TODO-QSP: 'Too late... you can see a train approaching behind him at the same time as he unloads inside ' + ii...
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    }
    qspCall(s, 'arousal', 'bj', (-3), 'prostitution', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') ? (Math.floor(Math.random() * 2) + 1) : (Math.floor(Math.random() * 3) + 2)));
    if (((s as any).prostitute ?? 0)?.['pav_location'] === 'public') {
      scene.img('images/shared/prostitution/pavlovsk/street/set_5/Public/vag_\' + rand(0, 1) + \'.mp4');
      // TODO-QSP: dynamic text: He suddenly pushes you against a big trash can. "Here is fine," he says as his h...
      scene.text('He suddenly pushes you against a big trash can. "Here is fine," he says as his hands pull \' + iif(PCloSkirt > 0, \'up your skirt.\', \'down your pants.\') + iif(prostitute[\'pav_condom\'] = 1, \'"The condom," you say when you feel his cock touching your pussy lips. He groans annoyed, but he pulls away and puts it on.\', \' \') + \'Without further ado his rock-hard cock moves into your cunt while you try to steady yourself without touching the dirty trash can in front of you. Your attempt not very successful. Every time he pushes into you he pushes you further and further towards it until your whole body is pressed against it. The lid stands half open, the trash nearly spills over the edge and you have to pull your head back so that your face isn\'t pushed into the trash bags.');
    } else {
      (s as any).orgasm_or = 'no';
      (s as any).pro_temp = qspFunc(s, 'random', 'pick_from', 0, 1, 2, 4, 6);
      scene.img(`images/shared/prostitution/pavlovsk/street/set_5/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/vag_${((s as any).pro_temp || '')}.mp4`);
      // TODO-QSP: 'He''s ogling your ' + iif(pro_temp = 2 or pro_temp = 4, 'tits', 'ass') + ' all the way to his apart...
    }
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      qspCall(s, 'arousal', 'vaginal', (-3), 'prostitution', 'rough', 'exhibitionism', 'sub');
    } else {
      qspCall(s, 'arousal', 'vaginal', (-3), 'prostitution');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 12;
    qspCall(s, 'arousal', 'auto_lube', 'vaginal', 'custom');
    scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/vag_' + iif($prostitute['pav_location'] = 'public', 2, 5) + '.mp4`);
    if (((s as any).prostitute ?? 0)?.['pav_location'] === 'public') {
      scene.text('"The smell," you say trying not to breath through your nose. "It\'s disgusting."');
      scene.text('"Really? Human trash like you has a problem with it?" he taunts you, but quickly changes his mind when the smell almost makes you throw up. "Fine, let\'s go over to that car."');
      scene.text('Freed from the smell you chuckle as the two of you try to walk over to the car while keeping his cock buried in your snatch. "Stop laughing," he says and slaps your ass hard to make you stop. Afterwards it\'s business as usual. He hammers into you until he starts to breath harder and you know he\'ll be ready to shot his load in a second.');
    } else {
      (s as any).orgasm_or = 'custom';
      // TODO-QSP: dynamic text: Finally playtime is over and the little boy inside him, that toyed with your ' +...
      scene.text('Finally playtime is over and the little boy inside him, that toyed with your \' + iif(pro_temp = 2 or pro_temp = 4, \'tit\', \'ass\') + \'-flesh as if he had touched a woman for the first time, has to take a backseat. He \' + iif(pro_temp = 2 or pro_temp = 4, \'throws you onto the bed\', \'turns you around\') + \' and shoves his cock deep inside your cunt. He takes to finger and rapidly rubs your sensitive clit as he talks for the first time. "What do you want me to do?"');
      scene.text('"Me?" you moan not able to think clearly.');
      scene.text('"Yes you," he says in such a serious tone that you blurt out what you want in this moment. "Fuck me hard, don\'t hold back."');
      scene.text('"As you wish."');
      (s as any).orgasm_txt = 'Your whole body is on fire and you\'re twisting and turning under him. You moan uncontrollably with your tongue sticking out of your mouth like a bitch in heat getting mounted by her man. Your orgasm is nearly over, when he\'s getting close himself.';
    }
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      qspCall(s, 'arousal', 'vaginal', (-12), 'prostitution', 'rough', 'exhibitionism', 'sub');
    } else {
      qspCall(s, 'arousal', 'vaginal', (-12), 'prostitution');
    }
    qspCall(s, 'stat', '');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
      scene.actions([
        { label: 'Let him cum inside the condom', goto: ['prostitution_pavlovsk', 's5_end'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'cum_inside', 'self', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('hard') : ('easy')));
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him to pull out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him to pull out', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (((Math.floor(Math.random() * 4) + 0) === 3  ||  ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).pro_brand ?? 0)?.['text_pubic'] === 'cumslut'))  &&  ((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
    } else {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = (-1);
    }
    qspGoto(s, 'prostitution_pavlovsk', 's5_end');
  } },
        ]);
      }
      scene.actions([
        { label: 'Don\'t say anything', goto: ['prostitution_pavlovsk', 's5_end'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterS5End(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  scene.img(`images/shared/prostitution/pavlovsk/street/set_${((s as any).pro_rand || '')}/${((s as any).prostitute ?? 0)?.['pav_location'] ?? ''}/end' + iif($prostitute['pav_location'] = 'public', '_vag', ') + '.mp4`);
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    qspCall(s, 'arousal', 'vaginal', (-6), 'prostitution', 'rough', 'exhibitionism', 'sub');
  } else {
    qspCall(s, 'arousal', 'vaginal', (-6), 'prostitution');
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).prostitute ?? 0)?.['pav_location'] === 'public') {
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 1) {
      if (((s as any).prostitute ?? 0)?.['pav_internal'] === 0  &&  (Math.floor(Math.random() * 100) + 1) > 98) {
        ((s as any).prostitute = (s as any).prostitute ?? {})['pav_internal'] = 1;
        scene.text('"Yes," he hisses as his hips jerk forward slamming you into the car as he fills his condom with his spunk. But something is wrong, you can feel his baby juice inside.');
        scene.text('"What the fuck? Did you take the condom of?"');
        // TODO-QSP: dynamic text: He takes a step back and immediately starts to laugh. He pulls the broken condom...
        scene.text('He takes a step back and immediately starts to laugh. He pulls the broken condom of his cock and throws it on the ground. "You fucking deserve it," he says between waves of laughter. You turn around and look down in disbelieve. \' + iif($pro_brand[\'text_pubic\'] = \'cumslut\', \' "See," he points at your cumslut tattoo which he can now see for the first time. "You got what you wished for. \', \' "\') + \'If you get pregnant, tell your hooker child from me that mommy and daddy made him next to a trash can."');
      } else {
        scene.text('"Yes," he hisses as his hips jerk forward slamming you into the car as he fills the condom with his spunk.');
      }
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
        scene.text('"Yes," he hisses as his hips jerk forward slamming you into the car as he coats your insides with his baby juice.');
        scene.text('"What the fuck? I told you not to cum inside me."');
        // TODO-QSP: dynamic text: He takes a step back and immediately starts to laugh. "You fucking deserve it," ...
        scene.text('He takes a step back and immediately starts to laugh. "You fucking deserve it," he says between waves of laughter. You turn around and look at him in disbelieve.\' + iif($pro_brand[\'text_pubic\'] = \'cumslut\', \' "See," he points at your cumslut tattoo which he can now see for the first time. "You got what you wished for. \', \' "\') + \'If you get pregnant, tell your hooker child from me that mommy and daddy made him next to a trash can."');
      } else {
        if (((s as any).prostitute ?? 0)?.['pav_internal'] === -1) {
          scene.text('"Yes," he hisses as he pulls back and shots his cum on the ground between your legs.');
        } else {
          if (((s as any).prostitute ?? 0)?.['pav_internal'] === 0  &&  ((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
            scene.text('"Yes," he hisses as his hips jerk forward slamming you into the car as he fills your willing pussy with his spunk.');
          }
        }
      }
    }
    scene.text('"See ya trash," is the last thing he says to you before he walks away.');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0  ||  ((s as any).prostitute ?? 0)?.['pav_internal'] === 1) {
      qspCall(s, 'prostitution_functions', 'std_check');
      if (((s as any).prostitute ?? 0)?.['pav_internal'] > -1) {
        qspCall(s, 'cum_call', '', '', 'a client');
      }
    }
  } else {
    // TODO-QSP: dynamic text: He pulls out of your warm inviting body' + iif(prostitute['pav_condom'] = 1, ' a...
    scene.text('He pulls out of your warm inviting body\' + iif(prostitute[\'pav_condom\'] = 1, \' and takes the condom off,\', \',\') + \' before he flips you around while your body is still shaking from your orgasm. "If there ever was prove for god\'s existence, it\'s your perfect ass," he says after emptying his balls on it.');
    scene.text('"But I guess he wouldn\'t approve how I use his perfect creation," you joke and wiggle your ass playfully.');
    scene.text('"No he won\'t, but who cares," he says, bows down and plants a long loving kiss on your cum-free cheek. "The first door on the right is the bathroom. You can clean up in there before you go," he says before he gets up from the bed.');
    qspCall(s, 'cum_call', 'butt', 'a client');
    if (((s as any).prostitute ?? 0)?.['pav_condom'] === 0) {
      qspCall(s, 'prostitution_functions', 'std_check');
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    scene.actions([
      { label: 'Continue', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Clean up and leave', goto: ['prostitution_pavlovsk', 'end', 'clean'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSet_8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).orgasm_or = 'no';
  if (((s as any).prostitute ?? 0)?.['pav_regular'] < 1) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    ((s as any).prostitute = (s as any).prostitute ?? {})['pav_regular_s8'] = 1;
  }
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_walk'] = 'pav_residential';
  scene.img('images/shared/prostitution/pavlovsk/street/set_8/private/anal_\' + rand(0, 1) + \'.mp4');
  qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 2) + 1);
  // TODO-QSP: iif(rand(0, 1) = 0, '"You have a nice ass,"', '"You have a really fuckable ass,"') + ' he says loudl...
  // TODO-QSP: 'His not able to keep his desire in check as he nearly rips his clothes of the the second the apartm...
  qspCall(s, 'arousal', 'anal', (-9), 'prostitution', 'rough', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).orgasm_or = 'yes';
    scene.img('images/shared/prostitution/pavlovsk/street/set_8/private/anal_2.mp4');
    // TODO-QSP: dynamic text: He doesn't give a single fuck about your well-being. Only one thing is on his mi...
    scene.text('He doesn\'t give a single fuck about your well-being. Only one thing is on his mind, fucking your ass as hard and fast as possible.\' + iif(prostitute[\'pav_regular\'] = 1, \' You could have known, what would happen. But you went with him anyway. Maybe because you want to experience such an intense orgasm again.\', \' \') + iif(rand(0, 1) = 0, \'"I\'ll fuck you until your ass bleed,"\', \'"You won\'t be able to sit for a week,"\') + \' he taunts you as his cock moves back and forth stretching your abused hole wide open.');
    // TODO-QSP: 'He suddenly grabs your hair and pulls your head back as his other hand gripes your throat violently...
    (s as any).orgasm_txt = 'And then he let\'s go, your brain floods your body with endorphins as your breath in cool air and it\'s' + ((((s as any).prostitute ?? 0)?.['pav_regular'] === 1) ? (' again ') : (' ')) + 'like a trigger for the rest of your body to let go. Your eyes roll back and your tongue slips out of your mouth like a bitch in heat that get\'s bred by her master as your anal orgasm blocks out the pain and turns this horrible moment into pure bliss.';
    qspCall(s, 'arousal', 'anal', (-9), 'prostitution', 'rough', 'sub');
    qspCall(s, 'pain', '', 10, 'hair', 'pull');
    qspCall(s, 'pain', '', 10, 'throat', 'choke');
    qspCall(s, 'stat', '');
    scene.text('Your pulled back to your painful reality, when he finally pulls out his dick. Your asshole spasms trying and failing to close. "Get down here slut," he says his voice filled with pent-up aggression. You somehow are able to kneel down while your twitching ass and quivering hole constantly remind you of how you shamefully came by getting your ass violated.');
    if (((s as any).pro_fetish ?? 0)?.['atm'] !== 'blocked') {
      scene.text('"It\'s time to taste your ass, lick my cock clean and then I\'ll let you have my cum as a reward," he proclaims as if he\'s handing out water to somebody who\'s dying of thirst.');
      // TODO-QSP: 'You stare at the cock right in front of your eyes. It was in your ass just a second ago, rummaging ...
      qspCall(s, 'prostitution_functions', 'will_atm', 'resist', ((((s as any).pro_fetish ?? 0)?.['atm'] === 'yes') ? ('hard') : ('easy')));
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Don\'t do it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Don\'t do it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pro_temp = 0;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You shake your head and say: "Sorry, that\'s not something I do, and you didn\'t pay for it."');
    scene.text('"Fine bitch," he growls, but does nothing to persuade you to change your mind. Instead he grabs your hand and places it on his ass-juice covered dick.');
    scene.actions([
      { label: 'Make him cum', goto: ['prostitution_pavlovsk', 's8_end'] },
    ]);
  } },
        ]);
      }
      if (((s as any).pro_fetish ?? 0)?.['atm'] === ''  ||  ((s as any).pro_fetish ?? 0)?.['atm'] === 'undecided') {
        scene.actions([
          { label: 'Suck his cock and you\'ll like it', handler: (st: GameState) => {
    // TODO-QSP: $pro_fetish['atm'] = 'yes'
  }, goto: ['prostitution_pavlovsk', 's8_atm'] },
          { label: 'Suck his cock and you\'ll hate it', handler: (st: GameState) => {
    // TODO-QSP: $pro_fetish['atm'] = 'no'
  }, goto: ['prostitution_pavlovsk', 's8_atm'] },
        ]);
      } else {
        scene.actions([
          { label: 'Suck his cock', goto: ['prostitution_pavlovsk', 's8_atm'] },
        ]);
      }
      if (((s as any).pro_fetish ?? 0)?.['atm'] === '') {
        scene.text('<br>Content Warning: Ass-to-Mouth');
        // TODO-QSP: act $func('wrap', 'neg', 'Block this type of content'):
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        ((s as any).pro_fetish = (s as any).pro_fetish ?? {})['atm'] = 'blocked';
        qspCall(s, 'stat', '');
        scene.text('You shake your head and say: "Sorry, that\'s not something I do."');
        scene.actions([
          { label: 'Continue', goto: ['prostitution_pavlovsk', 's8_end'] },
        ]);
      }
    }
    scene.text('"It\'s time to receive my cum," he proclaims as if he\'s handing out water to somebody who\'s dying of thirst. You deserve an Oscar for the smile you manage to fake as you thank him for his generosity.');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    (st as any).pro_temp = 0;
  }, goto: ['prostitution_pavlovsk', 's8_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterS8Atm(s: GameState, scene: SceneBuilder): void {
  (s as any).pro_temp = 1;
  ((s as any).pro_stats = (s as any).pro_stats ?? {})['atm'] = ((s as any).pro_stats['atm'] ?? 0) + (1);
  (s as any).pcs_mood = ((((s as any).pro_fetish ?? 0)?.['atm'] === 'yes') ? (100) : (0));
  (s as any).minut = ((s as any).minut ?? 0) + (((((s as any).pro_fetish ?? 0)?.['atm'] === 'yes') ? (10) : (2)));
  scene.img('images/shared/prostitution/pavlovsk/street/set_8/private/anal_atm.mp4');
  // TODO-QSP: 'You can''t resist the urge to sniff it, when you come closer. There is no... stuff... on it. It loo...
  // TODO-QSP: dynamic text: After the first ' + iif($pro_fetish['atm'] = 'yes', 'arousing', 'disgusting') + ...
  scene.text('After the first \' + iif($pro_fetish[\'atm\'] = \'yes\', \'arousing\', \'disgusting\') + \' taste you decide to \' + iif($pro_fetish[\'atm\'] = \'yes\', \'take your time and clean his cock thoroughly. You let your tongue wander over his dick and lap every single drop of your enticing ass-juice. At the end you\', \'get it done as quickly as possible. You only take the tip of his dick into your mouth,\') + \' grab the shaft with your hand and give him a handjob as you let your tongue wander around his sensitive flesh.');
  scene.text('"I\'m close," he moans, his eyes closed clearly enjoying what you\'re doing. "Take it, swallow it all."');
  qspCall(s, 'arousal', 'bj', ((((s as any).pro_fetish ?? 0)?.['atm'] === 'yes') ? ((-8)) : ((-1))), 'prostitution', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Open your mouth', goto: ['prostitution_pavlovsk', 's8_end'] },
  ]);
  scene.build();
}

function enterS8End(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'a client', Math.floor(Math.random() * 26) + 30);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/shared/prostitution/pavlovsk/street/set_8/private/anal_atm.mp4');
  scene.text('His cock twitches in your hand as his cum violently erupts from his meat and shoots into your mouth. "Fuck, take it bitch. Take my cum," he shouts loudly into the apartment as he throws his head back when the intensity of his orgasm takes hold of his body.');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
  qspCall(s, 'arousal', 'hj', 10, 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['pav_regular'] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', ((((s as any).pro_fetish ?? 0)?.['atm'] === 'yes') ? (20) : (40)));
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    if (((s as any).prostitute ?? 0)?.['pav_regular_s8_end'] === 0) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['pav_regular_s8_end'] = 1;
      // TODO-QSP: dynamic text: He walks over to the fridge, after you have swallowed his spunk down, and pulls ...
      scene.text('He walks over to the fridge, after you have swallowed his spunk down, and pulls out two bottles of beer. "Do you want one as well? I bet my cum doesn\'t taste that great\' + iif(pro_temp = 1, \', but still better than your ass,"\', \',"\') + \' he says and flashes you a boyish grin.');
      scene.text('"Uhm... sure," you say a bit confused about the abrupt change in tone. One minute ago he nearly was choking you to death and now he\'s offering you a beer as if you are a friend coming over to hang out.');
      scene.text('"I really appreciate you sleeping with me again," he explains. "Most girls aren\'t able to keep up with what I need from them and nobody went home with me twice."');
      // TODO-QSP: dynamic text: "If you would be nicer, maybe more girls would return home with you." You take a...
      scene.text('"If you would be nicer, maybe more girls would return home with you." You take a big gulp and swirl it around to get the taste of cum\' + iif(pro_temp = 1, \' and ass \', \' \') + \'out of your mouth.');
      scene.text('He shakes his head. "It\'s not working for me if it\'s all sweet and soft." He shrugs and takes a big gulp himself. "No idea why, but I need to take control and break the girl or I can\'t get off. Maybe something is broken inside me. I don\'t know. But you aren\'t normal yourself, aren\'t you?"');
      scene.text('"What makes you say that?" you ask and wonder if it\'s true. You were just a normal average schoolgirl a short while ago.');
      scene.text('"You came both times. I never made a girl cum like this before." You blush. It\'s nothing you have control over, but you hate that your cheeks turn red and you avert your gaze. He laughs and it\'s sounds not at all like you would have expected. It\'s soft, warm and understanding. "You liked it, didn\'t you?"');
      scene.text('Shit, he\'s right. You did. You loved it. Should you tell him that? You ask yourself as your fingers nervously play with the label on the beer bottle. Finally, after at least a whole minute has passed, you nod. "Yeah I did."');
      scene.text('He surprises you again with his reaction. "Thank god," he says relieved and his body visibly relaxes. "I always feel bad about what I do afterwards, but I can\'t control myself. One reason I only use whores. At least they go with me willingly."');
    } else {
      scene.text('After you\'re done, he offers you a beer again and the two of you chat for a few minutes about random stuff like the weather, before you get ready to leave.');
    }
    if (((s as any).pro_temp ?? 0) === 1) {
      qspCall(s, 'money', 'earn', 500, 'cash');
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: "Before you go," he hands you <<$func('money', 'string_profit', 500)>>. "That's ...
      scene.text(`"Before you go," he hands you ${qspFunc(s, 'money', 'string_profit', 500)}. "That's for... you know... doing ass-to-mouth."`);
    }
    scene.actions([
      { label: 'Get dressed and leave', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  } else {
    scene.text('"Wait," he says when you close your mouth to swallow his spunk down. "Savor it." You have no choice, but to do it, when you want to finally get out of here and so you swirl the cum around in your mouth until he signals you with a short nod it\'s now OK to swallow it down. "And now get the fuck out of my house you disgusting slut."');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['prostitution_pavlovsk', 'end'] },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterSet_9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).orgasm_or = 'no';
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_walk'] = ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? ('pav_residential') : ('pav_complex'));
  // TODO-QSP: gs 'prostitution_pavlovsk', 'travel', $prostitute['pav_walk']
  scene.img('images/shared/prostitution/pavlovsk/street/set_9/private/anal_\' + iif($prostitute[\'client_behavior\'] = \'abusive\', 1, 0) + \'.mp4');
  qspCall(s, 'fame', 'pav', 'prostitute', ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') ? (Math.floor(Math.random() * 3) + 2) : (Math.floor(Math.random() * 2) + 1)));
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
    // TODO-QSP: dynamic text: "I'm going to rip open your asshole' + iif(prostitute['pav_regular'] = 1, ' agai...
    scene.text('"I\'m going to rip open your asshole\' + iif(prostitute[\'pav_regular\'] = 1, \' again,\', \',\') + \'" the man says loudly not caring that somebody could overhear his words. "You won\'t be able to sit down for a week." You smile and keep any thoughts you have about his behavior to yourself as you follow him to his apartment in the residential district.');
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      qspCall(s, 'pain', '', 10, 'asscheeks', 'slap');
      qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 2);
      scene.text('He suddenly slaps your ass when you pass by two old man sitting on a bench. He immediately has their attention. "Yo geezers," he shouts and slaps your ass again while you look away. "I\'m going to fuck this whore until her ass bleeds. You can\'t see their reaction and you quicken your step to get away from them while he laughs and gives your ass another playful slap.');
    }
    scene.text('"Get on the bed," is the only thing he says to you after entering his apartment. The two of you undress and he positions himself behind you. There\'s no foreplay, no emotion just raw lust on his part. For him you are just a warm pile of flesh in which he can stick his cock. He fucks you roughly, ramming his cock hard and deep inside your hole, but every once in a while he pulls out completely, gives your ass a playful slap before brutally forcing his cock past your abused sphincter.');
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.text('The walk towards his apartment is actually quite nice because he shows interest in more than your body. He asks some questions about your hobbies and not just to pass the time, but he seems interested even if you only give him vague answers.');
    scene.text('"Thanks for doing it," he says when the apartment door closes behind you two. "My wife hates it and never let\'s me... you know..." he blushes and looks away.');
    scene.text('"Hey," you grab his hand and give it a tender squeeze to reassure him. "It\'s nothing you have to be ashamed of. If your wife doesn\'t like anal, it\'s her loss." You pull him towards the open door of the bedroom.');
    scene.text('During the next ten minutes he treats you like a goddess. He caresses you and kisses every inch of your body as he explores it. Finally he moves on to the main course and pushes his dick inside your ass after he took his time preparing your hole with his fingers and tongue. "So good," he moans like a woman and slowly starts to move in and out of you.');
    scene.text('If he continues like this, you\'ll be here for hours. Maybe some encouragement will help, you think and say. "You can do it harder if you want." You doesn\'t have to tell him twice as your comment has the desired effect. He instantly speeds up and fucks like wholeheartedly.');
  }
  qspCall(s, 'arousal', 'auto_lube', 'vaginal', 'custom');
  if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') {
    qspCall(s, 'arousal', 'foreplay', (-9), 'prostitution');
    qspCall(s, 'arousal', 'anal', (-9), 'prostitution');
  } else {
    qspCall(s, 'arousal', 'anal', (-9), 'prostitution', 'rough', 'sub');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: After a few minutes he's done. He pulls out of your ass for the last time' + iif...
  scene.text('After a few minutes he\'s done. He pulls out of your ass for the last time\' + iif(prostitute[\'pav_condom\'] = 1, \', takes the condom off \', \' \') + \'and points at the floor without telling you what he wants, but an experienced whore knows exactly what comes next.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get on your knees', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/prostitution/pavlovsk/street/set_9/private/end.mp4');
    if (((s as any).prostitute ?? 0)?.['client_behavior'] === 'abusive') {
      scene.text('"Look at me," he growls like a dog as he furiously strokes his cock. He laughs when you follow his command and your gazes met. "I think this is the best part," he says as his cum coats your face. "Seeing how there is nothing left in the eyes of broken sluts.');
      scene.text('"And now piss off," he says when he is done. "And keep my cum and your face to show everybody what kind of slut you are."');
      scene.actions([
        { label: 'Leave with cum on your face', goto: ['prostitution_pavlovsk', 'end'] },
      ]);
    } else {
      scene.text('"Look at me." His voice is hoarse and sounds almost pleading. You tear your gaze away from his hard cock and look up directly into his eyes. For what feels like a whole minute there\'s only silence in the room');
      scene.text('"Thanks, I really appreciate you spending time with me," he says. "The bathroom is down the hall, you can fresh up in there."');
      scene.actions([
        { label: 'Clean up and leave', goto: ['prostitution_pavlovsk', 'end', 'clean'] },
      ]);
    }
    (s as any).facial = ((s as any).facial ?? 0) + (1);
    qspCall(s, 'cum_call', 'face', 'a client');
    qspCall(s, 'arousal', 'end');
  } },
  ]);
  scene.build();
}

function enterRape(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).prostitute = (s as any).prostitute ?? {})['pav_timer_hour'] = ((s as any).hour ?? 0);
  if (((s as any).locArgs?.[1] ?? 0) === 'clean') {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).cumspclnt = 20;
    qspCall(s, 'cum_cleanup', '');
  }
  dynamicGoto(s, 'prevLoc', 'prevArg');
  // TODO-QSP: end
  scene.build();
}

function enterTravel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute ?? 0)?.['pav_walk'] === 'pav_residential'  ||  ((s as any).prostitute ?? 0)?.['pav_walk'] === 'pav_complex') {
    if (((s as any).loc ?? 0) === 'pushkin') {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
    } else {
      if (((s as any).loc ?? 0) === 'pav_industrial'  ||  ((s as any).loc ?? 0) === 'pav_market') {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
      } else {
        if (((s as any).loc ?? 0) === 'pav_park'  ||  ((s as any).loc ?? 0) === 'pav_commercial') {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
        } else {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
        }
      }
    }
    (s as any).loc_arg = ((((s as any).prostitute ?? 0)?.['pav_walk'] === 'pav_complex') ? ('start') : (''));
  } else {
    if (((s as any).prostitute ?? 0)?.['pav_walk'] === 'pav_commercial') {
      if (((s as any).loc ?? 0) === 'pushkin') {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
      } else {
        if (((s as any).loc ?? 0) === 'pav_commercial') {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
        } else {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
        }
      }
      (s as any).loc_arg = '';
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_walk'] === 'pav_market') {
        if (((s as any).loc ?? 0) === 'pushkin'  ||  ((s as any).loc ?? 0) === 'pav_commercial') {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
        } else {
          if (((s as any).loc ?? 0) === 'pav_market') {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
          } else {
            (s as any).minut = ((s as any).minut ?? 0) + 15;
          }
        }
        (s as any).loc_arg = '';
      }
    }
  }
  (s as any).loc = ((s as any).prostitute ?? 0)?.['pav_walk'];
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chance':
      enterChance(s, scene);
      break;
    case 'pav_rnd':
      enterPavRnd(s, scene);
      break;
    case 'rng':
      enterRng(s, scene);
      break;
    case 'search':
      enterSearch(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'set_0':
      enterSet_0(s, scene);
      break;
    case 's0_facial':
      enterS0Facial(s, scene);
      break;
    case 's0_internal':
      enterS0Internal(s, scene);
      break;
    case 'set_1':
      enterSet_1(s, scene);
      break;
    case 's1_end':
      enterS1End(s, scene);
      break;
    case 'set_2':
      enterSet_2(s, scene);
      break;
    case 's2_end':
      enterS2End(s, scene);
      break;
    case 'set_3':
      enterSet_3(s, scene);
      break;
    case 'set_4':
      enterSet_4(s, scene);
      break;
    case 's4_swallow':
      enterS4Swallow(s, scene);
      break;
    case 's4_internal':
      enterS4Internal(s, scene);
      break;
    case 'set_5':
      enterSet_5(s, scene);
      break;
    case 's5_end':
      enterS5End(s, scene);
      break;
    case 'set_8':
      enterSet_8(s, scene);
      break;
    case 's8_atm':
      enterS8Atm(s, scene);
      break;
    case 's8_end':
      enterS8End(s, scene);
      break;
    case 'set_9':
      enterSet_9(s, scene);
      break;
    case 'rape':
      enterRape(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'travel':
      enterTravel(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const prostitution_pavlovsk: LocationDef = {
  name: 'prostitution_pavlovsk',
  title: '<br>Content Warning: Ass-to-Mouth',
  region: 'pavlovsk',
  enter: enter,
};
