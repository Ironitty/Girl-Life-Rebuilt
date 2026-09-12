import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'burger', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Diner Bystroeshka</b></center>');
  scene.img('images/locations/city/citycenter/diner/burger.jpg');
  scene.text('A bright advertising on the wall reads, "The most nutritious food in the county"');
  scene.text('There is a <a href="exec:gt \'butoilet\'">WC</a> for visitors.');
  if (((s as any).BurgerQW ?? 0)?.['BossSlut'] > 0) {
    scene.text('<a href="exec:gt \'burger\', \'boss\'">The Office of the Director</a> Anatoly Borisovich');
  }
  if (((s as any).BurgerQW ?? 0)?.['IlyQW'] === 2) {
    scene.actions([
      { label: 'Go into the office to Anatoly Borisovich', goto: ['burger', 'office'] },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_diner_dishwasher'] === '') {
    scene.actions([
      { label: 'Ask about work', goto: ['burger', 'apply'] },
    ]);
  } else {
    if (((s as any).job_shifts_total ?? 0)?.['city_diner_dishwasher'] >= 3  &&  ((s as any).job_status ?? 0)?.['city_diner_floor_washer'] === '') {
      scene.actions([
        { label: 'Go to the manager', goto: ['burger', 'manager'] },
      ]);
    }
  }
  if (((s as any).job_status ?? 0)?.['city_diner_secretary'] !== 'employed') {
    if (((s as any).job_status ?? 0)?.['city_diner_dishwasher'] === 'employed'  &&  ((s as any).job_last_work_day ?? 0)?.['city_diner_dishwasher'] !== ((s as any).daystart ?? 0)  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_diner_dishwasher') === 1) {
      scene.actions([
        { label: 'Wash the dishes for <<$func(\'money\', \'string_profit\', 70)>> (1:00)', goto: ['burger', 'dishes'] },
      ]);
    }
    if (((s as any).job_status ?? 0)?.['city_diner_floor_washer'] === 'employed'  &&  ((s as any).job_last_work_day ?? 0)?.['city_diner_floor_washer'] !== ((s as any).daystart ?? 0)  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_diner_floor_washer') === 1) {
      scene.actions([
        { label: 'Wash the floor for <<$func(\'money\', \'string_profit\', 70)>> (1:00)', goto: ['burger', 'floor'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the diner', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
    { label: 'Order take-out (0:20) [+$func(\'money\', \'get_cost_string\', 315)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 315) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 315);
      scene.actions([{ label: 'Continue', goto: ['food', 'fast_food'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterOffice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'burger', 'office');
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.text('You go to the office of the owner. He is sitting at his desk, dealing with your papers. Anatoly Borisovich looks at you and says, "Well? Do you have any news?"');
  if (((s as any).BurgerQW ?? 0)?.['IlyQWEvidence'] === 1) {
    scene.actions([
      { label: 'Show proof', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).BurgerQW ?? {})['IlyQW'] = 6;
    ((s as any).BurgerQW ?? {})['IlyQWTatianaHelp'] = 0;
    ((s as any).BurgerQW ?? {})['IlyQWEvidence'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You show the recording, where Ilyushkin confesses and promises to return the money, to Anatoly Borisovich. Anatoly Borisovich takes the record and says, that he understands and will take the statement to the police.');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['burger', 'start'] },
    { label: 'Repay the debt [+$func(\'money\', \'get_cost_string\', 650000...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 650000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 650000);
      ((s as any).BurgerQW ?? {})['IlyQW'] = 5;
      qspCall(s, 'stat', '');
      scene.text('You get the money out and hand it over to Anatoly Borisovich. He counts it and promises not to prosecute you anymore.');
      scene.actions([
        { label: 'Leave', goto: ['burger', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterApply(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'burger', 'apply');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: dynamic text: You go into the manager's office where you meet a smart girl. She begins to tell...
  scene.text(`You go into the manager's office where you meet a smart girl. She begins to tell you, that you can work almost every day, "Come in any time, run the snack bar and wash the dishes for 1:00. You will get ${qspFunc(s, 'money', 'string_profit', 70)} immediately on hand."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse and leave', goto: ['burger', 'start'] },
    { label: 'Accept work', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_employed', 'city_diner_dishwasher');
    scene.text('You agree to work.');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterManager(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'burger', 'manager');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: dynamic text: You go to the office of the manager. The girl tells the manager that you are doi...
  scene.text(`You go to the office of the manager. The girl tells the manager that you are doing good work and offers you another part-time job, "You can wash the floors in the morning, from 8 to 9. 1 hour of cleaning floors will get you ${qspFunc(s, 'money', 'string_profit', 70)} immediately on hand."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse and leave', goto: ['burger', 'start'] },
    { label: 'Agree to work', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_employed', 'city_diner_floor_washer');
    ((s as any).BurgerQW ?? {})['sergeyQWServiced1'] = 0;
    ((s as any).BurgerQW ?? {})['sergeyQWServiced2'] = 0;
    scene.text('You agree to work.');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDishes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'lower', 'medium');
  qspCall(s, 'jobs', 'clock', 'city_diner_dishwasher');
  qspCall(s, 'jobs', 'paycheck', 'city_diner_dishwasher');
  qspCall(s, 'sweat', 'add', 10);
  if (((s as any).BurgerQW ?? 0)?.['Level'] === 10) {
    ((s as any).BurgerQW ?? {})['Level'] = 0;
  }
  scene.img('images/shared/home/kitchen/dirt.jpg');
  // TODO-QSP: dynamic text: You clean the food residue and grease from the dirty dishes for an hour. Afterwa...
  scene.text(`You clean the food residue and grease from the dirty dishes for an hour. Afterwards you are given ${qspFunc(s, 'money', 'string_profit', 70)} for your work.`);
  if (((s as any).pcs_apprnc ?? 0) >= 80  &&  (((s as any).job_shifts_total ?? 0)?.['city_diner_dishwasher'] + ((s as any).job_shifts_total ?? 0)?.['city_diner_floor_washer']) >= 7  &&  ((s as any).BurgerQW ?? 0)?.['Level'] < 10) {
    if (((s as any).BurgerQW ?? 0)?.['Level'] === 1) {
      // TODO-QSP: dynamic text: Out of the his office comes the owner of the bistro smiling at you. "<<$pcs_nick...
      scene.text(`Out of the his office comes the owner of the bistro smiling at you. "${((s as any).pcs_nickname ?? 0)}. My offer still stands. Would you like to go to a restaurant?"`);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['Level'] === 0) {
        ((s as any).BurgerQW ?? {})['Level'] = 1;
        scene.text('Out of the his office comes the owner of the bistro and nearly bumps into you.');
        scene.text('"Oh, sorry. How could I not see such a charming girl."');
        scene.text('"Don\'t worry", you respond with a smile.');
        scene.text('"Have we met? I am Anatoly Borisovich."');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>."
        scene.text(`"${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('Anatoly takes your hand and kisses it.');
        scene.text('"Would you like to dine somewhere outside of this hole?"');
      }
    }
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['burger', 'start'] },
      ]);
    }
    return;
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 10;
    scene.text('"Let\'s go to the shop first and pick up a gorgeous dress for you. You are not allowed in the restaurant with anything else." says Anatoly while walking you to his car.');
    qspCall(s, 'npcStat', 'A74');
    scene.actions([
      { label: 'Get in the car', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).BurgerQW ?? {})['Level'] = 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/car.jpg');
    scene.text('In the car Anatoly takes your hand and doesn\'t let go for the whole ride.');
    scene.text('You arrive at a very expensive boutique with a french name.');
    scene.text('Anatoly tells you to pick out a dress.');
    scene.text('After showing him a few dresses, he chooses one and tells you to go to the dressing room.');
    scene.actions([
      { label: 'Go into the fitting room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/butic.jpg');
    scene.text('You undress and begin to inspect the dress.');
    scene.text('Suddenly Anatoly comes into the dressing room.');
    scene.text('"Sorry, I could not resist to take a look at your beauty."');
    scene.text('Looking at the dresses, Anatoly says, ');
    // TODO-QSP: dynamic text: "I think you should take this one. It is the most expensive one. And I think, <<...
    scene.text(`"I think you should take this one. It is the most expensive one. And I think, ${((s as any).pcs_nickname ?? 0)}, you should be very thankful for such a gift."`);
    scene.text('Anatoly\'s eyes point at his pants showing what he wants from you.');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Thank you very much. (Deny) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Thank you very much. (Deny) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You grin and say, "Thank you very much." Anatoly flushes and says emphatically, "You know what I mean." He unbuttons his pants and pulls out his hard member.');
    scene.text('You laugh, "Oh yes, I understand perfectly. You can wear this dress yourself, if you think I\'m spreading my legs for every fat cat, who fancies himself the king of the world. So don\'t insult my intelligence and put your ugly dick back in your pants. If you think I am going to suck you off for buying me a dress you are a bigger idiot than I thought. Wo do you think you are? Casanova? Are you fucking serious?"');
    scene.text('Antaloy\'s face turns red with anger and begins to threaten you, "Yes I am, I\'ll fire you!"');
    scene.text('You laugh in his face, "Oh I\'m scared. Alright fire me and then use this dress as a rag to wash the dishes."');
    scene.text('Anatoly pale, flushed and hissing angrily jumps out of the fitting followed by your loud laughter.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 50;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'clothing', 'add_item', 'cats_dress', 23);
    scene.img('images/locations/city/citycenter/diner/sex/bj.jpg');
    scene.text('You squat down in front of Anatoly, he unbuttons his pants and pulls out his penis. You lean over his hard cock and kiss it, feeling its warmth. You run your tongue along his cock finally putting it in your big wet mouth and start to suck his dick.');
    scene.text('Soon Anatoly groans and you feel a spurt of warm liquid like in your mouth. You are giving your best to swallow all of his cum, trying not to choke. Anatoly straightens his clothes and leaves.');
    scene.text('You feel a little woozy as you walk out of the dressing room and look for Anatoly.');
    scene.text('He smiles and gestures to the seller who takes the dress.');
    qspCall(s, 'arousal', 'bj', 15, 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A74', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Exit from the boutique', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/car.jpg');
    // TODO-QSP: dynamic text: "Whew, <<$pcs_nickname>>. I'm a little tired. Let's go to a restaurant some othe...
    scene.text(`"Whew, ${((s as any).pcs_nickname ?? 0)}. I'm a little tired. Let's go to a restaurant some other time." Anatoly tells you, taking you by the hand as he leads you to his car. You quickly get to your home and Anatoly says goodbye to you.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Out of the car', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Hesitate', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You hesitate, not sure what to do. Anatoly Borisovich takes you by the shoulders and pushes you down, making you squat in front of him helplessly. He unbuttons his pants and pulls out his already hard dick.');
    scene.actions([
      { label: 'Look at him frightened', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).BurgerQW ?? {})['Level'] = 50;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'clothing', 'add_item', 'cats_dress', 24);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/sex/pr.jpg');
    scene.text('You look up at him startled as you notice the hot head of his cock resting on your lips. Anatoly pushes his dick to your lips. "Don\'t shy baby, lick it with your tongue."');
    scene.actions([
      { label: 'Start licking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/sex/pr1.jpg');
    scene.text('You hesitantly stick out your tongue and lick the purple head again and again. Soon you are running your tongue along the whole length of his cock, wetting it with your saliva.');
    scene.actions([
      { label: 'Keep licking his dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/sex/pr2.jpg');
    scene.text('You continue to lick his dick and Anatoly Borisovich puts his hand on the back of your head pushing your head into is groin. You feel his cock fill up your mouth almost completely as your wet lips part to take in the hot and firm flesh of his member. "That\'s it baby, suck it now." says Anatoly Borisovich as he starts moving his hips, slowly fucking your mouth. You wrap your lips tightly around his member, trying not to choke as his thrusts become more and more forceful.');
    qspCall(s, 'arousal', 'bj', 2, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/diner/sex/pr3.jpg');
    scene.text('You actively suck his dick and feel your jaw getting tired. Suddenly a hot jet shoots into your mouth. Surprised you release his member from your mouth an a jet of sperm hits you on the nose. Semen spills out of your mouth and hangs on your chin. Anatoly Borisovich takes your head and sticks his member back in your mouth to clean of the sperm.');
    qspCall(s, 'arousal', 'bj', 4, 'sub', 'humiliation');
    qspCall(s, 'npcStat', 'A74');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A74', 1, 0, 10000, 13);
    qspCall(s, 'cum_call', 'face', 'A74', 1, 0, 10000, 27);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit on the floor', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    (s as any).cumspclnt = 11;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/pc/body/cum/cumface/custom/3.jpg');
    scene.text('Finally Anatoly Borisovich stops, puts his cleaned off dick back in his pants and starts to button them up. You sit on the floor stunned with semen dripping from your face. You feel taste the distinct flavor of semen in your mouth. Anatoly Borisovich helps you back to your feet and quickly walks out of the dressing room. You try to clean the traces of sperm from your face.');
    scene.actions([
      { label: 'Exit out of the dressing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You come out of the dressing room, your face red with shame. You feel like everyone is already aware of the fact that you just sucked a dick in a public place. Anatoly Borisovich tells the saleswoman that he will buy the dress for you and pays. The saleswoman wraps the dress for you and you feel her gaze on your face as she gives you the package.');
    scene.actions([
      { label: 'Exit from the boutique', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/car.jpg');
    // TODO-QSP: dynamic text: You walk out of the boutique with Anatoly Borisovich. "Whew, <<$pcs_nickname>>. ...
    scene.text(`You walk out of the boutique with Anatoly Borisovich. "Whew, ${((s as any).pcs_nickname ?? 0)}. I'm a little tired. Let's go to a restaurant some other time." Anatoly tells you, taking you by the hand as he leads you to his car. You quickly get to your home and Anatoly says goodbye to you.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Out of the car', goto: ['city_residential', ''] },
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).BurgerQW ?? 0)?.['Level'] === 20) {
      (s as any).bisrand = Math.floor(Math.random() * 11) + 0;
      if (((s as any).bisrand ?? 0) === 10) {
        scene.text('Out of the office of the owner comes Anatoly Borisovich. Upon seeing you he turns away with an arrogant expression.');
      }
    } else {
      if (((s as any).BurgerQW ?? 0)?.['Level'] === 56) {
        // TODO-QSP: dynamic text: When you're finished you are suddenly approached by the manager Ilyushkin. "Okay...
        scene.text(`When you're finished you are suddenly approached by the manager Ilyushkin. "Okay ${((s as any).pcs_nickname ?? 0)}. I'm sorry. I was wrong about you. I do not know what got into me. We are currently looking for an Assistant Manager. I think you can do it. You have the nature for it. Well? What do you say?"`);
        return;
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You agree with the proposal to become Ilyushkin\'s assistant manager. Ilyushkin immediately beams at you with happiness. "Well then, here is your first work assignment. Here are the keys to the Anatoly Borisovich\'s office. Take them with you when you go home. Go to his office, open the safe and take the envelope in there. Do not forget to close the safe afterwards. Bring the envelope to me. Did you understand everything? Then go!"');
    scene.actions([
      { label: 'I changed my mind', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 57;
    qspCall(s, 'stat', '');
    scene.text('You refuse Ilyushkin\'s offer and notice a flash of annoyance on his face. Disappointed he says to you. "Well, the offer stands."');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
      { label: 'Take the key and go into Anatoly Borisovich\'s office', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 111;
    qspCall(s, 'stat', '');
    scene.text('Taking key from Ilyushkin you go to the office of the owner. You open the door, enter the office and go to the safe. When you open the safe you see some documents and a thick envelope.');
    scene.actions([
      { label: 'Look in the envelope', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['IlySecurityCamDesc'] = 'You look into the envelope. Then you close the safe and head to the exit.';
    qspCall(s, 'stat', '');
    scene.text('You look into the envelope and see a thick wad of money. You guess, that it amounts to about half a million. A surprised whistle escapes your mouth.');
    scene.actions([
      { label: 'Take the envelope to Ilyushkin', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['IlyQWDay'] = ((s as any).daystart ?? 0);
    ((s as any).BurgerQW ?? {})['IlyQW'] = 1;
    qspCall(s, 'jobs', 'set_fired', 'city_diner_dishwasher');
    if (((s as any).job_status ?? 0)?.['city_diner_floor_washer'] === 'employed') {
      qspCall(s, 'jobs', 'set_fired', 'city_diner_floor_washer');
    }
    qspCall(s, 'stat', '');
    scene.text('Coming out of the office, you see Ilyushkin standing in the corridor at the cooler talking on the cell phone. Seeing you, he waves you over. You come up and give the envelope to Ilyushkin. He quickly picks it up and puts it in his jacket pocket. After that, he nods. You can go. You want to give him the keys to the office, but Ilyushkin shakes his head and closing his hand tells you. "Take them home with you. Come back tomorrow, we shall discuss the details of your new appointment."');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Take the envelope to Ilyushkin', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['IlySecurityCamDesc'] = 'You take the envelope, close the safe and head out.';
    ((s as any).BurgerQW ?? {})['IlyQWDay'] = ((s as any).daystart ?? 0);
    ((s as any).BurgerQW ?? {})['IlyQW'] = 1;
    qspCall(s, 'jobs', 'set_fired', 'city_diner_dishwasher');
    if (((s as any).job_status ?? 0)?.['city_diner_floor_washer'] === 'employed') {
      qspCall(s, 'jobs', 'set_fired', 'city_diner_floor_washer');
    }
    qspCall(s, 'stat', '');
    scene.text('Coming out of the office, you see Ilyushkin standing in the corridor at the cooler talking on the cell phone. Seeing you, he waves you over. You come up and give the envelope to Ilyushkin. He quickly picks it up and puts it in his jacket pocket. After that, he nods. You can go. You want to give him the keys to the office, but Ilyushkin shakes his head and closing his hand tells you. "Take them home with you. Come back tomorrow, we shall discuss the details of your new appointment."');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          { label: 'No', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 57;
    qspCall(s, 'stat', '');
    scene.text('You refuse Ilyushkin\'s offer and notice his face flashing with a shadow of annoyance. Disappointed he says to you. "Well, the offer stands."');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).BurgerQW ?? 0)?.['Level'] === 50) {
          // TODO-QSP: dynamic text: During your work, you learned that Anatoly Borisovich is away on business affair...
          scene.text(`During your work, you learned that Anatoly Borisovich is away on business affairs and Ilyushkin is replacing him as the manager. When you are getting ready to go to work Ilyushkin comes out of the manager's office and says in a conspiratorial tone, "Well ${((s as any).pcs_nickname ?? 0)}, you obviously do not want to work for a couple of pennies? Come to me for special work. Special work for special Salary."`);
          scene.actions([
            { label: 'Go to the manager\'s office', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).BurgerQW ?? {})['Level'] = 55;
    qspCall(s, 'npcStat', 'A76');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/sex/bj1.jpg');
    scene.text('You go into the office and close the door. Ilyushkin is sitting in a chair in front of you seemingly at ease, lounging in it. As you go over to the manager waiting for what he would do, he sneers at you and deftly grabs you by the hand pulling you towards him.');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    ((s as any).BurgerQW ?? {})['Level'] = 56;
    scene.img('images/locations/city/citycenter/diner/sex/bj1.jpg');
    scene.text('You escape from Ilyushkin\'s hands who was not expecting such a reaction. He glares at you, "You suck off Borisovich but get squeamish with his deputy?" You are taken aback by these words. How does he know about what happened in the fitting room. Apparently your thoughts are reflected on your face and Ilyushkin chuckles. "Yes Borisovich himself bragged about it. If you thought, Borisovich wouldn\'t tell anyone you\'re an idiot. But I won\'t tell anyone. And I\'m offering you a decent reward. So, be a good girl and show me what you can do with this mouth of yours. "');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'That\'s bullshit! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'That\'s bullshit! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['burger', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 55;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.img('images/locations/city/citycenter/diner/sex/bj3.jpg');
    scene.text('Still standing in front of Ilyushkin you bend over even more gently lick his member with your tongue, again and again. Finally your lips wrap around his cock and begin to suck it. His curly pubes tickle your nose with every movement, as you put his whole member in your mouth.');
    scene.text('Ilyushkin finally lets out an audible moan and without warning begins to cum in your mouth. A Jet of hot liquid hits you in the mouth. Your eyes widen, but you continue to suck his seed-spewing dick until finally you have a mouth full of semen. You can not contain it anymore and as it emerges on your lips and runs down Ilyushkin\'s member.');
    qspCall(s, 'arousal', 'bj', 3, 'sub', 'deepthroat', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow his cum and clean his cock', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'cum_call', 'mouth_swallow', 'A76', 1);
    qspCall(s, 'money', 'earn', 500);
    scene.img('images/locations/city/citycenter/diner/sex/bj4.jpg');
    scene.text('You squat in front of the manager and swallow his sperm as you began to lick the remnants of his semen off of the still standing, but quickly lowering penis.');
    // TODO-QSP: dynamic text: Finally Ilyushkin sinks back, completely satisfied and gives you <<$func('money'...
    scene.text(`Finally Ilyushkin sinks back, completely satisfied and gives you ${qspFunc(s, 'money', 'string_profit', 500)} for the work you have done.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    return;
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/diner/sex/bj2.jpg');
    scene.text('You bend over and come face to face with Ilyushkin, he whispers, unbuttoning his pants, "Get to work with your mouth, baby"');
    scene.actions([
      { label: 'Use your mouth', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.img('images/locations/city/citycenter/diner/sex/bj3.jpg');
    scene.text('Still standing in front of Ilyushkin you bend over even more gently lick his member with your tongue, again and again. Finally your lips wrap around his cock and begin to suck it. His curly pubes tickle your nose with every movement, as you put his whole member in your mouth.');
    scene.text('Ilyushkin finally lets out a loud moan and without warning begins to cum in your mouth. A Jet of hot liquid hits you in the mouth. Your eyes widen, but you continue to suck his seed-spewing dick until finally you have a mouth full of semen. As your mouth can not contain it anymore it emerges on your lips and runs down Ilyushkin\'s member.');
    qspCall(s, 'arousal', 'bj', 3, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow cum and clean his cock', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'cum_call', 'mouth_swallow', 'A76', 1);
    qspCall(s, 'money', 'earn', 500);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/sex/bj4.jpg');
    scene.text('You squat in front of the manager and swallow his sperm before licking the remnants of his semen off of the still standing, but quickly lowering penis.');
    // TODO-QSP: dynamic text: Finally Ilyushkin sinks back, completely satisfied and gives you <<$func('money'...
    scene.text(`Finally Ilyushkin sinks back, completely satisfied and gives you ${qspFunc(s, 'money', 'string_profit', 500)} for the work you have done.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).BurgerQW ?? 0)?.['Level'] === 55) {
            scene.text('Ilyushkin approaches you and says, "I\'ll see you in my office."');
            scene.actions([
              { label: 'Go to the manager\'s office', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 60;
    scene.text('You go into the office where Ilyushkin is sitting at the table and motions you to get under it. You immediately understand what he wants from you.');
    scene.actions([
      { label: 'Crawl under the table', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/diner/sex/bjud.jpg');
    scene.text('You crawl under the table and Ilyushkin pulls out his penis in front of your face. You wrap your lips around it and begin to suck trying to get it into your mouth as deeply as possible. It is cramped and uncomfortable under the table, but you cope with it and after a few minutes of skillfully sucking him off you get Ilyushkin to release his semen into your mouth. You quickly start to swallow, trying to avoid getting your clothes dirty.');
    // TODO-QSP: dynamic text: Afterwards, Ilyushkin takes out <<$func('money', 'string_profit', 500)>> and han...
    scene.text(`Afterwards, Ilyushkin takes out ${qspFunc(s, 'money', 'string_profit', 500)} and hands them to you.`);
    qspCall(s, 'money', 'earn', 500);
    qspCall(s, 'npcStat', 'A76');
    qspCall(s, 'arousal', 'bj', 3, 'sub', 'prostitution');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A76', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).BurgerQW ?? 0)?.['Level'] === 60) {
              scene.text('Ilyushkin is nowhere to be seen and he has not approached you, so you decide to check his office.');
              scene.actions([
                { label: 'Go to the manager\'s office', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 65;
    // TODO-QSP: dynamic text: You come to the office, but it is closed. The deputy manager comes over to you a...
    scene.text(`You come to the office, but it is closed. The deputy manager comes over to you and tells you with a chuckle, "What ${((s as any).pcs_nickname ?? 0)}? Can't work without a dick? I know all about you and our general manager. But he is not here until the end of the week. And if you do not want me to tell other people how you earn a living, then you will go to the office and serve me."`);
    scene.actions([
      { label: 'Nod obediently', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/diner/sex/bj21.jpg');
    scene.text('You go into the office and kneel before the deputy manager. He takes out his member and puts it in your face showering you with the smell of his unwashed crotch. You lick the salty cock and, with a sigh of despair, begin to suck him. The pimply jerk lasts just a few of your movements and begins to violently cum in your mouth. You can\'t keep all his semen in your mouth and it runs down your lips.');
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'npcStat', 'A75');
    qspCall(s, 'arousal', 'bj', 3, 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A75', 1);
    qspCall(s, 'cum_call', 'face', 'A75', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
      { label: 'Send him away', handler: (st: GameState) => {
    scene.text('You contemptuously tell this boy, that he can go to hell with his threats.');
    scene.text('"Ha, listen here slut! My father is the real owner of the bistro and Borisovich is just a hired director. And if he learns that you fuck Borisovich whenever he wants it, it will be very bad for you! So if you want me to keep quiet…"');
    scene.text('After these words, he calls two movers over and says');
    // TODO-QSP: dynamic text: "Guys would you like to blow off some steam on this nymph? Don't worry, she enjo...
    scene.text(`"Guys would you like to blow off some steam on this nymph? Don't worry, she enjoys it. She is here to serve. Am I right ${((s as any).pcs_nickname ?? 0)}?`);
    qspCall(s, 'willpower', 'group', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    ((s as any).BurgerQW ?? {})['Level'] = 61;
  }, goto: ['burger', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    ((s as any).BurgerQW ?? {})['Level'] = 70;
    (s as any).guy = ((s as any).guy ?? 0) + (3);
    scene.img('images/locations/city/citycenter/diner/sex/tri.jpg');
    scene.text('You jitter and mumble, "Yes." as you stand in front of the three men. The movers smile and you are quickly grabbed by your hand and taken to the warehouse. They help you undress and put you on your knees. Then they pull out their cocks waiting for you to serve them.');
    scene.text('You begin to diligently suck and stroke the cocks of the three man. Soon they groan and one of them grabs your head with one hand, holding his erect cock with the other.');
    qspCall(s, 'npcStat', 'A75', 'a');
    qspCall(s, 'npcgeneratec', '', 0, 'First Moving Man', Math.floor(Math.random() * 23) + 18);
    ((s as any).BurgerQW ?? {})['GroupSex1'] = ((s as any).npclastgenerated ?? 0);
    // TODO-QSP: gs 'npcStat', $BurgerQW['GroupSex1'], 'b'
    qspCall(s, 'npcgeneratec', '', 0, 'Second Moving Man', Math.floor(Math.random() * 23) + 18);
    ((s as any).BurgerQW ?? {})['GroupSex2'] = ((s as any).npclastgenerated ?? 0);
    // TODO-QSP: gs 'npcStat', $BurgerQW['GroupSex2'], 'c'
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'bj', (-1), ((s as any).npcID2 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'bj', (-1), ((s as any).npcID3 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'hj', (-1), ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'hj', (-1), ((s as any).npcID2 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'hj', (-1), ((s as any).npcID3 ?? 0), 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let them cum on you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A75', 1);
    // TODO-QSP: gs 'cum_call', 'face', $BurgerQW['GroupSex1']
    // TODO-QSP: gs 'cum_call', 'face', $BurgerQW['GroupSex2']
    ((s as any).stat ?? {})['facial'] = (((s as any).stat ?? {})['facial'] ?? 0) + (3);
    scene.img('images/shared/sex/group/gopdbj3.jpg');
    scene.text('Hot jets of sperm slap you in the face, you close your eyes and just feel the stinky seed on your skin. Soon after the sprays of semen stop and your face is all covered with a thick layer of sticky cum. The guys look satisfied and laugh at you. Afterwards they exit the warehouse leaving you by yourself.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).BurgerQW ?? 0)?.['Level'] >= 65  &&  ((s as any).BurgerQW ?? 0)?.['sergeyQWServiced1'] !== 3) {
                scene.text('The pimply deputy manager comes to you and, taking your hand, leads you into his office.');
                scene.text('In the office, he sits down on a chair pulls out his dick and puts you in front of him on all fours.');
                return;
                scene.actions([
                  { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/diner/sex/bj31.jpg');
    scene.text('You kneel in front of the kid sitting in a chair and begin to diligently suck his dick. You caress his cock and testicles with your tongue while simoultaneously stroking his shaft with your hand.');
    qspCall(s, 'npcStat', 'A75');
    qspCall(s, 'arousal', 'bj', 3, 'sub', 'prostitution');
    qspCall(s, 'arousal', 'hj', (-3), 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 300);
    ((s as any).BurgerQW ?? {})['sergeyQWServiced2'] = (((s as any).BurgerQW ?? {})['sergeyQWServiced2'] ?? 0) + (1);
    if (((s as any).BurgerQW ?? 0)?.['sergeyQWServiced2'] === 10) {
      ((s as any).BurgerQW ?? {})['sergeyQWServiced1'] = 3;
    }
    scene.img('images/shared/sex/cum/mouth/cum19.jpg');
    // TODO-QSP: dynamic text: A hot jet of sperm slaps you in the mouth, while you continue to stroke his memb...
    scene.text(`A hot jet of sperm slaps you in the mouth, while you continue to stroke his member. You are careful not to spill a drop of the nasty smelling liquid out of your mouth. Finally the stream dries up and you swallow the sperm. He grins and tosses ${qspFunc(s, 'money', 'string_profit', 300)} on the floor. You pick them up and hide them in your pocket as you rise up from your knees and leave the office.`);
    qspCall(s, 'cum_call', 'mouth_swallow', 'A75', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
                ]);
              } else {
                if ((((s as any).BurgerQW ?? 0)?.['Level'] === 57  &&  ((s as any).BurgerQW ?? 0)?.['BossSlut'] === 0)  ||  (((s as any).BurgerQW ?? 0)?.['Level'] >= 65  &&  ((s as any).BurgerQW ?? 0)?.['BossSlut'] === 0  &&  ((s as any).BurgerQW ?? 0)?.['sergeyQWServiced1'] === 3)) {
                  ((s as any).BurgerQW ?? {})['BossSlut'] = 1;
                  if (((s as any).BurgerQW ?? 0)?.['sergeyQWServiced1'] === 3) {
                    ((s as any).BurgerQW ?? {})['sergeyQWServiced1'] = 4;
                  }
                  // TODO-QSP: dynamic text: After you finish, you see Anatoly Borisovich. He nods and tells you "Hello <<$pc...
                  scene.text(`After you finish, you see Anatoly Borisovich. He nods and tells you "Hello ${((s as any).pcs_nickname ?? 0)}, when you're done, come to me."`);
                  return;
                  scene.actions([
                    { label: 'Leave', goto: ['burger', 'start'] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['burger', 'start'] },
  ]);
  scene.build();
}

function enterFloor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'lower', 'medium');
  qspCall(s, 'jobs', 'clock', 'city_diner_floor_washer');
  qspCall(s, 'jobs', 'paycheck', 'city_diner_floor_washer');
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/office/clener1.jpg');
  // TODO-QSP: dynamic text: You wash the floors of the bistro for an hour. Afterwards you are given <<$func(...
  scene.text(`You wash the floors of the bistro for an hour. Afterwards you are given ${qspFunc(s, 'money', 'string_profit', 70)} for your work.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['burger', 'start'] },
  ]);
  scene.build();
}

function enterBoss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'burger', 'boss');
  qspCall(s, 'stat', '');
  if (((s as any).BurgerQW ?? 0)?.['BossSlut'] === 10) {
    scene.actions([{ label: 'Continue', goto: ['burger', 'bossSlut_10'] }]);
  } else {
    if (((s as any).BurgerQW ?? 0)?.['BossSlut'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['burger', 'bossSlut_01'] }]);
    } else {
      if (((s as any).BurgerQW ?? 0)?.['BossSlut'] === 2  &&  ((s as any).BurgerQW ?? 0)?.['BossSlutLastServed'] === ((s as any).daystart ?? 0)) {
        scene.text('Knocking you walk into the office to Anatoly Borisovich. He looks at you angrily, "I said, get out of here."');
        scene.actions([
          { label: 'Leave', goto: ['burger', 'start'] },
        ]);
      } else {
        if (((s as any).BurgerQW ?? 0)?.['BossSlut'] === 2) {
          ((s as any).BurgerQW ?? {})['BossSlutLastServed'] = ((s as any).daystart ?? 0);
          // TODO-QSP: dynamic text: Knocking you walk into the office to Anatoly Borisovich. He looked at you grimly...
          scene.text(`Knocking you walk into the office to Anatoly Borisovich. He looked at you grimly and pulls out ${qspFunc(s, 'money', 'string_profit', 300)}, "Get down on your knees and get to work, slut."`);
          qspCall(s, 'willpower', 'bj', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['burger', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 300);
    ((s as any).BurgerQW ?? {})['BossSlutLastServed'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/city/anatoly/sex/bj2.jpg');
    scene.text('You kneel down and take the money from the floor. Anatoly Borisovich pulls his already hard member out and holds it in front of your face. You wrap your lips around it and begin to suck as the hard cock fills your mouth. Anatoly Borisovich grits his teeth with pleasure "Suck it slut and don\'t forget to swallow every last drop!" You feel his sperm hit the inside of your mouth and begin to quickly swallow his cum to prevent yourself from choking. After you finish, Anatoly Borisovich puts his dick back in his pants. "Now get out."');
    qspCall(s, 'npcStat', 'A74');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBossSlut_01(s: GameState, scene: SceneBuilder): void {
  scene.text('You enter the manager\'s office. Anatoly Borisovich is sitting at the table studying some documents. When he sees you, he puts them aside and invites you to sit on a chair.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit on a chair', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).BurgerQW ?? {})['BossSlut'] = 10;
    qspCall(s, 'stat', '');
    if (((s as any).BurgerQW ?? 0)?.['Level'] === 57) {
      ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) + (200);
      scene.text('You sit on a chair and Anatoly Borisovich smiles at you. "I\'m so glad this damn trip is over. I really missed you. Incidentally I do not come empty-handed, here\'s a gift." with these words Anatoly Borisovich puts some expensive cosmetics on the table. "And yet, I have to tell you about some facts. I am married and I have kids. So do not even think about marriage, it won\'t work. My wife is the daughter of a very influential deputy and currently I am only the manager of this lousy diner. Very soon I\'ll get the post of deputy minister of construction, but for now I just need to do my job here. So, don\'t start any trouble. I need loyal people, and I want you to be my secretary. Did you get the diploma for the secretary course? "');
      if (((s as any).license ?? 0)?.['secretary'] === 1) {
        scene.actions([
          { label: 'Yes, I have a diploma', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You tell him that you already have a secretary diploma. Anatoly Borisovich smiles. "That\'s good. Listen, I need to make a couple of calls, so leave now."');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).license ?? 0)?.['secretary'] === 0  &&  ((s as any).license ?? 0)?.['secretary_enrolled'] > 0) {
          scene.actions([
            { label: 'I do not have a diploma, but I am a secretary', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You tell him that you do not have a diploma, but are experienced at working as a secretary. Anatoly Borisovich smiles. "That\'s good. Douchishsya, come to me. Listen, I now need to make a couple of calls, leave now."');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).license ?? 0)?.['secretary'] === 0  &&  ((s as any).license ?? 0)?.['secretary_enrolled'] === 0) {
            scene.actions([
              { label: 'No', handler: (st: GameState) => {
    ((s as any).license ?? {})['secretary_enrolled'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You shake your head. Anatoly Borisovich smiles. "It doesn\'t matter, I will pay for your training and once you\'re done, come to me."');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).BurgerQW ?? 0)?.['Level'] >= 65) {
        // TODO-QSP: dynamic text: You sit down on a chair and Anatoly Borisovich gives you a grim look. "I did not...
        scene.text(`You sit down on a chair and Anatoly Borisovich gives you a grim look. "I did not think you were so cheap. What is your fee? ${qspFunc(s, 'money', 'string_profit', 300)} for a blowjob?" He pulls ${qspFunc(s, 'money', 'string_profit', 300)} out of his pocket and throws them on the floor. "Get down on your knees and do your work, slut."`);
        qspCall(s, 'willpower', 'bj', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['burger', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 300);
    ((s as any).BurgerQW ?? {})['BossSlut'] = 2;
    ((s as any).BurgerQW ?? {})['BossSlutLastServed'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/city/anatoly/sex/bj2.jpg');
    scene.text('You kneel down and take the money from the floor. Anatoly Borisovich pulls his already hard member out and holds it in front of your face. You wrap your lips around it and begin to suck as the hard cock fills your mouth. Anatoly Borisovich grits his teeth with pleasure "Suck it slut and don\'t forget to swallow every last drop!" You feel his sperm hit the inside of your mouth and begin to quickly swallow his cum to prevent yourself from choking. After you finish, Anatoly Borisovich puts his dick back in his pants. "Now get out."');
    qspCall(s, 'npcStat', 'A74');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'prostitution');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.text('This should not be possible!');
        // TODO-QSP: dynamic text: You should not be able to get here with BurgerQW['Level'] = <<BurgerQW['Level']>...
        scene.text(`You should not be able to get here with BurgerQW['Level'] = ${((s as any).BurgerQW ?? 0)?.['Level']}`);
        scene.actions([
          { label: 'Leave', goto: ['burger', 'start'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBossSlut_10(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'jobs', 'is_work_day', 'city_diner_secretary', ((s as any).daystart ?? 0)) === 0) {
    scene.text('It\'s the weekend and Anatoly Borisovich is not here.');
  } else {
    if (qspFunc(s, 'jobs', 'is_work_time', 'city_diner_secretary') === 0) {
      scene.text('Anatoly Borisovich is not here.');
    } else {
      scene.text('Anatoly Borisovich is sitting at the table talking to someone on the phone.');
    }
  }
  if (((s as any).job_status ?? 0)?.['city_diner_secretary'] === 'fired') {
    if (qspFunc(s, 'jobs', 'is_arrival_time', 'city_diner_secretary') === 1) {
      // TODO-QSP: dynamic text: Anatoly Borisovich looks at you sternly, "<<$pcs_nickname>>, you're fired. Go aw...
      scene.text(`Anatoly Borisovich looks at you sternly, "${((s as any).pcs_nickname ?? 0)}, you're fired. Go away, we're done, I love my wife more than you."`);
    }
  } else {
    if (((s as any).job_status ?? 0)?.['city_diner_secretary'] === 'employed') {
      if (qspFunc(s, 'jobs', 'is_arrival_time', 'city_diner_secretary') === 1) {
        if ((!((s as any).POffice ?? 0))) {
          // TODO-QSP: dynamic text: Anatoly Borisovich looks at you sternly, "<<$pcs_nickname>>, why aren't you dres...
          scene.text(`Anatoly Borisovich looks at you sternly, "${((s as any).pcs_nickname ?? 0)}, why aren't you dressed properly? Go home and come back tomorrow dressed appropriately, you're not working today!"`);
        } else {
          scene.actions([
            { label: 'Work', goto: ['burgerWork', 'start'] },
            { label: 'Resign', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_terminated', 'city_diner_secretary');
    (s as any).minut = ((s as any).minut ?? 0) + 20;
  }, goto: ['burger', 'start'] },
          ]);
        }
      }
    } else {
      if (qspFunc(s, 'jobs', 'is_work_day', 'city_diner_secretary', ((s as any).daystart ?? 0)) === 1) {
        if (((s as any).license ?? 0)?.['secretary'] === 1) {
          scene.actions([
            { label: 'Show your secretary diploma', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You show Anatoly Borisovich your diploma and he asks you, "Do you want to work for me?"');
    if (((s as any).job_status ?? 0)?.['city_diner_secretary'] === ''  &&  qspFunc(s, 'jobs', 'check_employment_possible', 'city_diner_secretary') === 1) {
      scene.actions([
        { label: 'Ask about the work', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You ask about the job. Anatoly Borisovich smiles a little, "You can think about ...
    scene.text(`You ask about the job. Anatoly Borisovich smiles a little, "You can think about it, I won't force you, but I'll pay you a normal salary. You will get ${qspFunc(s, 'money', 'string_profit', 1250)} per day. I'm looking for loyalty, hard work, and strict compliance with my guidelines."`);
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
      { label: 'Take the job', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'jobs', 'set_employed', 'city_diner_secretary');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You agree to become a secretary to Anatoly Borisovich. He takes your CV, makes a...
    scene.text('You agree to become a secretary to Anatoly Borisovich. He takes your CV, makes a copy of your passport and diploma, and tells you. "Come to work here every weekday, no later than \'+func(\'time\', \'get_time_string\', 9, 0)+\', you must wear an office outfit. You will receive calls, take letters, and copy documents, and you have to do any other general office work as required. You will work until \'+func(\'time\', \'get_time_string\', 17, 0)+\', your salary will be paid into your bank account every month."');
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You tell him, that you already work somewhere else. Anatoly Borisovich smiles a ...
    scene.text(`You tell him, that you already work somewhere else. Anatoly Borisovich smiles a little, "What can I do to make you quit your job and work for me? You can think about it, I won't force you, but I'll pay you a normal salary. You will get ${qspFunc(s, 'money', 'string_profit', 1250)} per day."`);
    scene.actions([
      { label: 'Leave', goto: ['burger', 'start'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['burger', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'office':
      enterOffice(s, scene);
      break;
    case 'apply':
      enterApply(s, scene);
      break;
    case 'manager':
      enterManager(s, scene);
      break;
    case 'dishes':
      enterDishes(s, scene);
      break;
    case 'floor':
      enterFloor(s, scene);
      break;
    case 'boss':
      enterBoss(s, scene);
      break;
    case 'bossSlut_01':
      enterBossSlut_01(s, scene);
      break;
    case 'bossSlut_10':
      enterBossSlut_10(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const burger: LocationDef = {
  name: 'burger',
  title: 'Diner Bystroeshka',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
