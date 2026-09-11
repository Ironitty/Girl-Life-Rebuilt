import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([{ label: 'Continue', goto: ['love', '0'] }]);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([{ label: 'Continue', goto: ['love', '1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['love', '2'] }]);
    }
  }
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_love ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: dynamic text: You start talking about living together. <<$npcdesc>> tells you that <<$xe>> is ...
  scene.text(`You start talking about living together. ${((s as any).npcdesc ?? 0)} tells you that ${((s as any).xe ?? 0)} is not against it, but first ${((s as any).xe ?? 0)} wants you to meet ${((s as any).xyr ?? 0)} parents.`);
  // TODO-QSP: dynamic text: <<$xec>> warns you that <<$xyr>> mother is very demanding and rigorous. <<$npcde...
  scene.text(`${((s as any).xec ?? 0)} warns you that ${((s as any).xyr ?? 0)} mother is very demanding and rigorous. ${((s as any).npcdesc ?? 0)} says that ${((s as any).xe ?? 0)} loves ${((s as any).xyr ?? 0)} mother and does not want to upset her. Therefore, you must look gorgeous, wear a dress from a boutique, be well-groomed with curled hair and use cosmetics only in moderation.`);
  // TODO-QSP: dynamic text: For your next date, if you are ready, <<$npcdesc>> will take you to <<$xyr>> par...
  scene.text(`For your next date, if you are ready, ${((s as any).npcdesc ?? 0)} will take you to ${((s as any).xyr ?? 0)} parents.`);
  scene.actions([
    { label: 'To invite', handler: (st: GameState) => {
    if ((!((s as any).npcGender ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['sexm', 'room'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['lezbsex', 'startloverhome'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterMother(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  // TODO-QSP: dynamic text: <<$npcdesc>> drives you to the home of <<$xyr>> parents. You get out and take th...
  scene.text(`${((s as any).npcdesc ?? 0)} drives you to the home of ${((s as any).xyr ?? 0)} parents. You get out and take the elevator. The door opens after only knocking once. It seems clear that they were waiting for you. You enter the apartment and are greeted by an elderly gray-haired woman dressed in trousers and a shirt. You are told to switch into a pair of slippers and are then led down a hallway into another room where the elderly woman invites you to sit down at a table.`);
  // TODO-QSP: dynamic text: <<$npcdesc>> pulls out a chair for you and you sit down. <<$Xyrc>> mother places...
  scene.text(`${((s as any).npcdesc ?? 0)} pulls out a chair for you and you sit down. ${((s as any).Xyrc ?? 0)} mother places herself in front of the two of you. She looks at you with disgust in her eyes, looking like an overgrown insect, clearly thinking you are not a girl for her ${((s as any).temp_mother_relat ?? 0)}. "So, darling, what do you do for a living?"`);
  if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
    scene.text('"I study at the university."');
  } else {
    if (((s as any).university ?? 0)?.['diploma'] > 0) {
      scene.text('"I graduated from university."');
    }
  }
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed') {
    scene.text('"I am a waitress in a cafe."');
  } else {
    scene.text('"I\'m unemployed."');
  }
  if (((s as any).modelfoto ?? 0)?.['nude'] > 30) {
    ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
    // TODO-QSP: dynamic text: She smiles and says with disgust, "Why are you not telling us about the photos y...
    scene.text(`She smiles and says with disgust, "Why are you not telling us about the photos you shot for these web sites?" She pulls out the nude photos of you and lies them out on the table. "My ${((s as any).temp_mother_relat ?? 0)}, your mother cares about you. This girl is not worthy of you."`);
    // TODO-QSP: dynamic text: <<$npcdesc>> blushes and screams, "<<$pcs_nickname>>, I loved you so, and you… y...
    scene.text(`${((s as any).npcdesc ?? 0)} blushes and screams, "${((s as any).pcs_nickname ?? 0)}, I loved you so, and you… you turn out to be just another dirty whore! Get out!"`);
  } else {
    if (((s as any).kavslut ?? 0) > 0) {
      ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
      // TODO-QSP: dynamic text: She smiles and says with disgust, "<<$temp_mother_relatc>>, everyone knows that ...
      scene.text(`She smiles and says with disgust, "${((s as any).temp_mother_relatc ?? 0)}, everyone knows that this girl is a slut. ${((s as any).pcs_nickname ?? 0)} does not just wait tables, she lets every customer, even the Armenians who go there, tear up every hole she has. She doesn't deserve you!"`);
      // TODO-QSP: dynamic text: <<$npcdesc>> blushes and says, "<<$pcs_nickname>>, I loved you so, and you… you ...
      scene.text(`${((s as any).npcdesc ?? 0)} blushes and says, "${((s as any).pcs_nickname ?? 0)}, I loved you so, and you… you turn out to be just another dirty whore! Get out!"`);
    } else {
      if (((s as any).frot ?? 0) > 3) {
        ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
        // TODO-QSP: dynamic text: She smiles and says with disgust, "<<$temp_mother_relatc>>, this girl is a slut ...
        scene.text(`She smiles and says with disgust, "${((s as any).temp_mother_relatc ?? 0)}, this girl is a slut and lets every pervert who settles down next to her on the subway grope her. She is not worthy of you!"`);
        // TODO-QSP: dynamic text: <<$npcdesc>> blushes and says, "<<$pcs_nickname>>, I loved you so, and you… you ...
        scene.text(`${((s as any).npcdesc ?? 0)} blushes and says, "${((s as any).pcs_nickname ?? 0)}, I loved you so, and you… you turn out to be just another dirty whore! Get out!"`);
      } else {
        if (((s as any).gloryhole ?? 0) > 30) {
          ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
          // TODO-QSP: dynamic text: She smiles and says with disgust, "<<$temp_mother_relatc>>, your girlfriend moon...
          scene.text(`She smiles and says with disgust, "${((s as any).temp_mother_relatc ?? 0)}, your girlfriend moonlights at the sex shop, sucking the members of countless strangers. Do you want a wife like that? She is not worthy of you!"`);
          // TODO-QSP: dynamic text: <<$npcdesc>> blushes and says, "<<$pcs_nickname>>, I loved you so, and you… you ...
          scene.text(`${((s as any).npcdesc ?? 0)} blushes and says, "${((s as any).pcs_nickname ?? 0)}, I loved you so, and you… you turn out to be just another dirty whore! Get out!"`);
        } else {
          ((s as any).npc_love ?? {})[String((s as any).npcID ?? 0)] = 2;
          // TODO-QSP: dynamic text: She looks at her <<$temp_mother_relat>> with tearful eyes and says, "Alright. We...
          scene.text(`She looks at her ${((s as any).temp_mother_relat ?? 0)} with tearful eyes and says, "Alright. Well ${((s as any).temp_mother_relat ?? 0)}, it's your choice. Who am I to interfere with your life? I just gave birth to you, nursed you and helped you grow up. But of course you are free to forget about your mother who loves you and only wishes the best for you. If you insist on keeping her, please do. I certainly don't forbid it. "`);
          // TODO-QSP: dynamic text: <<$npcdesc>> looks down, "Mother, what are you saying? Of course I love you, but...
          scene.text(`${((s as any).npcdesc ?? 0)} looks down, "Mother, what are you saying? Of course I love you, but ${((s as any).pcs_nickname ?? 0)} is also very dear to me."`);
          // TODO-QSP: dynamic text: <<$Xyrc>> mother jumps up, her eyes flashing, "<<$temp_mother_relatc>>, you only...
          scene.text(`${((s as any).Xyrc ?? 0)} mother jumps up, her eyes flashing, "${((s as any).temp_mother_relatc ?? 0)}, you only met her recently, what do you even know about her?"`);
          // TODO-QSP: dynamic text: <<$npcdesc>> takes a long time trying to persuade <<$xyr>> mother and making exc...
          scene.text(`${((s as any).npcdesc ?? 0)} takes a long time trying to persuade ${((s as any).xyr ?? 0)} mother and making excuses. Finally she lets you out of her predatory claws and you're ready to leave.`);
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'dina', 'brodilr');
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_love ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: dynamic text: You start talking about living together. <<$npcdesc>> tells you that <<$xe>> is ...
  scene.text(`You start talking about living together. ${((s as any).npcdesc ?? 0)} tells you that ${((s as any).xe ?? 0)} is not against it, but first ${((s as any).xe ?? 0)} wants you to meet ${((s as any).xyr ?? 0)} friends.`);
  // TODO-QSP: dynamic text: <<$Xec>> tells you that you have to look chic, wear a dress from a boutique, be ...
  scene.text(`${((s as any).Xec ?? 0)} tells you that you have to look chic, wear a dress from a boutique, be well-groomed with curled hair, use cosmetics only in moderation. ${((s as any).Xec ?? 0)} wants ${((s as any).xyr ?? 0)} friends to get green with envy.`);
  // TODO-QSP: dynamic text: For your next date, if you are totally ready <<$npcdesc>> will take you to <<$xy...
  scene.text(`For your next date, if you are totally ready ${((s as any).npcdesc ?? 0)} will take you to ${((s as any).xyr ?? 0)} friends.`);
  scene.actions([
    { label: 'To invite', handler: (st: GameState) => {
    if ((!((s as any).npcGender ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['sexm', 'room'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['lezbsex', 'startloverhome'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterFrends(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).npcGender ?? 0))) {
    (s as any).sexpartkno = 1;
    qspCall(s, 'npcgeneratec', '', 0, '' + qspUntranslated(s, "npcdesc>", { location: "love" }) + '\'s "friend"', Math.floor(Math.random() * 15) + 18);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    qspCall(s, 'npcgeneratec', '', 0, '' + qspUntranslated(s, "npcdesc>", { location: "love" }) + '\'s "friend"', Math.floor(Math.random() * 15) + 18);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
    scene.actions([{ label: 'Continue', goto: ['love', 'frends2'] }]);
  } else {
    scene.text('(Further actions are available.)');
    ((s as any).npc_love ?? {})[String((s as any).npcID ?? 0)] = 2;
    scene.actions([
      { label: 'To invite', goto: ['lezbsex', 'startloverhome'] },
    ]);
  }
  scene.build();
}

function enterFrends2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/husband/sex/z0.jpg');
  if (((s as any).proverka1 ?? 0) === 0  &&  ((s as any).proverka2 ?? 0) === 0  &&  ((s as any).proverka3 ?? 0) === 0  &&  ((s as any).proverka4 ?? 0) === 0  &&  (!((s as any).proverka5 ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 180;
    // TODO-QSP: dynamic text: <<$npcdesc>> drives you to <<$xyr>> friends. You arrive at an apartment and <<$n...
    scene.text(`${((s as any).npcdesc ?? 0)} drives you to ${((s as any).xyr ?? 0)} friends. You arrive at an apartment and ${((s as any).npcdesc ?? 0)} introduces you as his bride to two other guys. You sit down at a table set and talk for a couple of hours. Everybody has fun and after everyone finishes eating and drinking, ${((s as any).npcdesc ?? 0)} invites you to dance, to which you gladly agree. ${((s as any).npcdesc ?? 0)} is already pretty drunk and he's bad at dancing, but still start to grope you, his hands squeezing your buttocks. Soon he runs them under your dress and continues to stroke your ass. He hitches up you skirt so everyone can see your panties. The other guys are sitting on the sofa intently staring at your buttocks. Soon one of them gets up he guys got up from the couch and comes over to you. "You have the best butt I've ever seen. I would like to check it out." he says, and slaps you on the buttocks making you jump. ${((s as any).npcdesc ?? 0)} pulls you to him and tells the other guy "Stop that. She's my girl. You can watch, but you can not touch."`);
  }
  if (((s as any).modelfoto ?? 0)?.['nude'] > 30  &&  (!((s as any).proverka1 ?? 0))) {
    scene.text('"Calm down. I\'ve already seen her naked. The Internet is full of naked pictures of her." the guy says.');
    // TODO-QSP: dynamic text: "Is this true?" asks <<$npcdesc>> turning to you.
    scene.text(`"Is this true?" asks ${((s as any).npcdesc ?? 0)} turning to you.`);
    scene.text('"Yes, I did some naked photoshoots, but I only ever showed of my body. I never fucked anyone." you say');
    if (((s as any).pcs_intel ?? 0) <= 30) {
      (s as any).guy = ((s as any).guy ?? 0) + (2);
      (s as any).picrand = 39;
      ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
      // TODO-QSP: dynamic text: "I don't care! Once everyone has seen you naked you are no better than a whore."...
      scene.text(`"I don't care! Once everyone has seen you naked you are no better than a whore." With these words he throws you on the sofa. You try to get up to leave, but ${((s as any).npcdesc ?? 0)} stops you, "Where are you going, slut? You think you can just mess around with me and then dump me? Well guys, lets pass this whore around." he says, sititng down on the sofa unbuttoning his pants. "Suck" he shouts while pushing your head down to his dick. Having decided that it is better to not argue with three drunken men you take his dick out of his pants and put it into your mouth. The two other guys join in, one sitting down on the couch next to ${((s as any).npcdesc ?? 0)}. He takes out his member and you grasp it with your hand starting to suck both cocks simultaneously. The second guy undresses you and kneels down using his tongue to lick your pussy. The guy sitting on the couch suddenly starts to hiccup as if he is about to vomit and ${((s as any).npcdesc ?? 0)} shouts at him, "Get out of here, before you make a mess." The guy gets up from the couch and rushes to the toilet, his hands covering his mouth.`);
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sexdvoe', 'var'
  } },
      ]);
    } else {
      (s as any).proverka1 = 1;
      // TODO-QSP: dynamic text: You defend yourself for a few minutes trying to tell him, that you didn't do any...
      scene.text(`You defend yourself for a few minutes trying to tell him, that you didn't do anything wrong and that his friends are just jealous. In the end, you manage to convince him, and ${((s as any).npcdesc ?? 0)} agrees with you.`);
      scene.actions([
        { label: 'Further', goto: ['love', 'frends2'] },
      ]);
    }
    return;
  }
  if (((s as any).kavslut ?? 0) > 0  &&  (!((s as any).proverka2 ?? 0))) {
    // TODO-QSP: dynamic text: "I've heard that your little <<$pcs_nickname>> doesn't just wait the tables but ...
    scene.text(`"I've heard that your little ${((s as any).pcs_nickname ?? 0)} doesn't just wait the tables but also lets herself get fucked by the customers. I've even heard some Armenians brag about using her every hole." the boy says`);
    // TODO-QSP: dynamic text: "Is this true?" asks <<$npcdesc>> turning to you. You can't think of anything be...
    scene.text(`"Is this true?" asks ${((s as any).npcdesc ?? 0)} turning to you. You can't think of anything better so you start to cry.`);
    scene.text('"Yes, these freaks raped me several times."');
    if (((s as any).pcs_intel ?? 0) <= 50) {
      (s as any).guy = ((s as any).guy ?? 0) + (2);
      (s as any).picrand = 39;
      ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
      // TODO-QSP: dynamic text: "I don't care. Someone who says that she got raped several times clearly likes i...
      scene.text(`"I don't care. Someone who says that she got raped several times clearly likes it and invites these situations." With these words he throws you on the sofa. You try to get up to leave, but ${((s as any).npcdesc ?? 0)} stops you, "Where are you going, slut? You think you can just mess around with me and then dump me? Well guys, lets pass this whore around." he says, sititng down on the sofa unbuttoning his pants. "Suck" he shouts while pushing your head down to his dick. Having decided that it is better to not argue with three drunken men you take his dick out of his pants and put it into your mouth. The two other guys join in, one sitting down on the couch next to ${((s as any).npcdesc ?? 0)}. He takes out his member and you grasp it with your hand starting to suck both cocks simultaneously. The second guy undresses you and kneels down using his tongue to lick your pussy. The guy sitting on the couch suddenly starts to hiccup as if he is about to vomit and ${((s as any).npcdesc ?? 0)} shouts at him, "Get out of here, before you make a mess." The guy gets up from the couch and rushes to the toilet, his hands covering his mouth.`);
      scene.actions([
        { label: 'Further', goto: ['sexdvoe', 'var'] },
      ]);
    } else {
      (s as any).proverka2 = 1;
      // TODO-QSP: dynamic text: You keep crying for a few minutes about the bastards who raped you and in the en...
      scene.text(`You keep crying for a few minutes about the bastards who raped you and in the end, you manage to convince him and ${((s as any).npcdesc ?? 0)} hugs you and says that he will not allow anyone to hurt you again.`);
      scene.actions([
        { label: 'Further', goto: ['love', 'frends2'] },
      ]);
    }
    return;
  }
  if (((s as any).frot ?? 0) > 3  &&  (!((s as any).proverka3 ?? 0))) {
    scene.text('"You don\'t know who she really is. Everybody knows that this whore lets all the perverts in the subway fuck her in the car right in front of everyone, " says the boy');
    // TODO-QSP: dynamic text: "Is this true?" asks <<$npcdesc>> turning to you.
    scene.text(`"Is this true?" asks ${((s as any).npcdesc ?? 0)} turning to you.`);
    scene.text('"What do you mean? How can you believe that even for a second?" you yell at him squeezing a tear from you eye.');
    if (((s as any).pcs_intel ?? 0) <= 40) {
      (s as any).guy = ((s as any).guy ?? 0) + (2);
      (s as any).picrand = 39;
      ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
      // TODO-QSP: dynamic text: "Shout your mouth, you whore! I believe my friends, when they say they it was yo...
      scene.text(`"Shout your mouth, you whore! I believe my friends, when they say they it was you." With these words he throws you on the sofa. You try to get up to leave, but ${((s as any).npcdesc ?? 0)} stops you, "Where are you going, slut? You think you can just mess around with me and then dump me? Well guys, lets pass this whore around." he says, sititng down on the sofa unbuttoning his pants. "Suck" he shouts while pushing your head down to his dick. Having decided that it is better to not argue with three drunken men you take his dick out of his pants and put it into your mouth. The two other guys join in, one sitting down on the couch next to ${((s as any).npcdesc ?? 0)}. He takes out his member and you grasp it with your hand starting to suck both cocks simultaneously. The second guy undresses you and kneels down using his tongue to lick your pussy. The guy sitting on the couch suddenly starts to hiccup as if he is about to vomit and ${((s as any).npcdesc ?? 0)} shouts at him, "Get out of here, before you make a mess." The guy gets up from the couch and rushes to the toilet, his hands covering his mouth.`);
      scene.actions([
        { label: 'Further', goto: ['sexdvoe', 'var'] },
      ]);
    } else {
      (s as any).proverka3 = 1;
      // TODO-QSP: dynamic text: Deciding that the best defense is offense, you yell at him for a few minutes. In...
      scene.text(`Deciding that the best defense is offense, you yell at him for a few minutes. In the end, you manage to convince him and ${((s as any).npcdesc ?? 0)} begins to soothe you saying that he doesn't blame you, but he had to know.`);
      scene.actions([
        { label: 'Further', goto: ['love', 'frends2'] },
      ]);
    }
    return;
  }
  if (((s as any).gloryhole ?? 0) > 30  &&  (!((s as any).proverka4 ?? 0))) {
    scene.text('"You know, this slut sucks other men\'s cocks in the sex shop.?" the guy asks');
    // TODO-QSP: dynamic text: "Is this true?" asks <<$npcdesc>> turning to you.
    scene.text(`"Is this true?" asks ${((s as any).npcdesc ?? 0)} turning to you.`);
    scene.text('"How can you believe that I would do that?" you cry. "And you\'re a freak! How would you even know, unless you went there yourself?" you start to attack the guy.');
    if (((s as any).pcs_intel ?? 0) <= 60) {
      (s as any).guy = ((s as any).guy ?? 0) + (2);
      (s as any).picrand = 39;
      ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
      // TODO-QSP: dynamic text: "Shut your mouth, you whore! If my friends say it was you I believe them." With ...
      scene.text(`"Shut your mouth, you whore! If my friends say it was you I believe them." With these words he throws you on the sofa. You try to get up to leave, but ${((s as any).npcdesc ?? 0)} stops you, "Where are you going, slut? You think you can just mess around with me and then dump me? Well guys, lets pass this whore around." he says, sititng down on the sofa unbuttoning his pants. "Suck" he shouts while pushing your head down to his dick. Having decided that it is better to not argue with three drunken men you take his dick out of his pants and put it into your mouth. The two other guys join in, one sitting down on the couch next to ${((s as any).npcdesc ?? 0)}. He takes out his member and you grasp it with your hand starting to suck both cocks simultaneously. The second guy undresses you and kneels down using his tongue to lick your pussy. The guy sitting on the couch suddenly starts to hiccup as if he is about to vomit and ${((s as any).npcdesc ?? 0)} shouts at him, "Get out of here, before you make a mess." The guy gets up from the couch and rushes to the toilet, his hands covering his mouth.`);
      scene.actions([
        { label: 'Further', goto: ['sexdvoe', 'var'] },
      ]);
    } else {
      (s as any).proverka4 = 1;
      // TODO-QSP: dynamic text: Deciding that the best defense is offense, you yell at him for a few minutes. In...
      scene.text(`Deciding that the best defense is offense, you yell at him for a few minutes. In the end, you manage to convince him and ${((s as any).npcdesc ?? 0)} begins to soothe you saying that he doesn't blame you, but he had to know.`);
      scene.actions([
        { label: 'Further', goto: ['love', 'frends2'] },
      ]);
    }
    return;
  }
  if (((s as any).film ?? 0) > 2  &&  (!((s as any).proverka5 ?? 0))) {
    scene.text('"You know this slut has done porn movies?" the guy asks');
    // TODO-QSP: dynamic text: "Is this true?" asks <<$npcdesc>> turning to you.
    scene.text(`"Is this true?" asks ${((s as any).npcdesc ?? 0)} turning to you.`);
    scene.text('"Yes, but that was long before I met you. It mad some mistakes when I was younger. I had a very difficult time, but I didn\'t do this for a long time." you start trying to squeeze out a tear.');
    if (((s as any).pcs_intel ?? 0) <= 70  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      (s as any).guy = ((s as any).guy ?? 0) + (2);
      (s as any).picrand = 39;
      ((s as any).npc_rel ?? {})[String((s as any).npcID ?? 0)] = 0;
      // TODO-QSP: dynamic text: "Shout your mouth! Doing porn clearly means you are just another whore." With th...
      scene.text(`"Shout your mouth! Doing porn clearly means you are just another whore." With these words he throws you on the sofa. You try to get up to leave, but ${((s as any).npcdesc ?? 0)} stops you, "Where are you going, slut? You think you can just mess around with me and then dump me? Well guys, lets pass this whore around." he says, sititng down on the sofa unbuttoning his pants. "Suck" he shouts while pushing your head down to his dick. Having decided that it is better to not argue with three drunken men you take his dick out of his pants and put it into your mouth. The two other guys join in, one sitting down on the couch next to ${((s as any).npcdesc ?? 0)}. He takes out his member and you grasp it with your hand starting to suck both cocks simultaneously. The second guy undresses you and kneels down using his tongue to lick your pussy. The guy sitting on the couch suddenly starts to hiccup as if he is about to vomit and ${((s as any).npcdesc ?? 0)} shouts at him, "Get out of here, before you make a mess." The guy gets up from the couch and rushes to the toilet, his hands covering his mouth.`);
      scene.actions([
        { label: 'Further', goto: ['sexdvoe', 'var'] },
      ]);
    } else {
      (s as any).proverka5 = 1;
      // TODO-QSP: dynamic text: You keep explaining that you love him and that you made all these mistakes befor...
      scene.text(`You keep explaining that you love him and that you made all these mistakes before you met him. In the end, you manage to convince him and ${((s as any).npcdesc ?? 0)} hugs you and whispers in your ear "I guess you still remember a couple of tricks… I would like you to show them to me later."`);
      scene.actions([
        { label: 'Further', goto: ['love', 'frends2'] },
      ]);
    }
    return;
  }
  ((s as any).npc_love ?? {})[String((s as any).npcID ?? 0)] = 2;
  // TODO-QSP: dynamic text: "Okay, it's time to go, <<$pcs_nickname>>." says <<$npcdesc>>. You head for the ...
  scene.text(`"Okay, it's time to go, ${((s as any).pcs_nickname ?? 0)}." says ${((s as any).npcdesc ?? 0)}. You head for the exit.`);
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.text('(Further actions are available.)');
  ((s as any).npc_love ?? {})[String((s as any).npcID ?? 0)] = 2;
  scene.actions([
    { label: 'To invite', goto: ['sexm', 'room'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    case 'mother':
      enterMother(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case 'frends':
      enterFrends(s, scene);
      break;
    case 'frends2':
      enterFrends2(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const love: LocationDef = {
  name: 'love',
  title: '"I study at the university."',
  region: 'other',
  enter: enter,
};
