import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'npcStat', '', ((s as any).husID ?? 0));
  (s as any).spouseVars['sexday'] = ((s as any).spouseVars['sexday'] ?? 0) + (1);
  (s as any).suprdolg = ((s as any).suprdolg ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).spouseVars ?? 0)?.['husb_debt_event'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['husbSex', 'husb_debt_event'] }]);
  }
  scene.text('<center><b>Bedroom</b></center>');
  if (((s as any).rembedr ?? 0) === 0) {
    scene.img('images/locations/city/residential/apartment/bedr.jpg');
  } else {
    scene.img('images/locations/city/residential/apartment/bedr2.jpg');
  }
  scene.text('You go with your husband into the bedroom.');
  // TODO-QSP: dynamic text: <<$npcdesc>> grabs you and roughly pushes you on the bed and starts to passionat...
  scene.text(`${((s as any).npcdesc ?? 0)} grabs you and roughly pushes you on the bed and starts to passionately kiss you while trying to get rid of your clothes.`);
  // TODO-QSP: dynamic text: Finally, <<$npcdesc>> wins his unequal battle with the straps of your bra.
  scene.text(`Finally, ${((s as any).npcdesc ?? 0)} wins his unequal battle with the straps of your bra.`);
  (s as any).sexrand = Math.floor(Math.random() * 4) + 0;
  if (((s as any).sexrand ?? 0) === 0) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, wrap your lips around my cock."
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, wrap your lips around my cock."`);
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
  }, goto: ['husbsex', 'minet'] },
      { label: 'Not now. Let\'s do another position.', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
  }, goto: ['husbsex', 'variant'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want your ass."
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want your ass."`);
    if (((s as any).sexrand ?? 0) === 2) {
      // TODO-QSP: dynamic text: "Lie down <<$pcs_nickname>> and open your legs for me."
      scene.text(`"Lie down ${((s as any).pcs_nickname ?? 0)} and open your legs for me."`);
      scene.actions([
        { label: 'Open your legs', goto: ['husbsex', 'miss'] },
        { label: 'Let\'s do another position.', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
  }, goto: ['husbsex', 'variant'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I want to take you from behind <<$pcs_nickname>>."
      scene.text(`"I want to take you from behind ${((s as any).pcs_nickname ?? 0)}."`);
      scene.actions([
        { label: 'Doggy style', goto: ['husbsex', 'dog'] },
        { label: 'Let\'s do another position.', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
  }, goto: ['husbsex', 'variant'] },
      ]);
    }
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 2);
  }, goto: ['husbsex', 'anal'] },
      { label: 'Fuck that. Let\'s do something else.', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-1));
  }, goto: ['husbsex', 'variant'] },
    ]);
  }
  scene.build();
}

export const husbSex: LocationDef = {
  name: 'husbSex',
  title: 'Bedroom',
  region: 'other',
  description: ['You go with your husband into the bedroom.'],
  enter: enter,
};
