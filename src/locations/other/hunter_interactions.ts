import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sh = Math.floor(Math.random() * 4) + 1;
  if (((s as any).temp_sh ?? 0) === 1) {
    scene.img('images/locations/gadukino/hunters/hantersmoker1.jpg');
    scene.text('The men ask you if you want to go out for a smoke.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    if (((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
      (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
      (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'smoke', 1);
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big172.jpg');
    qspCall(s, 'stat', '');
    if (((s as any).temp_sh ?? 0) === 3) {
      scene.img('images/characters/shared/headshots_main/big174.jpg');
      scene.text('Sergei offers you a cigarette.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).mc_inventory['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) + (1);
    qspCall(s, 'drugs', 'smoke');
    if (((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/characters/shared/headshots_main/big173.jpg');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).mc_inventory['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) + (1);
    qspCall(s, 'drugs', 'smoke');
    if (((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 15  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0  ||  ((s as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
      qspCall(s, 'drugs', 'smoke', 1);
      scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
      scene.text('The two of you walk outside, Andrei hands you a cigarette. You start talking about your feelings for each other.');
      scene.actions([
        { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
      ]);
    } else {
      if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 15  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
        if ((!((s as any).smokbj ?? 0))) {
          scene.img('images/characters/shared/headshots_main/big172.jpg');
          scene.text('You follow Andrei outside. He gives you a cigarette, and the two of you continue on with your conversation. Suddenly Andrei, looking in your eyes, says:');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you help me out?"
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, could you help me out?"`);
          scene.text('"Of course, Andrei, I\'ll be glad to." you replied. "What do you need help with?" you asked a bit worried.');
          // TODO-QSP: dynamic text: "As you know <<$pcs_nickname>>, I have long been divorced for a long time," Andr...
          scene.text(`"As you know ${((s as any).pcs_nickname ?? 0)}, I have long been divorced for a long time," Andrei began. "But as every normal man, I need to relieve stress sometimes, well, you know what I mean…"`);
          scene.text('You look at his frankness with astonishment.');
          // TODO-QSP: dynamic text: "Now <<$pcs_nickname>>, if you could help me out now and then, I would be very g...
          scene.text(`"Now ${((s as any).pcs_nickname ?? 0)}, if you could help me out now and then, I would be very graIn the sput of the moment, while the men cheer you on, you remove your topteful," Andrei continued.`);
          scene.text('You watch in disbelief, he\'s clearly not joking around. You can see on Andrei\'s facial expression that he\'s being dead serious.');
          // TODO-QSP: dynamic text: "I won't tell anybody about this, don't worry, no one will know." he adds quickl...
          scene.text(`"I won't tell anybody about this, don't worry, no one will know." he adds quickly. "Well, ${((s as any).pcs_nickname ?? 0)}, what do you say?`);
          (s as any).minut = ((s as any).minut ?? 0) + 15;
          (s as any).mc_inventory['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) + (1);
          qspCall(s, 'drugs', 'smoke');
          (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
          qspCall(s, 'stat', '');
          if (((s as any).alko ?? 0) < 6) {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/thinks\'+rand(1, 2)+\'.jpg');
    scene.text('After you hear him out, you start seriously considering his offer. It would be nice to help out a friend is nice, but you sense that there\'s an ulterior motive.');
    scene.text('"No Andrei, I\'m sorry but I refuse." you answer. "How could you even think that I would be accepting your offer?');
    scene.text('You got up from the bench and quickly went back to the hut.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) - (1);
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/thinks\'+rand(1, 2)+\'.jpg');
    scene.text('After you hear him out, you start seriously considering his offer. It would be nice to help out a friend is nice, but you sense that there\'s an ulterior motive.');
    scene.text('"Well Andrei, after carefully thinking about it, I\'ll help you out. How do you want me to help you out?" you ask.');
    // TODO-QSP: dynamic text: "Damn, <<$pcs_nickname>>, I knew you would," he replied. "Well, I wouldn't mind ...
    scene.text(`"Damn, ${((s as any).pcs_nickname ?? 0)}, I knew you would," he replied. "Well, I wouldn't mind a blowjob now and then, that's good enough for me."`);
    scene.text('"Go back to the hut, and crawl under the table so no one notices." he adds while getting up from the bench.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) + (2);
    (s as any).smokbj = 1;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
    ]);
  } },
          ]);
        } else {
          scene.img('images/characters/shared/headshots_main/big172.jpg');
          scene.text('You went outside for a smoke, with Andrei following after you, immediately saying:');
          // TODO-QSP: dynamic text: "Forget the cigarette <<$pcs_nickname>>, go back inside and crawl under the tabl...
          scene.text(`"Forget the cigarette ${((s as any).pcs_nickname ?? 0)}, go back inside and crawl under the table, I need you so bad right now…`);
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) + (1);
          (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
          qspCall(s, 'stat', '');
          if (((s as any).alko ?? 0) < 6) {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/thinks\'+rand(1, 2)+\'.jpg');
    scene.text('"You know what Andrei, I\'ve changed my mind. I\'m more than happy to help a friend in need, but I\'m not some whore that only exists for your pleasure."');
    scene.text('You got up from the bench and quickly went back to the hut.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) - (1);
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (50);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
          ]);
        }
      } else {
        scene.img('images/characters/shared/headshots_main/big172.jpg');
        scene.text('You went outside for a smoke, with Andrei following after you, immediately saying:');
        // TODO-QSP: dynamic text: "To hell with the cigarette <<$pcs_nickname>>, I need to relieve some stress."
        scene.text(`"To hell with the cigarette ${((s as any).pcs_nickname ?? 0)}, I need to relieve some stress."`);
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
        ]);
      }
    }
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  }
  scene.build();
}

export const hunter_interactions: LocationDef = {
  name: 'hunter_interactions',
  title: 'The men ask you if you want to go out for a smoke.',
  region: 'other',
  description: ['The men ask you if you want to go out for a smoke.'],
  enter: enter,
};
