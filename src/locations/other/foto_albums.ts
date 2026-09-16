import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027foto_albums\\u0027, \\u0027sveta\\u0027); return false;">${((s as any).model_i || '')}. ${((s as any).model ?? 0)?.['firstname'] ?? ''} ${qspUntranslated(s, "mid(model['lastname'], 1, 1)", { location: "foto_albums" })}.</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec:gt 'foto_albums', '<<$temp_base_ranking_link[model_i]>>'"><<model_...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027foto_albums\\u0027, \\u0027${((s as any).temp_base_ranking_link ?? 0)?.[String((s as any).model_i ?? 0)] ?? ''}\\u0027); return false;">${((s as any).model_i || '')}. ${((s as any).temp_base_ranking_name ?? 0)?.[String((s as any).model_i ?? 0)] ?? ''}</a>`);
  }
  (s as any).model_i = ((s as any).model_i ?? 0) + (1);
  if (((s as any).model_i ?? 0) < 11) {
    // TODO-QSP: jump 'model_loop'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterSetAlbumText(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) < 1  ||  ((s as any).locArgs?.[1] ?? 0) > 10) {
    scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
    scene.text('As you step closer, you can see the albums are of models who work here. Rather than being arranged alphabetically, it looks like they are arranged by ranking.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
      scene.text('Here is the shelf that has the albums of the top 10 models. You saw it before when you first joined the studio, but something has changed. You read the names from left to right and your heart stops when you see the final name.');
      // TODO-QSP: dynamic text: "<<$model['firstname']>> <<$mid($model['lastname'], 1, 1)>>."
      scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''} ${qspUntranslated(s, "mid(model['lastname'], 1, 1)", { location: "foto_albums" })}."`);
      scene.text('That\'s your name! You\'re one of the top 10 models of the studio!');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
        scene.text('Here is the shelf that has the albums of the top 10 models. The albums names have changed yet again. Though the shock is not quite as dramatic as the first time, you take great pleasure in seeing your name has moved up the ranking again to the ninth spot. You\'re higher than Anushka now. You wonder if she\'ll be mad.');
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 3) {
          scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
          scene.text('Here is the shelf that has the albums of the top 10 models. You\'ve taken Mari\'s spot in the rankings. Your name now marks the eighth spot, Mari\'s in the ninth. You don\'t think she\'ll be upset or anything like that, she\'ll probably want to congratulate you if nothing else. She was never one to care about the rankings. You take a moment to be amazed with the two of you, how far a farm girl from Gadukino and a schoolgirl from Pavlovsky have come… ');
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 4) {
            scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
            scene.text('Here is the shelf that has the albums of the top 10 models. Up the ranks again! Number 7 this time! Maybe your career as a model has more potential than you thought.');
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 5) {
              scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
              scene.text('Here is the shelf that has the albums of the top 10 models. The albums have changed again and you find yourself taking Lily\'s sixth place seat. You are now more famous as a model than a porn star! Wait, is that a good thing?');
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 6) {
                scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
                scene.text('Here is the shelf that has the albums of the top 10 models. When you started modelling, you never imagined you\'d do this well. Not even in your dreams did you think you could become one of the top five models in St. Petersburg.');
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 7) {
                  scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
                  scene.text('Here is the shelf that has the albums of the top 10 models. Reading the album names, you find that yours has been shifted over yet again! This time to the fourth spot from the left. You\'ve done quite well all things considered. With your new ranking, you\'re pretty sure your career as a model is secure.');
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 8) {
                    scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
                    scene.text('Here is the shelf that has the albums of the top 10 models. As you read from left to right, you see that your name is now third. You finally took Emily\'s spot! She isn\'t very happy about it, but who cares? You\'ve broken the barrier into being famous!');
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 9) {
                      scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
                      scene.text('Here is the shelf that has the albums of the top 10 models. You look and you see your name is second, right before Anastasia\'s. Are you really this close? Could you take the number one spot all for yourself?');
                    } else {
                      scene.img('images/locations/city/citycenter/photo/portraits/albums.jpg');
                      scene.text('Here is the shelf that has the albums of the top 10 models. You finally did it! Listed at the very front of all of the albums is your name. Women wish they were you, men want to fuck you, and you\'re likely to start getting offers in other parts of the entertainment industry. You\'re the top model!');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSveta(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the first album and browse through some of the pictures placed inside.');
  scene.text('"These are pictures of me!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: '', labelFn: (s: GameState) => 'Presenting: ' + String(((s as any).model ?? 0)?.['firstname'] ?? '' ?? '') + ' ' + String((String(((s as any).model ?? 0)?.['lastname'] ?? '').slice((1)-1, ((1)-1)+(1))) ?? ''), handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/1.jpg');
    scene.actions([
      { label: 'Waiting For You', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/2.jpg');
    scene.actions([
      { label: 'Six Hundred Roses', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/3.jpg');
    scene.actions([
      { label: 'Doll', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/4.jpg');
    scene.actions([
      { label: 'Workout', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/5.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= 2) {
      scene.actions([
        { label: 'Cool Beauty', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/6.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= 3) {
      scene.actions([
        { label: 'All Eyes On You', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/7.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= 4) {
      scene.actions([
        { label: 'Glow', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/8.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= 5) {
      scene.actions([
        { label: 'Simple and Clean', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/9.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= 6) {
      scene.actions([
        { label: 'Pierce', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/10.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= ((s as any).Y ?? 0)) {
      scene.actions([
        { label: 'Yoko', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/11.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= 8) {
      scene.actions([
        { label: 'Hay Fever', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/12.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= 9) {
      scene.actions([
        { label: 'His Clothes', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/13.jpg');
    if (((s as any).model ?? 0)?.['rank'] >= 10) {
      scene.actions([
        { label: 'Confidence', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/sveta_l/14.jpg');
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnastasia(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the first album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Anastasia P', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/1.jpg');
    scene.actions([
      { label: 'Rally', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/2.jpg');
    scene.actions([
      { label: 'Solidarity', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/3.jpg');
    scene.actions([
      { label: 'Sweet Things', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/4.jpg');
    scene.actions([
      { label: 'Only For You', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKatherine(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the second album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Katherine A', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/1.jpg');
    scene.text('<i>She seems oddly familiar but I don\'t know why…</i>');
    scene.actions([
      { label: 'Kathoa', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/2.jpg');
    scene.actions([
      { label: 'Estrell', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/3.jpg');
    scene.actions([
      { label: 'Bare', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/4.jpg');
    scene.actions([
      { label: 'Difuza', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEmily(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the third album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Emily R', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/1.jpg');
    scene.actions([
      { label: 'Crawling', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/2.jpg');
    scene.actions([
      { label: 'Unashamed', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/3.jpg');
    scene.actions([
      { label: 'Lover\'s Embrace', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/4.jpg');
    scene.actions([
      { label: 'Treats! Issue 3', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/1.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterJeff(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the fourth album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Jeff M', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/1.jpg');
    scene.actions([
      { label: 'Want It All', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/2.jpg');
    scene.actions([
      { label: 'Nuria', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/3.jpg');
    scene.actions([
      { label: 'My Joy', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/4.jpg');
    scene.actions([
      { label: 'Pejalan', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMiranda(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the fifth album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Miranda K', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/miranda_k/1.jpg');
    scene.actions([
      { label: 'November', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/miranda_k/2.jpg');
    scene.actions([
      { label: 'Sun Beams', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/miranda_k/3.jpg');
    scene.actions([
      { label: 'Morning', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/miranda_k/4.jpg');
    scene.actions([
      { label: 'Silhouette', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/miranda_k/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLily(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the sixth album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Lily I', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/lily_i/1.jpg');
    scene.actions([
      { label: 'Wide Open', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/lily_i/2.jpg');
    scene.actions([
      { label: 'Ready and Waiting', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/lily_i/3.jpg');
    scene.actions([
      { label: 'Cleansing', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/lily_i/4.jpg');
    scene.actions([
      { label: 'Invitation', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/lily_i/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMila(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the seventh album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Mila A', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mila_a/1.jpg');
    scene.actions([
      { label: 'Rallhe', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mila_a/2.jpg');
    scene.actions([
      { label: 'True Class', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mila_a/3.jpg');
    scene.actions([
      { label: 'Dreaming', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mila_a/4.jpg');
    scene.actions([
      { label: 'Perspective', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mila_a/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMari(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the eighth album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Mari E', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mari_e/1.jpg');
    scene.actions([
      { label: 'Creamy', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mari_e/2.jpg');
    scene.actions([
      { label: 'Premiere', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mari_e/3.jpg');
    scene.actions([
      { label: 'Want You Now', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mari_e/4.jpg');
    scene.actions([
      { label: 'All Yours', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/mari_e/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anushkaQW ?? 0)?.['model'] >= 1) {
    scene.text('You open up the ninth album and browse through some of the pictures of Anushka placed inside. You already know she\'s modelled here, so you\'re not that surprised to find her in an album.');
    scene.text('They seem to be single pictures taken from past photo shoots.');
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['model'] = 1;
      scene.text('You open up the ninth album and are surprised to see pictures of Anushka placed inside. It\'s not surprising that she\'d like being a model given that she loves attention, but you\'re surprised that nobody at school has ever mentioned it. Somebody else surely must know?');
      scene.text('They all seem to be single pictures taken from past photo shoots.');
    } else {
      scene.text('You open up the ninth album and browse through some of the pictures placed inside.');
      scene.text('They seem to be single pictures taken from past photo shoots.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Anushka K', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anushka_k/1.jpg');
    scene.actions([
      { label: 'Naughty at Home', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anushka_k/2.jpg');
    scene.actions([
      { label: 'Relaxing at the Pool', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anushka_k/3.jpg');
    scene.actions([
      { label: 'Finer Things In Life', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anushka_k/4.jpg');
    scene.actions([
      { label: 'Text Shoot', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anushka_k/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOlga(s: GameState, scene: SceneBuilder): void {
  scene.text('You open up the tenth album and browse through some of the pictures placed inside.');
  scene.text('They seem to be single pictures taken from past photo shoots.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['foto_albums', 'model_portraits'] },
    { label: 'Presenting: Olga K', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/olga_k/1.jpg');
    scene.actions([
      { label: 'Fields', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/olga_k/2.jpg');
    scene.actions([
      { label: 'Nuria', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/olga_k/3.jpg');
    scene.actions([
      { label: 'My Joy', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/olga_k/4.jpg');
    scene.actions([
      { label: 'Pejalan', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/olga_k/5.jpg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
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
    case 'sveta':
      enterSveta(s, scene);
      break;
    case 'anastasia':
      enterAnastasia(s, scene);
      break;
    case 'katherine':
      enterKatherine(s, scene);
      break;
    case 'emily':
      enterEmily(s, scene);
      break;
    case 'jeff':
      enterJeff(s, scene);
      break;
    case 'miranda':
      enterMiranda(s, scene);
      break;
    case 'lily':
      enterLily(s, scene);
      break;
    case 'mila':
      enterMila(s, scene);
      break;
    case 'mari':
      enterMari(s, scene);
      break;
    case 'anushka':
      enterAnushka(s, scene);
      break;
    case 'olga':
      enterOlga(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const foto_albums: LocationDef = {
  name: 'foto_albums',
  title: 'As you step closer, you can see the albums are of models who',
  region: 'other',
  enter: enter,
};
