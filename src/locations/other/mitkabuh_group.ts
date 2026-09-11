import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_drunk['A60'] = 0;
  (s as any).GadBoy['drunk_event'] = 0;
  (s as any).MiraVars['drunk_event'] = 0;
  (s as any).GadBoy['drinkday'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/mitka_old_trailer.jpg');
  scene.text('You follow the boys into the woods. Soon the familiar old trailer comes into view.');
  if (((s as any).sunWeather ?? 0) === 1) {
    scene.text('The skies are clear today so you all decide to drink outside tonight.');
    scene.text('You quickly head over to the bench and sit down before anyone else can claim it.');
    scene.actions([
      { label: 'Sit down outside', goto: ['mitkabuh_group', 'partywithMira'] },
    ]);
  } else {
    scene.text('The weather is poor outside today so you all decide to drink inside tonight.');
    scene.text('The inside of the trailer looks like last time, just with maybe a few more empty bottles and cups strewn about. You quickly head over to the best couch and sit down before anyone else can claim it.');
    scene.actions([
      { label: 'Go inside the trailer', goto: ['mitkabuh_group', 'partywithMira'] },
    ]);
  }
  scene.build();
}

function enterPartywithMira(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mitkabuh_group', ((s as any).partywithMira ?? 0));
  scene.img('images/locations/gadukino/village/drunk.jpg');
  // TODO-QSP: dynamic text: You, Mira, Mitka, Kolyamba and Vasyan are sitting on some '+iif(sunWeather=1, 'l...
  scene.text('You, Mira, Mitka, Kolyamba and Vasyan are sitting on some \'+iif(sunWeather=1, \'logs outside\', \'couches inside\')+\' the trailer. There is plenty of moonshine to go around but no snacks.');
  if (((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).alko ?? 0) < 10) {
    (s as any).alko = 10;
  }
  if (((s as any).MiraVars ?? 0)?.['drunk_event'] === 1  &&  ((s as any).npc_drunk ?? 0)?.['A60'] < 10) {
    (s as any).npc_drunk['A60'] = 10;
  }
  if (((s as any).npc_drunk ?? 0)?.['A60'] >= 10  &&  ((s as any).alko ?? 0) >= 10  &&  ((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).MiraVars ?? 0)?.['drunk_event'] === 1) {
    scene.img('images/characters/gadukino/mira/girls_go.jpg');
    scene.text('You and Mira are both way too drunk and can barely stand. The guys tell you to leave, they already fucked you tonight, but to make sure to come back tomorrow for another round.');
    scene.text('As you are leaving the guys call after you both "Hey whores, come drink with us again, we love fucking you both!! Ha-ha!" They laugh as you make your way out. You are too drunk to come up with a response and just walk away with Mira.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
    ]);
  } else {
    if (((s as any).npc_drunk ?? 0)?.['A60'] >= 10  &&  ((s as any).alko ?? 0) >= 10  &&  ((s as any).GadBoy ?? 0)?.['drunk_event'] === 0  &&  ((s as any).MiraVars ?? 0)?.['drunk_event'] === 0) {
      (s as any).GadBoy['drunk_event'] = 1;
      (s as any).MiraVars['drunk_event'] = 1;
      (s as any).temp_rand = Math.floor(Math.random() * 6) + 1;
      if (((s as any).temp_rand ?? 0) === 1) {
        qspCall(s, 'boyStat', 'A61', '0');
        qspCall(s, 'boyStat', 'A62', '1');
        qspCall(s, 'boyStat', 'A63', '2');
      } else {
        if (((s as any).temp_rand ?? 0) === 2) {
          qspCall(s, 'boyStat', 'A61', '0');
          qspCall(s, 'boyStat', 'A63', '1');
          qspCall(s, 'boyStat', 'A62', '2');
        } else {
          if (((s as any).temp_rand ?? 0) === 3) {
            qspCall(s, 'boyStat', 'A62', '0');
            qspCall(s, 'boyStat', 'A61', '1');
            qspCall(s, 'boyStat', 'A63', '2');
          } else {
            if (((s as any).temp_rand ?? 0) === 4) {
              qspCall(s, 'boyStat', 'A62', '0');
              qspCall(s, 'boyStat', 'A63', '1');
              qspCall(s, 'boyStat', 'A61', '2');
            } else {
              if (((s as any).temp_rand ?? 0) === 5) {
                qspCall(s, 'boyStat', 'A63', '0');
                qspCall(s, 'boyStat', 'A62', '1');
                qspCall(s, 'boyStat', 'A61', '2');
              } else {
                if (((s as any).temp_rand ?? 0) === 6) {
                  qspCall(s, 'boyStat', 'A63', '0');
                  qspCall(s, 'boyStat', 'A61', '1');
                  qspCall(s, 'boyStat', 'A62', '2');
                }
              }
            }
          }
        }
      }
      (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
      if (((s as any).temp_rand ?? 0) <= 4  &&  (!((s as any).mesec ?? 0))) {
        scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', 'group_sex'] }]);
      } else {
        if (((s as any).temp_rand ?? 0) <= 7) {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', 'group_bj'] }]);
        } else {
          if (((s as any).temp_rand ?? 0) <= 9) {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', 'group_show'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', 'group_anal'] }]);
          }
        }
      }
    } else {
      qspCall(s, 'willpower', 'drink', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Drink with Mira and the boys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/drinking.jpg');
    scene.text('Mitka pours some of the brew into two clear plastic shot glasses and hands them over to you.');
    scene.text('You take one glass and give it to Mira while the other you quickly gulp down. Mira does the same with the one you gave her.');
    scene.text('You and Mira have almost the same reaction to the moonshine. Your eyes widen and you coughs a little, sucking in your breath with a smile. You chat with the boys as they drink as well.');
    scene.text('Mitka looks at you approvingly, "Good shit, right?"');
    scene.text('"Just as good as the last batch you made!" you reply.');
    (s as any).npc_drunk['A60'] = ((s as any).npc_drunk['A60'] ?? 0) + (5);
    qspCall(s, 'drugs', 'alcohol', 'moonshine', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh_group', 'partywithMira'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterGroupSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitka_group/drunk1.jpg');
  // TODO-QSP: dynamic text: While drinking with Mira, <<$boydesc[0]>> comes up to you and starts removing yo...
  scene.text(`While drinking with Mira, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} comes up to you and starts removing your clothes. At the same time ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} does the same to Mira. They tell you, "We want to share you both right now."`);
  // TODO-QSP: dynamic text: <<$boydesc[2]>> looks on but doesn't move or say anything. Mira doesn't bother r...
  scene.text(`${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} looks on but doesn't move or say anything. Mira doesn't bother resisting and goes along with it.`);
  scene.actions([
    { label: 'Let them continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[1], 1
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    if (((s as any).MiraVars ?? 0)?.['QW'] < 15) {
      (s as any).MiraVars['QW'] = ((s as any).MiraVars['QW'] ?? 0) + (1);
    }
    // TODO-QSP: npc_had_sex[$boy[0]] = 1
    // TODO-QSP: npc_had_sex[$boy[1]] = 1
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    (s as any).mitkapicrand = Math.floor(Math.random() * 5) + 1;
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhgroup1.\'+mitkapicrand+\'.jpg');
    // TODO-QSP: dynamic text: <<$boydesc[0]>> and <<$boydesc[1]>> waste no time as they quickly put you and Mi...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} waste no time as they quickly put you and Mira on your knees. They shove their cocks in your mouths and you give them sloppy blowjobs while trying to avoid gagging.`);
    // TODO-QSP: dynamic text: <<$boydesc[0]>> turns you around and begins thrusting rapidly, as Mira moans bes...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} turns you around and begins thrusting rapidly, as Mira moans beside you from the fucking she is receiving from ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })}.`);
    scene.text('The boys always seem to be constantly changing positions and trading you and Mira back and forth between them.');
    // TODO-QSP: dynamic text: Out of the corner of your eye, you see <<$boydesc[2]>> stroking himself as he wa...
    scene.text(`Out of the corner of your eye, you see ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} stroking himself as he watches you and Mira. You were only distracted for a second, but in that time ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} started cumming onto you and Mira.`);
    // TODO-QSP: dynamic text: <<$boydesc[2]>> walks up and says, "Ready for Round 2 girls?"
    scene.text(`${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} walks up and says, "Ready for Round 2 girls?"`);
    // TODO-QSP: gs 'cum_call', '', $boy[0], 1
    // TODO-QSP: gs 'cum_call', '', $boy[1], 1
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pleasure <<$boydesc[2]>> with Mira', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[2], 1
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    // TODO-QSP: npc_had_sex[$boy[2]] = 1
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    (s as any).mitkapicrand = Math.floor(Math.random() * 4) + 1;
    if (((s as any).mitkapicrand ?? 0) === 1) {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh2.2.jpg');
    } else {
      if (((s as any).mitkapicrand ?? 0) === 2) {
        scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.1.jpg');
      } else {
        if (((s as any).mitkapicrand ?? 0) === 3) {
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.5.jpg');
        } else {
          if (((s as any).mitkapicrand ?? 0) === 4) {
            scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.6.jpg');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: Mira seems to be just as insatiable as the boys as she races you over to <<$boyd...
    scene.text(`Mira seems to be just as insatiable as the boys as she races you over to ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}'s cock. She is the first to wrap her lips around it as you are left to try and lick whatever Mira isn't currently shoving down her throat.`);
    // TODO-QSP: dynamic text: You get your turn soon though when <<$boydesc[2]>> says, "Come on Mira, give <<$...
    scene.text(`You get your turn soon though when ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} says, "Come on Mira, give ${((s as any).pcs_nickname ?? 0)} a chance, there is more than enough for both of you."`);
    // TODO-QSP: dynamic text: As Mira removes <<$boydesc[2]>>'s cock from her mouth she gives you a little smi...
    scene.text(`As Mira removes ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}'s cock from her mouth she gives you a little smile and wink. You quickly begin to suck with even more enthusiasm, not wanting to be outdone by Mira.`);
    scene.actions([
      { label: 'Make <<$boydesc[2]>> cum', handler: (st: GameState) => {
    (s as any).mitkapicrand = Math.floor(Math.random() * 8) + 1;
    if (((s as any).mitkapicrand ?? 0) <= 5) {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhcum0.\'+mitkapicrand+\'.jpg');
    } else {
      if (((s as any).mitkapicrand ?? 0) === 6) {
        scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoralcum0.4.jpg');
      } else {
        if (((s as any).mitkapicrand ?? 0) === 7) {
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoralcum0.5.jpg');
        } else {
          if (((s as any).mitkapicrand ?? 0) === 8) {
            scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkagroupcum2.jpg');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: <<$boydesc[2]>> doesn't last long under the combined talents of you and Mira. Yo...
    scene.text(`${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} doesn't last long under the combined talents of you and Mira. You don't even have time to get in position to share the cumshot with Mira, as he erupts a huge load onto your face.`);
    scene.text('Mira doesn\'t seem to mind as she once again starts to lap up the cum that ran down your face and pooled on your breasts and body.');
    // TODO-QSP: gs 'cum_call', 'breasts', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'stomach', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'face', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[2], 1
    qspCall(s, 'arousal', 'end');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Sit down outside', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Sit down in the trailer', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGroupBj(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/drunk1.jpg');
    // TODO-QSP: dynamic text: While you are drinking with Mira, <<$boydesc[0]>> jokingly says that you both lo...
    scene.text(`While you are drinking with Mira, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} jokingly says that you both look incredible, but would look even better with cocks in your mouths.`);
    scene.text('Mira giggles in response, "You mean like this?", as she gets on her knees in front of him. She quickly pulls his cock out of his pants and wraps her lips around it.');
    // TODO-QSP: dynamic text: Seeing this <<$boydesc[1]>> immediately walks up to you and takes his cock out t...
    scene.text(`Seeing this ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} immediately walks up to you and takes his cock out too.`);
    scene.actions([
      { label: 'Suck <<$boydesc[1]>> too', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[1], 1
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    if (((s as any).MiraVars ?? 0)?.['QW'] < 15) {
      (s as any).MiraVars['QW'] = ((s as any).MiraVars['QW'] ?? 0) + (1);
    }
    // TODO-QSP: npc_had_sex[$boy[0]] = 1
    // TODO-QSP: npc_had_sex[$boy[1]] = 1
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'arousal', 'hj', 10, 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    (s as any).mitkapicrand = Math.floor(Math.random() * 4) + 1;
    if (((s as any).mitkapicrand ?? 0) === 1) {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh0.1.jpg');
    } else {
      if (((s as any).mitkapicrand ?? 0) === 2) {
        scene.img('images/shared/sex/group/four2.jpg');
      } else {
        if (((s as any).mitkapicrand ?? 0) === 3) {
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.4.jpg');
        } else {
          if (((s as any).mitkapicrand ?? 0) === 4) {
            scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.7.jpg');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: You follow Mira's example and obediently drop to your knees and begin to blow <<...
    scene.text(`You follow Mira's example and obediently drop to your knees and begin to blow ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} as well. Both of your heads bob in unison as the boys moan in pleasure.`);
    scene.text('Mira occasionally looks at you to see if you are keeping up, but you aren\'t having any trouble at all. You\'ve gotten used to these nighttime adventures and have come to even enjoy them as well.');
    scene.actions([
      { label: 'Make <<$boydesc[1]>> cum', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoralcum0.1.jpg');
    // TODO-QSP: dynamic text: Out of the corner of your eye, you see <<$boydesc[2]>> stroking himself as he wa...
    scene.text(`Out of the corner of your eye, you see ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} stroking himself as he watches you and Mira. You were only distracted for a second, but in that time ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} started cumming onto you and Mira.`);
    // TODO-QSP: dynamic text: You open your mouth in surprise and feel cum fly into your mouth. As you turn ba...
    scene.text(`You open your mouth in surprise and feel cum fly into your mouth. As you turn back to look at Mira again, her tongue greedily licks some of the cum off your face. You begin to return the favor as ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} walks up and says, "Ready for Round 2 girls?"`);
    // TODO-QSP: gs 'cum_call', 'breasts', $boy[0], 1
    // TODO-QSP: gs 'cum_call', 'stomach', $boy[0], 1
    // TODO-QSP: gs 'cum_call', 'face', $boy[1], 1
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pleasure <<$boydesc[2]>> with Mira', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[2], 1
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    // TODO-QSP: npc_had_sex[$boy[2]] = 1
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    (s as any).mitkapicrand = Math.floor(Math.random() * 4) + 1;
    if (((s as any).mitkapicrand ?? 0) === 1) {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh2.2.jpg');
    } else {
      if (((s as any).mitkapicrand ?? 0) === 2) {
        scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.1.jpg');
      } else {
        if (((s as any).mitkapicrand ?? 0) === 3) {
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.5.jpg');
        } else {
          if (((s as any).mitkapicrand ?? 0) === 4) {
            scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.6.jpg');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: Mira seems to be just as insatiable as the boys as she races you over to <<$boyd...
    scene.text(`Mira seems to be just as insatiable as the boys as she races you over to ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}'s cock. She is the first to wrap her lips around it as you are left to try and lick whatever Mira isn't currently shoving down her throat.`);
    // TODO-QSP: dynamic text: You get your turn soon though when <<$boydesc[2]>> says, "Come on Mira, give <<$...
    scene.text(`You get your turn soon though when ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} says, "Come on Mira, give ${((s as any).pcs_nickname ?? 0)} a chance, there is more than enough for both of you."`);
    // TODO-QSP: dynamic text: As Mira removes <<$boydesc[2]>>'s cock from her mouth she gives you a little smi...
    scene.text(`As Mira removes ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}'s cock from her mouth she gives you a little smile and wink. You quickly begin to suck with even more enthusiasm, not wanting to be outdone by Mira.`);
    scene.actions([
      { label: 'Make <<$boydesc[2]>> cum', handler: (st: GameState) => {
    (s as any).mitkapicrand = Math.floor(Math.random() * 8) + 1;
    if (((s as any).mitkapicrand ?? 0) <= 5) {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhcum0.\'+mitkapicrand+\'.jpg');
    } else {
      if (((s as any).mitkapicrand ?? 0) === 6) {
        scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoralcum0.4.jpg');
      } else {
        if (((s as any).mitkapicrand ?? 0) === 7) {
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoralcum0.5.jpg');
        } else {
          if (((s as any).mitkapicrand ?? 0) === 8) {
            scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkagroupcum2.jpg');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: <<$boydesc[2]>> doesn't last long under the combined talents of you and Mira. Yo...
    scene.text(`${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} doesn't last long under the combined talents of you and Mira. You don't even have time to get in position to share the cumshot with Mira, as he erupts a huge load onto your face.`);
    scene.text('Mira doesn\'t seem to mind as she once again starts to lap up the cum that ran down your face and pooled on your breasts and body.');
    // TODO-QSP: gs 'cum_call', 'breasts', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'stomach', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'face', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[2], 1
    qspCall(s, 'arousal', 'end');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Sit down outside', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Sit down in the trailer', goto: ['mitkabuh_group', 'partywithMira'] },
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
  } else {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/drunk1.jpg');
    // TODO-QSP: dynamic text: While you are drinking with Mira, <<$boydesc[0]>> jokingly says that you both lo...
    scene.text(`While you are drinking with Mira, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} jokingly says that you both look incredible, but would look even better with cocks in your mouths.`);
    scene.text('Mira giggles in response, "You mean like this?", as she gets on her knees in front of him. She quickly pulls his cock out of his pants and wraps her lips around it.');
    scene.actions([
      { label: 'Look at Mira', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'sub');
    qspCall(s, 'stat', '');
    (s as any).mitkapicrand = Math.floor(Math.random() * 5) + 1;
    if (((s as any).mitkapicrand ?? 0) <= 5) {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh1.\'+mitkapicrand+\'.jpg');
    } else {
      if (((s as any).mitkapicrand ?? 0) === 6) {
        scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh0.3.jpg');
      } else {
        if (((s as any).mitkapicrand ?? 0) === 7) {
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh0.4.jpg');
        } else {
          if (((s as any).mitkapicrand ?? 0) === 8) {
            scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh0.5.jpg');
          } else {
            if (((s as any).mitkapicrand ?? 0) === 9) {
              scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh2.1.jpg');
            }
          }
        }
      }
    }
    // TODO-QSP: dynamic text: You spend the next few minutes watching Mira. You can't bring yourself to look a...
    scene.text(`You spend the next few minutes watching Mira. You can't bring yourself to look away as you watch her enjoy herself with ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })}'s cock.`);
    // TODO-QSP: dynamic text: <<$boydesc[1]>> and <<$boydesc[2]>> notice your interest and walk up to you. The...
    scene.text(`${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} notice your interest and walk up to you. They say, "Don't wory we can have some fun with you too" as they take their cocks out for you.`);
    scene.actions([
      { label: 'Suck them both', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[1], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[2], 1
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    if (((s as any).MiraVars ?? 0)?.['QW'] < 15) {
      (s as any).MiraVars['QW'] = ((s as any).MiraVars['QW'] ?? 0) + (1);
    }
    // TODO-QSP: npc_had_sex[$boy[1]] = 1
    // TODO-QSP: npc_had_sex[$boy[2]] = 1
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'arousal', 'hj', 10, 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    (s as any).mitkapicrand = Math.floor(Math.random() * 3) + 2;
    if (((s as any).mitkapicrand ?? 0) <= 3) {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.\'+mitkapicrand+\'.jpg');
    } else {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoral0.8.jpg');
    }
    // TODO-QSP: dynamic text: You kneel and position yourself between <<$boydesc[1]>> and <<$boydesc[2]>>. The...
    scene.text(`You kneel and position yourself between ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}. The boys never leave your mouth empty as they swap back and forth, each one taking turns using your mouth.`);
    // TODO-QSP: dynamic text: You make sure to keep stroking both boys as you try to equally please both of th...
    scene.text(`You make sure to keep stroking both boys as you try to equally please both of them. It isn't enough for ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} as he puts his hand on the back of your head, shoving his cock deeper down your throat.`);
    // TODO-QSP: dynamic text: As you begin to gag a little, <<$boydesc[2]>> slaps his dick against your face a...
    scene.text(`As you begin to gag a little, ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} slaps his dick against your face and laughs, "Perfect, right where you should be. You know it is tough, deciding whether you or Mira is the better fuck, but why choose when we can have both!"`);
    scene.actions([
      { label: 'Make them both cum', handler: (st: GameState) => {
    (s as any).mitkapicrand = Math.floor(Math.random() * 2) + 2;
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoralcum0.\'+mitkapicrand+\'.jpg');
    // TODO-QSP: dynamic text: You pick up the pace, moving your head faster and faster with each stroke. <<$bo...
    scene.text(`You pick up the pace, moving your head faster and faster with each stroke. ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} is the first to cum and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} isn't far behind him.`);
    scene.text('They both pull back a little before shooting their loads onto you. There is a decent amount of cum that has gotten in your hair and dripped down your face onto your body.');
    // TODO-QSP: gs 'cum_call', 'breasts', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'stomach', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'face', $boy[1], 1
    // TODO-QSP: gs 'cum_call', 'hair', $boy[1], 1
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Look at Mira again', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    (s as any).mitkapicrand = Math.floor(Math.random() * 7) + 1;
    if (((s as any).mitkapicrand ?? 0) <= 5) {
      scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhcum0.\'+mitkapicrand+\'.jpg');
    } else {
      if (((s as any).mitkapicrand ?? 0) === 6) {
        scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoralcum0.4.jpg');
      } else {
        if (((s as any).mitkapicrand ?? 0) === 7) {
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhoralcum0.5.jpg');
        }
      }
    }
    // TODO-QSP: dynamic text: You take another look at Mira once the boys are done with you and are just in ti...
    scene.text(`You take another look at Mira once the boys are done with you and are just in time to watch ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} finish on her face.`);
    scene.text('Mira notices you watching and smiles while pointing to the cum on both of your faces.');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Sit down outside', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Sit down in the trailer', goto: ['mitkabuh_group', 'partywithMira'] },
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
  }
  scene.build();
}

function enterGroupShow(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) >= 10) {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/drunk1.jpg');
    // TODO-QSP: dynamic text: While drinking with Mira, <<$boydesc[0]>> yells at you, "I'm bored!, get your as...
    scene.text(`While drinking with Mira, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} yells at you, "I'm bored!, get your asses over here and dance for us!"`);
    // TODO-QSP: dynamic text: <<$boydesc[1]>> and <<$boydesc[2]>> shout their approval of this idea as well. M...
    scene.text(`${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} shout their approval of this idea as well. Mira slurs a response that you assume was a yes because she begins to undress.`);
    // TODO-QSP: dynamic text: <<$boydesc[0]>>, looks over at you and says, "<<$pcs_nickname>>, why don't you j...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })}, looks over at you and says, "${((s as any).pcs_nickname ?? 0)}, why don't you join her?". ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} start cheering you on as you decide what to do.`);
    scene.actions([
      { label: 'Join Mira', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[1], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[2], 1
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    if (((s as any).MiraVars ?? 0)?.['QW'] < 15) {
      (s as any).MiraVars['QW'] = ((s as any).MiraVars['QW'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    (s as any).mitkapicrand = Math.floor(Math.random() * 4) + 0;
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhdance0.\'+mitkapicrand+\'.jpg');
    scene.text('You follow Mira\'s lead and quickly undress. It doesn\'t take long for you both to be completely naked in front of the boys.');
    scene.text('You whirl and dance around the fire completely naked. You are having so much fun dancing with Mira that you barely notice the boys watching you.');
    scene.text('The boys take their cocks out at begin to stroke themselves as they watch you and Mira dance for them. The boys are having a blast as they race to see which one can cum first, just by looking at you and Mira.');
    // TODO-QSP: dynamic text: The boys move closer and closer to you as they near climaxing. <<$boydesc[0]>> i...
    scene.text(`The boys move closer and closer to you as they near climaxing. ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} is the first to cum, quickly followed by ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}. The combination of the three boys cum lands all over you and Mira.`);
    // TODO-QSP: gs 'cum_call', 'butt', $boy[0], 1
    // TODO-QSP: gs 'cum_call', 'labia', $boy[0], 1
    // TODO-QSP: gs 'cum_call', 'breasts', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'stomach', $boy[2], 1
    // TODO-QSP: gs 'cum_call', 'face', $boy[1], 1
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
    // TODO-QSP: gs 'cum_call', 'hair', $boy[1], 1
    qspCall(s, 'arousal', 'foreplay', 15, 'exhibitionism', 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Sit down outside', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Sit down in the trailer', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/drunk1.jpg');
    // TODO-QSP: dynamic text: While drinking with Mira, <<$boydesc[0]>> yells at you, "I'm bored!, get your as...
    scene.text(`While drinking with Mira, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} yells at you, "I'm bored!, get your asses over here a give us a show to remember! Let's get a good look at all your holes!"`);
    // TODO-QSP: dynamic text: <<$boydesc[1]>> and <<$boydesc[2]>> shout their approval of this idea as well. M...
    scene.text(`${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} shout their approval of this idea as well. Mira slurs a response that you assume was a yes because she begins to undress.`);
    // TODO-QSP: dynamic text: <<$boydesc[0]>>, looks over at you and says, "<<$pcs_nickname>>, why don't you j...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })}, looks over at you and says, "${((s as any).pcs_nickname ?? 0)}, why don't you join her?". ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} start cheering you on as you decide what to do.`);
    scene.actions([
      { label: 'Join Mira', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[1], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[2], 1
    qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    if (((s as any).MiraVars ?? 0)?.['QW'] < 15) {
      (s as any).MiraVars['QW'] = ((s as any).MiraVars['QW'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    if (((s as any).sunWeather ?? 0) === 1) {
      (s as any).mitkapicrand = Math.floor(Math.random() * 3) + 1;
      if (((s as any).mitkapicrand ?? 0) === 1) {
        // TODO-QSP: gs 'cum_call', 'butt', $boy[0], 1
        // TODO-QSP: gs 'cum_call', 'legs', $boy[0], 1
        // TODO-QSP: gs 'cum_call', 'butt', $boy[2], 1
        // TODO-QSP: gs 'cum_call', 'legs', $boy[2], 1
        // TODO-QSP: gs 'cum_call', 'butt', $boy[1], 1
        // TODO-QSP: gs 'cum_call', 'legs', $boy[1], 1
        qspCall(s, 'arousal', 'foreplay', 15, 'exhibitionism', 'sub');
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'stat', '');
        scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhshow1.jpg');
        scene.text('You follow Mira\'s lead and quickly undress. It doesn\'t take long for you both to be completely naked in front of the boys.');
        scene.text('You bend over for the boys, giving them a great view of your ass. The boys take their cocks out at begin to stroke themselves as they watch you and Mira pose for them.');
        scene.text('The boys are having a blast as they race to see which one can cum first, just by looking at you and Mira. The boys move closer and closer to you as they near climaxing.');
        // TODO-QSP: dynamic text: <<$boydesc[0]>> is the first to cum, quickly followed by <<$boydesc[1]>> and <<$...
        scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} is the first to cum, quickly followed by ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}. The combination of the three boys cum lands all over you and Mira. This is more than enough to finally bring yourself to an orgasm too.`);
      } else {
        if (((s as any).mitkapicrand ?? 0) <= 3) {
          // TODO-QSP: gs 'cum_call', 'breasts', $boy[0], 1
          // TODO-QSP: gs 'cum_call', 'stomach', $boy[0], 1
          // TODO-QSP: gs 'cum_call', 'breasts', $boy[2], 1
          // TODO-QSP: gs 'cum_call', 'stomach', $boy[2], 1
          // TODO-QSP: gs 'cum_call', 'face', $boy[1], 1
          // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
          // TODO-QSP: gs 'cum_call', 'hair', $boy[1], 1
          qspCall(s, 'arousal', 'clit_finger', 15, 'exhibitionism', 'sub', 'masturbate');
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhshow2.jpg');
          scene.text('You follow Mira\'s lead and quickly undress. It doesn\'t take long for you both to be completely naked in front of the boys.');
          scene.text('You sit down on the ground and begin to masturbate for the boys. At first, it is a bit uncomfortable since you are just trying to finger yourself on command, without any foreplay. But soon a feeling of excitement takes over as Mira moans next to you.');
          scene.text('The boys take their cocks out at begin to stroke themselves as they watch you and Mira masturbate for them. The boys are having a blast as they race to see which one can cum first, just by looking at you and Mira.');
          // TODO-QSP: dynamic text: The boys move closer and closer to you as they near climaxing. <<$boydesc[0]>> i...
          scene.text(`The boys move closer and closer to you as they near climaxing. ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} is the first to cum, quickly followed by ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}. The combination of the three boys cum lands all over you and Mira. This is more than enough to finally bring yourself to an orgasm too.`);
        } else {
          if (((s as any).mitkapicrand ?? 0) === 3  &&  ((s as any).pcs_ass ?? 0) > 15) {
            // TODO-QSP: gs 'cum_call', 'butt', $boy[0], 1
            // TODO-QSP: gs 'cum_call', 'legs', $boy[0], 1
            // TODO-QSP: gs 'cum_call', 'butt', $boy[2], 1
            // TODO-QSP: gs 'cum_call', 'legs', $boy[2], 1
            // TODO-QSP: gs 'cum_call', 'butt', $boy[1], 1
            // TODO-QSP: gs 'cum_call', 'legs', $boy[1], 1
            qspCall(s, 'arousal', 'clit_finger', 15, 'exhibitionism', 'sub', 'masturbate');
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhshow2.mp4');
            scene.text('You follow Mira\'s lead and quickly undress. It doesn\'t take long for you both to be completely naked in front of the boys.');
            scene.text('You kneel on the ground and begin to tease your fingers into your ass. As you get more and more excited, you eventually are able to thrust most of your hand into your ass. The boys are most amazed at the feat and move closer to watch.');
            scene.text('The boys take their cocks out at begin to stroke themselves as they watch you and Mira masturbate for them. The boys are having a blast as they race to see which one can cum first, just by looking at you and Mira.');
            // TODO-QSP: dynamic text: The boys move closer and closer to you as they near climaxing. <<$boydesc[0]>> i...
            scene.text(`The boys move closer and closer to you as they near climaxing. ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} is the first to cum, quickly followed by ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}. The combination of the three boys cum lands all over you and Mira. This is more than enough to finally bring yourself to an orgasm too.`);
          }
        }
      }
    } else {
      (s as any).mitkapicrand = Math.floor(Math.random() * 2) + 1;
      if (((s as any).mitkapicrand ?? 0) === 1) {
        // TODO-QSP: gs 'cum_call', 'breasts', $boy[0], 1
        // TODO-QSP: gs 'cum_call', 'stomach', $boy[0], 1
        // TODO-QSP: gs 'cum_call', 'breasts', $boy[2], 1
        // TODO-QSP: gs 'cum_call', 'stomach', $boy[2], 1
        // TODO-QSP: gs 'cum_call', 'face', $boy[1], 1
        // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
        // TODO-QSP: gs 'cum_call', 'hair', $boy[1], 1
        qspCall(s, 'arousal', 'foreplay', 15, 'exhibitionism', 'sub');
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'stat', '');
        scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh2.3.jpg');
        scene.text('You follow Mira\'s lead and quickly undress. It doesn\'t take long for you both to be completely naked in front of the boys.');
        scene.text('You spready your legs open for the boys, giving them a great view of your pussy. The boys take their cocks out at begin to stroke themselves as they watch you and Mira pose for them.');
        scene.text('The boys are having a blast as they race to see which one can cum first, just by looking at you and Mira. The boys move closer and closer to you as they near climaxing.');
        // TODO-QSP: dynamic text: <<$boydesc[0]>> is the first to cum, quickly followed by <<$boydesc[1]>> and <<$...
        scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} is the first to cum, quickly followed by ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}. The combination of the three boys cum lands all over you and Mira. This is more than enough to finally bring yourself to an orgasm too.`);
      } else {
        if (((s as any).mitkapicrand ?? 0) === 2) {
          // TODO-QSP: gs 'cum_call', 'butt', $boy[0], 1
          // TODO-QSP: gs 'cum_call', 'legs', $boy[0], 1
          // TODO-QSP: gs 'cum_call', 'butt', $boy[2], 1
          // TODO-QSP: gs 'cum_call', 'legs', $boy[2], 1
          // TODO-QSP: gs 'cum_call', 'butt', $boy[1], 1
          // TODO-QSP: gs 'cum_call', 'legs', $boy[1], 1
          qspCall(s, 'arousal', 'foreplay', 15, 'exhibitionism', 'sub');
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuh2.4.jpg');
          scene.text('You follow Mira\'s lead and quickly undress. It doesn\'t take long for you both to be completely naked in front of the boys.');
          scene.text('You kneel on all fours for the boys, giving them a great view of your ass. The boys take their cocks out at begin to stroke themselves as they watch you and Mira pose for them.');
          scene.text('The boys are having a blast as they race to see which one can cum first, just by looking at you and Mira. The boys move closer and closer to you as they near climaxing.');
          // TODO-QSP: dynamic text: <<$boydesc[0]>> is the first to cum, quickly followed by <<$boydesc[1]>> and <<$...
          scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} is the first to cum, quickly followed by ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })}. The combination of the three boys cum lands all over you and Mira. This is more than enough to finally bring yourself to an orgasm too.`);
        }
      }
    }
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Sit down outside', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Sit down in the trailer', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterGroupAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitka_group/drunk1.jpg');
  // TODO-QSP: dynamic text: While drinking with Mira, <<$boydesc[0]>> comes up to you and starts pulling off...
  scene.text(`While drinking with Mira, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} comes up to you and starts pulling off your clothes. "I'm going to fuck that nice ass of yours right now" he says.`);
  // TODO-QSP: dynamic text: <<$boydesc[1]>> and <<$boydesc[2]>> shout their approval of this idea and go ove...
  scene.text(`${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })} and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} shout their approval of this idea and go over to do the same to Mira. She doesn't bother resisting and goes along with it.`);
  scene.actions([
    { label: 'Let <<$boydesc[0]>> fuck your ass', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      (s as any).npc_QW['A63'] = ((s as any).npc_QW['A63'] ?? 0) + (1);
    }
    if (((s as any).MiraVars ?? 0)?.['QW'] < 15) {
      (s as any).MiraVars['QW'] = ((s as any).MiraVars['QW'] ?? 0) + (1);
    }
    // TODO-QSP: npc_had_sex[$boy[0]] = 1
    // TODO-QSP: gs 'cum_call', 'anus', $boy[0], 1
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'rough', 'deepthroat');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    (s as any).mitkapicrand = Math.floor(Math.random() * 5) + 1;
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhanal0.\'+mitkapicrand+\'.jpg');
    // TODO-QSP: dynamic text: <<$boydesc[0]>> takes you inside the trailer and pushes you down on the bed face...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} takes you inside the trailer and pushes you down on the bed face first. As he penetrates you, he says something to himself about choosing the right girl, whatever that means.`);
    // TODO-QSP: dynamic text: You wouldn't call this particularly enjoyable tonight as <<$boydesc[0]>> roughly...
    scene.text(`You wouldn't call this particularly enjoyable tonight as ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} roughly thrusts into you without a care. With the pace he is keeping, he doesn't last long and he quickly cums in your ass.`);
    // TODO-QSP: dynamic text: <<$boydesc[0]>> makes you lick his dick clean before taking you back to where th...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} makes you lick his dick clean before taking you back to where the other guys are already finished with Mira as well.`);
    scene.actions([
      { label: 'Go back with him', handler: (st: GameState) => {
    (s as any).mitkapicrand = Math.floor(Math.random() * 5) + 1;
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkabuhgroup0.\'+mitkapicrand+\'.jpg');
    // TODO-QSP: dynamic text: As you walk back to where you left Mira, <<$boydesc[1]>>, and <<$boydesc[2]>> yo...
    scene.text(`As you walk back to where you left Mira, ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh_group" })}, and ${qspUntranslated(s, "boydesc[2]", { location: "mitkabuh_group" })} you see they are just finishing up with Mira too.`);
    // TODO-QSP: dynamic text: <<$boydesc[0]>> walks up to them and says, "I think I got the better deal here, ...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh_group" })} walks up to them and says, "I think I got the better deal here, but maybe you'll get ${((s as any).pcs_nickname ?? 0)} next time."`);
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Sit down outside', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Sit down in the trailer', goto: ['mitkabuh_group', 'partywithMira'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'partywithMira':
      enterPartywithMira(s, scene);
      break;
    case 'group_sex':
      enterGroupSex(s, scene);
      break;
    case 'group_bj':
      enterGroupBj(s, scene);
      break;
    case 'group_show':
      enterGroupShow(s, scene);
      break;
    case 'group_anal':
      enterGroupAnal(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mitkabuh_group: LocationDef = {
  name: 'mitkabuh_group',
  title: 'You follow the boys into the woods. Soon the familiar old tr',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You follow the boys into the woods. Soon the familiar old trailer comes into view.'],
  enter: enter,
};
