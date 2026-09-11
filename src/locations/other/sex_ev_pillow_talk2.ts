import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSmallTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'plans_later');
  qspCall(s, 'sex_ev_pillow_talk2', 'weather_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'general_sex_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'relationship_talk');
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    qspCall(s, 'sex_ev_talk', 'morning_talk');
  }
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'topics');
  } },
  ]);
  scene.build();
}

function enterWeatherTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['weather_pillow_talk'] === 0) {
    if (((s as any).temper ?? 0) >= 28) {
      scene.actions([
        { label: 'It\'s so hot', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['weather_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It\'s so hot today," you pant. "I\'m sweating after that. And not just from the sex."');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> nods. "I need a shower..."
    scene.text(`"Yeah," ${((s as any).npcdesc ?? 0)} nods. "I need a shower..."`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
      ]);
    } else {
      if (((s as any).temper ?? 0) <= 10) {
        scene.actions([
          { label: 'It\'s so cold', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['weather_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "Brrr," you shiver, cuddling up closer against <<$npcdesc>>'s body. "It's so chi...
    scene.text(`"Brrr," you shiver, cuddling up closer against ${((s as any).npcdesc ?? 0)}'s body. "It's so chilly today."`);
    // TODO-QSP: dynamic text: "You get cold easily?" <<$npcdesc>> asks, seemingly pleased by your naked body p...
    scene.text(`"You get cold easily?" ${((s as any).npcdesc ?? 0)} asks, seemingly pleased by your naked body pressed up against his.`);
    scene.actions([
      { label: 'Not really', handler: (st: GameState) => {
    ((s as any).pc_gets_chilly ?? {})[String((s as any).npcID ?? 0)] = (-1);
    scene.text('"Not really," you shake your head. "I\'m usually pretty tolerant of the cold. Must be the contrast from how warm I was during the sex."');
    scene.actions([
      { label: 'Smile', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You smile softly at <<$npcdesc>> who grins back confidently, wrapping his arm ar...
    scene.text(`You smile softly at ${((s as any).npcdesc ?? 0)} who grins back confidently, wrapping his arm around you.`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
      { label: 'Grin', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You grin at <<$npcdesc>> who grins back just as wide as he wraps his arm around ...
    scene.text(`You grin at ${((s as any).npcdesc ?? 0)} who grins back just as wide as he wraps his arm around you.`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
      { label: 'Demure', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You snuggle in closer to <<$npcdesc>> without further comment, letting the impli...
    scene.text(`You snuggle in closer to ${((s as any).npcdesc ?? 0)} without further comment, letting the implication of your words speak for itself. You figure he got the message when he grins as he wraps his arm around you.`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
    ]);
  } },
      { label: 'Sometimes', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sometimes yes, sometimes no. I think I'm just like anybody else," you shrug, sn...
    scene.text(`"Sometimes yes, sometimes no. I think I'm just like anybody else," you shrug, snuggling closer into ${((s as any).npcdesc ?? 0)}'s warmth.`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
      { label: 'I\'m always cold', handler: (st: GameState) => {
    ((s as any).pc_gets_chilly ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: dynamic text: "I'm always cold," you shiver, snuggling as far as you can into <<$npcdesc>>'s w...
    scene.text(`"I'm always cold," you shiver, snuggling as far as you can into ${((s as any).npcdesc ?? 0)}'s warmth. "I would wear a jacket in the summer."`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterGeneralSexTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk2', 'fav_body_part');
  qspCall(s, 'sex_ev_pillow_talk2', 'favorite_position');
  scene.build();
}

function enterFavBodyPart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['body_talk'] === 0) {
    scene.actions([
      { label: 'What do you like about my body?', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['body_talk'] = 1;
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    // TODO-QSP: dynamic text: "What do you find sexy about me?" you ask <<$npcdesc>>.
    scene.text(`"What do you find sexy about me?" you ask ${((s as any).npcdesc ?? 0)}.`);
    if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
      scene.text('"Your tits obviously," he smiles, glancing down to admire them.');
      if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
        scene.actions([
          { label: 'You like \'em small?', handler: (st: GameState) => {
    scene.text('"These itty bitty titties?" you giggle, looking down at your modest chest. "You like small boobs?"');
    qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
      scene.text('"I love them," he grins. "Small tits are cute <i>and</i> sexy."');
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_average') {
        scene.text('"My ideal is just a little bigger," he admits with a smile. "But that doesn\'t mean I don\'t think yours are are beautiful as hell. I don\'t discriminate when it comes to tits."');
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big') {
          scene.text('"Truth be told, I like big busty tits the most," he admits with a smile. "But it\'s just a preference. Doesn\'t mean I don\'t think yours are beautiful as hell."');
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_huge') {
            scene.text('"I like big melon honkers," he admits with a smile. "But it\'s just a preference. Doesn\'t mean I can\'t appreciate a pretty A-cup."');
            if (((s as any).pcs_cupsize ?? 0) < 6) {
              scene.text('"I\'m a double A actually," you grin back');
            }
          } else {
            scene.text('"Big melons, small apples, flat walls, I love \'em all," he grins and bows his head to kiss along the side of your breast.');
          }
        }
      }
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
        ]);
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_tits_average')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_big')) {
          }
        }
      }
      scene.actions([
        { label: 'Really? (insecure)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
      scene.text('"You really think so?" you ask, surprised. You self consciously grope yourself, saying, "You don\'t think they\'re too small?"');
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
        scene.text('"I love all tits," he says, bowing his head to kiss along the side of your breast. "But I love small tits like yours most of all."');
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_average') {
          scene.text('"My preferences run a little bigger," he admits but smiles at you. "But tits are tits. I love them all."');
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big') {
            scene.text('"I do like it when girls have a big rack," he admits but smiles at you. "But tits are tits. I love them all."');
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_huge') {
              scene.text('"I love gigantic tits," he admits but smiles at you. "But tits are tits. I love them all."');
            } else {
              scene.text('"Boobs are boobs," he says, bowing his head to kiss along the side of your breast. He grins. "And I love all boobs."');
            }
          }
        }
      }
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_tits_average')) {
        scene.text('"You really think so?" you ask, surprised. You self consciously grope yourself, saying, "You don\'t think they\'re too big?"');
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
          scene.text('"My preferences run a little smaller," he admits but smiles at you. "But tits are tits. I love them all."');
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_small') {
            scene.text('"I prefer smaller boobs to bigger ones," he admits but smiles at you. "But tits are tits. I love them all."');
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_huge') {
              scene.text('"I love big titties," he grins, admiring your glorious rack. "Actually, I love all titties. But big titties are the best."');
            } else {
              scene.text('"Boobs are boobs," he says, bowing his head to kiss along the side of your breast. He grins. "And I love all boobs."');
            }
          }
        }
      } else {
        scene.text('"You really think so?" you ask, surprised. You self consciously grope yourself, saying, "You really like them that much? You don\'t wish they were... different?"');
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
          scene.text('"I do like it when girls have a big rack," he admits but smiles at you. "But tits are tits. I love them all."');
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_small') {
            scene.text('"I prefer smaller boobs generally," he admits but smiles at you. "But tits are tits. I love them all."');
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_average') {
              scene.text('"They\'re perfect," he says, bowing his head to kiss along the side of your breast. He grins. "And I love all boobs."');
            } else {
              scene.text('"Boobs are boobs," he says, bowing his head to kiss along the side of your breast. He grins. "And I love all boobs."');
            }
          }
        }
      }
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
        { label: 'Glad you think so', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    // TODO-QSP: dynamic text: "Aww! Thanks," you smile fondly at <<$npcdesc>>. "Means a lot to me that you thi...
    scene.text(`"Aww! Thanks," you smile fondly at ${((s as any).npcdesc ?? 0)}. "Means a lot to me that you think so."`);
    scene.text('"Boobs are great," he grins. "And your boobs are especially great because you let me fuck you."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
        { label: 'I like them too', handler: (st: GameState) => {
    scene.text('"Me too," you grin. "I think they\'re my best asset."');
    scene.text('"Mhmm..." He nods and bows his head to kiss your nipple.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
      ]);
    } else {
      if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'ass') {
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
          scene.text('"It\'s all about dat ass," he grins, reaching around to give said ass a firm squeeze.');
        } else {
          scene.text('"I love your ass," he smiles, running his hand up your thigh to give your bottom a firm squeeze.');
        }
        scene.actions([
          { label: 'Really? (insecure)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Really?" you ask, surprised. "My ass? Not my boobs? Or my pussy?"');
    scene.text('"No way." He shakes his head. "Ass is the sexiest thing about a girl, and it\'s the sexiest thing about you."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
          { label: 'Glad you think so', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    // TODO-QSP: dynamic text: "Aww! Thanks," you smile fondly at <<$npcdesc>>. "Means a lot to me that you thi...
    scene.text(`"Aww! Thanks," you smile fondly at ${((s as any).npcdesc ?? 0)}. "Means a lot to me that you think so."`);
    scene.text('"There\'s something irresistible about a good ass," he grins, grabbing another handful of yours.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
          { label: 'I like it too', handler: (st: GameState) => {
    scene.text('"Me too," you grin. "It\'s my best <i>ass</i>et," you add with a wink.');
    scene.text('"Damn right," he says, unable to resist giving it another grab.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
          { label: 'Oh you\'re one of those', handler: (st: GameState) => {
    scene.text('"Oh," you say. "You\'re one of <i>those</i>."');
    scene.text('"One of what?"');
    scene.text('"An ass man," you say, rolling your eyes.');
    scene.text('"Damn right," he grins, unable to resist giving it another grab.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
        ]);
      } else {
        if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'pussy') {
          // TODO-QSP: gs 'arousal', 'foreplay', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
          qspCall(s, 'stat', '');
          scene.text('"I love your pussy," he says, his fingers slowly running up the inside of your thigh to caress your lower lips.');
          if (((s as any).stat ?? 0)?.['think_virgin'] !== 1  &&  (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  ||  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
            scene.actions([
              { label: 'You just like fucking it', handler: (st: GameState) => {
    scene.text('"You\'re just saying that because you get to fuck it," you smirk teasingly.');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (((s as any).sex_ev ?? 0)?.['kuni'] > 0  ||  ((s as any).npc_kuni_times ?? 0)?.[String((s as any).npcID ?? 0)])) {
      // TODO-QSP: gs 'arousal', 'vaginal_finger', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      // TODO-QSP: gs 'arousal', 'vaginal_finger', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      qspCall(s, 'stat', '');
      scene.text('"That\'s not true," he smirks back. "I love eating it too."');
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        ((s as any).sex_ev ?? {})['creampie_eat'] = (((s as any).sex_ev ?? {})['creampie_eat'] ?? 0) + (1);
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your cum-filled pussy before drawing it back out to suck the cocktail of cum and your juices off his finger.');
      } else {
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your pussy before drawing it back out to suck your juices off his finger.');
      }
      scene.text('"You taste good," he says, licking his lips.');
    } else {
      if (((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"That\'s what pussies are for," he grins.');
      } else {
        scene.text('"That\'s not the <i>only</i> reason," he says. "There\'s just something hot about them. But yours is especially hot when I\'m fucking it."');
        // TODO-QSP: dynamic text: <<$npcdesc>> grins shamelessly.
        scene.text(`${((s as any).npcdesc ?? 0)} grins shamelessly.`);
      }
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
            ]);
          } else {
            if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
              scene.actions([
                { label: 'You\'re just saying that because you deflowered me', handler: (st: GameState) => {
    scene.text('"You\'re just saying that because you\'re the first one who got to fuck it," you smirk teasingly.');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (((s as any).sex_ev ?? 0)?.['kuni'] > 0  ||  ((s as any).npc_kuni_times ?? 0)?.[String((s as any).npcID ?? 0)])) {
      // TODO-QSP: gs 'arousal', 'vaginal_finger', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      // TODO-QSP: gs 'arousal', 'vaginal_finger', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      qspCall(s, 'stat', '');
      scene.text('"That\'s not true," he smirks back. "I love eating it too."');
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        ((s as any).sex_ev ?? {})['creampie_eat'] = (((s as any).sex_ev ?? {})['creampie_eat'] ?? 0) + (1);
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your cum-filled pussy before drawing it back out to suck the cocktail of cum and your juices off his finger.');
      } else {
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your pussy before drawing it back out to suck your juices off his finger.');
      }
      scene.text('"But you were also really tight," he says, licking his lips. "Mmm... You taste good..."');
    } else {
      scene.text('"That\'s not the <i>only</i> reason," he says. "There\'s just something hot about them. But yours is especially hot because I got to be your first."');
      // TODO-QSP: dynamic text: <<$npcdesc>> grins shamelessly.
      scene.text(`${((s as any).npcdesc ?? 0)} grins shamelessly.`);
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
              ]);
            } else {
              if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                scene.actions([
                  { label: 'You just want to fuck me', handler: (st: GameState) => {
    scene.text('"You\'re just saying that because you want to fuck me," you smirk teasingly.');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (((s as any).sex_ev ?? 0)?.['kuni'] > 0  ||  ((s as any).npc_kuni_times ?? 0)?.[String((s as any).npcID ?? 0)])) {
      // TODO-QSP: gs 'arousal', 'vaginal_finger', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      // TODO-QSP: gs 'arousal', 'vaginal_finger', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      qspCall(s, 'stat', '');
      scene.text('"Not just that," he smirks back. "I like the taste."');
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        ((s as any).sex_ev ?? {})['creampie_eat'] = (((s as any).sex_ev ?? {})['creampie_eat'] ?? 0) + (1);
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your cum-filled pussy before drawing it back out to suck the cocktail of cum and your juices off his finger.');
      } else {
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your pussy before drawing it back out to suck your juices off his finger.');
      }
      scene.text('"You taste good," he says, licking his lips.');
    } else {
      scene.text('"That\'s not the <i>only</i> reason," he says. "There\'s just something hot about them. Even fingering you is fun."');
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
                ]);
              }
            }
          }
          scene.actions([
            { label: 'Really? (insecure)', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal_finger', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: gs 'arousal', 'vaginal_finger', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"You really think so?" you ask. "Not my boobs or my ass or-"');
    // TODO-QSP: dynamic text: Your next words are interrupted by a gasp as <<$npcdesc>> drives a finger knuckl...
    scene.text(`Your next words are interrupted by a gasp as ${((s as any).npcdesc ?? 0)} drives a finger knuckle deep into your just-fucked pussy. Soft squelching sounds emanate from between your legs as he gently caresses your insides, forcing whimpers from your lips while he stares into your eyes.`);
    scene.text('"Yeah..." he says, giving a predatory smile as he draws his hand away trailing strands of your juices. "Your pussy is the best."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
            { label: 'Glad you think so', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  ||  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Glad you think so," you smile at <<$npcdesc>>. "I'd hate to find out you don't ...
      scene.text(`"Glad you think so," you smile at ${((s as any).npcdesc ?? 0)}. "I'd hate to find out you don't appreciate the pussy you're fucking."`);
    } else {
      // TODO-QSP: dynamic text: "Glad you think so," you smile at <<$npcdesc>>. "Always nice to get compliments....
      scene.text(`"Glad you think so," you smile at ${((s as any).npcdesc ?? 0)}. "Always nice to get compliments."`);
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
            { label: 'I like it too', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  ||  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Me too," you grin at <<$npcdesc>>. "I like the way it lets me fuck you."
      scene.text(`"Me too," you grin at ${((s as any).npcdesc ?? 0)}. "I like the way it lets me fuck you."`);
    } else {
      // TODO-QSP: dynamic text: "Me too," you grin at <<$npcdesc>>. "I've always thought my pussy was cute."
      scene.text(`"Me too," you grin at ${((s as any).npcdesc ?? 0)}. "I've always thought my pussy was cute."`);
    }
    scene.text('"Glad we\'re in agreement," he grins back.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
          ]);
        } else {
          // TODO-QSP: gs 'arousal', 'foreplay', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
          // TODO-QSP: gs 'arousal', 'foreplay', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
          qspCall(s, 'stat', '');
          scene.text('"Your legs," he says, slowly caressing you up and down the curve of your thigh. It\'s tantalizing, the way he dances the tips of his fingers across your skin, sending goosebumps wherever they go.');
          scene.actions([
            { label: 'Really?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Really?" you ask, startled. "I would have expected boobs or ass or pussy, but your favorite thing about me is my legs?"');
    scene.text('"Yeah," he shrugs. "There\'s something... enticing about them. Every girl has pussy and tits, but a girl\'s legs call to me for some reason."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
            { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you grin, shamelessly admiring your own body.');
    scene.text('"Sleek or thicc," he says affectionately. "Long or toned... I just want to dive between them."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
          ]);
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterFavoritePosition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fav_pos_talk'] === 0) {
    scene.actions([
      { label: 'Talk favorite positions', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fav_pos_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk4.jpg');
    scene.text('"I\'m curious. What\'s your favorite position?" you ask.');
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
      scene.text('"I know it\'s kind of basic, but I like missionary."');
      scene.actions([
        { label: 'Me too', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.actions([
      { label: 'It\'s pleasant', handler: (st: GameState) => {
    scene.text('"I like it too," you smile back. "There\'s just something... pleasant about missionary. I just love the feeling of a guy between my legs."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'It\'s intimate', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  (((s as any).sex_ev ?? 0)?.['creampie_allowance'] > 0  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== '')) {
      scene.text('"I like it too," you smile back. "I like how I can see your face when you come inside me."');
    } else {
      scene.text('"I like it too," you smile back. "I being able to see your face. Really emphasizes the \'love\' part of \'making love.\'"');
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Like being on bottom', handler: (st: GameState) => {
    scene.text('"I like it too," you smile back. "."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Like being on your back', handler: (st: GameState) => {
    scene.text('"I like it too. But I think it\'s just because I like being on my back," you laugh.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Get to be lazy', handler: (st: GameState) => {
    scene.text('"I like it too. But I think it\'s just because I get to be lazy and just lay back," you laugh.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Like feeling his weight', handler: (st: GameState) => {
    scene.text('"I like it too," you smile back. "I love the <i>weight</i> of a guy on top of me. Pressing on my chest and my legs and through his cock into my pussy. There\'s something just so hot about it."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    ]);
  } },
        { label: 'It <i>is</i> basic', handler: (st: GameState) => {
    scene.text('"Really?" You give him a look. "I mean, you\'re not wrong. It <i>is</i> basic. Don\'t you ever want to spice it up?"');
    scene.text('"I can\'t help what I like," he shrugs back.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      ]);
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
        scene.text('"I like fucking girls doggystyle."');
        scene.actions([
          { label: 'Me too', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.actions([
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "It feels better in doggy. Hits the inside of my pussy just right."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Goes deeper', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "Dick hits so much deeper in doggystyle."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"Me too," you grin back wickedly. "There\'s something weirdly hot about it. Like it\'s dirtier. Which is <i>such</i> a turnon for me."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Like getting pounded', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "Doggystyle is the best position to get pounded in."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Like getting your hair grabbed', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I love it when a guy grabs me by the hair and <i>pulls me</i> onto his cock."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
          scene.text('"I like it when the girl\'s on top. Watching her tits bounce, seeing her moan."');
          scene.actions([
            { label: 'Me too', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.actions([
      { label: 'It\'s fun', handler: (st: GameState) => {
    scene.text('"I love riding dick!" you grin back. "."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I love bouncing on your dick! I can\'t get that feeling in any other position."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Good angle', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "Your cock rubs against the inside of my pussy in a whole different way. I can only get that when I\'m on top."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Like control', handler: (st: GameState) => {
    scene.text('"Me too," you grin back wickedly. "I like being in charge."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
            scene.text('"I love getting my cock sucked."');
            scene.actions([
              { label: 'You love blowjobs too', handler: (st: GameState) => {
    scene.text('"What a coincidence! I love sucking cock," you grin.');
    scene.text('"I know what I like about it," he grins back. "But why do <i>you</i> like it?"');
    scene.actions([
      { label: 'Making guys feel good', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I like making guys feel good. Hearing them moan and feeling them squirm between my lips and knowing that it\'s because of me..." You shiver involuntarily. "It makes me feel sexy."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'You\'re service oriented', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"I think I just like making other people feel good. Like, pleasing them. Hearing a guy moan, knowing he\'s enjoying my head, I guess that just makes me feel good too."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Oral fixation', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).stat ?? 0)?.['cigarettes_smoked'] > 0) {
      scene.text('"Oral fixation," you smirk. "Whether it\'s a cigarette, crunching carrots or chewing on the end of my pen, I just like having something in my mouth. But cock is the best."');
    } else {
      scene.text('"Oral fixation," you smirk. "Whether it\'s my thumb between my teeth, crunching carrots or chewing on the end of my pen, I just like having something in my mouth. But cock is the best."');
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'The taste', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I like the taste of cock. There\'s something so <i>raw</i> and manly about it. The salty sweat, the smell, the texture on my tongue..." You shiver involuntarily. "Everything about it turns me on."');
    if (((s as any).sex_ev ?? 0)?.['mouth_cum_gross'] === 1) {
      // TODO-QSP: dynamic text: "You didn't seem to like the taste when I came in your mouth," <<$npcdesc>> smir...
      scene.text(`"You didn't seem to like the taste when I came in your mouth," ${((s as any).npcdesc ?? 0)} smirks.`);
      scene.text('"Okay, <i>that\'s</i> different," you protest. "I said I like the taste of your cock, not the taste of your cum."');
    } else {
      // TODO-QSP: dynamic text: "Explains why you're so good at it," <<$npcdesc>> smirks, running his thumb acro...
      scene.text(`"Explains why you're so good at it," ${((s as any).npcdesc ?? 0)} smirks, running his thumb across your lips. "You were gobbling it up like it was your last meal."`);
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'titjob') {
              scene.text('"I like fucking girls tits."');
              scene.actions([
                { label: 'You like titjobs too', handler: (st: GameState) => {
    scene.text('"I like getting my tits fucked too. It\'s really hot."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
              ]);
            } else {
              if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === '69') {
                scene.text('"I like 69ing."');
                scene.actions([
                  { label: 'You like 69 too', handler: (st: GameState) => {
    scene.text('"Me too! It\'s really hot being able to suck cock and get eaten out at the same time."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
                ]);
              } else {
                if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
                  scene.text('"I like assfucking girls."');
                  scene.actions([
                    { label: 'You like anal too', handler: (st: GameState) => {
    scene.text('"I like getting my ass fucked too. It\'s really hot."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterRelationshipTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk2', 'dont_hookup');
  scene.build();
}

function enterDontHookup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).sex_ev ?? 0)?.['virgin'] === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: 'Don\'t usually hook up like this', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    // TODO-QSP: '"I don''t usually hook up with guys like this," ' + iif(stat['hookup_count'] < 10, 'you admit with ...
    if ((Math.floor(Math.random() * 1000) + 1) < ((s as any).fame ?? 0)[((s as any).region ?? 0) + '_sex']  &&  ((s as any).fame ?? 0)[((s as any).region ?? 0) + '_sex'] > 200) {
      // TODO-QSP: dynamic text: <<$npcdesc>> snorts loudly.
      scene.text(`${((s as any).npcdesc ?? 0)} snorts loudly.`);
      // TODO-QSP: dynamic text: "Oh come on. I know who you are. Don't you know about how many rumors there are ...
      scene.text(`"Oh come on. I know who you are. Don't you know about how many rumors there are around town about a girl named ${((s as any).pcs_nickname ?? 0)} who will spread their legs for anyone?"`);
      scene.actions([
        { label: 'Blush', handler: (st: GameState) => {
    scene.text('You gulp as your face grows hot.');
    scene.text('"I didn\'t realize people talked that much," you stammer."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
      ]);
    } else {
      scene.text('"Oh really? What made me the exception?"');
      if (((s as any).stat ?? 0)?.['last_sex_day_man'] > ((s as any).daystart ?? 0) - 30  &&  ((s as any).stat ?? 0)?.['last_sex_day_man'] > 0) {
        scene.actions([
          { label: 'Bad dry spell', handler: (st: GameState) => {
    // TODO-QSP: '"I''ve been in a bit of a dry spell," you admit, twisting your mouth into a wry grimace. "Okay, mor...
    if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
      // TODO-QSP: dynamic text: "Damn!" <<$npcdesc>> exclaims. "I can't go a week without busting my nut! I don'...
      scene.text(`"Damn!" ${((s as any).npcdesc ?? 0)} exclaims. "I can't go a week without busting my nut! I don't know how you lasted this long!"`);
    } else {
      // TODO-QSP: dynamic text: "Glad I could be of help then," <<$npcdesc>> grins back.
      scene.text(`"Glad I could be of help then," ${((s as any).npcdesc ?? 0)} grins back.`);
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
        ]);
      }
      scene.actions([
        { label: 'He\'s cute', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"I thought you were cute." You peck him on the cheek. "I couldn\'t resist."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
        { label: 'Really needed to get laid', handler: (st: GameState) => {
    scene.text('"I <i>really</i> needed a good lay," you grin. "Thought you\'d do in a pinch."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterDatingQuestion(s: GameState, scene: SceneBuilder): void {
  if (((s as any).know_npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).know_npc_wife ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).know_npc_single ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([
      { label: 'Ask if he has a girlfriend', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk5.jpg');
    scene.text('"So," you say casually. "Got a girlfriend?"');
    if (((s as any).npc_wife ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_stats', 'npc_is_married');
      if (((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'open') {
        ((s as any).npc_open_marriage ?? {})[String((s as any).npcID ?? 0)] = 1;
        // TODO-QSP: dynamic text: "Wife actually," <<$npcdesc>> replies. "But she knows I'm sticking it in other g...
        scene.text(`"Wife actually," ${((s as any).npcdesc ?? 0)} replies. "But she knows I'm sticking it in other girls. We're in an open marriage She's probably getting stuck by a few guys herself right now."`);
      } else {
        if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
          // TODO-QSP: dynamic text: "Wife actually," <<$npcdesc>> replies. "But don't worry about her. You're much b...
          scene.text(`"Wife actually," ${((s as any).npcdesc ?? 0)} replies. "But don't worry about her. You're much better in bed."`);
        } else {
          if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual') {
            // TODO-QSP: dynamic text: "Wife actually," <<$npcdesc>> replies. "But I don't think this is ."
            scene.text(`"Wife actually," ${((s as any).npcdesc ?? 0)} replies. "But I don't think this is ."`);
          } else {
            if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
              if (((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'open') {
                ((s as any).npc_open_marriage ?? {})[String((s as any).npcID ?? 0)] = 1;
                // TODO-QSP: dynamic text: "Wife actually," <<$npcdesc>> replies. "But she knows I'm sticking it in other g...
                scene.text(`"Wife actually," ${((s as any).npcdesc ?? 0)} replies. "But she knows I'm sticking it in other girls. She's probably getting stuck by a few guys herself right now."`);
              } else {
                // TODO-QSP: dynamic text: "Wife actually," <<$npcdesc>> replies. "But don't worry about her. You're much b...
                scene.text(`"Wife actually," ${((s as any).npcdesc ?? 0)} replies. "But don't worry about her. You're much better in bed."`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'sex_ev_stats', 'npc_is_dating');
        if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
          // TODO-QSP: dynamic text: "Nah," <<$npcdesc>> replies. "I don't want to be tied down. I like to keep thing...
          scene.text(`"Nah," ${((s as any).npcdesc ?? 0)} replies. "I don't want to be tied down. I like to keep things loose."`);
        } else {
          if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual') {
            scene.text('');
          } else {
            if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
              scene.text('');
            }
          }
        }
      } else {
        qspCall(s, 'sex_ev_stats', 'npc_is_single');
        if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
          // TODO-QSP: dynamic text: "Nah," <<$npcdesc>> replies. "I don't want to be tied down. I like to keep thing...
          scene.text(`"Nah," ${((s as any).npcdesc ?? 0)} replies. "I don't want to be tied down. I like to keep things casual. Too many girls out there to enjoy."`);
          scene.actions([
            { label: 'Same', handler: (st: GameState) => {
    scene.text('"I know what you mean," you smirk back. "I like sleeping around too much to settle down. Gotta have fun while I\'m still young."');
    qspCall(s, 'sex_ev_pillow_talk2', 'relationship_talk');
  } },
            { label: 'Same (lesbian)', handler: (st: GameState) => {
    scene.text('"I know what you mean," you smirk back. "Girls are just too much fun to fuck."');
    // TODO-QSP: dynamic text: <<$npcdesc>> eyes you curiously.
    scene.text(`${((s as any).npcdesc ?? 0)} eyes you curiously.`);
    scene.text('"What? I can\'t enjoy girls too?" you say with an amused shrug.');
    qspCall(s, 'sex_ev_pillow_talk2', 'relationship_talk');
  } },
          ]);
        } else {
          if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual') {
            scene.text('');
          } else {
            if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
              scene.text('');
            }
          }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterTakeAShower(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['shower'] === 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'house_party'  &&  ((s as any).sex_ev ?? 0)?.['sex_over'] > 0) {
    // TODO-QSP: act iif($sex_ev['loc'] = 'npc_home', 'Ask to borrow his shower', 'Gonna go take a shower'):
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
      scene.text('"I could use a shower right now," you declare, hauling yourself out of bed. "Mind if I borrow yours?"');
    } else {
      scene.text('"I\'m gonna go take a shower," you declare, hauling yourself out of bed.');
    }
    if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).npcID ?? 0) === 'A34') {
      // TODO-QSP: dynamic text: "Why don't I join you in there?" <<$npcdesc>> asks with a glint in his eye. "I c...
      scene.text(`"Why don't I join you in there?" ${((s as any).npcdesc ?? 0)} asks with a glint in his eye. "I could keep you company."`);
      scene.actions([
        { label: 'I prefer to be alone', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry <<$npc_lovername[$npcID]>>. I like my alone time," you smirk teasingly an...
    scene.text(`"Sorry ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}. I like my alone time," you smirk teasingly and saunter off into the bathroom.`);
    scene.actions([
      { label: 'Go shower', goto: ['sex_ev_shower', 'after_alone'] },
    ]);
  } },
        { label: 'Sure', handler: (st: GameState) => {
    scene.text('"Why not?" you shrug and wave him over.');
    scene.actions([
      { label: 'Shower together', goto: ['sex_ev_shower', 'shower_together1'] },
    ]);
  } },
        { label: 'Maybe next time', handler: (st: GameState) => {
    scene.text('"Maybe next time," you smirk teasingly and saunter off into the bathroom.');
    scene.actions([
      { label: 'Go shower', goto: ['sex_ev_shower', 'after_alone'] },
    ]);
  } },
        { label: 'Nice try', handler: (st: GameState) => {
    scene.text('"Nice try, but no," you say, giving him a knowing smirk and saunter off into the bathroom.');
    scene.text('"Can\'t blame a guy for trying," he calls after you.');
    scene.actions([
      { label: 'Go shower', goto: ['sex_ev_shower', 'after_alone'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Sure," <<$npcdesc>> says. "I'll be right here when you get back."
      scene.text(`"Sure," ${((s as any).npcdesc ?? 0)} says. "I'll be right here when you get back."`);
      scene.actions([
        { label: 'Go shower', goto: ['sex_ev_shower', 'after_alone'] },
        { label: 'Invite him to join', handler: (st: GameState) => {
    scene.text('"You know..." you say enticingly. "I bet there\'s room for two in there. Might be nice to have... company?"');
    scene.text('You give him a smile and he smiles back.');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"Sure," he says as he gets up. "We could... save water this way."');
    } else {
      scene.text('"That sounds like fun," he says, getting up.');
    }
    scene.text('He joins you at the door and you take him by the hand, entering the bathroom together.');
    scene.actions([
      { label: 'Shower together', goto: ['sex_ev_shower', 'shower_together1'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'small_talk':
      enterSmallTalk(s, scene);
      break;
    case 'weather_talk':
      enterWeatherTalk(s, scene);
      break;
    case 'general_sex_talk':
      enterGeneralSexTalk(s, scene);
      break;
    case 'fav_body_part':
      enterFavBodyPart(s, scene);
      break;
    case 'favorite_position':
      enterFavoritePosition(s, scene);
      break;
    case 'relationship_talk':
      enterRelationshipTalk(s, scene);
      break;
    case 'dont_hookup':
      enterDontHookup(s, scene);
      break;
    case 'dating_question':
      enterDatingQuestion(s, scene);
      break;
    case 'take_a_shower':
      enterTakeAShower(s, scene);
      break;
    default:
      enterSmallTalk(s, scene);
      break;
  }
}

export const sex_ev_pillow_talk2: LocationDef = {
  name: 'sex_ev_pillow_talk2',
  title: '"I could use a shower right now," you declare, hauling yours',
  region: 'other',
  enter: enter,
};
