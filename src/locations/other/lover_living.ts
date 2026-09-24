import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).husID ?? 0) !== '') {
    qspCall(s, 'npcStat', '$husID');
  } else {
    if (((s as any).wifID ?? 0) !== '') {
      qspCall(s, 'npcStat', '$wifID');
    }
  }
  scene.text(`<center><b>${((s as any).npcdesc ?? '')}</b></center>`);
  scene.img(`${(((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverDiscription(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverAction(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: Your <<$npcRelat>>, seeing you naked, says - "You are very beautiful."
      scene.text(`Your ${((s as any).npcRelat ?? '')}, seeing you naked, says - "You are very beautiful."`);
    } else {
      // TODO-QSP: dynamic text: Your <<$npcRelat>> smiles, "It''s always nice to see you in your underwear honey...
      scene.text(`Your ${((s as any).npcRelat ?? '')} smiles, "It's always nice to see you in your underwear honey."`);
    }
  }
  if (((s as any).spouseVars ?? 0)?.['sexday'] < 4) {
    if (((s as any).husID ?? 0) !== '') {
      scene.actions([
        { label: 'Sex with your husband', goto: ['husbsex', 'room'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Move away</b>', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterLoverDiscription(s: GameState, scene: SceneBuilder): void {
  (s as any).spouse_birth_year = (((s as any).npc_dob ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) / 10000;
  if (((s as any).birthyear ?? 0) < ((s as any).spouse_birth_year ?? 0)) {
    (s as any).age_diff = ((s as any).npcAge ?? 0) - ((s as any).age ?? 0);
    (s as any).h_age = '' + ((s as any).npcdesc ?? 0) + ' was born in ' + ((s as any).spouse_birth_year ?? 0) + ', ' + ((s as any).xe ?? 0) + ' is ' + ((s as any).npcAge ?? 0) + ' years old. ' + ((s as any).xec ?? 0) + ' is ' + ((s as any).age_diff ?? 0) + ' years older than you';
  } else {
    if (((s as any).birthyear ?? 0) === ((s as any).spouse_birth_year ?? 0)) {
      (s as any).h_age = '' + ((s as any).npcdesc ?? 0) + ' was born in ' + ((s as any).spouse_birth_year ?? 0) + ', ' + ((s as any).xe ?? 0) + ' is ' + ((s as any).npcAge ?? 0) + ' years old. Same as you';
    } else {
      (s as any).age_diff = ((s as any).age ?? 0) - ((s as any).npcAge ?? 0);
      (s as any).h_age = '' + ((s as any).npcdesc ?? 0) + ' was born in ' + ((s as any).spouse_birth_year ?? 0) + ', ' + ((s as any).xe ?? 0) + ' is ' + ((s as any).npcAge ?? 0) + ' years old. You are ' + ((s as any).age_diff ?? 0) + ' years older than ' + ((s as any).xem ?? 0) + '';
    }
  }
  // TODO-QSP: dynamic text: Your <<$npcRelat>> <<$npcdesc>>, <<$h_age>>. It <<$npcheight>> <<$npcbuild>> <<$...
  scene.text(`Your ${((s as any).npcRelat ?? '')} ${((s as any).npcdesc ?? '')}, ${((s as any).h_age ?? '')}. It ${((s as any).npcheight ?? '')} ${((s as any).npcbuild ?? '')} ${((s as any).npchair ?? '')}.`);
  if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
    // TODO-QSP: dynamic text: You have a terrible row with your <<$npcRelat>>.
    scene.text(`You have a terrible row with your ${((s as any).npcRelat ?? '')}.`);
  } else {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 40) {
      // TODO-QSP: dynamic text: There are tension between you and your <<$npcRelat>>.
      scene.text(`There are tension between you and your ${((s as any).npcRelat ?? '')}.`);
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
        // TODO-QSP: dynamic text: You have a normal relationship with your <<$npcRelat>>.
        scene.text(`You have a normal relationship with your ${((s as any).npcRelat ?? '')}.`);
      } else {
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 80) {
          // TODO-QSP: dynamic text: You have a good relationship with your <<$npcRelat>>.
          scene.text(`You have a good relationship with your ${((s as any).npcRelat ?? '')}.`);
        } else {
          // TODO-QSP: dynamic text: You have a great relationship with your <<$npcRelat>>.
          scene.text(`You have a great relationship with your ${((s as any).npcRelat ?? '')}.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLoverAction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'korr') {
  } else {
    if (((s as any).loc ?? 0) === 'bedr') {
      if (((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 7) {
        // TODO-QSP: dynamic text: Your <<$npcRelat>> <<$npcdesc>> is lying in bed, eyes open. "What do you want? I...
        scene.text(`Your ${((s as any).npcRelat ?? '')} ${((s as any).npcdesc ?? '')} is lying in bed, eyes open. "What do you want? It is late, go to sleep."`);
      }
    } else {
      if (((s as any).loc ?? 0) === 'sitr') {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).week ?? 0) >= 6) {
          // TODO-QSP: dynamic text: <<$npcdesc>> is sitting on the couch and watching TV.
          scene.text(`${((s as any).npcdesc ?? '')} is sitting on the couch and watching TV.`);
        } else {
          if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
            // TODO-QSP: dynamic text: <<$npcdesc>> is sitting on the couch and watching TV.
            scene.text(`${((s as any).npcdesc ?? '')} is sitting on the couch and watching TV.`);
          }
        }
      } else {
        if (((s as any).loc ?? 0) === 'vanr') {
        } else {
          if (((s as any).loc ?? 0) === 'kuhr') {
            if (((s as any).hour ?? 0) === 17  ||  ((s as any).hour ?? 0) === 7) {
              // TODO-QSP: dynamic text: <<$npcdesc>> is sitting at the kitchen table.
              scene.text(`${((s as any).npcdesc ?? '')} is sitting at the kitchen table.`);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBedr(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).npcID ?? 0) !== ((s as any).husID ?? 0)) {
      qspCall(s, 'npcStat', '$husID');
    }
  } else {
    if (((s as any).wifID ?? 0) !== '') {
      if (((s as any).npcID ?? 0) !== ((s as any).wifID ?? 0)) {
        qspCall(s, 'npcStat', '$wifID');
      }
    }
  }
  if (((s as any).spouseVars ?? 0)?.['drunk_day'] === ((s as any).daystart ?? 0)) {
    if (((s as any).spouseVars ?? 0)?.['hus_strapon'] === 1) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you used an anal plug on <<$x...
        scene.text(`Your ${((s as any).npcRelat ?? '')} is still passed out drunk after you used an anal plug on ${((s as any).xem ?? '')}.`);
      } else {
        // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you used an anal plug on <<$x...
        scene.text(`Your ${((s as any).npcRelat ?? '')} is still passed out drunk after you used an anal plug on ${((s as any).xem ?? '')}.`);
      }
    } else {
      if (((s as any).spouseVars ?? 0)?.['hus_strapon'] === 2) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you stuck a dildo in <<$xyr>>...
          scene.text(`Your ${((s as any).npcRelat ?? '')} is still passed out drunk after you stuck a dildo in ${((s as any).xyr ?? '')} ass.`);
        } else {
          // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you stuck a dildo in <<$xyr>>...
          scene.text(`Your ${((s as any).npcRelat ?? '')} is still passed out drunk after you stuck a dildo in ${((s as any).xyr ?? '')} ass.`);
        }
      } else {
        if (((s as any).spouseVars ?? 0)?.['hus_strapon'] === 3) {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you fucked <<$xem>> in the as...
            scene.text(`Your ${((s as any).npcRelat ?? '')} is still passed out drunk after you fucked ${((s as any).xem ?? '')} in the ass with a strap-on.`);
          } else {
            // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you fucked <<$xem>> in the as...
            scene.text(`Your ${((s as any).npcRelat ?? '')} is still passed out drunk after you fucked ${((s as any).xem ?? '')} in the ass with a strap-on.`);
          }
        }
      }
    }
    qspCall(s, 'music_actions', 'no_music');
  }
  if (((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).spouseVars ?? 0)?.['drunk_day'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 7) {
      // TODO-QSP: dynamic text: Your <a href="exec: gt ''lover_living'', ''talk''"><<$npcRelat>></a> is sleeping...
      scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lover_living/u0027, /u0027talk/u0027); return false;">${((s as any).npcRelat ?? '')}</a> is sleeping on the bed.`);
    }
    qspCall(s, 'music_actions', 'no_music');
  }
  if (((s as any).husID ?? 0) !== '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHusbandDrunk(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).spouseVars ?? 0)?.['drink'] !== 10) {
    if (((s as any).hour ?? 0) === 7  ||  ((s as any).hour ?? 0) === 17) {
      // TODO-QSP: dynamic text: <a href="exec:gt ''lover_living'', ''talk''">Your <<$npcRelat>> is eating at the...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lover_living/u0027, /u0027talk/u0027); return false;">Your ${((s as any).npcRelat ?? '')} is eating at the table.</a>`);
    }
  }
  if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['eat_day']) {
    if (((s as any).mc_inventory ?? 0)?.['food_basic'] < 2) {
      scene.text(`<center><b>You need to buy some food so you can cook for your ${((s as any).npcRelat ?? '')} and yourself.</b></center>`);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Cook a meal for your ' + String(((s as any).npcRelat ?? '') ?? '') + ' and yourself (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).husID ?? 0), 5);
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_basic'] = ((st as any).mc_inventory['food_basic'] ?? 0) - (2);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['eat_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'mood', 'lower', 'large');
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/kitchen/cook.jpg');
    // TODO-QSP: dynamic text: You prepare a meal for your <<$npcRelat>> and yourself.
    scene.text(`You prepare a meal for your ${((st as any).npcRelat ?? '')} and yourself.`);
    scene.actions([
      { label: 'Leave the meal', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['drunk_day']) {
    if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).hour ?? 0) > 17  &&  ((s as any).hour ?? 0) <= 22)) {
      // TODO-QSP: dynamic text: Your <a href="exec:gt ''lover_living'', ''talk''"><<$npcRelat>></a> is sitting o...
      scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lover_living/u0027, /u0027talk/u0027); return false;">${((s as any).npcRelat ?? '')}</a> is sitting on the couch, watching television.`);
      qspCall(s, 'music_actions', 'not_alone');
    }
  }
  if (((s as any).spouseVars ?? 0)?.['drunk_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 20) {
    qspCall(s, 'music_actions', 'no_music');
  }
  // TODO-QSP: end
  scene.build();
}

function enterHusbandDrunk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== '') {
    // TODO-QSP: exit
  }
  if (((s as any).spouseVars ?? 0)?.['drink'] === 10  &&  ((s as any).hour ?? 0) > 20  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).spouseVars ?? 0)?.['hus_strapon'] === 0) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>> came home very drunk and collapsed on the bed. <<$Xec>> fell asleep...
      scene.text(`${((s as any).boydesc ?? '')} came home very drunk and collapsed on the bed. ${((s as any).Xec ?? '')} fell asleep in ${((s as any).xyr ?? '')} clothes.`);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> came home drunk and fell asleep on the bed.
      scene.text(`${((s as any).boydesc ?? '')} came home drunk and fell asleep on the bed.`);
    }
    // TODO-QSP: dynamic text: <i>That pig</i>! you think when an idea springs to mind. <i>Maybe I should teach...
    scene.text(`<i>That pig</i>! you think when an idea springs to mind. <i>Maybe I should teach ${((s as any).xem ?? '')} a lesson so ${((s as any).xe ?? '')} won't get drunk again</i>.`);
    if (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1) {
      // TODO-QSP: act iif(rand(0, 1) = 0, 'Insert an anal plug', 'Insert a butt plug in <<$xyr>> ass'):
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['drunk_day'] = ((s as any).daystart ?? 0);
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['drink'] = 11;
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['hus_strapon'] = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.img('images/characters/city/husband/sex/h0.jpg');
      if ((!((s as any).analPlugIn ?? 0))) {
        // TODO-QSP: dynamic text: You take an anal plug and put it into <<$xyr>> ass.
        scene.text(`You take an anal plug and put it into ${((s as any).xyr ?? '')} ass.`);
      } else {
        (s as any).analPlugIn = 0;
        (s as any).analPlugOut = 0;
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: You get your butt plug out and pull down <<$xyr>> pants. You put just a dab of l...
          scene.text(`You get your butt plug out and pull down ${((s as any).xyr ?? '')} pants. You put just a dab of lube on the tip of the plug, then gently insert it into ${((s as any).xyr ?? '')} ass.`);
        } else {
          // TODO-QSP: dynamic text: You pull the plug out of you and shove it up <<$xyr>> ass.
          scene.text(`You pull the plug out of you and shove it up ${((s as any).xyr ?? '')} ass.`);
        }
      }
      // TODO-QSP: dynamic text: <<$boydesc>> moves, but he doesn''t wake up.
      scene.text(`${((s as any).boydesc ?? '')} moves, but he doesn't wake up.`);
      if (((s as any).mc_inventory ?? 0)?.['dildo_small'] > 0) {
        // TODO-QSP: act iif(rand(0, 1) = 0, 'Insert dildo', 'Insert a dildo into <<$xyr>> ass'):
        ((s as any).spouseVars = (s as any).spouseVars ?? {})['hus_strapon'] = 2;
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
        scene.img('images/characters/city/husband/sex/h1.jpg');
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: You pull out the plug and replace it with a dildo. <<$boydesc>> doesn''t even bu...
          scene.text(`You pull out the plug and replace it with a dildo. ${((s as any).boydesc ?? '')} doesn't even budge as you slowly move the dildo in and out, trying not to wake him up. You notice his cock starts to get rock-hard, and he starts to moan softly in his sleep. His dick starts to throb like he's going to cum. You take his dick in your mouth and don't need to suck on it for long. You swallow his cum before carefully putting his underpants back on.`);
        } else {
          // TODO-QSP: dynamic text: You pull out the plug and stick the dildo up his ass instead, <<$boydesc>> did n...
          scene.text(`You pull out the plug and stick the dildo up his ass instead, ${((s as any).boydesc ?? '')} did not move. You began to slowly move the dildo trying not to wake him. After a bit, his dick begins to get hard in front of your face, and ${((s as any).boydesc ?? '')} moaned softly, but didn't wake up. You start to really work the dildo in his ass, stroking it deep in his ass, before too long his cock started to throb. You wrap your lips around his cock, you barely even started to suck his dick when suddenly your mouth is filled with a jet of sperm, you swallow it all and carefully cleaned his penis, then you pulled his pants back up.`);
        }
        qspCall(s, 'arousal', 'bj', 20);
        qspCall(s, 'arousal', 'anal_dildo_give', (-20));
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
      // TODO-QSP: act iif(rand(0, 1) = 0, 'Use the strap-on', 'Wear strap-on'):
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['hus_strapon'] = 3;
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
      scene.img('images/characters/city/husband/sex/h2.jpg');
      // TODO-QSP: dynamic text: You put on the strapon and pull out the butt plug. You gently move the shaft of ...
      scene.text(`You put on the strapon and pull out the butt plug. You gently move the shaft of the strap-on inside his ass and ${((s as any).boydesc ?? '')} moves, but doesn't wake up. You continue to slowly move it in and out, trying not to wake him. You notice his cock is getting rock-hard and he starts to moan softly in his sleep. Hoping that he won't wake up, you increase your speed and push the entire length of the strap-on into his ass as you start to stroke his dick. Realizing he's not far from cumming, you pull out and finish him by giving him a blowjob. He cums in your mouth and you swallow before carefully putting his underpants back on.`);
      qspCall(s, 'arousal', 'bj', 20);
      qspCall(s, 'arousal', 'anal_strap_give', (-20));
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: end
  if (((s as any).spouseVars ?? 0)?.['drink'] === 11  &&  ((s as any).spouseVars ?? 0)?.['hus_strapon'] > 0  &&  ((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['drunk_day']) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('Your husband approaches you. "Honey, my ass hurts. Did something happen yesterday?"');
    } else {
      scene.text('Your husband approaches you. "Honey, my ass hurts. Like a lot. Do you know why?"');
    }
    scene.actions([
      { label: 'Lie', handler: (st: GameState) => {
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['hus_strapon'] = 0;
    qspCall(st, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('"Not that I know of, though you were in the bathroom a lot," you say with an innocent look on your face before he shrugs his shoulders and walks away.');
    } else {
      scene.text('"No dear, I don\'t know anything about that," you answer, trying to look as innocent as possible before he shrugs and walks away.');
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Confess', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 1) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('"You got so drunk yesterday that I decided to teach you a lesson and put a plug in your ass."');
      } else {
        scene.text('"Honey, you were so drunk last night that I decided to teach you a lesson and put a butt plug up your ass."');
      }
    } else {
      if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 2) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.text('"I wanted to give you a pleasant surprise and started to give you a blowjob, but you wouldn\'t cum no matter how much I tried, so I put a finger in your ass, but again you failed to cum. That\'s when I put the dildo in your ass and you shot your load. Forgive me, but I just wanted to get you off."');
        } else {
          scene.text('"I wanted to make you happy, so I started to give you a blowjob, but you didn\'t cum, so I inserted a finger into your asshole. When you still didn\'t cum, I took a small dildo and some lube and put in it your ass; I\'ve never seen you cum like that before. I even gave you a second blowjob. Forgive me, but you seemed to enjoy it so much that I could\'t stop. I just wanted to make you happy," you lie to him.');
        }
      } else {
        if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 3) {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.text('"I wanted to give you a pleasant surprise and started to give you a blowjob, but you wouldn\'t cum no matter how much I tried, so I put a finger in your ass, but again you failed to cum. That\'s when I put in a second finger and you started moving your ass up and down, fucking my fingers as you moaned in pleasure. Since you seemed to be liking it so much and asked for more, I put on my strap-on and fucked you with it while I was jerking you off. I just wanted you to be happy, even if you don\'t remember. Please forgive me!"');
          } else {
            scene.text('"I wanted to make you happy, so I started to give you a blowjob, but you didn\'t cum, so I inserted a finger into your asshole. When you still didn\'t cum, I put in a second finger you began to move your ass towards my fingers, moaning heavily. I thought that you liked it, so I put on a strap-on. You enjoyed it so much that you finished over and over again, and I continued until I was tired. I then licked all the cum off your body and went to sleep. I just wanted to make you happy and you were enjoying it," you lie to him.');
          }
        }
      }
    }
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 1) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.text('"I\'m sorry. I won\'t get that drunk again," he says before leaving the room.');
        } else {
          scene.text('"I\'m sorry. I won\'t get that drunk again," he says and leaves the room.');
        }
      } else {
        if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 2) {
          ((st as any).spouseVars = (st as any).spouseVars ?? {})['pervert_add'] = ((st as any).spouseVars['pervert_add'] ?? 0) + (1);
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.text('"You\'re such a caring woman. Instead of scolding me for being drunk, you suck me off. Thank you, dear," he says before leaving the room.');
          } else {
            scene.text('"You\'re so thoughtful. Instead of scolding me, you still wanted to make me happy. Thank you, dear," he says and leaves the room.');
          }
        } else {
          if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 3) {
            ((st as any).spouseVars = (st as any).spouseVars ?? {})['pervert_add'] = ((st as any).spouseVars['pervert_add'] ?? 0) + (1);
            if ((!(Math.floor(Math.random() * 2) + 0))) {
              scene.text('"I really liked it?" he asks and you nod. "Well then, thank you dear, but ask for my consent next time," he says before leaving the room.');
            } else {
              scene.text('"Did I really like it?" he asks and you nod.');
              scene.text('"Well then, thank you dear. Ask me next time though," he says and leaves the room.');
            }
          }
        }
      }
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 1) {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.text('"Just don\'t do that anymore," is all he says before leaving the room.');
          } else {
            scene.text('"Don\'t do that again!" he snarls and storms off.');
          }
        } else {
          if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 2) {
            ((st as any).spouseVars = (st as any).spouseVars ?? {})['pervert_add'] = ((st as any).spouseVars['pervert_add'] ?? 0) + (1);
            if ((!(Math.floor(Math.random() * 2) + 0))) {
              scene.text('"Don\'t ever do that again. I\'m a man and <i>I</i> do the fucking!" he says before leaving the room.');
            } else {
              scene.text('"Don\'t do that again! I\'m a man and I\'m not supposed to get fucked in the ass!" he snarls and storms off.');
            }
          } else {
            if (((st as any).spouseVars ?? 0)?.['hus_strapon'] === 3) {
              if (((st as any).pcs_intel ?? 0) > 40  ||  ((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
                ((st as any).spouseVars = (st as any).spouseVars ?? {})['gentle_add'] = ((st as any).spouseVars['gentle_add'] ?? 0) + (1);
                if ((!(Math.floor(Math.random() * 2) + 0))) {
                  scene.text('"Are you really trying to tell me that I asked you to fuck me with a strap-on, bitch?" he bellows. When you start crying and lamenting that you only wanted to please him, he looks at you and exhales. "Fine, fine, I believe you. I believe you wanted to pleasure me and make me happy, but never do that again."');
                } else {
                  scene.text('"Are you serious?! I\'m not some kind of bitch that wants to get fucked up the ass!" he yells at you. You start to cry and say that you only wanted to please him and he looks at you and sighs. "Don\'t cry, sweetie. I believe you, just don\'t do it again."');
                }
              } else {
                if (((st as any).pcs_intel ?? 0) <= 40) {
                  qspCall(st, 'lover_love', 'divorce');
                  (st as any).fingal = ((st as any).fingal ?? 0) + (1);
                  (st as any).minut = ((st as any).minut ?? 0) + 120;
                  scene.text('The next thing you feel is a powerful slap to the face. When you come back to your senses, your husband and his things are gone. He left a note telling you he\'s going to file for divorce.');
                }
              }
            }
          }
        }
      } else {
        qspCall(st, 'lover_love', 'divorce');
        (st as any).fingal = ((st as any).fingal ?? 0) + (1);
        (st as any).minut = ((st as any).minut ?? 0) + 120;
        qspCall(st, 'stat', '');
        scene.text('The next thing you feel is a powerful slap to the face. When you come back to your senses, your husband and his things are gone. He left a note telling you he\'s going to file for divorce.');
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: spouseVars['hus_strapon'] = 0
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSantehnik(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) === '') {
    scene.text('ERROR: "lover_living, santehnik" should not be able to trigger.');
    scene.actions([
{ label: 'Leave', goto: ['sitr', ''] },
]);
    return;
  }
  (s as any).sexpartkno = 1;
  qspCall(s, 'npcStat', '$husID');
  qspCall(s, 'npcStat', 'A53', 1);
  if (((s as any).spouseVars ?? 0)?.['drink'] !== 10) {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.img('images/locations/city/residential/apartment/sex/s7.jpg');
    scene.text('You tell your husband about the leak and he makes a phone call. After 20 minutes, a plumber arrives.');
    scene.text('Your husband walks him to the kitchen and the two of you began to observe his actions, you are sick of hearing about how the plumber hates cheap Chinese fittings and what people pushed into the sink, and you decided to wait in the living room.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/apartment/sex/s8.jpg');
    scene.text('You go into the room and sit on the couch, soon your husband comes in and sits down beside you. With one hand on your breast, he runs his other hand down under your panties and begins to massage your clitoris.');
    scene.text('"What are you doing? What if the plumber comes in?"');
    scene.text('"He\'ll be another hour poking around." he answers, "Come on, quick blow job."');
    scene.text('"OK, lets." you say, now excited, it really looks like his hand has done its job.');
    qspCall(st, 'arousal', 'foreplay', 10, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Start', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/s9.jpg');
    scene.text('The husband stands up and pulls from his unbuttoned pants his member, you drop to your knees and his cock is in your mouth, right then the plumber enters, "I\'m finished." he says and freezes, seeing this picture.');
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('Your husband tries to remove his member from your mouth');
      if (((st as any).pcs_horny ?? 0) < 80) {
        scene.actions([
          { label: 'Stop', handler: (st: GameState) => {
    scene.text('Your husband quickly hides his dick in his pants and with the plumber goes out into the corridor');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['sitr', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do not stop', handler: (st: GameState) => {
    scene.text('You grabbed your husbands hips and continued to work your mouth, he jerks a couple of times trying to free himself, but you can not stop and just swallow his cock even deeper. When he stops twitching you bring one hand to your crotch and with just a couple of motions bring yourself to orgasm.');
    scene.text('But the excitement does not recede, you want even more, and the watching plumber just arouses you. You can not control yourself.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride your husband', handler: (st: GameState) => {
    qspCall(st, 'cum_manage', '');
    (st as any).suprdolg = ((st as any).suprdolg ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['pervert_add'] = ((st as any).spouseVars['pervert_add'] ?? 0) + (1);
    scene.img('images/locations/city/residential/apartment/sex/s12.jpg');
    scene.text('You release your husband\'s member from your mouth and quickly push him to sit on the couch, then jump on top of him, quickly planting his dick in your pussy. You ride it like crazy, ignoring the plumber, still stood in the doorway, watching you. When you are again close to orgasm you feel as sperm gushes into you');
    scene.text('It take a few movements from his twitching cock, but you also reach orgasm, uttering a cry you limp and fall from your husband. He leaves you still quaking, pulls up his pants and walks out with the plumber to the hallway.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 10, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['sitr', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('Your husband did not even try to stop you');
      if (((st as any).pcs_horny ?? 0) < 80) {
        scene.actions([
          { label: 'Stop', handler: (st: GameState) => {
    if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('You release your husband\'s member from your mouth and he quickly pulls up his pants and with the plumber goes out into the corridor');
      scene.actions([
        { label: 'Leave', goto: ['sitr', ''] },
      ]);
    } else {
      (st as any).guy = ((st as any).guy ?? 0) + (1);
      scene.text('You tried to spit the member from your mouth, but your husband grabs hold of your head and he starts to fuck you in the mouth, talking with shocked plumber, "We\'re a little busy, at the moment, it\'s her feeding time." he laughes, "How much do I owe you?" He continues.');
      scene.text('"Fifteen hundred." Manages the plumber.');
      scene.text('"Well, with those prices can agree that if you feed her too, we consider it paid?" He asks.');
      scene.text('"I do not know, a blowjob would earn a discount, but if she can do us both, then yes." replied the plumber.');
      scene.text('"You know how to bargain." Says your husband, "Okay agreed." He adds, almost without thinking. Knowing the character of your husband you know that your peril has been decided.');
      scene.actions([
        { label: 'Serve both', handler: (st: GameState) => {
    (st as any).picrand = 43;
  }, goto: ['sexdvoe', 'var'] },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Do not stop', handler: (st: GameState) => {
    scene.text('You continued to suck ignoring the watching plumber.');
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('Your husband tries not to look at the plumber, obviously embarrassed, but he does not hesitate to follow your every move.');
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        scene.text('Your husband stands savoring the process without paying attention to the plumber.');
      } else {
        scene.text('Your husband chats with the plumber does not hesitate to turn slightly so that it is easier for him to see.');
      }
    }
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_horny ?? 0) > 70) {
      scene.actions([
        { label: 'Suggest a threesome', handler: (st: GameState) => {
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      ((st as any).spouseVars = (st as any).spouseVars ?? {})['houseslut'] = ((st as any).spouseVars['houseslut'] ?? 0) + (1);
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 2);
      scene.img('images/locations/city/residential/apartment/sex/s11.jpg');
      scene.text('You break away from the penis, and a whisper to your husband if he wants to try a threesome.');
      scene.text('Your husband is a little shocked by the idea, what would convince him? In a loud voice you continue, "Let him lick me while I caress you."');
      scene.text('The plumber tenses, waiting for the reaction of your husband, "Well, if only licking you, then let him." Says your husband. The plumber does not need persuading, your husband sits on the sofa, and you get on your knees and stick out your ass as the plumbers tongue penetrates your pussy.');
      scene.text('At first your husband keeps glancing in his direction, but soon relaxes and finally when the guy starts to finger your hole with a vengeance, he says nothing, you decide that he is no longer against you sharing with others.');
      qspCall(st, 'arousal', 'cuni', 10, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'group');
      qspCall(st, 'arousal', 'vaginal_finger', (-10), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'group');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Serve both', handler: (st: GameState) => {
    (st as any).picrand = 43;
  }, goto: ['sexdvoe', 'var'] },
      ]);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-5));
        scene.text('You break away from the penis, and a whisper to your husband if he wants to try a threesome.');
        scene.text('"You think I should share you, my wife with the plumber? Cool that foolish pussy, you must think with your head." shouts your husband and returning his member to his pants goes out of the room with the plumber.');
        scene.actions([
          { label: 'Leave', goto: ['sitr', ''] },
        ]);
      } else {
        ((st as any).spouseVars = (st as any).spouseVars ?? {})['houseslut'] = ((st as any).spouseVars['houseslut'] ?? 0) + (1);
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 2);
        scene.img('images/locations/city/residential/apartment/sex/s10.jpg');
        scene.text('You break away from the penis, and a whisper to your husband if he wants to try a threesome.');
        scene.text('"It\'s not for nothing that they say all women are whores, hey man this whore wants to do both of us, but then the repair is free of charge." Says your husband. The plumber does need a second invite, he quickly approaches and pulls out his dick.');
        scene.text('Bringing it to your face, you cling to him and start to suck both cocks alternately, your husband stands carefully watching your actions "You like sucking fresh meat, but do not forget about me, and this boys and mine you swallow deeper and deeper."');
        qspCall(st, 'arousal', 'bj', 5, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'group');
        qspCall(st, 'arousal', 'bj', 5, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'group');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Serve both', handler: (st: GameState) => {
    (st as any).picrand = 43;
  }, goto: ['sexdvoe', 'var'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    (st as any).suprdolg = ((st as any).suprdolg ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    scene.text('You continue to blow your husband, and soon a stream of hot liquid squirts into your mouth, swallowing the sperm you lick the remnants of semen from his penis. Your husband puts his cleaned dick in his pants and walks out into the hallway with the plumber. And you are left sitting on the floor, exhausted from desire.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['sitr', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) === ''  &&  (((s as any).wifID ?? 0) === ''  ||  1)) {
    // TODO-QSP: exit
  }
  const arg = s.locArg;
  switch (arg) {
    case 'talk':
      enterTalk(s, scene);
      break;
    case 'lover_discription':
      enterLoverDiscription(s, scene);
      break;
    case 'lover_action':
      enterLoverAction(s, scene);
      break;
    case 'bedr':
      enterBedr(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'husband_drunk':
      enterHusbandDrunk(s, scene);
      break;
    case 'santehnik':
      enterSantehnik(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lover_living: LocationDef = {
  name: 'lover_living',
  region: 'other',
  enter: enter,
};
