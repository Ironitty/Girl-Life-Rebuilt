import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([{ label: 'Continue', goto: ['love', '0'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['love', '1'] }]);
    scene.actions([{ label: 'Continue', goto: ['love', '2'] }]);
  }
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_love[$npcID] = 1;
  // TODO-QSP: dynamic text: You start talking about living together. <<$npcdesc>> tells you that <<$xe>> is ...
  scene.text(`You start talking about living together. ${((s as any).npcdesc ?? 0)} tells you that ${((s as any).xe ?? 0)} is not against it, but first ${((s as any).xe ?? 0)} wants you to meet ${((s as any).xyr ?? 0)} parents.`);
  // TODO-QSP: dynamic text: <<$xec>> warns you that <<$xyr>> mother is very demanding and rigorous. <<$npcde...
  scene.text(`${((s as any).xec ?? 0)} warns you that ${((s as any).xyr ?? 0)} mother is very demanding and rigorous. ${((s as any).npcdesc ?? 0)} says that ${((s as any).xe ?? 0)} loves ${((s as any).xyr ?? 0)} mother and does not want to upset her. Therefore, you must look gorgeous, wear a dress from a boutique, be well-groomed with curled hair and use cosmetics only in moderation.`);
  // TODO-QSP: dynamic text: For your next date, if you are ready, <<$npcdesc>> will take you to <<$xyr>> par...
  scene.text(`For your next date, if you are ready, ${((s as any).npcdesc ?? 0)} will take you to ${((s as any).xyr ?? 0)} parents.`);
  scene.actions([
    { label: 'To invite', handler: (st: GameState) => {
    if (((s as any).npcGender ?? 0) === 0) {
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
    scene.text('"I graduated from university."');
  }
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed') {
    scene.text('"I am a waitress in a cafe."');
  } else {
    scene.text('"I\'m unemployed."');
  }
  if (((s as any).modelfoto ?? 0)?.['nude'] > 30) {
    (s as any).npc_rel[$npcID] = 0;
    // TODO-QSP: dynamic text: She smiles and says with disgust, "Why are you not telling us about the photos y...
    scene.text(`She smiles and says with disgust, "Why are you not telling us about the photos you shot for these web sites?" She pulls out the nude photos of you and lies them out on the table. "My ${((s as any).temp_mother_relat ?? 0)}, your mother cares about you. This girl is not worthy of you."`);
    // TODO-QSP: dynamic text: <<$npcdesc>> blushes and screams, "<<$pcs_nickname>>, I loved you so, and you… y...
    scene.text(`${((s as any).npcdesc ?? 0)} blushes and screams, "${((s as any).pcs_nickname ?? 0)}, I loved you so, and you… you turn out to be just another dirty whore! Get out!"`);
  } else {
    (s as any).npc_rel[$npcID] = 0;
    // TODO-QSP: dynamic text: She smiles and says with disgust, "<<$temp_mother_relatc>>, everyone knows that ...
    scene.text(`She smiles and says with disgust, "${((s as any).temp_mother_relatc ?? 0)}, everyone knows that this girl is a slut. ${((s as any).pcs_nickname ?? 0)} does not just wait tables, she lets every customer, even the Armenians who go there, tear up every hole she has. She doesn't deserve you!"`);
    // TODO-QSP: dynamic text: <<$npcdesc>> blushes and says, "<<$pcs_nickname>>, I loved you so, and you… you ...
    scene.text(`${((s as any).npcdesc ?? 0)} blushes and says, "${((s as any).pcs_nickname ?? 0)}, I loved you so, and you… you turn out to be just another dirty whore! Get out!"`);
    if (((s as any).frot ?? 0) > 3) {
      (s as any).npc_rel[$npcID] = 0;
      // TODO-QSP: dynamic text: She smiles and says with disgust, "<<$temp_mother_relatc>>, this girl is a slut ...
      scene.text(`She smiles and says with disgust, "${((s as any).temp_mother_relatc ?? 0)}, this girl is a slut and lets every pervert who settles down next to her on the subway grope her. She is not worthy of you!"`);
      // TODO-QSP: dynamic text: <<$npcdesc>> blushes and says, "<<$pcs_nickname>>, I loved you so, and you… you ...
      scene.text(`${((s as any).npcdesc ?? 0)} blushes and says, "${((s as any).pcs_nickname ?? 0)}, I loved you so, and you… you turn out to be just another dirty whore! Get out!"`);
    } else {
      (s as any).npc_rel[$npcID] = 0;
      // TODO-QSP: dynamic text: She smiles and says with disgust, "<<$temp_mother_relatc>>, your girlfriend moon...
      scene.text(`She smiles and says with disgust, "${((s as any).temp_mother_relatc ?? 0)}, your girlfriend moonlights at the sex shop, sucking the members of countless strangers. Do you want a wife like that? She is not worthy of you!"`);
      // TODO-QSP: dynamic text: <<$npcdesc>> blushes and says, "<<$pcs_nickname>>, I loved you so, and you… you ...
      scene.text(`${((s as any).npcdesc ?? 0)} blushes and says, "${((s as any).pcs_nickname ?? 0)}, I loved you so, and you… you turn out to be just another dirty whore! Get out!"`);
      (s as any).npc_love[$npcID] = 2;
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
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'dina', 'brodilr');
  } },
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const love: LocationDef = {
  name: 'love',
  title: '"I study at the university."',
  region: 'other',
  enter: enter,
};
