import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_swamphouse', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).hour ?? 0) === 5) {
    (s as any).stovefire = 0;
  }
  (s as any).huntslutsexrand = (Math.floor(Math.random() * 3) + 1);
  (s as any).temp_sh = (Math.floor(Math.random() * 5) + 1);
  (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', 'gad_swamphouse');
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/locations/gadukino/hunters/swampizba.jpg');
  scene.text('A small hunting cabin. The cabin contains a small room with a low ceiling.');
  scene.text('You see a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027start/u0027); return false;">couch</a> where you can lie down and sleep.');
  if (((s as any).bucket ?? 0) > 0) {
    scene.text('A <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027bucket/u0027); return false;">bucket</a> in the corner is filled with water collected from the spring.');
  } else {
    scene.text('There\'s an empty bucket placed in the corner. It needs refilling with water from the spring.');
  }
  scene.text('You see an old <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027washstand/u0027); return false;">washstand</a> you can use to wash your hands and face. There is a well-used <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027tub/u0027); return false;">tub</a> nearby that you can use to bathe in.');
  scene.text('In the other corner, you see a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027stove/u0027); return false;">stove</a>. With water from the spring and some mushrooms or meat, you could cook something to eat, or you could warm the water so you can bathe in the tub.');
  if ((!((s as any).stovefire ?? 0))) {
    // TODO-QSP: dynamic text: The hut feels '+iif(temper < 15, 'quite cold. Maybe you should start a fire on t...
    scene.text('The hut feels ' + ((((s as any).temper ?? 0) < 15) ? ('quite cold. Maybe you should start a fire on the old stove.') : ('quite warm, even without the stove fire burning.')) + '');
  } else {
    if (((s as any).stovefire ?? 0) > 0) {
      // TODO-QSP: dynamic text: The hut feels '+iif(temper > 15, 'extremely', 'quite')+' warm with the old stove...
      scene.text('The hut feels ' + ((((s as any).temper ?? 0) > 15) ? ('extremely') : ('quite')) + ' warm with the old stove fire burning away.');
    }
  }
  scene.text('Besides the stove, there\'s a stack of old <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027stackmagazines/u0027); return false;">magazines</a>, most likely used for ignition.');
  if (((s as any).clothesAtLocation ?? 0) === 1) {
    scene.text('Your clothes are lying on the shelf.');
  }
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
    if (((s as any).hunterVars ?? 0)?.['inside'] === 1) {
      if (((s as any).hunterVars ?? 0)?.['drink'] === 1) {
        scene.text('You see the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027hunterstable/u0027); return false;">hunters</a> sitting around the table talking.');
      } else {
        if (((s as any).hunterVars ?? 0)?.['sleep'] === 1) {
          scene.text('The hunters are sleeping on the couch.');
        } else {
          if (((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1  ||  ((s as any).hunterVars ?? 0)?.['dinner'] === 1) {
            scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027hunterstable/u0027); return false;">hunters</a> are sitting around the table.');
          } else {
            scene.text('You see the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027huntersrelax/u0027); return false;">hunters</a> hanging out in the hut.');
          }
        }
      }
    }
  } else {
    if (((s as any).hunterVars ?? 0)?.['inside'] === 1) {
      if (((s as any).hunterVars ?? 0)?.['drink'] === 1) {
        scene.text('You can see three hunters hanging out in the hut.');
      } else {
        if (((s as any).hunterVars ?? 0)?.['sleep'] === 1) {
          scene.text('You can see three hunters sleeping on the couch.');
        } else {
          if (((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1  ||  ((s as any).hunterVars ?? 0)?.['dinner'] === 1) {
            scene.text('You can see three hunters sitting around the table talking.');
          } else {
            scene.text('You can see three hunters resting at the table talking.');
          }
        }
      }
    } else {
      scene.text('There\'s nobody here right now');
    }
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).clothesAtLocation ?? 0))) {
    scene.actions([
      { label: 'Get undressed', handler: (st: GameState) => {
    if ((((st as any).hunterVars ?? 0)?.['KnowSlut'] > 0  ||  (((st as any).pcs_inhib ?? 0) >= 25  ||  ((st as any).trait_vars ?? 0)?.['exhibitionist'] < 1)  &&  ((st as any).hunterVars ?? 0)?.['inside'] === 1)  ||  ((st as any).hunterVars ?? 0)?.['outside'] === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      if (((st as any).clothingworntype ?? 0) !== 'nude') {
        qspCall(st, 'clothing', 'strip', 'gad_swamphouse');
      }
      qspCall(st, 'underwear', 'remove');
      qspCall(st, 'stat', '');
      scene.img('images/locations/gadukino/hunters/swamphouseundress.jpg');
      // TODO-QSP: dynamic text: '+iif(temper > 23, 'Feeling the heat in the cabin,', 'You feel the need to get n...
      scene.text('' + ((((st as any).temper ?? 0) > 23) ? ('Feeling the heat in the cabin,') : ('You feel the need to get naked, so')) + ' you start removing your clothes.');
      scene.actions([
        { label: 'Back', goto: ['gad_swamphouse', 'start'] },
      ]);
    } else {
      scene.img('images/locations/gadukino/hunters/noundress.jpg');
      // TODO-QSP: dynamic text: '+iif(temper > 23, 'Despite the heat,', 'Despite your need to get naked,')+' you...
      scene.text('' + ((((st as any).temper ?? 0) > 23) ? ('Despite the heat,') : ('Despite your need to get naked,')) + ' you\'re still too shy to get undressed. What if someone suddenly comes in?');
      scene.actions([
        { label: 'Back', goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).clothesAtLocation ?? 0) === 1  &&  (!((s as any).swamp_clothes ?? 0))) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/swampdvornude1.jpg');
    scene.text('You put your clothes back on.');
    qspCall(st, 'underwear', 'wear');
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_swamphouse', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pick up your clothes', handler: (st: GameState) => {
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_swamphouse');
    scene.text('You pick up your clothes.');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).swamp_clothes ?? 0) === 1) {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.actions([
          { label: 'Wear hessian sack', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/tkan_cloth.jpg');
    scene.text('You cover yourself with the hessian sack');
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_swamphouse');
    qspCall(st, 'clothing', 'gad_swamp_clothes', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  (((s as any).hunterVars ?? 0)?.['inside'] === 0  ||  ((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0  ||  (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1))) {
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
    ]);
  }
  if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).swamp_clothes ?? 0) === 0  &&  ((s as any).clothesAtLocation ?? 0) === 0)  ||  (!((s as any).swamp_enema ?? 0))) {
    scene.actions([
      { label: 'Look for some clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    if ((!((st as any).swamp_enema ?? 0))) {
      (st as any).swamp_enema = 1;
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['enema_kit'] = 1;
      qspCall(st, 'stat', '');
      scene.img('images/locations/gadukino/hunters/enema.jpg');
      scene.text('Your search for your clothes but only find an enema syringe… "What is this doing here?" you wonder.');
      scene.actions([
        { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
      ]);
    } else {
      qspCall(st, 'clothing', 'gad_swamp_clothes', 1);
      qspCall(st, 'stat', '');
      scene.img('images/locations/gadukino/hunters/swamphouse_tkancloth.jpg');
      scene.text('You find a piece of hessian… "Well, at least it\'s something," you say.');
      scene.actions([
        { label: 'Back.', goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).stovefire ?? 0) === 0  ||  (((s as any).meat_stew ?? 0) === 0  &&  ((s as any).raw_meat ?? 0) > 0)  ||  (((s as any).mushroom_soup ?? 0) === 0  &&  ((s as any).boletus ?? 0) > 0)) {
    scene.actions([
      { label: 'Use the rickety stove', goto: ['gad_swamphouse', 'stove'] },
    ]);
  }
  if (((s as any).pcs_energy ?? 0) < 80) {
    scene.actions([
      { label: 'Grab something to eat', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'food');
  } },
    ]);
  }
  if (((s as any).bucket ?? 0) > 0  &&  ((s as any).pcs_hydra ?? 0) < 80) {
    scene.actions([
      { label: 'Grab a drink of water', goto: ['gad_swamphouse', 'bucket'] },
    ]);
  }
  if (((s as any).bucket ?? 0) > 0  &&  (!((s as any).pcs_hairbsh ?? 0))) {
    scene.actions([
      { label: 'Use the wash basin', goto: ['gad_swamphouse', 'washstand'] },
    ]);
  }
  if (((s as any).hotwater ?? 0) === 1  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_sweat ?? 0) > 19) {
    scene.actions([
      { label: 'Bathe in the old tub', goto: ['gad_swamphouse', 'tub'] },
    ]);
  }
  if (((s as any).dirty_swamphouse ?? 0) > 25) {
    qspGoto(s, 'gad_swamphouse', 'dirty_swamphouse');
    scene.actions([
      { label: 'Clean the hut', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['slut'] -= 1
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19  &&  ((s as any).hunterVars ?? 0)?.['IgorQW'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Igorsex'] === 0) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Igorsex'] = ((s as any).hunterVars['Igorsex'] ?? 0) + ((Math.floor(Math.random() * 25) + 12));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
    scene.text('Entering the hut, you see Igor. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
    scene.text(`"${((s as any).pcs_nickname || '')}, I want you," he whispers.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterflirt2.' + (Math.floor(Math.random() * 3) + 4) + '.jpg');
    scene.text('Smiling, you look straight into Igor\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Igor', goto: ['hunterLoveSex', 'Igor'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I\'m sorry, Igor. I\'m not in the mood," you say, avoiding eye contact. Igor leaves disappointed…');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Sergeisex'] === 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) + ((Math.floor(Math.random() * 22) + 9));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
    scene.text('Entering the hut, you see Sergei. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
    scene.text(`"${((s as any).pcs_nickname || '')}, I want you," he whispers.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterflirt2.' + (Math.floor(Math.random() * 3) + 4) + '.jpg');
    scene.text('Smiling, you look straight into Sergei\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Sergei', goto: ['hunterLoveSex', 'Sergei'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I\'m sorry, Sergei. I\'m not in the mood," you say, avoiding eye contact. Sergei leaves disappointed…');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Andreisex'] === 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + ((Math.floor(Math.random() * 19) + 6));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
    scene.text('Entering the hut, you see Andrei. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
    scene.text(`"${((s as any).pcs_nickname || '')}, I want you," he whispers.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterhands.jpg');
    scene.text('Smiling, you look straight into Andrei\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Andrei', goto: ['hunterLoveSex', 'Andrei'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I\'m sorry, Andrei. I\'m not in the mood," you say, avoiding eye contact. Andrei leaves disappointed…');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['inside'] === 1  &&  ((s as any).doublehunterlove ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20  &&  (((s as any).hunterVars ?? 0)?.['Andreisex'] === 0  ||  ((s as any).hunterVars ?? 0)?.['Sergeisex'] === 0)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + ((Math.floor(Math.random() * 19) + 6));
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) + ((Math.floor(Math.random() * 22) + 9));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterswork1.2.jpg');
    scene.text('You see Andrei talking with Sergei in the hut.');
    // TODO-QSP: dynamic text: "Come in, <<$pcs_nickname>>. It''s time to consummate the marriage," Andrew joki...
    scene.text(`"Come in, ${((s as any).pcs_nickname || '')}. It's time to consummate the marriage," Andrew jokingly remarks. "I hope you're willing to do anything we say.`);
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('"I\'m sorry, I don\'t know if I\'m ready yet…" you say. "I haven\'t been able to clean myself as you asked. Maybe we could skip it this time?');
    }
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text: Well, we could, <<$pcs_nickname>>…" says Andrei, "but since you''re already here...
      scene.text(`Well, we could, ${((s as any).pcs_nickname || '')}…" says Andrei, "but since you're already here, you not being all dolled up doesn't matter to us. But don't dare to try to fool us next time. We will not forget."`);
    }
    scene.text('"There are some bushes not far from here. We could take her with us there, and no one would be able to find us. Should we tell Igor to join us?" says Sergei. "Never mind Igor, it would take him too long to join us."');
    scene.actions([
      { label: 'Follow the guys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    (st as any).doublelovesex = 1;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    (st as any).temphunt = 1;
    if (((st as any).klismaday ?? 0) !== ((st as any).daystart ?? 0)) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/doublehanterlove.jpg');
    scene.text('The men hold your hands, leading you away from the hut. Of course, you\'re fully aware of their plans but don\'t mind.');
    scene.actions([
      { label: 'Continue', goto: ['huntersex', 'doublelovesex'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"No, I refuse. This is something I don\'t want part of," you say, and without hesitating, you turn around and walk away.');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['drink'] === 1  &&  ((s as any).hunterVars ?? 0)?.['inside'] === 1  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0  &&  ((s as any).hunterVars ?? 0)?.['refuse'] === 0  &&  ((s as any).hunterVars ?? 0)?.['drinking'] !== ((s as any).daystart ?? 0)) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).temp_sh = (Math.floor(Math.random() * 4) + 1);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['drinking'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    if (((s as any).temp_sh ?? 0) === 1) {
      scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
      scene.text('You enter the hut and notice the plastered hunters.');
      // TODO-QSP: dynamic text: "Oh, look who''s showed up. <<$pcs_nickname>>, join us for a drink!" they invite...
      scene.text(`"Oh, look who's showed up. ${((s as any).pcs_nickname || '')}, join us for a drink!" they invite you in.`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
    if (((s as any).temp_sh ?? 0) === 2) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
      scene.img('images/characters/shared/headshots_main/big172.jpg');
      scene.text('You enter the hut and notice the plastered hunters.');
      // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, join us for a drink!" says Andrei.
      scene.text(`Oh, ${((s as any).pcs_nickname || '')}, join us for a drink!" says Andrei.`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
    if (((s as any).temp_sh ?? 0) === 3) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
      scene.img('images/characters/shared/headshots_main/big174.jpg');
      scene.text('You enter the hut and notice the plastered hunters.');
      // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, come join us for a drink!" Sergei says, noticing you ente...
      scene.text(`Oh, ${((s as any).pcs_nickname || '')}, come join us for a drink!" Sergei says, noticing you entering.`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
    if (((s as any).temp_sh ?? 0) === 4) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
      scene.img('images/characters/shared/headshots_main/big173.jpg');
      scene.text('You enter the hut and notice the plastered hunters.');
      // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, come join us for a drink!" Igor shouts, ignoring the othe...
      scene.text(`Oh, ${((s as any).pcs_nickname || '')}, come join us for a drink!" Igor shouts, ignoring the other conversation.`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  } else {
    if ((((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1)  &&  ((s as any).hunterVars ?? 0)?.['breakfastday'] !== ((s as any).daystart ?? 0)) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['breakfastday'] = ((s as any).daystart ?? 0);
      scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
      // TODO-QSP: dynamic text: You go into the hut and notice that the hunters have prepared '+iif(hunterVars['...
      scene.text('You go into the hut and notice that the hunters have prepared ' + ((((s as any).hunterVars ?? 0)?.['breakfast'] === 1) ? ('breakfast.') : ('lunch.')) + '.');
      // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>, you''re just in time, come join us!"
      scene.text(`"Oh, ${((s as any).pcs_nickname || '')}, you're just in time, come join us!"`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  }
  if (((s as any).hunterVars ?? 0)?.['inside'] === 1  &&  ((s as any).hunterVars ?? 0)?.['Rape'] === 5  &&  ((s as any).huntslutsexrand ?? 0) === 1  &&  ((s as any).huntslutsex ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 23) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).temphunt = (Math.floor(Math.random() * 3) + 1);
    (s as any).sluthomesex = 1;
    qspCall(s, 'stat', '');
    if (((s as any).temphunt ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big172.j...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/shared/headshots_main/big172.jpg"></center>`);
    }
    if (((s as any).temphunt ?? 0) === 2) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big174.j...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/shared/headshots_main/big174.jpg"></center>`);
    }
    if (((s as any).temphunt ?? 0) === 3) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big173.j...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/shared/headshots_main/big173.jpg"></center>`);
    }
    if (((s as any).temphunt ?? 0) === 1) {
      // TODO-QSP: dynamic text: You enter the hut and bump into Andrei. "Come here, <<$pcs_nickname>>," he excla...
      scene.text(`You enter the hut and bump into Andrei. "Come here, ${((s as any).pcs_nickname || '')}," he exclaims, not saying anything more while he throws you on the bed.`);
    }
    if (((s as any).temphunt ?? 0) === 2) {
      // TODO-QSP: dynamic text: You enter the hut and bump into Sergei. Noticing you, he heads toward you, sayin...
      scene.text(`You enter the hut and bump into Sergei. Noticing you, he heads toward you, saying, "${((s as any).pcs_nickname || '')}, I've got an itch that only you can help scratch."`);
    }
    if (((s as any).temphunt ?? 0) === 3) {
      // TODO-QSP: dynamic text: You enter the hut and bump into Igor. He smiles, saying, "<<$pcs_nickname>>, I n...
      scene.text(`You enter the hut and bump into Igor. He smiles, saying, "${((s as any).pcs_nickname || '')}, I need to empty my sack. Help me out…"`);
    }
    if (((s as any).pcs_horny ?? 0) < 40) {
      scene.text(' You obediently follow suit, knowing what he wants.');
    }
    if (((s as any).pcs_horny ?? 0) >= 40  &&  ((s as any).pcs_horny ?? 0) < 70) {
      scene.text('"Come and get me…" is all you manage to say before spreading your legs.');
    }
    if (((s as any).pcs_horny ?? 0) >= 70) {
      scene.text('"I was hoping this would happen," you think, feeling your wet pussy screaming with desire. You jump on him, taking charge, leaving him stunned about who wants it more.');
    }
    scene.actions([
      { label: 'Go with him', goto: ['huntersex', 'sluthomesex'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: hunterVars['refuse'] = 0
  }, goto: ['gad_swamp_yard', 'start'] },
    { label: 'Relax on the couch', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_swamphouse', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).hour ?? 0) === 5) {
    (s as any).stovefire = 0;
  }
  (s as any).huntslutsexrand = (Math.floor(Math.random() * 3) + 1);
  (s as any).temp_sh = (Math.floor(Math.random() * 5) + 1);
  (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', 'gad_swamphouse');
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/locations/gadukino/hunters/swampizba.jpg');
  scene.text('A small hunting cabin. The cabin contains a small room with a low ceiling.');
  scene.text('You see a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027start/u0027); return false;">couch</a> where you can lie down and sleep.');
  if (((s as any).bucket ?? 0) > 0) {
    scene.text('A <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027bucket/u0027); return false;">bucket</a> in the corner is filled with water collected from the spring.');
  } else {
    scene.text('There\'s an empty bucket placed in the corner. It needs refilling with water from the spring.');
  }
  scene.text('You see an old <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027washstand/u0027); return false;">washstand</a> you can use to wash your hands and face. There is a well-used <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027tub/u0027); return false;">tub</a> nearby that you can use to bathe in.');
  scene.text('In the other corner, you see a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027stove/u0027); return false;">stove</a>. With water from the spring and some mushrooms or meat, you could cook something to eat, or you could warm the water so you can bathe in the tub.');
  if ((!((s as any).stovefire ?? 0))) {
    // TODO-QSP: dynamic text: The hut feels '+iif(temper < 15, 'quite cold. Maybe you should start a fire on t...
    scene.text('The hut feels ' + ((((s as any).temper ?? 0) < 15) ? ('quite cold. Maybe you should start a fire on the old stove.') : ('quite warm, even without the stove fire burning.')) + '');
  } else {
    if (((s as any).stovefire ?? 0) > 0) {
      // TODO-QSP: dynamic text: The hut feels '+iif(temper > 15, 'extremely', 'quite')+' warm with the old stove...
      scene.text('The hut feels ' + ((((s as any).temper ?? 0) > 15) ? ('extremely') : ('quite')) + ' warm with the old stove fire burning away.');
    }
  }
  scene.text('Besides the stove, there\'s a stack of old <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027stackmagazines/u0027); return false;">magazines</a>, most likely used for ignition.');
  if (((s as any).clothesAtLocation ?? 0) === 1) {
    scene.text('Your clothes are lying on the shelf.');
  }
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
    if (((s as any).hunterVars ?? 0)?.['inside'] === 1) {
      if (((s as any).hunterVars ?? 0)?.['drink'] === 1) {
        scene.text('You see the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027hunterstable/u0027); return false;">hunters</a> sitting around the table talking.');
      } else {
        if (((s as any).hunterVars ?? 0)?.['sleep'] === 1) {
          scene.text('The hunters are sleeping on the couch.');
        } else {
          if (((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1  ||  ((s as any).hunterVars ?? 0)?.['dinner'] === 1) {
            scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027hunterstable/u0027); return false;">hunters</a> are sitting around the table.');
          } else {
            scene.text('You see the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027huntersrelax/u0027); return false;">hunters</a> hanging out in the hut.');
          }
        }
      }
    }
  } else {
    if (((s as any).hunterVars ?? 0)?.['inside'] === 1) {
      if (((s as any).hunterVars ?? 0)?.['drink'] === 1) {
        scene.text('You can see three hunters hanging out in the hut.');
      } else {
        if (((s as any).hunterVars ?? 0)?.['sleep'] === 1) {
          scene.text('You can see three hunters sleeping on the couch.');
        } else {
          if (((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1  ||  ((s as any).hunterVars ?? 0)?.['dinner'] === 1) {
            scene.text('You can see three hunters sitting around the table talking.');
          } else {
            scene.text('You can see three hunters resting at the table talking.');
          }
        }
      }
    } else {
      scene.text('There\'s nobody here right now');
    }
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).clothesAtLocation ?? 0))) {
    scene.actions([
      { label: 'Get undressed', handler: (st: GameState) => {
    if ((((st as any).hunterVars ?? 0)?.['KnowSlut'] > 0  ||  (((st as any).pcs_inhib ?? 0) >= 25  ||  ((st as any).trait_vars ?? 0)?.['exhibitionist'] < 1)  &&  ((st as any).hunterVars ?? 0)?.['inside'] === 1)  ||  ((st as any).hunterVars ?? 0)?.['outside'] === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      if (((st as any).clothingworntype ?? 0) !== 'nude') {
        qspCall(st, 'clothing', 'strip', 'gad_swamphouse');
      }
      qspCall(st, 'underwear', 'remove');
      qspCall(st, 'stat', '');
      scene.img('images/locations/gadukino/hunters/swamphouseundress.jpg');
      // TODO-QSP: dynamic text: '+iif(temper > 23, 'Feeling the heat in the cabin,', 'You feel the need to get n...
      scene.text('' + ((((st as any).temper ?? 0) > 23) ? ('Feeling the heat in the cabin,') : ('You feel the need to get naked, so')) + ' you start removing your clothes.');
      scene.actions([
        { label: 'Back', goto: ['gad_swamphouse', 'start'] },
      ]);
    } else {
      scene.img('images/locations/gadukino/hunters/noundress.jpg');
      // TODO-QSP: dynamic text: '+iif(temper > 23, 'Despite the heat,', 'Despite your need to get naked,')+' you...
      scene.text('' + ((((st as any).temper ?? 0) > 23) ? ('Despite the heat,') : ('Despite your need to get naked,')) + ' you\'re still too shy to get undressed. What if someone suddenly comes in?');
      scene.actions([
        { label: 'Back', goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).clothesAtLocation ?? 0) === 1  &&  (!((s as any).swamp_clothes ?? 0))) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/swampdvornude1.jpg');
    scene.text('You put your clothes back on.');
    qspCall(st, 'underwear', 'wear');
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_swamphouse', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pick up your clothes', handler: (st: GameState) => {
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_swamphouse');
    scene.text('You pick up your clothes.');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).swamp_clothes ?? 0) === 1) {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.actions([
          { label: 'Wear hessian sack', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/tkan_cloth.jpg');
    scene.text('You cover yourself with the hessian sack');
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_swamphouse');
    qspCall(st, 'clothing', 'gad_swamp_clothes', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  (((s as any).hunterVars ?? 0)?.['inside'] === 0  ||  ((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0  ||  (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1))) {
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
    ]);
  }
  if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).swamp_clothes ?? 0) === 0  &&  ((s as any).clothesAtLocation ?? 0) === 0)  ||  (!((s as any).swamp_enema ?? 0))) {
    scene.actions([
      { label: 'Look for some clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    if ((!((st as any).swamp_enema ?? 0))) {
      (st as any).swamp_enema = 1;
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['enema_kit'] = 1;
      qspCall(st, 'stat', '');
      scene.img('images/locations/gadukino/hunters/enema.jpg');
      scene.text('Your search for your clothes but only find an enema syringe… "What is this doing here?" you wonder.');
      scene.actions([
        { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
      ]);
    } else {
      qspCall(st, 'clothing', 'gad_swamp_clothes', 1);
      qspCall(st, 'stat', '');
      scene.img('images/locations/gadukino/hunters/swamphouse_tkancloth.jpg');
      scene.text('You find a piece of hessian… "Well, at least it\'s something," you say.');
      scene.actions([
        { label: 'Back.', goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).stovefire ?? 0) === 0  ||  (((s as any).meat_stew ?? 0) === 0  &&  ((s as any).raw_meat ?? 0) > 0)  ||  (((s as any).mushroom_soup ?? 0) === 0  &&  ((s as any).boletus ?? 0) > 0)) {
    scene.actions([
      { label: 'Use the rickety stove', goto: ['gad_swamphouse', 'stove'] },
    ]);
  }
  if (((s as any).pcs_energy ?? 0) < 80) {
    scene.actions([
      { label: 'Grab something to eat', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'food');
  } },
    ]);
  }
  if (((s as any).bucket ?? 0) > 0  &&  ((s as any).pcs_hydra ?? 0) < 80) {
    scene.actions([
      { label: 'Grab a drink of water', goto: ['gad_swamphouse', 'bucket'] },
    ]);
  }
  if (((s as any).bucket ?? 0) > 0  &&  (!((s as any).pcs_hairbsh ?? 0))) {
    scene.actions([
      { label: 'Use the wash basin', goto: ['gad_swamphouse', 'washstand'] },
    ]);
  }
  if (((s as any).hotwater ?? 0) === 1  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_sweat ?? 0) > 19) {
    scene.actions([
      { label: 'Bathe in the old tub', goto: ['gad_swamphouse', 'tub'] },
    ]);
  }
  if (((s as any).dirty_swamphouse ?? 0) > 25) {
    qspGoto(s, 'gad_swamphouse', 'dirty_swamphouse');
    scene.actions([
      { label: 'Clean the hut', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['slut'] -= 1
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19  &&  ((s as any).hunterVars ?? 0)?.['IgorQW'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Igorsex'] === 0) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Igorsex'] = ((s as any).hunterVars['Igorsex'] ?? 0) + ((Math.floor(Math.random() * 25) + 12));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
    scene.text('Entering the hut, you see Igor. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
    scene.text(`"${((s as any).pcs_nickname || '')}, I want you," he whispers.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterflirt2.' + (Math.floor(Math.random() * 3) + 4) + '.jpg');
    scene.text('Smiling, you look straight into Igor\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Igor', goto: ['hunterLoveSex', 'Igor'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I\'m sorry, Igor. I\'m not in the mood," you say, avoiding eye contact. Igor leaves disappointed…');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Sergeisex'] === 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) + ((Math.floor(Math.random() * 22) + 9));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
    scene.text('Entering the hut, you see Sergei. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
    scene.text(`"${((s as any).pcs_nickname || '')}, I want you," he whispers.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterflirt2.' + (Math.floor(Math.random() * 3) + 4) + '.jpg');
    scene.text('Smiling, you look straight into Sergei\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Sergei', goto: ['hunterLoveSex', 'Sergei'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I\'m sorry, Sergei. I\'m not in the mood," you say, avoiding eye contact. Sergei leaves disappointed…');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Andreisex'] === 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + ((Math.floor(Math.random() * 19) + 6));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
    scene.text('Entering the hut, you see Andrei. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
    scene.text(`"${((s as any).pcs_nickname || '')}, I want you," he whispers.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterhands.jpg');
    scene.text('Smiling, you look straight into Andrei\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Andrei', goto: ['hunterLoveSex', 'Andrei'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I\'m sorry, Andrei. I\'m not in the mood," you say, avoiding eye contact. Andrei leaves disappointed…');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['inside'] === 1  &&  ((s as any).doublehunterlove ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20  &&  (((s as any).hunterVars ?? 0)?.['Andreisex'] === 0  ||  ((s as any).hunterVars ?? 0)?.['Sergeisex'] === 0)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + ((Math.floor(Math.random() * 19) + 6));
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) + ((Math.floor(Math.random() * 22) + 9));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterswork1.2.jpg');
    scene.text('You see Andrei talking with Sergei in the hut.');
    // TODO-QSP: dynamic text: "Come in, <<$pcs_nickname>>. It''s time to consummate the marriage," Andrew joki...
    scene.text(`"Come in, ${((s as any).pcs_nickname || '')}. It's time to consummate the marriage," Andrew jokingly remarks. "I hope you're willing to do anything we say.`);
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('"I\'m sorry, I don\'t know if I\'m ready yet…" you say. "I haven\'t been able to clean myself as you asked. Maybe we could skip it this time?');
    }
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text: Well, we could, <<$pcs_nickname>>…" says Andrei, "but since you''re already here...
      scene.text(`Well, we could, ${((s as any).pcs_nickname || '')}…" says Andrei, "but since you're already here, you not being all dolled up doesn't matter to us. But don't dare to try to fool us next time. We will not forget."`);
    }
    scene.text('"There are some bushes not far from here. We could take her with us there, and no one would be able to find us. Should we tell Igor to join us?" says Sergei. "Never mind Igor, it would take him too long to join us."');
    scene.actions([
      { label: 'Follow the guys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    (st as any).doublelovesex = 1;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    (st as any).temphunt = 1;
    if (((st as any).klismaday ?? 0) !== ((st as any).daystart ?? 0)) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/doublehanterlove.jpg');
    scene.text('The men hold your hands, leading you away from the hut. Of course, you\'re fully aware of their plans but don\'t mind.');
    scene.actions([
      { label: 'Continue', goto: ['huntersex', 'doublelovesex'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"No, I refuse. This is something I don\'t want part of," you say, and without hesitating, you turn around and walk away.');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['drink'] === 1  &&  ((s as any).hunterVars ?? 0)?.['inside'] === 1  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0  &&  ((s as any).hunterVars ?? 0)?.['refuse'] === 0  &&  ((s as any).hunterVars ?? 0)?.['drinking'] !== ((s as any).daystart ?? 0)) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).temp_sh = (Math.floor(Math.random() * 4) + 1);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['drinking'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    if (((s as any).temp_sh ?? 0) === 1) {
      scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
      scene.text('You enter the hut and notice the plastered hunters.');
      // TODO-QSP: dynamic text: "Oh, look who''s showed up. <<$pcs_nickname>>, join us for a drink!" they invite...
      scene.text(`"Oh, look who's showed up. ${((s as any).pcs_nickname || '')}, join us for a drink!" they invite you in.`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
    if (((s as any).temp_sh ?? 0) === 2) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
      scene.img('images/characters/shared/headshots_main/big172.jpg');
      scene.text('You enter the hut and notice the plastered hunters.');
      // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, join us for a drink!" says Andrei.
      scene.text(`Oh, ${((s as any).pcs_nickname || '')}, join us for a drink!" says Andrei.`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
    if (((s as any).temp_sh ?? 0) === 3) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
      scene.img('images/characters/shared/headshots_main/big174.jpg');
      scene.text('You enter the hut and notice the plastered hunters.');
      // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, come join us for a drink!" Sergei says, noticing you ente...
      scene.text(`Oh, ${((s as any).pcs_nickname || '')}, come join us for a drink!" Sergei says, noticing you entering.`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
    if (((s as any).temp_sh ?? 0) === 4) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
      scene.img('images/characters/shared/headshots_main/big173.jpg');
      scene.text('You enter the hut and notice the plastered hunters.');
      // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, come join us for a drink!" Igor shouts, ignoring the othe...
      scene.text(`Oh, ${((s as any).pcs_nickname || '')}, come join us for a drink!" Igor shouts, ignoring the other conversation.`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  } else {
    if ((((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1)  &&  ((s as any).hunterVars ?? 0)?.['breakfastday'] !== ((s as any).daystart ?? 0)) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['breakfastday'] = ((s as any).daystart ?? 0);
      scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
      // TODO-QSP: dynamic text: You go into the hut and notice that the hunters have prepared '+iif(hunterVars['...
      scene.text('You go into the hut and notice that the hunters have prepared ' + ((((s as any).hunterVars ?? 0)?.['breakfast'] === 1) ? ('breakfast.') : ('lunch.')) + '.');
      // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>, you''re just in time, come join us!"
      scene.text(`"Oh, ${((s as any).pcs_nickname || '')}, you're just in time, come join us!"`);
      scene.actions([
        { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  }
  if (((s as any).hunterVars ?? 0)?.['inside'] === 1  &&  ((s as any).hunterVars ?? 0)?.['Rape'] === 5  &&  ((s as any).huntslutsexrand ?? 0) === 1  &&  ((s as any).huntslutsex ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 23) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).temphunt = (Math.floor(Math.random() * 3) + 1);
    (s as any).sluthomesex = 1;
    qspCall(s, 'stat', '');
    if (((s as any).temphunt ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big172.j...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/shared/headshots_main/big172.jpg"></center>`);
    }
    if (((s as any).temphunt ?? 0) === 2) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big174.j...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/shared/headshots_main/big174.jpg"></center>`);
    }
    if (((s as any).temphunt ?? 0) === 3) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big173.j...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/characters/shared/headshots_main/big173.jpg"></center>`);
    }
    if (((s as any).temphunt ?? 0) === 1) {
      // TODO-QSP: dynamic text: You enter the hut and bump into Andrei. "Come here, <<$pcs_nickname>>," he excla...
      scene.text(`You enter the hut and bump into Andrei. "Come here, ${((s as any).pcs_nickname || '')}," he exclaims, not saying anything more while he throws you on the bed.`);
    }
    if (((s as any).temphunt ?? 0) === 2) {
      // TODO-QSP: dynamic text: You enter the hut and bump into Sergei. Noticing you, he heads toward you, sayin...
      scene.text(`You enter the hut and bump into Sergei. Noticing you, he heads toward you, saying, "${((s as any).pcs_nickname || '')}, I've got an itch that only you can help scratch."`);
    }
    if (((s as any).temphunt ?? 0) === 3) {
      // TODO-QSP: dynamic text: You enter the hut and bump into Igor. He smiles, saying, "<<$pcs_nickname>>, I n...
      scene.text(`You enter the hut and bump into Igor. He smiles, saying, "${((s as any).pcs_nickname || '')}, I need to empty my sack. Help me out…"`);
    }
    if (((s as any).pcs_horny ?? 0) < 40) {
      scene.text(' You obediently follow suit, knowing what he wants.');
    }
    if (((s as any).pcs_horny ?? 0) >= 40  &&  ((s as any).pcs_horny ?? 0) < 70) {
      scene.text('"Come and get me…" is all you manage to say before spreading your legs.');
    }
    if (((s as any).pcs_horny ?? 0) >= 70) {
      scene.text('"I was hoping this would happen," you think, feeling your wet pussy screaming with desire. You jump on him, taking charge, leaving him stunned about who wants it more.');
    }
    scene.actions([
      { label: 'Go with him', goto: ['huntersex', 'sluthomesex'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: hunterVars['refuse'] = 0
  }, goto: ['gad_swamp_yard', 'start'] },
    { label: 'Relax on the couch', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

function enterStove(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'gad_swamphouse';
  (s as any).loc_arg = 'stove';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/stove.jpg');
  scene.text('A barely functioning wooden stove somehow does what it\'s supposed to do. You can heat 5 litres of water at a time or make a mushroom soup or a meat stew.');
  if (((s as any).firewood ?? 0) >= 5  &&  (!((s as any).stovefire ?? 0))) {
    scene.actions([
      { label: 'Light stove', handler: (st: GameState) => {
    scene.text('You use some chopped wood, dry branches and twigs to light the stove.');
    (st as any).firewood = ((st as any).firewood ?? 0) - (5);
    (st as any).stovefire = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'stove'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).firewood ?? 0) < 5  &&  (!((s as any).stovefire ?? 0))) {
      scene.text('There isn\'t enough firewood in the woodbox to start the stove fire. You should go outside to find some.');
    }
  }
  if (((s as any).bucket ?? 0) > 0  &&  ((s as any).boletus ?? 0) > 0  &&  ((s as any).mushroom_soup ?? 0) === 0  &&  ((s as any).stovefire ?? 0) === 1) {
    scene.actions([
      { label: 'Cook some mushroom soup (0:30)', handler: (st: GameState) => {
    qspCall(st, 'hunter_favors', 'mushroom_soup');
  } },
    ]);
  }
  if (((s as any).bucket ?? 0) > 0  &&  ((s as any).raw_meat ?? 0) > 0  &&  ((s as any).meat_stew ?? 0) === 0  &&  ((s as any).stovefire ?? 0) === 1) {
    scene.actions([
      { label: 'Cook some meat stew (1:00)', handler: (st: GameState) => {
    qspCall(st, 'hunter_favors', 'meat_stew');
  } },
    ]);
  }
  if (((s as any).bucket ?? 0) >= 5  &&  ((s as any).hotwater ?? 0) === 0  &&  ((s as any).stovefire ?? 0) === 1) {
    scene.actions([
      { label: 'Heat up water (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).bucket = ((st as any).bucket ?? 0) - (5);
    (st as any).hotwater = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hotwater.jpg');
    scene.text('With the now-heated water, you can bathe yourself in the tub.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'stove'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['gad_swamphouse', 'start'] },
    { label: 'Grab something to eat', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'food');
  } },
  ]);
  scene.build();
}

function enterFood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).meat_stew ?? 0) > 0) {
    scene.actions([
      { label: 'Eat meat stew', handler: (st: GameState) => {
    qspCall(st, 'food', 'meat_stew');
    (st as any).meat_stew = ((st as any).meat_stew ?? 0) - (1);
    if (((st as any).meat_stew ?? 0) > 0) {
      // TODO-QSP: dynamic text: There''s <<meat_stew>> '+iif(meat_stew > 1, 'servings', 'serving')+' of stew lef...
      scene.text('There\'s ' + ((st as any).meat_stew || '') + ' \'+iif(meat_stew > 1, \'servings\', \'serving\')+\' of stew left in the pot');
    } else {
      scene.text('You finish the last of the stew, and the pot is empty.');
    }
  } },
    ]);
  }
  if (((s as any).mushroom_soup ?? 0) > 0) {
    scene.actions([
      { label: 'Eat mushroom soup', handler: (st: GameState) => {
    qspCall(st, 'food', 'mush_soup');
    (st as any).mushroom_soup = ((st as any).mushroom_soup ?? 0) - (1);
    if (((st as any).mushroom_soup ?? 0) > 0) {
      // TODO-QSP: dynamic text: There''s <<mushroom_soup>> '+iif(mushroom_soup > 1, 'servings', 'serving')+' of ...
      scene.text('There\'s ' + ((st as any).mushroom_soup || '') + ' \'+iif(mushroom_soup > 1, \'servings\', \'serving\')+\' of soup left in the pot');
    } else {
      scene.text('You finish the last of the soup, and the pot is empty.');
    }
    qspCall(st, 'stat', '');
  } },
    ]);
  }
  if (((s as any).bilberry ?? 0) > 0) {
    scene.actions([
      { label: 'Eat berries', goto: ['food', 'bilberry'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_swamphouse', 'start'] },
    { label: 'Eat jerky and trail mix', goto: ['food', 'jerky'] },
  ]);
  scene.build();
}

function enterBucket(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bucket ?? 0) > 10) {
    (s as any).bucket = 10;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/vedro2.jpg');
  if (((s as any).bucket ?? 0) > 0) {
    // TODO-QSP: dynamic text: There''s a bucket of water by the wall. There''s approximately <<bucket>> ' + ii...
    scene.text('There\'s a bucket of water by the wall. There\'s approximately ' + ((s as any).bucket || '') + ' \' + iif(bucket = 1, \'liter\', \'liters\') + \' of water left.');
    scene.actions([
      { label: 'Drink the water', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    (st as any).bucket = ((st as any).bucket ?? 0) - (1);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      scene.text('You\'re not thirsty anymore. So you don\'t need to drink more water.');
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (80);
      (st as any).cumspclnt = 2;
      qspCall(st, 'cum_cleanup', '');
      (st as any).pcs_breath = 0;
      qspCall(st, 'stat', '');
      scene.text('You take a sip from bucket, quenching your thirst.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('There\'s no water left in the bucket. You should go out by the creek and bring some in.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move Away', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterWashstand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_swamphouse', 'washstand');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/washstand.jpg');
  // TODO-QSP: dynamic text: An old washstand. You can use the basin to clean yourself, if necessary. There i...
  scene.text('An old washstand. You can use the basin to clean yourself, if necessary. There is also an old polished but rusty metal mirror resting on the basin, which you can use to ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair.');
  if (((s as any).bucket ?? 0) > 0) {
    qspCall(s, 'din_van', 'basin');
  }
  if (((s as any).hunterVars ?? 0)?.['outside'] === 1) {
    qspCall(s, 'lact_bp', 'massage');
  }
  qspCall(s, 'home_events', 'bathroom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterTub(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'gad_swamphouse';
  (s as any).loc_arg = 'tub';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/basin.jpg');
  scene.text('An old tub that you can use to bathe yourself. It\'s a lot warmer than using the spring! You just need to warm some water and get undressed first.');
  if (((s as any).lashair ?? 0) !== 1) {
    // TODO-QSP: dynamic text: If you are desperate enough, you find a handful of well-used '+iif(mc_inventory[...
    scene.text('If you are desperate enough, you find a handful of well-used ' + ((((s as any).mc_inventory ?? 0)?.['razor'] < 1) ? ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})/u0027razor/u0027 +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027gad_swamphouse/u0027, /u0027tub/u0027); return false;">razors</a>') : ('razors')) + ' on a shelf that you can use to shave with. ' + ((((s as any).mc_inventory ?? 0)?.['razor'] > 0) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Shave Options</a>') : ('')) + '');
  }
  qspCall(s, 'din_van', 'brit');
  if (((s as any).swamp_enema ?? 0) === 1) {
    scene.text('You find an enema syringe on the shelf.');
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).swamp_enema ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['inside'] === 0) {
    qspCall(s, 'din_van', 'enema');
  }
  if (((s as any).hotwater ?? 0) === 1  &&  (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PSwim ?? 0) === 1)) {
    scene.actions([
      { label: 'Bathe in the tub (0:30)', handler: (st: GameState) => {
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).face_write = 0;
    (st as any).body_write = 0;
    (st as any).lubonus = 0;
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).hotwater = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/basinswim.jpg');
    scene.text('You fill the tub with warm water, remove your clothes, and climb in. After a good clean and soak, you feel rejuvenated.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'tub'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterClothesReadMagazines(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/hunters/readmagazines....
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/hunters/readmagazines.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/hunters/readmagazines_...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/hunters/readmagazines_tanga.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/hunters/readmagazines_...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/hunters/readmagazines_nude.jpg"></center>`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStackmagazines(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/stackmagazines.jpg');
  scene.text('A stack of all kinds of magazines, there\'s even one with "interesting" pictures.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Read the scientific journal (1:00)', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_book');
    qspCall(st, 'exp_gain', 'intel', 4);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClothesReadMagazines(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You decide to look through the scientific journal, trying to understand all sorts of clever things written in the magazine.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'stackmagazines');
  } },
    ]);
  } },
    { label: 'Read the literary magazine (1:00)', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_book');
    qspCall(st, 'exp_gain', 'intel', 4);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClothesReadMagazines(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You decide to look through the literary magazine… But, unfortunately, it\'s a real drag. You almost fall asleep several times while reading it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'stackmagazines');
  } },
    ]);
  } },
    { label: 'Read the entertainment magazine (1:00)', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_book');
    qspCall(st, 'exp_gain', 'sprt', 4);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClothesReadMagazines(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('Flicking through the entertainment magazine, you delve into the world of the rich and famous.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'stackmagazines');
  } },
    ]);
  } },
    { label: 'Read the porn magazine (1:00)', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_book', 'porn');
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      scene.img('images/locations/gadukino/hunters/readpornomag.jpg');
    } else {
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/locations/gadukino/hunters/readpornomag_tanga.jpg');
      } else {
        scene.img('images/locations/gadukino/hunters/readpornomag_nude.jpg');
      }
    }
    scene.text('You flip through the porn magazine, reading the stories and looking at pictures, when suddenly you realize you\'ve started touching yourself.');
    qspCall(st, 'arousal', 'porn', (-60));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'stackmagazines');
  } },
    ]);
  } },
    { label: 'Move away', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterHunterstableBJ(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJ'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/hanterstable2.jpg');
  scene.text('You see one of the hunters sitting at the table. Thinking you both could have fun, you smile slyly at him. Not before long, you\'re crawling under the table…');
  if (((s as any).hunterVars ?? 0)?.['tableBJA'] === 0) {
    scene.actions([
      { label: 'Give Andrei a blowjob', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A172');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['tableBJA'] = 1;
    if ((!((st as any).hunterandreisex ?? 0))) {
      (st as any).hunterandreisex = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    (st as any).temp_sh = (Math.floor(Math.random() * 2) + 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablebj1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('You get comfortable under the table, bring your head between his thighs and start sucking on his cock…');
    scene.text('Andrei\'s cock gets rock-hard fast, and soon enough, you can feel a taste of pre-cum in your mouth…');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).temp_sh ?? 0) === 1) {
      scene.actions([
        { label: 'Keep sucking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspCall(st, 'cum_call', 'stomach', ((st as any).boy ?? 0), 1);
    }
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'cum_call', 'clothes_hidden', ((st as any).boy ?? 0), 1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablecum1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('Andrei doesn\'t last more than a minute or two. Then, his thighs tense up, and his load starts shooting out and hitting your face several times.');
    scene.text('When he is all done, you clean Andrei the best you can, and then you put his cock back in his pants and zip him up.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstableBJ');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep sucking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['tableBJA'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablebj1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('You can feel Andrei\'s cock tensing up, ready to explode. Then, you hear a grunt, and before reacting, Andrei unloads his warm spunk in your mouth…');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstableBJ');
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['tableBJS'] === 0) {
    scene.actions([
      { label: 'Give Sergei a blowjob', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A174');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['tableBJS'] = 1;
    if ((!((st as any).huntersergeisex ?? 0))) {
      (st as any).huntersergeisex = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    (st as any).temp_sh = (Math.floor(Math.random() * 2) + 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablebj1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('You get comfortable under the table, bring your head between his thighs and start sucking on his cock…');
    scene.text('Sergei\'s cock gets rock-hard fast, and soon enough, you can feel a taste of pre-cum in your mouth…');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).temp_sh ?? 0) === 1) {
      scene.actions([
        { label: 'Keep sucking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspCall(st, 'cum_call', 'stomach', ((st as any).boy ?? 0), 1);
    }
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'cum_call', 'clothes_hidden', ((st as any).boy ?? 0), 1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablecum1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('Sergei doesn\'t last more than a minute or two. Then, his thighs tense up, and his load starts shooting out and hitting your face several times.');
    scene.text('When he is all done, you clean Sergei the best you can, and then you put his cock back in his pants and zip him up.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstableBJ');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep sucking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['tableBJS'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablebj1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('You can feel Sergei\'s cock tensing up, ready to explode. Then, finally, you hear a grunt, and before reacting, Sergei unloads his warm spunk in your mouth…');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstableBJ');
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['tableBJI'] === 0) {
    scene.actions([
      { label: 'Give Igor a blowjob', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A173');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['tableBJI'] = 1;
    if ((!((st as any).hunterigorsex ?? 0))) {
      (st as any).hunterigorsex = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    (st as any).temp_sh = (Math.floor(Math.random() * 5) + 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablebj1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('You get comfortable under the table, bring your head between his thighs and start sucking on his cock…');
    scene.text('Igor\'s cock gets rock-hard fast, and soon enough, you can feel a taste of pre-cum in your mouth…');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).temp_sh ?? 0) === 1) {
      scene.actions([
        { label: 'Keep sucking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspCall(st, 'cum_call', 'stomach', ((st as any).boy ?? 0), 1);
    }
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'cum_call', 'clothes_hidden', ((st as any).boy ?? 0), 1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablecum1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('Igor doesn\'t last more than a minute or two. After that, his thighs tense up, and his load starts shooting out and hitting your face several times.');
    scene.text('When he is all done, you clean Igor the best you can, and then you put his cock back in his pants and zip him up.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstableBJ');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep sucking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['tableBJI'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hanterstablebj1.' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
    scene.text('You can feel Igor\'s cock tensing up, ready to explode. Then, finally, you hear a grunt, and before you can react, Igor unloads his warm spunk in your mouth…');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstableBJ');
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['tableBJA'] === 1  &&  ((s as any).hunterVars ?? 0)?.['tableBJS'] === 1  &&  ((s as any).hunterVars ?? 0)?.['tableBJI'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHunterstable(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Get out from under the table', handler: (st: GameState) => {
    (st as any).edahot = 1;
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHunterstableEnd(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'gad_swamphouse', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterHunterstable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hunter_ambient', 'schedule');
  if (((s as any).hunterVars ?? 0)?.['available'] === 0  ||  ((s as any).hunterVars ?? 0)?.['inside'] === 0) {
    qspGoto(s, 'gad_swamphouse', 'hunterstable_end');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).smokertemp = (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
  if (((s as any).hunterVars ?? 0)?.['drink'] === 1) {
    if (((s as any).alko ?? 0) > 3  &&  ((s as any).alko ?? 0) < 8  &&  ((s as any).smokertemp ?? 0) === 1) {
      (s as any).temp_sh = (Math.floor(Math.random() * 4) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).temp_sh ?? 0) === 1) {
        qspCall(s, 'stat', '');
        scene.img('images/locations/gadukino/hunters/hantersmoker1.jpg');
        scene.text('The men ask you if you want to go out for a smoke.');
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if (((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    qspCall(st, 'drugs', 'smoke', 1);
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    scene.text('You follow them outside, they give you a cigarette, and you light it and smoke it…');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        ]);
      }
      if (((s as any).temp_sh ?? 0) === 2) {
        qspCall(s, 'stat', '');
        scene.img('images/characters/shared/headshots_main/big172.jpg');
        scene.text('Andrei offers you a cigarette.');
        if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 15  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0  ||  ((s as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'drugs', 'smoke', 1);
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    scene.text('The two of you walk outside, and Andrei hands you a cigarette. Then, you start talking about your feelings for each other.');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 15  &&  ((s as any).hunterVars ?? 0)?.['AndreiLove'] === 0  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
          if ((!((s as any).smokbj ?? 0))) {
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'drugs', 'smoke', 1);
    scene.img('images/characters/shared/headshots_main/big172.jpg');
    // TODO-QSP: dynamic text: You follow Andrei outside. He gives you a cigarette, and the two of you continue...
    scene.text(`You follow Andrei outside. He gives you a cigarette, and the two of you continue with your conversation. Then, suddenly, Andrei, looking into your eyes, says, "${((st as any).pcs_nickname || '')}, could you help me?"`);
    scene.text('"Of course, Andrei, I\'d be glad to," you reply. "What do you need help with?" you ask, a bit worried.');
    // TODO-QSP: dynamic text: "As you know, <<$pcs_nickname>>, I have been divorced for a long time," Andrei b...
    scene.text(`"As you know, ${((st as any).pcs_nickname || '')}, I have been divorced for a long time," Andrei begins, "but like every normal man, I need to relieve stress sometimes. Well, you know what I mean…"`);
    scene.text('You look at his frankness with astonishment.');
    // TODO-QSP: dynamic text: "Now, <<$pcs_nickname>>, if you could help me out now and then, I would be very ...
    scene.text(`"Now, ${((st as any).pcs_nickname || '')}, if you could help me out now and then, I would be very grateful," Andrei continues.`);
    scene.text('You listen in disbelief. He\'s clearly not joking around. However, you can see from Andrei\'s facial expression that he\'s being dead serious.');
    // TODO-QSP: dynamic text: "I won''t tell anybody about this, don''t worry, no one will know," he adds quic...
    scene.text(`"I won't tell anybody about this, don't worry, no one will know," he adds quickly. "Well, ${((st as any).pcs_nickname || '')}, what do you say?`);
    if (((st as any).alko ?? 0) < 6) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) - (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/thinks' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('After you hear him out, you start seriously considering his offer. Of course, it would be nice to help out a friend, but you sense that there\'s an ulterior motive.');
    scene.text('"No, Andrei, I\'m sorry, but I refuse," you answer. "How could you even think that I would accept your offer?');
    scene.text('You get up from the bench and quickly go back to the hut.');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (2);
    (st as any).smokbj = 1;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/thinks' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('After you hear him out, you start seriously considering his offer. Of course, it would be nice to help out a friend, but you sense that there\'s an ulterior motive.');
    scene.text('"Well, Andrei, after carefully thinking about it, I\'ll help you. How do you want me to help you out?" you ask.');
    // TODO-QSP: dynamic text: "Damn, <<$pcs_nickname>>, I knew you would," he replies. "Well, I wouldn''t mind...
    scene.text(`"Damn, ${((st as any).pcs_nickname || '')}, I knew you would," he replies. "Well, I wouldn't mind a blowjob now and then. That's good enough for me."`);
    scene.text('"Go back to the hut, and crawl under the table, so no one notices," he adds while getting up from the bench.');
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big172.jpg');
    // TODO-QSP: dynamic text: You go outside for a smoke, with Andrei following you, immediately saying, "Forg...
    scene.text(`You go outside for a smoke, with Andrei following you, immediately saying, "Forget the cigarette, ${((st as any).pcs_nickname || '')}. Go back inside and crawl under the table. I need you so bad right now…`);
    if (((st as any).alko ?? 0) < 6) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) - (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (50);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/thinks' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('"You know what, Andrei, I\'ve changed my mind. Of course, I\'m more than happy to help a friend in need, but I\'m not some whore that only exists for your pleasure."');
    scene.text('You get up from the bench and quickly go back to the hut.');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
    ]);
  } },
            ]);
          }
        }
        if (((s as any).hunterVars ?? 0)?.['KnowSlut'] === 1) {
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big172.jpg');
    // TODO-QSP: dynamic text: You go outside for a smoke, with Andrei following you, immediately saying, "To h...
    scene.text(`You go outside for a smoke, with Andrei following you, immediately saying, "To hell with the cigarette, ${((st as any).pcs_nickname || '')}, I need to relieve some stress."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        ]);
      }
      if (((s as any).temp_sh ?? 0) === 3) {
        qspCall(s, 'stat', '');
        scene.img('images/characters/shared/headshots_main/big174.jpg');
        scene.text('Sergei offers you a cigarette.');
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if (((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    qspCall(st, 'drugs', 'smoke', 1);
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    scene.text('You follow Sergei outside. He gives you a cigarette, and the two of you continue with your conversation.');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        ]);
      }
      if (((s as any).temp_sh ?? 0) === 4) {
        qspCall(s, 'stat', '');
        scene.img('images/characters/shared/headshots_main/big173.jpg');
        scene.text('Igor offers you a cigarette.');
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if (((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    qspCall(st, 'drugs', 'smoke', 1);
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    scene.text('You follow Igor outside. He gives you a cigarette, and the two of you continue with your conversation.');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
        ]);
      }
    }
    if (((s as any).alko ?? 0) >= 8  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      (s as any).temp_sh = (Math.floor(Math.random() * 6) + 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/swamphousedrunkgirl.jpg');
      scene.text('You\'re really drunk, slurring your words, and everything is spinning…');
      if (((s as any).hunterVars ?? 0)?.['slut'] <= 20) {
        if (((s as any).temp_sh ?? 0) === 1) {
          scene.actions([
            { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] <= 1) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/swamphousedrunkgirl2.jpg');
    scene.text('You pass out and fall asleep right at the table…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (15);
    qspCall(st, 'sleep_simple', 'forced', 180);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel1.jpg');
    scene.text('Three hours later, you wake up in the middle of the night. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).temp_sh ?? 0) === 2) {
          scene.actions([
            { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] <= 1) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep7.jpg');
    scene.text('You try to reach the bed but pass out on the floor before getting it…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    qspCall(st, 'sleep_simple', 'forced', 240);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel4.jpg');
    scene.text('Four hours later, you wake up in the middle of the night. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).temp_sh ?? 0) === 3) {
          scene.actions([
            { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep4.jpg');
    scene.text('You somehow reach the couch and pass out without taking your clothes off…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (10);
    qspCall(st, 'sleep_simple', 'forced', 360);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel2.jpg');
    scene.text('You sleep for 6 hours, waking up barely able to lift your head from the pillow. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).temp_sh ?? 0) > 3) {
          scene.actions([
            { label: 'Move away from the table', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pjanaja5.jpg');
    scene.text('The drunken men ask you to dance for them. Andrei turns on the music, and you drunkenly start swaying next to the table…');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (((st as any).hunterVars ?? 0)?.['slut'] < 5) {
      scene.actions([
        { label: 'Stop dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep11.jpg');
    scene.text('Standing on your feet, you realize that you need to sleep. However, the men get frustrated when they notice you crashing on the couch and going to sleep.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (5);
    qspCall(st, 'sleep_simple', 'forced', 480);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel2.jpg');
    scene.text('You sleep for eight hours, waking up barely able to get out of bed. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).hunterVars ?? 0)?.['slut'] >= 5) {
      scene.actions([
        { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance1.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('You stand next to the table and begin to depict something that resembles a rhythmic dance. The men start clapping.');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (((st as any).hunterVars ?? 0)?.['slut'] >= 10) {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance2.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('In the spur of the moment, while the men cheer you on, you remove your top, leaving you only with a bra on…');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (((st as any).hunterVars ?? 0)?.['slut'] >= 15) {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance3.jpg');
    scene.text('The men continue cheering you on, and you keep undressing further, remaining only in underwear…');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.actions([
      { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep10.jpg');
    scene.text('You clearly overestimated the capability of your body, as after a while dancing, you pass out on the floor, making the men quite nervous…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (5);
    qspCall(st, 'sleep_simple', 'forced', 240);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel4.jpg');
    scene.text('You sleep for four hours, waking up in the middle of the night, barely able to get up off the floor. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep11.jpg');
    scene.text('After a while of dancing, your legs are no longer able to keep up, so you decide to go to sleep, much to the men\'s disappointment.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (15);
    qspCall(st, 'sleep_simple', 'forced', 360);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel2.jpg');
    scene.text('You sleep for 6 hours, waking up barely able to get out of bed. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep11.jpg');
    scene.text('After a while of dancing, your legs can no longer keep up, so you decide to go to sleep, much to the men\'s disappointment.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (15);
    qspCall(st, 'sleep_simple', 'forced', 360);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel2.jpg');
    scene.text('You sleep for 6 hours, waking up barely able to get out of bed. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).hunterVars ?? 0)?.['slut'] > 20) {
        scene.actions([
          { label: 'Move away the table', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pjanaja5.jpg');
    scene.text('The drunken men ask you to dance for them. Andrei turns on the music, and you drunkenly start swaying next to the table…');
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance1.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('You stand next to the table and begin to depict something that resembles a rhythmic dance. The men start clapping.');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance2.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('In the spur of the moment, while the men cheer you on, you remove your top, leaving you only with a bra on…');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance3.jpg');
    scene.text('The men continue cheering you on, and you keep undressing further, remaining only in underwear…');
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).temp_sh = (Math.floor(Math.random() * 2) + 1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (((st as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) - (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance4.jpg');
    scene.text('You remove the bra and throw it on the table. The men cheer you on, and you flash your breasts in front of them.');
    qspCall(st, 'arousal', 'flash', 10);
    qspCall(st, 'stat', '');
    if (((st as any).temp_sh ?? 0) === 1) {
      scene.actions([
        { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep17.jpg');
    scene.text('You clearly overestimated your body\'s capability, as, after a while of dancing, you pass out on the floor, making the men quite nervous…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    qspCall(st, 'sleep_simple', 'forced', 240);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel3.jpg');
    scene.text('You sleep for four hours, waking up in the middle of the night, barely able to get up off the floor. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    (st as any).huntdancesex = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance5.jpg');
    scene.text('You keep on dancing, undressing further. Judging by the excited faces of the men, you\'re definitely turning them on.');
    scene.actions([
      { label: 'Continue', goto: ['huntersex', 'sexafterstrip3'] },
    ]);
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
      }
    }
    if (((s as any).alko ?? 0) >= 8  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0) {
      (s as any).temp_sh = (Math.floor(Math.random() * 6) + 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/swamphousedrunkgirl1.jpg');
      scene.text('You\'re really drunk, you slur your words, and everything is spinning…');
      if (((s as any).temp_sh ?? 0) === 1) {
        scene.actions([
          { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/swamphousedrunkgirl2.jpg');
    scene.text('You pass out and fall asleep right at the table…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (15);
    qspCall(st, 'sleep_simple', 'forced', 180);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel1.jpg');
    scene.text('Three hours later, you wake up in the middle of the night. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).temp_sh ?? 0) === 2) {
        scene.actions([
          { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep7.jpg');
    scene.text('You try to reach the bed but pass out on the floor before getting to it…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    qspCall(st, 'sleep_simple', 'forced', 240);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel4.jpg');
    scene.text('Four hours later, you wake up in the middle of the night. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).temp_sh ?? 0) === 3) {
        scene.actions([
          { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep4.jpg');
    scene.text('You somehow get to the couch and pass out without undressing…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (10);
    qspCall(st, 'sleep_simple', 'forced', 360);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel2.jpg');
    scene.text('You sleep for 6 hours, waking up barely able to lift your head from the pillow. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).temp_sh ?? 0) > 3) {
        scene.actions([
          { label: 'Move away from the table', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pjanaja5.jpg');
    scene.text('The drunken men ask you to dance for them. Andrei turns on the music, and you drunkenly start swaying next to the table…');
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance1.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('You stand next to the table and begin to depict something that resembles a rhythmic dance. The men start clapping.');
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance2.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('In the spur of the moment, while the men cheer you on, you remove your top, leaving you only with a bra on…');
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance3.jpg');
    scene.text('The men continue cheering you on, and you keep undressing further, remaining only in underwear…');
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).temp_sh = (Math.floor(Math.random() * 2) + 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance4.jpg');
    scene.text('You remove the bra and throw it on the table. The men cheer you on, and you flash your breasts in front of them.');
    qspCall(st, 'arousal', 'flash', 10);
    qspCall(st, 'stat', '');
    if (((st as any).temp_sh ?? 0) === 1) {
      scene.actions([
        { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep17.jpg');
    scene.text('You clearly overestimated your body\'s capability, as, after a while of dancing, you pass out on the floor, making the men quite nervous…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'large');
    ((st as any).sleepVars = (st as any).sleepVars ?? {})['no_health'] = 1;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    qspCall(st, 'sleep_simple', 'forced', 240);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel3.jpg');
    scene.text('You sleep for four hours, waking up in the middle of the night, barely able to get up off the floor. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    (st as any).huntdancesex = 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance5.jpg');
    scene.text('You keep on dancing, undressing further. Judging by the excited faces of the men, you\'re definitely turning them on.');
    scene.actions([
      { label: 'Continue', goto: ['huntersex', 'sexafterstrip1'] },
    ]);
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
      }
    }
    scene.actions([
      { label: 'Drink vodka (0:15)', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka', 1);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka' + (Math.floor(Math.random() * 3) + 0) + '.jpg');
    scene.text('You take a shot of vodka. The men laugh at the funny face you\'re making after the shot.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
      { label: 'Drink beer (0:15)', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer', 1);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/beer2.jpg');
    scene.text('You take a bottle of beer, open it and start drinking it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
      { label: 'Eat a snack (0:15)', handler: (st: GameState) => {
    qspCall(st, 'food', 'snack');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/snack1.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('You grab something to eat so you don\'t get drunk too quickly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
      { label: 'Chat (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['IgorQW'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiQw'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
    scene.text('You chat with the men about various topics… You try to keep up with their lingo but sometimes fail, and you all laugh about it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
      { label: 'Move away from the table', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
    ]);
  } else {
    if (((s as any).hunterVars ?? 0)?.['lunch'] === 1  ||  ((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['dinner'] === 1) {
      scene.actions([
        { label: 'Eat a meal (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'food', 'medium_meal_stats');
    scene.img('images/locations/gadukino/hunters/snack1.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('You sit down and have something to eat with the hunters.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
        { label: 'Chat (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['IgorQW'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiQw'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
    scene.text('You start chatting with the guys about trivial stuff…');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'hunterstable'] },
    ]);
  } },
        { label: 'Move away from the table', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Chat (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['IgorQW'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    if (((st as any).hunterVars ?? 0)?.['SergeiQw'] < 10) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
    scene.text('You start chatting with the guys about trivial stuff…');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'hunterstable'] },
    ]);
  } },
        { label: 'Move away from the table', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
      ]);
    }
  }
  if (((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0  &&  ((s as any).hunterVars ?? 0)?.['tableBJ'] === 0) {
    if (((s as any).hunterVars ?? 0)?.['drink'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
      scene.text('You sit at the table, wanting to eat with the guys, but before you can begin, you hear…');
      // TODO-QSP: dynamic text: "Not so fast, <<$pcs_nickname>>," Andrei says with a smile. "You understand that...
      scene.text(`"Not so fast, ${((s as any).pcs_nickname || '')}," Andrei says with a smile. "You understand that the only free cheese is the one found in the mousetrap."`);
      scene.text('"Want to eat with us? You need to do some work," he mockingly grins and points under the table.');
      scene.actions([
        { label: 'Crawl under the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstableBJ');
  } },
        { label: 'Refuse', goto: ['gad_swamphouse', 'start'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
      scene.text('Noticing you, the men start grinning…');
      // TODO-QSP: dynamic text: "About time! Our <<$pcs_nickname>> has arrived. Come here, join us at the table,...
      scene.text(`"About time! Our ${((s as any).pcs_nickname || '')} has arrived. Come here, join us at the table," says Andrei.`);
      scene.actions([
        { label: 'Sit at the table', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['tableBJ'] = 1
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
      ]);
    }
  }
  if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  Object.keys((s as any).sparrvol ?? {}).length > 0)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
    scene.text('You sit at the table, wanting to eat with the guys, but before you can begin, you hear…');
    // TODO-QSP: dynamic text: "Damn, <<$pcs_nickname>>, I know you like our artistic work on your face, but yo...
    scene.text(`"Damn, ${((s as any).pcs_nickname || '')}, I know you like our artistic work on your face, but you must wash up before sitting with us.`);
    scene.actions([
      { label: 'Go', goto: ['gad_swamphouse', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersrelax(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/hantersrelax1.' + (Math.floor(Math.random() * 8) + 1) + '.jpg');
  scene.text('You see the hunters in the hut minding their own business.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Speak with Andrei', goto: ['andreihunter', ''] },
    { label: 'Speak with Sergei', goto: ['sergeihunter', ''] },
    { label: 'Speak with Igor', goto: ['igorhunter', ''] },
    { label: 'Move away', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterHuntersmokBJ(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).hunterandreisex ?? 0))) {
    (s as any).hunterandreisex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  (s as any).temp_sh = (Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/hunter/hantersmokbj1.' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
  if (((s as any).hunterVars ?? 0)?.['smokeBJ'] === 0) {
    scene.text('You get comfortable on your knees and start sucking on his cock…');
  }
  if (((s as any).hunterVars ?? 0)?.['smokeBJ'] === 1) {
    scene.text('Andrei does not finish, so you continue to suck…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).temp_sh ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHuntersmokBJ(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['smokeBJ'] = 1
  } },
    ]);
  }
  if (((s as any).temp_sh ?? 0) === 2) {
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['smokeBJ'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hantersmokcum.jpg');
    scene.text('You notice Andrei\'s thighs stiffen as he\'s edging… Finally, he grunts and shoots his spunk all over your face.');
    // TODO-QSP: dynamic text: "You''re really good at this, <<$pcs_nickname>>," says a pleased Andrei. "You''r...
    scene.text(`"You're really good at this, ${((st as any).pcs_nickname || '')}," says a pleased Andrei. "You're the perfect stress reliever.`);
    scene.text('You clean yourself up before walking back to the hut with Andrei.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDirtySwamphouse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dirty_swamphouse ?? 0) < 10) {
    (s as any).minut = ((s as any).minut ?? 0) + (60);
    qspCall(s, 'sweat', 'add', 10);
  }
  if (((s as any).dirty_swamphouse ?? 0) < 20) {
    (s as any).minut = ((s as any).minut ?? 0) + (120);
    qspCall(s, 'sweat', 'add', 20);
  }
  if (((s as any).dirty_swamphouse ?? 0) >= 20) {
    (s as any).minut = ((s as any).minut ?? 0) + (180);
    qspCall(s, 'sweat', 'add', 30);
  }
  if (((s as any).hunterVars ?? 0)?.['AndreiQw'] < 15) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
  }
  if (((s as any).hunterVars ?? 0)?.['IgorQW'] < 15) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
  }
  if (((s as any).hunterVars ?? 0)?.['SergeiQw'] < 15) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/dirty_swamphouse.jpg');
  scene.text('Visiting the hut, you notice that it has gotten pretty dirty. "I need to do something about this," you think. So you grab a broom and a rag and begin cleaning.');
  scene.text('After a while, you finish cleaning and put everything back in order again. Finally, you\'re pretty pleased with yourself.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).dirty_swamphouse = 0;
  }, goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterGetDressed(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sh = (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0) {
    if ((!((s as any).huntslutsex ?? 0))) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/swamphousenude1.jpg');
      scene.text('Seeing you naked, the men quickly get aroused…');
      // TODO-QSP: dynamic text: "Come here, <<$pcs_nickname>>, come to us," one of the guys calls out to you.
      scene.text(`"Come here, ${((s as any).pcs_nickname || '')}, come to us," one of the guys calls out to you.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['sexnude'] = 1
  }, goto: ['huntersex', 'huntersexnude'] },
      ]);
    } else {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowday'] = ((s as any).daystart ?? 0);
      scene.img('images/locations/gadukino/hunters/swamphousenude1.jpg');
      scene.text('Seeing you naked, the men just shake their heads…');
      // TODO-QSP: dynamic text: "Look here, <<$pcs_nickname>>, if you want to charm us, you will need to think o...
      scene.text(`"Look here, ${((s as any).pcs_nickname || '')}, if you want to charm us, you will need to think of something else," says one of the guys.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/swamphousenude.jpg');
    scene.text('You hear the hunters nearby. You quickly hide your private parts behind your hands…');
    if (((s as any).clothesAtLocation ?? 0) === 1) {
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'underwear', 'wear');
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_swamphouse', 1);
    scene.img('images/locations/gadukino/hunters/swampdvornude1.jpg');
    scene.text('You look around, searching for your clothes. When you spot them, you dash over to grab them.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Cover yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'clothing', 'gad_swamp_clothes', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/tkan_cloth.jpg');
    scene.text('You look around, searching for your clothes, but can\'t find them. So instead, you hide behind a piece of hessian… It\'s better than nothing.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stay naked', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['knowday'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/swamphousenude1.jpg');
    scene.text('You take a deep breath and decide to disregard your nerves and leave yourself as is. Upon encountering the hunters, they can\'t help themselves. They start staring at your most private parts.');
    // TODO-QSP: dynamic text: "Damn, <<$pcs_nickname>>, you look outstanding. The things I want to do to you…"...
    scene.text(`"Damn, ${((st as any).pcs_nickname || '')}, you look outstanding. The things I want to do to you…" a somewhat aroused Andrei says.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hunter_ambient', 'schedule');
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'stove':
      enterStove(s, scene);
      break;
    case 'food':
      enterFood(s, scene);
      break;
    case 'bucket':
      enterBucket(s, scene);
      break;
    case 'washstand':
      enterWashstand(s, scene);
      break;
    case 'tub':
      enterTub(s, scene);
      break;
    case 'clothes_read_magazines':
      enterClothesReadMagazines(s, scene);
      break;
    case 'stackmagazines':
      enterStackmagazines(s, scene);
      break;
    case 'hunterstableBJ':
      enterHunterstableBJ(s, scene);
      break;
    case 'hunterstable_end':
      enterHunterstableEnd(s, scene);
      break;
    case 'hunterstable':
      enterHunterstable(s, scene);
      break;
    case 'huntersrelax':
      enterHuntersrelax(s, scene);
      break;
    case 'huntersmokBJ':
      enterHuntersmokBJ(s, scene);
      break;
    case 'dirty_swamphouse':
      enterDirtySwamphouse(s, scene);
      break;
    case 'get_dressed':
      enterGetDressed(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_swamphouse: LocationDef = {
  name: 'gad_swamphouse',
  title: '<center><h4>Hut</h4></center>',
  region: 'gadukino',
  locationType: 'public_indoors',
  description: ['A small hunting cabin. The cabin contains a small room with a low ceiling.'],
  enter: enter,
};
