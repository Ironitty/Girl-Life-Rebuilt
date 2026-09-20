import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_prostitutes', 'start');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'schedule', 'A60');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Main Road near Gadukino</h4></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/highway/roadwinter.jpg');
  } else {
    scene.img('images/locations/highway/road.jpg');
  }
  if ((! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 15) {
    scene.text('You look around for Mira but don\'t see her here. So she must be doing something else right now.');
  }
  if (((s as any).hour ?? 0) < 16) {
    scene.text('It is not a good time of day for prostitution. Try coming back later in the evening.');
  } else {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
      if (((s as any).MiraVars ?? 0)?.['pimp'] === 1  &&  (((s as any).npc_QW ?? 0)?.['A63'] >= 11  ||  ((s as any).GadBoy ?? 0)?.['river_gang'] === 2)) {
        qspGoto(s, 'gad_prostitutes', 'mira_rebels');
      }
      scene.text('You see Mira standing below a streetlight a little way down the road.');
      if (((s as any).MiraVars ?? 0)?.['pimp'] === 0  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 11  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] === 0) {
        qspGoto(s, 'gad_prostitutes', 'pimp_mira');
      }
      scene.actions([
        { label: 'Watch Mira prostitute herself', goto: ['gad_prostitutes', 'just_mira'] },
      ]);
    }
    if (((s as any).prostitute ?? 0)?.['gadukino'] === 1  &&  (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)) {
      if (((s as any).prostitute ?? 0)?.['earnings_day'] > 0) {
        // TODO-QSP: '<br>You have earned <<$func(''money'', ''string_profit'', prostitute[''earnings_day''])>> today.'+i...
      }
      scene.actions([
        { label: 'Look for clients', goto: ['gad_prostitutes', 'work'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk back to the highway', goto: ['road', '10'] },
  ]);
  scene.build();
}

function enterPimpMira(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'misc', 'force', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Make Mira your prostitute', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make Mira your prostitute', handler: (st: GameState) => {
    ((st as any).MiraVars = (st as any).MiraVars ?? {})['pimp'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'willpower', 'misc', 'force', 'hard');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspCall(st, 'miroslava', 'miraclothes');
    // TODO-QSP: dynamic text: You call her over to you. Mira hurries over and looks at you with downcast eyes....
    scene.text(`You call her over to you. Mira hurries over and looks at you with downcast eyes. "Hi, ${((st as any).pcs_nickname || '')}. Are you having a good night?"`);
    // TODO-QSP: dynamic text: You look at her angrily. "A better question, my lovely whore, is ''Are you havin...
    scene.text(`You look at her angrily. "A better question, my lovely whore, is 'Are you having a good night'? I want ${qspFunc(s, 'money', 'string_profit', 200)} per customer you have each night." You tell her earnestly.`);
    scene.text('Mira looks up in shock and with a hurt look on her face. "What are you talking about? Do you think I am a hooker?"');
    scene.text('You step up to her and place your hand on her face. Mira closes her eyes and leans into your hand. You look into her eyes once she opens them, then slap her hard across the face. Mira falls to the ground and starts to cry. "You\'re my property, whore. You will do whatever I tell you. You will never lie to me again, or I swear I will make you pay. Understand me?!"');
    scene.text('Mira nods, and she wipes away tears.');
    scene.text('You reach down and help her back to her feet. You brush her off and help her fix her makeup. "Good, now get that cute ass back out on that road and earn us some money."');
    scene.text('You give Mira a little slap on the ass and smile as you watch Mira start a new chapter of her life as your prostitute.');
    scene.actions([
      { label: 'Finish', goto: ['gad_prostitutes', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevloc', 'prevarg');
  } },
  ]);
  scene.build();
}

function enterMiraRebels(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['pimp'] = 2;
  qspCall(s, 'prostitution_functions', 'set_gadukino_prostitute');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('Mira spots you and confidently walks up to you. You\'re not sure what has gotten into her, but from the look on her face, you probably won\'t like it.');
  scene.text('As soon as you are face-to-face with Mira, she winds up and smacks you across the face as hard as she can. You are stunned a bit and stagger to the ground. You feel warm tears begin to run down your face.');
  scene.text('Mira commands you, "Stand up bitch!"');
  scene.text('You rise and meet her gaze. She looks very pleased with herself. "Remember that. Now you know exactly how that feels," she says.');
  if (((s as any).npc_QW ?? 0)?.['A63'] >= 11) {
    scene.text('Mira continues, "Look at you, just another slut. Mitka, Kolyamba, and Vasyan told me how much they all love fucking and sharing you now. You thought you were so much better than me, well no more! I\'m not working for you anymore. You have proven yourself perfectly capable of enjoying getting shared by a group of friends."');
  } else {
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
      scene.text('Mira continues, "Look at you, just another whore. All the village men can talk about is how much you moaned for each and every one of them. You thought you were so much better than me, well no more! I\'m not working for you anymore. You have proven yourself perfectly capable of enjoying getting gangbanged by multiple groups of strangers."');
    }
  }
  scene.text('After Mira is done with her preaching, you try to think of something witty to say or raise your hand to slap her back, but you just can\'t bring yourself to do it.');
  // TODO-QSP: dynamic text: Mira sees the defeated look in your eyes and knows that she has won. She pulls y...
  scene.text(`Mira sees the defeated look in your eyes and knows that she has won. She pulls you into an embrace and whispers, "It's alright, ${((s as any).pcs_nickname || '')}. We can just be friends again. And if you want to, maybe you can come work with me instead?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_prostitutes', 'start'] },
  ]);
  scene.build();
}

function enterJustMira(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'miroslava', 'miraclothes');
  if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Leave Mira to her work', goto: ['gad_prostitutes', 'start'] },
      { label: 'Wait for Mira to attract a customer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    (st as any).temp_gadpro = (Math.floor(Math.random() * 10) + 1);
    if (((st as any).temp_gadpro ?? 0) > 5) {
      ((st as any).MiraVars = (st as any).MiraVars ?? {})['prostitute'] = ((st as any).MiraVars['prostitute'] ?? 0) + (1);
      if (((st as any).MiraVars ?? 0)?.['QW'] < 20) {
        ((st as any).MiraVars = (st as any).MiraVars ?? {})['QW'] = ((st as any).MiraVars['QW'] ?? 0) + (1);
      }
      scene.img('images/characters/gadukino/mira/miraprost.jpg');
      scene.text('It isn\'t long before a customer pulls up in a flashy car. Mira approaches the vehicle and starts talking to the driver.');
      scene.text('You can\'t hear what she is saying, but after only a few minutes, the door opens, and Mira steps into the vehicle. It pulls away but doesn\'t go far. You see it pull off the main road and head down a dirt road. Smiling and wanting to see the action, you run into the woods, trying to head off the vehicle.');
      scene.actions([
        { label: 'Watch Mira and the customer', goto: ['gad_prostitutes', 'watch_mira'] },
      ]);
    } else {
      scene.img('images/characters/gadukino/mira/mirawish2_1.jpg');
      scene.text('Mira walks along the road showing off her body to passing cars and trucks, but no one stops to pick her up.');
      scene.actions([
        { label: 'Continue', goto: ['gad_prostitutes', 'just_mira'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('It is too late for Mira to work as a prostitute now.');
    scene.actions([
      { label: 'Walk back to Gadukino together', goto: ['gadukino', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWatchMira(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'stat', '');
  (s as any).temp_gadpro = (Math.floor(Math.random() * 2) + 0);
  if ((!((s as any).temp_gadpro ?? 0))) {
    scene.img('images/characters/gadukino/mira/sex/miraprost1.mp4');
    scene.text('You walk up and look into the car. You see Mira giving one hell of a blowjob to her customer. Her head is bobbing up and down on his cock.');
    scene.actions([
      { label: 'Hide', handler: (st: GameState) => {
    qspGoto(st, 'gad_prostitutes', 'watch_from_hiding');
  } },
    ]);
  } else {
    if (((s as any).temp_gadpro ?? 0) === 1) {
      scene.img('images/characters/gadukino/mira/miraprost2.mp4');
      scene.text('You walk up and look into the van. You see Mira showing her customer her tits and rubbing her pussy, and you see a hungry gleam in the guy\'s eyes, which Mira returns.');
      scene.actions([
        { label: 'Keep watching', handler: (st: GameState) => {
    qspGoto(st, 'gad_prostitutes', 'watch_close');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWatchFromHiding(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/sex/miraprost1_1.mp4');
  scene.text('You duck for cover as the guy suddenly gets out of the car, opens the passenger door, grabs Mira\'s head, and starts forcing his cock deep into her throat.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraprost1_2.mp4');
    scene.text('Eventually, the guy grunts and cums all over Mira\'s face and into her mouth. Finally, the sharply dressed man pulls Mira out of the car, hands her a few bills and then drives off.');
    scene.text('Mira walks back towards the road, counting the money he gave her as she absentmindedly licks the cum as it drips down her face. Finally, she smiles and shows you the money as you join her.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    if (((st as any).MiraVars ?? 0)?.['pimp'] === 1) {
      qspCall(st, 'money', 'earn', 200, 'cash');
    }
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gad_prostitutes', 'just_mira');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWatchClose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/sex/miraprost2_1.mp4');
  scene.text('Mira and the guy jump into the back of the van, and you watch as he starts fucking her wet pussy. His hand covers her mouth as she screams in ecstasy. The guy pounds his 20cm cock deep into her pussy. From Mira\'s grunts of partial joy and partial pain, you know the guy is hitting or entering her cervix.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hide', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraprost2_2.mp4');
    scene.text('You have to duck behind some bushes as they move outside the van. The guy continues to pound into Mira\'s pussy until he cums… and cums… and cums. ');
    scene.text('After the wild sex, Mira and the guy sit in the van and talk. He gives her a nice wad of cash, and she starts walking back towards the road. She smiles at you and shows you the money as you join her.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    if (((st as any).MiraVars ?? 0)?.['pimp'] === 1) {
      qspCall(st, 'money', 'earn', 200, 'cash');
    }
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gad_prostitutes', 'just_mira');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'gad_prostitutes', 'work_alone');
  // TODO-QSP: end
  scene.build();
}

function enterWorkAlone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'gad_prostitutes', 'work');
  (s as any).prostitution_location = 'gadukino';
  qspCall(s, 'stat', '');
  qspCall(s, 'prostitution_functions', 'parameters');
  if (((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] === '') {
    scene.text('If you want, you can tell your clients a different name.');
    // TODO-QSP: $prostitute_names[$prostitution_location] = input("What name do you want to tell your clients? (Leav...
    if (((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] === '') {
      ((s as any).prostitute_names = (s as any).prostitute_names ?? {})[String((s as any).prostitution_location ?? 0)] = ((s as any).pcs_nickname ?? 0);
    }
  }
  scene.img('images/shared/prostitution/car/normal/negotiation/search.mp4');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('<br>Almost no men will like dirty anal sex, even with a condom, and it\'s probably a safe bet that they won\'t pay a lot for it. So you should start giving yourself an enema before going to work.');
  }
  if (((s as any).mesec ?? 0) > 0) {
    scene.text('<br>You are having your period; most men will pay less for vaginal sex during that time of the month.');
  }
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1) {
    scene.text('<br>You have visible cum stains on you. Most clients won\'t like that and will offer less money.');
  }
  if (((s as any).prostitute ?? 0)?.['earnings_day'] > 0) {
    // TODO-QSP: 'You have earned <<$func(''money'', ''string_profit'', prostitute[''earnings_day''])>> today.'+iif(p...
  }
  if (((s as any).prostitute ?? 0)?.['payment_method'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEventCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Look for a client (0:30)', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Look for a client (0:30)', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'prostitution_car_negotiation', 'look_client');
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0  &&  (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_undressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_vaginal_mod'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_anal_mod'] === 1)) {
    scene.actions([
      { label: 'Remove the cum from your body (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['makeup_wipes'] = ((st as any).mc_inventory['makeup_wipes'] ?? 0) - (1);
    (st as any).cumspclnt = 20;
    qspCall(st, 'cum_cleanup', '');
    qspGoto(st, 'gad_prostitutes', 'work');
  } },
    ]);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] === 0) {
      scene.text('<br>You don\'t have any tissues with you to remove cum from your body.');
    }
  }
  qspCall(s, 'prostitution_car_negotiation', 'general_description');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop working for now', goto: ['gad_prostitutes', 'start'] },
  ]);
  scene.build();
}

function enterEventCheck(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'pimp_mira':
      enterPimpMira(s, scene);
      break;
    case 'mira_rebels':
      enterMiraRebels(s, scene);
      break;
    case 'just_mira':
      enterJustMira(s, scene);
      break;
    case 'watch_mira':
      enterWatchMira(s, scene);
      break;
    case 'watch_from_hiding':
      enterWatchFromHiding(s, scene);
      break;
    case 'watch_close':
      enterWatchClose(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    case 'work_alone':
      enterWorkAlone(s, scene);
      break;
    case 'event_check':
      enterEventCheck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_prostitutes: LocationDef = {
  name: 'gad_prostitutes',
  title: '<center><h4>Main Road near Gadukino</h4></center>',
  region: 'gadukino',
  locationType: 'public_outdoors',
  enter: enter,
};
