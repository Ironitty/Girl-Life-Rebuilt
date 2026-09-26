import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_swamp_yard', 'start');
  (s as any).location_type = 'secluded';
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['cabin'] = 1;
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  if (((s as any).lost_girl ?? 0) === 1) {
    if (((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0) + 1  &&  (Math.floor(Math.random() * (30 - ((s as any).forest_lostday ?? 0) - ((s as any).daystart ?? 0) + 1)) + (((s as any).forest_lostday ?? 0) - ((s as any).daystart ?? 0))) >= 30  &&  ((s as any).DayStage ?? 0) === 2) {
      qspGoto(s, 'gad_forest_lost', 'rescue', 'ranger', 'gad_swamp_yard');
    }
  }
  scene.text('<center><b>The yard in front of the hut</b></center>');
  if (((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) < 4) ? ('swamp_yard.jpg') : ('swamp_yard_night.jpg')) + '"></center>');
  } else {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) < 4) ? ('swamp_yard_winter.jpg') : ('swamp_yard_winter_night.jpg')) + '"></center>');
  }
  scene.text('Behind the hut, there is a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gad_swampspring\u0027, \u0027\u0027); return false;">spring</a>. If you continue further down, there is a small <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gad_backwater\u0027, \u0027\u0027); return false;">creek</a> with relatively clean water.');
  if (((s as any).hunterVars ?? 0)?.['available'] === 1) {
    if (((s as any).hunterVars ?? 0)?.['were_met'] === 0) {
      if (((s as any).hunterVars ?? 0)?.['outside'] === 1) {
        scene.text('You spot some unfamiliar <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hunters\u0027, \u0027start\u0027); return false;">people</a> standing in front of the hut.');
      }
    } else {
      if (((s as any).hunterVars ?? 0)?.['outside'] === 1) {
        if (((s as any).hunterVars ?? 0)?.['evening'] === 1) {
          scene.text('You hear some gunshots and see <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gad_swamp_yard\u0027, \u0027shooting_practice\u0027); return false;">Andrei</a>, not too far in the distance, shooting some bottles.');
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hunters\u0027, \u0027start\u0027); return false;">Igor and Sergey</a> are standing in the front yard.');
        } else {
          if (((s as any).campfire ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['chattime'] === 0) {
            scene.text('You see the hunters are sitting by the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gad_swamp_yard\u0027, \u0027campfire\u0027); return false;">campfire</a>');
          } else {
            scene.text('You notice the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hunters\u0027, \u0027start\u0027); return false;">hunters</a> standing in the front yard.');
          }
        }
      } else {
        scene.text('The camp is quiet, but you can hear the hunters\' voices from the hut.');
      }
    }
  } else {
    if (((s as any).hunterVars ?? 0)?.['were_met'] === 0) {
      scene.text('The camp is quiet. There\'s nobody here right now, but the camp looks like it is likely in use and not abandoned.');
    } else {
      if (((s as any).hunterVars ?? 0)?.['hunting'] === 1) {
        scene.text('The hunters are most likely out hunting for a couple hours. You have the camp to yourself!');
      } else {
        scene.text('The camp is quiet. The hunters are asleep in the hut.');
      }
    }
  }
  qspCall(s, 'bicycle', 'gad_swamp_yard');
  if (((s as any).hunterVars ?? 0)?.['outside'] === 1  &&  ((s as any).hunterVars ?? 0)?.['available'] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDaytimeFlavorEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.actions([
    { label: '<b>Go to the swamp</b>', goto: ['gad_swamp_yard', 'swamp_escape'] },
    { label: 'Go into the house', goto: ['gad_swamphouse', 'start'] },
    { label: 'Approach the firepit', goto: ['gad_swamp_yard', 'campfire'] },
    { label: 'Visit the spring', goto: ['gad_swampspring', ''] },
    { label: 'Visit the creek', goto: ['gad_backwater', ''] },
    { label: 'Explore the woods', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_swamp_woods', 'start'] },
  ]);
  scene.build();
}

function enterCampfire(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'gad_swamp_yard';
  (s as any).loc_arg = 'campfire';
  qspCall(s, 'hunter_ambient', 'schedule');
  qspCall(s, 'stat', '');
  if (((s as any).campfire ?? 0) === 1) {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) === 2) ? ('campfire_day.jpg') : ('campfire_night.jpg')) + '"></center>');
    scene.text('A nice, warm campfire you can sit and relax by. You can use it for cooking something or heating up some water to bathe.');
    scene.text('You can also put it out with the bucket if there is enough water.');
    if (((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1) {
      scene.img('images/locations/gadukino/hunters/hanters1.jpg');
      scene.text('The hunters also sit around the campfire, talking and joking about all kinds of stuff before heading out hunting.');
      scene.actions([
        { label: 'Chat (0:30)', handler: (st: GameState) => {
    qspGoto(st, 'hunter_interactions', 'chat_with_hunters');
  } },
        { label: 'Ask for some survival tips (0:10)', handler: (st: GameState) => {
    (st as any).hunter_lessons = ((st as any).hunter_lessons ?? 0) + (1);
    if (((st as any).hunterVars ?? 0)?.['collective_opinion'] > 25  &&  ((st as any).hunter_lessons ?? 0) <= 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (1);
      qspCall(st, 'exp_gain', 'bushcraft', 1);
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      scene.text('The hunters talk to you about some of their experiences when they first started out.');
    } else {
      if (((st as any).hunter_lessons ?? 0) > 10  &&  ((st as any).hunterVars ?? 0)?.['sexual_comfort'] > 25) {
        scene.text('Sergei tells you to go by the creek for the next lesson about how to scope the area for a hunt.');
        (st as any).hunter_lessons = ((st as any).hunter_lessons ?? 0) - (8);
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Further', goto: ['hunter_favors', 'creekside_gangbang_request'] },
        ]);
      } else {
        (st as any).minut = ((st as any).minut ?? 0) + 20;
        scene.text('The hunters do not even bother to answer you. Instead, you sit quietly for twenty minutes before getting on to other business.');
      }
    }
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
      ]);
    }
    if (((s as any).hunterVars ?? 0)?.['drink'] === 1) {
      scene.img('images/locations/gadukino/hunters/fireside_drink.jpg');
      scene.text('The hunters are drinking and chatting loudly. You can join them for a chat or maybe a drink or two if you like.');
      scene.actions([
        { label: 'Chat (0:30)', handler: (st: GameState) => {
    qspGoto(st, 'hunter_interactions', 'chat_with_hunters');
  } },
        { label: 'Ask them for a drink', handler: (st: GameState) => {
    qspGoto(st, 'hunter_interactions', 'join_drinking');
  } },
      ]);
    }
    if (((s as any).bucket ?? 0) >= 3) {
      scene.actions([
        { label: 'Put out the fire', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/campfire_put_out.jpg');
    scene.text('You pour some water to extinguish the campfire.');
    (st as any).campfire = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).bucket = ((st as any).bucket ?? 0) - (3);
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
      ]);
    }
    if (((s as any).bucket ?? 0) > 0) {
      if (((s as any).boletus ?? 0) > 0  &&  (!((s as any).mushroom_soup ?? 0))) {
        scene.actions([
          { label: 'Cook some mushroom soup (0:30)', handler: (st: GameState) => {
    qspCall(st, 'hunter_favors', '');
  } },
        ]);
      }
      if (((s as any).raw_meat ?? 0) > 0  &&  (!((s as any).meat_stew ?? 0))) {
        scene.actions([
          { label: 'Cook some meat stew (1:00)', handler: (st: GameState) => {
    qspCall(st, 'hunter_favors', '');
  } },
        ]);
      }
    }
    if (((s as any).bucket ?? 0) >= 5  &&  (!((s as any).hotwater ?? 0))) {
      scene.actions([
        { label: 'Heat up water (0:30)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hotwater.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).bucket = ((st as any).bucket ?? 0) - (5);
    (st as any).hotwater = 1;
    (st as any).water_heated = ((st as any).water_heated ?? 0) + (1);
    if (((st as any).water_heated ?? 0) > 5  &&  (((st as any).pcs_inhib ?? 0) < 85  ||  ((st as any).hunterVars ?? 0)?.['sexual_comfort'] > 25)) {
      scene.text('"It is too tedious to keep heating up water", you think to yourself.');
    } else {
      scene.text('With the now-heated water, you can bathe yourself in the tub.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
      ]);
    }
    if (((s as any).alko ?? 0) > 8) {
      qspGoto(s, 'hunter_interactions', 'drunken_blackout');
    }
    scene.actions([
      { label: 'Eat a meal', handler: (st: GameState) => {
    if (((st as any).meat_stew ?? 0) > 0) {
      scene.actions([
        { label: 'Eat meat stew', handler: (st: GameState) => {
    qspCall(st, 'food', 'meat_stew');
    (st as any).meat_stew = ((st as any).meat_stew ?? 0) - (1);
    if (((st as any).meat_stew ?? 0) > 0) {
      scene.text(`There's ${((st as any).meat_stew ?? '')} ` + ((((st as any).meat_stew ?? 0) > 1) ? ('servings') : ('serving')) + ' of stew left in the pot');
    } else {
      scene.text('You have finished the last of the stew. The pot is empty.');
    }
  } },
      ]);
    }
    if (((st as any).mushroom_soup ?? 0) > 0) {
      scene.actions([
        { label: 'Eat mushroom soup', handler: (st: GameState) => {
    qspCall(st, 'food', 'mush_soup');
    (st as any).mushroom_soup = ((st as any).mushroom_soup ?? 0) - (1);
    if (((st as any).mushroom_soup ?? 0) > 0) {
      scene.text(`There's ${((st as any).mushroom_soup ?? '')} ` + ((((st as any).mushroom_soup ?? 0) > 1) ? ('servings') : ('serving')) + ' of soup left in the pot');
    } else {
      scene.text('You have finished the last of the soup, and the pot is empty.');
    }
  } },
      ]);
    }
    if (((st as any).bilberry ?? 0) > 0) {
      scene.actions([
        { label: 'Eat berries', goto: ['food', 'bilberry'] },
      ]);
    }
    scene.actions([
      { label: 'Return', goto: ['gad_swamp_yard', 'campfire'] },
      { label: 'Eat jerky and trail mix', goto: ['food', 'jerky'] },
    ]);
  } },
    ]);
  } else {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) === 2) ? ('campfire_out_day.jpg') : ('campfire_out_night.jpg')) + '"></center>');
    scene.text('You can use this firepit to light a fire if you have some firewood available.');
    if (((s as any).firewood ?? 0) >= 10  &&  (!((s as any).campfire ?? 0))) {
      scene.actions([
        { label: 'Light fire', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((st as any).clothingworntype ?? 0) !== 'nude') ? ('campfire_light.jpg') : ('campfire_light_nude.jpg')) + '"></center>');
    scene.text('You use some chopped wood, dry branches and twigs to light a campfire in the firepit.');
    (st as any).firewood = ((st as any).firewood ?? 0) - (10);
    (st as any).campfire = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).firewood ?? 0) < 10  &&  (!((s as any).campfire ?? 0))) {
        scene.text('There is some wood and twigs by the pit but not enough to light a new fire. You will probably need to collect branches, chop some or ask a hunter to do so.');
      }
    }
  }
  scene.actions([
    { label: 'Move away', goto: ['gad_swamp_yard', 'start'] },
  ]);
  scene.build();
}

function enterShootingPractice(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    scene.img('images/locations/gadukino/hunters/andrei_shooting.jpg');
    scene.text('You approach Andrei shooting some bottles with his pistol. You think maybe he can teach you a few tricks.');
    scene.actions([
      { label: 'Ask if you can shoot too', handler: (st: GameState) => {
    if (((st as any).hunterVars ?? 0)?.['collective_opinion'] > 50  &&  (Math.floor(Math.random() * 4) + 1) === 1) {
      scene.img('images/locations/gadukino/hunters/andrei_shooting.jpg');
      scene.text('"Sure thing! But, say, how about we spice it up a bit? If you can hit that bottle over there in one shot, I will do anything you want," says Andrei.');
      scene.text('"And what if I cannot?" you ask.');
      scene.text('"Well, in that case, you get to do anything I ask for. So it is only fair, right?" he asks with a smirk.');
      scene.text('"I guess it is," you respond, slightly blushing, thinking about what Andrei could ask you to do.');
      scene.actions([
        { label: 'Take the bet', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((st as any).clothingworntype ?? 0) !== 'nude') ? ('shooting.jpg') : ('shooting_nude.jpg')) + '"></center>');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (6);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Pull the trigger', goto: ['hunter_interactions', 'shooting_bet'] },
    ]);
  } },
        { label: 'Refuse', handler: (st: GameState) => {
    scene.text('Not liking the odds of likely spending the day naked or worse, "Maybe some other time," you respond before walking away.');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).hunterVars ?? 0)?.['collective_opinion'] > 35) {
        qspGoto(st, 'gad_swamp_yard', 'shooting_practice', 'practice');
      } else {
        if (((st as any).hunterVars ?? 0)?.['sexual_comfort'] > 20) {
          qspGoto(st, 'gad_swamp_yard', 'shooting_practice', 'andrei_request');
        } else {
          scene.img('images/locations/gadukino/hunters/andrei_shooting.jpg');
          scene.text('You try to get Andrei\'s attention, but he ignores you. Finally, when you keep trying, he waves his hand to gesture for you to go away.');
          scene.actions([
            { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
          ]);
        }
      }
    }
  } },
      { label: 'Walk away', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'practice') {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).clothingworntype ?? 0) !== 'nude') ? ('shooting.jpg') : ('shooting_nude.jpg')) + '"></center>');
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'exp_gain', 'shoot', 2);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Walk away', goto: ['gad_swamp_yard', 'start'] },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'andrei_request') {
        scene.img('images/locations/gadukino/hunters/andrei_shooting.jpg');
        scene.text('"You see, these bullets don\'t come free," says Andrei. "My time looking over your shoulder also doesn\'t come free. So you gotta pay me back somehow."');
        scene.text('"What do you mean?" you ask, with a vague idea of where this is going.');
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          scene.text('"Since you are all naked, might as well let me fuck your little pussy right here," he says, "then I will let you shoot a bit."');
          scene.actions([
            { label: 'Let him fuck you', goto: ['hunter_interactions', 'andrei_quick_fuck'] },
          ]);
        } else {
          (s as any).andrei_shooting_request = (Math.floor(Math.random() * 4) + 1);
          if (((s as any).andrei_shooting_request ?? 0) === 1) {
            scene.text('"I want you to show me your tits. Just lift your top and let me have a good look at them. You can shoot the rifle then."');
            scene.actions([
              { label: 'Flash your tits', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/shooting_tit_flash.jpg');
    scene.text('You lift your top and expose your tits to Andrei for a minute. You then cover up and ask, "Enough payment for a lesson?"');
    scene.text('"I\'d appreciate a more extended look, but I will take it," responds Andrei');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (3);
    qspCall(st, 'arousal', 'flashlite', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'shooting_practice', 'practice'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).andrei_shooting_request ?? 0) === 2) {
              scene.text('"I want you to show me your pussy. Go sit on that log and lift up your bottom. You can shoot the rifle then."');
              scene.actions([
                { label: 'Flash your pussy', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/shooting_pussy_flash.jpg');
    scene.text('You lift your bottom and expose your pussy to Andrei for a minute. You then cover up and ask, "Enough payment for a lesson?"');
    scene.text('"I\'d appreciate a longer look, but I will take it," responds Andrei');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (5);
    qspCall(st, 'arousal', 'flashlite', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'shooting_practice', 'practice'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).andrei_shooting_request ?? 0) === 3) {
                scene.text('"I want you to take off all your clothes. Then hand them all to me. If you want to shoot my rifle, you have to be in your birthday suit."');
                scene.actions([
                  { label: 'Strip naked', handler: (st: GameState) => {
    scene.text('You slowly take off your clothes one by one until you are completely naked in front of Andrei.');
    scene.text('You look at the ground and blush as he stares at your exposed tits, ass and pussy. You cannot help but feel your pussy moisten.');
    scene.text('"This naked look suits you better, do you know that?" says Andrei. He ogles your body for a few more minutes before handing you the rifle.');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (7);
    qspCall(st, 'outfit', 'strip_all', 'gad_swamphouse');
    qspCall(st, 'arousal', 'flash', 10, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'shooting_practice', 'practice'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).andrei_shooting_request ?? 0) === 4) {
                  scene.text('"Seeing a young, pretty thing like you prancing around gives me a boner. I want you to suck my dick," demands Andrei.');
                  scene.actions([
                    { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/shooting_bj.jpg');
    scene.text('You kneel down obediently and start sucking his dick until you feel him cumming down your throat. You make sure to catch every drop.');
    scene.text('"Now that\'s a good girl. Good girls get to shoot the rifle," says Andrei.');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (8);
    qspCall(st, 'boyStat', 'A172');
    qspCall(st, 'arousal', 'bj', 15, 'sub', 'exhibitionism');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A172', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'shooting_practice', 'practice'] },
    ]);
  } },
                  ]);
                }
              }
            }
          }
        }
        scene.actions([
          { label: 'Walk away', goto: ['gad_swamp_yard', 'start'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterSwampEscape(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['available'] === 1  &&  ((s as any).hunterVars ?? 0)?.['outside'] === 1) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        qspGoto(s, 'gad_swamp', 'start');
      } else {
        qspGoto(s, 'gad_swamp', 'stuck');
      }
    } else {
      scene.img('images/locations/gadukino/hunters/handshelp.jpg');
      scene.text('As you start moving into the swamp, Igor calls after you.');
      scene.text(`"${((s as any).pcs_nickname ?? '')}, where are you going? You will get stuck in there!`);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Turn back', goto: ['gad_swamp_yard', 'start'] },
        { label: 'Ignore him and keep going', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      qspGoto(st, 'gad_swamp', 'start');
    } else {
      qspGoto(st, 'gad_swamp', 'stuck');
    }
  } },
      ]);
    }
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if ((((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21)  ||  (Math.floor(Math.random() * 10) + 0) < 3) {
      qspGoto(s, 'gad_swamp', 'start');
    } else {
      qspGoto(s, 'gad_swamp', 'stuck');
    }
  }
  scene.build();
}

function enterDaytimeFlavorEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hunter_ambient', 'schedule');
  if ((Math.floor(Math.random() * 30) + 1) === 1  &&  ((s as any).hunterVars ?? 0)?.['available'] > 0) {
    qspGoto(s, 'hunter_interactions', 'skirt_breeze');
  } else {
    if ((Math.floor(Math.random() * 10) + 1) === 1  &&  ((s as any).hunterVars ?? 0)?.['available'] > 0) {
      qspGoto(s, 'hunter_favors', 'housekeeping_request');
    } else {
      if ((Math.floor(Math.random() * 12) + 1) === 1  &&  ((s as any).hunterVars ?? 0)?.['available'] > 0) {
        qspGoto(s, 'hunter_ambient', 'yard_convo');
      } else {
        if ((Math.floor(Math.random() * (((s as any).hunterVars ?? 0)?.['sexual_comfort'] / 4 + 2 - 1 + 1)) + (1)) === 1  &&  ((s as any).hunterVars ?? 0)?.['available'] > 0) {
          qspGoto(s, 'hunter_interactions', 'naked_encounter');
        } else {
          if ((Math.floor(Math.random() * 15) + 1) === 1  &&  ((s as any).hunterVars ?? 0)?.['available'] > 0) {
            qspGoto(s, 'hunter_ambient', 'bring_food');
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hunter_ambient', 'schedule');
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'campfire':
      enterCampfire(s, scene);
      break;
    case 'shooting_practice':
      enterShootingPractice(s, scene);
      break;
    case 'swamp_escape':
      enterSwampEscape(s, scene);
      break;
    case 'daytime_flavor_events':
      enterDaytimeFlavorEvents(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_swamp_yard: LocationDef = {
  name: 'gad_swamp_yard',
  title: '<center><b>The yard in front of the hut</b></center>',
  region: 'gadukino',
  locationType: 'secluded',
  enter: enter,
};
