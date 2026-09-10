import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/sauna/sex/bvika1.jpg');
  scene.text('Vika takes you on the metro to the city industrial area. After the two of you leave the station, she walks you through the neighborhood and through an inconspicuous door to a building where you find a large room full of girls scurrying around in their underwear.');
  scene.text('Not letting you look around, Vika drags you down the hall, where you end up in a small room that\'s empty except some chairs and a glass wall.');
  scene.text('"Sit there," she orders before leaving.');
  scene.text('You take a seat and look through the glass, only to find a room with a large bed.');
  scene.text('<i>Is this… a brothel? Am I in the room for… voyeurs?!</i>');
  scene.text('As you\'re processing this information, Vika enters the room dressed in a pink baby doll and lies on the bed.');
  scene.text('She looks at you through the glass as she massages her pussy through her panties.');
  scene.actions([
    { label: 'Watch her work', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/sauna/sex/bvika2.jpg');
    scene.text('A few minutes later, two men enter the room and Vika kneels between them. She grabs hold of their cocks and starts sucking them while looking in your direction.');
    scene.text('You look on in amazement as she takes one of the cocks down her throat before doing the same to the other.');
    scene.text('She diligently continues to satisfy the men, not taking her eyes from the mirror.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'clit_finger', (-5), 'masturbate');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'voyeur', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep watching [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'voyeur', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['bordelv', 'sex'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['bordelv', 'out'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).dviksex = ((s as any).dviksex ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/residential/sauna/sex/bvika${Math.floor(Math.random() * 5) + 3}.jpg`);
  scene.text('You continue to watch as the men strip Vika naked and start fucking her in various positions, both of them alternating between her pussy and her ass, and letting her taste it all.');
  scene.text('Vika moans loudly and struggles to please them as she tries her hardest to look at you behind the mirror.');
  scene.text('Even though you know that she can\'t see you, if feels like she\'s looking you right in the eyes, searching for your approval.');
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'arousal', 'clit_finger', (-10), 'masturbate');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Keep watching [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'voyeur', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['bordelv', 'sex'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['bordelv', 'end'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/sauna/sex/bvika8.jpg');
  scene.text('When the men are satisfied, Vika gets down on her knees and lets them cum over her face and chest. Watching them causes your body tremble with excitement and you close your eyes as a pleasant orgasm washes over you.');
  scene.text('When you re-open them, the men are already gone, and Vika is sitting on the floor covered in cum. She\'s trying to avoid your eyes as she forces herself to get up and leave the room.');
  qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Wait in the room', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/sauna/sex/bvika9.jpg');
    scene.text('A few minutes later, the door opens and Vika enters the room. She closes the door, but you can\'t really see her, only her silhouette.');
    scene.text('Not saying anything, Vika silently awaits your reaction.');
    if (((s as any).stat ?? 0)?.['prostitution_count'] === 0) {
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Comfort her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Comfort her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A220', 5);
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('"Why are you so upset? So what if you work in a brothel? It was so hot that I couldn\'t keep my hands off myself…" you say quietly.');
    scene.text('Vika sighs in relief. "I was worried that you wouldn\'t understand. I have to go back to work now."');
    scene.text('She then quietly leads you to the exit.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Call her a whore', handler: (st: GameState) => {
    scene.text('"Whore" is perhaps the nicest word you direct at her. Due to the shock, you reel off every swear word you can think of, some of which you might have just made up.');
    scene.text('When you finish with your barrage, all you can hear is a distraught Vika crying.');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Comfort her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Comfort her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A220', 5);
    qspCall(s, 'willpower', 'misc', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('You comfort her by saying that you didn\'t mean to hurt her and that what you said was because of the shock. Vika quietly approaches and you hug each other.');
    scene.text('Soon after, she stops crying and says that she should get back to work before walking you to the exit.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'set', 'A220', 0);
    (s as any).vikaend = 1;
  }, goto: ['city_redlight', 'start'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Ask about getting a job at the brothel [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Ask about getting a job at the brothel', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A220', 5);
    (s as any).bordel = 1;
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('"That was so hot! Can you talk to your boss? I want to work here," you ask.');
    scene.text('Vika lets out a relieved sigh. "And here I was worried that you wouldn\'t understand! I\'ll ask the boss, but I can\'t guarantee they\'ll take you on."');
    scene.text('She then quietly leads you to the exit.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Comfort her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A220', 5);
    scene.text('"Why are you so upset? So what if you work in a brothel? It was so hot that I couldn\'t keep my hands off myself…" you say quietly.');
    scene.text('Vika sighs in relief. "I was worried that you wouldn\'t understand. I have to go back to work now."');
    scene.text('She then quietly leads you to the exit.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterOut(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/sauna/bordel.jpg');
  scene.text('Panicking, you run out of the room and rush towards the first door you notice, but find yourself in another room where a girl is "working."');
  scene.text('She quickly shoos you out and slams the door as you rush to the next room and find the same thing again. You rush through the corridors, but all the doors look the same and you start to panic.');
  scene.text('Just as you\'re about to give up and cry, someone pats you on the shoulder. You turn and see a still naked Vika, her face covered in cum.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, wait! Relax! You promised to keep quiet…" she whispers.
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, wait! Relax! You promised to keep quiet…" she whispers.`);
  scene.text('"Where\'s the way out, whore?!" you scream.');
  scene.text('Vika just looks at you, her lips trembling as her eyes slowly tear up.');
  scene.text('"There," she says as she points at one of the doors, barely hiding the fact that she\'s about to burst into tears.');
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Comfort her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Comfort her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A220', 15);
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'end');
    scene.text('Seeing her getting upset, you comfort her by saying that you didn\'t mean to hurt her and that what you said was because of the shock.');
    scene.text('She hugs you before saying that she should get back to work as she walks you to the exit.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'set', 'A220', 0);
    (s as any).vikaend = 1;
    qspCall(s, 'arousal', 'end');
  }, goto: ['city_redlight', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sex':
      enterSex(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'out':
      enterOut(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bordelv: LocationDef = {
  name: 'bordelv',
  title: 'Vika takes you on the metro to the city industrial area. Aft',
  region: 'other',
  description: ['Vika takes you on the metro to the city industrial area. After the two of you leave the station, she walks you through the neighborhood and through an inconspicuous door to a building where you find a large room full of girls scurrying around in their underwear.'],
  enter: enter,
};
