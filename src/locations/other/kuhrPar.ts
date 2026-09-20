import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'kuhrPar', '');
  (s as any).location_type = 'kitchen';
  (s as any).locclass = 'kitr';
  if (((s as any).fullmorrout ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.actions([
      { label: '<font color = maroon><b>Leave the apartment and go outside</b></font>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'korrPar', '');
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  }
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'pushkin_ballet_init', 'check_for_init');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/kuhrpar.jpg');
  if (qspFunc(s, 'homes_properties', 'can_live_here')) {
    if (((s as any).locat ?? 0)?.['Mother'] === 4) {
      if (((s as any).locat ?? 0)?.['Mom_kitchen_action'] === 1) {
        // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> is here, busy making breakfast.
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} is here, busy making breakfast.`);
      } else {
        if (((s as any).locat ?? 0)?.['Mom_kitchen_action'] === 2) {
          qspCall(s, 'npc_relationship', 'modify', 'A29', 1);
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'stat', '');
          scene.img('images/characters/pavlovsk/resident/mom/gotovka.jpg');
          // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> turns to you. "Please set the table for breakfas...
          scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} turns to you. "Please set the table for breakfast, ${((s as any).pcs_nickname || '')}."`);
          scene.text('You just sigh and grab the dishes.');
          scene.actions([
{ label: 'Set the table for breakfast', goto: ['kuhrPar', ''] },
]);
          return;
        } else {
          if (((s as any).locat ?? 0)?.['Mom_kitchen_action'] === 4) {
            (s as any).mombreak = '';
            // TODO-QSP: dynamic text: Your <a href="exec:gt''mother''"><<$npc_nickname[''A29'']>></a> is here clearing...
            scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mother/u0027, /u0027/u0027); return false;">${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}</a> is here clearing away the breakfast dishes.`);
          } else {
            (s as any).mombreak = ', <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mother/u0027, /u0027/u0027); return false;">mother</a>';
          }
        }
      }
    }
    if (((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15))  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
      // TODO-QSP: dynamic text: <a href="exec:gt''father''">Your stepfather</a><<$mombreak>>, <a href="exec:gt '...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027father/u0027, /u0027/u0027); return false;">Your stepfather</a>${((s as any).mombreak || '')}, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027sister_chat/u0027, /u0027talking/u0027); return false;">Anya</a> and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027brother/u0027, /u0027start/u0027); return false;">Kolka</a> are sitting at the table eating breakfast. You could sit down and join them or just grab something and go.`);
    } else {
      if (((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15))  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
        // TODO-QSP: dynamic text: <a href="exec:gt''father''">Your stepfather</a><<$mombreak>>, and <a href="exec:...
        scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027father/u0027, /u0027/u0027); return false;">Your stepfather</a>${((s as any).mombreak || '')}, and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027brother/u0027, /u0027start/u0027); return false;">Kolka</a> are sitting at the table eating breakfast. It seems your sister is sleeping in again. You could sit down and join them or just grab something and go.`);
      } else {
        if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).locat ?? 0)?.['Anya'] === 12) {
          // TODO-QSP: dynamic text: <a href="exec:gt''father''">Your stepfather</a>, <a href="exec:gt''mother''"><<$...
          scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027father/u0027, /u0027/u0027); return false;">Your stepfather</a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mother/u0027, /u0027/u0027); return false;">${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}</a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027sister_chat/u0027, /u0027talking/u0027); return false;">Anya</a> and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027brother/u0027, /u0027start/u0027); return false;">Kolka</a> are sitting at the table eating dinner. You could sit down and join them or just grab something and go.`);
        } else {
          if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
            // TODO-QSP: dynamic text: <a href="exec:gt''father''">Your stepfather</a>, <a href="exec:gt''mother''"><<$...
            scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027father/u0027, /u0027/u0027); return false;">Your stepfather</a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mother/u0027, /u0027/u0027); return false;">${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}</a> and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027brother/u0027, /u0027start/u0027); return false;">Kolka</a> are sitting at the table eating dinner. You could sit down and join them or just grab something and go.`);
          } else {
            // TODO-QSP: dynamic text: The kitchen is not very impressive, but it has everything your family needs. Sin...
            scene.text(`The kitchen is not very impressive, but it has everything your family needs. Since everyone can't always join for family meals, your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} usually pre-cooks some meals and stores them in the fridge. Of course, you could also just have a snack if you're not that hungry.`);
          }
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Mother'] === 11) {
    // TODO-QSP: dynamic text: Your <a href="exec:gt''mother''"><<$npc_nickname[''A29'']>></a> is busy preparin...
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mother/u0027, /u0027/u0027); return false;">${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}</a> is busy preparing dinner.`);
  } else {
    if (((s as any).locat ?? 0)?.['Mother'] === 13) {
      if (((s as any).locat ?? 0)?.['Anya'] === 23) {
        // TODO-QSP: dynamic text: Your <a href="exec:gt''mother''"><<$npc_nickname[''A29'']>></a> and <a href="exe...
        scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mother/u0027, /u0027/u0027); return false;">${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}</a> and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027sister_chat/u0027, /u0027talking/u0027); return false;">Anya</a> are cleaning up after dinner.`);
      } else {
        // TODO-QSP: dynamic text: Your <a href="exec:gt''mother''"><<$npc_nickname[''A29'']>></a> is busy cleaning...
        scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mother/u0027, /u0027/u0027); return false;">${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}</a> is busy cleaning up after dinner.`);
      }
    } else {
      if (((s as any).locat ?? 0)?.['Mother'] === 23) {
        // TODO-QSP: dynamic text: Your <a href="exec:gt''mother''"><<$npc_nickname[''A29'']>></a> is busy cleaning...
        scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mother/u0027, /u0027/u0027); return false;">${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}</a> is busy cleaning the kitchen.`);
      }
    }
  }
  if (((s as any).locat ?? 0)?.['Stepdad'] === 4) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027father/u0027, /u0027kit/u0027); return false;">Your stepfather</a> is sitting at the table, reading the paper.');
  } else {
    if (((s as any).locat ?? 0)?.['Stepdad'] === 7) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027father/u0027, /u0027kit/u0027); return false;">Your stepfather</a> is setting the table for dinner.');
    } else {
      scene.text('A <a href="#" onclick="window.__gameStore.setState((s) => { (s.newspaperVars ??= {})/u0027dbag/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027newspaper/u0027, /u0027start/u0027); return false;">newspaper</a> lies on the kitchen table.');
    }
  }
  if (((s as any).week ?? 0) === 6  &&  ((s as any).locat ?? 0)?.['Fam_set_month_inGad'] === 1  &&  ((s as any).grandmaQW ?? 0)?.['block'] === 0  &&  ((s as any).hour ?? 0) > 9  &&  ((s as any).hour ?? 0) < 12  &&  qspFunc(s, 'homes_properties', 'can_live_here')) {
    scene.text('Your parents are getting ready to go to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_gphouse/u0027, /u0027to_gadukino/u0027); return false;">Gadukino</a> to visit your great grandparents. You can go with them if you want, or stay home like Anya usually does.');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here')) {
    // TODO-QSP: !{if locat['Mom_athome'] = 0 and locat['sdad_athome'] = 0 and pcs_inhib >= 35 and pcs_horny >= 50:
    // TODO-QSP: end !}
    qspCall(s, 'kit_din', 'parents_meal_options');
    qspCall(s, 'core_library', 'kitchen', 'full');
    scene.actions([
      { label: 'Look for something to masturbate with…', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['selfplay', 'veggie_mast', 'pick_veg'] },
    ]);
  }
  scene.actions([
    { label: 'Return to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (1);
  } },
  ]);
  scene.build();
}

export const kuhrPar: LocationDef = {
  name: 'kuhrPar',
  title: 'Kitchen',
  region: 'other',
  locationType: 'kitchen',
  locclass: 'kitr',
  enter: enter,
};
