import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).husID ?? 0) !== '') {
    qspCall(s, 'npcStat', '', ((s as any).husID ?? 0));
  } else {
    if (((s as any).wifID ?? 0) !== '') {
      qspCall(s, 'npcStat', '', ((s as any).wifID ?? 0));
    }
  }
  scene.text(`<center><b>${((s as any).npcdesc ?? 0)}</b></center>`);
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
  qspCall(s, 'lover_living', 'lover_discription');
  qspCall(s, 'lover_living', 'lover_action');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: Your <<$npcRelat>>, seeing you naked, says - "You are very beautiful."
      scene.text(`Your ${((s as any).npcRelat ?? 0)}, seeing you naked, says - "You are very beautiful."`);
    } else {
      // TODO-QSP: dynamic text: Your <<$npcRelat>> smiles, "It's always nice to see you in your underwear honey....
      scene.text(`Your ${((s as any).npcRelat ?? 0)} smiles, "It's always nice to see you in your underwear honey."`);
    }
  }
  if (((s as any).spouseVars ?? 0)?.['sexday'] < 4) {
    if (((s as any).husID ?? 0) !== '') {
      scene.actions([
        { label: 'Sex with your husband', goto: ['husbsex', 'room'] },
      ]);
    }
  }
  scene.actions([
    { label: '<b>Move away</b>', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterLoverDiscription(s: GameState, scene: SceneBuilder): void {
  (s as any).spouse_birth_year = ((s as any).npc_dob ?? 0)?.[String((s as any).npcID ?? 0)] / 10000;
  if (((s as any).birthyear ?? 0) < ((s as any).spouse_birth_year ?? 0)) {
    (s as any).age_diff = ((s as any).npcAge ?? 0) - ((s as any).age ?? 0);
  } else {
    if (((s as any).birthyear ?? 0) === ((s as any).spouse_birth_year ?? 0)) {
    } else {
      (s as any).age_diff = ((s as any).age ?? 0) - ((s as any).npcAge ?? 0);
    }
  }
  // TODO-QSP: dynamic text: Your <<$npcRelat>> <<$npcdesc>>, <<$h_age>>. It <<$npcheight>> <<$npcbuild>> <<$...
  scene.text(`Your ${((s as any).npcRelat ?? 0)} ${((s as any).npcdesc ?? 0)}, ${((s as any).h_age ?? 0)}. It ${((s as any).npcheight ?? 0)} ${((s as any).npcbuild ?? 0)} ${((s as any).npchair ?? 0)}.`);
  if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
    // TODO-QSP: dynamic text: You have a terrible row with your <<$npcRelat>>.
    scene.text(`You have a terrible row with your ${((s as any).npcRelat ?? 0)}.`);
  } else {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 40) {
      // TODO-QSP: dynamic text: There are tension between you and your <<$npcRelat>>.
      scene.text(`There are tension between you and your ${((s as any).npcRelat ?? 0)}.`);
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
        // TODO-QSP: dynamic text: You have a normal relationship with your <<$npcRelat>>.
        scene.text(`You have a normal relationship with your ${((s as any).npcRelat ?? 0)}.`);
      } else {
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 80) {
          // TODO-QSP: dynamic text: You have a good relationship with your <<$npcRelat>>.
          scene.text(`You have a good relationship with your ${((s as any).npcRelat ?? 0)}.`);
        } else {
          // TODO-QSP: dynamic text: You have a great relationship with your <<$npcRelat>>.
          scene.text(`You have a great relationship with your ${((s as any).npcRelat ?? 0)}.`);
        }
      }
    }
  }
  scene.build();
}

function enterLoverAction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'korr') {
  } else {
    if (((s as any).loc ?? 0) === 'bedr') {
      if (((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 7) {
        // TODO-QSP: dynamic text: Your <<$npcRelat>> <<$npcdesc>> is lying in bed, eyes open. "What do you want? I...
        scene.text(`Your ${((s as any).npcRelat ?? 0)} ${((s as any).npcdesc ?? 0)} is lying in bed, eyes open. "What do you want? It is late, go to sleep."`);
      }
    } else {
      if (((s as any).loc ?? 0) === 'sitr') {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).week ?? 0) >= 6) {
          // TODO-QSP: dynamic text: <<$npcdesc>> is sitting on the couch and watching TV.
          scene.text(`${((s as any).npcdesc ?? 0)} is sitting on the couch and watching TV.`);
        } else {
          if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
            // TODO-QSP: dynamic text: <<$npcdesc>> is sitting on the couch and watching TV.
            scene.text(`${((s as any).npcdesc ?? 0)} is sitting on the couch and watching TV.`);
          }
        }
      } else {
        if (((s as any).loc ?? 0) === 'vanr') {
        } else {
          if (((s as any).loc ?? 0) === 'kuhr') {
            if (((s as any).hour ?? 0) === 17  ||  ((s as any).hour ?? 0) === 7) {
              // TODO-QSP: dynamic text: <<$npcdesc>> is sitting at the kitchen table.
              scene.text(`${((s as any).npcdesc ?? 0)} is sitting at the kitchen table.`);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterBedr(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).npcID ?? 0) !== ((s as any).husID ?? 0)) {
      qspCall(s, 'npcStat', '', ((s as any).husID ?? 0));
    }
  } else {
    if (((s as any).wifID ?? 0) !== '') {
      if (((s as any).npcID ?? 0) !== ((s as any).wifID ?? 0)) {
        qspCall(s, 'npcStat', '', ((s as any).wifID ?? 0));
      }
    }
  }
  if (((s as any).spouseVars ?? 0)?.['drunk_day'] === ((s as any).daystart ?? 0)) {
    if (((s as any).spouseVars ?? 0)?.['hus_strapon'] === 1) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you used an anal plug on <<$x...
        scene.text(`Your ${((s as any).npcRelat ?? 0)} is still passed out drunk after you used an anal plug on ${((s as any).xem ?? 0)}.`);
      } else {
        // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you used an anal plug on <<$x...
        scene.text(`Your ${((s as any).npcRelat ?? 0)} is still passed out drunk after you used an anal plug on ${((s as any).xem ?? 0)}.`);
      }
    } else {
      if (((s as any).spouseVars ?? 0)?.['hus_strapon'] === 2) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you stuck a dildo in <<$xyr>>...
          scene.text(`Your ${((s as any).npcRelat ?? 0)} is still passed out drunk after you stuck a dildo in ${((s as any).xyr ?? 0)} ass.`);
        } else {
          // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you stuck a dildo in <<$xyr>>...
          scene.text(`Your ${((s as any).npcRelat ?? 0)} is still passed out drunk after you stuck a dildo in ${((s as any).xyr ?? 0)} ass.`);
        }
      } else {
        if (((s as any).spouseVars ?? 0)?.['hus_strapon'] === 3) {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you fucked <<$xem>> in the as...
            scene.text(`Your ${((s as any).npcRelat ?? 0)} is still passed out drunk after you fucked ${((s as any).xem ?? 0)} in the ass with a strap-on.`);
          } else {
            // TODO-QSP: dynamic text: Your <<$npcRelat>> is still passed out drunk after you fucked <<$xem>> in the as...
            scene.text(`Your ${((s as any).npcRelat ?? 0)} is still passed out drunk after you fucked ${((s as any).xem ?? 0)} in the ass with a strap-on.`);
          }
        }
      }
    }
    qspCall(s, 'music_actions', 'no_music');
  }
  if (((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).spouseVars ?? 0)?.['drunk_day'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 7) {
      // TODO-QSP: dynamic text: Your <a href="exec: gt 'lover_living', 'talk'"><<$npcRelat>></a> is sleeping on ...
      scene.text(`Your <a href="exec: gt 'lover_living', 'talk'">${((s as any).npcRelat ?? 0)}</a> is sleeping on the bed.`);
    }
    qspCall(s, 'music_actions', 'no_music');
  }
  if (((s as any).husID ?? 0) !== '') {
    qspCall(s, 'lover_living', 'husband_drunk');
  }
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).spouseVars ?? 0)?.['drink'] !== 10) {
    if (((s as any).hour ?? 0) === 7  ||  ((s as any).hour ?? 0) === 17) {
      // TODO-QSP: dynamic text: <a href="exec:gt 'lover_living', 'talk'">Your <<$npcRelat>> is eating at the tab...
      scene.text(`<a href="exec:gt 'lover_living', 'talk'">Your ${((s as any).npcRelat ?? 0)} is eating at the table.</a>`);
    }
  }
  if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['eat_day']) {
    if (((s as any).mc_inventory ?? 0)?.['food_basic'] < 2) {
      scene.text(`<center><b>You need to buy some food so you can cook for your ${((s as any).npcRelat ?? 0)} and yourself.</b></center>`);
    } else {
      scene.actions([
        { label: 'Cook a meal for your <<$npcRelat>> and yourself (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).husID ?? 0), 5);
    (s as any).mc_inventory['food_basic'] = ((s as any).mc_inventory['food_basic'] ?? 0) - (2);
    (s as any).spouseVars['eat_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/kitchen/cook.jpg');
    // TODO-QSP: dynamic text: You prepare a meal for your <<$npcRelat>> and yourself.
    scene.text(`You prepare a meal for your ${((s as any).npcRelat ?? 0)} and yourself.`);
    scene.actions([
      { label: 'Leave the meal', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['drunk_day']) {
    if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).hour ?? 0) > 17  &&  ((s as any).hour ?? 0) <= 22)) {
      // TODO-QSP: dynamic text: Your <a href="exec:gt 'lover_living', 'talk'"><<$npcRelat>></a> is sitting on th...
      scene.text(`Your <a href="exec:gt 'lover_living', 'talk'">${((s as any).npcRelat ?? 0)}</a> is sitting on the couch, watching television.`);
      qspCall(s, 'music_actions', 'not_alone');
    }
  }
  if (((s as any).spouseVars ?? 0)?.['drunk_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 20) {
    qspCall(s, 'music_actions', 'no_music');
  }
  scene.build();
}

function enterHusbandDrunk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== '') {
    // TODO-QSP: exit
  }
  if (((s as any).spouseVars ?? 0)?.['drink'] === 10  &&  ((s as any).hour ?? 0) > 20  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).spouseVars ?? 0)?.['hus_strapon'] === 0) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>> came home very drunk and collapsed on the bed. <<$Xec>> fell asleep...
      scene.text(`${((s as any).boydesc ?? 0)} came home very drunk and collapsed on the bed. ${((s as any).Xec ?? 0)} fell asleep in ${((s as any).xyr ?? 0)} clothes.`);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> came home drunk and fell asleep on the bed.
      scene.text(`${((s as any).boydesc ?? 0)} came home drunk and fell asleep on the bed.`);
    }
    // TODO-QSP: dynamic text: <i>That pig</i>! you think when an idea springs to mind. <i>Maybe I should teach...
    scene.text(`<i>That pig</i>! you think when an idea springs to mind. <i>Maybe I should teach ${((s as any).xem ?? 0)} a lesson so ${((s as any).xe ?? 0)} won't get drunk again</i>.`);
    if (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1) {
      // TODO-QSP: act iif(rand(0, 1) = 0, 'Insert an anal plug', 'Insert a butt plug in <<$xyr>> ass'):
      (s as any).spouseVars['drunk_day'] = ((s as any).daystart ?? 0);
      (s as any).spouseVars['drink'] = 11;
      (s as any).spouseVars['hus_strapon'] = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.img('images/characters/city/husband/sex/h0.jpg');
      if ((!((s as any).analPlugIn ?? 0))) {
        // TODO-QSP: dynamic text: You take an anal plug and put it into <<$xyr>> ass.
        scene.text(`You take an anal plug and put it into ${((s as any).xyr ?? 0)} ass.`);
      } else {
        (s as any).analPlugIn = 0;
        (s as any).analPlugOut = 0;
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: You get your butt plug out and pull down <<$xyr>> pants. You put just a dab of l...
          scene.text(`You get your butt plug out and pull down ${((s as any).xyr ?? 0)} pants. You put just a dab of lube on the tip of the plug, then gently insert it into ${((s as any).xyr ?? 0)} ass.`);
        } else {
          // TODO-QSP: dynamic text: You pull the plug out of you and shove it up <<$xyr>> ass.
          scene.text(`You pull the plug out of you and shove it up ${((s as any).xyr ?? 0)} ass.`);
        }
      }
      // TODO-QSP: dynamic text: <<$boydesc>> moves, but he doesn't wake up.
      scene.text(`${((s as any).boydesc ?? 0)} moves, but he doesn't wake up.`);
      if (((s as any).mc_inventory ?? 0)?.['dildo_small'] > 0) {
        // TODO-QSP: act iif(rand(0, 1) = 0, 'Insert dildo', 'Insert a dildo into <<$xyr>> ass'):
        (s as any).spouseVars['hus_strapon'] = 2;
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
        scene.img('images/characters/city/husband/sex/h1.jpg');
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: You pull out the plug and replace it with a dildo. <<$boydesc>> doesn't even bud...
          scene.text(`You pull out the plug and replace it with a dildo. ${((s as any).boydesc ?? 0)} doesn't even budge as you slowly move the dildo in and out, trying not to wake him up. You notice his cock starts to get rock-hard, and he starts to moan softly in his sleep. His dick starts to throb like he's going to cum. You take his dick in your mouth and don't need to suck on it for long. You swallow his cum before carefully putting his underpants back on.`);
        } else {
          // TODO-QSP: dynamic text: You pull out the plug and stick the dildo up his ass instead, <<$boydesc>> did n...
          scene.text(`You pull out the plug and stick the dildo up his ass instead, ${((s as any).boydesc ?? 0)} did not move. You began to slowly move the dildo trying not to wake him. After a bit, his dick begins to get hard in front of your face, and ${((s as any).boydesc ?? 0)} moaned softly, but didn't wake up. You start to really work the dildo in his ass, stroking it deep in his ass, before too long his cock started to throb. You wrap your lips around his cock, you barely even started to suck his dick when suddenly your mouth is filled with a jet of sperm, you swallow it all and carefully cleaned his penis, then you pulled his pants back up.`);
        }
        qspCall(s, 'arousal', 'bj', 20);
        qspCall(s, 'arousal', 'anal_dildo_give', (-20));
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
      // TODO-QSP: act iif(rand(0, 1) = 0, 'Use the strap-on', 'Wear strap-on'):
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).spouseVars['hus_strapon'] = 3;
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
      scene.img('images/characters/city/husband/sex/h2.jpg');
      // TODO-QSP: dynamic text: You put on the strapon and pull out the butt plug. You gently move the shaft of ...
      scene.text(`You put on the strapon and pull out the butt plug. You gently move the shaft of the strap-on inside his ass and ${((s as any).boydesc ?? 0)} moves, but doesn't wake up. You continue to slowly move it in and out, trying not to wake him. You notice his cock is getting rock-hard and he starts to moan softly in his sleep. Hoping that he won't wake up, you increase your speed and push the entire length of the strap-on into his ass as you start to stroke his dick. Realizing he's not far from cumming, you pull out and finish him by giving him a blowjob. He cums in your mouth and you swallow before carefully putting his underpants back on.`);
      qspCall(s, 'arousal', 'bj', 20);
      qspCall(s, 'arousal', 'anal_strap_give', (-20));
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
    default:
      enterTalk(s, scene);
      break;
  }
}

export const lover_living: LocationDef = {
  name: 'lover_living',
  title: '<<$npcdesc>>',
  region: 'other',
  enter: enter,
};
