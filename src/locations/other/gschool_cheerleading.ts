import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPoster(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/poster.jpg');
  scene.text('Walking through the hallway, you notice a poster saying that a spot has opened up on the school\'s cheerleading squad and that tryouts are being held after school today. The squad is ruled with an iron fist by Albina and is made up of only the most popular and athletic girls in school.');
  scene.text('However, this hasn\'t stopped some of the nerds from working out and even attending dancing lessons to try out for a spot, despite them spreading rumors about the squad, most of them sexual.');
  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
    scene.text('You\'re just the kind of person that the squad is looking for and feel that Albina will heavily approve of you.');
  } else {
    if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 4) {
      scene.text('You know that Albina would judge you harshly since you\'re not a jock or part of the cool group.');
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('You\'re an outcast. Albina wouldn\'t even look at you, never mind give you a chance. Would it even be worth trying?');
      }
    }
  }
  scene.actions([
    { label: 'Decide to give it a try', handler: (st: GameState) => {
    ((s as any).cheerleadingQW ?? {})['quest_stage'] = 1;
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('"I\'m one of them. They would be mad to not at least consider me! Those nerds and their rumors are just jealous losers!" you think to yourself as you decide to attend the tryouts and show them that you deserve that spot.');
    } else {
      scene.text('While you\'re not as athletically inclined and they have no respect for you, you decide that you\'re going to try anyway.');
      scene.text('"I\'ll show those stuck up bimbos that I can be as good as any one of them!" you tell yourself as you walk away with a steely confidence.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    { label: 'This doesn\'t interest you', handler: (st: GameState) => {
    ((s as any).cheerleadingQW ?? {})['reject'] = ((s as any).daystart ?? 0);
    ((s as any).cheerleadingQW ?? {})['quest_stage'] = (-1);
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('Even though you\'re capable enough to try out, prancing around on the field to amuse people doesn\'t sound fun to you at all. You shake your head and continue on your way.');
    } else {
      scene.text('"Why would I ever want to join a group of skimpily dressed sluts prancing around a field for the amusement of perverts?" you think to yourself as you walk away in disgust.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
  ]);
  scene.build();
}

function enterPosterRepeat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/poster.jpg');
  scene.text('Walking through the hallway, you notice the poster for the school\'s cheerleading tryouts again. It looks like they still have that open spot and are trying to fill it. You recall how the squad only allows popular or athletic girls to join but that nerds still try out regardless. You also remember some of the sexual rumors you\'ve heard about them.');
  if (((s as any).cheerleadingQW ?? 0)?.['try_count'] > 0) {
    if (((s as any).grupTipe ?? 0) === 3) {
      if (((s as any).cheerleadingQW ?? 0)?.['try_social'] < ((s as any).npc_rel ?? 0)?.['A23'] + ((s as any).grupvalue ?? 0)[((s as any).npc_grupTipe ?? 0)?.['A23']]/2  &&  ((s as any).cheerleadingQW ?? 0)?.['try_physical'] < ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_danc ?? 0) + ((s as any).pcs_cheer ?? 0)) {
      } else {
        if (((s as any).cheerleadingQW ?? 0)?.['try_social'] < ((s as any).npc_rel ?? 0)?.['A23'] + ((s as any).grupvalue ?? 0)[((s as any).npc_grupTipe ?? 0)?.['A23']]/2) {
        } else {
          if (((s as any).cheerleadingQW ?? 0)?.['try_physical'] < ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_danc ?? 0) + ((s as any).pcs_cheer ?? 0)) {
          }
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        if (((s as any).cheerleadingQW ?? 0)?.['grupTipe'] === ((s as any).grupTipe ?? 0)) {
          scene.text('Albina and those other snooty bitches turned their noses up at you last time. They\'ll never accept you, no matter how good you are.');
        } else {
          scene.text('They didn\'t accept you last time, so there\'s no chance at all now that you\'re a gopnik.');
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          if (((s as any).cheerleadingQW ?? 0)?.['grupTipe'] === ((s as any).grupTipe ?? 0)) {
            scene.text('They laughed you right out of the hall last time. They\'ll never accept you, no matter how good you are, so there\'s probably not much point in trying.');
          } else {
            scene.text('They didn\'t accept you last time, so there\'s no chance at all now that you\'re an outcast. Why even bother trying again?');
          }
        } else {
          if (((s as any).cheerleadingQW ?? 0)?.['grupTipe'] !== ((s as any).grupTipe ?? 0)) {
            scene.text('Now that you\'re part of their clique, they\'re bound to treat you better than last time. It\'s worth giving it another shot.');
          } else {
            scene.text('"I\'m sure Albina just had a bad day last time. She wouldn\'t treat me like that again, would she?" you think to yourself as you consider attending the tryouts one more time.');
          }
        }
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 4) {
      scene.text('You know that Albina would judge you harshly since you\'re not a jock or part of the cool group.');
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('You\'re an outcast. Albina wouldn\'t even look at you, never mind give you a chance. Would it even be worth trying?');
      }
    }
  }
  // TODO-QSP: act iif(cheerleadingQW['try_count'] > 0, 'Decide to try one more time', 'Decide to give it a try thi...
  ((s as any).cheerleadingQW ?? {})['quest_stage'] = 1;
  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
    scene.text('"I\'m one of them. They would be mad to not at least consider me! Those nerds and their rumors are just jealous losers!" you think to yourself as you decide to attend the tryouts and show them that you deserve that spot.');
  } else {
    scene.text('While you\'re not as athletically inclined and they have no respect for you, you decide that you\'re going to try anyway.');
    scene.text('"I\'ll show these stuck up bimbos that I can be as good as any one of them!" you tell yourself, as you walk away with a steely confidence.');
  }
  qspCall(s, 'gschool_events', 'leave_break_events');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'poster':
      enterPoster(s, scene);
      break;
    case 'poster_repeat':
      enterPosterRepeat(s, scene);
      break;
    default:
      enterPoster(s, scene);
      break;
  }
}

export const gschool_cheerleading: LocationDef = {
  name: 'gschool_cheerleading',
  title: '(Last chance to join cheerleading)',
  region: 'other',
  locationType: 'event',
  description: ['Walking through the hallway, you notice a poster saying that a spot has opened up on the school\'s cheerleading squad and that tryouts are being held after school today. The squad is ruled with an iron fist by Albina and is made up of only the most popular and athletic girls in school.'],
  enter: enter,
};
