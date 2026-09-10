import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPavLakeNudeNudist(s: GameState, scene: SceneBuilder): void {
  (s as any).voyeurism = ((s as any).voyeurism ?? 0) + (1);
  (s as any).viewnudist = Math.floor(Math.random() * 15) + 1;
  if (((s as any).viewnudist ?? 0) <= 10) {
    scene.img(`images/locations/pavlovsk/lake/secluded_beach/nudist/girls/nudistgirl_${Math.floor(Math.random() * 117) + 1}.jpg`);
    scene.text('Pretending to simply be relaxing in the sand, you begin to spy on one of the other female beach-goers. As you take in the shapes of her body you can\'t help but wonder how you measure up. "Are my breasts that nice?" "Does my pussy look like that?" "If a guy had to choose, who would they pick? Me or her?"');
    scene.text('After a few minutes of pondering these questions, you snap back to reality and look away, trying not to get caught staring.');
  } else {
    scene.img(`images/locations/pavlovsk/lake/secluded_beach/nudist/group/nudistgroup_${Math.floor(Math.random() * 9) + 1}.jpg`);
    scene.text('You notice a few groups of nudists that appear to have come here together. They\'re chatting, joking and having a great time despite being fully exposed to one another. You wonder if you could convince a friend or two to come here with you.');
    scene.img(`images/locations/pavlovsk/lake/secluded_beach/nudist/couple/nudistcouple_${Math.floor(Math.random() * 24) + 1}.jpg`);
    scene.text('Observing those around you, you notice a couple who\'ve come to the secluded beach together. Your thoughts begin to wander back to the first time you came here. The time when you watched that couple fucking in the sand, concerned with nothing but each other. A soft moan escapes your lips as you recount the events.');
  }
  qspCall(s, 'arousal', 'voyeur', 10);
  qspCall(s, 'arousal', 'end');
  scene.build();
}

function enterPavLakeNudeForestPiss(s: GameState, scene: SceneBuilder): void {
  if (((s as any).zz_stage ?? 0) <= 9) {
    scene.img(`images/locations/pavlovsk/lake/secluded_beach/piss_forest_start/piss_forest_start_${((s as any).zz_stage ?? 0)}.jpg`);
    if (((s as any).zz_stage ?? 0) === 0) {
      scene.text('You follow a girl in a tight dress through the woods. She looks to be searching for a safe place to pee.');
    } else {
      scene.text('The girl suddenly stops over a patch of dirt between a group of tall trees. She lifts her dress up and you\'re shocked to see that she isn\'t wearing panties.');
      if (((s as any).zz_stage ?? 0) === 2) {
        scene.text('The girl squats down and you follow suit, hoping that pretending to also be peeing will be a good cover if she spots you.');
      } else {
        scene.text('A stream of urine flows out of her pussy. It seems like she found the place she was looking for after all.');
        if (((s as any).zz_stage ?? 0) === 4) {
          scene.text('A soft moan escapes the girl\'s mouth as the stream continues. She\'s clearly held it long enough that it became a pleasurable experience to finally let go.');
        } else {
          scene.text('Your fingers lightly trace your folds as you continue watching the girl relieve herself.');
          if (((s as any).zz_stage ?? 0) === 6) {
            scene.text('The girl throws a glance in your direction and you quickly break your stare, looking towards the patch of earth below you. Your heart flutters with fear and excitement, unsure if she noticed you.');
          } else {
            scene.text('You build up the courage to look back over and feel a mixture of relief and disappointment as you deduce that she either didn\'t notice you or decided that you\'d just come to pee as well.');
            if (((s as any).zz_stage ?? 0) === 8) {
              scene.text('The idea of nearly getting caught has you so excited that you feel like you could cum right now as your fingers continue to explore your folds. However, cooler heads prevail and you tear your hand away from your pussy.');
            } else {
              scene.text('Once she\'s finished, the girl gets up and straightens her clothes. "I guess drip-drying is the way to go when you pee in public." you chuckle to yourself.');
              scene.text('You wait for her to leave before quickly getting up and returning to the beach.');
            }
            qspCall(s, 'arousal', 'voyeur', 2);
            // TODO-QSP: act iif(zz_stage < 1, 'Peep at her', 'Further'): zz_stage += 1 & gs 'pav_lake_nude_events', 'pav_lak...
            qspCall(s, 'arousal', 'end');
            scene.actions([{ label: 'Continue', goto: ['pav_lake_nude', ''] }]);
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pav_lake_nude_nudist':
      enterPavLakeNudeNudist(s, scene);
      break;
    case 'pav_lake_nude_forest_piss':
      enterPavLakeNudeForestPiss(s, scene);
      break;
    default:
      enterPavLakeNudeNudist(s, scene);
      break;
  }
}

export const pav_lake_nude_events: LocationDef = {
  name: 'pav_lake_nude_events',
  title: 'You tear your eyes from their beautiful legs and look around',
  region: 'pavlovsk',
  description: ['Pretending to simply be relaxing in the sand, you begin to spy on one of the other female beach-goers. As you take in the shapes of her body you can\'t help but wonder how you measure up. "Are my breasts that nice?" "Does my pussy look like that?" "If a guy had to choose, who would they pick? Me or her?"'],
  enter: enter,
};
