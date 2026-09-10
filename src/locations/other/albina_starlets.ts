import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAlbina1(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 23;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('At the end of the class, a few girls enter the dance studio, including Albina Barlovskaya. You know nothing about her outside of her reputation as a stuck up rich bitch.');
  scene.actions([
    { label: 'Greet Albina', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('You approach and greet Albina, who turns and raises an eyebrow in scornful confusion.');
    // TODO-QSP: dynamic text: "Who the fuck are you? Oh, right. <<$pcs_firstname>>. So you've taken up dancing...
    scene.text(`"Who the fuck are you? Oh, right. ${((s as any).pcs_firstname ?? 0)}. So you've taken up dancing, have you?" You nod, confirming the obvious, but she just laughs dismissively. "Well, how's that going for you?"`);
    scene.text('"Not bad," you answer coldly. "Not bad at all."');
    scene.text('She just laughs at you mockingly. "Not bad? Well maybe in comparison to those bowlegged cows of amateurs you train with, but I doubt that you can dance on a <i>professional</i> level like <i>us</i>."');
    scene.actions([
      { label: 'I don\'t care', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('"I don\'t care what you think!" you reply as scornfully as possible and turn away from her.');
    scene.text('"That\'s right! Fuck off back to the amateurs where you belong!" she says in a belittling tone before turning to the other girls. "Alright girls, let\'s get to work."');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
      { label: 'I know how to dance', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('Albina\'s arrogance is getting on your nerves. "I can dance just as good as you or any of your group!"');
    scene.text('She looks at you in disbelief, seemingly offended by your remark. "You think you can dance better than <i>me</i>? <i>YOU</i>? You can just sit your amateur ass down and watch how a professional does it. Then we\'ll see if you still think you can dance!" she says scornfully before forcing you to sit on the bench.');
    scene.text('Turning to the other girls, she motions for one of them to turn the music on.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('The music starts playing and you instantly realize your mistake in trying to compare yourself to Albina. She flawlessly performs a number of dance moves you could never even hope to do, all with a smug smile on her face directed at you.');
    scene.text('She finishes her performance as the music ends and you sheepishly avoid eye contact with her as she walks up to you, breathless.');
    scene.text('"Not so loud-mouthed now are you?" she gleefully remarks with a laugh. "Now why don\'t you fuck off and take your humble ass back to the amateur corner where you belong?"');
    if (((s as any).grupTipe ?? 0) === 4) {
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
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('At the end of the class, a few girls enter the dance studio, including Albina Barlovskaya. You know Albina from school and you have a pretty good relationship with each other.');
  scene.actions([
    { label: 'Greet Albina', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('You approach and greet Albina, who turns to you and smiles.');
    // TODO-QSP: dynamic text: "Oh hello <<$pcs_nickname>>. I didn't know you started dancing. Are you any good...
    scene.text(`"Oh hello ${((s as any).pcs_nickname ?? 0)}. I didn't know you started dancing. Are you any good?" she asks with interest.`);
    scene.text('"I\'m pretty good, I think," you reply with a smile. "Even if I do say so myself."');
    scene.text('"Pretty good, huh?" she responds in a condescending tone. "Well, I\'ve seen some of the dancers that take lessons here. It wouldn\'t take much to be better than those bow-legged cows. I doubt you\'re up to any kind of <i>professional</i> standard, though."');
    scene.actions([
      { label: 'I don\'t care', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('Offended by her tone, you reply as scornfully as possible. "I couldn\'t care less what you think!"');
    scene.text('"That\'s right! Fuck off back to the amateurs where you belong!" she says in a belittling tone before turning to the other girls. "Alright girls, let\'s get to work."');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
      { label: 'I know how to dance', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('Her arrogance annoys you. "I can dance just as well as you or any of these girls!" you scornfully reply.');
    scene.text('She looks at you in disbelief, seemingly offended by your remark. "You think you can dance better than <i>me</i>? <i>YOU</i>?! You can just sit your amateur ass down and watch how a professional does it. Then we\'ll see if you still think you can dance!" she says scornfully before forcing you to sit on the bench.');
    scene.text('Turning to the other girls, she motions for one of them to turn the music on.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
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
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('At the end of the class, a few girls enter the dance studio, including Albina Barlovskaya. You\'ve known Albina for years and have formed a close friendship over your shared passion for dancing.');
  scene.actions([
    { label: 'Greet Albina', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('You approach and greet Albina, who turns to you and smiles, but stops short of hugging you.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!! Please tell me you don't practice with those bow-legged cow...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}!! Please tell me you don't practice with those bow-legged cows who call themselves dancers?" she asks with a smirk.`);
    scene.text('"I\'m pretty good, but I don\'t know if I\'m quite on your level just yet," you reply.');
    scene.text('"Hey, don\'t sell yourself short!" she responds with a smile. "Have you seen the people that take lessons here? <i>Please</i>. No amount of training will help them reach your skill level. You\'ve got talent, which brings me to my next question…"');
    scene.actions([
      { label: 'Ask what she means', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
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
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: The music starts playing as Albina sits next to you and motions for you to get u...
  scene.text(`The music starts playing as Albina sits next to you and motions for you to get up and start dancing. "Hurry up, ${((s as any).pcs_nickname ?? 0)}! I have better things to do than watch you flounder around like a beached whale, so let's get this over with already!"`);
  if (((s as any).pregtime ?? 0) >= 90) {
    scene.text('You might try out for them after you\'ve had your child.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Prove yourself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'stat', '');
    scene.text('You get up and start dancing to the music, trying as hard as you can to impress them. When the music stops, Albina stands and walks up to you.');
    scene.text('"You dance like a country bumpkin, but you do have some potential…" she muses as you stand panting before her.');
    scene.actions([
      { label: 'Can I join?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      scene.text('"Well? Am I good enough to join?" you ask.');
      scene.text('She just laughs at you dismissively. "While I <i>could</i> train you properly so you\'re not a floundering embarrassment, appearance is everything to the Starlets, so try improving your looks first and then get back to us."');
      scene.text('She turns and leaves with the rest of the troupe, her comments leaving you feeling slightly insulted.');
    } else {
      (s as any).AlbinaQW['starlets_virgin'] = 1;
      scene.text('"Well? Am I good enough to join?" you ask.');
      scene.text('She thinks about it and looks at the other girls; some nod, others shrug.');
      scene.text('Finally, she answers. "Okay, we\'ll take a shot. Maybe you\'ll learn something by training with <i>actual</i> dancers. We practice every day except Tuesday and Thursday, so don\'t be late."');
      scene.text('When the other girls leave, she pulls you aside. "Hey, are you \'pure\'?" she whispers.');
      scene.text('"Why would you want to know such a personal thing?" you reply as you blush, giving her the answer to her question.');
      scene.text('"Oh, it\'s… nothing. I just… look out for my girls is all," she says with hesitation.');
      (s as any).temp_showtext = 0;
      (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_starlets" });
      if (((s as any).temp_index ?? 0) < 0) {
        qspCall(s, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
        (s as any).temp_showtext = 1;
      } else {
        (s as any).contactAnon[temp_index] = 0;
        (s as any).temp_showtext = 1;
      }
      if (((s as any).temp_showtext ?? 0)) {
        scene.text('She then pulls out her phone. "Here\'s my number so I can keep in contact with you."');
        scene.text('You add each other\'s numbers to your phones before you say goodbye and she walks away.');
      }
      (s as any).AlbinaQW['StarletsJoined'] = 1;
      qspCall(s, 'calendar', 'pack', 'add', 'starlets');
      scene.text('"Well, am I good enough to join?" you ask.');
      scene.text('She thinks about it and looks at the other girls; some nod, others shrug in indifference.');
      scene.text('Finally, she answers. "Okay, we\'ll take a shot. Maybe you\'ll learn something by training with <i>actual</i> dancers. We practice every day except Tuesday and Thursday, so don\'t be late."');
      (s as any).temp_showtext = 0;
      (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_starlets" });
      if (((s as any).temp_index ?? 0) < 0) {
        qspCall(s, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
        (s as any).temp_showtext = 1;
      } else {
        (s as any).contactAnon[temp_index] = 0;
        (s as any).temp_showtext = 1;
      }
      if (((s as any).temp_showtext ?? 0)) {
        scene.text('She then pulls out her phone. "Here\'s my number so I can keep in contact with you."');
        scene.text('You add each other\'s numbers to your phones before you say goodbye and she walks away.');
      }
      (s as any).AlbinaQW['StarletsJoined'] = 1;
      qspCall(s, 'calendar', 'pack', 'add', 'starlets');
    }
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterAlbina5(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 23;
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
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Your turn now <<$pcs_nickname>>. Show me that you're as passionate as I am and ...
    scene.text(`"Your turn now ${((s as any).pcs_nickname ?? 0)}. Show me that you're as passionate as I am and we might come to an agreement…" she says as she sits down to catch her breath.`);
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'stat', '');
    scene.text('You start dancing to the music and put very little effort into your moves before the other girls are pointing and talking to each other, intrigued by your skill. When the music stops, Albina walks up to you.');
    scene.text('You stand panting before her as she gleefully claps. "I knew you could do it!"');
    scene.text('"Do… what?" you reply.');
    // TODO-QSP: dynamic text: "I had no doubts about you <<$pcs_nickname>>, but the others wanted to see you i...
    scene.text(`"I had no doubts about you ${((s as any).pcs_nickname ?? 0)}, but the others wanted to see you in action first. They didn't believe me when I said you were <i>almost</i> as good as me."`);
    scene.actions([
      { label: 'I\'m a Starlet?!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AlbinaQW['StarletsJoined'] = 1;
    qspCall(s, 'calendar', 'pack', 'add', 'starlets');
    qspCall(s, 'stat', '');
    scene.text('"You… mean… I\'m a… Starlet?" you ask as you continue panting.');
    scene.text('"Well of course you are! I can\'t let someone as good as you go to waste on these bow-legged amateurs! We practice every day except for Tuesday and Thursday, so don\'t be late!" she replies.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).stat ?? 0)?.['vaginal'] === 0) {
      (s as any).AlbinaQW['starlets_virgin'] = 1;
      scene.text('When the other girls leave, she pulls you aside. "Hey, are you \'pure\'?" she whispers.');
      scene.text('"Why would you want to know such a personal thing?" you reply as you blush, giving her the answer to her question.');
      scene.text('"Oh, it\'s… nothing. I just… look out for my girls is all…" she says with hesitation.');
    }
    scene.text('She then pulls out her phone. "Here\'s my number so I can keep in contact with you."');
    (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_starlets" });
    if (((s as any).arrpos ?? 0)('contact', 'A23') < 0) {
      qspCall(s, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
    } else {
      (s as any).contactAnon[temp_index] = 0;
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
  scene.build();
}

function enterStarlets(s: GameState, scene: SceneBuilder): void {
  (s as any).AlbinaQW['startletsday'] = ((s as any).daystart ?? 0);
  (s as any).starlets_practice = 0;
  qspCall(s, 'gdksport', 'jocks_acceptance');
  qspCall(s, 'exercise', 'tier2', 120, 'agil', 'dancero');
  qspCall(s, 'exp_gain', 'dancero', 2);
  qspCall(s, 'fame', 'pav', 'dance', 'medium');
  qspCall(s, 'mood', 'lower', 'tiny');
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
  if (((s as any).perform_lvl ?? 0) < 35) {
    qspCall(s, 'exp_gain', 'perform', 1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/dance_studio/fit1.jpg');
  if (((s as any).pcs_dancero ?? 0) < 15) {
    // TODO-QSP: dynamic text: Your dancing is terrible and Albina constantly yells at you. "Did I make a mista...
    scene.text(`Your dancing is terrible and Albina constantly yells at you. "Did I make a mistake letting you join, ${((s as any).pcs_nickname ?? 0)}?"`);
  } else {
    scene.text('You sometimes manage to get it right, but you\'re largely out of sync with the others or make the wrong move. Albina constantly yells at you and calls you "a bowlegged cow."');
    if (((s as any).pcs_dancero ?? 0) < 45) {
      // TODO-QSP: dynamic text: You manage to get into the general rhythm and move well with the other girls, bu...
      scene.text(`You manage to get into the general rhythm and move well with the other girls, but Albina still isn't happy. "You're too sluggish, ${((s as any).pcs_nickname ?? 0)}! Put more life into it!"`);
    } else {
      // TODO-QSP: dynamic text: You perform the routine with no mistakes, but Albina still nags at you. "You're ...
      scene.text(`You perform the routine with no mistakes, but Albina still nags at you. "You're not at a funeral, ${((s as any).pcs_nickname ?? 0)}! Raise your head and smile!"`);
      scene.text('You dance beautifully and Albina uses you as an example for the other girls.');
    }
    (s as any).AlbinaQW['ShowTriggerCount'] = ((s as any).AlbinaQW['ShowTriggerCount'] ?? 0) + (1);
    if (((s as any).AlbinaQW ?? 0)?.['ShowTriggerCount'] >= 6) {
      if (((((s as any).month ?? 0) === 10  &&  ((s as any).day ?? 0) > 20)  ||  (((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) < 16))  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).AlbinaQW ?? 0)?.['ParkRally'] === 2) {
        scene.actions([{ label: 'Continue', goto: ['albina_starlets', 'parkrally'] }]);
      }
      (s as any).AlbinaQW['ShowTriggerCount'] = 0;
      (s as any).albpayrand = Math.floor(Math.random() * 5) + 1;
      scene.text('After you finish training, Albina gathers you and the girls round.');
      // TODO-QSP: dynamic text: "We have a small show planned. It will last for a few hours and each of you will...
      scene.text(`"We have a small show planned. It will last for a few hours and each of you will receive ${qspFunc(s, 'money', 'string_profit', ((s as any).albpayrand ?? 0)*1000, 1)}."`);
      scene.actions([
        { label: 'Do the show', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/stage.jpg');
    scene.text('Albina calls for a car. Once it arrives, you all bundle in and are driven to the performance hall, where you\'re ushered into a small dressing room.');
    scene.text('You all change into your outfits before grouping up at the edge of the stage.');
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier2', 120, 'agil', 'danc');
    // TODO-QSP: gs 'money', 'earn', albpayrand * 1000
    (s as any).profiDanceTime = ((s as any).profiDanceTime ?? 0) + (1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 3);
    if (((s as any).perform_lvl ?? 0) < 35) {
      qspCall(s, 'exp_gain', 'perform', Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/dance.jpg');
    scene.text('The MC announces the Starlets and you all dance your way out onto the stage, beginning the show with cheers from the crowd. During the performance, you can\'t help but notice a number of older men in the audience leering at you as you dance.');
    scene.actions([
      { label: 'Finish the show', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/backstage.jpg');
    scene.text('The performance goes smoothly and you and the other Starlets leave the stage, where Albina distributes the money while everyone takes turns using the single shower in the dressing room.');
    scene.actions([
      { label: 'Shower', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).AlbinaQW ?? 0)?.['starlets_virgin'] === 0) {
      if (((s as any).pcs_hotcat ?? 0) < 8) {
        (s as any).AlbinaQW['StarletCustomer'] = Math.floor(Math.random() * 16) + 1;
      } else {
        (s as any).AlbinaQW['StarletCustomer'] = Math.floor(Math.random() * 13) + 1;
        (s as any).AlbinaQW['StarletCustomer'] = Math.floor(Math.random() * 11) + 1;
      }
      if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 1) {
        (s as any).AlbinaQW['StarletsCustomerCount'] = 1;
        (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 3;
        scene.text('You see a greasy and balding middle aged Armenian man wearing an expensive suit approach Albina and start talking to her. She avoids eye contact and looks rather uncomfortable talking to him.');
      } else {
        (s as any).AlbinaQW['StarletsCustomerCount'] = 2;
        (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 6;
        scene.text('You see two well dressed middle aged Armenian men approach Albina and start to talking to her.');
        if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 3) {
          (s as any).AlbinaQW['StarletsCustomerCount'] = 2;
          (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 6;
          scene.text('You see two young men awkwardly approach Albina and start talking to her.');
        } else {
          (s as any).AlbinaQW['StarletsCustomerCount'] = 1;
          (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 3;
          scene.text('You see a bald old man approach Albina and start talking to her.');
          if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 5) {
            (s as any).AlbinaQW['StarletsCustomerCount'] = 2;
            (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 6;
            scene.text('You see two old men approach Albina and start talking to her.');
          } else {
            (s as any).AlbinaQW['StarletsCustomerCount'] = 1;
            (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 3;
            scene.text('You see a well groomed man in a modest suit approach Albina and start talking to her.');
            if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 7) {
              (s as any).AlbinaQW['StarletCustomerCount'] = 12;
              scene.text('You see an older man with greying hair wearing an expensive shirt with the sleeves rolled up to his elbows talking to Albina.');
              (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 6;
            } else {
              (s as any).AlbinaQW['StarletCustomerCount'] = 1;
              (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 3;
              scene.text('You see an older blonde haired woman wearing a skirt and blouse talking to Albina.');
              if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 9) {
                (s as any).AlbinaQW['StarletCustomerCount'] = 1;
                (s as any).AlbinaQW['StarletPay'] = Math.floor(Math.random() * 4) + 3;
                scene.text('You see a somewhat muscular bald man talking to Albina.');
              }
              if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] <= 9) {
                // TODO-QSP: dynamic text: Albina walks up to you. "<<$pcs_nickname>>, we… We need to… to talk…" she quietl...
                scene.text(`Albina walks up to you. "${((s as any).pcs_nickname ?? 0)}, we… We need to… to talk…" she quietly stammers.`);
                scene.actions([
                  { label: 'About what?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You can see a little bit of fear in Albina\'s eyes as you ask her what\'s wrong.');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsCustomerCount'] === 1) {
      // TODO-QSP: dynamic text: Albina avoids eye contact. "Nothing, it's just… If you go with this person and b...
      scene.text(`Albina avoids eye contact. "Nothing, it's just… If you go with this person and be… 'affectionate'," she says hesitantly, "you'll get ${qspFunc(s, 'money', 'string_profit', ((s as any).AlbinaQW ?? 0)?.['StarletPay']*1000, 1)}."`);
      // TODO-QSP: dynamic text: She looks you in the eye, the fear within her apparently growing. "Please <<$pcs...
      scene.text(`She looks you in the eye, the fear within her apparently growing. "Please ${((s as any).pcs_nickname ?? 0)}, I need you to do this for me. Just… please."`);
    } else {
      // TODO-QSP: dynamic text: Albina avoids eye contact. "Nothing, it's just… See those guys?" she asks hesita...
      scene.text(`Albina avoids eye contact. "Nothing, it's just… See those guys?" she asks hesitantly. "If you go with them and be…'affectionate', you'll get ${qspFunc(s, 'money', 'string_profit', ((s as any).AlbinaQW ?? 0)?.['StarletPay']*1000, 1)}."`);
      // TODO-QSP: dynamic text: She looks you in the eye, the fear within her apparently growing. "Please <<$pcs...
      scene.text(`She looks you in the eye, the fear within her apparently growing. "Please ${((s as any).pcs_nickname ?? 0)}, I need you to do this for me. Just… please."`);
    }
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'prostitution', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
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
    (s as any).AlbinaQW['StarletsWhore'] = ((s as any).AlbinaQW['StarletsWhore'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You agree to be \'nice\' and Albina reluctantly hands over the money.');
    scene.text('As you\'re led away, Albina looks like she\'s about to say something, but instead just looks at the floor, disheartened as you hear her muttering to herself.');
    if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 1) {
      scene.actions([
        { label: 'Go with the Armenian', goto: ['albina_starlets_sex', 'whore1'] },
      ]);
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 3) {
        scene.actions([
          { label: 'Go with the young men', goto: ['albina_starlets_sex', 'whore3'] },
        ]);
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 5) {
          scene.actions([
            { label: 'Go with the old men', goto: ['albina_starlets_sex', 'whore5'] },
          ]);
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 7) {
            scene.actions([
              { label: 'Go with the middle aged man', goto: ['albina_starlets_sex', 'whore7'] },
            ]);
          } else {
            if (((s as any).AlbinaQW ?? 0)?.['StarletCustomer'] === 9) {
              scene.actions([
                { label: 'Go with the bald man', goto: ['albina_starlets_sex', 'whore9'] },
              ]);
            }
            scene.actions([
              { label: 'Go with the woman', goto: ['albina_starlets_sex', 'whore8'] },
            ]);
          }
          scene.actions([
            { label: 'Go with the man', goto: ['albina_starlets_sex', 'whore6'] },
          ]);
        }
        scene.actions([{ label: 'Continue', goto: ['albina_starlets', 'after_show'] }]);
        scene.actions([
          { label: 'Go with the old man', goto: ['albina_starlets_sex', 'whore4'] },
        ]);
      }
      scene.actions([{ label: 'Continue', goto: ['albina_starlets', 'after_show'] }]);
      scene.actions([
        { label: 'Go with the Armenians', goto: ['albina_starlets_sex', 'whore2'] },
      ]);
    }
  } },
    ]);
  } },
                ]);
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
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  }
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
    default:
      enterAlbina1(s, scene);
      break;
  }
}

export const albina_starlets: LocationDef = {
  name: 'albina_starlets',
  title: 'At the end of the class, a few girls enter the dance studio,',
  region: 'other',
  description: ['At the end of the class, a few girls enter the dance studio, including Albina Barlovskaya. You know nothing about her outside of her reputation as a stuck up rich bitch.'],
  enter: enter,
};
