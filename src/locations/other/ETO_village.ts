import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCommunityAlleys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/1dachi.jpg');
  scene.text('You walk through the alleys. This community is not very populated. Occasionally there are gardeners working in the area. You hear the clank of a saw somewhere at the edge of the forest. At the end of the alley is an artificial reservoir. There are some houses for sale.');
  if (((s as any).exhib ?? 0)?.['status'] === 0) {
    scene.text('You don\'t know anybody here, and the locals haven\'t formed any opinion about you yet.');
  }
  if (((s as any).exhib ?? 0)?.['status'] === 10) {
    scene.text('You can start at the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027ETO_village\u0027, \u0027saw_noise\u0027); return false;">clanging saws</a>.');
  }
  scene.actions([
    { label: 'Go to the forest', goto: ['ETO_village', 'forest_area'] },
    { label: 'Go down to the lake', goto: ['ETO_village', 'lake_area'] },
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterForestArea(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  ((s as any).forest = (s as any).forest ?? {})['rand'] = (Math.floor(Math.random() * 100) + 1);
  scene.img('images/locations/suburban/1fores.jpg');
  scene.text('Leafy forest.');
  if (((s as any).forest ?? 0)?.['rand'] < 30) {
    scene.img('images/locations/suburban/1fores.jpg');
    scene.text('Leafy forest.');
    scene.text('You can see a mushroom picker in the distance.');
    scene.actions([
      { label: 'Get his attention', goto: ['ETO_village', 'mushroom_picker'] },
    ]);
  } else {
    if (((s as any).forest ?? 0)?.['rand'] > 90  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.img('images/locations/suburban/1fores.jpg');
      scene.text('Leafy forest.');
      scene.actions([
        { label: 'Undress', goto: ['ETO_village', 'forest_nude'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterMushroomPicker(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('You wave at the mushroom picker, and he stops to look at you.');
  scene.actions([
    { label: 'Show your pussy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'flash', 'pussy', 'outdoors', 2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/2fores.jpg');
    scene.text('Smiling, you show the mushroom picker your pussy. He stops in his tracks and stares at you, not understanding what\'s happening.');
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterForestNude(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'flash', 5);
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/suburban/3fores.jpg');
  scene.text('You strip down completely and go for a walk in the woods. Your heart pounds in your chest. Fresh air and a gentle warm breeze caress your skin. The sun warms you thoroughly. You thought you would feel cold quickly, but the hot summer sun proves you wrong. You leave your clothes on the ground and hope no one finds them! In this area, there are only mushroom pickers, but what if you meet one? You\'d be so embarrassed! You find a nice clearing where the wind has died down.');
  scene.actions([
    { label: 'Next', handler: (st: GameState) => {
    scene.img('images/locations/suburban/4fores.jpg');
    scene.text('You lie down and soak up the sun in the meadow, completely naked. You don\'t encounter anyone, which is both good and bad. It was nice, though a little stressful. After finishing your sunbathing and relaxing, you need to go back and find your clothes.');
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSpringWater(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/rodnik.jpg');
  scene.text('Spring water.');
  qspCall(s, 'treeCircEntry', 'Village');
  scene.actions([
    { label: 'Drink from the spring', handler: (st: GameState) => {
    if (((st as any).pcs_hydra ?? 0) >= 90) {
      scene.text('You are not thirsty.');
    } else {
      if (((st as any).pcs_hydra ?? 0) < 90) {
        (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
        (st as any).cumspclnt = 2;
        qspCall(st, 'cum_cleanup', '');
        (st as any).pcs_breath = 0;
        scene.text('You gladly drink the spring water.');
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterInfoColumn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/stolbik.jpg');
  scene.text('The writing on the column has some useful information.');
  scene.text(`Nina in the 3rd alley sells goat milk at ${qspFunc(s, 'money', 'string_price', 300)} per liter`);
  if (((s as any).pcs_energy ?? 0) < 70) {
    scene.actions([
      { label: 'Buy milk', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 300);
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      (st as any).frost = 0;
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
      qspCall(st, 'mood', 'raise', 'small');
      qspCall(st, 'stat', '');
      (st as any).fat = ((st as any).fat ?? 0) + (1);
      (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (40);
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
      scene.text('You gladly drink some goat\'s milk.');
      scene.actions([
        { label: 'Leave', goto: ['dachi', ''] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('You feel too full to drink such thick and creamy milk at the moment.');
  }
  scene.actions([
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterNeighborCottage(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/cottage/dachakuz.jpg');
  scene.text('Neighbor\'s cottage.');
  if (((s as any).exhib ?? 0)?.['status'] < 10) {
    scene.actions([
      { label: 'Approach neighbors', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).exhib = (st as any).exhib ?? {})['status'] = 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/kuzmich.jpg');
    scene.text(`You: "Hello! My name is ${((st as any).pcs_nickname ?? '')}, I'm your new neighbor. We haven't met yet."`);
    scene.text('Neighbor: "Hi. I\'m Kuzmich. So you\'re the new neighbor."');
    scene.text('<font color="magenta">You: "Yes. Can you help me? My entire garden is overgrown with weeds, and I\'d like to clean it up."</font>');
    scene.text('Kuzmich: "Well, you can hire some of the local men. They\'re all workers. You can find them across the alley."');
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterSawNoise(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/dachastroy.jpg');
  scene.text('You see a country house under construction. Workers are hauling some boards.');
  scene.actions([
    { label: 'Ask workers to clear your garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/dachastroy.jpg');
    scene.text('You: "Hello! I need to clean up my garden. Could you help? And how much will it cost?"');
    scene.text(`Worker: "For some shoveling work, ${qspFunc(s, 'money', 'string_profit', 3000)}."`);
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    ((st as any).exhib = (st as any).exhib ?? {})['status'] = 11;
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/dachastroy.jpg');
    scene.text('You agree to the price and ask them to clean your vegetable garden.');
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterGardenCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).temp = ((s as any).daystart ?? 0);
  ((s as any).exhib = (s as any).exhib ?? {})['status'] = 12;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/dachabust.jpg');
  scene.text('You go out into the garden and ask:');
  scene.text('"Well, boys? How\'s it going?"');
  scene.text('"It\'s going well, young lady. We\'re working as effectively as we can."');
  scene.actions([
    { label: 'Leave', goto: ['dachamy', ''] },
  ]);
  scene.build();
}

function enterHangingClothes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).exhib = (s as any).exhib ?? {})['status'] = 13;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).temp = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/dachaex.jpg');
  scene.text('You pretend to hang clothes to dry. Through the fence, you can see that your neighbor Kuzmich is stealing glances at you. Your loosely tied robe barely conceals your appetizing figure. But you don\'t try to hide—instead, you give your neighbor quite a show.');
  scene.actions([
    { label: 'Go home', goto: ['dachamy', ''] },
  ]);
  scene.build();
}

function enterWorkerConversation(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/dachabust2.jpg');
  scene.text('Going out into the garden, you overhear the workers talking and decide to listen to what they\'re saying.');
  scene.text('"The landlady is hot. I saw her in her robe hanging clothes in the vegetable garden—she\'s so sexy!"');
  scene.text('"I would hit that!"');
  scene.text('"Yeah, right. You\'re dreaming. You can\'t handle that city girl!"');
  scene.text('"I\'m telling you, she needs a good fuck, and that\'s what I want to give her!"');
  scene.text('"Okay, good luck with that."');
  scene.actions([
    { label: 'Approach the workers', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/dachabust3.jpg');
    scene.text('You: "Hello guys! I see the work is progressing, but somewhat slowly."');
    scene.text('Worker: "Sorry, young lady. Some motivation would help us work harder."');
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    ((st as any).exhib = (st as any).exhib ?? {})['status'] = 15;
    (st as any).temp = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/dachabust3.jpg');
    scene.text('<font color="magenta">You: "Until you finish the work, you don\'t get anything."</font>');
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
      { label: 'Accept and give half the amount', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 1500);
    ((st as any).exhib = (st as any).exhib ?? {})['status'] = 14;
    (st as any).temp = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/dachabust3.jpg');
    scene.text('"Well, here\'s half. But tomorrow morning everything has to be finished."');
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterGardenStrip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/sex/event/dachagang.jpg');
  scene.text('You stand in the middle of the vegetable garden and begin to undress.');
  scene.text('The guys\' eyes widen in surprise, and you can see them getting excited.');
  scene.text('<font color="magenta">"Boys, you did a good job and deserve a reward!"</font>');
  scene.actions([
    { label: 'Undress completely', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/sex/event/dachagang1.jpg');
    scene.text('You strip naked and stand in front of the guys.');
    scene.text('<font color="magenta">"Well, how about a 100% discount?"</font>');
    scene.actions([
      { label: 'Have sex', handler: (st: GameState) => {
    scene.img('images/locations/suburban/sex/event/dachagang4.jpg');
    scene.text('The guys pounce on you, and after a few brief caresses, they start fucking all your holes.');
    qspCall(st, 'npcgeneratec', '0', 'gardener', (Math.floor(Math.random() * 16) + 25), 3, 1);
    qspCall(st, 'npcStat', '$npclastgenerated');
    qspCall(st, 'npcgeneratec', '0', 'gardener', (Math.floor(Math.random() * 16) + 25), 3, 1);
    qspCall(st, 'npcStat', '$npclastgenerated', 'a');
    qspCall(st, 'npcgeneratec', '0', 'gardener', (Math.floor(Math.random() * 16) + 25), 3, 1);
    qspCall(st, 'npcStat', '$npclastgenerated', 'b');
    qspCall(st, 'npcgeneratec', '0', 'gardener', (Math.floor(Math.random() * 16) + 25), 3, 1);
    qspCall(st, 'npcStat', '$npclastgenerated', 'c');
    qspCall(st, 'arousal', 'bj', 30, ((st as any).npcID ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-30), ((st as any).npcID1 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-30), ((st as any).npcID2 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 30, ((st as any).npcID1 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-30), ((st as any).npcID2 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-30), ((st as any).npcID3 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 30, ((st as any).npcID2 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-30), ((st as any).npcID3 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-30), ((st as any).npcID ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 30, ((st as any).npcID3 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-30), ((st as any).npcID ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-30), ((st as any).npcID1 ?? 0), 'group', 'gangbang');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0));
    qspCall(st, 'cum_call', 'butt', ((st as any).npcID1 ?? 0));
    qspCall(st, 'cum_call', '', ((st as any).npcID2 ?? 0));
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID3 ?? 0));
    ((st as any).exhib = (st as any).exhib ?? {})['status'] = 16;
    qspCall(st, 'stat', '');
    scene.text('When it\'s over, you pick up your clothes, put them on, and go back into the house.');
    scene.actions([
      { label: 'Next', goto: ['dachain', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWorkerAssault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/sex/event/dachagang2.jpg');
  scene.text('The drunk workers have surrounded you.');
  scene.text('"Look, here is our princess! You\'re just in time for some fun. Come on guys, our hostess needs some love!"');
  scene.text('You: "<font color="magenta">What are you doing?</font>"');
  scene.actions([
    { label: 'Next', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/suburban/sex/event/dachagang3.jpg');
    scene.text('The guys grab you and start to undress and grope you.');
    scene.actions([
      { label: 'Surrender', handler: (st: GameState) => {
    scene.img('images/locations/suburban/sex/event/dachagang4.jpg');
    scene.text('The drunk workers pounce on you, and after a few brief caresses, they fuck all your holes.');
    qspCall(st, 'npcgeneratec', '0', 'gardener', (Math.floor(Math.random() * 16) + 25), 3, 1);
    qspCall(st, 'npcStat', '$npclastgenerated');
    qspCall(st, 'npcgeneratec', '0', 'gardener', (Math.floor(Math.random() * 16) + 25), 3, 1);
    qspCall(st, 'npcStat', '$npclastgenerated', 'a');
    qspCall(st, 'npcgeneratec', '0', 'gardener', (Math.floor(Math.random() * 16) + 25), 3, 1);
    qspCall(st, 'npcStat', '$npclastgenerated', 'b');
    qspCall(st, 'npcgeneratec', '0', 'gardener', (Math.floor(Math.random() * 16) + 25), 3, 1);
    qspCall(st, 'npcStat', '$npclastgenerated', 'c');
    qspCall(st, 'arousal', 'bj', 30, ((st as any).npcID ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'anal', (-30), ((st as any).npcID1 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'vaginal', (-30), ((st as any).npcID2 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'bj', 30, ((st as any).npcID1 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'anal', (-30), ((st as any).npcID2 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'vaginal', (-30), ((st as any).npcID3 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'bj', 30, ((st as any).npcID2 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'anal', (-30), ((st as any).npcID3 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'vaginal', (-30), ((st as any).npcID ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'bj', 30, ((st as any).npcID3 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'anal', (-30), ((st as any).npcID ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'vaginal', (-30), ((st as any).npcID1 ?? 0), 'rough', 'group', 'gangbang', 'rape');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0));
    qspCall(st, 'cum_call', 'butt', ((st as any).npcID1 ?? 0));
    qspCall(st, 'cum_call', '', ((st as any).npcID2 ?? 0));
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID3 ?? 0));
    ((st as any).exhib = (st as any).exhib ?? {})['status'] = 16;
    qspCall(st, 'stat', '');
    scene.text('When it\'s over, you pick up your clothes, put them on, and run into the house.');
    scene.actions([
      { label: 'Next', goto: ['dachain', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLakeArea(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Lake</b></center>');
  scene.img('images/locations/suburban/lake.jpg');
  if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).bikini ?? 0) > 0  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
      scene.actions([
        { label: 'Swim with a swimsuit (1 hour)', handler: (st: GameState) => {
    (st as any).cumspclnt = 4;
    qspCall(st, 'cum_cleanup', '');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'exercise', 'tier1', 60, 'stren', 'vital');
    (st as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    scene.img(`images/pc/activities/swim/lake/swim_bikini_${(Math.floor(Math.random() * 9) + 0)}.jpg`);
    scene.text('You swim in the lake. The water refreshes and invigorates you.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', goto: ['ETO_village', 'lake_area'] },
    ]);
  } },
      ]);
    }
    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
      scene.actions([
        { label: 'Swim naked (1 hour)', handler: (st: GameState) => {
    (st as any).cumspclnt = 4;
    qspCall(st, 'cum_cleanup', '');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (3);
    qspCall(st, 'exercise', 'tier1', 60, 'stren', 'vital');
    (st as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    qspCall(st, 'arousal', 'foreplay', (-60), 'exhibition');
    qspCall(st, 'arousal', 'end');
    scene.img(`images/pc/activities/swim/lake/swim_nude_${(Math.floor(Math.random() * 11) + 0)}.jpg`);
    scene.text('You swim in the lake completely naked. The water refreshes and invigorates you.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', goto: ['ETO_village', 'lake_area'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Return to the alley', goto: ['ETO_village', 'community_alleys'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'community_alleys':
      enterCommunityAlleys(s, scene);
      break;
    case 'forest_area':
      enterForestArea(s, scene);
      break;
    case 'mushroom_picker':
      enterMushroomPicker(s, scene);
      break;
    case 'forest_nude':
      enterForestNude(s, scene);
      break;
    case 'spring_water':
      enterSpringWater(s, scene);
      break;
    case 'info_column':
      enterInfoColumn(s, scene);
      break;
    case 'neighbor_cottage':
      enterNeighborCottage(s, scene);
      break;
    case 'saw_noise':
      enterSawNoise(s, scene);
      break;
    case 'garden_check':
      enterGardenCheck(s, scene);
      break;
    case 'hanging_clothes':
      enterHangingClothes(s, scene);
      break;
    case 'worker_conversation':
      enterWorkerConversation(s, scene);
      break;
    case 'garden_strip':
      enterGardenStrip(s, scene);
      break;
    case 'worker_assault':
      enterWorkerAssault(s, scene);
      break;
    case 'lake_area':
      enterLakeArea(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const ETO_village: LocationDef = {
  name: 'ETO_village',
  title: 'Lake',
  region: 'other',
  enter: enter,
};
