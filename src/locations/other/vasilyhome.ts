import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'vasilyhome', 'home');
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if ((!((s as any).shgopsex_init ?? 0))) {
    qspCall(s, 'gopsex', 'settings');
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You\'re at the door to the Shulgin apartment.');
  scene.actions([
    { label: 'Knock on door', handler: (st: GameState) => {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
    if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 16) {
      scene.text('You knock on the door, but no one comes to answer. It seems like nobody is home.');
      if (((s as any).npc_rel ?? 0)?.['A112'] >= 70) {
        scene.text('You could still enter with the key that Sergey gave you.');
        // TODO-QSP: act 'Unlock the door and enter': gt 'vasilyhome', 'hallway'
      }
    } else {
      scene.img('images/characters/shared/headshots_main/big112.jpg');
      // TODO-QSP: dynamic text: When you knock on the door, <<$serg_obr>> Sergey answers it.
      scene.text(`When you knock on the door, ${((s as any).serg_obr ?? 0)} Sergey answers it.`);
      // TODO-QSP: dynamic text: "Oh, hello <<$pcs_nickname>>," he shrugs. "If you're looking for Vasily, he's no...
      scene.text(`"Oh, hello ${((s as any).pcs_nickname ?? 0)}," he shrugs. "If you're looking for Vasily, he's not here, and I don't know when he'll be back."`);
      if (((s as any).npc_rel ?? 0)?.['A112'] >= 50) {
        scene.text('"You can come in and wait for him if you want," he offers.');
        // TODO-QSP: act 'Enter': gt 'vasilyhome', 'hallway'
      }
      if ((((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)  &&  ((s as any).hour ?? 0) >= 20) {
        scene.img('images/characters/shared/headshots_main/big112.jpg');
        // TODO-QSP: dynamic text: When you knock on the door, <<$serg_obr>> Sergey answers it.
        scene.text(`When you knock on the door, ${((s as any).serg_obr ?? 0)} Sergey answers it.`);
        // TODO-QSP: dynamic text: "Oh, hello <<$pcs_nickname>>," he shrugs. "If you're looking for Vasily, he's no...
        scene.text(`"Oh, hello ${((s as any).pcs_nickname ?? 0)}," he shrugs. "If you're looking for Vasily, he's not here. He's probably at the disco with everyone else."`);
        if (((s as any).npc_rel ?? 0)?.['A112'] >= 50) {
          scene.text('"You can come in and wait for him if you want," he offers.');
          // TODO-QSP: act 'Enter': gt 'vasilyhome', 'hallway'
        }
      } else {
        scene.text('You move your hand to knock on the door, but stop yourself. It\'s too late for a visit; you\'d wake everyone up!');
        if (((s as any).npc_rel ?? 0)?.['A112'] >= 70) {
          scene.text('You could use the key that Sergey gave you to enter the apartment quietly.');
          // TODO-QSP: act 'Unlock the door and enter': gt 'vasilyhome', 'hallway'
        }
        if (((s as any).hour ?? 0) >= 5  &&  ((s as any).hour ?? 0) < 10) {
          scene.text('You move your hand to knock on the door, but stop yourself. It\'s too early and they won\'t be out of bed yet.');
          if (((s as any).npc_rel ?? 0)?.['A112'] >= 70) {
            scene.text('You could use the key that Sergey gave you to enter the apartment quietly.');
            // TODO-QSP: act 'Unlock the door and enter': gt 'vasilyhome', 'hallway'
          }
        } else {
          scene.text('The door is opened by Vasily, who looks at you for a second before he stands aside to let you in.');
          scene.actions([
            { label: 'Enter', goto: ['vasilyhome', 'hallway'] },
          ]);
        }
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_3'] },
        ]);
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_3'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

export const vasilyhome: LocationDef = {
  name: 'vasilyhome',
  title: 'Hallway',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'bedr',
  description: ['You\'re at the door to the Shulgin apartment.'],
  enter: enter,
};
