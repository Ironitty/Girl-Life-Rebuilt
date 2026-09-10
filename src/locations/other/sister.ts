import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sisboyparty_day ?? 0) + 1 === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 18  &&  ((s as any).sisboypartyQW ?? 0) === 1) {
    if (((s as any).sisboyparty ?? 0) === 1) {
      (s as any).sisboyparty = (-1);
    }
    if (((s as any).sisboyparty ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).sisboyparty = (-1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_7.jpg');
      // TODO-QSP: 'You forgot to go to Rex''s birthday party, but brush it off. ' + $OpenInnerThought + 'Oh well. Hope...
      return;
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A33'] < 20) {
    scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma1.jpg');
    scene.text('"What do you want? Fuck off!" Anya and her friends point and laugh at you until you leave them alone.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma2.jpg');
    scene.text('Anya and some of her friends are dressed up and organizing themselves before going to the party. Anya sees you and waves at you. "Come on, I was starting to wonder if you were going to show up."');
    qspCall(s, 'sister', 'partyanswer', 'anya');
    if (((s as any).npc_rel ?? 0)?.['A33'] >= 70  &&  ((s as any).week ?? 0) === 5  &&  ((s as any).odd_week ?? 0) === 1  &&  (((s as any).sisterQW ?? 0)?.['party'] === 0  ||  ((s as any).sisterQW ?? 0)?.['party'] === 2)) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      if (((s as any).npc_rel ?? 0)?.['A57'] >= 80) {
        scene.img('images/characters/pavlovsk/resident/reks/reks.jpg');
        scene.text('Anya and her friends are dressed up and hanging out, but look like they\'re about to leave and go somewhere.');
        qspCall(s, 'sister', 'partyanswer', 'rex');
      } else {
        scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma2.jpg');
        scene.text('Anya and her friends are dressed up and hanging out, but look like they\'re about to leave and go somewhere.');
        // TODO-QSP: dynamic text: Your sister sees you and waves you over. "Hey <<$pcs_nickname>>! We're going to ...
        scene.text(`Your sister sees you and waves you over. "Hey ${((s as any).pcs_nickname ?? 0)}! We're going to a party at Rex's place. Want to come with us?"`);
        qspCall(s, 'sister', 'partyanswer', 'anya');
      }
    } else {
      scene.img('images/characters/pavlovsk/resident/anya/community/anya.jpg');
      // TODO-QSP: dynamic text: Anya sits with her friends, drinking beer. "Hey <<$pcs_nickname>>!" Anya smiles....
      scene.text(`Anya sits with her friends, drinking beer. "Hey ${((s as any).pcs_nickname ?? 0)}!" Anya smiles. "Want a beer?"`);
      qspCall(s, 'willpower', 'drink', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline and move along [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline and move along', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
      scene.actions([
        { label: 'Drink beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'npc_relationship', 'modify', 'A33', 5);
    qspCall(s, 'drugs', 'alcohol', 'beer', 3);
    qspCall(s, 'stat', '');
    if (((s as any).AniaFrends ?? 0) === 0) {
      (s as any).AniaFrends = 1;
      scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma1.jpg');
      scene.text('You meet Anya\'s friends, who are all her former classmates. There\'s the small and nimble Lusya, the ditzy Ira, a tall athletic guy whom everyone calls "Rex" and a lanky, red-haired guy named Roma. After the introductions, you sit down with them, drinking beer and chatting with Anya and her friends.');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sister', 'scene1'] }]);
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

export const sister: LocationDef = {
  name: 'sister',
  title: 'Anya',
  region: 'other',
  description: ['"What do you want? Fuck off!" Anya and her friends point and laugh at you until you leave them alone.'],
  enter: enter,
};
