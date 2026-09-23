import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'igorhunter';
  (s as any).menu_arg = '';
  qspCall(s, 'npcStat', 'A173');
  (s as any).lover_picture_number = 31;
  (s as any).npcClo = 'jeans and a sweater';
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).boy ?? 0)] = 0;
  (s as any).boyage = ((s as any).year ?? 0) - ((((s as any).npc_dob ?? {})?.['A173'] ?? 0) / 10000);
  (s as any).boy_birth_month = ((((s as any).npc_dob ?? {})?.['A173'] ?? 0) / 100) % 100;
  (s as any).boy_birth_date = (((s as any).npc_dob ?? {})?.['A173'] ?? 0) % 100;
  if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 10  &&  ((s as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
    scene.img('images/locations/gadukino/hunters/brosil.jpg');
    scene.text('You want to talk to Igor, but he cuts you off with an angry look.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I realized that our love wasn''t real, and we need to break ...
    scene.text(`"${((s as any).pcs_nickname ?? '')}, I realized that our love wasn't real, and we need to break up," he says. As you try to find words to answer, he turns and resolutely walks away.`);
    scene.text('"This may well be for the best," you think as you leave in the other direction.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorLove'] = 0;
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 2) {
      (s as any).bfA = 0;
    }
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['IgorQW'] >= 10  &&  (Math.floor(Math.random() * 5) + 1) === 1  &&  ((s as any).hunterVars ?? 0)?.['Igorsex'] === 0) {
      scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
      scene.text('You walk up to Igor to spend time together, but he suddenly kisses you and whispers,');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, let''s make love."
      scene.text(`"${((s as any).pcs_nickname ?? '')}, let's make love."`);
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Igorsex'] = ((s as any).hunterVars['Igorsex'] ?? 0) + ((Math.floor(Math.random() * 25) + 12));
      qspCall(s, 'arousal', 'foreplay', 5);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/gadukino/hunters/hanterflirt2....
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/hanterflirt2.` + (Math.floor(Math.random() * 3) + 4) + '.jpg"></center>');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['hunterLoveSex', 'Igor'] },
    ]);
  } },
        { label: 'Decline', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I can\'t right now, Igor," you say');
    scene.text('You see a look of regret on his face as you leave.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).hunterVars ?? 0)?.['IgorLove'] < 2  &&  ((s as any).hunterVars ?? 0)?.['IgorQW'] >= 35  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0  &&  ((s as any).bfA ?? 0) < 1  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).pcs_apprnc ?? 0) >= 60) {
        scene.img('images/locations/gadukino/hunters/hanterkiss1.jpg');
        scene.text('Suddenly Igor kisses you when you didn\'t expect it.');
        scene.text('He looks nervous before gathering the courage to ask, "Will you be my girlfriend?"');
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        qspCall(s, 'arousal', 'foreplay', 1);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss2.jpg');
    scene.text('You move closer to him and begin kissing him again. Igor gently kisses you back.');
    scene.text('<center><b>Be aware! Igor is not in the Boyfriend system yet!</b></center>');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorLove'] = 2;
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss3.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['hunterLoveSex', 'Igor'] },
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
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  } },
          { label: 'No', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (50);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('<center><b>Igor Anisimov</b></center>');
        scene.img('images/characters/shared/headshots_main/big173.jpg');
        // TODO-QSP: dynamic text: Igor is a hunter along with Sergei and Andrei and is here visiting Andrei. He''s...
        scene.text(`Igor is a hunter along with Sergei and Andrei and is here visiting Andrei. He's ${((s as any).boyage ?? '')} years old. He is not married and lives in the City Center…`);
        if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 0) {
          scene.text('You and he have a bad relationship because you\'ve offended him in the past.');
        } else {
          if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 10) {
            scene.text('You have a normal relationship with him.');
          } else {
            if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 20) {
              scene.text('You have friendly relations with him.');
            } else {
              if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 25) {
                scene.text('You\'re good friends.');
              } else {
                if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 30) {
                  scene.text('It seems he has a crush on you.');
                } else {
                  if (((s as any).hunterVars ?? 0)?.['IgorQW'] <= 35) {
                    scene.text('You have a mutual crush on each other.');
                  } else {
                    if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 0) {
                      scene.text('You love him.');
                    } else {
                      if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 1) {
                        scene.text('You two have fallen in love.');
                      } else {
                        if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 2) {
                          // TODO-QSP: dynamic text: <<$boydesc>> is your boyfriend.
                          scene.text(`${((s as any).boydesc ?? '')} is your boyfriend.`);
                        } else {
                          // TODO-QSP: dynamic text: <<$boydesc>> is your husband.
                          scene.text(`${((s as any).boydesc ?? '')} is your husband.`);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        qspCall(s, 'stat', '');
        if (((s as any).hunterVars ?? 0)?.['IgorQW'] >= 10) {
          if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 0) {
            scene.actions([
              { label: 'Flirt', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/gadukino/hunters/hanterflirt1....
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/hanterflirt1.` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    if (((st as any).hunterVars ?? 0)?.['IgorQW'] <= 35  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] >= 10  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiQw'] >= 10  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    qspCall(st, 'stat', '');
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] === 0  &&  ((st as any).hunterVars ?? 0)?.['IgorQW'] >= 35  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0  &&  ((st as any).bfA ?? 0) === 1  &&  ((st as any).pcs_apprnc ?? 0) >= 60) {
      scene.actions([
        { label: 'Continue Flirt', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss1.jpg');
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Answer kiss', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss2.jpg');
    qspCall(st, 'mood', 'raise', 'small');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorLove'] = 1;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterkiss3.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go inside', goto: ['hunterLoveSex', 'Igor'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
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
      { label: 'To remove the face', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (50);
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
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['Igorsex'] = ((st as any).hunterVars['Igorsex'] ?? 0) + ((Math.floor(Math.random() * 25) + 12));
    qspCall(st, 'arousal', 'foreplay', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['hunterLoveSex', 'Igor'] },
    ]);
  } },
              ]);
            }
            if ((!(Math.floor(Math.random() * 7) + 0))) {
              scene.actions([
                { label: 'Break up with Igor', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/brosila.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorLove'] = 0;
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] === 2) {
      (st as any).bfA = 0;
    }
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (100);
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
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'small');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0  ||  ((st as any).hunterVars ?? 0)?.['AndreiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] === 0  &&  ((st as any).hunterVars ?? 0)?.['AndreiLove'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] === 2) {
      (st as any).bfA = ((st as any).bfA ?? 0) + (1);
    }
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
    if (((st as any).hunterVars ?? 0)?.['IgorQW'] >= 0) {
    }
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (((st as any).hunterVars ?? 0)?.['IgorQW'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          { label: 'Depart', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const igorhunter: LocationDef = {
  name: 'igorhunter',
  title: 'Igor Anisimov',
  region: 'other',
  description: ['You want to talk to Igor, but he cuts you off with an angry look.'],
  enter: enter,
};
