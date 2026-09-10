import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_forest', 'forest_edge');
  qspCall(s, 'miroslava_schedule', '');
  (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', 'forest_edge');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Edge of the Forest</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/forest/gadforest1.jpg');
      scene.text('You are at the edge of the forest. Mushrooms and berries grow here, and you can often find other people picking them.');
    } else {
      scene.img('images/locations/gadukino/forest/gadforest_night1.jpg');
      scene.text('You are at the edge of the forest. Night in the woods is scary and uncomfortable.');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      scene.img('images/locations/gadukino/forest/gadforest_winter1.jpg');
      scene.text('You are at the edge of the forest. The forest during wintertime is gorgeous.');
    } else {
      scene.img('images/locations/gadukino/forest/gadforest_winter_night1.jpg');
      scene.text('You are at the edge of the forest. Night in the woods during wintertime is terrifying and uncomfortable.');
    }
  }
  qspCall(s, 'gad_forest', 'bushcraft', 'forest_edge');
  if (((s as any).pcs_bushcraft ?? 0) < 20) {
    scene.text('You don\'t know this part of the forest very well. You could get lost if you go any deeper into the woods.');
  } else {
    scene.text('You are comfortable navigating this part of the forest and can adventure further into the woods if you want.');
  }
  if (((s as any).clothesAtLocation ?? 0) === 1) {
    scene.text('Your clothes are nearby on the ground.');
  }
  if (((s as any).forestpicnic ?? 0) === 1) {
    if (((s as any).hour ?? 0) < 10  ||  ((s as any).hour ?? 0) > 14) {
      (s as any).forestpicnic = 0;
    } else {
      scene.text('On the edge of the forest, you see people. Apparently, they are having a family <a href="exec:gt \'gad_forest_events\', \'picnic\'">picnic</a>.');
    }
  }
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 16  &&  ((s as any).mushroom_pickers ?? 0) !== 0) {
    (s as any).mushroom_pickers = 0;
    scene.text('You don\'t see or hear anyone picking mushrooms or berries in the forest right now.');
  } else {
    if (((s as any).mushroom_pickers ?? 0) === 0) {
      scene.text('You don\'t see or hear anyone picking mushrooms or berries in the forest right now.');
    } else {
      scene.text('At the forest\'s edge, you can see other people picking mushrooms and berries.');
      if (((s as any).mushroom_pickers ?? 0) === 2) {
        scene.text('You can hear people picking mushrooms and berries deeper in the forest.');
      }
    }
    if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
      scene.text('<a href="exec: gt \'Miroslava\', \'start\' ">Mira</a> is here with you.');
    }
    (s as any).foresteventrand = Math.floor(Math.random() * 20) + 1;
    if ((! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  qspFunc(s, 'miroslava_schedule', 'was_here')) {
      qspCall(s, 'miroslava', 'miraclothes');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I'm going to head home now, but we can hang out again later,...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I'm going to head home now, but we can hang out again later," Mira said as she began walking out of the forest.`);
      scene.actions([
        { label: 'Convince her to stay with you', handler: (st: GameState) => {
    (s as any).MiraVars['follower'] = 1;
    (s as any).MiraVars['follow_time'] = (((s as any).minut ?? 0) > 30) ? (2) : (1);
  }, goto: ['gad_forest', 'forest_edge'] },
        { label: 'Say goodbye', goto: ['gad_forest', 'forest_edge'] },
      ]);
    } else {
      if (((s as any).MiraVars ?? 0)?.['pickingtalk'] === 0  &&  ((s as any).MiraVars ?? 0)?.['talkday'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mira_picking_talk'] }]);
      }
      if (((s as any).MiraVars ?? 0)?.['nudetalk'] === 0  &&  ((s as any).MiraVars ?? 0)?.['talkday'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mira_nude_talk'] }]);
      }
      if (((s as any).forestpicnic ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).clothesAtLocation ?? 0) === 0  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).MiraVars ?? 0)?.['nudetalk'] === 1  &&  ((s as any).MiraVars ?? 0)?.['talkday'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mira_nude_event'] }]);
      }
      if (((s as any).foresteventrand ?? 0) <= 2  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).mushroom_pickersday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).mushroom_pickers = 1;
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mushroom_pickers1'] }]);
      }
      if (((s as any).foresteventrand ?? 0) <= 4  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).mushroom_pickersday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).mushroom_pickers = 2;
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mushroom_pickers2'] }]);
      }
      if (((s as any).foresteventrand ?? 0) === 5  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 14  &&  ((s as any).temper ?? 0) >= 10  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).forestpicnic ?? 0) === 0) {
        (s as any).forestpicnic = 1;
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'picnic'] }]);
      }
    }
    if (((s as any).foresteventrand ?? 0) <= 8  &&  ((s as any).MiraVars ?? 0)?.['meadow'] >= 2  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
      if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)) {
        if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
          scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mitka_temporary_event'] }]);
        }
      }
    }
    scene.actions([
      { label: 'Leave the woods (0:15)', handler: (st: GameState) => {
    if (((s as any).swamp_clothes ?? 0) === 1) {
      scene.text('You cannot leave the woods wearing your current clothing. Therefore, you should pick up your clothes and get dressed or risk leaving naked.');
      if (((s as any).clothesAtLocation ?? 0) === 0) {
        scene.actions([
          { label: 'Leave in your makeshift clothing (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
        ]);
      } else {
        scene.actions([
          { label: 'Get dressed in your clothes that were left here', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
    qspCall(s, 'outfit', 'recover_lost_outfit', 'forest_edge', 1);
    qspCall(s, 'stat', '');
    if (((s as any).PCloSkirt ?? 0) === 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
    }
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
    }
    scene.text('You remove your sack and change back into your regular clothes.');
    scene.actions([
      { label: 'Leave (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
    ]);
  } },
        ]);
      }
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['gad_road', 'start'] }]);
      if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
        if (Math.floor(Math.random() * 11) + 0 > 5) {
          scene.img('images/locations/gadukino/forest/gadukino_nude.jpg');
        } else {
          scene.img('images/locations/gadukino/forest/gadukino_back.jpg');
        }
      } else {
        if (Math.floor(Math.random() * 11) + 0 > 5) {
          scene.img('images/locations/gadukino/forest/gadukino_nude_night.jpg');
        } else {
          scene.img('images/locations/gadukino/forest/gadukino_back_night.jpg');
        }
      }
      if (((s as any).gadforest_clothestorn ?? 0) === 1) {
        (s as any).gadforest_clothestorn = 0;
        scene.text('Your clothes were torn to shreds in the woods, leaving you with no choice but to head back home naked.');
        scene.text('You try your best to stay in the shadows as you move towards your grandparents\' house as stealthily as possible.');
      } else {
        scene.text('You leave your clothes behind and sneak home naked, purely for the thrill.');
        scene.text('You try your best to stay in the shadows as you move towards your grandparents\' house as stealthily as possible.');
        scene.text('You seem to have misplaced your clothes, leaving you with no choice but to head back home naked. You wonder where you might have left your clothes.');
        scene.text('You try your best to stay in the shadows as you move towards your grandparents\' house as stealthily as possible.');
      }
      scene.actions([
        { label: 'Go back to Gadukino naked', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    if (((s as any).grandmaQW ?? 0)?.['block'] === 0) {
      if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 16  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
        (s as any).forestcaughtrand = Math.floor(Math.random() * 7) + 4;
      } else {
        (s as any).forestcaughtrand = Math.floor(Math.random() * 7) + 2;
        (s as any).forestcaughtrand = Math.floor(Math.random() * 7) + 0;
      }
      if (((s as any).forestcaughtrand ?? 0) >= 9) {
        (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 4) + 7);
        scene.img('images/locations/gadukino/forest/gadukino_old_woman.jpg');
        scene.text('You\'ve been spotted walking home naked by all the village\'s women. So, naturally, they scold you as you walk by. Your grandparents are definitely going to find out about this.');
      } else {
        (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 3) + 4);
        scene.img('images/locations/gadukino/forest/gadukino_old_woman\'+rand(1, 5)+\'.jpg');
        scene.text('You\'ve been spotted walking home naked by a woman from the village. You hope she doesn\'t tell your grandmother.');
        if (((s as any).forestcaughtrand ?? 0) >= 5) {
          (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
          scene.img('images/locations/gadukino/forest/gadukino_old_man\'+rand(1, 5)+\'.jpg');
          scene.text('You\'ve been spotted walking home naked by a man from the village. You hope he doesn\'t tell your grandfather.');
        } else {
          (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
          scene.img('images/locations/gadukino/grandparents/gaddvor_nude.jpg');
          scene.text('No one saw you outside naked, but there\'s a thrill in almost getting caught.');
        }
        qspCall(s, 'clothing', 'add_item', 'gm_outfits', 2);
        qspCall(s, 'clothing', 'wear', 'gm_outfits', 2);
        if (((s as any).PCloSkirt ?? 0) === 0) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
          scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
        }
        if (((s as any).PCloSkirt ?? 0) > 0) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
          scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
        }
        scene.text('You begin to panic a little. You have nowhere to go and no one to help you. You are stuck naked in the woods.');
        scene.text('As you look around frantically, you spot a sweatshirt someone must have lost. You quickly put it on, thinking about how lucky you are.');
        scene.actions([
          { label: 'Continue home to your grandparents (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
  }, goto: ['gad_gpyard', 'start'] },
          { label: 'Leave (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
        ]);
      }
    }
    if (((s as any).clothesAtLocation ?? 0) === 1) {
      scene.actions([
        { label: 'Get dressed instead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
    qspCall(s, 'outfit', 'recover_lost_outfit', 'forest_edge', 1);
    qspCall(s, 'stat', '');
    if (((s as any).PCloSkirt ?? 0) === 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
    }
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
    }
    scene.text('You decide to change back into your clothes rather than try to get home through the village naked.');
    scene.actions([
      { label: 'Leave (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    if (! qspFunc(s, 'miroslava_schedule', 'is_here')) {
      scene.actions([
        { label: 'Walk further into the forest (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_outskirts'] },
      ]);
    }
    qspCall(s, 'bicycle', 'gad_forest');
    if (((s as any).gad_meadow_found ?? 0) === 1) {
      if (! qspFunc(s, 'miroslava_schedule', 'is_here')) {
        scene.actions([
          { label: 'Walk to the meadow (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['gad_meadow', 'start'] },
        ]);
      } else {
        scene.actions([
          { label: 'Walk to the meadow with Mira (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    // TODO-QSP: MiraVars['follower'] = 1
  }, goto: ['gad_meadow', 'start'] },
        ]);
      }
    }
    if (((s as any).hunterVars ?? 0)?.['cabin'] === 1  &&  ((s as any).hunterVars ?? 0)?.['were_met'] === 1  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here'))) {
      scene.actions([
        { label: 'Walk to the hunters cabin (1:00)', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22) {
      scene.actions([{ label: 'Continue', goto: ['gad_swamp', 'stuck'] }]);
    } else {
      // TODO-QSP: gt 'gad_forest_lost', 'wolves', 'forest_edge'
    }
  } },
      ]);
    }
    qspCall(s, 'treeCircEntry', 'gad_forest');
    qspCall(s, 'gad_forest', 'stripping');
    qspCall(s, 'gad_forest', 'dressing');
    qspCall(s, 'gad_forest', 'walking');
    qspCall(s, 'gad_forest', 'picking');
    qspCall(s, 'camera', 'check_location');
    qspCall(s, 'blackmailer', 'set_park_act');
  } },
    ]);
  }
  scene.build();
}

export const gad_forest: LocationDef = {
  name: 'gad_forest',
  title: 'You don\'t know this part of the forest very well. You could get lost if you go any deeper into the woods.',
  region: 'gadukino',
  locationType: 'secluded',
  description: ['You are at the edge of the forest. Mushrooms and berries grow here, and you can often find other people picking them.'],
  enter: enter,
};
