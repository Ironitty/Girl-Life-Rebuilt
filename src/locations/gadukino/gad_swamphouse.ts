import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hunter_ambient', 'schedule');
  if (((s as any).locArgs?.[0] ?? 0) === 'start'  ||  ((s as any).locArgs?.[0] ?? 0) === '') {
    qspCall(s, 'core_library', 'setloc', 'gad_swamphouse', 'start');
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    qspCall(s, 'themes', 'indoors');
    if (((s as any).hour ?? 0) === 5) {
      (s as any).stovefire = 0;
    }
    (s as any).huntslutsexrand = Math.floor(Math.random() * 3) + 1;
    (s as any).temp_sh = Math.floor(Math.random() * 5) + 1;
    (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', 'gad_swamphouse');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/locations/gadukino/hunters/swampizba.jpg');
    scene.text('A small hunting cabin. The cabin contains a small room with a low ceiling.');
    scene.text('You see a <a href="exec: gt \'bed\', \'start\'">couch</a> where you can lie down and sleep.');
    if (((s as any).bucket ?? 0) > 0) {
      scene.text('A <a href="exec: gs \'gad_swamphouse\', \'bucket\' ">bucket</a> in the corner is filled with water collected from the spring.');
    } else {
      scene.text('There\'s an empty bucket placed in the corner. It needs refilling with water from the spring.');
    }
    scene.text('You see an old <a href="exec: gs \'gad_swamphouse\', \'washstand\' ">washstand</a> you can use to wash your hands and face. There is a well-used <a href="exec: gs \'gad_swamphouse\', \'tub\'">tub</a> nearby that you can use to bathe in.');
    scene.text('In the other corner, you see a small <a href="exec: gs \'gad_swamphouse\', \'stove\'">stove</a>. With water from the spring and some mushrooms or meat, you could cook something to eat, or you could warm the water so you can bathe in the tub.');
    if ((!((s as any).stovefire ?? 0))) {
      // TODO-QSP: dynamic text: The hut feels '+iif(temper < 15, 'quite cold. Maybe you should start a fire on t...
      scene.text('The hut feels \'+iif(temper < 15, \'quite cold. Maybe you should start a fire on the old stove.\', \'quite warm, even without the stove fire burning.\')+\'');
    } else {
      // TODO-QSP: dynamic text: The hut feels '+iif(temper > 15, 'extremely', 'quite')+' warm with the old stove...
      scene.text('The hut feels \'+iif(temper > 15, \'extremely\', \'quite\')+\' warm with the old stove fire burning away.');
    }
    scene.text('Besides the stove, there\'s a stack of old <a href="exec: gs \'gad_swamphouse\', \'stackmagazines\'">magazines</a>, most likely used for ignition.');
    if (((s as any).clothesAtLocation ?? 0) === 1) {
      scene.text('Your clothes are lying on the shelf.');
    }
    if (((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
      if (((s as any).hunterVars ?? 0)?.['inside'] === 1) {
        if (((s as any).hunterVars ?? 0)?.['drink'] === 1) {
          scene.text('You see the <a href="exec: gs \'gad_swamphouse\', \'hunterstable\'">hunters</a> sitting around the table talking.');
        } else {
          scene.text('The hunters are sleeping on the couch.');
          if (((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1  ||  ((s as any).hunterVars ?? 0)?.['dinner'] === 1) {
            scene.text('The <a href="exec: gs \'gad_swamphouse\', \'hunterstable\'">hunters</a> are sitting around the table.');
          } else {
            scene.text('You see the <a href="exec: gs \'gad_swamphouse\', \'huntersrelax\'">hunters</a> hanging out in the hut.');
          }
        }
      } else {
        if (((s as any).hunterVars ?? 0)?.['inside'] === 1) {
          if (((s as any).hunterVars ?? 0)?.['drink'] === 1) {
            scene.text('You can see three hunters hanging out in the hut.');
          } else {
            scene.text('You can see three hunters sleeping on the couch.');
            if (((s as any).hunterVars ?? 0)?.['breakfast'] === 1  ||  ((s as any).hunterVars ?? 0)?.['lunch'] === 1  ||  ((s as any).hunterVars ?? 0)?.['dinner'] === 1) {
              scene.text('You can see three hunters sitting around the table talking.');
            } else {
              scene.text('You can see three hunters resting at the table talking.');
            }
            scene.text('There\'s nobody here right now');
          }
        }
        if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).clothesAtLocation ?? 0))) {
          scene.actions([
            { label: 'Get undressed', handler: (st: GameState) => {
    if ((((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0  ||  (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] < 1)  &&  ((s as any).hunterVars ?? 0)?.['inside'] === 1)  ||  ((s as any).hunterVars ?? 0)?.['outside'] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        qspCall(s, 'clothing', 'strip', 'gad_swamphouse');
      }
      qspCall(s, 'underwear', 'remove');
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/swamphouseundress.jpg');
      // TODO-QSP: dynamic text: '+iif(temper > 23, 'Feeling the heat in the cabin,', 'You feel the need to get n...
      scene.text('\'+iif(temper > 23, \'Feeling the heat in the cabin,\', \'You feel the need to get naked, so\')+\' you start removing your clothes.');
      scene.actions([
        { label: 'Back', goto: ['gad_swamphouse', 'start'] },
      ]);
    } else {
      scene.img('images/locations/gadukino/hunters/noundress.jpg');
      // TODO-QSP: dynamic text: '+iif(temper > 23, 'Despite the heat,', 'Despite your need to get naked,')+' you...
      scene.text('\'+iif(temper > 23, \'Despite the heat,\', \'Despite your need to get naked,\')+\' you\'re still too shy to get undressed. What if someone suddenly comes in?');
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
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'clothing', 'recover_lost_clothes', 'gad_swamphouse', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Pick up your clothes', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'recover_lost_clothes', 'gad_swamphouse');
    scene.text('You pick up your clothes.');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
            ]);
          }
        } else {
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            scene.actions([
              { label: 'Wear hessian sack', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/tkan_cloth.jpg');
    scene.text('You cover yourself with the hessian sack');
    qspCall(s, 'clothing', 'recover_lost_clothes', 'gad_swamphouse');
    qspCall(s, 'clothing', 'gad_swamp_clothes', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
            ]);
          }
        }
        if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  (((s as any).hunterVars ?? 0)?.['inside'] === 0  ||  ((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0  ||  (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1))) {
          scene.actions([
            { label: 'Masturbate', goto: ['selfplay', 'start'] },
          ]);
        }
        if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).swamp_clothes ?? 0) === 0  &&  ((s as any).clothesAtLocation ?? 0) === 0)  ||  (!((s as any).swamp_enema ?? 0))) {
          scene.actions([
            { label: 'Look for some clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if ((!((s as any).swamp_enema ?? 0))) {
      (s as any).swamp_enema = 1;
      (s as any).mc_inventory['enema_kit'] = 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/hunters/enema.jpg');
      scene.text('Your search for your clothes but only find an enema syringe… "What is this doing here?" you wonder.');
      scene.actions([
        { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
      ]);
    } else {
      qspCall(s, 'clothing', 'gad_swamp_clothes', 1);
      qspCall(s, 'stat', '');
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
          // TODO-QSP: act 'Use the rickety stove': gt 'gad_swamphouse', 'stove'
        }
        if (((s as any).pcs_energy ?? 0) < 80) {
          // TODO-QSP: act 'Grab something to eat': gs 'gad_swamphouse', 'food'
        }
        if (((s as any).bucket ?? 0) > 0  &&  ((s as any).pcs_hydra ?? 0) < 80) {
          // TODO-QSP: act 'Grab a drink of water': gt 'gad_swamphouse', 'bucket'
        }
        if (((s as any).bucket ?? 0) > 0  &&  (!((s as any).pcs_hairbsh ?? 0))) {
          // TODO-QSP: act 'Use the wash basin': gt 'gad_swamphouse', 'washstand'
        }
        if (((s as any).hotwater ?? 0) === 1  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_sweat ?? 0) > 19) {
          // TODO-QSP: act 'Bathe in the old tub': gt 'gad_swamphouse', 'tub'
        }
        if (((s as any).dirty_swamphouse ?? 0) > 25) {
          // TODO-QSP: act 'Clean the hut': hunterVars['slut'] -= 1
          scene.actions([{ label: 'Continue', goto: ['gad_swamphouse', 'dirty_swamphouse'] }]);
        }
        if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19  &&  ((s as any).hunterVars ?? 0)?.['IgorQW'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Igorsex'] === 0) {
          (s as any).hunterVars['Igorsex'] = ((s as any).hunterVars['Igorsex'] ?? 0) + (Math.floor(Math.random() * 25) + 12);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
          scene.text('Entering the hut, you see Igor. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want you," he whispers.`);
          qspCall(s, 'arousal', 'kiss', 5);
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterflirt2.\'+rand(4, 6)+\'.jpg');
    scene.text('Smiling, you look straight into Igor\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Igor', goto: ['hunterLoveSex', 'Igor'] },
    ]);
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I\'m sorry, Igor. I\'m not in the mood," you say, avoiding eye contact. Igor leaves disappointed…');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
          ]);
        }
        if (((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Sergeisex'] === 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19) {
          (s as any).hunterVars['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) + (Math.floor(Math.random() * 22) + 9);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
          scene.text('Entering the hut, you see Sergei. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want you," he whispers.`);
          qspCall(s, 'arousal', 'kiss', 5);
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterflirt2.\'+rand(4, 6)+\'.jpg');
    scene.text('Smiling, you look straight into Sergei\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Sergei', goto: ['hunterLoveSex', 'Sergei'] },
    ]);
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I\'m sorry, Sergei. I\'m not in the mood," you say, avoiding eye contact. Sergei leaves disappointed…');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
          ]);
        }
        if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0  &&  ((s as any).pcs_horny ?? 0) <= 60  &&  ((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 10  &&  ((s as any).temp_sh ?? 0) === 1  &&  ((s as any).hunterVars ?? 0)?.['Andreisex'] === 0  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19) {
          (s as any).hunterVars['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + (Math.floor(Math.random() * 19) + 6);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/hunters/hanterlove1.4.jpg');
          scene.text('Entering the hut, you see Andrei. He smiles and walks over to you, grabs your hold, and gives you a passionate kiss.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want you," he whispers.
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want you," he whispers.`);
          qspCall(s, 'arousal', 'kiss', 5);
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterhands.jpg');
    scene.text('Smiling, you look straight into Andrei\'s eyes, telling him all he needs to know. Then, without hesitation, he takes you by the hand and leads you…');
    scene.actions([
      { label: 'Go with Andrei', goto: ['hunterLoveSex', 'Andrei'] },
    ]);
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (1);
    qspCall(s, 'stat', '');
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
          (s as any).hunterVars['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + (Math.floor(Math.random() * 19) + 6);
          (s as any).hunterVars['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) + (Math.floor(Math.random() * 22) + 9);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/hunters/hanterswork1.2.jpg');
          scene.text('You see Andrei talking with Sergei in the hut.');
          // TODO-QSP: dynamic text: "Come in, <<$pcs_nickname>>. It's time to consummate the marriage," Andrew jokin...
          scene.text(`"Come in, ${((s as any).pcs_nickname ?? 0)}. It's time to consummate the marriage," Andrew jokingly remarks. "I hope you're willing to do anything we say.`);
          if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
            scene.text('"I\'m sorry, I don\'t know if I\'m ready yet…" you say. "I haven\'t been able to clean myself as you asked. Maybe we could skip it this time?');
          }
          if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
            // TODO-QSP: dynamic text: Well, we could, <<$pcs_nickname>>…" says Andrei, "but since you're already here,...
            scene.text(`Well, we could, ${((s as any).pcs_nickname ?? 0)}…" says Andrei, "but since you're already here, you not being all dolled up doesn't matter to us. But don't dare to try to fool us next time. We will not forget."`);
          }
          scene.text('"There are some bushes not far from here. We could take her with us there, and no one would be able to find us. Should we tell Igor to join us?" says Sergei. "Never mind Igor, it would take him too long to join us."');
          scene.actions([
            { label: 'Follow the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
    (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).doublelovesex = 1;
    (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) + (1);
    (s as any).temphunt = 1;
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/doublehanterlove.jpg');
    scene.text('The men hold your hands, leading you away from the hut. Of course, you\'re fully aware of their plans but don\'t mind.');
    scene.actions([
      { label: 'Continue', goto: ['huntersex', 'doublelovesex'] },
    ]);
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (1);
    (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) - (1);
    qspCall(s, 'stat', '');
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
          (s as any).temp_sh = Math.floor(Math.random() * 4) + 1;
          (s as any).hunterVars['drinking'] = ((s as any).daystart ?? 0);
          qspCall(s, 'stat', '');
          if (((s as any).temp_sh ?? 0) === 1) {
            scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
            scene.text('You enter the hut and notice the plastered hunters.');
            // TODO-QSP: dynamic text: "Oh, look who's showed up. <<$pcs_nickname>>, join us for a drink!" they invite ...
            scene.text(`"Oh, look who's showed up. ${((s as any).pcs_nickname ?? 0)}, join us for a drink!" they invite you in.`);
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
            (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) + (1);
            scene.img('images/characters/shared/headshots_main/big172.jpg');
            scene.text('You enter the hut and notice the plastered hunters.');
            // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, join us for a drink!" says Andrei.
            scene.text(`Oh, ${((s as any).pcs_nickname ?? 0)}, join us for a drink!" says Andrei.`);
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
            (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) + (1);
            scene.img('images/characters/shared/headshots_main/big174.jpg');
            scene.text('You enter the hut and notice the plastered hunters.');
            // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, come join us for a drink!" Sergei says, noticing you ente...
            scene.text(`Oh, ${((s as any).pcs_nickname ?? 0)}, come join us for a drink!" Sergei says, noticing you entering.`);
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
            (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) + (1);
            scene.img('images/characters/shared/headshots_main/big173.jpg');
            scene.text('You enter the hut and notice the plastered hunters.');
            // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, come join us for a drink!" Igor shouts, ignoring the othe...
            scene.text(`Oh, ${((s as any).pcs_nickname ?? 0)}, come join us for a drink!" Igor shouts, ignoring the other conversation.`);
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
          (s as any).hunterVars['breakfastday'] = ((s as any).daystart ?? 0);
          scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
          // TODO-QSP: dynamic text: You go into the hut and notice that the hunters have prepared '+iif(hunterVars['...
          scene.text('You go into the hut and notice that the hunters have prepared \'+iif(hunterVars[\'breakfast\'] = 1, \'breakfast.\', \'lunch.\')+\'.');
          // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>, you're just in time, come join us!"
          scene.text(`"Oh, ${((s as any).pcs_nickname ?? 0)}, you're just in time, come join us!"`);
          scene.actions([
            { label: 'Join them at the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'hunterstable');
  } },
            { label: 'Politely decline', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['refuse'] = 1
  }, goto: ['gad_swamphouse', 'start'] },
          ]);
        }
        if (((s as any).hunterVars ?? 0)?.['inside'] === 1  &&  ((s as any).hunterVars ?? 0)?.['Rape'] === 5  &&  ((s as any).huntslutsexrand ?? 0) === 1  &&  ((s as any).huntslutsex ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 23) {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          (s as any).temphunt = Math.floor(Math.random() * 3) + 1;
          (s as any).sluthomesex = 1;
          qspCall(s, 'stat', '');
          if (((s as any).temphunt ?? 0) === 1) {
            // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big172.j...
            scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/shared/headshots_main/big172.jpg"></center>`);
          }
          if (((s as any).temphunt ?? 0) === 2) {
            // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big174.j...
            scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/shared/headshots_main/big174.jpg"></center>`);
          }
          if (((s as any).temphunt ?? 0) === 3) {
            // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/shared/headshots_main/big173.j...
            scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/shared/headshots_main/big173.jpg"></center>`);
          }
          if (((s as any).temphunt ?? 0) === 1) {
            // TODO-QSP: dynamic text: You enter the hut and bump into Andrei. "Come here, <<$pcs_nickname>>," he excla...
            scene.text(`You enter the hut and bump into Andrei. "Come here, ${((s as any).pcs_nickname ?? 0)}," he exclaims, not saying anything more while he throws you on the bed.`);
          }
          if (((s as any).temphunt ?? 0) === 2) {
            // TODO-QSP: dynamic text: You enter the hut and bump into Sergei. Noticing you, he heads toward you, sayin...
            scene.text(`You enter the hut and bump into Sergei. Noticing you, he heads toward you, saying, "${((s as any).pcs_nickname ?? 0)}, I've got an itch that only you can help scratch."`);
          }
          if (((s as any).temphunt ?? 0) === 3) {
            // TODO-QSP: dynamic text: You enter the hut and bump into Igor. He smiles, saying, "<<$pcs_nickname>>, I n...
            scene.text(`You enter the hut and bump into Igor. He smiles, saying, "${((s as any).pcs_nickname ?? 0)}, I need to empty my sack. Help me out…"`);
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
        scene.actions([
          { label: 'Go outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: hunterVars['refuse'] = 0
  }, goto: ['gad_swamp_yard', 'start'] },
          { label: 'Relax on the couch', goto: ['bed', 'start'] },
        ]);
      }
    }
  }
  scene.build();
}

export const gad_swamphouse: LocationDef = {
  name: 'gad_swamphouse',
  title: '<center><h4>Hut</h4></center>',
  region: 'gadukino',
  locationType: 'public_indoors',
  description: ['A small hunting cabin. The cabin contains a small room with a low ceiling.'],
  enter: enter,
};
