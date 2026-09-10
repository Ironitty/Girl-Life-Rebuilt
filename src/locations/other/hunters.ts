import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['were_met'] > 0) {
    if (((s as any).hunterVars ?? 0)?.['chattime'] === 1) {
      scene.img('images/locations/gadukino/hunters/hanters.jpg');
      if (((s as any).hunterVars ?? 0)?.['evening'] === 0) {
        scene.text('The three hunters, Sergei, Igor and Andrei are sitting and telling each other all kinds of hunting stories.');
      } else {
        scene.text('The two hunters, Sergei and Igor are sitting and telling each other all kinds of hunting stories.');
      }
    } else {
      scene.img('images/locations/gadukino/hunters/hanterswork1.\'+rand(1, 9)+\'.jpg');
      if (((s as any).hunterVars ?? 0)?.['evening'] === 0) {
        scene.text('The three hunters, Sergei, Igor and Andrei, are all minding their own business.');
      } else {
        scene.text('The three hunters, Sergei, Igor and Andrei, are all minding their own business.');
      }
    }
  } else {
    scene.img('images/locations/gadukino/hunters/hanters.jpg');
    scene.text('You see three strangers talking to each other. Each one of them telling all kinds of hunting stories.');
  }
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 0) {
    scene.actions([
      { label: 'Greet them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['were_met'] = 1;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
    (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanters1.jpg');
    scene.text('You approached the hunters and politely greeted them. The man telling the story stopped and greeted you back.');
    if (((s as any).pcs_apprnc ?? 0) >= 60) {
      scene.text('"What\'s your name, beautiful?" one of them asked.');
    }
    if (((s as any).pcs_apprnc ?? 0) < 60) {
      scene.text('"What should we call you?" one of them asked.');
    }
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>", you answer.
    scene.text(`"${((s as any).pcs_nickname ?? 0)}", you answer.`);
    if (((s as any).GadBoy ?? 0)?.['river_gang'] <= 0) {
      scene.text('"I\'m Andrei, replied the oldest man, and these are my friends Igor and Sergei."');
      // TODO-QSP: dynamic text: "Could your surname be <<$pcs_lastname>>?" he asked. You look at him nodding.
      scene.text(`"Could your surname be ${((s as any).pcs_lastname ?? 0)}?" he asked. You look at him nodding.`);
      // TODO-QSP: dynamic text: "Don't act surprised <<$pcs_nickname>>, you look a lot like your mother when she...
      scene.text(`"Don't act surprised ${((s as any).pcs_nickname ?? 0)}, you look a lot like your mother when she was younger. I… Hmmm… that's good to know, I'm also from Gadukino." said Andrei.`);
      scene.text('"Don\'t be shy, have a seat, we won\'t hurt you." said Sergei, freeing up some space for you to sit on.');
    } else {
      // TODO-QSP: dynamic text: "Well well, look what the cat dragged in. If it isn't <<$pcs_nickname>> <<$pcs_l...
      scene.text(`"Well well, look what the cat dragged in. If it isn't ${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, the local slut." said Andrei.`);
      scene.text('"Don\'t be afraid, I\'m also from Gadukino, you look just like your mother when she was younger, you\'ve both been blessed with good looks." he says.');
      scene.text('"I\'m Andrei," he continues on and these are my friends Igor and Sergei.');
      scene.text('"Come here sweetheart, sit down, we aren\'t bad, we won\'t bite." said Sergei, freeing up some space for you to sit on.');
      (s as any).hunterVars['KnowSlut'] = 1;
      (s as any).hunterVars['Rape'] = 1;
    }
    (s as any).npc_usedname['A172'] = 'Andrei';
    (s as any).npc_usedname['A173'] = 'Igor';
    (s as any).npc_usedname['A174'] = 'Sergei';
    scene.actions([
      { label: 'Sit down', goto: ['hunters', 'start'] },
      { label: 'Move away', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0  &&  ((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Stick around', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A172', '1');
    qspCall(s, 'boyStat', 'A173', '2');
    qspCall(s, 'boyStat', 'A174', '3');
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    // TODO-QSP: npc_had_sex[$boy[1]] = 1
    // TODO-QSP: npc_had_sex[$boy[2]] = 1
    // TODO-QSP: npc_had_sex[$boy[3]] = 1
    scene.img('images/locations/gadukino/hunters/hanters1.jpg');
    scene.text('You make eye contact with the men while making a lewd reference. The men immediately drop everything and turn their attention to you…');
    // TODO-QSP: dynamic text: "We know you find us irresistible <<$pcs_nickname>>." Andrei said smiling.
    scene.text(`"We know you find us irresistible ${((s as any).pcs_nickname ?? 0)}." Andrei said smiling.`);
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupundress.jpg');
    scene.text('Igor and Sergei quickly approach you taking you by the hand and lead you towards Andrei. They start taking your clothes off on the go…');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
    (s as any).huntsexb = Math.floor(Math.random() * 3) + 1;
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 9);
    scene.img('images/locations/gadukino/sex/hunter/hantersgrouptanga.jpg');
    scene.text('They make you lay down on the blanket, pull off your panties exposing your bare vagina. Surrounding you the men take off their pants and you get excited by seeing their swollen members.');
    qspCall(s, 'arousal', 'foreplay', 1, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    if (((s as any).huntsexa ?? 0) < 3) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALasi'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 1) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALsi'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 2) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALai'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 3) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALas'
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10  &&  ((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 10  &&  ((s as any).hunterVars ?? 0)?.['IgorQW'] >= 10  &&  ((s as any).shootingday ?? 0) !== ((s as any).daystart ?? 0)) {
      if (((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
        if (((s as any).shooting ?? 0) === 0) {
          scene.actions([
            { label: 'Ask to learn how to shoot the rifle', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).shootingday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/claps_eyes.jpg');
    scene.text('"Can\'t you guys teach me how to shoot a rifle?');
    // TODO-QSP: dynamic text: "You're a girl, why would you want to learn something like that <<$pcs_nickname>...
    scene.text(`"You're a girl, why would you want to learn something like that ${((s as any).pcs_nickname ?? 0)}?" Andrei said smiling. "You should pursue sewing or maybe a girly sport instead. Shooting is for boys."`);
    scene.text('"Pretty please." you look at them while making puppy eyes.');
    if (((s as any).pcs_apprnc ?? 0) >= 60) {
      (s as any).shooting = 1;
      if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 20) {
        (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
      }
      if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 20) {
        (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
      }
      if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 20) {
        (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
      }
      // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, we give up", they say smiling. "You've persuaded us, we...
      scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, we give up", they say smiling. "You've persuaded us, we'll teach you how to shoot…`);
    } else {
      (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (1);
      (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) - (1);
      (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) - (1);
      // TODO-QSP: dynamic text: "No, <<$pcs_nickname>>, that will not work." they answer. "And don't assume that...
      scene.text(`"No, ${((s as any).pcs_nickname ?? 0)}, that will not work." they answer. "And don't assume that those puppy eyes will work on us.`);
      scene.text('You frown your lips and turn your back on the men. "You guys are no fun, I\'m leaving." you say angrily while moving away from the hunters.');
    }
    if (((s as any).shooting ?? 0) === 1) {
      scene.actions([
        { label: 'Learn how to shoot the rifle (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/gadukino/hunters/shooting.jpg');
    scene.text('The hunters explain how to hold the rifle, aim, and when to squeeze the trigger. You feel that you are ready and decide to take a…');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Shot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).fingal = ((s as any).fingal ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'exp_gain', 'shoot', 1);
    scene.img('images/locations/gadukino/hunters/shooting1.mp4');
    scene.text('The recoil wasn\'t at all as you expected it to be. You hear a loud bang, and the last thing you remember is something hitting you on the forehead…');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go', goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Ask to shoot the rifle', handler: (st: GameState) => {
    if (((s as any).fingal ?? 0) === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).shootingday = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/claps_eyes.jpg');
      scene.text('You approach the hunters sitting in a clearing. "Guys, could you give me the rifle? I want to try it out again." You ask the hunters.');
      if (((s as any).shooting ?? 0) === 1) {
        (s as any).shooting = 2;
        // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>, just don't end up like the first time," Andrei said jo...
        scene.text(`"Okay, ${((s as any).pcs_nickname ?? 0)}, just don't end up like the first time," Andrei said jokingly.`);
      } else {
        // TODO-QSP: dynamic text: "Sure, <<$pcs_nickname>>, just be careful." Andrei said smiling.
        scene.text(`"Sure, ${((s as any).pcs_nickname ?? 0)}, just be careful." Andrei said smiling.`);
        // TODO-QSP: dynamic text: "Here, <<$pcs_nickname>>, just don't shoot too much, the bullets are expensive."...
        scene.text(`"Here, ${((s as any).pcs_nickname ?? 0)}, just don't shoot too much, the bullets are expensive." Andrei said smiling.`);
      }
      if (((s as any).pcs_shoot ?? 0) >= 1  &&  ((s as any).pcs_shoot ?? 0) <= 10) {
        scene.actions([
          { label: 'Go shooting (1:00)', handler: (st: GameState) => {
    if ((((s as any).pcs_stren ?? 0) + ((s as any).pcs_shoot ?? 0) > 20)  ||  (((s as any).pcs_stren ?? 0) + ((s as any).pcs_shoot ?? 0) < 20  &&  Math.floor(Math.random() * 2) + 1 === 1)) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'exp_gain', 'shoot', 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/shooting2.mp4');
      scene.text('You fire the rifle for an hour under the hunters watchful eyes.');
      scene.actions([
        { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'exp_gain', 'shoot', 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/shooting1.mp4');
      scene.text('Everything went wrong just like the first time. You take a shot and got hit once again by the rifle on the forehead…');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, are you still alive?" Igor asked you with some concern in hi...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, are you still alive?" Igor asked you with some concern in his voice.`);
      scene.text('"Yeah, I think so…" you reply, holding your bruised forehead.');
      scene.text('"I\'m glad to hear that," Andrei said laughing. "Go get some rest, little Rambo".');
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/tongue.jpg');
    scene.text('"I\'m not Rambo, I\'m Lara Croft," you reply. Andrei, stands there looking confused not understanding the reference.');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go shooting (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'exp_gain', 'shoot', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/shooting2.mp4');
    scene.text('You fire the rifle for an hour under the hunters watchful eyes.');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
        ]);
      }
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).shootingday = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/claps_eyes.jpg');
      scene.text('You approach the hunters sitting in a clearing. "Guys, could you give me the rifle? I want to try it out again." You ask the hunters.');
      scene.text('"You need to heal your forehead first." Andrei says smiling. "You have the spirit of an Amazon, you need to relax."');
      scene.actions([
        { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
  } },
          ]);
        }
      } else {
        if (((s as any).huntslutsex ?? 0) === 0) {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          (s as any).shootingday = ((s as any).daystart ?? 0);
          (s as any).hunterVars['sexnude'] = 1;
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/hunters/claps_eyes.jpg');
          scene.text('You approach the hunters sitting in the meadow. "Guys, let me shoot the rifle," you look at them with your puppy eyes.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, come closer," replied Andrei. "If you want to shoot you need...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, come closer," replied Andrei. "If you want to shoot you need to repay us somehow."`);
          scene.actions([
            { label: 'Approach', goto: ['hunters', 'start'] },
          ]);
        } else {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          (s as any).shootingday = ((s as any).daystart ?? 0);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/hunters/claps_eyes.jpg');
          scene.text('"Please guys, I really want to shoot with the rifle."');
          // TODO-QSP: dynamic text: "Don't you worry <<$pcs_nickname>>, you have other talents that are more needed....
          scene.text(`"Don't you worry ${((s as any).pcs_nickname ?? 0)}, you have other talents that are more needed." Andrei replied.`);
          scene.text('He scoffs, pleased with the joke.');
          scene.actions([
            { label: 'Move away', goto: ['gad_swamp_yard', 'start'] },
          ]);
        }
      }
    }
    if (((s as any).hunterVars ?? 0)?.['evening'] === 0) {
      // TODO-QSP: act 'Talk to Andrei': gt 'andreihunter'
    }
    scene.actions([
      { label: 'Chat (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (0);
    qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 11) + 10);
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
      (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 10) {
      (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 10) {
      (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      if (((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0) {
        (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) + (1);
      }
      scene.img('images/locations/gadukino/hunters/hantersnotanga1.jpg');
      scene.text('You are sitting in front of the men, not wearing any panties, so the stories they tell get jumbled and most of the time is spent on throwing sideways glances at your naked vagina.');
      qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'gangbang');
      qspCall(s, 'stat', '');
    } else {
      scene.img('images/locations/gadukino/hunters/hanters1.jpg');
      scene.text('You enthusiastically listen to the their hunting stories and even share some of your stories.');
      qspCall(s, 'hunters', 'hunters_talk');
      scene.text('You get so caught up in the conversation, you don\'t even notice how fast the time flies by.');
    }
    scene.actions([
      { label: 'Move away', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
      { label: 'Talk to Sergei', goto: ['sergeihunter', ''] },
      { label: 'Talk to Igor', goto: ['igorhunter', ''] },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['Rape'] === 3) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['KnowSlut'] = 1;
    (s as any).boyAsex = 0;
    (s as any).boyBsex = 0;
    (s as any).boyCsex = 0;
    (s as any).boyAsexa = 0;
    (s as any).boyBsexa = 0;
    (s as any).boyCsexa = 0;
    if (((s as any).hunterandreisex ?? 0) === 0) {
      (s as any).hunterandreisex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).huntersergeisex ?? 0) === 0) {
      (s as any).huntersergeisex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).hunterigorsex ?? 0) === 0) {
      (s as any).hunterigorsex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
      (s as any).hunterVars['IgorLove'] = 0;
      (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) - (100);
      if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 2) {
        (s as any).bfA = 0;
      }
      if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 3) {
        qspCall(s, 'lover_love', 'divorce');
      }
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiLove'] === 1) {
      (s as any).hunterVars['SergeiLove'] = 0;
      (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) - (100);
    }
    if (((s as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
      (s as any).hunterVars['AndreiLove'] = 0;
      (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (100);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax2.jpg');
    scene.text('You\'re sitting down in the meadow near the road, relaxing, enjoying the nice weather, when all of a sudden Andrei, Sergei and Igor approach you. They quickly surround you not letting move away.');
    // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>, we've been talking with each other, and we feel that yo...
    scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}, we've been talking with each other, and we feel that you need to repay us somehow for the lessons. So what do you say?"`);
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).hunterVars['Rape'] = 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupundress.jpg');
    scene.text('"I guess you\'re right I need to repay you somehow…"');
    scene.text('As soon you\'ve agreed the guys change their attitude towards you. Igor helps you up and leads you away from the road while Andrei and Sergei already began taking your clothes off…');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).dirty_dickA = 0;
    (s as any).dirty_dickB = 0;
    (s as any).dirty_dickC = 0;
    (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
    (s as any).huntsexb = Math.floor(Math.random() * 3) + 1;
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 9);
    (s as any).hunterVars['sexnude'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hantersgrouptanga.jpg');
    scene.text('They lay you down on the blanket and quickly pull off your panties. They drop their pants and are standing in front of you with their cocks hanging in the open. "So what are you waiting for? Start sucking."');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    if (((s as any).huntsexa ?? 0) < 3) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALasi'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 1) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALsi'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 2) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALai'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 3) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALas'
    }
  } },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax3.jpg');
    scene.text('You politely refuse saying you don\'t owe them anything, but the men won\'t accept a no and you can see that they\'re clearly not satisfied with your answer.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, don't fuck around with us. Deep inside you know you need to ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, don't fuck around with us. Deep inside you know you need to repay us." said Andrei, grabbing you by the hair.`);
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    (s as any).hunterVars['Rape'] = 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax4.jpg');
    scene.text('Andrei orders Sergei to grab you by the arms, so you can\'t run away if you change your mind again…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax5.\'+rand(1, 3)+\'.jpg');
    scene.text('While Sergei is holding you by the arms Andrei and Igor start groping every inch of your body…');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).dirty_dickA = 0;
    (s as any).dirty_dickB = 0;
    (s as any).dirty_dickC = 0;
    (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
    (s as any).huntsexb = Math.floor(Math.random() * 3) + 1;
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 9);
    (s as any).hunterVars['sexnude'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hantersgrouptanga.jpg');
    scene.text('They force you on the back, yanking your panties, Sergei keeps holding you down while Andrei and Igor take off their pants. "On your knees and start sucking!" Andrei commands you. "Sergei take off your pants, this little bitch is going to please you too."');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    if (((s as any).huntsexa ?? 0) < 3) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALasi'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 1) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALsi'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 2) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALai'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 3) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALas'
    }
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Resist', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    (s as any).stat['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
    (s as any).hunterVars['Rape'] = 4;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax6.jpg');
    scene.text('You desperately begin to resist, but the men are too strong for you. Andrei orders Igor and Sergei to grab you and while you\'re fighting them Andrei approaches and slaps you across the face…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax7.jpg');
    scene.text('Andrei keeps holding you down, grabbing the clothes, tearing them off…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax8.jpg');
    scene.text('While Igor and Sergei are holding you down Andrei takes off his pants, bringing his cock closer towards your mouth. You shake your head trying to pull away, but he grabs you by the head, and violently shoves his cock into your mouth.');
    scene.text('"Suck on it, bitch," you hear him say while tearing up. "And God forbid, if I feel any teeth, I\'ll fucking bury you!"');
    qspCall(s, 'boyStat', 'A172');
    scene.text('At the same time Sergei, feeling he can take advantage of the situation, pulls your panties to the side and begins fondling your vagina.');
    scene.text('Igor grabs your hand, takes out his cock, places it in the palm of your hand, leaving you with no choice but to begin jerking him off.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang', 'rough');
    qspCall(s, 'arousal', 'hj', 5, 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal_finger', (-5), 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax9.jpg');
    scene.text('After playing around for a while, Sergei and Andrei grab you by your hands and feet and carry you into a clearing behind the hut.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax10.jpg');
    scene.text('There they twist your arms, so you don\'t attempt to escape, while Igor fetches a blanket from the hut…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax11.jpg');
    scene.text('The men throw you down on the blanket and pull off your panties…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax12.jpg');
    scene.text('The men start exploring your body. Sergei grabs you by the face, Igor squeezes your breast, while Andrei starts caressing your vagina…');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'gangbang', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax14.jpg');
    scene.text('Andrei finger-fucks you with his two fingers. Sergei and Igor go down on their knees whip out their cocks and make you jerk them off…');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'gangbang', 'rough');
    qspCall(s, 'arousal', 'hj', (-5), 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).dirty_dickA = 0;
    (s as any).dirty_dickB = 0;
    (s as any).dirty_dickC = 0;
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 9);
    (s as any).hunterVars['sexnude'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax13.jpg');
    scene.text('Andrei pulls out of his fingers and the men surround you holding their cocks. Their animal instincts have taken over and they\'re ready for some real action.');
    // TODO-QSP: dynamic text: "Now that we're past the foreplay <<$pcs_nickname>>, let's have some real fun," ...
    scene.text(`"Now that we're past the foreplay ${((s as any).pcs_nickname ?? 0)}, let's have some real fun," said Andrei.`);
    scene.actions([
      { label: 'Suck', goto: ['hunters', 'huntersgroupORALasi'] },
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
  }
  if (((s as any).huntdanceslut ?? 0) === 2) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).huntdanceslut = 4;
    (s as any).hunterVars['Rape'] = 5;
    (s as any).boyAsex = 0;
    (s as any).boyBsex = 0;
    (s as any).boyCsex = 0;
    (s as any).boyAsexa = 0;
    (s as any).boyBsexa = 0;
    (s as any).boyCsexa = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax2.jpg');
    scene.text('Andrei, Igor and Sergei walk up to you and strike up a conversation. Before you know it they\'ve surrounded you, unzipping their pants.');
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    (s as any).dirty_dickA = 0;
    (s as any).dirty_dickB = 0;
    (s as any).dirty_dickC = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupbj3.6.jpg');
    scene.text('Without any hesitation you begin sucking off Sergei and jerking off Igor. Andrei stands next to you playing with himself. Not to let him feel left out, you start sucking Andrei off. Thereafter you alternate your attention to each one of the men.');
    qspCall(s, 'boyStat', 'A172');
    qspCall(s, 'boyStat', 'A174');
    qspCall(s, 'boyStat', 'A173');
    qspCall(s, 'arousal', 'bj', 15, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue sucking', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    }
    if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
      qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
    }
    qspCall(s, 'boyStat', 'A174');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    }
    if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
      qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
    }
    qspCall(s, 'boyStat', 'A172');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    }
    if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
      qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
    }
    (s as any).hunterVars['KnowSlut'] = 2;
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 9);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupo1.0.jpg');
    scene.text('You continue orally pleasuring the men, noticing their pulsating cocks ready to explode. Few moments later the men all cum on your face. Feeling satisfied the men start walking away from you.');
    // TODO-QSP: dynamic text: "Not bad, <<$pcs_nickname>>," you hear Andrei saying. "Now we know that you are ...
    scene.text(`"Not bad, ${((s as any).pcs_nickname ?? 0)}," you hear Andrei saying. "Now we know that you are really good at this."`);
    // TODO-QSP: dynamic text: "We'll be seeing you again, <<$pcs_nickname>>. And don't worry, you should be pr...
    scene.text(`"We'll be seeing you again, ${((s as any).pcs_nickname ?? 0)}. And don't worry, you should be proud of how good you are at pleasuring men."`);
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wonder', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big172.jpg');
    scene.text('"What are you saying?," you ask Andrei angrily. "You\'ve just made me feel like a whore."');
    // TODO-QSP: dynamic text: Andrei turns to you, "You see <<$pcs_nickname>>, you were always like this, you ...
    scene.text(`Andrei turns to you, "You see ${((s as any).pcs_nickname ?? 0)}, you were always like this, you just had to stop running away from it. You can see it's way better that this happened with us. Don't worry, we won't tell anyone. Now that you've gained some experience, you'll become better at controlling that pretty mouth of yours.`);
    scene.text('"You really think so?" you ask.');
    scene.text('"Of course! You enjoy giving head, we love receiving head, there is no need we should\'nt be enjoying ourself together."');
    scene.text('"And you never know, maybe this newfound experience will make you good." said Andrei while thoughtfully scratching his chin.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).huntdanceslut ?? 0) === 3) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).huntdanceslut = 4;
    (s as any).boyAsex = 0;
    (s as any).boyBsex = 0;
    (s as any).boyCsex = 0;
    (s as any).boyAsexa = 0;
    (s as any).boyBsexa = 0;
    (s as any).boyCsexa = 0;
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/fuckoff1.jpg');
    scene.text('"Go fuck yourself, you creep!" you said out loudly while showing Andrei the middle finger.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    (s as any).stat['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
    (s as any).hunterVars['Rape'] = 4;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax6.jpg');
    scene.text('Andrei runs up to you. "Are you out of your fucking mind bitch?!!!" He grabs you by the hair and tosses you on to the ground.');
    scene.text('You start desperately resisting, but Andrei has his hand already up, slapping you, your head starts ringing by the impact…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax8.jpg');
    scene.text('"You stupid whore. Who do you think you are?!!!" Andrei says angrily. You come to your senses and try to pull away, but he grabs you by the hair, commands the others to hold you down and violently shoves his cock into your mouth.');
    scene.text('"Suck on it, bitch, go deep." you hear him say. "And God forbid, I will kill you if I feel any teeth!"');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang', 'rough', 'deepthroat');
    qspCall(s, 'boyStat', 'A172');
    scene.text('Sergei, seeing he can take advantage of the situation, pulls your panties to the side and begins fondling your clitoris.');
    scene.text('Igor grabs you by the hand, takes out his cock, places it in the palm of your hand, leaving you with no choice but to begin jerking him off.');
    qspCall(s, 'arousal', 'hj', 5, 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal_finger', (-5), 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax9.jpg');
    scene.text('After pleasuring them for a while, Sergei and Andrei grab you by your hands and feet and carry you into a clearing behind the hut.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax10.jpg');
    scene.text('They make you stand there twisting your arms, so you don\'t attempt to escape, while Igor fetches a blanket from the hut…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax11.jpg');
    scene.text('The men throw you down on the blanket and pull off your panties…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax12.jpg');
    scene.text('The men start exploring your body. Sergei grabs you by the face, Igor squeezes your breast, while Andrei starts caressing your clitoris…');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax14.jpg');
    scene.text('While laying on your back Andrei starts finger-fucking you. Sergei and Igor go down on their knees whip out their cocks and make you jerk them off…');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).dirty_dickA = 0;
    (s as any).dirty_dickB = 0;
    (s as any).dirty_dickC = 0;
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 9);
    (s as any).hunterVars['sexnude'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax13.jpg');
    scene.text('Andrei pulls out of his fingers and the men surround you holding their cocks. Their animal instincts have taken over and they\'re ready for some real action.');
    // TODO-QSP: dynamic text: "Now that we're past the foreplay <<$pcs_nickname>>, let's have some real fun," ...
    scene.text(`"Now that we're past the foreplay ${((s as any).pcs_nickname ?? 0)}, let's have some real fun," said Andrei.`);
    scene.actions([
      { label: 'Suck', goto: ['hunters', 'huntersgroupORALasi'] },
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
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3  ||  ((s as any).forest_gopsex ?? 0) === 3) {
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 3);
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    (s as any).dirty_dickA = 0;
    (s as any).dirty_dickB = 0;
    (s as any).dirty_dickC = 0;
    (s as any).boyAsex = 0;
    (s as any).boyBsex = 0;
    (s as any).boyCsex = 0;
    (s as any).boyAsexa = 0;
    (s as any).boyBsexa = 0;
    (s as any).boyCsexa = 0;
    if (((s as any).hunterandreisex ?? 0) === 0  &&  (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3)) {
      (s as any).hunterandreisex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).huntersergeisex ?? 0) === 0  &&  (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3)) {
      (s as any).huntersergeisex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).hunterigorsex ?? 0) === 0  &&  (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3)) {
      (s as any).hunterigorsex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/hunters/hanters1.jpg">...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/hunters/hanters1.jpg"></center>`);
    }
    if (((s as any).forest_gopsex ?? 0) === 3) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/3boys.1.jpg"></...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/3boys.1.jpg"></center>`);
    }
    if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
      scene.text('You approach the men with a playful smile…');
    }
    // TODO-QSP: dynamic text: "You know what to do <<$pcs_nickname>>," said one of the men smiling. "Come here...
    scene.text(`"You know what to do ${((s as any).pcs_nickname ?? 0)}," said one of the men smiling. "Come here, show us how much you want it."`);
    qspCall(s, 'arousal', 'foreplay', 3, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
    (s as any).huntsexb = Math.floor(Math.random() * 3) + 1;
    if (((s as any).huntsexa ?? 0) < 3) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALasi'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 1) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALsi'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 2) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALai'
    }
    if (((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 3) {
      // TODO-QSP: act 'Suck': gt 'hunters', 'huntersgroupORALas'
    }
  }
  if (((s as any).slutgosex ?? 0) === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 1  ||  ((s as any).forest_gopsex ?? 0) === 1) {
    (s as any).dirty_dickA = 0;
    (s as any).dirty_dickB = 0;
    (s as any).dirty_dickC = 0;
    (s as any).boyAsex = 0;
    (s as any).boyBsex = 0;
    (s as any).boyCsex = 0;
    (s as any).boyAsexa = 0;
    (s as any).boyBsexa = 0;
    (s as any).boyCsexa = 0;
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 3);
    if (((s as any).forest_gopsex ?? 0) === 1) {
      qspCall(s, 'outfit', 'strip_all', 'forest_edge');
    } else {
      qspCall(s, 'outfit', 'strip_all', 'gad_backwater');
      qspCall(s, 'outfit', 'strip_all');
    }
    if (((s as any).hunterandreisex ?? 0) === 0  &&  ((s as any).temphunt ?? 0) === 1) {
      (s as any).hunterandreisex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).huntersergeisex ?? 0) === 0  &&  ((s as any).temphunt ?? 0) === 2) {
      (s as any).huntersergeisex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).hunterigorsex ?? 0) === 0  &&  ((s as any).temphunt ?? 0) === 3) {
      (s as any).hunterigorsex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).temphunt ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A172');
    }
    if (((s as any).temphunt ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A174');
    }
    if (((s as any).temphunt ?? 0) === 3) {
      qspCall(s, 'boyStat', 'A173');
    }
    if (((s as any).temphunt ?? 0) === 4) {
      qspCall(s, 'boyStat', 'A63');
    }
    if (((s as any).temphunt ?? 0) === 5) {
      qspCall(s, 'boyStat', 'A61');
    }
    if (((s as any).temphunt ?? 0) === 6) {
      qspCall(s, 'boyStat', 'A62');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/slutgosex1.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> takes you by the hand and leads you to a clearing next to some tree...
    scene.text(`${((s as any).boydesc ?? 0)} takes you by the hand and leads you to a clearing next to some trees. He immediately begins to undress you.`);
    // TODO-QSP: dynamic text: "You know why I've brought you here <<$pcs_nickname>>," said the guy smiling.
    scene.text(`"You know why I've brought you here ${((s as any).pcs_nickname ?? 0)}," said the guy smiling.`);
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Squat', goto: ['hunters', 'hunterslutSTART'] },
    ]);
  }
  scene.actions([
    { label: 'Walk away', goto: ['gad_swamp_yard', 'start'] },
  ]);
  scene.build();
}

function enterHuntersgroupORALsi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporalsi1.\'+rand(0, 3)+\'.jpg');
  scene.text('The men surround you with their cocks out, telling you to suck them off.');
  scene.text('You began to suck their cocks alternately, while carefully paying equal attention to each member.');
  scene.text('Each of them start groaning as soon as your lips touch their penis head.');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: You hear <<$boydesc>> groaning more intensely, indicating he's ready to cum. You...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} groaning more intensely, indicating he's ready to cum. You look up at him, smiling with your eyes and speed up you head motion. You keep on pleasuring him until he finishes on your face. He walks away, blissfuly smiling.`);
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  qspCall(s, 'hunters', 'rng_1');
  scene.build();
}

function enterHuntersgroupORALsi1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporalsi2.\'+rand(0, 2)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You begin sucking Sergei and Igor off, altering pleasuring them orally.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You begin sucking Kolyamba and Vasyan off, altering pleasuring them orally.');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  qspCall(s, 'hunters', 'rng_1');
  scene.build();
}

function enterHuntersgroupORALs(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporals.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei grabs you by the head and shoves his cock into your mouth. Igor, feeling left out and just stands there with his cock out. You look at Igor with lust while sucking Sergei\'s cock. Igor pushes Sergei away and shoves his cock inside your mouth.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba grabs you by the head and shoves his cock into your mouth. Vasyan, feeling left out and just stands there with his cock out. You look at Vasyan with lust while sucking Kolyamba\'s cock. Vasyan pushes Kolyamba away and shoves his cock inside your mouth.');
  }
  scene.text('"There, there, don\'t fight I can do you both at the same time." you say. You start altering between their cocks, pleasuring them both.');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  // TODO-QSP: dynamic text: You hear <<$boydesc>> groaning more intensely, indicating they're ready to cum. ...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} groaning more intensely, indicating they're ready to cum. You look at them, smiling with your eyes and speed up you head motion. You keep on pleasuring them until they finish on your face. They walks away, blissfuly smiling.`);
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupORALs1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporals1.\'+rand(0, 1)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You begin pleasuring Sergei. He grabs you by the head giving him the control over how deep you will go…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You begin pleasuring Kolyamba. He grabs you by the head giving him the control over how deep you will go…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupORALs1end(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporals1end.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You begin pleasuring Sergei. He tells you that he wants to enjoy this so you should only suck his penis head…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You begin pleasuring Kolyamba. He tells you that he wants to enjoy this so you should only suck his penis head…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$boydesc>> finishes in your mouth and walks away with a satisfied smiles on th...
  scene.text(`${((s as any).boydesc ?? 0)} finishes in your mouth and walks away with a satisfied smiles on their faces, leaving you alone sitting on the blanket…`);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'bj', 2, 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterHuntersgroupORALi1end(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporalend1.\'+rand(0, 1)+\'.jpg');
  // TODO-QSP: dynamic text: You get down on your knees. <<$boydesc>> grabs you by the head and tells you he ...
  scene.text(`You get down on your knees. ${((s as any).boydesc ?? 0)} grabs you by the head and tells you he wants you to lick his penis head…`);
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'bj', 2, 'sub');
  // TODO-QSP: dynamic text: You lick <<$boydesc>>'s penis head until he finishes and walks away satisfied. H...
  scene.text(`You lick ${((s as any).boydesc ?? 0)}'s penis head until he finishes and walks away satisfied. He leaves you sitting alone on the blanket…`);
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    // TODO-QSP: act 'Further': gt $loc, $loc_arg
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupORALa1end(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporalend1.\'+rand(0, 1)+\'.jpg');
  // TODO-QSP: dynamic text: You get down on your knees. <<$boydesc>> grabs you by the head and tells you he ...
  scene.text(`You get down on your knees. ${((s as any).boydesc ?? 0)} grabs you by the head and tells you he wants you to lick his penis head…`);
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: You lick <<$boydesc>>'s penis head until he finishes and walks away satisfied. H...
  scene.text(`You lick ${((s as any).boydesc ?? 0)}'s penis head until he finishes and walks away satisfied. He leaves you sitting alone on the blanket…`);
  qspCall(s, 'arousal', 'bj', 2, 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    // TODO-QSP: act 'Further': gt $loc, $loc_arg
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupORALi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporali.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You alternate between Sergeis\' and Igors\' penises, skillfully pleasuring the men.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You alternate between Kolambas\' and Vasyas\' penises, skillfully pleasuring the men.');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$boydesc>> cums in your mouth and walks away with a satisfied smile on their f...
  scene.text(`${((s as any).boydesc ?? 0)} cums in your mouth and walks away with a satisfied smile on their faces.`);
  qspCall(s, 'arousal', 'bj', 2, 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupORALend1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporalend1.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You kneel down in front Sergei and Igor, they unzip their pants. You start sucking them off, paying attention to each member.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You kneel down in front Kolyamba and Vasyan, they unzip their pants. You start sucking them off, paying attention to each member.');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 20);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 20);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 20);
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 20);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('The men order you to swallow all of the sperm. You enthusiasticly open your mouth ready to receive their loads. The men started groaning loudly and began cumming, the quantity of sperm was so overwhelming that you were not able to swallow all of it and some of drips onto your face. You see the displeasure in Sergeis\' and Igors\' faces not being able to swallow it all…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('The men order you to swallow all of the sperm. You enthusiasticly open your mouth ready to receive their loads. The men started groaning loudly and began cumming, the quantity of sperm was so overwhelming that you were not able to swallow all of it and some of drips onto your face. You see the displeasure in Kolambas\' with Vasyas\' faces not being able to swallow it all…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupORALai(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporalsi1.\'+rand(0, 3)+\'.jpg');
  scene.text('You begin to pleasure the three men, diligently giving all the men equal attention.');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  // TODO-QSP: dynamic text: <<$boydesc>> finish and walk away with a blissful smile on their face.
  scene.text(`${((s as any).boydesc ?? 0)} finish and walk away with a blissful smile on their face.`);
  qspCall(s, 'arousal', 'bj', 2, 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupORALai1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporalai1.\'+rand(0, 3)+\'.jpg');
  scene.text('You began sucking the men, trying to fit two cocks in your mouth at the same time.');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupORALi1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporali1.jpg');
  scene.text('You began to suck the men, trying to fit two cocks in your mouth at the same time.');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$boydesc>> groans loudly while cumming. He zips his pants and walks away.
  scene.text(`${((s as any).boydesc ?? 0)} groans loudly while cumming. He zips his pants and walks away.`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupORALas(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgrouporalsi1.\'+rand(0, 3)+\'.jpg');
  scene.text('You began to suck their cocks alternately, while carefully paying equal attention to each one of them.');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$boydesc>> finish and walk away with a blissful smile on their face.
  scene.text(`${((s as any).boydesc ?? 0)} finish and walk away with a blissful smile on their face.`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_5');
  scene.build();
}

function enterHuntersgroupORALasi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupbj3.\'+rand(0, 8)+\'.jpg');
  scene.text('The men take turns, grabbing your head, forcing their cock down your throat.');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  qspCall(s, 'hunters', 'rng_6');
  scene.build();
}

function enterHuntersgroupVias(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvias3.\'+rand(0, 4)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor lies down on the ground with his cock out, he commands you to straddle him. While Igor enters you… Andrei and Sergei tell you to start sucking them off.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Igor lies on the ground, grabbing you by the hips, pulling you towards his cock… Mitka and Kolyamba stand there waiting to get their cock sucked…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_6');
  scene.build();
}

function enterHuntersgroupVas(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvas.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor lies on the ground, makes you straddle him while he\'s fucking you relentlessly… At the same time you grab Andreis\' and Sergeis\' cocks and start jerking them off.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Igor lies on the ground, you straddle him and he lead his cock inside you… You grab Mitkas\' and Kolyambas\' cocks and start jerking them off.');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).andrhuntanal ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_5');
  scene.build();
}

function enterHuntersgroupVas1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvas1.\'+rand(0, 4)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Andrei positions you on all fours and enters you from the behind while Sergei steps in front of you and thrusts his cock inside your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Mitka puts you on all fours and begins to fuck you from behind, you tell Kolyamba to near you as you want to taste his cock…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_5');
  scene.build();
}

function enterHuntersgroupVa(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupva.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Andrei enters you from the behind, Sergei\'s cock is dangling in front of your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Mitka enters you from the behind, Kolyamba \'s cock is dangling in front of your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$boydesc>> came in your mouth…
  scene.text(`${((s as any).boydesc ?? 0)} came in your mouth…`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_7');
  scene.build();
}

function enterHuntersgroupVs(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvs.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Andrei thrusts inside you, while you suck Sergei off…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Mitka thrusts inside you, while you suck Kolyamba off…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  // TODO-QSP: dynamic text: <<$boydesc>> cums and lies down exhausted next to you…
  scene.text(`${((s as any).boydesc ?? 0)} cums and lies down exhausted next to you…`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupVi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvi.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor lies down on the ground with his cock out, he commands you to straddle him. While Igor enters you… Andrei and Sergei tell you to start sucking them off.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan lies down on the ground with his cock out, he commands you to straddle him. Mitka and Kolyamba tell you to start sucking them off.');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Andrei and Sergei reached climax pretty quickly finishing in your mouth. You tried to swallow it all but fail to hold it inside your mouth, trickling down your chin. Andrei and Sergei walk away satisfied, while you continue riding Igor…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Mitka with Kolyamba reached climax pretty quickly finishing in your mouth. You tried to swallow it all but fail to hold it inside your mouth, trickling down your chin. Mitka with Kolyamba walk away satisfied, while you continue riding Vasyan… ');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupVis(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvis.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor lies down on the ground with his cock out, he commands you to straddle him. While Igor enters you… Andrei and Sergei tell you to start sucking them off.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan lies down on the ground with his cock out, he commands you to straddle him. Mitka and Kolyamba tell you to start sucking them off.');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('A satisfied Andrei steps aside, you continue fucking Igor, and sucking Sergei off… ');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('A satisfied Mitka steps aside, you continue fucking Vasyan, and sucking Kolyamba off… ');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_8');
  scene.build();
}

function enterHuntersgroupVis1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvis1.\'+rand(0, 4)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei positions you on all fours and enters you from the behind while Igor steps in front of you and thrusts his cock inside your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba positions you on all fours and enters you from the behind while Vasyan steps in front of you and thrusts his cock inside your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_1');
  scene.build();
}

function enterHuntersgroupVi1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvi1.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei enters you from the behind, Igor\'s cock is dangling in front of your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba enters you from the behind, Vasyan\'s cock is dangling in front of your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  // TODO-QSP: dynamic text: <<$boydesc>> finish and search for a spot where they could rest in the shade…
  scene.text(`${((s as any).boydesc ?? 0)} finish and search for a spot where they could rest in the shade…`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupVs1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvs1.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei spreads and enters your vagina while you\'re on all fours, Igor grabs you by the head making you suck him off…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba spreads and enters your vagina while you\'re on all fours, Vasyan rabs you by the head making you suck him off…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor cums in your mouth and crashes next you, while Sergei keeps fucking you…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan cums in your mouth and crashes next you, while Kolyamba keeps fucking you…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupVia(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvia.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor lies on the ground, makes you straddle him while he\'s fucking you relentlessly… At the same time you grab Andreis\' and Sergeis\' cocks and start jerking them off.');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan lies on the ground, makes you straddle him while he\'s fucking you relentlessly… At the same time you grab Mitkas\' and Kolambas\' cocks and start jerking them off.');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei cums in your mouth. You\'re not able to swallow the load and the some part of it gets smeared over your face. Sergei steppes aside satisfied, you keep on fucking Igor, and sucking Andrei…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text(' Kolyamba cums in your mouth. You\'re not able to swallow the load and the some part of it gets smeared over your face. Kolyamba steppes aside satisfied, you keep on fucking Vasyan, and sucking Mitka…');
  }
  qspCall(s, 'arousal', 'hj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupVia1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvia1.\'+rand(0, 2)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor spreads your anus, using his spit as lube while he enters you, Andrei makes you suck him off…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan spreads your anus, using his spit as lube while he enters you, Mitka makes you suck him off…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupVi2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvi2.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor starts fucking you in the ass, Andrei puts his cock in your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan starts fucking you in the ass, Mitka puts his cock in your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Andrei cums and walks away, you continue to accustom your anus with Igors\' thrusts…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Mitka cums and walks away, you continue to accustom your anus with Vasyan\'s thrusts…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupVa1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupva1.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor enters your ass. You start sucking Andrei…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan enters your ass. You start sucking Mitka…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('A satisfied Igor stepped aside, you continue on with Andrei…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan walks away satisfied, you continue pleasuring Mitka… ');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_7');
  scene.build();
}

function enterHuntersgroupVaOsHi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvaoshi1.\'+rand(0, 3)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You go down on all fours, Andrei enters you from behind, Sergei and Igor stand in front of you. You begin sucking Sergei\'s cock while you jerk off Igor…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You go down on all fours, Mitka enters you from behind, Kolyamba and Vasyan stand in front of you. You begin sucking Kolyamba\'s cock while you jerk off Vasyan…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'hj', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_6');
  scene.build();
}

function enterHuntersgroupVOsHi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvaoshi1.2.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You go down on all fours, Andrei starts pounding you from behind, Sergei and Igor stand in front of you. You begin sucking Sergei\'s cock while you jerk off Igor…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You go down on all fours, Mitka starts pounding you from behind, Kolyamba and Vasyan stand in front of you. You begin sucking Kolyamba\'s cock while you jerk off Vasyan…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'hj', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_8');
  scene.build();
}

function enterHuntersgroupVaOHi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvaohi.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('The men make you go down on all fours, Andrei starts pounding you from behind, Sergei and Igor stand in front of you. You begin sucking Sergei\'s cock while you jerk off Igor…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('The men make you go down on all fours, Mitka starts pounding you from behind, Kolyamba and Vasyan stand in front of you. You begin sucking Kolyamba\'s cock while you jerk off Vasyan…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei steps away satisfied, Andrei continues fucking while you keep masturbating Igor… ');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba steps away satisfied, Mitka continues fucking while you keep masturbating Vasyan… ');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'hj', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupDPasi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupdpasi1.\'+rand(0, 2)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Andrei pulls you on top of him. Igor steps behind you, goes down on his knees and starts fucking you in the ass. While you are adjusting to getting fucked by two cocks Sergei steps up to you and shoves his cock in your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You straddle Mitka laying on the ground, he starts fucking you. Vasyan steps behind you, goes down on his knees and starts fucking you in the ass. While you are adjusting to getting fucked by two cocks Kolyamba steps up to you and shoves his cock in your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    (s as any).silavag = 2;
    (s as any).dick2 = 16;
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    (s as any).silavag = 0;
    (s as any).dick2 = 14;
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  if (((s as any).boyCsexa ?? 0) === 0) {
    (s as any).boyCsexa = 1;
  }
  (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  if (((s as any).lubonus ?? 0) === 0) {
    (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  }
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_6');
  scene.build();
}

function enterHuntersgroupDPsi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupdpai.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You straddle Andrei laying on the ground, he starts fucking you. Igor comes from behind, goes down on his knees and shoves his cock in your ass. You keep thinking to yourself you just have to relax and that it will soon be over. As you take a sigh of relief Sergei steps in front of you and sticks his cock deep inside your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You straddle Mitka, he starts fucking you. Vasyan comes from behind, goes down on his knees and shoves his cock in your ass. You keep thinking to yourself you just have to relax and that it will soon be over. As you take a sigh of relief Kolyamba steps in front of you and sticks his cock deep inside your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172', 'a');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63', 'a');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173', 'b');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62', 'b');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  if (((s as any).boyCsexa ?? 0) === 0) {
    (s as any).boyCsexa = 1;
  }
  (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  qspCall(s, 'dinsex', 'boy_puts_his_condom', ((s as any).boydesc1 ?? 0));
  qspCall(s, 'dinSex', 'boy_wants_anal', ((s as any).boydesc2 ?? 0), 'lubri');
  qspCall(s, 'dinsex2', 'doublepenetration', 15, 'sub', 'gangbang');
  qspCall(s, 'dinsex', 'sexcum');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'gangbang');
  // TODO-QSP: dynamic text: <<$boydesc>> cums and walks away…
  scene.text(`${((s as any).boydesc ?? 0)} cums and walks away…`);
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_8');
  scene.build();
}

function enterHuntersgroupDPas(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupdpas.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Andrei starts pounding your vagina while Igor enters your anus, you just have to relax and suck Sergei\'s cock…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Mitka starts pounding your vagina while Vasyan enters your anus, you just have to relax and suck Kolyamba\'s cock…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172', 'a');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63', 'a');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173', 'b');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62', 'b');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  if (((s as any).boyCsexa ?? 0) === 0) {
    (s as any).boyCsexa = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_his_condom', ((s as any).boydesc1 ?? 0));
  qspCall(s, 'dinSex', 'boy_wants_anal', ((s as any).boydesc2 ?? 0), 'lubri');
  qspCall(s, 'dinsex2', 'doublepenetration', 10, 'sub', 'gangbang');
  // TODO-QSP: dynamic text: After a while <<$boydesc2>> grunts and you feel your ass filling up with sprem. ...
  scene.text(`After a while ${((s as any).boydesc2 ?? 0)} grunts and you feel your ass filling up with sprem. He finishes and walks away.`);
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (Math.floor(Math.random() * 2) + 2);
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_5');
  scene.build();
}

function enterHuntersgroupDPai(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupdpai.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You straddle Andrei laying on the ground, he starts fucking you. Igor steps behind you, goes down on his knees and starts fucking you in the ass. While you are adjusting to getting fucked by two cocks Sergei steps up to you and shoves his dick in your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You straddle Mitka laying on the ground, he starts fucking you. Vasyan steps behind you, goes down on his knees and starts fucking you in the ass. While you are adjusting to getting fucked by two cocks Kolyamba steps up to you and shoves his cock in your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63', 'a');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    (s as any).silavag = 2;
    (s as any).dick2 = 16;
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62', 'b');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  if (((s as any).boyCsexa ?? 0) === 0) {
    (s as any).boyCsexa = 1;
  }
  (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  qspCall(s, 'dinsex', 'boy_puts_his_condom', ((s as any).boydesc1 ?? 0));
  qspCall(s, 'dinSex', 'boy_wants_anal', ((s as any).boydesc2 ?? 0), 'lubri');
  qspCall(s, 'dinsex2', 'doublepenetration', 15, 'sub', 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    // TODO-QSP: dynamic text: Satisfied <<$boydesc>> steps away while Andrei and Igor continue to fuck you rel...
    scene.text(`Satisfied ${((s as any).boydesc ?? 0)} steps away while Andrei and Igor continue to fuck you relentlessly… `);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    // TODO-QSP: dynamic text: Satisfied <<$boydesc>> steps away while Mitka and Vasyan continue to fuck you re...
    scene.text(`Satisfied ${((s as any).boydesc ?? 0)} steps away while Mitka and Vasyan continue to fuck you relentlessly… `);
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupVsOaHi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvsoahi1.\'+rand(0, 1)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei positions you on your side and enters from behind. Andrei buries his cock in your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba positions you on your side and enters from behind. Mitka buries his cock in your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor grabs one of your hands and makes you jerk him off…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan grabs one of your hands and makes you jerk him off…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_6');
  scene.build();
}

function enterHuntersgroupVsOHi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvsoahi1.\'+rand(0, 1)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei puts you on your side and starts fucking you. Andrei shoves his cock in your mouth. You grab Igor\'s member and begin to masturbate him…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba puts you on your side and starts fucking you. Mitka shoves his cock in your mouth. You grab Vasyan\'s member and begin to masturbate him…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('A satisfied Andrei stepes aside, you continue pleasuring Sergei and Igor… ');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('A satisfied Mitka steps aside, you continue pleasuring Kolyamba and Vasyan… ');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'hj', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_8');
  scene.build();
}

function enterHuntersgroupVsOi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvsoi1.\'+rand(0, 2)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei positions you on the side and enters you from behind. Igor grabs you by the head and thrusts his cock inside your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba positions you on the side and enters you from behind. Vasyan grabs you by the head and thrusts his cock inside your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_8');
  scene.build();
}

function enterHuntersgroupVOi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvoi.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei fucks you sideways while Igor shoves his cock deep inside your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba fucks you sideways while Vasyan shoves his cock deep inside your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupVsO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvso.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei keeps fucking you sideways, Igor buries his cock in your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba keeps fucking you sideways, Vasyan buries his cock in your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor cums, feeling satisfied he steps aside, Sergei keeps on fucking you… ');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan cums, feeling satisfied he walks away, Kolyamba keeps on fucking you… ');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupVOaHi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvsoahi1.\'+rand(0, 1)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei positions you on your side and enters from behind. Andrei buries his cock in your mouth. Igor grabs one of your hands and makes you jerk him off…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba positions you on your side and enters from behind. Mitka buries his cock in your mouth. Vasyan grabs one of your hands and makes you jerk him off…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'hj', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupViOa(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvioa1.\'+rand(0, 1)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor fucks you sideways while Andrei shoves his cock deep inside your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan fucks you sideways while Mitka shoves his cock deep inside your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupViO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvio.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor positions you sideways and enters you from behind. Andrei buries his cock in your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan positions you sideways and enters you from behind. Mitka buries his cock in your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: A satisfied <<$boydesc>> steps aside, the other guy keeps going on…
  scene.text(`A satisfied ${((s as any).boydesc ?? 0)} steps aside, the other guy keeps going on…`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupVaOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvaos1.\'+rand(0, 3)+\'.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Laying on your stomach, Andrei grabs hold of his cock and leads it inside you from behind. You begin pleasuring Sergei with your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Laying on your stomach, Mitka grabs hold of his cock and leads it inside you from behind. You begin pleasuring Kolyamba with your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_5');
  scene.build();
}

function enterHuntersgroupVOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvos.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Andrei makes you lay down on your stomach, he steps behind you, spreads your pussy lips and starts thrusting. Sergei shoves his cock down your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Mitka makes you lay down on your stomach, he steps behind you, spreads your pussy lips and starts thrusting. Kolyamba shoves his cock down your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupVaO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvao.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei enjoying the head he\'s getting, grabs you by the head and forces you to go deeper. Engrossed by your cock sucking skills Andrei starts jerking off…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Mitka enjoying the head he\'s getting, grabs you by the head and forces you to go deeper. Engrossed by your cock sucking skills Kolyamba starts jerking off…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You feel Sergei\'s cock throbbing inside your mouth, he starts grunting loudly and releases his spunk inside your mouth. Andrei now alone and warmed up tells you to…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You feel Mitka\'s cock throbbing inside your mouth, he starts grunting loudly and releases his spunk inside your mouth. Kolyamba now alone and warmed up tells you to…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_7');
  scene.build();
}

function enterHuntersgroupAsOa(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupasoa.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Sergei positions you on all fours, takes out his cock, spits on his hand, lubes his cock and enters your anus. Andrei kneels in front of you, grabs you by the neck and tells you to start sucking his penis head…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Kolyamba positions you on all fours, takes out his cock, spits on his hand, lubes his cock and enters your anus. Mitka kneels in front of you, grabs you by the neck and tells you to start sucking his penis head…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsexa ?? 0) === 0) {
    (s as any).boyBsexa = 1;
  }
  (s as any).dirty_dickB = ((s as any).dirty_dickB ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_5');
  scene.build();
}

function enterHuntersgroupAsO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupaso.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Positioned on all fours Sergei takes out his cock and began pounding you from behind, Andrei whips out his cock and shoves it down your throat…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Positioned on all fours Kolambatakes out his cock and began pounding you from behind, Mitka whips out his cock and shoves it down your throat…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsexa ?? 0) === 0) {
    (s as any).boyBsexa = 1;
  }
  (s as any).dirty_dickB = ((s as any).dirty_dickB ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('A satisfied Andrei cums and moves away while Sergei continues to pound you wondering if he should…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('A satisfied Mitka cums and moves away while Kolyamba continues to pound you wondering if he should…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupAOa(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupaoa.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('You go down on all fours, Sergei grabs his cock and leads it inside you. Andrei kneels down with his swollen member right by your mouth…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('You go down on all fours, Kolyamba grabs his cock and leads it inside you. Mitka kneels down with his swollen member right by your mouth…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsexa ?? 0) === 0) {
    (s as any).boyBsexa = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'gangbang', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_7');
  scene.build();
}

function enterHuntersgroupDPis(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupdpis.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Igor, laying on the ground, leads you on top of him, entering your vagina. Sergei immediately crouches behind you and enters your anus…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Vasyan, laying on the ground, leads you on top of him, entering your vagina. Kolyamba immediately crouches behind you and enters your anus…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    (s as any).silavag = 1;
    (s as any).dick2 = 18;
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    (s as any).silavag = 0;
    (s as any).dick2 = 15;
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  if (((s as any).boyBsexa ?? 0) === 0) {
    (s as any).boyBsexa = 1;
  }
  (s as any).dirty_dickB = ((s as any).dirty_dickB ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_8');
  scene.build();
}

function enterHuntersgroupDPia(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupdpia.jpg');
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    scene.text('Feeling ecstatic you tell the men you want to feel them both inside you simultaneously. Igor lies down on the ground, leading you on top of him while Andrei starts pounding your second hole…');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    scene.text('Feeling ecstatic you tell the men you want to feel them both inside you simultaneously. Vasyan lies down on the ground, leading you on top of him while Mitka starts pounding your second hole…');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    (s as any).silavag = 0;
    (s as any).dick2 = 20;
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    (s as any).silavag = 0;
    (s as any).dick2 = 16;
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  if (((s as any).boyAsexa ?? 0) === 0) {
    (s as any).boyAsexa = 1;
  }
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  qspCall(s, 'hunters', 'rng_4');
  scene.build();
}

function enterHuntersgroupOis(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pose = 1;
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupo1.\'+rand(0, 1)+\'.jpg');
  scene.text('You\'re on your knees masturbating their throbbing cocks right in front of your face. You see them grimace, they\'re edging and are ready to cover your pretty little face with spunk. The men cum all over your face, satisfied they leave you by the bedspread…');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupOia(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pose = 1;
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupo1.\'+rand(0, 1)+\'.jpg');
  scene.text('You\'re kneeling down eagerly awaiting the men to finish, hoping they\'ll cover your face with their sprem. The men cum simultaneously, grunting loudly, shooting their spunk all over your face. They leave you behind sitting on a blanket craving for more…');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupOsa(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pose = 1;
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
  } else {
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupo1.\'+rand(0, 1)+\'.jpg');
  scene.text('The men order you on your knees, they\'ve had enough and want to finish. You can see on their faces that they\'re at the edge and you\'ll soon feel their warm sperm all over the face. The sperm flowes down your chin, dripping down on your chest. The men leave you behind on a blanket covered in their spunk.');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupAa(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsexa ?? 0) === 0) {
    (s as any).boyAsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupa1.\'+rand(0, 4)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> tells you to go ass up face down. Without any hesitation he starts ...
  scene.text(`${((s as any).boydesc ?? 0)} tells you to go ass up face down. Without any hesitation he starts pounding your anus relentlessly…`);
  // TODO-QSP: dynamic text: You hear <<$boydesc>> grunting from behind, his cock getting stiffer and stiffer...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} grunting from behind, his cock getting stiffer and stiffer. He should be reaching his limit soon you think to yourself. All of a sudden you hear a loud moan and you feel something warm inside your ass…`);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_7');
  scene.build();
}

function enterHuntersgroupAaEnd1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsexa ?? 0) === 0) {
    (s as any).boyAsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupaend1.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> starts ravaging your anus, determinedly not slowing down…
  scene.text(`${((s as any).boydesc ?? 0)} starts ravaging your anus, determinedly not slowing down…`);
  // TODO-QSP: dynamic text: You hear <<$boydesc>> grunting from behind, his cock getting stiffer and stiffer...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} grunting from behind, his cock getting stiffer and stiffer. He should be reaching his limit soon you think to yourself. All of a sudden you hear a loud moan and you feel something warm inside your ass…`);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupAaEnd2(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsexa ?? 0) === 0) {
    (s as any).boyAsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupaaend2.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> whispers that he'll enjoy this and starts pummeling your anus. You ...
  scene.text(`${((s as any).boydesc ?? 0)} whispers that he'll enjoy this and starts pummeling your anus. You let out a whimper, clearly enjoying yourself…`);
  // TODO-QSP: dynamic text: You hear <<$boydesc>> grunting from behind, his cock getting stiffer and stiffer...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} grunting from behind, his cock getting stiffer and stiffer. He should be reaching his limit soon you think to yourself. All of a sudden you hear a loud moan and you feel something warm inside your ass…`);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupAs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsexa ?? 0) === 0) {
    (s as any).boyBsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupa1.\'+rand(0, 4)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> positions you on all fours and begins slowly fucking you in the anu...
  scene.text(`${((s as any).boydesc ?? 0)} positions you on all fours and begins slowly fucking you in the anus…`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupAsEnd1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsexa ?? 0) === 0) {
    (s as any).boyBsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupaend1.jpg');
  // TODO-QSP: dynamic text: Without any lube <<$boydesc>> shoves his cock in your anus making you scream out...
  scene.text(`Without any lube ${((s as any).boydesc ?? 0)} shoves his cock in your anus making you scream out with pain…`);
  // TODO-QSP: dynamic text: You hear <<$boydesc>> grunting from behind, his cock getting stiffer and stiffer...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} grunting from behind, his cock getting stiffer and stiffer. It should be over soon you think to yourself. All of a sudden you hear a loud moan and you feel something warm inside your ass…`);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupAsEnd2(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsexa ?? 0) === 0) {
    (s as any).boyBsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupaend2.jpg');
  // TODO-QSP: dynamic text: While on all fours <<$boydesc>> comes in from behind and starts fucking you…
  scene.text(`While on all fours ${((s as any).boydesc ?? 0)} comes in from behind and starts fucking you…`);
  // TODO-QSP: dynamic text: You hear <<$boydesc>> grunting from behind, his cock getting stiffer and stiffer...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} grunting from behind, his cock getting stiffer and stiffer. He should be reaching his limit soon you think to yourself. All of a sudden you hear a loud moan and you feel something warm all over your back…`);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupAi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsexa ?? 0) === 0) {
    (s as any).boyCsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupa1.\'+rand(0, 4)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> grabs his cock and crouches down, guiding his cock inside your anus...
  scene.text(`${((s as any).boydesc ?? 0)} grabs his cock and crouches down, guiding his cock inside your anus…`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupAiEnd1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsexa ?? 0) === 0) {
    (s as any).boyCsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupaend1.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> orders you on all fours, he steps behind you loudly proclaiming you...
  scene.text(`${((s as any).boydesc ?? 0)} orders you on all fours, he steps behind you loudly proclaiming you're going to get a real pounding now. With a sly look he guides his unlubed penis inside your anus, telling you he wants to stretch it out…`);
  // TODO-QSP: dynamic text: You hear <<$boydesc>> grunting from behind, his cock getting stiffer and stiffer...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} grunting from behind, his cock getting stiffer and stiffer. It should be over soon you think to yourself. All of a sudden you hear a loud moan and you feel something warm inside your ass…`);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupAiEnd2(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsexa ?? 0) === 0) {
    (s as any).boyCsexa = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupaend2.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> starts fucking you in the ass, both of you are enjoying yourselves…
  scene.text(`${((s as any).boydesc ?? 0)} starts fucking you in the ass, both of you are enjoying yourselves…`);
  // TODO-QSP: dynamic text: You hear <<$boydesc>> grunting from behind, his cock getting stiffer and stiffer...
  scene.text(`You hear ${((s as any).boydesc ?? 0)} grunting from behind, his cock getting stiffer and stiffer. He should be reaching his limit soon you think to yourself. All of a sudden you hear a loud moan and you feel something warm all over your back…`);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupVa2(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupv0.\'+rand(0, 1)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls you on top of him, spreading one of your ass cheeks while you...
  scene.text(`${((s as any).boydesc ?? 0)} pulls you on top of him, spreading one of your ass cheeks while you grab hold of the other and spread it so he can enter you more easily…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  qspCall(s, 'hunters', 'rng_7');
  scene.build();
}

function enterHuntersgroupVa2end(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvend.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls you on top of him, spreads your pussy lips and enters you…
  scene.text(`${((s as any).boydesc ?? 0)} pulls you on top of him, spreads your pussy lips and enters you…`);
  // TODO-QSP: dynamic text: After a while, you see that <<$boydesc>> is at the edge and will be cumming soon...
  scene.text(`After a while, you see that ${((s as any).boydesc ?? 0)} is at the edge and will be cumming soon. You feel his cock throbbing and him cumming…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupVs2(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupv0.\'+rand(0, 1)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls you on top of him, spreading one of your ass cheeks while you...
  scene.text(`${((s as any).boydesc ?? 0)} pulls you on top of him, spreading one of your ass cheeks while you grab hold of the other and spread it so he can enter you more easily…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_2');
  scene.build();
}

function enterHuntersgroupVs2end(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).boyBsex ?? 0) === 0) {
    (s as any).boyBsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvend.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls you on top of him, spreads your pussy lips so he can more eas...
  scene.text(`${((s as any).boydesc ?? 0)} pulls you on top of him, spreads your pussy lips so he can more easily enter you…`);
  // TODO-QSP: dynamic text: After a while, you see that <<$boydesc>> is at the edge and will be cumming soon...
  scene.text(`After a while, you see that ${((s as any).boydesc ?? 0)} is at the edge and will be cumming soon. You feel his cock throbbing and him soon thereafter cumming…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupVi3(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupv0.\'+rand(0, 1)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls you on top of him, spreading one of your ass cheeks while you...
  scene.text(`${((s as any).boydesc ?? 0)} pulls you on top of him, spreading one of your ass cheeks while you grab hold of the other and spread it so he can enter you more easily…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 2;
  qspCall(s, 'hunters', 'rng_3');
  scene.build();
}

function enterHuntersgroupVi3end(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pose = 1;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).boyCsex ?? 0) === 0) {
    (s as any).boyCsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupvend.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls you on top of him and starts fucking you relentlessly…
  scene.text(`${((s as any).boydesc ?? 0)} pulls you on top of him and starts fucking you relentlessly…`);
  // TODO-QSP: dynamic text: After a while, you see that <<$boydesc>> is at the edge and will be cumming soon...
  scene.text(`After a while, you see that ${((s as any).boydesc ?? 0)} is at the edge and will be cumming soon. You feel his cock throbbing and him cumming…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupOsend(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  }
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupoend1.\'+rand(0, 2)+\'.jpg');
  // TODO-QSP: dynamic text: Not wanting to get you pregnant, <<$boydesc>> starts jerking off his cock in fro...
  scene.text(`Not wanting to get you pregnant, ${((s as any).boydesc ?? 0)} starts jerking off his cock in front of you…`);
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  // TODO-QSP: dynamic text: You watch as <<$boydesc>> is trying hard to finish. All of a sudden he screams o...
  scene.text(`You watch as ${((s as any).boydesc ?? 0)} is trying hard to finish. All of a sudden he screams out that he's edging and you should get ready to get covered in this spunk. Hot sperm hits your face, most of it hitting your face and chin. The sperm drips down on your chest…`);
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupOaend(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A63');
  }
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  }
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupoend1.\'+rand(0, 2)+\'.jpg');
  // TODO-QSP: dynamic text: Making you kneel down, <<$boydesc>> starts masturbating in front of your face…
  scene.text(`Making you kneel down, ${((s as any).boydesc ?? 0)} starts masturbating in front of your face…`);
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  // TODO-QSP: dynamic text: <<$boydesc>> tells you he's edging and that you should get ready. He lets out a ...
  scene.text(`${((s as any).boydesc ?? 0)} tells you he's edging and that you should get ready. He lets out a grunt and a hot jet of sperm hits you in the face. It runs down your chin, dripping down on your chest…`);
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHuntersgroupOiend(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1  ||  ((s as any).hunterVars ?? 0)?.['forest_sex'] === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).forest_gopsex ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  }
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupoend1.\'+rand(0, 2)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> tells you that he wants you kneeling down, cause he wants to cover ...
  scene.text(`${((s as any).boydesc ?? 0)} tells you that he wants you kneeling down, cause he wants to cover your face with his spunk…`);
  qspCall(s, 'oral', 'start', 5, 'gangbang');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "hunters" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  // TODO-QSP: dynamic text: You noticed <<$boydesc>>'s facial expression getting tense, nearing the edge. A ...
  scene.text(`You noticed ${((s as any).boydesc ?? 0)}'s facial expression getting tense, nearing the edge. A stream of hot sperm hits you in the face, then another stream and it keeps on going not letting up. It runs down your chin, dripping down on your chest…`);
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['sexnude'] = 0;
    (s as any).forest_gopsex = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  scene.build();
}

function enterHunterslutSTART(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).boyCsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).boyCsexa = 0;
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).dirty_dickC = 0;
  if (Math.floor(Math.random() * 2) + 1 === 1) {
    scene.img('images/locations/gadukino/sex/hunter/hanterslutstart1.jpg');
    scene.text('Crouching, you took the cock in your hand and brought it towards the mouth. You began kissing the penis head…');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
  } else {
    scene.img('images/locations/gadukino/sex/hunter/hanterslutstart2.jpg');
    scene.text('You crouched down, gripped the cock, and brought it toward your lips and began licking the penis head…');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
  }
  scene.actions([
    { label: 'Start sucking', goto: ['hunters', 'hunterslutORAL'] },
  ]);
  scene.build();
}

function enterHunterslutEND(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hanterslutend1.jpg');
  if (((s as any).protect ?? 0) === 1) {
    // TODO-QSP: dynamic text: After disposing of the used condom, <<$boydesc>> puts you in front of him. Kneel...
    scene.text(`After disposing of the used condom, ${((s as any).boydesc ?? 0)} puts you in front of him. Kneeling down, you licked the head of the cock while masturbating him… `);
  }
  if (((s as any).protect ?? 0) === 0) {
    // TODO-QSP: dynamic text: You went down on your knees. Took the cock in hand and began masturbating <<$boy...
    scene.text(`You went down on your knees. Took the cock in hand and began masturbating ${((s as any).boydesc ?? 0)}, licking the penis head at the same time…`);
  }
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Jerk him off', handler: (st: GameState) => {
    (s as any).protect = 0;
    (s as any).huntsex = 0;
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterslutend2.\'+rand(1, 2)+\'.jpg');
    qspCall(s, 'dinsex', 'dinrandswallow');
    // TODO-QSP: dynamic text: The quantity of sperm was so overwhelming that you were not able to swallow all ...
    scene.text(`The quantity of sperm was so overwhelming that you were not able to swallow all of it and some of it runs down the chin, dripping down, staining your chest and stomach. ${((s as any).boydesc ?? 0)} used his pants to clean the cock and went about his business, leaving you alone to freshen up.`);
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    if (((s as any).slutgosex ?? 0) === 1) {
      // TODO-QSP: act 'Go to the river': slutgosex = 0
      scene.actions([{ label: 'Continue', goto: ['gad_backwater', ''] }]);
    }
    if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 1) {
      scene.actions([
        { label: 'Go to the hut', handler: (st: GameState) => {
    (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
    if (((s as any).forest_gopsex ?? 0) === 1) {
      // TODO-QSP: act 'Go to forest': forest_gopsex = 0
      scene.actions([{ label: 'Continue', goto: ['gad_forest', 'forest_edge'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterHunterslutORAL(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/hunter/hanterslutoral1.\'+rand(1, 2)+\'.jpg');
  scene.text('You\'re hunching down, sucking the tip of his cock…');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 10) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) <= 7) {
    scene.text('Interrupting you, the guy says…');
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) > 7) {
    // TODO-QSP: dynamic text: All of a sudden <<$boydesc>> begins moving faster, making sounds, you quickly re...
    scene.text(`All of a sudden ${((s as any).boydesc ?? 0)} begins moving faster, making sounds, you quickly realize he's edging and would be cumming soon.`);
  }
  qspCall(s, 'hunters', 'rng_9');
  scene.build();
}

function enterHunterslutCOW(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hanterslutcow1.\'+rand(1, 4)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> lies down on the ground, pulling you towards him. You straddle him ...
  scene.text(`${((s as any).boydesc ?? 0)} lies down on the ground, pulling you towards him. You straddle him and he leads his cock inside you…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) <= 7) {
    // TODO-QSP: dynamic text: You can see that <<$boydesc>> enjoys fucking you in this position…
    scene.text(`You can see that ${((s as any).boydesc ?? 0)} enjoys fucking you in this position…`);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) > 7) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> began moving faster, grunting, you quickly realize he was ...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} began moving faster, grunting, you quickly realize he was edging and would be cumming soon.`);
  }
  qspCall(s, 'hunters', 'rng_9');
  scene.build();
}

function enterHunterslutHANDS(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersluthands1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> lifts you up by the legs and stars relentlessly fucking you…
  scene.text(`${((s as any).boydesc ?? 0)} lifts you up by the legs and stars relentlessly fucking you…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) <= 7) {
    // TODO-QSP: dynamic text: <<$boydesc>> lets out some grunts, he really enjoys fucking you in this position...
    scene.text(`${((s as any).boydesc ?? 0)} lets out some grunts, he really enjoys fucking you in this position…`);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) > 7) {
    // TODO-QSP: dynamic text: <<$boydesc>> starts breathing heavily and grunting loudly, you realize he's edgi...
    scene.text(`${((s as any).boydesc ?? 0)} starts breathing heavily and grunting loudly, you realize he's edging and is going to finish soon.`);
  }
  qspCall(s, 'hunters', 'rng_9');
  scene.build();
}

function enterHunterslutTREE(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersluttree1.\'+rand(1, 3)+\'.jpg');
  // TODO-QSP: dynamic text: You lean on the tree for support while <<$boydesc>> enters you from behind…
  scene.text(`You lean on the tree for support while ${((s as any).boydesc ?? 0)} enters you from behind…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) <= 7) {
    // TODO-QSP: dynamic text: <<$boydesc>> tells you that he enjoys fucking you in this position…
    scene.text(`${((s as any).boydesc ?? 0)} tells you that he enjoys fucking you in this position…`);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) > 7) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> began moving faster, grunting, you quickly realize he was ...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} began moving faster, grunting, you quickly realize he was edging and would be cumming soon.`);
  }
  qspCall(s, 'hunters', 'rng_9');
  scene.build();
}

function enterHunterslutTREELEG(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hantersluttreeleg1.\'+rand(1, 4)+\'.jpg');
  // TODO-QSP: dynamic text: You turn your back to <<$boydesc>> and lean on the tree for balance. <<$boydesc>...
  scene.text(`You turn your back to ${((s as any).boydesc ?? 0)} and lean on the tree for balance. ${((s as any).boydesc ?? 0)} raises your thigh from behind, entering you more easily…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) <= 7) {
    // TODO-QSP: dynamic text: <<$boydesc>> tells you that he could fuck you forever in this position…
    scene.text(`${((s as any).boydesc ?? 0)} tells you that he could fuck you forever in this position…`);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) > 7) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> starts breathing heavily and grunting loudly, you realize ...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} starts breathing heavily and grunting loudly, you realize he's edging and is going to finish soon.`);
  }
  qspCall(s, 'hunters', 'rng_9');
  scene.build();
}

function enterHunterslutLEG1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hanterslutleg1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You turn your back to <<$boydesc>> and hugged him around the neck. <<$boydesc>> ...
  scene.text(`You turn your back to ${((s as any).boydesc ?? 0)} and hugged him around the neck. ${((s as any).boydesc ?? 0)} raised your thigh so he could enter you more easily…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) <= 7) {
    // TODO-QSP: dynamic text: <<$boydesc>> whispers in your ear that he really enjoys fucking you in this posi...
    scene.text(`${((s as any).boydesc ?? 0)} whispers in your ear that he really enjoys fucking you in this position…`);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) > 7) {
    // TODO-QSP: dynamic text: All of a sudden <<$boydesc>> begins moving faster, making sounds, you quickly re...
    scene.text(`All of a sudden ${((s as any).boydesc ?? 0)} begins moving faster, making sounds, you quickly realize he's edging and would be cumming soon.`);
  }
  qspCall(s, 'hunters', 'rng_9');
  scene.build();
}

function enterHunterslutLEG2(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  if (((s as any).boyAsex ?? 0) === 0) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/hunter/hanterslutleg2.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You turned towards <<$boydesc>> and hug him by the neck. <<$boydesc>> raised you...
  scene.text(`You turned towards ${((s as any).boydesc ?? 0)} and hug him by the neck. ${((s as any).boydesc ?? 0)} raised your thigh, making it easier to enter you…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) <= 7) {
    // TODO-QSP: dynamic text: <<$boydesc>> tells you that he could fuck you forever in this position…
    scene.text(`${((s as any).boydesc ?? 0)} tells you that he could fuck you forever in this position…`);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) > 7) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> began moving faster, grunting, you quickly realize he was ...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} began moving faster, grunting, you quickly realize he was edging and would be cumming soon.`);
  }
  qspCall(s, 'hunters', 'rng_9');
  scene.build();
}

function enterHuntersTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 35) + 1;
  if (((s as any).temp ?? 0) === 1) {
    scene.text('"What\'s the difference between a dog and a fox?"');
    scene.text('"Two shots of vodka!"');
  } else {
    scene.text('"The Dachshund is a hunting dog. They??????re pretty funny looking, only a half size of a regular dog."');
    if (((s as any).temp ?? 0) === 3) {
      scene.text('"We once found a perfect spot while hunting. We got settled and checked what we brought with us. There were rifles, ammo and pickles. But we forgot the vodka. I had to go back all the way…"');
    } else {
      scene.text('The men had gathered for a hunt, all but one were joyful. He had fallen in trouble with his wife. She had said: "I know what you do when you go hunt, you only get drunk as pigs and then crawl home…" In the middle of the argument the man had enough and told his wife that she could join them. When the rest of the men noticed that a woman was supposed to join them they got quite irritated.');
      scene.text('They walked into the forest, found a suitable clearing, and the man gave his wife a rifle and said:');
      scene.text('"You can sit here hidden in the bushes, and I will drive the moose towards you. I will drive it straight at you and you better do not miss, or else all the hard work will go waste…"');
      scene.text('The man leaves, and joins the other men near a hut and they start to drink. Time passed by and all of a sudden the man woke up after sundown… The man grabbed his head, thinking that he would get a scolding by his wife.');
      scene.text('He comes near the clearing and sees an odd picture: in the middle of the clearing there lies a carcass and the wife is jumping with joy around it. Standing next to her is an upset man, rubbing his bald head.');
      scene.text('"Yes dear, look at the elk you killed. We just need to remove the saddle…"');
      if (((s as any).temp ?? 0) === 5) {
        scene.text('This one happened to my dad…');
        scene.text('He was crossing a stubble field one morning before dawn and heard something moving toward him in the darkness. He froze and shone his flashlight in the direction of the sounds and discovered a skunk was making his way down a row of corn stubble and was headed toward him on a direct collision course.');
        scene.text('Not wanting to spook the little fella into spraying him, my dad slowly retreated toward the fence line, walking backwards and keeping the light trained on the skunk.');
        scene.text('Suddenly, he felt something brush across his shoulders and back and quickly swung the flashlight around and shone it directly into the face of a scarecrow!');
      } else {
        scene.text('There once was politician that was going hunting. He drove out in his fancy jeep, dressed in camouflage and had a super fancy rifle with optical sight night vision… He walks into the forest, and met a man in sandals, a simple hat and a torn jacket, he looked like a typical village guy.');
        scene.text('Man: "Where are you heading?"');
        scene.text('Politician: "I\'m gonna shoot a bear!"');
        scene.text('Man: "Yes, you seem well prepared…"');
        scene.text('Politician: "Yes, you see! This rifle can shoot down an elephant…"');
        scene.text('He continues on walking into the woods.');
        scene.text('Sighing deeply the man says: "Too bad you\'re going deeper into the forest… There haven\'t been any bears here for quite a while now…"');
        if (((s as any).temp ?? 0) === 7) {
          scene.text('After a shot a hunter asks his partner:');
          scene.text('"Can you take a look what beast I\'ve put down?"');
          scene.text('He comes back after a while:');
          scene.text('"Judging by the beasts passport, his last name was Ivanov."');
        } else {
          scene.text('There are two types of trips you can get from the mushrooms in the forest.');
          scene.text('The first can lead you to an extremely thoughtful introspection.');
          scene.text('While the second can make you feel paranoid as if you were being chased by a guy with a chainsaw in a maze.');
          if (((s as any).temp ?? 0) === 9) {
            scene.text('The three hunters are talking:');
            scene.text('"I once killed a whale with one shot."');
            scene.text('"I strangled a bear with my bare hands."');
            scene.text('"Have you ever heard of the Dead Sea?"');
            scene.text('"Who hasn\'t heard of it?"');
            scene.text('"So I…"');
          } else {
            scene.text('"As I\'m getting out of the house I see something resembling an eagle standing on the telephone pole."');
            scene.text('"I run into the house and get my rifle, aim. Bang, Bang, Bang."');
            scene.text('"I hit the eagle and it falls down to the ground. As I look at the telephone pole I see pole spurs on both sides…"');
            if (((s as any).temp ?? 0) === 11) {
              scene.text('If nothing comes by while you\'re hunting, that means the you\'ve become one with the forest.');
            } else {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
              scene.text('You hear the hunter discuss their dogs:');
              scene.text('First one:');
              scene.text('"I once went hunting. I brought my rifle but forgot the cartridges. I let the dog sniff the rifle and she retrieved the ammo!"');
              scene.text('Second one:');
              scene.text('"I once went hunting. I brought the bullets with me but forgot the rifle. I let the dog sniff the ammo and she retrieved the rifle!"');
              scene.text('Third one:');
              scene.text('I went to swim with my wife but she forgot the swimsuit. I let the dog sniff my wife between her legs and she retrieved the neighbor by his balls!!!"');
              if (((s as any).temp ?? 0) === 13) {
                scene.text('A man returned happy from hunting. The wife asks him:');
                scene.text('"Did you get something good?"');
                scene.text('"I sure did! I shot many hedgehogs!"');
                scene.text('"Are you out of your fucking mind? Why the fuck did you do that!"');
                scene.text('"Well, my dear. I was thinking you could wear it as a collar or your mother could use it as an insole."');
              } else {
                scene.text('Met two birds. One of them asks:');
                scene.text('"What are you hunting?"');
                scene.text('"Are you even a hunter?"');
                scene.text('"Oh, I\'m a hunter."');
                scene.text('"So what are you hunting?!"');
                scene.text('"Nothing special… I was just cleaning my rifle."');
                if (((s as any).temp ?? 0) === 15) {
                  scene.text('The man returns home being out hunting for a month. A friend asks him:');
                  scene.text('"Well, I guess you\'ve made quite a fortune. You\'ve been away for a month. Your wife will be able buy lots of things!"');
                  scene.text('"So much did you earn?"');
                  scene.text('"Nothing, I drank it all up."');
                } else {
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
                  scene.text('A hunter was chasing a bear. The bear was though and healthy and ran quickly, leaving the hunter behind. While looking backwards the bear got stuck between two trees. A rabbit runs by and asks the bear:');
                  scene.text('"How did you get stuck there?"');
                  scene.text('"Well…" the bear began its story but the rabbit jumps on the bear and starts fucking it in the ass. The bear got upset but could not get out.');
                  scene.text('Then he saw a fox running by and called it over:');
                  scene.text('"Hey fox, come over here and help me out!"');
                  scene.text('The fox thought about it and like the rabbit it started fucking the bear. The bear was now getting desperate, when he saw the wolf. The wolf comes over and asks:');
                  scene.text('"What happened to you?"');
                  scene.text('The bear answers: "Well, wolf, you might as well fuck me over first then I\'ll tell you!!"');
                  if (((s as any).temp ?? 0) === 17) {
                    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
                    scene.text('I went out with some men hunting and as usual we got drunk. One of the men grabs his rifle and goes to hunt. All of a sudden a bear appears, and he starts climbing a tree. He shouts:');
                    scene.text('"Guys, save me! Kill the bear."');
                    scene.text('Since we\'re all drunk, we take aim, shoot and the shots fly by the bear. The bear continues on, not caring about the shots. Guy yells again:');
                    scene.text('"Come on guys! Kill this fucking bear."');
                    scene.text('We take aim again, shoot and miss. The man now desperate shouts:');
                    scene.text('"What are you bastards doing! Are you trying to kill me or the bear!"');
                  } else {
                    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
                    scene.text('"Every year we do our annual cleaning of the hut, throwing away old canned food and stuff. Well, one guy threw a family size can of baked beans in the burn barrel instead of in the trash can.');
                    scene.text('"That night, as we were all telling stories and drinking around the burn barrel, the can exploded! Hot baked beans covered everything within a 10 meter radius, including us.');
                    if (((s as any).temp ?? 0) === 19) {
                      scene.text('One the hunters tells the other: "I once had a woodcock try to fly over my head so I whacked it with my shotgun barrel, killing it."');
                    } else {
                      scene.text('The hunters are all huddled up and one of the hunters puts the rifle on his knees, pointing it at his neighbor.');
                      scene.text('"Sorry I\'ll be more careful next time so I don\'t accidentally gun you down!"');
                      scene.text('"Just finish me off already…" the other hunter replies.');
                      if (((s as any).temp ?? 0) === 21) {
                        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
                        scene.text('"So I got lost in the forest one night and was trying to get back to the hut. I stumbled around in the darkness for hours until I hear someone yelling "MARK! MARK! MARK!" So I say to myself "This guy knows where he is so go find him."');
                        scene.text('"I walk all the way there in the dark and when I got there all I found was an ol\' hair lipped dog…"');
                      } else {
                        scene.text('"You know, when I went on a business trip last time I hid a surprise in the closet for my special one when I return home. So imagine, I came home, immediately going to the closet and giving the gift."');
                        scene.text('"To whom? Your wife?"');
                        scene.text('"No, a bear!"');
                        if (((s as any).temp ?? 0) === 23) {
                          scene.text('Two hunters meet each other, one of them starts bragging.');
                          scene.text('"I have a dog, that can locate a wounded duck and bring it to me."');
                          scene.text('The second hunter responds:');
                          scene.text('"My dog is way cooler. If I see a flying flock of ducks I put the dog in my man-made catapult. Aim it in the direction of the pack, fire off, the dog flies towards them and brings me some ducks back…"');
                          scene.text('In the meadow there is a grazing cow with its calf. The calf raises its head and sees the dog flying and says:');
                          scene.text('"Look at that dog chasing those flying ducks."');
                          scene.text('The cow responds: "I told you we\'re better of eating grass."');
                        } else {
                          scene.text('An avid hunter stands in the doorway to the tavern when the local doctor opens the door:');
                          scene.text('"Doctor, doctor, did you know that I got shot today?"');
                          scene.text('"I know, I already pulled the bullet out of you."');
                          if (((s as any).temp ?? 0) === 25) {
                            scene.text('"Yesterday I shot two geese…"');
                            scene.text('"Were they wild?"');
                            scene.text('"They were not, but their owner got pretty wild!"');
                          } else {
                            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
                            scene.text('A depressed man goes hunting. He finds a bear den, starts firing his rifle, shots towards the bear and says:');
                            scene.text('"Listen here, either I kill you or we fuck, your choice! If you wanna survive I suggest you pick the second option… Not feeling satisfied, the hunter goes home, picks up more ammunition, returns to the den, empties his clip. He forces the bear out, saying:');
                            scene.text('"Listen, either we fuck again, or I\'ll kill you, take your pick! The man survives even this time, wondering how he\'s able to still be alive. He goes home and returns with dynamite wanting to blow up den. He sets up the dynamite, hides behind a rock and blows up the entrance to the den.');
                            scene.text('Behind him he hears the voice of the bear: "Man, I do not understand, are you a hunter or a faggot?"');
                            if (((s as any).temp ?? 0) === 27) {
                              scene.text('A hunter comes home from the hunt.');
                              scene.text('"Is that you smelling?"');
                              scene.text('"Yes, I went out to hunt down a bear, but I forgot the food. So I started to run home. I was close to home when I hear someone behind me, putting their paws on my shoulders. I turn and see a bear. Well I\'m sure you can probably figure out what happened next."');
                            } else {
                              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
                              scene.text('It\'s hunting season and everybody are hunting geese. A hunter, tired off staying hidden, finally sees an opportunity, a lone goose. The hunter sneaks up to the goose, trying to near it as close as possible.');
                              scene.text('When he\'s finally close enough, he lets off a shot but misses the goose. It turns around and hisses towards the hunter.');
                              scene.text('"Shit! Do they bite?" asked the hunter. "What did you expect? That they suck?" answered his friend.');
                              if (((s as any).temp ?? 0) === 29) {
                                scene.text('An experienced hunter shares his experience with the beginners:');
                                scene.text('"Remember, it is best to hunt with dogs. If you get lost and want to return home, they will always find back. But keep them on a short leesh and don\'t let go of them no matter what way they take!"');
                              } else {
                                scene.text('"Some investments were made in this area, and a certain Minister was invited to hunt rabbits. At the end he was unanimously proclaimed hunting king. The Minister managed to shoot thirty rabbits."');
                                scene.text('Yes, it was a great result, the Minister commented modestly, especially considering that I only took ten shots…"');
                                if (((s as any).temp ?? 0) === 31) {
                                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
                                  scene.text('Two hunters are discussing:');
                                  scene.text('"I heard you beat down a snake last week?"');
                                  scene.text('"The stories are true my friend."');
                                  scene.text('"So tell me, how did you manage that?"');
                                  scene.text('"As usual, with wine, soft music, erotic magazines…"');
                                } else {
                                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 5);
                                  scene.text('Two hunters are hunting in the woods. They notice a woman in front of them with bare legs lying down. One of the hunters looks at her and says:');
                                  scene.text('"Now this is a beast I could chase forever!"');
                                  scene.text('The other hunter looks at the womans\' ass and says:');
                                  scene.text('"I wouldn\'t chase that if they even gave me a million rubles."');
                                  if (((s as any).temp ?? 0) === 33) {
                                    scene.text('The three hunters are telling each other stories. The first one:');
                                    scene.text('"I went out hunting once and saw this huge wild boar killing one deer…"');
                                    scene.text('The second one:');
                                    scene.text('Yeah right, and I\'m a moose…"');
                                    scene.text('The third one cuts in:');
                                    scene.text('"I once went on a hunt, with only one bullet in the barrel… I ended up meeting a pack of wolves… I took a shot and missed. The wolves started running towards me so I climbed up a tree…');
                                    scene.text('"How did you survive?"');
                                    scene.text('"I ate leaves…"');
                                  } else {
                                    scene.text('A hunter walks through the woods and meets a boar. He quickly picks up his rifle and shoots.');
                                    scene.text('While the smoke is clearing, the hunter starts wondering: Did I hit the boar or not?');
                                    scene.text('The smoke clears, the boar is unharmed, and comments:');
                                    scene.text('Man, you really need some…');
                                    if (((s as any).temp ?? 0) === 35) {
                                      scene.text('Two hunters are talking:');
                                      scene.text('"Can you imagine that I came across a couple of beautiful birds yesterday, my heart pounded with excitement when I saw them!"');
                                      scene.text('"Did you shoot them?"');
                                      scene.text('"No, they were too expensive."');
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'huntersgroupORALsi':
      enterHuntersgroupORALsi(s, scene);
      break;
    case 'huntersgroupORALsi1':
      enterHuntersgroupORALsi1(s, scene);
      break;
    case 'huntersgroupORALs':
      enterHuntersgroupORALs(s, scene);
      break;
    case 'huntersgroupORALs1':
      enterHuntersgroupORALs1(s, scene);
      break;
    case 'huntersgroupORALs1end':
      enterHuntersgroupORALs1end(s, scene);
      break;
    case 'huntersgroupORALi1end':
      enterHuntersgroupORALi1end(s, scene);
      break;
    case 'huntersgroupORALa1end':
      enterHuntersgroupORALa1end(s, scene);
      break;
    case 'huntersgroupORALi':
      enterHuntersgroupORALi(s, scene);
      break;
    case 'huntersgroupORALend1':
      enterHuntersgroupORALend1(s, scene);
      break;
    case 'huntersgroupORALai':
      enterHuntersgroupORALai(s, scene);
      break;
    case 'huntersgroupORALai1':
      enterHuntersgroupORALai1(s, scene);
      break;
    case 'huntersgroupORALi1':
      enterHuntersgroupORALi1(s, scene);
      break;
    case 'huntersgroupORALas':
      enterHuntersgroupORALas(s, scene);
      break;
    case 'huntersgroupORALasi':
      enterHuntersgroupORALasi(s, scene);
      break;
    case 'huntersgroupVias':
      enterHuntersgroupVias(s, scene);
      break;
    case 'huntersgroupVas':
      enterHuntersgroupVas(s, scene);
      break;
    case 'huntersgroupVas1':
      enterHuntersgroupVas1(s, scene);
      break;
    case 'huntersgroupVa':
      enterHuntersgroupVa(s, scene);
      break;
    case 'huntersgroupVs':
      enterHuntersgroupVs(s, scene);
      break;
    case 'huntersgroupVi':
      enterHuntersgroupVi(s, scene);
      break;
    case 'huntersgroupVis':
      enterHuntersgroupVis(s, scene);
      break;
    case 'huntersgroupVis1':
      enterHuntersgroupVis1(s, scene);
      break;
    case 'huntersgroupVi1':
      enterHuntersgroupVi1(s, scene);
      break;
    case 'huntersgroupVs1':
      enterHuntersgroupVs1(s, scene);
      break;
    case 'huntersgroupVia':
      enterHuntersgroupVia(s, scene);
      break;
    case 'huntersgroupVia1':
      enterHuntersgroupVia1(s, scene);
      break;
    case 'huntersgroupVi2':
      enterHuntersgroupVi2(s, scene);
      break;
    case 'huntersgroupVa1':
      enterHuntersgroupVa1(s, scene);
      break;
    case 'huntersgroupVaOsHi':
      enterHuntersgroupVaOsHi(s, scene);
      break;
    case 'huntersgroupVOsHi':
      enterHuntersgroupVOsHi(s, scene);
      break;
    case 'huntersgroupVaOHi':
      enterHuntersgroupVaOHi(s, scene);
      break;
    case 'huntersgroupDPasi':
      enterHuntersgroupDPasi(s, scene);
      break;
    case 'huntersgroupDPsi':
      enterHuntersgroupDPsi(s, scene);
      break;
    case 'huntersgroupDPas':
      enterHuntersgroupDPas(s, scene);
      break;
    case 'huntersgroupDPai':
      enterHuntersgroupDPai(s, scene);
      break;
    case 'huntersgroupVsOaHi':
      enterHuntersgroupVsOaHi(s, scene);
      break;
    case 'huntersgroupVsOHi':
      enterHuntersgroupVsOHi(s, scene);
      break;
    case 'huntersgroupVsOi':
      enterHuntersgroupVsOi(s, scene);
      break;
    case 'huntersgroupVOi':
      enterHuntersgroupVOi(s, scene);
      break;
    case 'huntersgroupVsO':
      enterHuntersgroupVsO(s, scene);
      break;
    case 'huntersgroupVOaHi':
      enterHuntersgroupVOaHi(s, scene);
      break;
    case 'huntersgroupViOa':
      enterHuntersgroupViOa(s, scene);
      break;
    case 'huntersgroupViO':
      enterHuntersgroupViO(s, scene);
      break;
    case 'huntersgroupVaOs':
      enterHuntersgroupVaOs(s, scene);
      break;
    case 'huntersgroupVOs':
      enterHuntersgroupVOs(s, scene);
      break;
    case 'huntersgroupVaO':
      enterHuntersgroupVaO(s, scene);
      break;
    case 'huntersgroupAsOa':
      enterHuntersgroupAsOa(s, scene);
      break;
    case 'huntersgroupAsO':
      enterHuntersgroupAsO(s, scene);
      break;
    case 'huntersgroupAOa':
      enterHuntersgroupAOa(s, scene);
      break;
    case 'huntersgroupDPis':
      enterHuntersgroupDPis(s, scene);
      break;
    case 'huntersgroupDPia':
      enterHuntersgroupDPia(s, scene);
      break;
    case 'huntersgroupOis':
      enterHuntersgroupOis(s, scene);
      break;
    case 'huntersgroupOia':
      enterHuntersgroupOia(s, scene);
      break;
    case 'huntersgroupOsa':
      enterHuntersgroupOsa(s, scene);
      break;
    case 'huntersgroupAa':
      enterHuntersgroupAa(s, scene);
      break;
    case 'huntersgroupAaEnd1':
      enterHuntersgroupAaEnd1(s, scene);
      break;
    case 'huntersgroupAaEnd2':
      enterHuntersgroupAaEnd2(s, scene);
      break;
    case 'huntersgroupAs':
      enterHuntersgroupAs(s, scene);
      break;
    case 'huntersgroupAsEnd1':
      enterHuntersgroupAsEnd1(s, scene);
      break;
    case 'huntersgroupAsEnd2':
      enterHuntersgroupAsEnd2(s, scene);
      break;
    case 'huntersgroupAi':
      enterHuntersgroupAi(s, scene);
      break;
    case 'huntersgroupAiEnd1':
      enterHuntersgroupAiEnd1(s, scene);
      break;
    case 'huntersgroupAiEnd2':
      enterHuntersgroupAiEnd2(s, scene);
      break;
    case 'huntersgroupVa2':
      enterHuntersgroupVa2(s, scene);
      break;
    case 'huntersgroupVa2end':
      enterHuntersgroupVa2end(s, scene);
      break;
    case 'huntersgroupVs2':
      enterHuntersgroupVs2(s, scene);
      break;
    case 'huntersgroupVs2end':
      enterHuntersgroupVs2end(s, scene);
      break;
    case 'huntersgroupVi3':
      enterHuntersgroupVi3(s, scene);
      break;
    case 'huntersgroupVi3end':
      enterHuntersgroupVi3end(s, scene);
      break;
    case 'huntersgroupOsend':
      enterHuntersgroupOsend(s, scene);
      break;
    case 'huntersgroupOaend':
      enterHuntersgroupOaend(s, scene);
      break;
    case 'huntersgroupOiend':
      enterHuntersgroupOiend(s, scene);
      break;
    case 'hunterslutSTART':
      enterHunterslutSTART(s, scene);
      break;
    case 'hunterslutEND':
      enterHunterslutEND(s, scene);
      break;
    case 'hunterslutORAL':
      enterHunterslutORAL(s, scene);
      break;
    case 'hunterslutCOW':
      enterHunterslutCOW(s, scene);
      break;
    case 'hunterslutHANDS':
      enterHunterslutHANDS(s, scene);
      break;
    case 'hunterslutTREE':
      enterHunterslutTREE(s, scene);
      break;
    case 'hunterslutTREELEG':
      enterHunterslutTREELEG(s, scene);
      break;
    case 'hunterslutLEG1':
      enterHunterslutLEG1(s, scene);
      break;
    case 'hunterslutLEG2':
      enterHunterslutLEG2(s, scene);
      break;
    case 'hunters_talk':
      enterHuntersTalk(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const hunters: LocationDef = {
  name: 'hunters',
  title: 'The three hunters, Sergei, Igor and Andrei are sitting and t',
  region: 'other',
  description: ['The three hunters, Sergei, Igor and Andrei are sitting and telling each other all kinds of hunting stories.'],
  enter: enter,
};
