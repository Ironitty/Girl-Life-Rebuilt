import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterModelPortraits(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_base_ranking_name[1] = 'Anastasia P.'    &  $temp_base_ranking_link[1] = 'anastasia'
  // TODO-QSP: $temp_base_ranking_name[2] = 'Katherine A.'    &  $temp_base_ranking_link[2] = 'katherine'
  // TODO-QSP: $temp_base_ranking_name[3] = 'Emily R.'      &  $temp_base_ranking_link[3] = 'emily'
  // TODO-QSP: $temp_base_ranking_name[4] = 'Jeff M.'      &  $temp_base_ranking_link[4] = 'jeff'
  // TODO-QSP: $temp_base_ranking_name[5] = 'Miranda K.'    &  $temp_base_ranking_link[5] = 'miranda'
  // TODO-QSP: $temp_base_ranking_name[6] = 'Lily I.'      &  $temp_base_ranking_link[6] = 'lily'
  // TODO-QSP: $temp_base_ranking_name[7] = 'Mila A.'      &  $temp_base_ranking_link[7] = 'mila'
  // TODO-QSP: $temp_base_ranking_name[8] = 'Mari E.'      &  $temp_base_ranking_link[8] = 'mari'
  // TODO-QSP: $temp_base_ranking_name[9] = 'Anushka K.'    &  $temp_base_ranking_link[9] = 'anushka'
  // TODO-QSP: $temp_base_ranking_name[10] = 'Olga K.'      &  $temp_base_ranking_link[10] = 'olga'
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'foto_albums', 'set_album_text', model['rank']
  (s as any).model_i = 1;
  // TODO-QSP: :model_loop
  if (((s as any).model ?? 0)?.['rank'] === (11 - ((s as any).model_i ?? 0))) {
    // TODO-QSP: dynamic text: <a href="exec:gt 'foto_albums', 'sveta'"><<model_i>>. <<$model['firstname']>> <<...
    scene.text(`<a href="exec:gt 'foto_albums', 'sveta'">${((s as any).model_i ?? 0)}. ${((s as any).model ?? 0)?.['firstname']} ${qspUntranslated(s, "mid(model['lastname'], 1, 1)", { location: "foto_albums" })}.</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec:gt 'foto_albums', '<<$temp_base_ranking_link[model_i]>>'"><<model_...
    scene.text(`<a href="exec:gt 'foto_albums', '${((s as any).temp_base_ranking_link ?? 0)?.[String((s as any).model_i ?? 0)]}'">${((s as any).model_i ?? 0)}. ${((s as any).temp_base_ranking_name ?? 0)?.[String((s as any).model_i ?? 0)]}</a>`);
  }
  (s as any).model_i = ((s as any).model_i ?? 0) + (1);
  if (((s as any).model_i ?? 0) < 11) {
    // TODO-QSP: jump 'model_loop'
  }
  scene.actions([
    { label: 'Move away', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterSetAlbumText(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] < 1  ||  ((s as any).ARGS ?? 0)[1] > 10) {
    scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
    scene.text('As you step closer, you can see the albums are of models who work here. Rather than being arranged alphabetically, it looks like they are arranged by ranking.');
  } else {
    scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
    scene.text('Here is the shelf that has the albums of the top 10 models. You saw it before when you first joined the studio, but something has changed. You read the names from left to right and your heart stops when you see the final name.');
    // TODO-QSP: dynamic text: "<<$model['firstname']>> <<$mid($model['lastname'], 1, 1)>>."
    scene.text(`"${((s as any).model ?? 0)?.['firstname']} ${qspUntranslated(s, "mid(model['lastname'], 1, 1)", { location: "foto_albums" })}."`);
    scene.text('That\'s your name! You\'re one of the top 10 models of the studio!');
    if (((s as any).ARGS ?? 0)[1] === 2) {
      scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
      scene.text('Here is the shelf that has the albums of the top 10 models. The albums names have changed yet again. Though the shock is not quite as dramatic as the first time, you take great pleasure in seeing your name has moved up the ranking again to the ninth spot. You\'re higher than Anushka now. You wonder if she\'ll be mad.');
    } else {
      scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
      scene.text('Here is the shelf that has the albums of the top 10 models. You\'ve taken Mari\'s spot in the rankings. Your name now marks the eighth spot, Mari\'s in the ninth. You don\'t think she\'ll be upset or anything like that, she\'ll probably want to congratulate you if nothing else. She was never one to care about the rankings. You take a moment to be amazed with the two of you, how far a farm girl from Gadukino and a schoolgirl from Pavlovsky have come… ');
      if (((s as any).ARGS ?? 0)[1] === 4) {
        scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
        scene.text('Here is the shelf that has the albums of the top 10 models. Up the ranks again! Number 7 this time! Maybe your career as a model has more potential than you thought.');
      } else {
        scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
        scene.text('Here is the shelf that has the albums of the top 10 models. The albums have changed again and you find yourself taking Lily\'s sixth place seat. You are now more famous as a model than a porn star! Wait, is that a good thing?');
        if (((s as any).ARGS ?? 0)[1] === 6) {
          scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
          scene.text('Here is the shelf that has the albums of the top 10 models. When you started modelling, you never imagined you\'d do this well. Not even in your dreams did you think you could become one of the top five models in St. Petersburg.');
        } else {
          scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
          scene.text('Here is the shelf that has the albums of the top 10 models. Reading the album names, you find that yours has been shifted over yet again! This time to the fourth spot from the left. You\'ve done quite well all things considered. With your new ranking, you\'re pretty sure your career as a model is secure.');
          if (((s as any).ARGS ?? 0)[1] === 8) {
            scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
            scene.text('Here is the shelf that has the albums of the top 10 models. As you read from left to right, you see that your name is now third. You finally took Emily\'s spot! She isn\'t very happy about it, but who cares? You\'ve broken the barrier into being famous!');
          } else {
            scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
            scene.text('Here is the shelf that has the albums of the top 10 models. You look and you see your name is second, right before Anastasia\'s. Are you really this close? Could you take the number one spot all for yourself?');
            scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
            scene.text('Here is the shelf that has the albums of the top 10 models. You finally did it! Listed at the very front of all of the albums is your name. Women wish they were you, men want to fuck you, and you\'re likely to start getting offers in other parts of the entertainment industry. You\'re the top model!');
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
    case 'model_portraits':
      enterModelPortraits(s, scene);
      break;
    case 'set_album_text':
      enterSetAlbumText(s, scene);
      break;
    default:
      enterModelPortraits(s, scene);
      break;
  }
}

export const foto_albums: LocationDef = {
  name: 'foto_albums',
  title: 'As you step closer, you can see the albums are of models who',
  region: 'other',
  enter: enter,
};
