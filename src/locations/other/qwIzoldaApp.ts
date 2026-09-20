import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 16  ||  ((s as any).izoldaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.text('You rang the bell but no one answered you.');
    return;
  }
  qspCall(s, 'boyStat', 'A111');
  scene.text('<center><b>Isolda</b></center>');
  scene.img('images/characters/city/isolde/izolda.jpg');
  // TODO-QSP: dynamic text: Isolde opens the door for you. "Hello <<$pcs_nickname>>, come in."
  scene.text(`Isolde opens the door for you. "Hello ${((s as any).pcs_nickname ?? '')}, come in."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
    { label: 'Enter the apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).izoldaday = ((st as any).daystart ?? 0);
    (st as any).izoldaQW = ((st as any).izoldaQW ?? 0) + (1);
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (5);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (10);
    }
    qspCall(st, 'stat', '');
    if (((st as any).izoldaQW ?? 0) < 5) {
      scene.text('You went to the apartment and Isolde you spent in the kitchen. There she poured tea, and you yourself. You sat at the table and began to chat about all sorts of trivia.');
    } else {
      if (((st as any).izoldaQW ?? 0) >= 5  &&  (!((st as any).izoldaSex ?? 0))) {
        scene.text('Isolde suggested that you drink wine. You agreed and went to the kitchen. Isolde opened a bottle of wine and poured two glasses. You drank it.');
        qspCall(st, 'drugs', 'alcohol', 'wine');
        qspCall(st, 'stat', '');
        if (((st as any).izoldaQW ?? 0) >= 10  &&  (!((st as any).izoldaSex ?? 0))) {
          scene.text('Soon you both drunk and Isolde invited you to go to the lounge to relax.');
          scene.actions([
            { label: 'Go Isolde', handler: (st: GameState) => {
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    (st as any).izoldaSex = 1;
    scene.img('images/characters/city/isolde/sex/izoldasex.jpg');
    scene.text('The room suddenly Isolde you kissed and hugged her gently.');
    qspCall(st, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Kiss Isolde', handler: (st: GameState) => {
    scene.img('images/characters/city/isolde/sex/izoldasex1.jpg');
    scene.text('Isolde\'s head gently slipped from your lips to your breasts and began to caress them.');
    qspCall(st, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(st, 'arousal', 'foreplay', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/isolde/sex/izoldasex2.jpg');
    scene.text('Isolde you dropped on the couch and gently kisses covering section. Once you lay down on her back, she began to lick your pussy.');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/isolde/sex/izoldasex3.jpg');
    scene.text('Blonde turned and climbed on you without stopping to lick your pussy. She throw the leg over you up her sweaty and expiring juices crack for sex. You started to caress her clitoris tongue and kiss her luscious lips, finally you both shook orgasm.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 10, 'lesbian');
    qspCall(st, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
      } else {
        if (((st as any).izoldaSex ?? 0) > 0) {
          scene.text('Isolde offer you a drink of wine and you have gone with her to the kitchen, drinking a bottle she took you by the hand and led her into the room.');
          qspCall(st, 'drugs', 'alcohol', 'wine');
          qspCall(st, 'stat', '');
          scene.actions([
            { label: 'Go Isolde', handler: (st: GameState) => {
    (st as any).izoldaSex = ((st as any).izoldaSex ?? 0) + (1);
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    scene.img('images/characters/city/isolde/sex/izoldasex.jpg');
    scene.text('The room suddenly Isolde you kissed and hugged her gently.');
    qspCall(st, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Kiss Isolde', handler: (st: GameState) => {
    scene.img('images/characters/city/isolde/sex/izoldasex1.jpg');
    scene.text('Isolde\'s head gently slipped from your lips to your breasts and began to caress them.');
    qspCall(st, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(st, 'arousal', 'foreplay', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/isolde/sex/izoldasex2.jpg');
    scene.text('Isolde you dropped on the couch and gently kisses covering section. Once you lay down on her back, she began to lick your pussy.');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/isolde/sex/izoldasex3.jpg');
    scene.text('Blonde turned and climbed on you without stopping to lick your pussy. She throw the leg over you up her sweaty and expiring juices crack for sex. You started to caress her clitoris tongue and kiss her luscious lips, finally you both shook orgasm.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 10, 'lesbian');
    qspCall(st, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
  ]);
  scene.build();
}

export const qwIzoldaApp: LocationDef = {
  name: 'qwIzoldaApp',
  title: 'Isolda',
  region: 'other',
  locationType: 'private',
  description: ['You rang the bell but no one answered you.'],
  enter: enter,
};
