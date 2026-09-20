import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAlbina1(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 23;
  (s as any).static_num = 'A23';
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('At the end of the class, a few girls enter the dance studio, including Albina Barlovskaya. You know nothing about her outside of her reputation as a stuck up rich bitch.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Greet Albina', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('You approach and greet Albina, who turns and raises an eyebrow in scornful confusion.');
    // TODO-QSP: dynamic text: "Who the fuck are you? Oh, right. <<$pcs_firstname>>. So you''ve taken up dancin...
    scene.text(`"Who the fuck are you? Oh, right. ${((st as any).pcs_firstname || '')}. So you've taken up dancing, have you?" You nod, confirming the obvious, but she just laughs dismissively. "Well, how's that going for you?"`);
    scene.text('"Not bad," you answer coldly. "Not bad at all."');
    scene.text('She just laughs at you mockingly. "Not bad? Well maybe in comparison to those bowlegged cows of amateurs you train with, but I doubt that you can dance on a <i>professional</i> level like <i>us</i>."');
    scene.actions([
      { label: 'I don\'t care', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('"I don\'t care what you think!" you reply as scornfully as possible and turn away from her.');
    scene.text('"That\'s right! Fuck off back to the amateurs where you belong!" she says in a belittling tone before turning to the other girls. "Alright girls, let\'s get to work."');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
      { label: 'I know how to dance', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('Albina\'s arrogance is getting on your nerves. "I can dance just as good as you or any of your group!"');
    scene.text('She looks at you in disbelief, seemingly offended by your remark. "You think you can dance better than <i>me</i>? <i>YOU</i>? You can just sit your amateur ass down and watch how a professional does it. Then we\'ll see if you still think you can dance!" she says scornfully before forcing you to sit on the bench.');
    scene.text('Turning to the other girls, she motions for one of them to turn the music on.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('The music starts playing and you instantly realize your mistake in trying to compare yourself to Albina. She flawlessly performs a number of dance moves you could never even hope to do, all with a smug smile on her face directed at you.');
    scene.text('She finishes her performance as the music ends and you sheepishly avoid eye contact with her as she walks up to you, breathless.');
    scene.text('"Not so loud-mouthed now are you?" she gleefully remarks with a laugh. "Now why don\'t you fuck off and take your humble ass back to the amateur corner where you belong?"');
    if (((st as any).grupTipe ?? 0) === 4) {
      scene.text('"A junkie like you will never dance with <i>us</i>!"');
    } else {
      scene.text('"If I liked you better, then I <i>might</i> have taken an interest in improving your horrible dancing."');
    }
    scene.text('The other girls laugh at you as you retreat from the mocking insults being directed at you.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina2(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 23;
  (s as any).static_num = 'A23';
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('At the end of the class, a few girls enter the dance studio, including Albina Barlovskaya. You know Albina from school and you have a pretty good relationship with each other.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Greet Albina', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('You approach and greet Albina, who turns to you and smiles.');
    // TODO-QSP: dynamic text: "Oh hello <<$pcs_nickname>>. I didn''t know you started dancing. Are you any goo...
    scene.text(`"Oh hello ${((st as any).pcs_nickname || '')}. I didn't know you started dancing. Are you any good?" she asks with interest.`);
    scene.text('"I\'m pretty good, I think," you reply with a smile. "Even if I do say so myself."');
    scene.text('"Pretty good, huh?" she responds in a condescending tone. "Well, I\'ve seen some of the dancers that take lessons here. It wouldn\'t take much to be better than those bow-legged cows. I doubt you\'re up to any kind of <i>professional</i> standard, though."');
    scene.actions([
      { label: 'I don\'t care', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('Offended by her tone, you reply as scornfully as possible. "I couldn\'t care less what you think!"');
    scene.text('"That\'s right! Fuck off back to the amateurs where you belong!" she says in a belittling tone before turning to the other girls. "Alright girls, let\'s get to work."');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
      { label: 'I know how to dance', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('Her arrogance annoys you. "I can dance just as well as you or any of these girls!" you scornfully reply.');
    scene.text('She looks at you in disbelief, seemingly offended by your remark. "You think you can dance better than <i>me</i>? <i>YOU</i>?! You can just sit your amateur ass down and watch how a professional does it. Then we\'ll see if you still think you can dance!" she says scornfully before forcing you to sit on the bench.');
    scene.text('Turning to the other girls, she motions for one of them to turn the music on.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('The music starts playing and you instantly realize your mistake in trying to compare yourself to Albina. She flawlessly performs a number of dance moves that you could never even hope to do, all with a smug smile on her face directed at you.');
    scene.text('She finishes her performance as the music ends and you sheepishly avoid eye contact with her as she walks up to you, breathless.');
    scene.text('"Not so loud mouthed now are you?" she gleefully remarks with a laugh. "I\'m in a good mood today. I want to see you dance. Get your ass up and prove you\'re as good as you claim."');
    scene.actions([
      { label: 'Continue', goto: ['albina_starlets', 'albina4'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina3(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 23;
  (s as any).static_num = 'A23';
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('At the end of the class, a few girls enter the dance studio, including Albina Barlovskaya. You\'ve known Albina for years and have formed a close friendship over your shared passion for dancing.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Greet Albina', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('You approach and greet Albina, who turns to you and smiles, but stops short of hugging you.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!! Please tell me you don''t practice with those bow-legged co...
    scene.text(`"${((st as any).pcs_nickname || '')}!! Please tell me you don't practice with those bow-legged cows who call themselves dancers?" she asks with a smirk.`);
    scene.text('"I\'m pretty good, but I don\'t know if I\'m quite on your level just yet," you reply.');
    scene.text('"Hey, don\'t sell yourself short!" she responds with a smile. "Have you seen the people that take lessons here? <i>Please</i>. No amount of training will help them reach your skill level. You\'ve got talent, which brings me to my next question…"');
    scene.actions([
      { label: 'Ask what she means', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('Her words have grabbed your attention. "Do you mean?"');
    scene.text('She just smiles. "Maybe. Watch us do it first, then see if you can keep up."');
    scene.text('An excitement builds within you. Is she really considering you for her group?');
    scene.actions([
      { label: 'Watch', goto: ['albina_starlets', 'albina5'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina4(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 23;
  (s as any).static_num = 'A23';
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: The music starts playing as Albina sits next to you and motions for you to get u...
  scene.text(`The music starts playing as Albina sits next to you and motions for you to get up and start dancing. "Hurry up, ${((s as any).pcs_nickname || '')}! I have better things to do than watch you flounder around like a beached whale, so let's get this over with already!"`);
  if (((s as any).pregtime ?? 0) >= 90) {
    scene.text('You might try out for them after you\'ve had your child.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Prove yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).pcs_inhib ?? 0) < 40) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    qspCall(st, 'stat', '');
    scene.text('You get up and start dancing to the music, trying as hard as you can to impress them. When the music stops, Albina stands and walks up to you.');
    scene.text('"You dance like a country bumpkin, but you do have some potential…" she muses as you stand panting before her.');
    scene.actions([
      { label: 'Can I join?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).pcs_hotcat ?? 0) < 6) {
      scene.text('"Well? Am I good enough to join?" you ask.');
      scene.text('She just laughs at you dismissively. "While I <i>could</i> train you properly so you\'re not a floundering embarrassment, appearance is everything to the Starlets, so try improving your looks first and then get back to us."');
      scene.text('She turns and leaves with the rest of the troupe, her comments leaving you feeling slightly insulted.');
    } else {
      if (((st as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((st as any).stat ?? 0)?.['vaginal'] === 0) {
        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['starlets_virgin'] = 1;
        scene.text('"Well? Am I good enough to join?" you ask.');
        scene.text('She thinks about it and looks at the other girls; some nod, others shrug.');
        scene.text('Finally, she answers. "Okay, we\'ll take a shot. Maybe you\'ll learn something by training with <i>actual</i> dancers. We practice every day except Tuesday and Thursday, so don\'t be late."');
        scene.text('When the other girls leave, she pulls you aside. "Hey, are you \'pure\'?" she whispers.');
        scene.text('"Why would you want to know such a personal thing?" you reply as you blush, giving her the answer to her question.');
        scene.text('"Oh, it\'s… nothing. I just… look out for my girls is all," she says with hesitation.');
        (st as any).temp_showtext = 0;
        (st as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_starlets" });
        if (((st as any).temp_index ?? 0) < 0) {
          qspCall(st, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
          (st as any).temp_showtext = 1;
        } else {
          if (((st as any).contactAnon ?? 0)?.[String((st as any).temp_index ?? 0)] !== 0) {
            ((st as any).contactAnon = (st as any).contactAnon ?? {})[String((st as any).temp_index ?? 0)] = 0;
            (st as any).temp_showtext = 1;
          }
        }
        if (((st as any).temp_showtext ?? 0)) {
          scene.text('She then pulls out her phone. "Here\'s my number so I can keep in contact with you."');
          scene.text('You add each other\'s numbers to your phones before you say goodbye and she walks away.');
        }
        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsJoined'] = 1;
        qspCall(st, 'calendar', 'pack', 'add', 'starlets');
      } else {
        scene.text('"Well, am I good enough to join?" you ask.');
        scene.text('She thinks about it and looks at the other girls; some nod, others shrug in indifference.');
        scene.text('Finally, she answers. "Okay, we\'ll take a shot. Maybe you\'ll learn something by training with <i>actual</i> dancers. We practice every day except Tuesday and Thursday, so don\'t be late."');
        (st as any).temp_showtext = 0;
        (st as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_starlets" });
        if (((st as any).temp_index ?? 0) < 0) {
          qspCall(st, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
          (st as any).temp_showtext = 1;
        } else {
          if (((st as any).contactAnon ?? 0)?.[String((st as any).temp_index ?? 0)] !== 0) {
            ((st as any).contactAnon = (st as any).contactAnon ?? {})[String((st as any).temp_index ?? 0)] = 0;
            (st as any).temp_showtext = 1;
          }
        }
        if (((st as any).temp_showtext ?? 0)) {
          scene.text('She then pulls out her phone. "Here\'s my number so I can keep in contact with you."');
          scene.text('You add each other\'s numbers to your phones before you say goodbye and she walks away.');
        }
        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsJoined'] = 1;
        qspCall(st, 'calendar', 'pack', 'add', 'starlets');
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbina5(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 23;
  (s as any).static_num = 'A23';
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('The girls turn on their stereo and start dancing. It immediately becomes clear to you that they dance professionally, but only slightly better than you. Only Albina outmatches your ability. It\'s obvious that they\'ve practiced this routine many times as their movements are closely synchronized with no wasted effort.');
  scene.text('"Okay girls… Take a breather…" Albina says when the music ends.');
  scene.text('She comes up to you, breathless. "These are… my Starlets. We do… professional shows and… have been in a music video…"');
  if (((s as any).pregtime ?? 0) >= 90) {
    scene.text('You might try out for them after you\'ve had your child.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Prove yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: "Your turn now <<$pcs_nickname>>. Show me that you''re as passionate as I am and...
    scene.text(`"Your turn now ${((st as any).pcs_nickname || '')}. Show me that you're as passionate as I am and we might come to an agreement…" she says as she sits down to catch her breath.`);
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).pcs_inhib ?? 0) < 40) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    qspCall(st, 'stat', '');
    scene.text('You start dancing to the music and put very little effort into your moves before the other girls are pointing and talking to each other, intrigued by your skill. When the music stops, Albina walks up to you.');
    scene.text('You stand panting before her as she gleefully claps. "I knew you could do it!"');
    scene.text('"Do… what?" you reply.');
    // TODO-QSP: dynamic text: "I had no doubts about you <<$pcs_nickname>>, but the others wanted to see you i...
    scene.text(`"I had no doubts about you ${((st as any).pcs_nickname || '')}, but the others wanted to see you in action first. They didn't believe me when I said you were <i>almost</i> as good as me."`);
    scene.actions([
      { label: 'I\'m a Starlet?!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsJoined'] = 1;
    qspCall(st, 'calendar', 'pack', 'add', 'starlets');
    qspCall(st, 'stat', '');
    scene.text('"You… mean… I\'m a… Starlet?" you ask as you continue panting.');
    scene.text('"Well of course you are! I can\'t let someone as good as you go to waste on these bow-legged amateurs! We practice every day except for Tuesday and Thursday, so don\'t be late!" she replies.');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((st as any).stat ?? 0)?.['vaginal'] === 0) {
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['starlets_virgin'] = 1;
      scene.text('When the other girls leave, she pulls you aside. "Hey, are you \'pure\'?" she whispers.');
      scene.text('"Why would you want to know such a personal thing?" you reply as you blush, giving her the answer to her question.');
      scene.text('"Oh, it\'s… nothing. I just… look out for my girls is all…" she says with hesitation.');
    }
    scene.text('She then pulls out her phone. "Here\'s my number so I can keep in contact with you."');
    (st as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_starlets" });
    if ((Array.isArray((st as any).contact) ? ((st as any).contact as any[]).indexOf('A23') : -1) < 0) {
      qspCall(st, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
    } else {
      if (((st as any).contactAnon ?? 0)?.[String((st as any).temp_index ?? 0)] !== 0) {
        ((st as any).contactAnon = (st as any).contactAnon ?? {})[String((st as any).temp_index ?? 0)] = 0;
      }
    }
    scene.text('You add each other\'s numbers to your phones before you say goodbye and she walks away.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
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

function enterStarlets(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['startletsday'] = ((s as any).daystart ?? 0);
  (s as any).starlets_practice = 0;
  qspCall(s, 'gdksport', 'jocks_acceptance');
  qspCall(s, 'exercise', 'tier2', 120, 'agil', 'dancero');
  qspCall(s, 'exp_gain', 'dancero', 2);
  qspCall(s, 'fame', 'pav', 'dance', 'medium');
  qspCall(s, 'mood', 'lower', 'tiny');
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 2));
  if (((s as any).perform_lvl ?? 0) < 35) {
    qspCall(s, 'exp_gain', 'perform', 1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/dance_studio/fit1.jpg');
  if (((s as any).pcs_dancero ?? 0) < 15) {
    // TODO-QSP: dynamic text: Your dancing is terrible and Albina constantly yells at you. "Did I make a mista...
    scene.text(`Your dancing is terrible and Albina constantly yells at you. "Did I make a mistake letting you join, ${((s as any).pcs_nickname || '')}?"`);
  } else {
    if (((s as any).pcs_dancero ?? 0) < 30) {
      scene.text('You sometimes manage to get it right, but you\'re largely out of sync with the others or make the wrong move. Albina constantly yells at you and calls you "a bowlegged cow."');
    } else {
      if (((s as any).pcs_dancero ?? 0) < 45) {
        // TODO-QSP: dynamic text: You manage to get into the general rhythm and move well with the other girls, bu...
        scene.text(`You manage to get into the general rhythm and move well with the other girls, but Albina still isn't happy. "You're too sluggish, ${((s as any).pcs_nickname || '')}! Put more life into it!"`);
      } else {
        if (((s as any).pcs_dancero ?? 0) < 55) {
          // TODO-QSP: dynamic text: You perform the routine with no mistakes, but Albina still nags at you. "You''re...
          scene.text(`You perform the routine with no mistakes, but Albina still nags at you. "You're not at a funeral, ${((s as any).pcs_nickname || '')}! Raise your head and smile!"`);
        } else {
          scene.text('You dance beautifully and Albina uses you as an example for the other girls.');
        }
      }
    }
  }
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['ShowTriggerCount'] = ((s as any).AlbinaQW['ShowTriggerCount'] ?? 0) + (1);
  if (((s as any).AlbinaQW ?? 0)?.['ShowTriggerCount'] >= 6) {
    if (((((s as any).month ?? 0) === 10  &&  ((s as any).day ?? 0) > 20)  ||  (((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) < 16))  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).AlbinaQW ?? 0)?.['ParkRally'] === 2) {
      qspGoto(s, 'albina_starlets', 'parkrally');
    }
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['ShowTriggerCount'] = 0;
    (s as any).albpayrand = (Math.floor(Math.random() * 5) + 1);
    scene.text('After you finish training, Albina gathers you and the girls round.');
    // TODO-QSP: dynamic text: "We have a small show planned. It will last for a few hours and each of you will...
    scene.text(`"We have a small show planned. It will last for a few hours and each of you will receive ${qspFunc(s, 'money', 'string_profit', ((s as any).albpayrand ?? '')*1000, 1)}."`);
    scene.actions([
      { label: 'Do the show', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/stage.jpg');
    scene.text('Albina calls for a car. Once it arrives, you all bundle in and are driven to the performance hall, where you\'re ushered into a small dressing room.');
    scene.text('You all change into your outfits before grouping up at the edge of the stage.');
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier2', 120, 'agil', 'danc');
    // TODO-QSP: gs 'money', 'earn', albpayrand * 1000
    (st as any).profiDanceTime = ((st as any).profiDanceTime ?? 0) + (1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 3));
    if (((st as any).perform_lvl ?? 0) < 35) {
      qspCall(st, 'exp_gain', 'perform', (Math.floor(Math.random() * 2) + 1));
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/dance.jpg');
    scene.text('The MC announces the Starlets and you all dance your way out onto the stage, beginning the show with cheers from the crowd. During the performance, you can\'t help but notice a number of older men in the audience leering at you as you dance.');
    scene.actions([
      { label: 'Finish the show', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/backstage.jpg');
    scene.text('The performance goes smoothly and you and the other Starlets leave the stage, where Albina distributes the money while everyone takes turns using the single shower in the dressing room.');
    scene.actions([
      { label: 'Shower', handler: (st: GameState) => {
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    if (((st as any).pcs_hotcat ?? 0) >= 6  &&  ((st as any).AlbinaQW ?? 0)?.['starlets_virgin'] === 0) {
      if (((st as any).pcs_hotcat ?? 0) < 8) {
        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletCustomer'] = (Math.floor(Math.random() * 16) + 1);
      } else {
        if (((st as any).pcs_hotcat ?? 0) < 9) {
          ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletCustomer'] = (Math.floor(Math.random() * 13) + 1);
        } else {
          ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletCustomer'] = (Math.floor(Math.random() * 11) + 1);
        }
      }
      if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 1) {
        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsCustomerCount'] = 1;
        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 3);
        scene.text('You see a greasy and balding middle aged Armenian man wearing an expensive suit approach Albina and start talking to her. She avoids eye contact and looks rather uncomfortable talking to him.');
      } else {
        if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 2) {
          ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsCustomerCount'] = 2;
          ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 6);
          scene.text('You see two well dressed middle aged Armenian men approach Albina and start to talking to her.');
        } else {
          if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 3) {
            ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsCustomerCount'] = 2;
            ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 6);
            scene.text('You see two young men awkwardly approach Albina and start talking to her.');
          } else {
            if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 4) {
              ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsCustomerCount'] = 1;
              ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 3);
              scene.text('You see a bald old man approach Albina and start talking to her.');
            } else {
              if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 5) {
                ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsCustomerCount'] = 2;
                ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 6);
                scene.text('You see two old men approach Albina and start talking to her.');
              } else {
                if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 6) {
                  ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsCustomerCount'] = 1;
                  ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 3);
                  scene.text('You see a well groomed man in a modest suit approach Albina and start talking to her.');
                } else {
                  if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 7) {
                    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletCustomerCount'] = 12;
                    scene.text('You see an older man with greying hair wearing an expensive shirt with the sleeves rolled up to his elbows talking to Albina.');
                    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 6);
                  } else {
                    if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 8) {
                      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletCustomerCount'] = 1;
                      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 3);
                      scene.text('You see an older blonde haired woman wearing a skirt and blouse talking to Albina.');
                    } else {
                      if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 9) {
                        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletCustomerCount'] = 1;
                        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletPay'] = (Math.floor(Math.random() * 4) + 3);
                        scene.text('You see a somewhat muscular bald man talking to Albina.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] <= 9) {
        // TODO-QSP: dynamic text: Albina walks up to you. "<<$pcs_nickname>>, we… We need to… to talk…" she quietl...
        scene.text(`Albina walks up to you. "${((st as any).pcs_nickname || '')}, we… We need to… to talk…" she quietly stammers.`);
        scene.actions([
          { label: 'About what?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('You can see a little bit of fear in Albina\'s eyes as you ask her what\'s wrong.');
    if (((st as any).AlbinaQW ?? 0)?.['StarletsCustomerCount'] === 1) {
      // TODO-QSP: dynamic text: Albina avoids eye contact. "Nothing, it''s just… If you go with this person and ...
      scene.text(`Albina avoids eye contact. "Nothing, it's just… If you go with this person and be… 'affectionate'," she says hesitantly, "you'll get ${qspFunc(s, 'money', 'string_profit', (((st as any).AlbinaQW ?? {})?.['StarletPay'] ?? 0)*1000, 1)}."`);
      // TODO-QSP: dynamic text: She looks you in the eye, the fear within her apparently growing. "Please <<$pcs...
      scene.text(`She looks you in the eye, the fear within her apparently growing. "Please ${((st as any).pcs_nickname || '')}, I need you to do this for me. Just… please."`);
    } else {
      // TODO-QSP: dynamic text: Albina avoids eye contact. "Nothing, it''s just… See those guys?" she asks hesit...
      scene.text(`Albina avoids eye contact. "Nothing, it's just… See those guys?" she asks hesitantly. "If you go with them and be…'affectionate', you'll get ${qspFunc(s, 'money', 'string_profit', (((st as any).AlbinaQW ?? {})?.['StarletPay'] ?? 0)*1000, 1)}."`);
      // TODO-QSP: dynamic text: She looks you in the eye, the fear within her apparently growing. "Please <<$pcs...
      scene.text(`She looks you in the eye, the fear within her apparently growing. "Please ${((st as any).pcs_nickname || '')}, I need you to do this for me. Just… please."`);
    }
    qspCall(st, 'willpower', 'prostitution', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'prostitution', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('You shake your head at Albina, who looks to the floor disheartened, but lets you go. As you walk away, you look back. Albina has a tear running down her cheek as she\'s grabbed by the arm and dragged away.');
    scene.text('You climb into the car and notice that Albina isn\'t the only girl missing. The other girls quietly talk about how they hope "they aren\'t too rough with them" and that maybe they\'ll get one of the "nice guys."');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'earn', AlbinaQW['StarletPay'] * 1000
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['StarletsWhore'] = ((st as any).AlbinaQW['StarletsWhore'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('You agree to be \'nice\' and Albina reluctantly hands over the money.');
    scene.text('As you\'re led away, Albina looks like she\'s about to say something, but instead just looks at the floor, disheartened as you hear her muttering to herself.');
    if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 1) {
      scene.actions([
        { label: 'Go with the Armenian', goto: ['albina_starlets_sex', 'whore1'] },
      ]);
    } else {
      if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 2) {
        scene.actions([
          { label: 'Go with the Armenians', goto: ['albina_starlets_sex', 'whore2'] },
        ]);
      } else {
        if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 3) {
          scene.actions([
            { label: 'Go with the young men', goto: ['albina_starlets_sex', 'whore3'] },
          ]);
        } else {
          if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 4) {
            scene.actions([
              { label: 'Go with the old man', goto: ['albina_starlets_sex', 'whore4'] },
            ]);
          } else {
            if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 5) {
              scene.actions([
                { label: 'Go with the old men', goto: ['albina_starlets_sex', 'whore5'] },
              ]);
            } else {
              if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 6) {
                scene.actions([
                  { label: 'Go with the man', goto: ['albina_starlets_sex', 'whore6'] },
                ]);
              } else {
                if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 7) {
                  scene.actions([
                    { label: 'Go with the middle aged man', goto: ['albina_starlets_sex', 'whore7'] },
                  ]);
                } else {
                  if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 8) {
                    scene.actions([
                      { label: 'Go with the woman', goto: ['albina_starlets_sex', 'whore8'] },
                    ]);
                  } else {
                    if (((st as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 9) {
                      scene.actions([
                        { label: 'Go with the bald man', goto: ['albina_starlets_sex', 'whore9'] },
                      ]);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } },
    ]);
  } },
        ]);
      } else {
        qspGoto(st, 'albina_starlets', 'after_show');
      }
    } else {
      qspGoto(st, 'albina_starlets', 'after_show');
    }
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
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterAfterShow(s: GameState, scene: SceneBuilder): void {
  scene.text('After the show, you see Albina talking with some men as one of your fellow Starlets stands next to her.');
  scene.text('Albina reluctantly hands her some money and the men forcefully drag the Starlet away as Albina looks at the floor, a single tear running down her cheek.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Drive back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('You get in the car along with Albina and notice quite a few empty seats. Questions soon start arising about the missing girls and whether they\'re with "one of those kind of guys."');
    scene.text('"Just be thankful that you\'re not them right now," Albina quietly replies and spends the rest of the journey lost in thought while staring out the window. You see her wiping tears from her eyes a few times.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterParkrally(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['ParkRally'] = 3;
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['ShowTriggerCount'] = 0;
  scene.text('After practice, Albina walks up to the group, furious. "My father wants us to perform at his stupid rally!" she huffs.');
  scene.text('She directs you to follow her, saying someone dropped off special outfits for you to wear. As you walk into the changing room, a box sits on the bench.');
  scene.text('Albina reads a note before she pulls a lycra leotard out. Her fist clenches around it as she sees how skimpy it is, but resigns herself and hands them out to the reluctant girls.');
  scene.text('You undress and slide the outfit on.');
  if (((s as any).tits ?? 0) === 4) {
    scene.text('It\'s skin tight and your large breasts are just about able to fit, your nipples poking through the thin fabric as you try to adjust the outfit into a comfortable state. The back isn\'t much better…');
  } else {
    if (((s as any).tits ?? 0) > 4) {
      scene.text('It\'s skin tight and strains against your bust, your enormous breasts in danger of falling out as your nipples clearly poke through the thin fabric. The back isn\'t much better…');
    } else {
      scene.text('It\'s skin tight and your nipples poke through the thin fabric as you adjust the straps. The back isn\'t much better…');
    }
  }
  scene.text('You might as well be wearing a thong for all it covers. You have to constantly adjust the strip of fabric covering your crotch to make it comfortable as you can.');
  scene.text('You look over and see Albina scowling as she inspects herself in the mirror, her leotard somehow looking even skimpier than yours and leaving little to the imagination; the outline of her perky breasts and nipples can clearly be seen and the near lack of rear coverage all but draws your attention to her jiggling bubble butt.');
  scene.text('"She fumes as she approaches you and the other girls. "Let\'s just get this over with. A car is waiting for us outside."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do the show', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier2', 0, 'agil', 'danc');
    (st as any).profiDanceTime = ((st as any).profiDanceTime ?? 0) + (1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 3));
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/meeting/meeting3.jpg');
    scene.text('You arrive at the park and gather behind the stage as Albina\'s father gives an awkward speech to what is left of his supporters. He clears his throat and calls you up onto the stage as music starts playing. You reluctantly walk out onto the stage with the other girls, the crowd reacting to your skimpy clothing. Some men whistle and holler and others avert their gaze while the women watch in disgust and whisper among themselves.');
    scene.text('You and the girls start your routine, but the crowd\'s reactions at your outfits makes you all feel very uncomfortable and you see Albina glaring at someone in the crowd a few times. You finally finish the awkward performance and Albina motions for you all to return to the car as her father makes desperate pleas to the diminishing crowd.');
    scene.text('You return to the community center locker room, where Albina literally rips her leotard off and storms off naked into the showers. You remove your own outfit and go for a shower yourself. ');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStarletsreact(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: As you approach the group, Albina motions you aside. "What the fuck <<$pcs_nickn...
  scene.text(`As you approach the group, Albina motions you aside. "What the fuck ${((s as any).pcs_nickname || '')}!? Who knocked you up?" Her eyes then grow wide. "It wasn't one of <i>them</i> was it? Regardless, you can't dance if you're pregnant! I'm sorry, but I'm going to have to cut you loose." she says while placing a hand on your shoulder.`);
  scene.text('You nod in understanding and say your goodbyes before Albina walks back to the group, directing them to start from the beginning.');
  (s as any).starlets_practice = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: npc_pregtalk['A23'] = 1
    qspCall(st, 'calendar', 'pack', 'remove', 'starlets');
  }, goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enterStarletsEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You enter the locker room and immediately see the disapproving looks on the girl...
  scene.text(`You enter the locker room and immediately see the disapproving looks on the girls faces. Albina walks over to you and, looking severely disappointed, shakes her head. "Why ${((s as any).pcs_nickname || '')}? You used to be cool, but now you've gone and done this to yourself. I'm sorry, but I just can't have someone like you being associated with us anymore."`);
  scene.text('She motions to the door and you walk out in shame as tears well up in your eyes.');
  (s as any).starlets_practice = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: AlbinaQW['StarletsJoined'] = -1
    qspCall(st, 'calendar', 'pack', 'remove', 'starlets');
  }, goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enterStarletsPracticeMissed(s: GameState, scene: SceneBuilder): void {
  (s as any).starlets_practice = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  if (((s as any).starlet_practice_skipped ?? 0) === 1) {
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-10));
    // TODO-QSP: dynamic text: You walk in and see an annoyed Albina waiting for you, her arms crossed as she g...
    scene.text(`You walk in and see an annoyed Albina waiting for you, her arms crossed as she glares at you. "Where the fuck were you ${((s as any).pcs_nickname || '')}?! And don't fucking lie to me!"`);
    scene.text('"Sorry, Albina. I… had a family thing I had to deal with and I didn\'t have time to tell you." you meekly reply.');
    scene.text('She doesn\'t look completely convinced. "Right… Well if you care about your place on the troupe, then you\'ll be at the next training session on time. No excuses."');
    scene.text('You nod at her and she gives you a pat on the head before walking away. It looks like you got off lightly this time.');
    scene.actions([
      { label: 'Train with Starlets', goto: ['albina_starlets', 'starlets'] },
    ]);
  } else {
    if (((s as any).starlet_practice_skipped ?? 0) === 2) {
      qspCall(s, 'npc_relationship', 'modify', 'A23', (-20));
      // TODO-QSP: dynamic text: You walk into the hall and gulp when you see Albina heading your way. "Skipping ...
      scene.text(`You walk into the hall and gulp when you see Albina heading your way. "Skipping training <i>again</i>, ${((s as any).pcs_nickname || '')}?! I thought I told you that you were to be here on time <b>no excuses</b>?! I don't care about what miserable story you have to defend yourself with. You either commit to the team or you're out. This is your final warning ${((s as any).pcs_nickname || '')}, don't fucking test me!"`);
      scene.text('You don\'t have a chance to speak before she walks off. Maybe it\'s best for both of you if you stopped pissing her off?');
      scene.actions([
        { label: 'Train with Starlets', goto: ['albina_starlets', 'starlets'] },
      ]);
    } else {
      qspCall(s, 'npc_relationship', 'set', 'A23', 10);
      scene.text('You walk into the hall and freeze when you clock a furious Albina heading straight for you. You barely have time to react before she grabs your shirt and pulls you up close, silencing the hall as everyone looks at you.');
      scene.text('Albina glares directly into your eyes. "ARE YOU DOING THIS TO MOCK ME YOU FUCKING BITCH?! I GAVE YOU ONE. LAST. FUCKING. CHANCE AND YOU THROW IT BACK IN MY FUCKING FACE?!" She releases you, but still gets up in your face. "You\'re done. Get the fuck out of here and don\'t let me catch you here again, you hear me?!"');
      scene.text('She then crosses her arms and glares at you until you leave. With the other girls staring at you, you shamefully walk out of the hall.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: AlbinaQW['StarletsJoined'] = -1
    qspCall(st, 'calendar', 'pack', 'remove', 'starlets');
  }, goto: ['pav_commcenter', ''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterQuit(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  // TODO-QSP: dynamic text: You enter the hall and look around for Albina, spotting her as she''s doing some...
  scene.text(`You enter the hall and look around for Albina, spotting her as she's doing some stretching exercises. You walk over to her and she gives you a puzzled stare. "Hurry up and get dressed ${((s as any).pcs_nickname || '')}, we haven't got all day to wait for you!" she barks. You meekly smile at her in response. "Well? Hurry up and spit it out!" she says while motioning for you to hurry up.`);
  scene.text('"I… I don\'t want to be a part of this anymore. I\'ve thought it over and this just isn\'t for me."');
  // TODO-QSP: dynamic text: Albina looks disheartened, but still gives you a weak smile. "I understand… If y...
  scene.text(`Albina looks disheartened, but still gives you a weak smile. "I understand… If you want to leave, then I won't stop you. Just know that I thought you had some real potential here, ${((s as any).pcs_nickname || '')}. And thanks for telling me and not just disappearing on me," she adds. You breathe a sigh of relief as she gathers the girls up for the session, letting you go on your way.`);
  (s as any).starlets_practice = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: AlbinaQW['StarletsJoined'] = -2
    qspCall(st, 'calendar', 'pack', 'remove', 'starlets');
  }, goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'albina1':
      enterAlbina1(s, scene);
      break;
    case 'albina2':
      enterAlbina2(s, scene);
      break;
    case 'albina3':
      enterAlbina3(s, scene);
      break;
    case 'albina4':
      enterAlbina4(s, scene);
      break;
    case 'albina5':
      enterAlbina5(s, scene);
      break;
    case 'starlets':
      enterStarlets(s, scene);
      break;
    case 'after_show':
      enterAfterShow(s, scene);
      break;
    case 'parkrally':
      enterParkrally(s, scene);
      break;
    case 'Starletsreact':
      enterStarletsreact(s, scene);
      break;
    case 'StarletsEnd':
      enterStarletsEnd(s, scene);
      break;
    case 'StarletsPracticeMissed':
      enterStarletsPracticeMissed(s, scene);
      break;
    case 'Quit':
      enterQuit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_starlets: LocationDef = {
  name: 'albina_starlets',
  title: 'At the end of the class, a few girls enter the dance studio,',
  region: 'other',
  enter: enter,
};
