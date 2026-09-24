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
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
    if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] < 3  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterThoughtNoCreampies(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).sex_ev ?? 0)?.['reluctant_creampie'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['unhappy_creampie'] !== 1) {
        scene.actions([
          { label: 'Happy creampie', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reactions_creampie', 'creampie_happy'
  } },
        ]);
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieConflicted(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieUnhappy(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieCumTogetherReact(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspCall(s, 'sex_ev_talk', 'free_creampies');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieSafeDay(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDidYouComeInside(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHavePlanB2(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspCall(s, 'sex_ev_reactions', 'cum_already');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPullOutFinish(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['total_creampies'] === 1) {
    scene.actions([
      { label: 'First creampie', handler: (st: GameState) => {
    ((st as any).npc_first_creampie = (st as any).npc_first_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '"You\'re my first"', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      scene.text('"Hey, can I tell you something?" you ask, breathing hard after your orgasm.');
    } else {
      // TODO-QSP: dynamic text: "Hey, can I tell you something?" you ask, giving <<$npcdesc>> a look.
      scene.text(`"Hey, can I tell you something?" you ask, giving ${((st as any).npcdesc ?? '')} a look.`);
    }
    scene.text('"Sure," he says. "What is it?"');
    scene.text('"I\'ve never let a guy come inside me before," you smile back warmly. "You\'re my first."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Is that what it feels like?', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    } else {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/3.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/3.jpg');
            }
          }
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
            }
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhatCreampieFeelsLike(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    scene.text('"Is... is that what it feels like when a guy comes inside...?" you stammer breathlessly.');
  } else {
    scene.text('"Is... is that what it feels like when a guy comes inside...?" you gasp in shock.');
  }
  if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      // TODO-QSP: dynamic text: "Wait, was that your first creampie?" <<$npcdesc>> asks.
      scene.text(`"Wait, was that your first creampie?" ${((s as any).npcdesc ?? '')} asks.`);
      scene.actions([
        { label: '"You\'re my first"', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: "Yeah," you nod, giving <<$npcdesc>> a warm smile. "You''re my first."
    scene.text(`"Yeah," you nod, giving ${((st as any).npcdesc ?? '')} a warm smile. "You're my first."`);
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      scene.text('"Careful," he smiles back at you. "You might get addicted."');
    } else {
      scene.text('He smiles back at you.');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Feels good', handler: (st: GameState) => {
    scene.text('"Yeah," you can\'t help but smile back. "It feels <i>really</i> good..."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieSafeDay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['ma_pill'] === 0  &&  ((s as any).sex_ev ?? 0)?.['plan_b_buy'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.actions([
        { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    if (((st as any).mesec ?? 0) > 0) {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: "Don''t worry, I''m on my period," you say as <<$npcdesc>>''s pink-tinged cum tr...
        scene.text(`"Don't worry, I'm on my period," you say as ${((st as any).npcdesc ?? '')}'s pink-tinged cum trickles from your pussy. "I shouldn't get pregnant."`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          scene.text('"Don\'t worry, I\'m on my period," you say. "I shouldn\'t get pregnant."');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            scene.text('"Don\'t worry, I\'m on my period," you say over your shoulder. "I shouldn\'t get pregnant."');
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
              scene.text('"Don\'t worry, I\'m on my period," you say. "I shouldn\'t get pregnant."');
            }
          }
        }
      }
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom'  ||  ((st as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
        qspCall(st, 'sex_ev_cum', 'what_now');
      } else {
        qspCall(st, 'sex_ev_sex', 'sex_end');
      }
    }
    scene.actions([
      { label: 'Reassurance', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: "Don''t worry," you smile as <<$npcdesc>>''s cum continues to trickle from your ...
      scene.text(`"Don't worry," you smile as ${((st as any).npcdesc ?? '')}'s cum continues to trickle from your pussy. "It's a safe day."`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: "Don''t worry," you smile at <<$npcdesc>>, cupping his face. "It''s a safe day."
        scene.text(`"Don't worry," you smile at ${((st as any).npcdesc ?? '')}, cupping his face. "It's a safe day."`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          // TODO-QSP: dynamic text: "Don''t worry," you smile at <<$npcdesc>> over your shoulder. "It''s a safe day....
          scene.text(`"Don't worry," you smile at ${((st as any).npcdesc ?? '')} over your shoulder. "It's a safe day."`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            // TODO-QSP: dynamic text: "Don''t worry," you smile down at <<$npcdesc>>. "It''s a safe day."
            scene.text(`"Don't worry," you smile down at ${((st as any).npcdesc ?? '')}. "It's a safe day."`);
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom') {
      qspCall(st, 'sex_ev_cum', 'what_now');
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
      { label: 'Lucky', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['creampie_surprise'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom') {
          // TODO-QSP: dynamic text: "That was lucky," you smile as <<$npcdesc>>''s cum continues to trickle from you...
          scene.text(`"That was lucky," you smile as ${((st as any).npcdesc ?? '')}'s cum continues to trickle from your pussy. "If a condom is going to break, it might as well be on a safe day."`);
        } else {
          // TODO-QSP: dynamic text: "That was lucky," you smile as <<$npcdesc>>''s cum continues to trickle from you...
          scene.text(`"That was lucky," you smile as ${((st as any).npcdesc ?? '')}'s cum continues to trickle from your pussy. "If you're gonna come inside me by mistake, it might as well be on a safe day."`);
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          // TODO-QSP: dynamic text: "Just count yourself lucky it was a safe day for me," you smile at <<$npcdesc>>.
          scene.text(`"Just count yourself lucky it was a safe day for me," you smile at ${((st as any).npcdesc ?? '')}.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            // TODO-QSP: dynamic text: "Just count yourself lucky it was a safe day for me," you smile at <<$npcdesc>> ...
            scene.text(`"Just count yourself lucky it was a safe day for me," you smile at ${((st as any).npcdesc ?? '')} over your shoulder.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
              // TODO-QSP: dynamic text: "Just count yourself lucky it was a safe day for me," you smile down at <<$npcde...
              scene.text(`"Just count yourself lucky it was a safe day for me," you smile down at ${((st as any).npcdesc ?? '')}.`);
            }
          }
        }
      }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom') {
          // TODO-QSP: dynamic text: "That was lucky," you smile as <<$npcdesc>>''s cum continues to trickle from you...
          scene.text(`"That was lucky," you smile as ${((st as any).npcdesc ?? '')}'s cum continues to trickle from your pussy. "If a condom is going to break, it might as well be on a safe day."`);
        } else {
          // TODO-QSP: dynamic text: "We''re in luck today," you smile as <<$npcdesc>>''s cum continues to trickle fr...
          scene.text(`"We're in luck today," you smile as ${((st as any).npcdesc ?? '')}'s cum continues to trickle from your pussy. "It's a safe day, so you can come inside me as much as you want."`);
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          // TODO-QSP: dynamic text: "We''re in luck today," you smile blissfully at <<$npcdesc>>. "It''s a safe day,...
          scene.text(`"We're in luck today," you smile blissfully at ${((st as any).npcdesc ?? '')}. "It's a safe day, so you can come inside me as much as you want."`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            // TODO-QSP: dynamic text: "We''re in luck today," you smile over your shoulder at <<$npcdesc>>. "It''s a s...
            scene.text(`"We're in luck today," you smile over your shoulder at ${((st as any).npcdesc ?? '')}. "It's a safe day, so you can come inside me as much as you want."`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
              // TODO-QSP: dynamic text: "We''re in luck today," you smile down at <<$npcdesc>>. "It''s a safe day, so yo...
              scene.text(`"We're in luck today," you smile down at ${((st as any).npcdesc ?? '')}. "It's a safe day, so you can come inside me as much as you want."`);
            }
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom'  ||  ((st as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
      qspCall(st, 'sex_ev_cum', 'what_now');
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.actions([
          { label: 'It should be a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    if (((st as any).mesec ?? 0) > 0) {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: "Don''t worry, I''m on my period," you say as <<$npcdesc>>''s pink-tinged cum tr...
        scene.text(`"Don't worry, I'm on my period," you say as ${((st as any).npcdesc ?? '')}'s pink-tinged cum trickles from your pussy. "I shouldn't get pregnant."`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          scene.text('"Don\'t worry, I\'m on my period," you say. "I shouldn\'t get pregnant."');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            scene.text('"Don\'t worry, I\'m on my period," you say over your shoulder. "I shouldn\'t get pregnant."');
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
              scene.text('"Don\'t worry, I\'m on my period," you say. "I shouldn\'t get pregnant."');
            }
          }
        }
      }
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom'  ||  ((st as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
        qspCall(st, 'sex_ev_cum', 'what_now');
      } else {
        qspCall(st, 'sex_ev_sex', 'sex_end');
      }
    }
    scene.actions([
      { label: 'Reassurance', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: "It should be safe today," you say as <<$npcdesc>>''s cum continues to trickle f...
      scene.text(`"It should be safe today," you say as ${((st as any).npcdesc ?? '')}'s cum continues to trickle from your pussy. "I'm pretty sure I won't get pregnant."`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        scene.text('"It should be safe today," you say. "I\'m pretty sure I won\'t get pregnant."');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          scene.text('"It should be safe today," you say over your shoulder. "I\'m pretty sure I won\'t get pregnant."');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            scene.text('"It should be safe today," you say. "I\'m pretty sure I won\'t get pregnant."');
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom'  ||  ((st as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
      qspCall(st, 'sex_ev_cum', 'what_now');
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieHappy(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieFeltGreat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFeelFull(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoveCreampies(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTogetherKiss(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTogetherBest(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieApologize(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlreadyCreampiedMe(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterThanksForAsking(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieEnjoyThat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieSafeDay(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPulloutGameTease(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_talk', 'free_creampies');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHavePlanB2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterToldYouNotToCreampie(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumTogetherNoBc1(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_reactions', '');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieUnhappy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] < 1) {
    scene.actions([
      { label: 'Unhappy creampie', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieGross(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTimeMad(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumTogetherNoBc2(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPromisedNoCreampie(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_reactions', '');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 3;
    if (((st as any).sex_ev ?? 0)?.['did_we_cum_together'] === 1) {
      scene.text('You nod hazily, mind still swimming from your orgasm.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
          scene.text(`Did you...? did we...? together..?" you pant. ${((st as any).npcdesc ?? '')} just nods, breathing heavily on top of you.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            // TODO-QSP: dynamic text: Your knees give out underneath you, falling down to the bed with <<$npcdesc>> on...
            scene.text(`Your knees give out underneath you, falling down to the bed with ${((st as any).npcdesc ?? '')} on top of you.`);
            // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
            scene.text(`Did you...? did we...? together..?" you pant. ${((st as any).npcdesc ?? '')} just nods, breathing heavily, cock still filling your pussy.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/3.jpg');
              // TODO-QSP: dynamic text: You sit back on your haunches, feeling something <i>squish</i> around <<$npcdesc...
              scene.text(`You sit back on your haunches, feeling something <i>squish</i> around ${((st as any).npcdesc ?? '')}'s cock inside you, watching his chest rise and falls with the same laboured breathing as your own.`);
              // TODO-QSP: dynamic text: Did you...? did we...? together..?" you murmur. <<$npcdesc>> just nods.
              scene.text(`Did you...? did we...? together..?" you murmur. ${((st as any).npcdesc ?? '')} just nods.`);
            } else {
              if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
                scene.img('images/shared/sex/vag/doggy/1.jpg');
                // TODO-QSP: dynamic text: Your knees give out underneath you, falling down to the bed with <<$npcdesc>> on...
                scene.text(`Your knees give out underneath you, falling down to the bed with ${((st as any).npcdesc ?? '')} on top of you.`);
                // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
                scene.text(`Did you...? did we...? together..?" you pant. ${((st as any).npcdesc ?? '')} just nods, breathing heavily, his cock still filling your ass.`);
              }
            }
          }
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
            scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
            // TODO-QSP: dynamic text: You lean back on the bed, letting <<$npcdesc>>''s thick cum drain from your puss...
            scene.text(`You lean back on the bed, letting ${((st as any).npcdesc ?? '')}'s thick cum drain from your pussy.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
              // TODO-QSP: dynamic text: You lay down, letting your breasts smush into the mattress as you feel <<$npcdes...
              scene.text(`You lay down, letting your breasts smush into the mattress as you feel ${((st as any).npcdesc ?? '')}'s thick cum drain from your pussy.`);
            } else {
              if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
                // TODO-QSP: dynamic text: You lean back, sitting down between <<$npcdesc>>''s legs as you watch his thick ...
                scene.text(`You lean back, sitting down between ${((st as any).npcdesc ?? '')}'s legs as you watch his thick cum drain from between yours.`);
              }
            }
          }
        } else {
          if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
            scene.img('images/shared/sex/after/pillow_talk2.jpg');
            // TODO-QSP: dynamic text: You lean back on the bed, breathing hard as <<$npcdesc>> slowly flops down besid...
            scene.text(`You lean back on the bed, breathing hard as ${((st as any).npcdesc ?? '')} slowly flops down beside you.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
              scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
              // TODO-QSP: dynamic text: You lay down, letting your breasts smush into the mattress as you feel <<$npcdes...
              scene.text(`You lay down, letting your breasts smush into the mattress as you feel ${((st as any).npcdesc ?? '')}'s thick cum ooze out of your asshole.`);
            }
          }
        }
        scene.text('"Did you...? did we...? together..?" you pant. He just nods back, breathing just as hard with a faint smile.');
      }
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['did_we_cum_together'] = 2;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieReact(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['hypno_came_together'] === 1  &&  ((s as any).sex_ev ?? 0)?.['did_we_cum_together'] === 1) {
      scene.actions([
        { label: 'Lie about coming together', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Y-yeah," you stammer. You give <<$npcdesc>> a weak smile, hoping that it will b...
    scene.text(`"Y-yeah," you stammer. You give ${((st as any).npcdesc ?? '')} a weak smile, hoping that it will be taken as exhaustion instead of the storm of frustration and confusion that rages inside you.`);
    scene.text('<i>What the hell was that? Why couldn\'t you come? What is wrong with you...</i>');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Admit you didn\'t come', handler: (st: GameState) => {
    scene.text('"Erm, uh... no..." you mumble.');
    scene.text('"Huh? I thought you said you were going to?"');
    scene.text('"I guess maybe I wasn\'t as close as I thought I was."');
    // TODO-QSP: dynamic text: You give <<$npcdesc>> a weak smile, trying to let him know it wasn''t his fault ...
    scene.text(`You give ${((st as any).npcdesc ?? '')} a weak smile, trying to let him know it wasn't his fault while frustration and confusion rage inside you.`);
    scene.text('<i>What the hell was that? Why couldn\'t you come? What is wrong with you...</i>');
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: "Did you enjoy that?" you ask sweetly, leaving <<$npcdesc>>''s cock stuffed insi...
        scene.text(`"Did you enjoy that?" you ask sweetly, leaving ${((st as any).npcdesc ?? '')}'s cock stuffed inside you and smiling up at him.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          // TODO-QSP: dynamic text: "Did you enjoy that?" you ask sweetly, leaving <<$npcdesc>>''s cock stuffed insi...
          scene.text(`"Did you enjoy that?" you ask sweetly, leaving ${((st as any).npcdesc ?? '')}'s cock stuffed inside you and smiling at him over your shoulder.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            // TODO-QSP: dynamic text: "Did you enjoy that?" you ask sweetly, leaving <<$npcdesc>>''s cock stuffed insi...
            scene.text(`"Did you enjoy that?" you ask sweetly, leaving ${((st as any).npcdesc ?? '')}'s cock stuffed inside you and smiling down at him.`);
          }
        }
      }
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('"Did you enjoy that?" you ask, looking at him in amusement.');
    }
    scene.text('"Your pussy is amazing," he pants.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterThanksForAsking(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
      { label: 'I\'m glad', handler: (st: GameState) => {
    scene.text('"I\'m glad you liked it so much," you say, letting your smile grow wider.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'That\'s what they say', handler: (st: GameState) => {
    scene.text('"All the boys say so," you shrug, letting your smile slip into a smug grin.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I liked it too', handler: (st: GameState) => {
    scene.text('"I liked it too," you smile. "It felt nice."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    if (((st as any).npc_ask_creampie ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: '(Not mad)', handler: (st: GameState) => {
    ((st as any).npc_ask_creampie = (st as any).npc_ask_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ask_next_time'] = 'not_mad';
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Just... ask next time..." you pant, smiling exhaustedly at him.');
    } else {
      scene.text('"I don\'t mind," you smile gently at him. "But you need to ask before you do."');
    }
    if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1  &&  ((st as any).sex_ev ?? 0)?.['cum_wherever'] !== 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will') {
        // TODO-QSP: dynamic text: "I thought you said I didn''t have to ask," <<$npcdesc>> says confusedly.
        scene.text(`"I thought you said I didn't have to ask," ${((st as any).npcdesc ?? '')} says confusedly.`);
        scene.text('"Changed my mind. You need to start asking again."');
        // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
      } else {
        if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
          scene.text('"I guess I did," you smile back, cupping his face in your hand. "But you should still warn me next time."');
          scene.text('You cup his face in your hand, giving him a post-orgasm smile to let him know you\'re not mad.');
        } else {
          if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
            scene.text('"You\'re on birth control anyways aren\'t you?"');
            scene.text('"You still Need. To. Ask."');
            scene.text('You poke his nose teasingly to emphasize your last word. But your dick drunk smile tells him you\'re not really mad.');
          }
        }
      }
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
        { label: '(A little mad)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ask_next_time'] = 'little_mad';
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"If you\'re going to... come inside me..." you pant. "... you need to ask..."');
      scene.text('You try to give him a look of annoyance, but it\'s very difficult to produce angry vibes off the back of an orgasm.');
    } else {
      // TODO-QSP: dynamic text: "You need to ask me if you''re going to come inside," you frown at <<$npcdesc>> ...
      scene.text(`"You need to ask me if you're going to come inside," you frown at ${((st as any).npcdesc ?? '')} in annoyance.`);
    }
    if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will') {
      // TODO-QSP: dynamic text: "I thought you said I didn''t have to ask," <<$npcdesc>> says confusedly.
      scene.text(`"I thought you said I didn't have to ask," ${((st as any).npcdesc ?? '')} says confusedly.`);
      scene.text('"You still need to warn me," you scowl.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
        // TODO-QSP: '"You still need to warn me," you say, ' + iif(sex_ev['came_together'] > 0, 'managing a slightly bet...
      } else {
        if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          scene.text('"You\'re on birth control anyways aren\'t you?"');
          // TODO-QSP: '"You still need to ask," ' + iif(sex_ev['came_together'] > 0, 'managing to put on a proper scowl, t...
        } else {
          // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
          scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} mumbles, apparently exhausted from emptying his balls into you without permission.`);
        }
      }
    }
    ((st as any).npc_ask_creampie = (st as any).npc_ask_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      ]);
    } else {
      if (((st as any).npc_ask_creampie ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.actions([
          { label: 'What happened to asking? (not mad)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"What... happened... to asking...?" you pant, giving him a dick-drunk smile.');
    } else {
      scene.text('"Didn\'t I say something about asking before coming inside me?" you chide with a teasing smile.');
    }
    if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he grins in return.');
      scene.text('"You still need to warn me," you chide gently.');
    } else {
      if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"You\'re on birth control anyways aren\'t you?"');
        scene.text('"You still need to ask," you chide gently.');
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
        scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} mumbles, apparently exhausted from emptying his balls into you without permission.`);
      }
    }
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
          { label: 'I thought I told you to ask (nice)', handler: (st: GameState) => {
    ((st as any).npc_ask_creampie = (st as any).npc_ask_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ask_next_time'] = 'not_mad';
    scene.text('"I thought I told you to ask...?" you say.');
    if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he grins in return.');
      scene.text('"You still need to warn me," you chide gently.');
    } else {
      if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"You\'re on birth control anyways aren\'t you?"');
        scene.text('"You still need to ask," you chide gently.');
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
        scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} mumbles, apparently exhausted from emptying his balls into you without permission.`);
      }
    }
    scene.actions([
      { label: 'I liked it', handler: (st: GameState) => {
    scene.text('"It\'s okay," you smile gently, cupping his face with your hand. "I liked it."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Next time', handler: (st: GameState) => {
    scene.text('"Next time..." you smile gently, cupping his face with your hand.');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
    ]);
  } },
          { label: 'I thought I told you to ask (annoyed)', handler: (st: GameState) => {
    ((st as any).npc_ask_creampie = (st as any).npc_ask_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ask_next_time'] = 'annoyed';
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      // TODO-QSP: dynamic text: "What happened... to asking...?" you pant, glaring at <<$npcdesc>> through your ...
      scene.text(`"What happened... to asking...?" you pant, glaring at ${((st as any).npcdesc ?? '')} through your post orgasm haze.`);
    } else {
      scene.text('"What happened to asking?" you scowl.');
    }
    if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You told me I could come wherever I wanted," he grins in return.');
      scene.text('"That doesn\'t mean you can do it without permission!" you huff.');
    } else {
      if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"You\'re on birth control anyways aren\'t you?"');
        scene.text('"You still need to ask!" you huff.');
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
        scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} mumbles, apparently exhausted from emptying his balls into you without permission.`);
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
  ]);
  scene.build();
}

function enterCreampieBeBetter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t be sorry, be better', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['ask_next_time'] !== 'not_mad') {
      scene.actions([
        { label: '(Sullen)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        scene.text('"Don\'t be sorry," you sigh with disappointment. "Be better."');
      } else {
        scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
          scene.img('images/shared/sex/vag/doggy/2.jpg');
        } else {
          scene.img('images/shared/sex/after/pillow_talk2.jpg');
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
            scene.img('images/shared/sex/vag/cowgirl/3.jpg');
          } else {
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          }
        }
      }
    }
    scene.text('"Don\'t be sorry," you sigh with measurable disappointment. "Be better."');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      ]);
    }
    scene.actions([
      { label: '(Forgiving)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: "Don''t be sorry," you say, gently cupping <<$npcdesc>>''s face. "Be better."
        scene.text(`"Don't be sorry," you say, gently cupping ${((st as any).npcdesc ?? '')}'s face. "Be better."`);
      } else {
        scene.img('images/shared/sex/after/pillow_talk2.jpg');
        // TODO-QSP: dynamic text: "Don''t be sorry," you say gently, looking into <<$npcdesc>>''s eyes. "Be better...
        scene.text(`"Don't be sorry," you say gently, looking into ${((st as any).npcdesc ?? '')}'s eyes. "Be better."`);
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
        } else {
          scene.img('images/shared/sex/after/pillow_talk2.jpg');
        }
        // TODO-QSP: dynamic text: "Don''t be sorry," you say gently, looking into <<$npcdesc>>''s eyes. "Be better...
        scene.text(`"Don't be sorry," you say gently, looking into ${((st as any).npcdesc ?? '')}'s eyes. "Be better."`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
            scene.img('images/shared/sex/vag/cowgirl/3.jpg');
          } else {
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          }
          // TODO-QSP: dynamic text: "Don''t be sorry," you say gently, looking into <<$npcdesc>>''s eyes. "Be better...
          scene.text(`"Don't be sorry," you say gently, looking into ${((st as any).npcdesc ?? '')}'s eyes. "Be better."`);
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'what_now');
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
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/3.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/shock1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/3.jpg');
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"You need to..." you pant. "... ask... before you do... that..."');
      scene.text('It\'s hard to give a glare that has impact when you\'re still dick drunk off the back of your last orgasm but you somehow manage anyways, looking at him with daggers in your eyes.');
    } else {
      scene.text('"Can\'t you fucking ask before you come inside me?" you scowl.');
    }
    if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will') {
      // TODO-QSP: dynamic text: "I thought you said I didn''t have to ask," <<$npcdesc>> says confusedly.
      scene.text(`"I thought you said I didn't have to ask," ${((st as any).npcdesc ?? '')} says confusedly.`);
      scene.text('"Changed my mind. You need to start asking again."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        scene.text('"You told me I could come wherever I wanted," he pants in return, smiling.');
        scene.text('"You still need to fucking tell me what you\'re gonna do," you hiss.');
      } else {
        if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          scene.text('"You\'re on birth control anyways aren\'t you?"');
          scene.text('"That\'s not a fucking excuse you asshole!" you hiss.');
        } else {
          // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles, apparently exhausted from emptying his balls into...
          scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} mumbles, apparently exhausted from emptying his balls into you without permission.`);
          scene.text('"Don\'t be sorry," you grumble. "Be better."');
        }
      }
    }
    ((st as any).npc_ask_creampie = (st as any).npc_ask_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTimeMad2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'What happened to asking (very mad)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Didn\'t..." you pant, exhaustedly glaring at him. "... I tell you... to ask first...?"');
    } else {
      scene.text('"What the fuck!" you scowl. "Didn\'t I tell you to ask first?!"');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTimeMad2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskNextTimeMad2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
    // TODO-QSP: dynamic text: "I thought you said I didn''t have to ask," <<$npcdesc>> says confusedly.
    scene.text(`"I thought you said I didn't have to ask," ${((s as any).npcdesc ?? '')} says confusedly.`);
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
        scene.text(`"Sorry," ${((s as any).npcdesc ?? '')} mumbles, apparently exhausted from emptying his balls into you without permission.`);
        scene.text('"Don\'t be sorry," you grumble. "Be better."');
      }
    }
  }
  ((s as any).npc_ask_creampie = (s as any).npc_ask_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterCumTogetherNoBc1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] === 0  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] !== 1  &&  (((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).stat ?? 0)?.['preg_risk'] === 'danger'))) {
    scene.actions([
      { label: 'Be careful (pregnancy)', handler: (st: GameState) => {
    if (((st as any).pillcon2 ?? 0) > 0) {
      scene.actions([
        { label: 'Not effective yet (not mad)', handler: (st: GameState) => {
    ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
    // TODO-QSP: dynamic text: "You need to be more careful," you murmur, smiling affectionately at <<$npcdesc>...
    scene.text(`"You need to be more careful," you murmur, smiling affectionately at ${((st as any).npcdesc ?? '')}. "My birth control pills haven't kicked in yet..."`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((st as any).npc_know_not_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: 'Not on birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
    scene.text('"You need to be more careful..." you murmur wryly. "I\'m not on birth control..."');
    // TODO-QSP: dynamic text: With a warm smile, you cup <<$npcdesc>>''s face with your hand, letting him know...
    scene.text(`With a warm smile, you cup ${((st as any).npcdesc ?? '')}'s face with your hand, letting him know your warning is just a warning and that you're not mad.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Still not on birth control', handler: (st: GameState) => {
    scene.text('"Hey..." you murmur wryly. "I\'m still not on birth control... We can\'t keep letting this happen..."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
    }
    if (((st as any).sex_ev ?? 0)?.['risky_creampie'] > 0) {
      scene.actions([
        { label: 'Danger day (not mad)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      // TODO-QSP: dynamic text: "Hey," you pant, smiling wryly at <<$npcdesc>>. "Didn''t I tell you something ab...
      scene.text(`"Hey," you pant, smiling wryly at ${((st as any).npcdesc ?? '')}. "Didn't I tell you something about today being a dangerous day for me...?"`);
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
      // TODO-QSP: dynamic text: "Well that''s not good," you pant, smiling wryly at <<$npcdesc>>. "Pretty sure I...
      scene.text(`"Well that's not good," you pant, smiling wryly at ${((st as any).npcdesc ?? '')}. "Pretty sure I'm ovulating today..."`);
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  } },
      { label: 'Plan B is expensive', handler: (st: GameState) => {
    scene.actions([
      { label: 'Teasing', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hey, plan B is expensive y''know," you complain teasingly, letting <<$npcdesc>>...
    scene.text(`"Hey, plan B is expensive y'know," you complain teasingly, letting ${((st as any).npcdesc ?? '')} know that you're only a <i>little</i> mad.`);
    if (((st as any).sex_ev ?? 0)?.['type'] === 'prostitution') {
      scene.text('"Then it\'s a good thing you\'re getting paid," he snickers.');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Annoyed', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hey, plan B is expensive y''know," you complain teasingly, letting <<$npcdesc>>...
    scene.text(`"Hey, plan B is expensive y'know," you complain teasingly, letting ${((st as any).npcdesc ?? '')} know that you're only a <i>little</i> mad.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTogetherNoBc2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 0  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] !== 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: 'Not on birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"I\'m not on birth control..." you pant. A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
    } else {
      // TODO-QSP: dynamic text: "What the fuck <<$npcdesc>>," you frown. "I''m on on birth control! You didn''t ...
      scene.text(`"What the fuck ${((st as any).npcdesc ?? '')}," you frown. "I'm on on birth control! You didn't even ask!"`);
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Still not on birth control', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Hey," you pant. "I\'m still not on birth control... This is dangerous..."');
      scene.text('A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
    } else {
      // TODO-QSP: dynamic text: "What the fuck <<$npcdesc>>," you frown. "You know I''m on on birth control! You...
      scene.text(`"What the fuck ${((st as any).npcdesc ?? '')}," you frown. "You know I'm on on birth control! You can't just keep blowing loads inside me without permission."`);
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    if (((s as any).pillcon2 ?? 0) > 0) {
      scene.actions([
        { label: 'Birth control pill not effective yet', handler: (st: GameState) => {
    ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((st as any).npc_creampie_count ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"You can\'t keep doing that..." you pant. "My birth control pills haven\'t kicked in yet..."');
        scene.text('A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
      } else {
        scene.text('"My birth control pills haven\'t kicked in yet..." you pant.');
        scene.text('A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
      }
    } else {
      if (((st as any).npc_creampie_count ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Come on man?" you frown. "You can\'t keep coming inside me right now. My birth control pills haven\'t kicked in yet. I could get pregnant."');
      } else {
        scene.text('"Seriously dude?" you frown. "My birth control hasn\'t kicked in yet. I could get pregnant."');
        scene.text('A shiver runs through your body. Whether from your recent orgasm or from fear, you\'re not sure.');
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
      scene.actions([
        { label: 'Ovulating today', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
        scene.text('"I thought I told you," you pant nervously. "I\'m ovulating today... I could get pregnant..."');
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
        scene.text('"Oh fuck," you pant. "This is really bad. I think I\'m ovulating today..."');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
        scene.text('"What the fuck dude!" you growl. "I told you I\'m ovulating today! Do you <i>want</i> me to get pregnant?!"');
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
        scene.text('"Oh fuck," you say, going pale. "This is really bad. I think I\'m ovulating today..."');
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPullOutFinish(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1  ||  ((s as any).sex_ev ?? 0)?.['not_inside'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1  &&  ((s as any).sex_ev ?? 0)?.['pull-out_fail_react'] === 0) {
    // TODO-QSP: act iif(sex_ev['not_inside'] = 1, '[not]... inside...', '[pull]... out...'):
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pull-out_fail_react'] = 1;
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      // TODO-QSP: iif(sex_ev['not_inside'] = 1, '"not... in... side..."', '"... out..."') + ' you finish belatedly. Yo...
    } else {
      // TODO-QSP: iif(sex_ev['not_inside'] = 1, '"not... in... side..."', '"... out..."') + ' you finish belatedly.'
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterCreampieGross(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_orgasm'] === 0) {
    scene.actions([
      { label: 'That was gross', handler: (st: GameState) => {
    ((st as any).npc_dont_like_creampie = (st as any).npc_dont_like_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_gross'] = 1;
    if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: "Gross," you cringe as <<$npcdesc>> slips his cock out from inside you, releasin...
      scene.text(`"Gross," you cringe as ${((st as any).npcdesc ?? '')} slips his cock out from inside you, releasing a flood of cum that comes spilling out of your pussy.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        // TODO-QSP: dynamic text: "Well," you say, cringing as <<$npcdesc>>''s cum oozes from your pussy. "That wa...
        scene.text(`"Well," you say, cringing as ${((st as any).npcdesc ?? '')}'s cum oozes from your pussy. "That was gross."`);
        // TODO-QSP: dynamic text: "Gross? What''s so gross about a creampie?" <<$npcdesc>> asks.
        scene.text(`"Gross? What's so gross about a creampie?" ${((st as any).npcdesc ?? '')} asks.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
          // TODO-QSP: dynamic text: "Well," you say, wriggling beneath <<$npcdesc>>, cringing at the slimy <i>fullne...
          scene.text(`"Well," you say, wriggling beneath ${((st as any).npcdesc ?? '')}, cringing at the slimy <i>fullness</i> of your pussy. "This is gross."`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
            // TODO-QSP: dynamic text: "Well," you say, wriggling beneath <<$npcdesc>>, cringing at the slimy <i>fullne...
            scene.text(`"Well," you say, wriggling beneath ${((st as any).npcdesc ?? '')}, cringing at the slimy <i>fullness</i> of your pussy. "This is gross."`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/3.jpg');
              // TODO-QSP: dynamic text: "Well," you say, shifting your weight on top of <<$npcdesc>>, cringing at the sl...
              scene.text(`"Well," you say, shifting your weight on top of ${((st as any).npcdesc ?? '')}, cringing at the slimy <i>fullness</i> inside your belly. "This is gross."`);
            }
          }
        }
        // TODO-QSP: dynamic text: "Gross? What''s so gross about a creampie?" <<$npcdesc>> asks.
        scene.text(`"Gross? What's so gross about a creampie?" ${((st as any).npcdesc ?? '')} asks.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieGross2(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] !== ''  &&  ((st as any).pc_cum_pref_know ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      scene.text('"They feel weird," you grimace, before twisting your mouth in a wry smirk and shrug. "But I like you. So you better be happy I let you do this."');
    } else {
      scene.text('"It feels weird when guys come inside," you grimace. "It feels like a bunch of slime filling up my vagina. I don\'t like it."');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    { label: 'Cleanup is gross', handler: (st: GameState) => {
    if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] !== ''  &&  ((st as any).pc_cum_pref_know ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      scene.text('"It\'s not the creampie itself, it\'s the clean up," you grimace, before twisting your mouth in a wry smirk and shrug. "It has a tendency to stick around for a while and <i>gush</i> when you\'re least expecting it. So you better be happy I let you do this."');
    } else {
      scene.text('"It\'s not the creampie itself, it\'s the clean up," you grimace, before twisting your mouth in a wry smirk and shrug. "It has a tendency to stick around for a while and <i>gush</i> when you\'re least expecting it."');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    { label: 'Not ready for kids', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_kids'] = 1;
    if (((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
      qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
      scene.text('"I\'m not on birth control," you grimace. "I can practically <i>feel</i> the little bastards swimming around inside me and trying to knock me up. Just the thought of getting pregnant grosses me out."');
      qspCall(st, 'sex_ev_sex', 'sex_end');
    } else {
      if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"The idea of pregnancy grosses me out," you grimace.');
        // TODO-QSP: dynamic text: "But aren''t you on birth control?" <<$npcdesc>> asks.
        scene.text(`"But aren't you on birth control?" ${((st as any).npcdesc ?? '')} asks.`);
        if (((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          scene.actions([
            { label: 'Forgot a few days', handler: (st: GameState) => {
    scene.text('"I uhh..." you say guiltily. "I might have forgotten to take my pill a few times... I\'m not sure how effective it is right now..."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
            { label: 'Stopped using', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
    scene.text('"I uhh..." you say guiltily. "I stopped using it... I guess I forgot to tell you..."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
          ]);
        } else {
          scene.text('"Yeah but just the thought is enough to turn me off. I can practically <i>feel</i> the little bastards swimming around inside, trying to knock me up. Ick."');
          qspCall(st, 'sex_ev_sex', 'sex_end');
        }
      } else {
        qspCall(st, 'sex_ev_stats', 'birth_control_know');
        scene.text('"The idea of pregnancy grosses me out," you grimace. "I\'m on birth control but my paranoia turns creampies into a huge turnoff. I can practically <i>feel</i> the little bastards swimming around inside, trying to knock me up. Ick."');
        qspCall(st, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
  ]);
  scene.build();
}

function enterPromisedNoCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] !== 1  &&  (((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'))) {
    scene.actions([
      { label: 'You promised you wouldn\'t come inside!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['mad'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"What the fuck!" you start dizzily, head swimming as you\'re caught halfway between rage and a post-orgasm endorphin rush. "You promised you wouldn\'t come inside me!"');
    } else {
      scene.text('"What the fuck!" you shout. "You promised you wouldn\'t come inside me!"');
    }
    if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You said I could come wherever I wanted," he pants back.');
      scene.text('"I meant anywhere except there," you grumble back.');
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"It felt too good," he pants. "Couldn\'t pull out."');
        scene.text('"Don\'t you have any idea what a fucking promise is?!" you seethe. "Asshole!"');
      } else {
        scene.text('"Sorry," he pants sheepishly.');
        scene.text('"It\'s okay," you murmur back, unable to keep the smile from your voice.');
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['creampie_force'] === 1  &&  ((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      // TODO-QSP: dynamic text: "Thanks for asking," you pant, smiling mischievously at <<$npcdesc>>.
      scene.text(`"Thanks for asking," you pant, smiling mischievously at ${((st as any).npcdesc ?? '')}.`);
      qspCall(st, 'sex_ev_sex', 'sex_end');
    } else {
      if (((st as any).sex_ev ?? 0)?.['creampie_force'] === 1) {
        scene.text('"Thanks for asking," you say mischievously.');
        qspCall(st, 'sex_ev_sex', 'sex_end');
      } else {
        if (((st as any).sex_ev ?? 0)?.['came_together'] > 0  &&  ((st as any).npc_ask_creampie ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "Thanks for asking," you murmur, giving <<$npcdesc>> a blissful smile.
          scene.text(`"Thanks for asking," you murmur, giving ${((st as any).npcdesc ?? '')} a blissful smile.`);
          qspCall(st, 'sex_ev_sex', 'sex_end');
        } else {
          if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
            // TODO-QSP: dynamic text: "Thanks for asking," you murmur, giving <<$npcdesc>> a blissful smile.
            scene.text(`"Thanks for asking," you murmur, giving ${((st as any).npcdesc ?? '')} a blissful smile.`);
            qspCall(st, 'sex_ev_sex', 'sex_end');
          } else {
            if (((st as any).npc_ask_creampie ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
              scene.text('"Thanks for asking," you smile sweetly. "It means a lot to me."');
              scene.text('"Well, you wanted me to, didn\'t you?" he smiles back.');
              qspCall(st, 'sex_ev_sex', 'sex_end');
            } else {
              // TODO-QSP: dynamic text: "Thanks for asking permission," you say to <<$npcdesc>>. "It means a lot to me."
              scene.text(`"Thanks for asking permission," you say to ${((st as any).npcdesc ?? '')}. "It means a lot to me."`);
              if (((st as any).npc_dont_like_creampie ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
                scene.text('"I thought you didn\'t like creampies," he asks curiously.');
                scene.actions([
                  { label: 'Did it for you', handler: (st: GameState) => {
    scene.text('"I don\'t," you say, giving him a warm smile. "But I know you do."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
                  { label: 'Got used to it', handler: (st: GameState) => {
    ((st as any).npc_dont_like_creampie = (st as any).npc_dont_like_creampie ?? {})[String((st as any).npcID ?? 0)] = 0;
    scene.text('"I got used to it," you shrug. "I don\'t mind them so much anymore."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
                  { label: 'Changed my mind', handler: (st: GameState) => {
    ((st as any).npc_dont_like_creampie = (st as any).npc_dont_like_creampie ?? {})[String((st as any).npcID ?? 0)] = 0;
    ((st as any).npc_know_love_creampie = (st as any).npc_know_love_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"Changed my mind," you grin. "I like them now. So long as you ask."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
                  { label: 'Only when it\'s you', handler: (st: GameState) => {
    scene.text('"I like them now," you say, giving him a warm smile. "But only when it\'s you."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
                ]);
              } else {
                scene.text('"Thanks for letting me," he smiles back.');
                qspCall(st, 'sex_ev_sex', 'sex_end');
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
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: "Hey..." You look up at <<$npcdesc>>, still shivering from your orgasm. "I thoug...
      scene.text(`"Hey..." You look up at ${((st as any).npcdesc ?? '')}, still shivering from your orgasm. "I thought I told you not to come inside me..."`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: "Hey..." You look back at <<$npcdesc>>, still shivering from your orgasm. "I tho...
        scene.text(`"Hey..." You look back at ${((st as any).npcdesc ?? '')}, still shivering from your orgasm. "I thought I told you not to come inside me..."`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/1.jpg');
          // TODO-QSP: dynamic text: "Hey..." You lay down, resting on <<$npcdesc>>''s chest, still shivering from yo...
          scene.text(`"Hey..." You lay down, resting on ${((st as any).npcdesc ?? '')}'s chest, still shivering from your orgasm. "I thought I told you not to come inside me..."`);
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You said I could come wherever I wanted," he pants back.');
      scene.text('"I meant anywhere except there," you murmur back, unable to keep the smile from your voice.');
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"It felt too good," he pants. "Couldn\'t pull out."');
        scene.text('"I don\'t think I can disagree," you murmur back, unable to keep the smile from your voice.');
      } else {
        scene.text('"Sorry," he pants sheepishly.');
        scene.text('"It\'s okay," you murmur back, unable to keep the smile from your voice.');
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: '(Annoyed)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: "Hey..." You try to glare at <<$npcdesc>>, though it''s difficult while still sh...
      scene.text(`"Hey..." You try to glare at ${((st as any).npcdesc ?? '')}, though it's difficult while still shivering from your orgasm. "I thought I told you not to come inside me..."`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: "Hey..." You try to glare at <<$npcdesc>>, though it''s difficult while still sh...
        scene.text(`"Hey..." You try to glare at ${((st as any).npcdesc ?? '')}, though it's difficult while still shivering from your orgasm. "I thought I told you not to come inside me..."`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/1.jpg');
          // TODO-QSP: dynamic text: "Hey..." You lay down, resting on <<$npcdesc>>''s chest, still shivering from yo...
          scene.text(`"Hey..." You lay down, resting on ${((st as any).npcdesc ?? '')}'s chest, still shivering from your orgasm. "I thought I told you not to come inside me..."`);
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
      scene.text('"You said I could come wherever I wanted," he pants back.');
      scene.text('"I meant anywhere except there," you grumble back.');
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"It felt too good," he pants. "Couldn\'t pull out."');
        scene.text('"That\'s no excuse," you grumble.');
      } else {
        scene.text('"Sorry," he pants sheepishly.');
        scene.text('"It\'s okay," you murmur back, unable to keep the smile from your voice.');
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/2.jpg');
        }
      }
    }
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Finally break up with your shitty boyfriend?" <<$npcdesc>> grins, panting.
      scene.text(`"Finally break up with your shitty boyfriend?" ${((st as any).npcdesc ?? '')} grins, panting.`);
      if ((!((st as any).pcs_lover ?? 0))) {
        scene.actions([
          { label: 'Yeah', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 0;
    scene.text('"Yeah," you smile back. "I\'m single again. Which means all the creampies in the world for me. At least until I start dating again."');
    scene.text('You give him a wink.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'Get sad', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 0;
    scene.text('An ache immediately pulses inside your chest.');
    scene.text('"Yeah..." you mumble, turning your head. "It was a bad breakup..."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
      // TODO-QSP: dynamic text: "Finally decided to let a real man fill you up, huh?" <<$npcdesc>> grins, pantin...
      scene.text(`"Finally decided to let a real man fill you up, huh?" ${((st as any).npcdesc ?? '')} grins, panting.`);
      if ((!((st as any).pcs_lover ?? 0))) {
        scene.actions([
          { label: 'I\'m single now', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 0;
    scene.text('"My boyfriend and I broke up," you smile back. "Which means I\'m single again. Which means all the creampies in the world for me. At least until I get a new boyfriend."');
    scene.text('You wink.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
      // TODO-QSP: end !}
      scene.actions([
        { label: 'Changed my rules', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 3;
    scene.text('"No, we\'re still together. But I decided to change my rules," you smile.');
    scene.actions([
      { label: 'Only emotional cheating counts', handler: (st: GameState) => {
    scene.text('"It\'s only cheating if I\'m emotionally involved with you. Since I\'m only using you for sex, it doesn\'t count!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'No kissing', handler: (st: GameState) => {
    ((st as any).npc_no_kiss = (st as any).npc_no_kiss ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"It\'s only cheating if I kiss you. As long as we\'re just fucking each other\'s brains out, I\'m not cheating!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'No anal', handler: (st: GameState) => {
    ((st as any).npc_no_anal = (st as any).npc_no_anal ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"It\'s only cheating if I let you fuck my ass. That\'s reserved for boyfriends and husbands. So as long as we don\'t do that, it\'s not cheating!"');
    // TODO-QSP: dynamic text: "It''s usually the other way around, isn''t it?" <<$npcdesc>> snickers
    scene.text(`"It's usually the other way around, isn't it?" ${((st as any).npcdesc ?? '')} snickers`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
        { label: 'I\'m cheating', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 3;
    scene.text('"No, we\'re still together," you smile. "But I decided to start cheating on him."');
    scene.text('You wink.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I thought," <<$npcdesc>> pants. "You said I wasn''t allowed to come inside you?...
      scene.text(`"I thought," ${((st as any).npcdesc ?? '')} pants. "You said I wasn't allowed to come inside you? Something about your boyfriend?"`);
      if ((!((st as any).pcs_lover ?? 0))) {
        scene.actions([
          { label: 'I\'m single now', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 0;
    scene.text('"My boyfriend and I broke up," you smile back. "Which means I\'m single again. Which means all the creampies in the world for me. At least until I get a new boyfriend."');
    scene.text('You wink.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
      scene.actions([
        { label: 'Changed my rules', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 3;
    scene.text('"I decided to change my rules," you smile.');
    scene.actions([
      { label: 'Only emotional cheating counts', handler: (st: GameState) => {
    scene.text('"It\'s only cheating if I\'m emotionally involved with you. Since I\'m only using you for sex, it doesn\'t count!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'No kissing', handler: (st: GameState) => {
    ((st as any).npc_no_kiss = (st as any).npc_no_kiss ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"It\'s only cheating if I kiss you. As long as we\'re just fucking each other\'s brains out, I\'m not cheating!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'No anal', handler: (st: GameState) => {
    ((st as any).npc_no_anal = (st as any).npc_no_anal ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"It\'s only cheating if I let you fuck my ass. That\'s reserved for boyfriends and husbands. So as long as we don\'t do that, it\'s not cheating!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
        { label: 'I\'m cheating', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 3;
    scene.text('"Well, the thing is..." you say, letting a smile creep onto your face. "I decided to start cheating on him. So you can come inside me all you want..."');
    scene.text('You wink.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ignore the question', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTogetherYeah(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'Yeah', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['cum_together_fake'] === 0) {
      // TODO-QSP: dynamic text: "Yeah..." you smile back. You choose to let the moment speak for itself and don'...
      scene.text(`"Yeah..." you smile back. You choose to let the moment speak for itself and don't say anything more. It seems ${((st as any).npcdesc ?? '')} feels the same way as he rests with you, his cock still inside you but neither of you in a hurry to change it.`);
    } else {
      // TODO-QSP: dynamic text: "Yeah..." you smile. You choose to keep your lies to a minimum and leave it at t...
      scene.text(`"Yeah..." you smile. You choose to keep your lies to a minimum and leave it at that. ${((st as any).npcdesc ?? '')} seems happy enough and smiles back at you, content with his cock resting inside you.`);
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampiePullOutImage(s: GameState, scene: SceneBuilder): void {
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
  // TODO-QSP: end
  scene.build();
}

function enterCreampieFeltGreat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] !== 1) {
    scene.actions([
      { label: 'That felt great', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
      if (((st as any).orgasm ?? 0) > ((st as any).sex_ev ?? 0)?.['orgasm']) {
        if (((st as any).sex_ev ?? 0)?.['came_together'] === 1  ||  ((st as any).sex_ev ?? 0)?.['came_together'] === 3) {
          scene.text('"That felt great," you pant, aftershocks of your orgasm still shivering through you, enjoying the feeling of cum draining from your pussy.');
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((st as any).npcdesc ?? '')} just smiles tiredly back at you.`);
        } else {
          scene.text('"That was..." you pant, aftershocks of your orgasm still shivering through you, cum draining from your pussy. "Did we... together...?"');
          scene.text('"Yeah..." he breathes back.');
          scene.text('"I thought so," you smile. "That was incredible..."');
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
          // TODO-QSP: dynamic text: "That felt great," you smile, beaming at <<$npcdesc>>.
          scene.text(`"That felt great," you smile, beaming at ${((st as any).npcdesc ?? '')}.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['cum_together_fake'] === 1) {
            scene.text('"That was..." you pant, dramatically feigning post-orgasm shakes, letting the cum drain from your pussy. "I could... feel you... -<i>gasp</i>- inside me..."');
          } else {
            scene.text('"That was amazing," you gush, enjoying the feeling of cum draining from your pussy. "I could <i>feel</i> you coming inside me. It felt so good!"');
          }
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((st as any).npcdesc ?? '')} just smiles tiredly back at you.`);
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
      if (((st as any).orgasm ?? 0) > ((st as any).sex_ev ?? 0)?.['orgasm']) {
        if (((st as any).sex_ev ?? 0)?.['came_together'] === 1  ||  ((st as any).sex_ev ?? 0)?.['came_together'] === 3) {
          // TODO-QSP: dynamic text: "It felt good," you pant, aftershocks of your orgasm still shivering through you...
          scene.text(`"It felt good," you pant, aftershocks of your orgasm still shivering through you, enjoying the feeling being filled by both ${((st as any).npcdesc ?? '')}'s cum and his cock.`);
          scene.text('"Yeah?" he pants back.');
          scene.text('"Yeah... Really really good..."');
          // TODO-QSP: dynamic text: <<$npcdesc>> just smiles tiredly back at you.
          scene.text(`${((st as any).npcdesc ?? '')} just smiles tiredly back at you.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['cum_together_fake'] === 1) {
            scene.text('"That was..." you pant, aftershocks of your orgasm still shivering through you, cum draining from your pussy. "Did we... together...?"');
            scene.text('"Yeah..." he breathes back.');
            scene.text('"I thought so," you smile. "I could feel it inside me. It was <i>amazing</i>..."');
          } else {
            scene.text('"That was..." you pant, aftershocks of your orgasm still shivering through you. "I just... Did you... did we... together...?"');
            scene.text('"Yeah..." he breathes back.');
            scene.text('"I thought so," you smile. "I could feel you inside me. It was <i>amazing</i>..."');
          }
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
          // TODO-QSP: dynamic text: "That felt great," you smile, beaming at <<$npcdesc>>, squeezing him with your p...
          scene.text(`"That felt great," you smile, beaming at ${((st as any).npcdesc ?? '')}, squeezing him with your pussy.`);
        } else {
          // TODO-QSP: dynamic text: "That was great," you grin, gently flexing your pussy around <<$npcdesc>>''s coc...
          scene.text(`"That was great," you grin, gently flexing your pussy around ${((st as any).npcdesc ?? '')}'s cock, still stuffed inside you with all of his cum. "I could <i>feel</i> when you came inside me. It felt so good!"`);
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/miss/2.jpg">...
      if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
        if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
          scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and marvelling at the warmth you feel inside your hips.');
        } else {
          scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and savouring the warmth as much as you can, even as it spills from your snatch.');
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
          scene.text('"I feel... <i>full</i>..." you murmur, gently rubbing your belly and marvelling at the warmth you feel inside your hips.');
        } else {
          scene.text('"I feel... <i>full</i>..." you murmur, gently rubbing your belly and savouring the warmth as much as you can, even as it spills from your snatch.');
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
        if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
          if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
            scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and marvelling at the warmth you feel inside your hips.');
          } else {
            scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and savouring the warmth as much as you can, even as it runs from your snatch.');
          }
        } else {
          if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
            scene.text('"I feel... <i>full</i>..." you murmur, marvelling at the warmth you feel between your hips.');
          } else {
            scene.text('"I feel... <i>full</i>..." you murmur, savouring the warmth as much as you can even as it spills from your snatch.');
          }
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/cowgirl/3.jp...
          if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
            if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
              scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and marvelling at the warmth you feel inside your hips.');
            } else {
              scene.text('"I feel... <i>full</i>..." you gulp, shivering with orgasmic aftershocks and savouring the warmth as much as you can, even as it spills from your snatch.');
            }
          } else {
            if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
              scene.text('"I feel... <i>full</i>..." you murmur, gently rubbing your belly and marvelling at the warmth you feel inside your hips.');
            } else {
              scene.text('"I feel... <i>full</i>..." you murmur, gently rubbing your belly and savouring the warmth as much as you can, even as it spills from your snatch.');
            }
          }
        }
      }
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterLoveCreampies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_creampie'] !== 1) {
    if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'I love it when you come inside', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/miss/2.jpg">...
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/cowgirl/1.jp...
        }
      }
    }
    if (((st as any).npc_know_love_creampie ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
        scene.text('"I love it when you come inside me," you smile, shivering with orgasmic aftershocks.');
      } else {
        scene.text('"I love it when you come inside me," you smile.');
      }
      if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
        scene.text('"I love coming inside you," he smiles back.');
      } else {
        scene.text('"I know," he smirks back.');
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I love creampies', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/miss/2.jpg">...
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/1.jpg"...
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, '<center><img <<$set_imgh>> src="images/shared/sex/vag/cowgirl/1.jp...
        }
      }
    }
    ((st as any).npc_know_love_creampie = (st as any).npc_know_love_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"I love how it feels when a guy comes inside me," you sigh contently, still giddy from your orgasm. "It always makes me come too."');
    } else {
      scene.text('"I love how it feels when a guy comes inside me," you sigh contently. "Something about it just turns me on so much."');
    }
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      // TODO-QSP: $pc_cum_pref_know[$npcID] = $npc_cum_pref[$npcID]
      scene.text('"Coming inside is always the best," he says, looking at you. "We must be made to match."');
      scene.text('"Must be," you say back, giving him a smile.');
    } else {
      scene.text('"Maybe I should come inside you more often then."');
      scene.text('"Yes," you nod, smiling. "You definitely should."');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTogetherKiss(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  ||  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0)  &&  ((s as any).sex_ev ?? 0)?.['cum_together_fake'] === 0  &&  ((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: iif($sex_ev['position'] = 'cowgirl', '<center><img <<$set_imgh>> src="images/shared/sex/vag/cowgirl/...
      // TODO-QSP: dynamic text: Overwhelmed with endorphins and emotion, you lean into <<$npcdesc>> and kiss him...
      scene.text(`Overwhelmed with endorphins and emotion, you lean into ${((st as any).npcdesc ?? '')} and kiss him. In the afterglow of your simultaneous orgasm and his cum flowing from your pussy, intertwining your lips with his just feels... <i>right.</i>`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/kiss1.jpg');
        // TODO-QSP: dynamic text: Overwhelmed with endorphins and emotion, you wrap your arms around <<$npcdesc>> ...
        scene.text(`Overwhelmed with endorphins and emotion, you wrap your arms around ${((st as any).npcdesc ?? '')} and kiss him. After coming together, still being filled by his cock and his cum, kissing like this just feels... <i>right.</i>`);
      } else {
        scene.img('images/shared/sex/vag/cowgirl/kiss1.jpg');
        // TODO-QSP: dynamic text: Overwhelmed with endorphins and emotion, you move your head over to <<$npcdesc>>...
        scene.text(`Overwhelmed with endorphins and emotion, you move your head over to ${((st as any).npcdesc ?? '')}'s and kiss him. After coming together, still being filled by his cock and his cum, kissing like this just feels... <i>right.</i>`);
      }
    }
    if (((st as any).npc_no_kiss ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      ((st as any).npc_no_kiss = (st as any).npc_no_kiss ?? {})[String((st as any).npcID ?? 0)] = 2;
      scene.text('"I thought you said no kissing," he smiles, breaking the kiss.');
      scene.actions([
        { label: 'Changed my mind', handler: (st: GameState) => {
    scene.text('"I changed my mind," you smile back, kissing him again.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Couldn\'t resist', handler: (st: GameState) => {
    scene.text('"I couldn\'t resist," you smile back, kissing him again. "You made me feel too good."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'You earned it', handler: (st: GameState) => {
    scene.text('"You earned it," you smile back, kissing him again.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Shut up', handler: (st: GameState) => {
    scene.text('"Shut up," you smile, and kiss him again.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      ((st as any).npc_no_kiss = (st as any).npc_no_kiss ?? {})[String((st as any).npcID ?? 0)] = 2;
      scene.text('He returns the kiss eagerly and your entire body tingles with pleasure. The warmth of his cum inside you, his cock still filling you up, and his lips on yours create a mixture of indescribable satisfaction inside you.');
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTogetherBest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
    scene.actions([
      { label: 'Simultaneous orgasms are the best', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/smile1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/vag/doggy/smile1.jpg');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: "Simultaneous orgasm are the best," you pant, giving <<$npcdesc>> a tired smile.
    scene.text(`"Simultaneous orgasm are the best," you pant, giving ${((st as any).npcdesc ?? '')} a tired smile.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
      // TODO-QSP: dynamic text: "Sorry," you tease as you unlock your legs from behind <<$npcdesc>>. "I couldn''...
      scene.text(`"Sorry," you tease as you unlock your legs from behind ${((st as any).npcdesc ?? '')}. "I couldn't resist."`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        if (((st as any).sex_ev ?? 0)?.['came_together']) {
          // TODO-QSP: dynamic text: "Sorry," you pant, coming down from your own orgasm and sitting back on <<$npcde...
          scene.text(`"Sorry," you pant, coming down from your own orgasm and sitting back on ${((st as any).npcdesc ?? '')}'s cock, taking extreme pleasure in the way the movement <i>squeezes</i> cum around it inside you. "I couldn't resist."`);
        } else {
          // TODO-QSP: dynamic text: "Sorry," you tease, sitting back on <<$npcdesc>>''s cock, taking extreme pleasur...
          scene.text(`"Sorry," you tease, sitting back on ${((st as any).npcdesc ?? '')}'s cock, taking extreme pleasure in the way the movement <i>squeezes</i> cum around it inside you. "I couldn't resist."`);
        }
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlreadyCreampiedMe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 1  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0) {
    scene.actions([
      { label: 'Since you already came inside... (creampies okay)', handler: (st: GameState) => {
    scene.actions([
      { label: 'Happy', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You can keep coming inside me if you want," you smile at <<$npcdesc>>. "Since y...
    scene.text(`"You can keep coming inside me if you want," you smile at ${((st as any).npcdesc ?? '')}. "Since you already did it once, we might as well make the most of it..."`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Annoyed', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I guess there''s no point in pulling out anymore..." you sigh, scowling at <<$n...
    scene.text(`"I guess there's no point in pulling out anymore..." you sigh, scowling at ${((st as any).npcdesc ?? '')}. "Might as well just finish inside every time."`);
    if (((st as any).pc_cum_pref_know ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      // TODO-QSP: dynamic text: "You''re the best," <<$npcdesc>> smiles at you.
      scene.text(`"You're the best," ${((st as any).npcdesc ?? '')} smiles at you.`);
      scene.text('"Shut the fuck up," you roll your eyes in return.');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Casual', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You know, you can keep coming inside me if you want," you smile at <<$npcdesc>>...
    scene.text(`"You know, you can keep coming inside me if you want," you smile at ${((st as any).npcdesc ?? '')}. "Since you already did it once, a few more times probably won't make much difference."`);
    if (((st as any).pc_cum_pref_know ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      // TODO-QSP: dynamic text: "You''re the best," <<$npcdesc>> smiles at you.
      scene.text(`"You're the best," ${((st as any).npcdesc ?? '')} smiles at you.`);
      scene.text('"I know," you smirk in return.');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['reaction'] = 'startled';
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/shock1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        }
      }
    }
    // TODO-QSP: dynamic text: You gasp in surprise, freezing up as <<$npcdesc>>''s cock continues to pulse ins...
    scene.text(`You gasp in surprise, freezing up as ${((st as any).npcdesc ?? '')}'s cock continues to pulse inside you.`);
    if (((st as any).sex_ev ?? 0)?.['2pump'] === 1) {
      qspCall(st, 'sex_ev_cum', '2pumpchump_creampie');
    } else {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        qspCall(st, 'sex_ev_cum', 'cum_inside_pull_away');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInside(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    scene.actions([
      { label: 'Take it in stride', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['take_in_stride'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['reaction'] === 'startled') {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: After your momentary surprise, you take it in stride, smiling as you resume thro...
        scene.text(`After your momentary surprise, you take it in stride, smiling as you resume throwing your hips forward against ${((st as any).npcdesc ?? '')}'s, letting him fully ride out his orgasm inside you.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: After your momentary surprise, you take it in stride, smiling as you resume thro...
          scene.text(`After your momentary surprise, you take it in stride, smiling as you resume throwing your hips back against ${((st as any).npcdesc ?? '')}'s, letting him fully ride out his orgasm inside you.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: After your momentary surprise, you take it in stride, smiling as you resume roll...
            scene.text(`After your momentary surprise, you take it in stride, smiling as you resume rolling your hips over ${((st as any).npcdesc ?? '')}'s, letting him fully ride out his orgasm inside you.`);
          }
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: You take it in stride, smiling as you continue to throw your hips forward agains...
        scene.text(`You take it in stride, smiling as you continue to throw your hips forward against ${((st as any).npcdesc ?? '')}'s, letting him fully ride out his orgasm inside you.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: You take it in stride, smiling as you continue to throw your hips back against <...
          scene.text(`You take it in stride, smiling as you continue to throw your hips back against ${((st as any).npcdesc ?? '')}'s, letting him fully ride out his orgasm inside you.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: You take it in stride, smiling as you continue to roll your hips over <<$npcdesc...
            scene.text(`You take it in stride, smiling as you continue to roll your hips over ${((st as any).npcdesc ?? '')}'s, letting him fully ride out his orgasm inside you.`);
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(st, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDidYouComeInside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_force'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['came_together'] !== 3  &&  (((s as any).sex_ev ?? 0)?.['came_together'] < 3  ||  ((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
    scene.actions([
      { label: 'Did you just come inside me?', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['just_cum_inside_me'] = 1;
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 3;
    }
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/oops2.jpg');
        scene.text('"Did you just come inside me?" you ask somewhat rhetorically as you watch a stream of milky liquid trickle from your pussy.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
          scene.text('"Did you just come inside me?" you ask somewhat rhetorically as you feel liquid continue to drain from your snatch.');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
            scene.text('"Did you just come inside me?" you ask somewhat rhetorically as you watch a stream of milky liquid trickle from your pussy.');
          }
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['accidental_creampie_count'] > 1  &&  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((st as any).npc_free_creampies_count ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        scene.text('"Did you just come inside me?" you ask. "<i>Again?</i>"');
      } else {
        scene.text('"Did you just come inside me?" you ask.');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['2pump'] === 1) {
      scene.text('"Y-yeah..." he mumbles.');
      qspCall(st, 'sex_ev_reactions', '2pump_react');
    } else {
      if (((st as any).sex_ev ?? 0)?.['cum_warn'] === 1  &&  ((st as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
        // TODO-QSP: dynamic text: "I was trying to tell you," <<$npcdesc>> pants, breathing hard. "I was going to ...
        scene.text(`"I was trying to tell you," ${((st as any).npcdesc ?? '')} pants, breathing hard. "I was going to come... But you weren't listening..."`);
        scene.actions([
          { label: 'Take it in stride', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThatExplains(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThoughtSo(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulloutGameTease(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'quickshot_tease1');
  } },
        ]);
      } else {
        if ((((st as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((st as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] > 0) {
          scene.text('"Yeah. You squeezed it right out of me," he says with a satisfied sigh.');
          scene.actions([
            { label: 'Take it in stride', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieJustChecking(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThatExplains(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltGreat(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'quickshot_tease1');
  } },
          ]);
        } else {
          if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will'  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
            scene.text('"Yeah," he sighs beatifically.');
            scene.actions([
              { label: 'Take it in stride', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAccidentFine(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieJustChecking(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThatExplains(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThoughtSo(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltGreat(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulloutGameTease(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'quickshot_tease1');
  } },
            ]);
          } else {
            if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
              scene.text('"Yeah." he sighs with a beatific smile. "You\'re on birth control, right?"');
              scene.actions([
                { label: 'Take it in stride', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAccidentFine(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieJustChecking(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThatExplains(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThoughtSo(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltGreat(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulloutGameTease(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'quickshot_tease1');
  } },
              ]);
            } else {
              if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
                scene.text('"Yeah, your pussy was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
                scene.actions([
                  { label: 'Take it in stride', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAccidentFine(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieJustChecking(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThatExplains(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThoughtSo(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltGreat(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulloutGameTease(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'quickshot_tease1');
  } },
                ]);
              } else {
                if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
                  scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
                  scene.actions([
                    { label: 'Take it in stride', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAccidentFine(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieJustChecking(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThatExplains(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThoughtSo(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltGreat(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'quickshot_tease1');
  } },
                  ]);
                } else {
                  if (((st as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
                    if (((st as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
                      if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
                        if (((st as any).sex_ev ?? 0)?.['girl_orgasm'] === 0) {
                          // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I know I promised and I kno...
                          scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I know I promised and I know you said it's a danger day, but I couldn't hold it and- I swear! I didn't mean to!"`);
                        } else {
                          // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I know I promised and I kno...
                          scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I know I promised and I know you said it's a danger day, but you came and it felt so good and I couldn't hold it and- I'm so sorry!"`);
                        }
                      } else {
                        if (((st as any).sex_ev ?? 0)?.['girl_orgasm'] === 0) {
                          // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I know I promised I wouldn'...
                          scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I know I promised I wouldn't but I couldn't hold it and- I swear! I didn't mean to!"`);
                        } else {
                          // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I know I promised I wouldn'...
                          scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I know I promised I wouldn't, but you came and it felt so good and I couldn't hold it and- I'm <i>so</i> so sorry!"`);
                        }
                      }
                    } else {
                      if (((st as any).npc_ask_creampie ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
                        if (((st as any).sex_ev ?? 0)?.['girl_orgasm'] === 0) {
                          // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I know you told me to ask b...
                          scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I know you told me to ask but I couldn't hold it and- I'm <i>so</i> so sorry!"`);
                        } else {
                          // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I know you told me to ask b...
                          scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I know you told me to ask but you were cumming and I couldn't get your attention and I couldn't hold it and- I'm <i>so</i> so sorry!"`);
                        }
                      } else {
                        if (((st as any).sex_ev ?? 0)?.['girl_orgasm'] === 0) {
                          // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I didn''t mean to! I tried ...
                          scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I didn't mean to! I tried to hold it and- I'm <i>so</i> so sorry!"`);
                        } else {
                          // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I didn''t mean to! But you ...
                          scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I didn't mean to! But you came and it felt so good and I tried to hold it but- I'm <i>so</i> so sorry!"`);
                        }
                      }
                    }
                  } else {
                    // TODO-QSP: dynamic text: "I''m so sorry!" <<$npcdesc>> apologizes profusely. "I can''t believe I fucked u...
                    scene.text(`"I'm so sorry!" ${((st as any).npcdesc ?? '')} apologizes profusely. "I can't believe I fucked up again!"`);
                  }
                  scene.actions([
                    { label: 'Take it in stride', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAccidentFine(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieJustChecking(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThatExplains(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThoughtSo(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltGreat(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAskNextTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulloutGameTease(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'quickshot_tease1');
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((st as any).sex_ev ?? 0)?.['creampie_ask'] !== 1) {
      if (((st as any).birth_control ?? 0)?.['think_safe'] === 0) {
        scene.actions([
          { label: 'Panic', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOhShitOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFreakout(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterIdkYouPanicAfter(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Get angry', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfAfter(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterToldYouNotToCreampie(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieGross(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieAccidentBirthControl(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstCreampie(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDelayedCreampieOrgasm1(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((st as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
      scene.actions([
        { label: 'Take the blame (cowgirl)', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/3.jpg');
    scene.text('"I think this one might be on me," you admit, looking down between your legs ruefully. "It\'s probably hard to get a girl\'s attention to pull out when she\'s coming all over your cock."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDidYouComeInsideStride(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take it in stride', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThatExplains(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieThoughtSo(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['cum_wherever'] !== 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulloutGameTease(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    qspCall(st, 'sex_ev_reactions', 'quickshot_tease1');
  } },
  ]);
  scene.build();
}

function enterDelayedCreampieOrgasm1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).orgasm ?? 0) === ((s as any).sex_ev ?? 0)?.['orgasm']  &&  ((s as any).sex_ev ?? 0)?.['came_together'] === 0) {
    scene.actions([
      { label: 'Delayed creampie orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-1), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/orgasm1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
        }
      }
    }
    scene.text('An instant later, you suddenly find yourself intensely aware of the pool of heat filling up your insides and a thrill of euphoric spasms abruptly roll through your body, covering your skin in goosebumps and locking your mouth in a silent scream of beautiful agony.');
    // TODO-QSP: dynamic text: You cry your wordless cry, unable to do anything except tremble around <<$npcdes...
    scene.text(`You cry your wordless cry, unable to do anything except tremble around ${((st as any).npcdesc ?? '')}'s cock inside you.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: When your orgasm finally fades, you find <<$npcdesc>> looking down at you with a...
      scene.text(`When your orgasm finally fades, you find ${((st as any).npcdesc ?? '')} looking down at you with an utterly confused expression.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: When your orgasm finally fades, you find <<$npcdesc>> looking down at you with a...
        scene.text(`When your orgasm finally fades, you find ${((st as any).npcdesc ?? '')} looking down at you with an utterly confused expression.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          // TODO-QSP: dynamic text: When your orgasm finally fades, you find <<$npcdesc>> looking up at you with an ...
          scene.text(`When your orgasm finally fades, you find ${((st as any).npcdesc ?? '')} looking up at you with an utterly confused expression.`);
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((st as any).sex_ev ?? 0)?.['creampie_count'] === 1) {
      scene.text('"Is... is that what it feels like when a guy comes inside...?" you stammer breathlessly.');
      if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise'  &&  ((st as any).sex_ev ?? 0)?.['virgin_creampie_request'] !== 1) {
        scene.text('"Yeah..." he replies nervously.');
        scene.text('"Oh..." you mumble, too overwhelmed to be able to say anything else.');
      } else {
        if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie'  ||  ((st as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1) {
          scene.text('"Yeah," he smiles back. "Feels pretty good doesn\'t it?"');
          scene.text('You nod back, too overwhelmed to be able to say anything else.');
        } else {
          scene.text('"Yeah. Did you like it?"');
          scene.text('You nod back, too overwhelmed to be able to say anything else.');
        }
      }
      if (((st as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1) {
        scene.text('"So you\'re not mad?"');
        if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAccidentsHappen1(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltTooGood(st, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHavePlanB(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        qspCall(st, 'sex_ev_sex', 'sex_end');
      }
    } else {
      scene.text('"Surprise overrode my brain," you smile tiredly at him. "I was so surprised, I forgot to come for a second."');
      if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        scene.text('"Well you <i>did</i> say I could come wherever I wanted."');
        scene.text('"I guess I did," you chuckle softly. "But for some reason I didn\'t expect my pussy."');
        if (((st as any).pc_cum_pref_know ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
          scene.text('"Don\'t know why you\'d think that," he smirks back.');
        } else {
          scene.text('He smirks amusedly back at you.');
        }
        qspCall(st, 'sex_ev_sex', 'sex_end');
      } else {
        if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will') {
          scene.text('"Well you said I could come inside you whenever I wanted," he smirks back.');
          scene.text('"I just didn\'t expect it right then," you chuckle softly.');
          qspCall(st, 'sex_ev_sex', 'sex_end');
        } else {
          if (((st as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
            scene.text('"Well you said I could come inside you today," he smirks back.');
            if (((st as any).npc_free_creampies_count ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
              scene.text('"I guess I was just expecting you to warn me," you chuckle softly.');
            } else {
              scene.text('"I just didn\'t expect it right then," you chuckle softly.');
            }
            qspCall(st, 'sex_ev_sex', 'sex_end');
          } else {
            if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise'  &&  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1) {
              scene.text('"So you\'re not mad?"');
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAccidentsHappen1(st, scene); (st as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltTooGood(st, scene); (st as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNotMad(st, scene); (st as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterALittleMad(st, scene); (st as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFurious(st, scene); (st as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHavePlanB(st, scene); (st as any).locArgs = __savedLocArgs; }
            } else {
              qspCall(st, 'sex_ev_sex', 'sex_end');
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
  if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] <= 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0) {
    // TODO-QSP: dynamic text: "I- wait, you''re not mad?" <<$npcdesc>> asks in surprise.
    scene.text(`"I- wait, you're not mad?" ${((s as any).npcdesc ?? '')} asks in surprise.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAccidentsHappen1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieFeltTooGood(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNotMad(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterALittleMad(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieFurious(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieSafeDay(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHavePlanB(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieAskNextTime2(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).stat ?? 0)?.['total_creampies'] > ((s as any).sex_ev ?? 0)?.['creampie_count']) {
      scene.actions([
        { label: '"I love creampies"', handler: (st: GameState) => {
    ((st as any).npc_know_love_creampie = (st as any).npc_know_love_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"I love creampies," you grin back at him. "Why would I be mad?"');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
      scene.actions([
        { label: 'It\'s your own fault (cowgirl)', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
    scene.text('"It\'s not like you were the one doing the riding," you reply with an embarrassed smile. "I don\'t think I can be mad at you when it\'s my own fault."');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      ]);
    }
    scene.actions([
      { label: '"Why would I be mad?"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"No?" you reply. "Why would I be mad?"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    if (((st as any).sex_ev ?? 0)?.['accidents_happen'] === 0) {
      scene.text('"It was an accident, right?" you ask.');
      // TODO-QSP: iif(npc_selfish[$npcID] <> 1 and npc_abusive[$npcID] <= 0 and sex_ev['creampie_allowance'] = 0, '"Ye...
      scene.text('"Then it\'s okay. Accidents happen," you reply, smiling fondly at him.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
        scene.text('"I\'m already going to get a pill," you smirk amusedly. "What\'s one more creampie in that case?"');
      } else {
        scene.text('"I told you before didn\'t I? Accidents happen," you smile. "No big deal."');
      }
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['accidents_happen'] = 1;
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
  ]);
  scene.build();
}

function enterCreampieFeltTooGood(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Felt too good', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Felt too good to be mad," you sigh back. <<$npcdesc>> seems to take this as a g...
    scene.text(`"Felt too good to be mad," you sigh back. ${((st as any).npcdesc ?? '')} seems to take this as a good sign.`);
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
  ]);
  scene.build();
}

function enterCreampieAccidentFine(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['its_fine'] = 'Yeah';
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['its_fine'] = 'It\'s fine';
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['its_fine'] = 'Yeah';
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['its_fine'] = 'It\'s fine';
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => String((((s as any).sex_ev ?? 0)?.['its_fine'] ?? '') ?? ''), handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if ((((st as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((st as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] > 0) {
      scene.text('"Yeah. You said I could, didn\'t you?" he says with a satisfied sigh.');
      // TODO-QSP: dynamic text: "Yeah." That one word and your smile tells <<$npcdesc>> everything you have to s...
      scene.text(`"Yeah." That one word and your smile tells ${((st as any).npcdesc ?? '')} everything you have to say.`);
      qspCall(st, 'sex_ev_sex', 'sex_end');
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Yeah, your pussy was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
        scene.text('"Okay," you smile back. "It\'s fine. I was just asking."');
        qspCall(st, 'sex_ev_sex', 'sex_end');
      } else {
        if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
          // TODO-QSP: dynamic text: "Yeah." That one word and your smile tells <<$npcdesc>> everything you have to s...
          scene.text(`"Yeah." That one word and your smile tells ${((st as any).npcdesc ?? '')} everything you have to say.`);
          qspCall(st, 'sex_ev_sex', 'sex_end');
        } else {
          scene.text('"It\'s fine," you smile reassuringly.');
          if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(st, scene); (st as any).locArgs = __savedLocArgs; }
          } else {
            qspCall(st, 'sex_ev_sex', 'sex_end');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if ((((st as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((st as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] > 0) {
      scene.text('"Yeah. You said I could, didn\'t you?" he says with a satisfied sigh.');
      scene.text('"Mhm," you smile back. "I was just checking."');
      qspCall(st, 'sex_ev_sex', 'sex_end');
    } else {
      if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will'  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
        scene.text('"Yeah," he sighs beatifically.');
        scene.text('"Oh okay," you nod. "Just checking."');
        qspCall(st, 'sex_ev_sex', 'sex_end');
      } else {
        if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Yeah, your pussy was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
          scene.text('"Okay," you smile back. "I was just checking. Wasn\'t sure if you finished or not."');
          qspCall(st, 'sex_ev_sex', 'sex_end');
        } else {
          if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
            scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
            scene.text('"I didn\'t say it was a problem," you smile back. I was just checking."');
            qspCall(st, 'sex_ev_sex', 'sex_end');
          } else {
            scene.text('"Oh okay," you nod. "Just checking."');
            if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(st, scene); (st as any).locArgs = __savedLocArgs; }
            } else {
              qspCall(st, 'sex_ev_sex', 'sex_end');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['cum_warn'] === 1) {
      // TODO-QSP: dynamic text: "I was trying to tell you," <<$npcdesc>> pants, breathing hard. "I was going to ...
      scene.text(`"I was trying to tell you," ${((st as any).npcdesc ?? '')} pants, breathing hard. "I was going to come... But you weren't listening..."`);
      scene.text('"Ah. That explains it," you say, now being able to recognize the warmth filling up your insides as his cum.');
    } else {
      if ((((st as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((st as any).sex_ev ?? 0)?.['creampie_count'] === 1)  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] > 0) {
        scene.text('"Yeah. You said I could, didn\'t you?" he says with a satisfied sigh.');
        scene.text('"Ah. That explains it," you say, now being able to recognize the warmth filling up your insides as his cum.');
        qspCall(st, 'sex_ev_sex', 'sex_end');
      } else {
        if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will'  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
          scene.text('"Yeah," he sighs beatifically.');
          scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth filling up your insides as his cum.');
          qspCall(st, 'sex_ev_sex', 'sex_end');
        } else {
          if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
            scene.text('"Yeah, your pussy was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
            scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth filling up your insides as his cum.');
            qspCall(st, 'sex_ev_sex', 'sex_end');
          } else {
            if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
              scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
              scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth filling up your insides as his cum.');
              qspCall(st, 'sex_ev_sex', 'sex_end');
            } else {
              scene.text('"Ah. That explains it, " you say, now being able to recognize the warmth filling up your insides as his cum.');
              if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
                { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(st, scene); (st as any).locArgs = __savedLocArgs; }
              } else {
                qspCall(st, 'sex_ev_sex', 'sex_end');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will'  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
      scene.text('"Yeah," he sighs beatifically.');
      // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
      scene.text(`"Thought so," you say, nodding your head and smiling back at ${((st as any).npcdesc ?? '')}.`);
      qspCall(st, 'sex_ev_sex', 'sex_end');
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Yeah, your pussy was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
        // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
        scene.text(`"Thought so," you say, nodding your head and smiling back at ${((st as any).npcdesc ?? '')}.`);
        qspCall(st, 'sex_ev_sex', 'sex_end');
      } else {
        if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
          // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
          scene.text(`"Thought so," you say, nodding your head and smiling back at ${((st as any).npcdesc ?? '')}.`);
          qspCall(st, 'sex_ev_sex', 'sex_end');
        } else {
          // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
          scene.text(`"Thought so," you say, nodding your head and smiling back at ${((st as any).npcdesc ?? '')}.`);
          if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(st, scene); (st as any).locArgs = __savedLocArgs; }
          } else {
            qspCall(st, 'sex_ev_sex', 'sex_end');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will'  ||  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
      scene.text('"Yeah," he sighs beatifically.');
      // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
      scene.text(`"Thought so," you say, nodding your head and smiling back at ${((st as any).npcdesc ?? '')}.`);
      qspCall(st, 'sex_ev_sex', 'sex_end');
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Yeah, your pussy was so tight," he sighs with a beatific smile. "Couldn\'t help it."');
        // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
        scene.text(`"Thought so," you say, nodding your head and smiling back at ${((st as any).npcdesc ?? '')}.`);
        qspCall(st, 'sex_ev_sex', 'sex_end');
      } else {
        if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
          scene.text('"You said I could come wherever I wanted," he says, smiling beatifically.');
          // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
          scene.text(`"Thought so," you say, nodding your head and smiling back at ${((st as any).npcdesc ?? '')}.`);
          qspCall(st, 'sex_ev_sex', 'sex_end');
        } else {
          // TODO-QSP: dynamic text: "Thought so," you say, nodding your head and smiling back at <<$npcdesc>>.
          scene.text(`"Thought so," you say, nodding your head and smiling back at ${((st as any).npcdesc ?? '')}.`);
          if (((st as any).sex_ev ?? 0)?.['just_cum_inside_me'] === 1) {
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidYouComeInsideBoyReact1(st, scene); (st as any).locArgs = __savedLocArgs; }
          } else {
            qspCall(st, 'sex_ev_sex', 'sex_end');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/cum/vagcreampie/drip2.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/smile1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['pullout_game'] === 1) {
      scene.text('"Maybe I should be," you say. "After all that talk about your pullout game..."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
        scene.text('"Maybe I should be," you say. "After all, you <i>did</i> just blow your load inside me, and right after you promised you wouldn\'t..."');
      } else {
        if (((st as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
          scene.text('"Maybe I should be," you say. "After all, you <i>did</i> just blow your load inside me, right after talking me into not using a condom..."');
        } else {
          scene.text('"Maybe I should be," you say. "After all, you <i>did</i> just blow your load inside me without even asking me..."');
        }
      }
    }
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 0, 'You lay back on the bed, looking up at <<$npcdesc>>, feeling his c...
    // TODO-QSP: dynamic text: 'But no," you say. "I''m not mad. You didn''t mean to and' + iif(sex_ev['came_to...
    scene.text('But no," you say. "I\'m not mad. You didn\'t mean to and' + ((((st as any).sex_ev ?? 0)?.['came_together'] > 0) ? (' I think you\'d know I was lying if I said it didn\'t feel good.') : (' ')) + `I won't hold it against you." You let your face light up with a smile and ${((st as any).npcdesc ?? '')} breathes a sigh of relief, letting himself smile as well.`);
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
  ]);
  scene.build();
}

function enterALittleMad(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m a little mad', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/cum/vagcreampie/drip2.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/smile1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
      scene.text('"Well, I am a <i>little</i> mad," you say, letting a hard edge creep into your voice. "After all, you <i>did</i> just blow your load inside me, right after you promised you wouldn\'t come inside..."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
        scene.text('"Well, I am a <i>little</i> mad," you say, letting a hard edge creep into your voice. "After all, you <i>did</i> just blow your load inside me, right after talking me into not using a condom..."');
      } else {
        scene.text('"Well, I am a <i>little</i> mad," you say, letting a hard edge creep into your voice. "After all, you did just blow your load into me without even having the common fucking decency of asking."');
      }
    }
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 0, 'You lay back on the bed, looking up at <<$npcdesc>>, feeling his c...
    // TODO-QSP: dynamic text: 'But..." you say. ' + iif(sex_ev['came_together'] > 0, '"It felt really good too...
    scene.text('But..." you say. ' + ((((st as any).sex_ev ?? 0)?.['came_together'] > 0) ? ('"It felt really good too. If you hadn\'t made me come, then I\'d probably be beating the shit out of you right now. But you did, so you get off easy this time."') : ('"Everybody makes mistakes. So I\'ll let you off easy this time."')) + `You give ${((st as any).npcdesc ?? '')} a gentle punch on the arm and let your face light up with a smile. ${((st as any).npcdesc ?? '')} breathes a sigh of relief, letting himself smile as well.`);
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
  ]);
  scene.build();
}

function enterCreampieFurious(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m furious!', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/after/annoyed1.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/shock1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/2.jpg');
          }
        }
      }
    }
    scene.text('"Mad?" you scoff. "I\'m fucking furious!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> cringes as you glare at him with all the anger you can muster.
    scene.text(`${((st as any).npcdesc ?? '')} cringes as you glare at him with all the anger you can muster.`);
    if (((st as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1  &&  ((st as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
      scene.text('"First," you say, jabbing your finger at him in accusation. "I ask you to use a condom. Then you talk me into skipping it, saying \'oh, it\'ll be okay, it\'s just this one time\' and like a moron, I listened to you. And <i>then</i> right after you promise not to come inside me, you fucking come inside me anyways!" By the time you\'re finished with your rant, you\'re practically shouting.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
        scene.text('"First," you say, jabbing your finger at him in accusation. "I ask you to use a condom. Then you talk me into skipping it, saying \'oh, it\'ll be okay, it\'s just this one time\' and like a moron, I listened to you. And <i>then</i> you fucking come inside me anyways!" By the time you\'re finished with your rant, you\'re practically shouting.');
      } else {
        scene.text('"Who the fuck do you think you are? Blowing your load like that inside me without warning?!" you say, jabbing your finger at him in accusation. "Did you even <i>think</i> about what you are doing? What if I\'m not on birth control? What if you\'re not clean? What if I DON\'T FUCKING WANT YOU TO FUCKING COME INSIDE ME?! DON\'T I GET A CHOICE SINCE IT\'S MY FUCKING PUSSY THAT YOU\'RE FUCKING?!" By the time you\'re finished with your rant, you\'re practically shouting.');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"The only reason I\'m not tearing your head off right now is because you somehow managed to make <i>me</i> come in the middle of all of that and if I kill you over this, I\'ll feel like a hypocrite. So count yourself lucky, fuckass." You finish with a <i>harumph</i>, sitting down on the bed with enough force to make the frame shake.');
    }
    if (((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum']  ||  (Math.floor(Math.random() * 10) + 1) > ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
      qspCall(st, 'sex_ev_after', 'after_sex1');
    } else {
      // TODO-QSP: dynamic text: You spend the next minute or so in silence fuming before <<$npcdesc>> gets your ...
      scene.text(`You spend the next minute or so in silence fuming before ${((st as any).npcdesc ?? '')} gets your attention.`);
      scene.text('"So... did you want to keep going?" he asks awkwardly.');
      scene.actions([
        { label: 'We\'re done', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['angry_after'] = 1;
    scene.text('"Are you fucking kidding me?" you scoff. "No, we\'re done fucking now."');
    qspCall(st, 'sex_ev_after', 'after_sex1');
  } },
        { label: 'Sure (grumble)', handler: (st: GameState) => {
    scene.text('"Sure," you grumble and get back into position.');
    qspCall(st, 'sex_ev_sex', 'reset');
    qspCall(st, 'sex_ev_sex', 'sex_menu');
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieWtfImage3(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieWtfImage3(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieWtfImage3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieWtfInstant(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] !== 2  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
    scene.actions([
      { label: 'What the fuck!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['mad'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_wtf'] = ((st as any).sex_ev['creampie_wtf'] ?? 0) + (1);
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage1(st, scene); (st as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: "What the fuck!" you scream, frantically trying to pull <<$npcdesc>>''s cock out...
      scene.text(`"What the fuck!" you scream, frantically trying to pull ${((st as any).npcdesc ?? '')}'s cock out of you, trying to push him away, trying to stop him from filling your pussy with cum, even though you know it's already too late. His cock pulses inside you, each twitch bringing another sensation of liquid shooting into your womb. But panic isn't logical and you do everything you can to try to change the past.`);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('"What the fuck!" you scream, openly gaping at the cum flowing from your pussy.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieWtfAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] !== 2  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
    scene.actions([
      { label: 'What the fuck!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['mad'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_wtf'] = ((st as any).sex_ev['creampie_wtf'] ?? 0) + (1);
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage1(st, scene); (st as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: "What the fuck! What the fuck did you do?" you scream, frantically trying to pul...
      scene.text(`"What the fuck! What the fuck did you do?" you scream, frantically trying to pull ${((st as any).npcdesc ?? '')}'s cock out of you, trying to push him away, even though you know it's too late. The warmth inside you has already spread through your hips and your pussy feels very <i>full</i>. But panic isn't logical and you do everything you can to try to change the past.`);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('"What the fuck!" you scream, openly gaping at the cum flowing from your pussy.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: iif(sex_ev['cock_inserted'] = 1, 'When <<$npcdesc>> finally lets his cock slip from your pussy, the ...
    // TODO-QSP: '"You said you''d pull out!" you hiss.' + iif(sex_ev['creampie_count'] = 1, '', ' "How many times ar...
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfNoBc(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyCreampieReact(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieWtfNoBc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieAgain(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieAskFirst(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterIdkYouMad(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'You asshole!', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: '"You asshole!" ' + iif(sex_ev['cock_inserted'] = 1, 'you shout as <<$npcdesc>> finally lets his coc...
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1)) {
      if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, not looking sorry at all. "It just felt too good. I ...
        scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} says, not looking sorry at all. "It just felt too good. I couldn't help it."`);
      } else {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, not looking sorry at all. "It just kinda happened."
        scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} says, not looking sorry at all. "It just kinda happened."`);
      }
    } else {
      scene.text('"Fuck! I know! I\'m so sorry! " he says, looking ashamed. "It was an accident! I swear! I didn\'t mean to!"');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfNoBc(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCreampieWtfEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"Ugh," you grumble, choosing to take the high road on this one. "Whatever."');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
    { label: 'You\'re an asshole', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"You\'re a fucking asshole, you know that?" you sneer.');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
  ]);
  scene.build();
}

function enterCreampieForgive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Forgive him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['forgive_creampie'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You take a deep breath and close your eyes, feeling the cum continue trickling out of you.');
    if (((st as any).sex_ev ?? 0)?.['accidental_creampie'] >= 1) {
      scene.text('"It\'s... fine I guess," you sigh. "If it was really an accident, I forgive you."');
    } else {
      scene.text('"I guess I can forgive you this time..." you sigh. "I don\'t feel like being angry right now."');
    }
    qspCall(st, 'sex_ev_cum', 'what_now');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['forgive_creampie'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You take a deep breath and close your eyes, feeling the cum continue trickling out of you.');
    scene.text('"It\'s... fine I guess," you sigh. "If it was really an accident, I forgive you."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Begrudging', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['forgive_creampie'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You take a deep breath and close your eyes, feeling the cum continue trickling out of you.');
    scene.text('"It\'s... fine I guess," you sigh. "If it was really an accident, I forgive you."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCreampieWtfNoBc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
    scene.actions([
      { label: 'I\'m not on birth control!', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: iif(npc_know_not_bc[$npcID] = 1, '"You know I''m not on birth control you fucking moron!" you hiss b...
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((st as any).sex_ev ?? 0)?.['ma_pill_tomorrow'] === 1) {
      if ((((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
        scene.text('"So what? You said you were gonna get the pill tomorrow anyways."');
      } else {
        scene.text('"But you\'re gonna get the pill tomorrow, right?"');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['pc_skip_the_condom'] === 1) {
        if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'hate');
          // TODO-QSP: dynamic text: "Then why didn''t you want to use a <i>fucking condom?</i>" <<$npcdesc>> shouts ...
          scene.text(`"Then why didn't you want to use a <i>fucking condom?</i>" ${((st as any).npcdesc ?? '')} shouts back, now looking equally as agitated as you.`);
        } else {
          scene.text('"Should\'ve asked to use a condom then," he shrugs.');
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyCreampieReact(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAgain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_wtf'] > 1) {
    scene.actions([
      { label: 'Again?!', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: '"<i>Again?!</i>" ' + iif(sex_ev['cock_inserted'] = 1, ' you screech as <<$npcdesc>> finally lets hi...
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1)) {
      scene.text('"Your pussy\'s just too tight," he says, not looking even slightly sorry for his actions. "It keeps sucking me in."');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> cringes, looking as guilty as you think he is.
      scene.text(`${((st as any).npcdesc ?? '')} cringes, looking as guilty as you think he is.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfNoBc(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'No self control?!', handler: (st: GameState) => {
    scene.text('"How fucking hard is it to keep your cum out of my pussy?" you glare, seething. "Do you not have <i>any</i> self control? Just fucking pull out!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAskFirst(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([
      { label: 'I told you to ask!', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: '"I thought I fucking told you to ask!" ' + iif(sex_ev['cock_inserted'] = 1, ' you hiss as <<$npcdes...
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1)) {
      if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"Don\'t be such a bitch," he says, rolling his eyes. "You\'re on birth control anyways. Why does it matter?"');
      } else {
        if (((st as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
          scene.text('"So? You said you had a morning after pill, right?"');
        } else {
          if (((st as any).sex_ev ?? 0)?.['ma_pill_tomorrow'] === 1) {
            scene.text('"What does it matter? You said you were gonna get the pill tomorrow anyways."');
          } else {
            if ((Math.floor(Math.random() * 2) + 0) === 1) {
              scene.text('"Oh, you\'ll be fine," he grunts dismissively. "It\'s just one cumshot. Don\'t get bent out of shape. It\'s not gonna kill you."');
            } else {
              scene.text('"Your pussy\'s just too tight," he says, not looking even slightly sorry for his actions. "It keeps sucking me in."');
            }
          }
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> cringes, looking as guilty as you think he is.
      scene.text(`${((st as any).npcdesc ?? '')} cringes, looking as guilty as you think he is.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNotCreampiePass(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'You need to ask first!', handler: (st: GameState) => {
    ((st as any).npc_ask_creampie = (st as any).npc_ask_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: '"You can''t just come inside me like that!" ' + iif(sex_ev['cock_inserted'] = 1...
    scene.text('"You can\'t just come inside me like that!" ' + ((((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) ? ('you hiss as ' + ((st as any).npcdesc ?? '') + ' lets his cock slip from your pussy, the flow of liquid you were expecting following out quickly after.') : ('you hiss, gaping at the stream of cum flowing from your pussy.')) + ' "You need to ask first!"');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1)) {
      if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"Don\'t be such a bitch," he says, rolling his eyes. "You\'re on birth control anyways. Why does it matter?"');
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Oh, you\'ll be fine," he grunts dismissively. "It\'s just one cumshot. Don\'t get bent out of shape. It\'s not gonna kill you."');
        } else {
          scene.text('"Your pussy\'s too tight," he says, not looking even slightly sorry for his actions. "It just sucked me in."');
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> cringes, looking as guilty as you think he is.
      scene.text(`${((st as any).npcdesc ?? '')} cringes, looking as guilty as you think he is.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfNoBc(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: '"What the fuck are you doing?" ' + iif(sex_ev['cock_inserted'] = 1, 'you hiss a...
    scene.text('"What the fuck are you doing?" ' + ((((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) ? ('you hiss as ' + ((st as any).npcdesc ?? '') + ' finally lets his cock slip from your pussy and the flow of cum you were expecting quickly trickles out after.') : ('you hiss, gaping at the stream of cum flowing from your pussy.')) + ' "Did you really come inside me? Are you fucking kidding me? I don\'t even know you!"');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfNoBc(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_after', 'quit');
    if (((st as any).sex_ev ?? 0)?.['pc_skip_the_condom'] === 1) {
      scene.text('"You\'re the one who didn\'t want to use a condom," he pants tiredly.');
    } else {
      if (((st as any).fame ?? 0)[(((st as any).region ?? 0)) + '_slut'] > 150) {
        scene.text('"So?" he pants tiredly. "I know who <i>you</i> are. I bet you let strangers creampie you all the time."');
      } else {
        scene.text('"So? Why does that make a difference?"');
        scene.actions([
          { label: 'Creampies are special', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"I only let guys I trust come inside me!" you sneer.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyCreampieReact(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Only with guys you trust', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"I only let guys I trust come inside me!" you sneer.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyCreampieReact(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'What if he\'s got STDs?', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"I don\'t know if you\'re clean!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyCreampieReact(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Only for boyfriends', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage3(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).stat ?? 0)?.['boyfriends_current'] === 1) {
      scene.text('"Only my boyfriend is allowed to come inside me!" you sneer.');
      // TODO-QSP: '"Maybe you shouldn''t have fucked someone who isn''t your boyfriend then," ' + iif(npc_fidelity_num...
    } else {
      if (((st as any).stat ?? 0)?.['boyfriends_current'] > 1) {
        scene.text('"Only my boyfriends are allowed to come inside me!" you sneer.');
        if (((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] < 7) {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "You have more than one?" <<$npcdesc>> snickers.
            scene.text(`"You have more than one?" ${((st as any).npcdesc ?? '')} snickers.`);
          } else {
            // TODO-QSP: dynamic text: "Maybe you shouldn''t have fucked someone who isn''t your boyfriend then," <<$np...
            scene.text(`"Maybe you shouldn't have fucked someone who isn't your boyfriend then," ${((st as any).npcdesc ?? '')} snickers.`);
          }
        } else {
          // TODO-QSP: dynamic text: "Maybe you shouldn''t have fucked someone who isn''t your boyfriend then," <<$np...
          scene.text(`"Maybe you shouldn't have fucked someone who isn't your boyfriend then," ${((st as any).npcdesc ?? '')} frowns.`);
        }
      } else {
        scene.text('"I only let guys come inside me if we\'re dating!" you sneer.');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyCreampieReact(st, scene); (st as any).locArgs = __savedLocArgs; }
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
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
    scene.actions([
      { label: 'Panic', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage1(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "What are you doing?!" you gasp, frantically trying to pull <<$npcdesc>> out of ...
    scene.text(`"What are you doing?!" you gasp, frantically trying to pull ${((st as any).npcdesc ?? '')} out of you, trying to push him away, trying to stop him from filling you with cum, even though you know it's already too late. "<i>What the fuck are you doing?</i> Did you just come inside me? I don't even know you! Stop! Stop!"`);
    scene.text('His cock pulses inside you, each twitch bringing another sensation of liquid shooting into your womb but no matter how hard you try, you can\'t get his cock out of your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: You watch in horror as <<$npcdesc>> finally removes his cock from your pussy and...
    scene.text(`You watch in horror as ${((st as any).npcdesc ?? '')} finally removes his cock from your pussy and a fat wet glob of cum spills out.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFreakout(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('Your eyes go wide.');
    // TODO-QSP: dynamic text: "Oh my god! What did you do?!" you cry, voice taking on a high pitched whine as ...
    scene.text(`"Oh my god! What did you do?!" you cry, voice taking on a high pitched whine as you frantically trying to pull ${((st as any).npcdesc ?? '')}'s cock out of you, trying to push him away, even though you know it's too late. The panic sets in and you start moaning over and over again, "What did you do? What did you do? What did you do?"`);
    scene.text('The warmth inside you has already spread through your hips and you can practically feel his cum sloshing around inside you.');
    scene.text('"Did you really come inside me?" you moan. "I don\'t even know you!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: You watch in horror as <<$npcdesc>> finally removes his cock from your pussy and...
    scene.text(`You watch in horror as ${((st as any).npcdesc ?? '')} finally removes his cock from your pussy and a fat wet glob of cum spills out.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFreakout(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyCreampieReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['ma_pill_tomorrow'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNotCreampiePass(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      scene.text('"Don\'t be such a bitch," he says, rolling his eyes. "You\'re on birth control anyways. Why does it matter?"');
      qspCall(s, 'sex_ev_after', 'quit');
    } else {
      if (((s as any).sex_ev ?? 0)?.['pc_skip_the_condom'] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.text('"You should\'ve asked to use a condom then," he shrugs. "Not my fault you asked to go without."');
        qspCall(s, 'sex_ev_after', 'quit');
      } else {
        if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          if (((s as any).mesec ?? 0) > 0) {
            scene.text('"Oh, you\'ll be fine," he waves dismissively. "You said it yourself, you can\'t get pregnant on your period."');
          } else {
            if ((Math.floor(Math.random() * 2) + 0) === 1) {
              // TODO-QSP: iif(sex_ev['creampie_count'] = 1, '"You''ll be fine," he waves dismissively. "You''re not gonna get ...
            } else {
              // TODO-QSP: iif(sex_ev['creampie_count'] = 1, '"Oh, you''ll be fine," he waves dismissively. "Just buy some plan...
            }
          }
          qspCall(s, 'sex_ev_after', 'quit');
        } else {
          if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text('"Shit! I know! I know!" he says, looking agitated. "I\'m so sorry! Fuck! It was an accident, I swear! I didn\'t mean to!"');
          } else {
            qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
            scene.text('"Shit! Fuck! I didn\'t know!" he says, looking agitated. "I\'m so sorry! Fuck! It was an accident, I swear! I didn\'t mean to!"');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNotCreampiePass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['ma_pill_tomorrow'] === 1) {
    scene.actions([
      { label: 'That\'s not a creampie pass!', handler: (st: GameState) => {
    scene.text('"That isn\'t a free pass to come inside me!" you scowl, watching the offending spunk seep from your cunt.');
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> just grins lewdly.
      scene.text(`${((st as any).npcdesc ?? '')} just grins lewdly.`);
    } else {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> mumbles shyly.
      scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} mumbles shyly.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_after', 'quit');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAccidentOhShit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
    scene.actions([
      { label: 'Oh shit! (no birth control)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage1(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "Oh shit!" You frantically try to pull <<$npcdesc>>''s out of you, trying to pus...
    scene.text(`"Oh shit!" You frantically try to pull ${((st as any).npcdesc ?? '')}'s out of you, trying to push him away, trying to stop him from filling you with cum, even though you know it's already too late.`);
    scene.text('"Fuck! Ohfuckohfuckohfuckohfuck!" you whine in distress. His cock pulses inside you, each twitch bringing another sensation of something shooting into your womb but no matter how hard you try, you can\'t get his cock out of your pussy.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterOhShitOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterOhShitOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    // TODO-QSP: else !}
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHavePlanB(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'This isn\'t good', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    ((st as any).ex_ev = (st as any).ex_ev ?? {})['cock_inserted'] = 0;
    qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
    // TODO-QSP: dynamic text: "Well this isn''t good," you gulp, looking horrified at <<$npcdesc>>. "I''m not ...
    scene.text(`"Well this isn't good," you gulp, looking horrified at ${((st as any).npcdesc ?? '')}. "I'm not on birth control..."`);
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      { label: 'I guess I need a pill', handler: (st: GameState) => {
    scene.actions([
      { label: 'Annoyed', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill_tomorrow'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    ((st as any).ex_ev = (st as any).ex_ev ?? {})['cock_inserted'] = 0;
    scene.text('"I guess I\'m going to need a pill tomorrow," you say, frowning.');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      { label: 'Unconcerned', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill_tomorrow'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.mp4');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    ((st as any).ex_ev = (st as any).ex_ev ?? {})['cock_inserted'] = 0;
    scene.text('"I guess I\'m going to need a pill tomorrow," you shrug, unconcerned.');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      { label: 'Humorous', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill_tomorrow'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieWtfImage2(st, scene); (st as any).locArgs = __savedLocArgs; }
    ((st as any).ex_ev = (st as any).ex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: "I guess I''m going to need a pill tomorrow," you say, giving <<$npcdesc>> a wry...
    scene.text(`"I guess I'm going to need a pill tomorrow," you say, giving ${((st as any).npcdesc ?? '')} a wry smirk to let him know you're not mad.`);
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHavePlanB(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).sex_ev ?? 0)?.['plan_b_buy'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['ma_pill'] !== 1) {
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      scene.actions([
        { label: 'I have some plan B', handler: (st: GameState) => {
    scene.actions([
      { label: 'Calm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"I have a morning after pill," you say calmly. "I\'ll be okay."');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      { label: 'Amused', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "It''s okay," you giggle, finding a strange amusement in how unapologetic <<$npc...
      scene.text(`"It's okay," you giggle, finding a strange amusement in how unapologetic ${((st as any).npcdesc ?? '')} is about it. "I have a morning after pill."`);
    } else {
      // TODO-QSP: dynamic text: "It''s okay," you giggle, unable to keep from laughing at <<$npcdesc>>''s worry....
      scene.text(`"It's okay," you giggle, unable to keep from laughing at ${((st as any).npcdesc ?? '')}'s worry. "I have some plan B on me."`);
    }
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      { label: 'Sexy', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"It\'s okay," you say with a sexy smile. "I have a morning after pill."');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I\'ll buy some plan B', handler: (st: GameState) => {
    scene.actions([
      { label: 'Calm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['plan_b_buy'] = 1;
    if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"I\'ll get a morning after pill later," you shrug. "You\'re paying for it after all."');
      scene.text('"Yeah..."');
    } else {
      scene.text('"I\'ll get a morning after pill later," you shrug. "No big deal."');
    }
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      { label: 'Amused', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['plan_b_buy'] = 1;
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "I''ll get a morning after pill later," you giggle, finding a strange amusement ...
        scene.text(`"I'll get a morning after pill later," you giggle, finding a strange amusement in how unapologetic ${((st as any).npcdesc ?? '')} is about it. "Besides, you're the one paying for it, aren't you?"`);
        scene.text('"Yeah..."');
      } else {
        // TODO-QSP: dynamic text: "I''ll get a morning after pill later," you giggle, finding a strange amusement ...
        scene.text(`"I'll get a morning after pill later," you giggle, finding a strange amusement in how unapologetic ${((st as any).npcdesc ?? '')} is about it.`);
      }
    } else {
      if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "I''ll get a morning after pill later," you giggle, unable to keep from laughing...
        scene.text(`"I'll get a morning after pill later," you giggle, unable to keep from laughing at ${((st as any).npcdesc ?? '')}'s worry. "Besides, you're paying for it, aren't you?"`);
        scene.text('"Yeah..."');
      } else {
        // TODO-QSP: dynamic text: "I''ll get a morning after pill later," you giggle, unable to keep from laughing...
        scene.text(`"I'll get a morning after pill later," you giggle, unable to keep from laughing at ${((st as any).npcdesc ?? '')}'s worry.`);
      }
    }
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      { label: 'Sexy', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['plan_b_buy'] = 1;
    if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"It\'s okay, I\'ll get a morning after pill later," you say with a sexy smirk. "You\'re paying for it after all."');
      scene.text('"Yeah..."');
    } else {
      scene.text('"It\'s okay," you say with a sexy smile. "I\'ll get a morning after pill later."');
    }
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'safe') {
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'prob_safe') {
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHavePlanB2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 0  &&  ((s as any).sex_ev ?? 0)?.['plan_b_buy'] === 0  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      scene.actions([
        { label: 'I have some plan B', handler: (st: GameState) => {
    scene.actions([
      { label: 'Calm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"Don\'t worry," you say calmly. "I have a morning after pill."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Amused', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"Don\'t worry," you giggle with glee. "I have a morning after pill."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Sexy', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"Don\'t worry," you say with a sexy smile. "I have a morning after pill."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I\'ll buy some plan B', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['plan_b_buy'] = 1;
    scene.actions([
      { label: 'Calm', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"I\'ll get a morning after pill later. Besides," you smile tiredly between panting breaths. "You\'re paying for it, right?"');
        // TODO-QSP: dynamic text: <<$npcdesc>> nods back.
        scene.text(`${((st as any).npcdesc ?? '')} nods back.`);
      } else {
        // TODO-QSP: dynamic text: "I''ll get a morning after pill later," you pant. <<$npcdesc>> nods back.
        scene.text(`"I'll get a morning after pill later," you pant. ${((st as any).npcdesc ?? '')} nods back.`);
      }
    } else {
      if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"I\'ll get a morning after pill later," you say with calm assurance. "Besides, you\'re paying for it, right?"');
        // TODO-QSP: dynamic text: <<$npcdesc>> nods back.
        scene.text(`${((st as any).npcdesc ?? '')} nods back.`);
      } else {
        // TODO-QSP: dynamic text: "I''ll buy a morning after pill later," you say to <<$npcdesc>> with calm assura...
        scene.text(`"I'll buy a morning after pill later," you say to ${((st as any).npcdesc ?? '')} with calm assurance.`);
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Amused', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"I\'ll guess this means I\'m going to need to buy a morning after pill later. You\'re still paying for it, right?" you giggle breathlessly, still a little giddy from your orgasm.');
        // TODO-QSP: dynamic text: <<$npcdesc>> nods back.
        scene.text(`${((st as any).npcdesc ?? '')} nods back.`);
      } else {
        scene.text('"I\'ll guess this means I\'m going to need to buy a morning after pill later," you giggle breathlessly, still a little giddy from your orgasm.');
      }
    } else {
      if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "I''ll guess this means I''m going to need to buy a morning after pill later. Yo...
        scene.text(`"I'll guess this means I'm going to need to buy a morning after pill later. You're still paying for it, right?" you giggle at ${((st as any).npcdesc ?? '')}.`);
        // TODO-QSP: dynamic text: <<$npcdesc>> nods back.
        scene.text(`${((st as any).npcdesc ?? '')} nods back.`);
      } else {
        // TODO-QSP: dynamic text: "I''ll guess this means I''m going to need to buy a morning after pill later," y...
        scene.text(`"I'll guess this means I'm going to need to buy a morning after pill later," you giggle at ${((st as any).npcdesc ?? '')}.`);
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Sexy', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['came_together'] > 0) {
      if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "I''ll buy a morning after pill later," you say, giving <<$npcdesc>> your best p...
        scene.text(`"I'll buy a morning after pill later," you say, giving ${((st as any).npcdesc ?? '')} your best post-orgasm smile. "You'll still pay for it, won't you?"`);
        // TODO-QSP: dynamic text: <<$npcdesc>> nods back.
        scene.text(`${((st as any).npcdesc ?? '')} nods back.`);
      } else {
        scene.text('"I\'ll guess this means I\'m going to need to buy a morning after pill later," you giggle breathlessly, still a little giddy from your orgasm.');
      }
    } else {
      if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Don''t worry," you say, giving <<$npcdesc>> a smouldering look. "I''ll buy a mo...
        scene.text(`"Don't worry," you say, giving ${((st as any).npcdesc ?? '')} a smouldering look. "I'll buy a morning after pill later. With your money of course," you add with a wink.`);
        // TODO-QSP: dynamic text: <<$npcdesc>> nods back.
        scene.text(`${((st as any).npcdesc ?? '')} nods back.`);
      } else {
        // TODO-QSP: dynamic text: "Don''t worry," you say, giving <<$npcdesc>> a smouldering look. "I''ll buy a mo...
        scene.text(`"Don't worry," you say, giving ${((st as any).npcdesc ?? '')} a smouldering look. "I'll buy a morning after pill later."`);
      }
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieAccidentBirthControl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    if (((s as any).tabletkishot ?? 0) > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['bc_type'] = 'shot';
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['bc_type'] = 'pill';
    }
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'I\'m on the ' + String((((s as any).sex_ev ?? 0)?.['bc_type'] ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    if (((st as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      // TODO-QSP: dynamic text: "It''s okay." you reassure him. "I''m on the <<$sex_ev[''bc_type'']>>."
      scene.text(`"It's okay." you reassure him. "I'm on the ${(((st as any).sex_ev ?? 0)?.['bc_type'] ?? '')}."`);
    } else {
      // TODO-QSP: dynamic text: "It''s okay." you reassure him. "I''m on the <<$sex_ev[''bc_type'']>>. I just li...
      scene.text(`"It's okay." you reassure him. "I'm on the ${(((st as any).sex_ev ?? 0)?.['bc_type'] ?? '')}. I just like condoms for extra safety."`);
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to relax, relieved that you''re not upset.
    scene.text(`${((st as any).npcdesc ?? '')} seems to relax, relieved that you're not upset.`);
    scene.text('"Does... does that mean I can come inside you in the future?"');
    qspCall(st, 'sex_ev_talk', 'creampie_permission2');
  } },
        { label: 'Pretend you\'re not on birth control (tease)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "If I get pregnant, I hope you''re ready to be a daddy," you say, giving <<$npcd...
    scene.text(`"If I get pregnant, I hope you're ready to be a daddy," you say, giving ${((st as any).npcdesc ?? '')} a warm smile.`);
    scene.actions([
      { label: 'Tell him you\'re kidding (on bc)', handler: (st: GameState) => {
    scene.text('The look on his face sends you into uncontrollable giggles and you relent.');
    // TODO-QSP: dynamic text: "I''m kidding," you laugh. I''m on the <<$sex_ev[''bc_type'']>>. I won''t get pr...
    scene.text(`"I'm kidding," you laugh. I'm on the ${(((st as any).sex_ev ?? 0)?.['bc_type'] ?? '')}. I won't get pregnant."`);
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
      // TODO-QSP: dynamic text: "That''s not funny!" <<$npcdesc>> scowls.
      scene.text(`"That's not funny!" ${((st as any).npcdesc ?? '')} scowls.`);
    } else {
      // TODO-QSP: dynamic text: "That''s not funny!" <<$npcdesc>> says, though you can see his own smile breakin...
      scene.text(`"That's not funny!" ${((st as any).npcdesc ?? '')} says, though you can see his own smile breaking through.`);
    }
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'broken_condom') {
        // TODO-QSP: dynamic text: "Fuck," <<$npcdesc>> breathes, looking back and forth between the broken rubber ...
        scene.text(`"Fuck," ${((s as any).npcdesc ?? '')} breathes, looking back and forth between the broken rubber around his cock and your pussy. "It's a good thing you're on birth control."`);
        if (((s as any).sex_ev ?? 0)?.['pc_skip_the_condom'] === 1) {
          scene.actions([
            { label: 'You didn\'t want condoms anyways (grumble)', handler: (st: GameState) => {
    scene.text('"You\'re the one who wanted to use these useless things in the first place," you grumble. "Could\'ve done it raw from the beginning.');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
          ]);
        }
        scene.actions([
          { label: 'Nod', handler: (st: GameState) => {
    scene.text('You nod in agreement as you feel another glob of cum slither out of your snatch along with a sense of grateful relief.');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
        ]);
      }
    }
  } else {
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      if (((s as any).sex_ev ?? 0)?.['creampie_count'] === 1  &&  ((s as any).sex_ev ?? 0)?.['bc_tell'] === 0  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === '') {
        scene.actions([
          { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    scene.text('"It\'s okay," you smile, telling a barefaced lie. "I\'m on birth control."');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to relax, relieved that you''re not upset.
    scene.text(`${((st as any).npcdesc ?? '')} seems to relax, relieved that you're not upset.`);
    scene.text('<i>I wonder if his baby is going to be swimming around inside me after this?</i>');
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
        ]);
      }
      scene.actions([
        { label: 'If I get pregnant, you better take responsibility (tease)', handler: (st: GameState) => {
    // TODO-QSP: '"If I get pregnant, you better take responsibility for this," you say with a smile to let him know ...
    qspCall(st, 'sex_ev_cum', 'what_now');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieFreakout(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0  &&  (((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'))) {
    scene.actions([
      { label: 'Freak the fuck out', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_wtf'] = ((st as any).sex_ev['creampie_wtf'] ?? 0) + (1);
    scene.img('images/shared/sex/cum/cum111.jpg');
    if (((st as any).sex_ev ?? 0)?.['skip_condom'] === 1) {
      // TODO-QSP: '"Ohmygodohmygodohmygodohmygod!" You start hyperventilating, a torrent of words spilling from your m...
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"Sorry, your pussy was just so tight and I-"');
      } else {
        scene.text('"Oh shit! I\'m sorry! I\'m sorry I\'m sorry I-"');
        // TODO-QSP: end !}
        // TODO-QSP: '"Ohmygodohmygodohmygodohmygod!" You start hyperventilating, a torrent of words spilling from your m...
      }
      scene.text('You put your hand to your head as you begin to feel faint.');
      scene.text('<i>What was I thinking? What if I get an STD?! Why didn\'t I insist on a condom...</i>');
    }
    scene.text('<i>What was I thinking? What if I get an STD? What if I get pregnant?! Why didn\'t I insist on a condom...</i>');
    // TODO-QSP: end !}
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "It''s just one creampie," <<$npcdesc>> says nonchalantly. "It''s not gonna kill...
      scene.text(`"It's just one creampie," ${((st as any).npcdesc ?? '')} says nonchalantly. "It's not gonna kill you."`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        // TODO-QSP: dynamic text: "You said I could come wherever I wanted," <<$npcdesc>> says, looking confused.
        scene.text(`"You said I could come wherever I wanted," ${((st as any).npcdesc ?? '')} says, looking confused.`);
      } else {
        if (((st as any).npc_diligent ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Hang on, just calm down. It\'ll be okay. As long as you get a morning after pill, it\'ll be fine, right?"');
        } else {
          // TODO-QSP: dynamic text: "I''m so sorry! I swear! I didn''t mean to!" <<$npcdesc>> says panicking just as...
          scene.text(`"I'm so sorry! I swear! I didn't mean to!" ${((st as any).npcdesc ?? '')} says panicking just as much as you are.`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFreakoutCalm(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFreakoutGtg(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        scene.actions([
          { label: 'You\'re ovulating!', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
    scene.text('"I\'m ovulating right now!" you gasp, the room starting to spin in your panic.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFreakout2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'You\'re not on birth control!', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
    scene.text('"I\'m not on birth control!" you gasp, the room starting to spin in your panic.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFreakout2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'That\'s not what I\'m concerned about! (STDs)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"That\'s not what I\'m concerned about!" you say, your hyperventilating getting worse.');
    scene.text('"Then wha- Wait, you think I have an STD???"');
    scene.text('"I don\'t know! You could! I just don\'t know!"');
    scene.text('"If you were really concerned about that then why would you let me fuck without a condom??"');
    if (((st as any).sex_ev ?? 0)?.['condom'] >= 2) {
      scene.text('"You didn\'t want to use one!" you yelp.');
    } else {
      scene.text('"<i>I! DON\'T! KNOW!</i>" you scream.');
    }
    scene.text('"Well I\'m fucking clean, alright?! I promise!"');
    scene.actions([
      { label: 'Calm down', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: Trying to focus on his words, you force yourself to take deep, slow breaths, cal...
    scene.text(`Trying to focus on his words, you force yourself to take deep, slow breaths, calming down while ${((st as any).npcdesc ?? '')} tries to reassure you.`);
    scene.text('<i>He\'s right, it\'ll be okay. You\'re on birth control and he came inside you so it\'s okay! He\'s not going to have an STD. Can\'t have one! Because if he did that would... Nope! I\'m not gonna think about that! Because I\'m not getting an STD tonight! Everything is going to be fine! <b>It\'s going to be fine!</b></i>');
    scene.text('After running through this thought process several more times accompanied by many more breaths, you finally begin to calm down.');
    qspCall(st, 'sex_ev_cum', 'what_now');
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
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieFreakout2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: "Jeez, I didn''t know you were going to freak out like this," <<$npcdesc>> says,...
    scene.text(`"Jeez, I didn't know you were going to freak out like this," ${((s as any).npcdesc ?? '')} says, holding his hands up defensively. "Just chill out! You can buy a morning after pill tomorrow, it'll be fine."`);
  } else {
    if (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Hang on, just calm down. It\'ll be okay. As long as you get a morning after pill, it\'ll be fine, right?"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_wherever'] === 1) {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
          // TODO-QSP: dynamic text: "You said I could come wherever I wanted!" <<$npcdesc>> repeats insistently. "If...
          scene.text(`"You said I could come wherever I wanted!" ${((s as any).npcdesc ?? '')} repeats insistently. "If you don't want me to come wherever then don't say that!"`);
        } else {
          // TODO-QSP: dynamic text: "Oh shit!" <<$npcdesc>> says, your panic starting to infect him. "Why didn''t yo...
          scene.text(`"Oh shit!" ${((s as any).npcdesc ?? '')} says, your panic starting to infect him. "Why didn't you say so?!"`);
        }
      } else {
        // TODO-QSP: dynamic text: "It was a mistake! It really was!" <<$npcdesc>> keeps saying, nearly begging.
        scene.text(`"It was a mistake! It really was!" ${((s as any).npcdesc ?? '')} keeps saying, nearly begging.`);
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieFreakoutCalm(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieFreakoutGtg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieFreakoutCalm(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Calm down', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_diligent ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: Trying to focus on his words, you force yourself to take deep, slow breaths, cal...
      scene.text(`Trying to focus on his words, you force yourself to take deep, slow breaths, calming down while ${((st as any).npcdesc ?? '')} tries to apologize to you.`);
      scene.text('"See? It\'s all gonna be fine."');
    } else {
      // TODO-QSP: dynamic text: You force yourself to take deep, slow breaths, calming down while <<$npcdesc>> t...
      scene.text(`You force yourself to take deep, slow breaths, calming down while ${((st as any).npcdesc ?? '')} tries to apologize to you.`);
    }
    scene.actions([
      { label: 'It\'ll be fine', handler: (st: GameState) => {
    if (((st as any).birth_control ?? 0)?.['think_safe'] < 1) {
      // TODO-QSP: iif(npc_selfish[$npcID] = 1 or npc_abusive[$npcID] > 0 or npc_diligent[$npcID] > 0, '<i>He''s right,...
    } else {
      // TODO-QSP: iif(npc_selfish[$npcID] = 1 or npc_abusive[$npcID] > 0 or npc_diligent[$npcID] > 0, '<i>He''s right,...
    }
    scene.text('After running through this thought process several more times accompanied by many more breaths, you finally begin to calm down.');
    qspCall(st, 'sex_ev_cum', 'what_now');
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
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('"I just have to go!"');
      scene.text('"I told you, if you\'re worried you can just get-"');
      scene.text('"That\'s not what this is about!"');
      scene.text('"Then-!"');
      scene.text('"Can\'ttalkgottago!"');
      scene.text('You don\'t wait to hear what he was trying to say and dash out the door.');
      scene.text('<i>Fuck! What am I going to do if I get an STD?!</i>');
    } else {
      scene.text('"I need to get a morning after pill!"');
      scene.text('"Right now?!"');
      scene.text('"Right now!!! I can\'t wait even one minute! I can\'t get knocked up!"');
      if (((st as any).hour ?? 0) >= 21) {
        scene.text('"No pharmacy is open this time of night! Stop freaking out! Y-"');
        scene.text('"Can\'ttalkgottago!"');
        scene.text('You don\'t wait to hear what he was trying to say and dash out the door.');
      } else {
        scene.text('"Why the rush?? You don\'t have to do it right this second-"');
        scene.text('"I have to to be sure! I gotta get it today before the pharmacy closes!"');
        scene.text('"But-!"');
        scene.text('"Can\'ttalkgottago!"');
        scene.text('You don\'t wait to hear what he was trying to say and dash out the door.');
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPulloutGameTease(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pullout_game'] > 0  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1  &&  ((s as any).sex_ev ?? 0)?.['pullout_game_react'] === 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0) {
    scene.actions([
      { label: 'Pullout game, huh? (laugh it off)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pullout_game_react'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/4.jpg');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/smile1.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
    // TODO-QSP: dynamic text: "So much for ''pullout game,''" you smile teasingly at <<$npcdesc>>.
    scene.text(`"So much for 'pullout game,'" you smile teasingly at ${((st as any).npcdesc ?? '')}.`);
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] !== 1  &&  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] <= 0  &&  ((st as any).sex_ev ?? 0)?.['creampie_allowance'] === 0) {
      scene.text('"S-sorry," he stammers, blushing furiously.');
      // TODO-QSP: 'His face makes you laugh wholeheartedly' + iif(sex_ev['cock_inserted'] = 1, ' unable to help but no...
    } else {
      scene.text('"Sorry," he says, not looking sorry at all. "I really tried to, but I couldn\'t help it."');
      scene.text('You roll your eyes to the heavens.');
    }
    if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'safe') {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    } else {
      scene.text('"So... are you mad?"');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAccidentsHappen1(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieFeltTooGood(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNotMad(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterALittleMad(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSafeDay(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHavePlanB(st, scene); (st as any).locArgs = __savedLocArgs; }
      // TODO-QSP: end !}
      scene.actions([
        { label: 'It\'s a safe day', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePullOutImage(st, scene); (st as any).locArgs = __savedLocArgs; }
      // TODO-QSP: iif($sex_ev['preg_risk'] <> 'safe', '"Don''t worry," you smile as <<$npcdesc>>''s cum continues to t...
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: iif($sex_ev['preg_risk'] <> 'safe', '"It''s fine," you smile at <<$npcdesc>>, cupping his face. "It'...
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          // TODO-QSP: iif($sex_ev['preg_risk'] <> 'safe', '"It''s fine," you smile at <<$npcdesc>> over your shoulder. "It...
          scene.text('"Don\'t worry, it\'s a safe day."');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
            // TODO-QSP: iif($sex_ev['preg_risk'] <> 'safe', '"It''s fine," you smile down at <<$npcdesc>>. "It''s a safe day...
          }
        }
      }
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
  } },
      ]);
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
    case 'already_creampied_me':
      enterAlreadyCreampiedMe(s, scene);
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
    case 'creampie_wtf_no_bc':
      enterCreampieWtfNoBc(s, scene);
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
    case 'creampie_accident_oh_shit':
      enterCreampieAccidentOhShit(s, scene);
      break;
    case 'oh_shit_options':
      enterOhShitOptions(s, scene);
      break;
    case 'have_plan_b':
      enterHavePlanB(s, scene);
      break;
    case 'have_plan_b2':
      enterHavePlanB2(s, scene);
      break;
    case 'creampie_accident_birth_control':
      enterCreampieAccidentBirthControl(s, scene);
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

export const sex_ev_reactions_creampie: LocationDef = {
  name: 'sex_ev_reactions_creampie',
  title: '"Is... is that what it feels like when a guy comes inside...',
  region: 'other',
  enter: enter,
};
