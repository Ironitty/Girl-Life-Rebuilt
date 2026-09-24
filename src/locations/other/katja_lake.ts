import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'katja_lake', 'start');
  (s as any).region = 'pav';
  (s as any).locclass = 'beach';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  if (((s as any).season ?? 0) === 'winter') {
    scene.img('images/locations/pavlovsk/lake/lake.winter.jpg');
    scene.text('One good thing about living in Pavlovsk is the access to rivers and lakes. Now that it\'s winter, this landscape has beautifully transformed, thanks to the ice and snow, into a place where people rush to do things like ice skating, playing hockey and, for those brave enough, swimming.');
    scene.text('You and Katja are no less, and go to the area to skate on the frozen lake, spend some time in the sauna or do an ice dip...');
  } else {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    if (((s as any).season ?? 0) === 'spring') {
      scene.img('images/locations/pavlovsk/lake/lake.spring.jpg');
    } else {
      if (((s as any).season ?? 0) === 'summer') {
        scene.img('images/locations/pavlovsk/lake/lake.summer.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/lake.autumn.jpg');
      }
    }
    scene.text('One good thing about living in Pavlovsk is the access to rivers and lakes that let the locals do all sorts of water-related activities like swimming, tanning or just simply take a walk around the secluded groves.');
    scene.text('Katja and you are no less, and go to a secluded beach to do those things… and looking absolutely fabulous doing it.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Lake activities', goto: ['katja_lake', 'lake_activities'] },
    { label: 'Sauna time', goto: ['katja_lake', 'sauna_time'] },
  ]);
  scene.build();
}

function enterLakeActivities(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 20) {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, it''s getting a little late."
    scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, it's getting a little late."`);
    scene.text('"True. Let\'s go back."');
    scene.text('You grab Katja\'s hand and accompany her home.');
    scene.actions([
      { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    if (((s as any).season ?? 0) === 'winter') {
      qspGoto(s, 'katja_lake', 'winter_activities');
    } else {
      if (((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) < 20) {
        scene.img('images/characters/shared/headshots_main/big14.jpg');
        scene.text('As you suggest something to pass some time at the beach, Katja frowns.');
        scene.text('"I don\'t think so. The weather is pretty bad."');
        scene.text('It\'s evident that this isn\'t a good idea. You better to look for something else to do.');
        scene.actions([
          { label: 'Continue', goto: ['katjaEV', 'kathan'] },
        ]);
      } else {
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
        if (((s as any).season ?? 0) === 'spring') {
          scene.img('images/locations/pavlovsk/lake/lake.spring.jpg');
        } else {
          if (((s as any).season ?? 0) === 'summer') {
            scene.img('images/locations/pavlovsk/lake/lake.summer.jpg');
          } else {
            scene.img('images/locations/pavlovsk/lake/lake.autumn.jpg');
          }
        }
        scene.text('You decide to spend some time at the secluded beach, but as you approach, a question surges into your mind. Go there naked? Katja is pretty body-conscientious, so maybe going full nudist isn\'t a good idea...');
        if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
          scene.actions([
            { label: 'Put on your swimwear', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['slut'] >= 20  &&  ((st as any).katjaQW ?? 0)?.['horny'] >= 20) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KL1.jpg');
      scene.text('As you prepare to change, a long, somewhat husky sigh reaches your ears. It\'s come from Katja. She\'s in her underwear with her eyes closed, the wind playing with her red mane.');
      // TODO-QSP: dynamic text: "You know <<$pcs_nickname>>, the sun feels nice and there aren''t people around ...
      scene.text(`"You know ${((st as any).pcs_nickname ?? '')}, the sun feels nice and there aren't people around here. So what do you think?"`);
      scene.text('It\'s difficult to link the supposedly timid girl with this sensual woman that\'s trying to tempt you with all her heart.');
      // TODO-QSP: dynamic text: "Think <<$pcs_nickname>>. The water dripping over our naked skin, the wind in ou...
      scene.text(`"Think ${((st as any).pcs_nickname ?? '')}. The water dripping over our naked skin, the wind in our hair, and the two of us... All alone..."`);
      qspCall(st, 'willpower', 'exhib', 'resist', 'hard');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Resist', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Resist', goto: ['katja_lake', 'beach_in_swimwear2'] },
        ]);
      }
      scene.actions([
        { label: 'Give in', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/KL2.jpg');
    scene.text('You get naked as Katja exaggeratedly sighs and gives you sensual eyes before you take the giggling bimbo wannabe by the hand and walk to the secluded beach.');
    if (((st as any).PSwim ?? 0) === 0  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'outfit', 'backup', 'swim');
    }
    qspCall(st, 'outfit', 'strip_all');
    if (((st as any).pcs_stam ?? 0) >= (20 * (10 - ((st as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
      scene.actions([
        { label: 'Swim', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur', 10);
    if (((st as any).pcs_inhib ?? 0) < 20) {
      qspCall(st, 'exp_gain', 'inhib', 1);
    }
    qspGoto(st, 'katja_lake', 'swim');
  } },
      ]);
    }
    scene.actions([
      { label: 'Tan', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur', 10);
    if (((st as any).pcs_inhib ?? 0) < 20) {
      qspCall(st, 'exp_gain', 'inhib', 1);
    }
    qspGoto(st, 'katja_lake', 'tan');
  } },
      { label: 'Walk', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur', 10);
    if (((st as any).pcs_inhib ?? 0) < 20) {
      qspCall(st, 'exp_gain', 'inhib', 1);
    }
    qspGoto(st, 'katja_lake', 'walk');
  } },
    ]);
  } },
      ]);
    } else {
      qspGoto(st, 'katja_lake', 'beach_in_swimwear1');
    }
  } },
          ]);
        }
        if (((s as any).pcs_inhib ?? 0) > 20) {
          scene.actions([
            { label: 'Go in the nude', handler: (st: GameState) => {
    if (((st as any).PSwim ?? 0) === 0  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'outfit', 'backup', 'swim');
    }
    qspCall(st, 'outfit', 'strip_all');
    qspGoto(st, 'katja_lake', 'beach_nude');
  } },
          ]);
        } else {
          qspCall(s, 'willpower', 'exhib', 'self', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Go in the nude', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go in the nude', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if (((st as any).PSwim ?? 0) === 0  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'outfit', 'backup', 'swim');
    }
    qspCall(st, 'outfit', 'strip_all');
    if (((st as any).pcs_inhib ?? 0) < 20) {
      qspCall(st, 'exp_gain', 'inhib', 1);
    }
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'beach_nude');
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEV', 'kathan'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSaunaTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sauna_daystart ?? 0) === ((s as any).daystart ?? 0)) {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja frowns when you suggest passing some time in the public sauna.');
    scene.text('"Spending too much time in there isn\'t going to do any good. It\'s best to leave it for another day."');
    scene.text('It\'s evident that this isn\'t a good idea. You better to look for something else to do.');
    scene.actions([
      { label: 'Continue', goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/sauna.jpg');
    scene.text('You decide to pass some time in the public sauna, but as you approach, a question surges into your mind. Go naked? Katja is pretty body-conscientious, so maybe going butt-naked isn\'t a good idea. What can you do? Push her to go naked or just put on your swimwear?');
    if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
      scene.actions([
        { label: 'Put on your swimwear', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['slut'] >= 20  &&  ((st as any).katjaQW ?? 0)?.['horny'] >= 20) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS6.jpg');
      scene.text('As you prepare to put on your swimwear, Katja lies against a wall and observes you undressing. She stands there in her underwear, her eyes full of mischief.');
      scene.text('"Is something wrong, Katja?" you ask.');
      scene.text('She just smiles and begins to caress and play with her red mane without breaking eye contact.');
      // TODO-QSP: dynamic text: "I... was thinking, <<$pcs_nickname>>... Maybe it''s better if we go naked, I me...
      scene.text(`"I... was thinking, ${((st as any).pcs_nickname ?? '')}... Maybe it's better if we go naked, I mean, the hot steam will make us sweat and my bikini will feel uncomfortable. What do you think? All that sweat all over my skin. It gives you ideas, doesn't it?"`);
      qspCall(st, 'willpower', 'exhib', 'resist', 'hard');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Resist', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Resist', goto: ['katja_lake', 'sauna_in_swimmwear2'] },
        ]);
      }
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/KL2.jpg');
    scene.text('You get naked as Katja exaggeratedly sighs and gives you sensual eyes.');
    scene.text('Once you\'re done, you take the giggling bimbo wannabe by the hand and walk to the sauna.');
    scene.actions([
      { label: 'Go to the sauna', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur', 10);
    if (((st as any).pcs_inhib ?? 0) < 20) {
      qspCall(st, 'exp_gain', 'inhib', 1);
    }
    if (((st as any).PSwim ?? 0) === 0  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'outfit', 'backup', 'swim');
    }
    qspCall(st, 'outfit', 'strip_all');
    qspGoto(st, 'katja_lake', 'saune_time');
  } },
    ]);
  } },
      ]);
    } else {
      qspGoto(st, 'katja_lake', 'sauna_in_swimmwear1');
    }
    if (((st as any).pcs_inhib ?? 0) > 20) {
      scene.actions([
        { label: 'Go in the nude', handler: (st: GameState) => {
    if (((st as any).PSwim ?? 0) === 0  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'outfit', 'backup', 'swim');
    }
    qspCall(st, 'outfit', 'strip_all');
    qspGoto(st, 'katja_lake', 'saune_time');
  } },
      ]);
    } else {
      qspCall(st, 'willpower', 'exhib', 'self', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go in the nude', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go in the nude', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if (((st as any).PSwim ?? 0) === 0  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'outfit', 'backup', 'swim');
    }
    qspCall(st, 'outfit', 'strip_all');
    if (((st as any).pcs_inhib ?? 0) < 20) {
      qspCall(st, 'exp_gain', 'inhib', 1);
    }
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'saune_time');
  } },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).pcs_inhib ?? 0) > 20) {
      scene.actions([
        { label: 'Go in the nude', handler: (st: GameState) => {
    if (((st as any).PSwim ?? 0) === 0  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'outfit', 'backup', 'swim');
    }
    qspCall(st, 'outfit', 'strip_all');
    qspGoto(st, 'katja_lake', 'saune_time');
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'exhib', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go in the nude', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go in the nude', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if (((st as any).PSwim ?? 0) === 0  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'outfit', 'backup', 'swim');
    }
    qspCall(st, 'outfit', 'strip_all');
    if (((st as any).pcs_inhib ?? 0) < 20) {
      qspCall(st, 'exp_gain', 'inhib', 1);
    }
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'saune_time');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEv', 'kathan'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBeachInSwimwear1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).loc = 'katja_lake';
    (s as any).loc_arg = 'beach_in_swimwear1';
    qspCall(s, 'changingroom', 'view_swim_list');
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/school/girl/katja/KL3.jpg');
    scene.text('You decide to put on your swimwear while making sure that there aren\'t any voyeurs watching.');
    if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
      scene.actions([
        { label: 'Swim', goto: ['katja_lake', 'swim'] },
      ]);
    }
    scene.actions([
      { label: 'Tan', goto: ['katja_lake', 'tan'] },
      { label: 'Walk', goto: ['katja_lake', 'walk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBeachInSwimwear2(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).PSwim ?? 0))) {
    qspCall(s, 'stat', '');
    (s as any).loc = 'katja_lake';
    (s as any).loc_arg = 'beach_in_swimwear2';
    qspCall(s, 'changingroom', 'view_swim_list');
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KL1.jpg');
    scene.text('You put on your swimwear as Katja exaggeratedly sighs and gives you sensual eyes before doing the same.');
    scene.text('You then take the giggling bimbo wannabe by the hand and walk to the secluded beach.');
    if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
      scene.actions([
        { label: 'Swim', goto: ['katja_lake', 'swim'] },
      ]);
    }
    scene.actions([
      { label: 'Tan', goto: ['katja_lake', 'tan'] },
      { label: 'Walk', goto: ['katja_lake', 'walk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSaunaInSwimmwear1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).PSwim ?? 0))) {
    (s as any).loc = 'katja_lake';
    (s as any).loc_arg = 'sauna_in_swimmwear1';
    qspCall(s, 'changingroom', 'view_swim_list');
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspGoto(s, 'katja_lake', 'saune_time');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSaunaInSwimmwear2(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).PSwim ?? 0))) {
    (s as any).loc = 'katja_lake';
    (s as any).loc_arg = 'sauna_in_swimmwear2';
    qspCall(s, 'changingroom', 'view_swim_list');
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KL1.jpg');
    scene.text('You put on your swimwear as Katja exaggeratedly sighs and gives you sensual eyes before doing the same.');
    scene.text('You then take the giggling bimbo wannabe by the hand and walk to the sauna.');
    scene.actions([
      { label: 'Go to the sauna', goto: ['katja_lake', 'saune_time'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWinterActivities(s: GameState, scene: SceneBuilder): void {
  (s as any).dummy = (Math.floor(Math.random() * 29) + 2);
  qspCall(s, 'stat', '');
  if (((s as any).dummy ?? 0) === 1) {
    qspGoto(s, 'katja_lake', 'playing_in_snow');
  } else {
    if (((s as any).dummy ?? 0) === 2) {
      qspGoto(s, 'katja_lake', 'hockey_match');
    } else {
      if (((s as any).dummy ?? 0) >= 3  &&  ((s as any).mc_inventory ?? 0)?.['ice_skates'] === 0) {
        scene.img('images/locations/pavlovsk/lake/lake.winter.jpg');
        scene.text('It\'s winter and most activities on the lake are limited. If you had skates you could use them on the ice-covered waters, but at the moment, it seems that you can only look at the frozen waters.');
        scene.actions([
          { label: 'Continue', goto: ['katjaEv', 'kathan'] },
        ]);
      } else {
        scene.img('images/locations/pavlovsk/lake/lake.winter.jpg');
        // TODO-QSP: dynamic text: "Let''s skate <<$pcs_nickname>>!".
        scene.text(`"Let's skate ${((s as any).pcs_nickname ?? '')}!".`);
        scene.text('Giggling, Katja grabs your hand and pushes you towards the ice.');
        scene.actions([
          { label: 'Skate!', handler: (st: GameState) => {
    (st as any).dummy = (Math.floor(Math.random() * 100) + 1);
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    qspCall(st, 'sweat', 'add', 10);
    qspCall(st, 'exp_gain', 'stren', 1);
    qspCall(st, 'exp_gain', 'agil', 1);
    qspCall(st, 'exp_gain', 'react', 1);
    qspCall(st, 'exp_gain', 'icesktng', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
    qspCall(st, 'stat', '');
    if (((st as any).dummy ?? 0) > ((st as any).pcs_icesktng ?? 0)  &&  ((st as any).dummy ?? 0) < 51) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
      scene.text('Katja says it\'s easy as she gracefully dances around on the ice, but your attempt to even just stay upright ends up with you awkwardly falling on your ass in front of with what appears to be half of Pavlovsk.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You''re- " she says while trying to contain her laughter.
      scene.text(`"${((st as any).pcs_nickname ?? '')}! You're- " she says while trying to contain her laughter.`);
      scene.text('"Are you going to help me or will you continue standing there laughing at me?!" you scowl.');
      // TODO-QSP: dynamic text: "I - I''m sorry, <<$pcs_nickname>>!" she manages to say while laughing heartily.
      scene.text(`"I - I'm sorry, ${((st as any).pcs_nickname ?? '')}!" she manages to say while laughing heartily.`);
      scene.actions([
        { label: '…?', handler: (st: GameState) => {
    qspCall(st, 'pain', '5', 'asscheeks');
    (st as any).dummy = (Math.floor(Math.random() * 6) + 1);
    qspCall(st, 'stat', '');
    if (((st as any).dummy ?? 0) <= 3) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
      scene.text('You try desperately to burn a hole in the ice with your gaze, but finally, after what feels like a long and embarrassing eternity, Katja calms down and reaches for you.');
      // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, it''s just that you''re one of the worst skaters I''ve...
      scene.text(`"Sorry ${((st as any).pcs_nickname ?? '')}, it's just that you're one of the worst skaters I've seen!"`);
      scene.text('"Fuck you!" you scowl.');
      scene.text('Using her as a support, you pull yourself up and take care of your clothes. Now you only need to put up with the pain in your ass and the embarrassment of earning the title of "Pavlovsk\'s Worst Skater".');
      scene.text('"You want to try again?" she asks.');
      scene.text('"Of course I don\'t! Well, maybe one more time..."');
      scene.text('You grab Katja\'s hand, and with her help, you somehow stabilize and skate without killing yourself. After a fun half hour, it\'s time to look for something else to do.');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['katjaEv', 'kathan'] },
      ]);
    } else {
      if (((st as any).dummy ?? 0) === 4) {
        scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
        scene.text('"Are you okay?"');
        scene.text('Veronika is slowly sliding over the lake, showing her utter mastery as she barely uses a muscle to move around you. It takes you a moment to realize that she\'s talking to you.');
        scene.text('"Huh? Yeah, I guess. My pride is the most damaged."');
        scene.text('Veronika gives you an acknowledging nod without too much emotion and seems to think about something.');
        scene.text('"Good to know. If you want to improve, stay by the lake\'s border. It\'s less fun, but you\'ll learn quickly."');
        scene.text('She then turns without fuss and speeds away to do some over-the-top acrobatic moves that attract all the attention.');
        scene.text('Katja silently helps you to your feet and knowing that you\'re far, far behind the "Ice Queen", you decide to follow her advice and skate with the plebeians. This time, you don\'t fall and can enjoy the frozen lake for half an hour before tiring and deciding that it\'s time to look for something else to do.');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['katjaEv', 'kathan'] },
        ]);
      } else {
        if (((st as any).dummy ?? 0) === 5) {
          scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
          scene.text('"Weee!"');
          scene.text('Turning, you see Vanya skating towards you in slow motion with utterly exaggerated movements that are weirding out all present. He passes by your side and gives you a salute, then turns and returns doing the same, but this time he falls near you in, again, an exaggerated slow-motion performance.');
          scene.text('"Ouch! The pain! Ouch!"');
          scene.text('Nobody is finding the gesture funny and more than one person is actually murmuring their disapproval at the "obvious derision" of this "jerk." Taking advantage of the distraction, Katja helps you to your feet and fixes your clothes before leaving the lake, but you wait for Vanya.');
          scene.text('"It worked?" he grins.');
          scene.text('"Yeah… I think that now that everybody, including us, thinks that you\'re an idiot, they will forget my... performance."');
          scene.text('Vanya smiles and raises his right hand in a high-five motion. When you don\'t react, he shrugs and leaves you to your own devices. It\'s time to look for something else to do...');
          qspCall(st, 'stat', '');
          scene.actions([
            { label: 'Continue', goto: ['katjaEv', 'kathan'] },
          ]);
        } else {
          if (((st as any).dummy ?? 0) === 6) {
            scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
            scene.text('"Remember the ads, Katja! Don\'t throw trash in the lake!"');
            scene.text('Christina has just appeared and is skating around you backwards, showing off. Her words have rubbed Katja the wrong way, resulting in a confrontation.');
            scene.text('"Fuck you, Christina! Don\'t you have puppies to hurt? Leave us alone!"');
            scene.text('Christina doesn\'t answer. She just looks at Katja with a smile before she turns and leaves, letting a grumpy Katja help you stand up.');
            scene.text('Before you can react, however, Christina returns at full speed, scraping the lake\'s frozen surface with her skates and showering you with dirty ice before turning and skating away while laughing.');
            scene.text('It seems that, at least for a while, you have lost interest in skating. Time to look for something else to do.');
            qspCall(st, 'stat', '');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', '');
  }, goto: ['katjaEv', 'kathan'] },
            ]);
          }
        }
      }
    }
  } },
      ]);
    } else {
      if (((st as any).dummy ?? 0) > ((st as any).pcs_icesktng ?? 0)  &&  ((st as any).dummy ?? 0) > 50) {
        scene.img('images/characters/pavlovsk/school/girl/katja/KS2.jpg');
        // TODO-QSP: dynamic text: "Oh god! <<$pcs_nickname>>! What are you doing to me?!"
        scene.text(`"Oh god! ${((st as any).pcs_nickname ?? '')}! What are you doing to me?!"`);
        scene.text('Katja screams as she loses her balance and slips. It seems that you aren\'t really good at skating, and your intended "synchronized ice dancing" with her has ended with a tackle and Katja falling to the ground.');
        scene.text('"Oh shit! Sorry Katja!"');
        scene.text('With a silent thud and a lot of blow ice, she ends up sitting on the lake\'s frozen surface. You would say it looks painful if not for her giggling.');
        // TODO-QSP: dynamic text: Ouch! Who had the bright idea to give you skates, <<$pcs_nickname>>?"
        scene.text(`Ouch! Who had the bright idea to give you skates, ${((st as any).pcs_nickname ?? '')}?"`);
        qspCall(st, 'stat', '');
        scene.actions([
          { label: '…?', handler: (st: GameState) => {
    (st as any).dummy = (Math.floor(Math.random() * 4) + 1);
    qspCall(st, 'stat', '');
    if (((st as any).dummy ?? 0) <= 2) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS2.jpg');
      scene.text('You stand there looking at the giggling girl, feeling utterly humiliated. Weird, because she\'s the one on the ground, but she isn\'t really troubled by this fact.');
      // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! What are you waiting for? Help me!"
      scene.text(`"Come on, ${((st as any).pcs_nickname ?? '')}! What are you waiting for? Help me!"`);
      scene.text('She raises her arms and looks at you, pouting and acting like a little girl as you stand there, trying to decide how to react to her cute display.');
      scene.text('"I don\'t know what to do! Aren\'t you a little old to be acting that way, Katja?"');
      scene.text('She sniffs and flutters her eyelashes in reponse before giving you puppy eyes. You sigh, surrendering to the childish display and help her to her feet.');
      scene.text('Your reward for the chivalrous display? She gives you a candid hug. It feels nice and makes the last tumbling half hour worth it.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['slut'] -= 5
  }, goto: ['katjaEv', 'kathan'] },
      ]);
    } else {
      if (((st as any).dummy ?? 0) === 3) {
        scene.img('images/characters/pavlovsk/school/girl/katja/KS2.jpg');
        scene.text('Flabergasted by Katja\'s gigging display, you don\'t see anyone approaching until a tall figure slides by your side and extends a hand towards Katja. Is that Ivan?');
        scene.text('"Come on girl. Get up!"');
        scene.text('Grabbing her hand, he pulls Katja towards him, prompting her to give him an awkward embrace that ends her giggling and causes her to blush. For several seconds, she stands there looking nervously at the jock until you cough and she practically jumps away from him.');
        scene.text('"Sorry! I mean... Thanks! Uhh..."');
        scene.text('Ivan just smiles and, giving you both a nod, turns and silently skates away, leaving you with a flustered Katja who gives you sideways glances.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] += 5
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/KS2.jpg');
        // TODO-QSP: dynamic text: "Good question. This is by far your worst performance, <<$pcs_nickname>>!"
        scene.text(`"Good question. This is by far your worst performance, ${((st as any).pcs_nickname ?? '')}!"`);
        scene.text('You turn to see Lizaveta biting her tongue in concentration as she does a recording on her smartphone.');
        scene.text('"And... Uploaded! Let\'s see how many likes you\'ll receive this time!"');
        scene.text('You roll your eyes and help Katja, who has suddenly stopped her whining and gets up. You both stand looking intensely at Lizaveta, who after a few seconds, understands the silent message and leaves.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      }
    }
  } },
        ]);
      } else {
        if (((st as any).dummy ?? 0) < ((st as any).pcs_icesktng ?? 0)) {
          if (((st as any).dummy ?? 0) > 75) {
            scene.img('images/characters/pavlovsk/school/girl/katja/KS5.jpg');
            scene.text('As you both skate gracefully around the lake, somebody calls you.');
            // TODO-QSP: dynamic text: "You''ve improved, <<$pcs_nickname>>."
            scene.text(`"You've improved, ${((st as any).pcs_nickname ?? '')}."`);
            scene.text('Turning towards the voice, you see Veronika skating gracefully by your side. She\'s looking at you with... curiosity? Judgment? After a moment, she begins to speed away, but not before making a gesture to follow her. Is this a challenge?');
            // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! Showtime!" Katja screams at you excitedly as you ru...
            scene.text(`"Come on, ${((st as any).pcs_nickname ?? '')}! Showtime!" Katja screams at you excitedly as you rush towards the "Ice Queen", following her lead around the lake and imitating her movements.`);
            scene.text('Most people stop to watch your performance, but it doesn\'t matter how much you strive, Veronika is always a little faster and a little more graceful. After a gruelling half hour, she finally stops.');
            // TODO-QSP: dynamic text: "Hmm. Not bad, <<$pcs_nickname>>."
            scene.text(`"Hmm. Not bad, ${((st as any).pcs_nickname ?? '')}."`);
            scene.text('There is no emotion, or even tiredness in the her voice, but there is... Approval? After a silent moment, she quickly leaves, letting you return to an excited Katja.');
            // TODO-QSP: dynamic text: "That was so cool, <<$pcs_nickname>>! You are good!"
            scene.text(`"That was so cool, ${((st as any).pcs_nickname ?? '')}! You are good!"`);
            scene.text('You smile tiredly as the crowd returns to their own skating, but there is more than a good share of wonderment at your demonstration. This was fun, but it\'s time to look for something else to do.');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 5);
    qspCall(st, 'npc_relationship', 'modify', 'A141', 5);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (10);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (5);
    qspCall(st, 'exp_gain', 'stren', 1);
    qspCall(st, 'exp_gain', 'agil', 1);
    qspCall(st, 'exp_gain', 'react', 1);
    qspCall(st, 'exp_gain', 'icesktng', 1);
    qspGoto(st, 'katjaEv', 'kathan');
  } },
            ]);
          } else {
            if (((st as any).dummy ?? 0) > 50) {
              scene.img('images/characters/pavlovsk/school/girl/katja/KS4.jpg');
              // TODO-QSP: dynamic text: "Oh god! <<$pcs_nickname>>! What are you doing to me?!"
              scene.text(`"Oh god! ${((st as any).pcs_nickname ?? '')}! What are you doing to me?!"`);
              scene.text('Katja screams as she loses her balance and slips. Fortunately, you catch her before she falls and help her to recover her balance. It seems that you aren\'t really good at skating, and your intended "synchronized ice dancing" with her has ended with a tackle and Katja barely standing.');
              scene.text('"Oh shit! Sorry Katja!"');
              scene.text('Smiling, she grabs your hand and pulls, taking the lead and skating towards the crowd, this time without flourishing moves. You both enjoy some well-deserved distraction from your everyday problems.');
              scene.text('And that is how you pass the next half hour. Skating, giggling and just showing off before it\'s time to look for something else to do.');
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEv', 'kathan'] },
              ]);
            } else {
              scene.img('images/characters/pavlovsk/school/girl/katja/KS3.jpg');
              scene.text('Skating is fun! Skating is easy! At least that\'s what you\'re telling yourself as you try not to fall and make yourself look like a fool.');
              scene.text('"Katja! Don\'t let me fall!"');
              scene.text('A gold medal in ice skating is out of your reach, but most people enjoying the frozen lake are also in your situation, so a pair of girls fumbling their way through the crowd isn\'t really out of the ordinary.');
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Don''t let me go!" Katja squeals.
              scene.text(`"${((st as any).pcs_nickname ?? '')}! Don't let me go!" Katja squeals.`);
              scene.text('You hold each other, laughing as you try to dance over the ice. After a great half hour, you\'re both a little weary and decide that it\'s time to look for something else to do.');
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['katjaEv', 'kathan'] },
              ]);
            }
          }
        }
      }
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlayingInSnow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KWT9.jpg');
  scene.text('Snow isn\'t exactly a novelty during the winter, but being the first to find a clean parcel without footsteps, car tracks or snot-nosed kids around <i>is</i> lucky!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a snowball fight', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT10.jpg');
    scene.text('A flash of red hair suddenly appears before some snow is suddenly blown in your face, blinding you as you hear Katja laugh triumphantly.');
    scene.text('"Katja, I swear! No matter if it takes an eternity, YOU WILL BOW DOWN BEFORE ME!"');
    scene.text('She just laughs and you engage in a furious snowball battle. Ambushes and stealth acts worthy of the Spetsnaz play between you before you fall laughing into the snow. It seems that, for today at least, the battle has ended without a clear winner.');
    scene.actions([
      { label: 'Continue', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
    { label: 'Make snow angels', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT11.jpg');
    scene.text('The thought of the biting cold races through your mind as you lie on the frozen ground. The snow, relentless in its pursuit, attempts to breach the meager defense offered by your winter garments');
    scene.text('You shout at the heavens, and with unwavering determination, your arms and legs defy the icy grip of the snow, molding it to your resolute form before a sudden icy wind blasts against your face.');
    // TODO-QSP: "<<$pcs_nickname>>! Haha! You''re insane!"
    scene.text('You glance at a smiling Katja, who tries to stand but ends up seated on the ground, laughing at your antics until you extend a hand to help her to her feet. There, on the ground, your silhouettes remain. It\'s been a delightful adventure, but now the cold seeps into your bones, suggesting it\'s time to find another activity.');
    scene.actions([
      { label: 'Continue', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
    { label: 'Build a snowman', handler: (st: GameState) => {
    scene.text('You know the drill; it isn\'t really that hard. Three big snowballs, some stones for details, maybe some discarded clothes from a dumpster...');
    scene.text('"The red scarf doesn\'t go with those sticks," Katja pouts.');
    scene.text('You have scoured the dumpsters and picked the finest branches in the area, but somehow that isn\'t enough.');
    scene.text('"You\'re right," you reply. "I\'m thinking maybe... That old jacket!"');
    scene.text('After half an hour of intense effort, your masterful creation is ready for posterity and it\'s time to find something else to do.');
    scene.actions([
      { label: 'Continue', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHockeyMatch(s: GameState, scene: SceneBuilder): void {
  (s as any).dummy = (Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KWT13.jpg');
  scene.text('As you search for something to do, you catch wind of an impromptu ice hockey match involving your school\'s team. Katja isn\'t really into sports, but with the prospect of Vanya and Vicky\'s presence, she urges you to join the event.');
  // TODO-QSP: dynamic text: "Katja! <<$pcs_nickname>>! Over here!"
  scene.text(`"Katja! ${((s as any).pcs_nickname ?? '')}! Over here!"`);
  scene.text('Vicky\'s exclamations somehow pierce through the noise of the crowd, guiding you to the lively redhead. She wears an excited smile as she watches Vanya and the others dominate the field. Without missing a beat, she shouts, jumps, dances and provides enthusiastic support to your team.');
  scene.text('"Your boyfriend sucks and you\'re embarrassing yourself!"');
  scene.text('Some girls next to you appear less than thrilled with Vicky\'s spirited cheering. Katja appears offended, while Vicky playfully sticks her tongue out before resuming her cheers. On the other side, the other girls scoff at your group and, after deeming your little gang "childish," return their focus to the match.');
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Teach the bitch squad a lesson:', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Teach the bitch squad a lesson', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT14.jpg');
    scene.text('You smile while slowly walking towards the shitmouth and sucker-punch the bitch! She falls to the ground in surprised pain as everyone stops, looking surprised as Katja reaches towards you, alarmed.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! What are you doing?!"
    scene.text(`"${((st as any).pcs_nickname ?? '')}! What are you doing?!"`);
    scene.text('The silence can be cut with a knife before somebody on the field tackles another player.');
    scene.text('The bitch squad then suddenly jumps you and as everyone starts attacking the nearest target as Vicky quickly escorts Katja from the madness.');
    scene.actions([
      { label: 'Brawl', handler: (st: GameState) => {
    (st as any).boydesc = 'The bitch squad';
    (st as any).npcdesc = 'The bitch squad';
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT14.jpg');
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'bitch squad');
    qspGoto(st, 'fight', 'start');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue watching the match', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A15', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A165', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT13.jpg');
    scene.text('It\'s best to keep it cool and not make a big deal out of it. After all, this is supposed to be fun! And fun it is! You join the enthusiastic Vicky and Katja to cheer on your boys, letting them know you\'re there to support.');
    scene.text('Vanya acknowledges your cheering squad and charges towards the rival team\'s net, attempting to outplay their goalie. However, the other team isn\'t sitting idle; they counterattack, leading to a full-contact showdown between the teams. This is just the start of an hour-long struggle for supremacy.');
    if (((st as any).dummy ?? 0) === 1) {
      scene.text('You shout with joy when, after numerous falls, kicks and some bloodied noses, your team emerges victorious. It feels great, and Vanya skates over to your group, embracing an excited Vicky, who taunts the bitch squad.');
      scene.text('You and Katja exchange triumphant glances as the crestfallen girls retreat to tend to their injured men. It\'s been a blast, but now it\'s time to find something else to do.');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', '');
  }, goto: ['katjaEv', 'kathan'] },
      ]);
    } else {
      scene.text('After many falls, kicks and some bloody noses, your team loses. Vanya lies tired on the ground, and you join the Meynolds to console the dejected boy as the bitch squad giggles at your defeat.');
      scene.text('Vicky embraces her disappointed boyfriend and shares a few comforting words that bring a sheepish smile to the jock\'s face. He swiftly gets up, grabs the redhead, and they leave, with a wink from Vicky. It\'s time to find something else to do.');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', '');
  }, goto: ['katjaEv', 'kathan'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBeachNude(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 20) {
    scene.img('images/characters/pavlovsk/school/girl/katja/KL2.jpg');
    scene.text('After reaching the secluded beach and making sure there isn\'t voyeurs, you both strip from your clothes and stand naked by the lake.');
    scene.text('You both stand in silence, enjoying the sun\'s warmth on your bare skin as Katja sighs, full of liberation, and reaches for your hand.');
    // TODO-QSP: dynamic text: "So, what now <<$pcs_nickname>>?"
    scene.text(`"So, what now ${((s as any).pcs_nickname ?? '')}?"`);
  } else {
    scene.img('images/characters/pavlovsk/school/girl/katja/KL3.jpg');
    scene.text('After reaching the secluded beach and making sure that there isn\'t voyeurs, you both strip from your clothes, but as Katja reaches for her bikini, she stops and looks at you.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, aren''t you going to put your swimsuit on?"
    scene.text(`"${((s as any).pcs_nickname ?? '')}, aren't you going to put your swimsuit on?"`);
    scene.text('You stand there, proud of your naked body, and smile at her as she looks between her bikini and you, conflicted.');
    // TODO-QSP: dynamic text: "The things that you make me do <<$pcs_nickname>>..."
    scene.text(`"The things that you make me do ${((s as any).pcs_nickname ?? '')}..."`);
    scene.text('With embarrassed resignation, Katja drops the bikini and stands before you naked. "Now what?"');
  }
  if (((s as any).pcs_inhib ?? 0) < 20) {
    qspCall(s, 'exp_gain', 'inhib', 1);
  }
  if (((s as any).katjaQW ?? 0)?.['slut'] <= 20) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
  }
  if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    qspCall(s, 'outfit', 'backup', 'swim');
  }
  qspCall(s, 'outfit', 'strip_all');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
    scene.actions([
      { label: 'Swim', goto: ['katja_lake', 'swim'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tan', goto: ['katja_lake', 'tan'] },
    { label: 'Walk', goto: ['katja_lake', 'walk'] },
  ]);
  scene.build();
}

function enterSwim(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).katjaQW ?? 0)?.['slut'] <= 20) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
  }
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  if (((s as any).pcs_sweat ?? 0) > 10) {
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
  }
  qspCall(s, 'exercise', 'tier1', 30, 'stren', 'vital');
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_inhib ?? 0) < 20) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 20) {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, it''s getting a little late."
    scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, it's getting a little late."`);
    scene.text('"True. Let\'s go back."');
    scene.actions([
      { label: 'Redress and return home', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  } else {
    if ((Math.floor(Math.random() * 20) + 1) === 1) {
      qspGoto(s, 'katja_lake', 'ivan_appeared');
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.img('images/characters/pavlovsk/school/girl/katja/KL4.jpg');
        scene.text('"This is nice, Katja!"');
        scene.text('Thanks to the privacy enabled by the secluded beach, you can both enjoy the pleasure of swimming and have fun in the nude without peeping toms or judgemental prudes watching.');
        scene.text('The time passes quickly as you both enjoy the water and the sun on your bare skin, and little by little you tire until the only thing you can do is relax, floating on your back.');
        scene.text('As you lie rocking slowly over the water, you realize that half an hour has passed and you\'re beginning to wrinkle. It\'s time to look for something else to do.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/KL5.jpg');
        scene.text('"This is nice, Katja!"');
        scene.text('Yes, it is. Sometimes you really just want to be alone with a good friend with nobody watching.');
        scene.text('The time passes quickly as you both enjoy the water and the sun until the only thing you can do is relax, floating on your back.');
        scene.text('As you lie rocking slowly over the water, you realize that half an hour has passed and you\'re beginning to wrinkle. It\'s time to look for something else to do.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tan', goto: ['katja_lake', 'tan'] },
    { label: 'Walk', goto: ['katja_lake', 'walk'] },
    { label: 'Redress and look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'katjaEv', 'kathan');
  } },
  ]);
  scene.build();
}

function enterTan(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  if (((s as any).hour ?? 0) >= 20) {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, it''s getting a little late."
    scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, it's getting a little late."`);
    scene.text('"True. Let\'s go back."');
    scene.actions([
      { label: 'Redress and return home', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  } else {
    if ((Math.floor(Math.random() * 20) + 1) === 1) {
      qspGoto(s, 'katja_lake', 'ivan_appeared');
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.img('images/characters/pavlovsk/school/girl/katja/KL6.jpg');
        scene.text('Katja takes out some sunscreen and you smear it all over your naked bodies before you lie down and relax, letting the warm sun tan your skin without the danger of bikini lines.');
        // TODO-QSP: dynamic text: "I think it''s time, <<$pcs_nickname>>."
        scene.text(`"I think it's time, ${((s as any).pcs_nickname ?? '')}."`);
        scene.text('You blink in surprise, the sun\'s warmth having made you a little drowsy. Looking at the time, you see that half an hour has passed and it\'s probably best to stop unless you want some painful sunburn.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/katja_tanning_nude.jpg');
        scene.text('Katja takes out some sunscreen and you smear it all over your bodies before you both lie down and relax, letting the warm sun tan your skin.');
        // TODO-QSP: dynamic text: "I think it''s time, <<$pcs_nickname>>."
        scene.text(`"I think it's time, ${((s as any).pcs_nickname ?? '')}."`);
        scene.text('You blink in surprise, the sun\'s warmth having made you a little drowsy. Looking at the time, you see that half an hour has passed and it\'s probably best to stop unless you want some painful sunburn.');
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_inhib ?? 0) < 20) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).katjaQW ?? 0)?.['slut'] <= 20) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
  qspCall(s, 'mood', 'raise', 'tiny');
  if (((s as any).pcs_sweat ?? 0) < 35) {
    qspCall(s, 'sweat', 'add', 5);
  }
  (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + 3;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
    scene.actions([
      { label: 'Swim', goto: ['katja_lake', 'swim'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk', goto: ['katja_lake', 'walk'] },
    { label: 'Redress and look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'katjaEv', 'kathan');
  } },
  ]);
  scene.build();
}

function enterWalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  if (((s as any).hour ?? 0) >= 20) {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, it''s getting a little late."
    scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, it's getting a little late."`);
    scene.text('"True. Let\'s go back."');
    scene.actions([
      { label: 'Redress and return to her home', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  } else {
    if ((Math.floor(Math.random() * 20) + 1) === 1) {
      qspGoto(s, 'katja_lake', 'ivan_appeared');
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.img('images/characters/pavlovsk/school/girl/katja/KL7.jpg');
        scene.text('The secluded beach has, among other things, a beautiful landscape. Strange in these industrialized areas, but a place where you can take a relaxing walk, a naked walk where the naturally hidden paths let you enjoy the wind without startling the locals.');
        scene.text('After some girl talk, singing to the birds and feeding the squirrels, you realize that half an hour has passed and it\'s time to look for something else to do.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/KL8.jpg');
        scene.text('The secluded beach has, among other things, a beautiful landscape. Strange in these industrialized areas, but a place where you can take a relaxing walk and enjoy your mutual company under a beautiful sky.');
        scene.text('After some girl talk, singing to the birds and feeding the squirrels, you realize that half an hour has passed and it\'s time to look for something else to do.');
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_inhib ?? 0) < 20) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).katjaQW ?? 0)?.['slut'] <= 20) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
    scene.actions([
      { label: 'Swim', goto: ['katja_lake', 'swim'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tan', goto: ['katja_lake', 'tan'] },
    { label: 'Redress and look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'katjaEv', 'kathan');
  } },
  ]);
  scene.build();
}

function enterIvanAppeared(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/characters/pavlovsk/school/girl/katja/KL9.jpg');
  qspCall(s, 'stat', '');
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).katjaQW ?? 0)?.['slut'] <= 40) {
    // TODO-QSP: dynamic text: "Oh shit! <<$pcs_nickname>>!"
    scene.text(`"Oh shit! ${((s as any).pcs_nickname ?? '')}!"`);
    scene.text('Katja suddenly takes a dive into the water, letting only her head appear above the surface while looking intensely towards the beach.');
    scene.text('You follow her gaze and spot Ivan as he strides out of the water.');
    // TODO-QSP: dynamic text: "What are you waiting for, <<$pcs_nickname>>?! Come over here!"
    scene.text(`"What are you waiting for, ${((s as any).pcs_nickname ?? '')}?! Come over here!"`);
    qspCall(s, 'willpower', 'exhib', 'force', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Go and talk with him', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go and talk with him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-1));
    qspCall(st, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KL9.jpg');
    scene.text('"Let\'s talk to him!" you reply.');
    // TODO-QSP: dynamic text: Katja''s face contorts between disbelief and embarrassment. "Talk with him?! <<$...
    scene.text(`Katja's face contorts between disbelief and embarrassment. "Talk with him?! ${((st as any).pcs_nickname ?? '')}! We're <i>naked</i>!"`);
    scene.text('You just stand your ground and look at her as you wait patiently.');
    scene.text('"You… You\'re going to make me do this, aren\'t you?" she pouts.');
    scene.text('She gives you sad puppy eyes before she slowly rises from the water to stride towards you, extremely embarrassed.');
    scene.actions([
      { label: 'Talk with Ivan', goto: ['katja_lake', 'ivan_interaction'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Hide with Katja', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/KL9.jpg');
    scene.text('Katja isn\'t exactly an exhibitionist, so it\'s probably better to not embarrass her in front of him. You quickly dive into the water and hide beside Katja, waiting Ivan to leave.');
    // TODO-QSP: dynamic text: "Please <<$pcs_nickname>>! Don''t do anything stupid!"
    scene.text(`"Please ${((st as any).pcs_nickname ?? '')}! Don't do anything stupid!"`);
    scene.text('You want to retort that when you spot Ivan looking towards you. He doesn\'t say anything, just giving a little acknowledgment before quickly, maybe too quickly, returning to the water.');
    scene.text('"Oh fuck! Do you think he seen us?"');
    scene.text('"I... don\'t know. Maybe?"');
    scene.text('Katja obviously isn\'t happy with your answer and sits there red-faced. After a few more awkward minutes, you finally realize that Ivan has left the area, and it\'s safe to leave the water.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_stam ?? 0) >= (20 * (10 - ((st as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
      scene.actions([
        { label: 'Swim', goto: ['katja_lake', 'swim'] },
      ]);
    }
    scene.actions([
      { label: 'Redress and look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'katjaEv', 'kathan');
  } },
      { label: 'Tan', goto: ['katja_lake', 'tan'] },
      { label: 'Walk', goto: ['katja_lake', 'walk'] },
    ]);
  } },
    ]);
  } else {
    scene.text('Katja gives you a nudge in the ribs and excitedly points toward the beach.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, look who it is!"
    scene.text(`"${((s as any).pcs_nickname ?? '')}, look who it is!"`);
    scene.text('You glance over and spot Ivan as he strides out of the water.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk with him', goto: ['katja_lake', 'ivan_interaction'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterIvanInteraction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KL9.jpg');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('You approach Ivan and he just tilts his head and switches his gaze between you and Katja, but otherwise doesn\'t show much of a reaction. Not even Katja seems to know how to react to his silent passivity.');
  } else {
    if (((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('"Hey girls! Lucky me to encounter the most beautiful girls in all of the school!"');
      scene.text('You appreciate the timid smile creeping onto Katja\'s cutely blushing face.');
    } else {
      scene.text('As he takes a towel and begins to dry himself, Ivan, the perpetual silent wolf, gives you a nod acknowledging your existence, but doesn\'t seem to be really interested in the two of you. It\'s a little offensive, but for Ivan, hot girls coming to pester him during a training period must be a "vulgar" occurrence.');
      scene.text('You can appreciate a timid smile creeping onto Katja\'s cutely blushing face as she tries to attract his attention, but it isn\'t working. Maybe you could do something?');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat with him', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).pcs_inhib ?? 0) < 20) {
      qspCall(st, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
    }
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A3', 1);
    qspCall(st, 'mood', 'raise', 'tiny');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KL9.jpg');
    if (((st as any).IvanShowerQW ?? 0) === 11  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250) {
      qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
      qspCall(st, 'npc_relationship', 'modify', 'A3', 1);
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      qspCall(st, 'mood', 'raise', 'tiny');
      qspCall(st, 'stat', '');
      scene.text('"Hey Ivan! Why not sit with us for a while?"');
      scene.text('It looks like he\'s about to refuse when he turns to look at the lake before shrugging and walking over to you.');
      scene.text('"Yeah, why not? I\'ve swam enough."');
      scene.text('He sits between the two of you and chats with you, mostly about his dream to be at the boxing nationals. This isn\'t a particularly interesting subject for Katja, but even she seems taken by his driven dedication. That and his well defined abs...');
      scene.text('Katja slowly opens up to the conversation and soon the three of you are talking in a mismatched dialogue mixing sports, cosmetics and strangely, who is the girl with the best ass in school. The time passes and the conversation ends with a relaxed silence as you observe the landscape.');
      scene.text('"Okay girls, this has been fun, but I must return to my training," he smiles before he gives you both a little kiss on the cheek and walks towards the lake.');
    } else {
      qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
      qspCall(st, 'npc_relationship', 'modify', 'A3', 1);
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      qspCall(st, 'stat', '');
      scene.text('Talking with Ivan, King of the Lone Wolves, is an uphill battle. He\'s evidently not interested in the sort of things Katja likes to talk about and would probably prefer to jump back into his swimming. Alas, he\'s too polite, and that\'s a weakness you can exploit.');
      scene.text('After some pestering, Ivan finally resigns to sit with you and pass the time in "civilized" conversation. The minutes pass, with him primarily listening to your endless rants, but after a while, between Katja\'s shyness and Ivan\'s apathy, silence falls over the three of you, leaving your little trio observing the lake in tranquillity.');
      scene.text('"Ehm... I need to return to my training..."');
      scene.text('You blink as Ivan\'s words take you by surprise. Before you or Katja can react, he quickly returns to the lake.');
    }
    if (((st as any).pcs_stam ?? 0) >= (20 * (10 - ((st as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
      scene.actions([
        { label: 'Swim', goto: ['katja_lake', 'swim'] },
      ]);
    }
    if (((st as any).IvanShowerQW ?? 0) === 11  &&  ((st as any).fame ?? 0)?.['pav_slut'] < 250  &&  ((st as any).katjaQW ?? 0)?.['horny'] > 60  &&  ((st as any).katjaQW ?? 0)?.['anal_quest'] >= 2  &&  ((st as any).npc_had_sex ?? 0)?.['A14']  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
      scene.actions([
        { label: 'Tell him you are bored', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A3');
    qspCall(st, 'arousal', 'kiss', 5, 'group');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KL9.jpg');
    scene.text('Ivan stops in his tracks beside a blushing Katja as you say this. Turning his head with a roguish smile, he returns to you and delicately grabs your hands.');
    scene.text('"Okay, but it\'s probably better if we go to a more private place. The shacks are unoccupied, so let\'s go there."');
    scene.text('You and Katja giggle as you meekly follow the now more assertive Ivan to a building the jocks use to store most of their lake-related equipment, a conveniently discreet place where you can do "none-sport related" activities without the risk of unwanted attention.');
    scene.text('You barely have time to walk in the door before the three of you start making out, trashing the accumulated equipment and throwing Ivan to the ground, where he sits with a prominent erection.');
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      scene.img('images/characters/pavlovsk/school/girl/katja/sex/KIS1.jpg');
      if (((st as any).npc_throat ?? 0)?.['A14'] < 1) {
        // TODO-QSP: dynamic text: Katja looks transfixed by Ivan''s <<dick>>cm <<$dick_girth>> cock. This must be ...
        scene.text(`Katja looks transfixed by Ivan's ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock. This must be the first time she's seen something like this and seems unsure about what to do. Ivan extends his hand and tries to grab Katja's head, but before he reaches her, you slap his hand.`);
        scene.text('"No way, Ivan! Remember when you tried that with me in the shower?"');
        scene.text('He has the decency to grimace and look apologetic, then lies down and lets Katja take her time. For some time, she just observes his cock before she closes her eyes and starts licking him, gaining confidence until she finally opens her lips and plunges his cock into her mouth.');
        scene.text('She starts to go up and down in an out-of-sync rhythm, sometimes gagging and others, from Ivan\'s reaction, biting the tender flesh. However, he is, without a doubt, enjoying the blowjob.');
      } else {
        // TODO-QSP: dynamic text: You and Katja caress Ivan''s <<dick>>cm <<$dick_girth>> cock, causing him to gru...
        scene.text(`You and Katja caress Ivan's ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock, causing him to grunt in pleasure as he let you take control. Katja licks her lips and looks at you with questioning eyes. She seems to want to do this.`);
        scene.text('You sit on Ivan\'s chest and hold his dick for Katja, who sits over his legs and closes her eyes before bending to swallow his cock. His moans are a pleasure indicator as Katja\'s wet mouth closes over his sensitive flesh.');
        scene.text('Katja takes her time and seems to enjoy the blowjob as much as Ivan, who just grunts as her head goes up and down his dick, covering the trembling shaft with her saliva. Katja puts all her heart into giving Ivan a time to remember, but he soon extends his hands and grabs her head.');
      }
      scene.actions([
        { label: 'Katja gives him some deepthroat', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/shower6.mp4');
    if (((st as any).dick ?? 0) > ((st as any).npc_throat ?? 0)?.['A14']) {
      // TODO-QSP: dynamic text: Ivan makes Katja sit and he stands to put his <<dick>>cm <<$dick_girth>> cock be...
      scene.text(`Ivan makes Katja sit and he stands to put his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock before her face, frightening her with the length before her. In the meantime, you sit by her side and caress her back.`);
      scene.text('"Don\'t worry Katja, he isn\'t going to hurt you. Are you, Ivan?"');
      scene.text('He grimaces and delicately grabs Katja\'s hair before pressing his cock against her lips, which part and let the cock slide into her throat. You grab Ivan so he doesn\'t push with too much force, but as Katja clenches her fists, it isn\'t enough and after a long minute, she pushes him away.');
      scene.text('"I\'m sorry, Ivan!"');
      scene.text('He caresses her hair to calm the apologetic girl as he eyes your angry face before helping Katja to her feet and bending her over a bench.');
    } else {
      // TODO-QSP: dynamic text: Ivan makes Katja sit as he stands to put his <<dick>>cm <<$dick_girth>> cock bef...
      scene.text(`Ivan makes Katja sit as he stands to put his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock before her face, Katja looking intensely at the length before her. In the meantime, you sit by her side and caress her back.`);
      scene.text('"Don\'t worry Katja, he isn\'t going to hurt you. Are you, Ivan?"');
      scene.text('He grimaces and delicately grabs Katja\'s hair before pressing his cock against Katja\'s lips, which part and let the cock slide into her throat. You grab Ivan so he doesn\'t push with too much force as Katja takes his cock in earnest.');
      scene.text('"Oh fuck, Katja! You girls are amazing!"');
      scene.text('Ivan literally throatfucks Katja for several minutes, but that doesn\'t seems to make him cum; he takes his dick out and helps Katja to her feet before bending her over a bench.');
    }
    if (((st as any).dick ?? 0) > ((st as any).npc_throat ?? 0)?.['A14']) {
      ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
    }
    scene.actions([
      { label: 'Some anal with Katja', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur_sex', 10, 'group');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KIS2.jpg');
    if (((st as any).npc_ass ?? 0)?.['A14'] === 0) {
      if (((st as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 3;
      }
      // TODO-QSP: dynamic text: "Ivan, that''s... You''re going to- <<$pcs_nickname>>!"
      scene.text(`"Ivan, that's... You're going to- ${((st as any).pcs_nickname ?? '')}!"`);
      // TODO-QSP: dynamic text: Fear and nervousness cross Katja''s pretty face as she realizes where he''s guid...
      scene.text(`Fear and nervousness cross Katja's pretty face as she realizes where he's guiding his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock. You caress her face and give her a quick kiss.`);
      scene.text('"Relax Katja, it\'s happened to me before. Don\'t worry, it will be okay."');
      scene.text('She gulps nervously, but obediently lifts a leg over the bench to give Ivan better access to her asshole, gasping in surprise as he slowly pushes his cock inside.');
      scene.text('"Ouch! Ivan! Please-"');
      scene.text('You silence her pained grunts with a kiss and finger her wet pussy as Ivan slowly fucks her asshole. Even with all that, it\'s evident that this isn\'t easy for her as her moans of pain escape between your linked tongues.');
    } else {
      if (((st as any).dick1 ?? 0) < ((st as any).npc_ass ?? 0)?.['A14']) {
        if (((st as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 3;
        }
        // TODO-QSP: dynamic text: Katja bites her lips as she looks transfixed at Ivan''s <<dick>>cm <<$dick_girth...
        scene.text(`Katja bites her lips as she looks transfixed at Ivan's ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock. "I can't believe I'm letting you put that in me!"`);
        scene.text('You embrace her petite figure and join in the shameless examination, making Ivan look at you nervously. "Don\'t worry, Katja isn\'t-"');
        scene.text('Katja suddenly silences you with a kiss before placing a leg over the bench to give Ivan better access to her asshole. A delicious moan escapes between your linked lips as he slowly pushes his cock inside her ass.');
        // TODO-QSP: dynamic text: "Shut up <<$pcs_nickname>>! I want... Your fingers in my cunt!"
        scene.text(`"Shut up ${((st as any).pcs_nickname ?? '')}! I want... Your fingers in my cunt!"`);
        scene.text('You obey her command and start fingering her wet pussy as Ivan slowly fucks her asshole. The room quickly fills with the sound of the aroused moans coming from between your linked tongues.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['anal_quest'] = 3;
        }
        // TODO-QSP: dynamic text: "Ivan, please... I''m not exactly... experienced back there..." Katja blushes as...
        scene.text(`"Ivan, please... I'm not exactly... experienced back there..." Katja blushes as she takes a long look at his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock.`);
        scene.text('You caress her face and give her a quick kiss. "Relax Katja, we\'ve done this before. Ivan isn\'t going to hurt you."');
        scene.text('She closes her eyes and raises a leg over the bench to give Ivan better access to her asshole, a moan escaping her lips as he slowly pushes his cock into her ass.');
        scene.text('"It\'s… It\'s big!" she moans.');
        scene.text('You silence her moans with a kiss and start fingering her wet pussy as Ivan slowly fucks her asshole, the room quickly filling with a mix of excited moans and painful grunts coming from between your linked tongues.');
      }
    }
    if (((st as any).npc_ass ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
      ((st as any).npc_ass = (st as any).npc_ass ?? {})['A14'] = ((st as any).npc_ass['A14'] ?? 0) + (1);
    }
    if (((st as any).npc_ass ?? 0)?.['A14'] * 2 < ((st as any).dick ?? 0)) {
      ((st as any).npc_ass = (st as any).npc_ass ?? {})['A14'] = ((st as any).npc_ass['A14'] ?? 0) + (1);
    }
    scene.actions([
      { label: 'A happy ending', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KIS3.jpg');
    scene.text('Ivan grunts and moans as he relentlessly drills Katja\'s ass and you can only marvel at his incredible stamina, but eventually, the spit used to lubricate her ass dries and painful sounds start escaping her lips. You redouble your effort to make the girl cum and Katja soon lets out a pleasured cry as her body shakes in orgasmic bliss.');
    scene.text('She falls over the bench, but Ivan still isn\'t near release and there\'s only one thing to do as Ivan pulls out of Katja.');
    scene.text('You don\'t think, only react, and immediately suck, lick and jerk his cock to the sound of his pleasured moans. Even with that, it takes you several minutes to make him cum, giving you a mouthful of cum that spills out over Katja\'s ass.');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A3', 1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'cum_call', 'mouth', 'A3', 1);
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('The three of you lie cuddling on the floor before Ivan gets up and starts putting his clothes back on.');
    scene.text('"That was great, girls! We need to do this more often."');
    scene.text('He then kisses you both and, after checking that nobody is looking, walks out, leaving you and Katja alone.');
    if (((st as any).katjaQW ?? 0)?.['ivan_anal'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['ivan_anal'] = 1;
      // TODO-QSP: dynamic text: "You''ve done this with him before, <<$pcs_nickname>>. That made us..."
      scene.text(`"You've done this with him before, ${((st as any).pcs_nickname ?? '')}. That made us..."`);
      scene.text('"Ivan\'s anal harem sisters?"');
      scene.text('"I wasn\'t going to say <i>that</i>, but... Yeah?"');
      scene.text('She then tiredly lies against you for a while before slowly and painfully getting up.');
      scene.text('"Oh my! It\'s wasn\'t that bad. I mean I\'ve heard rumors, but woah! I wouldn\'t mind repeating it, but I need a rest."');
      scene.text('You get up and embrace her before redressing. Given her condition, it\'s probably best to take her home.');
    } else {
      scene.text('"Another score for Ivan\'s anal harem sisters!"');
      scene.text('You lie by her side and give her a cum-soaked kiss before she gets up. Given her condition, it\'s probably best to take her home.');
    }
    scene.actions([
      { label: 'Redress and take Katja home', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'pav_residential', '');
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
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/sex/KIS4.jpg');
      // TODO-QSP: dynamic text: You and Katja caress Ivan''s <<dick>>cm <<$dick_girth>> cock, causing him to gru...
      scene.text(`You and Katja caress Ivan's ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock, causing him to grunt in pleasure as he lets you take control. You slowly grow bold in your competition and start licking his dick.`);
      scene.text('Ivan sits back in a chair and his length is soon inside your mouth, the room soon filled with the sound of Ivan\'s moaning as Katja joins in by licking his shaft.');
      scene.text('You get lost in the moment as his cock rhythmically enters and exits your mouth as Katja becomes engrossed in her own endeavor, giving Ivan the time of his life.');
      // TODO-QSP: dynamic text: "Open your mouth, <<$pcs_nickname>>," he quietly moans.
      scene.text(`"Open your mouth, ${((st as any).pcs_nickname ?? '')}," he quietly moans.`);
      scene.actions([
        { label: 'You give him some deepthroat', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    if (((st as any).pcs_throat ?? 0) < ((st as any).dick ?? 0)) {
      qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    }
    if (((st as any).katjaQW ?? 0)?.['knows_BJ'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['knows_BJ'] = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/shower6.mp4');
    if (((st as any).pcs_throat ?? 0) < 15) {
      // TODO-QSP: dynamic text: You''re so engrossed in the act that your brain is unable to discern who has spo...
      scene.text(`You're so engrossed in the act that your brain is unable to discern who has spoken, only that a pair of hands close over your head and push, causing Ivan's ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock to fill your mouth.`);
      scene.text('Trying to resist the sudden invasion, you slap Ivan\'s legs and immediately releases his grip, making you fall back.');
      scene.text('"What the fuck, Ivan?!"');
      scene.text('He seems apprehensive and looks sideways at Katja, who is smiling sheepishly. It was her? The three of you just sit in silence, not knowing how to react.');
      scene.text('"Uhhh... I don\'t how to say this, but... I have a problem..."');
      scene.text('Ivan\'s words snap you from the sudden impasse, and after looking at his erection, you stand and invitingly bend over a nearby chair.');
    } else {
      // TODO-QSP: dynamic text: You''re so engrossed in the act that your brain is unable to discern who has spo...
      scene.text(`You're so engrossed in the act that your brain is unable to discern who has spoken, only that a pair of hands close over your head and push, causing Ivan's ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock to fill your mouth.`);
      scene.text('You close your fists and concentrate on relaxing your throat, letting his cock sink deeper into your throat.');
      // TODO-QSP: dynamic text: "Yeah <<$pcs_nickname>>! Show him!"
      scene.text(`"Yeah ${((st as any).pcs_nickname ?? '')}! Show him!"`);
      scene.text('Katja\'s excited voice reaches your ears as you grab Ivan\'s legs for support, and start deepthroating him, causing him to groan in pleasure and disbelief, but it still isn\'t enough to break his astonishing endurance.');
      scene.text('After a few minutes, your throat gets painfully dry and you slide his cock out of your mouth getting up and bending over a chair while looking over your shoulder with an inviting smile.');
    }
    scene.actions([
      { label: 'Time for anal', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(st, 'arousal', 'clit_finger', 5);
    if (((st as any).pcs_ass ?? 0) < ((st as any).dick ?? 0)) {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      if (((st as any).agape ?? 0) < 2) {
        (st as any).agape = 2;
      }
    }
    if (((st as any).katjaQW ?? 0)?.['knows_anal'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['knows_anal'] = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KIS5.jpg');
    if (((st as any).pcs_ass ?? 0) < 15) {
      scene.text('Ivan doesn\'t waste any time and positions himself at your backdoor, but stops and waits for Katja to separate your buttocks before he looks at you, waiting for a signal. Doubt creeps into your mind before you eventually answer.');
      scene.text('"I\'m... I\'m ready..."');
      scene.text('With that, he pushes slowly and his cock slides inside you, shooting pain up your back as Katja quickly kisses your forehead and slides a hand down to your pussy.');
      scene.text('You grit your teeth as Ivan starts fucking you in earnest, his vigorous grunts mixing with your painful ones, but thanks to Katja playing with your pussy, these slowly turn into pleasured moans.');
    } else {
      scene.text('Ivan doesn\'t waste any time and positions himself at your backdoor, but stops and waits for Katja to separate your buttocks before he looks at you, waiting for a signal.');
      scene.text('"What are you waiting for, Ivan? Are you worried about hurting me?" you say as you lick your lips.');
      scene.text('He smiles and pushes slowly, forcing his cock into your ass and shooting pleasant pain up your back as Katja starts making out with you while sliding a hand down to your pussy.');
      scene.text('The combined sensations of Katja fingering your pussy and Ivan\'s relentless pounding of your asshole overwhelms you with pleasure.');
    }
    scene.actions([
      { label: 'A happy ending', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KIS6.jpg');
    // TODO-QSP: dynamic text: Ivan grunts and moans as he relentlessly drills you with his <<dick>>cm <<$dick_...
    scene.text(`Ivan grunts and moans as he relentlessly drills you with his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock in an amazing show of stamina, but eventually, the spit used to lubricate your little hole dries and painful sounds escape your mouth. Katja catches the message and redoubles her effort in making you cum and soon, a throaty moan escapes your mouth as the combined sensations make you cum.`);
    scene.text('You fall sprawled over the chair, but Ivan still isn\'t near release. You and Katja smile before you kneel before him and proceed to give Ivan some well-deserved head.');
    scene.text('You both suck, lick and jerk his cock to the sound of his pleasured moans. Even with that, it takes you several minutes to make him cum, giving you a mouthful of cum that spills onto your breasts.');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A3', 1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
    (st as any).kiss = ((st as any).kiss ?? 0) + (1);
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A3'] = 1;
    qspCall(st, 'cum_call', 'mouth', 'A3', 1);
    qspCall(st, 'cum_call', 'breasts', 'A3', 1);
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('The three of you lie cuddling on the floor before Ivan gets up and starts putting his clothes back on.');
    scene.text('"That was great, girls! We need to do this more often."');
    scene.text('He then kisses you both and, checking that nobody is looking, walks out, leaving you and Katja alone.');
    scene.text('"We truly are a pair of sluts!" she grins.');
    scene.text('You lie by her side and give her a cum-soaked kiss before getting up and redressing. That was fun, but it\'s time to look for something else to do.');
    scene.actions([
      { label: 'Redress and look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'katjaEv', 'kathan');
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
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Tan', goto: ['katja_lake', 'tan'] },
      { label: 'Walk', goto: ['katja_lake', 'walk'] },
      { label: 'Redress and look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'katjaEv', 'kathan');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSauneTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).sauna_daystart = ((s as any).daystart ?? 0);
  (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + ((Math.floor(Math.random() * 3) + 2));
  (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (3);
  if (((s as any).pcs_inhib ?? 0) < 40) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 0));
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_inhib ?? 0) < 60) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  }
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
  }
  (s as any).pcs_makeup = 1;
  qspCall(s, 'stat', '');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.img('images/characters/pavlovsk/school/girl/katja/KS8.jpg');
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 20  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 20  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
      scene.text('After undressing and waiting for your turn, you and Katja enter the sauna. You sit completely naked, neither you nor Katja feeling any shame as you let the humid air smooth your skin.');
      scene.text('"Oh yes, this hits the spot!" she moans in satisfaction.');
      scene.text('Letting your problems melt away, you both relax in the sauna but as time passes, Katja seems unable to sit still, biting her lip while giving you longing gazes. It\'s undeniable that she\'s horny...');
      qspCall(s, 'willpower', 'sex', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Give in', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Give in', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'sel');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'sauna_sex1');
  } },
        ]);
      }
      if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
        qspCall(s, 'willpower', 'misc', 'force', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Go ice dipping', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go ice dipping', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'ice_dipping');
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Shower and leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'katjaEv', 'kathan');
  } },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] >= 20) {
        scene.text('After undressing and waiting for your turn, you and Katja enter the sauna. You sit completely naked, neither you nor Katja feeling any shame as you let the humid air smooth your skin.');
        scene.text('"Oh yes, this hits the spot!" she moans in satisfaction.');
        scene.text('Letting your problems melt away, you and Katja relax in the sauna until Katja draws your attention to the time. Half an hour has passed, more than enough for your skin treatment.');
        if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
          qspCall(s, 'willpower', 'misc', 'force', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Go ice dipping', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go ice dipping', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'ice_dipping');
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Shower and leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'katjaEv', 'kathan');
  } },
        ]);
      } else {
        scene.text('You both undress, but quickly grab Katja\'s bikini before she has a chance to put it on.');
        scene.text('"Hey! What are you doing? This isn\'t funny!" she squeals as she desperately tries to cover her naked body.');
        scene.text('"Going naked is better for your skin," you reply.');
        scene.text('You leave the locker room without expecting a response. She hesitates for a moment, clearly torn, before deciding to join you.');
        scene.text('She\'s angry at first, but after some time in the relaxing atmosphere, she returns to her normal demeanor and starts chatting.');
        // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>. I think this is enough," she eventually says.
        scene.text(`"Okay ${((s as any).pcs_nickname ?? '')}. I think this is enough," she eventually says.`);
        scene.text('You look at the time. Half an hour has passed, more than enough for your skin treatment.');
        if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
          qspCall(s, 'willpower', 'misc', 'force', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Go ice dipping', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go ice dipping', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'ice_dipping');
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Shower and leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'katjaEv', 'kathan');
  } },
        ]);
      }
    }
  } else {
    scene.img('images/characters/pavlovsk/school/girl/katja/KS7.jpg');
    scene.text('You both change in the lockers and after waiting for your turn, enter the sauna. There you sit, the hot and humid air helping to smoothen your precious skin.');
    // TODO-QSP: dynamic text: "Oh yes <<$pcs_nickname>> this hits the spot!"
    scene.text(`"Oh yes ${((s as any).pcs_nickname ?? '')} this hits the spot!"`);
    scene.text('Ahhh yes! Letting your problems melt away, you and Katja relax in the sauna, talking about your problems and doing some rumourmongering, making the time pass quickly.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>. I think that this is enough," she eventually says.
    scene.text(`"Okay ${((s as any).pcs_nickname ?? '')}. I think that this is enough," she eventually says.`);
    scene.text('You look at the time. Half an hour has passed, more than enough for your skin treatment.');
    if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
      qspCall(s, 'willpower', 'misc', 'force', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go ice dipping', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go ice dipping', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'ice_dipping');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Shower and leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'katjaEv', 'kathan');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterIceDipping(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'raise', 'tiny');
  if (((s as any).pcs_inhib ?? 0) < 50) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 0));
  }
  qspCall(s, 'stat', '');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
    qspCall(s, 'outfit', 'restore', 'swim');
    scene.img('images/characters/pavlovsk/school/girl/katja/KS13.jpg');
    scene.text('Grabbing Katja\'s hand, you run naked out of the sauna and jump into the lake\'s icy waters, the sudden cold shock toning your bodies.');
    scene.text('You scream with all your might to throw away the cold, Katja joining your exuberance and dipping with you several more times in the frozen lake.');
    scene.text('Trembling but happy, you both exit the water and proceed to do some warm-ups before redressing. This was fun, but it\'s time to look for something else to do.');
  } else {
    scene.img('images/characters/pavlovsk/school/girl/katja/KS14.jpg');
    scene.text('Grabbing Katja\'s hand, you run out of the sauna and jump into the lake\'s icy waters, the sudden cold shock toning your bodies.');
    scene.text('You scream with all your might to throw away the cold, Katja joining your exuberance and dipping with you several more times in the frozen lake.');
    scene.text('Trembling but happy, you both exit the water and proceed to do some warm-ups. This was fun, but it\'s time to look for something else to do.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Shower and leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'katjaEv', 'kathan');
  } },
  ]);
  scene.build();
}

function enterSaunaSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'kiss', 5, 'exhibitionism');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  }
  if (((s as any).pcs_inhib ?? 0) < 50) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 0));
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/KS9.jpg');
  if (((s as any).katjaQW ?? 0)?.['dom'] > 30) {
    scene.text('There is a tense silence as you both realize what\'s going to happen. The tension is finally broken when Katja smiles cutely, sits up straight and invitingly opens her legs.');
    // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>. What are you waiting for?"
    scene.text(`"Come on ${((s as any).pcs_nickname ?? '')}. What are you waiting for?"`);
    scene.text('She manages to sound utterly innocent, but isn\'t passive. As soon as you\'re within reach, she grabs a handful of your hair and forces a kiss on your lips.');
    scene.text('Your hand obediently reaches for her inner thighs, looking to penetrate the warm petals that hide between them. Warmth and wetness greet your fingers and you\'re soon masturbating her, caressing her quickly engorging clit.');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>... I want more!" she huskily whispers into your ear, her h...
    scene.text(`"Oh ${((s as any).pcs_nickname ?? '')}... I want more!" she huskily whispers into your ear, her hands gripping your shoulders as she tries to make you kneel.`);
    qspCall(s, 'willpower', 'cuni', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make her eat you', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make her eat you', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'arousal', 'cuni_give', 10, 'exhibitionism', 'dom');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KS11.jpg');
    scene.text('"You want more? Okay, but first..."');
    scene.text('You sit up and caress Katja\'s hair. She appears overwhelmed by lust and, understanding your unspoken request, she readily gets up from her seat and kneels, making way for you to take her spot. Her eager gaze conveys an insatiable desire.');
    scene.text('She spreads your legs so she has free access to your pussy and, with a deep sigh, starts lovingly kissing your thighs as you sit back and attempt to relax, biting your lip as the burning sensation in your cunt becomes greater with Katja\'s slow performance.');
    scene.text('"Fuck! Use your tongue!"');
    scene.text('She obeys and starts passionately licking your pussy, her tongue causing your body to tremble in pleasure. Your voice can\'t be contained and your moans soon fill the sauna, announcing to those beyond the debauched act occurring within, but it\'s not enough. You grab Katja by the hair and make her kiss you.');
    scene.actions([
      { label: 'Continue', goto: ['katja_lake', 'sauna_sex2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Eat her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni_give', 10, 'exhibitionism', 'sub');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KS10.jpg');
    scene.text('You kneel before Katja as she opens the legs, her beautiful pussy fully exposed and ready for you. The humid air, combined with your arousal, makes you somewhat dizzy and you just sit there.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Please!"
    scene.text(`"${((st as any).pcs_nickname ?? '')}! Please!"`);
    scene.text('Her voice, full of need, grabs your attention. Without missing a beat, you spread her legs to the max to give you better access. Katja grunts at the awkward position, but doesn\'t stop you as you dive between her thighs.');
    scene.text('The sauna\'s dense air weighs over your shoulders as you caress her tender flesh, making her squirm under your tongue and fingers. Katja is on edge but, right before cumming, she suddenly pulls you up to kiss you.');
    scene.actions([
      { label: 'Continue', goto: ['katja_lake', 'sauna_sex2'] },
    ]);
  } },
    ]);
  } else {
    scene.text('There is a tense silence as you both realize what\'s going to happen. The tension is finally broken when you grab a handful of her hair.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>?!"
    scene.text(`"${((s as any).pcs_nickname ?? '')}?!"`);
    scene.text('She looks nervously towards the door, but you ignore the danger and force your tongue into her mouth, silencing the complaints and eliciting a pleasured gasp as your unoccupied hand works its way towards her pussy.');
    scene.text('As you approach her inner thighs, she gives a startled moan and instinctively closes her legs, but you aren\'t going to be denied and force your hand in, looking to penetrate the warm petals that hide between them. Warmth and wetness greet your fingers and you\'re soon masturbating her, Katja having forgetten her reservations and opened her legs so you can caress her quickly engorging clit.');
    scene.text('She bites her lip and looks at you with desperate need. What are you going to do?');
    scene.actions([
      { label: 'Eat her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni_give', 10, 'exhibitionism', 'sub');
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KS10.jpg');
    scene.text('You kneel before Katja as she opens the legs, her beautiful pussy fully exposed and ready for you. The humid air, combined with your arousal, makes you somewhat dizzy and you just sit there.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Please!"
    scene.text(`"${((st as any).pcs_nickname ?? '')}! Please!"`);
    scene.text('Her voice, full of need, grabs your attention. Without missing a beat, you spread her legs to the max to give you better access. Katja grunts at the awkward position, but doesn\'t stop you as you dive between her thighs.');
    scene.text('The sauna\'s dense air weighs over your shoulders as you caress her tender flesh, making her squirm under your tongue and fingers. Katja is on edge but, right before cumming, she suddenly pulls you up to kiss you.');
    scene.actions([
      { label: 'Continue', goto: ['katja_lake', 'sauna_sex2'] },
    ]);
  } },
      { label: 'Make her eat you', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni_give', 10, 'exhibitionism', 'dom');
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KS11.jpg');
    scene.text('"You want more? Okay, but first..."');
    scene.text('You sit up and caress Katja\'s hair. She appears overwhelmed by lust and, understanding your unspoken request, she readily gets up from her seat and kneels, making way for you to take her spot. Her eager gaze conveys an insatiable desire.');
    scene.text('She spreads your legs so she has free access to your pussy and, with a deep sigh, starts lovingly kissing your thighs as you sit back and attempt to relax, biting your lip as the burning sensation in your cunt becomes greater with Katja\'s slow performance.');
    scene.text('"Fuck! Use your tongue!"');
    scene.text('She obeys and starts passionately licking your pussy, her tongue causing your body to tremble in pleasure. Your voice can\'t be contained and your moans soon fill the sauna, announcing to those beyond the debauched act occurring within, but it\'s not enough. You grab Katja by the hair and make her kiss you.');
    scene.actions([
      { label: 'Continue', goto: ['katja_lake', 'sauna_sex2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSaunaSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal_finger_give', 5, 'exhibitionism', 'lesbian');
  qspCall(s, 'arousal', 'cuni', 5, 'exhibitionism', 'lesbian');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'mood', 'raise', 'tiny');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A14'] = 1;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
  qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 3) + 0));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/KS12.jpg');
  scene.text('The two of you engage in a furious kissing war, the humid air in the sauna frustrating your attempts to think clearly. You caress and kiss your way around Katja\'s petite body as she constantly steps up the game.');
  scene.text('Somehow, you have ended up straddling Katja, who now lies sprawled over the bench, desperately licking your dripping wet pussy with all her might. Your breath comes out ragged, the hot air making your head dizzy, but you somehow understand what must be done.');
  scene.text('You reach back towards Katja\'s soaking equally wet pussy and start vigorously masturbating her. She instinctively raises her hips to milk more pleasure from your fingers, somehow synchronizing with your own needs until you both orgasm <i>hard</i>.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Catch your breath', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KS8.jpg');
    scene.text('It takes a long time for you both to catch your breath after the passionate sex you just had, the sauna\'s atmosphere not helping much.');
    scene.text('You smile tiredly at Katja, who sits happily by your side, caressing and kissing you.');
    scene.text('"That was <i>amazing</i>, but we should leave before we dry up like raisins!" you smirk and help her get up.');
    if (((st as any).month ?? 0) === 12  ||  ((st as any).month ?? 0) < 3) {
      qspCall(st, 'willpower', 'misc', 'force', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go ice dipping', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go ice dipping', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_lake', 'ice_dipping');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Shower and leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'swim');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'katjaEv', 'kathan');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'lake_activities':
      enterLakeActivities(s, scene);
      break;
    case 'sauna_time':
      enterSaunaTime(s, scene);
      break;
    case 'beach_in_swimwear1':
      enterBeachInSwimwear1(s, scene);
      break;
    case 'beach_in_swimwear2':
      enterBeachInSwimwear2(s, scene);
      break;
    case 'sauna_in_swimmwear1':
      enterSaunaInSwimmwear1(s, scene);
      break;
    case 'sauna_in_swimmwear2':
      enterSaunaInSwimmwear2(s, scene);
      break;
    case 'winter_activities':
      enterWinterActivities(s, scene);
      break;
    case 'playing_in_snow':
      enterPlayingInSnow(s, scene);
      break;
    case 'hockey_match':
      enterHockeyMatch(s, scene);
      break;
    case 'beach_nude':
      enterBeachNude(s, scene);
      break;
    case 'swim':
      enterSwim(s, scene);
      break;
    case 'tan':
      enterTan(s, scene);
      break;
    case 'walk':
      enterWalk(s, scene);
      break;
    case 'ivan_appeared':
      enterIvanAppeared(s, scene);
      break;
    case 'ivan_interaction':
      enterIvanInteraction(s, scene);
      break;
    case 'saune_time':
      enterSauneTime(s, scene);
      break;
    case 'ice_dipping':
      enterIceDipping(s, scene);
      break;
    case 'sauna_sex1':
      enterSaunaSex1(s, scene);
      break;
    case 'sauna_sex2':
      enterSaunaSex2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_lake: LocationDef = {
  name: 'katja_lake',
  title: 'One good thing about living in Pavlovsk is the access to riv',
  region: 'other',
  locationType: 'public_outdoors',
  locclass: 'beach',
  enter: enter,
};
