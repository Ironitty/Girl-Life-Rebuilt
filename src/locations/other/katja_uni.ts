import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFirstInClassMeet(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['meet_uni_class'] = 1;
  if (((s as any).npc_had_sex ?? 0)?.['A14']) {
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 100  &&  ((s as any).katjaQW ?? 0)?.['dom'] > -30) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/class_grope.jpg');
      scene.text('As you\'re walking into the lecture hall, you yelp in surprise when a pair of hands snake underneath your arms and grab your breasts, giving them a firm squeeze. Before you can turn around, you hear a soft voice from behind you.');
      if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
        if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['annoyed'] = 1;
          qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
          scene.text('"Hey sexy," Katja whispers in your ear. "Why haven\'t I seen you since we graduated? And why didn\'t you tell me you were starting the teaching program?" She sounds vaguely disappointed.');
          scene.text('"Sorry, I didn\'t think it was worth mentioning," you say. "You didn\'t tell me were in this program either!"');
        } else {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['annoyed'] = 2;
          qspCall(s, 'npc_relationship', 'modify', 'A14', 'loathe');
          scene.text('"Hey," Katja whispers in your ear. "Why didn\'t you tell me that you were joining the teaching program?" She seems annoyed with you.');
          scene.text('Just as you think this, your suspicions are confirmed when her fingers find your nipples and she pinches them hard enough to make you gasp.');
          scene.text('"Sorry," you say, squirming in her arms while trying not to squeal. "I should have told you."');
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
        scene.text('"Hey sexy," Katja whispers in your ear. The tone of her voice gives you the impression she\'s smiling. "This is going to be so much fun, especially with you here."');
        scene.text('"Yes, it is," you say, looking over your shoulder to smile back at her. "We\'re going to rule this place."');
      }
      if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 7) {
        if (((s as any).katjaQW ?? 0)?.['annoyed'] === 1) {
          scene.text('"I suppose I\'ll just have to forgive you," she says playfully, giving your breasts another gentle squeeze.');
          // TODO-QSP: dynamic text: "Have you seen all the hot guys around? You think we can find '+iif(katjaQW['par...
          scene.text('"Have you seen all the hot guys around? You think we can find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '"');
        } else {
          if (((s as any).katjaQW ?? 0)?.['annoyed'] === 2) {
            scene.text('"I suppose I\'ll just have to forgive you," she says, her tone softening to playful and giving your breasts a much more gentle squeeze.');
            // TODO-QSP: dynamic text: "Have you seen all the hot guys around? You think we can find '+iif(katjaQW['par...
            scene.text('"Have you seen all the hot guys around? You think we can find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '"');
          } else {
            // TODO-QSP: dynamic text: "Have you seen all the hot guys around?" she asks excitedly, giving your breasts...
            scene.text('"Have you seen all the hot guys around?" she asks excitedly, giving your breasts another playful fondle. "You think we can find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '"');
          }
        }
        scene.text('"Of course," you reply. "Who could say no to two hot chicks like us?"');
        scene.text('"Anyways, we can find boys to fool around with later, we should get to class."');
        scene.text('Katja gives your breast a last squeeze before removing her hands. She seems much bolder than she was before. Maybe getting away from her childhood home has made her less self-conscious and more confident?');
      } else {
        if (((s as any).katjaQW ?? 0)?.['QWstage'] === 6  ||  ((s as any).katjaQW ?? 0)?.['anal_quest'] >= 3) {
          if (((s as any).katjaQW ?? 0)?.['annoyed'] === 1) {
            scene.text('"I suppose I\'ll just have to forgive you," she says playfully, giving your breasts another gentle squeeze. "Have you seen all the hot guys around?');
            // TODO-QSP: dynamic text: Since '+iif(katjaQW['marcus_pussy'] = 1, 'Marcus', '')+iif(katjaQW['marcus_pussy...
            scene.text('Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' aren\'t around, maybe we can find someone to join us sometime?"');
          } else {
            if (((s as any).katjaQW ?? 0)?.['annoyed'] === 2) {
              scene.text('"I suppose I\'ll just have to forgive you," she says, tone softening to playful and giving your breasts a much more gentle squeeze. "Have you seen all the hot guys around?');
              // TODO-QSP: dynamic text: Since '+iif(katjaQW['marcus_pussy'] = 1, 'Marcus', '')+iif(katjaQW['marcus_pussy...
              scene.text('Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' aren\'t around, maybe we can find someone to join us sometime?"');
            } else {
              scene.text('"Have you seen all the hot guys around?" she asks excitedly, giving your breasts another playful fondle.');
              // TODO-QSP: dynamic text: "Since '+iif(katjaQW['marcus_pussy'] = 1, 'Marcus', '')+iif(katjaQW['marcus_puss...
              scene.text('"Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' aren\'t around, maybe we can find someone to join us sometime?"');
            }
          }
          scene.text('"Of course," you reply. "Who could say no to two hot chicks like us?"');
          scene.text('"Anyways, we can find boys to fuck later. We should get to class."');
          scene.text('Katja gives your breast one last squeeze before removing her hands. She seems much bolder than she was before. Maybe getting away from her childhood home has made her less self-conscious and more confident?');
        } else {
          scene.text('"This is all so exciting!" she squeals. "Is it weird that it\'s kind of turning me on? I almost feel like dragging you to an empty room right now."');
          scene.text('Her breath is hot on your skin. The fondling of your breasts suddenly takes on a much more sensual feel and her lips brush against the back of your neck.');
          scene.text('"But that would mean we would miss our first class," she says before abruptly pulling away, a mischievous smirk on her face. "So it\'ll have to wait for later."');
          scene.text('"Can\'t wait…" you say, smiling back. Katja walks away with a straight back and a bit of swing in her step. She seems much bolder than she was before. Maybe getting away from her childhood home has made her less self-conscious and more confident?');
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] > 50) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/hug.jpg');
        scene.text('As you\'re walking into the lecture hall, a pair of arms suddenly wrap themselves around your belly. They pull you back and you feel two soft things pressing against your back.');
        if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
          if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['annoyed'] = 1;
            qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," Katja whispers in your ear. "Why haven''t I seen you si...
            scene.text(`"Hey ${((s as any).pcs_nickname || '')}," Katja whispers in your ear. "Why haven't I seen you since we graduated? And why didn't you tell me you were starting the teaching program?" She sounds vaguely disappointed.`);
            scene.text('"Sorry, I didn\'t think it was worth mentioning," you say. "You didn\'t tell me were in this program either!"');
          } else {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['annoyed'] = 2;
            qspCall(s, 'npc_relationship', 'modify', 'A14', 'loathe');
            scene.text('"Hey," Katja whispers in your ear. "Why didn\'t you tell me that you were joining the teaching program?" Her voice has an edge to it and you can tell she\'s <i>very</i> unhappy.');
            scene.text('"Sorry," you say tensely. "I should have told you."');
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," Katja giggles in your ear. "This is going to be so much...
          scene.text(`"Hey ${((s as any).pcs_nickname || '')}," Katja giggles in your ear. "This is going to be so much fun, especially with you here."`);
          scene.text('"Yes, it is," you say, looking over your shoulder to smile back at her. "We\'re going to rule this place."');
        }
        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 7) {
          if (((s as any).katjaQW ?? 0)?.['annoyed'] === 1) {
            scene.text('"I guess I can find it in myself to forgive you," she says, playfully nuzzling her head against yours. "But more importantly, have you seen all the hot guys around?');
            // TODO-QSP: dynamic text: You think we can maybe find '+iif(katjaQW['park_sex'] < 3, 'one or maybe two guy...
            scene.text('You think we can maybe find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '"');
          } else {
            if (((s as any).katjaQW ?? 0)?.['annoyed'] === 2) {
              // TODO-QSP: dynamic text: "Well you''re here now, so I suppose I''ll forgive you," she says, pulling you t...
              scene.text(`"Well you're here now, so I suppose I'll forgive you," she says, pulling you tighter, pressing her breasts further into your back. "But ${((s as any).pcs_nickname || '')}, have you seen all the hot guys around?`);
              // TODO-QSP: dynamic text: You think we can maybe find '+iif(katjaQW['park_sex'] < 3, 'one or maybe two guy...
              scene.text('You think we can maybe find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '"');
            } else {
              // TODO-QSP: dynamic text: "Have you seen all the hot guys around? You think we can maybe find '+iif(katjaQ...
              scene.text('"Have you seen all the hot guys around? You think we can maybe find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '" Katja asks, pressing her breasts further into your back while still hugging you.');
            }
          }
          scene.text('"Of course," you reply. "Who could say no to two hot chicks like us?"');
        } else {
          if (((s as any).katjaQW ?? 0)?.['QWstage'] === 6  ||  ((s as any).katjaQW ?? 0)?.['anal_quest'] >= 3) {
            if (((s as any).katjaQW ?? 0)?.['annoyed'] === 1) {
              scene.text('"I guess I can find it in myself to forgive you," she says, playfully nuzzling her head against yours. "But more importantly, have you seen all the hot guys around?');
              // TODO-QSP: dynamic text: Since '+iif(katjaQW['marcus_pussy'] = 1, 'Marcus', '')+iif(katjaQW['marcus_pussy...
              scene.text('Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' ain\'t around, maybe we can find someone to join us sometime?"');
            } else {
              if (((s as any).katjaQW ?? 0)?.['annoyed'] === 2) {
                // TODO-QSP: dynamic text: "Well you''re here now, so I suppose I''ll forgive you," she says, pulling you t...
                scene.text(`"Well you're here now, so I suppose I'll forgive you," she says, pulling you tighter, pressing her breasts further into your back. "But ${((s as any).pcs_nickname || '')}, have you seen all the hot guys around?`);
                // TODO-QSP: dynamic text: Since '+iif(katjaQW['marcus_pussy'] = 1, 'Marcus', '')+iif(katjaQW['marcus_pussy...
                scene.text('Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' ain\'t around, maybe we can find someone to join us sometime?"');
              } else {
                // TODO-QSP: dynamic text: "Have you seen all the hot guys around? Since '+iif(katjaQW['marcus_pussy'] = 1,...
                scene.text('"Have you seen all the hot guys around? Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' ain\'t around, maybe we can find someone to join us sometime?" Katja asks, pressing her breasts further into your back while still hugging you.');
              }
            }
            scene.text('"Of course," you reply. "Who could say no to two hot chicks like us?"');
          } else {
            scene.text('"This is all so exciting!" she squeals. "And… maybe we can find some time to have fun…? Alone…?"');
            scene.text('She hugs you tighter, pressing her breasts into your back, bringing her head down to give your neck a soft kiss.');
            scene.text('"Absolutely…" you say, smiling back.');
          }
        }
        scene.text('Katja releases you from her hug and carries on down the hallway past you. She walks with a straight back and a bit of swing in her step. Overall, she seems much bolder than she was before.');
        scene.text('Maybe getting away from her childhood home has made her less conscious about how she is seen?');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/hug.jpg');
        if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
          if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
            qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
            scene.text('As you\'re walking into the lecture hall, a pair of arms suddenly wrap themselves around you. You turn in surprise and find Katja holding you, an expression on her face that seems caught between a smile and a glare.');
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! Why haven''t I seen you since we graduated? And why didn...
            scene.text(`"Hey ${((s as any).pcs_nickname || '')}! Why haven't I seen you since we graduated? And why didn't you tell me you were starting the teaching program?" Her lips twist a little more towards a frown than a smile.`);
            scene.text('"Sorry, I didn\'t think it was worth mentioning," you say. "You didn\'t tell me were in this program either!"');
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A14', 'loathe');
            scene.text('As you\'re walking into the lecture hall, a pair of arms suddenly wrap themselves around your shoulders. You turn in surprise and find Katja holding you, an expression on her face that seems caught between a smile and a glare.');
            scene.text('"Why didn\'t you tell me that you were joining the teaching program?" Her lips go from a hybrid to a full-on frown.');
            scene.text('"Sorry, I should have told you," you answer.');
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
          scene.text('As you\'re walking into the lecture hall, a pair of arms suddenly wrap themselves around your shoulders. You turn in surprise and find Katja holding you, an open grin on her face.');
          // TODO-QSP: dynamic text: "This is going to be so much fun, <<$pcs_nickname>>!" she squeals. "Especially w...
          scene.text(`"This is going to be so much fun, ${((s as any).pcs_nickname || '')}!" she squeals. "Especially with you here!"`);
          scene.text('"Yes, it is. We\'re going to rule this place," you answer.');
        }
        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 7) {
          if (((s as any).katjaQW ?? 0)?.['annoyed'] === 1) {
            scene.text('"I guess I can find it in myself to forgive you," she says, letting her smile come back. "But more importantly, have you seen all the hot guys around?');
            // TODO-QSP: dynamic text: You think we can maybe find '+iif(katjaQW['park_sex'] < 3, 'one or maybe two guy...
            scene.text('You think we can maybe find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '"');
          } else {
            if (((s as any).katjaQW ?? 0)?.['annoyed'] === 2) {
              // TODO-QSP: dynamic text: "Well you''re here now, so I suppose I''ll forgive you," she says, letting her f...
              scene.text(`"Well you're here now, so I suppose I'll forgive you," she says, letting her frown fade away into a rueful smile. "But ${((s as any).pcs_nickname || '')}, have you seen all the hot guys around?`);
              // TODO-QSP: dynamic text: You think we can maybe find '+iif(katjaQW['park_sex'] < 3, 'one or maybe two guy...
              scene.text('You think we can maybe find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '"');
            } else {
              // TODO-QSP: dynamic text: "Have you seen all the hot guys around?" she asks. "You think we can maybe find ...
              scene.text('"Have you seen all the hot guys around?" she asks. "You think we can maybe find ' + ((((s as any).katjaQW ?? 0)?.['park_sex'] < 3) ? ('one or maybe two guys who might have fun with us?') : ('enough to satisfy our needs?')) + '".');
            }
          }
        } else {
          if (((s as any).katjaQW ?? 0)?.['QWstage'] === 6  ||  ((s as any).katjaQW ?? 0)?.['anal_quest'] >= 3) {
            if (((s as any).katjaQW ?? 0)?.['annoyed'] === 1) {
              scene.text('"I guess I can find it in myself to forgive you," she says, letting her smile come back. "But more importantly, have you seen all the hot guys around?');
              // TODO-QSP: dynamic text: Since '+iif(katjaQW['marcus_pussy'] = 1, 'Marcus', '')+iif(katjaQW['marcus_pussy...
              scene.text('Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' ain\'t around, maybe we can find someone to join us sometime?"');
              scene.text('"Of course," you reply "Who could say no to two hot chicks like us?"');
            } else {
              if (((s as any).katjaQW ?? 0)?.['annoyed'] === 2) {
                // TODO-QSP: dynamic text: "Well you''re here now, so I suppose I''ll forgive you," she says, letting her f...
                scene.text(`"Well you're here now, so I suppose I'll forgive you," she says, letting her frown fade away into a rueful smile. "But ${((s as any).pcs_nickname || '')}, have you seen all the hot guys around?`);
                // TODO-QSP: dynamic text: Since '+iif(katjaQW['marcus_pussy'] = 1, 'Marcus', '')+iif(katjaQW['marcus_pussy...
                scene.text('Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' ain\'t around, maybe we can find someone to join us sometime?"');
                scene.text('"Of course," you reply "Who could say no to two hot chicks like us?"');
              } else {
                // TODO-QSP: dynamic text: "Have you seen all the hot guys around?" she asks. "Since '+iif(katjaQW['marcus_...
                scene.text('"Have you seen all the hot guys around?" she asks. "Since ' + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 1) ? ('Marcus') : ('')) + ((((s as any).katjaQW ?? 0)?.['marcus_pussy'] + ((s as any).katjaQW ?? 0)?.['ivan_anal'] === 2) ? ('and') : ('')) + ((((s as any).katjaQW ?? 0)?.['ivan_anal'] === 1) ? ('Ivan') : ('')) + ' ain\'t around, maybe we can find someone to join us sometime?"');
                scene.text('"Of course," you reply "Who could say no to two hot chicks like us?"');
              }
            }
          } else {
            scene.text('"This is all so exciting!" she squeals. "And… maybe we can find some time to have fun…? Alone…?"');
            scene.text('Katja winks at you and you can\'t help but smile back.');
            scene.text('"Absolutely…" you say.');
          }
        }
        scene.text('Katja gives you another quick hug, this time from the front in a way that squeezes both your breasts together before carrying on down the hallway past you. She walks with a straight back and a bit of swing in her step.');
        scene.text('Overall, she seems much bolder than she was before. Maybe getting away from her childhood home has made her less conscious about how she is seen?');
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0) {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
        if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['annoyed'] = 1;
          qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
          scene.text('As you\'re walking into the lecture hall, somebody suddenly pokes you on your shoulder. You turn around and see a somewhat annoyed-looking Katja.');
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," she says flatly. "Why haven''t I seen you since we grad...
          scene.text(`"Hey ${((s as any).pcs_nickname || '')}," she says flatly. "Why haven't I seen you since we graduated? I had no idea that you were in this program!"`);
          scene.text('"Sorry, I didn\'t think it was worth mentioning," you say. "Besides, you didn\'t tell me were in this program either!"');
        } else {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['annoyed'] = 2;
          qspCall(s, 'npc_relationship', 'modify', 'A14', 'loathe');
          scene.text('As you\'re walking into the lecture hall, somebody suddenly pokes you on your shoulder. You turn around and see a pretty pissed-looking Katja.');
          scene.text('"Why didn\'t you tell me that you were joining the teaching program?!" she asks.');
          scene.text('"Sorry, I should have told you," you answer.');
        }
      }
      if (((s as any).katjaQW ?? 0)?.['annoyed'] === 1) {
        scene.text('Unable to contain herself, her frown transitions into a smile.');
        scene.text('"Isn\'t this exciting?" she asks, practically bouncing.');
        scene.text('"Yes, it is," you say.');
        scene.text('"We should hang out and study together later."');
        scene.text('"Definitely," you reply.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['annoyed'] === 2) {
          scene.text('Despite her annoyance, she can\'t seem to hold onto her anger and a smile breaks through.');
          scene.text('"Isn\'t this exciting?" she asks.');
          scene.text('"Yes, it is," you say.');
          scene.text('"We should hang out and study together later."');
          scene.text('"Definitely," you reply.');
        } else {
          scene.text('"This is all so exciting!" she says, practically bouncing.');
          scene.text('"Yes, it is," you say.');
          scene.text('"We should hang out and study together later."');
          scene.text('"Definitely," you reply.');
        }
      }
    } else {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
        // TODO-QSP: dynamic text: As you walk into the lecture hall, a pretty redhead walks up to you. "Hey <<$pcs...
        scene.text(`As you walk into the lecture hall, a pretty redhead walks up to you. "Hey ${((s as any).pcs_nickname || '')}! I didn't know you also wanted to become a teacher," she says.`);
        scene.text('"I thought it would make for an interesting education and a fun career," you reply while trying to remember who this girl is.');
        scene.text('"If you want, then we can meet and talk about the lectures and maybe do some studying together," she says.');
        scene.text('"That sounds nice," you reply and she turns around and waves goodbye.');
        // TODO-QSP: dynamic text: You quickly take a seat and start flipping through the pages of the journal that...
        scene.text(`You quickly take a seat and start flipping through the pages of the journal that Tatiana gave you. You find that the redhead is named Katja and she is a former classmate of the original ${((s as any).pcs_firstname || '')}.`);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
          if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
            scene.text('As you enter the lecture hall, you hear a voice behind you. "So are you actually going to study this time around, or are you just here for the sex?" You turn round and see your old classmate, Katja Meynold, with a smile on her face.');
            scene.text('"You could learn a thing or two from me," you say. "It\'s going to get awfully boring around here if all you do is study for five years."');
            // TODO-QSP: dynamic text: Katja shrugs. "I don''t think it''s going to be boring, and '+iif(katjaQW['know_...
            scene.text('Katja shrugs. "I don\'t think it\'s going to be boring, and ' + ((((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) ? ('I don\'t really think you do either since you are here.') : ('that wasn\'t what you told me earlier when you said you were going to study to become a teacher.')) + '"');
            scene.text('"Well, there\'s plenty of good-looking boys here," you say while glancing around and grinning. "I think I\'ll have plenty of ways to have fun."');
            scene.text('"You\'re incorrigible," Katja says with a smile. "But we could chat about the classes and —if you\'re serious about becoming a teacher— do some studying together." She then turns around to find a place to sit.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
              // TODO-QSP: iif(katjaQW['know_going_to_teaching_degree'] = 0, '"Oh, I didn''t know that my school''s biggest slu...
              scene.text('As you look around, you see former classmate Katja talking to a girl you don\'t recognize. When she sees that you\'ve noticed her, she promptly drags the other girl away from you. Seems you have some work to do if you want to repair your relationship with her.');
            } else {
              // TODO-QSP: dynamic text: As you''re walking into the lecture hall, you suddenly come face to face with yo...
              scene.text('As you\'re walking into the lecture hall, you suddenly come face to face with your old classmate, Katja. "Oh, hey ' + ((s as any).pcs_nickname || '') + '," she says a little hesitantly. "\'+iif(katjaQW[\'know_going_to_teaching_degree\'] = 0, \'I didn\'t know that you\'d be starting in the teaching program.\' , \'I wasn\'t sure if you were joking when you said that you would be studying to become a teacher.\')+\' You do know that a teacher has to be a role model for the kids, so maybe you should try to act like an adult," she says, coming off a little sterner than she looks.');
              scene.text('"I am acting like an adult," you reply. "Sex is a very adult thing to partake in. I\'m sure your life would also be much better if you tried being more like me."');
              scene.text('Katja\'s face turns very red, and she just says "bye" before turning around to find a seat furthest away from you. You can\'t help but get the feeling that she might be more interested in the things you do than she lets on.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
            if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
              // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. '+iif(katjaQW['know_going_to_teaching_degree'] = 0, 'I d...
              scene.text('"Hi, ' + ((s as any).pcs_nickname || '') + '. \'+iif(katjaQW[\'know_going_to_teaching_degree\'] = 0, \'I didn\'t know you had decided to study to become a teacher,\', \'I see that you\'ve made your way to our first class,\')+\'" you hear somebody say from behind. When you turn around, you see your former classmate Katja standing there with a smile on her face.');
              // TODO-QSP: dynamic text: "'+iif(katjaQW['know_katja_uni'] = 0, 'I didn''t know you were going to take the...
              scene.text('"' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) ? ('I didn\'t know you were going to take these classes,') : ('Yes, it\'s important to be here for the first class,')) + '" you reply.');
              scene.text('"I think it\'s going to be so fun and exciting. It\'s nice to have friends in the class. We can talk about classes later and maybe study together," she says before saying goodbye and going off to find a place to sit.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
                scene.text('You see a redheaded girl trying to avoid you and recognize her as your old classmate Katja. You decide to approach her. "Hi Katja!"');
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she replies, not looking particularly happy. "You know, ...
                scene.text('"Hi ' + ((s as any).pcs_nickname || '') + '," she replies, not looking particularly happy. "You know, you could try to be nicer and not just look down on others since you think you\'re\'+iif(grupTipe = 1, \' so cool\', \' good at sports\')+\', that way others might like you more," she says before turning around and finding a place to sit.');
              } else {
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. '+iif(katjaQW['know_going_to_teaching_degree'] = 0, 'I di...
                scene.text('"Hi ' + ((s as any).pcs_nickname || '') + '. \'+iif(katjaQW[\'know_going_to_teaching_degree\'] = 0, \'I didn\'t know you had decided to study to become a teacher,\', \'I see that you\'ve made you way to our first class,\')+\'" you hear someone say behind you. When you turn round, you see your former classmate Katja standing there.');
                // TODO-QSP: dynamic text: "'+iif(katjaQW['know_katja_uni'] = 0, 'I didn''t know you were going to take the...
                scene.text('"' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) ? ('I didn\'t know you were going to take these classes,') : ('Yes, it\'s important to be here for the first class,')) + '" you reply.');
                scene.text('"I think it\'s going to be so fun and exciting. It\'s nice to have somebody you already know in the class. Maybe we can talk about classes later," she says before saying goodbye and finding a place to sit.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 4) {
              if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, '+iif(katjaQW['know_going_to_teaching_degree'] = 0, 'I di...
                scene.text('"Hi ' + ((s as any).pcs_nickname || '') + ', \'+iif(katjaQW[\'know_going_to_teaching_degree\'] = 0, \'I didn\'t know you had decided to study to become a teacher,\', \'I see that you have made your way to our first class,\')+\'" you hear someone say behind you. When you turn around, you see your former classmate Katja standing there with a smile on her face.');
                // TODO-QSP: dynamic text: "'+iif(katjaQW['know_katja_uni'] = 0, 'I didn''t know you were going to take the...
                scene.text('"' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) ? ('I didn\'t know you were going to take these classes,') : ('Yes, it\'s important to be here for the first class,')) + '" you reply.');
                // TODO-QSP: dynamic text: "I think it''s going to be so fun and exciting. It''s nice to already have someb...
                scene.text('"I think it\'s going to be so fun and exciting. It\'s nice to already have somebody you know in the class. I always envied that you ' + ((((s as any).grupTipe ?? 0) === 3) ? ('and your group could actually talk about classes and such during breaks, not just empty gossip like with mine.') : ('were so free to not just follow social norms. What a complete waste it was that you just used it to bully everyone else and be the biggest jerks around.')) + ' At least now, nobody will look down on us talking together. We can hang out after class and talk or maybe do some studying together," she says before saying goodbye and finding a place to sit.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
                  scene.text('You see a redheaded girl trying to avoid you, and recognize her as your old classmate Katja. You decide to approach her. "Hi Katja," you say.');
                  // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she replies, not looking particularly happy. "You know, ...
                  scene.text('"Hi ' + ((s as any).pcs_nickname || '') + '," she replies, not looking particularly happy. "You know, you could try to be nicer and\'+iif(grupTipe = 1 or grupTipe = 3, \' not just look down on others since you think you\'re so much smarter than the rest of us,\', \' not be such a bully,\')+\' that way others might like you more," she says before turning around and finding a place to sit.');
                } else {
                  // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. '+iif(katjaQW['know_going_to_teaching_degree'] = 0, 'I di...
                  scene.text('"Hi ' + ((s as any).pcs_nickname || '') + '. \'+iif(katjaQW[\'know_going_to_teaching_degree\'] = 0, \'I didn\'t know you had decided to study to become a teacher.\', \'I see that you\'ve made your way to our first class,\')+\'" you hear someone say behind you. When you turn round, you see your former classmate Katja standing there.');
                  // TODO-QSP: dynamic text: "'+iif(katjaQW['know_katja_uni'] = 0, 'I didn''t know you were going to take the...
                  scene.text('"' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) ? ('I didn\'t know you were going to take these classes,') : ('Yes, it is important to be here for the first class,')) + '" you reply.');
                  scene.text('"I think it\'s going to be so fun and exciting. It\'s nice to have somebody you already know in the class, especially now that nobody\'s going to judge us for talking simply because we belonged to some stupid cliques in school. Maybe we can talk about classes later?" she says before saying goodbye and finding a place to sit.');
                }
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. '+iif(katjaQW['know_going_to_teaching_degree'] = 0, 'I di...
                scene.text('"Hi ' + ((s as any).pcs_nickname || '') + '. \'+iif(katjaQW[\'know_going_to_teaching_degree\'] = 0, \'I didn\'t know you had decided to study to become a teacher,\', \'I see that you have made your way to our first class,\')+\'" you hear someone say behind you. When you turn round, you see your former classmate Katja standing there with a smile on her face.');
                // TODO-QSP: dynamic text: "'+iif(katjaQW['know_katja_uni'] = 0, 'I didn''t know you were going to take the...
                scene.text('"' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) ? ('I didn\'t know you were going to take these classes,') : ('Yes, it\'s important to be here for the first class,')) + '" you reply.');
                scene.text('"I think it\'s going to be so fun and exciting. It\'s nice to have somebody you know in the class. Now hopefully nobody will shun you just because some of the worst people in our old school decided that you were toxic. We can hang out after class and talk or maybe do some studying together," she says before saying goodbye and finding a place to sit.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
                  scene.text('You see a redheaded girl trying to avoid you, and recognize her as your old classmate Katja. You decide to approach her. "Hey Katja," you say.');
                  scene.text('"Don\'t talk to me; you are disgusting!" she says before turning around and finding a place to sit far away from you.');
                } else {
                  // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. '+iif(katjaQW['know_going_to_teaching_degree'] = 0, 'I di...
                  scene.text('"Hi ' + ((s as any).pcs_nickname || '') + '. \'+iif(katjaQW[\'know_going_to_teaching_degree\'] = 0, \'I didn\'t know you had decided to study to become a teacher,\', \'I see that you have also made your way to our first class,\')+\'" you hear somebody say from behind you. When you turn around, you see your former classmate Katja standing there.');
                  // TODO-QSP: dynamic text: "'+iif(katjaQW['know_katja_uni'] = 0, 'I didn''t know you were going to take the...
                  scene.text('"' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) ? ('I didn\'t know you were going to take these classes,') : ('Yes, it\'s important to be here for the first class,')) + '" you reply.');
                  scene.text('"I think it\'s going to be so fun and exciting. It was really terrible the way the others treated you in school, just because some people at school decided that you were toxic. I, for one, am glad to put all that behind us and think it\'s nice to have somebody you already know in the class. Maybe we can talk about classes later?" she says before saying goodbye and finding a place to sit.');
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_katja_uni'] = 1;
  }
  if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_going_to_teaching_degree'] = 1;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
  ]);
  scene.build();
}

function enterPantyCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5  &&  ((s as any).katjaQW ?? 0)?.['dom'] > -30) {
    if (((s as any).PCloSkirt ?? 0) < 3) {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      // TODO-QSP: dynamic text: "Why are you wearing '+iif( PCloSkirt = 0, 'pants', 'such a long skirt')+'?" Kat...
      scene.text('"Why are you wearing ' + (((!((s as any).PCloSkirt ?? 0))) ? ('pants') : ('such a long skirt')) + '?" Katja asks. "I can\'t check to see if you\'re wearing panties or not!"');
      // TODO-QSP: dynamic text: "I am '+iif($pantyworntype = 'none', 'of course not ', '')+'wearing panties," yo...
      scene.text('"I am ' + ((((s as any).pantyworntype ?? 0) === 'none') ? ('of course not ') : ('')) + 'wearing panties," you say.');
      if (((s as any).pantyworntype ?? 0) === 'none') {
        scene.text('"What\'s the point of not wearing panties when there\'s no chance that anyone can get a glimpse of your bare pussy? You can\'t even feel the draft," she says. She looks at the clock and starts dragging you toward the toilets. "We have time before class for me to check if you\'re lying."');
      } else {
        scene.text('"That will not do. Since when did you become a prude?" she asks playfully with a wink. She looks at the clock and starts dragging you toward the toilets. "We have time before class to rectify this mistake of yours."');
      }
      qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Resist Katja', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Resist Katja', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'hate');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No. Not now," you tell Katja as you free yourself from her grip. She looks a little shocked, standing there not knowing what to do. You leave her pondering upon her actions.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Follow Katja to the toilets', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    // TODO-QSP: gt 'katja_uni', 'bathroom_panty_check', $ARGS[1]
  } },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] >= 100) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/panty_check.jpg');
        if (((s as any).pantyworntype ?? 0) === 'none') {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
          qspCall(s, 'arousal', 'vaginal_finger', 1);
          scene.text('Katja moves one of her hands under your skirt and you feel her fingers on your lower lips. "I see that you\'re still a good girl," she whispers while gently rubbing your clit.');
          qspCall(s, 'willpower', 'foreplay', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Remove Katja\'s hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Remove Katja\'s hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'foreplay', 'resist', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    qspCall(st, 'arousal', 'end');
    scene.text('"Stop it! Not here," you tell Katja as you remove her hand from under your skirt. She grins at you and moves away to find a place to sit.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
            ]);
          }
          qspCall(s, 'willpower', 'foreplay', 'self', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Return Katja\'s touch', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Return Katja\'s touch', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'love');
    qspCall(st, 'willpower', 'foreplay', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'vaginal_finger', 2);
    qspCall(st, 'arousal', 'vaginal_finger_give', (-2));
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/double_panty_check.jpg');
    scene.text('You move one of your hands under Katja\'s skirt to find her bare and completely smooth pussy and gently start rubbing her pussy lips. "I\'m not the only good girl around, it seems," you say. You continue rubbing each other\'s pussies and you can feel that she is starting to get wet.');
    scene.text('Suddenly, you are disturbed by loud voices very close by, and you remember that you\'re standing in the classroom with classes about to start. You both quickly withdraw your hands and Katja turns to you saying with a grin and wink in her eye, "This is going to be really fun." She then licks her fingers and leaves to find a place to sit, and you are left wondering what kind of monster you have created.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Enjoy her touch', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'arousal', 'vaginal_finger', 2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/panty_check.jpg');
    scene.text('You just stand there, surprised about how bold Katja has gotten. She continues rubbing your pussy, making it harder for you to keep your voice down.');
    scene.text('Suddenly, you are disturbed by loud voices close by, and she remembers that you\'re standing in the classroom with classes about to start. She quickly withdraws her hand and turns to you, saying with a grin and wink in her eye, "This is going to be really fun." She then licks her fingers and leaves to find a place to sit as you are left wondering what kind of monster you have created.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
          ]);
        } else {
          qspCall(s, 'arousal', 'vaginal_finger', 1);
          scene.text('Katja moves one of her hands under your skirt and gently touches your panty-covered pussy. "What\'s that? I can feel panties," she whispers in shock while gently rubbing your pussy through the fabric. "You\'ve become a very bad girl…" She looks at the clock. "This won\'t do. Come with me, we have time before class starts," she says and starts dragging you towards the bathrooms.');
          qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Resist Katja', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Resist Katja', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'hate');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No! Not now," you tell Katja as you free yourself from her grip. She looks a little shocked, standing there not knowing what to do. You leave her pondering her actions.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Follow Katja to the toilet', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    // TODO-QSP: gt 'katja_uni', 'bathroom_panty_check', $ARGS[1]
  } },
          ]);
        }
      } else {
        if (((s as any).katjaQW ?? 0)?.['slut'] >= 50) {
          scene.img('images/characters/pavlovsk/school/girl/katja/uni/panty_check.jpg');
          if (((s as any).pantyworntype ?? 0) === 'none') {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
            qspCall(s, 'arousal', 'vaginal_finger', 1);
            scene.text('Katja moves one of her hands under your skirt and gently touches your bare pussy. "I see that you\'re still a good girl," she whispers while withdrawing her hand.');
            qspCall(s, 'willpower', 'foreplay', 'self', 'easy');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Remove Katja\'s hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Return Katja\'s touch', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'vaginal_finger_give', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/double_panty_check.jpg');
    scene.text('You move one of your hands under Katja\'s skirt and find her bare, completely smooth pussy and gently touch it before removing your hand. "I can feel that I\'m not the only good girl around here," you say.');
    scene.text('Katja turns to you and grins. "This is going to be real fun. See you later."');
    scene.text('She turns around and leaves to find a place to sit.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Act surprised', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/panty_check.jpg');
    scene.text('You just stand there, surprised about how bold Katja has become. She turns to you and grins. "This is going to be real fun. See you later." She turns around and leaves to find a place to sit.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
            ]);
          } else {
            qspCall(s, 'arousal', 'vaginal_finger', 1);
            scene.text('Katja moves one of her hands under your skirt and gently touches your panty-covered pussy. "What\'s that! I can feel panties," she whispers shocked while withdrawing her hand. "You\'ve become a very bad girl…" She looks at the clock. "This won\'t do. Come with me, we have time before class starts," she says and starts dragging you towards the bathrooms.');
            qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Resist Katja', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Resist Katja', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'hate');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No! Not now," you tell Katja as you free yourself from her grip. She looks a little shocked, standing there not knowing what to do. You leave her pondering her actions.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Follow Katja to the toilet', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    // TODO-QSP: gt 'katja_uni', 'bathroom_panty_check', $ARGS[1]
  } },
            ]);
          }
        } else {
          scene.img('images/characters/shared/headshots_main/big14.jpg');
          if (((s as any).pantyworntype ?? 0) === 'none') {
            scene.text('Katja leans in to you and whispers into your ear, "You\'re not wearing panties, are you?"');
            scene.text('"Of course I\'m not wearing panties!" you answer.');
            scene.text('"That\'s good," she says. "We can check it later. But class comes first." She then turns around and waves while she goes to find a place to sit.');
            scene.actions([
              { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
            ]);
          } else {
            scene.text('Katja leans in to you and whispers into your ear, "You\'re not wearing panties, are you?"');
            scene.text('"Yes…" you answer.');
            scene.text('"What?!" she says looking shocked. She looks at the clock. "This won\'t do. Come with me, we have time before class starts," she says and starts dragging you towards the bathrooms.');
            qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Resist Katja', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Resist Katja', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'hate');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No! Not now," you tell Katja as you free yourself from her grip. She looks a little shocked, standing there not knowing what to do. You leave her pondering her actions.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Follow Katja to the toilet', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    // TODO-QSP: gt 'katja_uni', 'bathroom_panty_check', $ARGS[1]
  } },
            ]);
          }
        }
      }
    }
  } else {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You recall that you had gotten Katja to start taking off her panties during school. Maybe she\'s still not wearing any now?');
    scene.actions([
      { label: 'Ask if she\'s wearing panties', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.text('"So, I\'m still not wearing panties. Are you?" you ask.');
      scene.text('"Yes, of course, I am! Why should\'t I?" she answers.');
      scene.text('"Because life is more fun without panties," you say.');
      scene.text('Looking at the clock, you see that there\'s still enough time before class starts to go to the toilet and have her take off her panties.');
      qspCall(st, 'willpower', 'exhib', 'force', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Drag her to the toilet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Drag her to the toilet', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"We\'re going to do something about this. Come with me," you tell her before grabbing her arm.');
    scene.text('"No, class is starting!" she answers meekly.');
    scene.text('"We have time. Come on," you say, and she gives up resisting and starts following you to the toilet.');
    scene.actions([
      { label: 'Go to the toilet', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'bathroom_katja_panty_remove', $ARGS[1]
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Just find a place to sit', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
      ]);
    } else {
      scene.text('"So, are you wearing panties?" you whisper into Katja\'s ear.');
      scene.text('"Of course I am. Are you?" she says.');
      scene.text('"Yes, but that\'s not the point. I thought I had taught you not to wear panties to school," you say.');
      scene.text('"That is totally the point," she says "If you can wear panties, then so can I."');
      scene.text('You can\'t fault her logic. Looking at the clock, you see that there\'s still enough time before class starts to go to the toilet and have her take off her panties.');
      qspCall(st, 'willpower', 'exhib', 'force', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Drag her to the toilet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Drag her to the toilet', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I think we both need to do something about this. Come with me," you tell her and grab her arm.');
    scene.text('"No, class is starting!" she answers meekly.');
    scene.text('"We have time. Come on," you say, and she gives up resisting and starts following you to the toilet.');
    scene.actions([
      { label: 'Go to the toilet', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'bathroom_katja_panty_remove', $ARGS[1]
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Just find a place to sit', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathroomPantyCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.text('You follow Katja out of the lecture hall and quickly find your way to the girl\'s room. Once you get inside, you see that they are empty save for the two of you.');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.text('"So, show me that you\'re not wearing panties," Katja says.');
    // TODO-QSP: dynamic text: You slowly '+iif(PCloSkirt = 0, 'unzip your pants and pull them down ', 'hike up...
    scene.text('You slowly ' + (((!((s as any).PCloSkirt ?? 0))) ? ('unzip your pants and pull them down ') : ('hike up your skirt ')) + ' so Katja can see your exposed pussy. "See. Are you satisfied?" you ask.');
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 100) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
      scene.text('"Well, let me really check it first," she says with a devilish wink as she moves closer and puts her hand on your pussy and gently starts to rub it. "Yeah, that does feel like a naked pussy. Remember to wear something appropriate so that we don\'t need to go to the bathroom to check in the future," she says, continuing to rub your pussy.');
      qspCall(s, 'arousal', 'vaginal_finger', 1);
      qspCall(s, 'willpower', 'foreplay', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Remove Katja\'s hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove Katja\'s hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'foreplay', 'resist', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Stop it! Not now. We need to go back so we\'re not late for class," you tell her as you remove her hand from your pussy. She grins at you, then heads back to the lecture hall.');
    scene.actions([
      { label: 'Go back and find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'foreplay', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Return Katja\'s touch', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Return Katja\'s touch', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'love');
    qspCall(st, 'willpower', 'foreplay', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'vaginal_finger', 2);
    qspCall(st, 'arousal', 'vaginal_finger_give', (-2));
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/bathroom_double_fingering.jpg');
    scene.text('You move one of your hands under Katja\'s skirt and find her bare, completely smooth pussy and gently start rubbing her pussy lips. You continue rubbing each other and you can feel that she\'s starting to get wet.');
    scene.text('Katja starts moaning softly before she suddenly stops and pulls herself away from you, "Class is starting!" she says in an alarmed voice and runs back to the lecture hall.');
    // TODO-QSP: dynamic text: You quickly '+iif(PCloSkirt = 0, 'zip up your pants ', 'straighten your skirt ')...
    scene.text('You quickly ' + (((!((st as any).PCloSkirt ?? 0))) ? ('zip up your pants ') : ('straighten your skirt ')) + 'and while rushing back to class, wonder what sort of monster you have created.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Enjoy her touch', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'arousal', 'vaginal_finger', 2);
    qspCall(st, 'arousal', 'end');
    scene.text('You just stand there, surprised about how bold Katja has become. She continues rubbing your pussy, making it harder for you to keep your voice down.');
    scene.text('After a little while, she stops and says with a grin and wink, "This will do for now as class is starting soon, so we have to postpone the rest. This is going to be real fun." She then licks her fingers and heads back to the lecture hall.');
    // TODO-QSP: dynamic text: You quickly '+iif(PCloSkirt = 0, 'zip up your pants ', 'straighten your skirt ')...
    scene.text('You quickly ' + (((!((st as any).PCloSkirt ?? 0))) ? ('zip up your pants ') : ('straighten your skirt ')) + 'and while rushing back to class, wonder what sort of monster you have created.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
      ]);
    } else {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
      qspCall(s, 'arousal', 'vaginal_finger', 1);
      scene.text('"Well, let me really check it first," she says with a devilish wink as she moves closer and gently puts her hand on your pussy. "Yeah, that does feel like a naked pussy. Remember to wear something appropriate so that we don\'t need to go to the bathroom to check in the future," she says while removing her hand.');
      qspCall(s, 'willpower', 'foreplay', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Remove Katja\'s hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Return Katja\'s touch', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'vaginal_finger_give', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/bathroom_double_fingering.jpg');
    scene.text('You move one of your hands under Katja\'s skirt and find her bare, completely smooth pussy and gently touch it before removing your hand. "I can feel that I\'m not the only good girl around here," you say.');
    scene.text('"This is going to be real fun, but class is starting soon so we have to run. See you later," she says and hurries back to the lecture room.');
    // TODO-QSP: dynamic text: You quickly '+iif(PCloSkirt = 0, 'zip up your pants ', 'straighten your skirt ')...
    scene.text('You quickly ' + (((!((st as any).PCloSkirt ?? 0))) ? ('zip up your pants ') : ('straighten your skirt ')) + 'and rush back to class.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Act surprised', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    qspCall(st, 'arousal', 'end');
    scene.text('You just stand there, surprised about how bold Katja has become. "This is going to be real fun, but class is starting soon so we have to run. See you later," she says and hurries back to the lecture room.');
    // TODO-QSP: dynamic text: You quickly '+iif(PCloSkirt = 0, 'zip up your pants ', 'straighten your skirt ')...
    scene.text('You quickly ' + (((!((st as any).PCloSkirt ?? 0))) ? ('zip up your pants ') : ('straighten your skirt ')) + 'and rush back to class.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 100) {
      qspCall(s, 'panties', 'remove');
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/katja_lick.jpg');
      // TODO-QSP: dynamic text: Katja gets in close and squats down in front of you. She then '+iif(PCloSkirt = ...
      scene.text('Katja gets in close and squats down in front of you. She then ' + (((!((s as any).PCloSkirt ?? 0))) ? ('unzips your pants and pulls them down, getting you to step out of them. Next, she grabs your panties and they also come off. ') : ('lifts your skirt and pulls your panties off. ')) + 'Instead of getting up, she moves her face closer to your pussy and starts gently licking it.');
      qspCall(s, 'arousal', 'cuni', 1);
      qspCall(s, 'willpower', 'foreplay', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Remove Katja\'s head', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Remove Katja\'s head', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'foreplay', 'resist', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You push Katja\'s face away, "Stop it! Not now. We need to go back so we\'re not late for class!"');
    scene.text('She gets up while grinning at you. "Well, I\'ll have to continue this later. Remember, no panties in class!" She then turns around and heads back to the lecture hall.');
    // TODO-QSP: iif(PCloSkirt = 0, 'You zip up your pants ', 'You straighten your skirt ')+'and hurry back to class,...
    scene.actions([
      { label: 'Go back and find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Enjoy her tongue', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'arousal', 'cuni', 2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/katja_lick.jpg');
    scene.text('You just stand there, surprised about how bold Katja has become. She continues licking your pussy, making it harder for you to keep your voice down.');
    scene.text('After a little while, she stops and gets up and wipes her lips.');
    scene.text('"This will do for now but class is starting soon, so we have to postpone the rest. Remember to not wear panties in class," she winks. "This is going to be real fun. Later."');
    // TODO-QSP: dynamic text: She turns around and leaves you in the toilet. You quickly '+iif(PCloSkirt = 0, ...
    scene.text('She turns around and leaves you in the toilet. You quickly ' + (((!((st as any).PCloSkirt ?? 0))) ? ('zip up your pants. ') : ('straighten your skirt. ')) + 'As you rush back to class, you wonder what sort of monster you have created.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'panties', 'remove');
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
      qspCall(s, 'arousal', 'vaginal_finger', 1);
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: Katja gets in close and squats down in front of you. She then '+iif(PCloSkirt = ...
      scene.text('Katja gets in close and squats down in front of you. She then ' + (((!((s as any).PCloSkirt ?? 0))) ? ('unzips your pants and pulls them down, pulling your panties with them, both sets from your ankles. ') : ('lifts your skirt and tugs your panties down. ')) + 'Instead of getting up, she takes the opportunity to slip a finger inside your pussy.');
      scene.text('"<i>Now</i> you\'re a good girl," she murmurs.');
      qspCall(s, 'willpower', 'foreplay', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Return Katja\'s touch', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Return Katja\'s touch', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'vaginal_finger_give', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/bathroom_double_fingering.jpg');
    scene.text('You slip a hand under Katja\'s skirt and find a smooth, naked pussy yourself.');
    scene.text('"It seems I\'m not the only good girl around here," you say.');
    scene.text('"Remember not to wear panties in the future," Katja grins. She stuffs your panties into your purse with a wink. "This is going to be real fun, but class is starting soon so we have to run. See you later," she says and hurries back to the lecture room.');
    // TODO-QSP: dynamic text: You quickly '+iif(PCloSkirt = 0, 'You zip up your pants ', 'You straighten your ...
    scene.text('You quickly ' + (((!((st as any).PCloSkirt ?? 0))) ? ('You zip up your pants ') : ('You straighten your skirt')) + 'and rush back to class.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Act surprised', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    qspCall(st, 'arousal', 'end');
    scene.text('You just stand there, surprised about how bold Katja has become. "This is going to be real fun, but class is starting soon so we have to run. See you later," she says and hurries back to the lecture room.');
    // TODO-QSP: dynamic text: You quickly '+iif(PCloSkirt = 0, 'zip up your pants ', 'straighten your skirt ')...
    scene.text('You quickly ' + (((!((st as any).PCloSkirt ?? 0))) ? ('zip up your pants ') : ('straighten your skirt ')) + 'and rush back to class.');
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathroomKatjaPantyRemove(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'arousal', 'erotic_nudity', 1);
  qspCall(s, 'arousal', 'flash', 1);
  qspCall(s, 'arousal', 'end');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['pantiesQWstage'] = 5;
  scene.text('You drag Katja out of the lecture hall and hurry over to the girl\'s room. Once you get inside, you quickly check to see they are empty save for the two of you.');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/taking_panties_of.mp4');
    // TODO-QSP: dynamic text: Confirming you''re alone, you '+iif(PCloSkirt > 0, 'pull up your skirt', 'pull d...
    scene.text('Confirming you\'re alone, you ' + ((((s as any).PCloSkirt ?? 0) > 0) ? ('pull up your skirt') : ('pull down your pants')) + ', showing Katja your bare pussy. "Now it\'s your turn."');
    scene.text('Katja looks around a little hesitantly, but then reaches under her skirt and quickly pulls down her panties. "Satisfied?" she says with a grin, holding up her skirt to show her bare pussy.');
    scene.text('"Very satisfied!" you answer. "Now remember to not wear panties to class from now on."');
    // TODO-QSP: iif(PCloSkirt > 3, '"Yes ma''am," Katja says mockingly. ', '"Only if you also wear short skirts," Ka...
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  } else {
    scene.text('"Okay, so let\'s both take off our panties," you say.');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('You reach under your skirt and tugging your panties down your legs. Katja is a little hesitant but quickly follows your lead. You stuff yours into your purse and flip your skirt up, flashing Katja. She smiles back at you, doing the same, if not a little shyly.');
    } else {
      scene.text('You slip your thumbs into the bands of your underwear and tug them down. Katja\'s eyes are trained on your pussy the whole time as you kick your ankles out of the leg holes. Moments later, she follows your lead, slipping her panties down her legs. After the panties have come off and you put them into your purses, she flips her skirt, giving you a fleeting view of her cleanshaven pussy.');
    }
    scene.text('"Much better," you grin. "Let\'s make a deal and always go to class like this from now on."');
    // TODO-QSP: iif(PCloSkirt > 3, '"Yes ma''am," Katja says mockingly. ', '"Only if you also wear short skirts," Ka...
    scene.actions([
      { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLibrary(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['sent_home_from_library_day'] === ((s as any).daystart ?? 0)) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
    scene.text('You approach Katja, who is clearly studying. She notices you and says "I already told you once to go home to sleep until you are better. So go do it".');
    scene.actions([
      { label: 'Apologize and leave', goto: ['uni_library', 'start'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 1, 'library');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
    scene.text('You approach Katja, who is clearly studying. She doesn\'t notice you until you\'re right next to her.');
    if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
      // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she says with a big smile. She gets up to give you a qui...
      scene.text(`"Hi ${((s as any).pcs_nickname || '')}," she says with a big smile. She gets up to give you a quick kiss.`);
      scene.text('"What\'s up?" you say.');
      scene.text('"Just studying for my classes," she says. "I don\'t want to fall behind."');
    } else {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0) {
        // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she says with a big smile and gets up to give you a quic...
        scene.text(`"Hi ${((s as any).pcs_nickname || '')}," she says with a big smile and gets up to give you a quick hug before she sits down again.`);
        scene.text('"What\'s up?" you say.');
        scene.text('"Just studying for my classes," she says. "I don\'t want to fall behind."');
      } else {
        if (((s as any).fame ?? 0)?.['city_slut'] > 200) {
          if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
            // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she says with a smile. "Are you here to study? Or have y...
            scene.text(`"Hi ${((s as any).pcs_nickname || '')}," she says with a smile. "Are you here to study? Or have you turned the library into your hunting ground?" Katja giggles at her own joke.`);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
              scene.text('"Why are you disturbing me?" she scowls. "This is a place to study, so if you\'re here to slut it up, then don\'t."');
            } else {
              // TODO-QSP: dynamic text: "What are you doing here <<$pcs_nickname>>?" she says. "This is a place for stud...
              scene.text(`"What are you doing here ${((s as any).pcs_nickname || '')}?" she says. "This is a place for studying, not hitting on boys."`);
            }
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
            // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she says with a smile. "Are you also here to study?"
            scene.text(`"Hi ${((s as any).pcs_nickname || '')}," she says with a smile. "Are you also here to study?"`);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
              scene.text('"Why are you disturbing me?" she scowls. "Leave me alone. Some of us actually take our studies seriously."');
            } else {
              // TODO-QSP: dynamic text: "What are you doing here <<$pcs_nickname>>?" she says. "I''m trying to study, so...
              scene.text(`"What are you doing here ${((s as any).pcs_nickname || '')}?" she says. "I'm trying to study, so I would like some peace and quiet!" she says, waiting to see your reaction.`);
            }
          }
        }
      }
    }
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      if (((s as any).university ?? 0)?.['semester_week'] > 0) {
        (s as any).i = 0;
        // TODO-QSP: :study_loop
        if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
          if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_max']) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Ask if you can study for your ' + String(((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? '' ?? '') + ' class together', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'studying_ask', $class_list_institution[i], ...
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: You don''t need to study any more this week for your <<$class_list_name[i]>> cla...
            scene.text(`You don't need to study any more this week for your ${((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? ''} class.`);
          }
        }
        (s as any).i = ((s as any).i ?? 0) + (1);
        if (((s as any).i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
          // TODO-QSP: jump 'study_loop'
        }
      } else {
        if (((s as any).university ?? 0)?.['exam_week'] > 0) {
          (s as any).i = 0;
          // TODO-QSP: :exam_loop
          if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
            if (qspFunc(s, 'uni_programs', 'is_exam_over', ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]) === 0) {
              scene.actions([
                { label: '', labelFn: (s: GameState) => 'Ask if you can study for your ' + String(((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? '' ?? '') + ' exam together', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'studying_exam_ask', $class_list_institution...
  } },
              ]);
            }
          }
          (s as any).i = ((s as any).i ?? 0) + (1);
          if (((s as any).i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
            // TODO-QSP: jump 'exam_loop'
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
        scene.actions([
          { label: 'Watch her studying', goto: ['katja_uni', 'study_watch'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Apologize and leave', goto: ['uni_library', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLibrary2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 1, 'library');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/library/library.jpg');
  // TODO-QSP: dynamic text: You and Katja arrive at the university library, where she finds a table and star...
  scene.text(`You and Katja arrive at the university library, where she finds a table and starts to pull out her books from her backpack. "Thanks for coming here with me ${((s as any).pcs_nickname || '')}," she says.`);
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
    if (((s as any).university ?? 0)?.['semester_week'] > 0) {
      (s as any).i = 0;
      // TODO-QSP: :study_loop2
      if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
        if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_max']) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Ask if you can study for your ' + String(((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? '' ?? '') + ' class together', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'studying_ask', $class_list_institution[i], ...
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: You don''t need to study any more this week for your <<$class_list_name[i]>> cla...
          scene.text(`You don't need to study any more this week for your ${((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? ''} class.`);
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
        // TODO-QSP: jump 'study_loop2'
      }
    } else {
      if (((s as any).university ?? 0)?.['exam_week'] > 0) {
        (s as any).i = 0;
        // TODO-QSP: :exam_loop2
        if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
          if (qspFunc(s, 'uni_programs', 'is_exam_over', ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]) === 0) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Ask if you can study for your ' + String(((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? '' ?? '') + ' exam together', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'studying_exam_ask', $class_list_institution...
  } },
            ]);
          }
        }
        (s as any).i = ((s as any).i ?? 0) + (1);
        if (((s as any).i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
          // TODO-QSP: jump 'exam_loop2'
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her studying', goto: ['katja_uni', 'study_watch'] },
  ]);
  scene.build();
}

function enterStudyingAsk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
  if (((s as any).npc_rel ?? 0)?.['A14'] <= 30) {
    scene.text('"Why would I study with you?" she scowls. "You treat me like crap all the time, but when you need help with classes, you suddenly want to hang out? Piss off."');
    scene.text('She returns her attention to her books, pointedly ignoring you.');
    if ((((s as any).week ?? 0) < 6  ||  ((s as any).hour ?? 0) < 23)  &&  ((s as any).hour ?? 0) > 7) {
      scene.actions([
        { label: 'Return to entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'uni_library', 'start');
  } },
        { label: 'Wander around', goto: ['uni_library', 'wander'] },
      ]);
    } else {
      scene.text('The library is closing for the night.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'uni_grounds', '');
  } },
    ]);
  } else {
    // TODO-QSP: iif(npc_rel['A14'] >= 70 or katjaQW['QWstage'] > 0, '"I would love to study with you,"', '"Sounds li...
    scene.actions([
      { label: 'Start studying together', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'studying', $ARGS[1], $ARGS[2]
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStudying(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_together.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).modifier = 0;
  qspCall(s, 'grades', 'optional_activity_attribute', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'yes', Math.min(((s as any).modifier ?? 0)+10, 100));
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).pcs_hotcat ?? 0) > (Math.floor(Math.random() * 16) + 5)) {
    qspGoto(s, 'katja_uni_sex', 'library_threesome1');
  } else {
    if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  Math.min(((s as any).pcs_horny ?? 0), 100) >= (Math.floor(Math.random() * 101) + 50)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
      qspGoto(s, 'katja_uni_sex', 'library_licking1');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: You and Katja start studying for your <<$ARGS[2]>> class. The library is mostly ...
      scene.text(`You and Katja start studying for your ${((s as any).locArgs?.[2] ?? '')} class. The library is mostly quiet so you and Katja try to keep your voices down, though she can't always help herself when she gets excited about the material before realizing her volume and turning red with embarrassment.`);
      if ((0 as any) < (0 as any)) {
        scene.text('You study together for half an hour, making good progress, but can tell that you will need to study more if you want to completely understand this week\'s material.');
      } else {
        scene.text('You study together for half an hour, making good progress, feeling like you have a good grasp on the material that was covered this week.');
      }
      if ((((s as any).week ?? 0) < 6  ||  ((s as any).hour ?? 0) < 23)  &&  ((s as any).hour ?? 0) > 7) {
        qspCall(s, 'katja_meynold_schedule', '');
        if (((s as any).locat ?? 0)?.['katja'] === 29) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStudySelect(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          scene.text('"Well, I have to get going now," Katja says, starting to pack up her stuff. "But it was nice studying together. We should do it again sometime!"');
          scene.text('She leaves the library, giving you a wave and a smile on the way out.');
        }
        scene.actions([
          { label: 'Say goodbye to Katja and return to the library entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'uni_library', 'start');
  } },
        ]);
      } else {
        scene.text('"Well, it looks like the library is closing up," Katja says, reaching to pack up her stuff. "But it was nice studying together. We should do it again sometime!"');
        scene.text('You leave together, parting ways at the entrance with a wave and a smile.');
      }
      scene.actions([
        { label: 'Say goodbye to Katja and leave the library', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'uni_grounds', '');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStudyingExamAsk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
  if (((s as any).npc_rel ?? 0)?.['A14'] <= 30) {
    scene.text('"Why would I study with you?" she scowls. "You treat me like crap all the time, but suddenly when you need help with classes, you want to hang out? Piss off."');
    scene.text('She returns her attention to her books, pointedly ignoring you.');
    if ((((s as any).week ?? 0) < 6  ||  ((s as any).hour ?? 0) < 23)  &&  ((s as any).hour ?? 0) > 7) {
      scene.actions([
        { label: 'Return to entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'uni_library', 'start');
  } },
        { label: 'Wander around', goto: ['uni_library', 'wander'] },
      ]);
    } else {
      scene.text('The library is closing for the night.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'uni_grounds', '');
  } },
    ]);
  } else {
    // TODO-QSP: iif(npc_rel['A14'] >= 70 or katjaQW['QWstage'] > 0, '"I would love to study with you for the <<$ARGS...
    scene.actions([
      { label: 'Start studying together', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'studying_exam', $ARGS[1], $ARGS[2]
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStudyingExam(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 3, 'studying_exam');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_together.jpg');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0));
  // TODO-QSP: gs 'mood', 'raise', (trait_vars['academic']*5 -10)
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: dynamic text: You and Katja start studying for the <<$ARGS[2]>> exam. The library is mostly qu...
  scene.text(`You and Katja start studying for the ${((s as any).locArgs?.[2] ?? '')} exam. The library is mostly quiet, so you try to keep your voices down, though she can't always help herself when she gets excited about the material before realizing her volume and turning red with embarrassment.`);
  if (((s as any).pcs_sleep ?? 0) < 5) {
    (s as any).no_study = 1;
    scene.text('You\'re so tired that you\'re constantly falling asleep and Katja tells you to go home and sleep.');
  } else {
    if (((s as any).pcs_sleep ?? 0) < 30) {
      (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
      scene.text('You\'re very tired and Katja has to constantly poke you so you stay awake.');
    }
  }
  if (((s as any).alko ?? 0) >= 6) {
    (s as any).no_study = 1;
    scene.text('You\'re so drunk that Katja can\'t understand most of what you\'re saying and after a short while she tells you to go home and sleep it off.');
  } else {
    if (((s as any).alko ?? 0) >= 4) {
      (s as any).study_mod = ((s as any).study_mod ?? 0) - (40);
      scene.text('You\'re drunk and have trouble concentrating on what you\'re reading or what Katja is saying. You mostly just nod and agree with her.');
    } else {
      if (((s as any).alko ?? 0) >= 2) {
        (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
        scene.text('You\'re feeling a little tipsy, but feel like you\'re doing great. However, Katja seems quite skeptical of your explanations and corrects you very often.');
      }
    }
  }
  if (((s as any).drugVars ?? 0)?.['mentats_dose'] > 0) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) + (30);
  }
  if (((s as any).pcs_mood ?? 0) < 50) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
    scene.text('You\'re in a bad mood and it clearly affects your studying. Katja tries to cheer you up, but it doesn\'t help much.');
  }
  if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) - (40);
    scene.text('You\'re stoned, which makes it hard to concentrate on studying. You mostly just agree with everything Katja is saying.');
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) + (20);
  }
  if (((s as any).pcs_energy ?? 0) < 5) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
    scene.text('You\'re extremely hungry and it\'s hard to think about anything other than food.');
  } else {
    if (((s as any).pcs_energy ?? 0) < 10) {
      (s as any).study_mod = ((s as any).study_mod ?? 0) - (10);
      scene.text('You\'re very hungry and it affects your ability to concentrate.');
    } else {
      if (((s as any).pcs_energy ?? 0) < 20) {
        (s as any).study_mod = ((s as any).study_mod ?? 0) - (10);
        scene.text('You\'re hungry and your thoughts often drift to food, affecting your performance negatively.');
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) > 90) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) - (10);
    scene.text('You\'re extremely horny and your thoughts often drift to sex, affecting your ability to study.');
  }
  if (((s as any).pain ?? 0)?.['total'] > 90) {
    (s as any).no_study = 1;
    scene.text('You\'re in so much pain that you can\'t study. Katja tells you to get something for your pain and go home to sleep it off.');
  } else {
    if (((s as any).pain ?? 0)?.['total'] > 75) {
      (s as any).study_mod = ((s as any).study_mod ?? 0) - (40);
      scene.text('You\'re in so much pain that you have a very hard time concentrating on studying. Katja looks concerned and often asks if there\'s something she can do to help.');
    } else {
      if (((s as any).pain ?? 0)?.['total'] > 60) {
        (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
        scene.text('Your pain is constantly bothering you and makes it hard to study. Katja is a little concerned about you.');
      }
    }
  }
  (s as any).modifier = 0;
  (s as any).study_mod = Math.max(0, ((Math.floor(Math.random() * (((s as any).modifier ?? 0) + ((s as any).study_mod ?? 0) - 30 + ((s as any).study_mod ?? 0) + 1)) + (30 + ((s as any).study_mod ?? 0))) + 10)/33);
  if (((s as any).no_study ?? 0) === 1) {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    scene.text('You follow Katja\'s advice and pack your stuff. You\'re in no condition to study right now.');
  } else {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    if ((!((s as any).study_mod ?? 0))) {
      scene.text('You study for half an hour, but you don\'t think you are improving.');
    } else {
      if (((s as any).study_mod ?? 0) === 1) {
        scene.text('You study for half an hour and think you are improving a little.');
      } else {
        if (((s as any).study_mod ?? 0) === 2) {
          scene.text('You study for half an hour and believe that you\'re making good progress in getting ready for the exam.');
        } else {
          scene.text('You study for half an hour and believe that you\'re improving a lot.');
        }
      }
    }
    qspCall(s, 'grades', 'grade_award', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).study_mod ?? 0));
  }
  qspCall(s, 'stat', '');
  if ((((s as any).week ?? 0) < 6  ||  ((s as any).hour ?? 0) < 23)  &&  ((s as any).hour ?? 0) > 7  &&  (!((s as any).no_study ?? 0))) {
    qspCall(s, 'katja_meynold_schedule', '');
    if (((s as any).locat ?? 0)?.['katja'] === 29) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStudySelect(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"Well, I have to get going now," Katja says, starting to pack up her stuff. "But it was nice studying together. We should do it again sometime!"');
      scene.text('She leaves the library, giving you a wave and a smile on the way out.');
    }
    scene.actions([
      { label: 'Say goodbye to Katja and return to the library entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'uni_library', 'start');
  } },
    ]);
  } else {
    if ((!((s as any).no_study ?? 0))) {
      scene.text('"Well, it looks like the library is closing up," Katja says, reaching to pack up her stuff. "But it was nice studying together. We should do it again sometime!"');
      scene.text('You leave together, parting ways at the entrance with a wave and a smile.');
    } else {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['sent_home_from_library_day'] = ((s as any).daystart ?? 0);
      scene.text('You say goodbye to Katja and leave the library');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'uni_grounds', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStudySelect(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['semester_week'] > 0) {
    (s as any).i = 0;
    // TODO-QSP: :study_loop3
    if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
      if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_max']) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Study for your ' + String(((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? '' ?? '') + ' class with Katja', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'studying_ask', $class_list_institution[i], ...
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: You don''t need to study any more this week for your <<$class_list_name[i]>> cla...
        scene.text(`You don't need to study any more this week for your ${((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? ''} class.`);
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
      // TODO-QSP: jump 'study_loop3'
    }
  } else {
    if (((s as any).university ?? 0)?.['exam_week'] > 0) {
      (s as any).i = 0;
      // TODO-QSP: :exam_loop3
      if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
        if (qspFunc(s, 'uni_programs', 'is_exam_over', ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]) === 0) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Study for your ' + String(((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? '' ?? '') + ' exam with Katja', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_uni', 'studying_exam_ask', $class_list_institution...
  } },
          ]);
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
        // TODO-QSP: jump 'exam_loop3'
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStudyWatch(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 1, 'library_watch');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
  scene.text('You sit down and watch Katja study for a while. She sometimes asks you a question, but you mostly just watch her as she works.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue to watch her', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((st as any).pcs_hotcat ?? 0) > (Math.floor(Math.random() * 16) + 5)) {
      qspGoto(st, 'katja_uni_sex', 'library_threesome1');
    } else {
      if (((st as any).npc_had_sex ?? 0)?.['A14']  &&  Math.min(((st as any).pcs_horny ?? 0), 100) >= (Math.floor(Math.random() * 101) + 50)  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
        qspGoto(st, 'katja_uni_sex', 'library_licking1');
      } else {
        (st as any).minut = ((st as any).minut ?? 0) + 5;
        qspCall(st, 'stat', '');
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
        scene.text('She finishes her studying and gets ready to move on.');
        if ((((st as any).week ?? 0) < 6  ||  ((st as any).hour ?? 0) < 23)  &&  ((st as any).hour ?? 0) > 7) {
          scene.text('"Well, I have to get going now," Katja says, starting to pack up her stuff. "But it was nice having you here."');
          scene.text('She leaves the library, giving you a wave and a smile on the way out.');
          scene.actions([
            { label: 'Say goodbye to Katja and return to the library entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'uni_library', 'start');
  } },
          ]);
        } else {
          scene.text('"Well, it looks like the library is closing up," Katja says, reaching to pack up her stuff. "But it was nice having you here."');
          scene.text('You leave together, parting ways at the entrance with a wave and a smile.');
        }
        scene.actions([
          { label: 'Say goodbye to Katja and leave the library', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'uni_grounds', '');
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterDormRoomInvite(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('As you\'re leaving the last class of the day, an excited Katja grabs your arm.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I bought a new dress and I want to hear your opinion on it. ...
  scene.text(`"${((s as any).pcs_nickname || '')}! I bought a new dress and I want to hear your opinion on it. Do you have time to come to my dorm room to see it?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with Katja', goto: ['katja_uni', 'dorm_room_walk'] },
    { label: 'You don\'t have time', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell Katja that you don\'t have time right now. She looks a little sad.');
    scene.text('"Okay, another time then…"');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDormRoomWalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/KH.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).katjaQW ?? 0)?.['slut'] < 20) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = 20;
  }
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'stat', '');
  scene.text('"… and I bought the <i>cutest</i> dress at the mall. There\'s so much variety here! Way more than what we had in Pavlovsk. And I passed the salon, so I thought about getting a mani-pedi but I decided I didn\'t have time. There\'s more swim shops here too but half of them are super slutty. I don\'t know how any girl could wear some of the things they sell. They might as well just be strings!"');
  scene.text('As you are walking to the dorms, Katja keeps telling you about her shopping trip yesterday, seeming unusually chatty today. When you reach the elevator, the light above it indicates it\'s already on the top floor and you\'d have to wait for it to come all the way back down.');
  scene.text('Katja turns to you. "I live on the second floor, so let\'s just take the stairs."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk up the stairs', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/Stair_case_voyeur.jpg');
    scene.text('You head up the stairs together and as you get to the second landing, Katja suddenly grabs you by the arm and yanks you backward, stopping you from going any higher. You turn to look at her in confusion and see her eyes are wide.');
    scene.text('Following her gaze up the staircase, you are greeted with the sight of two girls kissing, pressed up against the door. One of them has her hand up the other\'s blouse, fondling her breast. In return, the second girl\'s hand is under the first\'s skirt, and from this angle you can see she\'s knuckle-deep in her pussy. Both of them seem to be trying to see who can get the other\'s tongue deeper down the other\'s throat.');
    scene.text('They don\'t stop, so engrossed in each other\'s bodies that they don\'t seem to have noticed you. In turn, the two of you stand there in awkward silence, unable to turn your eyes away from the intimate scene in front of you. Katja squirms next to you, struggling not to make a sound, her breathing labored.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/Stair_case_voyeur.jpg');
    scene.text('After what seems like an eternity, one of the girls breaks the kiss.');
    scene.text('"Your room, <i>now</i>," she says and drags the other girl up the stairs. Seconds later, the sound of a door opening and closing echoes through the staircase.');
    scene.text('"Let\'s go to your room," you say, eyeing Katja. She just nods, her face practically as red as her hair.');
    scene.actions([
      { label: 'Go to Katja\'s room', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['knows_dorm_room_number'] = 1;
    qspCall(st, 'arousal', 'voyeur', 3, 'lesbian');
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 70;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dorm_room.jpg');
    scene.text('You continue up the stairs and into Katja\'s room in complete silence. Her side of the room is a lot less feminine than you would expect from a girl like her. The walls are plastered with posters and notes, and her shelves are lined with books. Her roommate\'s side looks barren by comparison.');
    scene.text('After you have taken in the look of her room, you turn to look at Katja. She hasn\'t said anything since before the staircase and her blush hasn\'t faded in the slightest. Just as you\'re about to say something, she breaks the silence instead.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>> have you ever done that? I mean kissed a girl and…" Her voice...
    scene.text(`"${((st as any).pcs_nickname || '')} have you ever done that? I mean kissed a girl and…" Her voice falters at the end, but she's now looking at you with her big beautiful eyes.`);
    if (((st as any).stat ?? 0)?.['female_sexual_partners'] > 0) {
      scene.actions([
        { label: 'Tell Katja you have kissed a girl and gone further', goto: ['katja_uni', 'experienced_tell'] },
      ]);
    } else {
      if (((st as any).stat ?? 0)?.['women_kissed'] > 0) {
        scene.actions([
          { label: 'Tell Katja you have kissed a girl but not gone further', goto: ['katja_uni', 'inexperienced_tell'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Tell Katja that you have not kissed a girl', goto: ['katja_uni', 'no_experienced_tell'] },
      { label: 'Tell Katja that you don\'t want to discuss such things', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'loathe');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell that you don\'t want to talk about these things, and she looks heartbroken. You quickly change the conversation and ask her to show you the clothes she mentioned.');
    scene.actions([
      { label: 'Watch her try on her new clothes', goto: ['katja_uni', 'try_clothes'] },
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

function enterExperiencedTell(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  // TODO-QSP: dynamic text: You tell Katja that you have '+iif(girl > 5 or (stat['cuni_give'] + stat['vagina...
  scene.text('You tell Katja that you have ' + ((((s as any).girl ?? 0) > 5  ||  (((s as any).stat ?? 0)?.['cuni_give'] + ((s as any).stat ?? 0)?.['vaginal_finger_give'] + ((s as any).stat ?? 0)?.['vaginal_fist_give'] + ((s as any).stat ?? 0)?.['vaginal_dildo_give'] + ((s as any).stat ?? 0)?.['vaginal_strap_give'] + ((s as any).stat ?? 0)?.['vaginal_vibe_give']) > 10) ? ('a lot') : ('some')) + 'experience having sex with girls.');
  scene.text('She bites her lip hesitantly.');
  scene.text('"Would you like to kiss me?" she asks, looking at you with her big eyes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss Katja', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 3;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    qspCall(st, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
    scene.text('You move closer to Katja and slowly put your lips to hers. Your tongue slips into her mouth and finds hers, carefully but eagerly pressing back against yours. You push it further, and you spend the next few minutes playing a full game of tonsil hockey.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
    scene.text('Eventually, the two of you break apart, a thin trail of saliva trailing between her lips and yours.');
    scene.text('"Whoa…" she murmurs. "That was something else…"');
    scene.text('"It was nice," you agree.');
    scene.text('"Nice?! It was more than nice!" Katja giggles. "I\'ve never experienced anything like that before. Do… do you think we could do that again? And maybe…"');
    scene.text('Her voice trails off and she places her hand gently on your thigh.');
    scene.actions([
      { label: 'Say no', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No, that\'s all for today," you tell her. She doesn\'t seem completely satisfied with your decision, but doesn\'t complain. "Besides, you wanted to show me some clothes, didn\'t you?"');
    scene.text('"Oh! Yes!" she squeaks, clearly having forgotten after all the excitement. "Just give me a second!"');
    scene.actions([
      { label: 'Watch her try on her new clothes', goto: ['katja_uni', 'try_clothes'] },
    ]);
  } },
      { label: 'Show Katja how women make love', goto: ['katja_uni_sex', 'first_time'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterInexperiencedTell(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You tell Katja that you have kissed a girl before, but not done anything else.');
  scene.text('She bites her lip hesitantly.');
  scene.text('"Would you like to kiss me?" she asks, looking at you with her big eyes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss Katja', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 3;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    qspCall(st, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
    scene.text('You move closer to Katja and slowly put your lips to hers. Your tongue slips into her mouth and finds hers. She recoils on instinct but you chase after her, making sure her lips never leave yours. You push it further and end up spending the next few minutes playing a full game of tonsil hockey.');
    scene.text('Eventually, the two of you break apart, a thin trail of saliva trailing between her lips and yours.');
    scene.text('"Whoa…" she murmurs. "That was something else…"');
    scene.text('"It was nice," you agree.');
    scene.text('"Nice?! It was more than nice!" Katja giggles. "I\'ve never experienced anything like that before. Do… do you think we could do that again? And maybe…"');
    scene.text('She trails off, barely breathing, as if fearing the answer to your question either way.');
    scene.actions([
      { label: 'Say no', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No, I think that\'s enough for today," you tell her. You watch her visibly deflate, but she doesn\'t speak up or complain. "Besides, you wanted to show me some clothes, didn\'t you?"');
    scene.text('"Oh! Yes!" she squeaks, clearly having forgotten after all the excitement. "Just give me a second!"');
    scene.actions([
      { label: 'Watch her try on her new clothes', goto: ['katja_uni', 'try_clothes'] },
    ]);
  } },
      { label: 'Have sex with Katja', goto: ['katja_uni_sex', 'first_time'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNoExperiencedTell(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You tell Katja that you have never kissed a girl.');
  scene.text('She bites her lip hesitantly.');
  scene.text('"Do you maybe want to… find out what it\'s like? Together…?" she asks, looking at you with her big eyes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss Katja', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['QWstage'] = 3;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (20);
    qspCall(st, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_kiss.jpg');
    scene.text('You move closer to Katja and slowly put your lips to hers. The two of you awkwardly bump together, feeling the heat of your blushes radiating off each other\'s cheeks. Very, very carefully, you experimentally push your tongue into her mouth. As soon as it touches her lips, she flinches but settles into it and clumsily tries to reciprocate, letting her tongue brush against your own.');
    scene.text('Eventually, the two of you break apart, a thin trail of saliva trailing between her lips and yours.');
    scene.text('"Whoa…" she murmurs. "That was something else…"');
    scene.text('"Yeah," is all you can say in return, panting a little.');
    scene.text('"I\'ve never experienced anything like that before," Katja giggles. "Do… do you think we could do that again? And maybe…"');
    scene.text('She trails off, barely breathing, as if fearing the answer to your question either way.');
    scene.actions([
      { label: 'Say no', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"No, I think that\'s enough for today," you tell her. You watch her visibly deflate, but she doesn\'t speak up or complain. "Besides, you wanted to show me some clothes, didn\'t you?"');
    scene.text('"Oh! Yes!" she squeaks, sitting up, clearly having forgotten after your little \'experience\'. "Just give me a second!"');
    scene.actions([
      { label: 'Watch her try on her new clothes', goto: ['katja_uni', 'try_clothes'] },
    ]);
  } },
      { label: 'Have sex with Katja', goto: ['katja_uni_sex', 'first_time'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTryClothes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/showing_clothes1.jpg');
  scene.text('Katja grabs some shopping bags and starts pulling out the clothes in them before laying them neatly on her bed.');
  scene.text('She starts with first outfit; a short black skirt and a white t-shirt.');
  scene.text('"It looks great," you smile and she seems to swell with pride, grinning back.');
  scene.text('Katja keeps changing through outfits, showing you what she bought —which is a lot— while you make comments on each one. It\'s hard not to be impressed with her sense of fashion. She finally get the last item she laid out.');
  scene.text('"This is the dress I told you about!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'See the dress', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/showing_clothes2.jpg');
    scene.text('Katja takes her time putting the dress on and is almost teasing you when she finishes slipping on the dress that fits her curves wonderfully. It looks fantastic on her, and you are about to say something when the door opens and a girl steps in.');
    scene.text('"Hi Katja, Maxim had a meeting with one of the professors, so I- Oh! You have a guest."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    ((st as any).sofiaQW = (st as any).sofiaQW ?? {})['know'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big260.jpg');
    scene.text('Katja moves over quickly to introduce you.');
    // TODO-QSP: dynamic text: "Sofia! This is <<$pcs_nickname>> my '+iif($university['enrolled_in'] = 'teachin...
    scene.text('"Sofia! This is ' + ((st as any).pcs_nickname || '') + ' my \'+iif($university[\'enrolled_in\'] = \'teaching studies\', \'classmate\', \'friend from my hometown\')+\'. I was just showing her the clothes I bought yesterday." She then turns to you. "' + ((st as any).pcs_nickname || '') + ', this is Sofia, my roommate."');
    // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>! It''s so nice to meet Katja''s friends since she doesn''t...
    scene.text('"Hi ' + ((st as any).pcs_nickname || '') + '! It\'s so nice to meet Katja\'s friends since she doesn\'t seem to have a lot of them," Sofia says, which clearly makes Katja blush. "So \'+iif( $university[\'enrolled_in\'] = \'teaching_studies\', \'you\'re also studying to become a teacher like Katja\', \'what are you studying\')+\'?" she asks. \'+iif( $university[\'enrolled_in\'] = \'teaching_studies\', \'"yes"\', \'"I\'m \'+iif(university[\'student\'] = 1, \'in the \' + $func(\'uni_programs\', \'get_program_name\') + \' program\', \'not studying at the university\')+\'" \')+\' you answer.');
    // TODO-QSP: dynamic text: "Cool. I''m '+iif($university['enrolled_in'] = 'nursing', 'also studying to beco...
    scene.text('"Cool. I\'m ' + ((((st as any).university ?? 0)?.['enrolled_in'] === 'nursing') ? ('also studying to become a nurse. Now that I think about it, I do think I\'ve seen you in class.') : ('studying to become a nurse.')) + ' So Katja is showing you her new clothes? She has such a great sense of fashion. Next time I have money to go shopping, I should bring her. Did you finish the show or was I disturbing?"');
    // TODO-QSP: dynamic text: "No we''ve finished, and <<$pcs_nickname>> was about to leave," Katja says, look...
    scene.text(`"No we've finished, and ${((st as any).pcs_nickname || '')} was about to leave," Katja says, looking at you as if trying to say she is sorry.`);
    scene.text('"That\'s right, I will be leaving now," you say.');
    scene.text('"Nice meeting you," Sofia says. "I wish we had more time to chat since I barely know anybody here, just Katja and my boyfriend Maxim. See you again soon. I\'m sure we\'ll become great friends," she continues.');
    scene.text('You say goodbye to Katja and as you leave the room, you can hear Sofia continuing to talk the ear off Katja.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKatjaLazarCafe(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'uni_cafe';
  (s as any).location_type = 'public_indoors';
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['lazar_uni_meet'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/lazar_cafe_uni.jpg');
  scene.text('As you and Katja sit in the cafeteria eating lunch while talking about life at the university, someone suddenly sits down at your table. You glance over and see that it\'s Lazar.');
  scene.text('"Hey girls, what\'s up? How\'s college life treating you?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him to get lost', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/lazar_cafe_uni.jpg');
    scene.text('You frown as he intrudes on your lunch with Katja. "Do you mind? This was a private conversation."');
    scene.text('He gets up with a frown. "Damn, I just wanted to say hi. You don\'t have to be a bitch about it."');
    scene.text('Katja looks at him walking away before turning to you. "That wasn\'t very nice."');
    scene.text('After that, Katja isn\'t very talkative. When she finishes her lunch, she gets up and excuses herself, not bothering to invite you to go with her.');
    scene.actions([
      { label: 'Leave', goto: ['uni_cafe', ''] },
    ]);
  } },
    { label: 'Talk to him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/lazar_cafe_uni.jpg');
    if (((st as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  (((st as any).katjaQW ?? 0)?.['slut'] > 50  ||  ((st as any).katjaQW ?? 0)?.['QWstage'] >= 4)  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
      scene.text('You smile at Lazar. "Things are going well. How are you finding college life?"');
      scene.text('He nods with a friendly smile. "Good to hear. College life is amazing! I thought secondary school was a blast, but this blows that away. By the way, you girls are looking nice today, especially you Katja. You know the three of us should totally hang out some night and have some fun…"');
      scene.text('Katja grins at his comment and obvious interest. His body language and the way he says things leave no doubt in your mind what he means. The three of you talk well past having finished your lunch; Lazar is charming, friendly and flirty the whole time. Katja seems to respond in kind, which only encourages him more. It\'s soon time for you to leave and you all get up from the table.');
      scene.actions([
        { label: 'Leave', goto: ['uni_cafe', ''] },
      ]);
    } else {
      scene.text('You smile at Lazar. "Things are going well. How are you finding college life?"');
      scene.text('He nods with a friendly smile. "Good to hear. College life is amazing! I thought secondary school was a blast, but this blows that away. By the way, you girls are looking nice today, especially you Katja. You know the three of us should totally hang out some night and have some fun…"');
      scene.text('Katja seems to be in two minds about his comment and obvious interest. His body language and the way he says things leave no doubt in your mind what he means. The three of you talk well past having finished your lunch; Lazar is charming, friendly and flirty the whole time, but it\'s soon time for you to leave and you all get up from the table.');
      scene.actions([
        { label: 'Leave', goto: ['uni_cafe', ''] },
      ]);
    }
  } },
    { label: 'Be flirty', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/lazar_cafe_uni.jpg');
    if (((st as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  (((st as any).katjaQW ?? 0)?.['slut'] > 50  ||  ((st as any).katjaQW ?? 0)?.['QWstage'] >= 4)  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
      scene.text('You smile at Lazar. "Things are going well, even better now that you\' re here. So, are you finding college life as exciting as I am?"');
      scene.text('He nods with a friendly smile. "Damn, glad things are going so well for you," he says with a wink. "College life is amazing! I thought secondary school was a blast, but this blows that away. By the way, you girls are looking nice today, especially you Katja. You know the three of us should totally hang out some night and have some fun…"');
      scene.text('Katja grins at his comment and obvious interest. His body language and the way he says things leave no doubt in your mind what he means. The three of you talk well past having finished your lunch; Lazar is charming, friendly and flirty the whole time and Katja seems to respond in kind, which only encourages him more. It\'s soon time for you to leave and you all get up from the table.');
      scene.actions([
        { label: 'Leave', goto: ['uni_cafe', ''] },
      ]);
    } else {
      scene.text('You smile at Lazar. "Things are going well, even better now that you\'re here. So, are you finding college life as exciting as I am?"');
      scene.text('He nods with a friendly smile. "Damn, glad things are going so well for you," he says with a wink. "College life is amazing! I thought secondary school was a blast, but this blows that away. By the way, you girls are looking nice today, especially you Katja. You know the three of us should totally hang out some night and have some fun…"');
      scene.text('Katja seems to be in two minds about his comment and obvious interest. His body language and the way he says things leave no doubt in your mind what he means. The three of you talk well past having finished your lunch; Lazar is charming, friendly and flirty the whole time, but it\'s soon time for you to leave and you all get up from the table.');
      scene.actions([
        { label: 'Leave', goto: ['uni_cafe', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'first_in_class_meet':
      enterFirstInClassMeet(s, scene);
      break;
    case 'panty_check':
      enterPantyCheck(s, scene);
      break;
    case 'bathroom_panty_check':
      enterBathroomPantyCheck(s, scene);
      break;
    case 'bathroom_katja_panty_remove':
      enterBathroomKatjaPantyRemove(s, scene);
      break;
    case 'library':
      enterLibrary(s, scene);
      break;
    case 'library2':
      enterLibrary2(s, scene);
      break;
    case 'studying_ask':
      enterStudyingAsk(s, scene);
      break;
    case 'studying':
      enterStudying(s, scene);
      break;
    case 'studying_exam_ask':
      enterStudyingExamAsk(s, scene);
      break;
    case 'studying_exam':
      enterStudyingExam(s, scene);
      break;
    case 'study_select':
      enterStudySelect(s, scene);
      break;
    case 'study_watch':
      enterStudyWatch(s, scene);
      break;
    case 'dorm_room_invite':
      enterDormRoomInvite(s, scene);
      break;
    case 'dorm_room_walk':
      enterDormRoomWalk(s, scene);
      break;
    case 'experienced_tell':
      enterExperiencedTell(s, scene);
      break;
    case 'inexperienced_tell':
      enterInexperiencedTell(s, scene);
      break;
    case 'no_experienced_tell':
      enterNoExperiencedTell(s, scene);
      break;
    case 'try_clothes':
      enterTryClothes(s, scene);
      break;
    case 'katja_lazar_cafe':
      enterKatjaLazarCafe(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_uni: LocationDef = {
  name: 'katja_uni',
  title: 'The University Library',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
