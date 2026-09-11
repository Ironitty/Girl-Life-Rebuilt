import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A174');
  (s as any).boyage = qspFunc(s, 'shortgs', 'dob_to_age', 'A174');
  if (((s as any).hunterVars ?? 0)?.['SergeiLove'] === 0  ||  (((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 10  &&  ((s as any).hunterVars ?? 0)?.['SergeiQw'] <= 50)) {
    if (((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['Sergeisex'] === 0  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
      scene.text('You go to Sergei to spend time together, but instead, he kisses you and playfully bites your lip.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers after the kiss.
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want you," he whispers after the kiss.`);
      ((s as any).hunterVars ?? {})['Sergeisex'] = (((s as any).hunterVars ?? {})['Sergeisex'] ?? 0) + (Math.floor(Math.random() * 22) + 9);
      qspCall(s, 'arousal', 'foreplay', 5);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterflirt2.\'+rand(4, 6)+\'.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['hunterLoveSex', 'Sergei'] },
    ]);
  } },
        { label: 'Decline', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('<center><b>Sergei</b></center>');
      scene.img('images/characters/shared/headshots_main/big174.jpg');
      // TODO-QSP: dynamic text: Sergei is a friend of Andrei and Igor and a member of the hunters that frequente...
      scene.text(`Sergei is a friend of Andrei and Igor and a member of the hunters that frequented the woods and swamp by Gadukino. He's ${((s as any).boyage ?? 0)} years old. He is married and lives in the City Center…`);
      if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 0) {
        scene.text('You and he have a bad relationship because you offended him in the past.');
      } else {
        if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 10) {
          scene.text('You have a normal relationship with him.');
        } else {
          if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 20) {
            scene.text('You have friendly relations with him.');
          } else {
            if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 25) {
              scene.text('You\'re good friends.');
            } else {
              if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 30) {
                scene.text('It seems he has a crush on you.');
              } else {
                if (((s as any).hunterVars ?? 0)?.['SergeiQw'] <= 35) {
                  scene.text('You have a mutual crush on each other.');
                } else {
                  if (((s as any).hunterVars ?? 0)?.['SergeiLove'] === 1) {
                    scene.text('You two love each other.\' else \'You have an unrequited love for him.');
                  }
                }
              }
            }
          }
        }
      }
      qspCall(s, 'stat', '');
      if (((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 10) {
        if (((s as any).hunterVars ?? 0)?.['SergeiLove'] === 0) {
          scene.actions([
            { label: 'Flirt', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterflirt1.\'+rand(1, 3)+\'.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] <= 35  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) + (1);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] >= 10  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((s as any).hunterVars ?? {})['IgorQW'] = (((s as any).hunterVars ?? {})['IgorQW'] ?? 0) - (1);
    }
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((s as any).hunterVars ?? {})['AndreiQw'] = (((s as any).hunterVars ?? {})['AndreiQw'] ?? 0) - (1);
    }
    qspCall(s, 'stat', '');
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 30  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0  &&  ((s as any).pcs_apprnc ?? 0) >= 60) {
      scene.actions([
        { label: 'Continue flirting', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss1.jpg');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Answer kiss', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss2.jpg');
    ((s as any).hunterVars ?? {})['SergeiLove'] = 1;
    ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss3.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go inside', goto: ['hunterLoveSex', 'Sergei'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
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
      { label: 'Move away', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) - (50);
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
    ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) + (1);
    ((s as any).hunterVars ?? {})['Sergeisex'] = (((s as any).hunterVars ?? {})['Sergeisex'] ?? 0) + (Math.floor(Math.random() * 22) + 9);
    qspCall(s, 'arousal', 'foreplay', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['hunterLoveSex', 'Sergei'] },
    ]);
  } },
            ]);
          }
          if ((!(Math.floor(Math.random() * 7) + 0))) {
            scene.actions([
              { label: 'Break up with Sergei', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/brosila.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['SergeiLove'] = 0;
    ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) - (100);
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
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) + (1);
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0  ||  ((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0) {
      ((s as any).hunterVars ?? {})['slut'] = (((s as any).hunterVars ?? {})['slut'] ?? 0) + (1);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 0  &&  ((s as any).hunterVars ?? 0)?.['AndreiLove'] === 0) {
      ((s as any).hunterVars ?? {})['slut'] = (((s as any).hunterVars ?? {})['slut'] ?? 0) - (1);
    }
    qspCall(s, 'mood', 'raise', 'small');
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
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 0) {
      scene.text('You spend some time chatting with Sergei, listening to exciting stories from his life and telling some stories of your own.');
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 0) {
      scene.text('You talk with Sergei. He seems uncomfortable but doesn\'t force you away.');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 10) {
      ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'Depart', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } else {
    scene.img('images/locations/gadukino/hunters/brosil.jpg');
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 10) {
      scene.text('You want to talk to Sergei, but he beats you to it and starts speaking before you can get a word in.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I realized that our relationship has no future, and we need ...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I realized that our relationship has no future, and we need to stop seeing each other, " he says, trying not to look in your direction, and resolutely walks away.`);
      scene.text('"Well, maybe it\'s for the best," you think as you leave in the other direction.');
      ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) - (10);
    } else {
      scene.text('You want to talk to Sergei, but before you say anything, he speaks instead.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I realized that our relationship has no future. Your passion...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I realized that our relationship has no future. Your passion is unmatched, but I really love my family. I can't risk that for you," he says. He turns and walks away without saying another word or giving you time to say anything.`);
      scene.text('"Well, that\'s how you feel, is it?" you think as you stand there stunned. "Although, this is probably for the best since he is married," you conclude before walking away.');
      ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) - (50);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['SergeiLove'] = 0;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.build();
}

export const sergeihunter: LocationDef = {
  name: 'sergeihunter',
  title: 'Sergei',
  region: 'other',
  description: ['You go to Sergei to spend time together, but instead, he kisses you and playfully bites your lip.'],
  enter: enter,
};
