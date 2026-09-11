import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1  &&  ((s as any).locat ?? 0)?.['A60_loc'] === 'gad_field'  &&  ((s as any).locat ?? 0)?.['A60_loc_prev'] !== 'gad_field') {
    scene.img('images/characters/gadukino/mira/mira2.jpg');
    scene.text('While keeping an eye on the cow herd, you see Mira in the distance, approaching. You happily wave to her.');
    // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. I wanted to visit you, and I've brought some water with ...
    scene.text(`"Hi, ${((s as any).pcs_nickname ?? 0)}. I wanted to visit you, and I've brought some water with me," she says, nearing you. "Have you missed me?"`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    qspCall(s, 'stat', '');
    ((s as any).MiraVars ?? {})['follow_time'] = 20 - ((s as any).hour ?? 0);
    return;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    if (((s as any).hour ?? 0) < 13) {
      scene.actions([{ label: 'Continue', goto: ['gad_field', 'cow'] }]);
    } else {
      if (((s as any).hour ?? 0) < 16) {
        scene.actions([{ label: 'Continue', goto: ['gad_field', 'cow2'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gad_field', 'cow3'] }]);
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterField(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_field', 'field');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Field</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/gadfield.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadfield_night.jpg');
    }
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 17  &&  ((s as any).npc_qw ?? 0)?.['A221'] === 0) {
      qspCall(s, 'grigory', 'meet');
      // TODO-QSP: exit
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/gadukino/village/gadfield_winter.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadfield_winter_night.jpg');
    }
  }
  scene.text('A field outside the village.');
  if (((s as any).grigory_flower ?? 0) > 0  &&  ((s as any).grigory_flower ?? 0) < 10) {
    scene.actions([{ label: 'Continue', goto: ['grigory', 'flower5'] }]);
  }
  if (((s as any).flowerday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).grigory_flower ?? 0) === 10) {
    scene.actions([{ label: 'Continue', goto: ['grigory', 'flower6'] }]);
  }
  if (((s as any).flowerday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).grigory_flower ?? 0) > 10) {
    scene.actions([{ label: 'Continue', goto: ['grigory', 'flower8'] }]);
  }
  qspCall(s, 'gp_zlatek', 'check_for_chores', 'field');
  scene.actions([
    { label: 'Head back to the road (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_road', 'start'] },
  ]);
  scene.build();
}

function enterHorse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_field', 'horse');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/horse.jpg');
  scene.text('Your grandfather\'s horse, Desperado.');
  qspCall(s, 'gp_zlatek', 'check_for_chores', 'field_horse');
  scene.actions([
    { label: 'Go back to the field', goto: ['gad_field', 'field'] },
  ]);
  scene.build();
}

function enterCow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_field', 'cow');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/cow.jpg');
  scene.text('The cattle herd is standing in the middle of the field. Some cows are munching on grass, and others just stare idly around.');
  if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_field') {
    scene.text('<a href="exec: gt \'miroslava\', \'start\'">Mira</a> is standing next to you.');
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 0) {
    if (((s as any).hour ?? 0) === 19) {
      scene.actions([
        { label: 'Lead the cows home (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    ((s as any).grandmaQW ?? {})['help_amount'] = (((s as any).grandmaQW ?? {})['help_amount'] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 4) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/cow_field.jpg');
    scene.text('Seeing the cow herd on the field, you decide to help your grandfather bring the cows home…');
    scene.actions([
      { label: 'Continue', goto: ['gadukino', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave them be', goto: ['gad_field', 'field'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 10) {
      scene.actions([
        { label: 'Wait until the herd is gathered', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 9) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
    }
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 5) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/graze_cow_wait.jpg');
    if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle_experience'] === 0) {
      scene.text('Some time flies by while waiting for the locals to finish bringing their cows to the field.');
    } else {
      if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle_experience'] === 1) {
        scene.text('Some time flies by while waiting for the locals and their children to finish bringing their cows to the field.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'cow'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).hour ?? 0) < 13) {
        qspCall(s, 'gad_field', 'set_nomira_acts', 1);
        scene.actions([
          { label: 'Herd cows with your grandfather (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
      qspCall(s, 'sweat', 'add', 10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
      qspCall(s, 'sweat', 'add', 5);
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    }
    ((s as any).grandpaQW ?? {})['chore_herd_cattle_experience'] = 1;
    ((s as any).grandmaQW ?? {})['help_amount'] = (((s as any).grandmaQW ?? {})['help_amount'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 4) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/graze_cow\'+rand(1, 4)+\'.jpg');
    scene.text('You spend an hour herding the cows, watching for stragglers and driving them back to the herd. Then, instead of letting your grandfather do all the work, you roll up your sleeves and try to do most of the work yourself.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'cow'] },
    ]);
  } },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
          (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
          (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
          qspCall(s, 'sweat', 'add', 10);
        } else {
          (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
          (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
          qspCall(s, 'sweat', 'add', 5);
        }
        ((s as any).grandmaQW ?? {})['help_amount'] = (((s as any).grandmaQW ?? {})['help_amount'] ?? 0) + (1);
        qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 4) + 0);
        qspCall(s, 'stat', '');
        scene.img('images/locations/gadukino/village/cow_go.jpg');
        scene.text('Looking at his watch, Grandpa turns to you and says, "It\'s about lunchtime, which means it\'s time to take the herd to the watering hole." So you begin to gather the cows and lead them to the river.');
        scene.actions([
          { label: 'Herd the cows nearer to the river (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
  }, goto: ['gad_field', 'cow2'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterCow2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_field', 'cow2');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>River</h4></center>');
  scene.img('images/locations/gadukino/village/cow_river.jpg');
  scene.text('The cattle herd is near the river. Some cows are munching on grass, some drink from the river, and some just stand or lie around.');
  if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_field') {
    scene.text('<a href="exec: gt \'miroslava\', \'start\'">Mira</a> is sitting next to you.');
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
    // TODO-QSP: dynamic text: "You can go for a swim if you want, <<$pcs_nickname>>. I'll keep an eye on the h...
    scene.text(`"You can go for a swim if you want, ${((s as any).pcs_nickname ?? 0)}. I'll keep an eye on the herd," says your grandfather.`);
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1) {
    if (((s as any).hour ?? 0) < 16) {
      qspCall(s, 'gad_field', 'set_nomira_acts', 2);
      scene.actions([
        { label: 'Herd cows with your grandfather (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
      qspCall(s, 'sweat', 'add', 10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
      qspCall(s, 'sweat', 'add', 5);
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    }
    ((s as any).grandpaQW ?? {})['chore_herd_cattle_experience'] = 1;
    ((s as any).grandmaQW ?? {})['help_amount'] = (((s as any).grandmaQW ?? {})['help_amount'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 4) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/graze_cow\'+rand(1, 4)+\'.jpg');
    scene.text('You spend an hour herding the cows, watching for stragglers and driving them back to the herd. Then, instead of letting your grandfather do all the work, you roll up your sleeves and try to do most of the work yourself.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'cow2'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
        (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
        qspCall(s, 'sweat', 'add', 10);
      } else {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
        qspCall(s, 'sweat', 'add', 5);
        (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
      }
      ((s as any).grandmaQW ?? {})['help_amount'] = (((s as any).grandmaQW ?? {})['help_amount'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 4) + 0);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/village/cow_go.jpg');
      scene.text('Grandpa looks at his watch and says it\'s time to drive the herd near the forest. So the two of you begin to gather the herd and guide them toward the woods.');
      scene.actions([
        { label: 'Herd the cows nearer to the forest (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
  }, goto: ['gad_field', 'cow3'] },
      ]);
    }
  }
  scene.build();
}

function enterCow3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_field', 'cow3');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Field near the forest</h4></center>');
  scene.img('images/locations/gadukino/village/cow_forest.jpg');
  scene.text('The cattle herd is grazing in a field near the forest.');
  if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_field') {
    scene.text('<a href="exec: gt \'miroslava\', \'start\'">Mira</a> is sitting next to you.');
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1) {
    if (((s as any).hour ?? 0) < 19) {
      qspCall(s, 'gad_field', 'set_nomira_acts', 1);
      scene.actions([
        { label: 'Herd cows with your grandfather (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
      qspCall(s, 'sweat', 'add', 10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
      qspCall(s, 'sweat', 'add', 5);
    }
    ((s as any).grandpaQW ?? {})['chore_herd_cattle_experience'] = 1;
    ((s as any).grandmaQW ?? {})['help_amount'] = (((s as any).grandmaQW ?? {})['help_amount'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 4) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/graze_cow\'+rand(1, 4)+\'.jpg');
    scene.text('You spend an hour herding the cows, watching for stragglers and driving them back to the herd. Then, instead of letting your grandfather do all the work, you roll up your sleeves and try to do most of the work yourself.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'cow3'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
        (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (8);
        qspCall(s, 'sweat', 'add', 10);
      } else {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
        (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
        qspCall(s, 'sweat', 'add', 5);
      }
      ((s as any).grandpaQW ?? {})['chore_herd_cattle'] = 0;
      ((s as any).grandmaQW ?? {})['help_amount'] = (((s as any).grandmaQW ?? {})['help_amount'] ?? 0) + (2);
      qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 4) + 0);
      qspCall(s, 'stat', '');
      ((s as any).MiraVars ?? {})['follower'] = 0;
      ((s as any).MiraVars ?? {})['follow_time'] = 0;
      scene.img('images/locations/gadukino/village/cow_go_home.jpg');
      scene.text('As sunset approaches, Grandpa says that it is late and time to drive the herd home. So you hurry, gather the cows, and guide them back towards the village.');
      scene.actions([
        { label: 'Back to the village', goto: ['gadukino', ''] },
      ]);
    }
  }
  scene.build();
}

function enterSetNomiraActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_field') {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
        if (((s as any).pcs_sleep ?? 0) < 40) {
          scene.actions([
            { label: 'Take a nap (1:00)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/graze_cow_lying.jpg');
    scene.text('You feel drowsy watching the cows stand around, so you lie down on the grass. You doze off and wake up about an hour later.');
    if (((s as any).temper ?? 0) >= 25) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
    }
    qspCall(s, 'sleep_simple', 'nap', 1);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Pick flowers (1:00)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/graze_cow_flowers.jpg');
    scene.text('Keeping one eye on the cattle, you spend an hour wandering the field, picking flowers.');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (4);
    if (((s as any).temper ?? 0) >= 25) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (8);
      qspCall(s, 'sweat', 'add', 5);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
      qspCall(s, 'sweat', 'add', 3);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Go for a run in the field (1:00)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/graze_cow_run.jpg');
    scene.text('Since the cows are all behaving, you spend some time jogging around the field.');
    (s as any).frost = 0;
    qspCall(s, 'exercise', 'tier1', 60, 'run');
    if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
      qspCall(s, 'sweat', 'add', 2);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
          if (((s as any).pcs_stam ?? 0) >= (5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
            scene.actions([
              { label: 'Undress and Swim (0:15)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/graze_cow_river.jpg');
    scene.text('You quickly undress and spend a few minutes splashing around in the river, which feels cool and refreshing.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.text('Finally, you redress and go back to your grandfather.');
    (s as any).cumspclnt = 4;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (3);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).willday_swim ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).willday_swim = ((s as any).daystart ?? 0);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (1);
    }
    qspCall(s, 'exercise', 'tier1', 15, 'stren');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'cow2'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
    scene.actions([
      { label: 'Tan (0:30)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/graze_cow_sun.jpg');
    scene.text('You lie down to sunbathe by the river while Grandpa looks after the herd.');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Read a book (1:00)', handler: (st: GameState) => {
    qspCall(s, 'library_functions', 'read_book');
    scene.img('images/locations/gadukino/village/graze_cow_book\'+rand(1, 2)+\'.jpg');
    if (((s as any).temper ?? 0) >= 25) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
    }
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      qspCall(s, 'mood', 'raise', 'medium');
      if (((s as any).pcs_stren ?? 0) > 1) {
        qspCall(s, 'exp_deg', 'stren', 1);
      }
      if (((s as any).pcs_vital ?? 0) > 5) {
        qspCall(s, 'exp_deg', 'vital', 1);
      }
      scene.text('You start reading a book you brought with you. You are so engrossed in the story you forget about the time.');
    } else {
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('While reading the book, time flies by because you are really engaged in the plot.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'field':
      enterField(s, scene);
      break;
    case 'horse':
      enterHorse(s, scene);
      break;
    case 'cow':
      enterCow(s, scene);
      break;
    case 'cow2':
      enterCow2(s, scene);
      break;
    case 'cow3':
      enterCow3(s, scene);
      break;
    case 'set_nomira_acts':
      enterSetNomiraActs(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_field: LocationDef = {
  name: 'gad_field',
  title: '<center><h4>Field</h4></center>',
  region: 'gadukino',
  locationType: 'secluded',
  description: ['While keeping an eye on the cow herd, you see Mira in the distance, approaching. You happily wave to her.'],
  enter: enter,
};
