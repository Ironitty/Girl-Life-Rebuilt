import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Dance Studio</b></center>');
  scene.img('images/locations/city/citycenter/gym/dance/danceclass.jpg');
  scene.text('A big, open room with good lighting and huge mirrors, perfect for improving your dance skills.');
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
    scene.text('You\'re too exhausted to even bring yourself to look at the activities available. Recover your stamina before trying to dance.');
  } else {
    if (((s as any).pcs_energy ?? 0) < 10) {
      scene.text('You\'re so hungry that you can\'t even bring yourself to look at the activities available.');
    } else {
      if (((s as any).pcs_hydra ?? 0) < 10) {
        scene.text('You\'re so thirsty that you can\'t even bring yourself to look at the activities available.');
      } else {
        if (((s as any).pcs_stren ?? 0) >= 40  ||  (!((s as any).needstrength ?? 0))) {
          scene.actions([
            { label: 'Pole dance class (0:30)', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier2', 15, 'agil', 'stren', 'dancpol');
    (st as any).abonement = ((st as any).abonement ?? 0) - (1);
    if (((st as any).pcs_inhib ?? 0) < 60) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    scene.img('images/locations/city/citycenter/gym/dance/poledance.jpg');
    if (((st as any).pcs_dancero ?? 0) < 40  ||  ((st as any).pcs_stren ?? 0) < 40) {
      (st as any).minut = ((st as any).minut ?? 0) + 15;
      scene.text('You don\'t look all that sensual and even bang your head pretty hard on the pole. This is far harder than it looks. It would help if you improved your modern dancing skills or the burlesque one, but you did learn a little.');
      if (((st as any).pcs_stren ?? 0) < 40) {
        (st as any).needstrength = 1;
        scene.text('The instructor tries to be patient with you, but it\'s clear that you\'re too weak for this sort of dancing. You should build up your strength first.');
      }
    } else {
      qspCall(st, 'exercise', 'tier2', 15, 'dancpol');
      scene.text('You study and practice various acrobatic moves on the pole.');
      if (((st as any).pcs_dancpol ?? 0) >= 100) {
        scene.text('You\'ve mastered the art of pole dancing. There\'s nothing else you can learn from this class.');
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['havana_dance', ''] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Modern dance class (0:30)', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier2', 30, 'agil', 'stren', 'danc');
    (st as any).abonement = ((st as any).abonement ?? 0) - (1);
    if (((st as any).pcs_inhib ?? 0) < 40) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    scene.img('images/locations/city/citycenter/gym/dance/moderndance.jpg');
    if (((st as any).pcs_danc ?? 0) < 100) {
      scene.text('You study modern dance, which is very popular in the clubs.');
    } else {
      scene.text('You\'ve learned everything you can from this class and mastered the art of modern dance.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['havana_dance', ''] },
    ]);
  } },
          { label: 'Burlesque class (0:30)', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier2', 15, 'agil', 'stren', 'danc', 'dancero');
    (st as any).abonement = ((st as any).abonement ?? 0) - (1);
    if (((st as any).pcs_inhib ?? 0) < 60) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    scene.img('images/locations/city/citycenter/gym/dance/burlesque.jpg');
    if (((st as any).pcs_danc ?? 0) < 50) {
      qspCall(st, 'exercise', 'tier2', 15, 'danc');
      scene.text('This class isn\'t just about taking your clothes off - it\'s a difficult dance style and your basics aren\'t sufficient. Instead, the teacher helps you with your basic modern dance steps.');
    } else {
      qspCall(st, 'exercise', 'tier2', 15, 'dancero');
      scene.text('You study the art of burlesque, imaging yourself stripping to the music.');
      if (((st as any).pcs_dancero ?? 0) >= 100) {
        scene.text('You\'ve finally managed to master the art of burlesque. There\'s nothing else you can learn from this class.');
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['havana_dance', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['havana', 'dressing_room'] },
  ]);
  scene.build();
}

export const havana_dance: LocationDef = {
  name: 'havana_dance',
  title: 'Dance Studio',
  region: 'other',
  description: ['A big, open room with good lighting and huge mirrors, perfect for improving your dance skills.'],
  enter: enter,
};
