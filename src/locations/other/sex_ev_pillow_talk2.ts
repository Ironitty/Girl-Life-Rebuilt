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
    (s as any).sex_ev['weather_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It\'s so hot today," you pant. "I\'m sweating after that. And not just from the sex."');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> nods. "I need a shower..."
    scene.text(`"Yeah," ${((s as any).npcdesc ?? 0)} nods. "I need a shower..."`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
      ]);
    } else {
      scene.actions([
        { label: 'It\'s so cold', handler: (st: GameState) => {
    (s as any).sex_ev['weather_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "Brrr," you shiver, cuddling up closer against <<$npcdesc>>'s body. "It's so chi...
    scene.text(`"Brrr," you shiver, cuddling up closer against ${((s as any).npcdesc ?? 0)}'s body. "It's so chilly today."`);
    // TODO-QSP: dynamic text: "You get cold easily?" <<$npcdesc>> asks, seemingly pleased by your naked body p...
    scene.text(`"You get cold easily?" ${((s as any).npcdesc ?? 0)} asks, seemingly pleased by your naked body pressed up against his.`);
    scene.actions([
      { label: 'Not really', handler: (st: GameState) => {
    (s as any).pc_gets_chilly[$npcID] = (-1);
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
    (s as any).pc_gets_chilly[$npcID] = 1;
    // TODO-QSP: dynamic text: "I'm always cold," you shiver, snuggling as far as you can into <<$npcdesc>>'s w...
    scene.text(`"I'm always cold," you shiver, snuggling as far as you can into ${((s as any).npcdesc ?? 0)}'s warmth. "I would wear a jacket in the summer."`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
    ]);
  } },
      ]);
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
    (s as any).sex_ev['body_talk'] = 1;
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    // TODO-QSP: dynamic text: "What do you find sexy about me?" you ask <<$npcdesc>>.
    scene.text(`"What do you find sexy about me?" you ask ${((s as any).npcdesc ?? 0)}.`);
    if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
      scene.text('"Your tits obviously," he smiles, glancing down to admire them.');
      scene.actions([
        { label: 'Really? (insecure)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
      scene.text('"You really think so?" you ask, surprised. You self consciously grope yourself, saying, "You don\'t think they\'re too small?"');
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
        scene.text('"I love all tits," he says, bowing his head to kiss along the side of your breast. "But I love small tits like yours most of all."');
      } else {
        scene.text('"My preferences run a little bigger," he admits but smiles at you. "But tits are tits. I love them all."');
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big') {
          scene.text('"I do like it when girls have a big rack," he admits but smiles at you. "But tits are tits. I love them all."');
        } else {
          scene.text('"I love gigantic tits," he admits but smiles at you. "But tits are tits. I love them all."');
          scene.text('"Boobs are boobs," he says, bowing his head to kiss along the side of your breast. He grins. "And I love all boobs."');
        }
        if (qspFunc(s, 'pcs_has_attr', 'body_tits_average')) {
          scene.text('"You really think so?" you ask, surprised. You self consciously grope yourself, saying, "You don\'t think they\'re too big?"');
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
            scene.text('"My preferences run a little smaller," he admits but smiles at you. "But tits are tits. I love them all."');
          } else {
            scene.text('"I prefer smaller boobs to bigger ones," he admits but smiles at you. "But tits are tits. I love them all."');
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_huge') {
              scene.text('"I love big titties," he grins, admiring your glorious rack. "Actually, I love all titties. But big titties are the best."');
            } else {
              scene.text('"Boobs are boobs," he says, bowing his head to kiss along the side of your breast. He grins. "And I love all boobs."');
            }
            scene.text('"You really think so?" you ask, surprised. You self consciously grope yourself, saying, "You really like them that much? You don\'t wish they were... different?"');
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
              scene.text('"I do like it when girls have a big rack," he admits but smiles at you. "But tits are tits. I love them all."');
            } else {
              scene.text('"I prefer smaller boobs generally," he admits but smiles at you. "But tits are tits. I love them all."');
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_average') {
                scene.text('"They\'re perfect," he says, bowing his head to kiss along the side of your breast. He grins. "And I love all boobs."');
              } else {
                scene.text('"Boobs are boobs," he says, bowing his head to kiss along the side of your breast. He grins. "And I love all boobs."');
              }
            }
            // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
          }
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
            scene.actions([
              { label: 'You like \'em small?', handler: (st: GameState) => {
    scene.text('"These itty bitty titties?" you giggle, looking down at your modest chest. "You like small boobs?"');
    qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
      scene.text('"I love them," he grins. "Small tits are cute <i>and</i> sexy."');
    } else {
      scene.text('"My ideal is just a little bigger," he admits with a smile. "But that doesn\'t mean I don\'t think yours are are beautiful as hell. I don\'t discriminate when it comes to tits."');
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big') {
        scene.text('"Truth be told, I like big busty tits the most," he admits with a smile. "But it\'s just a preference. Doesn\'t mean I don\'t think yours are beautiful as hell."');
      } else {
        scene.text('"I like big melon honkers," he admits with a smile. "But it\'s just a preference. Doesn\'t mean I can\'t appreciate a pretty A-cup."');
        if (((s as any).pcs_cupsize ?? 0) < 6) {
          scene.text('"I\'m a double A actually," you grin back');
        }
        scene.text('"Big melons, small apples, flat walls, I love \'em all," he grins and bows his head to kiss along the side of your breast.');
      }
      // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
    }
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_average')) {
    }
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
        (s as any).sex_ev['creampie_eat'] = ((s as any).sex_ev['creampie_eat'] ?? 0) + (1);
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your cum-filled pussy before drawing it back out to suck the cocktail of cum and your juices off his finger.');
      } else {
        scene.text('He punctuates his reply by forcing a gasp from your lips as he drives his finger knuckle deep into your pussy before drawing it back out to suck your juices off his finger.');
      }
      scene.text('"You taste good," he says, licking his lips.');
    } else {
      scene.text('"That\'s what pussies are for," he grins.');
      scene.text('"That\'s not the <i>only</i> reason," he says. "There\'s just something hot about them. But yours is especially hot when I\'m fucking it."');
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
        (s as any).sex_ev['creampie_eat'] = ((s as any).sex_ev['creampie_eat'] ?? 0) + (1);
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
        // TODO-QSP: gs 'arousal', 'foreplay', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
        // TODO-QSP: gs 'arousal', 'foreplay', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
        qspCall(s, 'stat', '');
        scene.text('"Your legs," he says, slowly caressing you up and down the curve of your thigh. It\'s tantalizing, the way he dances the tips of his fingers across your skin, sending goosebumps wherever they go.');
        scene.actions([
          { label: 'You\'re just saying that because you deflowered me', handler: (st: GameState) => {
    scene.text('"You\'re just saying that because you\'re the first one who got to fuck it," you smirk teasingly.');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (((s as any).sex_ev ?? 0)?.['kuni'] > 0  ||  ((s as any).npc_kuni_times ?? 0)?.[String((s as any).npcID ?? 0)])) {
      // TODO-QSP: gs 'arousal', 'vaginal_finger', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      // TODO-QSP: gs 'arousal', 'vaginal_finger', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      qspCall(s, 'stat', '');
      scene.text('"That\'s not true," he smirks back. "I love eating it too."');
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        (s as any).sex_ev['creampie_eat'] = ((s as any).sex_ev['creampie_eat'] ?? 0) + (1);
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
    }
  } },
            ]);
          }
          scene.actions([
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
        }
      }
    }
  } },
      ]);
    }
  } },
    ]);
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
    default:
      enterSmallTalk(s, scene);
      break;
  }
}

export const sex_ev_pillow_talk2: LocationDef = {
  name: 'sex_ev_pillow_talk2',
  region: 'other',
  enter: enter,
};
