import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSmallTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'plans_later');
  qspCall(s, 'sex_ev_pillow_talk2', 'weather_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'general_sex_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'relationship_talk');
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    qspCall(s, 'sex_ev_talk', 'morning_talk');
  }
  // TODO-QSP: end
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['weather_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It\'s so hot today," you pant. "I\'m sweating after that. And not just from the sex."');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> nods. "I need a shower..."
    scene.text(`"Yeah," ${((s as any).npcdesc ?? 0)} nods. "I need a shower..."`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
      ]);
    } else {
      if (((s as any).temper ?? 0) <= 10) {
        scene.actions([
          { label: 'It\'s so cold', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['weather_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "Brrr," you shiver, cuddling up closer against <<$npcdesc>>'s body. "It's so chi...
    scene.text(`"Brrr," you shiver, cuddling up closer against ${((s as any).npcdesc ?? 0)}'s body. "It's so chilly today."`);
    // TODO-QSP: dynamic text: "You get cold easily?" <<$npcdesc>> asks, seemingly pleased by your naked body p...
    scene.text(`"You get cold easily?" ${((s as any).npcdesc ?? 0)} asks, seemingly pleased by your naked body pressed up against his.`);
    scene.actions([
      { label: 'Not really', handler: (st: GameState) => {
    if (!(s as any).pc_gets_chilly) (s as any).pc_gets_chilly = {}; (s as any).pc_gets_chilly[String((s as any).npcID ?? 0)] = (-1);
    scene.text('"Not really," you shake your head. "I\'m usually pretty tolerant of the cold. Must be the contrast from how warm I was during the sex."');
    scene.actions([
      { label: 'Smile', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You smile softly at <<$npcdesc>> who grins back confidently, wrapping his arm ar...
    scene.text(`You smile softly at ${((s as any).npcdesc ?? 0)} who grins back confidently, wrapping his arm around you.`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
      { label: 'Grin', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You grin at <<$npcdesc>> who grins back just as wide as he wraps his arm around ...
    scene.text(`You grin at ${((s as any).npcdesc ?? 0)} who grins back just as wide as he wraps his arm around you.`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
      { label: 'Demure', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You snuggle in closer to <<$npcdesc>> without further comment, letting the impli...
    scene.text(`You snuggle in closer to ${((s as any).npcdesc ?? 0)} without further comment, letting the implication of your words speak for itself. You figure he got the message when he grins as he wraps his arm around you.`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    ]);
  } },
      { label: 'Sometimes', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sometimes yes, sometimes no. I think I'm just like anybody else," you shrug, sn...
    scene.text(`"Sometimes yes, sometimes no. I think I'm just like anybody else," you shrug, snuggling closer into ${((s as any).npcdesc ?? 0)}'s warmth.`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
      { label: 'I\'m always cold', handler: (st: GameState) => {
    if (!(s as any).pc_gets_chilly) (s as any).pc_gets_chilly = {}; (s as any).pc_gets_chilly[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: dynamic text: "I'm always cold," you shiver, snuggling as far as you can into <<$npcdesc>>'s w...
    scene.text(`"I'm always cold," you shiver, snuggling as far as you can into ${((s as any).npcdesc ?? 0)}'s warmth. "I would wear a jacket in the summer."`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGeneralSexTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk2', 'fav_body_part');
  qspCall(s, 'sex_ev_pillow_talk2', 'favorite_position');
  // TODO-QSP: end
  scene.build();
}

function enterFavBodyPart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['body_talk'] === 0) {
    scene.actions([
      { label: 'What do you like about my body?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['body_talk'] = 1;
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
        { label: 'Glad you think so', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    // TODO-QSP: dynamic text: "Aww! Thanks," you smile fondly at <<$npcdesc>>. "Means a lot to me that you thi...
    scene.text(`"Aww! Thanks," you smile fondly at ${((s as any).npcdesc ?? 0)}. "Means a lot to me that you think so."`);
    scene.text('"Boobs are great," he grins. "And your boobs are especially great because you let me fuck you."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
        { label: 'I like them too', handler: (st: GameState) => {
    scene.text('"Me too," you grin. "I think they\'re my best asset."');
    scene.text('"Mhmm..." He nods and bows his head to kiss your nipple.');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
          { label: 'Glad you think so', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    // TODO-QSP: dynamic text: "Aww! Thanks," you smile fondly at <<$npcdesc>>. "Means a lot to me that you thi...
    scene.text(`"Aww! Thanks," you smile fondly at ${((s as any).npcdesc ?? 0)}. "Means a lot to me that you think so."`);
    scene.text('"There\'s something irresistible about a good ass," he grins, grabbing another handful of yours.');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
          { label: 'I like it too', handler: (st: GameState) => {
    scene.text('"Me too," you grin. "It\'s my best <i>ass</i>et," you add with a wink.');
    scene.text('"Damn right," he says, unable to resist giving it another grab.');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
          { label: 'Oh you\'re one of those', handler: (st: GameState) => {
    scene.text('"Oh," you say. "You\'re one of <i>those</i>."');
    scene.text('"One of what?"');
    scene.text('"An ass man," you say, rolling your eyes.');
    scene.text('"Damn right," he grins, unable to resist giving it another grab.');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
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
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['creampie_eat'] = ((s as any).sex_ev['creampie_eat'] ?? 0) + (1);
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
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
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['creampie_eat'] = ((s as any).sex_ev['creampie_eat'] ?? 0) + (1);
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
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
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['creampie_eat'] = ((s as any).sex_ev['creampie_eat'] ?? 0) + (1);
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your cum-filled pussy before drawing it back out to suck the cocktail of cum and your juices off his finger.');
      } else {
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your pussy before drawing it back out to suck your juices off his finger.');
      }
      scene.text('"You taste good," he says, licking his lips.');
    } else {
      scene.text('"That\'s not the <i>only</i> reason," he says. "There\'s just something hot about them. Even fingering you is fun."');
    }
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
            { label: 'Glad you think so', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  ||  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Glad you think so," you smile at <<$npcdesc>>. "I'd hate to find out you don't ...
      scene.text(`"Glad you think so," you smile at ${((s as any).npcdesc ?? 0)}. "I'd hate to find out you don't appreciate the pussy you're fucking."`);
    } else {
      // TODO-QSP: dynamic text: "Glad you think so," you smile at <<$npcdesc>>. "Always nice to get compliments....
      scene.text(`"Glad you think so," you smile at ${((s as any).npcdesc ?? 0)}. "Always nice to get compliments."`);
    }
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
            { label: 'I like it too', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  ||  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Me too," you grin at <<$npcdesc>>. "I like the way it lets me fuck you."
      scene.text(`"Me too," you grin at ${((s as any).npcdesc ?? 0)}. "I like the way it lets me fuck you."`);
    } else {
      // TODO-QSP: dynamic text: "Me too," you grin at <<$npcdesc>>. "I've always thought my pussy was cute."
      scene.text(`"Me too," you grin at ${((s as any).npcdesc ?? 0)}. "I've always thought my pussy was cute."`);
    }
    scene.text('"Glad we\'re in agreement," he grins back.');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
            { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you grin, shamelessly admiring your own body.');
    scene.text('"Sleek or thicc," he says affectionately. "Long or toned... I just want to dive between them."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFavoritePosition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fav_pos_talk'] === 0) {
    scene.actions([
      { label: 'Talk favorite positions', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fav_pos_talk'] = 1;
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'It\'s intimate', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  (((s as any).sex_ev ?? 0)?.['creampie_allowance'] > 0  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== '')) {
      scene.text('"I like it too," you smile back. "I like how I can see your face when you come inside me."');
    } else {
      scene.text('"I like it too," you smile back. "I being able to see your face. Really emphasizes the \'love\' part of \'making love.\'"');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Like being on bottom', handler: (st: GameState) => {
    scene.text('"I like it too," you smile back. "."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Like being on your back', handler: (st: GameState) => {
    scene.text('"I like it too. But I think it\'s just because I like being on my back," you laugh.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Get to be lazy', handler: (st: GameState) => {
    scene.text('"I like it too. But I think it\'s just because I get to be lazy and just lay back," you laugh.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Like feeling his weight', handler: (st: GameState) => {
    scene.text('"I like it too," you smile back. "I love the <i>weight</i> of a guy on top of me. Pressing on my chest and my legs and through his cock into my pussy. There\'s something just so hot about it."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
        { label: 'It <i>is</i> basic', handler: (st: GameState) => {
    scene.text('"Really?" You give him a look. "I mean, you\'re not wrong. It <i>is</i> basic. Don\'t you ever want to spice it up?"');
    scene.text('"I can\'t help what I like," he shrugs back.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Goes deeper', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "Dick hits so much deeper in doggystyle."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"Me too," you grin back wickedly. "There\'s something weirdly hot about it. Like it\'s dirtier. Which is <i>such</i> a turnon for me."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Like getting pounded', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "Doggystyle is the best position to get pounded in."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Like getting your hair grabbed', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I love it when a guy grabs me by the hair and <i>pulls me</i> onto his cock."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I love bouncing on your dick! I can\'t get that feeling in any other position."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Good angle', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "Your cock rubs against the inside of my pussy in a whole different way. I can only get that when I\'m on top."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Like control', handler: (st: GameState) => {
    scene.text('"Me too," you grin back wickedly. "I like being in charge."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'You\'re service oriented', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"I think I just like making other people feel good. Like, pleasing them. Hearing a guy moan, knowing he\'s enjoying my head, I guess that just makes me feel good too."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Oral fixation', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).stat ?? 0)?.['cigarettes_smoked'] > 0) {
      scene.text('"Oral fixation," you smirk. "Whether it\'s a cigarette, crunching carrots or chewing on the end of my pen, I just like having something in my mouth. But cock is the best."');
    } else {
      scene.text('"Oral fixation," you smirk. "Whether it\'s my thumb between my teeth, crunching carrots or chewing on the end of my pen, I just like having something in my mouth. But cock is the best."');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'titjob') {
              scene.text('"I like fucking girls tits."');
              scene.actions([
                { label: 'You like titjobs too', handler: (st: GameState) => {
    scene.text('"I like getting my tits fucked too. It\'s really hot."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
              ]);
            } else {
              if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === '69') {
                scene.text('"I like 69ing."');
                scene.actions([
                  { label: 'You like 69 too', handler: (st: GameState) => {
    scene.text('"Me too! It\'s really hot being able to suck cock and get eaten out at the same time."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
                ]);
              } else {
                if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
                  scene.text('"I like assfucking girls."');
                  scene.actions([
                    { label: 'You like anal too', handler: (st: GameState) => {
    scene.text('"I like getting my ass fucked too. It\'s really hot."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
  // TODO-QSP: end
  scene.build();
}

function enterRelationshipTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk2', 'dont_hookup');
  // TODO-QSP: end
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
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
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
        ]);
      }
      scene.actions([
        { label: 'He\'s cute', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"I thought you were cute." You peck him on the cheek. "I couldn\'t resist."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
        { label: 'Really needed to get laid', handler: (st: GameState) => {
    scene.text('"I <i>really</i> needed a good lay," you grin. "Thought you\'d do in a pinch."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
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
        if (!(s as any).npc_open_marriage) (s as any).npc_open_marriage = {}; (s as any).npc_open_marriage[String((s as any).npcID ?? 0)] = 1;
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
                if (!(s as any).npc_open_marriage) (s as any).npc_open_marriage = {}; (s as any).npc_open_marriage[String((s as any).npcID ?? 0)] = 1;
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterMadeMeLate1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gschoolVars ?? 0)?.['absence_count'] > 0  &&  ((s as any).npc_school_absences ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).gschoolVars ?? 0)?.['absence_count']  &&  ((s as any).npc_school_absences ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 1) {
    scene.actions([
      { label: 'Made me late for school again', handler: (st: GameState) => {
    scene.actions([
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text: "You made me late for school this morning," you grumble, eyeballing <<$npcdesc>>...
      scene.text(`"You made me late for school this morning," you grumble, eyeballing ${((s as any).npcdesc ?? 0)}. "Again."`);
    } else {
      // TODO-QSP: dynamic text: "You made me late for school the last time I came over," you grumble, eyeballing...
      scene.text(`"You made me late for school the last time I came over," you grumble, eyeballing ${((s as any).npcdesc ?? 0)}.`);
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'made_me_late2');
  } },
      { label: 'Not mad', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).gschoolVars ?? 0)?.['absence_count'] > 0  &&  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.actions([
        { label: 'Made me late for school', handler: (st: GameState) => {
    scene.actions([
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text: "You made me late for school this morning," you grumble, eyeballing <<$npcdesc>>...
      scene.text(`"You made me late for school this morning," you grumble, eyeballing ${((s as any).npcdesc ?? 0)}.`);
    } else {
      // TODO-QSP: dynamic text: "You made me late for school the last time I came over," you grumble, eyeballing...
      scene.text(`"You made me late for school the last time I came over," you grumble, eyeballing ${((s as any).npcdesc ?? 0)}.`);
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'made_me_late2');
  } },
      { label: 'Not mad', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMadeMeLate2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterPlansLater(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['plans_later_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['what_do_today'] === 0) {
    if (((s as any).hour ?? 0) < 14  &&  ((s as any).hour ?? 0) >= 5) {
      scene.actions([
        { label: 'What\'re you up to later?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['plans_later_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Got any plans for the rest day?" you ask.');
    if (((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
      scene.text('"Not really," he shrugs. "It\'s my day off so I\'m just chilling. What about you?"');
      qspCall(s, 'sex_ev_after', 'after_sex2');
    } else {
      if (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)) {
        scene.text('"Not really," he shrugs. "It\'s my day off so I\'m just chilling. What about you?"');
        qspCall(s, 'sex_ev_pillow_talk2', 'pc_plans_later');
      } else {
        if (((s as any).npc_end_free_time ?? 0)?.[String((s as any).npcID ?? 0)] >= ((s as any).hour ?? 0)  &&  ((s as any).hour ?? 0) > 0) {
          scene.text('"I have to go to work after this," he says, checking the time. "Shit, I\'m gonna be late. I gotta get going now."');
          // TODO-QSP: dynamic text: <<$npcdesc>> hauls himself out of bed and you guess you should do the same.
          scene.text(`${((s as any).npcdesc ?? 0)} hauls himself out of bed and you guess you should do the same.`);
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['npc_late'] = 1;
          qspCall(s, 'sex_ev_after', 'after_sex2');
        } else {
          scene.text('"I have to go to work after this," he says, checking the time. "What about you?"');
          qspCall(s, 'sex_ev_pillow_talk2', 'pc_plans_later');
        }
      }
    }
  } },
      ]);
    } else {
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'What\'d you do today?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['what_do_today'] = 1;
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    scene.text('"So, what\'d you get up to today?" you ask.');
    qspCall(s, 'sex_ev_pillow_talk2', 'day_events');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Doing anything else today?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['what_do_today'] = 1;
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    // TODO-QSP: dynamic text: "So, what else have you done today? Besides me I mean," you smirk at <<$npcdesc>...
    scene.text(`"So, what else have you done today? Besides me I mean," you smirk at ${((s as any).npcdesc ?? 0)}.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'day_events');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcPlansLater(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 8) {
    scene.actions([
      { label: 'School', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['school_after'] = 1;
    scene.text('"I have class today," you reply.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
    scene.actions([
      { label: 'Speaking of which...', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['late_for_school'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sex_over'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
    scene.img('images/shared/sex/after/check_phone1.mp4');
    scene.text('Speaking of class...');
    scene.text('You reach over to the bedside table and grab your phone to check the time.');
    qspCall(s, 'shortgs', 'calendar_display');
    qspCall(s, 'sex_ev_pillow_talk2', 'talk_late_for_school2');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).lernHome ?? 0) > 0) {
      scene.actions([
        { label: 'Do my homework', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['homework_after'] = 1;
    scene.text('"I still need to do my homework, so probably that."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
      ]);
    }
  }
  if ((((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).starlets_on ?? 0) === 1)  ||  ((s as any).gsAboDance ?? 0) > 0  ||  (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] !== 0)) {
    scene.actions([
      { label: 'Dance practice', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 15) {
      scene.text('"I have dance practice later," you reply.');
    } else {
      scene.text('"I had dance practice earlier," you reply.');
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'dance_talk');
  } },
    ]);
  }
  if (((s as any).hour ?? 0) > 16) {
    if (((s as any).region ?? 0) === 'pav'  &&  (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)) {
      scene.actions([
        { label: 'Disco', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['disco_after'] = 1;
    scene.text('"Thinking about going to the disco later," you reply.');
    qspCall(s, 'sex_ev_pillow_talk2', 'disco_club_dancing');
  } },
        { label: 'Go clubbing', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['club_after'] = 1;
    scene.text('"Thinking about going clubbing later," you reply.');
    qspCall(s, 'sex_ev_pillow_talk2', 'disco_club_dancing');
    qspCall(s, 'sex_ev_pillow_talk2', 'cum_drip_tease');
  } },
      ]);
    } else {
      if (((s as any).region ?? 0) !== 'pav') {
        scene.actions([
          { label: 'Go clubbing', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['club_after'] = 1;
    scene.text('"Thinking about going clubbing later," you reply.');
    qspCall(s, 'sex_ev_pillow_talk2', 'disco_club_dancing');
    qspCall(s, 'sex_ev_pillow_talk2', 'club_wasted');
    qspCall(s, 'sex_ev_pillow_talk2', 'cum_drip_tease');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'See a movie', handler: (st: GameState) => {
    scene.text('"Thinking about going to see a movie later."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    { label: 'Go to the library', handler: (st: GameState) => {
    scene.actions([
      { label: 'To study', handler: (st: GameState) => {
    scene.text('"I was planning on doing some studying at the library later."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
      { label: 'To read', handler: (st: GameState) => {
    scene.text('"Wanted to go to the library, see if I can find any new books to borrow."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDiscoClubDancing(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Wanna dance', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    if (((s as any).sex_ev ?? 0)?.['disco_after'] === 1) {
      scene.text('"Thinking about going to the disco later," you reply. "I feel like dancing tonight."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['club_after'] === 1) {
        scene.text('"Thinking about going clubbing later," you reply. "I feel like dancing tonight."');
      }
    }
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
  ]);
  scene.build();
}

function enterDiscoClubHookup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Random hookup', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['disco_after'] === 1) {
      scene.text('"Thinking about going to the disco later," you reply. "I feel like hooking up with a stranger tonight."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['club_after'] === 1) {
        scene.text('"Thinking about going clubbing later," you reply. "I feel like hooking up with a stranger tonight."');
      }
    }
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
  ]);
  scene.build();
}

function enterClubWasted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['club_after'] === 1) {
    scene.actions([
      { label: 'Wanna get wasted', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Thinking about going clubbing later," you reply. "I kinda want to get wasted tonight."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumDripTease(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    scene.actions([
      { label: 'Show off <<$npcdesc>>\'s cum', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['disco_after'] === 1) {
      scene.text('"Thinking about going to the disco later," you reply. "I want to dance with your cum running down my thighs."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['club_after'] === 1) {
        scene.text('"Thinking about going clubbing later," you reply. "I want to dance with your cum running down my thighs."');
      }
    }
    // TODO-QSP: dynamic text: You give <<$npcdesc>> a mischievous smirk, rubbing your legs together where his ...
    scene.text(`You give ${((s as any).npcdesc ?? 0)} a mischievous smirk, rubbing your legs together where his cum still leaks from your snatch.`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDayEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_work_end ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).hour ?? 0)  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).week ?? 0)) {
    // TODO-QSP: dynamic text: "Just work," <<$npcdesc>> shrugs turning to look at you. "Getting together with ...
    scene.text(`"Just work," ${((s as any).npcdesc ?? 0)} shrugs turning to look at you. "Getting together with you was my fun time today. What about you?"`);
    qspCall(s, 'sex_ev_pillow_talk2', 'pc_day_events');
    qspCall(s, 'sex_ev_pillow_talk2', 'pc_plans_later');
  } else {
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'cheater'  ||  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npcID ?? 0)] === 'open')  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: dynamic text: "Went on a date with my girlfriend," <<$npcdesc>> responds casually.
      scene.text(`"Went on a date with my girlfriend," ${((s as any).npcdesc ?? 0)} responds casually.`);
      scene.actions([
        { label: 'Uncomfortable', handler: (st: GameState) => {
    scene.text('"Oh. I see..." you murmur uncomfortably. You leave it at that, unsure of what else to say.');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
        { label: 'How was it?', handler: (st: GameState) => {
    scene.text('"Oh, that\'s cool," you reply pleasantly. "How was it? Your date?"');
    if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] !== 'serious') {
      scene.text('"It was okay." He turns to grin at you. "This was way more fun."');
    } else {
      if ((Math.floor(Math.random() * 3) + 1) === 1  &&  ((s as any).npc_car ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"It was nice. I took her to a barbecue joint down the way. She gave me a blowjob in the car on the drive back," he grins. " What about you?"');
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.text('"We saw a movie together. It was nice. What about you?"');
        } else {
          scene.text('"Went out to a restaurant. It was a good time. What about you?"');
        }
      }
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'pc_day_events');
  } },
      ]);
    } else {
      if (((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Had a good workout at the gym. Had an even better one here in my bed," he grins back at you. "What about you?"');
      } else {
        if (((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gaming') {
          scene.text('"Played video games at home. I\'ve been really into this new game that came out recently. What about you?"');
        } else {
          scene.text('"Nothing much. It\'s my day off so I just sort of hung out and relaxed. You\'re the only thing I\'ve done today," he grins back. "What about you?"');
        }
      }
      qspCall(s, 'sex_ev_pillow_talk2', 'pc_day_events');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcDayEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6) {
    scene.actions([
      { label: 'School', handler: (st: GameState) => {
    scene.text('"I spent most of the day in class," you shrug. "It\'s school. It\'s whatever."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    ]);
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).lernHome ?? 0) === 0  &&  (!((s as any).kanikuli ?? 0))) {
    scene.actions([
      { label: 'Homework', handler: (st: GameState) => {
    scene.text('"Just did my homework," you shrug. "Got the boring stuff out of the way so I could enjoy my fun without worry."');
    // TODO-QSP: dynamic text: You give <<$npcdesc>> an affectionate smile.
    scene.text(`You give ${((s as any).npcdesc ?? 0)} an affectionate smile.`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    ]);
  }
  if ((((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).starlets_on ?? 0) === 1  &&  ((s as any).hour ?? 0) < 15)  ||  (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] !== 0)) {
    scene.actions([
      { label: 'Dance practice', handler: (st: GameState) => {
    scene.text('"I had dance practice today," you reply.');
    qspCall(s, 'sex_ev_pillow_talk2', 'dance_talk');
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['last_dance_class'] === ((s as any).daystart ?? 0)  ||  (((s as any).stat ?? 0)?.['last_dance_class'] === ((s as any).daystart ?? 0) - 1  &&  ((s as any).hour ?? 0) < 5  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] !== 1)) {
      scene.actions([
        { label: 'Dance class', handler: (st: GameState) => {
    scene.text('"I had dance class today," you reply.');
    qspCall(s, 'sex_ev_pillow_talk2', 'dance_talk');
  } },
      ]);
    }
  }
  if (((s as any).stat ?? 0)?.['last_disco'] === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Was at the disco', handler: (st: GameState) => {
    scene.text('Was at the disco');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Nothing', handler: (st: GameState) => {
    scene.text('"I didn\'t do much. Just you," you smirk back.');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
  ]);
  scene.build();
}

function enterDanceTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_know_dance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if (!(s as any).npc_know_dance) (s as any).npc_know_dance = {}; (s as any).npc_know_dance[String((s as any).npcID ?? 0)] = 1;
    scene.text('"You\'re a dancer?"');
    scene.text('"Mhmm."');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      scene.text('"Is it the kind that requires a pole and ends with you naked?" he grins.');
      scene.actions([
        { label: 'Laugh', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('You giggle at his joke.');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
      scene.text('"No, we\'re a dance troupe. Though I could always ask our the leader if we can start stripping during the show."');
      scene.text('"I\'d love to see that."');
    } else {
      scene.text('"Not that kind. Though I\'m sure you\'d love it if I did."');
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
    ]);
  } },
        { label: 'Irritation', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"Don\'t be gross," you scowl at him. "For your information we\'re a dance troupe. And I don\'t appreciate you making jokes about what we do."');
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
      ]);
    } else {
      scene.text('"That\'s cool. What kind of dance do you do?"');
      if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0) {
        if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
          scene.actions([
            { label: 'Part of a dance troupe', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dance_type'] = 'starlet';
    // TODO-QSP: dynamic text: "I'm part of a dance troupe in Pavlovsk. The Starlets, ever heard of us?" <<$npc...
    scene.text(`"I'm part of a dance troupe in Pavlovsk. The Starlets, ever heard of us?" ${((s as any).npcdesc ?? 0)} shakes his head. "Oh, well we do performances every few weeks. That's my practice later."`);
    scene.text('"So you\'re saying there\'s a bunch of other sexy girls just like you who all dance together?" he grins. "Sounds hot."');
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Used to be part of a dance troupe', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dance_type'] = 'starlet';
    // TODO-QSP: dynamic text: "I used to dance as part of a troupe in Pavlovsk. The Starlets, ever heard of th...
    scene.text(`"I used to dance as part of a troupe in Pavlovsk. The Starlets, ever heard of them?" ${((s as any).npcdesc ?? 0)} shakes his head. "Oh, well we did performances every few weeks. But we had to shut down because of some stuff."`);
    scene.text('"Damn, I would have thought a bunch of sexy girls dancing would be impossible to get rid of," he grins. "I bet the customers rioted."');
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
    ]);
  } },
          ]);
        }
      }
      qspCall(s, 'sex_ev_pillow_talk2', 'show_dance');
      scene.actions([
        { label: 'Modern', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dance_type'] = 'modern';
    scene.text('"Modern hip hop style stuff mostly. But once you learn the basics of one thing, you can do anything."');
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
    ]);
  } },
        { label: 'Sensual', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dance_type'] = 'sexy';
    scene.text('"Erotic dancing," you smirk at him. "The kind with sensual moves that put a lot of emphasis on curves if you know what I mean."');
    scene.text('"Sounds hot."');
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
      scene.text('"I still need to see one of your shows sometime. You should get me tickets," he smirks.');
      scene.text('"Just don\'t tell anybody there we\'re fucking," you grin back.');
    } else {
      scene.text('"It\'s too bad your dance group shut down," he says. "I would have really liked to see it."');
      scene.text('"Yeah... too bad..." you mumble.');
    }
    if ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_seen_dance ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Could you dance for me again?" <<$npcdesc>> asks. "It was really sexy the last ...
      scene.text(`"Could you dance for me again?" ${((s as any).npcdesc ?? 0)} asks. "It was really sexy the last time you showed me."`);
      scene.actions([
        { label: 'Not right now', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    // TODO-QSP: dynamic text: "Sorry, I can't right now. My legs are still a little wobbly," you say, giving <...
    scene.text(`"Sorry, I can't right now. My legs are still a little wobbly," you say, giving ${((s as any).npcdesc ?? 0)} a suggestive look as you rub your wet thighs together.`);
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
        { label: 'Dance for him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Okay," you smile, slipping out of bed. What kind of dance should you show him?');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0) {
      scene.actions([
        { label: 'A Starlets routine', handler: (st: GameState) => {
    scene.img('images/pc/activities/dancing/shuffle_naked1.mp4');
    if (((s as any).cum_loc ?? 0)?.['face'] > 0  &&  ((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: You grab your shoes from the hallway and come back, counting off time before jum...
      scene.text(`You grab your shoes from the hallway and come back, counting off time before jumping into an energetic Starlets routine, ${((s as any).npcdesc ?? 0)}'s cum still painting your face and running down your legs.`);
    } else {
      if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
        // TODO-QSP: dynamic text: You grab your shoes from the hallway and come back, counting off time before jum...
        scene.text(`You grab your shoes from the hallway and come back, counting off time before jumping into an energetic Starlets routine, ${((s as any).npcdesc ?? 0)}'s cum still painting your face.`);
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          // TODO-QSP: dynamic text: You grab your shoes from the hallway and come back, counting off time before jum...
          scene.text(`You grab your shoes from the hallway and come back, counting off time before jumping into an energetic Starlets routine, ${((s as any).npcdesc ?? 0)}'s cum still running down your legs.`);
        } else {
          scene.text('You grab your shoes from the hallway and come back, counting off time before jumping into an energetic Starlets routine.');
        }
      }
    }
    scene.text('"Happy now?" you ask with a twirl and a smile.');
    // TODO-QSP: dynamic text: <<$npcdesc>> just nods back, too busy enjoying the show.
    scene.text(`${((s as any).npcdesc ?? 0)} just nods back, too busy enjoying the show.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Shuffle for him', handler: (st: GameState) => {
    scene.img('images/pc/activities/dancing/shuffle_naked1.mp4');
    if (((s as any).cum_loc ?? 0)?.['face'] > 0  &&  ((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      scene.text('You grab your shoes from the hallway and come back, doing a freestyle shuffle for him, bouncing up and down with his cum still dripping from your snatch and all over your face.');
    } else {
      if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
        scene.text('You grab your shoes from the hallway and come back, doing a freestyle shuffle for him, bouncing up and down with his cum still all over your face.');
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          scene.text('You grab your shoes from the hallway and come back, doing a freestyle shuffle for him, bouncing up and down with his cum still dripping from your snatch and running down your legs.');
        } else {
          scene.text('You grab your shoes from the hallway and come back, doing a freestyle shuffle for him, bouncing up and down with nothing covering you but your sneakers.');
        }
      }
    }
    scene.text('"Do you like it?" you ask with a twirl and a smile.');
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> just nods back, too busy enjoying the show.
      scene.text(`${((s as any).npcdesc ?? 0)} just nods back, too busy enjoying the show.`);
      qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end');
    } else {
      // TODO-QSP: dynamic text: As you finish the twirl and come back around, <<$npcdesc>> already has his hands...
      scene.text(`As you finish the twirl and come back around, ${((s as any).npcdesc ?? 0)} already has his hands on you and is dragging you back into the bed.`);
      qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end2');
    }
  } },
      { label: 'A sexy one', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/dancing/sexy_naked1.mp4');
    if (((s as any).cum_loc ?? 0)?.['face'] > 0  &&  ((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: You start swaying your hips, shaking your ass at <<$npcdesc>> with rolling, sens...
      scene.text(`You start swaying your hips, shaking your ass at ${((s as any).npcdesc ?? 0)} with rolling, sensual movements, eye-fucking him as his cum drips down your face and legs.`);
    } else {
      if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
        // TODO-QSP: dynamic text: You start swaying your hips, shaking your ass at <<$npcdesc>> with rolling, sens...
        scene.text(`You start swaying your hips, shaking your ass at ${((s as any).npcdesc ?? 0)} with rolling, sensual movements, eye-fucking him as his cum drips down your face.`);
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          // TODO-QSP: dynamic text: You start swaying your hips, shaking your ass at <<$npcdesc>> with rolling, sens...
          scene.text(`You start swaying your hips, shaking your ass at ${((s as any).npcdesc ?? 0)} with rolling, sensual movements, eye-fucking him as his cum drips down your legs.`);
        } else {
          // TODO-QSP: dynamic text: You hop out of bed and start swaying your hips, shaking your ass at <<$npcdesc>>...
          scene.text(`You hop out of bed and start swaying your hips, shaking your ass at ${((s as any).npcdesc ?? 0)} with rolling, sensual movements, not dissimilar to the movements you were making minutes ago when you were fucking him.`);
        }
      }
    }
    scene.text('"Happy now?" you ask with a husky voice.');
    // TODO-QSP: dynamic text: <<$npcdesc>> just nods back, too busy enjoying the show.
    scene.text(`${((s as any).npcdesc ?? 0)} just nods back, too busy enjoying the show.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk2', 'small_talk'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowDance(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Want me to show you?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['get_up'] = 1;
    if (!(s as any).npc_seen_dance) (s as any).npc_seen_dance = {}; (s as any).npc_seen_dance[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('"Wanna see me dance?" you ask. "I can show you right now?"');
    scene.text('"Sure, I\'d love to."');
    if (((s as any).sex_ev ?? 0)?.['dance_type'] !== 'sexy'  &&  ((s as any).sex_ev ?? 0)?.['dance_type'] !== 'starlet') {
      qspCall(s, 'sex_ev_pillow_talk2', 'show_shuffle');
    }
    if (((s as any).sex_ev ?? 0)?.['dance_type'] !== 'modern'  &&  ((s as any).sex_ev ?? 0)?.['dance_type'] !== 'starlet') {
      qspCall(s, 'sex_ev_pillow_talk2', 'show_sexy');
    }
    if (((s as any).sex_ev ?? 0)?.['dance_type'] !== 'modern'  &&  ((s as any).sex_ev ?? 0)?.['dance_type'] !== 'sexy') {
      qspCall(s, 'sex_ev_pillow_talk2', 'show_starlets');
    }
  } },
  ]);
  scene.build();
}

function enterShowShuffle(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Show him a shuffle', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Okay! Let me just put my shoes on. It\'s kind of hard to do this with bare feet."');
    scene.text('You hop out of bed and grab your shoes from where you tossed them, tugging each one on before moving to a clear space in the room.');
    scene.actions([
      { label: 'Shuffle', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/dancing/shuffle_naked1.mp4');
    // TODO-QSP: dynamic text: Picking a favorite song of yours in your head, you skip your way into the middle...
    scene.text(`Picking a favorite song of yours in your head, you skip your way into the middle of ${((s as any).npcdesc ?? 0)}'s floor and show him how you shuffle. With every step, your ass cheeks jiggle and your breasts bounce wildly, and the silliness of it spreads an uncontrollable grin across your lips.`);
    if (((s as any).cum_loc ?? 0)?.['face'] > 0  &&  ((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: You're sure you must be quite a sight, shuffling naked in the middle of <<$npcde...
      scene.text(`You're sure you must be quite a sight, shuffling naked in the middle of ${((s as any).npcdesc ?? 0)}'s apartment, his cum all over your face and running down your legs.`);
    } else {
      if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
        // TODO-QSP: dynamic text: You're sure you must be quite a sight, shuffling naked in the middle of <<$npcde...
        scene.text(`You're sure you must be quite a sight, shuffling naked in the middle of ${((s as any).npcdesc ?? 0)}'s apartment, his cum all over your face.`);
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          // TODO-QSP: dynamic text: You're sure you must be quite a sight, shuffling naked in the middle of <<$npcde...
          scene.text(`You're sure you must be quite a sight, shuffling naked in the middle of ${((s as any).npcdesc ?? 0)}'s apartment, his cum dripping from your snatch and running down your legs.`);
        } else {
          // TODO-QSP: dynamic text: You're sure you must be quite a sight, shuffling in the middle of <<$npcdesc>>'s...
          scene.text(`You're sure you must be quite a sight, shuffling in the middle of ${((s as any).npcdesc ?? 0)}'s apartment with nothing covering you but your sneakers.`);
        }
      }
    }
    scene.text('"Pretty good, right?" you say with a twirl, still grinning and still dancing.');
    // TODO-QSP: dynamic text: "Oh yeah. <i>Really</i> good," <<$npcdesc>> replies. Though the look on his face...
    scene.text(`"Oh yeah. <i>Really</i> good," ${((s as any).npcdesc ?? 0)} replies. Though the look on his face says he's not really talking about your dance moves.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowSexy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Dance sexily', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/dancing/sexy_naked1.mp4');
    if (((s as any).cum_loc ?? 0)?.['face'] > 0  &&  ((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: You start swaying your hips, shaking your ass at <<$npcdesc>> with rolling, sens...
      scene.text(`You start swaying your hips, shaking your ass at ${((s as any).npcdesc ?? 0)} with rolling, sensual movements, eye-fucking him as his cum drips down your face and legs.`);
    } else {
      if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
        // TODO-QSP: dynamic text: You start swaying your hips, shaking your ass at <<$npcdesc>> with rolling, sens...
        scene.text(`You start swaying your hips, shaking your ass at ${((s as any).npcdesc ?? 0)} with rolling, sensual movements, eye-fucking him as his cum drips down your face.`);
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          // TODO-QSP: dynamic text: You start swaying your hips, shaking your ass at <<$npcdesc>> with rolling, sens...
          scene.text(`You start swaying your hips, shaking your ass at ${((s as any).npcdesc ?? 0)} with rolling, sensual movements, eye-fucking him as his cum drips down your legs.`);
        } else {
          // TODO-QSP: dynamic text: You hop out of bed and start swaying your hips, shaking your ass at <<$npcdesc>>...
          scene.text(`You hop out of bed and start swaying your hips, shaking your ass at ${((s as any).npcdesc ?? 0)} with rolling, sensual movements, not dissimilar to the movements you were making minutes ago when you were fucking him.`);
        }
      }
    }
    scene.text('"Pretty hot, right?"');
    scene.text('"Yeah..."');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn't say anything more. He's too busy drooling as until you fini...
    scene.text(`${((s as any).npcdesc ?? 0)} doesn't say anything more. He's too busy drooling as until you finish dancing.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end');
  } },
  ]);
  scene.build();
}

function enterShowStarlets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0) {
    scene.actions([
      { label: 'Starlets routine', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Okay! Let me just put my shoes on. It\'s kind of hard to do this with bare feet."');
    scene.text('You hop out of bed and grab your shoes from where you tossed them, tugging each one on before moving to a clear space in the room.');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
      // TODO-QSP: dynamic text: "Ready?" you ask and <<$npcdesc>> nods. "This is one of our routines our troupe ...
      scene.text(`"Ready?" you ask and ${((s as any).npcdesc ?? 0)} nods. "This is one of our routines our troupe uses for performances."`);
    } else {
      // TODO-QSP: dynamic text: "Ready?" you ask and <<$npcdesc>> nods. "This is one of the dances my old troupe...
      scene.text(`"Ready?" you ask and ${((s as any).npcdesc ?? 0)} nods. "This is one of the dances my old troupe used to do."`);
    }
    scene.actions([
      { label: 'Dance for him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/dancing/modern_naked1.mp4');
    scene.text('Without further ado, you count off a time in your head and jump into the routine that Albina devised for the Starlets. It feels different, going through the movements in nothing but your sneakers as opposed to wearing tight spandex. Makes you wonder if Albina devised it at home naked.');
    // TODO-QSP: dynamic text: The look on <<$npcdesc>>'s face as you dance almost makes you burst into giggles...
    scene.text(`The look on ${((s as any).npcdesc ?? 0)}'s face as you dance almost makes you burst into giggles but you somehow manage to contain it to a wide grin instead.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You end the routine, sticking the final pose and breathing hard.');
    scene.text('"So?" you pant. "What did you think?"');
    // TODO-QSP: dynamic text: "I think that was the sexiest dance I've ever seen," <<$npcdesc>> grins.
    scene.text(`"I think that was the sexiest dance I've ever seen," ${((s as any).npcdesc ?? 0)} grins.`);
    scene.actions([
      { label: 'Glad you enjoyed it', handler: (st: GameState) => {
    scene.text('"I\'m glad you enjoyed it," you smile back, finally managing to catch your breath as you stand up straight.');
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end');
  } },
      { label: 'Not usually naked', handler: (st: GameState) => {
    scene.text('"Kind of weird doing it naked," you smile, easing out of the pose. "Usually all the guys are trying to stare <i>through</i> our clothes. They don\'t get to see what you do."');
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end');
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

function enterShowDanceEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Back into bed', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['dance_type'] === 'modern'  ||  ((s as any).sex_ev ?? 0)?.['dance_type'] === 'starlet') {
      // TODO-QSP: dynamic text: Your little performance finished, you kick off your shoes and snuggle back into ...
      scene.text(`Your little performance finished, you kick off your shoes and snuggle back into the bed with ${((s as any).npcdesc ?? 0)}, picking up your pillow talk from where you left off.`);
    } else {
      // TODO-QSP: dynamic text: Your little performance finished, you snuggle back into the bed with <<$npcdesc>...
      scene.text(`Your little performance finished, you snuggle back into the bed with ${((s as any).npcdesc ?? 0)}, picking up your pillow talk from where you left off.`);
    }
  }, goto: ['sex_ev_pillow_talk2', 'small_talk'] },
    { label: 'Do something else', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: Since you've already gotten out of <<$npcdesc>>'s bed, you figure you ought to d...
    scene.text(`Since you've already gotten out of ${((s as any).npcdesc ?? 0)}'s bed, you figure you ought to do something other than crawl back in.`);
    qspCall(s, 'sex_ev_after', 'after_sex2');
  } },
  ]);
  scene.build();
}

function enterShowDanceEnd2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Giggle', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: You giggle as <<$npcdesc>> pulls you down, kicking off your shoes along the way ...
    scene.text(`You giggle as ${((s as any).npcdesc ?? 0)} pulls you down, kicking off your shoes along the way as you let him pull you back into sexy times.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end3');
  } },
    { label: 'Shoes!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "Wait! Shoes on the bed! Shoes on the bed!" you yelp, nearly losing your balance...
    scene.text(`"Wait! Shoes on the bed! Shoes on the bed!" you yelp, nearly losing your balance frantically kicking off your shoes as ${((s as any).npcdesc ?? 0)} pulls you down back into sexy times.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'show_dance_end3');
  } },
  ]);
  scene.build();
}

function enterShowDanceEnd3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_rand'] = Math.floor(Math.random() * 5) + 1;
    if (((s as any).sex_ev ?? 0)?.['position_rand'] === 1  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  ||  (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['position_rand'] <= 3)) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'miss';
      scene.img('images/shared/sex/foreplay/miss3.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> forces your legs open and lines his cock up with your pussy.
      scene.text(`${((s as any).npcdesc ?? 0)} forces your legs open and lines his cock up with your pussy.`);
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
        qspCall(s, 'sex_ev_virgin', 'start3');
        scene.actions([
          { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
        ]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_goto'] }]);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position_rand'] === 2  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
        scene.img('images/shared/sex/foreplay/doggy1.jpg');
        // TODO-QSP: dynamic text: <<$npcdesc>> flips you onto your stomach, pulls you up by the hips, and lines hi...
        scene.text(`${((s as any).npcdesc ?? 0)} flips you onto your stomach, pulls you up by the hips, and lines his cock up with your pussy.`);
        qspCall(s, 'sex_ev_doggy', 'doggy_goto');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position_rand'] === 3) {
          // TODO-QSP: dynamic text: <<$npcdesc>> positions your head between his legs, pushing his manhood towards y...
          scene.text(`${((s as any).npcdesc ?? 0)} positions your head between his legs, pushing his manhood towards your face.`);
          qspCall(s, 'sex_ev_foreplay', 'bj_ask2');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position_rand'] === 4  &&  (((s as any).cum_loc ?? 0)?.['vagina'] === 0  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
            // TODO-QSP: gs 'arousal', 'foreplay', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
            // TODO-QSP: dynamic text: <<$npcdesc>> throws you on your back and starts lightly kissing your stomach, se...
            scene.text(`${((s as any).npcdesc ?? 0)} throws you on your back and starts lightly kissing your stomach, sending shivers across your skin, as each kiss goes lower than the last, slowly heading down to your pussy.`);
            qspCall(s, 'sex_ev_foreplay', 'kuni_start_acts');
          } else {
            qspCall(s, 'sex_ev_foreplay', 'nipple_play');
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBodyTalkMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Play with his cock', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'dick_talk'
  } },
  ]);
  scene.build();
}

function enterSkinnyBod(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterAthleticBod(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterMuscleBod(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterDadBod(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterFatBod(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterDickGrabImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pubes ?? 0) < 12) {
    scene.img('images/shared/sex/after/dick_play1.jpg');
  } else {
    scene.img('images/shared/sex/after/dick_play2.jpg');
  }
  // TODO-QSP: end
  scene.build();
}

function enterDickTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
  if (((s as any).sex_ev ?? 0)?.['dick_play'] === 0) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dick_play'] = 1;
    if (((s as any).npc_dick_play ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
        // TODO-QSP: dynamic text: You reach over to <<$npcdesc>>, gently taking hold of his cock in your hand, squ...
        scene.text(`You reach over to ${((s as any).npcdesc ?? 0)}, gently taking hold of his cock in your hand, squeezing and playing with it between your fingers.`);
        scene.text('"If you\'re trying to get me hard, I don\'t think I can go again," he chuckles.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fucked_out'] === 0) {
          // TODO-QSP: dynamic text: You reach over to <<$npcdesc>>, gently taking hold of his cock in your hand, squ...
          scene.text(`You reach over to ${((s as any).npcdesc ?? 0)}, gently taking hold of his cock in your hand, squeezing and playing with it. It twitches under your touch, feeling like a big worm your grasp.`);
          scene.text('"You trying to get me hard again?" he snickers.');
        } else {
          // TODO-QSP: dynamic text: You reach over to <<$npcdesc>>, gently taking hold of his cock in your hand, squ...
          scene.text(`You reach over to ${((s as any).npcdesc ?? 0)}, gently taking hold of his cock in your hand, squeezing and playing with it. It twitches under your touch, still quite stiff in your grasp.`);
          scene.text('"You want to go again?" he grins.');
        }
      }
      scene.text('"That\'s not what I\'m doing," you say, affectionately rolling your eyes. "I\'m just... playing with it."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
        // TODO-QSP: dynamic text: You reach over to <<$npcdesc>>, gently taking hold of his flaccid cock in your h...
        scene.text(`You reach over to ${((s as any).npcdesc ?? 0)}, gently taking hold of his flaccid cock in your hand, squeezing and playing with it between your fingers.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_count'] < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]/2) {
          // TODO-QSP: dynamic text: You reach over to <<$npcdesc>>, gently taking hold of his cock in your hand, squ...
          scene.text(`You reach over to ${((s as any).npcdesc ?? 0)}, gently taking hold of his cock in your hand, squeezing and playing with it. It twitches under your touch, soft and squishy between your fingers.`);
        } else {
          // TODO-QSP: dynamic text: You reach over to <<$npcdesc>>, gently taking hold of his cock in your hand, squ...
          scene.text(`You reach over to ${((s as any).npcdesc ?? 0)}, gently taking hold of his cock in your hand, squeezing and playing with it. It twitches under your touch, still quite stiff in your grasp.`);
        }
      }
      scene.text('"Amusing yourself with my dick again?"');
      scene.text('"Yeah," you grin back shamelessly.');
    }
  }
  qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  // TODO-QSP: end
  scene.build();
}

function enterDickTalkTopics(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'whats_it_like_dick');
  qspCall(s, 'sex_ev_pillow_talk2', 'dicks_are_weird');
  qspCall(s, 'sex_ev_pillow_talk2', 'dick_compliment');
  qspCall(s, 'sex_ev_pillow_talk2', 'whats_it_like_fuck_girl');
  qspCall(s, 'sex_ev_pillow_talk2', 'how_stay_hard');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterWhatsItLikeDick(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['whats_it_like_dick_talk'] === 0) {
    scene.actions([
      { label: 'What\'s it like having a dick?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['whats_it_like_dick_talk'] = 1;
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
      // TODO-QSP: dynamic text: "What's it like having a dick?" you ask, giving <<$npcdesc>>'s floppy meat a fun...
      scene.text(`"What's it like having a dick?" you ask, giving ${((s as any).npcdesc ?? 0)}'s floppy meat a funny look as you fondle it.`);
    } else {
      // TODO-QSP: dynamic text: "What's it like having a dick?" you ask, giving <<$npcdesc>>'s stiff meat a funn...
      scene.text(`"What's it like having a dick?" you ask, giving ${((s as any).npcdesc ?? 0)}'s stiff meat a funny look as you jerk it experimentally.`);
    }
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
      scene.text('"What\'s it like having a pussy?" he shrugs. "I don\'t know, it\'s just a dick. I have one. I don\'t know how to explain that."');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        scene.text('"Like having a brain between your legs that wants to fuck all the time," he grins.');
        scene.text('"Seriously?" you ask, staring at it even harder.');
        scene.text('"Fucker gets hard whenever it feels like it, whether there\'s a pussy to be fucked or not," he chuckles. "But pussy is always what it wants."');
      } else {
        scene.text('"It has its ups and downs," he says. "I can pee anywhere I want for one thing. Toilet, urinal, bushes, an open field, it\'s as easy as getting it out and letting loose."');
        scene.text('"I wish I could do that," you sigh. "I can only squat down somewhere and hope that I don\'t piss all over my own shoes."');
        scene.text('"Random erections can be... awkward..."');
        scene.text('"Random?" you ask confusedly. "What do you mean?"');
        scene.text('"It\'s like it has a mind of its own," he chuckles. "Gets hard for no reason at all."');
        // TODO-QSP: dynamic text: "That's cause all guys want is sex," you giggle but <<$npcdesc>> shakes his head...
        scene.text(`"That's cause all guys want is sex," you giggle but ${((s as any).npcdesc ?? 0)} shakes his head.`);
        scene.text('"No," he says. "Even when I\'m not horny. Sometimes I\'ll just be watching TV or going to the store and suddenly, bam-! I\'m hard. Gotta figure out how to stuff it down there without everybody thinking I\'m a pervert."');
        scene.text('"Really???" you ask, staring in bewilderment at his inactive cock.');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDicksAreWeird(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dicks_are_weird_talk'] === 0) {
    scene.actions([
      { label: 'Dicks are weird', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    if (((s as any).sex_ev ?? 0)?.['fuck'] === 0) {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
        scene.text('"Dicks are <i>so</i> weird," you say, experimentally squishing the flesh of his manhood between your fingers in bemusement. It twitches at your touch, causing you to pull back in alarm for a moment.');
      } else {
        scene.text('"Dicks are <i>so</i> weird," you say, experimentally squishing the hard flesh of his cock between your fingers in bemusement. It twitches at your touch, causing you to pull back in alarm for a moment.');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
        scene.text('"Dicks are <i>so</i> weird," you say, experimentally squishing the flesh of his manhood between your fingers in bemusement. "It was so hard, now it\'s so soft. I can\'t believe I had this thing inside me..."');
      } else {
        scene.text('"Dicks are <i>so</i> weird," you say, experimentally gripping his stiff manhood in bemusement. It twitches at your touch, causing you to pull back in alarm for a moment. You look at it warily, mumbling, "How does it get so hard? I can\'t believe I had this thing inside me..."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDickCompliment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dick_compliment'] === 0) {
    scene.actions([
      { label: 'Compliment his dick', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dick_compliment'] = 1;
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 3  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  &&  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 0) {
      scene.actions([
        { label: 'How are you still hard?!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    // TODO-QSP: dynamic text: "How the hell are you still hard?" you say, gripping <<$npcdesc>>'s stiff cock i...
    scene.text(`"How the hell are you still hard?" you say, gripping ${((s as any).npcdesc ?? 0)}'s stiff cock in bewilderment. "You came so many times but you're still..."`);
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('"Maybe you bring it out of me," he smiles at you.');
    } else {
      scene.text('"Just high sex drive I guess," he shrugs.');
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
      ]);
    }
    if ((((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous')  &&  (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'boyfriend'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband')  &&  ((s as any).stat ?? 0)?.['men_fucked'] > 1) {
      if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
        scene.actions([
          { label: 'Ruining sex with your boyfriend', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    scene.text('"This thing is ruining sex with my boyfriend," you say ruefully.');
    // TODO-QSP: iif(npc_arrogant[$npcID] > 0, '"There''s no cock like my cock, is there?" <<$npcdesc>> says with a s...
    // TODO-QSP: dynamic text: "You're <i>way</i> bigger," you say, staring hungrily at his <<$dick_desc>> manh...
    scene.text(`"You're <i>way</i> bigger," you say, staring hungrily at his ${((s as any).dick_desc ?? 0)} manhood. "His dick feels like a <i>finger</i> by comparison..."`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
        ]);
      }
      if (((s as any).pcs_girlfriends ?? 0) > 0) {
        scene.actions([
          { label: 'Ruining sex with your girlfriend', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    scene.text('"This thing is ruining sex with my girlfriend," you say ruefully.');
    // TODO-QSP: iif(npc_arrogant[$npcID] > 0, '"I bet," <<$npcdesc>> says with a smug grin.', '"Yeah?" he says with ...
    // TODO-QSP: dynamic text: "Now when we sleep together, all I can think about is how much I want this cock ...
    scene.text(`"Now when we sleep together, all I can think about is how much I want this cock inside me," you say, staring hungrily at his ${((s as any).dick_desc ?? 0)} manhood. "Lesbian sex has never been so unsatisfying..."`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
        ]);
      }
      scene.actions([
        { label: 'Its ruining other guys for you', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    // TODO-QSP: dynamic text: "This thing is ruining sex with other guys for me," you say, hungrily staring at...
    scene.text(`"This thing is ruining sex with other guys for me," you say, hungrily staring at ${((s as any).npcdesc ?? 0)}'s ${((s as any).dick_desc ?? 0)} manhood.`);
    // TODO-QSP: iif(npc_arrogant[$npcID] > 0, '"I bet," <<$npcdesc>> says with a smug grin.', '"Yeah?" he says with ...
    scene.text('"You\'re so big," you say with a rueful expression. "Other guys dicks feel like <i>fingers</i> inside me by comparison..."');
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
      ]);
    }
    scene.actions([
      { label: 'You have a great dick', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
      // TODO-QSP: dynamic text: "You have a great dick, you know that?" you say while giving <<$npcdesc>>'s soft...
      scene.text(`"You have a great dick, you know that?" you say while giving ${((s as any).npcdesc ?? 0)}'s soft floppy manhood an appreciative fondle.`);
    } else {
      // TODO-QSP: dynamic text: "You have a great dick, you know that?" you say while giving <<$npcdesc>>'s stif...
      scene.text(`"You have a great dick, you know that?" you say while giving ${((s as any).npcdesc ?? 0)}'s stiff manhood an appreciative jerk.`);
    }
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < 15  &&  ((s as any).dick_desc ?? 0) !== 'thick') {
      // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> asks. He looks away, seeming embarrassed. "You don't wish...
      scene.text(`"Really?" ${((s as any).npcdesc ?? 0)} asks. He looks away, seeming embarrassed. "You don't wish it were... bigger?"`);
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
        scene.actions([
          { label: 'It\'s how you use it', handler: (st: GameState) => {
    scene.text('"It\'s not the size that counts," you smirk. "It\'s how you use it. And you know hot to use what you\'ve got."');
    // TODO-QSP: dynamic text: <<$npcdesc>> swells at your words, looking like you just gave him a big confiden...
    scene.text(`${((s as any).npcdesc ?? 0)} swells at your words, looking like you just gave him a big confidence boost.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
          { label: 'Bigger isn\'t better', handler: (st: GameState) => {
    scene.text('"Bigger isn\'t always better," you tell him. "I don\'t know why guys get it into their heads that girls want a giant cock inside them. All that meat has to go somewhere and if it\'s too big, it <i>hurts</i>. I prefer a small dick and a guy who knows how to use it any day."');
    // TODO-QSP: dynamic text: <<$npcdesc>> swells at your words, looking like you just gave him a big confiden...
    scene.text(`${((s as any).npcdesc ?? 0)} swells at your words, looking like you just gave him a big confidence boost.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
          { label: 'Prefer smaller dicks', handler: (st: GameState) => {
    scene.text('"Not even by a millimeter," you smile. "I actually prefer small dicks. Big ones hurt. Small ones feel good and don\'t stretch my pussy out."');
    // TODO-QSP: dynamic text: <<$npcdesc>> swells at your words, looking like you just gave him a big confiden...
    scene.text(`${((s as any).npcdesc ?? 0)} swells at your words, looking like you just gave him a big confidence boost.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
        ]);
      }
      scene.actions([
        { label: 'It\'s perfect', handler: (st: GameState) => {
    scene.text('"I think it\'s perfect," you tell him.');
    // TODO-QSP: dynamic text: <<$npcdesc>> swells at your words, looking like you just gave him a big confiden...
    scene.text(`${((s as any).npcdesc ?? 0)} swells at your words, looking like you just gave him a big confidence boost.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins.
      scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins.`);
      if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
        scene.actions([
          { label: 'Great girth', handler: (st: GameState) => {
    scene.text('"You\'re so <i>thick</i>," you say, barely even able to wrap your fingers around the enormous girth of his shaft. "Length doesn\'t matter nearly as much as width. <i>This</i> is what determines how big you are for a girl and <i>you fill me up.</i>"');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks more than a little smug after your compliment.
    scene.text(`${((s as any).npcdesc ?? 0)} looks more than a little smug after your compliment.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
        ]);
      }
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
        scene.actions([
          { label: 'Great length', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You're so <i>long</i>," you say, running your fingers along the <<npc_dick[$npc...
    scene.text(`"You're so <i>long</i>," you say, running your fingers along the ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)]}cm length of his shaft. "It hits so deep inside me. I can feel you in <i>my stomach</i> when you thrust. Makes me ache so good."`);
    // TODO-QSP: dynamic text: <<$npcdesc>> looks more than a little smug after your compliment.
    scene.text(`${((s as any).npcdesc ?? 0)} looks more than a little smug after your compliment.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
        ]);
      }
      if (((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
        scene.actions([
          { label: 'He\'s huge', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Yeah. I mean, look at this thing," you say, running your fingers along his <<$d...
    scene.text(`"Yeah. I mean, look at this thing," you say, running your fingers along his ${((s as any).dick_desc ?? 0)} shaft. "It's <i>gigantic!</i> How could I <i>not</i> be impressed by a cock like this?"`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
          { label: 'Bigger is better', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Size matters," you smirk, running your fingers along his <<$dick_desc>> shaft. ...
    scene.text(`"Size matters," you smirk, running your fingers along his ${((s as any).dick_desc ?? 0)} shaft. "Any girl who tells you otherwise is lying. Bigger is better."`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
        ]);
      }
      scene.actions([
        { label: 'You know how to use it', handler: (st: GameState) => {
    scene.text('"Not every guy with a cock like yours knows how to use it," you smile. "But you sure do. Fucked me silly with this thing."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks more than a little smug after your compliment.
    scene.text(`${((s as any).npcdesc ?? 0)} looks more than a little smug after your compliment.`);
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhatsItLikeFuckGirl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['whats_it_like_fuck_talk'] === 0) {
    scene.actions([
      { label: 'What does it feel like to fuck a girl?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['whats_it_like_fuck_talk'] = 1;
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    scene.text('"What\'s it like having sex as a guy?" you ask curiously. "I mean like, I know what it\'s like to get fucked. But what\'s it like to do the fucking?"');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
      scene.text('"Like having my dick surrounded with hot sticky goo," he says, grinning childishly. "Once I\'m in, I just want to keep pumping until I explode."');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        // TODO-QSP: dynamic text: "Hot and wet," <<$npcdesc>> smiles affectionately. "Like having my dick wrapped ...
        scene.text(`"Hot and wet," ${((s as any).npcdesc ?? 0)} smiles affectionately. "Like having my dick wrapped in warm silk that squeezes me tight and pulls me in. That's what your pussy feels like."`);
      } else {
        // TODO-QSP: dynamic text: "It's... hot," <<$npcdesc>> says.
        scene.text(`"It's... hot," ${((s as any).npcdesc ?? 0)} says.`);
        scene.text('"I know it\'s hot," you roll your eyes. "Of course fucking is hot."');
        scene.text('"No, I mean temperature hot," he replies, causing you to twerk your head in confusion. "You expect it to be wet inside, and soft, and smooth, but it\'s also really physically hot. It\'s like a pussy is an oven and my dick gets baked when I put it in."');
        scene.text('"<i>Really?</i>" Your eyes go wide, looking down at your own pussy in awe.');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHowStayHard(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sex_stamina'] > 5  &&  ((s as any).sex_ev ?? 0)?.['how_stay_hard_talk'] === 0) {
    scene.actions([
      { label: 'How do you last so long?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['how_stay_hard_talk'] = 1;
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_grab_image');
    if (((s as any).sex_ev ?? 0)?.['cum_count'] <= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  &&  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 0) {
      // TODO-QSP: dynamic text: "I don't understand how you can stay hard without coming for so long," you murmu...
      scene.text(`"I don't understand how you can stay hard without coming for so long," you murmur, marveling at how hard ${((s as any).npcdesc ?? 0)}'s member is inside your grip even now.`);
    } else {
      scene.text('"I don\'t understand how you can stay hard without coming for so long," you murmur, almost unable to believe the floppy dick inside your grasp was the rock hard member inside you that went for minutes on end.');
    }
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
      scene.text('"Well, you see, I just try to imagine I\'m fucking a really ugly dude, and then I can\'t help but not want to-"');
      scene.actions([
        { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.text('You shove your hand in his face, rolling your eyes as he cackles with laughter.');
    scene.text('"Don\'t be crass," you scowl, disgusted by his childish sense of humor.');
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
        { label: 'Giggle', handler: (st: GameState) => {
    scene.text('You shove your hand in his face, rolling your eyes as he cackles with laughter.');
    scene.text('"Don\'t be stupid," you say, failing to hold back a few giggles yourself.');
    qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
  } },
      ]);
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        scene.text('"What do you mean you don\'t understand? Most guys can last ages because they do nothing but watch porn and edge all day," he snickers. "Anyone who can\'t is either a virgin or just a two pump chump."');
        qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
      } else {
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
          // TODO-QSP: dynamic text: "I find that if I concentrate on doing multiplication problems, then I don't foc...
          scene.text(`"I find that if I concentrate on doing multiplication problems, then I don't focus so much on the pleasure and won't come," ${((s as any).npcdesc ?? 0)} says.`);
          scene.text('You give him a look but he maintains a straight face.');
          scene.text('"The only problem with my method is sometimes I\'m doing maths and realize I\'m getting hard instead."');
          scene.text('"..."');
          scene.text('Finally, his expression cracks and his mouth twists at the corner.');
          scene.text('"You do not!" you cry aloud, laughing as you smack him with a pillow.');
          scene.text('"I\'m just kidding!" he laughs back. "But I had you for a second didn\'t I?"');
          qspCall(s, 'sex_ev_pillow_talk2', 'dick_talk_topics');
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMorningSexTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'morning_start_day');
  qspCall(s, 'sex_ev_pillow_talk2', 'morning_sore_pussy');
  qspCall(s, 'sex_ev_morning', 'want_breakfast');
  qspCall(s, 'sex_ev_pillow_talk2', 'forgot_bc_talk1');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterMorningStartDay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['start_the_day'] === 0  &&  ((s as any).sex_ev ?? 0)?.['wake_fuck'] === 1) {
    scene.actions([
      { label: 'Nice way to start the day', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['start_the_day'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
        scene.text('"Well, that\'s a nice way to wake up," you sigh happily, stretching out on the bed.');
      } else {
        scene.text('"Well, this is a nice way to start the day," you sigh happily, stretching out on the bed.');
      }
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
        // TODO-QSP: dynamic text: "As requested Ms. <<$pcs_lastname>>, your <<hour>>AM wake up call," <<$npcdesc>>...
        scene.text(`"As requested Ms. ${((s as any).pcs_lastname ?? 0)}, your ${((s as any).hour ?? 0)}AM wake up call," ${((s as any).npcdesc ?? 0)} says, doing a mock half-bow.`);
      } else {
        // TODO-QSP: dynamic text: "You really like it when I fuck you while you're sleeping don't you?" <<$npcdesc...
        scene.text(`"You really like it when I fuck you while you're sleeping don't you?" ${((s as any).npcdesc ?? 0)} grins.`);
      }
      scene.actions([
        { label: 'It feels really good', handler: (st: GameState) => {
    scene.text('"It feels really good," you giggle, rubbing your thighs together, maybe still a little dick drunk.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'I know you like it', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"I know you like doing it," you smile fondly. "It makes you happy, so it makes me happy too."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'You\'re my favorite alarm cock', handler: (st: GameState) => {
    scene.text('"You\'re my favorite alarm cock," you giggle. "It\'s the best way to wake up."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
        scene.text('"Well, that was a nice start to the day," you sigh happily, stretching out on the bed.');
      } else {
        scene.text('"Well, this is a nice way to start the day," you sigh happily, stretching out on the bed.');
      }
      scene.text('"Sorry I didn\'t wake you first. You just looked so hot, I had to put it in while you were still asleep."');
      if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
        scene.actions([
          { label: 'Next time', handler: (st: GameState) => {
    scene.text('"Maybe next time," you smirk wryly.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'You should do it more often', handler: (st: GameState) => {
    if (!(s as any).npc_sleep_sex_okay) (s as any).npc_sleep_sex_okay = {}; (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"You should do it again," you say with an erotic smirk. "Feels good to wake up with cock inside me."');
    // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> looks surprised. "You mean I can do that whenever I want?...
    scene.text(`"Really?" ${((s as any).npcdesc ?? 0)} looks surprised. "You mean I can do that whenever I want?"`);
    scene.text('"Just make sure I wake up before you finish," you grin.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      }
      scene.actions([
        { label: 'I didn\'t mind', handler: (st: GameState) => {
    scene.text('"I didn\'t mind," you smile fondly. "It felt nice."');
    qspCall(s, 'sex_ev_pillow_talk2', 'morning_sleep_fuck_okay');
  } },
        { label: 'I loved it', handler: (st: GameState) => {
    scene.text('"Don\'t be sorry," you say, grinning openly. "I loved it."');
    qspCall(s, 'sex_ev_pillow_talk2', 'morning_sleep_fuck_okay');
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMorningSorePussy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['morning_sore_pussy'] === 0  &&  (((s as any).sex_ev ?? 0)?.['morning_fuck'] === 1  ||  ((s as any).sex_ev ?? 0)?.['wake_fuck'] === 1)) {
    scene.actions([
      { label: 'Maybe we overdid it', handler: (st: GameState) => {
    if (((s as any).pain ?? 0)?.['vagina'] > 0) {
      scene.actions([
        { label: 'Gonna walk funny today', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_sore_pussy'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6) {
      scene.text('"We might have overdone it," you half smile, rubbing your thighs together over your sore pussy. "I still have to go to school today. My classmates are going to know you fucked me silly just by the way I walk."');
    } else {
      scene.text('"We might have overdone it," you say with a half smile, rubbing your thighs together over your sore pussy. "I\'m going to walk funny for the rest of the day because of you."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Hard time sitting down', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_sore_pussy'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6) {
      scene.text('"We might have overdone it," you half smile, rubbing your thighs together over your sore pussy. "I still have to go to school. I\'m going to have a hard time sitting through class the rest of the day."');
    } else {
      scene.text('"We might have overdone it," you say with a half smile, rubbing your thighs together over your sore pussy. "I\'m going to have a hard time sitting down today."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    scene.actions([
      { label: 'Twice in one day is too much', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_sore_pussy'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"We might have overdone it," you say. "Maybe both night and the morning after wasn\'t such a good idea."');
    scene.text('You give him a rueful smile, rubbing your thighs together over your sore pussy');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Hard to stay awake', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_sore_pussy'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6) {
      // TODO-QSP: dynamic text: "How am I going to get through my classes today?" you say, giving <<$npcdesc>> a...
      scene.text(`"How am I going to get through my classes today?" you say, giving ${((s as any).npcdesc ?? 0)} a loopy smile. "If I fall asleep in school today, it's your fault."`);
      // TODO-QSP: dynamic text: "I'll take credit for that," <<$npcdesc>> grins.
      scene.text(`"I'll take credit for that," ${((s as any).npcdesc ?? 0)} grins.`);
    } else {
      // TODO-QSP: dynamic text: "We might have overdone it," you say, giving <<$npcdesc>> a loopy smile. "I alre...
      scene.text(`"We might have overdone it," you say, giving ${((s as any).npcdesc ?? 0)} a loopy smile. "I already want to go back to bed."`);
      if (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)) {
        scene.text('"I just might after you leave," he replies with a mirror of your expression.');
      } else {
        scene.text('"Tell me about it," he sighs. "I still have to go to work after this."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTalkLateForSchool(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['late_for_school'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  (((s as any).hour ?? 0) === 7  ||  ((s as any).hour ?? 0) === 8)) {
    scene.actions([
      { label: 'Late for school', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['late_for_school'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sex_over'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    scene.img('images/shared/sex/after/check_phone1.mp4');
    scene.text('You reach over to the bedside table and grab your phone to check the time.');
    qspCall(s, 'shortgs', 'calendar_display');
    qspCall(s, 'sex_ev_pillow_talk2', 'talk_late_for_school2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTalkLateForSchool2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) >= 30) {
    scene.text('"Damn," you mutter. "I might be late for school cause of this."');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, looking genuinely apologetic.
      scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, looking genuinely apologetic.`);
    } else {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, the grin on his face making him look like he doesn't...
      scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, the grin on his face making him look like he doesn't mean it at all.`);
    }
    if (((s as any).region ?? 0) === 'pav') {
      scene.actions([
        { label: 'I might still make it', handler: (st: GameState) => {
    scene.text('"I might still make it yet," you smile. "I just need to hurry."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I only said might', handler: (st: GameState) => {
    scene.text('"I only said might," you smirk. "I\'ll probably make it if I hurry."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    if (((s as any).gschoolVars ?? 0)?.['absence_count'] === 2) {
      scene.actions([
        { label: 'I\'m gonna get kicked out of school', handler: (st: GameState) => {
    scene.text('"Shit!" you curse. "If I\'m late again I\'m gonna get expelled!"');
    qspCall(s, 'sex_ev_after', 'after_sex2');
  } },
      ]);
    }
    scene.actions([
      { label: 'I need to hurry', handler: (st: GameState) => {
    scene.text('"I gotta get out of here," you say. "I really don\'t want to be late."');
    qspCall(s, 'sex_ev_after', 'after_sex2');
  } },
      { label: 'Worth it', handler: (st: GameState) => {
    scene.text('"If I am, it was still worth it," you smirk.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 8) {
      scene.actions([
        { label: 'You\'ve got time', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: It's only <b><<$mid(100 + hour, 2, 2)>>:<<$mid(100 + minut, 2, 2)>></b>. Plenty ...
    scene.text(`It's only <b>${(String(100 + ((s as any).hour ?? 0)).slice((2)-1, ((2)-1)+(2)))}:${(String(100 + ((s as any).minut ?? 0)).slice((2)-1, ((2)-1)+(2)))}</b>. Plenty of time to get to school. No need to hurry.`);
    scene.text('You put your phone back down and relax, settling back onto the bed.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Should probably get going (apologetic)', handler: (st: GameState) => {
    // TODO-QSP: '"I should probably get going," you sigh, flashing an apologetic smile at <<$npcdesc>>. "I really wi...
    scene.actions([
      { label: 'Get dressed', goto: ['sex_ev_leave', 'dressing1'] },
      { label: 'Take a quick shower', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'after_alone');
  } },
    ]);
  } },
        { label: 'Should probably get going (disappointed)', handler: (st: GameState) => {
    // TODO-QSP: '"I should probably get going," you say, letting out a long sigh of disappointment. "I want to stay ...
    scene.actions([
      { label: 'Get dressed', goto: ['sex_ev_leave', 'dressing1'] },
      { label: 'Take a quick shower', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'after_alone');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).hour ?? 0) === 8) {
        scene.text('"Shit," you curse. "I\'m late for school."');
        if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, looking genuinely apologetic.
          scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, looking genuinely apologetic.`);
        } else {
          // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, the grin on his face making him not look like he mea...
          scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, the grin on his face making him not look like he means it at all.`);
        }
        if (((s as any).gschoolVars ?? 0)?.['absence_count'] === 2) {
          scene.actions([
            { label: 'I\'m gonna get kicked out of school', handler: (st: GameState) => {
    scene.text('"Fuck!" you swear again. "If I don\'t make it by the end of first period, I\'m gonna get expelled!"');
    qspCall(s, 'sex_ev_morning', 'morning_menu2');
  } },
          ]);
        }
        scene.actions([
          { label: 'I need to hurry', handler: (st: GameState) => {
    scene.text('"I gotta get out of here," you say. "I can\'t afford to be absent too many times."');
    qspCall(s, 'sex_ev_morning', 'morning_menu2');
  } },
          { label: 'Worth it', handler: (st: GameState) => {
    scene.text('"Oh well," you smirk. "That fuck was worth it."');
    qspCall(s, 'sex_ev_pillow_talk2', 'morning_sex_talk');
  } },
        ]);
      }
    }
  }
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    scene.actions([
      { label: 'Gonna leak all day', handler: (st: GameState) => {
    if (((s as any).lastwornpantytype ?? 0) !== 'none') {
      scene.text('"I don\'t even have time to shower and clean my pussy out," you say. "Your cum is going to be soaking into my panties all day."');
    } else {
      scene.text('"I don\'t even have time to shower and clean my pussy out," you say. "Your cum is going to be running down my legs all day."');
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'morning_sex_talk');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterForgotBcTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['forgot_bc'] === 1  &&  ((s as any).sex_ev ?? 0)?.['forgot_bc_chat'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1) {
    scene.actions([
      { label: 'Tell <<$npcdesc>> you forgot your birth control', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I have something to confess," you say. "I forgot to take my birth control last night..."');
    qspCall(s, 'sex_ev_talk', 'forgot_bc_talk');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMorningSleepFuckOkay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } else {
    scene.text('"Is that permission for me to do it again next time you sleep over?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.text('"No," you roll your eyes. "It was fine this time, but you should still wait till I wake up."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Yes', handler: (st: GameState) => {
    if (!(s as any).npc_sleep_sex_okay) (s as any).npc_sleep_sex_okay = {}; (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"Sure," you smirk wryly. "Why not?"');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Do whatever you want to me', handler: (st: GameState) => {
    if (!(s as any).npc_sleep_sex_okay) (s as any).npc_sleep_sex_okay = {}; (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"You can do whatever you want to me," you say with a smouldering look. ');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNewWithYouBoy(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_with_you'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['how_was_day'] = 1;
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  // TODO-QSP: dynamic text: "So, anything new going on with you?" <<$npcdesc>> asks.
  scene.text(`"So, anything new going on with you?" ${((s as any).npcdesc ?? 0)} asks.`);
  qspCall(s, 'sex_ev_pillow_talk2', 'share_life_menu');
  // TODO-QSP: end
  scene.actions([
    { label: 'Nothing new', handler: (st: GameState) => {
    scene.text('"Not really," you shrug. "Same old same old."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterHowWasDayBoy(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_with_you'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['how_was_day'] = 1;
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  // TODO-QSP: dynamic text: "How was your day?" <<$npcdesc>> asks.
  scene.text(`"How was your day?" ${((s as any).npcdesc ?? 0)} asks.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'It was fine', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'share_life_menu');
  } },
    { label: 'It was good', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'share_life_menu');
  } },
    { label: 'It was bad', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'share_life_menu');
  } },
    { label: 'It was okay', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk2', 'share_life_menu');
  } },
  ]);
  scene.build();
}

function enterShareLifeMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk2', 'share_life_single');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move on', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterShareLifeSingle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lover ?? 0) + ((s as any).pcs_girlfriends ?? 0) === 0) {
    scene.actions([
      { label: 'Single now', handler: (st: GameState) => {
    scene.actions([
      { label: 'Broke up with...', handler: (st: GameState) => {
    scene.actions([
      { label: 'My boyfriend', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I broke up with my boyfriend," you tell <<$npcdesc>>. "So I guess I'm single no...
    scene.text(`"I broke up with my boyfriend," you tell ${((s as any).npcdesc ?? 0)}. "So I guess I'm single now."`);
    if (((s as any).npc_know_have_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_know_have_boyfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    }
    qspCall(s, 'sex_ev_stats', 'single_know');
  } },
      { label: 'My girlfriend', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I broke up with my boyfriend," you tell <<$npcdesc>>. "So I guess I'm single no...
    scene.text(`"I broke up with my boyfriend," you tell ${((s as any).npcdesc ?? 0)}. "So I guess I'm single now."`);
    if (((s as any).npc_know_have_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_know_have_boyfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    }
    qspCall(s, 'sex_ev_stats', 'single_know');
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

function enterSugarDaddyTalk(s: GameState, scene: SceneBuilder): void {
  scene.text('');
  // TODO-QSP: end
  scene.build();
}

function enterSugarDaddyTalk2(s: GameState, scene: SceneBuilder): void {
  scene.text('"What have you been doing with the money?"');
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_pillow_talk2 ---------------------------------
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
    case 'made_me_late1':
      enterMadeMeLate1(s, scene);
      break;
    case 'made_me_late2':
      enterMadeMeLate2(s, scene);
      break;
    case 'plans_later':
      enterPlansLater(s, scene);
      break;
    case 'pc_plans_later':
      enterPcPlansLater(s, scene);
      break;
    case 'disco_club_dancing':
      enterDiscoClubDancing(s, scene);
      break;
    case 'disco_club_hookup':
      enterDiscoClubHookup(s, scene);
      break;
    case 'club_wasted':
      enterClubWasted(s, scene);
      break;
    case 'cum_drip_tease':
      enterCumDripTease(s, scene);
      break;
    case 'day_events':
      enterDayEvents(s, scene);
      break;
    case 'pc_day_events':
      enterPcDayEvents(s, scene);
      break;
    case 'dance_talk':
      enterDanceTalk(s, scene);
      break;
    case 'show_dance':
      enterShowDance(s, scene);
      break;
    case 'show_shuffle':
      enterShowShuffle(s, scene);
      break;
    case 'show_sexy':
      enterShowSexy(s, scene);
      break;
    case 'show_starlets':
      enterShowStarlets(s, scene);
      break;
    case 'show_dance_end':
      enterShowDanceEnd(s, scene);
      break;
    case 'show_dance_end2':
      enterShowDanceEnd2(s, scene);
      break;
    case 'show_dance_end3':
      enterShowDanceEnd3(s, scene);
      break;
    case 'body_talk_menu':
      enterBodyTalkMenu(s, scene);
      break;
    case 'skinny_bod':
      enterSkinnyBod(s, scene);
      break;
    case 'athletic_bod':
      enterAthleticBod(s, scene);
      break;
    case 'muscle_bod':
      enterMuscleBod(s, scene);
      break;
    case 'dad_bod':
      enterDadBod(s, scene);
      break;
    case 'fat_bod':
      enterFatBod(s, scene);
      break;
    case 'dick_grab_image':
      enterDickGrabImage(s, scene);
      break;
    case 'dick_talk':
      enterDickTalk(s, scene);
      break;
    case 'dick_talk_topics':
      enterDickTalkTopics(s, scene);
      break;
    case 'whats_it_like_dick':
      enterWhatsItLikeDick(s, scene);
      break;
    case 'dicks_are_weird':
      enterDicksAreWeird(s, scene);
      break;
    case 'dick_compliment':
      enterDickCompliment(s, scene);
      break;
    case 'whats_it_like_fuck_girl':
      enterWhatsItLikeFuckGirl(s, scene);
      break;
    case 'how_stay_hard':
      enterHowStayHard(s, scene);
      break;
    case 'morning_sex_talk':
      enterMorningSexTalk(s, scene);
      break;
    case 'morning_start_day':
      enterMorningStartDay(s, scene);
      break;
    case 'morning_sore_pussy':
      enterMorningSorePussy(s, scene);
      break;
    case 'talk_late_for_school':
      enterTalkLateForSchool(s, scene);
      break;
    case 'talk_late_for_school2':
      enterTalkLateForSchool2(s, scene);
      break;
    case 'forgot_bc_talk1':
      enterForgotBcTalk1(s, scene);
      break;
    case 'morning_sleep_fuck_okay':
      enterMorningSleepFuckOkay(s, scene);
      break;
    case 'new_with_you_boy':
      enterNewWithYouBoy(s, scene);
      break;
    case 'how_was_day_boy':
      enterHowWasDayBoy(s, scene);
      break;
    case 'share_life_menu':
      enterShareLifeMenu(s, scene);
      break;
    case 'share_life_single':
      enterShareLifeSingle(s, scene);
      break;
    case 'sugar_daddy_talk':
      enterSugarDaddyTalk(s, scene);
      break;
    case 'sugar_daddy_talk2':
      enterSugarDaddyTalk2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_pillow_talk2: LocationDef = {
  name: 'sex_ev_pillow_talk2',
  title: '"I could use a shower right now," you declare, hauling yours',
  region: 'other',
  enter: enter,
};
