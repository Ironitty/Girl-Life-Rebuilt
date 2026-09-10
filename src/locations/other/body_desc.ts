import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'throat');
  qspCall(s, 'body_desc', 'pussy');
  qspCall(s, 'body_desc', 'anus');
  if (((s as any).dounspell ?? 0) === 0) {
    qspCall(s, 'body_desc', 'butt');
    qspCall(s, 'body_desc', 'breasts');
    qspCall(s, 'body_desc', 'BMI');
  }
  qspCall(s, 'body_desc', 'lips');
  qspCall(s, 'body_desc', 'hair');
  qspCall(s, 'body_desc', 'tan');
  qspCall(s, 'body_desc', 'skin');
  qspCall(s, 'body_desc', 'eye_color');
  qspCall(s, 'body_desc', 'eyelashes');
  qspCall(s, 'body_desc', 'glasses');
  qspCall(s, 'body_desc', 'eye_size');
  qspCall(s, 'body_desc', 'makeup');
  qspCall(s, 'body_desc', 'nipples');
  qspCall(s, 'body_desc', 'clit');
  qspCall(s, 'body_desc', 'pubes');
  qspCall(s, 'body_desc', 'legs');
  qspCall(s, 'body_desc', 'teeth');
  qspCall(s, 'body_desc', 'appearance');
  return;
  scene.build();
}

function enterChooseDescWord(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterThroat(s: GameState, scene: SceneBuilder): void {
  (s as any).pc_descFull['throat'] = '';
  (s as any).pc_desc['throat'] = '';
  (s as any).pc_descWordy['throat'] = '';
  if (((s as any).pcs_throat ?? 0) <= 0) {
    (s as any).pcs_throat = 0;
    (s as any).pc_descFull['throat'] = 'You have a chaste <a href="exec:view\'images/pc/body/throat/th0.jpg\'">mouth</a>.';
    (s as any).pc_desc['throat'] = 'virgin';
    (s as any).pc_descWordy['throat'] = 'virginal, unused';
  } else {
    (s as any).pc_descFull['throat'] = 'You have an extremely inexperienced <a href="exec:view\'images/pc/body/throat/th1.jpg\'">mouth</a>.';
    (s as any).pc_desc['throat'] = 'narrow';
    (s as any).pc_descWordy['throat'] = 'reluctant, gag-prone';
    if (((s as any).pcs_throat ?? 0) <= 10) {
      (s as any).pc_descFull['throat'] = 'Your slightly-experienced mouth leads to a sensitive <a href="exec:view\'images/pc/body/throat/th2.jpg\'">throat</a> with an easily-triggered gag reflex.';
      (s as any).pc_desc['throat'] = 'delicate';
      (s as any).pc_descWordy['throat'] = 'delicate, barely-experienced';
    } else {
      (s as any).pc_descFull['throat'] = 'You have an experienced mouth and fairly practiced <a href="exec:view\'images/pc/body/throat/th3.jpg\'">throat</a>.';
      (s as any).pc_desc['throat'] = 'fairly practiced';
      (s as any).pc_descWordy['throat'] = 'fairly practiced';
      if (((s as any).pcs_throat ?? 0) <= 25) {
        (s as any).pc_descFull['throat'] = 'You have a willing mouth and trained <a href="exec:view\'images/pc/body/throat/th4.jpg\'">throat</a>.';
        (s as any).pc_desc['throat'] = 'well-trained';
        (s as any).pc_descWordy['throat'] = 'experienced, well-trained and eager';
      } else {
        (s as any).pc_descFull['throat'] = 'Your deep tunnel of a <a href="exec:view\'images/pc/body/throat/th5.jpg\'">throat</a> may adopt any member.';
        (s as any).pc_desc['throat'] = 'capacious';
        (s as any).pc_descWordy['throat'] = 'seasoned, effortlessly-plumbed';
        (s as any).pc_descFull['throat'] = 'Your gag reflex is completely absent and your <a href="exec:view\'images/pc/body/throat/th6.jpg\'">throat</a> has seen nearly as much cock as it has food.';
        (s as any).pc_desc['throat'] = 'bottomless';
        (s as any).pc_descWordy['throat'] = 'elastic, oft-fucked';
      }
      if (((s as any).pcs_breath ?? 0) === 1) {
        (s as any).pc_descFull['throat'] = ((s as any).pc_descFull['throat'] ?? 0) + (' Last you checked, your breath smelled fresh and minty.');
      }
      return;
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ChooseDescWord':
      enterChooseDescWord(s, scene);
      break;
    case 'throat':
      enterThroat(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const body_desc: LocationDef = {
  name: 'body_desc',
  title: 'Your makeup is smeared all over your face',
  region: 'other',
  enter: enter,
};
