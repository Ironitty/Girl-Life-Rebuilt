import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A172');
  (s as any).npc_rough[String((s as any).boy ?? 0)] = 1;
  (s as any).boyage = ((s as any).npc_dob ?? 0)?.[String((s as any).boy ?? 0)];
  (s as any).boyage = (((s as any).boyage ?? 0) - ((s as any).boyage ?? 0) % 10000) / 10000;
  (s as any).boyage = ((s as any).year ?? 0) - ((s as any).boyage ?? 0);
  if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0  &&  ((s as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
    scene.img('images/locations/gadukino/hunters/brosil.jpg');
    scene.text('You want to talk to Andrei, but he cuts in before you can say anything.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, It's over between us," he says firmly and walks away.
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, It's over between us," he says firmly and walks away.`);
    scene.text('"Well, maybe it\'s for the best," you think as you leave in the other direction.');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).hunterVars['AndreiLove'] = 0;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10  &&  ((s as any).hunterVars ?? 0)?.['Andreisex'] === 0  &&  (Math.floor(Math.random() * 3) + 0) === 1) {
      scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
      qspCall(s, 'arousal', 'kiss', 5);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go with Andrei', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterhands.jpg');
    (s as any).hunterVars['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + (Math.floor(Math.random() * 19) + 6);
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['hunterLoveSex', 'Andrei'] },
    ]);
  } },
        { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (1);
    (s as any).hunterVars['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('<center><b>Andrei</b></center>');
      scene.img('images/characters/shared/headshots_main/big172.jpg');
      // TODO-QSP: dynamic text: Andrei is the leader of the group of hunters that frequent the woods and swamp b...
      scene.text(`Andrei is the leader of the group of hunters that frequent the woods and swamp by Gadukino while living close by. He's ${((s as any).boyage ?? 0)} years old and divorced.`);
      if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 0) {
        scene.text('You and him have a bad relationship, because you offended him in the past.');
      } else {
        scene.text('You have a normal relationship with him.');
        if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 15) {
          scene.text('You have friendly relations with him.');
        } else {
          scene.text('You\'re good friends.');
          if (((s as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
            scene.text('You love each other.\' else \'You love him.');
          }
        }
        qspCall(s, 'stat', '');
        if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10) {
          if (((s as any).hunterVars ?? 0)?.['AndreiLove'] === 0) {
            scene.actions([
              { label: 'Flirt', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterflirt1.\'+rand(1, 3)+\'.jpg');
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] <= 35  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] >= 10  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) - (1);
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 10  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 25  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0  &&  ((s as any).pcs_apprnc ?? 0) >= 60) {
      scene.actions([
        { label: 'Continue Flirt', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss1.jpg');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Answer kiss', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss2.jpg');
    (s as any).hunterVars['AndreiLove'] = 1;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss3.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['hunterLoveSex', 'Andrei'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss3.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Push away', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) + (1);
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (50);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).pcs_horny ?? 0) >= 60) {
              scene.actions([
                { label: 'Have sex', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterflirt2.\'+rand(1, 6)+\'.jpg');
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    (s as any).hunterVars['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + (Math.floor(Math.random() * 19) + 6);
    qspCall(s, 'arousal', 'foreplay', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['hunterLoveSex', 'Andrei'] },
    ]);
  } },
              ]);
            }
            if ((!(Math.floor(Math.random() * 10) + 0))) {
              scene.actions([
                { label: 'Break up with Andrei', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/brosila.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['AndreiLove'] = 0;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (100);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Spend time together', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterlove1.\'+rand(1, 4)+\'.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0  ||  ((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) + (1);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 0  &&  ((s as any).hunterVars ?? 0)?.['SergeiLove'] === 0) {
      (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) - (1);
    }
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Chat (0:30)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/talk1.\'+rand(1, 3)+\'.jpg');
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 0) {
    }
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
      (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const andreihunter: LocationDef = {
  name: 'andreihunter',
  title: 'Andrei',
  region: 'other',
  description: ['You want to talk to Andrei, but he cuts in before you can say anything.'],
  enter: enter,
};
