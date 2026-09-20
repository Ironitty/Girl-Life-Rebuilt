import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBoyLikeHairTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_like_hair_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
  // TODO-QSP: dynamic text: "I love your hair," <<$npc_usedname[$npcID]>> murmurs, running his fingers throu...
  scene.text(`"I love your hair," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} murmurs, running his fingers through your locks.`);
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'What do you like about it?', handler: (st: GameState) => {
    if (((st as any).pcs_haircolor ?? 0) === 'black') {
      // TODO-QSP: act'You do?':
      qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"You do?" you ask, surprised.');
      scene.text('"Don\'t know why everybody is into blondes," he smiles. "Black hair is so sexy."');
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
    if (((st as any).pcs_haircolor ?? 0) === 'brown') {
      // TODO-QSP: act'You do?':
      qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"You do?" you ask, surprised.');
      scene.text('"Don\'t know why everybody is into blondes," he smiles. "Brunettes are gorgeous."');
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
    if (((st as any).pcs_haircolor ?? 0) === 'red') {
      // TODO-QSP: act'You do?':
      qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"You do?" you ask, surprised.');
      if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
        scene.text('"I never understood the whole idiom about redheaded stepchildren," he jokes. "Cause you\'re proof that they\'re hot."');
      } else {
        scene.text('"Who doesn\'t think redheads are hot?" he grins back. ');
      }
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
    if (((st as any).pcs_haircolor ?? 0) === 'blonde') {
      // TODO-QSP: act'You do?':
      qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"You do?" you ask, surprised.');
      scene.text('"It\'s gorgeous," he smiles. "Blondes are so sexy."');
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterBoobFondle(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boob_fondle'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  scene.img('images/shared/sex/after/boobs1.mp4');
  // TODO-QSP: dynamic text: One thing leads to another and you find yourself with <<$npcdesc>> on top of you...
  scene.text(`One thing leads to another and you find yourself with ${((s as any).npcdesc || '')} on top of you, his hands on your ${((s as any).pcdesc_breasts || '')} breasts and fondling them incessantly.`);
  scene.text('"Your boobs are so soft," he mumbles, giving another several squeezes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get embarrassed', handler: (st: GameState) => {
    scene.text('"Don\'t touch them so much," you softly protest, a flush heating your face. "It\'s embarrassing."');
    scene.text('"I can\'t help it," he says before repeating himself, "They\'re so soft."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: '"Boys and boobs"', handler: (st: GameState) => {
    scene.text('"What is it with boys and boobs?" you ask, magnanimously unflinching as you watch him grope you.');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"Biological programming," he grins. "Evolutionary desire to ogle and fondle."');
    } else {
      scene.text('"I don\'t know, but I love them," he says, squeezing again.');
      scene.text('"Yeah, I got that," you observe dryly.');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterTitsAdmire(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boob_fondle'] = 1;
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
  qspCall(s, 'arousal', 'foreplay', (Math.floor(Math.random() * 3) + 3));
  scene.img('images/shared/sex/after/boobs1.mp4');
  // TODO-QSP: dynamic text: One thing leads to another and you find yourself with <<$npcdesc>> on top of you...
  scene.text(`One thing leads to another and you find yourself with ${((s as any).npcdesc || '')} on top of you, his hands on your ${((s as any).pcdesc_breasts || '')} breasts, fondling them while inspecting them very closely.`);
  if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
    // TODO-QSP: dynamic text: "Have I ever told you how perfect your breasts are?" <<$npcdesc>> murmurs, admir...
    scene.text(`"Have I ever told you how perfect your breasts are?" ${((s as any).npcdesc || '')} murmurs, admiringly (and shamelessly) squeezing them.`);
  } else {
    // TODO-QSP: dynamic text: "Your tits are perfect," <<$npcdesc>> murmurs, admiringly (and shamelessly) sque...
    scene.text(`"Your tits are perfect," ${((s as any).npcdesc || '')} murmurs, admiringly (and shamelessly) squeezing them.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get embarrassed', handler: (st: GameState) => {
    scene.text('"Don\'t touch them so much," you protest softly, a flush heating your face. "It\'s embarrassing."');
    scene.text('"I can\'t help it," he says before repeating himself, "They\'re so soft."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'Giggle', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react_desc'] = 'laughing';
    scene.text('You can\'t help but giggle at his fascination with your boobs.');
    qspGoto(st, 'sex_ev_body_talk', 'tits_admire_menu');
  } },
    { label: 'Roll your eyes', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react_desc'] = 'dryly';
    scene.text('You can\'t help but roll your eyes at the way he\'s practically drooling over your boobs.');
    qspGoto(st, 'sex_ev_body_talk', 'tits_admire_menu');
  } },
  ]);
  scene.build();
}

function enterTitsAdmireMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '"Thank you"', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Thank you very much," you say, <<$sex_ev[''react_desc'']>>. "My tits accept you...
    scene.text(`"Thank you very much," you say, ${((st as any).sex_ev ?? 0)?.['react_desc'] ?? ''}. "My tits accept your compliment and will continue letting you squeeze them."`);
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'You like my tits?', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
      scene.text('"You like these itty bitty titties?"');
    } else {
      scene.text('"You like them that much?"');
    }
    qspGoto(st, 'sex_ev_body_talk', 'like_my_tits');
  } },
    { label: 'They\'re just breasts', handler: (st: GameState) => {
    qspGoto(st, 'sex_ev_body_talk', 'just_breasts');
  } },
    { label: 'What do you like about them?', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_body_talk', 'what_do_you_like'
  } },
    { label: '"Boys and boobs"', handler: (st: GameState) => {
    scene.text('"What is it with boys and boobs?" you ask, magnanimously unflinching as you watch him grope you.');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"Biological programming," he grins. "Evolutionary desire to ogle and fondle."');
    } else {
      scene.text('"I don\'t know, but I love them," he says, squeezing again.');
      scene.text('"Yeah, I got that," you observe dryly.');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterLikeMyTits(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
      scene.text('"I <i>love</i> them," he grins.');
    } else {
      scene.text('"My preference for size normally runs bigger," he admits. "But that should tell you just how much I like yours."');
    }
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_average')) {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
        scene.text('"Not too big, not too small, perfect shape, perfect feel," he grins, squeezing them again for emphasis. "Perfect in every way."');
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_small') {
          scene.text('"To be perfectly honest I normally have a thing for A-cups," he admits. "But that should tell you just how much I like yours."');
        } else {
          scene.text('"My preference for size normally runs bigger," he admits. "But that should tell you just how much I like yours."');
        }
      }
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
        scene.text('"Every guy dreams of a girl with tits like these," he grins, hefting your sizable pair with another squeeze. "Of course I do!"');
      } else {
        scene.text('"My preference for size normally runs smaller," he admits. "But it\'s really hard to keep that in mind when I see these big beautiful things."');
      }
    }
  }
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterJustBreasts(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "They''re just breasts, you know," you say, <<$sex_ev[''react_desc'']>>.
  scene.text(`"They're just breasts, you know," you say, ${((s as any).sex_ev ?? 0)?.['react_desc'] ?? ''}.`);
  if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
    scene.text('"That\'s like saying, \'it\'s only a bag full of gold bars,\'" he grins, squeezing your chest again and again.');
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"You clearly have no idea how the male mind works," he grins, giving them another squeeze.');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        scene.text('"I know, that\'s what I love so much about them," he grins, giving them another squeeze."');
      }
    }
  }
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterWhatDoYouLike(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "What do you like so much about them?" you ask <<$sex_ev[''react_desc'']>>.
  scene.text(`"What do you like so much about them?" you ask ${((s as any).sex_ev ?? 0)?.['react_desc'] ?? ''}.`);
  if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
    scene.text('"That they\'re boobs," he grins, squeezing your chest again. "I like that."');
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"They\'re soft and beautiful," he murmurs, giving them another squeeze. "Delicious... And best of all, you let me touch them."');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        scene.text('"I know, that\'s what I love so much about them," he grins, giving them another squeeze."');
      } else {
        scene.text('"I dunno," he grins, squeezing your chest again. "I guess I just do?"');
      }
    }
  }
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterCupsizeTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_know_cupsize ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
  } else {
    if (((s as any).npc_know_cupsize ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).titsize ?? 0)) {
    } else {
      if (((s as any).npc_know_cupsize ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).titsize ?? 0)) {
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyPubeTalkStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_pube_style');
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  qspGoto(s, 'sex_ev_body_talk', 'boy_pube_talk_first');
  // TODO-QSP: end
  scene.build();
}

function enterBoyPubeTalkFirst(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_pube_talk'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_topics'] = ((s as any).sex_ev['boy_topics'] ?? 0) - (1);
  if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_shaven')) {
    qspGoto(s, 'sex_ev_body_talk', 'pubes_shaved_response');
  } else {
    if (((s as any).pube_style ?? 0)?.['word'] === 'stubble') {
      qspGoto(s, 'sex_ev_body_talk', 'pubes_stubble_response');
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_trimmed')) {
        qspGoto(s, 'sex_ev_body_talk', 'pubes_trimmed_response');
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')  ||  qspFunc(s, 'pcs_has_attr', 'hair_pubes_untrimmed')) {
          qspGoto(s, 'sex_ev_body_talk', 'pubes_bush_response');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPubesShavedResponse(s: GameState, scene: SceneBuilder): void {
  if (((String(((s as any).npcLikes ?? 0)).indexOf(String(';hair_pubes_'))) + 1) > 0  &&  ((String(((s as any).npc_talk_history ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf(String(';pube_talk'))) + 1) > 0) {
    // TODO-QSP: dynamic text: "I love how sexy your pussy is," <<$npcdesc>> says, admiringly running his finge...
    scene.text(`"I love how sexy your pussy is," ${((s as any).npcdesc || '')} says, admiringly running his fingers across the smooth skin of your pubic area.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyLikesPubes2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('"I see you keep it clean down there," he says, looking at your smooth-shaven pussy.');
    if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.actions([
        { label: 'It\'s for work', handler: (st: GameState) => {
    scene.text('"It\'s for work," you shrug. "I\'m a model, so it\'s better to keep it shaved."');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPubesProblem(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPubesOtherLovers(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'I like it this way', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['like_pubes'] = 1;
    scene.actions([
      { label: 'You just like it', handler: (st: GameState) => {
    scene.text('"Yeah," you say. "I just like it this way. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It feels good', handler: (st: GameState) => {
    scene.text('"I like it this way," you say. "It feels nice to have a smooth pussy. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It\'s classy', handler: (st: GameState) => {
    scene.text('"I like it this way," you say. "I think it\'s classier keep a clean shave. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It\'s sexy', handler: (st: GameState) => {
    scene.text('"I like it this way," you say. "It\'s sexy to keep a smooth pussy. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
    ]);
  } },
      { label: 'When I feel like it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['lazy_shave'] = 1;
    if (((st as any).pubestyle ?? 0) === 11) {
      scene.text('"Sometimes," you shrug. "I\'ll give it a shave when it starts turning into bush, but I\'ll live with the stubble for a few days at a time. Why do you ask?"');
    } else {
      scene.text('"Sometimes," you shrug. "On some days I\'ll just give it a trim, on other days I\'ll shave it all off. Sometimes I just go full bush. Why do you ask?"');
    }
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPubesStubbleResponse(s: GameState, scene: SceneBuilder): void {
  if (((String(((s as any).npc_talk_history ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf(String(';pube_talk'))) + 1) > 0  &&  ((s as any).npc_know_pubes ?? 0)?.[String((s as any).npcID ?? 0)] === 'shaved') {
    // TODO-QSP: dynamic text: "You forget to shave today?" <<$npcdesc>> says eyeing your stubbly pussy.
    scene.text(`"You forget to shave today?" ${((s as any).npcdesc || '')} says eyeing your stubbly pussy.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyLikesPubes2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    // TODO-QSP: dynamic text: "Looks like someone forgot to shave today," <<$npcdesc>> says eyeing your stubbl...
    scene.text(`"Looks like someone forgot to shave today," ${((s as any).npcdesc || '')} says eyeing your stubbly pussy.`);
    if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.actions([
        { label: 'It\'s for work', handler: (st: GameState) => {
    scene.text('"It\'s for work," you shrug. "I\'m a model, so it\'s better to keep it shaved."');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPubesOtherLovers2(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Forgot', handler: (st: GameState) => {
    scene.actions([
      { label: 'Shrug', handler: (st: GameState) => {
    scene.text('"Yeah," you say with a shrug. "Happens sometimes. What of it?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'Annoyance', handler: (st: GameState) => {
    scene.text('"Yeah," you say, drawing your eyebrows together in irritation. "I forgot. So what? Got a problem with that?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
    ]);
  } },
      { label: 'Growing it out', handler: (st: GameState) => {
    scene.text('"No I didn\'t," you reply. "I\'m growing it out. But you gotta go through stubble to get to hair."');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'No time', handler: (st: GameState) => {
    scene.text('"Wanted to but I didn\'t have time this morning," you reply.');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'I\'m lazy', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['lazy_shave'] = 1;
    if (((st as any).pubestyle ?? 0) === 11) {
      scene.text('"I\'m just lazy," you sigh. "Too much work to keep it smooth down there all the time. I\'ll do it when it gets to be too annoying. Why do you ask?"');
    } else {
      scene.text('"I\'m just lazy," you sigh. "Didn\'t feel like doing it today. Why do you ask?"');
    }
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPubesTrimmedResponse(s: GameState, scene: SceneBuilder): void {
  if (((String(((s as any).npc_talk_history ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf(String(';pube_talk'))) + 1) > 0  &&  ((s as any).npc_know_pubes ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).pube_style ?? 0)?.['word']) {
    if (((s as any).npc_know_pubeshape ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).pube_style ?? 0)?.['shape']) {
      // TODO-QSP: dynamic text: "I still can''t get over how sexy your bush is," <<$npcdesc>> says, looking admi...
      scene.text(`"I still can't get over how sexy your bush is," ${((s as any).npcdesc || '')} says, looking admiringly at your neatly trimmed pussy hair.`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyLikesPubes2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: "Did you do something new down there?" <<$npcdesc>> asks, looking at your <<$pub...
      scene.text(`"Did you do something new down there?" ${((s as any).npcdesc || '')} asks, looking at your ${((s as any).pube_style ?? 0)?.['shape'] ?? ''}-shaped pubic hair.`);
      qspCall(s, 'sex_ev_pillow_talk', 'changed_pube_style');
    }
  } else {
    scene.text('"I see you keep it trimmed down there," he says, looking at your neatly maintained pubic hair.');
    if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.actions([
        { label: 'It\'s for work', handler: (st: GameState) => {
    scene.text('"It\'s for work," you shrug. "I\'m a model, so it\'s better to keep things tidy between the legs."');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPubesProblem(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPubesOtherLovers(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'I like it this way', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['like_pubes'] = 1;
    scene.actions([
      { label: 'You just like it', handler: (st: GameState) => {
    scene.text('"Yeah," you say. "I just like it this way. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It feels good', handler: (st: GameState) => {
    scene.text('"I like it tidy down there," you say. "It feels better than full bush. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It\'s classy', handler: (st: GameState) => {
    scene.text('"I like it tidy down there," you say. "I think it\'s classier to have some hair down there without going full bush. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It\'s sexy', handler: (st: GameState) => {
    scene.text('"I like it tidy down there," you say. "Makes me feel sexy. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPubesBushResponse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_know_pubes ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).pube_style ?? 0)?.['word']) {
    // TODO-QSP: dynamic text: "I still can''t get over how sexy your bush is," <<$npcdesc>> says, looking admi...
    scene.text(`"I still can't get over how sexy your bush is," ${((s as any).npcdesc || '')} says, looking admiringly at your furry pussy.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyLikesPubes2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    // TODO-QSP: dynamic text: "So, you don''t shave?" <<$npcdesc>> asks, looking at your furry pussy.
    scene.text(`"So, you don't shave?" ${((s as any).npcdesc || '')} asks, looking at your furry pussy.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPubesYoung(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPubesProblem(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPubesOtherLovers(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pubestyle ?? 0) === 10) {
      scene.actions([
        { label: 'Just trim', handler: (st: GameState) => {
    scene.text('"I just trim," you sigh. "Don\'t really like going \'full jungle\' down there, but don\'t really like shaving either. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      ]);
    }
    scene.actions([
      { label: 'I like it this way', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['like_pubes'] = 1;
    scene.actions([
      { label: 'You just like it', handler: (st: GameState) => {
    scene.text('"Yeah," you say. "I just like it this way. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It feels good', handler: (st: GameState) => {
    scene.text('"I like it this way," you say. "There\'s just something comfortable about having a full bush between my legs. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It\'s classy', handler: (st: GameState) => {
    scene.text('"I like it this way," you say. "I think it\'s classy to go full bush instead of shaving it off. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'It\'s sexy', handler: (st: GameState) => {
    scene.text('"I like it this way," you say. "I think bush is sexy. Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
    ]);
  } },
      { label: 'Lazy', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['lazy_shave'] = 1;
    if (((st as any).pubestyle ?? 0) === 10) {
      scene.text('"I\'m just lazy," you shrug. "I\'ll trim it back if it starts getting out of hand, but it\'s too much hassle to maintain a landing strip or anything like that. Why do you ask?"');
    } else {
      scene.text('"I\'m just lazy," you shrug. "It\'s too much trouble to maintain. Easier to just let it grow. Why do you ask?"');
    }
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'Hate shaving', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['lazy_shave'] = 1;
    if (((st as any).pubestyle ?? 0) === 10) {
      scene.text('"I hate shaving," you sigh. "I\'ll trim it back if it starts getting out of hand, but it\'s such a pain in the ass to do anything more than that. Why do you ask?"');
    } else {
      scene.text('"I hate shaving," you sigh. "It\'s such a pain in the ass. Can\'t stand it. Easier to just let it grow. Why do you ask?"');
    }
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'Joke about it', handler: (st: GameState) => {
    scene.text('"I\'m a terrible gardener," you smirk wryly. "Can never manage to keep the grass trimmed right so I just don\'t even bother.');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyPubesResponse(s: GameState, scene: SceneBuilder): void {
  if (((String(((s as any).npcLikes ?? 0)).indexOf(String(';hair_pubes_'))) + 1) > 0) {
    if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_shaven')) {
      scene.text('"I think it\'s hot," he grins. "No one likes to find a gorilla between a girl\'s legs. Bare pussy is the best."');
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_trimmed')  ||  qspFunc(s, 'pcs_has_attr', 'hair_pubes_patch')) {
        scene.text('"I just think it\'s super hot," he grins. "I love the look of a pussy with a well-kept garden."');
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')  ||  qspFunc(s, 'pcs_has_attr', 'hair_pubes_untrimmed')) {
          qspGoto(s, 'sex_ev_body_talk', 'boy_bush_response');
        } else {
          scene.text('"I just think it\'s hot," he grins.');
        }
      }
    }
    qspGoto(s, 'sex_ev_body_talk', 'boy_likes_pubes');
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_shaven') {
      scene.text('"You\'d look super hot if you shaved it clean," he says.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyAsksCleanshave(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_trimmed'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_patch') {
        if ((qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')  ||  qspFunc(s, 'pcs_has_attr', 'hair_pubes_untrimmed'))) {
          scene.text('"Would you ever consider trimming it down? Not shaving it off completely, just tidying it up a little?"');
        } else {
          scene.text('"Would you ever consider letting it grow out a little?"');
        }
        qspGoto(s, 'sex_ev_body_talk', 'boy_asks_trim');
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_bush'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_untrimmed') {
          scene.text('"Ever considered letting it grow out more?"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyAsksBush(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).npc_bush_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            // TODO-QSP: $npc_like_pubestyle[$npcID] = 'none'
            scene.text('"Just noting. Some girls shave, some don\'t. Some guys want it one way, other guys another. Me? I don\'t care if it\'s more like an apple, a kiwi, or a coconut," he laughs aloud. "I just like pussy."');
            qspGoto(s, 'sex_ev_body_talk', 'pube_talk_end');
          } else {
            scene.text('Bug report: boy_pubes_response dead-end');
            qspGoto(s, 'sex_ev_body_talk', 'pube_talk_end');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDontShaveLikeTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterBoyBushResponse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_style_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'fashionable') {
    if (((String(((s as any).npcLikes ?? 0)).indexOf(String(';hair_pubes_'))) + 1) > 0) {
      scene.text('"Most girls consider it unfashionable to keep a bush. Not that I mind. I love a nice beautiful bush. But I\'m surprised to find a girl who doesn\'t mind either."');
      qspGoto(s, 'sex_ev_body_talk', 'boy_likes_pubes');
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_patch'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_trimmed') {
        scene.text('"Most girls consider it unfashionable to keep a bush. Would you ever consider trimming it down?"');
        qspGoto(s, 'sex_ev_body_talk', 'boy_asks_trim');
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_shaven') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyLikesPubes(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          scene.text('"Most girls consider it unfashionable to keep a bush. But me? I think it\'s up to every girl to decide what she does with her pussy garden."');
          qspGoto(s, 'sex_ev_body_talk', 'pube_talk_end');
        }
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_patch'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_trimmed') {
      scene.text('"Ever considered trimming it down?"');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyAsksTrim(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'hair_pubes_bush'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'hair_pubes_untrimmed') {
        scene.text('"I think it\'s super sexy," he grins. "Too many girls feel peer pressured into shaving it off, but I love a nice full bush."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyLikesPubes(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyAsksCleanshave(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnnoyedShave(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pubestyle ?? 0) === 10) {
    scene.actions([
      { label: 'I\'ll get to it later', handler: (st: GameState) => {
    scene.text('"Yeah, yeah," you wave your hand absently. "I\'ll get to it eventually."');
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['like_pubes'] === 1) {
      scene.text('"No way," you say, giving him a look. "I already told you, I like it this way. I\'m not shaving it just for you."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['lazy_shave'] === 1) {
        scene.text('"No way," you say, giving him a look. "If I\'m already too lazy to do it for me, what makes you think I\'m going to do it for you?"');
      }
    }
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'No thanks', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['like_pubes'] === 1) {
      scene.text('"No thanks," you reply with a humorous smirk. "I think I\'ll just keep it the way I like it."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['lazy_shave'] === 1) {
        scene.text('"No thanks," you reply with a humorous smirk. "I think I\'ll just keep being lazy."');
      } else {
        scene.text('"No thanks," you reply with a humorous smirk. "I think I\'ll just keep doing what I\'m doing."');
      }
    }
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'You think I should?', handler: (st: GameState) => {
    scene.text('"You think I should?" you ask him, looking down and inspecting your pussy.');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> says. "I think you''d look super sexy without any hair down...
    scene.text(`"Yeah," ${((st as any).npcdesc || '')} says. "I think you'd look super sexy without any hair down there. Just your bare beautiful pussy lips on display."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangePubesForBoy(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'You\'d like that?', handler: (st: GameState) => {
    scene.text('"You\'d like it like that?" you ask, looking down and inspecting your pussy.');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> says. "I''d really love it if you went full clean shave. It...
    scene.text(`"Yeah," ${((st as any).npcdesc || '')} says. "I'd really love it if you went full clean shave. It'd be so hot."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangePubesForBoy(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBoyAsksTrim(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnnoyedShave(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['like_pubes'] === 1) {
      scene.text('"Not really," you shrug. "I already told you, I like it this way. Why would I consider doing anything different?"');
    } else {
      if (((st as any).sex_ev ?? 0)?.['lazy_shave'] === 1) {
        scene.text('"No way," you say, giving him a look. "If I\'m already lazy about it, what makes you think I\'m going to do it for you?"');
      }
    }
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'You think I should?', handler: (st: GameState) => {
    if (((st as any).pcs_pubes ?? 0) < 4) {
      scene.text('"You think I should?" you ask him, looking down and inspecting your smooth pussy.');
      // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> says. "I think you''d look super sexy if you had a bit of h...
      scene.text(`"Yeah," ${((st as any).npcdesc || '')} says. "I think you'd look super sexy if you had a bit of hair down there. Not a full bush or anything like that, but just a landing strip or something."`);
    } else {
      if (((st as any).pube_style ?? 0)?.['word'] === 'stubble') {
        scene.text('"You think I should?" you ask him, looking down and inspecting your stubbly pussy.');
        // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> says. "I think you''d look super sexy if you had a bit of h...
        scene.text(`"Yeah," ${((st as any).npcdesc || '')} says. "I think you'd look super sexy if you had a bit of hair down there. Not a full bush or anything like that, but just a landing strip or something."`);
      } else {
        scene.text('"You think I should?" you ask him, looking down and inspecting your bush.');
        // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> says. "I think you''d look super sexy if you trimmed it bac...
        scene.text(`"Yeah," ${((st as any).npcdesc || '')} says. "I think you'd look super sexy if you trimmed it back a little."`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangePubesForBoy(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'You\'d like that?', handler: (st: GameState) => {
    scene.text('"You\'d like it like that?" you ask, looking down and inspecting your bush.');
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> says. "I think you''d look super sexy if you trimmed it bac...
    scene.text(`"Yeah," ${((st as any).npcdesc || '')} says. "I think you'd look super sexy if you trimmed it back a little. It'd be so hot."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangePubesForBoy(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBoyAsksBush(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnnoyedShave(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['like_pubes'] === 1) {
      scene.text('"Not really," you shrug. "I already told you, I like it this way. Why would I consider doing anything different?"');
    } else {
      scene.text('"Not really," you say, giving him a look. "What makes you think I\'d grow a bush just for you?"');
    }
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'You think I should?', handler: (st: GameState) => {
    if (((st as any).pcs_pubes ?? 0) < 4) {
      scene.text('"You think I should?" you ask him, looking down and inspecting your smooth pussy.');
    } else {
      if (((st as any).pube_style ?? 0)?.['word'] === 'stubble') {
        scene.text('"You think I should?" you ask him, looking down and inspecting your stubbly pussy.');
      } else {
        scene.text('"You think I should?" you ask him, looking down and inspecting your pubic hair.');
      }
    }
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> says. "I think you''d look super sexy with a full bush."
    scene.text(`"Yeah," ${((st as any).npcdesc || '')} says. "I think you'd look super sexy with a full bush."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangePubesForBoy(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'You\'d like that?', handler: (st: GameState) => {
    if (((st as any).pcs_pubes ?? 0) < 4) {
      scene.text('"You\'d like it like that?"" you ask him, looking down and inspecting your smooth pussy.');
    } else {
      if (((st as any).pube_style ?? 0)?.['word'] === 'stubble') {
        scene.text('"You\'d like it like that?" you ask him, looking down and inspecting your stubbly pussy.');
      } else {
        scene.text('"You\'d like it like that?" you ask him, looking down and inspecting your pubic hair.');
      }
    }
    // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> says. "I''d love it if you went full bush."
    scene.text(`"Yeah," ${((st as any).npcdesc || '')} says. "I'd love it if you went full bush."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangePubesForBoy(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterChangePubesForBoy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'ll think about it', handler: (st: GameState) => {
    ((st as any).npc_shave_think = (st as any).npc_shave_think ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.img('images/shared/sex/after/pillow_talk3.mp4');
    scene.text('"I\'ll think about it," you say. "But no promises."');
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'Sure', handler: (st: GameState) => {
    ((st as any).npc_shave_promise = (st as any).npc_shave_promise ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    // TODO-QSP: dynamic text: "Sure," you smile at <<$npcdesc>>. "I could give it a try..."
    scene.text(`"Sure," you smile at ${((st as any).npcdesc || '')}. "I could give it a try..."`);
    // TODO-QSP: dynamic text: <<$npcdesc>> grins back eagerly at you.
    scene.text(`${((st as any).npcdesc || '')} grins back eagerly at you.`);
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'I guess I could', handler: (st: GameState) => {
    ((st as any).npc_shave_promise = (st as any).npc_shave_promise ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.text('"Well..." you say. "I guess I could give it a try..."');
    // TODO-QSP: dynamic text: <<$npcdesc>> grins back eagerly at you.
    scene.text(`${((st as any).npcdesc || '')} grins back eagerly at you.`);
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'For you (hesitant)', handler: (st: GameState) => {
    ((st as any).npc_shave_promise = (st as any).npc_shave_promise ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.text('"Well..." you say. "I guess I could try it? For you."');
    // TODO-QSP: dynamic text: You punctuate your promise with an affectionate smile, returned with an eager gr...
    scene.text(`You punctuate your promise with an affectionate smile, returned with an eager grin from ${((st as any).npcdesc || '')}.`);
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'For you (affectionate)', handler: (st: GameState) => {
    ((st as any).npc_shave_promise = (st as any).npc_shave_promise ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.text('"If it will make you happy, then of course I\'ll do it."');
    // TODO-QSP: dynamic text: You smile affectionately at <<$npcdesc>>, who returns it with an eager grin.
    scene.text(`You smile affectionately at ${((st as any).npcdesc || '')}, who returns it with an eager grin.`);
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
  ]);
  scene.build();
}

function enterAnnoyedShave(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Get annoyed', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      if (((st as any).sex_ev ?? 0)?.['like_pubes'] === 1) {
        scene.text('"No?" you say, glaring at him. "I just told you I like it this way and you didn\'t seem to have a problem fucking it a few minutes ago."');
      } else {
        if (((st as any).sex_ev ?? 0)?.['lazy_shave'] === 1) {
          scene.text('"No?" you say, glaring at him. "You didn\'t seem to have a problem fucking it a few minutes ago, so why should I?"');
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['like_pubes'] === 1) {
        scene.text('"No?" you say, glaring at him. "I just told you I like it this way and it didn\'t seem to be a problem with making you hard a few minutes ago."');
      } else {
        if (((st as any).sex_ev ?? 0)?.['lazy_shave'] === 1) {
          scene.text('"No?" you say, glaring at him. "It didn\'t seem to be a problem with making you hard a few minutes ago, so why should I?"');
        }
      }
    }
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
  ]);
  scene.build();
}

function enterBoyLikesPubes(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $npc_like_pubestyle[$npcID] = $pube_style['word']
  // TODO-QSP: end
  scene.actions([
    { label: 'Good to know', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.mp4');
    scene.text('"Well good to know," you laugh. "I\'ll keep it in mind next time I look at a razor."');
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'Glad you think so', handler: (st: GameState) => {
    scene.text('"I\'m glad you think so. It\'s always nice to know someone thinks you\'re sexy," you say, giving him a soft smile.');
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'Glad I have your permission (sarcastic)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"Well I\'m glad I have your permission to shave the way I like it," you huff, acerbically rolling your eyes.');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
      // TODO-QSP: dynamic text: "What the fuck is your problem?" <<$npcdesc>> growls. "I was trying to pay you a...
      scene.text(`"What the fuck is your problem?" ${((st as any).npcdesc || '')} growls. "I was trying to pay you a compliment!"`);
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('You immediately feel bad and look back at him with a guilty expression on your face.');
    scene.text('"I\'m sorry," you say. "I... I don\'t know why I snapped at you like that. You\'re right. I should be happy you think I\'m sexy."');
    // TODO-QSP: dynamic text: You give him an apologetic smile and though <<$npcdesc>> still seems a little an...
    scene.text(`You give him an apologetic smile and though ${((st as any).npcdesc || '')} still seems a little annoyed with you, he mostly calms down as well.`);
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
        { label: 'I didn\'t ask!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['angry_after'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Well I didn\'t ask for your opinion!" you snap back. "It\'s my body and my bush, I can do whatever I want without hearing how you feel about it!"');
    scene.text('<i>Ugh! Men!</i> you grumble internally.');
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I didn''t mean it like that," <<$npcdesc>> says, looking bemused. "I just wante...
      scene.text(`"I didn't mean it like that," ${((st as any).npcdesc || '')} says, looking bemused. "I just wanted to let you know I think you're hot."`);
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('You immediately feel guilty and look back at him.');
    scene.text('"I\'m sorry," you say. "I... I don\'t know why I snapped at you like that. That was... uncalled for..."');
    // TODO-QSP: dynamic text: You give him an embarrassed smile and <<$npcdesc>> smiles back, letting you know...
    scene.text(`You give him an embarrassed smile and ${((st as any).npcdesc || '')} smiles back, letting you know he accepts your apology.`);
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
        { label: 'I didn\'t ask for a man\'s opinion!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['angry_after'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Well I didn\'t ask for your opinion!" you snap back. "It\'s my body and my bush, I can do whatever I want without hearing how a man feels about it!"');
    scene.text('<i>Ugh! Men!</i> you grumble internally.');
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
      ]);
    }
  } },
    { label: 'You really think so? (insecure)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    if (((st as any).pube_style ?? 0)?.['shape'] === 'bush') {
      scene.text('"You really think so?"');
      scene.text('Despite how casually you were talking about it before, hearing his praise suddenly brings a flush to your cheeks and you feel embarrassed.');
      scene.text('"I know I said I just like it, but..."');
      // TODO-QSP: dynamic text: "<<$pcs_usedname[$npcID]>>," <<$npcdesc>> says, smiling at you. "It''s beautiful...
      scene.text(`"${((st as any).pcs_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," ${((st as any).npcdesc || '')} says, smiling at you. "It's beautiful."`);
    } else {
      scene.text('"It\'s beautiful."');
    }
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
  ]);
  scene.build();
}

function enterBoyLikesPubes2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Thanks', handler: (st: GameState) => {
    scene.text('"Thanks," you smile back. "It\'s always nice to be complimented."');
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'I like it too', handler: (st: GameState) => {
    scene.text('"Me too," you smile back before taking an admiring look yourself. "I love the look of my pussy."');
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'Don\'t do it for you', handler: (st: GameState) => {
    scene.text('"It\'s not like I do it for you," you say, brushing his compliment aside and rolling your eyes.');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Way to be a bitch about it," he mumbles under his breath.');
    } else {
      scene.text('"Doesn\'t mean I can\'t appreciate it for myself," he grins back.');
    }
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
    { label: 'Compliment his cock', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    if (((st as any).dick_desc ?? 0) === 'tiny') {
      scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his flaccid manhood. "For a guy with a tiny dick, you sure know how to use it."');
    } else {
      if (((st as any).dick_desc ?? 0) === 'short') {
        scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his flaccid manhood. "It\'s pretty small, but you sure know how to use it."');
      } else {
        if (((st as any).dick_desc ?? 0) === 'chode') {
          scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his flaccid manhood. "You may be small, but so you\'re <i>so</i> thick. I love feeling you stretch me out."');
        } else {
          if (((st as any).dick_desc ?? 0) === 'skinny') {
            scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his flaccid manhood. "For a guy with such a skinny dick, you sure know how to use it."');
          } else {
            if (((st as any).dick_desc ?? 0) === 'normal') {
              scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his flaccid manhood. "You fill me up just right."');
            } else {
              if (((st as any).dick_desc ?? 0) === 'thick') {
                scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his manhood. Even flaccid, its girth is impressive. "You\'re <i>so</i> big!"');
              } else {
                if (((st as any).dick_desc ?? 0) === 'long') {
                  scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his manhood, stretching its length down his thighs even when flaccid. "It\'s <i>so</i> long. All the other guys I sleep with can\'t get nearly as deep as you can."');
                } else {
                  if (((st as any).dick_desc ?? 0) === 'huge') {
                    scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his manhood, impressive in its size even flaccid. "It\'s <i>huge</i>! And I love how deep I can feel you inside me."');
                  } else {
                    if (((st as any).dick_desc ?? 0) === 'enormous') {
                      scene.text('"You\'ve got some pretty nice equipment yourself," you say, grinning lewdly at his manhood, impressive in its size even flaccid. "You\'re packing some serious firepower. I can barely even fit you inside me!"');
                    } else {
                      if (((st as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: "You''ve got some pretty nice equipment yourself," you say, grinning lewdly at h...
                        scene.text(`"You've got some pretty nice equipment yourself," you say, grinning lewdly at his manhood, stretching its ${((st as any).npc_dick ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}cm length down his thighs even when flaccid. "I can practically feel you in my stomach when you've got the whole thing inside me."`);
                      } else {
                        if (((st as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: "You''ve got some pretty nice equipment yourself," you say, grinning lewdly at h...
                          scene.text(`"You've got some pretty nice equipment yourself," you say, grinning lewdly at his manhood, stretching its ${((st as any).npc_dick ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}cm length down his thighs even when flaccid. "I can practically feel you in my stomach when you've got the whole thing inside me."`);
                        } else {
                          if (((st as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: "You''ve got some pretty nice equipment yourself," you say, grinning lewdly at h...
                            scene.text(`"You've got some pretty nice equipment yourself," you say, grinning lewdly at his monstrously large manhood, stretching its ${((st as any).npc_dick ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}cm length down his thighs with a girth nearly as thick as your wrist even flaccid. "It's like you've got an arm for a dick. I didn't even know cocks could get that big!"`);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    qspGoto(st, 'sex_ev_body_talk', 'pube_talk_end');
  } },
  ]);
  scene.build();
}

function enterPubesYoung(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Makes me feel too young', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')  ||  qspFunc(s, 'pcs_has_attr', 'hair_pubes_untrimmed')) {
      scene.text('"I tried it once but I didn\'t like it," you grimace. "Made me feel like a little girl. It was weird. I prefer to have a full bush compared to that. Why do you ask?"');
    } else {
      scene.text('"I tried it once but I didn\'t like it," you grimace. "Made me feel like a little girl. It was weird. So now I always make sure I have some hair down there. Why do you ask?"');
    }
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
  ]);
  scene.build();
}

function enterPubesProblem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Got a problem with that?', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_shaven')) {
      // TODO-QSP: dynamic text: "Got a problem with my pussy?" you ask, giving <<$npcdesc>> a hard side-eye.
      scene.text(`"Got a problem with my pussy?" you ask, giving ${((st as any).npcdesc || '')} a hard side-eye.`);
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')  ||  qspFunc(s, 'pcs_has_attr', 'hair_pubes_untrimmed')) {
        // TODO-QSP: dynamic text: "Got a problem with my bush?" you ask, giving <<$npcdesc>> a hard side-eye.
        scene.text(`"Got a problem with my bush?" you ask, giving ${((st as any).npcdesc || '')} a hard side-eye.`);
        scene.text('"You\'d look super sexy if you shaved it all off," he says.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyAsksCleanshave(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_patch'  ||  ((st as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_trimmed') {
          scene.text('"Ever considered trimming it down?" he asks.');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyAsksTrim(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          if (((st as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_bush'  ||  ((st as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_pubes_untrimmed') {
            scene.text('"I think it\'s sexy too," he grins. "Too many girls feel peer pressured into shaving it off, but I love a nice full bush."');
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyLikesPubes(s, scene); (st as any).locArgs = __savedLocArgs; }
          } else {
            // TODO-QSP: dynamic text: "Got a problem with my pubes?" you ask, giving <<$npcdesc>> a hard side-eye.
            scene.text(`"Got a problem with my pubes?" you ask, giving ${((st as any).npcdesc || '')} a hard side-eye.`);
          }
        }
      }
    }
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
  ]);
  scene.build();
}

function enterPubesProblemBush(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterPubesOtherLovers(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_like_pubestyle ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'My boyfriend likes it', handler: (st: GameState) => {
    scene.text('"My boyfriend likes it this way," you shrug. "Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['girlfriends_current'] > 0) {
      scene.actions([
        { label: 'My girlfriend likes it', handler: (st: GameState) => {
    scene.text('"My girlfriend likes it this way," you shrug. "Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      ]);
    }
    if (Object.keys((s as any).fuckbuddy ?? {}).length > 1) {
      scene.actions([
        { label: 'My other fuckbuddy likes it', handler: (st: GameState) => {
    scene.text('"My other fuckbuddy likes it this way," you shrug. "Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      ]);
    }
    scene.actions([
      { label: 'My ex liked it', handler: (st: GameState) => {
    scene.text('"My ex preferred it this way," you shrug. "Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
      { label: 'My last fuckbuddy liked it', handler: (st: GameState) => {
    scene.text('"A fuckbuddy I used to have liked it this way," you shrug. "Why do you ask?"');
    qspGoto(st, 'sex_ev_body_talk', 'boy_pubes_response');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPubeTalkEnd(s: GameState, scene: SceneBuilder): void {
  if ((!((String(((s as any).npc_talk_history ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf(String(';pube_talk'))) + 1))) {
    qspCall(s, 'lover', 'add_topic', ((s as any).npcID ?? 0), 'pube_talk');
  }
  // TODO-QSP: $npc_know_pubes[$npcID] = $pube_style['word']
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterPubesOtherLovers2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterBoyPubeTalkFollowup(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_shaven')) {
    if (((s as any).npc_like_pubestyle ?? 0)?.[String((s as any).npcID ?? 0)] === 'shaved') {
      if (((s as any).npc_know_pubes ?? 0)?.[String((s as any).npcID ?? 0)] !== 'shaved') {
      } else {
        scene.text('"I love this beautiful pussy," he murmurs, running his fingers across the smooth, cleanshaven skin above your snatch.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBeautifulBlondeBody(s: GameState, scene: SceneBuilder): void {
  scene.text('"I can\'t get over how hot you are."');
  scene.text('"Beautiful, blonde, with big tits? It\'s a classic look."');
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_body_talk ---------------------------------
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'boy_like_hair_talk':
      enterBoyLikeHairTalk(s, scene);
      break;
    case 'boob_fondle':
      enterBoobFondle(s, scene);
      break;
    case 'tits_admire':
      enterTitsAdmire(s, scene);
      break;
    case 'tits_admire_menu':
      enterTitsAdmireMenu(s, scene);
      break;
    case 'like_my_tits':
      enterLikeMyTits(s, scene);
      break;
    case 'just_breasts':
      enterJustBreasts(s, scene);
      break;
    case 'what_do_you_like':
      enterWhatDoYouLike(s, scene);
      break;
    case 'cupsize_talk':
      enterCupsizeTalk(s, scene);
      break;
    case 'boy_pube_talk_start':
      enterBoyPubeTalkStart(s, scene);
      break;
    case 'boy_pube_talk_first':
      enterBoyPubeTalkFirst(s, scene);
      break;
    case 'pubes_shaved_response':
      enterPubesShavedResponse(s, scene);
      break;
    case 'pubes_stubble_response':
      enterPubesStubbleResponse(s, scene);
      break;
    case 'pubes_trimmed_response':
      enterPubesTrimmedResponse(s, scene);
      break;
    case 'pubes_bush_response':
      enterPubesBushResponse(s, scene);
      break;
    case 'boy_pubes_response':
      enterBoyPubesResponse(s, scene);
      break;
    case 'dont_shave_like_talk':
      enterDontShaveLikeTalk(s, scene);
      break;
    case 'boy_bush_response':
      enterBoyBushResponse(s, scene);
      break;
    case 'boy_asks_cleanshave':
      enterBoyAsksCleanshave(s, scene);
      break;
    case 'boy_asks_trim':
      enterBoyAsksTrim(s, scene);
      break;
    case 'boy_asks_bush':
      enterBoyAsksBush(s, scene);
      break;
    case 'change_pubes_for_boy':
      enterChangePubesForBoy(s, scene);
      break;
    case 'annoyed_shave':
      enterAnnoyedShave(s, scene);
      break;
    case 'boy_likes_pubes':
      enterBoyLikesPubes(s, scene);
      break;
    case 'boy_likes_pubes2':
      enterBoyLikesPubes2(s, scene);
      break;
    case 'pubes_young':
      enterPubesYoung(s, scene);
      break;
    case 'pubes_problem':
      enterPubesProblem(s, scene);
      break;
    case 'pubes_problem_bush':
      enterPubesProblemBush(s, scene);
      break;
    case 'pubes_other_lovers':
      enterPubesOtherLovers(s, scene);
      break;
    case 'pube_talk_end':
      enterPubeTalkEnd(s, scene);
      break;
    case 'pubes_other_lovers2':
      enterPubesOtherLovers2(s, scene);
      break;
    case 'boy_pube_talk_followup':
      enterBoyPubeTalkFollowup(s, scene);
      break;
    case 'beautiful_blonde_body':
      enterBeautifulBlondeBody(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_body_talk: LocationDef = {
  name: 'sex_ev_body_talk',
  title: '"Your boobs are so soft," he mumbles, giving another several',
  region: 'other',
  enter: enter,
};
