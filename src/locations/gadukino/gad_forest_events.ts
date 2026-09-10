import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFindMeadow(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/meadow/meadow_path.jpg');
  scene.text('Walking through the forest, you notice a small path that runs along some bushes and a small ravine. The trail leads away from the well-worn tracks you are currently on and into a dense thicket.');
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
  (s as any).MiraVars['pickingtalk'] = 1;
  (s as any).MiraVars['talkday'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A60', 2);
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_edge');
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. I just wanted to tell you to be careful in the forest."
  scene.text(`"Hi, ${((s as any).pcs_nickname ?? 0)}. I just wanted to tell you to be careful in the forest."`);
  scene.text('"It\'s effortless to get lost if you wander away from the forest\'s edge. But, the deeper you go into the forest, the more mushrooms and berries you can find."');
  scene.text('"Also, every morning during summertime, the truck from the city comes to buy mushrooms and berries from the local pickers. I don\'t bother doing it, but I\'m sure you could make some money from that if you wanted to."');
  scene.text('"One more warning, I\'ve heard some other villagers say there are wolves in the forest that come out after dark, so you shouldn\'t stay in the forest after sundown."');
  scene.text('"That\'s one of the reasons why I prefer to walk around the forest\'s edge in the morning. It\'s much safer in the daylight when more people are around."');
  scene.actions([
    { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
  ]);
  scene.build();
}

function enterMiraNudeTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).MiraVars['nudetalk'] = 1;
  (s as any).MiraVars['talkday'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A60', 2);
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_edge');
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, guess what I overheard recently," Mira giggles as she wh...
  scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, guess what I overheard recently," Mira giggles as she whispers in your ear. "Some village elders talked about how walking naked in the woods is said to greatly improve your health and mood."`);
  scene.text('"I don\'t know if it\'s the fresh air or just being surrounded by nature, but it did make me feel better."');
  scene.text('"I may have tried it once to see if what they said was true. Maybe we can go together sometime?"');
  scene.actions([
    { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
  ]);
  scene.build();
}

function enterMiraNudeEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).MiraVars['nudetalk'] = 2;
  (s as any).MiraVars['talkday'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A60', 2);
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_edge');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/miraforest4.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, do you remember what I told you about walking in the forest?...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, do you remember what I told you about walking in the forest? Why don't we try it out together?" Mira asks.`);
  scene.text('"You mean walking naked in the woods?" you reply.');
  scene.text('"Silly, of course, that," said Mira. "What do you say?"');
  scene.text('"I don\'t know, Mira." It\'s a surprising offer. On the one hand, you are a little afraid to do it, but on the other, it could be exciting. "But what if someone sees us?"');
  scene.text('"Oh, don\'t worry, no one will see us." She laughed, spun around and yelled out. "Is anybody here??"');
  scene.text('Aside from the chirping birds and some rustling leaves, there was no other sound.');
  scene.text('Mira turns back to you, "You see, no one is here. We are all alone."');
  scene.text('You hesitantly look around as Mira waits for your reply.');
  // TODO-QSP: dynamic text: "Well, <<$pcs_nickname>>, come on, make up your mind," Mira chirped and started ...
  scene.text(`"Well, ${((s as any).pcs_nickname ?? 0)}, come on, make up your mind," Mira chirped and started to mess with your clothes, trying to pull them off.`);
  scene.text('Finally, looking around to ensure no one is around, you decide to…');
  if (((s as any).pcs_inhib ?? 0) < 25) {
    qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  } else {
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_inhib ?? 0) > 50) {
      qspCall(s, 'willpower', 'exhib', 'resist', ' hard');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist and keep your clothes on [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
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
      qspCall(s, 'willpower', 'exhib', 'resist');
      if (((s as any).pcs_inhib ?? 0) > 50) {
        qspCall(s, 'willpower', 'exhib', 'resist', ' hard');
      }
      qspCall(s, 'willpower', 'pay', 'resist');
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/miraforest2.jpg');
      // TODO-QSP: dynamic text: Mira pouts at you for refusing to undress for a moment, then she smiles again, "...
      scene.text(`Mira pouts at you for refusing to undress for a moment, then she smiles again, "Alright then, ${((s as any).pcs_nickname ?? 0)}, we can still just go for a normal walk instead."`);
      scene.actions([
        { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
      ]);
    }
  } },
        { label: 'Give in to Mira', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
    }
    qspCall(s, 'npc_relationship', 'modify', 'A60', 5);
    qspCall(s, 'outfit', 'strip_all', 'forest_edge');
    (s as any).MiraVars['strip_loc'] = 'forest_edge';
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/gadukino/mira/miraforest5.jpg');
    scene.text('Seeing that your resistance had stopped, Mira quickly began to undress you, leaving your clothes in a pile on the forest floor.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
      ]);
    }
  }
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
    default:
      enterFindMeadow(s, scene);
      break;
  }
}

export const gad_forest_events: LocationDef = {
  name: 'gad_forest_events',
  title: 'Mitka Shkvoryen',
  region: 'gadukino',
  locationType: 'event_outdoors',
  description: ['Walking through the forest, you notice a small path that runs along some bushes and a small ravine. The trail leads away from the well-worn tracks you are currently on and into a dense thicket.'],
  enter: enter,
};
