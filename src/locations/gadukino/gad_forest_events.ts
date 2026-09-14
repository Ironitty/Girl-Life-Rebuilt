import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.build();
}

function enterFindMeadow(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/meadow/meadow_path.jpg');
  scene.text('Walking through the forest, you notice a small path that runs along some bushes and a small ravine. The trail leads away from the well-worn tracks you are currently on and into a dense thicket.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore it and keep walking', goto: ['gad_forest', 'forest_edge'] },
    { label: 'Follow the path to see where it goes', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/meadow/meadow_thicket.jpg');
    scene.text('You follow the path to see where it goes, but soon it becomes indistinguishable from the bushes and trees around you.');
    (s as any).gad_meadow_found = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Look around', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/meadow/meadow_trail.jpg');
    scene.text('You\'re about to return to the forest\'s edge, but you spot a small break in the thicket. From the looks of it, it\'s no more than an animal trail.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head down the trail', handler: (st: GameState) => {
    scene.img(`images/locations/gadukino/meadow/meadow1_${Math.floor(Math.random() * 6) + 0}.jpg`);
    scene.text('A few minutes later, you reach a majestic meadow filled with wildflowers. Judging by its peaceful state, no one else uses it or has even been here in a long time.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Claim the meadow as your own', handler: (st: GameState) => {
    scene.img(`images/locations/gadukino/meadow/meadow1_${Math.floor(Math.random() * 6) + 0}.jpg`);
    scene.text('You spend some time exploring the meadow and its surroundings. You\'re positive no one visits this location. You proclaim the field to be your secret hideaway, all your own.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_meadow', 'start'] },
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

function enterMiraPickingTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['pickingtalk'] = 1;
  if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['talkday'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A60', 2);
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_edge');
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. I just wanted to tell you to be careful in the forest."
  scene.text(`"Hi, ${((s as any).pcs_nickname || '')}. I just wanted to tell you to be careful in the forest."`);
  scene.text('"It\'s effortless to get lost if you wander away from the forest\'s edge. But, the deeper you go into the forest, the more mushrooms and berries you can find."');
  scene.text('"Also, every morning during summertime, the truck from the city comes to buy mushrooms and berries from the local pickers. I don\'t bother doing it, but I\'m sure you could make some money from that if you wanted to."');
  scene.text('"One more warning, I\'ve heard some other villagers say there are wolves in the forest that come out after dark, so you shouldn\'t stay in the forest after sundown."');
  scene.text('"That\'s one of the reasons why I prefer to walk around the forest\'s edge in the morning. It\'s much safer in the daylight when more people are around."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
  ]);
  scene.build();
}

function enterMiraNudeTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['nudetalk'] = 1;
  if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['talkday'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A60', 2);
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_edge');
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, guess what I overheard recently," Mira giggles as she wh...
  scene.text(`"Hey ${((s as any).pcs_nickname || '')}, guess what I overheard recently," Mira giggles as she whispers in your ear. "Some village elders talked about how walking naked in the woods is said to greatly improve your health and mood."`);
  scene.text('"I don\'t know if it\'s the fresh air or just being surrounded by nature, but it did make me feel better."');
  scene.text('"I may have tried it once to see if what they said was true. Maybe we can go together sometime?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
  ]);
  scene.build();
}

function enterMiraNudeEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['nudetalk'] = 2;
  if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['talkday'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A60', 2);
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_edge');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/miraforest4.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, do you remember what I told you about walking in the forest?...
  scene.text(`"${((s as any).pcs_nickname || '')}, do you remember what I told you about walking in the forest? Why don't we try it out together?" Mira asks.`);
  scene.text('"You mean walking naked in the woods?" you reply.');
  scene.text('"Silly, of course, that," said Mira. "What do you say?"');
  scene.text('"I don\'t know, Mira." It\'s a surprising offer. On the one hand, you are a little afraid to do it, but on the other, it could be exciting. "But what if someone sees us?"');
  scene.text('"Oh, don\'t worry, no one will see us." She laughed, spun around and yelled out. "Is anybody here??"');
  scene.text('Aside from the chirping birds and some rustling leaves, there was no other sound.');
  scene.text('Mira turns back to you, "You see, no one is here. We are all alone."');
  scene.text('You hesitantly look around as Mira waits for your reply.');
  // TODO-QSP: dynamic text: "Well, <<$pcs_nickname>>, come on, make up your mind," Mira chirped and started ...
  scene.text(`"Well, ${((s as any).pcs_nickname || '')}, come on, make up your mind," Mira chirped and started to mess with your clothes, trying to pull them off.`);
  scene.text('Finally, looking around to ensure no one is around, you decide to…');
  if (((s as any).pcs_inhib ?? 0) < 25) {
    qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  } else {
    if (((s as any).pcs_inhib ?? 0) > 25  &&  ((s as any).pcs_inhib ?? 0) < 50) {
      qspCall(s, 'willpower', 'exhib', 'resist');
    } else {
      if (((s as any).pcs_inhib ?? 0) > 50) {
        qspCall(s, 'willpower', 'exhib', 'resist', ' hard');
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Resist and keep your clothes on', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Resist and keep your clothes on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-3));
    if (((s as any).pcs_inhib ?? 0) < 25) {
      qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
    } else {
      if (((s as any).pcs_inhib ?? 0) > 25  &&  ((s as any).pcs_inhib ?? 0) < 50) {
        qspCall(s, 'willpower', 'exhib', 'resist');
      } else {
        if (((s as any).pcs_inhib ?? 0) > 50) {
          qspCall(s, 'willpower', 'exhib', 'resist', ' hard');
        }
      }
    }
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraforest2.jpg');
    // TODO-QSP: dynamic text: Mira pouts at you for refusing to undress for a moment, then she smiles again, "...
    scene.text(`Mira pouts at you for refusing to undress for a moment, then she smiles again, "Alright then, ${((s as any).pcs_nickname || '')}, we can still just go for a normal walk instead."`);
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Give in to Mira', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
    }
    qspCall(s, 'npc_relationship', 'modify', 'A60', 5);
    qspCall(s, 'outfit', 'strip_all', 'forest_edge');
    if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['strip_loc'] = 'forest_edge';
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/gadukino/mira/miraforest5.jpg');
    scene.text('Seeing that your resistance had stopped, Mira quickly began to undress you, leaving your clothes in a pile on the forest floor.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMiraMorningWalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'Miroslava', 'miraclothes');
  // TODO-QSP: dynamic text: As you walk through the forest, you hear a familiar voice call out, "Hey, <<$pcs...
  scene.text(`As you walk through the forest, you hear a familiar voice call out, "Hey, ${((s as any).pcs_nickname || '')}, wait up!" You turn around and see Mira excitedly bounding up behind you.`);
  scene.text('"Want to join me on my walk?" she asks. "I love walking through the forest in the morning."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say Hello', goto: ['gad_forest', 'forest_edge'] },
  ]);
  scene.build();
}

function enterMushroomPickers1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).mushroom_pickersday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/forest/mushroom_pickers1.jpg');
  scene.text('Wandering through the woods, you notice mushroom pickers from the village. You wonder whether you should also look for mushrooms and berries here or go somewhere else in the forest with less competition.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('You quickly remember you are naked right now and back away from them. It\'s a good thing they didn\'t see you here. If they did, it would be the talk of the whole village.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterMushroomPickers2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).mushroom_pickersday = ((s as any).daystart ?? 0);
  scene.img('images/locations/gadukino/forest/mushroom_pickers2.jpg');
  scene.text('On the edge of the forest, you see mushroom pickers from the village going deeper into the woods. You wonder if you should follow them or stay along the edge of the forest where it is safer.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('You quickly remember you are naked right now and back away from them. It\'s a good thing they didn\'t see you here. If they did, it would be the talk of the whole village.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  } else {
    scene.actions([
      { label: 'Follow them', goto: ['gad_forest', 'forest_outskirts'] },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay here', goto: ['gad_forest', 'forest_edge'] },
  ]);
  scene.build();
}

function enterMushroomPickers3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).mushroom_pickersday = ((s as any).daystart ?? 0);
  scene.img('images/locations/gadukino/forest/mushroom_pickers3.jpg');
  scene.text('Wandering through the outskirts of the forest, you notice the mushroom pickers from the village had organized a camp.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('You quickly remember you are naked right now and back away from them. It\'s a good thing they didn\'t see you here. If they did, it would be the talk of the whole village.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  } else {
    scene.actions([
      { label: 'Say Hello', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/forest/mushroom_pickers3.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).pickersQW ?? 0) <= 3) {
      (s as any).pickersQW = ((s as any).pickersQW ?? 0) + (1);
    }
    if (((s as any).pickersQW ?? 0) < 3) {
      scene.text('You politely greet them as you are passing by. The men glance at you and respond the same.');
    } else {
      scene.text('You politely greet them as you are passing by. The men look at you and invite you to stop and chat for a bit.');
      scene.actions([
        { label: 'Chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'gad_forest', 'bushcraft', 'forest_outskirts');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/forest/mushroom_pickers3.jpg');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('They are very good at finding mushrooms and berries. One of them shows you his basket full of mushrooms and berries. You spend ten minutes talking about the forest and the best places to find mushrooms and berries before continuing your day.');
    } else {
      scene.text('One of them asks, "How is your day going?"');
      if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) < 5) {
        scene.text('"Not great today," you answer sadly, showing him your less-than-full basket.');
        scene.text('"Here you go, have a few of mine." the man says, giving you a couple mushrooms and berries from his basket.');
        scene.text('You spend ten minutes talking about the forest and the best places to find mushrooms and berries before continuing your day.');
        (s as any).boletus = ((s as any).boletus ?? 0) + (Math.floor(Math.random() * 2) + 1);
        (s as any).bilberry = ((s as any).bilberry ?? 0) + (Math.floor(Math.random() * 2) + 1);
      } else {
        scene.text('"Pretty well today," you answer happily, showing him your full basket.');
        scene.text('You spend ten minutes talking about the forest and the best places to find mushrooms and berries before continuing your day.');
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['gad_forest', 'forest_outskirts'] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gad_forest', 'forest_outskirts'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave them be', goto: ['gad_forest', 'forest_outskirts'] },
  ]);
  scene.build();
}

function enterMushroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_center');
  scene.img('images/locations/gadukino/forest/mushroom0.\'+rand(1, 3)+\'.jpg');
  scene.text('Wandering deep in the forest, you stumble upon a clearing full of mushrooms. How lucky!');
  if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) < 5) {
    scene.actions([
      { label: 'Gather mushrooms', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    (s as any).boletus = ((s as any).boletus ?? 0) + (Math.floor(Math.random() * 3) + 3);
    qspCall(s, 'stat', '');
    qspCall(s, 'gad_forest', 'picking_clothes', 'forest_center', 'mushroom');
    scene.text('You begin collecting mushrooms trying to make everything fit in your basket.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_center'] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'gad_forest', 'picking_clothes_empty', 'forest_center');
    scene.text('Unfortunately, your basket is full, and you cannot carry any more mushrooms.');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_forest', 'forest_center'] },
  ]);
  scene.build();
}

function enterBilberry(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_center');
  scene.img('images/locations/gadukino/forest/bilberry\'+rand(3, 5)+\'.jpg');
  scene.text('Wandering deep in the forest, you stumble upon a clearing full of berries. How lucky!');
  if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) < 5) {
    scene.actions([
      { label: 'Gather berries', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    (s as any).bilberry = ((s as any).bilberry ?? 0) + (Math.floor(Math.random() * 3) + 3);
    qspCall(s, 'stat', '');
    qspCall(s, 'gad_forest', 'picking_clothes', 'forest_center', 'berry');
    scene.text('You begin collecting berries trying to make everything fit in your basket.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_center'] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'gad_forest', 'picking_clothes_empty', 'forest_center');
    scene.text('Unfortunately, your basket is already full, and you cannot carry any more berries.');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_forest', 'forest_center'] },
  ]);
  scene.build();
}

function enterBasket(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_center');
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.img('images/locations/gadukino/forest/basket_boletus.jpg');
    scene.text('Wandering in the forest, you find a basket full of mushrooms. Strange, someone must have left it here or lost it.');
    if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) < 5) {
      scene.actions([
        { label: 'Steal and empty them into your basket', handler: (st: GameState) => {
    (st as any).boletus = ((st as any).boletus ?? 0) + (5);
  }, goto: ['gad_forest', 'forest_center'] },
      ]);
    } else {
      scene.text('Unfortunately, your basket is full, and you cannot carry any more mushrooms.');
    }
  } else {
    scene.img('images/locations/gadukino/forest/basket_bilberry.jpg');
    scene.text('Wandering in the forest, you find a basket full of berries. Strange, someone must have left it here or lost it.');
    if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) < 5) {
      scene.actions([
        { label: 'Steal and empty them into your basket', handler: (st: GameState) => {
    (st as any).bilberry = ((st as any).bilberry ?? 0) + (5);
  }, goto: ['gad_forest', 'forest_center'] },
      ]);
    } else {
      scene.text('Unfortunately, your basket is already full, and you cannot carry any more berries.');
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the basket alone', goto: ['gad_forest', 'forest_center'] },
  ]);
  scene.build();
}

function enterPicnic(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/forest/picnic1.\'+rand(1, 4)+\'.jpg');
  scene.text('On the edge of the forest, you see some people. Apparently, they are having a family picnic.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('You quickly remember you are naked right now and back away from them. It\'s a good thing they didn\'t see you here, if they did, it would be the talk of the whole village.');
    scene.text('You shouldn\'t be naked now with this many people in this forest area. So you\'ll either need to get dressed or move to a more secluded area for now.');
    if (((s as any).clothesAtLocation ?? 0) === 1) {
      scene.actions([
        { label: 'Hide and get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
    qspCall(s, 'outfit', 'recover_lost_outfit', 'forest_edge', 1);
    qspCall(s, 'stat', '');
    if ((!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
    }
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
    }
    scene.text('You change into your clothes before anyone spots you.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
      ]);
    }
    if (((s as any).gad_meadow_found ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['gad_meadow', 'start'] }]);
      scene.actions([
        { label: 'Go to the meadow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  } },
      ]);
    }
    scene.actions([
      { label: 'Go further into the forest', goto: ['gad_forest', 'forest_outskirts'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterForestHunters(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/hanters.jpg');
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 0) {
    scene.text('Wandering through the woods you come across some people. Judging by their appearance they must be hunters.');
  }
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
    scene.text('Wandering through the woods you see the hunters, Andrei, Sergei and Igor.');
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
      // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>, we were all looking forward to seeing you again," Andrei...
      scene.text(`"Oh, ${((s as any).pcs_nickname || '')}, we were all looking forward to seeing you again," Andrei said with a smile.`);
      scene.text('"How about you come back with us to our hut? We were just about to head back there anyways."');
      qspCall(s, 'willpower', 'misc', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stay in the forest', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stay in the forest', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'gad_forest', $ReturnAdr
  } },
        ]);
      }
      scene.actions([
        { label: 'Go with them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Keep walking', handler: (st: GameState) => {
    if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (((s as any).pcs_apprnc ?? 0) / 12);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/forest/mitkanudeforest.jpg');
    scene.text('You pretend not to notice the hunters and walk right past them, swaying your hips pointedly to maximize the effect. Looking around, you see that the impact has exceeded your expectations. The men have been stopped in their tracks and are staring at you…');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'ReturnAdr'] },
    ]);
  } },
      { label: 'Hide', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/forest/hiding_woods.jpg');
    scene.text('They haven\'t noticed you yet, so you quickly hide from sight in a nearby bush. You wait until you can no longer hear them talking to continue on your way.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'ReturnAdr'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave them alone', goto: ['gad_forest', 'ReturnAdr'] },
    { label: 'Approach the hunters', handler: (st: GameState) => {
    if (((s as any).hunterVars ?? 0)?.['were_met'] === 0) {
      if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['were_met'] = 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/hanters.jpg');
      scene.text('You decide to approach the strangers and chat. You never know. Maybe they can show you some good places to find mushrooms and berries. After welcoming you, the whole company sat on the ground to rest and chat.');
      // TODO-QSP: dynamic text: "What's your name'+iif(pcs_apprnc >= 60, ', beautiful', ')+'?" one of them asks.
      scene.text('"What\'s your name\'+iif(pcs_apprnc >= 60, \', beautiful\', \')+\'?" one of them asks.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you answer.
      scene.text(`"${((s as any).pcs_nickname || '')}," you answer.`);
      if (((s as any).GadBoy ?? 0)?.['river_gang'] === 0) {
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        qspCall(s, 'stat', '');
        scene.text('"I\'m Andrei," replies the older man, "And these are my friends from the village, Igor and Sergei."');
        // TODO-QSP: dynamic text: "By any chance, is your last name <<$pcs_lastname>>?" he asked. You looked at hi...
        scene.text(`"By any chance, is your last name ${((s as any).pcs_lastname || '')}?" he asked. You looked at him and nodded.`);
        // TODO-QSP: dynamic text: Don't be surprised, <<$pcs_nickname>>, you look a lot like your mother when she ...
        scene.text(`Don't be surprised, ${((s as any).pcs_nickname || '')}, you look a lot like your mother when she was younger. I… Hmmm… very good to know. I'm also from Gadukino." said Andrei.`);
        scene.text('After chatting with them for about half an hour, the hunters begin to get up and gather their things.');
        // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>, it's time for us to go," said Andrei.
        scene.text(`"Okay, ${((s as any).pcs_nickname || '')}, it's time for us to go," said Andrei.`);
        scene.text('"If you want, we will show you our camp," he added after a short pause. "From there, we have made a path back to the village. We can show it to you if you come with us. Or you can stay with us for a bit if you want."');
        scene.actions([
          { label: 'Stay in the forest', goto: ['gad_forest', 'ReturnAdr'] },
          { label: 'Go with them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['Rape'] = 1;
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: "What are you doing so far from the village?" asks the older man, looking at you...
        scene.text(`"What are you doing so far from the village?" asks the older man, looking at you closely, "It's ${((s as any).pcs_nickname || '')} ${((s as any).pcs_lastname || '')}, the local whore."`);
        scene.text('You look at him with a mixture of surprise and shock.');
        scene.text('"Don\'t be surprised. I\'m also from Gadukino, and you look just like your mother when she was younger, and apparently, you are a whore like her, too," he said.');
        scene.text('You don\'t even remember us. We remember you from that day by the river with Uncle Stepan.');
        scene.text('"I\'m Andrei, " he added further, "And these are my friends, also from the village, Igor and Sergei."');
        if (((s as any).GadBoy ?? 0)?.['river_gang'] > 2) {
          scene.text('I\'m not a whore. I told Uncle Stepan to go to hell! I didn\'t want that to happen to me!');
        }
        scene.text('"Don\'t run away. We won\'t hurt you," said Sergei, seeing you jump to your feet.');
        scene.text('"I think it\'s about time I left", you reply.');
        scene.text('You quickly move away from them, only slowing once you can no longer hear them talking.');
        scene.actions([
          { label: 'Go back to the forest', goto: ['gad_forest', 'ReturnAdr'] },
        ]);
      }
    } else {
      scene.img('images/locations/gadukino/hunters/hanters.jpg');
      scene.text('You decide to approach the guys and chat.');
      if (((s as any).hunterVars ?? 0)?.['sexual_comfort'] < 60  ||  ((s as any).hunterVars ?? 0)?.['collective_opinion'] < 60) {
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        scene.text('After chatting with them for about half an hour, the hunters begin to get up and gather their things.');
        // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>, it's time for us to go," said Andrei. "You should pay ...
        scene.text(`"Okay, ${((s as any).pcs_nickname || '')}, it's time for us to go," said Andrei. "You should pay us another visit sometime, okay?"`);
        scene.actions([
          { label: 'Stay in the forest', goto: ['gad_forest', 'ReturnAdr'] },
          { label: 'Go with them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>, we were all looking forward to seeing you again," Andrei...
        scene.text(`"Oh, ${((s as any).pcs_nickname || '')}, we were all looking forward to seeing you again," Andrei said with a smile.`);
        scene.text('"How about you come back with us to our hut, we were just about to head back there anyways."');
        qspCall(s, 'willpower', 'misc', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Stay in the forest', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Stay in the forest', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'gad_forest', $ReturnAdr
  } },
          ]);
        }
        scene.actions([
          { label: 'Go with them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterMitkaTemporaryEvent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_QW ?? 0)?.['A63'] === 0  ||  ((s as any).GadBoy ?? 0)?.['river_gang'] >= 3) {
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 2  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if (!(s as any).GadBoy) (s as any).GadBoy = {}; (s as any).GadBoy['mitka_day'] = ((s as any).daystart ?? 0);
      qspCall(s, 'miroslava_schedule', 'force_change');
      qspCall(s, 'stat', '');
      scene.text('<center><b>Mitka Shkvoryen</b></center>');
      scene.img('images/characters/shared/headshots_main/big63.jpg');
      scene.text('While walking through the forest, you meet Mitka. You chat for a bit before saying goodbye. As you walk away, you notice Mira is not with you.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you go on. I need to talk to Mitka in private." She says, bl...
      scene.text(`"${((s as any).pcs_nickname || '')}, you go on. I need to talk to Mitka in private." She says, blushing. "He'll take me home."`);
      scene.text('"Have fun!" you reply to Mira with a wink.');
      scene.actions([
        { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
        { label: 'Spy on them', handler: (st: GameState) => {
    if (((s as any).MiraVars ?? 0)?.['QW'] < 6) {
      qspCall(s, 'arousal', 'voyeur', 5);
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/mirameadowsex.jpg');
      scene.text('You decide to follow them from a safe distance. The forest offers plenty of hiding places, and you have no trouble staying unseen.');
      scene.text('Mira and Mitka talk in whispers, slowly undressing as they walk, but you can\'t hear a word they are saying.');
      scene.actions([
        { label: 'Watch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mirameadowsex1.jpg');
    if (((s as any).MiraVars ?? 0)?.['QW'] === 2) {
      scene.text('Eventually, you arrive at your secret meadow. Mira lays down on a blanket before Mitka and spreads her legs invitingly. He doesn\'t waste a second before he is on top of her. He positions himself between her legs and eagerly slams his cock roughly into her vagina. Mira seems to be enjoying it, though, as she moans and begs for more.');
    } else {
      scene.text('Eventually, you arrive at your not-so-secret meadow. You already know what will happen, having seen it all before. Mira lays down on a blanket before Mitka and spreads her legs invitingly. He doesn\'t waste a second before he is on top of her. He positions himself between her legs and eagerly slams his cock roughly into her vagina. Mira seems to be enjoying it even more than last time as she moans and begs for more.');
    }
    scene.actions([
      { label: 'Continue Watching', handler: (st: GameState) => {
    if (((s as any).MiraVars ?? 0)?.['QW'] === 2) {
      if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['QW'] = 3;
    }
    if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['Mitka_fucks'] = ((s as any).MiraVars['Mitka_fucks'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mirameadowsex2.jpg');
    scene.text('After a few more minutes, Mitka pulls out and cums on her stomach. They rest for a little while, then get dressed and leave to head back to the village.');
    scene.actions([
      { label: 'Leave', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'arousal', 'voyeur', 5);
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/mirameadowsex.jpg');
      scene.text('You decide to follow them from a safe distance. The forest offers plenty of hiding places, and you have no trouble staying unseen.');
      scene.text('Mira and Mitka talk in whispers, slowly undressing as they walk, but you can\'t hear a word they are saying.');
      scene.actions([
        { label: 'Watch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'stat', '');
    (s as any).temp_gadf = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).temp_gadf ?? 0))) {
      scene.img('images/characters/gadukino/mira/sex/mirameadowanal.jpg');
      scene.text('Mira is working her ass up and down on Mitka\'s hard member. Every time she goes down, her buttocks slap loudly on his thighs.');
    } else {
      if (((s as any).temp_gadf ?? 0) === 1) {
        scene.img('images/characters/gadukino/mira/sex/mirameadowanal1.jpg');
        scene.text('Mira is on all fours and moaning loudly as Mitka spreads her asshole with his fingers and then drives his cock into her wide-open hole.');
      }
    }
    scene.actions([
      { label: 'Continue Watching', handler: (st: GameState) => {
    if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['Mitka_fucks'] = ((s as any).MiraVars['Mitka_fucks'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/mirameadowanal2.jpg');
    scene.text('After a couple of minutes, Mitka vigorously slaps her ass. Mira quickly turns around, gets on her knees before him and sucks his cock for a few seconds before he shoots his warm cum all over her face.');
    scene.actions([
      { label: 'Leave', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        if (!(s as any).GadBoy) (s as any).GadBoy = {}; (s as any).GadBoy['mitka_day'] = ((s as any).daystart ?? 0);
        qspCall(s, 'miroslava_schedule', 'force_change');
        qspCall(s, 'stat', '');
        scene.text('<center><b>Mitka Shkvoryen</b></center>');
        scene.img('images/characters/shared/headshots_main/big63.jpg');
        scene.text('Walking through the forest with Mira, you meet Mitka. Seeing Mira, Mitka grabbed her hand and pulled her into the nearest bush. Seeing Mira is not resisting, you decide not to interfere and mind your business.');
        scene.actions([
          { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
          { label: 'Spy on them', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'stat', '');
    (s as any).temp_gadf = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).temp_gadf ?? 0))) {
      scene.img('images/characters/gadukino/mira/sex/mirameadowanal.jpg');
      scene.text('Mira is working her ass up and down on Mitka\'s hard member. Every time she goes down, her buttocks slap loudly on his thighs.');
    } else {
      if (((s as any).temp_gadf ?? 0) === 1) {
        scene.img('images/characters/gadukino/mira/sex/mirameadowanal1.jpg');
        scene.text('Mira is on all fours and moaning loudly as Mitka spreads her asshole with his fingers and then drives his cock into her wide-open hole.');
      }
    }
    scene.actions([
      { label: 'Continue Watching', handler: (st: GameState) => {
    if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['Mitka_fucks'] = ((s as any).MiraVars['Mitka_fucks'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/mirameadowanal2.jpg');
    scene.text('After a couple of minutes, Mitka vigorously slaps her ass. Mira quickly turns around, gets on her knees before him and sucks his cock for a few seconds before he shoots his warm cum all over her face.');
    scene.actions([
      { label: 'Leave', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        if (!(s as any).GadBoy) (s as any).GadBoy = {}; (s as any).GadBoy['mitka_day'] = ((s as any).daystart ?? 0);
        qspCall(s, 'stat', '');
        scene.text('<center><b>Mitka Shkvoryen</b></center>');
        scene.img('images/characters/shared/headshots_main/big63.jpg');
        scene.text('Walking through the forest with Mira, you meet Mitka. You chat for a little while, noticing the interest Mira showed Mitka before saying goodbye.');
        scene.actions([
          { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
        ]);
      }
    }
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).GadBoy) (s as any).GadBoy = {}; (s as any).GadBoy['mitka_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Mitka Shkvoryen</b></center>');
    scene.img('images/characters/shared/headshots_main/big63.jpg');
    scene.text('Walking through the forest with Mira, you meet Mitka. He looks at you both like he is trying to decide something but must have thought better because he continues to chat usually. So you talk for a bit longer before saying goodbye.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'find_meadow':
      enterFindMeadow(s, scene);
      break;
    case 'mira_picking_talk':
      enterMiraPickingTalk(s, scene);
      break;
    case 'mira_nude_talk':
      enterMiraNudeTalk(s, scene);
      break;
    case 'mira_nude_event':
      enterMiraNudeEvent(s, scene);
      break;
    case 'mira_morning_walk':
      enterMiraMorningWalk(s, scene);
      break;
    case 'mushroom_pickers1':
      enterMushroomPickers1(s, scene);
      break;
    case 'mushroom_pickers2':
      enterMushroomPickers2(s, scene);
      break;
    case 'mushroom_pickers3':
      enterMushroomPickers3(s, scene);
      break;
    case 'mushroom':
      enterMushroom(s, scene);
      break;
    case 'bilberry':
      enterBilberry(s, scene);
      break;
    case 'basket':
      enterBasket(s, scene);
      break;
    case 'picnic':
      enterPicnic(s, scene);
      break;
    case 'forest_hunters':
      enterForestHunters(s, scene);
      break;
    case 'mitka_temporary_event':
      enterMitkaTemporaryEvent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_forest_events: LocationDef = {
  name: 'gad_forest_events',
  title: 'Mitka Shkvoryen',
  region: 'gadukino',
  locationType: 'event_outdoors',
  enter: enter,
};
