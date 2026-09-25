import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).pcs_makeup ?? 0) > 1  &&  (((s as any).clothingworntype ?? 0) === 'fashionista_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_dress')  &&  ((s as any).curly ?? 0) > 0) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text(`${((s as any).npcdesc ?? '')} looks very excited. ${((s as any).Xec ?? '')} decides that you are now ready to meet ${((s as any).xyr ?? '')} mother.`);
        scene.actions([
          { label: 'Meet the parents', goto: ['love', 'mother'] },
        ]);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
          scene.text(`${((s as any).npcdesc ?? '')} examins you and decides that you are ready to meet ${((s as any).xyr ?? '')} friends.`);
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Meet ' + String(((s as any).xyr ?? '') ?? '') + ' friends', goto: ['love', 'frends'] },
          ]);
        }
      }
    }
  } else {
    if (((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.text(`${((s as any).npcdesc ?? '')} looks very excited and suddenly pulls a ring out of a box.`);
      scene.text(`${((s as any).npcdesc ?? '')} says "${((s as any).pcs_nickname ?? '')}. I offer you my hand and heart. Would you marry me?"`);
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'No (turn ' + String(((s as any).xem ?? '') ?? '') + ' down)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pregtalk = 0;
    qspCall(st, 'lover', '', 'remove_' + (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0), ((st as any).npcID ?? 0));
    qspGoto(st, 'homes_properties', 'go_home');
  } },
        { label: 'Yes', handler: (st: GameState) => {
    scene.text(`You agree and put the ring on your finger. ${((st as any).npcdesc ?? '')} rejoices and happily hugs and kisses you.`);
    scene.text(`${((st as any).npcdesc ?? '')} says "Now you need to find a wedding dress."`);
    scene.actions([
      { label: 'Go looking for the dress', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).npc_love = (st as any).npc_love ?? {})[String((st as any).npcID ?? 0)] = 3;
    if ((!((st as any).npcGender ?? 0))) {
      scene.text(`You get into a taxi with your soon to be husband and go to the store to choose a dress. You choose an expensive and luxurious dress. ${((st as any).npcdesc ?? '')} pays for the purchase.`);
      scene.text(`After a long day you feel tired and ask ${((st as any).npcdesc ?? '')} to drive you home, warning him that the next time you'll meet you will get married.`);
    } else {
      scene.text(`You get into a taxi with your soon to be wife and go to the store to choose a dress. You choose an expensive and luxurious dress. ${((st as any).npcdesc ?? '')} pays for the purchase.`);
      scene.text(`After a long day you feel tired and ask ${((st as any).npcdesc ?? '')} to drive you home, warning her that the next time you'll meet you will get married.`);
    }
    scene.actions([
      { label: 'Go home', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
        scene.text(`${((s as any).npcdesc ?? '')} has hired a wedding limousine and it's outside waiting for you. This is it, you are getting married today.`);
        scene.actions([
          { label: 'Sit in the limousine', handler: (st: GameState) => {
    scene.text(`You get into the limo, and it drives off. Soon you arrive at the wedding, ${((st as any).npcdesc ?? '')} is waiting for you as you walk down the aisle.`);
    if ((!((st as any).npcGender ?? 0))) {
      scene.actions([
        { label: 'Marry husband', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).npcID ?? 0)]; enterMarry(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('The wedding reception takes place at a cafe. There aren\'t many guests since neither you nor the groom have that many friends or family members. There is a lot of congratulations, toasts, merrymaking and crying. By the evening, everybody is drunk and you and your husband stagger into a taxi, which takes you home.');
    scene.actions([
      { label: 'Wedding night', goto: ['husbsex', 'room'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Marry wife', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).npcID ?? 0)]; enterMarry(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    }
  }
  scene.build();
}

function enterMarry(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== ''  ||  ((s as any).wifID ?? 0) !== '') {
    alert('You are already married, this should not trigger!');
  } else {
    if (((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0  ||  ((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3) {
      qspCall(s, 'lover', 'add_husband', ((s as any).locArgs?.[1] ?? 0));
      ((s as any).stat = (s as any).stat ?? {})['boyfriends_current'] = ((s as any).stat['boyfriends_current'] ?? 0) - (1);
      ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
    } else {
      qspCall(s, 'lover', 'add_wife', ((s as any).locArgs?.[1] ?? 0));
      ((s as any).stat = (s as any).stat ?? {})['girlfriends_current'] = ((s as any).stat['girlfriends_current'] ?? 0) - (1);
      ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
    }
    ((s as any).spouseVars = (s as any).spouseVars ?? {})['marry_day'] = ((s as any).daystart ?? 0);
    ((s as any).spouseVars = (s as any).spouseVars ?? {})['eat_day'] = ((s as any).daystart ?? 0);
    ((s as any).spouseVars = (s as any).spouseVars ?? {})['wash_day'] = ((s as any).daystart ?? 0);
    ((s as any).spouseVars = (s as any).spouseVars ?? {})['clean_day'] = ((s as any).daystart ?? 0);
    ((s as any).spouseVars = (s as any).spouseVars ?? {})['men_fucked_before'] = (((s as any).stat ?? 0)?.['men_fucked']);
    ((s as any).spouseVars = (s as any).spouseVars ?? {})['women_fucked_before'] = (((s as any).stat ?? 0)?.['women_fucked']);
    (s as any).PRinStyle = 1;
    (s as any).PRinStyle2 = 1;
  }
  scene.build();
}

function enterDivorce(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== '') {
    qspCall(s, 'lover', 'remove_husband');
  } else {
    if (((s as any).wifID ?? 0) !== '') {
      qspCall(s, 'lover', 'remove_wife');
    } else {
      return;
    }
  }
  (s as any).divorced = ((s as any).divorced ?? 0) + (1);
  if (((s as any).PRinStyle2 ?? 0) === 1) {
    (s as any).PRinStyle = 0;
    (s as any).PRinStyle2 = 0;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'marry':
      enterMarry(s, scene);
      break;
    case 'divorce':
      enterDivorce(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lover_love: LocationDef = {
  name: 'lover_love',
  region: 'other',
  enter: enter,
};
