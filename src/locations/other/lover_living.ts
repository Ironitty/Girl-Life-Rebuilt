import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).husID ?? 0) !== '') {
    qspCall(s, 'npcStat', '', ((s as any).husID ?? 0));
  } else {
    qspCall(s, 'npcStat', '', ((s as any).wifID ?? 0));
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
    (s as any).age_diff = ((s as any).age ?? 0) - ((s as any).npcAge ?? 0);
  }
  // TODO-QSP: dynamic text: Your <<$npcRelat>> <<$npcdesc>>, <<$h_age>>. It <<$npcheight>> <<$npcbuild>> <<$...
  scene.text(`Your ${((s as any).npcRelat ?? 0)} ${((s as any).npcdesc ?? 0)}, ${((s as any).h_age ?? 0)}. It ${((s as any).npcheight ?? 0)} ${((s as any).npcbuild ?? 0)} ${((s as any).npchair ?? 0)}.`);
  if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
    // TODO-QSP: dynamic text: You have a terrible row with your <<$npcRelat>>.
    scene.text(`You have a terrible row with your ${((s as any).npcRelat ?? 0)}.`);
  } else {
    // TODO-QSP: dynamic text: There are tension between you and your <<$npcRelat>>.
    scene.text(`There are tension between you and your ${((s as any).npcRelat ?? 0)}.`);
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
      // TODO-QSP: dynamic text: You have a normal relationship with your <<$npcRelat>>.
      scene.text(`You have a normal relationship with your ${((s as any).npcRelat ?? 0)}.`);
    } else {
      // TODO-QSP: dynamic text: You have a good relationship with your <<$npcRelat>>.
      scene.text(`You have a good relationship with your ${((s as any).npcRelat ?? 0)}.`);
      // TODO-QSP: dynamic text: You have a great relationship with your <<$npcRelat>>.
      scene.text(`You have a great relationship with your ${((s as any).npcRelat ?? 0)}.`);
    }
  }
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
