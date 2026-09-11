import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterButtGrab(s: GameState, scene: SceneBuilder): void {
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
        { label: 'Slap him hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
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
          { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5));
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
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
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
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
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (3);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (5);
  }, goto: ['gschool_events', 'leave_break_events2'] },
      { label: 'Taunt him', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
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
    if (((s as any).scoolboy ?? 0) === 2) {
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
          { label: 'Slap him hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (5);
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
          { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', (-5));
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
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
      scene.actions([
        { label: 'Ignore it', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (3);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (5);
  }, goto: ['gschool_events', 'leave_break_events2'] },
        { label: 'Slap him playfully', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy2.jpg');
    scene.text('Svyatoslav isn\'t so bad, but you can\'t just let him do this to you.');
    scene.text('You give him a playful slap in the face. It\'s not hard enough to really hurt him, but enough to send a message.');
    scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
        { label: 'Taunt him', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy4.jpg');
    scene.text('You\'re so horny you decide to tease him and see if you can push him into doing more. You put your finger in your mouth and give him a flirty smirk.');
    scene.text('"Come on Svyatoslav, is that all you have for me?" you quietly ask in a lewd voice.');
    scene.text('His friends heard your question and are now daring him to take you to the men\'s room.');
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
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
            { label: 'Slap him hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (5);
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
            { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (10);
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
        if (((s as any).scoolboy ?? 0) === 4  &&  ((s as any).kotovLoveQW ?? 0) <= 0) {
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
        } else {
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
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRandGopnic1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grupTipe ?? 0) === 4) {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You step away from Dan, pulling out of his reach as you turn around. You point your finger at him. "Don\'t make me hurt you! You know I will."');
    // TODO-QSP: dynamic text: He laughs and steps up closer, crowding you a little, but keeps his hands to him...
    scene.text(`He laughs and steps up closer, crowding you a little, but keeps his hands to himself. "Come on, ${((s as any).pcs_nickname ?? 0)}. You know you want to have some fun, so stop acting like you're not all hot and bothered by this. We can help you with that itch."`);
    scene.actions([
      { label: 'Back off', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (5);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/locations/pavlovsk/school/lunch/buttflash.mp4');
    scene.text('You snort at him and look at his friends before looking back at him.');
    scene.text('You wiggle your middle finger at him, flipping him off while pretending you are wiggling your finger for another reason. "If I needed something that small to satisfy my itch, I could just use this."');
    scene.text('His friends howl with laughter as he fumes at you. You turn and walk away with a laugh, flashing your ass at them as you do, teasing them on what they\'re missing out on.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      { label: 'Go with them', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (10);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (10);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('They lead you to the men\'s room and one of the guys drives everyone else out; it\'s just you and the gopniks in here now. One of them leans against the door to block anyone else from coming in while the rest all start unzipping their pants and pulling out their dicks.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      // TODO-QSP: dynamic text: On one wall you see written, in particularly large letters, "<b><<$pcs_nickname>...
      scene.text(`On one wall you see written, in particularly large letters, "<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b>.`);
    } else {
      scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving your classmates in some way. <b>"ALBINA BARLOVSKAYA = BUTTSLUT WHORE"</b> stands out amongst the other graffiti.');
    }
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A11');
    qspCall(s, 'npcStat', 'A10', 'a');
    qspCall(s, 'npcStat', 'A9', 'b');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You kneel down and wrap your <<$pc_desc['lips']>> lips around Vitek's hard cock ...
    scene.text(`You kneel down and wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around Vitek's hard cock and start to suck. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    scene.text('You eventually feel his cum hit your throat and Vitek moans. "That\'s right bitch! Swallow it all like a good little slut."');
    scene.text('Vitek seems satisfied and tucks his cock back in his pants before swapping places with Vasily at the door, who comes over and pulls his cock out, ready to get his turn.');
    scene.text('You immediately switch to Dan\'s cock and receive another mouthful from him. You carefully swallow his load as well, which earns you a nod of approval and a pat on the head. "Good little whore."');
    scene.text('He moves aside as well, and you soon finish off Vasily.');
    // TODO-QSP: dynamic text: As you get up off your knees, you hear Dan laugh. "You're the best cock sucker w...
    scene.text(`As you get up off your knees, you hear Dan laugh. "You're the best cock sucker we got, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('They leave you alone in the bathroom, more horny than when you started as you clean up and leave.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
      scene.img('images/characters/shared/headshots_main/big10.jpg');
      scene.text('You look at Dan with contempt. "What the fuck do you want?"');
      scene.text('He\'s not impressed in the slightest, your loose reputation undermining any authority you try to impose.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy5.jpg');
    // TODO-QSP: dynamic text: "I'll show you what the fuck I want, slut!" Vitek suddenly grabs you by the hair...
    scene.text(`"I'll show you what the fuck I want, slut!" Vitek suddenly grabs you by the hair and presses your face against a desk. "What I want is your lips around my dick, right now. Everyone already knows you're a ${((s as any).gnikname ?? 0)}, so you better start acting like it or there will be consequences."`);
    scene.text('He turns to his friends. "Come on boys, this whore doesn\'t understand her place in life. It\'s about time we show her."');
    if (((s as any).temperson ?? 0) === 'ivan') {
      scene.text('As you try and pull away, Ivan suddenly appears and pulls Vitek off of you. "Leave her alone!"');
      scene.text('Vitek turns towards him and narrows his eyes. "You want to go for real instead of in the ring?!"');
      scene.text('Ivan steps up close, crowding him. "Anytime…"');
      scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
      scene.text('You word a thank you to Ivan and slip away.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
      ]);
    } else {
      if (((s as any).temperson ?? 0) === 'marcus') {
        scene.text('As you try and pull away, Marcus suddenly appears and pulls Vitek off of you. "Leave her alone!"');
        scene.text('Vitek turns towards him and narrows his eyes. "Or what, pussy?"');
        scene.text('Marcus steps up close and snorts. "You think you scare me? I dealt with more dangerous assholes than you back home."');
        scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
        scene.text('You word a thank you to Marcus and slip away.');
        scene.actions([
          { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
        ]);
      } else {
        if (((s as any).temperson ?? 0) === 'lazar') {
          scene.text('As you try and pull away, Lazar suddenly appears and pulls Vitek off of you. "Leave her alone!"');
          scene.text('Vitek turns towards him and narrows his eyes. "Or what, pussy?"');
          scene.text('Lazar steps up close, crowding him. "Or I\'ll kick your ass right fucking here!"');
          scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
          scene.text('You word a thank you to Lazar and slip away.');
          scene.actions([
            { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
          ]);
        } else {
          if (((s as any).temperson ?? 0) === 'erast') {
            scene.text('As you try and pull away, Erast suddenly appears and effortlessly pulls Vitek off of you. "Leave her alone!"');
            scene.text('Vitek turns towards him and narrows his eyes. "Or what, you overgrown spud?"');
            scene.text('Erast steps up close and crowds him, the only boy in school that can make Vitek look small. "Or I\'ll make you."');
            scene.text('Vitek looks him over, seemingly unsure of how to proceed, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
            scene.text('You word a thank you to Erast and slip away.');
            scene.actions([
              { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
            ]);
          } else {
            if (((s as any).temperson ?? 0) === 'nush') {
              scene.text('As you try and pull away, Anushka suddenly appears and steps between the two of you. "Leave her alone!"');
              scene.text('Vitek looks down at her and narrows his eyes. "Mind your own fucking business, Nush!"');
              scene.text('Anushka scoffs at him. "I\'m making it my business! Now back… The… Fuck… Off!"');
              scene.text('Vitek snorts and effortlessly shoves her out of the way, but before anything else can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
              scene.text('You word a thank you to Anushka and slip away.');
              scene.actions([
                { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
              ]);
            } else {
              qspCall(s, 'willpower', 'bj', 'resist');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/resistgop.jpg');
    scene.text('You manage to pull away from him, but the others are blocking you. You back up, but eventually find your back against one of the walls and turn your head away from him.');
    scene.text('Vitek leans in close to you. "Just do as you\'re told or this will be a lot worse for you."');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Threaten to scream [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Threaten to scream [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/resistgop.jpg');
    scene.text('"I\'ll scream and when the teachers arrive, I\'ll tell them that you tried to rape me!"');
    scene.text('He fumes and leans in close. "You\'ll regret this slut! I promise."');
    scene.text('He then relents and leaves. The others go with him, all of them giving you looks you would rather not think about.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to the men\'s room with them', goto: ['gschool_events1', 'toilet_bj1'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Go to the men\'s room with them', goto: ['gschool_events1', 'toilet_bj1'] },
              ]);
            }
          }
        }
      }
    }
  } },
      ]);
    } else {
      scene.img('images/characters/shared/headshots_main/big10.jpg');
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        scene.text('You look at Dan with contempt. "What the fuck, pervert?"');
        scene.text('He\'s not impressed in the slightest by your attitude.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Vitek suddenly grabs you by the hair. "Why don\'t we go somewhere where you can put that mouth of yours to good use for a change?"');
    if (((s as any).temperson ?? 0) === 'ivan') {
      scene.text('As you try and pull away, Ivan suddenly appears and pulls Vitek off of you. "Leave her alone!"');
      scene.text('Vitek turns towards him and narrows his eyes. "You want to go for real instead of in the ring?!"');
      scene.text('Ivan steps up close, crowding him. "Anytime…"');
      scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
      scene.text('You word a thank you to Ivan and slip away.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
      ]);
    } else {
      if (((s as any).temperson ?? 0) === 'marcus') {
        scene.text('As you try and pull away, Marcus suddenly appears and pulls Vitek off of you. "Leave her alone!"');
        scene.text('Vitek turns towards him and narrows his eyes. "Or what, pussy?"');
        scene.text('Marcus steps up close and snorts. "You think you scare me? I dealt with more dangerous assholes than you back home."');
        scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
        scene.text('You word a thank you to Marcus and slip away.');
        scene.actions([
          { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
        ]);
      } else {
        if (((s as any).temperson ?? 0) === 'lazar') {
          scene.text('As you try and pull away, Lazar suddenly appears and pulls Vitek off of you. "Leave her alone!"');
          scene.text('Vitek turns towards him and narrows his eyes. "Or what, pussy?"');
          scene.text('Lazar steps up close, crowding him. "Or I\'ll kick your ass right fucking here!"');
          scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
          scene.text('You word a thank you to Lazar and slip away.');
          scene.actions([
            { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
          ]);
        } else {
          if (((s as any).temperson ?? 0) === 'erast') {
            scene.text('As you try and pull away, Erast suddenly appears and effortlessly pulls Vitek off of you. "Leave her alone!"');
            scene.text('Vitek turns towards him and narrows his eyes. "Or what, you overgrown spud?"');
            scene.text('Erast steps up close and crowds him, the only boy in school that can make Vitek look small. "Or I\'ll make you."');
            scene.text('Vitek looks him over, seemingly unsure of how to proceed, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
            scene.text('You word a thank you to Erast and slip away.');
            scene.actions([
              { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
            ]);
          } else {
            if (((s as any).temperson ?? 0) === 'nush') {
              scene.text('As you try and pull away, Anushka suddenly appears and steps between the two of you. "Leave her alone!"');
              scene.text('Vitek looks down at her and narrows his eyes. "Mind your own fucking business, Nush!"');
              scene.text('Anushka scoffs at him. "I\'m making it my business! Now back… The… Fuck… Off!"');
              scene.text('Vitek snorts and effortlessly shoves her out of the way, but before anything else can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
              scene.text('You word a thank you to Anushka and slip away.');
              scene.actions([
                { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
              ]);
            } else {
              scene.actions([
                { label: 'Flip him off', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/pc/reactions/fuckoff3.jpg');
    scene.text('You sneer at him and look at his friends before looking back at him and flipping him off. "As if I would stoop to letting your disgusting ass paw at me."');
    scene.text('His friends howl with laughter as he fumes at you. You turn and walk away with a laugh.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
                { label: 'Go with them', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (10);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (10);
    qspCall(s, 'fame', 'pav', 'sex', 10);
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('They lead you to the men\'s room and one of the guys drives everyone else out; it\'s just you and the gopniks in here now. One of them leans against the door to block anyone else from coming in while the rest all start unzipping their pants and pulling out their dicks.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      // TODO-QSP: dynamic text: On one wall you see written, in particularly large letters, "<b><<$pcs_nickname>...
      scene.text(`On one wall you see written, in particularly large letters, "<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b>.`);
    } else {
      scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving your classmates in some way. <b>"ALBINA BARLOVSKAYA = BUTTSLUT WHORE"</b> stands out amongst the other graffiti.');
    }
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A11');
    qspCall(s, 'npcStat', 'A10', 'a');
    qspCall(s, 'npcStat', 'A9', 'b');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You kneel down and wrap your <<$pc_desc['lips']>> lips around Vitek's hard cock ...
    scene.text(`You kneel down and wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around Vitek's hard cock and start to suck. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    scene.text('You eventually feel his cum hit your throat and Vitek moans. "That\'s right bitch! Swallow it all like a good little slut."');
    scene.text('Vitek seems satisfied and tucks his cock back in his pants before swapping places with Vasily at the door, who comes over and pulls his cock out, ready to get his turn.');
    scene.text('You immediately switch to Dan\'s cock and receive another mouthful from him. You carefully swallow his load as well, which earns you a nod of approval and a pat on the head. "Good little whore."');
    scene.text('He moves aside as well, and you soon finish off Vasily.');
    // TODO-QSP: dynamic text: As you get up off your knees, you hear Dan laugh. "You're the best cock sucker w...
    scene.text(`As you get up off your knees, you hear Dan laugh. "You're the best cock sucker we got, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('They leave you alone in the bathroom, more horny than when you started as you clean up and leave.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
        ]);
      } else {
        scene.text('You look at Dan and the other gopniks with fear. You know this could go bad very easily. "Stop please, I don\'t like it."');
        scene.text('He just laughs at what you say.');
        scene.actions([
          { label: 'Wait to see what they do', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Vitek suddenly grabs you by the hair. "Why don\'t we go somewhere where you can put that mouth of yours to good use for a change?"');
    if (((s as any).temperson ?? 0) === 'ivan') {
      scene.text('As you try and pull away, Ivan suddenly appears and pulls Vitek off of you. "Leave her alone!"');
      scene.text('Vitek turns towards him and narrows his eyes. "You want to go for real instead of in the ring?!"');
      scene.text('Ivan steps up close, crowding him. "Anytime…"');
      scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
      scene.text('You word a thank you to Ivan and slip away.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
      ]);
    } else {
      if (((s as any).temperson ?? 0) === 'marcus') {
        scene.text('As you try and pull away, Marcus suddenly appears and pulls Vitek off of you. "Leave her alone!"');
        scene.text('Vitek turns towards him and narrows his eyes. "Or what, pussy?"');
        scene.text('Marcus steps up close and snorts. "You think you scare me? I dealt with more dangerous assholes than you back home."');
        scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
        scene.text('You word a thank you to Marcus and slip away.');
        scene.actions([
          { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
        ]);
      } else {
        if (((s as any).temperson ?? 0) === 'lazar') {
          scene.text('As you try and pull away, Lazar suddenly appears and pulls Vitek off of you. "Leave her alone!"');
          scene.text('Vitek turns towards him and narrows his eyes. "Or what, pussy?"');
          scene.text('Lazar steps up close, crowding him. "Or I\'ll kick your ass right fucking here!"');
          scene.text('They start shoving each other, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
          scene.text('You word a thank you to Lazar and slip away.');
          scene.actions([
            { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
          ]);
        } else {
          if (((s as any).temperson ?? 0) === 'erast') {
            scene.text('As you try and pull away, Erast suddenly appears and effortlessly pulls Vitek off of you. "Leave her alone!"');
            scene.text('Vitek turns towards him and narrows his eyes. "Or what, you overgrown spud?"');
            scene.text('Erast steps up close and crowds him, the only boy in school that can make Vitek look small. "Or I\'ll make you."');
            scene.text('Vitek looks him over, seemingly unsure of how to proceed, but before anything can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
            scene.text('You word a thank you to Erast and slip away.');
            scene.actions([
              { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
            ]);
          } else {
            if (((s as any).temperson ?? 0) === 'nush') {
              scene.text('As you try and pull away, Anushka suddenly appears and steps between the two of you. "Leave her alone!"');
              scene.text('Vitek looks down at her and narrows his eyes. "Mind your own fucking business, Nush!"');
              scene.text('Anushka scoffs at him. "I\'m making it my business! Now back… The… Fuck… Off!"');
              scene.text('Vitek snorts and effortlessly shoves her out of the way, but before anything else can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
              scene.text('You word a thank you to Anushka and slip away.');
              scene.actions([
                { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
              ]);
            } else {
              scene.actions([
                { label: 'Run away', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (3);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/locations/pavlovsk/school/building/gschool_hall02.jpg');
    scene.text('You manage to pull away from him and take off running down the hall, not daring to look back. You hear them yelling before they start chasing you.');
    scene.text('You run past a classroom as a teacher comes out; they yell at you, but you don\'t stop. You then hear the teacher yelling at those chasing you and keep running until you don\'t hear anything.');
    scene.text('You finally stop and lean against the wall to catch your breath while looking down the empty hall.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
                { label: 'Go with them', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (10);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (10);
    qspCall(s, 'fame', 'pav', 'sex', 10);
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('They lead you to the men\'s room and one of the guys drives everyone else out; it\'s just you and the gopniks in here now. One of them leans against the door to block anyone else from coming in while the rest all start unzipping their pants and pulling out their dicks.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      // TODO-QSP: dynamic text: On one wall you see written, in particularly large letters, "<b><<$pcs_nickname>...
      scene.text(`On one wall you see written, in particularly large letters, "<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b>.`);
    } else {
      scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving your classmates in some way. <b>"ALBINA BARLOVSKAYA = BUTTSLUT WHORE"</b> stands out amongst the other graffiti.');
    }
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A11');
    qspCall(s, 'npcStat', 'A10', 'a');
    qspCall(s, 'npcStat', 'A9', 'b');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You kneel down and wrap your <<$pc_desc['lips']>> lips around Vitek's hard cock ...
    scene.text(`You kneel down and wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around Vitek's hard cock and start to suck. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    scene.text('You eventually feel his cum hit your throat and Vitek moans. "That\'s right bitch! Swallow it all like a good little slut."');
    scene.text('Vitek seems satisfied and tucks his cock back in his pants before swapping places with Vasily at the door, who comes over and pulls his cock out, ready to get his turn.');
    scene.text('You immediately switch to Dan\'s cock and receive another mouthful from him. You carefully swallow his load as well, which earns you a nod of approval and a pat on the head. "Good little whore."');
    scene.text('He moves aside as well, and you soon finish off Vasily.');
    // TODO-QSP: dynamic text: As you get up off your knees, you hear Dan laugh. "You're the best cock sucker w...
    scene.text(`As you get up off your knees, you hear Dan laugh. "You're the best cock sucker we got, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('They leave you alone in the bathroom, more horny than when you started as you clean up and leave.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRandGopnic2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grupTipe ?? 0) === 4) {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('You step away from Arkadi, pulling out of his reach as you turn around. You point your finger at him. "Don\'t make me hurt you! You know I will."');
    // TODO-QSP: dynamic text: He laughs and steps up closer again, crowding you a little, but keeps his hands ...
    scene.text(`He laughs and steps up closer again, crowding you a little, but keeps his hands to himself. "Come on, ${((s as any).pcs_nickname ?? 0)}. You know you want to have some fun, so stop acting like you're not all hot and bothered by this. We can help you with that itch."`);
    scene.actions([
      { label: 'Back off', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (5);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/locations/pavlovsk/school/lunch/buttflash.mp4');
    scene.text('You snort at him and look at his friends before looking back at him. You wiggle your middle finger at him, flipping him off while pretending you\'re wiggling your finger for another reason. "If I needed something that small to satisfy my itch, I could just use this."');
    scene.text('His friends howl with laughter as he fumes at you. You turn and walk away with a laugh, flashing your ass at them as you do, teasing them on what they\'re missing out on.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      { label: 'Go with them', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (10);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (10);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('They lead you to the men\'s room and one of the guys drives everyone else out; it\'s just you and the gopniks in here now. Niko leans against the door to block anyone else from coming in while the rest all start unzipping their pants and pulling out their dicks.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      // TODO-QSP: dynamic text: On one wall you see written, in particularly large letters, "<b><<$pcs_nickname>...
      scene.text(`On one wall you see written, in particularly large letters, "<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b>.`);
    } else {
      scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving your classmates in some way. <b>"ALBINA BARLOVSKAYA = BUTTSLUT WHORE"</b> stands out amongst the other graffiti.');
    }
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A156');
    qspCall(s, 'npcStat', 'A189', 'a');
    qspCall(s, 'npcStat', 'A157', 'b');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You kneel down and wrap your <<$pc_desc['lips']>> lips around Arkadi's hard cock...
    scene.text(`You kneel down and wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around Arkadi's hard cock and start to suck. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    scene.text('You eventually feel his cum hit your throat and Arkadi moans. "That\'s right bitch! Swallow it all like a good little slut."');
    scene.text('Arkadi seems satisfied and tucks his cock back in his pants before swapping places with Niko at the door, who comes over and pulls his cock out, ready to get his turn.');
    scene.text('You immediately switch to Roman\'s cock and receive another mouthful from him. You carefully swallow his load as well, which earns you a nod of approval and a pat on the head. "Good little whore."');
    scene.text('He moves aside as well, and you soon finish off Niko.');
    // TODO-QSP: dynamic text: As you get up off your knees, you hear Arkadi laugh. "You're the best cock sucke...
    scene.text(`As you get up off your knees, you hear Arkadi laugh. "You're the best cock sucker we got, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('They leave you alone in the bathroom, more horny than when you started as you clean up and leave.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
      scene.img('images/characters/shared/headshots_main/big10.jpg');
      scene.text('You look at Arkadi with contempt. "What the fuck do you want?"');
      scene.text('He\'s not impressed in the slightest, your loose reputation undermining any authority you try to impose.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy5.jpg');
    // TODO-QSP: dynamic text: "I'll show you what the fuck I want, slut!" Roman suddenly grabs you by the hair...
    scene.text(`"I'll show you what the fuck I want, slut!" Roman suddenly grabs you by the hair and presses your face against a desk. "What I want is your lips around my dick, right now. Everyone already knows you're a ${((s as any).gnikname ?? 0)}, so you better start acting like it or there will be consequences."`);
    scene.text('He turns to his friends and says "Come on boys, this whore doesn\'t understand her place in life. It\'s about time we show her."');
    if (((s as any).temperson ?? 0) === 'ivan') {
      scene.text('As you try and pull away, Ivan suddenly appears and pulls Roman off of you. "Leave her alone!"');
      scene.text('Roman turns towards him and narrows his eyes. "Touch me again and I\'ll fuck you up!"');
      scene.text('Ivan steps up close, crowding him. "I\'d like to see you try!"');
      scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
      scene.text('You word a thank you to Ivan and slip away.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
      ]);
    } else {
      if (((s as any).temperson ?? 0) === 'marcus') {
        scene.text('As you try and pull away, Marcus suddenly appears and pulls Roman off of you. "Leave her alone!"');
        scene.text('Roman turns towards him and narrows his eyes. "Or what, blackass?"');
        scene.text('Marcus steps up close and snorts. "You think you scare me? I dealt with more dangerous assholes than you back home."');
        scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
        scene.text('You word a thank you to Marcus and slip away.');
        scene.actions([
          { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
        ]);
      } else {
        if (((s as any).temperson ?? 0) === 'lazar') {
          scene.text('As you try and pull away, Lazar suddenly appears and pulls Roman off of you. "Leave her alone!"');
          scene.text('Roman turns towards him and narrows his eyes. "Or what, pussy?"');
          scene.text('Lazar steps up close, crowding him. "Or I\'ll kick your ass right fucking here!"');
          scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
          scene.text('You word a thank you to Lazar and slip away.');
          scene.actions([
            { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
          ]);
        } else {
          if (((s as any).temperson ?? 0) === 'erast') {
            scene.text('As you try and pull away, Erast suddenly appears and effortlessly pulls Roman off of you. "Leave her alone!"');
            scene.text('Roman turns towards him and narrows his eyes. "You think just because you\'re big means you\'re scary? I\'ll fucking show you scary, big man!"');
            scene.text('Erast steps up close, crowding him. "I don\'t want to hurt you… little man."');
            scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
            scene.text('You word a thank you to Erast and slip away.');
            scene.actions([
              { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
            ]);
          } else {
            if (((s as any).temperson ?? 0) === 'nush') {
              scene.text('As you try and pull away, Anushka suddenly appears and steps between the two of you. "Leave her alone!"');
              scene.text('Roman looks down at her and narrows his eyes. "Mind your own fucking business, slut! Unless you want a go instead?"');
              scene.text('Anushka scoffs at him and holds up her pinky finger. "If I wanted some dick, I\'d want something bigger than you, small fry."');
              scene.text('Roman grabs her by the shoulders, but before he can do anything, Arkadi puts his hand on his shoulder and shakes his head.');
              scene.text('Roman looks back at Anushka and glares at her. "Fuck it, slut isn\'t worth it."');
              scene.text('Before anything else can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
              scene.text('You word a thank you to Anushka and slip away.');
              scene.actions([
                { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
              ]);
            } else {
              qspCall(s, 'willpower', 'bj', 'resist');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/resistgop.jpg');
    scene.text('You manage to pull away from him, but the others are blocking you. You back up, but eventually find your back against one of the walls and you turn your head away from him.');
    scene.text('He leans in close to you. "Just do as you\'re told or this will be a lot worse for you."');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Threaten to scream [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Threaten to scream [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/resistgop.jpg');
    scene.text('"I\'ll scream and when the teachers arrive, I\'ll tell them that you tried to rape me!"');
    scene.text('He fumes and leans in close. "You\'ll regret this slut! I promise."');
    scene.text('He then relents and leaves and the others go with him, all of them giving you looks you would rather not think about.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to the men\'s room with them', goto: ['gschool_events1', 'toilet_bj2'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Go to the men\'s room with them', goto: ['gschool_events1', 'toilet_bj2'] },
              ]);
            }
          }
        }
      }
    }
  } },
      ]);
    } else {
      scene.img('images/characters/shared/headshots_main/big156.jpg');
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        scene.text('You look at Arkadi with contempt. "What the fuck, pervert?"');
        scene.text('He\'s not impressed in the slightest by your attitude.');
        scene.actions([
          { label: 'Wait to see what they do', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('Roman suddenly grabs you by the hair. "Why don\'t we go somewhere where you can put that mouth of yours to good use for a change?"');
    if (((s as any).temperson ?? 0) === 'ivan') {
      scene.text('As you try and pull away, Ivan suddenly appears and pulls Roman off of you. "Leave her alone!"');
      scene.text('Roman turns towards him and narrows his eyes. "Touch me again and I\'ll fuck you up!"');
      scene.text('Ivan steps up close, crowding him. "I\'d like to see you try!"');
      scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
      scene.text('You word a thank you to Ivan and slip away.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
      ]);
    } else {
      if (((s as any).temperson ?? 0) === 'marcus') {
        scene.text('As you try and pull away, Marcus suddenly appears and pulls Roman off of you. "Leave her alone!"');
        scene.text('Roman turns towards him and narrows his eyes. "Or what, blackass?"');
        scene.text('Marcus steps up close and snorts. "You think you scare me? I dealt with more dangerous assholes than you back home."');
        scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
        scene.text('You word a thank you to Marcus and slip away.');
        scene.actions([
          { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
        ]);
      } else {
        if (((s as any).temperson ?? 0) === 'lazar') {
          scene.text('As you try and pull away, Lazar suddenly appears and pulls Roman off of you. "Leave her alone!"');
          scene.text('Roman turns towards him and narrows his eyes. "Or what, pussy?"');
          scene.text('Lazar steps up close, crowding him. "Or I\'ll kick your ass right fucking here!"');
          scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
          scene.text('You word a thank you to Lazar and slip away.');
          scene.actions([
            { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
          ]);
        } else {
          if (((s as any).temperson ?? 0) === 'erast') {
            scene.text('As you try and pull away, Erast suddenly appears and effortlessly pulls Roman off of you. "Leave her alone!"');
            scene.text('Roman turns towards him and narrows his eyes. "You think just because you\'re big means you\'re scary? I\'ll fucking show you scary, big man!"');
            scene.text('Erast steps up close, crowding him. "I don\'t want to hurt you… little man."');
            scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
            scene.text('You word a thank you to Erast and slip away.');
            scene.actions([
              { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
            ]);
          } else {
            if (((s as any).temperson ?? 0) === 'nush') {
              scene.text('As you try and pull away, Anushka suddenly appears and steps between the two of you. "Leave her alone!"');
              scene.text('Roman looks down at her and narrows his eyes. "Mind your own fucking business, slut! Unless you want a go instead?"');
              scene.text('Anushka scoffs at him and holds up her pinky finger. "If I wanted some dick, I\'d want something bigger than you, small fry."');
              scene.text('Roman grabs her by the shoulders, but before he can do anything, Arkadi puts his hand on his shoulder and shakes his head.');
              scene.text('Roman looks back at Anushka and glares at her. "Fuck it, slut isn\'t worth it."');
              scene.text('Before anything else can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
              scene.text('You word a thank you to Anushka and slip away.');
              scene.actions([
                { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
              ]);
            } else {
              scene.actions([
                { label: 'Flip him off', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/pc/reactions/fuckoff3.jpg');
    scene.text('You sneer at him and look at his friends before looking back at him and flipping him off. "As if I would stoop to letting your disgusting ass paw at me."');
    scene.text('His friends howl with laughter as he fumes at you. You turn and walk away with a laugh.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
                { label: 'Go with them', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (10);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (10);
    qspCall(s, 'fame', 'pav', 'sex', 10);
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('They lead you to the men\'s room and one of the guys drives everyone else out; it\'s just you and the gopniks in here now. Niko leans against the door to block anyone else from coming in while the rest all start unzipping their pants and pulling out their dicks.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      // TODO-QSP: dynamic text: On one wall you see written, in particularly large letters, "<b><<$pcs_nickname>...
      scene.text(`On one wall you see written, in particularly large letters, "<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b>.`);
    } else {
      scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving your classmates in some way. <b>"ALBINA BARLOVSKAYA = BUTTSLUT WHORE"</b> stands out amongst the other graffiti.');
    }
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A156');
    qspCall(s, 'npcStat', 'A189', 'a');
    qspCall(s, 'npcStat', 'A157', 'b');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You kneel down and wrap your <<$pc_desc['lips']>> lips around Arkadi's hard cock...
    scene.text(`You kneel down and wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around Arkadi's hard cock and start to suck. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    scene.text('You eventually feel his cum hit your throat and Arkadi moans. "That\'s right bitch! Swallow it all like a good little slut."');
    scene.text('Arkadi seems satisfied and tucks his cock back in his pants before swapping places with Niko at the door, who comes over and pulls his cock out, ready to get his turn.');
    scene.text('You immediately switch to Roman\'s cock and receive another mouthful from him. You carefully swallow his load as well, which earns you a nod of approval and a pat on the head. "Good little whore."');
    scene.text('He moves aside as well, and you finish off Niko last.');
    // TODO-QSP: dynamic text: As you get up off your knees, you hear Arkadi laugh. "You're the best cock sucke...
    scene.text(`As you get up off your knees, you hear Arkadi laugh. "You're the best cock sucker we got, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('They leave you alone in the bathroom, more horny than when you started as you clean up and leave.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
        ]);
      } else {
        scene.text('You look at Arkadi and the other gopniks with fear. You know this could go bad very easily. "Stop please, I don\'t like it."');
        scene.text('He just laughs at what you say.');
        scene.actions([
          { label: 'Wait to see what they do', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('Roman suddenly grabs you by the hair. "Why don\'t we go somewhere where you can put that mouth of yours to good use for a change?"');
    if (((s as any).temperson ?? 0) === 'ivan') {
      scene.text('As you try and pull away, Ivan suddenly appears and pulls Roman off of you. "Leave her alone!"');
      scene.text('Roman turns towards him and narrows his eyes. "Touch me again and I\'ll fuck you up!"');
      scene.text('Ivan steps up close, crowding him. "I\'d like to see you try!"');
      scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
      scene.text('You word a thank you to Ivan and slip away.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
      ]);
    } else {
      if (((s as any).temperson ?? 0) === 'marcus') {
        scene.text('As you try and pull away, Marcus suddenly appears and pulls Roman off of you. "Leave her alone!"');
        scene.text('Roman turns towards him and narrows his eyes. "Or what, blackass?"');
        scene.text('Marcus steps up close and snorts. "You think you scare me? I dealt with more dangerous assholes than you back home."');
        scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
        scene.text('You word a thank you to Marcus and slip away.');
        scene.actions([
          { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
        ]);
      } else {
        if (((s as any).temperson ?? 0) === 'lazar') {
          scene.text('As you try and pull away, Lazar suddenly appears and pulls Roman off of you. "Leave her alone!"');
          scene.text('Roman turns towards him and narrows his eyes. "Or what, pussy?"');
          scene.text('Lazar steps up close, crowding him. "Or I\'ll kick your ass right fucking here!"');
          scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
          scene.text('You word a thank you to Lazar and slip away.');
          scene.actions([
            { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
          ]);
        } else {
          if (((s as any).temperson ?? 0) === 'erast') {
            scene.text('As you try and pull away, Erast suddenly appears and effortlessly pulls Roman off of you. "Leave her alone!"');
            scene.text('Roman turns towards him and narrows his eyes. "You think just because you\'re big means you\'re scary? I\'ll fucking show you scary, big man!"');
            scene.text('Erast steps up close, crowding him. "I don\'t want to hurt you… little man."');
            scene.text('They start shoving each other, but before anything can happen a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
            scene.text('You word a thank you to Erast and slip away.');
            scene.actions([
              { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
            ]);
          } else {
            if (((s as any).temperson ?? 0) === 'nush') {
              scene.text('As you try and pull away, Anushka suddenly appears and steps between the two of you. "Leave her alone!"');
              scene.text('Roman looks down at her and narrows his eyes. "Mind your own fucking business, slut! Unless you want a go instead?"');
              scene.text('Anushka scoffs at him and holds up her pinky finger. "If I wanted some dick, I\'d want something bigger than you, small fry."');
              scene.text('Roman grabs her by the shoulders, but before he can do anything, Arkadi puts his hand on his shoulder and shakes his head.');
              scene.text('Roman looks back at Anushka and glares at her. "Fuck it, slut isn\'t worth it."');
              scene.text('Before anything else can happen, a teacher interrupts them. "What\'s going on here? Break it up, all of you!"');
              scene.text('You word a thank you to Anushka and slip away.');
              scene.actions([
                { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
              ]);
            } else {
              scene.actions([
                { label: 'Run away', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (3);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/locations/pavlovsk/school/building/gschool_hall02.jpg');
    scene.text('You manage to pull away from him and take off running, not daring to look back. You hear them cry out as you run and hear them starting to chase you. You run past a classroom as a teacher comes out, who yells at you but you don\'t stop. You then hear the teacher yelling at those chasing you and keep running until you don\'t hear anything. You finally stop and lean against the wall to catch your breath while looking down the empty hall.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
                { label: 'Go with them', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (10);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (10);
    qspCall(s, 'fame', 'pav', 'sex', 10);
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('They lead you to the men\'s room and one of the guys drives everyone else out; it\'s just you and the gopniks in here now. One of them leans against the door to block anyone else from coming in while the rest all start unzipping their pants and pulling out their dicks.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      // TODO-QSP: dynamic text: On one wall you see written, in particularly large letters, "<b><<$pcs_nickname>...
      scene.text(`On one wall you see written, in particularly large letters, "<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b>.`);
    } else {
      scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving your classmates in some way. <b>"ALBINA BARLOVSKAYA = BUTTSLUT WHORE"</b> stands out amongst the other graffiti.');
    }
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A156');
    qspCall(s, 'npcStat', 'A189', 'a');
    qspCall(s, 'npcStat', 'A157', 'b');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You kneel down and wrap your <<$pc_desc['lips']>> lips around Arkadi's hard cock...
    scene.text(`You kneel down and wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around Arkadi's hard cock and start to suck. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    scene.text('You eventually feel his cum hit your throat and Arkadi moans. "That\'s right bitch! Swallow it all like a good little slut."');
    scene.text('Arkadi seems satisfied and tucks his cock back in his pants before swapping places with Niko at the door, who comes over and pulls his cock out, ready to get his turn.');
    scene.text('You immediately switch to Roman\'s cock and receive another mouthful from him. You carefully swallow his load as well, which earns you a nod of approval and a pat on the head. "Good little whore."');
    scene.text('He moves aside as well, and you soon finish off Niko.');
    // TODO-QSP: dynamic text: As you get up off your knees, you hear Arkadi laugh. "You're the best cock sucke...
    scene.text(`As you get up off your knees, you hear Arkadi laugh. "You're the best cock sucker we got, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('They leave you alone in the bathroom, more horny than when you started as you clean up and leave.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterToiletBj1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
  scene.text('You know perfectly well that the group of boys are not going to let you escape. You meekly let them drag you to the men\'s room, hoping for a miracle to save you. It never comes.');
  scene.text('When you arrive at the men\'s room, one of the guys drives everyone else out; it\'s just you and the gopniks in here now. He goes outside and keeps watch while two of the others reach for their pants. Several more come in to watch.');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    // TODO-QSP: dynamic text: The walls of the restroom are covered in crude texts, quite a few of them involv...
    scene.text(`The walls of the restroom are covered in crude texts, quite a few of them involving you in some way. On one wall, you see written, in particularly large letters, "<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b>.`);
  } else {
    scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving your classmates in some way. <b>"ALBINA BARLOVSKAYA = BUTTSLUT WHORE"</b> stands out amongst the other graffiti.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A11');
    qspCall(s, 'npcStat', 'A10', 'a');
    qspCall(s, 'npcStat', 'A9', 'b');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You know there's only one way they will let you go, so you dutifully kneel down....
    scene.text(`You know there's only one way they will let you go, so you dutifully kneel down. Vitek takes his cock out of his pants as Dan stands to your right and takes his cock out too. You wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around Vitek's hard cock and start to suck. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    scene.text('You eventually feel a jet of sperm hit your throat. "Swallow it all, whore. If you miss a drop, you\'re licking it up off the ground," Vitek says in a menacing voice, so you diligently swallow his sperm, doing your best to lick it all up from his dick and your lips.');
    scene.text('Vitek seems satisfied and tucks his cock back in his pants before swapping place with Vasily at the door, who comes over and pulls his cock out, ready to get his turn.');
    scene.text('You immediately switch to Dan\'s cock and receive another mouthful from him. You carefully swallow his load as well, which earns you a nod of approval and a pat on the head. "Good little whore."');
    scene.text('He moves aside and you finish off Vasily.');
    scene.text('As you get up off your knees, you hear Dan laugh. "Do you understand your place in life now? That place is right here, on your knees, whenever we say so. Got that?"');
    scene.text('You obediently nod, fully aware of the nasty taste of semen in your mouth.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) >= 14) {
      scene.actions([{ label: 'Continue', goto: ['gschool_grounds', 'main'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] }]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterToiletBj2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
  scene.text('You know perfectly well that the group of boys are not going to let you escape. You meekly let the boys drag you to the men\'s room, hoping for a miracle to save you. It never comes. When you arrive at the men\'s room, one of the guys drives everyone else out; it\'s just you and the gopniks in here now. He goes outside and keeps watch while two of the others reach for their pants. Several more come in to watch.');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    // TODO-QSP: dynamic text: The walls of the restroom are covered in crude texts, quite a few of them involv...
    scene.text(`The walls of the restroom are covered in crude texts, quite a few of them involving you in some way. On one wall, you see written, in particularly large letters, "<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b>.`);
  } else {
    scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving your classmates in some way. <b>"ALBINA BARLOVSKAYA = BUTTSLUT WHORE"</b> stands out amongst the other graffiti.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A156');
    qspCall(s, 'npcStat', 'A189', 'a');
    qspCall(s, 'npcStat', 'A157', 'b');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You know there's only one way they will let you go, so you dutifully kneel down....
    scene.text(`You know there's only one way they will let you go, so you dutifully kneel down. Arkadi takes his cock out of his pants as Roman stands to your right and takes his cock out too. You wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around Arkadi's hard cock and start to suck. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    scene.text('You eventually feel a jet of sperm hit your throat and Arkadi seems satisfied as he tucks his cock back in his pants before swapping places with Niko at the door, who comes over and pulls his cock out, ready to get his turn.');
    scene.text('You immediately switch to Roman\'s cock and receive another mouthful. "Swallow it all, whore. If you miss a drop, you\'re licking it up off the ground!" he says menacingly, so you diligently swallow his cum, doing your best to lick it all up from his dick and your lips. He moves aside and you finish off Niko.');
    scene.text('As you get up off your knees, you hear Roman laugh. "Do you understand your place in life now? That place is right here, on your knees, whenever we say so. Got that?"');
    scene.text('You obediently nod, fully aware of the nasty taste of semen in the your mouth.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSweet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'normal'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    if (((s as any).class ?? 0)?.['school_grade_average'] >= 90) {
      (s as any).sweet_talk = 10;
    } else {
      if (((s as any).class ?? 0)?.['school_grade_average'] >= 80) {
        (s as any).sweet_talk = 5;
      } else {
        if (((s as any).class ?? 0)?.['school_grade_average'] >= 70) {
          (s as any).sweet_talk = 0;
        } else {
          if (((s as any).class ?? 0)?.['school_grade_average'] >= 60) {
            (s as any).sweet_talk = (-5);
          } else {
            if (((s as any).class ?? 0)?.['school_grade_average'] >= 50) {
              (s as any).sweet_talk = (-10);
            } else {
              (s as any).sweet_talk = (-20);
            }
          }
        }
      }
    }
    if (((s as any).grupTipe ?? 0) === 1) {
      (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (10);
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (5);
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (20);
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (10);
          }
        }
      }
    }
    if (((s as any).pcs_chrsm ?? 0) < 20) {
      (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (20);
    } else {
      if (((s as any).pcs_chrsm ?? 0) < 40) {
      } else {
        if (((s as any).pcs_chrsm ?? 0) < 60) {
          (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (10);
        } else {
          if (((s as any).pcs_chrsm ?? 0) < 80) {
            (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (20);
          } else {
            if (((s as any).pcs_chrsm ?? 0) < 90) {
              (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (30);
            } else {
              (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (40);
            }
          }
        }
      }
    }
    (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (Math.floor(Math.random() * 11) + 0);
    if (((s as any).pcs_hotcat ?? 0) < 5) {
      (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + ((((s as any).pcs_hotcat ?? 0) - 5) * 5);
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'sex') {
      if (((s as any).class ?? 0)?.['school_grade_average'] >= 90) {
        (s as any).sweet_talk = (-20);
      } else {
        if (((s as any).class ?? 0)?.['school_grade_average'] >= 80) {
          (s as any).sweet_talk = (-10);
        } else {
          if (((s as any).class ?? 0)?.['school_grade_average'] >= 70) {
            (s as any).sweet_talk = 0;
          } else {
            if (((s as any).class ?? 0)?.['school_grade_average'] >= 60) {
              (s as any).sweet_talk = 5;
            } else {
              if (((s as any).class ?? 0)?.['school_grade_average'] >= 50) {
                (s as any).sweet_talk = 10;
              } else {
                (s as any).sweet_talk = 20;
              }
            }
          }
        }
      }
      if (((s as any).grupTipe ?? 0) === 1) {
        (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (10);
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (10);
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (40);
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (20);
            }
          }
        }
      }
      if (((s as any).pcs_chrsm ?? 0) < 20) {
        (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (20);
      } else {
        if (((s as any).pcs_chrsm ?? 0) < 40) {
        } else {
          if (((s as any).pcs_chrsm ?? 0) < 60) {
            (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (10);
          } else {
            if (((s as any).pcs_chrsm ?? 0) < 80) {
              (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (20);
            } else {
              if (((s as any).pcs_chrsm ?? 0) < 90) {
                (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (30);
              } else {
                (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (40);
              }
            }
          }
        }
      }
      (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (Math.floor(Math.random() * 21) + 15);
      if (((s as any).pcs_hotcat ?? 0) < 5) {
        (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - ((((s as any).pcs_hotcat ?? 0) - 5) * 5);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBellaGoth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grupTipe ?? 0) === 1) {
    scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya1.jpg');
    scene.text('As you\'re walking down the hallway, your goth attire catching more eyes than usual, Bella and Stasya corner you near the bathroom.');
    // TODO-QSP: dynamic text: "What the helll, <<$pcs_nickname>>?" Bella's voice cuts through the hallway nois...
    scene.text(`"What the helll, ${((s as any).pcs_nickname ?? 0)}?" Bella's voice cuts through the hallway noise. She stops right in front of you, her eyes scanning your new look with disdain.`);
    scene.text('"Are you trying to make a statement? Because all you\'re doing is looking like a… like a… <i>total outcast</i>!"');
    scene.text('Her hand flies up to gesture at your face and attire. "Look at you! You\'re an embarrassment to us!"');
    scene.text('You see Stasya nodding, her confusion turning into a frown of disapproval.');
    scene.text('You try to explain, to tell them it\'s just a personal choice, but Bella isn\'t having it.');
    scene.text('"No, no, no! I can\'t even bear to look at you, let alone listen to your excuses! Go fix this disaster or don\'t bother showing your face around us!"');
    scene.text('She looks back at Stasya, who quickly nods in agreement, "Yeah, totally, this is… not cool."');
    scene.text('With a dismissive wave, Bella turns on her heel. "Come on, Stasya, we have better things to do than deal with this."');
    scene.text('Both of them leave you standing there, feeling the eyes of other students on you.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_events', 'break_events'] },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya1.jpg');
      scene.text('As you\'re walking to your next class, still adjusting to your new gothic attire, Bella and Stasya spot you from down the hall. Their eyes narrow as they approach.');
      // TODO-QSP: dynamic text: "Seriously, <<$pcs_nickname>>?" Bella's voice pierces the air, her tone full of ...
      scene.text(`"Seriously, ${((s as any).pcs_nickname ?? 0)}?" Bella's voice pierces the air, her tone full of disbelief. "Since when did you decide to go all… <i>dark and gloomy</i>?"`);
      scene.text('She circles around you, examining your outfit with a critical eye. "You\'re supposed to be one of our star athletes, or at least someone… And now look at you!"');
      scene.text('Stasya looks confused, her eyes darting between Bella and you, "Yeah, like, you used to be so, um, normal?"');
      scene.text('You open your mouth to defend your choice, to explain how this represents a new side of you, but Bella interrupts.');
      scene.text('"No excuses! This isn\'t you. We expect better from our jocks. This look? It\'s just… wrong."');
      scene.text('She points her finger right at your face. "You\'re making a mockery of everything we stand for here. Fix it, or you\'ll be doing it alone."');
      scene.text('Stasya nods, trying to look serious. "Yeah, you look kinda… lost?"');
      scene.text('With a final huff, Bella turns away, "Let\'s go, Stasya. We don\'t need this kind of drama."');
      scene.text('They walk off, leaving you to contemplate your next move amidst the whispers of passersby.');
      scene.actions([
        { label: 'Continue', goto: ['gschool_events', 'break_events'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya1.jpg');
        scene.text('You\'re adjusting your books in your locker when you hear the clack of Bella\'s heels approaching. Stasya is right behind her with a confused look on her face.');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what the fuck is this shit?" Bella sneers, her eyes scanning...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, what the fuck is this shit?" Bella sneers, her eyes scanning you from head to toe. "Did you lose a bet or are you just trying to look like a complete fucking freak now?"`);
        scene.text('She grabs your chin, forcing you to look at her, "Look at you, all dark and shit. You think this makes you cool? You\'re just a nerd with a bad case of emo."');
        scene.text('Stasya giggles. "Yeah, like, you went from geek to goth in one day! What the hell?"');
        scene.text('You attempt to explain that it\'s just an expression of yourself, but Bella cuts you off. "Spare me your bullshit. This…" She points at your outfit. "Is a fucking disgrace. You look like you crawled out of some shitty B-movie."');
        scene.text('"Fix this crap, or you\'ll be known as the biggest loser in school history, not just for being a nerd, but for this pathetic attempt at rebellion."');
        scene.text('"Totally, you look like you\'re going to a funeral or something. Not hot!" Stasya chimes in.');
        scene.text('With that, Bella shoves you back against the locker. "Sort your shit out, or don\'t bother talking to us."');
        scene.text('They walk away, leaving you to deal with the snickers and whispers of other students.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_events', 'break_events'] },
        ]);
      } else {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya1.jpg');
          scene.text('You\'re leaning against your locker, trying to blend into the shadows with your new gothic look when Bella and Stasya approach, their laughter already echoing down the hall.');
          // TODO-QSP: dynamic text: "Look at this fucking mess," Bella spits out, her gaze dripping with scorn. "You...
          scene.text(`"Look at this fucking mess," Bella spits out, her gaze dripping with scorn. "You think going goth will make you less of a cum dumpster, ${((s as any).pcs_nickname ?? 0)}?"`);
          scene.text('She steps closer, her voice lowering to a venomous whisper. "You\'re just adding to your trashy image. You really thought black clothes would cover up how much of a whore you are?"');
          scene.text('Stasya laughs, her voice shrill. "Yeah, like, black lipstick doesn\'t hide the fact you\'ve had more dicks in you than a porn star!"');
          scene.text('You try to defend yourself, to say it\'s just a new look, but Bella isn\'t having it. "Shut your cocksucker mouth. You think this makes you edgy? You\'re still just the school slut, only now you look like you belong in a graveyard after a gangbang."');
          scene.text('Her hand brushes down your outfit in mock disgust. "This isn\'t a statement; it\'s a cry for help. Or are you just hoping to attract the freaks now? Maybe get fucked in the back of a hearse instead of the school janitor\'s closet?"');
          // TODO-QSP: dynamic text: "Oh my god, can you imagine that?!" Stasya giggles. "Her in a coffin, legs open…...
          scene.text(`"Oh my god, can you imagine that?!" Stasya giggles. "Her in a coffin, legs open… That'd be classic ${((s as any).pcs_nickname ?? 0)}!"`);
          scene.text('With a final sneer, Bella steps back. "Keep your skank ass away from us. You\'re nothing but a disgrace, no matter how you dress it up."');
          scene.text('They leave, their laughter echoing down the hall, leaving you to face the stares and whispers of your peers.');
          qspCall(s, 'willpower', 'misc', 'self', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Respond [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Respond [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('As they depart, you can\'t resist a parting response. "Well if my looks keep the likes of you away from me I think that\'s a good thing!"');
    scene.text('With a final glance, you head off to your next class, ignoring the whispering.');
    scene.actions([
      { label: 'Hurry to class', goto: ['gschool_events', 'break_events'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Ignore them and hurry to your next class', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A22', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A139', (-1));
  }, goto: ['gschool_events', 'break_events'] },
          ]);
        } else {
          if (((s as any).grupTipe ?? 0) === 5) {
            scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya1.jpg');
            scene.text('You\'re adjusting your dark clothes at your locker, the hallway unusually quiet around you when Bella and Stasya spot you. Their approach is like vultures circling prey.');
            scene.text('"Oh look, it\'s the lonely little goth bitch," Bella sneers, her voice carrying over the whispers. "What, no one to fuck you now that you look like a fucking corpse?"');
            scene.text('She steps right into your personal space, her perfume a stark contrast to your black clothing. "You think this shit makes you special? You\'re still just the pathetic, friendless loser, only now you look like you\'ve given up on life."');
            scene.text('Stasya giggles, her voice adding to the mockery. "Yeah, like, who would even talk to you now? You\'re like, the definition of <i>do not touch</i>."');
            scene.text('You try to speak, to say something in your defense, but Bella cuts you off. "Save it, bitch. No one here gives a fuck about your emo shit. You\'re just a sad, lonely cunt trying to scare people away."');
            scene.text('She grabs the edge of your shirt, pulling it slightly. "This isn\'t a costume; it\'s a cry for help. Or maybe you\'re just hoping to scare off the few dicks that might have considered giving you attention?"');
            scene.text('"Ew, can you imagine?" Stasya chimes in. "She\'s like, the ultimate friendless freak now."');
            scene.text('With a final, cruel laugh, Bella lets go. "Keep your pathetic ass away from us. You\'re an embarrassment even to the outcasts."');
            scene.text('They walk away, leaving you in a pool of silence other than some whispers of your peers, the weight of your isolation feeling heavier than ever.');
            qspCall(s, 'willpower', 'misc', 'self', 'easy');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Respond [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Respond [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('As they depart, you can\'t resist a parting response. "Well if my looks keep the likes of you away from me I think that\'s a good thing!"');
    scene.text('With a final glance, you head off to your next class, ignoring the whispering.');
    scene.actions([
      { label: 'Hurry to class', goto: ['gschool_events', 'break_events'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Ignore them and hurry to your next class', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A22', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A139', (-1));
  }, goto: ['gschool_events', 'break_events'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingNotice(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheerleadingQW ?? {})['bella_stasya_gossip'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya1.jpg');
  scene.text('As you walk into the cafeteria, Bella and Stasya gesture towards you to get your attention.');
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 7) {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('"Hey sweetie, we were just by Albina\'s table and…"');
      scene.text('Bella trails off when she notices Natasha walking towards the table and flutters her eyelashes as she turns towards her. "Oh my god, I love your shirt! Where did you get it?!"');
      scene.text('Natasha isn\'t sure how to react. "I-It was my mom\'s… From the \'90s…" she awkwardly mumbles.');
      scene.text('Bella smiles sweetly. "Vintage! How adorable…"');
      if (((s as any).npc_rel ?? 0)?.['A16'] >= 50) {
        if (((s as any).npc_rel ?? 0)?.['A16'] >= 80) {
          qspCall(s, 'willpower', 'misc', 'self', 'easy');
        } else {
          qspCall(s, 'willpower', 'misc', 'self', 'medium');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Defend Natasha [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Defend Natasha [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A22', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A139', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya2.jpg');
    scene.text('You notice Natasha blushing slightly as she thanks Bella and continues on her way.');
    scene.text('Once Natasha is out of earshot, Bella goes full-on savage. "That was the ugliest effing shirt I\'ve ever seen!"');
    scene.text('Stasya quickly joins in. "I know, she\'s like so pathetic! Did you see her blushing? She thinks you were actually being nice to her!"');
    scene.text('"Yeah, but take this as a lesson. If you say nice things to people, then they will think you like them and then you can easily manipulate them," Bella tells Stasya.');
    scene.text('Stasya just rolls her eyes. "Like, whatever…"');
    scene.text('Despite both girls being in your clique, Natasha is your friend. You can\'t stand by and let them tease her. "Come on you two, stop tormenting the girl. You know she\'s struggling."');
    scene.text('Bella glares at you. "What?! Are you really going to defend her?!"');
    scene.text('Bella looks at Stasya for support, but she\'s playing with her phone and not paying attention.');
    scene.text('Bella turns back towards you, shaking her head in disbelief before she prods you in the chest. "I suggest you amend your attitude if you want to remain friends with us!"');
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Finish her off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Finish her off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A22', 'love');
    qspCall(s, 'npc_relationship', 'modify', 'A139', 'love');
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'hate');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya2.jpg');
    scene.text('As you\'re in their clique, you feel you can\'t disappoint them…');
    scene.text('As Natasha bails down the hallway, you yell after her. "That outfit should be in a fucking museum, loser!"');
    scene.text('Stasya and Bella whip around, falling over themselves laughing.');
    // TODO-QSP: dynamic text: "Damn, <<$pcs_nickname>>, I didn't know you had that kind of savage in you!" Bel...
    scene.text(`"Damn, ${((s as any).pcs_nickname ?? 0)}, I didn't know you had that kind of savage in you!" Bella says with a wicked grin.`);
    scene.text('Stasya can\'t stop giggling. "Yeah, you’re like usually all "holier than thou"!"');
    scene.text('They keep laughing, throwing shade and enjoying the drama before Bella flips her hair back and looks at you.');
    scene.text('"Oh, one more thing. Albina kicked some slut off the cheer squad and auditions are coming up. You better show, or it’s going to be one of Albina’s jock friends. Might do you good to drop a few pounds too."');
    scene.text('She flicks your stomach while smirking.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lunch', 'lunch'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave it there', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya2.jpg');
    scene.text('As further discussion is clearly pointless, you decide to leave it there.');
    scene.text('Just as she\'s about to leave, Bella turns back to you. "Before I forget, I have something important to tell you. Long story short, Albina kicked some slut off the cheerleading squad, so keep your eyes open in the next few weeks for auditions. I\'d like to see you there, otherwise Albina will choose one of her annoying sporty friends instead."');
    scene.text('She points towards your stomach and grins. "Who knows, maybe you could lose a pound or three there?"');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lunch', 'lunch'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Nod in agreement', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A22', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A139', 'like');
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya2.jpg');
    scene.text('You notice Natasha blushing slightly as she thanks Bella and continues on her way.');
    scene.text('As soon as Natasha is outside hearing distance, Bella starts viciously mocking her. "That was the ugliest effing shirt I\'ve ever seen!"');
    scene.text('Stasya quickly joins in. "I know, she\'s like so pathetic! Did you see her blushing? She thinks you were actually being nice to her!"');
    scene.text('"Yeah, but take this as a lesson. If you say nice things to people, then they will think you like them and then you can easily manipulate them," Bella tells Stasya.');
    scene.text('Stasya just rolls her eyes. "Like, whatever…"');
    scene.text('Seeing she\'s getting nowhere with Stasya, Bella turns towards you. "Before I forget, I have something important to tell you. Long story short, Albina kicked some slut off the cheerleading squad, so keep your eyes open in the next few weeks for auditions. I\'d like to see you there, otherwise Albina will choose one of her annoying sporty friends instead."');
    scene.text('She points towards your stomach and grins. "Who knows, maybe you could lose a pound or three there?"');
    scene.actions([
      { label: 'Thank them and leave', goto: ['gschool_lunch', 'lunch'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ignore', goto: ['gschool_lunch', 'lunch'] },
        { label: 'Investigate', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya1.jpg');
    scene.text('"Hey, we were just by Albina\'s table and…"');
    scene.text('Bella trails off when she notices Natasha walking towards the table and flutters her eyelashes as she turns towards her. "Oh my god, I love your shirt! Where did you get it?!"');
    scene.text('Natasha isn\'t sure how to react. "I-It was my mom\'s… From the 90s…" she awkwardly mumbles.');
    scene.text('Bella smiles sweetly. "Vintage! How adorable…"');
    scene.actions([
      { label: 'Nod in agreement', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A22', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A139', 'like');
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya2.jpg');
    scene.text('You notice Natasha blushing slightly as she thanks Bella and continues on her way.');
    scene.text('As soon as Natasha is outside hearing distance, Bella starts viciously mocking her. "That was the ugliest effing shirt I\'ve ever seen!"');
    scene.text('Stasya quickly joins in. "I know, she\'s like so pathetic! Did you see her blushing? She thinks you were actually being nice to her!"');
    scene.text('"Yeah, but take this as a lesson. If you say nice things to people, then they will think you like them and then you can easily manipulate them," Bella tells Stasya.');
    scene.text('Stasya just rolls her eyes. "Like, whatever…"');
    scene.text('Seeing she\'s getting nowhere with Stasya, Bella turns towards you. "Before I forget, I have something important to tell you. Long story short, Albina kicked some slut off the cheerleading squad and we thought it would suit you after all the rumors we\'ve heard about your… flexible body."');
    // TODO-QSP: dynamic text: Stasya chimes in. "We both know that she's never gonna get picked. Albina hates ...
    scene.text(`Stasya chimes in. "We both know that she's never gonna get picked. Albina hates town bicycles, and ${((s as any).pcs_nickname ?? 0)} here is an even bigger slut than that last girl."`);
    scene.text('Both girls then start mockingly laughing at you.');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['gschool_lunch', 'lunch'] },
      ]);
    }
    scene.actions([
      { label: 'Cry', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/tears1.jpg');
    scene.text('Stasya starts mocking you. "Boo hoo, look at her and her big crocodile tears!"');
    scene.text('"I heard she lubes cocks with her slut tears when she\'s out of lube," Bella jumps in.');
    scene.text('"It totally runs in the family! I once saw her sister giving some random guy a blowjob in the street!" Stasya piles on.');
    scene.text('"It was her boyfriend!" you blurt out through your sobs, trying to defend your sister\'s honour.');
    scene.text('The girls laugh even harder and start mimicking giving someone a blowjob and having sex.');
    scene.text('"Does her mom work at Boris\' café, by the train station? I thought she seemed familiar…" Bella asks.');
    scene.text('"Yeah, remember when she was called to the school last year?" Stasya replies.');
    scene.text('"Oh yeah, now I remember. It was just after four when I stepped into the café for a drink before catching the train. I didn\'t see anyone inside and raised my voice, and then it happened…" Bella pauses for dramatic effect.');
    // TODO-QSP: dynamic text: "This woman, <<$pcs_nickname>>'s mom to be exact, rushes out from the backroom, ...
    scene.text(`"This woman, ${((s as any).pcs_nickname ?? 0)}'s mom to be exact, rushes out from the backroom, her face blushing bright red as she tries buttoning up her messy shirt. Guess who comes out right behind her? The café owner, looking totally smug and satisfied. Fuck, I even remember her breath smelling like cum," Bella smirks.`);
    scene.text('The two girls continue to mock and laugh at you as you hang your head in tearful shame.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  }, goto: ['gschool_lunch', 'lunch'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('"Hey sweetie, we were just by Albina\'s table and…"');
      scene.text('Bella looks at you quizzically. "I see Natasha is wearing a decent uniform; I presume that\'s your doing? No, don\'t answer that, I don\'t want to know. You do realize it was a waste of time and money because she\'ll never be considered one of us, right?"');
      scene.text('With that, she walks away shaking her head.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_lunch', 'lunch'] },
      ]);
    } else {
      scene.actions([
        { label: 'Ignore', goto: ['gschool_lunch', 'lunch'] },
        { label: 'Investigate', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/bella/notice/bella_stasya1.jpg');
    scene.text('"Hey, we were just by Albina\'s table and…"');
    scene.text('Bella looks at you quizzically. "I see Natasha is wearing a decent uniform; I presume that\'s your doing? No, don\'t answer that, I don\'t want to know. You do realize it was a waste of time and money because she\'ll never be considered one of us, right?"');
    scene.text('With that she walks away shaking her head.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lunch', 'lunch'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'butt_grab':
      enterButtGrab(s, scene);
      break;
    case 'rand_gopnic1':
      enterRandGopnic1(s, scene);
      break;
    case 'rand_gopnic2':
      enterRandGopnic2(s, scene);
      break;
    case 'toilet_bj1':
      enterToiletBj1(s, scene);
      break;
    case 'toilet_bj2':
      enterToiletBj2(s, scene);
      break;
    case 'sweet':
      enterSweet(s, scene);
      break;
    case 'bella_goth':
      enterBellaGoth(s, scene);
      break;
    case 'cheerleading_notice':
      enterCheerleadingNotice(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_events1: LocationDef = {
  name: 'gschool_events1',
  title: 'He tries to hide it, but the proud grin on his face tells yo',
  region: 'other',
  enter: enter,
};
