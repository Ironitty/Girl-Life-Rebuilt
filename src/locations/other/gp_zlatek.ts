import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/grandparents/grandpa.jpg');
  scene.text('Your grandfather is a grumpy old man who is always complaining about the village elders and how they have neglected the village to barely being fit to live in. He can walk but requires a cane. So he doesn\'t leave the house anymore unless he really has to.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('Grandpa looks shocked, but it doesn\'t stop him from having a good look at you.');
    // TODO-QSP: dynamic text: "My God, <<$pcs_nickname>>! Are you trying to give me a heart attack? Go and put...
    scene.text(`"My God, ${((s as any).pcs_nickname ?? '')}! Are you trying to give me a heart attack? Go and put some clothes on!"`);
    scene.actions([
{ label: 'Maybe you should get dressed before talking to him', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  }
  if (((s as any).grigory_flower ?? 0) > 0  &&  ((s as any).grigory_flower ?? 0) < 10) {
    scene.actions([
      { label: 'Talk to him about the flowers', goto: ['grigory', 'flower3'] },
    ]);
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] === 1) {
    // TODO-QSP: dynamic text: You promised to bring grandpa <<grandpaQW[''chore_mushroom_quantity'']>> kg of m...
    scene.text(`You promised to bring grandpa ${((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] ?? ''} kg of mushrooms.`);
  } else {
    if (((s as any).grandpaQW ?? 0)?.['chore_gather_berries'] === 1) {
      // TODO-QSP: dynamic text: You promised to bring grandpa <<grandpaQW[''chore_berry_quantity'']>> kg of berr...
      scene.text(`You promised to bring grandpa ${((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] ?? ''} kg of berries.`);
    } else {
      if (((s as any).grandpaQW ?? 0)?.['chore_gather_both'] === 1) {
        // TODO-QSP: dynamic text: You promised to bring grandpa <<grandpaQW[''chore_mushroom_quantity'']>> kg mush...
        scene.text(`You promised to bring grandpa ${((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] ?? ''} kg mushrooms and ${((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] ?? ''} kg of berries.`);
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportChoresActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetRandomChoreAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetTalkActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him alone', goto: ['gp_zlatek', 'return'] },
  ]);
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A32_loc'] !== 'gad_gphouse') {
    dynamicGoto(s, (((s as any).locat ?? {}))['A32_loc'], (((s as any).locat ?? {}))['A32_arg']);
  } else {
    if (((s as any).locat ?? 0)?.['A32_arg'] === 'gp_room') {
      qspGoto(s, 'gad_gphouse', 'main');
    } else {
      qspGoto(s, 'gad_gphouse', (((s as any).locat ?? {})['A32_arg']));
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetTalkActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['talked_about_forest'] === 0) {
    scene.actions([
      { label: 'Ask about the forest (0:10)', handler: (st: GameState) => {
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['talked_about_forest'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).goforest = ((st as any).goforest ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    // TODO-QSP: dynamic text: "Listen carefully, <<$pcs_nickname>>. You want to explore the forest, and that''...
    scene.text(`"Listen carefully, ${((st as any).pcs_nickname ?? '')}. You want to explore the forest, and that's great. But be sure of your surroundings. Without having any knowledge of the forest, you may easily get lost. Don't explore too deep in the forest because mushrooms and berries can be found at the forest's edge. If you choose to explore the forest, you'll find a swamp in the middle of the forest. You can find mushrooms and berries there too… Going into the forest at night is not recommended. Wild boars may attack, and you might end up really hurt."`);
    scene.text('"If you manage to get lost and can\'t find your way out of the forest before it gets dark, then light a fire and sit still until morning. The beasts in the forest are afraid of the fire, so they won\'t approach you."');
    scene.text('"There\'s one more thing… While you\'re in the woods, avoid dressing yourself up in fancy clothes. You might damage them. It\'s better to dress in more comfortable clothes instead…"');
    // TODO-QSP: dynamic text: "Well, I think that''s everything, <<$pcs_nickname>>, run along now and remember...
    scene.text(`"Well, I think that's everything, ${((st as any).pcs_nickname ?? '')}, run along now and remember what I've told you."`);
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  if (24 * (((s as any).daystart ?? 0) - ((s as any).grandpaQW ?? 0)?.['last_day_talked']) + (((s as any).hour ?? 0) - ((s as any).grandpaQW ?? 0)?.['last_hour_talked']) >= 3) {
    scene.actions([
      { label: 'Chat with your grandfather (0:10)', handler: (st: GameState) => {
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['last_hour_talked'] = ((st as any).hour ?? 0);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['last_day_talked'] = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('Your grandfather stops complaining and smiles at you. He loves telling stories. He has lived a rich and eventful life, and you enjoy listening to his stories and talking to him. He mostly reminisces about his past and reflects on his earlier life.');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetRandomChoreAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['last_day_helped'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Offer to help', handler: (st: GameState) => {
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['last_day_helped'] = ((st as any).daystart ?? 0);
    (st as any).frost = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to your grandfather and ask if he needs any help. Grandpa thinks for a moment and says:');
    if (((st as any).month ?? 0) <= 4  ||  ((st as any).month ?? 0) >= 10) {
      ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_type'] = (Math.floor(Math.random() * 6) + 0);
    } else {
      if (((st as any).month ?? 0) === 5) {
        ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_type'] = (Math.floor(Math.random() * 6) + 3);
      } else {
        if (((st as any).month ?? 0) >= 6  &&  ((st as any).month ?? 0) <= 9) {
          ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_type'] = (Math.floor(Math.random() * 12) + 3);
        }
      }
    }
    if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 0) {
      qspGoto(st, 'gp_zlatek', 'chore_fetchfirewood');
    } else {
      if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 1) {
        qspGoto(st, 'gp_zlatek', 'chore_feedhorse');
      } else {
        if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 2) {
          qspGoto(st, 'gp_zlatek', 'chore_feedcow');
        } else {
          if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 3) {
            qspGoto(st, 'gp_zlatek', 'chore_cleanyard');
          } else {
            if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 4) {
              qspGoto(st, 'gp_zlatek', 'chore_brushhorse');
            } else {
              if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 5) {
                qspGoto(st, 'gp_zlatek', 'chore_feedboar');
              } else {
                if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 6  &&  ((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 9) {
                  qspGoto(st, 'gp_zlatek', 'chore_leadhorsetofield');
                } else {
                  if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 7  &&  ((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 9) {
                    qspGoto(st, 'gp_zlatek', 'chore_leadcowtofield');
                  } else {
                    if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 8  &&  ((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 9) {
                      qspGoto(st, 'gp_zlatek', 'chore_herdcattle');
                    } else {
                      if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 9  &&  ((st as any).temper ?? 0) >= 15  &&  ((st as any).sunWeather ?? 0) === 1  &&  ((st as any).week ?? 0) > 5  &&  qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
                        qspGoto(st, 'gp_zlatek', 'chore_bathehorse');
                      } else {
                        if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 10  &&  ((st as any).boletus_stored ?? 0) <= 18) {
                          qspGoto(st, 'gp_zlatek', 'chore_gathermushrooms');
                        } else {
                          if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 11  &&  ((st as any).bilberry_stored ?? 0) <= 18) {
                            qspGoto(st, 'gp_zlatek', 'chore_gatherberries');
                          } else {
                            if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 12  &&  ((((st as any).boletus_stored ?? 0) + ((st as any).bilberry_stored ?? 0)) <= 16)) {
                              qspGoto(st, 'gp_zlatek', 'chore_gatherboth');
                            } else {
                              if (((st as any).grandpaQW ?? 0)?.['chore_type'] === 13  &&  ((st as any).temper ?? 0) >= 15  &&  ((st as any).sunWeather ?? 0) === 1  &&  ((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 9) {
                                qspGoto(st, 'gp_zlatek', 'chore_balehay');
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((st as any).hour ?? 0) >= 9) {
      (st as any).randmsg = (Math.floor(Math.random() * 6) + 0);
      if ((!((st as any).randmsg ?? 0))) {
        // TODO-QSP: dynamic text: "You can rest today <<$pcs_nickname>>, you don''t need to help me today."
        scene.text(`"You can rest today ${((st as any).pcs_nickname ?? '')}, you don't need to help me today."`);
      } else {
        if (((st as any).randmsg ?? 0) === 1) {
          scene.text('"You can rest today child, there is nothing to do."');
        } else {
          if (((st as any).randmsg ?? 0) === 2) {
            // TODO-QSP: dynamic text: "You can rest today <<$pcs_nickname>>, there is nothing to do."
            scene.text(`"You can rest today ${((st as any).pcs_nickname ?? '')}, there is nothing to do."`);
          } else {
            if (((st as any).randmsg ?? 0) === 3) {
              // TODO-QSP: dynamic text: "There''s no work today <<$pcs_nickname>>, go and rest up."
              scene.text(`"There's no work today ${((st as any).pcs_nickname ?? '')}, go and rest up."`);
            } else {
              if (((st as any).randmsg ?? 0) === 4) {
                scene.text('"You can rest today my dear granddaughter."');
              } else {
                scene.text('"You can take the day off to rest up."');
              }
            }
          }
        }
      }
    } else {
      (st as any).randmsg = (Math.floor(Math.random() * 2) + 0);
      if ((!((st as any).randmsg ?? 0))) {
        // TODO-QSP: dynamic text: "You don''t need to help out today, <<$pcs_nickname>>."
        scene.text(`"You don't need to help out today, ${((st as any).pcs_nickname ?? '')}."`);
      } else {
        scene.text('"You can take the day off."');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetReportChoresActs(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportFetchfirewoodAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportFeedhorseAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportFeedcowAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportCleanyardAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportBrushhorseAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportLeadhorsetofieldAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportBathehorseAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportFeedboarAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportLeadcowtofieldAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportGathermushroomsAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportGatherberriesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportGatherbothAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportBalehayAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCheckForChores(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'barn') {
    if (((s as any).grandpaQW ?? 0)?.['chore_fetch_firewood'] === 1) {
      scene.actions([
        { label: 'Gather firewood for Grandpa (0:10)', goto: ['gp_zlatek', 'event_fetchfirewood'] },
      ]);
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'barn_horse') {
      if (((s as any).grandpaQW ?? 0)?.['chore_feed_horse'] === 1) {
        scene.actions([
          { label: 'Feed the horse (0:30)', goto: ['gp_zlatek', 'event_feedhorse'] },
        ]);
      }
      if (((s as any).grandpaQW ?? 0)?.['chore_lead_horse_to_field'] === 1) {
        scene.actions([
          { label: 'Lead the horse to the field (1:00)', goto: ['gp_zlatek', 'event_leadhorsetofield'] },
        ]);
      }
      if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse'] === 1) {
        scene.actions([
          { label: 'Lead the horse to the river (0:30)', goto: ['gp_zlatek', 'event_bathehorse1'] },
        ]);
      } else {
        if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse'] === 2) {
          scene.actions([
            { label: 'Return back to your grandfather', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gp_zlatek', 'talk'] },
          ]);
        }
      }
      if (((s as any).grandpaQW ?? 0)?.['chore_brush_horse'] === 1) {
        scene.actions([
          { label: 'Groom the horse (1:00)', goto: ['gp_zlatek', 'event_brushhorse'] },
        ]);
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'barn_cow') {
        if (((s as any).grandpaQW ?? 0)?.['chore_feed_cow'] === 1) {
          scene.actions([
            { label: 'Feed the cow (0:30)', goto: ['gp_zlatek', 'event_feedcow'] },
          ]);
        }
        if (((s as any).grandpaQW ?? 0)?.['chore_lead_cow_to_field'] === 1) {
          scene.actions([
            { label: 'Lead the cow to the field (1:00)', goto: ['gp_zlatek', 'event_leadcowtofield'] },
          ]);
        }
        if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1) {
          scene.actions([
            { label: 'Lead the cow to the field (1:00)', goto: ['gp_zlatek', 'event_herdcattle1'] },
          ]);
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'boar') {
          if (((s as any).grandpaQW ?? 0)?.['chore_feed_boar'] === 1) {
            scene.actions([
              { label: 'Feed the hog (0:30)', goto: ['gp_zlatek', 'event_feedboar'] },
            ]);
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'beach') {
            if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse_prog'] === 1) {
              scene.actions([
                { label: 'Look at Desperado', goto: ['gp_zlatek', 'event_bathehorse2'] },
              ]);
            } else {
              if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse_prog'] === 2) {
                scene.actions([
                  { label: 'Lead Desperado back home (0:30)', goto: ['gp_zlatek', 'event_bathehorse3'] },
                ]);
              }
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'field') {
              if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).week ?? 0) < 6) {
                scene.text('Grandfather\'s horse <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_field/u0027, /u0027horse/u0027); return false;">Desperado</a> is grazing the field.');
              }
              if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 0) {
                scene.text('You notice a large <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_field/u0027, /u0027cow/u0027); return false;">herd of cows</a> in the middle of the field.');
              }
              if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1) {
                scene.text('You see the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_field/u0027, /u0027cow/u0027); return false;">herd of cows</a> out in the middle of the field.');
              }
              if (((s as any).grandpaQW ?? 0)?.['chore_bale_hay'] === 1) {
                if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 21) {
                  scene.text('You see a crowd of people working on the field.');
                }
                if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 14) {
                  scene.actions([
                    { label: 'Spend the day helping to bale hay (6:00)', goto: ['gp_zlatek', 'event_balehay'] },
                  ]);
                }
              }
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'field_horse') {
                if (((s as any).hour ?? 0) === 19) {
                  scene.actions([
                    { label: 'Lead the horse home (1:00)', goto: ['gp_zlatek', 'event_leadhorsehome'] },
                  ]);
                }
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'yard') {
                  if (((s as any).grandpaQW ?? 0)?.['chore_clean_yard'] === 1) {
                    scene.actions([
                      { label: 'Clean up the yard for Grandpa (1:00)', goto: ['gp_zlatek', 'event_cleanyard'] },
                    ]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreFetchfirewood(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_fetch_firewood'] = 1;
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you run out to the barn and bring firewood for the sto...
  scene.text(`"${((s as any).pcs_nickname ?? '')}, could you run out to the barn and bring firewood for the stove?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will go get some in just a bit', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to fetch firewood (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_fetch_firewood'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    qspCall(st, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandpa: fetch firewood', 7);
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) >= 4  &&  ((st as any).month ?? 0) <= 10) {
      scene.img('images/locations/gadukino/village/firewood.jpg');
    } else {
      scene.img('images/locations/gadukino/village/firewood_winter.jpg');
    }
    scene.text('You put on warm clothes and run to the barn to collect firewood.');
    scene.text('"I\'ve brought some firewood, grandfather," you said to your grandfather.');
    // TODO-QSP: dynamic text: "You are very quick, <<$pcs_nickname>>," he replies with a smile. "That''s today...
    scene.text(`"You are very quick, ${((st as any).pcs_nickname ?? '')}," he replies with a smile. "That's today's youth for ya. There is no more work today."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventFetchfirewood(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_fetch_firewood'] = 2;
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    scene.img('images/locations/gadukino/village/firewood.jpg');
  } else {
    scene.img('images/locations/gadukino/village/firewood_winter.jpg');
  }
  scene.text('You decide to grab the firewood that your grandfather asked for, loading up as much as you can carry.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpbarn', ''] },
    { label: 'Return back to your grandfather', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['gp_zlatek', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportFetchfirewoodAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_fetch_firewood'] === 2) {
    scene.actions([
      { label: 'Tell him you got the firewood', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_fetch_firewood'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('"I\'ve brought in some firewood, Grandpa," you say to your grandfather.');
    // TODO-QSP: dynamic text: "Thank you very much, <<$pcs_nickname>>," he replies with a smile. "Just set it ...
    scene.text(`"Thank you very much, ${((st as any).pcs_nickname ?? '')}," he replies with a smile. "Just set it down over there."`);
    scene.text('You put down the heavy wood gratefully. "Is there anything else you need?"');
    scene.text('"No, that is all I have for you today," he says.');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreFeedhorse(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_horse'] = 1;
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I need you to go to the barn and feed Desperado."
  scene.text(`"${((s as any).pcs_nickname ?? '')}, I need you to go to the barn and feed Desperado."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him that you will get to it in a little bit', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the barn (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) >= 4  &&  ((st as any).month ?? 0) <= 10) {
      scene.img('images/locations/gadukino/village/go_yard.jpg');
    } else {
      scene.img('images/locations/gadukino/village/go_yard_winter.jpg');
    }
    scene.text('You walk over to the barn where Desperado is kept.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', 'horse'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventFeedhorse(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_horse'] = 2;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/feed_horse.jpg');
  scene.text('You grab a sack of grain and fill Desperado\'s feed bucket. Then, you hang the bucket from his stall and gently pat his nose as he begins to eat.');
  scene.text('You watch him eat for a little while before moving on.');
  qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandpa: feed horse', 7);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpbarn', 'horse'] },
    { label: 'Return back to your grandfather', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gp_zlatek', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportFeedhorseAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_feed_horse'] === 2) {
    scene.actions([
      { label: 'Tell him you fed Desperado', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_feed_horse'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('"I fed the horse, Grandpa."');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>," he says. "It is imperative to make sure a horse ...
    scene.text(`"Thank you, ${((st as any).pcs_nickname ?? '')}," he says. "It is imperative to make sure a horse is well fed. They are hard workers and deserve their meals."`);
    scene.text('You smile in agreement. "I am sure Desperado is a very hard worker."');
    scene.text('"He may not be the young stallion he once was," your grandfather says, "but he is a trusted friend."');
    scene.text('He obviously cares a great deal about his horse.');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreLeadhorsetofield(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_lead_horse_to_field'] = 1;
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, take Desperado to the field. My legs hurt, so I need to rest...
  scene.text(`"${((s as any).pcs_nickname ?? '')}, take Desperado to the field. My legs hurt, so I need to rest for a bit. I'll retrieve the horse in the evening."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will do it soon', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the barn (0:10)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You walk over to the barn where Desperado is kept.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', 'horse'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventLeadhorsetofield(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_lead_horse_to_field'] = 2;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/horse_field.jpg');
  scene.text('You take Desperado by the bridle and lead him to the field. You let him free in the paddock area and watch him run about before moving on.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_field', 'field'] },
    { label: 'Return back to your grandfather (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['gp_zlatek', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportLeadhorsetofieldAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_lead_horse_to_field'] === 2) {
    scene.actions([
      { label: 'Tell him you took Desperado to the field', handler: (st: GameState) => {
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_lead_horse_to_field'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('"Hey, Grandpa, I took Desperado out to the field."');
    scene.text('"Good, good," he says. "Horses need the freedom to run."');
    scene.text('You nod. "He seemed pretty happy to be able to run around."');
    // TODO-QSP: dynamic text: Your grandfather smiles at that. "Thank you, <<$pcs_nickname>>. You can rest for...
    scene.text(`Your grandfather smiles at that. "Thank you, ${((st as any).pcs_nickname ?? '')}. You can rest for now."`);
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEventLeadhorsehome(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/village/horse_field.jpg');
  scene.text('You spot your grandfather\'s horse wandering loose in the field and decide to help by taking Desperado home. Reaching for the harness, you start leading Desperado towards the village.');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['help_amount'] = ((s as any).grandmaQW['help_amount'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 4) + 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_gpbarn', ''] },
  ]);
  scene.build();
}

function enterChoreBathehorse(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bathe_horse'] = 1;
  scene.text('"It\'s good weather today. Take Desperado to the river and give him a bath."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will do it in a little while', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the barn (0:10)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You walk over to the barn where Desperado is kept.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', 'horse'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventBathehorse1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bathe_horse_prog'] = 1;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/horse_field.jpg');
  scene.text('You take Desperado by the bridle and lead him to the river.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_beach', 'start'] },
  ]);
  scene.build();
}

function enterEventBathehorse2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/river/horse_river.jpg');
  scene.text('You see Desperado happily walking around in the river.');
  if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('You cannot wear regular clothes to wash Desperado.');
    scene.actions([
      { label: 'Return', goto: ['gad_beach', 'start', '1'] },
    ]);
  } else {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).npc_rel ?? 0)?.['A60'] > 0) {
      scene.actions([
        { label: 'Wash Desperado with Mira', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'npc_relationship', 'modify', 'A60', 1);
    (st as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    qspCall(st, 'mood', 'raise', 'tiny');
    if (((st as any).pcs_inhib ?? 0) < 50  ||  ((st as any).clothingworntype ?? 0) === 'nude') {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    }
    qspCall(st, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
    qspCall(st, 'cum_cleanup', '4');
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_bathe_horse_prog'] = 2;
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/characters/gadukino/mira/wash_horse_mira_nude.jpg');
    } else {
      if (((st as any).PSwim ?? 0) === 1) {
        scene.img('images/characters/gadukino/mira/wash_horse_mira_swim.jpg');
      }
    }
    scene.text('You invite Mira to wash Desperado with you; she agrees with nothing better to do.');
    scene.text('You swim over to Desperado and begin to splash water on him. You chat with Mira and sometimes splash her instead.');
    scene.text('After half an hour, you think Desperado looks cleaner than before and is ready to be taken back home.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'gad_beach', 'start', '1');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wash Desperado', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    qspCall(st, 'mood', 'raise', 'tiny');
    if (((st as any).pcs_inhib ?? 0) < 50  ||  ((st as any).clothingworntype ?? 0) === 'nude') {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    }
    qspCall(st, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
    qspCall(st, 'cum_cleanup', '4');
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_bathe_horse_prog'] = 2;
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/gadukino/river/wash_horse_nude.jpg');
    } else {
      if (((st as any).PSwim ?? 0) === 1) {
        scene.img('images/locations/gadukino/river/wash_horse_swim.jpg');
      }
    }
    scene.text('You jump in the river and swim over to Desperado. You take your time washing his beautiful chestnut coat.');
    scene.text('After half an hour, you are satisfied with your work, and Desperado is ready to be taken back home.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'gad_beach', 'start', '1');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEventBathehorse3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PSwim ?? 0) === 1) {
    scene.text('You need to dress in regular clothes first.');
    scene.actions([
      { label: 'Return', goto: ['gad_beach', 'start', '1'] },
    ]);
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('You need to put some clothes on first.');
      scene.actions([
        { label: 'Return', goto: ['gad_beach', 'start', '1'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 4) + 0));
      ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bathe_horse'] = 2;
      ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bathe_horse_prog'] = 0;
      qspCall(s, 'stat', '');
      qspGoto(s, 'gad_gpbarn', 'horse');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetReportBathehorseAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse'] === 2) {
    scene.actions([
      { label: 'Tell him you bathed Desperado', handler: (st: GameState) => {
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_bathe_horse'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to your grandfather and tell him, "I gave Desperado a bath in the river, Grandpa."');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>," he says. "Grooming him is all well and good, but...
    scene.text(`"Thank you, ${((st as any).pcs_nickname ?? '')}," he says. "Grooming him is all well and good, but sometimes it's not enough."`);
    scene.text('"You\'re welcome! It was actually a lot of fun. Is there anything else you need?"');
    scene.text('"No, you can take the rest of the day off, granddaughter."');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreBrushhorse(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_brush_horse'] = 1;
  // TODO-QSP: dynamic text: "Of course, <<$pcs_nickname>>, I need your help to groom Desperado."
  scene.text(`"Of course, ${((s as any).pcs_nickname ?? '')}, I need your help to groom Desperado."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will do it in a bit', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the barn (0:10)', handler: (st: GameState) => {
    if (((st as any).month ?? 0) >= 4  &&  ((st as any).month ?? 0) < 11) {
      scene.img('images/locations/gadukino/village/go_yard.jpg');
    } else {
      scene.img('images/locations/gadukino/village/go_yard_winter.jpg');
    }
    scene.text('You walk over to the barn where Desperado is kept.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', 'horse'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventBrushhorse(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_brush_horse'] = 2;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/comb_horse.jpg');
  scene.text('You spend about an hour cleaning and brushing Desperado, scrubbing his coat and brushing his mane and tail. Finally, you are satisfied with the result - he looks as clean and healthy as ever.');
  qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandpa: brush horse', 7);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpbarn', 'horse'] },
    { label: 'Return back to your grandfather', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gp_zlatek', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportBrushhorseAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_brush_horse'] === 2) {
    scene.actions([
      { label: 'Tell him you finished grooming Desperado', handler: (st: GameState) => {
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_brush_horse'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('"I brushed the horse, Grandpa," you tell your grandfather.');
    scene.text('"You scrubbed him down with the curry brush?" he asks.');
    scene.text('"Yes sir, I did," you say.');
    scene.text('"Even his belly?"');
    scene.text('"Yes, even his belly."');
    scene.text('"Did you wash his face and comb his mane and tail?"');
    scene.text('"Ugh, yes, Grandpa, I did everything just like you showed me when I was a kid."');
    // TODO-QSP: dynamic text: "Don''t sass me, <<$pcs_firstname>>," your grandfather says with a scowl. "Prope...
    scene.text(`"Don't sass me, ${((st as any).pcs_firstname ?? '')}," your grandfather says with a scowl. "Properly brushing a horse is very important for their health."`);
    scene.text('The rebuke stings a little. "Sorry, Grandpa."');
    // TODO-QSP: dynamic text: His face softens when he sees he upset you. "…no, child, I''m sorry. You did me ...
    scene.text(`His face softens when he sees he upset you. "…no, child, I'm sorry. You did me a favor, and here I am berating you for it. Thank you for brushing the horse, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('"It\'s okay, Grandpa. I know Desperado is important to you," you say.');
    scene.text('He smiles and rubs your shoulder. "Thank you again. You may rest now. There is nothing else to do today."');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreFeedcow(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_cow'] = 1;
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, go to the barn and feed the cow."
  scene.text(`"${((s as any).pcs_nickname ?? '')}, go to the barn and feed the cow."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him that you will do it in a little while', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the barn (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) >= 4  &&  ((st as any).month ?? 0) < 11) {
      scene.img('images/locations/gadukino/village/go_yard.jpg');
    } else {
      scene.img('images/locations/gadukino/village/go_yard_winter.jpg');
    }
    scene.text('You walk over to the barn where the cows are kept.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', 'cow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventFeedcow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_cow'] = 2;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/feed_cow.jpg');
  scene.text('Dawn is excited about feeding time, shaking her head and doing little cow tippy-taps with her feet. You dump some hay in her trough and watch as she digs in.');
  qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandpa: feed cow', 7);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpbarn', 'cow'] },
    { label: 'Return back to your grandfather', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gp_zlatek', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportFeedcowAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_feed_cow'] === 2) {
    scene.actions([
      { label: 'Tell him you fed Dawn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_feed_cow'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You tell your grandfather, "I fed Dawn her hay, Grandpa."');
    // TODO-QSP: dynamic text: "Excellent, <<$pcs_nickname>>," he says. "I presume she acted like we were starv...
    scene.text(`"Excellent, ${((st as any).pcs_nickname ?? '')}," he says. "I presume she acted like we were starving her to death?"`);
    scene.text('"Well, she was definitely excited," you say with a laugh.');
    scene.text('"She always is when it comes to eating," he says.');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreCleanyard(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_clean_yard'] = 1;
  // TODO-QSP: dynamic text: "Of course, <<$pcs_nickname>>, I need your help in the yard. Bring a garden tool...
  scene.text(`"Of course, ${((s as any).pcs_nickname ?? '')}, I need your help in the yard. Bring a garden tool with you."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him that you\'ll do it in a minute', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go clean up the yard (1:00)', goto: ['gp_zlatek', 'event_cleanyard'] },
  ]);
  scene.build();
}

function enterEventCleanyard(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_clean_yard'] = 2;
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) < 11) {
    (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 3) + 1));
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 10);
  } else {
    (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 5) + 1));
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (10);
    qspCall(s, 'sweat', 'add', 5);
    qspCall(s, 'exp_gain', 'stren', 1);
  }
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    scene.img('images/locations/gadukino/village/clean_yard1.jpg');
    scene.text('Armed with a rake, you begin cleaning the yard. You\'re pleased seeing the yard clean. You return the rake to the shed and continue on with your business.');
  } else {
    scene.img('images/locations/gadukino/village/clean_yard2.jpg');
    scene.text('Armed with a shovel, you begin clearing the yard of snow. You\'re pleased with yourself seeing the courtyard is free of snow. You return the shovel to the shed and continue on with your business.');
  }
  qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandpa: clean yard', 7);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpyard', 'start'] },
    { label: 'Return back to your grandfather', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gp_zlatek', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportCleanyardAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_clean_yard'] === 2) {
    scene.actions([
      { label: 'Tell him you cleaned up the yard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_clean_yard'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('"I finished cleaning the yard, Grandpa," you say as you stretch your sore arms.');
    scene.text('"Very good," he says. "It is more work than it seems, isn\'t it?"');
    scene.text('"Yes sir, it is," you agree. "Is there anything else you need me to do?"');
    // TODO-QSP: dynamic text: "No, that is all for today, <<$pcs_nickname>>."
    scene.text(`"No, that is all for today, ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreFeedboar(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_boar'] = 1;
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you go to the barn and feed the hog?"
  scene.text(`"${((s as any).pcs_nickname ?? '')}, could you go to the barn and feed the hog?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will get to it soon', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the barn (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) >= 4  &&  ((st as any).month ?? 0) < 11) {
      scene.img('images/locations/gadukino/village/go_yard.jpg');
    } else {
      scene.img('images/locations/gadukino/village/go_yard_winter.jpg');
    }
    scene.text('You walk over to the barn where the hogs are kept.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', 'boar'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventFeedboar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_boar'] = 2;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/feed_boar.jpg');
  scene.text('You grab the feed bag and fill Nickle\'s trough. You stand there and watch for a few minutes as he eats like a… well, like a pig.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpbarn', 'boar'] },
    { label: 'Return back to your grandfather', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gp_zlatek', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportFeedboarAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_feed_boar'] === 2) {
    scene.actions([
      { label: 'Tell him you fed Nickle', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_feed_boar'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to your grandfather and tell him, "I fed the pig, Grandpa."');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>," he says.
    scene.text(`"Thank you, ${((st as any).pcs_nickname ?? '')}," he says.`);
    scene.text('"You\'re welcome! Is there anything else you need?"');
    scene.text('"No, you can take the rest of the day off, granddaughter."');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreHerdcattle(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_herd_cattle'] = 1;
  if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle_experience'] === 0) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, we need to let the cows graze on the field today. So grab so...
    scene.text(`"${((s as any).pcs_nickname ?? '')}, we need to let the cows graze on the field today. So grab something to eat and lead the herd to the field. I'll meet you there."`);
  } else {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, it''s our turn to look out for the cows grazing on the field...
    scene.text(`"${((s as any).pcs_nickname ?? '')}, it's our turn to look out for the cows grazing on the field today. So grab something to eat quickly, and stop by the field where the herd is. I'll bring them back home."`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will meet him there', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the field (0:40)', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    if (((st as any).mc_inventory ?? 0)?.['food_water'] === 0) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_water'] = 1;
    }
    if (((st as any).mc_inventory ?? 0)?.['food_sandwich'] === 0) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_sandwich'] = 1;
    }
    qspCall(st, 'stat', '');
    if (((st as any).grandpaQW ?? 0)?.['chore_herd_cattle_experience'] === 0) {
      scene.img('images/locations/gadukino/village/go_yard.jpg');
      scene.text('You take a little nibble of a sandwich and go to the shed where the herd is. Your grandmother put a sandwich and a bottle of water in the bag for lunch.');
    } else {
      scene.img('images/locations/gadukino/village/cow_go_field.jpg');
      scene.text('You have a quick bite and go to the field where the village herd is. Your grandmother put a sandwich and a bottle of water in the bag for lunch.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'cow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventHerdcattle1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/cow_field.jpg');
  scene.text('You lead Dawn to the field, where your grandfather awaits you. It\'s his turn to keep an eye on the cows..');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_field', 'cow'] },
  ]);
  scene.build();
}

function enterChoreLeadcowtofield(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_lead_cow_to_field'] = 1;
  // TODO-QSP: dynamic text: "I have sore feet today, <<$pcs_nickname>>. My dear granddaughter, could you lea...
  scene.text(`"I have sore feet today, ${((s as any).pcs_nickname ?? '')}. My dear granddaughter, could you lead the cow to the field and tell the herders to drive her home at the end of the day?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will soon', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the barn (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You walk over to the barn where the cows are kept.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', 'cow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventLeadcowtofield(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/cow_field.jpg');
  if (((s as any).grandpaQW ?? 0)?.['chore_lead_cow_to_field'] === 1) {
    scene.text('You lead Dawn to the field, where you let the shepherds take over.');
    ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_lead_cow_to_field'] = 2;
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1) {
    scene.text('You lead Dawn to the field, where your grandfather awaits you. It\'s his turn to keep an eye on the cows..');
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_lead_cow_to_field'] === 2) {
    qspGoto(s, 'gp_zlatek', 'talk');
    scene.actions([
      { label: 'Return back to your grandfather (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_field', 'cow'] },
  ]);
  scene.build();
}

function enterSetReportLeadcowtofieldAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_lead_cow_to_field'] === 2) {
    scene.actions([
      { label: 'Tell him you took Dawn to the field', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_lead_cow_to_field'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('"Hi, Grandpa!" you say. "I took Dawn out to the field."');
    scene.text('"Were the others there?" he asks.');
    scene.text('You nod. "Yes, sir. I asked them to drive her home later - they seemed fine with that."');
    scene.text('"Yes, here in the country, we all must help one another. Soon it will be our turn to watch the cattle."');
    scene.text('"All of them? For the whole village? Just us?" you ask incredulously.');
    scene.text('"No child, there will be a few others with us. But don\'t look so surprised - it does not take many people to herd cows."');
    scene.text('You think of the stories you have heard of a few herders driving thousands of cattle. "Hmm, I guess that\'s true…"');
    scene.text('Your grandfather smiles and ruffles your hair. "But that is not a problem for today. Go and take the rest of the day off."');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreGathermushrooms(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_mushrooms'] = 1;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_mushroom_quantity'] = (Math.floor(Math.random() * 2) + 1);
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you go to the forest and pick mushrooms? I''m craving ...
  scene.text(`"${((s as any).pcs_nickname ?? '')}, could you go to the forest and pick mushrooms? I'm craving fried mushrooms."`);
  scene.text('"How much should I pick, grandpa?" you ask.');
  // TODO-QSP: dynamic text: "<<grandpaQW[''chore_mushroom_quantity'']>> kilos will be enough," grandfather r...
  scene.text(`"${((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] ?? ''} kilos will be enough," grandfather replies. "Be careful so you don't get lost."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will go get some soon', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the forest (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    if (((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/gadroad.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadroad_night.jpg');
    }
    scene.text('You agree to help your grandfather, grabbing a basket and setting out on the road to the forest.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetReportGathermushroomsAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] === 2  &&  ((s as any).boletus ?? 0) >= ((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
    if (((s as any).grandpaQW ?? 0)?.['disappointment'] === 2) {
      scene.actions([
        { label: 'Give him the mushrooms he asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).boletus = ((st as any).boletus ?? 0) - (((st as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (((st as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['disappointment'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_mushroom_quantity'] = 0;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_gather_mushrooms'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to Grandpa with your basket.');
    scene.text('"Grandpa, here are the mushrooms!"');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>, you''ve made an old man happy," your grandfather ...
    scene.text(`"Thank you, ${((st as any).pcs_nickname ?? '')}, you've made an old man happy," your grandfather replies with a smile. "The mushrooms are in a part of the forest that is difficult to reach, so no wonder it took you so long."`);
    scene.text('"I can still go and gather more mushrooms if you want?"');
    // TODO-QSP: dynamic text: "There''s no need <<$pcs_nickname>>," said your grandfather. "But if I need some...
    scene.text(`"There's no need ${((st as any).pcs_nickname ?? '')}," said your grandfather. "But if I need some help, I'll let you know. They will have to go down in the root cellar until your grandmother is ready to can them."`);
    scene.text('You kiss your grandfather on the cheek and get on with your day.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give him the mushrooms he asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).boletus = ((st as any).boletus ?? 0) - (((st as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (((st as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_mushroom_quantity'] = 0;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_gather_mushrooms'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to Grandpa with your basket.');
    scene.text('"Grandpa, here are the mushrooms!"');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>, you''ve made an old man very happy," your grandfa...
    scene.text(`"Thank you, ${((st as any).pcs_nickname ?? '')}, you've made an old man very happy," your grandfather replies with a smile. "The mushrooms are in a part of the forest that is difficult to reach."`);
    scene.text('"I can still go and gather more mushrooms if you want?"');
    // TODO-QSP: dynamic text: "There''s no need, <<$pcs_nickname>>," said your grandfather. "But if I need som...
    scene.text(`"There's no need, ${((st as any).pcs_nickname ?? '')}," said your grandfather. "But if I need some help, I'll let you know. They will have to go down in the root cellar until your grandmother is ready to can them."`);
    scene.text('You kiss your grandfather on the cheek and get on with your day.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreGatherberries(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_berries'] = 1;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_berry_quantity'] = (Math.floor(Math.random() * 2) + 1);
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you go to the forest to pick some berries? Grandma wan...
  scene.text(`"${((s as any).pcs_nickname ?? '')}, could you go to the forest to pick some berries? Grandma wants to make homemade fruit jam."`);
  scene.text('"How much should I pick, grandpa?" you ask.');
  // TODO-QSP: dynamic text: "<<grandpaQW[''chore_berry_quantity'']>> kilos will be enough," grandfather repl...
  scene.text(`"${((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] ?? ''} kilos will be enough," grandfather replies. "Just be careful so you don't get lost."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will go get some soon', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the forest (1:00)', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/gadroad.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadroad_night.jpg');
    }
    scene.text('You agree to help your grandfather, grabbing a basket and setting out on the road to the forest.');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetReportGatherberriesAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_gather_berries'] === 2  &&  ((s as any).bilberry ?? 0) >= ((s as any).grandpaQW ?? 0)?.['chore_berry_quantity']  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
    if (((s as any).grandpaQW ?? 0)?.['disappointment'] === 2) {
      scene.actions([
        { label: 'Give him the berries he asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (((st as any).grandpaQW ?? 0)?.['chore_berry_quantity']);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (((st as any).grandpaQW ?? 0)?.['chore_berry_quantity']);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['disappointment'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_berry_quantity'] = 0;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_gather_berries'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to Grandpa with your basket.');
    scene.text('"Grandpa, here are the berries!"');
    scene.text('"Oh, thank you, I thought I asked for these yesterday," Grandpa replied. "It\'s hard to keep track of things as you get older, just as it is for your grandmother to gather the berries, and she needs them so she can make jam for the winter."');
    scene.text('"If you need some more berries, I\'ll be glad to go out and gather more."');
    // TODO-QSP: dynamic text: There''s no need, <<$pcs_nickname>>," your grandfather said. "But if your grandm...
    scene.text(`There's no need, ${((st as any).pcs_nickname ?? '')}," your grandfather said. "But if your grandma needs some more berries, I'll let you know. They will have to go down in the root cellar until your grandmother is ready to can them."`);
    scene.text('You kiss your grandfather on the cheek and go on with your business.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give him the berries he asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (((st as any).grandpaQW ?? 0)?.['chore_berry_quantity']);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (((st as any).grandpaQW ?? 0)?.['chore_berry_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_berry_quantity'] = 0;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_gather_berries'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to Grandpa with your basket.');
    scene.text('"Grandpa, here are the berries!"');
    scene.text('"Oh, thank you, nicely done," Grandpa replied. "It\'s hard for your grandmother to gather the berries, and she needs them so she can make jam for the winter."');
    scene.text('"If you need some more berries, I\'ll be glad to go out and gather more."');
    // TODO-QSP: dynamic text: "There''s no need <<$pcs_nickname>>," your grandfather said. "But if your grandm...
    scene.text(`"There's no need ${((st as any).pcs_nickname ?? '')}," your grandfather said. "But if your grandma needs some more berries, I'll let you know. They will have to go down in the root cellar until your grandmother is ready to can them."`);
    scene.text('You kiss your grandfather on the cheek and go on with your business.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreGatherboth(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_both'] = 1;
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_mushroom_quantity'] = (Math.floor(Math.random() * 2) + 1);
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_berry_quantity'] = (Math.floor(Math.random() * 2) + 1);
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, can you go to the forest and pick some berries and mushrooms...
  scene.text(`"${((s as any).pcs_nickname ?? '')}, can you go to the forest and pick some berries and mushrooms? Your grandmother wants to make a mushroom soup, and I am craving some fresh berries."`);
  scene.text('"How much should I pick, grandpa?"');
  // TODO-QSP: dynamic text: "<<grandpaQW[''chore_mushroom_quantity'']>> kilos of mushrooms and <<grandpaQW['...
  scene.text(`"${((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] ?? ''} kilos of mushrooms and ${((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] ?? ''} kilos of berries will be enough," grandfather replies. "Just don't get lost."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will go get some soon', goto: ['gp_zlatek', 'talk'] },
    { label: 'Agree and go to the forest (1:00)', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/gadroad.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadroad_night.jpg');
    }
    scene.text('You agree to help your grandfather, grabbing a basket and setting out on the road to the forest.');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetReportGatherbothAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_gather_both'] === 2  &&  ((s as any).boletus ?? 0) >= ((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']  &&  ((s as any).bilberry ?? 0) >= ((s as any).grandpaQW ?? 0)?.['chore_berry_quantity']  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
    if (((s as any).grandpaQW ?? 0)?.['disappointment'] === 2) {
      scene.actions([
        { label: 'Give him the mushrooms and berries he asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).boletus = ((st as any).boletus ?? 0) - (((st as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (((st as any).grandpaQW ?? 0)?.['chore_berry_quantity']);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (((st as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (((st as any).grandpaQW ?? 0)?.['chore_berry_quantity']);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['disappointment'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_berry_quantity'] = 0;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_mushroom_quantity'] = 0;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_gather_both'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to Grandpa with your basket.');
    scene.text('"Grandpa, here are the mushrooms and berries!"');
    // TODO-QSP: dynamic text: "Oh, thank you, <<$pcs_nickname>>, better late than never," your grandfather rep...
    scene.text(`"Oh, thank you, ${((st as any).pcs_nickname ?? '')}, better late than never," your grandfather replied.`);
    scene.text('"If you want, I can go out for another run."');
    // TODO-QSP: dynamic text: "You don''t need to do that, <<$pcs_nickname>>," your grandfather said. "But I''...
    scene.text(`"You don't need to do that, ${((st as any).pcs_nickname ?? '')}," your grandfather said. "But I'll let you know if something comes up. They will have to go down in the root cellar until your grandmother is ready to can them."`);
    scene.text('You give him a smooch on the cheek and go on with your day.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give him the mushrooms and berries he asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).boletus = ((st as any).boletus ?? 0) - (((st as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (((st as any).grandpaQW ?? 0)?.['chore_berry_quantity']);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (((st as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (((st as any).grandpaQW ?? 0)?.['chore_berry_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_berry_quantity'] = 0;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_mushroom_quantity'] = 0;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_gather_both'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('You walk up to Grandpa with your basket.');
    scene.text('"Grandpa, here are the mushrooms and berries!"');
    // TODO-QSP: dynamic text: "Oh, thank you, <<$pcs_nickname>>," your grandfather replied.
    scene.text(`"Oh, thank you, ${((st as any).pcs_nickname ?? '')}," your grandfather replied.`);
    scene.text('"If you want, I can go out for another run."');
    // TODO-QSP: dynamic text: "You don''t need to do that, <<$pcs_nickname>>," your grandfather said. "But I''...
    scene.text(`"You don't need to do that, ${((st as any).pcs_nickname ?? '')}," your grandfather said. "But I'll let you know if something comes up. They will have to go down in the root cellar until your grandmother is ready to can them."`);
    scene.text('You give him a smooch on the cheek and go on with your day.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreBalehay(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bale_hay'] = 1;
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, we need to help with baling hay today, so we have to go to t...
  scene.text(`"${((s as any).pcs_nickname ?? '')}, we need to help with baling hay today, so we have to go to the field to meet the others."`);
  scene.text('"Okay, grandfather," you replied.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you will head over there soon', goto: ['gp_zlatek', 'talk'] },
    { label: 'Grab a rake and head to the field (0:40)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/go_gadfield.jpg');
    scene.text('With the rake in your hand, you meet up with the other local residents at the field.');
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventBalehay(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 300;
  if (((s as any).sunWeather ?? 0) === 1) {
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
  }
  qspCall(s, 'food', 'medium_meal_stats');
  qspCall(s, 'exercise', 'tier1', 60, 'stren', 'vital');
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 9) + 0));
  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bale_hay'] = 2;
  qspCall(s, 'stat', '');
  if (((s as any).npc_rel ?? 0)?.['A60'] >= 15  &&  ((s as any).npc_known ?? 0)?.['A60'] === 1) {
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    scene.img('images/characters/gadukino/mira/haying_time_mira.jpg');
    scene.text('Most of the village has shown up to help out with the hay. Mira is there too, and you both partake in the activities. You enjoy yourself, and working alongside Mira makes the day fly by. By the end of the day, you are both exhausted but smiling.');
  } else {
    scene.img('images/locations/gadukino/village/haying_time.jpg');
    scene.text('Almost all the villagers have shown up to help with the fresh-cut hay. You spend most of the day working hard and sweating as you help gather the fresh-cut hay. It is difficult, but you get a great workout and end the day feeling exhausted but immensely satisfied.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_field', 'field'] },
    { label: 'Return back to your grandfather (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['gp_zlatek', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportBalehayAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_bale_hay'] === 2) {
    scene.actions([
      { label: 'Tell him you helped the townspeople bale hay', handler: (st: GameState) => {
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).grandpaQW = (st as any).grandpaQW ?? {})['chore_bale_hay'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big31.jpg');
    scene.text('"I spent all day helping with the hay, Grandpa," you tell him, stretching your sore muscles.');
    // TODO-QSP: dynamic text: He smiles proudly at you and says, "Yes, I was there too, <<$pcs_nickname>>. I s...
    scene.text(`He smiles proudly at you and says, "Yes, I was there too, ${((st as any).pcs_nickname ?? '')}. I saw you working hard."`);
    scene.text('"That was a lot of work!" you exclaim. "I\'m completely exhausted."');
    scene.text('"Yes, yes it is," he says. "I have worn myself out. I won\'t be able to do it much longer, but you are still young and strong. I am very proud that my granddaughter is such a hard worker."');
    scene.text('Maybe it\'s just the exhaustion, but your eyes tear up slightly at that. Your grandfather is usually pretty sparing with his praise.');
    scene.text('"Thank you, Grandpa," you say, giving him a tight hug, which he returns with surprising strength for his age.');
    scene.text('After a few moments, he lets go and tells you, "Go and get some rest, child. You have earned it."');
    scene.actions([
      { label: 'Continue', goto: ['gp_zlatek', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandpaQW ?? 0)?.['chore_fetch_firewood'] === 1) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would fetch firewood for him today.</b>');
  } else {
    if (((s as any).grandpaQW ?? 0)?.['chore_fetch_firewood'] === 2) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You fetched some firewood for Grandpa - you should give it to him.</b>');
    } else {
      if (((s as any).grandpaQW ?? 0)?.['chore_feed_horse'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would feed the horse in the barn for him today.</b>');
      } else {
        if (((s as any).grandpaQW ?? 0)?.['chore_feed_horse'] === 2) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You fed the horse for Grandpa - you should let him know that it is done.</b>');
        } else {
          if (((s as any).grandpaQW ?? 0)?.['chore_feed_cow'] === 1) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would feed the cow in the barn for him today.</b>');
          } else {
            if (((s as any).grandpaQW ?? 0)?.['chore_feed_cow'] === 2) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You fed the cow for Grandpa - you should let him know that it is done.</b>');
            } else {
              if (((s as any).grandpaQW ?? 0)?.['chore_clean_yard'] === 1) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would clean the yard for him today.</b>');
              } else {
                if (((s as any).grandpaQW ?? 0)?.['chore_clean_yard'] === 2) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You cleaned the yard for Grandpa - you should let him know that it is done.</b>');
                } else {
                  if (((s as any).grandpaQW ?? 0)?.['chore_brush_horse'] === 1) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would groom the horse for him today.</b>');
                  } else {
                    if (((s as any).grandpaQW ?? 0)?.['chore_brush_horse'] === 2) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You groomed the horse for Grandpa - you should let him know that it is done.</b>');
                    } else {
                      if (((s as any).grandpaQW ?? 0)?.['chore_feed_boar'] === 1) {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would feed the pig in the barn for him today.</b>');
                      } else {
                        if (((s as any).grandpaQW ?? 0)?.['chore_feed_boar'] === 2) {
                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You fed the pig for Grandpa - you should let him know that it is done.</b>');
                        } else {
                          if (((s as any).grandpaQW ?? 0)?.['chore_lead_horse_to_field'] === 1) {
                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would take the horse from the barn to the field for him today.</b>');
                          } else {
                            if (((s as any).grandpaQW ?? 0)?.['chore_lead_horse_to_field'] === 2) {
                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You took the horse to the field for Grandpa - you should let him know that it is done.</b>');
                            } else {
                              if (((s as any).grandpaQW ?? 0)?.['chore_lead_cow_to_field'] === 1) {
                                ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would take the cow from the barn to the field for him today.</b>');
                              } else {
                                if (((s as any).grandpaQW ?? 0)?.['chore_lead_cow_to_field'] === 2) {
                                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You took the cow to the field for Grandpa - you should let him know that it is done.</b>');
                                } else {
                                  if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse'] === 1) {
                                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would take the horse from the barn and bathe it in the river for him today.</b>');
                                    if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse_prog'] === 1) {
                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You have taken the horse to the river, but haven\'t bathed him yet.</b>');
                                    } else {
                                      if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse'] === 2) {
                                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You have bathed the horse in the river, but haven\'t led him back home yet.</b>');
                                      }
                                    }
                                  } else {
                                    if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse'] === 2) {
                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You bathed the horse for Grandpa - you should let him know that it is done.</b>');
                                    } else {
                                      if (((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] > 0  &&  ((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] < 3) {
                                        if (((s as any).boletus ?? 0) < ((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']) {
                                          ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_mushrooms'] = 1;
                                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would pick ' + ((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] + ' kg of mushrooms for him today.</b>');
                                        } else {
                                          ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_mushrooms'] = 2;
                                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You have picked the ' + ((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] + ' kg of mushrooms that Grandpa asked for - you should give them to him.</b>');
                                        }
                                      } else {
                                        if (((s as any).grandpaQW ?? 0)?.['chore_gather_berries'] > 0  &&  ((s as any).grandpaQW ?? 0)?.['chore_gather_berries'] < 3) {
                                          if (((s as any).bilberry ?? 0) < ((s as any).grandpaQW ?? 0)?.['chore_berry_quantity']) {
                                            ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_berries'] = 1;
                                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would pick ' + ((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] + ' kg of berries for him today.</b>');
                                          } else {
                                            ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_berries'] = 2;
                                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You have picked the ' + ((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] + ' kg of berries that Grandpa asked for - you should give them to him.</b>');
                                          }
                                        } else {
                                          if (((s as any).grandpaQW ?? 0)?.['chore_gather_both'] > 0  &&  ((s as any).grandpaQW ?? 0)?.['chore_gather_both'] < 3) {
                                            if (((s as any).bilberry ?? 0) < ((s as any).grandpaQW ?? 0)?.['chore_berry_quantity']  ||  ((s as any).boletus ?? 0) < ((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']) {
                                              ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_both'] = 1;
                                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandpa you would pick ' + ((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] + ' kg of mushrooms and ' + ((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] + ' kg of berries for him today.</b>');
                                            } else {
                                              ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_both'] = 2;
                                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You have picked the ' + ((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] + ' kg of mushrooms and ' + ((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] + ' kg of berries that Grandpa asked for - you should give them to him.</b>');
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'talk':
      enterTalk(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    case 'set_talk_acts':
      enterSetTalkActs(s, scene);
      break;
    case 'get_random_chore_act':
      enterGetRandomChoreAct(s, scene);
      break;
    case 'set_report_chores_acts':
      enterSetReportChoresActs(s, scene);
      break;
    case 'check_for_chores':
      enterCheckForChores(s, scene);
      break;
    case 'chore_fetchfirewood':
      enterChoreFetchfirewood(s, scene);
      break;
    case 'event_fetchfirewood':
      enterEventFetchfirewood(s, scene);
      break;
    case 'set_report_fetchfirewood_act':
      enterSetReportFetchfirewoodAct(s, scene);
      break;
    case 'chore_feedhorse':
      enterChoreFeedhorse(s, scene);
      break;
    case 'event_feedhorse':
      enterEventFeedhorse(s, scene);
      break;
    case 'set_report_feedhorse_act':
      enterSetReportFeedhorseAct(s, scene);
      break;
    case 'chore_leadhorsetofield':
      enterChoreLeadhorsetofield(s, scene);
      break;
    case 'event_leadhorsetofield':
      enterEventLeadhorsetofield(s, scene);
      break;
    case 'set_report_leadhorsetofield_act':
      enterSetReportLeadhorsetofieldAct(s, scene);
      break;
    case 'event_leadhorsehome':
      enterEventLeadhorsehome(s, scene);
      break;
    case 'chore_bathehorse':
      enterChoreBathehorse(s, scene);
      break;
    case 'event_bathehorse1':
      enterEventBathehorse1(s, scene);
      break;
    case 'event_bathehorse2':
      enterEventBathehorse2(s, scene);
      break;
    case 'event_bathehorse3':
      enterEventBathehorse3(s, scene);
      break;
    case 'set_report_bathehorse_act':
      enterSetReportBathehorseAct(s, scene);
      break;
    case 'chore_brushhorse':
      enterChoreBrushhorse(s, scene);
      break;
    case 'event_brushhorse':
      enterEventBrushhorse(s, scene);
      break;
    case 'set_report_brushhorse_act':
      enterSetReportBrushhorseAct(s, scene);
      break;
    case 'chore_feedcow':
      enterChoreFeedcow(s, scene);
      break;
    case 'event_feedcow':
      enterEventFeedcow(s, scene);
      break;
    case 'set_report_feedcow_act':
      enterSetReportFeedcowAct(s, scene);
      break;
    case 'chore_cleanyard':
      enterChoreCleanyard(s, scene);
      break;
    case 'event_cleanyard':
      enterEventCleanyard(s, scene);
      break;
    case 'set_report_cleanyard_act':
      enterSetReportCleanyardAct(s, scene);
      break;
    case 'chore_feedboar':
      enterChoreFeedboar(s, scene);
      break;
    case 'event_feedboar':
      enterEventFeedboar(s, scene);
      break;
    case 'set_report_feedboar_act':
      enterSetReportFeedboarAct(s, scene);
      break;
    case 'chore_herdcattle':
      enterChoreHerdcattle(s, scene);
      break;
    case 'event_herdcattle1':
      enterEventHerdcattle1(s, scene);
      break;
    case 'chore_leadcowtofield':
      enterChoreLeadcowtofield(s, scene);
      break;
    case 'event_leadcowtofield':
      enterEventLeadcowtofield(s, scene);
      break;
    case 'set_report_leadcowtofield_act':
      enterSetReportLeadcowtofieldAct(s, scene);
      break;
    case 'chore_gathermushrooms':
      enterChoreGathermushrooms(s, scene);
      break;
    case 'set_report_gathermushrooms_act':
      enterSetReportGathermushroomsAct(s, scene);
      break;
    case 'chore_gatherberries':
      enterChoreGatherberries(s, scene);
      break;
    case 'set_report_gatherberries_act':
      enterSetReportGatherberriesAct(s, scene);
      break;
    case 'chore_gatherboth':
      enterChoreGatherboth(s, scene);
      break;
    case 'set_report_gatherboth_act':
      enterSetReportGatherbothAct(s, scene);
      break;
    case 'chore_balehay':
      enterChoreBalehay(s, scene);
      break;
    case 'event_balehay':
      enterEventBalehay(s, scene);
      break;
    case 'set_report_balehay_act':
      enterSetReportBalehayAct(s, scene);
      break;
    case 'stat_display':
      enterStatDisplay(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gp_zlatek: LocationDef = {
  name: 'gp_zlatek',
  title: 'Your grandfather is a grumpy old man who is always complaini',
  region: 'other',
  enter: enter,
};
