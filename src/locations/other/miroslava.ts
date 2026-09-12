import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A60');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('Mira is a sociable girl the same age as you. She lives with her father, who recently moved in here because of his considerable debts to some disreputable men in the city. He had to sell all the family\'s property, including an apartment in the city center. With the money left over, they could only afford to buy a house in a rundown village like this one.');
  if (((s as any).npc_rel ?? 0)?.['A60'] < 25) {
    scene.text('You two have a strained relationship.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A60'] < 45) {
      scene.text('You two have a normal relationship.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A60'] < 65) {
        scene.text('You have a good relationship with Mira.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A60'] < 80) {
          scene.text('You two have a great relationship.');
        } else {
          scene.text('You and Mira are best friends.');
        }
      }
    }
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1) {
    qspCall(s, 'miroslava', 'cattle_chore_acts');
  }
  if (((s as any).MiraVars ?? 0)?.['QW'] === 11) {
    scene.actions([
      { label: 'Talk to Mira in the meadow', goto: ['gad_meadow', 'miraperversion11'] },
    ]);
  } else {
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 15  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 0  &&  ((s as any).locat ?? 0)?.['A60_loc'] === 'gad_meadow'  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 13  &&  ((s as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Talk to Mira in the meadow', goto: ['gad_meadow', 'lesb_talk_mira1'] },
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
    ((s as any).MiraVars ?? {})['meadow'] = 1;
    ((s as any).MiraVars ?? {})['follower'] = 1;
    ((s as any).MiraVars ?? {})['follow_time'] = 1;
    ((s as any).MiraVars ?? {})['guest'] = 0;
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
    ((s as any).MiraVars ?? {})['follower'] = 1;
    ((s as any).MiraVars ?? {})['follow_time'] = 24 - ((s as any).hour ?? 0);
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
    ((s as any).MiraVars ?? {})['strip_loc'] = 'forest_edge';
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
        if ((! qspFunc(s, 'miroslava_schedule', 'is_here', ((s as any).locat ?? 0)?.['A60_loc_prev'], ((s as any).locat ?? 0)?.['A60_arg_prev']))  &&  ((s as any).MiraVars ?? 0)?.['meadow'] > 1) {
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
    ((s as any).MiraVars ?? {})['follow_time'] = 1;
    ((s as any).MiraVars ?? {})['guest'] = 1;
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
            if ((((s as any).temp_rand ?? 0) === 3  ||  ((s as any).temp_rand ?? 0) === 4)  &&  ((s as any).MiraVars ?? 0)?.['guest'] === 1) {
              (s as any).minut = ((s as any).minut ?? 0) + 1;
              qspCall(s, 'stat', '');
              qspCall(s, 'miroslava', 'miraclothes');
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, come watch TV with me. That's boring -" Mira said.
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, come watch TV with me. That's boring -" Mira said.`);
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
            } else {
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
    ((s as any).MiraVars ?? {})['follower'] = 1;
    ((s as any).MiraVars ?? {})['follow_time'] = 2;
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
                if ((((s as any).temp_rand ?? 0) === 6  ||  ((s as any).temp_rand ?? 0) === 7)  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here', 'forest'))  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).MiraVars ?? 0)?.['follow_time'] === 0  &&  ((s as any).hour ?? 0) < 18) {
                  (s as any).minut = ((s as any).minut ?? 0) + 1;
                  qspCall(s, 'stat', '');
                  qspCall(s, 'miroslava', 'miraclothes');
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, do you want to go to the river?" - Mira asks. "Let's go swim...
                  scene.text(`"${((s as any).pcs_nickname ?? 0)}, do you want to go to the river?" - Mira asks. "Let's go swim and sunbathe."`);
                  scene.actions([
                    { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).npc_rel ?? 0)?.['A60'] < 30) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    ((s as any).MiraVars ?? {})['follower'] = 1;
    ((s as any).MiraVars ?? {})['follow_time'] = 2;
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
                } else {
                  if (((s as any).temp_rand ?? 0) === 8  ||  ((s as any).temp_rand ?? 0) === 9) {
                    (s as any).minut = ((s as any).minut ?? 0) + 1;
                    ((s as any).MiraVars ?? {})['follow_time'] = 1;
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
                    if (((s as any).temp_rand ?? 0) > 10  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'gad_forest'  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).MiraVars ?? 0)?.['follow_time'] === 0  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 0) {
                      (s as any).minut = ((s as any).minut ?? 0) + 1;
                      ((s as any).MiraVars ?? {})['follower'] = 1;
                      ((s as any).MiraVars ?? {})['follow_time'] = 2;
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
                  }
                }
              }
            }
          }
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
          { label: 'Leave', goto: ['miroslava', 'leave'] },
          { label: 'Chat', goto: ['miroslava', 'miratalk'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCattleChoreActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 13  ||  ((s as any).hour ?? 0) >= 16) {
    if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Tan by the field', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/graze_cow_sun_mira.jpg');
    scene.text('You lie down next to Mira and tan together in the sun.');
    if (((s as any).hour ?? 0) >= 16) {
      scene.actions([
        { label: 'Continue', goto: ['gad_field', 'cow3'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['gad_field', 'cow'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Go for a run on the field', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).fat = ((s as any).fat ?? 0) - (5);
    qspCall(s, 'exp_gain', 'run', 1);
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (24);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/graze_cow_run_mira.jpg');
    scene.text('You spend the next hour running around the field with Mira.');
    if (((s as any).hour ?? 0) >= 16) {
      scene.actions([
        { label: 'Continue', goto: ['gad_field', 'cow3'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['gad_field', 'cow'] },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
      if (((s as any).pcs_stam ?? 0) >= (5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
        scene.actions([
          { label: 'Swim in the nearby river', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier1', 15, 'stren', 'stren');
    (s as any).cumspclnt = 4;
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/graze_cow_river_mira.jpg');
    scene.text('You wade in the river, splashing around with Mira is a lot of fun.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'cow2'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tan by the river', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/graze_cow_sun_mira2.jpg');
    scene.text('You lie down next to Mira and tan together in the sun.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'cow2'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to Mira', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (12);
    }
    if (((s as any).npc_rel ?? 0)?.['A60'] < 50) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/graze_cow_mira.jpg');
    scene.text('You chat with Mira for an hour. You feel like your relationship with her has improved.');
    if (((s as any).hour ?? 0) < 13) {
      scene.actions([
        { label: 'Continue', goto: ['gad_field', 'cow'] },
      ]);
    } else {
      if (((s as any).hour ?? 0) < 16) {
        scene.actions([
          { label: 'Continue', goto: ['gad_field', 'cow2'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['gad_field', 'cow3'] },
        ]);
      }
    }
  } },
    { label: 'Depart', goto: ['gad_field', 'field'] },
  ]);
  scene.build();
}

function enterWalkTogether(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_shy.jpg');
    scene.text('You ask Mira to stroll around the village, but Mira only shakes her head, saying she is too ashamed to leave the house.');
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 10  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] <= 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/mira_said_no.jpg');
      scene.text('You ask Mira to walk around the village, but she tells you that she does not want people to see you walking together and then wonder if she, too, is such a whore…');
      scene.actions([
        { label: 'Leave', goto: ['miroslava', 'leave'] },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_forest') {
        (s as any).minut = ((s as any).minut ?? 0) + 85;
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 40;
      }
      if (((s as any).npc_rel ?? 0)?.['A60'] < 15) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
      ((s as any).MiraVars ?? {})['guest'] = 0;
      qspCall(s, 'miroslava', 'wear_stripped_clothes');
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/girls_walking\'+rand(1, 3)+\'.jpg');
      scene.text('You invite her to wander around the village, and she gladly accepts. Then you walk together around the small village, telling each other different stories from your lives.');
      if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 15  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20) {
        (s as any).temp_rand = Math.floor(Math.random() * 12) + 1;
        if (((s as any).temp_rand ?? 0) <= 4) {
          if (((s as any).temp_rand ?? 0) === 4) {
            if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
              scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_3boys'] }]);
            } else {
              if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)) {
                scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_2boys', '1'] }]);
              } else {
                if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
                  scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_2boys', '2'] }]);
                } else {
                  if (((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
                    scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_2boys', '3'] }]);
                  } else {
                    if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)) {
                      scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_mitka'] }]);
                    } else {
                      if (((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)) {
                        scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_kolyamba'] }]);
                      } else {
                        if (((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
                          scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_vasyan'] }]);
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)) {
              scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_mitka'] }]);
            } else {
              if (((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)) {
                scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_kolyamba'] }]);
              } else {
                if (((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
                  scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_vasyan'] }]);
                }
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Finish your walk', goto: ['miroslava', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOfferGoMeadow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_shy.jpg');
    scene.text('You ask Mira if she wants to go to the meadow, but Mira only shakes her head, saying she is too ashamed to leave the house.');
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 5  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] <= 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/mira_said_no.jpg');
      scene.text('You offer to walk with Mira outside the village, but she says she doesn\'t want to wander that far away from home.');
      scene.actions([
        { label: 'Leave', goto: ['miroslava', 'leave'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A60'] < 50) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
      ((s as any).MiraVars ?? {})['follower'] = 1;
      if (((s as any).minut ?? 0) > 30) {
        ((s as any).MiraVars ?? {})['follow_time'] = 2;
      }
      qspCall(s, 'miroslava', 'wear_stripped_clothes');
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/girls_go.jpg');
      scene.text('You offer to go with Mira to the meadow, and she readily agrees. On the way, you tell each other different stories, some genuine but primarily tall tales.');
      scene.actions([
        { label: 'Continue', goto: ['gad_meadow', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOfferDrinkBoys(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_shy.jpg');
    scene.text('You ask Mira if she wants to go drink with the boys, but she only shakes her head, saying she is too ashamed and will not leave the house.');
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).npc_rel ?? 0)?.['A60'] < 20) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    qspCall(s, 'miroslava', 'wear_stripped_clothes');
    qspCall(s, 'stat', '');
    qspCall(s, 'miroslava', 'miraclothes');
    if (((s as any).MiraVars ?? 0)?.['QW'] === 5) {
      scene.text('You suggest drinking with the village boys, and Mira agrees. Then she whispers that when she leaves with Mitka, you should wait for a little and follow them to his home.');
    } else {
      scene.text('You suggest drinking with the village boys, and Mira readily agrees, then asks you to wait a few minutes while she changes. When she comes out, you go to drink with the group of boys near your house…');
    }
    ((s as any).MiraVars ?? {})['follower'] = 1;
    ((s as any).MiraVars ?? {})['follow_time'] = 1;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 16  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', ''] }]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterOfferSteamBath(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_shy.jpg');
    scene.text('You ask Mira if she wants to come over and take a steam bath, but she only shakes her head, saying that after what she did, she is too ashamed to leave the house.');
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 10  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] <= 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/mira_said_no.jpg');
      scene.text('You offer Mira together to relax you in the bath, but she rudely answers that she will never go bathe with such a whore like you.');
      scene.actions([
        { label: 'Leave', goto: ['miroslava', 'leave'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      if (((s as any).npc_rel ?? 0)?.['A60'] < 50) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
      ((s as any).MiraVars ?? {})['guest'] = 1;
      qspCall(s, 'miroslava', 'wear_stripped_clothes');
      if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_forest') {
        (s as any).minut = ((s as any).minut ?? 0) + 85;
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 40;
      }
      qspCall(s, 'stat', '');
      qspCall(s, 'miroslava', 'miraclothes');
      scene.text('You offer Mira the opportunity to relax with you in the bath. She pauses for a few moments to think but then agrees slowly. Then, you lead her into your grandparents\' backyard…');
      scene.actions([
        { label: 'Go to your home', goto: ['gad_gpbath', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOfferGoRiver(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_shy.jpg');
    scene.text('You ask Mira if she wants to go to the river with you, but she only shakes her head, saying that she will not leave the house after her humiliation.');
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 10  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] <= 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/mira_said_no.jpg');
      scene.text('You suggest going to the river together, but she snorts contemptuously at you and says that she is not going anywhere with a slut like you.');
      scene.actions([
        { label: 'Leave', goto: ['miroslava', 'leave'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 17;
      if (((s as any).npc_rel ?? 0)?.['A60'] < 30) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
      ((s as any).MiraVars ?? {})['guest'] = 0;
      qspCall(s, 'miroslava', 'wear_stripped_clothes');
      if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_forest') {
        (s as any).minut = ((s as any).minut ?? 0) + (30);
      }
      qspCall(s, 'stat', '');
      qspCall(s, 'miroslava', 'miraclothes');
      scene.text('You suggest going to the river to swim or sunbathe, and Mira readily agrees.');
      ((s as any).MiraVars ?? {})['follower'] = 1;
      ((s as any).MiraVars ?? {})['follow_time'] = 2;
      scene.actions([
        { label: 'Go to the river', handler: (st: GameState) => {
    // TODO-QSP: gt 'gad_beach', 'start', 1
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOfferGoForest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_shy.jpg');
    scene.text('You ask Mira to go to the forest with you to look for mushrooms and berries, but she only shakes her head, saying that she will not leave the house after her humiliation.');
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 10  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] <= 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/mira_said_no.jpg');
      scene.text('You have to offer Mira together to go to the forest for mushrooms and berries. Still, she contemptuously snorts in response and says she\'s not going anywhere with a slut like you.');
      scene.actions([
        { label: 'Leave', goto: ['miroslava', 'leave'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      if (((s as any).npc_rel ?? 0)?.['A60'] < 30) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
      ((s as any).MiraVars ?? {})['guest'] = 0;
      qspCall(s, 'miroslava', 'wear_stripped_clothes');
      qspCall(s, 'stat', '');
      qspCall(s, 'miroslava', 'miraclothes');
      scene.text('You offer her to go to the forest to look for mushrooms and berries, and she willingly agrees.');
      ((s as any).MiraVars ?? {})['follower'] = 1;
      ((s as any).MiraVars ?? {})['follow_time'] = 1;
      scene.actions([
        { label: 'Go into the woods', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
  }, goto: ['gad_forest', 'forest_edge'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWearStrippedClothes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PSwim ?? 0) === 1) {
    if (((s as any).MiraVars ?? 0)?.['strip_loc'] !== ''  &&  ((s as any).CloLosTyp ?? 0)[((s as any).MiraVars ?? 0)?.['strip_loc']] !== '') {
      // TODO-QSP: gs 'outfit', 'recover_lost_outfit', $MiraVars['strip_loc'], 1
    } else {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
  }
  ((s as any).MiraVars ?? {})['strip_loc'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterGuestActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).MiraVars ?? 0)?.['guest'] === 0) {
    scene.actions([
      { label: 'Invite to your grandparent\'s', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).MiraVars ?? {})['guest'] = 1;
    if (((s as any).npc_rel ?? 0)?.['A60'] < 30) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    qspCall(s, 'stat', '');
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('You are tired of hanging around on the street, and you decide to invite Mira to dinner.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
      scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'main'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'outfit', 'wear_last_worn');
      scene.img('images/locations/gadukino/river/dressbch.jpg');
      scene.text('You changed into your regular clothes and went home with Mira.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_gphouse', 'main'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 18) {
      scene.actions([
        { label: 'Sleep over', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).npc_rel ?? 0)?.['A60'] < 20) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_tv\'+rand(1, 12)+\'.jpg');
    scene.text('You ask your grandparents if Mira can sleep over. They tell you it\'s okay with them, so you invite Mira to sleep over.');
    scene.text('You and Mira head over to the vast wardrobe where your clothes are and spend an hour trying on different dresses and underwear.');
    scene.actions([
      { label: 'Mira and you raid the kitchen for a late night snack (0:15)', handler: (st: GameState) => {
    // TODO-QSP: 'You and Mira head to the kitchen to make a quick snack'
    qspCall(st, 'food', 'snack');
  } },
      { label: 'Go to sleep', handler: (st: GameState) => {
    // TODO-QSP: 'You''re feeling tired. You and Mira head to your bed and cr...
  }, goto: ['bed2', ''] },
      { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: MiraVars['guest'] = 0
  }, goto: ['miroslava', 'leave'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Watch TV', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).npc_rel ?? 0)?.['A60'] < 20) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_tv\'+rand(1, 12)+\'.jpg');
    scene.text('You and Mira watch TV for an hour.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gphouse', 'main'] },
    ]);
  } },
      { label: 'Say goodbye to Mira', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('You say goodbye to Mira, and she goes home.');
    ((s as any).MiraVars ?? {})['guest'] = 0;
    ((s as any).MiraVars ?? {})['follow_time'] = 0;
    ((s as any).MiraVars ?? {})['follower'] = 0;
    if (((s as any).MiraVars ?? 0)?.['guestday'] <= ((s as any).daystart ?? 0)) {
      ((s as any).MiraVars ?? {})['guestday'] = ((s as any).daystart ?? 0) + 1;
    }
    scene.actions([
      { label: 'Walk back home', goto: ['gad_gphouse', 'main'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterThirdWish(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).MiraVars ?? {})['guest'] = 0;
  qspCall(s, 'miroslava', 'wear_stripped_clothes');
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('You remind Mira about the third wish, and she reluctantly nods and says she remembers it. But, then, you act mysterious and, with a sinister smile, command her to follow you…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Make Mira walk through village naked', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/street.jpg');
    scene.text('You lead Mira out to the village street. Mira stares at her feet, sometimes looking at you with watchful eyes…');
    scene.actions([
      { label: 'Order her to undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_looks.jpg');
    scene.text('You lead her to the center of the village square, in front of the market. Here, you turn to her and demand disdainfully that she undress. You tell her that this is your final wish and you will forgive her betrayal after she completes this task. Mira\'s mouth slowly drops open, and she looks at you as if you\'re insane.');
    scene.text('"Come on, you\'re like a little girl," you snort, "we both know you\'re a big whore and can\'t live without having cock every day. And now this is the mother load, entirely for free."');
    scene.text('Mira, in silence, looks at you and then looks around at the village street on which people walk about their business.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, please don't make this your wish. I will die of embarrassmen...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, please don't make this your wish. I will die of embarrassment!" - Mira plaintively begs, hoping it will change your mind.`);
    scene.actions([
      { label: 'Confirm your wish', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_nude1.jpg');
    scene.text('"No. You freely made the promise of three wishes. Anything I want, and I want you to strip naked and head through the village to the fields. I\'ll meet you there, and I\'ll bring your clothes to you. Now, do as you promised," you stated in an adamant voice.');
    scene.text('Mira hesitates for another minute, shifting uncomfortably from foot to foot, nods to herself and finally decides to undress before you. Once nude, she hands you her clothes.');
    scene.text('"Well, now you must walk through the entire village and go to the fields. Once you get to me, you can consider yourself forgiven," you said with a malicious smile and slammed the palm of your hand into Mira\'s ass to help her on the way. You slowly follow her and watch with interest.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_nude2.jpg');
    scene.text('Mira hesitantly begins to move through the village street. You look at her and the reaction of passers-by.');
    scene.actions([
      { label: 'Look further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
    ((s as any).MiraVars ?? {})['emb_day'] = ((s as any).daystart ?? 0) + 7;
    ((s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
    ((s as any).MiraVars ?? {})['QW'] = 21;
    qspCall(s, 'npc_relationship', 'set', 'A60', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_nude3.jpg');
    scene.text('Finally flushed crimson, Mira arrives in the fields just beyond the village. She then turns and rushes up to you.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, we're even!" Mira states and looks at you imploringly.
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, we're even!" Mira states and looks at you imploringly.`);
    scene.text('You nod your head while handing her clothes back. After watching a few more minutes as Mira dresses, several of the village men are hooting as she sprints to her house. Slowly the men settle down and go about their business.');
    ((s as any).MiraVars ?? {})['guest'] = 0;
    ((s as any).MiraVars ?? {})['follower'] = 0;
    ((s as any).MiraVars ?? {})['follow_time'] = 0;
    scene.actions([
      { label: 'Finish', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Forgive her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A60', 5);
    ((s as any).MiraVars ?? {})['QW'] = 22;
    ((s as any).MiraVars ?? {})['guest'] = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_leaves.jpg');
    scene.text('"Well, Mira, fuck you. I had a good day planned," You pause. "You can consider yourself forgiven,"');
    scene.text('The girl is still for several moments, shifts uncomfortably from foot to foot, unable to believe her ears, then jumps up to you and kisses you on the cheek.');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>, I… I…, "- she stammers before running home.
    scene.text(`"Thank you, ${((s as any).pcs_nickname ?? 0)}, I… I…, "- she stammers before running home.`);
    scene.actions([
      { label: 'Finish', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMiratalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).MiraVars ?? 0)?.['QW'] === 0) {
    if (((s as any).npc_rel ?? 0)?.['A60'] < 10) {
      qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    }
    if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
      qspCall(s, 'miroslava', 'mira_river');
    } else {
      qspCall(s, 'miroslava', 'miraclothes');
    }
    if (((s as any).npc_QW ?? 0)?.['A63'] < 13  ||  ((s as any).MiraVars ?? 0)?.['had_sex'] > 1) {
      scene.text('You have ten minutes of fun talking about all sorts of trivia.');
    } else {
      scene.text('While trying to talk with Mira, she remained silent, sometimes giving you scornful glances.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['miroslava', 'leave'] },
    ]);
  } else {
    if (((s as any).MiraVars ?? 0)?.['QW'] === 1) {
      if (((s as any).npc_rel ?? 0)?.['A60'] < 20) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
      if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
        qspCall(s, 'miroslava', 'mira_river');
      } else {
        qspCall(s, 'miroslava', 'miraclothes');
      }
      if (((s as any).npc_QW ?? 0)?.['A63'] < 13  ||  ((s as any).MiraVars ?? 0)?.['had_sex'] > 1) {
        scene.text('You have ten minutes of fun talking about all sorts of trivia and, sometimes, how you got drunk with village guys…');
      } else {
        scene.text('While trying to talk to Mira, she remained silent, sometimes giving you scornful glances.');
      }
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Finish', goto: ['miroslava', 'leave'] },
        { label: 'Ask Mira if she likes Mitka…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    ((s as any).MiraVars ?? {})['QW'] = 2;
    scene.img('images/characters/gadukino/mira/mira3.jpg');
    scene.text('You ask Mira if there is something between her and Mitka. She looks at you a little timidly but responds yes, there is. However, she refuses to go into further detail, so you decide to leave the subject until a more appropriate time comes up…');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['miroslava', 'leave'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).MiraVars ?? 0)?.['QW'] === 3) {
        if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
          qspCall(s, 'miroslava', 'mira_river');
        } else {
          qspCall(s, 'miroslava', 'miraclothes');
        }
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Tell her that you saw her fucking Mitka in the meadow.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/characters/gadukino/mira/mira3.jpg');
    scene.text('You coldly tell Mira you saw her when she fucked Mitka in the meadow. You remind her that she swore not to tell anyone about your secret place. Mira turns red and flutters her eyes at you trying to look innocent as she mumbles that she\'s sorry about breaking her promise. Mira asks if there is any way to make amends. You smile and remind her that she promised you three wishes if she ever revealed the meadow to anyone. Mira meekly nods her head, confirming that she does indeed remember making that promise and is ready to fulfil them.');
    qspCall(s, 'willpower', 'exhib', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'She deserves some punishment [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'She deserves some punishment [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'exhib', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira3.jpg');
    scene.actions([
      { label: 'Tell her to show you her pussy', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/miraqw3.jpg');
    scene.text('"To start, you will pull down your panties and show me your pussy, and tell me what it felt like fucking Mitka in my meadow." you tell her sternly, "I want to know what is so special about his dick that you would exchange it for our friendship."');
    scene.text('Mira gasps in shock from the sting in your words and jumps to her feet. She stares at you, stupified, and you can see the protest welling up in her, but you don\'t give her time to recover.');
    scene.text('"If you want us to stay friends, you had better stick to the deal, and if you can\'t keep your word, then our friendship is over," you state, glaring at her angrily.');
    scene.text('Mira\'s eyes fill with tears, and she blushes deeply. Then, hesitantly, she shifts from foot to foot before you, unable to say anything. Finally, you decide to up the ante, and you turn away from her and start to leave…');
    scene.text('"Wait!" Mira cries, reaching out to you, "Stop, please don\'t go!" but you pretend to ignore her and keep moving away.');
    scene.text('Mira hesitates for a moment, then rushes after you. She catches up with you red-faced, grabs you by the hand, and pulls you behind a rickety shed.');
    scene.actions([
      { label: 'Go for it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mirawish1.jpg');
    scene.text('Mentally exulting over your victory, you allow Mira to drag you behind the shed. She stops and turns to you, her face filled with anger and shame. Mira searches your face for a few seconds, hoping you will relent until she sees that you meant what you said. She stomps her feet a few times on the ground in frustration, and then, with a heavy sigh, she starts to remove her panties.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    ((s as any).MiraVars ?? {})['QW'] = 4;
    ((s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mirawish1_1.jpg');
    scene.text('Taking off her panties, Mira turns her ass to you and lifts up her skirt as she bends low. You smile broadly and, in an indifferent voice, order her to pull her ass cheeks apart. Mira reluctantly fulfils your requirement. You then ask her what she felt as she fucked with Mitka in the meadow. Mira tries to straighten, but you place a restraining hand on her back and tell her that your wishes will be humiliating punishments for her. Over the next five minutes, you rub Mira\'s buttocks as she tells you in detail what she felt when she fucked Mitka…');
    scene.text('Finally, you tell her that you do not feel she has fully atoned for her actions and this was only part of your first wish, but further punishments will have to wait for another time.');
    scene.actions([
      { label: 'Turn around and walk away', goto: ['miroslava', 'leave'] },
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
    scene.actions([
      { label: 'Tell her that you want to watch as Mitka fucks her in the ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    ((s as any).MiraVars ?? {})['QW'] = 5;
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira3.jpg');
    scene.text('You say you want to see Mitka fuck her ass because she told him your secret. Mira jumps to her feet from the suggestion and just looks at you. Still, you don\'t give her time to recover and continue to emphasize further, Recalling that a deal is a deal, and if your word doesn\'t matter, our friendship will end. Mira blushes and hesitantly shifts from foot to foot. Finally, you decide to go for broke, turn around and start to leave…');
    scene.text(' - Wait, so it\'s screaming at you in the back of Mira, but you pretend to not notice and go on.');
    // TODO-QSP: dynamic text:  - Well, <<$pcs_nickname>>, - after a couple of seconds until you hear a hysteri...
    scene.text(` - Well, ${((s as any).pcs_nickname ?? 0)}, - after a couple of seconds until you hear a hysterical scream from Mira, I'll think of something!`);
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).MiraVars ?? 0)?.['QW'] === 4  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)) {
          qspCall(s, 'stat', '');
          scene.img('images/characters/gadukino/mira/miraqw4a.jpg');
          scene.actions([
            { label: 'Remind her that she has not atoned for bringing Mitka to the meadow', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/miraqw4b.jpg');
    scene.text('You remind Mira that you are still unsatisfied with her atonement, and she asks you what you want her to do.');
    scene.actions([
      { label: 'Tell her that you want to watch as Mitka fucks her in the ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    ((s as any).MiraVars ?? {})['QW'] = 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira3.jpg');
    scene.text('You tell her that what you want to see is Mitka fucking her in the ass. Mira jumps to her feet in shock and looks at you with disbelief. But you don\'t give her time to recover and continue to speak, emphasizing the deal she made with you, and if she can\'t uphold her end, then your friendship is at an end. Miroslava deeply blushes and hesitantly shifts from foot to foot, watching you. Finally, after a few seconds of silence, you nod your head, turn around, and start to leave…');
    scene.text('Mira shouts at you to stop, but you pretend to not hear her and keep walking on.');
    // TODO-QSP: dynamic text: "Fine, <<$pcs_nickname>>, you win," Mira states loud enough for you to hear. She...
    scene.text(`"Fine, ${((s as any).pcs_nickname ?? 0)}, you win," Mira states loud enough for you to hear. She is on the verge of hysteria, eyes watering and nose running. Mira nearly screams, "I, I'll figure something out!"`);
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).MiraVars ?? 0)?.['QW'] === 6) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
            if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
              qspCall(s, 'miroslava', 'mira_river');
            } else {
              qspCall(s, 'miroslava', 'miraclothes');
            }
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Tell her that the first wish has been completed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    ((s as any).MiraVars ?? {})['QW'] = 7;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira3.jpg');
    scene.text('You tell Mira that you have now seen Mitka fuck her in the ass. Maliciously you ask, does she like having her ass fucked? To your surprise, Mira responds that she does like it a bit. You are slightly disappointed because this was supposed to be a punishment. Remind her that she still has two wishes to fulfil. Once they are all fulfilled, she will have satisfied her debt to you. Mira nods and says she is ready to redeem your wishes upon demand. You think it over for several moments before walking away…');
    scene.actions([
      { label: 'Leave', goto: ['miroslava', 'leave'] },
    ]);
  } },
            ]);
          } else {
            if ((((s as any).npc_QW ?? 0)?.['A63'] > 0  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 13)  &&  ((s as any).npc_rel ?? 0)?.['A60'] < 50) {
              qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
            }
            if (((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 15  &&  ((s as any).npc_rel ?? 0)?.['A60'] < 50) {
              qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
            }
            if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)) {
              ((s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
              ((s as any).MiraVars ?? {})['emb_day'] = (((s as any).MiraVars ?? {})['emb_day'] ?? 0) - (1);
            }
            if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
              qspCall(s, 'miroslava', 'mira_river');
            } else {
              qspCall(s, 'miroslava', 'miraclothes');
            }
            qspCall(s, 'stat', '');
            if (((s as any).MiraVars ?? 0)?.['QW'] < 3  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 11) {
              scene.text('You have ten minutes of fun talking about all sorts of trivia.');
            } else {
              if (((s as any).MiraVars ?? 0)?.['QW'] < 16  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 11) {
                scene.text('You spend ten minutes talking about trivia. Mira can\'t seem to focus and barely looks you in the eyes. She seems distracted by other thoughts.');
              } else {
                if (((s as any).MiraVars ?? 0)?.['QW'] < 20  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 11) {
                  scene.text('You spend ten minutes talking about trivia, and you often refer to Mira as a whore, but she just pretends not to hear.');
                } else {
                  if (((s as any).MiraVars ?? 0)?.['QW'] >= 20  &&  ((s as any).npc_QW ?? 0)?.['A63'] < 11) {
                    scene.text('You spend ten minutes talking about trivia, but Mira isn\'t listening. Instead, all she wants to talk about is sex.');
                  } else {
                    scene.text('You have ten minutes of fun talking about all sorts of trivia.');
                  }
                }
              }
            }
            scene.actions([
              { label: 'Finish', goto: ['miroslava', 'leave'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiraclothes(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Mira</b></center>');
  if (((s as any).MiraVars ?? 0)?.['QW'] === 0) {
    scene.img('images/characters/gadukino/mira/mira.jpg');
  } else {
    if (((s as any).MiraVars ?? 0)?.['QW'] > 0  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 4) {
      scene.img('images/characters/gadukino/mira/mira3.jpg');
    } else {
      if (((s as any).MiraVars ?? 0)?.['QW'] >= 4  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 8) {
        scene.img('images/characters/gadukino/mira/mira0,\'+rand(0, 5)+\'.jpg');
      } else {
        if (((s as any).MiraVars ?? 0)?.['QW'] >= 8  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 12) {
          scene.img('images/characters/gadukino/mira/mira1,\'+rand(0, 2)+\'.jpg');
        } else {
          if (((s as any).MiraVars ?? 0)?.['QW'] >= 12  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 20) {
            scene.img('images/characters/gadukino/mira/mira2,\'+rand(0, 5)+\'.jpg');
          } else {
            if (((s as any).MiraVars ?? 0)?.['QW'] >= 20) {
              scene.img('images/characters/gadukino/mira/mira3,\'+rand(0, 3)+\'.jpg');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiraRiver(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/mirarivertalk.jp...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/gadukino/mira/mirarivertalk.jpg"></center>`);
  }
  if (((s as any).PSwim ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/mirarivertalkbik...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/gadukino/mira/mirarivertalkbikini.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/gadukino/mira/mirarivernudetal...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/gadukino/mira/mirarivernudetalk.jpg"></center>`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cattle_chore_acts':
      enterCattleChoreActs(s, scene);
      break;
    case 'walk_together':
      enterWalkTogether(s, scene);
      break;
    case 'offer_go_meadow':
      enterOfferGoMeadow(s, scene);
      break;
    case 'offer_drink_boys':
      enterOfferDrinkBoys(s, scene);
      break;
    case 'offer_steam_bath':
      enterOfferSteamBath(s, scene);
      break;
    case 'offer_go_river':
      enterOfferGoRiver(s, scene);
      break;
    case 'offer_go_forest':
      enterOfferGoForest(s, scene);
      break;
    case 'wear_stripped_clothes':
      enterWearStrippedClothes(s, scene);
      break;
    case 'guest_acts':
      enterGuestActs(s, scene);
      break;
    case 'third_wish':
      enterThirdWish(s, scene);
      break;
    case 'miratalk':
      enterMiratalk(s, scene);
      break;
    case 'miraclothes':
      enterMiraclothes(s, scene);
      break;
    case 'mira_river':
      enterMiraRiver(s, scene);
      break;
    case 'leave':
      enterLeave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const miroslava: LocationDef = {
  name: 'miroslava',
  title: 'Mira is a sociable girl the same age as you. She lives with ',
  region: 'other',
  description: ['Mira is a sociable girl the same age as you. She lives with her father, who recently moved in here because of his considerable debts to some disreputable men in the city. He had to sell all the family\'s property, including an apartment in the city center. With the money left over, they could only afford to buy a house in a rundown village like this one.'],
  enter: enter,
};
