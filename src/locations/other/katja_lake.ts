import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'katja_lake', 'start');
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
      scene.img('images/locations/pavlovsk/lake/lake.summer.jpg');
      scene.img('images/locations/pavlovsk/lake/lake.autumn.jpg');
    }
    scene.text('One good thing about living in Pavlovsk is the access to rivers and lakes that let the locals do all sorts of water-related activities like swimming, tanning or just simply take a walk around the secluded groves.');
    scene.text('Katja and you are no less, and go to a secluded beach to do those things… and looking absolutely fabulous doing it.');
  }
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
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, it's getting a little late."
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, it's getting a little late."`);
    scene.text('"True. Let\'s go back."');
    scene.text('You grab Katja\'s hand and accompany her home.');
    scene.actions([
      { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['katja_lake', 'winter_activities'] }]);
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
        scene.img('images/locations/pavlovsk/lake/lake.summer.jpg');
        scene.img('images/locations/pavlovsk/lake/lake.autumn.jpg');
      }
      scene.text('You decide to spend some time at the secluded beach, but as you approach, a question surges into your mind. Go there naked? Katja is pretty body-conscientious, so maybe going full nudist isn\'t a good idea...');
      if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
        scene.actions([
          { label: 'Put on your swimwear', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 20  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 20) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KL1.jpg');
      scene.text('As you prepare to change, a long, somewhat husky sigh reaches your ears. It\'s come from Katja. She\'s in her underwear with her eyes closed, the wind playing with her red mane.');
      // TODO-QSP: dynamic text: "You know <<$pcs_nickname>>, the sun feels nice and there aren't people around h...
      scene.text(`"You know ${((s as any).pcs_nickname ?? 0)}, the sun feels nice and there aren't people around here. So what do you think?"`);
      scene.text('It\'s difficult to link the supposedly timid girl with this sensual woman that\'s trying to tempt you with all her heart.');
      // TODO-QSP: dynamic text: "Think <<$pcs_nickname>>. The water dripping over our naked skin, the wind in ou...
      scene.text(`"Think ${((s as any).pcs_nickname ?? 0)}. The water dripping over our naked skin, the wind in our hair, and the two of us... All alone..."`);
      qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
    if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
      scene.actions([
        { label: 'Swim', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 10);
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'exp_gain', 'inhib', 1);
    }
  }, goto: ['katja_lake', 'swim'] },
      ]);
    }
    scene.actions([
      { label: 'Tan', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 10);
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'exp_gain', 'inhib', 1);
    }
  }, goto: ['katja_lake', 'tan'] },
      { label: 'Walk', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 10);
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'exp_gain', 'inhib', 1);
    }
  }, goto: ['katja_lake', 'walk'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['katja_lake', 'beach_in_swimwear1'] }]);
    }
  } },
        ]);
      }
      if (((s as any).pcs_inhib ?? 0) > 20) {
        scene.actions([
          { label: 'Go in the nude', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
  }, goto: ['katja_lake', 'beach_nude'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'exhib', 'self', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Go in the nude [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go in the nude', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'exp_gain', 'inhib', 1);
    }
    qspCall(s, 'stat', '');
  }, goto: ['katja_lake', 'beach_nude'] },
          ]);
        }
      }
      scene.actions([
        { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-1));
  }, goto: ['katjaEV', 'kathan'] },
      ]);
    }
  }
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
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 20  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 20) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS6.jpg');
      scene.text('As you prepare to put on your swimwear, Katja lies against a wall and observes you undressing. She stands there in her underwear, her eyes full of mischief.');
      scene.text('"Is something wrong, Katja?" you ask.');
      scene.text('She just smiles and begins to caress and play with her red mane without breaking eye contact.');
      // TODO-QSP: dynamic text: "I... was thinking, <<$pcs_nickname>>... Maybe it's better if we go naked, I mea...
      scene.text(`"I... was thinking, ${((s as any).pcs_nickname ?? 0)}... Maybe it's better if we go naked, I mean, the hot steam will make us sweat and my bikini will feel uncomfortable. What do you think? All that sweat all over my skin. It gives you ideas, doesn't it?"`);
      qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    qspCall(s, 'arousal', 'voyeur', 10);
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'exp_gain', 'inhib', 1);
    }
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
  }, goto: ['katja_lake', 'saune_time'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['katja_lake', 'sauna_in_swimmwear1'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) > 20) {
      scene.actions([
        { label: 'Go in the nude', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
  }, goto: ['katja_lake', 'saune_time'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'exhib', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go in the nude [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go in the nude', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'exp_gain', 'inhib', 1);
    }
    qspCall(s, 'stat', '');
  }, goto: ['katja_lake', 'saune_time'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).pcs_inhib ?? 0) > 20) {
      scene.actions([
        { label: 'Go in the nude', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
  }, goto: ['katja_lake', 'saune_time'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'exhib', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go in the nude [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go in the nude', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'exp_gain', 'inhib', 1);
    }
    qspCall(s, 'stat', '');
  }, goto: ['katja_lake', 'saune_time'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-1));
  }, goto: ['katjaEv', 'kathan'] },
    ]);
  }
  scene.build();
}

function enterBeachInSwimwear1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'changingroom', 'view_swim_list');
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-1));
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
  scene.build();
}

function enterBeachInSwimwear2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PSwim ?? 0) === 0) {
    qspCall(s, 'stat', '');
    qspCall(s, 'changingroom', 'view_swim_list');
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-1));
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
  scene.build();
}

function enterSaunaInSwimmwear1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PSwim ?? 0) === 0) {
    qspCall(s, 'changingroom', 'view_swim_list');
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-1));
  }, goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.actions([{ label: 'Continue', goto: ['katja_lake', 'saune_time'] }]);
  }
  scene.build();
}

function enterSaunaInSwimmwear2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PSwim ?? 0) === 0) {
    qspCall(s, 'changingroom', 'view_swim_list');
    scene.actions([
      { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-1));
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
  scene.build();
}

function enterWinterActivities(s: GameState, scene: SceneBuilder): void {
  (s as any).dummy = Math.floor(Math.random() * 29) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).dummy ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['katja_lake', 'playing_in_snow'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['katja_lake', 'hockey_match'] }]);
    if (((s as any).dummy ?? 0) >= 3  &&  ((s as any).mc_inventory ?? 0)?.['ice_skates'] === 0) {
      scene.img('images/locations/pavlovsk/lake/lake.winter.jpg');
      scene.text('It\'s winter and most activities on the lake are limited. If you had skates you could use them on the ice-covered waters, but at the moment, it seems that you can only look at the frozen waters.');
      scene.actions([
        { label: 'Continue', goto: ['katjaEv', 'kathan'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/lake/lake.winter.jpg');
      // TODO-QSP: dynamic text: "Let's skate <<$pcs_nickname>>!".
      scene.text(`"Let's skate ${((s as any).pcs_nickname ?? 0)}!".`);
      scene.text('Giggling, Katja grabs your hand and pushes you towards the ice.');
      scene.actions([
        { label: 'Skate!', handler: (st: GameState) => {
    (s as any).dummy = Math.floor(Math.random() * 100) + 1;
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'exp_gain', 'stren', 1);
    qspCall(s, 'exp_gain', 'agil', 1);
    qspCall(s, 'exp_gain', 'react', 1);
    qspCall(s, 'exp_gain', 'icesktng', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
    qspCall(s, 'stat', '');
    if (((s as any).dummy ?? 0) > ((s as any).pcs_icesktng ?? 0)  &&  ((s as any).dummy ?? 0) < 51) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
      scene.text('Katja says it\'s easy as she gracefully dances around on the ice, but your attempt to even just stay upright ends up with you awkwardly falling on your ass in front of with what appears to be half of Pavlovsk.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You're- " she says while trying to contain her laughter.
      scene.text(`"${((s as any).pcs_nickname ?? 0)}! You're- " she says while trying to contain her laughter.`);
      scene.text('"Are you going to help me or will you continue standing there laughing at me?!" you scowl.');
      // TODO-QSP: dynamic text: "I - I'm sorry, <<$pcs_nickname>>!" she manages to say while laughing heartily.
      scene.text(`"I - I'm sorry, ${((s as any).pcs_nickname ?? 0)}!" she manages to say while laughing heartily.`);
      scene.actions([
        { label: '…?', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asscheeks');
    (s as any).dummy = Math.floor(Math.random() * 6) + 1;
    qspCall(s, 'stat', '');
    if (((s as any).dummy ?? 0) <= 3) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
      scene.text('You try desperately to burn a hole in the ice with your gaze, but finally, after what feels like a long and embarrassing eternity, Katja calms down and reaches for you.');
      // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, it's just that you're one of the worst skaters I've se...
      scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, it's just that you're one of the worst skaters I've seen!"`);
      scene.text('"Fuck you!" you scowl.');
      scene.text('Using her as a support, you pull yourself up and take care of your clothes. Now you only need to put up with the pain in your ass and the embarrassment of earning the title of "Pavlovsk\'s Worst Skater".');
      scene.text('"You want to try again?" she asks.');
      scene.text('"Of course I don\'t! Well, maybe one more time..."');
      scene.text('You grab Katja\'s hand, and with her help, you somehow stabilize and skate without killing yourself. After a fun half hour, it\'s time to look for something else to do.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['katjaEv', 'kathan'] },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
      scene.text('"Are you okay?"');
      scene.text('Veronika is slowly sliding over the lake, showing her utter mastery as she barely uses a muscle to move around you. It takes you a moment to realize that she\'s talking to you.');
      scene.text('"Huh? Yeah, I guess. My pride is the most damaged."');
      scene.text('Veronika gives you an acknowledging nod without too much emotion and seems to think about something.');
      scene.text('"Good to know. If you want to improve, stay by the lake\'s border. It\'s less fun, but you\'ll learn quickly."');
      scene.text('She then turns without fuss and speeds away to do some over-the-top acrobatic moves that attract all the attention.');
      scene.text('Katja silently helps you to your feet and knowing that you\'re far, far behind the "Ice Queen", you decide to follow her advice and skate with the plebeians. This time, you don\'t fall and can enjoy the frozen lake for half an hour before tiring and deciding that it\'s time to look for something else to do.');
      qspCall(s, 'stat', '');
      if (((s as any).dummy ?? 0) === 5) {
        scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
        scene.text('"Weee!"');
        scene.text('Turning, you see Vanya skating towards you in slow motion with utterly exaggerated movements that are weirding out all present. He passes by your side and gives you a salute, then turns and returns doing the same, but this time he falls near you in, again, an exaggerated slow-motion performance.');
        scene.text('"Ouch! The pain! Ouch!"');
        scene.text('Nobody is finding the gesture funny and more than one person is actually murmuring their disapproval at the "obvious derision" of this "jerk." Taking advantage of the distraction, Katja helps you to your feet and fixes your clothes before leaving the lake, but you wait for Vanya.');
        scene.text('"It worked?" he grins.');
        scene.text('"Yeah… I think that now that everybody, including us, thinks that you\'re an idiot, they will forget my... performance."');
        scene.text('Vanya smiles and raises his right hand in a high-five motion. When you don\'t react, he shrugs and leaves you to your own devices. It\'s time to look for something else to do...');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['katjaEv', 'kathan'] },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/KS1.jpg');
        scene.text('"Remember the ads, Katja! Don\'t throw trash in the lake!"');
        scene.text('Christina has just appeared and is skating around you backwards, showing off. Her words have rubbed Katja the wrong way, resulting in a confrontation.');
        scene.text('"Fuck you, Christina! Don\'t you have puppies to hurt? Leave us alone!"');
        scene.text('Christina doesn\'t answer. She just looks at Katja with a smile before she turns and leaves, letting a grumpy Katja help you stand up.');
        scene.text('Before you can react, however, Christina returns at full speed, scraping the lake\'s frozen surface with her skates and showering you with dirty ice before turning and skating away while laughing.');
        scene.text('It seems that, at least for a while, you have lost interest in skating. Time to look for something else to do.');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'small');
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      }
      scene.actions([
        { label: 'Continue', goto: ['katjaEv', 'kathan'] },
      ]);
    }
    if (((s as any).dummy ?? 0) > ((s as any).pcs_icesktng ?? 0)  &&  ((s as any).dummy ?? 0) > 50) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS2.jpg');
      // TODO-QSP: dynamic text: "Oh god! <<$pcs_nickname>>! What are you doing to me?!"
      scene.text(`"Oh god! ${((s as any).pcs_nickname ?? 0)}! What are you doing to me?!"`);
      scene.text('Katja screams as she loses her balance and slips. It seems that you aren\'t really good at skating, and your intended "synchronized ice dancing" with her has ended with a tackle and Katja falling to the ground.');
      scene.text('"Oh shit! Sorry Katja!"');
      scene.text('With a silent thud and a lot of blow ice, she ends up sitting on the lake\'s frozen surface. You would say it looks painful if not for her giggling.');
      // TODO-QSP: dynamic text: Ouch! Who had the bright idea to give you skates, <<$pcs_nickname>>?"
      scene.text(`Ouch! Who had the bright idea to give you skates, ${((s as any).pcs_nickname ?? 0)}?"`);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: '…?', handler: (st: GameState) => {
    (s as any).dummy = Math.floor(Math.random() * 4) + 1;
    qspCall(s, 'stat', '');
    if (((s as any).dummy ?? 0) <= 2) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KS2.jpg');
      scene.text('You stand there looking at the giggling girl, feeling utterly humiliated. Weird, because she\'s the one on the ground, but she isn\'t really troubled by this fact.');
      // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! What are you waiting for? Help me!"
      scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}! What are you waiting for? Help me!"`);
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
      scene.img('images/characters/pavlovsk/school/girl/katja/KS2.jpg');
      scene.text('Flabergasted by Katja\'s gigging display, you don\'t see anyone approaching until a tall figure slides by your side and extends a hand towards Katja. Is that Ivan?');
      scene.text('"Come on girl. Get up!"');
      scene.text('Grabbing her hand, he pulls Katja towards him, prompting her to give him an awkward embrace that ends her giggling and causes her to blush. For several seconds, she stands there looking nervously at the jock until you cough and she practically jumps away from him.');
      scene.text('"Sorry! I mean... Thanks! Uhh..."');
      scene.text('Ivan just smiles and, giving you both a nod, turns and silently skates away, leaving you with a flustered Katja who gives you sideways glances.');
      scene.img('images/characters/pavlovsk/school/girl/katja/KS2.jpg');
      // TODO-QSP: dynamic text: "Good question. This is by far your worst performance, <<$pcs_nickname>>!"
      scene.text(`"Good question. This is by far your worst performance, ${((s as any).pcs_nickname ?? 0)}!"`);
      scene.text('You turn to see Lizaveta biting her tongue in concentration as she does a recording on her smartphone.');
      scene.text('"And... Uploaded! Let\'s see how many likes you\'ll receive this time!"');
      scene.text('You roll your eyes and help Katja, who has suddenly stopped her whining and gets up. You both stand looking intensely at Lizaveta, who after a few seconds, understands the silent message and leaves.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] += 5
  }, goto: ['katjaEv', 'kathan'] },
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', (-1));
  }, goto: ['katjaEv', 'kathan'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).dummy ?? 0) > 75) {
        scene.img('images/characters/pavlovsk/school/girl/katja/KS5.jpg');
        scene.text('As you both skate gracefully around the lake, somebody calls you.');
        // TODO-QSP: dynamic text: "You've improved, <<$pcs_nickname>>."
        scene.text(`"You've improved, ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('Turning towards the voice, you see Veronika skating gracefully by your side. She\'s looking at you with... curiosity? Judgment? After a moment, she begins to speed away, but not before making a gesture to follow her. Is this a challenge?');
        // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! Showtime!" Katja screams at you excitedly as you ru...
        scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}! Showtime!" Katja screams at you excitedly as you rush towards the "Ice Queen", following her lead around the lake and imitating her movements.`);
        scene.text('Most people stop to watch your performance, but it doesn\'t matter how much you strive, Veronika is always a little faster and a little more graceful. After a gruelling half hour, she finally stops.');
        // TODO-QSP: dynamic text: "Hmm. Not bad, <<$pcs_nickname>>."
        scene.text(`"Hmm. Not bad, ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('There is no emotion, or even tiredness in the her voice, but there is... Approval? After a silent moment, she quickly leaves, letting you return to an excited Katja.');
        // TODO-QSP: dynamic text: "That was so cool, <<$pcs_nickname>>! You are good!"
        scene.text(`"That was so cool, ${((s as any).pcs_nickname ?? 0)}! You are good!"`);
        scene.text('You smile tiredly as the crowd returns to their own skating, but there is more than a good share of wonderment at your demonstration. This was fun, but it\'s time to look for something else to do.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 5);
    qspCall(s, 'npc_relationship', 'modify', 'A141', 5);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (10);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (5);
    qspCall(s, 'exp_gain', 'stren', 1);
    qspCall(s, 'exp_gain', 'agil', 1);
    qspCall(s, 'exp_gain', 'react', 1);
    qspCall(s, 'exp_gain', 'icesktng', 1);
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/KS4.jpg');
        // TODO-QSP: dynamic text: "Oh god! <<$pcs_nickname>>! What are you doing to me?!"
        scene.text(`"Oh god! ${((s as any).pcs_nickname ?? 0)}! What are you doing to me?!"`);
        scene.text('Katja screams as she loses her balance and slips. Fortunately, you catch her before she falls and help her to recover her balance. It seems that you aren\'t really good at skating, and your intended "synchronized ice dancing" with her has ended with a tackle and Katja barely standing.');
        scene.text('"Oh shit! Sorry Katja!"');
        scene.text('Smiling, she grabs your hand and pulls, taking the lead and skating towards the crowd, this time without flourishing moves. You both enjoy some well-deserved distraction from your everyday problems.');
        scene.text('And that is how you pass the next half hour. Skating, giggling and just showing off before it\'s time to look for something else to do.');
        scene.img('images/characters/pavlovsk/school/girl/katja/KS3.jpg');
        scene.text('Skating is fun! Skating is easy! At least that\'s what you\'re telling yourself as you try not to fall and make yourself look like a fool.');
        scene.text('"Katja! Don\'t let me fall!"');
        scene.text('A gold medal in ice skating is out of your reach, but most people enjoying the frozen lake are also in your situation, so a pair of girls fumbling their way through the crowd isn\'t really out of the ordinary.');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Don't let me go!" Katja squeals.
        scene.text(`"${((s as any).pcs_nickname ?? 0)}! Don't let me go!" Katja squeals.`);
        scene.text('You hold each other, laughing as you try to dance over the ice. After a great half hour, you\'re both a little weary and decide that it\'s time to look for something else to do.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
  }, goto: ['katjaEv', 'kathan'] },
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      }
    }
  } },
      ]);
    }
  } },
      ]);
    }
  }
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const katja_lake: LocationDef = {
  name: 'katja_lake',
  title: 'One good thing about living in Pavlovsk is the access to riv',
  region: 'other',
  locationType: 'public_outdoors',
  locclass: 'beach',
  description: ['One good thing about living in Pavlovsk is the access to rivers and lakes. Now that it\'s winter, this landscape has beautifully transformed, thanks to the ice and snow, into a place where people rush to do things like ice skating, playing hockey and, for those brave enough, swimming.'],
  enter: enter,
};
