import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHousekeepingRequest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 1  &&  ((s as any).util_rand_favor ?? 0) < 3) {
    (s as any).util_rand_favor = Math.floor(Math.random() * 3) + 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).util_rand_favor ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A172');
      scene.img('images/characters/shared/headshots_main/big172.jpg');
    } else {
      if (((s as any).util_rand_favor ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A174');
        scene.img('images/characters/shared/headshots_main/big174.jpg');
      } else {
        if (((s as any).util_rand_favor ?? 0) === 3) {
          qspCall(s, 'boyStat', 'A173');
          scene.img('images/characters/shared/headshots_main/big173.jpg');
        }
      }
    }
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$boydesc>> approaches you. "Hey, I need your help with something."
    scene.text(`${((s as any).boydesc || '')} approaches you. "Hey, I need your help with something."`);
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"I\'ll help later, busy right now"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"I\'ll help later, busy right now"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (3);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gad_swamp_yard', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Sure what is it?', handler: (st: GameState) => {
    if ((!((s as any).campfire ?? 0))) {
      if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says. "The fire is out. Can you please ensure it keeps g...
        scene.text(`"${((s as any).pcs_nickname || '')}," he says. "The fire is out. Can you please ensure it keeps going while we are outside?"`);
      }
      if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he uses his stern voice. "The fire is out. You can at least...
        scene.text(`"${((s as any).pcs_nickname || '')}," he uses his stern voice. "The fire is out. You can at least keep the fire going. No way you are that much of a whiny princess."`);
      }
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] -= 3
  }, goto: ['gad_swamp_yard', 'campfire'] },
      ]);
    } else {
      if (((s as any).dirty_swamphouse ?? 0) > 5) {
        if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says. "The hut is a mess. Could you take care of it, ple...
          scene.text(`"${((s as any).pcs_nickname || '')}," he says. "The hut is a mess. Could you take care of it, please?"`);
        }
        if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he uses his stern voice. "The house is a mess. Take care of...
          scene.text(`"${((s as any).pcs_nickname || '')}," he uses his stern voice. "The house is a mess. Take care of it."`);
        }
        scene.actions([
          { label: 'Clean the hut', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 2
  }, goto: ['hunter_favors', 'dirty_swamphouse'] },
        ]);
      } else {
        if (((s as any).dirty_swamp_yard ?? 0) > 5) {
          if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says. "The yard is a mess. Can you please take care of i...
            scene.text(`"${((s as any).pcs_nickname || '')}," he says. "The yard is a mess. Can you please take care of it?"`);
          }
          if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says sternly. "What the hell is all this trash doing out...
            scene.text(`"${((s as any).pcs_nickname || '')}," he says sternly. "What the hell is all this trash doing out there? Go and pick it all."`);
          }
          scene.actions([
            { label: 'Clean the yard', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 3
  }, goto: ['hunter_favors', 'yard_cleanup'] },
          ]);
        } else {
          if (((s as any).mushroom_soup ?? 0) + ((s as any).meat_stew ?? 0) < 4) {
            if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says. "We don't have anything for dinner. Could you plea...
              scene.text(`"${((s as any).pcs_nickname || '')}," he says. "We don't have anything for dinner. Could you please cook something?"`);
            }
            if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says sternly. "We have nothing to eat for dinner, you us...
              scene.text(`"${((s as any).pcs_nickname || '')}," he says sternly. "We have nothing to eat for dinner, you useless bitch. Go make something before we starve."`);
            }
            if (((s as any).boletus ?? 0) > 0) {
              scene.actions([
                { label: 'Cook some mushroom soup (0:30)', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 4
    qspCall(st, 'hunter_favors', 'mushroom_soup');
  } },
              ]);
            } else {
              if (((s as any).raw_meat ?? 0) > 0) {
                scene.actions([
                  { label: 'Cook some meat stew (1:00)', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 3
    qspCall(st, 'hunter_favors', 'meat_stew');
  } },
                ]);
              } else {
                scene.actions([
                  { label: '"There is nothing to cook though…"', goto: ['gad_swamp_yard', 'start'] },
                ]);
              }
            }
          } else {
            if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
              scene.text('"Actually, never mind. I got this, thanks, though."');
            }
            if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
              scene.text('"Actually, never mind. I do not have anything you are useful for."');
            }
            scene.actions([
              { label: 'Okay', handler: (st: GameState) => {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (5);
    qspGoto(s, 'gad_swamp_yard', 'start');
  } },
            ]);
          }
        }
      }
    }
  } },
      { label: '"What?! Do I look like a servant to you?', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    // TODO-QSP: dynamic text: You walk away from <<$boydesc>>
    scene.text(`You walk away from ${((s as any).boydesc || '')}`);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (10);
    scene.actions([
      { label: 'Continue', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
    ]);
  } else {
    qspGoto(s, 'gad_swamp_yard', 'start');
  }
  // TODO-QSP: end
  scene.build();
}

function enterYardCleanup(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/hunters/dirty_swamp_yard.jpg');
  scene.text('You notice that the yard has gotten pretty dirty. "I need to do something about this." you think.');
  scene.text('You grab a garbage bag and start picking up trash.');
  scene.text('After a while, you\'ve tidied up the yard and put the trash in the garbage bag. You\'re pretty pleased with yourself.');
  if (((s as any).dirty_swamp_yard ?? 0) < 10) {
    (s as any).minut = ((s as any).minut ?? 0) + (60);
    qspCall(s, 'sweat', 'add', 10);
  } else {
    if (((s as any).dirty_swamp_yard ?? 0) < 20) {
      (s as any).minut = ((s as any).minut ?? 0) + (120);
      qspCall(s, 'sweat', 'add', 20);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + (180);
      qspCall(s, 'sweat', 'add', 30);
    }
  }
  (s as any).dirty_swamp_yard = 0;
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Done', goto: ['gad_swamp_yard', 'start'] },
  ]);
  scene.build();
}

function enterDirtySwamphouse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/hunters/dirty_swamphouse.jpg');
  scene.text('Visiting the hut, you notice that the hut has gotten pretty dirty. "I need to do something about this." you think. So you grab a broom and a rag and begin cleaning.');
  scene.text('After a while, you finish cleaning and put everything back in order again. You\'re pretty pleased with yourself.');
  if (((s as any).dirty_swamphouse ?? 0) < 10) {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'sweat', 'add', 10);
  } else {
    if (((s as any).dirty_swamphouse ?? 0) < 20) {
      (s as any).minut = ((s as any).minut ?? 0) + 120;
      qspCall(s, 'sweat', 'add', 20);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 180;
      qspCall(s, 'sweat', 'add', 30);
    }
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
  (s as any).dirty_swamphouse = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterMeatStew(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/hunters/hotsoup.jpg');
  (s as any).raw_meat = ((s as any).raw_meat ?? 0) - (1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).bucket = ((s as any).bucket ?? 0) - (1);
  (s as any).meat_stew = 2;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterMushroomSoup(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/hunters/hotsoup.jpg');
  (s as any).boletus = ((s as any).boletus ?? 0) - (1);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).bucket = ((s as any).bucket ?? 0) - (1);
  (s as any).mushroom_soup = 4;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCreeksideGangbangRequest(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/backwaterrelax2.jpg');
  scene.text('You\'re sitting down in the meadow near the road, relaxing, enjoying the nice weather, when Andrei, Sergei, and Igor suddenly approach you. They quickly surround you, not letting you move away.');
  // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>, we've been talking with each other, and we feel that yo...
  scene.text(`"Hey, ${((s as any).pcs_nickname || '')}, we've been talking with each other, and we feel that you need to repay us somehow for the lessons. So what do you say?"`);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'willpower', 'gangbang', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax3.jpg');
    scene.text('You politely refuse, saying you don\'t owe them anything, but the men don\'t accept a no, and you can see they\'re clearly not satisfied with your answer.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, don't fuck around with us. Deep inside, you know you need t...
    scene.text(`"${((s as any).pcs_firstname || '')}, don't fuck around with us. Deep inside, you know you need to repay us," said Andrei, grabbing you by the hair.`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (25);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (15);
    qspCall(s, 'hunter_interactions', 'creekside_rape');
    qspCall(s, 'stat', '');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (5);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) - (10);
    qspCall(s, 'stat', '');
    qspGoto(s, 'gad_backwater', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (25);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupundress.jpg');
    scene.text('"I guess you\'re right. I need to repay you somehow…"');
    scene.text('As soon as you\'ve agreed, the guys change their attitude towards you. Igor helps you up and leads you away from the road while Andrei and Sergei already begin taking your clothes off…');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/hantersgrouptanga.jpg');
    scene.text('They lay you down on the blanket and quickly pull off your panties. They drop their pants and stand in front of you with their cocks hanging in the open. "So what are you waiting for? Start sucking."');
    qspCall(s, 'outfit', 'backup', 'hunters');
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['hunter_interactions', 'creekside_gangbang'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterYardBondage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).yard_bound_temprand = Math.floor(Math.random() * 9) + 1;
    if (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) < 5) {
      qspCall(s, 'arousal', 'end');
      scene.img('images/locations/gadukino/sex/hunter/released_from_bondage.jpg');
      scene.text('Finally, with the hour getting so late, Igor comes to free you from your bounds. You are so drained you almost stumble down as you feel the blood rushing back to your hands.');
      scene.text('Even though you are glad to be able to move around again, part of you aches to be tied back and used as a naked and ready sex toy.');
      scene.actions([
        { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/hunter/bound_outdoors4.jpg');
    scene.text('You are bound entirely naked for some trees by the yard. The thought of being so helpless and exposed makes you feel butterflies in your stomach.');
    scene.text('Anyone could do anything they wanted with your body right now. You are aware of the nakedness of your most intimate areas and how they are available for the hunters to do anything they want.');
    qspCall(s, 'arousal', 'flash', 5, 'bound', 'exhibitionism', 'sub');
    qspCall(s, 'arousal', 'end');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).hunter_selector_temprand = Math.floor(Math.random() * 3) + 1;
    if (((s as any).hunter_selector_temprand ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A172');
    } else {
      if (((s as any).hunter_selector_temprand ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A173');
      } else {
        if (((s as any).hunter_selector_temprand ?? 0) === 3) {
          qspCall(s, 'boyStat', 'A174');
        }
      }
    }
    if (((s as any).yard_bound_temprand ?? 0) === 4) {
      scene.actions([
        { label: 'Further', goto: ['hunter_favors', 'yard_bondage', 'passing_bj'] },
      ]);
    } else {
      if (((s as any).yard_bound_temprand ?? 0) === 5) {
        scene.actions([
          { label: 'Further', goto: ['hunter_favors', 'yard_bondage', 'passing_fuck'] },
        ]);
      } else {
        if (((s as any).yard_bound_temprand ?? 0) === 6) {
          scene.actions([
            { label: 'Further', goto: ['hunter_favors', 'yard_bondage', 'clamp_fuck'] },
          ]);
        } else {
          if (((s as any).yard_bound_temprand ?? 0) === 8) {
            scene.actions([
              { label: 'Further', goto: ['hunter_favors', 'yard_bondage', 'unbound_fuck'] },
            ]);
          } else {
            scene.actions([
              { label: 'Wait', goto: ['hunter_favors', 'yard_bondage'] },
            ]);
          }
        }
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'lost_bet') {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (20);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (40);
    qspCall(s, 'arousal', 'flash', 15, 'bound', 'exhibitionism', 'humiliation');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/bound_outdoors2.jpg');
    scene.text('You let Andrei bind you right by the yard. Then, after he is done, he leaves you hanging there to take care of something.');
    scene.text('You are helpless and feel your nipples harden as you feel the breeze on your bare skin.');
    scene.actions([
      { label: 'Wait for him to come back', goto: ['hunter_favors', 'yard_bondage'] },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'passing_bj') {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (6);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (3);
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'bound', 'deepthroat');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/bound_fucked_mouth1.jpg');
    // TODO-QSP: dynamic text: You notice <<$boydesc>> walking towards you. Without saying a word, he slackens ...
    scene.text(`You notice ${((s as any).boydesc || '')} walking towards you. Without saying a word, he slackens your ties and pushes you down to your knees before tightening them back.`);
    scene.text('He does not waste too much time unzipping his cock and pushing it on your face. You comply and start sucking his dick.');
    scene.text('After a minute grabs your head and starts fucking your mouth. You struggle between breathing and trying not to puke as his cock rams in and out of your throat.');
    scene.actions([
      { label: 'Try and match his rhythm', handler: (st: GameState) => {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (4);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (2);
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'bound', 'deepthroat');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/bound_fucked_mouth2.jpg');
    scene.text('You decide to make it some more fun for him. You start bobbing your head in rhythm with his pumping.');
    scene.text('Whenever he is all the way down your throat, you swallow to massage his cock.');
    qspCall(s, 'dinsex', 'bj_random');
    scene.text('Your efforts start paying off pretty quickly as he grabs your head and starts pumping even more rapidly before he buries his cock all the way in');
    qspCall(s, 'dinsex', 'bj_swallow_random');
    scene.text('He gives you a pat on the head and says, "Now that\'s a good girl", before tying you upright and walking off, satisfied and drained.');
    scene.actions([
      { label: 'Further', goto: ['hunter_favors', 'yard_bondage'] },
    ]);
  } },
      { label: 'Let him have his way', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'rough', 'bound', 'deepthroat');
    qspCall(s, 'arousal', 'end');
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 15;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/bound_fucked_mouth3.jpg');
    scene.text('You decide that if you relax your throat and face, it will be easier not to puke over his dick.');
    scene.text('He strokes your hair as he keeps furiously ramming his cock up and down your throat, fucking your face as if it was a sex toy.');
    qspCall(s, 'dinsex', 'bj_random');
    scene.text('After a few minutes, he pulls out of your mouth and jerks off, splattering your face and chest with his spunk.');
    scene.text('As you blink the cum off your eyes, he zips up and ties you back upright before walking away without saying anything else.');
    scene.actions([
      { label: 'Further', goto: ['hunter_favors', 'yard_bondage'] },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'passing_fuck') {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (10);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (5);
    scene.img('images/locations/gadukino/sex/hunter/bound_fucked2.jpg');
    // TODO-QSP: dynamic text: You notice <<$boydesc>> walking towards you. Without saying a word, he unzips an...
    scene.text(`You notice ${((s as any).boydesc || '')} walking towards you. Without saying a word, he unzips and bends you over.`);
    // TODO-QSP: dynamic text: He rubs the tip of his dick against your wet pussy lips a few times before pushi...
    scene.text(`He rubs the tip of his dick against your wet pussy lips a few times before pushing in. You cannot help but gasp as ${((s as any).boydesc || '')}'s cock fills your pussy.`);
    scene.text('After letting you settle into the sensation for a second, he slowly starts pumping your pussy. You are screaming and moaning as he picks his pace up in a minute.');
    qspCall(s, 'dinsex', 'vaginal_sex', 10, 'bound');
    scene.actions([
      { label: 'Start pumping your hips to match him', handler: (st: GameState) => {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (5);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (2);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'bound');
    qspCall(s, 'arousal', 'end');
    (s as any).spafinloc = 0;
    (s as any).pose = 3;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/bound_fucked.mp4');
    // TODO-QSP: dynamic text: You cannot get enough of the sensation of <<$boydesc>>'s cock sliding inside you...
    scene.text(`You cannot get enough of the sensation of ${((s as any).boydesc || '')}'s cock sliding inside you. So you start pumping your hips to get more of his cock.`);
    // TODO-QSP: dynamic text: <<$boydesc>> starts fucking you harder before he buries his cock into the hilt i...
    scene.text(`${((s as any).boydesc || '')} starts fucking you harder before he buries his cock into the hilt inside you.`);
    qspCall(s, 'dinsex', 'sexcum');
    // TODO-QSP: dynamic text: After catching his breath, <<$boydesc>> gives your ass a fondle before walking a...
    scene.text(`After catching his breath, ${((s as any).boydesc || '')} gives your ass a fondle before walking away, leaving you hanging.`);
    scene.actions([
      { label: 'Further', goto: ['hunter_favors', 'yard_bondage'] },
    ]);
  } },
      { label: 'Let him have his way', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 10, 'rough', 'bound');
    qspCall(s, 'arousal', 'end');
    (s as any).spafinloc = 1;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 4;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 9;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/bound_fucked1.jpg');
    // TODO-QSP: dynamic text: You are overwhelmed by <<$boydesc>> pumping your pussy while you are bound, help...
    scene.text(`You are overwhelmed by ${((s as any).boydesc || '')} pumping your pussy while you are bound, helpless and naked like this.`);
    scene.text('You decide to give in and enjoy the sensation of being casually fucked like a blow-up doll.');
    scene.text('He roughly grabs your ass to brace himself as he picks his pace even further, pounding your pussy with near fury.');
    scene.text('Sounds of his hips rhythmically slamming against your ass fills your surroundings, mixed with the lewd smacking sounds of his cock pumping in your pussy and your loud moans and screams.');
    scene.text('As you start feeling his cock throbbing in your pussy, he pulls out and blows his load all over your ass and pussy.');
    // TODO-QSP: dynamic text: Without saying anything, <<$boydesc>> zips up and walks away, leaving you with c...
    scene.text(`Without saying anything, ${((s as any).boydesc || '')} zips up and walks away, leaving you with cum running down your legs.`);
    scene.actions([
      { label: 'Further', goto: ['hunter_favors', 'yard_bondage'] },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'clamp_fuck') {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (15);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (10);
    qspCall(s, 'boyStat', 'A172');
    qspCall(s, 'pain', '', 6, 'pinch', 'nipples');
    qspCall(s, 'pain', '', 3, 'pinch', 'breasts');
    qspCall(s, 'arousal', 'foreplay', 5, 'rough', 'masochism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/bondage_clamps3.jpg');
    scene.text('You are so preoccupied with thinking how you are tied up to some tree, wholly naked and exposed you do not hear Andrei approaching from behind.');
    scene.text('He yanks you by the nipple, not missing the opportunity, making you yelp loudly.');
    scene.text('"Hey now, don\'t fall asleep just yet. I have something special for you," he says before showing you a piece of leather strap and a clamp with a weight attached.');
    scene.text('"Hope you are into a bit of fun. Or, at least, we will find out," he says. But, of course, you do not object, having already agreed to "anything".');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 3, 'spank', 'nipples');
    qspCall(s, 'arousal', 'foreplay', 5, 'rough', 'masochism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/bondage_clamps2.jpg');
    scene.text('Andrei does not lose time starting to pay some special attention to your nipples.');
    scene.text('The leather strip stings, and you cannot help but yelp with each hit. But you somehow actually enjoy the sensation.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'pain', '', 10, 'pinch', 'nipples');
    qspCall(s, 'arousal', 'foreplay', (-10), 'rough', 'masochism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/bondage_clamps1.jpg');
    scene.text('Satisfied with the \'warm-up\', Andrei picks up the clamps and attaches them to your nipples.');
    scene.text('The mix of pain and pleasure from the clamps biting on your nipples is almost unbearable.');
    scene.text('It hurts, and you want to shake them off, yet you feel your pussy throbbing and getting wet the more you think about the pain.');
    scene.text('"Please, I can\'t take it anymore!" you plead.');
    scene.text('"Please" what, little princess?" Andrei asks.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Seriousy, please let me go!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Seriousy, please let me go!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (10);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) - (15);
    scene.img('images/locations/gadukino/sex/hunter/released_from_bondage.jpg');
    scene.text('"Well, alright, you are no fun," says Andrei before releasing you from your bonds.');
    scene.text('You rub your sore breasts for a few seconds before shooing Andrei away, staring at you, giving him a final show.');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Please fuck me!', handler: (st: GameState) => {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (5);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (25);
    qspCall(s, 'dinsex', 'vaginal_sex', 10, 'sub', 'bound', 'masochism', 'humiliation');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'bound', 'masochism', 'humiliation');
    scene.img('images/locations/gadukino/sex/hunter/bondage_clamps_fuck.jpg');
    scene.text('"You really like this. Don\'t you, now?" says Andrei before roughly penetrating you.');
    scene.text('You let out a loud moan from the relief of finally having your aching pussy filled. It does not take Andrei long to cum with you pumping your hips and doing most of the fucking.');
    qspCall(s, 'arousal', 'end');
    (s as any).spafinloc = 0;
    (s as any).pose = 3;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    qspCall(s, 'dinsex', 'sexcum');
    scene.text('After catching his breath, Andrei releases you from your bonds. "We should do this again," he says before walking away.');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'unbound_fuck') {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (15);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (15);
    qspCall(s, 'boyStat', 'A173');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'kiss', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/unbound_fucked2.jpg');
    scene.text('You do not notice Igor approaching you from behind before he starts stroking your body as he rubs his cock over your pussy lips.');
    // TODO-QSP: dynamic text: "You are driving me crazy, <<$pcs_nickname>>," he says. "I cannot help it any lo...
    scene.text(`"You are driving me crazy, ${((s as any).pcs_nickname || '')}," he says. "I cannot help it any longer. I need to have you."`);
    scene.text('You turn your head to give him a kiss as he undoes the last of the ropes.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'exhibitionism');
    scene.img('images/locations/gadukino/sex/hunter/unbound_fucked1.jpg');
    scene.text('Igor settles on the ground, and you settle on his crotch, mounting him.');
    scene.text('You start bouncing up and down, gasping from the feeling of his cock pumping inside you.');
    qspCall(s, 'dinsex', 'vaginal_sex', 10, 'exhibitonism');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/unbound_fucked3.jpg');
    scene.text('After some minutes, Igor pushes you on your hands and starts fucking you from behind.');
    scene.text('He really picks up the pace as you start moaning and screaming like a wanton whore, getting fucked like that right out in the open.');
    qspCall(s, 'dinsex', 'vaginal_sex', 10, 'exhibitonism', 'rough', 'humiliation');
    (s as any).spafinloc = 4;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 8;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.text('After a few more minutes of railing your pussy, you feel Igor pulling out and cumming all over your ass and back.');
    scene.img('images/locations/gadukino/sex/hunter/unbound_fucked_cum.jpg');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/unbound_nude.jpg');
    scene.text('After a couple of seconds catching your breath, you both get up. Before you walk away, Igor asks:');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, can I ask you for a favor? We all have gotten used to seeing...
    scene.text(`"${((s as any).pcs_nickname || '')}, can I ask you for a favor? We all have gotten used to seeing you in the nude."`);
    scene.text('"So," he says", Can you just walk around like that all the time?"');
    scene.text('"You mean, never wear clothes around and stay naked the whole time?" you ask, surprised.');
    scene.text('"Yes, at least while it is only us around," he says. "So what do you say?"');
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (20);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).forced_naked_day = 9999;
    qspCall(s, 'stat', '');
    scene.text('"Well," you respond. "At this point, we are well past the point of being shy about a bit of nudity. So sure, why not?" you reply.');
    // TODO-QSP: dynamic text: "Thanks, <<$pcs_nickname>>," he says before walking away
    scene.text(`"Thanks, ${((s as any).pcs_nickname || '')}," he says before walking away`);
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (5);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (15);
    qspCall(s, 'stat', '');
    scene.text('"Well," you respond. "Do I look like some sex toy to you?" you reply. "What is next? You just randomly fuck me whenever?"');
    // TODO-QSP: dynamic text: "You are not exactly all pure and innocent, <<$pcs_firstname>>," he says. "I thi...
    scene.text(`"You are not exactly all pure and innocent, ${((s as any).pcs_firstname || '')}," he says. "I think you are just being a bitchy cocktease", and walks away`);
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
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
  // TODO-QSP: end
  scene.build();
}

function enterNighttimeEntertainment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (3);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (8);
  } else {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (4);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (12);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/bj_1.jpg');
  scene.text('The boys immediately encircle you, pulling out their cocks. You can\'t help but giggle a little at how quickly they are ready for you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Grab Igor and Sergei', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'hj', (-7), 'gangbang');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/bj_2.jpg');
    scene.text('You grab Igor and Sergei\'s cocks, jerking them off. You can feel both their dicks engorge, firmly filling out your hands.');
    scene.actions([
      { label: 'Suck Sergei', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'arousal', 'bj', (-10), 'gangbang');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/bj_3.jpg');
    scene.text('You take Sergei\'s head in your mouth, slowly descending his shaft.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    qspCall(s, 'arousal', 'foreplay', (-2), 'gangbang');
    qspCall(s, 'arousal', 'bj', (-7), 'gangbang');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/bj_3.5.jpg');
    scene.text('Meanwhile, you feel Igor reaching under your shirt, tweaking and playing with your nipple as you bob up and down Sergei\'s cock.');
    scene.actions([
      { label: 'Suck Igor', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'arousal', 'bj', (-8), 'gangbang', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/bj_4.jpg');
    scene.text('You let Sergei\'s dick pop out of your mouth and switch to sucking Igor instead. You suck down to the hilt, letting his diamond-hard pulsing cock fill your throat.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 6;
    qspCall(s, 'arousal', 'bj', (-8), 'gangbang', 'deepthroat');
    qspCall(s, 'arousal', 'flash', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/buk_tit_expose_3.jpg');
    scene.text('As you pick up your pace with Igor, Andrei reaches under your shirt, pulling out your tit. You feel your nipple slightly harden at the breeze.');
    scene.text('Meanwhile, Igor calls out he is going to cum soon. On cue, you suck him down, milking his violently pulsing cock with your throat.');
    qspCall(s, 'cum_call', 'mouth', 'A173', 1);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'foreplay', (-4));
    qspCall(s, 'arousal', 'flash', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/buk_tit_expose_4.jpg');
    scene.text('Satisfied, Igor idly plays with your exposed breast as Andrei pulls out the other one, letting both of your tits air out as he keeps jerking himself off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'arousal', 'flash', (-8));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/buk_1.jpg');
    scene.text('It\'s not long before Andrei climaxes, ejaculating over your face and hair.');
    qspCall(s, 'cum_call', 'face', 'A172', 1);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'flash', (-7));
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/nighttime_entertainment/buk_2.jpg');
    scene.text('Seeing this, Sergei makes his way right next to you and picks up his pace for a hot moment before also jizzing all over the other side of your face, a couple drops finding their way to your exposed chest.');
    qspCall(s, 'cum_call', 'mouth', 'A174', 1);
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'housekeeping_request':
      enterHousekeepingRequest(s, scene);
      break;
    case 'yard_cleanup':
      enterYardCleanup(s, scene);
      break;
    case 'dirty_swamphouse':
      enterDirtySwamphouse(s, scene);
      break;
    case 'meat_stew':
      enterMeatStew(s, scene);
      break;
    case 'mushroom_soup':
      enterMushroomSoup(s, scene);
      break;
    case 'creekside_gangbang_request':
      enterCreeksideGangbangRequest(s, scene);
      break;
    case 'yard_bondage':
      enterYardBondage(s, scene);
      break;
    case 'nighttime_entertainment':
      enterNighttimeEntertainment(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hunter_favors: LocationDef = {
  name: 'hunter_favors',
  title: 'You notice that the yard has gotten pretty dirty. "I need to',
  region: 'other',
  enter: enter,
};
