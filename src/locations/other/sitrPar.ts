import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
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
    if (((s as any).locat ?? 0)?.['Kolka'] === 1) {
      scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is sleeping on the sofa.');
    } else {
      if (((s as any).locat ?? 0)?.['Kolka'] === 7) {
        scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is sitting by the table doing his homework.');
      } else {
        if (((s as any).locat ?? 0)?.['Kolka'] === 11) {
          if (((s as any).locat ?? 0)?.['Mother'] === 19  ||  ((s as any).locat ?? 0)?.['Stepdad'] === 10) {
            scene.text('<a href="exec: gs \'npc_relationship\', \'modify\', \'A34\', \'like\', 1 & gt \'brother\', \'start\'">Kolka</a> is sitting in the armchair playing on his phone.');
          } else {
            scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is sitting on the sofa playing video games.');
          }
        }
      }
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
    if (((s as any).month ?? 0) === 1  &&  ((s as any).day ?? 0) === 1) {
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
    } else {
      if (((s as any).locat ?? 0)?.['Mother'] === 24) {
        scene.actions([{ label: 'Continue', goto: ['sitrPar', 'mom_floor_sweeping'] }]);
      } else {
        if (((s as any).locat ?? 0)?.['Mother'] === 19  &&  ((s as any).locat ?? 0)?.['Stepdad'] === 10) {
          // TODO-QSP: dynamic text: As you walk into the living room, you see your <<$npc_nickname['A29']>> and Vlad...
          scene.text(`As you walk into the living room, you see your ${((s as any).npc_nickname ?? 0)?.['A29']} and Vladimir sitting on the couch watching TV.`);
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            scene.actions([{ label: 'Continue', goto: ['sitrPar', 'naked_mom_present'] }]);
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
        } else {
          if (((s as any).locat ?? 0)?.['Mother'] === 19) {
            // TODO-QSP: dynamic text: As you walk into the living room, you see your <a href="exec:gt'mother'"><<$npc_...
            scene.text(`As you walk into the living room, you see your <a href="exec:gt'mother'">${((s as any).npc_nickname ?? 0)?.['A29']}</a> sitting on the couch watching TV.`);
            if (((s as any).clothingworntype ?? 0) === 'nude') {
              scene.actions([{ label: 'Continue', goto: ['sitrPar', 'naked_mom_present'] }]);
            }
          } else {
            if (((s as any).locat ?? 0)?.['Stepdad'] === 10) {
              scene.text('Your <a href="exec:gt \'father\'">stepfather</a> is sitting on the sofa, watching TV.');
            }
          }
        }
      }
    }
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    qspCall(s, 'subkid', '');
    if (((s as any).kid ?? 0) >= 1) {
      if (((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) === 1  &&  ((s as any).pcs_inhib ?? 0) > 30) {
        scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Try out</a> your breast pump');
      } else {
        if (((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) <= 0) {
          scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Unbox</a> your breast pump');
        }
      }
    } else {
      if (((s as any).locat ?? 0)?.['Fam_livingroom'] === 0) {
        if (((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) === 1) {
          scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Try out</a> your breast pump');
        } else {
          if (((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) <= 0) {
            scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Unbox</a> your breast pump');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterMomFloorSweeping(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/mom/uborka1.jpg');
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6) {
    if (((s as any).PSchool ?? 0) === 1) {
      // TODO-QSP: dynamic text: You see your <<$npc_nickname['A29']>> sweeping the floor.
      scene.text(`You see your ${((s as any).npc_nickname ?? 0)?.['A29']} sweeping the floor.`);
      scene.text('She looks up and gives you a disappointed look. "What are you still doing here? Go to school, now!"');
      scene.text('She practically pushes you out of the apartment and closes the door.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_2'] },
      ]);
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.actions([{ label: 'Continue', goto: ['sitrPar', 'naked_mom_present'] }]);
      } else {
        qspCall(s, 'wardrobe', 'school_outfit');
        // TODO-QSP: dynamic text: You see your <<$npc_nickname['A29']>> sweeping the floor.
        scene.text(`You see your ${((s as any).npc_nickname ?? 0)?.['A29']} sweeping the floor.`);
        scene.text('She looks up and gives you a disappointed look. "What are you still doing here and why are you not wearing your uniform? Get changed and go to school, now!"');
        scene.text('She follows you back to your room and watches as you change into your uniform. After that, she practically pushes you out of the apartment and closes the door.');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_2'] },
        ]);
      }
    }
  } else {
    // TODO-QSP: dynamic text: You see your <<$npc_nickname['A29']>> sweeping the floor. She's so intent on her...
    scene.text(`You see your ${((s as any).npc_nickname ?? 0)?.['A29']} sweeping the floor. She's so intent on her cleaning that she doesn't even notice you.`);
    scene.actions([
      { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
    ]);
  }
  scene.build();
}

function enterNakedMomPresent(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/body/nude1.jpg');
  // TODO-QSP: dynamic text: Not wearing any clothing, you're frightened to see your <<$npc_nickname['A29']>>...
  scene.text(`Not wearing any clothing, you're frightened to see your ${((s as any).npc_nickname ?? 0)?.['A29']} in the living room and leave as quickly as possible.`);
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSofa(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'sitrPar', 'sofa');
  qspCall(s, 'family_schedule', '');
  scene.img('images/locations/pavlovsk/resident/apartment/home/sofa.jpg');
  scene.text('<center>A small sofa bed, when not folded out into a bed, is just big enough for you to curl up on and take a nap.</center>');
  if (((s as any).locat ?? 0)?.['Mother'] === 24) {
    scene.actions([{ label: 'Continue', goto: ['sitrPar', 'mom_floor_sweeping'] }]);
  } else {
    if (((s as any).locat ?? 0)?.['Kolka'] === 1) {
      scene.text('<a href="exec:gt \'brother\', \'start\'">Kolka</a> is sleeping on the sofa. I should leave now.');
    } else {
      qspCall(s, 'library_functions', 'set_home_read_acts');
      if (((s as any).locat ?? 0)?.['Fam_livingroom'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
        scene.text('<br>There is a porn magazine under the sofa cushions.');
        qspCall(s, 'library_functions', 'set_read_porn_act');
        if (((s as any).pcs_horny ?? 0) >= 50) {
          scene.actions([
            { label: 'Masturbate', goto: ['selfplay', 'start'] },
          ]);
        }
      }
      if (((s as any).locat ?? 0)?.['Fam_livingroom'] === 0) {
        // TODO-QSP: act 'Take a nap (1:00)': gs 'sleep_simple', 'nap'
      }
      scene.actions([
        { label: 'Watch TV', goto: ['TV', 'pav'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['sitrPar', ''] },
  ]);
  scene.build();
}

function enterTVfam(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 41) + 20);
  (s as any).temp = Math.floor(Math.random() * 3) + 0;
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/home/familytv.jpg');
  if ((!((s as any).temp ?? 0))) {
    scene.text('You continue to watch TV with the family. Everyone seems very engrossed in the program and almost never says anything, though Kolka occasionally makes a crack about what\'s happening, only to be shushed by Vlad or your mother.');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.text('You continue to watch TV with the family. Your parents seem to enjoy the program, but Kolka can barely contain the fact that he would rather be doing something else.');
    } else {
      if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
        scene.text('You continue to watch TV with the family, although your mother continues to ignore your presence and instead spends more time telling Kolka and Vlad to stop fooling around.');
      } else {
        // TODO-QSP: dynamic text: You continue to watch TV with the family. Your <<$npc_nickname['A29']>> seems ha...
        scene.text(`You continue to watch TV with the family. Your ${((s as any).npc_nickname ?? 0)?.['A29']} seems happy that the family are spending time together, even when she has to stop Kolka and Vlad from fooling around.`);
      }
    }
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
  scene.build();
}

function enterTVend(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A28', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A29', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 1);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/home/familytv.jpg');
  scene.text('Once the show is over, Vladimir turns the TV off before he gets up and stretches. He then turns and walks out of the room, likely heading to bed.');
  scene.text('Your mother also gets up. "You should go to bed, or at least go to your room so your brother can get his rest."');
  scene.text('She then turns to Kolka. "Don\'t even think of staying up late. Go to bed."');
  scene.text('She quickly ushers you out of the room. As you walk out, you see Kolka putting his pillow and sheet on the couch.');
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mom_floor_sweeping':
      enterMomFloorSweeping(s, scene);
      break;
    case 'naked_mom_present':
      enterNakedMomPresent(s, scene);
      break;
    case 'sofa':
      enterSofa(s, scene);
      break;
    case 'TVfam':
      enterTVfam(s, scene);
      break;
    case 'TVend':
      enterTVend(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sitrPar: LocationDef = {
  name: 'sitrPar',
  title: 'Living Room',
  region: 'other',
  locationType: 'private',
  locclass: 'livingr',
  enter: enter,
};
