import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).scoolboy = Math.floor(Math.random() * 5) + 1;
  if (((s as any).scoolboy ?? 0) === 1  &&  (!((s as any).DimaRudeBlock ?? 0))) {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('He tries to hide it, but the proud grin on his face tells you Dimka was the one groping your ass.');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Slap him hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Slap him hard', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (2);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (3);
    qspCall(s, 'npc_relationship', 'modify', 'A1', 'loathe');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('It\'s bad enough that he did it, but it\'s worse because you\'re on your period. "You fucking pervert!" you shout angrily and slap him across the face as hard as you can.');
      scene.text('You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    } else {
      scene.text('"You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('Dimka rubs his face and glares at those laughing before glaring at you. "You\'ll pay for that, bitch!" he shouts before storming off.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      ]);
    }
    if (((s as any).npc_rel ?? 0)?.['A1'] > 50) {
      qspCall(s, 'willpower', 'exhib', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lift your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tease him', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5));
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A1', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You pretend the other boys aren\'t there and step closer. "Come on Dimka. You know you only have to ask if you want to see more…" you smile sweetly as you slowly begin to lift your skirt.');
    // TODO-QSP: dynamic text: He looks down, eyes wide, but just before your skirt is high enough to reveal '+...
    scene.text('He looks down, eyes wide, but just before your skirt is high enough to reveal \'+iif($pantyworntype <> \'none\', \'your panties\', \'your pussy\')+\', you drop it and skip backward while giggling.');
    scene.text('"Pfft! You really thought I was gonna give everyone a show like that? Keep dreaming!"');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Slap him playfully', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A1', 'dislike');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy2.jpg');
    scene.text('Dimka isn\'t so bad, but you can\'t just let him do this to you.');
    scene.text('You give him a playful slap in the face. It\'s not hard enough to really hurt him, but enough to send a message.');
    scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
      ]);
    }
    scene.actions([
      { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 'like');
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (2);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (3);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
  }, goto: ['gschool_events', 'leave_break_events2'] },
      { label: 'Taunt him', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy4.jpg');
    scene.text('You\'re so horny you decide to tease him and see if you can push him into doing more. You put your finger in your mouth and give him a flirty smirk.');
    scene.text('"Come on Dimka, is that all you have for me?" you quietly ask in a lewd voice.');
    scene.text('His friends heard your question and are now daring him to take you to the men\'s room.');
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 'dislike');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You can see him starting to get aroused as you lean in close and whisper in his ear, loud enough for the others to hear. "This is what I have for you…"');
    scene.text('You start sliding your skirt slowly up your thighs, but just before it gets high enough to show them anything, you let it go and it drops back in place.');
    scene.text('"Which is nothing," you say with a giggle.');
    scene.text('As you walk away, you hear one of the boys talking to his friend. "God, so close! She\'s such a tease…"');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big8.jpg');
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('You can tell from his grin that Svyatoslav was the one groping your ass.');
      scene.text('"Nice! Good to see all your working out is good for something at least," he laughs and a few of the other boys join in.');
    } else {
      scene.text('You can tell from his disappointed expression that Svyatoslav was the one groping your ass. Perhaps he was expecting something firmer after hanging out with the athletic girls so much? Maybe you should work out more…');
    }
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Slap him hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Slap him hard', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (5);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'hate');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('It\'s bad enough that he did it, but it\'s worse because you\'re on your period. "You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('After rubbing his face, Svyatoslav looks at you in disbelief. "What the fuck was that for?! I was just messing with you!"');
    } else {
      scene.text('"You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('After rubbing his face, Svyatoslav looks at you in disbelief. "What the fuck was that for?! I was just messing with you!"');
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Lift your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tease him', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5));
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You pretend the other boys aren\'t there and step closer. "Come on Svyatoslav. You know you only have to ask if you want to see more…" you smile sweetly as you slowly begin to lift your skirt.');
    // TODO-QSP: dynamic text: He looks down, eyes wide, but just before your skirt is high enough to reveal '+...
    scene.text('He looks down, eyes wide, but just before your skirt is high enough to reveal \'+iif($pantyworntype <> \'none\', \'your panties\', \'your pussy\')+\', you drop it and skip backward while giggling.');
    scene.text('"Pfft! You really thought I was gonna give everyone a show like that? Keep dreaming!"');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      ]);
    }
    if (((s as any).scoolboy ?? 0) === 3) {
      scene.img('images/characters/shared/headshots_main/big6.jpg');
      scene.text('You can tell from the embarrassed look on his face and the admiring glances of his friends that Petka was the one touching your ass.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Slap him hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Slap him hard', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (2);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (3);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (5);
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'dislike');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('It\'s bad enough that he did it, but it\'s worse because you\'re on your period. "You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    } else {
      scene.text('"You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'exhib', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lift your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tease him', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You pretend the other boys aren\'t there and step closer. "Come on Lazar, you know you only have to ask if you want to see more…" you smile sweetly as you slowly begin to lift your skirt.');
    // TODO-QSP: dynamic text: He grins expectantly at you, confident you're going to show him the goods. Just ...
    scene.text('He grins expectantly at you, confident you\'re going to show him the goods. Just before your skirt is high enough to reveal \'+iif($pantyworntype <> \'none\', \'your panties\', \'your pussy\')+\', you drop it and skip backward, giggling.');
    scene.text('"Pfft! You really thought I was gonna give everyone a show like that? Keep dreaming!"');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Ignore it', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (5);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (5);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (10);
  }, goto: ['gschool_events', 'leave_break_events2'] },
        { label: 'Slap him playfully', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).school_static_num ?? 0), (-2));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy2.jpg');
    scene.text('Petka isn\'t so bad, but you can\'t just let him do this to you.');
    scene.text('You give him a playful slap in the face. It\'s not hard enough to really hurt him, but enough to send a message.');
    scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
        { label: 'Taunt him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy4.jpg');
    scene.text('You\'re so horny you decide to tease him and see if you can push him into doing more. You put your finger in your mouth and give him a flirty smirk.');
    scene.text('"Come on Petka, is that all you have for me?" you quietly ask in a lewd voice.');
    scene.text('His friends heard your question and are now daring him to take you to the men\'s room, causing him to blush heavily.');
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You can see him starting to get flustered as you lean in close and whisper in his ear, loud enough for the others to hear. "This is what I have for you…"');
    scene.text('You start sliding your skirt slowly up your thighs, but just before it gets high enough to show them anything, you let it go and it drops back in place.');
    scene.text('"Which is nothing," you say with a giggle.');
    scene.text('As you walk away, you hear one of the boys talking to his friend. "God, so close! She\'s such a tease…"');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('The brazen look on his face betrays Dan. It must have been him touching your ass. Knowing him, he probably would\'ve gone further if there weren\'t so many people here.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_events1', 'rand_gopnic1'] },
        ]);
      } else {
        scene.text('The brazen look on his face betrays Arkadi. It must have been him touching your ass. Knowing him, he probably would\'ve gone further if there weren\'t so many people here.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_events1', 'rand_gopnic2'] },
        ]);
      }
      scene.img('images/characters/shared/headshots_main/big7.jpg');
      scene.text('Lesco is trembling slightly, his eyes shifting back and forth as he awkwardly tries not to be noticed by you. It must\'ve been him.');
      scene.text('The nearby gopniks burst out into laughter as you see the panic on Lesco\'s face. He quickly raises his hands in defense and rapidly apologizes.');
      scene.text('"Please, I didn\'t want to! They made me do it! I\'m sorry!"');
      scene.text('You stare him down for a few seconds and realize he\'s not lying. You know Lesco doesn\'t have an easy time in school, so you give the other guys a derogatory look as you let him off the hook. "Alright, I believe you. Just don\'t do it again, okay?"');
      scene.text('He thanks you and quickly leaves, visibly relieved you didn\'t report him.');
      scene.actions([
        { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
      ]);
    }
    scene.actions([
      { label: 'Ignore it', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (2);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (3);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
  }, goto: ['gschool_events', 'leave_break_events2'] },
      { label: 'Slap him playfully', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy2.jpg');
    scene.text('Svyatoslav isn\'t so bad, but you can\'t just let him do this to you.');
    scene.text('You give him a playful slap in the face. It\'s not hard enough to really hurt him, but enough to send a message.');
    scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      { label: 'Taunt him', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy4.jpg');
    scene.text('You\'re so horny you decide to tease him and see if you can push him into doing more. You put your finger in your mouth and give him a flirty smirk.');
    scene.text('"Come on Svyatoslav, is that all you have for me?" you quietly ask in a lewd voice.');
    scene.text('His friends heard your question and are now daring him to take you to the men\'s room.');
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (2);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (2);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You can see him starting to get aroused as you lean in close and whisper in his ear, loud enough for the others to hear. "This is what I have for you…"');
    scene.text('You start sliding your skirt slowly up your thighs, but just before it gets high enough to show them anything, you let it go and it drops back in place.');
    scene.text('"Which is nothing," you say with a giggle.');
    scene.text('As you walk away, you hear one of the boys talking to his friend. "God, so close! She\'s such a tease…"');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const gschool_events1: LocationDef = {
  name: 'gschool_events1',
  title: 'He tries to hide it, but the proud grin on his face tells yo',
  region: 'other',
  description: ['He tries to hide it, but the proud grin on his face tells you Dimka was the one groping your ass.'],
  enter: enter,
};
