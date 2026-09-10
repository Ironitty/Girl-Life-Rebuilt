import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).pcs_makeup ?? 0) > 1  &&  (((s as any).clothingworntype ?? 0) === 'fashionista_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_dress')  &&  ((s as any).curly ?? 0) > 0) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> looks very excited. <<$Xec>> decides that you are now ready to meet...
        scene.text(`${((s as any).npcdesc ?? 0)} looks very excited. ${((s as any).Xec ?? 0)} decides that you are now ready to meet ${((s as any).xyr ?? 0)} mother.`);
        scene.actions([
          { label: 'Meet the parents', goto: ['love', 'mother'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> examins you and decides that you are ready to meet <<$xyr>> friends...
        scene.text(`${((s as any).npcdesc ?? 0)} examins you and decides that you are ready to meet ${((s as any).xyr ?? 0)} friends.`);
        scene.actions([
          { label: 'Meet <<$xyr>> friends', goto: ['love', 'frends'] },
        ]);
      }
    }
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> looks very excited and suddenly pulls a ring out of a box.
    scene.text(`${((s as any).npcdesc ?? 0)} looks very excited and suddenly pulls a ring out of a box.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> says "<<$pcs_nickname>>. I offer you my hand and heart. Would you m...
    scene.text(`${((s as any).npcdesc ?? 0)} says "${((s as any).pcs_nickname ?? 0)}. I offer you my hand and heart. Would you marry me?"`);
    if (((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
      // TODO-QSP: dynamic text: <<$npcdesc>> has hired a wedding limousine and it's outside waiting for you. Thi...
      scene.text(`${((s as any).npcdesc ?? 0)} has hired a wedding limousine and it's outside waiting for you. This is it, you are getting married today.`);
      scene.actions([
        { label: 'Sit in the limousine', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You get into the limo, and it drives off. Soon you arrive at the wedding, <<$npc...
    scene.text(`You get into the limo, and it drives off. Soon you arrive at the wedding, ${((s as any).npcdesc ?? 0)} is waiting for you as you walk down the aisle.`);
    if ((!((s as any).npcGender ?? 0))) {
      scene.actions([
        { label: 'Marry husband', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'lover_love', 'marry', ((s as any).npcID ?? 0));
    scene.text('The wedding reception takes place at a cafe. There aren\'t many guests since neither you nor the groom have that many friends or family members. There is a lot of congratulations, toasts, merrymaking and crying. By the evening, everybody is drunk and you and your husband stagger into a taxi, which takes you home.');
    scene.actions([
      { label: 'Wedding night', goto: ['husbsex', 'room'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Marry wife', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'lover_love', 'marry', ((s as any).npcID ?? 0));
    scene.text('The wedding reception takes place at a cafe. There aren\'t many guests since neither you nor the bride have that many friends or family members. There is a lot of congratulations, toasts, merrymaking and crying. By the evening, everybody is drunk and you and your wife stagger into a taxi, which takes you home.');
    scene.actions([
      { label: 'Wedding night', goto: ['bedr', ''] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'No (turn <<$xem>> down)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).pregtalk = 0;
    // TODO-QSP: gs 'lover', 'remove_' + $npc_rel_type[$npcID], $npcID
  }, goto: ['homes_properties', 'go_home'] },
      { label: 'Yes', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You agree and put the ring on your finger. <<$npcdesc>> rejoices and happily hug...
    scene.text(`You agree and put the ring on your finger. ${((s as any).npcdesc ?? 0)} rejoices and happily hugs and kisses you.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> says "Now you need to find a wedding dress."
    scene.text(`${((s as any).npcdesc ?? 0)} says "Now you need to find a wedding dress."`);
    scene.actions([
      { label: 'Go looking for the dress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).npc_love[String((s as any).npcID ?? 0)] = 3;
    if ((!((s as any).npcGender ?? 0))) {
      // TODO-QSP: dynamic text: You get into a taxi with your soon to be husband and go to the store to choose a...
      scene.text(`You get into a taxi with your soon to be husband and go to the store to choose a dress. You choose an expensive and luxurious dress. ${((s as any).npcdesc ?? 0)} pays for the purchase.`);
      // TODO-QSP: dynamic text: After a long day you feel tired and ask <<$npcdesc>> to drive you home, warning ...
      scene.text(`After a long day you feel tired and ask ${((s as any).npcdesc ?? 0)} to drive you home, warning him that the next time you'll meet you will get married.`);
    } else {
      // TODO-QSP: dynamic text: You get into a taxi with your soon to be wife and go to the store to choose a dr...
      scene.text(`You get into a taxi with your soon to be wife and go to the store to choose a dress. You choose an expensive and luxurious dress. ${((s as any).npcdesc ?? 0)} pays for the purchase.`);
      // TODO-QSP: dynamic text: After a long day you feel tired and ask <<$npcdesc>> to drive you home, warning ...
      scene.text(`After a long day you feel tired and ask ${((s as any).npcdesc ?? 0)} to drive you home, warning her that the next time you'll meet you will get married.`);
    }
    scene.actions([
      { label: 'Go home', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const lover_love: LocationDef = {
  name: 'lover_love',
  region: 'other',
  enter: enter,
};
