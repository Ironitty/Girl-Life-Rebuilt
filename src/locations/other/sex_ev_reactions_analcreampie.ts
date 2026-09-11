import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
  scene.build();
}

function enterFirstCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_acp_known ?? 0) === 1) {
    scene.actions([
      { label: 'First anal creampie', handler: (st: GameState) => {
    (s as any).npc_first_creampie[String((s as any).npcID ?? 0)] = 1;
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
  scene.build();
}

function enterCreampieCumTogetherReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['came_together'] !== 3  &&  (((s as any).sex_ev ?? 0)?.['came_together'] === 2  ||  ((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['hypno_came_together'] !== 1) {
    scene.actions([
      { label: 'Did we come together?', handler: (st: GameState) => {
    (s as any).sex_ev['came_together'] = 3;
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
    (s as any).sex_ev['did_we_cum_together'] = 2;
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
    (s as any).npc_ask_anal_creampie[String((s as any).npcID ?? 0)] = 1;
    (s as any).sex_ev['ask_next_time'] = 'not_mad';
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
    (s as any).sex_ev['ask_next_time'] = 'little_mad';
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"If you\'re going to... come inside my ass..." you pant. "... you need to ask..."');
      scene.text('You try to give him a look of annoyance, but it\'s very difficult to produce angry vibes off the back of an orgasm.');
    } else {
      // TODO-QSP: dynamic text: "You need to ask me if you're going to come inside," you frown at <<$npcdesc>> i...
      scene.text(`"You need to ask me if you're going to come inside," you frown at ${((s as any).npcdesc ?? 0)} in annoyance.`);
    }
    // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
    scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into your ass without permission.`);
    (s as any).npc_ask_anal_creampie[String((s as any).npcID ?? 0)] = 1;
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
    (s as any).npc_ask_anal_creampie[String((s as any).npcID ?? 0)] = 1;
    (s as any).sex_ev['ask_next_time'] = 'not_mad';
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
    (s as any).npc_ask_anal_creampie[String((s as any).npcID ?? 0)] = 1;
    (s as any).sex_ev['ask_next_time'] = 'annoyed';
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
  scene.build();
}

function enterCreampieAskNextTime2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Just warn me next time', handler: (st: GameState) => {
    scene.text('"Just make sure to give me a warning next time," you chuckle.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCreampieBeBetter(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Don\'t be sorry, be better', handler: (st: GameState) => {
    scene.actions([
      { label: '(Forgiving)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
    } else {
      scene.img('images/shared/sex/after/pillow_talk2.jpg');
    }
    // TODO-QSP: dynamic text: "Don't be sorry," you say gently, looking into <<$npcdesc>>'s eyes. "Be better."
    scene.text(`"Don't be sorry," you say gently, looking into ${((s as any).npcdesc ?? 0)}'s eyes. "Be better."`);
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: "Don't be sorry," you say, gently cupping <<$npcdesc>>'s face. "Be better."
      scene.text(`"Don't be sorry," you say, gently cupping ${((s as any).npcdesc ?? 0)}'s face. "Be better."`);
    } else {
      scene.img('images/shared/sex/after/pillow_talk2.jpg');
      // TODO-QSP: dynamic text: "Don't be sorry," you say gently, looking into <<$npcdesc>>'s eyes. "Be better."
      scene.text(`"Don't be sorry," you say gently, looking into ${((s as any).npcdesc ?? 0)}'s eyes. "Be better."`);
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        scene.img('images/shared/sex/after/pillow_talk2.jpg');
      }
      // TODO-QSP: dynamic text: "Don't be sorry," you say gently, looking into <<$npcdesc>>'s eyes. "Be better."
      scene.text(`"Don't be sorry," you say gently, looking into ${((s as any).npcdesc ?? 0)}'s eyes. "Be better."`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        } else {
          scene.img('images/shared/sex/cum/analcreampie/cowgirl1.mp4');
        }
        // TODO-QSP: dynamic text: "Don't be sorry," you say gently, looking into <<$npcdesc>>'s eyes. "Be better."
        scene.text(`"Don't be sorry," you say gently, looking into ${((s as any).npcdesc ?? 0)}'s eyes. "Be better."`);
        // TODO-QSP: end !}
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
    if (((s as any).sex_ev ?? 0)?.['ask_next_time'] !== 'not_mad') {
      scene.actions([
        { label: '(Sullen)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.img('images/shared/sex/vag/doggy/2.jpg');
    } else {
      scene.img('images/shared/sex/after/pillow_talk2.jpg');
    }
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      scene.text('"Don\'t be sorry," you sigh with disappointment. "Be better."');
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.img('images/shared/sex/vag/doggy/2.jpg');
      } else {
        scene.img('images/shared/sex/after/pillow_talk2.jpg');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        } else {
          scene.img('images/shared/sex/cum/analcreampie/cowgirl1.mp4');
        }
        // TODO-QSP: end !}
        scene.text('"Don\'t be sorry," you sigh with measurable disappointment. "Be better."');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
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
    default:
      enterCreampieReact(s, scene);
      break;
  }
}

export const sex_ev_reactions_analcreampie: LocationDef = {
  name: 'sex_ev_reactions_analcreampie',
  title: '"Is... is that what it feels like when a guy comes in your a',
  region: 'other',
  enter: enter,
};
