import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A172');
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 1;
  (s as any).boyage = (((s as any).npc_dob ?? 0)?.[String((s as any).boy ?? 0)] ?? 0);
  (s as any).boyage = (((s as any).boyage ?? 0) - ((s as any).boyage ?? 0) % 10000) / 10000;
  (s as any).boyage = ((s as any).year ?? 0) - ((s as any).boyage ?? 0);
  if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0  &&  ((s as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
    scene.img('images/locations/gadukino/hunters/brosil.jpg');
    scene.text('You want to talk to Andrei, but he cuts in before you can say anything.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, It''s over between us," he says firmly and walks away.
    scene.text(`"${((s as any).pcs_nickname ?? '')}, It's over between us," he says firmly and walks away.`);
    scene.text('"Well, maybe it\'s for the best," you think as you leave in the other direction.');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiLove'] = 0;
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['Andreisex'] = ((st as any).hunterVars['Andreisex'] ?? 0) + ((Math.floor(Math.random() * 19) + 6));
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['hunterLoveSex', 'Andrei'] },
    ]);
  } },
        { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['Andreisex'] = ((st as any).hunterVars['Andreisex'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('<center><b>Andrei</b></center>');
      scene.img('images/characters/shared/headshots_main/big172.jpg');
      // TODO-QSP: dynamic text: Andrei is the leader of the group of hunters that frequent the woods and swamp b...
      scene.text(`Andrei is the leader of the group of hunters that frequent the woods and swamp by Gadukino while living close by. He's ${((s as any).boyage ?? '')} years old and divorced.`);
      if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 0) {
        scene.text('You and him have a bad relationship, because you offended him in the past.');
      } else {
        if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
          scene.text('You have a normal relationship with him.');
        } else {
          if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 15) {
            scene.text('You have friendly relations with him.');
          } else {
            if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 25) {
              scene.text('You\'re good friends.');
            } else {
              if (((s as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
                scene.text('You love each other.\' else \'You love him.');
              }
            }
          }
        }
      }
      qspCall(s, 'stat', '');
      if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10) {
        if (((s as any).hunterVars ?? 0)?.['AndreiLove'] === 0) {
          scene.actions([
            { label: 'Flirt', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/gadukino/hunters/hanterflirt1....
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/hanterflirt1.` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] <= 35  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['IgorQW'] >= 10  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiQw'] >= 10  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] >= 25  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0  &&  ((st as any).pcs_apprnc ?? 0) >= 60) {
      scene.actions([
        { label: 'Continue Flirt', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss1.jpg');
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Answer kiss', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss2.jpg');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiLove'] = 1;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss3.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['hunterLoveSex', 'Andrei'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss3.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Push away', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (50);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).pcs_horny ?? 0) >= 60) {
            scene.actions([
              { label: 'Have sex', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/gadukino/hunters/hanterflirt2....
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/hanterflirt2.` + (Math.floor(Math.random() * 6) + 1) + '.jpg"></center>');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['Andreisex'] = ((st as any).hunterVars['Andreisex'] ?? 0) + ((Math.floor(Math.random() * 19) + 6));
    qspCall(st, 'arousal', 'foreplay', 10);
    qspCall(st, 'stat', '');
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
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiLove'] = 0;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (100);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Spend time together', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/gadukino/hunters/hanterlove1.'...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/hanterlove1.` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] > 0  ||  ((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] === 0  &&  ((st as any).hunterVars ?? 0)?.['SergeiLove'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) - (1);
    }
    qspCall(st, 'mood', 'raise', 'medium');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Chat (0:30)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/gadukino/hunters/talk1.'+rand(...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/talk1.` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] >= 0) {
    }
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
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
