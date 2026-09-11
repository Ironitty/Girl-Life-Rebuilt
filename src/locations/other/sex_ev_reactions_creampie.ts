import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCreampieReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
  }
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
    if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] < 3  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'sex_ev_reactions_creampie', 'thought_no_creampies');
    } else {
      if (((s as any).sex_ev ?? 0)?.['reluctant_creampie'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['unhappy_creampie'] !== 1) {
        scene.actions([
          { label: 'Happy creampie', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reactions_creampie', 'creampie_happy'
  } },
        ]);
      }
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_conflicted');
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_unhappy');
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
      qspCall(s, 'sex_ev_talk', 'free_creampies');
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_safe_day');
      qspCall(s, 'sex_ev_reactions_creampie', 'did_you_come_inside');
      qspCall(s, 'sex_ev_reactions_creampie', 'have_plan_b2');
      qspCall(s, 'sex_ev_reactions', 'cum_already');
      qspCall(s, 'sex_ev_reactions_creampie', 'pull-out_finish');
    }
  }
  scene.build();
}

function enterFirstCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['total_creampies'] === 1) {
    scene.actions([
      { label: 'First creampie', handler: (st: GameState) => {
    ((s as any).npc_first_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
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
          scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('"Hey, can I tell you something?" you ask, breathing hard after your orgasm.');
    } else {
      // TODO-QSP: dynamic text: "Hey, can I tell you something?" you ask, giving <<$npcdesc>> a look.
      scene.text(`"Hey, can I tell you something?" you ask, giving ${((s as any).npcdesc ?? 0)} a look.`);
    }
    scene.text('"Sure," he says. "What is it?"');
    scene.text('"I\'ve never let a guy come inside me before," you smile back warmly. "You\'re my first."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Is that what it feels like?', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/3.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/3.jpg');
            }
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
            }
          }
        }
      }
    }
    qspCall(s, 'sex_ev_reactions_creampie', 'what_creampie_feels_like');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterWhatCreampieFeelsLike(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.text('"Is... is that what it feels like when a guy comes inside...?" you stammer breathlessly.');
  } else {
    scene.text('"Is... is that what it feels like when a guy comes inside...?" you gasp in shock.');
  }
  if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    qspCall(s, 'sex_ev_reactions_creampie', 'did_you_come_inside_boy_react1');
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
          scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
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
  }
  scene.build();
}

function enterCreampieSafeDay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['ma_pill'] === 0  &&  ((s as any).sex_ev ?? 0)?.['plan_b_buy'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.actions([
        { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    if (((s as any).mesec ?? 0) > 0) {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pull_out_image');
        // TODO-QSP: dynamic text: "Don't worry, I'm on my period," you say as <<$npcdesc>>'s pink-tinged cum trick...
        scene.text(`"Don't worry, I'm on my period," you say as ${((s as any).npcdesc ?? 0)}'s pink-tinged cum trickles from your pussy. "I shouldn't get pregnant."`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          scene.text('"Don\'t worry, I\'m on my period," you say. "I shouldn\'t get pregnant."');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            scene.text('"Don\'t worry, I\'m on my period," you say over your shoulder. "I shouldn\'t get pregnant."');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
              scene.text('"Don\'t worry, I\'m on my period," you say. "I shouldn\'t get pregnant."');
            }
          }
        }
      }
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom'  ||  ((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
        qspCall(s, 'sex_ev_cum', 'what_now');
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
    scene.actions([
      { label: 'Reassurance', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pull_out_image');
      // TODO-QSP: dynamic text: "Don't worry," you smile as <<$npcdesc>>'s cum continues to trickle from your pu...
      scene.text(`"Don't worry," you smile as ${((s as any).npcdesc ?? 0)}'s cum continues to trickle from your pussy. "It's a safe day."`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: "Don't worry," you smile at <<$npcdesc>>, cupping his face. "It's a safe day."
        scene.text(`"Don't worry," you smile at ${((s as any).npcdesc ?? 0)}, cupping his face. "It's a safe day."`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          // TODO-QSP: dynamic text: "Don't worry," you smile at <<$npcdesc>> over your shoulder. "It's a safe day."
          scene.text(`"Don't worry," you smile at ${((s as any).npcdesc ?? 0)} over your shoulder. "It's a safe day."`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            // TODO-QSP: dynamic text: "Don't worry," you smile down at <<$npcdesc>>. "It's a safe day."
            scene.text(`"Don't worry," you smile down at ${((s as any).npcdesc ?? 0)}. "It's a safe day."`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom') {
      qspCall(s, 'sex_ev_cum', 'what_now');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
      { label: 'Lucky', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pull_out_image');
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom') {
          // TODO-QSP: dynamic text: "That was lucky," you smile as <<$npcdesc>>'s cum continues to trickle from your...
          scene.text(`"That was lucky," you smile as ${((s as any).npcdesc ?? 0)}'s cum continues to trickle from your pussy. "If a condom is going to break, it might as well be on a safe day."`);
        } else {
          // TODO-QSP: dynamic text: "That was lucky," you smile as <<$npcdesc>>'s cum continues to trickle from your...
          scene.text(`"That was lucky," you smile as ${((s as any).npcdesc ?? 0)}'s cum continues to trickle from your pussy. "If you're gonna come inside me by mistake, it might as well be on a safe day."`);
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          // TODO-QSP: dynamic text: "Just count yourself lucky it was a safe day for me," you smile at <<$npcdesc>>.
          scene.text(`"Just count yourself lucky it was a safe day for me," you smile at ${((s as any).npcdesc ?? 0)}.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            // TODO-QSP: dynamic text: "Just count yourself lucky it was a safe day for me," you smile at <<$npcdesc>> ...
            scene.text(`"Just count yourself lucky it was a safe day for me," you smile at ${((s as any).npcdesc ?? 0)} over your shoulder.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
              // TODO-QSP: dynamic text: "Just count yourself lucky it was a safe day for me," you smile down at <<$npcde...
              scene.text(`"Just count yourself lucky it was a safe day for me," you smile down at ${((s as any).npcdesc ?? 0)}.`);
            }
          }
        }
      }
    } else {
      ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pull_out_image');
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom') {
          // TODO-QSP: dynamic text: "That was lucky," you smile as <<$npcdesc>>'s cum continues to trickle from your...
          scene.text(`"That was lucky," you smile as ${((s as any).npcdesc ?? 0)}'s cum continues to trickle from your pussy. "If a condom is going to break, it might as well be on a safe day."`);
        } else {
          // TODO-QSP: dynamic text: "We're in luck today," you smile as <<$npcdesc>>'s cum continues to trickle from...
          scene.text(`"We're in luck today," you smile as ${((s as any).npcdesc ?? 0)}'s cum continues to trickle from your pussy. "It's a safe day, so you can come inside me as much as you want."`);
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          // TODO-QSP: dynamic text: "We're in luck today," you smile blissfully at <<$npcdesc>>. "It's a safe day, s...
          scene.text(`"We're in luck today," you smile blissfully at ${((s as any).npcdesc ?? 0)}. "It's a safe day, so you can come inside me as much as you want."`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            // TODO-QSP: dynamic text: "We're in luck today," you smile over your shoulder at <<$npcdesc>>. "It's a saf...
            scene.text(`"We're in luck today," you smile over your shoulder at ${((s as any).npcdesc ?? 0)}. "It's a safe day, so you can come inside me as much as you want."`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
              // TODO-QSP: dynamic text: "We're in luck today," you smile down at <<$npcdesc>>. "It's a safe day, so you ...
              scene.text(`"We're in luck today," you smile down at ${((s as any).npcdesc ?? 0)}. "It's a safe day, so you can come inside me as much as you want."`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom'  ||  ((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
      qspCall(s, 'sex_ev_cum', 'what_now');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.actions([
          { label: 'It should be a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    if (((s as any).mesec ?? 0) > 0) {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pull_out_image');
        // TODO-QSP: dynamic text: "Don't worry, I'm on my period," you say as <<$npcdesc>>'s pink-tinged cum trick...
        scene.text(`"Don't worry, I'm on my period," you say as ${((s as any).npcdesc ?? 0)}'s pink-tinged cum trickles from your pussy. "I shouldn't get pregnant."`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          scene.text('"Don\'t worry, I\'m on my period," you say. "I shouldn\'t get pregnant."');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            scene.text('"Don\'t worry, I\'m on my period," you say over your shoulder. "I shouldn\'t get pregnant."');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
              scene.text('"Don\'t worry, I\'m on my period," you say. "I shouldn\'t get pregnant."');
            }
          }
        }
      }
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom'  ||  ((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
        qspCall(s, 'sex_ev_cum', 'what_now');
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
    scene.actions([
      { label: 'Reassurance', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pull_out_image');
      // TODO-QSP: dynamic text: "It should be safe today," you say as <<$npcdesc>>'s cum continues to trickle fr...
      scene.text(`"It should be safe today," you say as ${((s as any).npcdesc ?? 0)}'s cum continues to trickle from your pussy. "I'm pretty sure I won't get pregnant."`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        scene.text('"It should be safe today," you say. "I\'m pretty sure I won\'t get pregnant."');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          scene.text('"It should be safe today," you say over your shoulder. "I\'m pretty sure I won\'t get pregnant."');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            scene.text('"It should be safe today," you say. "I\'m pretty sure I won\'t get pregnant."');
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom'  ||  ((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
      qspCall(s, 'sex_ev_cum', 'what_now');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterCreampieHappy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_felt_great');
  qspCall(s, 'sex_ev_reactions_creampie', 'feel_full');
  qspCall(s, 'sex_ev_reactions_creampie', 'love_creampies');
  qspCall(s, 'sex_ev_reactions_creampie', 'cum_together_kiss');
  qspCall(s, 'sex_ev_reactions_creampie', 'cum_together_best');
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_apologize');
  qspCall(s, 'sex_ev_reactions_creampie', 'already_creampied_me');
  qspCall(s, 'sex_ev_reactions_creampie', 'thanks_for_asking');
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_enjoy_that');
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_safe_day');
  qspCall(s, 'sex_ev_reactions_creampie', 'pullout_game_tease');
  qspCall(s, 'sex_ev_talk', 'free_creampies');
  qspCall(s, 'sex_ev_reactions_creampie', 'have_plan_b2');
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reactions', 'react_menu'
  } },
  ]);
  scene.build();
}

function enterCreampieConflicted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['unhappy_creampie'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] < 1) {
    scene.actions([
      { label: 'Conflicted creampie', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_ask_next_time');
    qspCall(s, 'sex_ev_reactions_creampie', 'told_you_not_to_creampie');
    qspCall(s, 'sex_ev_reactions_creampie', 'cum_together_no_bc1');
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
  if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] < 1) {
    scene.actions([
      { label: 'Unhappy creampie', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_gross');
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_ask_next_time_mad');
    qspCall(s, 'sex_ev_reactions_creampie', 'cum_together_no_bc2');
    qspCall(s, 'sex_ev_reactions_creampie', 'promised_no_creampie');
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
            scene.text(`Did you...? did we...? together..?" you pant. ${((s as any).npcdesc ?? 0)} just nods, breathing heavily, cock still filling your pussy.`);
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
            // TODO-QSP: dynamic text: You lean back on the bed, letting <<$npcdesc>>'s thick cum drain from your pussy...
            scene.text(`You lean back on the bed, letting ${((s as any).npcdesc ?? 0)}'s thick cum drain from your pussy.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
              // TODO-QSP: dynamic text: You lay down, letting your breasts smush into the mattress as you feel <<$npcdes...
              scene.text(`You lay down, letting your breasts smush into the mattress as you feel ${((s as any).npcdesc ?? 0)}'s thick cum drain from your pussy.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
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
            if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
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
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_react');
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
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
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
          }
        }
      }
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('"Did you enjoy that?" you ask, looking at him in amusement.');
    }
    scene.text('"Your pussy is amazing," he pants.');
    qspCall(s, 'sex_ev_reactions_creampie', 'thanks_for_asking');
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_ask_next_time');
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
    if (((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: '(Not mad)', handler: (st: GameState) => {
    ((s as any).npc_ask_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['ask_next_time'] = 'not_mad';
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Just... ask next time..." you pant, smiling exhaustedly at him.');
    } else {
      scene.text('"I don\'t mind," you smile gently at him. "But you need to ask before you do."');
    }
    if (((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cum_wherever'] !== 1) {
      qspCall(s, 'sex_ev_reactions_creampie', 'did_you_come_inside_boy_react1');
    } else {
      if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
        // TODO-QSP: dynamic text: "I thought you said I didn't have to ask," <<$npcdesc>> says confusedly.
        scene.text(`"I thought you said I didn't have to ask," ${((s as any).npcdesc ?? 0)} says confusedly.`);
        scene.text('"Changed my mind. You need to start asking again."');
        // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
          scene.text('"I guess I did," you smile back, cupping his face in your hand. "But you should still warn me next time."');
          scene.text('You cup his face in your hand, giving him a post-orgasm smile to let him know you\'re not mad.');
        } else {
          if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text('"You\'re on birth control anyways aren\'t you?"');
            scene.text('"You still Need. To. Ask."');
            scene.text('You poke his nose teasingly to emphasize your last word. But your dick drunk smile tells him you\'re not really mad.');
          }
        }
      }
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
        { label: '(A little mad)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ask_next_time'] = 'little_mad';
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"If you\'re going to... come inside me..." you pant. "... you need to ask..."');
      scene.text('You try to give him a look of annoyance, but it\'s very difficult to produce angry vibes off the back of an orgasm.');
    } else {
      // TODO-QSP: dynamic text: "You need to ask me if you're going to come inside," you frown at <<$npcdesc>> i...
      scene.text(`"You need to ask me if you're going to come inside," you frown at ${((s as any).npcdesc ?? 0)} in annoyance.`);
    }
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
      // TODO-QSP: dynamic text: "I thought you said I didn't have to ask," <<$npcdesc>> says confusedly.
      scene.text(`"I thought you said I didn't have to ask," ${((s as any).npcdesc ?? 0)} says confusedly.`);
      scene.text('"You still need to warn me," you scowl.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
        // TODO-QSP: '"You still need to warn me," you say, ' + iif(sex_ev['came_together'] > 0, 'managing a slightly bet...
      } else {
        if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"You\'re on birth control anyways aren\'t you?"');
          // TODO-QSP: '"You still need to ask," ' + iif(sex_ev['came_together'] > 0, 'managing to put on a proper scowl, t...
        } else {
          // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
          scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
        }
      }
    }
    ((s as any).npc_ask_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_cum', 'what_now');
  } },
      ]);
    } else {
      if (((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.actions([
          { label: 'What happened to asking? (not mad)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"What... happened... to asking...?" you pant, giving him a dick-drunk smile.');
    } else {
      scene.text('"Didn\'t I say something about asking before coming inside me?" you chide with a teasing smile.');
    }
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he grins in return.');
      scene.text('"You still need to warn me," you chide gently.');
    } else {
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"You\'re on birth control anyways aren\'t you?"');
        scene.text('"You still need to ask," you chide gently.');
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
        scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
      }
    }
    qspCall(s, 'sex_ev_cum', 'what_now');
  } },
          { label: 'I thought I told you to ask (nice)', handler: (st: GameState) => {
    ((s as any).npc_ask_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['ask_next_time'] = 'not_mad';
    scene.text('"I thought I told you to ask...?" you say.');
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he grins in return.');
      scene.text('"You still need to warn me," you chide gently.');
    } else {
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"You\'re on birth control anyways aren\'t you?"');
        scene.text('"You still need to ask," you chide gently.');
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
        scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
      }
    }
    scene.actions([
      { label: 'I liked it', handler: (st: GameState) => {
    scene.text('"It\'s okay," you smile gently, cupping his face with your hand. "I liked it."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Next time', handler: (st: GameState) => {
    scene.text('"Next time..." you smile gently, cupping his face with your hand.');
    qspCall(s, 'sex_ev_cum', 'what_now');
  } },
    ]);
  } },
          { label: 'I thought I told you to ask (annoyed)', handler: (st: GameState) => {
    ((s as any).npc_ask_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
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
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"You\'re on birth control anyways aren\'t you?"');
        scene.text('"You still need to ask!" you huff.');
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
        scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
      }
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
    qspCall(s, 'sex_ev_cum', 'what_now');
  } },
  ]);
  scene.build();
}

function enterCreampieBeBetter(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Don\'t be sorry, be better', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['ask_next_time'] !== 'not_mad') {
      scene.actions([
        { label: '(Sullen)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        scene.text('"Don\'t be sorry," you sigh with disappointment. "Be better."');
      } else {
        scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
      }
    } else {
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
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          }
        }
      }
    }
    scene.text('"Don\'t be sorry," you sigh with measurable disappointment. "Be better."');
    qspCall(s, 'sex_ev_cum', 'what_now');
  } },
      ]);
    }
    scene.actions([
      { label: '(Forgiving)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: "Don't be sorry," you say, gently cupping <<$npcdesc>>'s face. "Be better."
        scene.text(`"Don't be sorry," you say, gently cupping ${((s as any).npcdesc ?? 0)}'s face. "Be better."`);
      } else {
        scene.img('images/shared/sex/after/pillow_talk2.jpg');
        // TODO-QSP: dynamic text: "Don't be sorry," you say gently, looking into <<$npcdesc>>'s eyes. "Be better."
        scene.text(`"Don't be sorry," you say gently, looking into ${((s as any).npcdesc ?? 0)}'s eyes. "Be better."`);
      }
    } else {
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
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          }
          // TODO-QSP: dynamic text: "Don't be sorry," you say gently, looking into <<$npcdesc>>'s eyes. "Be better."
          scene.text(`"Don't be sorry," you say gently, looking into ${((s as any).npcdesc ?? 0)}'s eyes. "Be better."`);
        }
      }
    }
    qspCall(s, 'sex_ev_cum', 'what_now');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampieAskNextTimeMad(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_force'] !== 1) {
    if (((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: 'Ask next time (very mad)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    } else {
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
    }
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"You need to..." you pant. "... ask... before you do... that..."');
      scene.text('It\'s hard to give a glare that has impact when you\'re still dick drunk off the back of your last orgasm but you somehow manage anyways, looking at him with daggers in your eyes.');
    } else {
      scene.text('"Can\'t you fucking ask before you come inside me?" you scowl.');
    }
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
      // TODO-QSP: dynamic text: "I thought you said I didn't have to ask," <<$npcdesc>> says confusedly.
      scene.text(`"I thought you said I didn't have to ask," ${((s as any).npcdesc ?? 0)} says confusedly.`);
      scene.text('"Changed my mind. You need to start asking again."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
        scene.text('"You still need to fucking tell me what you\'re gonna do," you hiss.');
      } else {
        if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"You\'re on birth control anyways aren\'t you?"');
          scene.text('"That\'s not a fucking excuse you asshole!" you hiss.');
        } else {
          // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
          scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
          scene.text('"Don\'t be sorry," you grumble. "Be better."');
        }
      }
    }
    ((s as any).npc_ask_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_ask_next_time_mad2');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'What happened to asking (very mad)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Didn\'t..." you pant, exhaustedly glaring at him. "... I tell you... to ask first...?"');
    } else {
      scene.text('"What the fuck!" you scowl. "Didn\'t I tell you to ask first?!"');
    }
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_ask_next_time_mad2');
  } },
      ]);
    }
  }
  scene.build();
}

function enterCreampieAskNextTimeMad2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
    // TODO-QSP: dynamic text: "I thought you said I didn't have to ask," <<$npcdesc>> says confusedly.
    scene.text(`"I thought you said I didn't have to ask," ${((s as any).npcdesc ?? 0)} says confusedly.`);
    scene.text('"Changed my mind. You need to start asking again."');
  } else {
    if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
      scene.text('"You still need to fucking tell me what you\'re gonna do," you hiss.');
    } else {
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"You\'re on birth control anyways aren\'t you?"');
        scene.text('"That\'s not a fucking excuse you asshole!" you hiss.');
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
        scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} mumbles, apparently exhausted from emptying his balls into you without permission.`);
        scene.text('"Don\'t be sorry," you grumble. "Be better."');
      }
    }
  }
  ((s as any).npc_ask_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
  qspCall(s, 'sex_ev_sex', 'sex_end');
  scene.build();
}

function enterCumTogetherNoBc1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] === 0  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] !== 1  &&  (((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).stat ?? 0)?.['preg_risk'] === 'danger'))) {
    scene.actions([
      { label: 'Be careful (pregnancy)', handler: (st: GameState) => {
    if (((s as any).pillcon2 ?? 0) > 0) {
      scene.actions([
        { label: 'Not effective yet (not mad)', handler: (st: GameState) => {
    ((s as any).npc_know_bc_not_effective ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: dynamic text: "You need to be more careful," you murmur, smiling affectionately at <<$npcdesc>...
    scene.text(`"You need to be more careful," you murmur, smiling affectionately at ${((s as any).npcdesc ?? 0)}. "My birth control pills haven't kicked in yet..."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: 'Not on birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
    scene.text('"You need to be more careful..." you murmur wryly. "I\'m not on birth control..."');
    // TODO-QSP: dynamic text: With a warm smile, you cup <<$npcdesc>>'s face with your hand, letting him know ...
    scene.text(`With a warm smile, you cup ${((s as any).npcdesc ?? 0)}'s face with your hand, letting him know your warning is just a warning and that you're not mad.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Still not on birth control', handler: (st: GameState) => {
    scene.text('"Hey..." you murmur wryly. "I\'m still not on birth control... We can\'t keep letting this happen..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['risky_creampie'] > 0) {
      scene.actions([
        { label: 'Danger day (not mad)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      // TODO-QSP: dynamic text: "Hey," you pant, smiling wryly at <<$npcdesc>>. "Didn't I tell you something abo...
      scene.text(`"Hey," you pant, smiling wryly at ${((s as any).npcdesc ?? 0)}. "Didn't I tell you something about today being a dangerous day for me...?"`);
    } else {
      ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
      // TODO-QSP: dynamic text: "Well that's not good," you pant, smiling wryly at <<$npcdesc>>. "Pretty sure I'...
      scene.text(`"Well that's not good," you pant, smiling wryly at ${((s as any).npcdesc ?? 0)}. "Pretty sure I'm ovulating today..."`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  } },
      { label: 'Plan B is expensive', handler: (st: GameState) => {
    scene.actions([
      { label: 'Teasing', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hey, plan B is expensive y'know," you complain teasingly, letting <<$npcdesc>> ...
    scene.text(`"Hey, plan B is expensive y'know," you complain teasingly, letting ${((s as any).npcdesc ?? 0)} know that you're only a <i>little</i> mad.`);
    if (((s as any).sex_ev ?? 0)?.['type'] === 'prostitution') {
      scene.text('"Then it\'s a good thing you\'re getting paid," he snickers.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Annoyed', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hey, plan B is expensive y'know," you complain teasingly, letting <<$npcdesc>> ...
    scene.text(`"Hey, plan B is expensive y'know," you complain teasingly, letting ${((s as any).npcdesc ?? 0)} know that you're only a <i>little</i> mad.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterCumTogetherNoBc2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 0  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] !== 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: 'Not on birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"I\'m not on birth control..." you pant. A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
    } else {
      // TODO-QSP: dynamic text: "What the fuck <<$npcdesc>>," you frown. "I'm on on birth control! You didn't ev...
      scene.text(`"What the fuck ${((s as any).npcdesc ?? 0)}," you frown. "I'm on on birth control! You didn't even ask!"`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Still not on birth control', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Hey," you pant. "I\'m still not on birth control... This is dangerous..."');
      scene.text('A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
    } else {
      // TODO-QSP: dynamic text: "What the fuck <<$npcdesc>>," you frown. "You know I'm on on birth control! You ...
      scene.text(`"What the fuck ${((s as any).npcdesc ?? 0)}," you frown. "You know I'm on on birth control! You can't just keep blowing loads inside me without permission."`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    if (((s as any).pillcon2 ?? 0) > 0) {
      scene.actions([
        { label: 'Birth control pill not effective yet', handler: (st: GameState) => {
    ((s as any).npc_know_bc_not_effective ?? {})[String((s as any).npcID ?? 0)] = 1;
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((s as any).npc_creampie_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"You can\'t keep doing that..." you pant. "My birth control pills haven\'t kicked in yet..."');
        scene.text('A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
      } else {
        scene.text('"My birth control pills haven\'t kicked in yet..." you pant.');
        scene.text('A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
      }
    } else {
      if (((s as any).npc_creampie_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Come on man?" you frown. "You can\'t keep coming inside me right now. My birth control pills haven\'t kicked in yet. I could get pregnant."');
      } else {
        scene.text('"Seriously dude?" you frown. "My birth control hasn\'t kicked in yet. I could get pregnant."');
        scene.text('A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
      scene.actions([
        { label: 'Ovulating today', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
        scene.text('"I thought I told you," you pant nervously. "I\'m ovulating today... I could get pregnant..."');
      } else {
        ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
        scene.text('"Oh fuck," you pant. "This is really bad. I think I\'m ovulating today..."');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
        scene.text('"What the fuck dude!" you growl. "I told you I\'m ovulating today! Do you <i>want</i> me to get pregnant?!"');
      } else {
        ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
        scene.text('"Oh fuck," you say, going pale. "This is really bad. I think I\'m ovulating today..."');
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
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
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_react');
  }
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
    case 'creampie_safe_day':
      enterCreampieSafeDay(s, scene);
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
    case 'cum_together_no_bc1':
      enterCumTogetherNoBc1(s, scene);
      break;
    case 'cum_together_no_bc2':
      enterCumTogetherNoBc2(s, scene);
      break;
    case 'pull-out_finish':
      enterPullOutFinish(s, scene);
      break;
    default:
      enterCreampieReact(s, scene);
      break;
  }
}

export const sex_ev_reactions_creampie: LocationDef = {
  name: 'sex_ev_reactions_creampie',
  title: '"Is... is that what it feels like when a guy comes inside...',
  region: 'other',
  enter: enter,
};
