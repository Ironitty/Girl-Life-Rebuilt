import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCreampieReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
  }
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'anal_creampie') {
    if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] < 3  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'thought_no_creampies');
    } else {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_happy');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_conflicted');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_unhappy');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_cum_together_react');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside');
      qspCall(s, 'sex_ev_reactions', 'cum_already');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'pull-out_finish');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_acp_known ?? 0) === 1) {
    scene.actions([
      { label: 'First anal creampie', handler: (st: GameState) => {
    ((s as any).npc_first_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.actions([
      { label: 'Is that what it feels like?', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      } else {
        scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
      }
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'what_creampie_feels_like');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhatCreampieFeelsLike(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.text('"Is... is that what it feels like when a guy comes in your ass...?" you stammer breathlessly.');
  } else {
    scene.text('"Is... is that what it feels like when a guy comes in your ass...?" you gasp in shock.');
  }
  if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
  } else {
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      // TODO-QSP: dynamic text: "Wait, was that your first creampie?" <<$npcdesc>> asks.
      scene.text(`"Wait, was that your first creampie?" ${((s as any).npcdesc ?? 0)} asks.`);
      scene.actions([
        { label: '"You\'re my first"', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/analcreampie/cowgirl1.mp4');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: "Yeah," you nod, giving <<$npcdesc>> a warm smile. "You're my first."
    scene.text(`"Yeah," you nod, giving ${((s as any).npcdesc ?? 0)} a warm smile. "You're my first."`);
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.text('"Careful," he smiles back at you. "You might get addicted."');
    } else {
      scene.text('He smiles back at you.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1) {
        scene.text('"Yeah," he smiles back. "Feels pretty good doesn\'t it?"');
      } else {
        scene.text('"Yeah. Did you like it?"');
      }
    }
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('You nod back, too overwhelmed to be able to say anything else.');
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      scene.actions([
        { label: 'Feels gross', handler: (st: GameState) => {
    scene.text('"Ugh," you grimace in disgust. "This might be one of the grossest things I\'ve ever felt."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Feels good', handler: (st: GameState) => {
    scene.text('"Yeah," you can\'t help but smile back. "It feels <i>really</i> good..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
      scene.actions([
        { label: 'Feels different from vaginal creampies', handler: (st: GameState) => {
    scene.text('"It feels totally different from when a guy comes in my pussy," you murmur, still astonished by it.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieHappy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['reluctant_creampie'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['unhappy_creampie'] !== 1) {
    scene.actions([
      { label: 'Happy creampie', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_great');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'feel_full');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'love_creampies');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'cum_together_kiss');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'cum_together_best');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_apologize');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'thanks_for_asking');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_enjoy_that');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'pullout_game_tease');
    qspCall(s, 'sex_ev_talk', 'free_creampies');
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieConflicted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['unhappy_creampie'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] < 1) {
    scene.actions([
      { label: 'Conflicted creampie', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'told_you_not_to_creampie');
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieUnhappy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] < 1) {
    scene.actions([
      { label: 'Unhappy creampie', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_gross');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time_mad');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'promised_no_creampie');
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieCumTogetherReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['came_together'] !== 3  &&  (((s as any).sex_ev ?? 0)?.['came_together'] === 2  ||  ((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['hypno_came_together'] !== 1) {
    scene.actions([
      { label: 'Did we come together?', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['came_together'] = 3;
    if (((s as any).sex_ev ?? 0)?.['did_we_cum_together'] === 1) {
      scene.text('You nod hazily, mind still swimming from your orgasm.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
          scene.text(`Did you...? did we...? together..?" you pant. ${((s as any).npcdesc ?? 0)} just nods, breathing heavily on top of you.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            // TODO-QSP: dynamic text: Your knees give out underneath you, falling down to the bed with <<$npcdesc>> on...
            scene.text(`Your knees give out underneath you, falling down to the bed with ${((s as any).npcdesc ?? 0)} on top of you.`);
            // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
            scene.text(`Did you...? did we...? together..?" you pant. ${((s as any).npcdesc ?? 0)} just nods, breathing heavily, cock still filling your asshole.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/3.jpg');
              // TODO-QSP: dynamic text: You sit back on your haunches, feeling something <i>squish</i> around <<$npcdesc...
              scene.text(`You sit back on your haunches, feeling something <i>squish</i> around ${((s as any).npcdesc ?? 0)}'s cock inside you, watching his chest rise and falls with the same laboured breathing as your own.`);
              // TODO-QSP: dynamic text: Did you...? did we...? together..?" you murmur. <<$npcdesc>> just nods.
              scene.text(`Did you...? did we...? together..?" you murmur. ${((s as any).npcdesc ?? 0)} just nods.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
                scene.img('images/shared/sex/vag/doggy/1.jpg');
                // TODO-QSP: dynamic text: Your knees give out underneath you, falling down to the bed with <<$npcdesc>> on...
                scene.text(`Your knees give out underneath you, falling down to the bed with ${((s as any).npcdesc ?? 0)} on top of you.`);
                // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
                scene.text(`Did you...? did we...? together..?" you pant. ${((s as any).npcdesc ?? 0)} just nods, breathing heavily, his cock still filling your ass.`);
              }
            }
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
            scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
            // TODO-QSP: dynamic text: You lean back on the bed, letting <<$npcdesc>>'s thick cum drain from your assho...
            scene.text(`You lean back on the bed, letting ${((s as any).npcdesc ?? 0)}'s thick cum drain from your asshole.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
              // TODO-QSP: dynamic text: You lay down, letting your breasts smush into the mattress as you feel <<$npcdes...
              scene.text(`You lay down, letting your breasts smush into the mattress as you feel ${((s as any).npcdesc ?? 0)}'s thick cum drain from your asshole.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                scene.img('images/shared/sex/cum/analcreampie/cowgirl1.mp4');
                // TODO-QSP: dynamic text: You lean back, sitting down between <<$npcdesc>>'s legs as you watch his thick c...
                scene.text(`You lean back, sitting down between ${((s as any).npcdesc ?? 0)}'s legs as you watch his thick cum drain from between yours.`);
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
            scene.img('images/shared/sex/after/pillow_talk2.jpg');
            // TODO-QSP: dynamic text: You lean back on the bed, breathing hard as <<$npcdesc>> slowly flops down besid...
            scene.text(`You lean back on the bed, breathing hard as ${((s as any).npcdesc ?? 0)} slowly flops down beside you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'anal_creampie') {
              scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
              // TODO-QSP: dynamic text: You lay down, letting your breasts smush into the mattress as you feel <<$npcdes...
              scene.text(`You lay down, letting your breasts smush into the mattress as you feel ${((s as any).npcdesc ?? 0)}'s thick cum ooze out of your asshole.`);
            }
          }
        }
        scene.text('"Did you...? did we...? together..?" you pant. He just nods back, breathing just as hard with a faint smile.');
      }
    }
    ((s as any).sex_ev ?? {})['did_we_cum_together'] = 2;
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['hypno_came_together'] === 1  &&  ((s as any).sex_ev ?? 0)?.['did_we_cum_together'] === 1) {
      scene.actions([
        { label: 'Lie about coming together', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Y-yeah," you stammer. You give <<$npcdesc>> a weak smile, hoping that it will b...
    scene.text(`"Y-yeah," you stammer. You give ${((s as any).npcdesc ?? 0)} a weak smile, hoping that it will be taken as exhaustion instead of the storm of frustration and confusion that rages inside you.`);
    scene.text('<i>What the hell was that? Why couldn\'t you come? What is wrong with you...</i>');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Admit you didn\'t come', handler: (st: GameState) => {
    scene.text('"Erm, uh... no..." you mumble.');
    scene.text('"Huh? I thought you said you were going to?"');
    scene.text('"I guess maybe I wasn\'t as close as I thought I was."');
    // TODO-QSP: dynamic text: You give <<$npcdesc>> a weak smile, trying to let him know it wasn't his fault w...
    scene.text(`You give ${((s as any).npcdesc ?? 0)} a weak smile, trying to let him know it wasn't his fault while frustration and confusion rage inside you.`);
    scene.text('<i>What the hell was that? Why couldn\'t you come? What is wrong with you...</i>');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieEnjoyThat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_surprise'] > 0  &&  ((s as any).sex_ev ?? 0)?.['came_together'] < 1) {
    scene.actions([
      { label: 'Did you enjoy that?', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
      // TODO-QSP: dynamic text: "Did you enjoy that?" you ask sweetly, leaving <<$npcdesc>>'s cock stuffed up yo...
      scene.text(`"Did you enjoy that?" you ask sweetly, leaving ${((s as any).npcdesc ?? 0)}'s cock stuffed up your ass and smile at him over your shoulder.`);
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: "Did you enjoy that?" you ask sweetly, leaving <<$npcdesc>>'s cock stuffed insid...
      scene.text(`"Did you enjoy that?" you ask sweetly, leaving ${((s as any).npcdesc ?? 0)}'s cock stuffed inside you and smiling up at him.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: "Did you enjoy that?" you ask sweetly, leaving <<$npcdesc>>'s cock stuffed insid...
        scene.text(`"Did you enjoy that?" you ask sweetly, leaving ${((s as any).npcdesc ?? 0)}'s cock stuffed inside you and smiling at him over your shoulder.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          // TODO-QSP: dynamic text: "Did you enjoy that?" you ask sweetly, leaving <<$npcdesc>>'s cock stuffed insid...
          scene.text(`"Did you enjoy that?" you ask sweetly, leaving ${((s as any).npcdesc ?? 0)}'s cock stuffed inside you and smiling down at him.`);
          // TODO-QSP: end !}
        } else {
          scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
          scene.text('"Did you enjoy that?" you ask, looking at him in amusement.');
        }
      }
    }
    scene.text('"Your ass is amazing," he pants.');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'thanks_for_asking');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I\'m glad', handler: (st: GameState) => {
    scene.text('"I\'m glad you liked it so much," you say, letting your smile grow wider.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'That\'s what they say', handler: (st: GameState) => {
    scene.text('"All the boys say so," you shrug, letting your smile slip into a smug grin.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I liked it too', handler: (st: GameState) => {
    scene.text('"I liked it too," you smile. "It felt nice."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskNextTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1) {
    if (((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1) {
      scene.actions([
        { label: 'Ask next time', handler: (st: GameState) => {
    if (((s as any).npc_ask_anal_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: '(Not mad)', handler: (st: GameState) => {
    ((s as any).npc_ask_anal_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['ask_next_time'] = 'not_mad';
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Just... ask next time..." you pant, smiling tiredly at him.');
    } else {
      scene.text('"I don\'t mind," you smile gently at him. "But you need to ask before you do."');
    }
    if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cum_wherever'] !== 1) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
        { label: '(A little mad)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ask_next_time'] = 'little_mad';
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"If you\'re going to... come inside my ass..." you pant. "... you need to ask..."');
      scene.text('You try to give him a look of annoyance, but it\'s very difficult to produce angry vibes off the back of an orgasm.');
    } else {
      // TODO-QSP: dynamic text: "You need to ask me if you're going to come inside," you frown at <<$npcdesc>> i...
      scene.text(`"You need to ask me if you're going to come inside," you frown at ${((s as any).npcdesc ?? 0)} in annoyance.`);
    }
    // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
    scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into your ass without permission.`);
    ((s as any).npc_ask_anal_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).npc_ask_anal_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.actions([
          { label: 'What happened to asking? (not mad)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"What... happened... to asking...?" you pant, giving him a dick-drunk smile.');
    } else {
      scene.text('"Didn\'t I say something about asking before coming inside my ass?" you chide with a teasing smile.');
    }
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he grins in return.');
      scene.text('"You still need to warn me," you chide gently.');
    } else {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
      scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'I thought I told you to ask (nice)', handler: (st: GameState) => {
    ((s as any).npc_ask_anal_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['ask_next_time'] = 'not_mad';
    scene.text('"I thought I told you to ask...?" you say.');
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he grins in return.');
      scene.text('"You still need to warn me," you chide gently.');
    } else {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
      scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
    }
    scene.actions([
      { label: 'I liked it', handler: (st: GameState) => {
    scene.text('"It\'s okay," you smile gently, cupping his face with your hand. "I liked it."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Next time', handler: (st: GameState) => {
    scene.text('"Next time..." you smile gently, cupping his face with your hand.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
          { label: 'I thought I told you to ask (annoyed)', handler: (st: GameState) => {
    ((s as any).npc_ask_anal_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['ask_next_time'] = 'annoyed';
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      // TODO-QSP: dynamic text: "What happened... to asking...?" you pant, glaring at <<$npcdesc>> through your ...
      scene.text(`"What happened... to asking...?" you pant, glaring at ${((s as any).npcdesc ?? 0)} through your post orgasm haze.`);
    } else {
      scene.text('"What happened to asking?" you scowl.');
    }
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he grins in return.');
      scene.text('"That doesn\'t mean you can do it without permission!" you huff.');
    } else {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
      scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskNextTime2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Just warn me next time', handler: (st: GameState) => {
    scene.text('"Just make sure to give me a warning next time," you chuckle.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCreampieBeBetter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t be sorry, be better', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['ask_next_time'] !== 'not_mad') {
      scene.actions([
        { label: '(Sullen)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.img('images/shared/sex/vag/doggy/2.jpg');
    } else {
      scene.img('images/shared/sex/after/pillow_talk2.jpg');
    }
    scene.text('"Don\'t be sorry," you sigh with measurable disappointment. "Be better."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: '(Forgiving)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
    } else {
      scene.img('images/shared/sex/after/pillow_talk2.jpg');
    }
    // TODO-QSP: dynamic text: "Don't be sorry," you say gently, looking into <<$npcdesc>>'s eyes. "Be better."
    scene.text(`"Don't be sorry," you say gently, looking into ${((s as any).npcdesc ?? 0)}'s eyes. "Be better."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampieAskNextTimeMad(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_force'] !== 1) {
    if (((s as any).npc_ask_anal_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: 'Ask next time (very mad)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    } else {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    }
    scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      // TODO-QSP: end !}
    }
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.img('images/shared/sex/vag/doggy/3.jpg');
      scene.text('"You need to..." you pant. "... ask... before you do... that..."');
      scene.text('It\'s hard to give a glare that has impact when you\'re still dick drunk off the back of an anal orgasm but you somehow manage anyways, looking at him with daggers in your eyes.');
    } else {
      scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      scene.text('"Can\'t you fucking ask before you come inside my ass?" you scowl.');
    }
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
      scene.text('"You still need to fucking tell me what you\'re gonna do," you hiss.');
    } else {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
      scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
      scene.text('"Don\'t be sorry," you grumble. "Be better."');
    }
    ((s as any).npc_ask_anal_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time_mad2');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'What happened to asking (very mad)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Didn\'t..." you pant, tiredly glaring at him. "... I tell you... to ask first...?"');
    } else {
      scene.text('"What the fuck!" you scowl. "Didn\'t I tell you to ask first?!"');
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time_mad2');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskNextTimeMad2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
    scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
    scene.text('"You still need to fucking tell me what you\'re gonna do," you hiss.');
  } else {
    // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
    scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
    scene.text('"Don\'t be sorry," you grumble. "Be better."');
  }
  ((s as any).npc_ask_anal_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterPullOutFinish(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1  ||  ((s as any).sex_ev ?? 0)?.['not_inside'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1  &&  ((s as any).sex_ev ?? 0)?.['pull-out_fail_react'] === 0) {
    // TODO-QSP: act iif(sex_ev['not_inside'] = 1, '[not]... inside...', '[pull]... out...'):
    ((s as any).sex_ev ?? {})['pull-out_fail_react'] = 1;
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      // TODO-QSP: iif(sex_ev['not_inside'] = 1, '"not... in... side..."', '"... out..."') + ' you finish belatedly. Yo...
    } else {
      // TODO-QSP: iif(sex_ev['not_inside'] = 1, '"not... in... side..."', '"... out..."') + ' you finish belatedly.'
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_react');
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterCreampieGross(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_orgasm'] === 0) {
    scene.actions([
      { label: 'That was gross', handler: (st: GameState) => {
    ((s as any).npc_dont_like_analcreampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['creampie_gross'] = 1;
    if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
      ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_pull_out_image');
      // TODO-QSP: dynamic text: "Gross," you cringe as <<$npcdesc>> slips his cock out from inside you, releasin...
      scene.text(`"Gross," you cringe as ${((s as any).npcdesc ?? 0)} slips his cock out from inside you, releasing a flood of cum that comes spilling out of your asshole.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        // TODO-QSP: dynamic text: "Well," you say, cringing as <<$npcdesc>>'s cum oozes from your asshole. "That w...
        scene.text(`"Well," you say, cringing as ${((s as any).npcdesc ?? 0)}'s cum oozes from your asshole. "That was gross."`);
        // TODO-QSP: dynamic text: "Gross? What's so gross about a creampie?" <<$npcdesc>> asks.
        scene.text(`"Gross? What's so gross about a creampie?" ${((s as any).npcdesc ?? 0)} asks.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          // TODO-QSP: dynamic text: "Well," you say, wriggling beneath <<$npcdesc>>, cringing at the slimy <i>fullne...
          scene.text(`"Well," you say, wriggling beneath ${((s as any).npcdesc ?? 0)}, cringing at the slimy <i>fullness</i> of your asshole. "This is gross."`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            // TODO-QSP: dynamic text: "Well," you say, wriggling beneath <<$npcdesc>>, cringing at the slimy <i>fullne...
            scene.text(`"Well," you say, wriggling beneath ${((s as any).npcdesc ?? 0)}, cringing at the slimy <i>fullness</i> of your asshole. "This is gross."`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/3.jpg');
              // TODO-QSP: dynamic text: "Well," you say, shifting your weight on top of <<$npcdesc>>, cringing at the sl...
              scene.text(`"Well," you say, shifting your weight on top of ${((s as any).npcdesc ?? 0)}, cringing at the slimy <i>fullness</i> inside your belly. "This is gross."`);
            }
          }
        }
        // TODO-QSP: dynamic text: "Gross? What's so gross about a creampie?" <<$npcdesc>> asks.
        scene.text(`"Gross? What's so gross about a creampie?" ${((s as any).npcdesc ?? 0)} asks.`);
      }
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_gross2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieGross2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Feels weird', handler: (st: GameState) => {
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== ''  &&  ((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.text('"They feel weird," you grimace, before twisting your mouth in a wry smirk and shrug. "But I like you. So you better be happy I let you do this."');
    } else {
      scene.text('"It feels weird when guys come inside," you grimace. "It feels like a bunch of slime filling up my vagina. I don\'t like it."');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    { label: 'Cleanup is gross', handler: (st: GameState) => {
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== ''  &&  ((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.text('"It\'s not the creampie itself, it\'s the clean up," you grimace, before twisting your mouth in a wry smirk and shrug. "It has a tendency to stick around for a while and <i>gush</i> when you\'re least expecting it. So you better be happy I let you do this."');
    } else {
      scene.text('"It\'s not the creampie itself, it\'s the clean up," you grimace, before twisting your mouth in a wry smirk and shrug. "It has a tendency to stick around for a while and <i>gush</i> when you\'re least expecting it."');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    { label: 'Different when it\'s anal', handler: (st: GameState) => {
    scene.text('"It\'s different when it\'s in your ass," you grimace. "Feels too much like having the runs."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterPromisedNoCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] !== 1) {
    scene.actions([
      { label: 'You promised you wouldn\'t come inside!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['mad'] = 1;
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.img('images/shared/sex/vag/doggy/3.jpg');
      scene.text('"What the fuck!" you start dizzily, head swimming as you\'re caught halfway between rage and a post-orgasm endorphin rush. "You promised you wouldn\'t come inside my ass!"');
    } else {
      scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      scene.text('"What the fuck!" you shout. "You promised you wouldn\'t come inside my ass!"');
    }
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You said I could come wherever I wanted," he pants back.');
      scene.text('"I meant anywhere except there," you grumble back.');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"It felt too good," he pants. "Couldn\'t pull out."');
        scene.text('"Don\'t you have any idea what a fucking promise is?!" you seethe. "Asshole!"');
      } else {
        scene.text('"Sorry," he pants sheepishly.');
        scene.text('"It\'s okay," you murmur back, unable to keep the smile from your voice.');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterThanksForAsking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([
      { label: 'Thanks for asking', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/1.jpg');
    if (((s as any).sex_ev ?? 0)?.['creampie_force'] === 1  &&  ((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      // TODO-QSP: dynamic text: "Thanks for asking," you pant, smiling mischievously at <<$npcdesc>>.
      scene.text(`"Thanks for asking," you pant, smiling mischievously at ${((s as any).npcdesc ?? 0)}.`);
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      if (((s as any).sex_ev ?? 0)?.['creampie_force'] === 1) {
        scene.text('"Thanks for asking," you say mischievously.');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        if (((s as any).sex_ev ?? 0)?.['came_together'] > 0  &&  ((s as any).npc_ask_anal_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "Thanks for asking," you murmur, giving <<$npcdesc>> a blissful smile.
          scene.text(`"Thanks for asking," you murmur, giving ${((s as any).npcdesc ?? 0)} a blissful smile.`);
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
            // TODO-QSP: dynamic text: "Thanks for asking," you murmur, giving <<$npcdesc>> a blissful smile.
            scene.text(`"Thanks for asking," you murmur, giving ${((s as any).npcdesc ?? 0)} a blissful smile.`);
            qspCall(s, 'sex_ev_sex', 'sex_end');
          } else {
            if (((s as any).npc_ask_anal_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"Thanks for asking," you smile sweetly. "It means a lot to me."');
              scene.text('"Well, you wanted me to, didn\'t you?" he smiles back.');
              qspCall(s, 'sex_ev_sex', 'sex_end');
            } else {
              // TODO-QSP: dynamic text: "Thanks for asking permission," you say to <<$npcdesc>>. "It means a lot to me."
              scene.text(`"Thanks for asking permission," you say to ${((s as any).npcdesc ?? 0)}. "It means a lot to me."`);
              if (((s as any).npc_dont_like_analcreampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text('"I thought you didn\'t like anal creampies," he asks curiously.');
                scene.actions([
                  { label: 'Did it for you', handler: (st: GameState) => {
    scene.text('"I don\'t," you say, giving him a warm smile. "But I know you do."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
                  { label: 'Got used to it', handler: (st: GameState) => {
    ((s as any).npc_dont_like_analcreampie ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.text('"I got used to it," you shrug. "I don\'t mind them so much anymore."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
                  { label: 'Changed my mind', handler: (st: GameState) => {
    ((s as any).npc_dont_like_analcreampie ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).npc_know_love_analcreampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Changed my mind," you grin. "I like them now. So long as you ask."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
                  { label: 'Only when it\'s you', handler: (st: GameState) => {
    scene.text('"I like them now," you say, giving him a warm smile. "But only when it\'s you."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
                ]);
              } else {
                scene.text('"Thanks for letting me," he smiles back.');
                qspCall(s, 'sex_ev_sex', 'sex_end');
              }
            }
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterToldYouNotToCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] !== 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] !== 2) {
    scene.actions([
      { label: 'I said no creampies', handler: (st: GameState) => {
    scene.actions([
      { label: '(Not mad)', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/1.jpg');
    // TODO-QSP: dynamic text: "Hey..." You look back at <<$npcdesc>>, still shivering from your orgasm. "I tho...
    scene.text(`"Hey..." You look back at ${((s as any).npcdesc ?? 0)}, still shivering from your orgasm. "I thought I told you not to come inside my ass..."`);
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You said I could come wherever I wanted," he pants back.');
      scene.text('"I meant anywhere except there," you murmur back, unable to keep the smile from your voice.');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"It felt too good," he pants. "Couldn\'t pull out."');
        scene.text('"I don\'t think I can disagree," you murmur back, unable to keep the smile from your voice.');
      } else {
        scene.text('"Sorry," he pants sheepishly.');
        scene.text('"It\'s okay," you murmur back, unable to keep the smile from your voice.');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: '(Annoyed)', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/1.jpg');
    // TODO-QSP: dynamic text: "Hey..." You look back at <<$npcdesc>>, still shivering from your orgasm. "I tho...
    scene.text(`"Hey..." You look back at ${((s as any).npcdesc ?? 0)}, still shivering from your orgasm. "I thought I told you not to come inside my ass..."`);
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You said I could come wherever I wanted," he pants back.');
      scene.text('"I meant anywhere except there," you grumble back.');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"It felt too good," he pants. "Couldn\'t pull out."');
        scene.text('"That\'s no excuse," you grumble.');
      } else {
        scene.text('"Sorry," he pants sheepishly.');
        scene.text('"It\'s okay," you murmur back, unable to keep the smile from your voice.');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterThoughtNoCreampies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] < 3  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/1.jpg');
    if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Finally break up with your shitty boyfriend?" <<$npcdesc>> grins, panting.
      scene.text(`"Finally break up with your shitty boyfriend?" ${((s as any).npcdesc ?? 0)} grins, panting.`);
      if ((!((s as any).pcs_lover ?? 0))) {
        scene.actions([
          { label: 'Yeah', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.text('"Yeah," you smile back. "I\'m single again. Which means all the creampies in the world for me. At least until I start dating again."');
    scene.text('You give him a wink.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'Get sad', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.text('An ache immediately pulses inside your chest.');
    scene.text('"Yeah..." you mumble, turning your head. "It was a bad breakup..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
      // TODO-QSP: dynamic text: "Finally decided to let a real man fill you up, huh?" <<$npcdesc>> grins, pantin...
      scene.text(`"Finally decided to let a real man fill you up, huh?" ${((s as any).npcdesc ?? 0)} grins, panting.`);
      if ((!((s as any).pcs_lover ?? 0))) {
        scene.actions([
          { label: 'I\'m single now', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.text('"My boyfriend and I broke up," you smile back. "Which means I\'m single again. Which means all the creampies in the world for me. At least until I get a new boyfriend."');
    scene.text('You wink.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
      // TODO-QSP: end !}
      scene.actions([
        { label: 'Changed my rules', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 3;
    scene.text('"No, we\'re still together. But I decided to change my rules," you smile.');
    scene.actions([
      { label: 'Only emotional cheating counts', handler: (st: GameState) => {
    scene.text('"It\'s only cheating if I\'m emotionally involved with you. Since I\'m only using you for sex, it doesn\'t count!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'No kissing', handler: (st: GameState) => {
    ((s as any).npc_no_kiss ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"It\'s only cheating if I kiss you. As long as we\'re just fucking each other\'s brains out, I\'m not cheating!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'No anal', handler: (st: GameState) => {
    ((s as any).npc_no_anal ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"It\'s only cheating if I let you fuck my ass. That\'s reserved for boyfriends and husbands. So as long as we don\'t do that, it\'s not cheating!"');
    // TODO-QSP: dynamic text: "It's usually the other way around, isn't it?" <<$npcdesc>> snickers
    scene.text(`"It's usually the other way around, isn't it?" ${((s as any).npcdesc ?? 0)} snickers`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
        { label: 'I\'m cheating', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 3;
    scene.text('"No, we\'re still together," you smile. "But I decided to start cheating on him."');
    scene.text('You wink.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I thought," <<$npcdesc>> pants. "You said I wasn't allowed to come inside you? ...
      scene.text(`"I thought," ${((s as any).npcdesc ?? 0)} pants. "You said I wasn't allowed to come inside you? Something about your boyfriend?"`);
      if ((!((s as any).pcs_lover ?? 0))) {
        scene.actions([
          { label: 'I\'m single now', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.text('"My boyfriend and I broke up," you smile back. "Which means I\'m single again. Which means all the creampies in the world for me. At least until I get a new boyfriend."');
    scene.text('You wink.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
      scene.actions([
        { label: 'Changed my rules', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 3;
    scene.text('"I decided to change my rules," you smile.');
    scene.actions([
      { label: 'Only emotional cheating counts', handler: (st: GameState) => {
    scene.text('"It\'s only cheating if I\'m emotionally involved with you. Since I\'m only using you for sex, it doesn\'t count!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'No kissing', handler: (st: GameState) => {
    ((s as any).npc_no_kiss ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"It\'s only cheating if I kiss you. As long as we\'re just fucking each other\'s brains out, I\'m not cheating!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'No anal', handler: (st: GameState) => {
    ((s as any).npc_no_anal ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"It\'s only cheating if I let you fuck my ass. That\'s reserved for boyfriends and husbands. So as long as we don\'t do that, it\'s not cheating!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
        { label: 'I\'m cheating', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 3;
    scene.text('"Well, the thing is..." you say, letting a smile creep onto your face. "I decided to start cheating on him. So you can come inside my ass all you want..."');
    scene.text('You wink.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ignore the question', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTogetherYeah(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_know_love_analcreampie ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'Yeah', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['react'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    if (((s as any).sex_ev ?? 0)?.['cum_together_fake'] === 0) {
      // TODO-QSP: dynamic text: "Yeah..." you smile back. You choose to let the moment speak for itself and don'...
      scene.text(`"Yeah..." you smile back. You choose to let the moment speak for itself and don't say anything more. It seems ${((s as any).npcdesc ?? 0)} feels the same way as he rests with you, his cock still inside you but neither of you in a hurry to change it.`);
    } else {
      // TODO-QSP: dynamic text: "Yeah..." you smile. You choose to keep your lies to a minimum and leave it at t...
      scene.text(`"Yeah..." you smile. You choose to keep your lies to a minimum and leave it at that. ${((s as any).npcdesc ?? 0)} seems happy enough and smiles back at you, content with his cock resting inside you.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampiePullOutImage(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieFeltGreat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] !== 1) {
    scene.actions([
      { label: 'That felt great', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['react'] = 1;
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_pull_out_image');
      if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
        if (((s as any).sex_ev ?? 0)?.['came_together'] === 1  ||  ((s as any).sex_ev ?? 0)?.['came_together'] === 3) {
          scene.text('"That felt great," you pant, aftershocks of your orgasm still shivering through you, enjoying the feeling of cum draining from your asshole.');
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((s as any).npcdesc ?? 0)} just smiles tiredly back at you.`);
        } else {
          scene.text('"That was..." you pant, aftershocks of your orgasm still shivering through you, cum draining from your asshole. "Did we... together...?"');
          scene.text('"Yeah..." he breathes back.');
          scene.text('"I thought so," you smile. "That was incredible..."');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
          // TODO-QSP: dynamic text: "That felt great," you smile, beaming at <<$npcdesc>>.
          scene.text(`"That felt great," you smile, beaming at ${((s as any).npcdesc ?? 0)}.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_together_fake'] === 1) {
            scene.text('"That was..." you pant, dramatically feigning post-orgasm shakes, letting the cum drain from your asshole. "I could... feel you... -<i>gasp</i>- inside me..."');
          } else {
            scene.text('"That was amazing," you gush, enjoying the feeling of cum draining from your asshole. "I could <i>feel</i> you coming inside my ass. It felt so good!"');
          }
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((s as any).npcdesc ?? 0)} just smiles tiredly back at you.`);
        }
      }
    } else {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
      if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
        if (((s as any).sex_ev ?? 0)?.['came_together'] === 1  ||  ((s as any).sex_ev ?? 0)?.['came_together'] === 3) {
          // TODO-QSP: dynamic text: "It felt good," you pant, aftershocks of your orgasm still shivering through you...
          scene.text(`"It felt good," you pant, aftershocks of your orgasm still shivering through you, enjoying the feeling being filled by both ${((s as any).npcdesc ?? 0)}'s cum and his cock.`);
          scene.text('"Yeah?" he pants back.');
          scene.text('"Yeah... Really really good..."');
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((s as any).npcdesc ?? 0)} just smiles tiredly back at you.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_together_fake'] === 1) {
            scene.text('"That was..." you pant, aftershocks of your orgasm still shivering through you, cum draining from your asshole. "Did we... together...?"');
            scene.text('"Yeah..." he breathes back.');
            scene.text('"I thought so," you smile. "I could feel it inside me. It was <i>amazing</i>..."');
          } else {
            scene.text('"That was..." you pant, aftershocks of your orgasm still shivering through you. "I just... Did you... did we... together...?"');
            scene.text('"Yeah..." he breathes back.');
            scene.text('"I thought so," you smile. "I could feel you inside me. It was <i>amazing</i>..."');
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
          // TODO-QSP: dynamic text: "That felt great," you smile, beaming at <<$npcdesc>>, squeezing him with your a...
          scene.text(`"That felt great," you smile, beaming at ${((s as any).npcdesc ?? 0)}, squeezing him with your asshole.`);
        } else {
          // TODO-QSP: dynamic text: "That was great," you grin, gently flexing your asshole around <<$npcdesc>>'s co...
          scene.text(`"That was great," you grin, gently flexing your asshole around ${((s as any).npcdesc ?? 0)}'s cock, still stuffed inside you with all of his cum. "I could <i>feel</i> when you came inside me. It felt so good!"`);
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFeelFull(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I feel full', handler: (st: GameState) => {
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and marveling at the warmth you feel in your backside.');
      } else {
        scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and savouring the warmth as much as you can, even as it runs from your asshole.');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.text('"I feel... <i>full</i>..." you murmur, marveling at the warmth you feel in your backside.');
      } else {
        scene.text('"I feel... <i>full</i>..." you murmur, savouring the warmth as much as you can even as it spills from your asshole.');
      }
    }
    ((s as any).sex_ev ?? {})['react'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterLoveCreampies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_creampie'] !== 1) {
    if (((s as any).npc_know_love_analcreampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'I love it when you come in my ass', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['react'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
    if (((s as any).npc_know_love_analcreampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
        scene.text('"I love it when you come inside my ass," you smile, shivering with orgasmic aftershocks.');
      } else {
        scene.text('"I love it when you come inside my ass," you smile.');
      }
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        scene.text('"I love coming inside your ass too," he smiles back.');
      } else {
        scene.text('"I know," he smirks back.');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I love anal creampies', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['react'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
    ((s as any).npc_know_love_analcreampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"I love the feeling of a guy coming in my ass," you sigh contently, still giddy from your orgasm. "It always makes me come too."');
    } else {
      scene.text('"I love the feeling of a guy coming in my ass," you sigh contently. "Something about it just turns me on so much."');
    }
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['fav_pos'] === 'anal') {
      // TODO-QSP: $pc_cum_pref_know[$npcID] = $npc_cum_pref[$npcID]
      scene.text('"Filling a girls ass is always the best," he says, looking at you. "We must be made to match."');
      scene.text('"Must be," you say back, giving him a smile.');
    } else {
      scene.text('"Maybe I should come inside your ass more often then."');
      scene.text('"Yes," you nod, smiling. "You definitely should."');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTogetherKiss(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterCumTogetherBest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
    scene.actions([
      { label: 'Simultaneous orgasms are the best', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/smile1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/vag/doggy/smile1.jpg');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: "Simultaneous orgasm are the best," you pant, giving <<$npcdesc>> a tired smile.
    scene.text(`"Simultaneous orgasm are the best," you pant, giving ${((s as any).npcdesc ?? 0)} a tired smile.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieApologize(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_force'] === 1) {
    scene.actions([
      { label: 'Couldn\'t resist', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
      // TODO-QSP: dynamic text: "Sorry," you tease as you unlock your legs from behind <<$npcdesc>>. "I couldn't...
      scene.text(`"Sorry," you tease as you unlock your legs from behind ${((s as any).npcdesc ?? 0)}. "I couldn't resist."`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        if (((s as any).sex_ev ?? 0)?.['came_together']) {
          // TODO-QSP: dynamic text: "Sorry," you pant, coming down from your own orgasm and sitting back on <<$npcde...
          scene.text(`"Sorry," you pant, coming down from your own orgasm and sitting back on ${((s as any).npcdesc ?? 0)}'s cock, taking extreme pleasure in the way the movement <i>squeezes</i> cum around it inside you. "I couldn't resist."`);
        } else {
          // TODO-QSP: dynamic text: "Sorry," you tease, sitting back on <<$npcdesc>>'s cock, taking extreme pleasure...
          scene.text(`"Sorry," you tease, sitting back on ${((s as any).npcdesc ?? 0)}'s cock, taking extreme pleasure in the way the movement <i>squeezes</i> cum around it inside you. "I couldn't resist."`);
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalBcHappy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
    scene.actions([
      { label: 'Anal is the best birth control', handler: (st: GameState) => {
    scene.text('Anal is the best birth control');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampiePcStartled(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_force'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['came_together'] === 0  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] !== 2  &&  ((s as any).sex_ev ?? 0)?.['reaction'] !== 'startled') {
    scene.actions([
      { label: 'Startled', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['reaction'] = 'startled';
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        }
      }
    }
    // TODO-QSP: dynamic text: You gasp in surprise, freezing up as <<$npcdesc>>'s cock continues to pulse insi...
    scene.text(`You gasp in surprise, freezing up as ${((s as any).npcdesc ?? 0)}'s cock continues to pulse inside you.`);
    if (((s as any).sex_ev ?? 0)?.['2pump'] === 1) {
      qspCall(s, 'sex_ev_cum', '2pumpchump_creampie');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
        qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside');
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTakeInStride1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['take_in_stride'] === 0) {
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Take it in stride', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['take_in_stride'] = 1;
    if (((s as any).sex_ev ?? 0)?.['reaction'] === 'startled') {
      // TODO-QSP: dynamic text: After your momentary surprise, you take it in stride, smiling as you resume thro...
      scene.text(`After your momentary surprise, you take it in stride, smiling as you resume throwing your hips forward against ${((s as any).npcdesc ?? 0)}'s, letting him fully ride out his orgasm inside you.`);
    } else {
      // TODO-QSP: dynamic text: After your momentary surprise, you take it in stride, smiling as you resume thro...
      scene.text(`After your momentary surprise, you take it in stride, smiling as you resume throwing your hips back against ${((s as any).npcdesc ?? 0)}'s, letting him fully ride out his orgasm inside your ass.`);
      // TODO-QSP: dynamic text: After your momentary surprise, you take it in stride, smiling as you resume roll...
      scene.text(`After your momentary surprise, you take it in stride, smiling as you resume rolling your hips over ${((s as any).npcdesc ?? 0)}'s, letting him fully ride out his orgasm inside you.`);
      // TODO-QSP: end !}
    }
    // TODO-QSP: dynamic text: You take it in stride, smiling as you continue to throw your hips back against <...
    scene.text(`You take it in stride, smiling as you continue to throw your hips back against ${((s as any).npcdesc ?? 0)}'s, letting him fully ride out his orgasm inside you.`);
  } },
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterDidYouComeInside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_force'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['came_together'] !== 3  &&  (((s as any).sex_ev ?? 0)?.['came_together'] < 3  ||  ((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1) {
    scene.actions([
      { label: 'Did you just come inside my ass?', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['just_cum_inside_me'] = 1;
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      ((s as any).sex_ev ?? {})['came_together'] = 3;
    }
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_pull_out_image');
      scene.text('"Did you just come inside my ass?" you ask somewhat rhetorically as you feel liquid continue to drain from your asshole.');
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.text('"Did you just come inside my ass?" you ask somewhat rhetorically as you watch a stream of milky liquid trickle from your asshole.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.text('"Did you just come inside my ass?" you ask somewhat rhetorically as you feel liquid continue to drain from your asshole.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.text('"Did you just come inside my ass?" you ask somewhat rhetorically as you watch a stream of milky liquid trickle from your asshole.');
            // TODO-QSP: end !}
          } else {
            scene.text('"Did you just come inside my ass?" you ask.');
          }
        }
      }
      if (((s as any).sex_ev ?? 0)?.['2pump'] === 1) {
        scene.text('"Y-yeah..." he mumbles.');
        qspCall(s, 'sex_ev_reactions', '2pump_react');
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_warn'] === 1  &&  ((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
          // TODO-QSP: dynamic text: "I was trying to tell you," <<$npcdesc>> pants, breathing hard. "I was going to ...
          scene.text(`"I was trying to tell you," ${((s as any).npcdesc ?? 0)} pants, breathing hard. "I was going to come... But you weren't listening..."`);
          scene.actions([
            { label: 'Take it in stride', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_that_explains');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_thought_so');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'pullout_game_tease');
    qspCall(s, 'sex_ev_reactions', 'quickshot_tease1');
  } },
          ]);
        } else {
          if ((((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] > 0) {
            scene.text('"Yeah. You squeezed it right out of me," he says with a satisfied sigh.');
            scene.actions([
              { label: 'Take it in stride', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_just_checking');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_that_explains');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_great');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time');
    qspCall(s, 'sex_ev_reactions', 'quickshot_tease1');
  } },
            ]);
          } else {
            if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 1) {
              scene.text('"Yeah," he sighs beatifically.');
              scene.actions([
                { label: 'Take it in stride', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_accident_fine');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_just_checking');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_that_explains');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_thought_so');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_great');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'pullout_game_tease');
    qspCall(s, 'sex_ev_reactions', 'quickshot_tease1');
  } },
              ]);
            } else {
              if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                scene.text('"Yeah, your asshole was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
                scene.actions([
                  { label: 'Take it in stride', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_accident_fine');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_just_checking');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_that_explains');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_thought_so');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_great');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'pullout_game_tease');
    qspCall(s, 'sex_ev_reactions', 'quickshot_tease1');
  } },
                ]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
                  scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
                  scene.actions([
                    { label: 'Take it in stride', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_accident_fine');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_just_checking');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_that_explains');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_thought_so');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_great');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time');
    qspCall(s, 'sex_ev_reactions', 'quickshot_tease1');
  } },
                  ]);
                } else {
                  if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
                    if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
                      if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 0) {
                        // TODO-QSP: dynamic text: "I'm so sorry!" <<$npcdesc>> apologizes profusely. "I know I promised I wouldn't...
                        scene.text(`"I'm so sorry!" ${((s as any).npcdesc ?? 0)} apologizes profusely. "I know I promised I wouldn't but I couldn't hold it and- I swear! I didn't mean to!"`);
                      } else {
                        // TODO-QSP: dynamic text: "I'm so sorry!" <<$npcdesc>> apologizes profusely. "I know I promised I wouldn't...
                        scene.text(`"I'm so sorry!" ${((s as any).npcdesc ?? 0)} apologizes profusely. "I know I promised I wouldn't, but you came and it felt so good and I couldn't hold it and- I'm <i>so</i> so sorry!"`);
                      }
                    } else {
                      if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 0) {
                        // TODO-QSP: dynamic text: "I'm so sorry!" <<$npcdesc>> apologizes profusely. "I didn't mean to! I tried to...
                        scene.text(`"I'm so sorry!" ${((s as any).npcdesc ?? 0)} apologizes profusely. "I didn't mean to! I tried to hold it and- I'm <i>so</i> so sorry!"`);
                      } else {
                        // TODO-QSP: dynamic text: "I'm so sorry!" <<$npcdesc>> apologizes profusely. "I didn't mean to! But you ca...
                        scene.text(`"I'm so sorry!" ${((s as any).npcdesc ?? 0)} apologizes profusely. "I didn't mean to! But you came and it felt so good and I tried to hold it but- I'm <i>so</i> so sorry!"`);
                      }
                    }
                  } else {
                    // TODO-QSP: dynamic text: "I'm so sorry!" <<$npcdesc>> apologizes profusely. "I can't believe I fucked up ...
                    scene.text(`"I'm so sorry!" ${((s as any).npcdesc ?? 0)} apologizes profusely. "I can't believe I fucked up again!"`);
                  }
                  scene.actions([
                    { label: 'Take it in stride', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_accident_fine');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_just_checking');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_that_explains');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_thought_so');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_great');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'pullout_game_tease');
    qspCall(s, 'sex_ev_reactions', 'quickshot_tease1');
  } },
                  ]);
                }
              }
            }
          }
        }
      }
      if (((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1) {
        scene.actions([
          { label: 'Panic', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_freakout');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'idk_you_panic_after');
  } },
          { label: 'Get angry', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_after');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'told_you_not_to_creampie');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_gross');
  } },
        ]);
      }
      qspCall(s, 'sex_ev_reactions_analcreampie', 'first_creampie');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'delayed_creampie_orgasm1');
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
        scene.actions([
          { label: 'Take the blame (cowgirl)', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/3.jpg');
    scene.text('"I think this one might be on me," you admit, looking down between your legs ruefully. "It\'s probably hard to get a girl\'s attention to pull out when she\'s coming all over your cock."');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
  } },
        ]);
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterDidYouComeInsideStride(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take it in stride', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_that_explains');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_thought_so');
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] !== 1) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'pullout_game_tease');
    }
    qspCall(s, 'sex_ev_reactions', 'quickshot_tease1');
  } },
  ]);
  scene.build();
}

function enterDelayedCreampieOrgasm1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).orgasm ?? 0) === ((s as any).sex_ev ?? 0)?.['orgasm']  &&  ((s as any).sex_ev ?? 0)?.['came_together'] === 0) {
    scene.actions([
      { label: 'Delayed creampie orgasm', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = (((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['came_together'] = 2;
    ((s as any).sex_ev ?? {})['react'] = 1;
    // TODO-QSP: gs 'arousal', 'vaginal', -1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/orgasm1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
        }
      }
    }
    scene.text('An instant later, you suddenly find yourself intensely aware of the pool of heat filling up your insides and a thrill of euphoric spasms abruptly roll through your body, covering your skin in goosebumps and locking your mouth in a silent scream of beautiful agony.');
    // TODO-QSP: dynamic text: You cry your wordless cry, unable to do anything except tremble around <<$npcdes...
    scene.text(`You cry your wordless cry, unable to do anything except tremble around ${((s as any).npcdesc ?? 0)}'s cock inside you.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: When your orgasm finally fades, you find <<$npcdesc>> looking down at you with a...
      scene.text(`When your orgasm finally fades, you find ${((s as any).npcdesc ?? 0)} looking down at you with an utterly confused expression.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: When your orgasm finally fades, you find <<$npcdesc>> looking down at you with a...
        scene.text(`When your orgasm finally fades, you find ${((s as any).npcdesc ?? 0)} looking down at you with an utterly confused expression.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          // TODO-QSP: dynamic text: When your orgasm finally fades, you find <<$npcdesc>> looking up at you with an ...
          scene.text(`When your orgasm finally fades, you find ${((s as any).npcdesc ?? 0)} looking up at you with an utterly confused expression.`);
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1) {
      scene.text('"Is... is that what it feels like when a guy comes inside...?" you stammer breathlessly.');
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise'  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] !== 1) {
        scene.text('"Yeah..." he replies nervously.');
        scene.text('"Oh..." you mumble, too overwhelmed to be able to say anything else.');
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1) {
          scene.text('"Yeah," he smiles back. "Feels pretty good doesn\'t it?"');
          scene.text('You nod back, too overwhelmed to be able to say anything else.');
        } else {
          scene.text('"Yeah. Did you like it?"');
          scene.text('You nod back, too overwhelmed to be able to say anything else.');
        }
      }
      if (((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] !== 1) {
        scene.text('"So you\'re not mad?"');
        if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
          qspCall(s, 'sex_ev_reactions_analcreampie', 'accidents_happen1');
        }
        qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_too_good');
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    } else {
      scene.text('"Surprise overrode my brain," you smile tiredly at him. "I was so surprised, I forgot to come for a second."');
      if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        scene.text('"Well you <i>did</i> say I could come wherever I wanted."');
        scene.text('"I guess I did," you chuckle softly. "But for some reason I didn\'t expect my pussy."');
        if (((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
          scene.text('"Don\'t know why you\'d think that," he smirks back.');
        } else {
          scene.text('He smirks amusedly back at you.');
        }
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
          scene.text('"Well you said I could come inside you whenever I wanted," he smirks back.');
          scene.text('"I just didn\'t expect it right then," you chuckle softly.');
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          if (((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 1) {
            scene.text('"Well you said I could come inside you today," he smirks back.');
            if (((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              scene.text('"I guess I was just expecting you to warn me," you chuckle softly.');
            } else {
              scene.text('"I just didn\'t expect it right then," you chuckle softly.');
            }
            qspCall(s, 'sex_ev_sex', 'sex_end');
          } else {
            if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise'  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] !== 1) {
              scene.text('"So you\'re not mad?"');
              qspCall(s, 'sex_ev_reactions_analcreampie', 'accidents_happen1');
              qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_too_good');
              qspCall(s, 'sex_ev_reactions_analcreampie', 'not_mad');
              qspCall(s, 'sex_ev_reactions_analcreampie', 'a_little_mad');
              qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_furious');
            } else {
              qspCall(s, 'sex_ev_sex', 'sex_end');
            }
          }
        }
      }
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDidYouComeInsideBoyReact1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] <= 0  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 0) {
    // TODO-QSP: dynamic text: "I- wait, you're not mad?" <<$npcdesc>> asks in surprise.
    scene.text(`"I- wait, you're not mad?" ${((s as any).npcdesc ?? 0)} asks in surprise.`);
    qspCall(s, 'sex_ev_reactions_analcreampie', 'accidents_happen1');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_too_good');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'not_mad');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'a_little_mad');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_furious');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_next_time2');
    if (((s as any).stat ?? 0)?.['total_creampies'] > ((s as any).sex_ev ?? 0)?.['creampie_count']) {
      scene.actions([
        { label: '"I love creampies"', handler: (st: GameState) => {
    ((s as any).npc_know_love_analcreampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I love creampies," you grin back at him. "Why would I be mad?"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
      scene.actions([
        { label: 'It\'s your own fault (cowgirl)', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
    scene.text('"It\'s not like you were the one doing the riding," you reply with an embarrassed smile. "I don\'t think I can be mad at you when it\'s my own fault."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: '"Why would I be mad?"', handler: (st: GameState) => {
    scene.text('"No?" you reply. "Why would I be mad?"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAccidentsHappen1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It was an accident', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['accidents_happen'] === 0) {
      scene.text('"It was an accident, right?" you ask.');
      // TODO-QSP: iif(npc_selfish[$npcID] ! 1 and npc_abusive[$npcID] <= 0 and sex_ev['anal_creampie_allowance'] = 0, ...
      scene.text('"Then it\'s okay. Accidents happen," you reply, smiling fondly at him.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
        scene.text('"I\'m already going to get a pill," you smirk amusedly. "What\'s one more creampie in that case?"');
      } else {
        scene.text('"I told you before didn\'t I? Accidents happen," you smile. "No big deal."');
      }
    }
    ((s as any).sex_ev ?? {})['accidents_happen'] = 1;
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCreampieFeltTooGood(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Felt too good', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Felt too good to be mad," you sigh back. <<$npcdesc>> seems to take this as a g...
    scene.text(`"Felt too good to be mad," you sigh back. ${((s as any).npcdesc ?? 0)} seems to take this as a good sign.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCreampieAccidentFine(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] > 0) {
    ((s as any).sex_ev ?? {})['its_fine'] = 'Yeah';
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      ((s as any).sex_ev ?? {})['its_fine'] = 'It\'s fine';
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        ((s as any).sex_ev ?? {})['its_fine'] = 'Yeah';
      } else {
        ((s as any).sex_ev ?? {})['its_fine'] = 'It\'s fine';
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<<$sex_ev[\'its_fine\']>>', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if ((((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] > 0) {
      scene.text('"Yeah. You said I could, didn\'t you?" he says with a satisfied sigh.');
      // TODO-QSP: dynamic text: "Yeah." That one word and your smile tells <<$npcdesc>> everything you have to s...
      scene.text(`"Yeah." That one word and your smile tells ${((s as any).npcdesc ?? 0)} everything you have to say.`);
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Yeah, your asshole was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
        scene.text('"Okay," you smile back. "It\'s fine. I was just asking."');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
          // TODO-QSP: dynamic text: "Yeah." That one word and your smile tells <<$npcdesc>> everything you have to s...
          scene.text(`"Yeah." That one word and your smile tells ${((s as any).npcdesc ?? 0)} everything you have to say.`);
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          scene.text('"It\'s fine," you smile reassuringly.');
          if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
            qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
          } else {
            qspCall(s, 'sex_ev_sex', 'sex_end');
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterCreampieJustChecking(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Just checking', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if ((((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] > 0) {
      scene.text('"Yeah. You said I could, didn\'t you?" he says with a satisfied sigh.');
      scene.text('"Mhm," you smile back. "I was just checking."');
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 1) {
        scene.text('"Yeah," he sighs beatifically.');
        scene.text('"Oh okay," you nod. "Just checking."');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"Yeah, your asshole was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
          scene.text('"Okay," you smile back. "I was just checking. Wasn\'t sure if you finished or not."');
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
            scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
            scene.text('"I didn\'t say it was a problem," you smile back. I was just checking."');
            qspCall(s, 'sex_ev_sex', 'sex_end');
          } else {
            scene.text('"Oh okay," you nod. "Just checking."');
            if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
              qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
            } else {
              qspCall(s, 'sex_ev_sex', 'sex_end');
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterCreampieThatExplains(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
    scene.actions([
      { label: 'That explains it', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_warn'] === 1) {
      // TODO-QSP: dynamic text: "I was trying to tell you," <<$npcdesc>> pants, breathing hard. "I was going to ...
      scene.text(`"I was trying to tell you," ${((s as any).npcdesc ?? 0)} pants, breathing hard. "I was going to come... But you weren't listening..."`);
      scene.text('"Ah. That explains it," you say, now being able to recognize the warmth filling up your insides as his cum.');
    } else {
      if ((((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] > 0) {
        scene.text('"Yeah. You said I could, didn\'t you?" he says with a satisfied sigh.');
        scene.text('"Ah. That explains it," you say, now being able to recognize the warmth filling up your insides as his cum.');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 1) {
          scene.text('"Yeah," he sighs beatifically.');
          scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth filling up your insides as his cum.');
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            scene.text('"Yeah, your asshole was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
            scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth filling up your insides as his cum.');
            qspCall(s, 'sex_ev_sex', 'sex_end');
          } else {
            if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
              scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
              scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth filling up your insides as his cum.');
              qspCall(s, 'sex_ev_sex', 'sex_end');
            } else {
              scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth filling up your insides as his cum.');
              if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
                qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
              } else {
                qspCall(s, 'sex_ev_sex', 'sex_end');
              }
            }
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieThoughtSo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
    scene.actions([
      { label: 'I thought so', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 1) {
      scene.text('"Yeah," he sighs beatifically.');
      // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
      scene.text(`"Thought so," you say, nodding your head and smiling back at ${((s as any).npcdesc ?? 0)}.`);
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Yeah, your asshole was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
        // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
        scene.text(`"Thought so," you say, nodding your head and smiling back at ${((s as any).npcdesc ?? 0)}.`);
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
          // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
          scene.text(`"Thought so," you say, nodding your head and smiling back at ${((s as any).npcdesc ?? 0)}.`);
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
          scene.text(`"Thought so," you say, nodding your head and smiling back at ${((s as any).npcdesc ?? 0)}.`);
          if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
            qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
          } else {
            qspCall(s, 'sex_ev_sex', 'sex_end');
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieYeah(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
    scene.actions([
      { label: 'Yeah', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 1) {
      scene.text('"Yeah," he sighs beatifically.');
      // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
      scene.text(`"Thought so," you say, nodding your head and smiling back at ${((s as any).npcdesc ?? 0)}.`);
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Yeah, your asshole was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
        // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
        scene.text(`"Thought so," you say, nodding your head and smiling back at ${((s as any).npcdesc ?? 0)}.`);
        qspCall(s, 'sex_ev_sex', 'sex_end');
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
          // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
          scene.text(`"Thought so," you say, nodding your head and smiling back at ${((s as any).npcdesc ?? 0)}.`);
          qspCall(s, 'sex_ev_sex', 'sex_end');
        } else {
          // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
          scene.text(`"Thought so," you say, nodding your head and smiling back at ${((s as any).npcdesc ?? 0)}.`);
          if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
            qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
          } else {
            qspCall(s, 'sex_ev_sex', 'sex_end');
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNotMad(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m not mad', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/cum/vagcreampie/drip3.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/smile1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['pullout_game'] === 1) {
      scene.text('"Maybe I should be," you say. "After all that talk about your pullout game..."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
        scene.text('"Maybe I should be," you say. "After all, you <i>did</i> just blow your load inside me, and right after you promised you wouldn\'t..."');
      } else {
        if (((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
          scene.text('"Maybe I should be," you say. "After all, you <i>did</i> just blow your load inside me, right after talking me into not using a condom..."');
        } else {
          scene.text('"Maybe I should be," you say. "After all, you <i>did</i> just blow your load inside me without even asking me..."');
        }
      }
    }
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 0, 'You lay back on the bed, looking up at <<$npcdesc>>, feeling his c...
    // TODO-QSP: dynamic text: But no," you say. "I'm not mad. You didn't mean to and' + iif(sex_ev['came_toget...
    scene.text(`But no," you say. "I'm not mad. You didn't mean to and' + iif(sex_ev['came_together'] > 0, ' I think you'd know I was lying if I said it didn't feel good.', ' ') + 'I won't hold it against you." You let your face light up with a smile and ${((s as any).npcdesc ?? 0)} breathes a sigh of relief, letting himself smile as well.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterALittleMad(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m a little mad', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/cum/vagcreampie/drip3.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/smile1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
      scene.text('"Well, I am a <i>little</i> mad," you say, letting a hard edge creep into your voice. "After all, you <i>did</i> just blow your load inside me, right after you promised you wouldn\'t come inside..."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
        scene.text('"Well, I am a <i>little</i> mad," you say, letting a hard edge creep into your voice. "After all, you <i>did</i> just blow your load inside me, right after talking me into not using a condom..."');
      } else {
        scene.text('"Well, I am a <i>little</i> mad," you say, letting a hard edge creep into your voice. "After all, you did just blow your load into me without even having the common fucking decency of asking."');
      }
    }
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 0, 'You lay back on the bed, looking up at <<$npcdesc>>, feeling his c...
    // TODO-QSP: dynamic text: But..." you say. ' + iif(sex_ev['came_together'] > 0, '"It felt really good too....
    scene.text(`But..." you say. ' + iif(sex_ev['came_together'] > 0, '"It felt really good too. If you hadn't made me come, then I'd probably be beating the shit out of you right now. But you did, so you get off easy this time."', '"Everybody makes mistakes. So I'll let you off easy this time."') + 'You give ${((s as any).npcdesc ?? 0)} a gentle punch on the arm and let your face light up with a smile. ${((s as any).npcdesc ?? 0)} breathes a sigh of relief, letting himself smile as well.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCreampieFurious(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m furious!', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/after/annoyed1.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/shock1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/2.jpg');
          }
        }
      }
    }
    scene.text('"Mad?" you scoff. "I\'m fucking furious!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> cringes as you glare at him with all the anger you can muster.
    scene.text(`${((s as any).npcdesc ?? 0)} cringes as you glare at him with all the anger you can muster.`);
    if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1  &&  ((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
      scene.text('"First," you say, jabbing your finger at him in accusation. "I ask you to use a condom. Then you talk me into skipping it, saying \'oh, it\'ll be okay, it\'s just this one time\' and like a moron, I listened to you. And <i>then</i> right after you promise not to come inside my ass, you fucking come inside my ass anyways!" By the time you\'re finished with your rant, you\'re practically shouting.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
        scene.text('"First," you say, jabbing your finger at him in accusation. "I ask you to use a condom. Then you talk me into skipping it, saying \'oh, it\'ll be okay, it\'s just this one time\' and like a moron, I listened to you. And <i>then</i> you fucking come inside my ass anyways!" By the time you\'re finished with your rant, you\'re practically shouting.');
      } else {
        scene.text('"Who the fuck do you think you are? Blowing your load like that inside me without warning?!" you say, jabbing your finger at him in accusation. "Did you even <i>think</i> about what you are doing? What if I\'m not on birth control? What if you\'re not clean? What if I DON\'T FUCKING WANT YOU TO FUCKING come inside my ass?! DON\'T I GET A CHOICE SINCE IT\'S MY FUCKING PUSSY THAT YOU\'RE FUCKING?!" By the time you\'re finished with your rant, you\'re practically shouting.');
      }
    }
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"The only reason I\'m not tearing your head off right now is because you somehow managed to make <i>me</i> come in the middle of all of that and if I kill you over this, I\'ll feel like a hypocrite. So count yourself lucky, fuckass." You finish with a <i>harumph</i>, sitting down on the bed with enough force to make the frame shake.');
    }
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  ||  (Math.floor(Math.random() * 10) + 1) > ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      // TODO-QSP: dynamic text: You spend the next minute or so in silence fuming before <<$npcdesc>> gets your ...
      scene.text(`You spend the next minute or so in silence fuming before ${((s as any).npcdesc ?? 0)} gets your attention.`);
      scene.text('"So... did you want to keep going?" he asks awkwardly.');
      scene.actions([
        { label: 'We\'re done', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['angry_after'] = 1;
    scene.text('"Are you fucking kidding me?" you scoff. "No, we\'re done fucking now."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
        { label: 'Sure (grumble)', handler: (st: GameState) => {
    scene.text('"Sure," you grumble and get back into position.');
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_sex', 'sex_menu');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCreampieWtfImage1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/stop_it1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        }
      }
    }
  } else {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieWtfImage2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.mp4');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/cowgirl3.mp4');
        }
      }
    }
  } else {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieWtfImage3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/cum/analcreampie/cowgirl1.mp4');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieWtfInstant(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] !== 2  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] !== 1) {
    scene.actions([
      { label: 'What the fuck!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['react'] = 1;
    ((s as any).sex_ev ?? {})['mad'] = 1;
    ((s as any).sex_ev ?? {})['creampie_wtf'] = (((s as any).sex_ev ?? {})['creampie_wtf'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image1');
      // TODO-QSP: dynamic text: "What the fuck!" you scream, frantically trying to pull <<$npcdesc>>'s cock out ...
      scene.text(`"What the fuck!" you scream, frantically trying to pull ${((s as any).npcdesc ?? 0)}'s cock out of you, trying to push him away, trying to stop him from filling your asshole with cum, even though you know it's already too late. His cock pulses inside you, each twitch bringing another sensation of liquid shooting into your womb. But panic isn't logical and you do everything you can to try to change the past.`);
    } else {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
      scene.text('"What the fuck!" you scream, openly gaping at the cum flowing from your asshole.');
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_menu');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieWtfAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] !== 2  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] !== 1) {
    scene.actions([
      { label: 'What the fuck!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['react'] = 1;
    ((s as any).sex_ev ?? {})['mad'] = 1;
    ((s as any).sex_ev ?? {})['creampie_wtf'] = (((s as any).sex_ev ?? {})['creampie_wtf'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image1');
      // TODO-QSP: dynamic text: "What the fuck! What the fuck did you do?" you scream, frantically trying to pul...
      scene.text(`"What the fuck! What the fuck did you do?" you scream, frantically trying to pull ${((s as any).npcdesc ?? 0)}'s cock out of you, trying to push him away, even though you know it's too late. The warmth inside you has already spread through your hips and your asshole feels very <i>full</i>. But panic isn't logical and you do everything you can to try to change the past.`);
    } else {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
      scene.text('"What the fuck!" you scream, openly gaping at the cum flowing from your asshole.');
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_menu');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieWtfMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
    scene.actions([
      { label: 'You promised you\'d pull out!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, 'When <<$npcdesc>> finally lets his cock slip from your asshole, th...
    // TODO-QSP: '"You said you''d pull out!" you hiss.' + iif(sex_ev['creampie_count'] = 1, '', ' "How many times ar...
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'boy_creampie_react');
  } },
    ]);
  }
  qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_again');
  qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_ask_first');
  qspCall(s, 'sex_ev_reactions_analcreampie', 'idk_you_mad');
  // TODO-QSP: end
  scene.actions([
    { label: 'You asshole!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    // TODO-QSP: '"You asshole!" ' + iif(sex_ev['cock_inserted'] = 1, 'you shout as <<$npcdesc>> finally lets his coc...
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, not looking sorry at all. "It just felt too good. I ...
        scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, not looking sorry at all. "It just felt too good. I couldn't help it."`);
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, not looking sorry at all. "It just kinda happened."
        scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, not looking sorry at all. "It just kinda happened."`);
      }
    } else {
      scene.text('"Fuck! I know! I\'m so sorry! " he says, looking ashamed. "It was an accident! I swear! I didn\'t mean to!"');
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
  } },
  ]);
  scene.build();
}

function enterCreampieWtfEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    scene.text('"Ugh," you grumble, choosing to take the high road on this one. "Whatever."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    { label: 'You\'re an asshole', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    scene.text('"You\'re a fucking asshole, you know that?" you sneer.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCreampieForgive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Forgive him', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['forgive_creampie'] = 1;
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    scene.text('You take a deep breath and close your eyes, feeling the cum continue trickling out of you.');
    if (((s as any).sex_ev ?? 0)?.['accidental_creampie'] >= 1) {
      scene.text('"It\'s... fine I guess," you sigh. "If it was really an accident, I forgive you."');
    } else {
      scene.text('"I guess I can forgive you this time..." you sigh. "I don\'t feel like being angry right now."');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCreampieForgive2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Forgive him', handler: (st: GameState) => {
    scene.actions([
      { label: 'Amused', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['forgive_creampie'] = 1;
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    scene.text('You take a deep breath and close your eyes, feeling the cum continue trickling out of you.');
    scene.text('"It\'s... fine I guess," you sigh. "If it was really an accident, I forgive you."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Begrudging', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['forgive_creampie'] = 1;
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    scene.text('You take a deep breath and close your eyes, feeling the cum continue trickling out of you.');
    scene.text('"It\'s... fine I guess," you sigh. "If it was really an accident, I forgive you."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampieAgain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_wtf'] > 1) {
    scene.actions([
      { label: 'Again?!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    // TODO-QSP: '"<i>Again?!</i>" ' + iif(sex_ev['cock_inserted'] = 1, ' you screech as <<$npcdesc>> finally lets hi...
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      scene.text('"Your asshole\'s just too tight," he says, not looking even slightly sorry for his actions. "It keeps sucking me in."');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> cringes, looking as guilty as you think he is.
      scene.text(`${((s as any).npcdesc ?? 0)} cringes, looking as guilty as you think he is.`);
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
    scene.actions([
      { label: 'No self control?!', handler: (st: GameState) => {
    scene.text('"How fucking hard is it to keep your cum out of my pussy?" you glare, seething. "Do you not have <i>any</i> self control? Just fucking pull out!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskFirst(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_ask_anal_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([
      { label: 'I told you to ask!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    // TODO-QSP: '"I thought I fucking told you to ask!" ' + iif(sex_ev['cock_inserted'] = 1, ' you hiss as <<$npcdes...
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Don\'t be such a bitch," he says, rolling his eyes. "You\'re on birth control anyways. Why does it matter?"');
      } else {
        if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
          scene.text('"So? You said you had a morning after pill, right?"');
        } else {
          if (((s as any).sex_ev ?? 0)?.['ma_pill_tomorrow'] === 1) {
            scene.text('"What does it matter? You said you were gonna get the pill tomorrow anyways."');
          } else {
            if ((Math.floor(Math.random() * 2) + 0) === 1) {
              scene.text('"Oh, you\'ll be fine," he grunts dismissively. "It\'s just one cumshot. Don\'t get bent out of shape. It\'s not gonna kill you."');
            } else {
              scene.text('"Your asshole\'s just too tight," he says, not looking even slightly sorry for his actions. "It keeps sucking me in."');
            }
          }
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> cringes, looking as guilty as you think he is.
      scene.text(`${((s as any).npcdesc ?? 0)} cringes, looking as guilty as you think he is.`);
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'not_creampie_pass');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'You need to ask first!', handler: (st: GameState) => {
    ((s as any).npc_ask_anal_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    // TODO-QSP: dynamic text: "You can't just come inside my ass like that!" ' + iif(sex_ev['cock_inserted'] =...
    scene.text(`"You can't just come inside my ass like that!" ' + iif(sex_ev['cock_inserted'] = 1, 'you hiss as ${((s as any).npcdesc ?? 0)} lets his cock slip from your asshole, the flow of liquid you were expecting following out quickly after.', 'you hiss, gaping at the stream of cum flowing from your asshole.') + ' "You need to ask first!"`);
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Don\'t be such a bitch," he says, rolling his eyes. "You\'re on birth control anyways. Why does it matter?"');
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Oh, you\'ll be fine," he grunts dismissively. "It\'s just one cumshot. Don\'t get bent out of shape. It\'s not gonna kill you."');
        } else {
          scene.text('"Your asshole\'s too tight," he says, not looking even slightly sorry for his actions. "It just sucked me in."');
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> cringes, looking as guilty as you think he is.
      scene.text(`${((s as any).npcdesc ?? 0)} cringes, looking as guilty as you think he is.`);
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterIdkYouMad(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).sex_ev ?? 0)?.['creampie_wtf'] === 1) {
    scene.actions([
      { label: 'I don\'t even know you!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    // TODO-QSP: dynamic text: "What the fuck are you doing?" ' + iif(sex_ev['cock_inserted'] = 1, 'you hiss as...
    scene.text(`"What the fuck are you doing?" ' + iif(sex_ev['cock_inserted'] = 1, 'you hiss as ${((s as any).npcdesc ?? 0)} finally lets his cock slip from your asshole and the flow of cum you were expecting quickly trickles out after.', 'you hiss, gaping at the stream of cum flowing from your asshole.') + ' "Did you really come inside my ass? Are you fucking kidding me? I don't even know you!"`);
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
    qspCall(s, 'sex_ev_after', 'quit');
    if (((s as any).sex_ev ?? 0)?.['pc_skip_the_condom'] === 1) {
      scene.text('"You\'re the one who didn\'t want to use a condom," he pants tiredly.');
    } else {
      if (((s as any).fame ?? 0)[((s as any).region ?? 0) + '_slut'] > 150) {
        scene.text('"So?" he pants tiredly. "I know who <i>you</i> are. I bet you let strangers creampie you all the time."');
      } else {
        scene.text('"So? Why does that make a difference?"');
        scene.actions([
          { label: 'Creampies are special', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    scene.text('"I only let guys I trust come inside my ass!" you sneer.');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'boy_creampie_react');
  } },
          { label: 'Only with guys you trust', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    scene.text('"I only let guys I trust come inside my ass!" you sneer.');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'boy_creampie_react');
  } },
          { label: 'What if he\'s got STDs?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    scene.text('"I don\'t know if you\'re clean!"');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'boy_creampie_react');
  } },
          { label: 'Only for boyfriends', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image3');
    if (((s as any).stat ?? 0)?.['boyfriends_current'] === 1) {
      scene.text('"Only my boyfriend is allowed to come inside my ass!" you sneer.');
      // TODO-QSP: '"Maybe you shouldn''t have fucked someone who isn''t your boyfriend then," ' + iif(npc_fidelity_num...
    } else {
      if (((s as any).stat ?? 0)?.['boyfriends_current'] > 1) {
        scene.text('"Only my boyfriends are allowed to come inside my ass!" you sneer.');
        if (((s as any).npc_fidelity_num ?? 0)?.[String((s as any).npcID ?? 0)] < 7) {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "You have more than one?" <<$npcdesc>> snickers.
            scene.text(`"You have more than one?" ${((s as any).npcdesc ?? 0)} snickers.`);
          } else {
            // TODO-QSP: dynamic text: "Maybe you shouldn't have fucked someone who isn't your boyfriend then," <<$npcd...
            scene.text(`"Maybe you shouldn't have fucked someone who isn't your boyfriend then," ${((s as any).npcdesc ?? 0)} snickers.`);
          }
        } else {
          // TODO-QSP: dynamic text: "Maybe you shouldn't have fucked someone who isn't your boyfriend then," <<$npcd...
          scene.text(`"Maybe you shouldn't have fucked someone who isn't your boyfriend then," ${((s as any).npcdesc ?? 0)} frowns.`);
        }
      } else {
        scene.text('"I only let guys come inside my ass if we\'re dating!" you sneer.');
      }
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'boy_creampie_react');
  } },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterIdkYouPanicInstant(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    scene.actions([
      { label: 'Panic', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image1');
    // TODO-QSP: dynamic text: "What are you doing?!" you gasp, frantically trying to pull <<$npcdesc>> out of ...
    scene.text(`"What are you doing?!" you gasp, frantically trying to pull ${((s as any).npcdesc ?? 0)} out of you, trying to push him away, trying to stop him from filling you with cum, even though you know it's already too late. "<i>What the fuck are you doing?</i> Did you just come inside my ass? I don't even know you! Stop! Stop!"`);
    scene.text('His cock pulses inside you, each twitch bringing another sensation of liquid shooting into your womb but no matter how hard you try, you can\'t get his cock out of your asshole.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
    } else {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    }
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: You watch in horror as <<$npcdesc>> finally removes his cock from your asshole a...
    scene.text(`You watch in horror as ${((s as any).npcdesc ?? 0)} finally removes his cock from your asshole and a fat wet glob of cum spills out.`);
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_freakout');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterIdkYouPanicAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1) {
    scene.actions([
      { label: 'I don\'t even know you!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    scene.text('Your eyes go wide.');
    // TODO-QSP: dynamic text: "Oh my god! What did you do?!" you cry, voice taking on a high pitched whine as ...
    scene.text(`"Oh my god! What did you do?!" you cry, voice taking on a high pitched whine as you frantically trying to pull ${((s as any).npcdesc ?? 0)}'s cock out of you, trying to push him away, even though you know it's too late. The panic sets in and you start moaning over and over again, "What did you do? What did you do? What did you do?"`);
    scene.text('The warmth inside you has already spread through your hips and you can practically feel his cum sloshing around inside you.');
    scene.text('"Did you really come inside my ass?" you moan. "I don\'t even know you!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
    } else {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_image2');
    }
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: You watch in horror as <<$npcdesc>> finally removes his cock from your asshole a...
    scene.text(`You watch in horror as ${((s as any).npcdesc ?? 0)} finally removes his cock from your asshole and a fat wet glob of cum spills out.`);
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_freakout');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyCreampieReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pc_skip_the_condom'] === 1) {
    scene.text('"You should\'ve asked to use a condom then," he shrugs. "Not my fault you asked to go without."');
    qspCall(s, 'sex_ev_after', 'quit');
  } else {
    if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('Placeholder: Some abusive nonsense');
      qspCall(s, 'sex_ev_after', 'quit');
    } else {
      scene.text('"Shit! Fuck! I didn\'t know!" he says, looking agitated. "I\'m so sorry! Fuck! It was an accident, I swear! I didn\'t mean to!"');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNotCreampiePass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['ma_pill_tomorrow'] === 1) {
    scene.actions([
      { label: 'That\'s not a creampie pass!', handler: (st: GameState) => {
    scene.text('"That isn\'t a free pass to come inside my ass!" you scowl, watching the offending spunk seep from your cunt.');
    if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> just grins lewdly.
      scene.text(`${((s as any).npcdesc ?? 0)} just grins lewdly.`);
    } else {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles shyly.
      scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles shyly.`);
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_wtf_end');
    qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_forgive');
    qspCall(s, 'sex_ev_after', 'quit');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieFreakout(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 0) {
    scene.actions([
      { label: 'Freak the fuck out', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['creampie_wtf'] = (((s as any).sex_ev ?? {})['creampie_wtf'] ?? 0) + (1);
    scene.img('images/pc/body/cum/cumanal/cumanal1.jpg');
    if (((s as any).sex_ev ?? 0)?.['skip_condom'] === 1) {
      // TODO-QSP: '"Ohmygodohmygodohmygodohmygod!" You start hyperventilating, a torrent of words spilling from your m...
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Sorry, your asshole was just so tight and I-"');
      } else {
        scene.text('"Oh shit! I\'m sorry! I\'m sorry I\'m sorry I-"');
        // TODO-QSP: end !}
        // TODO-QSP: '"Ohmygodohmygodohmygodohmygod!" You start hyperventilating, a torrent of words spilling from your m...
      }
      scene.text('You put your hand to your head as you begin to feel faint.');
      scene.text('<i>What was I thinking? What if I get an STD?! Why didn\'t I insist on a condom...</i>');
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "It's just one creampie," <<$npcdesc>> says nonchalantly. "It's not gonna kill y...
        scene.text(`"It's just one creampie," ${((s as any).npcdesc ?? 0)} says nonchalantly. "It's not gonna kill you."`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          // TODO-QSP: dynamic text: "You said I could come wherever I wanted," <<$npcdesc>> says, looking confused.
          scene.text(`"You said I could come wherever I wanted," ${((s as any).npcdesc ?? 0)} says, looking confused.`);
        } else {
          // TODO-QSP: dynamic text: "I'm so sorry! I swear! I didn't mean to!" <<$npcdesc>> says panicking just as m...
          scene.text(`"I'm so sorry! I swear! I didn't mean to!" ${((s as any).npcdesc ?? 0)} says panicking just as much as you are.`);
        }
      }
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_freakout_calm');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_freakout_gtg');
      scene.actions([
        { label: 'STD panic', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"That\'s not what I\'m concerned about!" you say, your hyperventilating getting worse.');
    scene.text('"Then wha- Wait, you think I have an STD???"');
    scene.text('"I don\'t know! You could! I just don\'t know!"');
    scene.text('"If you were really concerned about that then why would you let me fuck without a condom??"');
    if (((s as any).sex_ev ?? 0)?.['condom'] >= 2) {
      scene.text('"You didn\'t want to use one!" you yelp.');
    } else {
      scene.text('"<i>I! DON\'T! KNOW!</i>" you scream.');
    }
    scene.text('"Well I\'m fucking clean, alright?! I promise!"');
    scene.actions([
      { label: 'Calm down', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: Trying to focus on his words, you force yourself to take deep, slow breaths, cal...
    scene.text(`Trying to focus on his words, you force yourself to take deep, slow breaths, calming down while ${((s as any).npcdesc ?? 0)} tries to reassure you.`);
    scene.text('<i>He\'s right, it\'ll be okay. You\'re on birth control and he came inside you so it\'s okay! He\'s not going to have an STD. Can\'t have one! Because if he did that would... Nope! I\'m not gonna think about that! Because I\'m not getting an STD tonight! Everything is going to be fine! <b>It\'s going to be fine!</b></i>');
    scene.text('After running through this thought process several more times accompanied by many more breaths, you finally begin to calm down.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I have to go!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I have to go!" Without warning, you spring up and start grabbing your things, throwing on your clothes with frantic haste.');
    scene.text('"Wha- Where are you going?!"');
    scene.text('"I just have to go!"');
    scene.text('"If you\'re worried about that then leaving now isn\'t going to-"');
    scene.text('"That\'s not what this is about!"');
    scene.text('"Then-!"');
    scene.text('"Can\'ttalkgottago!"');
    scene.text('You don\'t wait to hear what he was trying to say, you don\'t even really know what you\'re saying, and you dash out the door.');
    scene.text('<i>Fuck! What am I going to do if I get an STD?!</i>');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterCreampieFreakout2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: "Jeez, I didn't know you were going to freak out like this," <<$npcdesc>> says, ...
    scene.text(`"Jeez, I didn't know you were going to freak out like this," ${((s as any).npcdesc ?? 0)} says, holding his hands up defensively. "Just chill out! You can buy a morning after pill tomorrow, it'll be fine."`);
  } else {
    if (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Hang on, just calm down. It\'ll be okay. As long as you get a morning after pill, it\'ll be fine, right?"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
          // TODO-QSP: dynamic text: "You said I could come wherever I wanted!" <<$npcdesc>> repeats insistently. "If...
          scene.text(`"You said I could come wherever I wanted!" ${((s as any).npcdesc ?? 0)} repeats insistently. "If you don't want me to come wherever then don't say that!"`);
        } else {
          // TODO-QSP: dynamic text: "Oh shit!" <<$npcdesc>> says, your panic starting to infect him. "Why didn't you...
          scene.text(`"Oh shit!" ${((s as any).npcdesc ?? 0)} says, your panic starting to infect him. "Why didn't you say so?!"`);
        }
      } else {
        // TODO-QSP: dynamic text: "It was a mistake! It really was!" <<$npcdesc>> keeps saying, nearly begging.
        scene.text(`"It was a mistake! It really was!" ${((s as any).npcdesc ?? 0)} keeps saying, nearly begging.`);
      }
    }
  }
  qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_freakout_calm');
  qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_freakout_gtg');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieFreakoutCalm(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Calm down', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: Trying to focus on his words, you force yourself to take deep, slow breaths, cal...
      scene.text(`Trying to focus on his words, you force yourself to take deep, slow breaths, calming down while ${((s as any).npcdesc ?? 0)} tries to apologize to you.`);
      scene.text('"See? It\'s all gonna be fine."');
    } else {
      // TODO-QSP: dynamic text: You force yourself to take deep, slow breaths, calming down while <<$npcdesc>> t...
      scene.text(`You force yourself to take deep, slow breaths, calming down while ${((s as any).npcdesc ?? 0)} tries to apologize to you.`);
    }
    scene.actions([
      { label: 'It\'ll be fine', handler: (st: GameState) => {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('<i>He\'s right, it\'ll be okay. He\'s <b>not</b> going to have an STD. Can\'t have one! Because if he did that would be... Nope! I\'m not gonna think about that! Because I\'m not getting an STD tonight! Everything is going to be fine! <b>It\'s going to be fine!</b></i>');
    } else {
      scene.text('<i>Everything is fine, you\'re going to be fine. He\'s <b>not</b> going to have an STD. Can\'t have one! Because if he did that would be... Nope! I\'m not gonna think about that! Because I\'m not getting an STD tonight! Everything is going to be fine! <b>It\'s going to be fine!</b></i>');
    }
    scene.text('After running through this thought process several more times accompanied by many more breaths, you finally begin to calm down.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampieFreakoutGtg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I have to go!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I have to go!" Without warning, you spring up and start grabbing your things, throwing on your clothes with frantic haste.');
    scene.text('"Wha- Where are you going?!"');
    scene.text('"I just have to go!"');
    scene.text('"I told you, if you\'re worried you can just get-"');
    scene.text('"That\'s not what this is about!"');
    scene.text('"Then-!"');
    scene.text('"Can\'ttalkgottago!"');
    scene.text('You don\'t wait to hear what he was trying to say and dash out the door.');
    scene.text('<i>Fuck! What am I going to do if I get an STD?!</i>');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPulloutGameTease(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pullout_game'] > 0  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1  &&  ((s as any).sex_ev ?? 0)?.['pullout_game_react'] === 0  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 0) {
    scene.actions([
      { label: 'Pullout game, huh? (laugh it off)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['pullout_game_react'] = 1;
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/smile1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    // TODO-QSP: dynamic text: "So much for 'pullout game,'" you smile teasingly at <<$npcdesc>>.
    scene.text(`"So much for 'pullout game,'" you smile teasingly at ${((s as any).npcdesc ?? 0)}.`);
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] <= 0  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_allowance'] === 0) {
      scene.text('"S-sorry," he stammers, blushing furiously.');
      // TODO-QSP: 'His face makes you laugh wholeheartedly' + iif(sex_ev['cock_inserted'] = 1, ' unable to help but no...
    } else {
      scene.text('"Sorry," he says, not looking sorry at all. "I really tried to, but I couldn\'t help it."');
      scene.text('You roll your eyes to the heavens.');
    }
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe') {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      scene.text('"So... are you mad?"');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'accidents_happen1');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_felt_too_good');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'not_mad');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'a_little_mad');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'creampie_react':
      enterCreampieReact(s, scene);
      break;
    case 'first_creampie':
      enterFirstCreampie(s, scene);
      break;
    case 'what_creampie_feels_like':
      enterWhatCreampieFeelsLike(s, scene);
      break;
    case 'creampie_happy':
      enterCreampieHappy(s, scene);
      break;
    case 'creampie_conflicted':
      enterCreampieConflicted(s, scene);
      break;
    case 'creampie_unhappy':
      enterCreampieUnhappy(s, scene);
      break;
    case 'creampie_cum_together_react':
      enterCreampieCumTogetherReact(s, scene);
      break;
    case 'creampie_enjoy_that':
      enterCreampieEnjoyThat(s, scene);
      break;
    case 'creampie_ask_next_time':
      enterCreampieAskNextTime(s, scene);
      break;
    case 'creampie_ask_next_time2':
      enterCreampieAskNextTime2(s, scene);
      break;
    case 'creampie_be_better':
      enterCreampieBeBetter(s, scene);
      break;
    case 'creampie_ask_next_time_mad':
      enterCreampieAskNextTimeMad(s, scene);
      break;
    case 'creampie_ask_next_time_mad2':
      enterCreampieAskNextTimeMad2(s, scene);
      break;
    case 'pull-out_finish':
      enterPullOutFinish(s, scene);
      break;
    case 'creampie_gross':
      enterCreampieGross(s, scene);
      break;
    case 'creampie_gross2':
      enterCreampieGross2(s, scene);
      break;
    case 'promised_no_creampie':
      enterPromisedNoCreampie(s, scene);
      break;
    case 'thanks_for_asking':
      enterThanksForAsking(s, scene);
      break;
    case 'told_you_not_to_creampie':
      enterToldYouNotToCreampie(s, scene);
      break;
    case 'thought_no_creampies':
      enterThoughtNoCreampies(s, scene);
      break;
    case 'cum_together_yeah':
      enterCumTogetherYeah(s, scene);
      break;
    case 'creampie_pull_out_image':
      enterCreampiePullOutImage(s, scene);
      break;
    case 'creampie_felt_great':
      enterCreampieFeltGreat(s, scene);
      break;
    case 'feel_full':
      enterFeelFull(s, scene);
      break;
    case 'love_creampies':
      enterLoveCreampies(s, scene);
      break;
    case 'cum_together_kiss':
      enterCumTogetherKiss(s, scene);
      break;
    case 'cum_together_best':
      enterCumTogetherBest(s, scene);
      break;
    case 'creampie_apologize':
      enterCreampieApologize(s, scene);
      break;
    case 'anal_bc_happy':
      enterAnalBcHappy(s, scene);
      break;
    case 'creampie_pc_startled':
      enterCreampiePcStartled(s, scene);
      break;
    case 'take_in_stride1':
      enterTakeInStride1(s, scene);
      break;
    case 'did_you_come_inside':
      enterDidYouComeInside(s, scene);
      break;
    case 'did_you_come_inside_stride':
      enterDidYouComeInsideStride(s, scene);
      break;
    case 'delayed_creampie_orgasm1':
      enterDelayedCreampieOrgasm1(s, scene);
      break;
    case 'did_you_come_inside_boy_react1':
      enterDidYouComeInsideBoyReact1(s, scene);
      break;
    case 'accidents_happen1':
      enterAccidentsHappen1(s, scene);
      break;
    case 'creampie_felt_too_good':
      enterCreampieFeltTooGood(s, scene);
      break;
    case 'creampie_accident_fine':
      enterCreampieAccidentFine(s, scene);
      break;
    case 'creampie_just_checking':
      enterCreampieJustChecking(s, scene);
      break;
    case 'creampie_that_explains':
      enterCreampieThatExplains(s, scene);
      break;
    case 'creampie_thought_so':
      enterCreampieThoughtSo(s, scene);
      break;
    case 'creampie_yeah':
      enterCreampieYeah(s, scene);
      break;
    case 'not_mad':
      enterNotMad(s, scene);
      break;
    case 'a_little_mad':
      enterALittleMad(s, scene);
      break;
    case 'creampie_furious':
      enterCreampieFurious(s, scene);
      break;
    case 'creampie_wtf_image1':
      enterCreampieWtfImage1(s, scene);
      break;
    case 'creampie_wtf_image2':
      enterCreampieWtfImage2(s, scene);
      break;
    case 'creampie_wtf_image3':
      enterCreampieWtfImage3(s, scene);
      break;
    case 'creampie_wtf_instant':
      enterCreampieWtfInstant(s, scene);
      break;
    case 'creampie_wtf_after':
      enterCreampieWtfAfter(s, scene);
      break;
    case 'creampie_wtf_menu':
      enterCreampieWtfMenu(s, scene);
      break;
    case 'creampie_wtf_end':
      enterCreampieWtfEnd(s, scene);
      break;
    case 'creampie_forgive':
      enterCreampieForgive(s, scene);
      break;
    case 'creampie_forgive2':
      enterCreampieForgive2(s, scene);
      break;
    case 'creampie_again':
      enterCreampieAgain(s, scene);
      break;
    case 'creampie_ask_first':
      enterCreampieAskFirst(s, scene);
      break;
    case 'idk_you_mad':
      enterIdkYouMad(s, scene);
      break;
    case 'idk_you_panic_instant':
      enterIdkYouPanicInstant(s, scene);
      break;
    case 'idk_you_panic_after':
      enterIdkYouPanicAfter(s, scene);
      break;
    case 'boy_creampie_react':
      enterBoyCreampieReact(s, scene);
      break;
    case 'not_creampie_pass':
      enterNotCreampiePass(s, scene);
      break;
    case 'creampie_freakout':
      enterCreampieFreakout(s, scene);
      break;
    case 'creampie_freakout2':
      enterCreampieFreakout2(s, scene);
      break;
    case 'creampie_freakout_calm':
      enterCreampieFreakoutCalm(s, scene);
      break;
    case 'creampie_freakout_gtg':
      enterCreampieFreakoutGtg(s, scene);
      break;
    case 'pullout_game_tease':
      enterPulloutGameTease(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_reactions_analcreampie: LocationDef = {
  name: 'sex_ev_reactions_analcreampie',
  title: '"Is... is that what it feels like when a guy comes in your a',
  region: 'other',
  enter: enter,
};
