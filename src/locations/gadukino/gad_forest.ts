import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterForestEdge(s: GameState, scene: SceneBuilder): void {
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'forest_edge']; enterBushcraft(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    if ((!((s as any).mushroom_pickers ?? 0))) {
      scene.text('You don\'t see or hear anyone picking mushrooms or berries in the forest right now.');
    } else {
      if (((s as any).mushroom_pickers ?? 0) === 1) {
        scene.text('At the forest\'s edge, you can see other people picking mushrooms and berries.');
      } else {
        if (((s as any).mushroom_pickers ?? 0) === 2) {
          scene.text('You can hear people picking mushrooms and berries deeper in the forest.');
        }
      }
    }
  }
  if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
    scene.text('<a href="exec: gt \'Miroslava\', \'start\' ">Mira</a> is here with you.');
  }
  (s as any).foresteventrand = Math.floor(Math.random() * 20) + 1;
  if ((! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  qspFunc(s, 'miroslava_schedule', 'was_here')) {
    qspCall(s, 'miroslava', 'miraclothes');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I'm going to head home now, but we can hang out again later,...
    scene.text(`"${((s as any).pcs_nickname || '')}, I'm going to head home now, but we can hang out again later," Mira said as she began walking out of the forest.`);
    scene.actions([
      { label: 'Convince her to stay with you', handler: (st: GameState) => {
    if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['follower'] = 1;
    if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['follow_time'] = ((((s as any).minut ?? 0) > 30) ? (2) : (1));
  }, goto: ['gad_forest', 'forest_edge'] },
      { label: 'Say goodbye', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } else {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
      if (((s as any).MiraVars ?? 0)?.['pickingtalk'] === 0  &&  ((s as any).MiraVars ?? 0)?.['talkday'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mira_picking_talk'] }]);
      }
      if (((s as any).MiraVars ?? 0)?.['nudetalk'] === 0  &&  ((s as any).MiraVars ?? 0)?.['talkday'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mira_nude_talk'] }]);
      }
      if (((s as any).forestpicnic ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).clothesAtLocation ?? 0) === 0  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).MiraVars ?? 0)?.['nudetalk'] === 1  &&  ((s as any).MiraVars ?? 0)?.['talkday'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mira_nude_event'] }]);
      }
    } else {
      if (((s as any).foresteventrand ?? 0) <= 2  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).mushroom_pickersday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).mushroom_pickers = 1;
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mushroom_pickers1'] }]);
      }
      if (((s as any).foresteventrand ?? 0) <= 4  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).mushroom_pickersday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).mushroom_pickers = 2;
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mushroom_pickers2'] }]);
      }
      if (((s as any).foresteventrand ?? 0) === 5  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 14  &&  ((s as any).temper ?? 0) >= 10  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).week ?? 0) > 5  &&  (!((s as any).forestpicnic ?? 0))) {
        (s as any).forestpicnic = 1;
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'picnic'] }]);
      }
    }
  }
  if (((s as any).foresteventrand ?? 0) <= 8  &&  ((s as any).MiraVars ?? 0)?.['meadow'] >= 2  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)) {
      if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mitka_temporary_event'] }]);
      }
    }
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
      if (((s as any).MiraVars ?? 0)?.['meadow'] === 2  ||  (((s as any).MiraVars ?? 0)?.['meadow'] === 5  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 3)) {
        scene.actions([
          { label: 'Walk to the meadow with Mira (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    // TODO-QSP: MiraVars['follower'] = 1
  }, goto: ['gad_meadow', 'start'] },
        ]);
      }
    }
  }
  if (((s as any).hunterVars ?? 0)?.['cabin'] === 1  &&  ((s as any).hunterVars ?? 0)?.['were_met'] === 1  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here'))) {
    scene.actions([
      { label: 'Walk to the hunters cabin (1:00)', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22) {
      scene.actions([{ label: 'Continue', goto: ['gad_swamp', 'stuck'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gad_forest_lost', 'wolves', '\'forest_edge\''] }]);
    }
  } },
    ]);
  }
  qspCall(s, 'treeCircEntry', 'gad_forest');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripping(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDressing(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWalking(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPicking(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'camera', 'check_location');
  qspCall(s, 'blackmailer', 'set_park_act');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the woods (0:15)', handler: (st: GameState) => {
    if (((s as any).swamp_clothes ?? 0) === 1) {
      scene.text('You cannot leave the woods wearing your current clothing. Therefore, you should pick up your clothes and get dressed or risk leaving naked.');
      if ((!((s as any).clothesAtLocation ?? 0))) {
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
    if ((!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
    }
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
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
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        qspCall(s, 'stat', '');
        scene.actions([{ label: 'Continue', goto: ['gad_road', 'start'] }]);
      } else {
        if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
          if ((Math.floor(Math.random() * 11) + 0) > 5) {
            scene.img('images/locations/gadukino/forest/gadukino_nude.jpg');
          } else {
            scene.img('images/locations/gadukino/forest/gadukino_back.jpg');
          }
        } else {
          if ((Math.floor(Math.random() * 11) + 0) > 5) {
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
          if (((s as any).clothesAtLocation ?? 0) === 1) {
            scene.text('You leave your clothes behind and sneak home naked, purely for the thrill.');
            scene.text('You try your best to stay in the shadows as you move towards your grandparents\' house as stealthily as possible.');
          } else {
            scene.text('You seem to have misplaced your clothes, leaving you with no choice but to head back home naked. You wonder where you might have left your clothes.');
            scene.text('You try your best to stay in the shadows as you move towards your grandparents\' house as stealthily as possible.');
          }
        }
        if (((s as any).clothesAtLocation ?? 0) === 1) {
          scene.actions([
            { label: 'Get dressed instead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
    qspCall(s, 'outfit', 'recover_lost_outfit', 'forest_edge', 1);
    qspCall(s, 'stat', '');
    if ((!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
    }
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
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
        scene.actions([
          { label: 'Go back to Gadukino naked', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    if (((s as any).grandmaQW ?? 0)?.['block'] === 0) {
      if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 16  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
        (s as any).forestcaughtrand = Math.floor(Math.random() * 7) + 4;
      } else {
        if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
          (s as any).forestcaughtrand = Math.floor(Math.random() * 7) + 2;
        } else {
          (s as any).forestcaughtrand = Math.floor(Math.random() * 7) + 0;
        }
      }
      if (((s as any).forestcaughtrand ?? 0) >= 9) {
        if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 4) + 7);
        scene.img('images/locations/gadukino/forest/gadukino_old_woman.jpg');
        scene.text('You\'ve been spotted walking home naked by all the village\'s women. So, naturally, they scold you as you walk by. Your grandparents are definitely going to find out about this.');
      } else {
        if (((s as any).forestcaughtrand ?? 0) >= 7) {
          if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 3) + 4);
          scene.img('images/locations/gadukino/forest/gadukino_old_woman\'+rand(1, 5)+\'.jpg');
          scene.text('You\'ve been spotted walking home naked by a woman from the village. You hope she doesn\'t tell your grandmother.');
        } else {
          if (((s as any).forestcaughtrand ?? 0) >= 5) {
            if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
            scene.img('images/locations/gadukino/forest/gadukino_old_man\'+rand(1, 5)+\'.jpg');
            scene.text('You\'ve been spotted walking home naked by a man from the village. You hope he doesn\'t tell your grandfather.');
          } else {
            if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
            scene.img('images/locations/gadukino/grandparents/gaddvor_nude.jpg');
            scene.text('No one saw you outside naked, but there\'s a thrill in almost getting caught.');
          }
        }
      }
      scene.actions([
        { label: 'Continue home to your grandparents (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
  }, goto: ['gad_gpyard', 'start'] },
      ]);
    } else {
      qspCall(s, 'clothing', 'add_item', 'gm_outfits', 2);
      qspCall(s, 'clothing', 'wear', 'gm_outfits', 2);
      if ((!((s as any).PCloSkirt ?? 0))) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
      }
      if (((s as any).PCloSkirt ?? 0) > 0) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
      }
      scene.text('You begin to panic a little. You have nowhere to go and no one to help you. You are stuck naked in the woods.');
      scene.text('As you look around frantically, you spot a sweatshirt someone must have lost. You quickly put it on, thinking about how lucky you are.');
      scene.actions([
        { label: 'Leave (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
      ]);
    }
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterForestOutskirts(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_forest', 'forest_outskirts');
  (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', 'forest_outskirts');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Forest Outskirts</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/forest/gadforest2.jpg');
      scene.text('You are in the forest. The fresh air and singing birds light up your soul with joy.');
    } else {
      scene.img('images/locations/gadukino/forest/gadforest_night2.jpg');
      scene.text('You are in the forest. Night in the woods is scary and uncomfortable.');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      scene.img('images/locations/gadukino/forest/gadforest_winter2.jpg');
      scene.text('You are in the forest. The forest in the winter is stunning, and the fresh air makes you happy.');
    } else {
      scene.img('images/locations/gadukino/forest/gadforest_winter_night2.jpg');
      scene.text('You are in the forest. Night in the woods during wintertime is horrifying and uncomfortable.');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'forest_outskirts']; enterBushcraft(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_bushcraft ?? 0) < 30) {
    scene.text('You don\'t know this part of the forest very well. You could get lost if you go any deeper into the woods.');
  } else {
    scene.text('You are comfortable navigating this part of the forest and can adventure further into the woods if you want.');
  }
  if (((s as any).clothesAtLocation ?? 0) === 1) {
    scene.text('Your clothes are nearby on the ground.');
  }
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 16) {
    (s as any).mushroom_pickers = 0;
    scene.text('You don\'t see or hear anyone picking mushrooms or berries in the forest right now.');
  } else {
    if ((!((s as any).mushroom_pickers ?? 0))) {
      scene.text('You don\'t see or hear anyone picking mushrooms or berries in the forest right now.');
    } else {
      if (((s as any).mushroom_pickers ?? 0) === 1) {
        scene.text('You can hear others picking mushrooms and berries at the forest\'s edge.');
      } else {
        if (((s as any).mushroom_pickers ?? 0) === 2) {
          scene.text('You can see people picking mushrooms and berries here on the outskirts of the forest.');
        }
      }
    }
  }
  (s as any).foresteventrand = Math.floor(Math.random() * 20) + 1;
  if (((s as any).foresteventrand ?? 0) <= 2  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).mushroom_pickersday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).mushroom_pickers = 2;
    scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mushroom_pickers1'] }]);
  }
  if (((s as any).foresteventrand ?? 0) <= 4  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).mushroom_pickersday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).mushroom_pickers = 2;
    scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mushroom_pickers3'] }]);
  }
  if (((s as any).foresteventrand ?? 0) === 5  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))) {
    scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'forest_hunters', '\'forest_outskirts\''] }]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripping(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDressing(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWalking(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPicking(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head back out of the forest (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_edge'] },
    { label: 'Walk further into the forest (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_center'] },
  ]);
  scene.build();
}

function enterForestCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_forest', 'forest_center');
  (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', 'forest_center');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Deep Forest</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/forest/gadforest3.jpg');
      scene.text('You are deep in the forest. The fresh air and singing birds light up your soul with joy.');
    } else {
      scene.img('images/locations/gadukino/forest/gadforest_night3.jpg');
      scene.text('You are deep in the forest. Night in the woods is scary and uncomfortable.');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      scene.img('images/locations/gadukino/forest/gadforestlost_winter0.2.jpg');
      scene.text('You are deep in the forest. The forest in the winter is magnificent. The fresh air makes you happy.');
    } else {
      scene.img('images/locations/gadukino/forest/gadforest_winter_night3.jpg');
      scene.text('You are deep in the forest. Night in the woods during wintertime is terrifying and uncomfortable.');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'forest_center']; enterBushcraft(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_bushcraft ?? 0) < 40) {
    scene.text('You don\'t know this part of the forest very well. You could get lost if you go any deeper into the woods.');
  } else {
    scene.text('You are comfortable navigating this part of the forest and can venture further into the woods if you want.');
  }
  if (((s as any).clothesAtLocation ?? 0) === 1) {
    scene.text('Your clothes are nearby on the ground.');
  }
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 16) {
    (s as any).mushroom_pickers = 0;
    scene.text('You don\'t see or hear anyone picking mushrooms or berries in the forest right now.');
  } else {
    if ((!((s as any).mushroom_pickers ?? 0))) {
      scene.text('You don\'t see or hear anyone picking mushrooms or berries in the forest right now.');
    } else {
      if (((s as any).mushroom_pickers ?? 0) === 1) {
        scene.text('You can hear people picking mushrooms and berries at the forest\'s edge.');
      } else {
        if (((s as any).mushroom_pickers ?? 0) === 2) {
          scene.text('You can hear people picking mushrooms and berries on the outskirts of the forest.');
        }
      }
    }
  }
  (s as any).foresteventrand = Math.floor(Math.random() * 20) + 1;
  if (((s as any).foresteventrand ?? 0) <= 2  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9) {
    scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'basket'] }]);
  }
  if (((s as any).foresteventrand ?? 0) <= 3  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9) {
    scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'bilberry'] }]);
  }
  if (((s as any).foresteventrand ?? 0) <= 4  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9) {
    scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'mushroom'] }]);
  }
  if (((s as any).foresteventrand ?? 0) === 5  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))) {
    scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'forest_hunters', '\'forest_center\''] }]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripping(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDressing(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWalking(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPicking(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head back out of the forest (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_outskirts'] },
    { label: 'Walk further into the swamp (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_swamp', 'start'] },
  ]);
  scene.build();
}

function enterBushcraft(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'forest_edge') {
    (s as any).bushcraft_rand = 1;
    (s as any).bushcraft_limit = 20;
    (s as any).bushcraft_lost = 10;
    (s as any).torncloth_high_bushcraft = 10;
    (s as any).torncloth_low_bushcraft = 9;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'forest_outskirts') {
      (s as any).bushcraft_rand = 2;
      (s as any).bushcraft_limit = 30;
      (s as any).bushcraft_lost = 20;
      (s as any).torncloth_high_bushcraft = 9;
      (s as any).torncloth_low_bushcraft = 7;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'forest_center') {
        (s as any).bushcraft_rand = 3;
        (s as any).bushcraft_limit = 40;
        (s as any).bushcraft_lost = 30;
        (s as any).torncloth_high_bushcraft = 8;
        (s as any).torncloth_low_bushcraft = 5;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'gad_swamp_woods') {
          (s as any).bushcraft_rand = 4;
          (s as any).bushcraft_limit = 50;
          (s as any).bushcraft_lost = 10;
          (s as any).torncloth_high_bushcraft = 7;
          (s as any).torncloth_low_bushcraft = 3;
        }
      }
    }
  }
  (s as any).ripclothesrand = Math.floor(Math.random() * 10) + 1;
  if (((s as any).pcs_bushcraft ?? 0) < ((s as any).bushcraft_limit ?? 0)) {
    if (((s as any).ripclothesrand ?? 0) >= ((s as any).torncloth_low_bushcraft ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTorncloth(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'exp_gain', 'bushcraft', 0);
    }
  } else {
    if (((s as any).ripclothesrand ?? 0) >= ((s as any).torncloth_high_bushcraft ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTorncloth(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (((s as any).pcs_bushcraft ?? 0) < ((s as any).bushcraft_lost ?? 0)) {
    (s as any).lostrand = 0;
    (s as any).forest_lostday = ((s as any).daystart ?? 0);
    if (((s as any).pcs_bushcraft ?? 0) < ((s as any).lostrand ?? 0)) {
      (s as any).lost_girl = 1;
      // TODO-QSP: gt 'gad_forest_lost', $ARGS[1]
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTorncloth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    if ((((s as any).PCloThinness ?? 0) === 1  ||  ((s as any).PCloSkirt ?? 0) > 0)  &&  ((s as any).PCloQuality ?? 0) < 5) {
      scene.text('Your clothes get caught on some brush and tear slightly.');
      qspCall(s, 'clothing', 'decrease_cur_strength', Math.floor(Math.random() * 1001) + 500);
      if (qspFunc(s, 'clothing', 'is_strength_low')) {
        scene.text('Your clothes were barely holding together, but now they have fallen apart completely. You discard the remains and are left naked.');
        (s as any).gadforest_clothestorn = 1;
        qspCall(s, 'outfit', 'strip_all', 'gad_forest');
        qspCall(s, 'stat', '');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStripping(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).clothesAtLocation ?? 0) === 0  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22  &&  (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1)) {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).forest_args1 ?? 0) === 'forest_edge') {
      if (((s as any).MiraVars ?? 0)?.['nudetalk'] === 2) {
        scene.actions([
          { label: 'Strip Naked with Mira (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    if ((!((s as any).swamp_clothes ?? 0))) {
      qspCall(s, 'outfit', 'strip_all', ((s as any).forest_args1 ?? 0));
      if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['strip_loc'] = ((s as any).forest_args1 ?? 0);
    } else {
      if (((s as any).swamp_clothes ?? 0) === 1) {
        qspCall(s, 'outfit', 'strip_all', 'gad_forest');
        if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['strip_loc'] = 'gad_forest';
        qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
      }
    }
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/gadukino/mira/miraforest6.jpg');
    scene.text('You and Mira quickly get undressed, leaving your clothes in a neat pile on the ground.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_args1'] },
    ]);
  } },
        ]);
      }
    } else {
      if ((((s as any).forestpicnic ?? 0) === 0  &&  ((s as any).forest_args1 ?? 0) === 'forest_edge')  ||  ((s as any).forest_args1 ?? 0) !== 'forest_edge') {
        scene.actions([
          { label: 'Strip Naked (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    if ((!((s as any).swamp_clothes ?? 0))) {
      qspCall(s, 'outfit', 'strip_all', ((s as any).forest_args1 ?? 0));
    } else {
      if (((s as any).swamp_clothes ?? 0) === 1) {
        qspCall(s, 'clothing', 'strip', 'gad_forest');
        qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
      }
    }
    qspCall(s, 'stat', '');
    if ((!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
    }
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
    }
    scene.text('You quickly get undressed, leaving your clothes in a neat pile on the ground.');
    if (((s as any).forest_args1 ?? 0) === 'gad_swamp_woods') {
      scene.actions([
        { label: 'Continue', goto: ['gad_swamp_woods', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['gad_forest', 'forest_args1'] },
      ]);
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDressing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothesAtLocation ?? 0) === 1) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Get dressed (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
    qspCall(s, 'outfit', 'recover_lost_outfit', ((s as any).forest_args1 ?? 0), 1);
    qspCall(s, 'stat', '');
    if ((!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
    }
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
    }
    scene.text('You change back into your clothes.');
    if (((s as any).forest_args1 ?? 0) === 'gad_swamp_woods') {
      scene.actions([
        { label: 'Continue', goto: ['gad_swamp_woods', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['gad_forest', 'forest_args1'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        if (((s as any).clothingworntype ?? 0) === 'misc_oufits'  &&  ((s as any).clothingwornnumber ?? 0) === 1) {
          scene.actions([
            { label: 'Wear your abandoned clothing (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
    qspCall(s, 'outfit', 'recover_lost_outfit', ((s as any).forest_args1 ?? 0), 1);
    qspCall(s, 'stat', '');
    if ((!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest.jpg"></center>`);
    }
    if (((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/nudeforest1.'+r...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/nudeforest1.'+rand(1, 2)+'.jpg"></center>`);
    }
    scene.text('You wear your abandoned clothing and get rid of the hessian sack the hunters gave you.');
    if (((s as any).forest_args1 ?? 0) === 'gad_swamp_woods') {
      scene.actions([
        { label: 'Continue', goto: ['gad_swamp_woods', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['gad_forest', 'forest_args1'] },
      ]);
    }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Pick up your abandoned clothing (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
    qspCall(s, 'outfit', 'recover_lost_outfit', ((s as any).forest_args1 ?? 0));
    qspCall(s, 'stat', '');
    scene.text('You pick up your abandoned clothing.');
    if (((s as any).forest_args1 ?? 0) === 'gad_swamp_woods') {
      scene.actions([
        { label: 'Continue', goto: ['gad_swamp_woods', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['gad_forest', 'forest_args1'] },
      ]);
    }
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWalking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22) {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).forest_args1 ?? 0) === 'forest_edge') {
      scene.actions([
        { label: 'Go for a walk in the woods with Mira (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).healthmax ?? 0)/5);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0)]; enterBushcraft(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      if (((s as any).pcs_inhib ?? 0) < 50) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 5) + 1);
      }
      qspCall(s, 'arousal', 'flash', 5);
      qspCall(s, 'arousal', 'end');
    }
    qspCall(s, 'stat', '');
    if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
      if ((Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).gad_meadow_found ?? 0) === 0  &&  ((s as any).forest_args1 ?? 0) === 'forest_edge') {
        scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'find_meadow'] }]);
      } else {
        if (((s as any).clothingworntype ?? 0) !== 'nude') {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/miraforest'+rand...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/gadukino/mira/miraforest'+rand(1, 3)+'.jpg"></center>`);
        }
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/miraforest_nude'...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/gadukino/mira/miraforest_nude'+rand(1, 3)+'.jpg"></center>`);
        }
        scene.text('You spend an hour walking with Mira through the woods, chatting and enjoying the sounds of the forest and the fresh air.');
      }
    } else {
      scene.img('images/characters/gadukino/mira/miraforestwinter.jpg');
      scene.text('You spend an hour walking with Mira through the snowy woods, chatting and enjoying the sounds of the forest and the fresh air.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_args1'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go for a walk in the woods (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).healthmax ?? 0)/5);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0)]; enterBushcraft(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 5) + 1);
    }
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 10) + 0) === 0  &&  ((s as any).gad_meadow_found ?? 0) === 0  &&  ((s as any).forest_args1 ?? 0) === 'forest_edge') {
      scene.actions([{ label: 'Continue', goto: ['gad_forest_events', 'find_meadow'] }]);
    } else {
      if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
        if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)  &&  (!((s as any).PCloSkirt ?? 0))) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gulforest0.'+ra...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gulforest0.'+rand(1, 2)+'.jpg"></center>`);
        }
        if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gulforest1.'+ra...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gulforest1.'+rand(1, 3)+'.jpg"></center>`);
        }
        if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gulforest_tanga...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gulforest_tanga0.'+rand(1, 2)+'.jpg"></center>`);
        }
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gulforest_nude0...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gulforest_nude0.'+rand(1, 4)+'.jpg"></center>`);
        }
        scene.text('You spend an hour walking through the woods, enjoying the sounds of the forest and the fresh air.');
      } else {
        scene.img('images/locations/gadukino/forest/gulforestwinter0.\'+rand(1, 6)+\'.jpg');
        scene.text('You spend an hour walking through the snowy woods, enjoying the sounds of the forest and the fresh air.');
      }
      if (((s as any).forest_args1 ?? 0) === 'gad_swamp_woods') {
        scene.actions([
          { label: 'Continue', goto: ['gad_swamp_woods', 'start'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['gad_forest', 'forest_args1'] },
        ]);
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPicking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) < 5) {
    if ((((s as any).forest_args1 ?? 0) === 'forest_edge'  &&  ((s as any).edge_pickingday ?? 0) !== ((s as any).daystart ?? 0))  ||  (((s as any).forest_args1 ?? 0) === 'forest_outskirts'  &&  ((s as any).outskirts_pickingday ?? 0) !== ((s as any).daystart ?? 0))  ||  (((s as any).forest_args1 ?? 0) === 'forest_center'  &&  ((s as any).center_pickingday ?? 0) !== ((s as any).daystart ?? 0))  ||  (((s as any).forest_args1 ?? 0) === 'gad_swamp_woods'  &&  ((s as any).swamp_pickingday ?? 0) !== ((s as any).daystart ?? 0))) {
      if (((s as any).forest_args1 ?? 0) === 'forest_edge') {
        (s as any).edge_pickingday = ((s as any).daystart ?? 0);
        (s as any).mushroom_pickers_check = 1;
        (s as any).max_boletus = 1;
        (s as any).max_bilberry = 1;
      } else {
        if (((s as any).forest_args1 ?? 0) === 'forest_outskirts') {
          (s as any).outskirts_pickingday = ((s as any).daystart ?? 0);
          (s as any).mushroom_pickers_check = 2;
          (s as any).max_boletus = 2;
          (s as any).max_bilberry = 2;
        } else {
          if (((s as any).forest_args1 ?? 0) === 'forest_center') {
            (s as any).center_pickingday = ((s as any).daystart ?? 0);
            (s as any).mushroom_pickers_check = 3;
            (s as any).max_boletus = 3;
            (s as any).max_bilberry = 3;
          } else {
            if (((s as any).forest_args1 ?? 0) === 'gad_swamp_woods') {
              (s as any).swamp_pickingday = ((s as any).daystart ?? 0);
              (s as any).mushroom_pickers_check = 4;
              (s as any).max_boletus = 4;
              (s as any).max_bilberry = 4;
            }
          }
        }
      }
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).new_boletus = 0;
      (s as any).new_bilberry = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0)]; enterBushcraft(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        if (((s as any).pcs_inhib ?? 0) < 50) {
          (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 5) + 1);
        }
        if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).forest_args1 ?? 0) === 'forest_edge') {
          qspCall(s, 'arousal', 'flash', 5);
          qspCall(s, 'arousal', 'end');
        }
      }
      qspCall(s, 'stat', '');
      if (((s as any).mushroom_pickers ?? 0) !== ((s as any).mushroom_pickers_check ?? 0)) {
        (s as any).new_boletus = ((s as any).new_boletus ?? 0) + (((s as any).max_boletus ?? 0));
        (s as any).new_bilberry = ((s as any).new_bilberry ?? 0) + (((s as any).max_bilberry ?? 0));
        (s as any).boletus = ((s as any).boletus ?? 0) + (((s as any).new_boletus ?? 0));
        (s as any).bilberry = ((s as any).bilberry ?? 0) + (((s as any).new_bilberry ?? 0));
        qspCall(s, 'mood', 'raise', 'tiny');
        qspCall(s, 'stat', '');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0), 'berry']; enterPickingClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour, you found <<new_bole...
        scene.text(`After searching for mushrooms and berries for half an hour, you found ${((s as any).new_boletus || '')} kg of mushrooms and ${((s as any).new_bilberry || '')} kg of berries.`);
      } else {
        if (((s as any).mushroom_pickers ?? 0) === ((s as any).mushroom_pickers_check ?? 0)) {
          (s as any).new_boletus = ((s as any).new_boletus ?? 0) + (0);
          (s as any).new_bilberry = ((s as any).new_bilberry ?? 0) + (0);
          (s as any).boletus = ((s as any).boletus ?? 0) + (((s as any).new_boletus ?? 0));
          (s as any).bilberry = ((s as any).bilberry ?? 0) + (((s as any).new_bilberry ?? 0));
          qspCall(s, 'stat', '');
          if (((s as any).new_boletus ?? 0) > 0  &&  ((s as any).new_bilberry ?? 0) > 0) {
            qspCall(s, 'mood', 'raise', 'tiny');
            qspCall(s, 'stat', '');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0), 'berry']; enterPickingClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour, you found <<new_bole...
            scene.text(`After searching for mushrooms and berries for half an hour, you found ${((s as any).new_boletus || '')} kg of mushrooms and ${((s as any).new_bilberry || '')} kg of berries.`);
          } else {
            if (((s as any).new_boletus ?? 0) === 0  &&  ((s as any).new_bilberry ?? 0) > 0) {
              qspCall(s, 'mood', 'raise', 'tiny');
              qspCall(s, 'stat', '');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0), 'berry']; enterPickingClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
              // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour, you found <<new_bilb...
              scene.text(`After searching for mushrooms and berries for half an hour, you found ${((s as any).new_bilberry || '')} kg of berries.`);
            } else {
              if (((s as any).new_boletus ?? 0) > 0  &&  (!((s as any).new_bilberry ?? 0))) {
                qspCall(s, 'mood', 'raise', 'tiny');
                qspCall(s, 'stat', '');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0), 'mushroom']; enterPickingClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour, you found <<new_bole...
                scene.text(`After searching for mushrooms and berries for half an hour, you found ${((s as any).new_boletus || '')} kg of mushrooms.`);
              } else {
                if (((s as any).new_boletus ?? 0) === 0  &&  (!((s as any).new_bilberry ?? 0))) {
                  qspCall(s, 'mood', 'lower', 'tiny');
                  qspCall(s, 'stat', '');
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0)]; enterPickingClothesEmpty(s, scene); (s as any).locArgs = __savedLocArgs; }
                  scene.text('After searching for mushrooms and berries for half an hour, you found nothing.');
                }
              }
            }
          }
        }
      }
      if (((s as any).forest_args1 ?? 0) === 'gad_swamp_woods') {
        scene.actions([
          { label: 'Continue', goto: ['gad_swamp_woods', 'start'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['gad_forest', 'forest_args1'] },
        ]);
      }
      scene.actions([
        { label: 'Look for mushrooms and berries  [+iif(func(\'miroslava_schedule\', \'is_here\'...]', handler: (st: GameState) => {
    // TODO-QSP: 30)':
  } },
      ]);
    }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterPickingClothes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'mushroom') {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).locArgs?.[1] ?? 0) === 'forest_edge') {
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/miramushroom'+ra...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/gadukino/mira/miramushroom'+rand(1, 2)+'.jpg"></center>`);
      }
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/miramushroom_nud...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/gadukino/mira/miramushroom_nude'+rand(1, 2)+'.jpg"></center>`);
      }
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/mushroom4.'+ran...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/mushroom4.'+rand(1, 3)+'.jpg"></center>`);
      }
      if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/mushroom1.jpg">...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/mushroom1.jpg"></center>`);
      }
      if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/mushroom2.jpg">...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/mushroom2.jpg"></center>`);
      }
      if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/mushroom3.jpg">...
        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/mushroom3.jpg"></center>`);
      }
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'berry') {
      if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).locArgs?.[1] ?? 0) === 'forest_edge') {
        if (((s as any).clothingworntype ?? 0) !== 'nude') {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/miramushroom'+ra...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/gadukino/mira/miramushroom'+rand(1, 2)+'.jpg"></center>`);
        }
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/miramushroom_nud...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/gadukino/mira/miramushroom_nude'+rand(1, 2)+'.jpg"></center>`);
        }
      } else {
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/mushroom4.'+ran...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/mushroom4.'+rand(1, 3)+'.jpg"></center>`);
        }
        if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/blueberry_picki...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/blueberry_picking_'+rand(3, 6)+'.jpg"></center>`);
        }
        if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/blueberry_picki...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/blueberry_picking_2.jpg"></center>`);
        }
        if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/blueberry_picki...
          scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/blueberry_picking_1.jpg"></center>`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPickingClothesEmpty(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).locArgs?.[1] ?? 0) === 'forest_edge') {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/miramushroom3.jp...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/gadukino/mira/miramushroom3.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/miramushroom_nud...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/gadukino/mira/miramushroom_nude3.jpg"></center>`);
    }
  } else {
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gulforest2.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gulforest2.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gulforest3.jpg"...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gulforest3.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gulforest_tanga...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gulforest_tanga1.'+rand(1, 2)+'.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gulforest_nude1...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gulforest_nude1.'+rand(1, 4)+'.jpg"></center>`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'forest_edge':
      enterForestEdge(s, scene);
      break;
    case 'forest_outskirts':
      enterForestOutskirts(s, scene);
      break;
    case 'forest_center':
      enterForestCenter(s, scene);
      break;
    case 'bushcraft':
      enterBushcraft(s, scene);
      break;
    case 'torncloth':
      enterTorncloth(s, scene);
      break;
    case 'stripping':
      enterStripping(s, scene);
      break;
    case 'dressing':
      enterDressing(s, scene);
      break;
    case 'walking':
      enterWalking(s, scene);
      break;
    case 'picking':
      enterPicking(s, scene);
      break;
    case 'picking_clothes':
      enterPickingClothes(s, scene);
      break;
    case 'picking_clothes_empty':
      enterPickingClothesEmpty(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_forest: LocationDef = {
  name: 'gad_forest',
  title: 'You don\'t know this part of the forest very well. You could get lost if you go any deeper into the woods.',
  region: 'gadukino',
  locationType: 'secluded',
  enter: enter,
};
