import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gadukino', '');
  (s as any).region = 'gad';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'gadukino_event', 'sound');
  (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
  if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  (((s as any).npc_QW ?? 0)?.['A63'] < 11  ||  ((s as any).GadBoy ?? 0)?.['river_gang'] > 2)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Mitka Shkvoryen</b></center>');
    scene.img('images/characters/shared/headshots_main/big63.jpg');
    scene.text('As you walk through the village, you are approached by Mitka, your childhood friend.');
    scene.actions([
      { label: 'Say hello', goto: ['mitka', ''] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] === 20  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] < 1) {
      qspGoto(s, 'gadukino_event', 'gadriver_gang');
    }
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 1  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)) {
      qspGoto(s, 'gadukino_event', 'gang_apologise');
    }
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 3  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)) {
      qspGoto(s, 'gadukino_event', 'mitka_apologise');
    }
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 4  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 1  &&  ((s as any).MiraVars ?? 0)?.['cuni_given'] === 0  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)) {
      qspGoto(s, 'gadukino_event', 'mira_apologise');
    }
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).temp_randB = (Math.floor(Math.random() * 12) + 1);
      if (((s as any).temp_randB ?? 0) <= 4) {
        if (((s as any).temp_randB ?? 0) === 4) {
          if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)) {
            qspGoto(s, 'gadukino_event', 'gadukino_2boys', '1');
          } else {
            if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
              qspGoto(s, 'gadukino_event', 'gadukino_2boys', '2');
            } else {
              if (((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
                qspGoto(s, 'gadukino_event', 'gadukino_2boys', '3');
              } else {
                if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)) {
                  qspGoto(s, 'gadukino_event', 'gadukino_mitka');
                } else {
                  if (((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)) {
                    qspGoto(s, 'gadukino_event', 'gadukino_kolyamba');
                  } else {
                    if (((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
                      qspGoto(s, 'gadukino_event', 'gadukino_vasyan');
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)) {
            qspGoto(s, 'gadukino_event', 'gadukino_mitka');
          } else {
            if (((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)) {
              qspGoto(s, 'gadukino_event', 'gadukino_kolyamba');
            } else {
              if (((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
                qspGoto(s, 'gadukino_event', 'gadukino_vasyan');
              }
            }
          }
        }
      } else {
        if (((s as any).temp_rand ?? 0) <= 6) {
          if (((s as any).npc_QW ?? 0)?.['A63'] >= 11  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 1  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)) {
            qspGoto(s, 'gad_meadow', 'mira_lesb_talk4');
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.text('<center><h2>Gadukino</h2></center>');
    if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
      if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
        scene.img('images/locations/gadukino/village/street.jpg');
      } else {
        scene.img('images/locations/gadukino/village/street_night.jpg');
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
        scene.img('images/locations/gadukino/village/street_winter.jpg');
      } else {
        scene.img('images/locations/gadukino/village/street_winter_night.jpg');
      }
    }
    scene.text('A small village with many old wooden houses and even more in various states of disrepair. It has certainly seen better times.');
    if (qspFunc(s, 'car_funcs', 'is_here')) {
      // TODO-QSP: dynamic text: <a href="exec:gs ''carF'', ''start''">Your <<$car[''name'']>></a> is close by.
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">Your ${((s as any).car ?? 0)?.['name'] ?? ''}</a> is close by.`);
    }
    // TODO-QSP: dynamic text: Several small farms are scattered around the outskirts of the village, one of wh...
    scene.text('Several small farms are scattered around the outskirts of the village, one of which belongs to <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027gad_gpyard/u0027, /u0027start/u0027); return false;">your grandparents</a>.');
    if (((s as any).home ?? 0)?.['current'] === 'hunters_lodge'  ||  ((s as any).home ?? 0)?.['current'] === 'grandparents_house') {
      if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 30  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vladimirQW_meet/u0027, /u00272/u0027); return false;">There\'s an Audi parked in the street, and standing beside it, you notice Vladimir</a>.');
      }
      if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 40  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vladimirQW_meet/u0027, /u00273/u0027); return false;">There\'s an Audi parked in the street, and standing beside it, you notice Vladimir</a>.');
      }
      if (Object.keys((s as any).lover ?? {}).length > 0) {
        (s as any).temp_i = 0;
        (s as any).temp_max_i = 0;
        // TODO-QSP: :lover_pickup_loop
        (s as any).temp_npcid = (((s as any).lover ?? 0)?.[String((s as any).temp_i ?? 0)] ?? 0);
        if (((s as any).npc_meetday ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).npc_meethour ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).hour ?? 0)) {
          // TODO-QSP: dynamic text: <b><a href="exec: gt ''lover_meet'', ''start'', ''<<$temp_npcid>>''"><<$npc_used...
          scene.text(`<b><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lover_meet/u0027, /u0027start/u0027, /u0027${((s as any).temp_npcid ?? '')}/u0027); return false;">${(((s as any).npc_usedname ?? 0)?.[String((s as any).temp_npcid ?? 0)] ?? '')}</a> is waiting in the street.</b>`);
        }
        (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
        if (((s as any).temp_i ?? 0) < ((s as any).temp_max_i ?? 0)) {
          // TODO-QSP: jump 'lover_pickup_loop'
        }
      }
    }
    if (((s as any).npc_rel ?? 0)?.['A60'] > 0  &&  ((s as any).npc_known ?? 0)?.['A60'] === 1) {
      // TODO-QSP: dynamic text: Just down the road from your grandparents'' house is <a href="exec:minut += 5 & ...
      scene.text('Just down the road from your grandparents\' house is <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027gad_miroslava_home/u0027, /u0027start/u0027); return false;">Mira\'s house</a>.');
      scene.actions([
        { label: 'Go to Mira\'s house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_miroslava_home', 'start'] },
      ]);
    }
    if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9) {
      if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 16) {
        scene.text('An old farm truck is parked halfway off one of the roads nearby. The farmer who owns it will buy <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gadukino/u0027, /u0027collection_point/u0027); return false;">mushrooms and berries</a> from the locals to sell back in the city. He makes multiple trips from Gadukino to the city daily to ensure the freshest produce so he can be found from 6 am to 4 pm.');
      } else {
        scene.text('This time of year, a truck usually comes by multiple times a day between 6 am and 4 pm to purchase mushrooms and berries from the locals.');
      }
    } else {
      scene.text('During the summer, a truck usually comes into town from the city to buy fresh mushrooms and berries from the locals. It\'s not the right season for it right now, though.');
    }
    scene.text('In the center of the village is a small grass-covered square where villagers gather to meet and discuss or argue about politics or village life.');
    // TODO-QSP: dynamic text: Near the square sits the old <a href="exec: minut += 3 & gt ''gad_church'',''sta...
    scene.text('Near the square sits the old <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(/u0027gad_church/u0027, /u0027start/u0027); return false;">chapel</a>, it is not in the best shape, but it appears well-loved.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      // TODO-QSP: dynamic text: One of the buildings facing the square has a sign saying, <a href="exec: minut +...
      scene.text('One of the buildings facing the square has a sign saying, <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027gad_store/u0027, /u0027/u0027); return false;">General Store</a>. A sign on the door proclaims it "OPEN". It looks like the only place in the village to buy goods.');
      scene.actions([
        { label: 'Go to the general store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_store', ''] },
      ]);
    } else {
      scene.text('One of the buildings facing the square has a sign saying, General Store. A sign on the door proclaims it "CLOSED". It looks like the only place in the village to buy goods.');
    }
    if ((((s as any).week ?? 0) === 4  ||  ((s as any).week ?? 0) === 7)  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
      scene.actions([
        { label: 'Go to the nearby farmers market', goto: ['gad_market', 'start'] },
      ]);
    }
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
      scene.actions([
        { label: 'Walk around the village (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    if ((Math.floor(Math.random() * 2) + 0) === 0  &&  qspFunc(s, 'miroslava_schedule', 'is_here')) {
      qspGoto(st, 'gadukino', 'mira_events');
    } else {
      qspGoto(st, 'gadukino', 'other_events');
    }
  } },
      ]);
    }
    if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 16) {
      scene.actions([
        { label: 'Sell mushrooms and berries', goto: ['gadukino', 'collection_point'] },
      ]);
    }
    if ((((s as any).hour ?? 0) <= 5  ||  ((s as any).hour ?? 0) >= 21)  &&  ((s as any).succubusQW ?? 0) === 14  &&  ((s as any).suchuntday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Go Hunting (this can take a lot of time)', handler: (st: GameState) => {
    (st as any).suchunt = 1;
  }, goto: ['gadukino', 'succubus_hunt'] },
      ]);
    }
    qspCall(s, 'camera', 'check_location');
    scene.actions([
      { label: 'Go to your grandparent\'s house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_gpyard', 'start'] },
      { label: 'Walk to the forest road (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_road', 'start'] },
      { label: 'Walk to the highway (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '10'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCollectionPoint(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/collection_point.jpg');
  scene.text('Parked halfway off the road is an old, unmarked truck. The back doors are open, and inside is a farmer looking to buy either edible mushrooms or berries the locals find while out in the nearby woods.');
  scene.text('Some find it odd that they\'re operating out of a truck. Still, you imagine it\'s cheaper to maintain than a shop, and it lets them get around to other villages like this one to buy their mushrooms and berries, too.');
  scene.text('There is a small sign hanging off of one of the back doors which says:');
  // TODO-QSP: dynamic text: "Buying: mushrooms <<$func(''money'', ''string_profit'', 25)>>/kg, berries <<$fu...
  scene.text(`"Buying: mushrooms ${qspFunc(s, 'money', 'string_profit', 25)}/kg, berries ${qspFunc(s, 'money', 'string_profit', 25)}/kg"`);
  if (((s as any).boletus ?? 0) > 0  &&  ((s as any).bilberry ?? 0) > 0) {
    scene.actions([
      { label: 'Sell everything you\'ve gathered', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'money', 'earn', ((st as any).boletus ?? 0)*25+((st as any).bilberry ?? 0)*25);
    scene.img('images/locations/gadukino/village/collection_point.jpg');
    // TODO-QSP: dynamic text: You decide to sell your mushrooms and berries for <<$func(''money'', ''string_pr...
    scene.text(`You decide to sell your mushrooms and berries for ${qspFunc(s, 'money', 'string_profit', ((st as any).boletus ?? '')*25+((st as any).bilberry ?? '')*25)}.`);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).boletus = 0;
    (st as any).bilberry = 0;
  }, goto: ['gadukino', 'collection_point'] },
    ]);
  } },
    ]);
  }
  if (((s as any).boletus ?? 0) > 0) {
    scene.actions([
      { label: 'Sell all the mushrooms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'money', 'earn', ((st as any).boletus ?? 0)*25);
    scene.img('images/locations/gadukino/village/collection_point.jpg');
    // TODO-QSP: dynamic text: You decide to sell your mushrooms for <<$func(''money'', ''string_profit'', bole...
    scene.text(`You decide to sell your mushrooms for ${qspFunc(s, 'money', 'string_profit', ((st as any).boletus ?? '')*25)}.`);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).boletus = 0;
  }, goto: ['gadukino', 'collection_point'] },
    ]);
  } },
    ]);
  }
  if (((s as any).bilberry ?? 0) > 0) {
    scene.actions([
      { label: 'Sell all the berries', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'money', 'earn', ((st as any).bilberry ?? 0)*25);
    scene.img('images/locations/gadukino/village/collection_point.jpg');
    // TODO-QSP: dynamic text: You decide to sell your berries for <<$func(''money'', ''string_profit'', bilber...
    scene.text(`You decide to sell your berries for ${qspFunc(s, 'money', 'string_profit', ((st as any).bilberry ?? '')*25)}.`);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).bilberry = 0;
  }, goto: ['gadukino', 'collection_point'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the village center', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gadukino', ''] },
  ]);
  scene.build();
}

function enterSuccubusHunt(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (40 + (Math.floor(Math.random() * 21) + 0) - 5 * ((s as any).succublvl ?? 0));
  qspCall(s, 'stat', '');
  scene.text('At this hour of the night, the village is only illuminated by the light of the moon. You know this will be to your advantage. No one will be able to see you coming… That is if there were anyone out at night. You prowl the village looking for prey, but as the minutes pass, your frustration grows.');
  if ((Math.floor(Math.random() * 8) + 0) - ((s as any).succublvl ?? 0) < 2) {
    qspGoto(s, 'gadukino', 'succubus_hunt2');
  } else {
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.text('God, this place is dull! After searching for an hour, you find no one; not even a stray cat seems to be out and about tonight. You give up reluctantly, pondering how else you will feed tonight.');
    scene.actions([
      { label: 'Continue', goto: ['gadukino', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSuccubusHunt2(s: GameState, scene: SceneBuilder): void {
  scene.text('You are getting really antsy to feed, and after finding absolutely no one outside, you decide that breaking into someone\'s house, risky as it is, is still better than going hungry.');
  scene.text('You break the lock of the first house you see and go inside. You sneak around the house, looking for a meal, but there\'s nobody there. So this entire night is a bust… But, since you\'re here, you might as well try and see if there\'s any regular food that helps with your hunger, even though you doubt it.');
  scene.text('You head to the kitchen for a midnight snack, and as you tear through the fridge, eating whatever looks appetizing, you hear a man curse.');
  scene.text('"Shit, what the hell happened to my door?!"');
  scene.text('You freeze on the spot. You didn\'t think anybody would actually come home while you were still here, but now that they did, maybe you can still salvage this mess.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Strip', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    scene.img('images/locations/gadukino/succubus/kitchennude.jpg');
    scene.text('Heavy footsteps echo through the corridor, approaching the kitchen, and with nowhere to hide, you decide to strip instead. You are here to feed, after all, and if he sees you nude, surely he will forget what he is angry about.');
    scene.text('When the man enters the dark kitchen, his first reaction is about what you\'d expect, "Who the hell are you!?"');
    scene.text('You give him a good look at your body; according to your plan, that should be enough to calm him down. But, unfortunately, he doesn\'t seem to be aware of the plan cause he is having none of it.');
    scene.text('"Have you been eating my food?! Get the hell out of my house!"');
    scene.text('He grabs you and starts dragging you towards the door. You protest and try vainly to seduce him, wondering how anyone could resist your charms like this. Then you remember that you are stronger than him - crazy how easily superhuman strength can slip your mind.');
    scene.text('As soon as you resist his pull, he grinds to a halt, confused by the fact that he can\'t move you further. Then, with the tables turned, you grab him and half-drag, half-throw him into his own living room, where he lands on his back, stunned by the fact that this woman so easily overpowered him.');
    scene.text('You pull his pants off and, already nude, lower your pussy to his cock. He may have played the angry man, but the fact that it stands at attention soothes your bruised ego - your seduction efforts didn\'t go completely unnoticed - and you plunge yourself down on top of him.');
    scene.actions([
      { label: 'Feed on him', handler: (st: GameState) => {
    (st as any).scrand = (Math.floor(Math.random() * 4) + 0);
    (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    if (((st as any).scfeed ?? 0) === 2) {
      (st as any).scxcum = 'twice';
    } else {
      (st as any).scxcum = 'multiple times';
    }
    (st as any).i = 0;
    // TODO-QSP: :sucfeeding_loop
    (st as any).i = ((st as any).i ?? 0) + (1);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-5), 'dom', 'no_orgasm_msg');
    if (((st as any).scfeed ?? 0) > ((st as any).i ?? 0)) {
      // TODO-QSP: jump 'sucfeeding_loop'
    }
    qspCall(st, 'arousal', 'end');
    (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (((st as any).scfeed ?? 0));
    (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
    (st as any).sucabscum = 1;
    (st as any).minut = ((st as any).minut ?? 0) + (15 + (20 * ((st as any).scfeed ?? 0)) / ((st as any).succublvl ?? 0));
    scene.img('images/pc/body/succubusself.jpg');
    scene.text('You ride him hard, desperate to get your hungry pussy the nourishment it requires.');
    if (((st as any).scrand ?? 0) < ((st as any).succublvl ?? 0)) {
      scene.text('Your seduction and succubus powers were strong enough to get your victim hard. Still, they weren\'t enough to make him forget about his situation: He is giving you hateful looks, clearly pissed about his door and food and, oh yeah, you are raping him, but you simply ignore that.');
      scene.text('All you need is his sperm. You could care less about his happiness, and if he wants to complain about a woman like you fucking his brains out, that\'s his problem. Just as you\'re thinking, your powers surge and force him to come, unloading his jizz deep into your waiting cunt.');
      // TODO-QSP: dynamic text: You don''t know how long you go at it with him exactly. Still, after coming insi...
      scene.text(`You don't know how long you go at it with him exactly. Still, after coming inside you ${((st as any).scxcum ?? '')} and thus making you come too, he runs out of energy and falls unconscious. You lift yourself off your passed-out plaything and head for the kitchen to collect your clothes and one last snack, feeling wonderfully relaxed after getting your fix.`);
      scene.text('Then you head out the back door, making sure to break the handle on the way out - you\'re nothing if not consistent.');
    } else {
      scene.text('He was resisting you initially, but after a while, your powers break any resistance he had in him. By the time his first orgasm hits and he shoots his sperm into your needy cunt, he would have betrayed his own mother, much less broken his front door and laid his fridge at your feet, just to be inside you a little longer.');
      scene.text('However unsavoury the first few minutes of your meeting, this state of bliss you share with him pushes that memory into the far back of your mind and lets both of you enjoy the hard ride you\'re giving him.');
      // TODO-QSP: dynamic text: You don''t know how long you go at it with him exactly. Still, after coming insi...
      scene.text(`You don't know how long you go at it with him exactly. Still, after coming inside you ${((st as any).scxcum ?? '')} and thus making you come too, he runs out of energy and falls unconscious. You lift yourself off your passed-out plaything, patting his head affectionately, and head for the kitchen to collect your clothes and one last snack, feeling wonderfully relaxed after getting your fix. There's nothing better than sex with a willing subject.`);
      scene.text('Then you head out the back door. For a split second, you consider breaking that door, too… but why add insult to injury when he has pleased you?');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
    qspGoto(st, 'gadukino', '');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMiraEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_known ?? 0)?.['A60'] === 0) {
    scene.img('images/locations/gadukino/village/miroslava.jpg');
    scene.text('Walking around the village, you notice a young girl your age. Unfortunately, you do not recognize her from the last time you were in the village. She is pulling on a rope attached to the collar of a small calf. The calf grunts with displeasure, shakes her head and refuses to move further.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
      { label: 'Help her', handler: (st: GameState) => {
    ((st as any).npc_known = (st as any).npc_known ?? {})['A60'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A60', 10);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira.jpg');
    scene.text('You decide to lend a hand to help the girl with the calf. You are lonely in the village, and maybe this girl, if you get to know her, could make your trips to Gadukino less boring. You walk over to the girl, introduce yourself, and ask if she wants help. She nods and resumes pulling on the rope while you walk over behind the calf and give it a load slap on the rump. The calf is surprised and immediately moves forward away from you. The girl smiles in thanks and tells you her name is Miroslava, but everyone calls her Mira.');
    scene.text('Together you can guide the calf back into its pen. Mira turns out to be quite a sociable girl and conversationalist. You learn that her family was recently forced to move to the village from the city. Her father\'s substantial gambling debts to some questionable men forced him to sell the family\'s property in the city to pay them back. Mira is having a rough time adjusting to life in a small village. She misses the apartment in the city center and the money to buy lovely dresses and makeup. After selling everything and paying off the debt, her father was told to leave the city "or else…".');
    scene.text('They were left relatively poor and could only afford a house in this run-down, dust-covered village.');
    scene.text('You walk with her and chat until you reach her house, which turns out to be just down the road from your grandparents\' place. Mira invites you to come and visit her anytime. She is just as bored in the village as you are.');
    scene.actions([
      { label: 'Finish your walk', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).MiraVars ?? 0)?.['QW'] === 15  &&  ((s as any).temper ?? 0) >= 10  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).MiraVars ?? 0)?.['prostitute'] === 0) {
      scene.img('images/characters/gadukino/mira/miraqw7.jpg');
      scene.text('Walking through the village, you notice Mira digging in her vegetable garden. She stands with her ass high in the air, and to your amazement, she isn\'t wearing panties. You get a good look at her pussy lips…');
      qspCall(s, 'willpower', 'prostitution', 'force');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Approach Mira', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Approach Mira', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'willpower', 'prostitution', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img(`images/characters/gadukino/mira/mira0,${(Math.floor(Math.random() * 6) + 0)}.jpg`);
    scene.text('You quietly sneak up on her, but she notices your approach and turns around. Her hands pull her skirt back into place, blushing. You stare at her for a few seconds silently and then ask, "Why don\'t you have any panties on?" Mira, her eyes darting about, shifting her weight from foot to foot, hesitantly said, "Well, what happened is, well, it\'s scorching. I thought it would feel better without panties." You interrupt her with an upraised hand as you get an idea for your second wish… You remind her she still owes you two wishes, and you\'re ready to collect your second wish. You tell Mira to sit down, and she reluctantly agrees. You order her to show you her pussy when she is finally sitting. Mira grumbles and glares at you but eventually sighs and slowly lifts up her skirt, giving you a good look at her crotch.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirawish2.jpg');
    scene.text('You enjoy the view, then snap your fingers as a fantastic idea comes to mind for your second wish. Mira says she thought her second wish was over, but you wouldn\'t make it that easy. You ask if she is thinking about backing out of granting your wishes, but Mira says no, she will go through with them. You smile and tell her to follow you.');
    scene.actions([
      { label: 'Lead her to the road', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    qspCall(st, 'arousal', 'erotic', 2, 'lesbian', 'dom');
    qspCall(st, 'stat', '');
    scene.img('images/characters/gadukino/mira/mirawish2_1.jpg');
    scene.text('You lead her out to the main road. You tell Mira that she is to pose as a prostitute and attempt to get a customer or two. This is your second wish. You want Mira to become a prostitute and fulfil the desires of anyone who asks for her services. Mira looks shocked but nods that she will do it. Mira looks around the area and, seeing no one else watching, begins to pose by the roadside for passing cars…');
    scene.actions([
      { label: 'Wait for a car…', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    ((st as any).MiraVars = (st as any).MiraVars ?? {})['prostitute'] = ((st as any).MiraVars['prostitute'] ?? 0) + (1);
    ((st as any).MiraVars = (st as any).MiraVars ?? {})['QW'] = 16;
    scene.img('images/characters/gadukino/mira/miraprost.jpg');
    scene.text('It isn\'t long before Mira\'s first customer pulls up in an excellent vehicle. She takes a deep breath, looks you in the eyes, winks, approaches the car, and starts talking to the driver.');
    scene.text('You can\'t hear what she is saying, but after only a few minutes, the door opens, and Mira steps into the vehicle. It pulls away but doesn\'t go far. You see it pull off the main road and head down a dirt road. Smiling and wanting to see the action, you run into the woods, trying to head off the vehicle.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch her with the customer', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/characters/gadukino/mira/sex/miraprost1.mp4');
      scene.text('You walk up and look into the car, and you see Mira giving one hell of a blowjob to her first customer. Her head is bobbing up and down on his 17cm cock.');
      qspCall(st, 'arousal', 'voyeur_sex', 5);
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Hide', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/sex/miraprost1_1.mp4');
    scene.text('You duck for cover as the guy suddenly gets out of the car, opens the passenger door, grabs Mira\'s head, and starts forcing his cock deep into her throat.');
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/sex/miraprost1_2.mp4');
    scene.text('Eventually, the guy grunts and cums all over Mira\'s face and into her mouth. Finally, the nicely dressed man pulls Mira out of the car, hands her a few bills and then drives off.');
    scene.text('Mira walks back towards town, counting the money he gave her as she absentmindedly licks the cum as it drips down her face. Finally, she smiles and shows you the money as you join her.');
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Walk back to the village together', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gadukino', '');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/characters/gadukino/mira/miraprost2.mp4');
      scene.text('You walk up, look into the van, and see Mira showing her first customer her tits and rubbing her pussy. You see a hungry gleam in the guy\'s eyes, which Mira returns.');
      qspCall(st, 'arousal', 'voyeur_sex', 20);
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/sex/miraprost2_1.mp4');
    scene.text('Mira and the guy jump into the back of the van, and you watch as he starts fucking her wet pussy. His hand covers her mouth as she screams in ecstasy. The guy pounds his 20cm cock deep into her pussy. From Mira\'s grunts of partial joy and partial pain, you know the guy is hitting or entering her cervix.');
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Hide', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/sex/miraprost2_2.mp4');
    scene.text('You have to duck behind some bushes as they move outside the van. The guy continues to pound into Mira\'s pussy until he cums… and cums… and cums.');
    scene.text('After the wild sex, Mira and the guy sit in the van and talk. He gives her a nice wad of cash, and she walks to the village. Seeing you, she smiles and says thanks.');
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Walk back to the village together', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gadukino', '');
  } },
    ]);
  } },
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
      scene.actions([
        { label: 'Walk away', goto: ['gadukino', ''] },
      ]);
    } else {
      if (((s as any).MiraVars ?? 0)?.['QW'] >= 11  &&  ((s as any).temper ?? 0) >= 10  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)) {
        ((s as any).MiraVars = (s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
        if (((s as any).pcs_horny ?? 0) > 50  &&  (!(Math.floor(Math.random() * 2) + 0))) {
          qspCall(s, 'miroslava', 'miraclothes');
          scene.text('You meet Mira, heading to the river to get some water. Seeing you, she decides to stop and chat with you for a few minutes.');
          qspCall(s, 'willpower', 'exhib', 'force');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'You\'re feeling naughty', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'You\'re feeling naughty', handler: (st: GameState) => {
    if (((st as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
      (st as any).temp = (Math.floor(Math.random() * 4) + 0);
      if ((!((st as any).temp ?? 0))) {
        scene.img('images/characters/gadukino/mira/mirasp.jpg');
        scene.text('You ask Mira to show you her pussy. She smiles casually and rests her hands on the bench, giving you a view of her bare pussy. She isn\'t even wearing any panties!');
      } else {
        if (((st as any).temp ?? 0) === 1) {
          scene.img('images/characters/gadukino/mira/mirasp1.jpg');
          scene.text('You ask Mira to show you her pussy. She smiles casually, sits down on the fence, and spreads her legs, showing you her bare pussy. She isn\'t even wearing any panties!');
        } else {
          if (((st as any).temp ?? 0) === 2) {
            scene.img('images/characters/gadukino/mira/mirasp2.jpg');
            scene.text('You ask Mira to show you her pussy. She smiles casually, sits down on the fence and, looking at you with a gleam in her eyes and a mischievous smile, pulls aside her panties showing off her wet pussy…');
          } else {
            if (((st as any).temp ?? 0) === 3) {
              scene.img('images/characters/gadukino/mira/mirasp5.jpg');
              scene.text('You ask Mira to show you her pussy. She smiles casually and gets on her hands and knees on the bench. She quickly glances around before pulling up her skirt and arching her back, showing you her naked pussy. She isn\'t even wearing any panties!');
            }
          }
        }
      }
      qspCall(st, 'npc_relationship', 'modify', 'A60', 1);
      qspCall(st, 'willpower', 'exhib', 'force');
      qspCall(st, 'willpower', 'pay', 'force');
      qspCall(st, 'arousal', 'erotic', 5, 'lesbian', 'dom');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Finish your walk', goto: ['gadukino', ''] },
      ]);
    } else {
      (st as any).temp = (Math.floor(Math.random() * 2) + 0);
      if ((!((st as any).temp ?? 0))) {
        scene.img('images/characters/gadukino/mira/mirasp3.jpg');
        scene.text('You ask Mira to show you her pussy. She smiles casually, sits down on a nearby fence, glances around, and spreads her legs… You are surprised that she isn\'t wearing panties and her gaping pussy is oozing cum. She must have just been fucked.');
        scene.text('"Who did that to you?" you ask her. Mira just smiles devilishly and tells you that it\'s a secret.');
      } else {
        if (((st as any).temp ?? 0) === 1) {
          scene.img('images/characters/gadukino/mira/mirasp4.jpg');
          scene.text('You ask Mira to show you her pussy. She smiles casually and squats down… You immediately notice how much her cunt and asshole gape. She must have just been fucked in both holes.');
          scene.text('"Who did that to you?" you ask her. Mira just smiles devilishly and tells you that it\'s a secret.');
        }
      }
      qspCall(st, 'npc_relationship', 'modify', 'A60', 1);
      qspCall(st, 'willpower', 'exhib', 'force');
      qspCall(st, 'willpower', 'pay', 'force');
      qspCall(st, 'arousal', 'erotic_nudity', 10, 'erotic', 5, 'lesbian', 'dom');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Finish your walk', goto: ['gadukino', ''] },
      ]);
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Walk away', goto: ['gadukino', ''] },
          ]);
        } else {
          (s as any).temp = (Math.floor(Math.random() * 8) + 0);
          if ((!((s as any).temp ?? 0))) {
            scene.img('images/characters/gadukino/mira/sex/mirasexgad5.jpg');
            scene.text('Walking through the village, you notice that Vasyan and Mira are having sex behind a shed. Mira moans as she rides his cock, and it seems she\'s oblivious to anything around her. But you\'re not sure you can say the same about Vasyan… So, you decide not to risk being caught peeking and leave the couple alone.');
          } else {
            if (((s as any).temp ?? 0) === 1) {
              scene.img('images/characters/gadukino/mira/sex/mirasexgad6.jpg');
              scene.text('Walking through the village, you notice that Vasyan and Mira are having sex behind a shed. Mira moans as she rides his cock, and it seems she\'s oblivious to anything around her. But you\'re not sure you can say the same about Vasyan… So, you decide not to risk being caught peeking and leave the couple alone.');
            } else {
              if (((s as any).temp ?? 0) === 2) {
                scene.img('images/characters/gadukino/mira/sex/mirasexgad7.jpg');
                scene.text('Walking through the village, you notice Kolyamba and Mira hiding behind some bushes. She\'s squatting before him, passionately sucking on his cock…');
              } else {
                if (((s as any).temp ?? 0) === 3) {
                  scene.img('images/characters/gadukino/mira/sex/mirasexgad8.jpg');
                  scene.text('Walking through the village, you notice behind the bushes Mira with Vasyan and Kolyamba. Mira is butt naked on all fours and taking turns sucking the boys\' members…');
                } else {
                  if (((s as any).temp ?? 0) === 4) {
                    scene.img('images/characters/gadukino/mira/mirahorny.jpg');
                    scene.text('Walking through the village, you see Mira. She sits on the fence, intensely rubbing her pussy, as if no one is watching…');
                  } else {
                    if (((s as any).temp ?? 0) === 5) {
                      scene.img('images/characters/gadukino/mira/sex/mirasexgad9.jpg');
                      scene.text('Walking through the village, you notice Mira behind a fence with Kolyamba. She squirms and moans but dutifully exposes her bare butt to Kolyamba, who is trying to shove a bottle in her…');
                    } else {
                      if (((s as any).temp ?? 0) === 6) {
                        scene.img('images/characters/gadukino/mira/mirasexgad10.jpg');
                        scene.text('Walking through the village, you see Mira facing Mitka with her pants down and sticking her fingers in her ass…');
                      } else {
                        if (((s as any).temp ?? 0) === 7) {
                          scene.img('images/characters/gadukino/mira/mirasexgad11.jpg');
                          scene.text('Walking through the village, you meet Mira. You notice she is not wearing panties, and the white thread of a tampon is sticking out of her pussy…');
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (((s as any).temp ?? 0) === 4) {
            qspCall(s, 'arousal', 'voyeur', 10);
          } else {
            if (((s as any).temp ?? 0) === 7) {
              qspCall(s, 'arousal', 'erotic', 10);
            } else {
              qspCall(s, 'arousal', 'voyeur_sex', 10, 'exhibitionism');
            }
          }
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Finish your walk', goto: ['gadukino', ''] },
          ]);
        }
      } else {
        if (((s as any).MiraVars ?? 0)?.['QW'] >= 4  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11  &&  ((s as any).temper ?? 0) >= 10  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)) {
          ((s as any).MiraVars = (s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
          if (((s as any).MiraVars ?? 0)?.['QW'] >= 6) {
            scene.img('images/characters/gadukino/mira/sex/mirasexgad2.jpg');
            scene.text('Walking through the village, you happen to notice Mira fucking Mitka. Mitka slowly grinds his cock deep into Mira\'s pussy. You see Mira shudder under him as she climaxes. She moaned and raked his back with her fingernails as she squirted and continued to cum. Mitka increased his pace and roughly hammered his cock into her dripping pussy. With his left hand, he reached for Mira\'s right tit and squeezed it without mercy; Mira just squealed and laughed.');
            qspCall(s, 'arousal', 'voyeur_sex', 10, 'exhibitionism');
            qspCall(s, 'stat', '');
            qspCall(s, 'willpower', 'voyeur', 'self');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Continue watching', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/sex/mirasexgad3.jpg');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('They are so absorbed in fucking each other senseless that they ignore everything else, so you decide to quietly continue to watch. Within a few minutes, you see Mitka begin to pick up the pace. He starts to drive his cock faster and faster into Mira\'s pussy until he grunts like a pig, dumping a massive load of cum into Mira\'s pussy which is again squirting. After a few minutes of them laying together, holding each other and gasping for breath, they slowly begin to kiss and laugh as they freshen up. You smile and rub your own dripping snatch before moving away.');
    } else {
      scene.text('They are so absorbed in fucking each other senseless that they ignore everything else, so you decide to quietly continue to watch. You see Mitka pull his cock out of Mira\'s dripping pussy, and he drives it deep into her ass, barebacked. Mira lets out a short scream of protest as Mitka continues to drive his cock into her asshole until his pubes rub up against her ass. Mira writhes under his brutal onslaught. After only a few minutes, Mitka starts to slap her ass, leaving bright red marks. Mitka begins to shudder from his thrusts into her ass. Finally, Mitka leans back with his dick still embedded balls deep in Mira\'s asshole and lets out a bestial growl as he begins to cum…');
    }
    qspCall(st, 'willpower', 'voyeur', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'voyeur_sex', 10, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish your walk', goto: ['gadukino', ''] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Walk away', goto: ['gadukino', ''] },
            ]);
          } else {
            if (((s as any).MiraVars ?? 0)?.['QW'] >= 4) {
              scene.img('images/characters/gadukino/mira/sex/mirasexgad.jpg');
              scene.text('Walking through the village, you notice Mira sucking Mitka\'s cock in the backyard. She wraps her lips around it, almost entirely taking the dick into her mouth. Sometimes she glances to the side…');
              qspCall(s, 'arousal', 'voyeur_sex', 10, 'exhibitionism');
              qspCall(s, 'stat', '');
              qspCall(s, 'willpower', 'voyeur', 'self');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Continue watching', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/sex/mirasexgad1.jpg');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('You think she\'s about to notice you watching a couple of times, but she never does, continuing to suck Mitka\'s cock. Finally, he tilts his head back, and Mira, quickly seeing this, takes his dick in her hand and directs it into her mouth, taking a mouth full of sperm. She greedily swallows it all and licks Mitka\'s cock clean before tucking it back into his pants. You see she is about to rise from her knees, so you hastily depart.');
    } else {
      scene.text('Until she finally spots you watching her. You see, she blushes crimson but does not stop sucking, only occasionally shifting her eyes in your direction. You watch as if not seeing anything unusual as Mira\'s head bobs up and down, continuing to suck Mitka\'s cock. Finally, he tilts his head back, and Mira, quickly seeing this, takes his dick in her hand and directs it into her mouth, taking a mouth full of sperm. She greedily swallows it all and licks Mitka\'s cock clean before tucking it back into his pants. You smile at Mira with the most peaceful of expressions and walk away…');
    }
    qspCall(st, 'willpower', 'voyeur', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish your walk', goto: ['gadukino', ''] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Walk away', goto: ['gadukino', ''] },
              ]);
            }
          }
        } else {
          (s as any).temp = (Math.floor(Math.random() * 2) + 0);
          if ((!((s as any).temp ?? 0))) {
            qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            qspCall(s, 'stat', '');
            scene.img('images/characters/gadukino/mira/mira2.jpg');
            scene.text('You meet Mira and her little calf. You both pause and start laughing, remembering how you first met.');
            scene.actions([
              { label: 'Finish your walk', goto: ['gadukino', ''] },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 1) {
              qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              qspCall(s, 'stat', '');
              if (((s as any).MiraVars ?? 0)?.['QW'] === 0) {
                scene.img('images/characters/gadukino/mira/mira1.jpg');
              } else {
                qspCall(s, 'miroslava', 'miraclothes');
              }
              scene.text('You meet Mira, heading to the river to get some water. Seeing you, she decides to stop and chat with you for a few minutes.');
              scene.actions([
                { label: 'Finish your walk', goto: ['gadukino', ''] },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOtherEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).temp ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/gadlol.jpg');
    scene.text('Walking through the village, you see two old women, sawing boards…');
    scene.actions([
      { label: 'Finish your walk', goto: ['gadukino', ''] },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/village/gadlol1.jpg');
      scene.text('Walking through the village, you see two old women carrying boards…');
      scene.actions([
        { label: 'Finish your walk', goto: ['gadukino', ''] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 3) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        if (((s as any).temper ?? 0) >= 15) {
          scene.img('images/locations/gadukino/village/gadlol3.jpg');
          scene.text('Walking through the village, you see local elders. They kindly smile at you, and as soon as you pass by, they start whispering among themselves…');
        } else {
          scene.img('images/locations/gadukino/village/gadlol2.jpg');
          scene.text('Walking through the village, you see local elders. They, as if on command, all huddle together and stare as you walk by them…');
        }
        scene.actions([
          { label: 'Finish your walk', goto: ['gadukino', ''] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 4) {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/village/gadlol4.jpg');
          scene.text('Walking through the village, a group of young boys, who look no older than 13 or 14, are playing in the road. Two older boys sit on an old, beat-up dirt bike. You\'re not sure it works, but the kids are having fun playing on it.');
          scene.actions([
            { label: 'Finish your walk', goto: ['gadukino', ''] },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 5) {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/village/walk.jpg');
            scene.text('You kill some time walking through the village.');
            scene.actions([
              { label: 'Finish your walk', goto: ['gadukino', ''] },
            ]);
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
    case 'collection_point':
      enterCollectionPoint(s, scene);
      break;
    case 'succubus_hunt':
      enterSuccubusHunt(s, scene);
      break;
    case 'succubus_hunt2':
      enterSuccubusHunt2(s, scene);
      break;
    case 'mira_events':
      enterMiraEvents(s, scene);
      break;
    case 'other_events':
      enterOtherEvents(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gadukino: LocationDef = {
  name: 'gadukino',
  title: 'Mitka Shkvoryen',
  region: 'gadukino',
  locationType: 'public_outdoors',
  description: ['As you walk through the village, you are approached by Mitka, your childhood friend.'],
  enter: enter,
};
