import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'start'  ||  ((s as any).locArgs?.[0] ?? 0) === '') {
    qspCall(s, 'npcStat', 'A60');
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('Mira is a sociable girl the same age as you. She lives with her father, who recently moved in here because of his considerable debts to some disreputable men in the city. He had to sell all the family\'s property, including an apartment in the city center. With the money left over, they could only afford to buy a house in a rundown village like this one.');
    if (((s as any).npc_rel ?? 0)?.['A60'] < 25) {
      scene.text('You two have a strained relationship.');
    } else {
      scene.text('You two have a normal relationship.');
      if (((s as any).npc_rel ?? 0)?.['A60'] < 65) {
        scene.text('You have a good relationship with Mira.');
      } else {
        scene.text('You two have a great relationship.');
        scene.text('You and Mira are best friends.');
      }
      if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1) {
        qspCall(s, 'miroslava', 'cattle_chore_acts');
      }
      if (((s as any).MiraVars ?? 0)?.['QW'] === 11) {
        scene.actions([
          { label: 'Talk to Mira in the meadow', goto: ['gad_meadow', 'miraperversion11'] },
        ]);
      } else {
        if (((s as any).MiraVars ?? 0)?.['QW'] >= 15  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 1  &&  ((s as any).MiraVars ?? 0)?.['cuni_given'] === 0  &&  ((s as any).locat ?? 0)?.['A60_loc'] === 'gad_meadow'  &&  ((s as any).pcs_horny ?? 0) >= 60) {
          scene.actions([
            { label: 'Talk to Mira in the meadow', goto: ['gad_meadow', 'lesb_talk_mira2'] },
          ]);
        } else {
          if (((s as any).loc ?? 0) === 'gad_meadow'  &&  ((s as any).locat ?? 0)?.['A60_loc'] === 'gad_meadow'  &&  ((s as any).pcs_horny ?? 0) >= 40) {
            if (((s as any).MiraVars ?? 0)?.['had_sex'] === 1  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 13  &&  ((s as any).MiraVars ?? 0)?.['cuni_given'] > 0) {
              // TODO-QSP: act 'Talk to Mira in the meadow': gt 'gad_meadow', 'lesb_talk_mira3'
            }
            if (((s as any).MiraVars ?? 0)?.['had_sex'] === 2  &&  ((s as any).npc_rel ?? 0)?.['A60'] >= 15) {
              // TODO-QSP: act 'Talk to Mira in the meadow': gt 'gad_meadow', 'lesb_mira'
            }
          }
          if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).sunWeather ?? 0) === 1) {
            scene.actions([
              { label: 'Offer to walk together', goto: ['miroslava', 'walk_together'] },
            ]);
          }
          if (((s as any).gad_meadow_found ?? 0) === 1  &&  ((s as any).MiraVars ?? 0)?.['meadow'] === 0  &&  qspFunc(s, 'miroslava_schedule', 'is_here', 'forest')) {
            scene.actions([
              { label: 'Show her your secret place', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'npc_relationship', 'modify', 'A60', 2);
    (s as any).MiraVars['meadow'] = 1;
    (s as any).MiraVars['follower'] = 1;
    (s as any).MiraVars['follow_time'] = 1;
    (s as any).MiraVars['guest'] = 0;
    qspCall(s, 'miroslava', 'wear_stripped_clothes');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/girls_go.jpg');
    scene.text('You lead Mira through the thickets to the hidden meadow and all the way she talks about everything and anything, merrily telling stories from her past urban life.');
    scene.actions([
      { label: 'Continue', goto: ['gad_meadow', 'start'] },
    ]);
  } },
            ]);
          }
          if ((((s as any).MiraVars ?? 0)?.['meadow'] === 2  ||  ((s as any).MiraVars ?? 0)?.['meadow'] === 5)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 19  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here', 'forest'))  &&  ((s as any).sunWeather ?? 0) === 1) {
            scene.actions([
              { label: 'Offer to go to the Meadow', goto: ['miroslava', 'offer_go_meadow'] },
            ]);
          }
          if (((s as any).npc_rel ?? 0)?.['A60'] >= 15  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).MiraVars ?? 0)?.['QW'] === 0  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_forest') {
            scene.actions([
              { label: 'Ask if she\'s met the local boys?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    qspCall(s, 'miroslava', 'wear_stripped_clothes');
    qspCall(s, 'stat', '');
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('You ask Mira if she has already met everyone in the village. When she says no, you offer to introduce her to some local guys, and she readily agrees, asking you to wait a few minutes while she changes and freshens up. When she comes out, you go drinking with the group of boys near your house…');
    (s as any).MiraVars['follower'] = 1;
    (s as any).MiraVars['follow_time'] = 24 - ((s as any).hour ?? 0);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['mitkabuh', ''] },
    ]);
  } },
            ]);
          }
          if (((s as any).npc_rel ?? 0)?.['A60'] >= 16  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 0  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_forest') {
            scene.actions([
              { label: 'Drink with the local guys', goto: ['miroslava', 'offer_drink_boys'] },
            ]);
          }
          if (((s as any).npc_rel ?? 0)?.['A60'] >= 20  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) > 18  &&  ((s as any).hour ?? 0) < 22) {
            scene.actions([
              { label: 'Invite for a steam bath', goto: ['miroslava', 'offer_steam_bath'] },
            ]);
          }
          if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_beach') {
            scene.actions([
              { label: 'Offer to go to the river', goto: ['miroslava', 'offer_go_river'] },
            ]);
          }
          if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_forest'  &&  ((s as any).MiraVars ?? 0)?.['pickingtalk'] > 0  &&  ((s as any).npc_rel ?? 0)?.['A60'] >= 5) {
            scene.actions([
              { label: 'Offer to go to the forest', goto: ['miroslava', 'offer_go_forest'] },
            ]);
          }
          if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).locat ?? 0)?.['A60_loc'] === 'gad_forest'  &&  ((s as any).MiraVars ?? 0)?.['nudetalk'] > 1  &&  ((s as any).npc_rel ?? 0)?.['A60'] >= 5  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).forestpicnic ?? 0))) {
            if (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
              scene.actions([
                { label: 'Offer to walk naked', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'strip_all', 'forest_edge');
    (s as any).MiraVars['strip_loc'] = 'forest_edge';
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraforest6.jpg');
    scene.text('You offered Mira to walk through the woods naked, and she immediately agreed.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $locat['A60_loc'], $locat['A60_arg']
  } },
    ]);
  } },
              ]);
            }
          }
          if (((s as any).npc_rel ?? 0)?.['A60'] >= 15  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_forest'  &&  ((s as any).grandmaQW ?? 0)?.['block'] === 0  &&  (((s as any).npc_QW ?? 0)?.['A63'] < 11  ||  ((s as any).MiraVars ?? 0)?.['QW'] >= 11  ||  ((s as any).MiraVars ?? 0)?.['had_sex'] > 1)  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
            qspCall(s, 'miroslava', 'guest_acts');
          }
          if ((! qspFunc(s, 'miroslava_schedule', 'is_here', qspUntranslated(s, "\u00000\u0000", { location: "miroslava" }), qspUntranslated(s, "\u00001\u0000", { location: "miroslava" })))  &&  ((s as any).MiraVars ?? 0)?.['meadow'] > 1) {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspCall(s, 'stat', '');
            if (((s as any).locat ?? 0)?.['A60_loc_prev'] === 'gad_miroslava_home') {
              qspCall(s, 'miroslava', 'miraclothes');
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you're fun to be with, but my dad has chores for me to work ...
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, you're fun to be with, but my dad has chores for me to work on," Mira tells you.`);
            } else {
              if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
                if (((s as any).clothingworntype ?? 0) === 'nude') {
                  scene.img('images/characters/gadukino/mira/mira_go_home_nude.jpg');
                } else {
                  scene.img('images/characters/gadukino/mira/mira_go_home.jpg');
                }
              } else {
                qspCall(s, 'miroslava', 'miraclothes');
              }
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you're fun to be with, but I gotta get home. My dad has chor...
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, you're fun to be with, but I gotta get home. My dad has chores for me to work on." Mira tells you.`);
            }
            qspCall(s, 'miroslava', 'wear_stripped_clothes');
            scene.actions([
              { label: 'Go back to the village', goto: ['gadukino', ''] },
            ]);
          }
          if (((s as any).npc_rel ?? 0)?.['A60'] >= 15  &&  ((s as any).daystart ?? 0) >= ((s as any).MiraVars ?? 0)?.['emb_day']  &&  (((s as any).npc_QW ?? 0)?.['A63'] < 11  ||  ((s as any).MiraVars ?? 0)?.['QW'] >= 11  ||  ((s as any).MiraVars ?? 0)?.['had_sex'] > 1)) {
            (s as any).temp_rand = Math.floor(Math.random() * 21) + 0;
            if ((((s as any).temp_rand ?? 0) === 1  ||  ((s as any).temp_rand ?? 0) === 2)  &&  ((s as any).MiraVars ?? 0)?.['guest'] === 0  &&  ((s as any).MiraVars ?? 0)?.['follow_time'] === 0  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_forest'  &&  ((s as any).grandmaQW ?? 0)?.['block'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
              (s as any).minut = ((s as any).minut ?? 0) + 1;
              qspCall(s, 'stat', '');
              if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
                qspCall(s, 'miroslava', 'mira_river');
              } else {
                qspCall(s, 'miroslava', 'miraclothes');
              }
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, it's so boring here," Mira pouts, "I know! Let's go to your ...
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, it's so boring here," Mira pouts, "I know! Let's go to your place." Mira suggests brightly.`);
              scene.actions([
                { label: 'Agree', handler: (st: GameState) => {
    (s as any).MiraVars['follow_time'] = 1;
    (s as any).MiraVars['guest'] = 1;
    if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'main'] }]);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      if (((s as any).npc_rel ?? 0)?.['A60'] < 30) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      qspCall(s, 'outfit', 'wear_last_worn');
      scene.img('images/locations/gadukino/river/dressbch.jpg');
      scene.text('You change into your clothes and go home with Mira.');
      scene.actions([
        { label: 'Continue', goto: ['gad_gphouse', 'main'] },
      ]);
    }
  } },
                { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('You deny Mira, saying that you don\'t want to right now.');
    scene.actions([
      { label: 'Continue', goto: ['miroslava', 'start'] },
    ]);
  } },
              ]);
            } else {
              (s as any).minut = ((s as any).minut ?? 0) + 1;
              qspCall(s, 'stat', '');
              qspCall(s, 'miroslava', 'miraclothes');
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, come watch TV with me. That's boring -" Mira said.
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, come watch TV with me. That's boring -" Mira said.`);
              if (((s as any).temp_rand ?? 0) === 5  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here', 'forest'))  &&  (((s as any).MiraVars ?? 0)?.['meadow'] === 2  ||  ((s as any).MiraVars ?? 0)?.['meadow'] === 5)  &&  ((s as any).MiraVars ?? 0)?.['follow_time'] === 0  &&  ((s as any).hour ?? 0) < 19  &&  ((s as any).sunWeather ?? 0) === 1) {
                (s as any).minut = ((s as any).minut ?? 0) + 1;
                qspCall(s, 'stat', '');
                qspCall(s, 'miroslava', 'miraclothes');
                // TODO-QSP: dynamic text: "<<$pcs_nickname>>, can we go to the meadow?" Mira asked you. "Let's take a walk...
                scene.text(`"${((s as any).pcs_nickname ?? 0)}, can we go to the meadow?" Mira asked you. "Let's take a walk and get some fresh air."`);
                scene.actions([
                  { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).npc_rel ?? 0)?.['A60'] < 50) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    (s as any).MiraVars['follower'] = 1;
    (s as any).MiraVars['follow_time'] = 2;
    qspCall(s, 'miroslava', 'wear_stripped_clothes');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/girls_go.jpg');
    scene.text('You go with Mira through the dense undergrowth to the hidden meadow. Along the way, she merrily tells stories from her past city life.');
    scene.actions([
      { label: 'Continue', goto: ['gad_meadow', 'start'] },
    ]);
  } },
                  { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('You deny Mira, saying that you don\'t want to right now.');
    scene.actions([
      { label: 'Continue', goto: ['miroslava', 'start'] },
    ]);
  } },
                ]);
              } else {
                (s as any).minut = ((s as any).minut ?? 0) + 1;
                qspCall(s, 'stat', '');
                qspCall(s, 'miroslava', 'miraclothes');
                // TODO-QSP: dynamic text: "<<$pcs_nickname>>, do you want to go to the river?" - Mira asks. "Let's go swim...
                scene.text(`"${((s as any).pcs_nickname ?? 0)}, do you want to go to the river?" - Mira asks. "Let's go swim and sunbathe."`);
                if (((s as any).temp_rand ?? 0) === 8  ||  ((s as any).temp_rand ?? 0) === 9) {
                  (s as any).minut = ((s as any).minut ?? 0) + 1;
                  (s as any).MiraVars['follow_time'] = 1;
                  qspCall(s, 'stat', '');
                  qspCall(s, 'miroslava', 'miraclothes');
                  scene.text('Mira wants to chat with you.');
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, do you want to just chat a little?" Mira asks.
                  scene.text(`"${((s as any).pcs_nickname ?? 0)}, do you want to just chat a little?" Mira asks.`);
                  scene.actions([
                    { label: 'Chat', goto: ['miroslava', 'miratalk'] },
                    { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira.jpg');
    scene.text('"Not right now, Mira," you say. "I\'m not in the mood to talk right now."');
    scene.actions([
      { label: 'Continue', goto: ['miroslava', 'start'] },
    ]);
  } },
                  ]);
                } else {
                  (s as any).minut = ((s as any).minut ?? 0) + 1;
                  (s as any).MiraVars['follower'] = 1;
                  (s as any).MiraVars['follow_time'] = 2;
                  qspCall(s, 'miroslava', 'wear_stripped_clothes');
                  qspCall(s, 'stat', '');
                  qspCall(s, 'miroslava', 'miraclothes');
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, let's hang out with those guys and drink a little?" Mira ask...
                  scene.text(`"${((s as any).pcs_nickname ?? 0)}, let's hang out with those guys and drink a little?" Mira asks you. "I'm bored and want to party."`);
                  scene.actions([
                    { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 16  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', ''] }]);
    }
  } },
                    { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('You deny Mira, saying that you don\'t want to right now.');
    scene.actions([
      { label: 'Continue', goto: ['miroslava', 'start'] },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).npc_rel ?? 0)?.['A60'] < 30) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    (s as any).MiraVars['follower'] = 1;
    (s as any).MiraVars['follow_time'] = 2;
    qspCall(s, 'miroslava', 'wear_stripped_clothes');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/girls_go.jpg');
    scene.text('You decided to go with Mira to the village beach, and all the way, she goes, merrily chattering and telling stories.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'gad_beach', 'start', 1
  } },
    ]);
  } },
                  { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('You tell Mira that you don\'t feel like going to the river now.');
    scene.actions([
      { label: 'Continue', goto: ['miroslava', 'start'] },
    ]);
  } },
                ]);
              }
              if (((s as any).MiraVars ?? 0)?.['QW'] === 20  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_forest'  &&  ((s as any).hour ?? 0) < 19  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
                scene.actions([
                  { label: '<b>Make your third wish</b>', goto: ['miroslava', 'third_wish'] },
                ]);
              }
              if (((s as any).hour ?? 0) === 23) {
                (s as any).minut = ((s as any).minut ?? 0) + 5;
                qspCall(s, 'stat', '');
                if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_miroslava_home') {
                  qspCall(s, 'miroslava', 'miraclothes');
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you're fun to be with, but it's late. I gotta get to bed. Da...
                  scene.text(`"${((s as any).pcs_nickname ?? 0)}, you're fun to be with, but it's late. I gotta get to bed. Dad has chores for me to work on tomorrow." Mira tells you.`);
                } else {
                  if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
                    if (((s as any).clothingworntype ?? 0) === 'nude') {
                      scene.img('images/characters/gadukino/mira/mira_go_home_nude.jpg');
                    } else {
                      scene.img('images/characters/gadukino/mira/mira_go_home.jpg');
                    }
                  } else {
                    qspCall(s, 'miroslava', 'miraclothes');
                  }
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you're fun to be with, but I gotta get home and get to bed. ...
                  scene.text(`"${((s as any).pcs_nickname ?? 0)}, you're fun to be with, but I gotta get home and get to bed. My dad has chores for me to work on tomorrow." Mira tells you.`);
                }
                qspCall(s, 'miroslava', 'wear_stripped_clothes');
                scene.actions([
                  { label: 'Go back', goto: ['miroslava', 'leave'] },
                ]);
              }
              scene.actions([
                { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).npc_rel ?? 0)?.['A60'] < 20) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_tv\'+rand(1, 12)+\'.jpg');
    scene.text('You watch TV with Mira for an hour.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gphouse', 'main'] },
    ]);
  } },
                { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('You deny Mira, saying that you don\'t want to right now.');
    scene.actions([
      { label: 'Continue', goto: ['miroslava', 'leave'] },
    ]);
  } },
              ]);
            }
          }
          scene.actions([
            { label: 'Leave', goto: ['miroslava', 'leave'] },
            { label: 'Chat', goto: ['miroslava', 'miratalk'] },
          ]);
        }
        scene.actions([
          { label: 'Talk to Mira in the meadow', goto: ['gad_meadow', 'lesb_talk_mira1'] },
        ]);
      }
    }
  }
  scene.build();
}

export const miroslava: LocationDef = {
  name: 'miroslava',
  title: 'Mira is a sociable girl the same age as you. She lives with ',
  region: 'other',
  description: ['Mira is a sociable girl the same age as you. She lives with her father, who recently moved in here because of his considerable debts to some disreputable men in the city. He had to sell all the family\'s property, including an apartment in the city center. With the money left over, they could only afford to buy a house in a rundown village like this one.'],
  enter: enter,
};
