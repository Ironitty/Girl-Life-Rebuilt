import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'sitrPar', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'family_schedule', '');
  scene.text('<center><b>Living Room</b></center>');
  if (((s as any).locat ?? 0)?.['Mother'] === 19  &&  ((s as any).locat ?? 0)?.['Stepdad'] === 10) {
    scene.img('images/locations/pavlovsk/resident/apartment/home/momvladtv.jpg');
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
  }
  if (((s as any).locat ?? 0)?.['Kolka'] !== 1) {
    scene.actions([
      { label: 'Sit on the sofa', goto: ['sitrPar', 'sofa'] },
    ]);
  }
  scene.text('');
  scene.text('The living room has a <a href="exec:gt \'TV\',\'pav\'">TV</a> near the window. In front of the TV is a <a href="exec:gt \'sitrPar\',\'sofa\'">sofa bed</a> on which your brother sleeps at night. A large tapestry covers one wall, while the other wall has several shelves on it, stocked with books and other things.');
  if (((s as any).locat ?? 0)?.['Fam_livingroom'] === 0  &&  ((s as any).locat ?? 0)?.['Mother'] !== 24  &&  ((s as any).locat ?? 0)?.['Mother'] !== 19) {
    scene.text('No one else is here right now, so you\'re free to use the room how you like.');
    qspCall(s, 'exercise', 'start');
  }
  if (((s as any).locat ?? 0)?.['Kolka'] === 2  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_morning'] === ((s as any).daystart ?? 0)) {
    scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is getting ready for school.');
  } else {
    scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is sleeping on the sofa.');
    if (((s as any).locat ?? 0)?.['Kolka'] === 7) {
      scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is sitting by the table doing his homework.');
    } else {
      if (((s as any).locat ?? 0)?.['Mother'] === 19  ||  ((s as any).locat ?? 0)?.['Stepdad'] === 10) {
        scene.text('<a href="exec: gs \'npc_relationship\', \'modify\', \'A34\', \'like\', 1 & gt \'brother\', \'start\'">Kolka</a> is sitting in the armchair playing on his phone.');
      } else {
        scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is sitting on the sofa playing video games.');
      }
    }
    if (((s as any).month ?? 0) === 12  &&  ((s as any).day ?? 0) >= 20) {
      scene.text('A Christmas tree stands next to the TV, decorated with tinsel garlands and other ornaments.');
    }
    if (((s as any).month ?? 0) === 12  &&  ((s as any).day ?? 0) === 31  &&  ((s as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Celebrate the New Year with your family', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', 10);
    qspCall(s, 'npc_relationship', 'modify', 'A28', 10);
    qspCall(s, 'npc_relationship', 'modify', 'A33', 10);
    qspCall(s, 'npc_relationship', 'modify', 'A34', 10);
    qspCall(s, 'money', 'earn', 5000);
    (s as any).minut = ((s as any).minut ?? 0) + ((25 - ((s as any).hour ?? 0)) * 60 - ((s as any).minut ?? 0));
    qspCall(s, 'mood', 'raise', 'huge');
    qspCall(s, 'food', 'large_meal_stats');
    qspCall(s, 'stat', '');
    scene.text('You sit at the festive table laid in front of the TV and celebrate the New Year with your family, the TV providing some background noise. At the table, people strike up a conversation and common problems are forgotten as everyone has fun talking to each other.');
    // TODO-QSP: dynamic text: At midnight, everyone wishes one another a happy New Year and enjoys the champag...
    scene.text(`At midnight, everyone wishes one another a happy New Year and enjoys the champagne and fireworks outside as your ${((s as any).npc_nickname ?? 0)?.['A29']} gives you an envelope with a greeting card and ${qspFunc(s, 'money', 'string_profit', 5000)}.`);
    scene.text('You continue to watch TV and enjoy the champagne and company of your family, but everyone eventually grows tired and they go to bed, one by one.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['Mother'] === 24) {
        scene.actions([{ label: 'Continue', goto: ['sitrPar', 'mom_floor_sweeping'] }]);
      } else {
        // TODO-QSP: dynamic text: As you walk into the living room, you see your <<$npc_nickname['A29']>> and Vlad...
        scene.text(`As you walk into the living room, you see your ${((s as any).npc_nickname ?? 0)?.['A29']} and Vladimir sitting on the couch watching TV.`);
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          scene.actions([{ label: 'Continue', goto: ['sitrPar', 'naked_mom_present'] }]);
        }
        if (((s as any).locat ?? 0)?.['Mother'] === 19) {
          // TODO-QSP: dynamic text: As you walk into the living room, you see your <a href="exec:gt'mother'"><<$npc_...
          scene.text(`As you walk into the living room, you see your <a href="exec:gt'mother'">${((s as any).npc_nickname ?? 0)?.['A29']}</a> sitting on the couch watching TV.`);
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            scene.actions([{ label: 'Continue', goto: ['sitrPar', 'naked_mom_present'] }]);
          }
        } else {
          scene.text('Your <a href="exec:gt \'father\'">stepfather</a> is sitting on the sofa, watching TV.');
        }
        if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          qspCall(s, 'subkid', '');
          if (((s as any).kid ?? 0) >= 1) {
            if (((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) === 1  &&  ((s as any).pcs_inhib ?? 0) > 30) {
              scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Try out</a> your breast pump');
            } else {
              scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Unbox</a> your breast pump');
            }
          } else {
            if (((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) === 1) {
              scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Try out</a> your breast pump');
            } else {
              scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Unbox</a> your breast pump');
            }
          }
        }
        scene.actions([
          { label: 'Join them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/home/familytv.jpg');
    if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
      // TODO-QSP: dynamic text: You move over to join them, your <<$npc_nickname['A29']>> offering you only a si...
      scene.text(`You move over to join them, your ${((s as any).npc_nickname ?? 0)?.['A29']} offering you only a silent, frosty glare as you take a seat on the couch. Vlad barely even glances at you before he goes back to watching TV.`);
    } else {
      // TODO-QSP: dynamic text: You move over to join them, and your <<$npc_nickname['A29']>> scoots away from V...
      scene.text(`You move over to join them, and your ${((s as any).npc_nickname ?? 0)?.['A29']} scoots away from Vladimir and pats the spot between her and him. You take a seat between them, Vlad barely even glancing at you before he goes back to watching TV.`);
      scene.text('Your mother pats you on the shoulder before returning her attention to the TV, apparently happy the family is spending time together.');
    }
    if ((((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) >= 45)  ||  ((s as any).hour ?? 0) >= 22) {
      scene.actions([
        { label: 'Finish watching', goto: ['sitrPar', 'TVend'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep watching', goto: ['sitrPar', 'TVfam'] },
      ]);
    }
    scene.actions([
      { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Eat some leftovers at the festive table', handler: (st: GameState) => {
    (s as any).frost = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (8);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/leftovers.jpg');
    scene.text('You finish the leftovers remaining on the table from the holidays.');
    scene.actions([
      { label: 'Get up from the table', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['sitrPar', ''] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

export const sitrPar: LocationDef = {
  name: 'sitrPar',
  title: 'Living Room',
  region: 'other',
  locationType: 'private',
  locclass: 'livingr',
  description: ['No one else is here right now, so you\'re free to use the room how you like.'],
  enter: enter,
};
