import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSexMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Blow him', goto: ['brother_shower_sex', 'brother_shower_bj'] },
    { label: 'Fuck him', goto: ['brother_shower_sex', 'brother_shower_fuck'] },
    { label: 'Offer him your ass', goto: ['brother_shower_sex', 'brother_shower_anal'] },
  ]);
  scene.build();
}

function enterMutualMasturbation(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/shower/fun2.mp4');
  // TODO-QSP: end
  scene.build();
}

function enterBrotherShowerBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A34');
  qspCall(s, 'npc_relationship', 'modify', 'A34', 3);
  ((s as any).brotherQW ?? {})['bj'] = (((s as any).brotherQW ?? {})['bj'] ?? 0) + (1);
  ((s as any).brotherQW ?? {})['shower_fuck_day'] = ((s as any).daystart ?? 0);
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
    ((s as any).brotherQW ?? {})['Sex'] = 6;
  }
  scene.img('images/shared/home/bathroom/showerbj.mp4');
  scene.text('Kneeling down, you take Kolka\'s freshly washed cock and push it between your lips, sucking gently. Several minutes go by while you to continue blowing your brother, going slowly up and down his length, the sound of water raining down from the showerhead muting the soft slurping sounds coming from your mouth.');
  qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 3) + 3, 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 5) + 1, 'incest');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'cum_call', 'mouth', 'A34', 1);
      (s as any).brotherbjcomment = Math.floor(Math.random() * 2) + 1;
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['brother_shower_sex', 'shower_swallow'] }]);
    } else {
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," he says through grunts. "I'm gonna cum soon. Can I cum ...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}," he says through grunts. "I'm gonna cum soon. Can I cum on your face?"`);
      scene.actions([
        { label: 'Ignore him and keep sucking', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(s, 'stat', '');
    scene.text('Despite his pleas to let him blow his load on your face, you keep sucking until you taste hot liquid spilling into your mouth.');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    scene.text('You swallow his load with a gulp, showing your clean tongue and smiling after you do.');
    scene.text('"Thanks for the warning Kolka. I really appreciate it," you say, standing up.');
    scene.text('"But I wanted to cum on your face…" he says, disappointment seeping from his voice.');
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: 'I didn\'t want to waste it', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"I didn\'t want to waste it. It\'s one of my favorite treats!" you say, licking your lips.');
    scene.text('Your brother stares at you for a moment, giving you a look.');
    scene.text('"Slut." he says.');
    scene.text('"Cum dispenser." you smile back.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      ]);
    }
    scene.actions([
      { label: 'I was having too much fun', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"Sorry Kolka, I just couldn\'t help myself! Blowing you was too much fun and I didn\'t want to stop." You keep licking and sucking on his tip as if to make your point. "I hope you\'ll forgive me."');
    scene.text('"Okay, fine… " He\'s still clearly disappointed but he nods anyways. "But next time I want to cum on your face!"');
    scene.text('"Maybe," you say with is what is probably a very frustrating wink.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'But I just washed my face', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"But I just washed my face, Kolka. I don\'t want to get cum on it after that."');
    scene.text('"But we\'re in the shower!" he protests. "What does it matter if I cum on your face? You can just rinse it off two seconds later!"');
    scene.actions([
      { label: 'Cum is hard to clean', handler: (st: GameState) => {
    scene.text('"Cum is hard to clean off! Even in the shower! It\'s all sticky and gets everywhere. Even if you wipe it off your face, it gets on your hands, and then you have to be careful to get it all off before you run it through your hair."');
    scene.text('Kolka opens his mouth to say something but nothing comes out. Guess he thought better of it.');
    scene.text('"Hrmph! Always asking to cum on a girl\'s face, never thinking about what a mess it makes or the trouble it causes for her! Boys!"');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Cum is still dirty', handler: (st: GameState) => {
    scene.text('"So what? It\'s still dirty. It\'s a sticky fluid that came out of your dick! That makes it dirty and would mean I\'d have to use soap, which I don\'t feel like doing twice. You should be grateful that I even swallowed!"');
    scene.text('"It\'s not dirty! Besides, I hear that cum is good for a girl\'s skin. You should be <i>asking</i> me to cum on your face!"');
    scene.text('"Pfft~!" You roll your eyes. "And where did you hear that? From some porno you were watching with your friends?"');
    scene.text('"No!" he says quickly. You turn off the water and pull back the curtain, rolling your eyes again. "… maybe…" you hear him mutter again under his breath behind you.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Spit', handler: (st: GameState) => {
    scene.text('Opening your mouth, you drool and let his cum drip down off your tongue before wadding up what\'s left and spitting it onto the bottom of the bathtub.');
    scene.text('"Thanks for the warning Kolka. I really appreciate it," you say, smiling as you standing up.');
    scene.text('"But I wanted to cum on your face…" he says, disappointment seeping from his voice.');
    scene.actions([
      { label: 'I was having too much fun', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"Sorry Kolka, I just couldn\'t help myself! Blowing you was too much fun and I didn\'t want to stop." You keep licking and sucking on his tip as if to make your point. "I hope you\'ll forgive me."');
    scene.text('"You could have at least swallowed if you weren\'t going to let me give you a facial," he grumbles as you stand up.');
    scene.text('"Maybe next time," you say with is what is probably a very frustrating wink.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'But I just washed my face', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"But I just washed my face, Kolka. I don\'t want to get cum on it after that."');
    scene.text('"But we\'re in the shower!" he protests. "What does it matter if I cum on your face? You can just rinse it off two seconds later!"');
    scene.actions([
      { label: 'Cum is hard to clean', handler: (st: GameState) => {
    scene.text('"Cum is hard to clean off! Even in the shower! It\'s all sticky and gets everywhere. Even if you wipe it off your face, it gets on your hands, and then you have to be careful to get it all off before you run it through your hair."');
    scene.text('Kolka opens his mouth but nothing comes out. Guess he thought better of whatever he was about to say.');
    scene.text('"Hrmph! Always asking to cum on a girl\'s face, never thinking about what a mess it makes or the trouble it causes for her! Boys!"');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'It\'s still dirty', handler: (st: GameState) => {
    scene.text('"So what? It\'s still dirty. It\'s a sticky fluid that comes out of your dick! That makes it dirty and would mean I\'d have to use soap, which I don\'t feel like doing twice."');
    scene.text('"It\'s not dirty! Besides, I hear that cum is good for a girl\'s skin. You should be <i>asking</i> me to cum on your face!"');
    scene.text('"Pfft~!" You roll your eyes. "And where did you hear that? From some porno you were watching with your friends?"');
    scene.text('"No!" he says quickly. You turn off the water and pull back the curtain, rolling your eyes again. "… maybe…" you hear him mutter again under his breath.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Let him cum on your face', goto: ['brother_shower_sex', 'shower_facial'] },
      ]);
    }
  } },
    { label: 'Let him fuck you', goto: ['brother_shower_sex', 'brother_shower_fuck'] },
  ]);
  scene.build();
}

function enterBrotherShowerFuckFirst(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A34', 20);
  qspCall(s, 'boystat', 'A34');
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 7) {
    ((s as any).brotherQW ?? {})['Sex'] = 7;
  }
  scene.img('images/shared/sex/shower/doggy_enter2.mp4');
  scene.text('You lean back into your brother, gripping his member and jerking it a few times to make sure he\'s still hard enough for what you want to do next. You pull on him, carefully guiding his cock until you can feel the tip pressing against the entrance of pussy.');
  if (((s as any).brotherQW ?? 0)?.['know_not_virgin'] === 1) {
    ((s as any).brotherQW ?? {})['fuck'] = (((s as any).brotherQW ?? {})['fuck'] ?? 0) + (1);
    // TODO-QSP: dynamic text: "I was wondering if you were going to let me join the "Boys Who Fuck <<$pcs_nick...
    scene.text(`"I was wondering if you were going to let me join the "Boys Who Fuck ${((s as any).pcs_nickname ?? 0)}" Club," he says, grin radiating from behind you.`);
    scene.actions([
      { label: 'It\'s pretty exclusive', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['club'] = 1;
    scene.text('"Be grateful little brother. It\'s a pretty exclusive club that not a lot of people get access to. What\'re you trying to say about your dear sister? I might take offense to something like that," you say, putting on a pouty face.');
    scene.text('His eyes go wide and immediately begins sputtering, his bravado evaporating instantaneously at the possibility that he might not get laid.');
    scene.text('"I didn\'t-! I just meant-! Sorry… I just… I mean… I\'ve never been with a girl before… And you\'re just so hot, and… I can\'t believe you\'d let me… You know… With you…" You laugh internally at his clumsy explanation but keep up your false face of disapproval. His eyes go even wider and he says, "Please! Don\'t-! Don\'t be mad… please…" You smile breaks through, deciding to stop messing around and let him off the hook. His embarrassment is kind of endearing. Your brother can be such a sweet boy sometimes.');
    scene.text('"It\'s okay Kolka. I\'m not mad. Let\'s get you into the club. Why don\'t I show you the <b>member only</b> entrance?"');
    scene.text('"Don\'t you mean member<b>s</b> only entrance sis?" he asks, confused.');
    scene.text('"That\'s not what I said," you whisper, pushing your hips back and swallowing him straight to the hilt.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first3'] },
    ]);
  } },
      { label: 'This doesn\'t make you special', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['club'] = 1;
    scene.text('"Sorry to say kiddo, but this doesn\'t make you special," you smile wryly at him over your shoulder.');
    scene.text('"What do you mean?" he asks, grin disappearing.');
    scene.text('"There\'s been a lot of members in that club." You position his tip at your entrance, lining him up for what you\'re about to do next.');
    scene.text('"A <b>lot.</b> Of <b>members.</b>" On your emphasized words, you thrust your hips backward to take his entire cock inside you in one go, causing your brother to gasp and grab you by the hips to steady himself.');
    scene.text('"Inside. <i>My. <b>\'Club.\'</i></b>" you whisper into his ear.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first3'] },
    ]);
  } },
    ]);
  } else {
    ((s as any).brotherQW ?? {})['fuck'] = (((s as any).brotherQW ?? {})['fuck'] ?? 0) + (1);
    scene.text('You feel Kolka tense up behind you and he hesitates.');
    scene.text('"Is this…? Are you…?"');
    scene.text('"My first time? A virgin?"');
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.actions([
        { label: 'Yes, I\'m a virgin', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 20);
    ((s as any).brotherQW ?? {})['virgin_lie'] = 0;
    ((s as any).brotherQW ?? {})['virgin_truth'] = 1;
    scene.text('"Yeah. I am." You smile at him. "I\'m giving my first time to you little brother."');
    scene.text('Still smiling, you push your ass towards him and impale yourself on his cock.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first2'] },
    ]);
  } },
        { label: 'No, I\'m not (lie)', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['virgin_lie'] = 1;
    ((s as any).brotherQW ?? {})['virgin_truth'] = 0;
    scene.text('"Nope!" You smile at him. "Sorry to disappoint, but I lost my virginity a while back little brother."');
    scene.text('You\'re not really sure why you\'re lying to him about this, but there\'s no time to think about that as you push your ass towards him and impale yourself on his cock.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first2'] },
    ]);
  } },
        { label: 'No, I\'m a slut (lie)', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['virgin_lie'] = 2;
    ((s as any).brotherQW ?? {})['virgin_truth'] = 0;
    scene.text('"Nope!" You smile at him. "Sorry to disappoint, but yours is just going to be one more of many different dicks that have been inside my pussy little brother."');
    scene.text('You\'re not really sure why you\'re lying to him about this, especially with the implication that you\'re a huge slut, but there\'s no time to think about that as you push your ass towards him and impale yourself on his cock.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first2'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, I\'m not', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['virgin_lie'] = 0;
    ((s as any).brotherQW ?? {})['virgin_truth'] = 2;
    ((s as any).brotherQW ?? {})['know_not_virgin'] = 1;
    scene.text('"Nope!" You smile at him. "Sorry to disappoint, but I lost my virginity a while back little brother."');
    scene.text('With one more quick jerk on his cock for good measure and push your ass towards him, swallowing his length with your pussy.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first2'] },
    ]);
  } },
        { label: 'No, I\'m a slut', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['virgin_lie'] = 0;
    ((s as any).brotherQW ?? {})['virgin_truth'] = 3;
    ((s as any).brotherQW ?? {})['know_not_virgin'] = 1;
    scene.text('"Nope!" You smile at him. "Sorry to disappoint, but yours is just going to be one more of many different dicks that have been inside my pussy little brother."');
    scene.text('You\'re not really sure why you\'re telling him about this, especially with the implication that you\'re a huge slut, but there\'s no time to think about that as you thrust your hips backward to take his entire length inside you in one go. Your brother gasps at the rush of having his cock entirely swallowed by your pussy, grabbing you by the hips to steady himself.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first3'] },
    ]);
  } },
        { label: 'Yes, you\'re my first time (lie)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 10);
    ((s as any).brotherQW ?? {})['virgin_lie'] = 3;
    ((s as any).brotherQW ?? {})['virgin_truth'] = 0;
    scene.text('"Yeah. I am." You smile at him. "You\'re my first time little brother."');
    if (((s as any).stat ?? 0)?.['men_fucked'] < 10) {
      scene.text('You feel a little bad for lying to him, but you figure it\'ll probably make him feel special if he thinks you\'re giving him your virginity. You give his cock one more quick jerk for good measure and start pushing him inside you.');
    } else {
      scene.text('You feel a little bad for lying to him, but you figure it\'ll probably make him feel special if he thinks you\'re giving him your virginity, especially considering the numerous quantity of dicks that\'ve been inside you. You give his cock one more quick jerk for good measure and start pushing him in.');
    }
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first2'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherShowerFuckFirst2(s: GameState, scene: SceneBuilder): void {
  (s as any).eff_contra = ((((s as any).argc ?? 0) > 1) ? (qspUntranslated(s, "ARGS[1]", { location: "brother_shower_sex" })) : (((s as any).sexcontra ?? 0)));
  (s as any).tmp = qspFunc(s, 'pregriskeval', 'eff_contra');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.img('images/shared/home/bathroom/broshowervirgin.mp4');
    // TODO-QSP: dynamic text: Holding your breath, you push back on Kolka, feeling his tip stretch your pussy....
    scene.text(`Holding your breath, you push back on Kolka, feeling his tip stretch your pussy. He eventually pushes the entire length of his cock inside causing you to gasp in pain as his ${((s as any).npc_dick ?? 0)?.['A34']} cm dick tears through your hymen. Despite your pain, neither of you stop moving, continuing to thrust against each other.`);
  } else {
    scene.img(`images/shared/sex/shower/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
    // TODO-QSP: dynamic text: Your pussy easily swallows your brother's <<npc_dick['A34']>> cm cock and you im...
    scene.text(`Your pussy easily swallows your brother's ${((s as any).npc_dick ?? 0)?.['A34']} cm cock and you immediately start building into a rhythm, pushing back on him in time with his thrusts for maximum depth of penetration.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/shared/sex/shower/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('Several minutes pass and your pain is long forgotten. The only thing you can feel now is the ecstasy of Kolka\'s cock pumping in and out of your pussy. His hands come up to grope your breasts and you moan in pleasure. Is this what sex is? How did you live your life without it? Why did you wait so long to lose your virginity? Why didn\'t you jump on your brother\'s cock sooner?!');
    } else {
      if (((s as any).stat ?? 0)?.['hidden_vaginal'] > 0  &&  ((s as any).stat ?? 0)?.['vaginal'] === 0) {
        scene.text('Several minutes go by and you find yourself thoroughly enjoying your brother\'s cock pump in and out of your pussy. His hands grope your breasts and you moan in pleasure. Is this what sex is? How did you live your life without it? Why did you wait so long to lose your virginity? Why didn\'t you jump on your brother\'s cock sooner?!');
      } else {
        scene.text('Several minutes go by as you enjoy Kolka\'s cock. His hands come up to grope you, and you moan in pleasure, your breasts being used as leverage to fuck you harder. Fuck! He\'s pretty good for his first time. Maybe you should have jumped on your brother\'s dick ages ago!');
      }
    }
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'arousal', 'vaginal', 5, 'incest');
    qspCall(s, 'arousal', 'vaginal', (-5), 'incest');
    qspCall(s, 'arousal', 'foreplay', (-10), 'incest');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) < 90) {
      scene.text('Suddenly, you feel your brother tapping you on the shoulder.');
      scene.actions([
        { label: 'Continue', goto: ['brother_shower_sex', 'brother_fuck_cum'] },
      ]);
    } else {
      qspCall(s, 'cum_call', '', '', 'A34', 1);
      scene.text('Your incestuous shower sex continues and you vaguely think that Kolka trying to tell you something but you\'re too drunk on cock to hear what he\'s saying. Suddenly, he pulls you tight, pushing himself as far into you as he can. Something spurts inside you, filling you up, sending you over the edge, orgasming hard on your brother\'s cock.');
      scene.text('As your orgasm winds down and your legs stop quivering, you lean forward against the shower wall, Kolka\'s cock slipping from between your legs. You start to think about how empty you feel without a cock inside you when you realize you feel something dripping out from your pussy.');
      scene.text('"Is… is that cum? Did you come inside me?!" you pant.');
      scene.text('"Y-yeah… I was trying to tell you that I was cumming but you didn\'t say anything so…"');
      if ((!((s as any).succubusflag ?? 0))) {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  ||  ((s as any).tabletkishot ?? 0) >= 1) {
          // TODO-QSP: dynamic text: <i>Well,</i> you think to yourself, <i>It's a good thing '+iif(birth_control['im...
          scene.text('<i>Well,</i> you think to yourself, <i>It\'s a good thing \'+iif(birth_control[\'implant_status\'] > 1, \'I have a birth control implant.\', \'I\'m on birth control.\')+\'</i>');
        } else {
          if (((s as any).mesec ?? 0) > 0) {
            scene.text('<i>Well,</i> you think to yourself, <i>I don\'t think I can get pregnant when I\'m on my period… right…?</i>');
          } else {
            if (((s as any).knowpreg ?? 0) === 1) {
              scene.text('<i>Well,</i> you think to yourself, <i>I\'m already pregnant.</i>');
            } else {
              scene.text('<i>Damn…</i> You close your eyes, sighing as you feel another glob of Kolka\'s cum drip from your pussy. <i>I should go buy a morning-after pill from the pharmacy…</i>');
            }
          }
        }
      }
      qspCall(s, 'brother_shower_sex', 'ending_route_routine');
    }
  } },
  ]);
  scene.build();
}

function enterBrotherShowerFuckFirst3(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 6) + 5, 'incest');
  qspCall(s, 'arousal', 'foreplay', 1, 'incest');
  qspCall(s, 'stat', '');
  (s as any).eff_contra = ((((s as any).argc ?? 0) > 1) ? (qspUntranslated(s, "ARGS[1]", { location: "brother_shower_sex" })) : (((s as any).sexcontra ?? 0)));
  (s as any).tmp = qspFunc(s, 'pregriskeval', 'eff_contra');
  scene.img(`images/shared/sex/shower/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
  scene.text('Barely giving him any time at all to recover from your sudden start, you immediately break into a hard rhythm, thrusting your hips back and giving it your all. He\'s your little brother after all. You should try to make his first time special. Soon enough, you start giving him tips.');
  scene.text('"Hold my hips so you have more control."');
  scene.text('"Grab my boobs if you like. Boobs are meant to be grabbed during sex.');
  scene.text('"Don\'t worry if you feel like you\'re going to cum. It\'s your first time so just let me kn-OW-OW-WOAH!"');
  scene.text('Kolka\'s really getting into it. He pumps in and out you, member slick with your juices. His hands come up to grab your breasts and you gasp when they\'re used as leverage to fuck you harder, his cock reaching even deeper inside you. His cock! Oh god! It\'s driving you insane! Even though it\'s his first time, he\'s actually pretty good! Fuck! You should have jumped on his dick ages ago!');
  scene.text('Several minutes go by with you unable to think about anything except how good fucking your brother feels.');
  scene.text('Suddenly, you feel him urgently tapping you on the shoulder.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brother_shower_sex', 'brother_fuck_cum'] },
  ]);
  scene.build();
}

function enterBrotherShowerFuck(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW ?? {})['shower_fuck_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'boystat', 'A34');
  if (((s as any).brotherQW ?? 0)?.['fuck'] < 1) {
    scene.actions([{ label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first'] }]);
  }
  ((s as any).brotherQW ?? {})['fuck'] = (((s as any).brotherQW ?? {})['fuck'] ?? 0) + (1);
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 7) {
    ((s as any).brotherQW ?? {})['Sex'] = 7;
  }
  qspCall(s, 'npc_relationship', 'modify', 'A34', 5);
  scene.actions([{ label: 'Continue', goto: ['brother_shower_sex', 'brother_fuck_cum'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBrotherShowerAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW ?? {})['shower_fuck_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'boystat', 'A34');
  qspCall(s, 'npc_relationship', 'modify', 'A34', 5);
  if ((!((s as any).pcs_ass ?? 0))) {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.actions([{ label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_anal_vagv_analv'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_anal_vagnv_analv'] }]);
    }
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.actions([{ label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_anal_vagv_analnv'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_anal_vagnv_analnv'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherShowerAnalVagvAnalv(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
  scene.text('Kolka looks at you. You know he wants to go further, and you want to do more than a blowjob too, but you know you can\'t.');
  // TODO-QSP: dynamic text: "We have to stop. I want to do more, but if we continue… if I lose my virginity,...
  scene.text(`"We have to stop. I want to do more, but if we continue… if I lose my virginity, then ${((s as any).npc_nickname ?? 0)?.['A29']} will kill me."`);
  scene.text('Kolka looks confused, and with a hint of pleading in his voice says "But… I don\'t get it. How would she know?"');
  scene.text('You are momentarily surprised he doesn\'t know before realizing that he has no reason to know. "Why do you think I have to go to the doctors every month? I have to get checked."');
  scene.text('Kolka thinks for a moment before smiling. "Are my grades good enough to become a doctor?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'What a smartass', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowersex1.jpg');
    scene.text('"Don\'t be a smartass!" It irritates you that he jokes about a monthly task that he doesn\'t have to do. A thought then comes through your head, and you gulp nervously. "Unless… Would you… Do you want… Want to try anal instead? I know it\'s not-"');
    scene.text('"Yes!" Kolka says, interrupting you mid-sentence with much more enthusiasm than you were expecting.');
    if (((s as any).stat ?? 0)?.['anal'] === 0) {
      scene.text('"Okay, but go slow. I\'ve never done this before," you tell him.');
    }
    scene.actions([
      { label: 'Prepare yourself', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/broshower2.mp4');
    scene.text('Kolka gives you a wide smile. "Okay, I\'ll go slow, I promise. You can stop me if you want."');
    scene.text('You turn your back to him, unsure of what to do, so you decide to use your hands to keep your cheeks parted. He puts one hand on your hip and slowly pushes the tip of his penis against your anus.');
    scene.text('You suddenly panic about the lack of any lube, but decide that the water will be enough. At least you hope it will.');
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    ((s as any).brotherQW ?? {})['anal'] = (((s as any).brotherQW ?? {})['anal'] ?? 0) + (1);
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (Math.floor(Math.random() * 3) + 4);
    qspCall(s, 'arousal', 'anal', 2, 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Try to relax', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/anal2.mp4');
    scene.text('As Kolka slowly enters you, you feel yourself unintentionally tighten your ass around his penis and your hands move to brace yourself against the wall. As you do this, Kolka briefly pauses before slowly going deeper. It\'s an odd feeling; not exactly painful but not pleasurable either.');
    scene.text('Kolka starts moving a little faster, and you realize that having water as lube isn\'t that effective. You feel some burning pain as he begins picking up speed, but there is another feeling. You start to feel… pleasant; it\'s not that much, but it\'s definitely there.');
    scene.text('You move a hand down to your clit, and while it\'s not that easy, you manage to give yourself some extra stimulation. You soon realize that you\'re beginning to feel good, really good. Your clit stimulation, the taboo act and now Kolka\'s thrusting is turning from pleasant to… pleasure. Indeed, the pain is rapidly falling into history as your pleasure ramps up with every thrust. Now you are finding it hard not moan in pleasure as this new experience is undeniably pushing you towards a powerful orgasm.');
    qspCall(s, 'arousal', 'anal', 5, 'incest');
    qspCall(s, 'arousal', 'clit_finger', 2, 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/shower/showeranal6.mp4');
    scene.text('Just as you\'re about to cum, you feel Kolka thrust deep and hold it as he cums deep in your bowels, pushing you over the edge. Unable to keep quiet, you moan as your climax tears though you, your body quivering as your knees become weak. You are steadied as Kolka holds you in a firm embrace from behind, squeezing your breasts as he does.');
    scene.text('"That was…" you begin to say before you realize that you\'re unsure what to say.');
    qspCall(s, 'cum_call', 'anal', 'A34', 1);
    qspCall(s, 'arousal', 'clit_finger', 2, 'incest');
    qspCall(s, 'arousal', 'breasts', (-1), 'incest');
    qspCall(s, 'arousal', 'anal', 5, 'incest');
    scene.actions([
      { label: 'Was it good for you?', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/brotherwash.jpg');
    scene.text('You both quietly return to washing before Kolka asks "Was I, um… Was it okay? Did you enjoy it?"');
    scene.text('"It felt uncomfortable at first and even a bit painful," you say, wincing at the mere memory. "But by the end it was… well let\'s just say, yes, I enjoyed it. But let me know when you\'re about to cum next time, okay?"');
    scene.text('"Does that mean that there will be a next time?" he asks with a hopeful expression on his face.');
    scene.text('"No promises," you say as you realize that he\'s not the only one looking forward to trying it again.');
    scene.text('The sit under the water together for a little while longer before you realize someone might notice that your brother is missing and become suspicious. You quickly shut off the water and dry him off, gathering Kolka\'s clothes and shooing him into the hallway.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
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

function enterBrotherShowerAnalVagnvAnalv(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
  scene.text('You chew your lip, debating with yourself internally before just spitting it out.');
  scene.text('"Kolka," you begin nervously. "I\'m… I\'m an anal virgin. Would you be willing to change that?"');
  scene.text('He freezes for a second before a broad grin appears on his face. "I\'d like that."');
  scene.text('While you\'re no virgin, anal sex presents problems that you\'ve not had before. Kolka seems to be thinking the same as you, asking, "So… how do you want to do this?"');
  scene.text('"Go slow, and if I ask you to stop, please stop, okay?" you reply.');
  scene.text('"Okay, but what about lube? Is the water enough?"');
  scene.text('This question stops you. Thinking back to porn that you\'ve seen, they often just spit, but that doesn\'t sound like a good option to you now that you\'re about to have something fairly large entering you.');
  scene.text('Kolka comes up with a suggestion. "I could try to use some of your pussy juice… You know, like one or two thrusts there first, then we try. What do you think?"');
  scene.text('While you\'re not sure if you like the label \'pussy juice\', it\'s the only plan you\'ve got.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Okay, let\'s do that."', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/anal1.mp4');
    scene.text('Moving in behind you, Kolka lines up with your pussy before thrusting in. Feeling this, you consider hitting the abort button and returning to what you\'re more familiar with, but you want that new experience and still feel the need to try it.');
    scene.text('You widen your stance and push your ass towards Kolka. He grips your hip and his cock slowly pushes at your virgin hole. As the head of Kolka\'s cock enters you, he pauses and lets out an annoyed grunt.');
    scene.text('You panic. "What is it? Am I, are we okay?! What\'s wrong?!"');
    scene.text('"Sorry. yes it\'s fine. It\'s just, well, perhaps we should have stopped the water. I don\'t think our lube has lasted. What should we do?"');
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    ((s as any).brotherQW ?? {})['anal'] = (((s as any).brotherQW ?? {})['anal'] ?? 0) + (1);
    qspCall(s, 'arousal', 'vaginal', 2, 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'This is nice', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/anal2.mp4');
    scene.text('You briefly think about switching back to \'normal\' shower sex, but you still want to try this and want to see it though.');
    scene.text('"Keep going," you say, and Kolka pushes deeper, stopping every few seconds to let you breathe before continuing.');
    scene.text('You can feel Kolka getting deeper when he says "God, you\'re tight. I think you\'re squeezing me with every heartbeat."');
    scene.text('"Sorry, I\'ll try to stop…"');
    scene.text('"No, it\'s not a complaint, it was just unexpected," he replies.');
    scene.actions([
      { label: 'Try to relax', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/shower/showeranal6.mp4');
    scene.text('After another minute, Kolka asks "Can I start to move now?"');
    scene.text('You take a deep breath. "Yes, but go slow."');
    scene.text('Kolka begins slowly thrusting, but gets into a rhythm as you notice that he\'s slowly gaining speed. You could ask him to slow down, but decide against it. You can\'t deny that it\'s starting to feel good, and every Kolka pushes forward, the pain diminishes and pleasure replaces it.');
    qspCall(s, 'arousal', 'anal', 2, 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/shower/showeranal6.mp4');
    scene.text('You find yourself needing to brace yourself on the wall with your hands. You didn\'t even notice, but you\'ve bent forward, allowing Kolka better access as his speed increases.');
    scene.text('You\'re really getting into it now, and are surprised by how good you feel.');
    scene.text('"I\'m about to cum!" Kolka cries.');
    scene.text('"Do it!" is all you can say. As Kolka bursts inside you, he pushes deep and if he wasn\'t holding you, you may have lost your balance. After a performance like that, you don\'t want to complain though.');
    qspCall(s, 'arousal', 'anal', 3, 'incest');
    qspCall(s, 'cum_call', 'anal', 'A34', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wash yourselves', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brotherwash.jpg');
    scene.text('As you both quickly rewash yourselves, Kolka asks "So, was it good? More importantly, will you want to do it again?"');
    scene.text('You\'re slightly annoyed by the \'more importantly\' part, but can\'t deny that you\'ve enjoyed your first butt fucking.');
    scene.text('"It was…" you say, letting it hang for a moment before finishing with "Good. Will it happen again? I\'ll think about it."');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
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

function enterBrotherShowerAnalVagvAnalnv(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
  scene.text('You want, no, <i>need</i> to continue, but thanks to your mother\'s stupid rule you know your pussy is out of bounds, but you do have other options…');
  // TODO-QSP: dynamic text: "Kolka, ' + iif (brotherQW['anal'] > 0, 'I still can't let you have my pussy, bu...
  scene.text('"Kolka, \' + iif (brotherQW[\'anal\'] > 0, \'I still can\'t let you have my pussy, but would you be okay with doing me in the ass again?"\', \'I can\'t let you have my pussy, but would you be okay with anal?"\') + \' You ask and Kolka\'s eyes light up.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Prepare yourself', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/anal2.mp4');
    scene.text('You\'re no anal virgin, but sex in a shower isn\'t as easy as it looks in porn; the water also makes proper lube impossible. You spread your legs and lean forward, pushing your ass towards Kolka while bracing yourself on the wall.');
    scene.text('Kolka\'s cock prods at your anus as he gets into position, placing one hand on your hip. You\'re enjoying the anticipation when Kolka slowly but steadily breaches the resistance of your ass as he pushes himself deep into you. He takes a few seconds before beginning a slow but strong piston motion.');
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    ((s as any).brotherQW ?? {})['anal'] = (((s as any).brotherQW ?? {})['anal'] ?? 0) + (1);
    qspCall(s, 'arousal', 'anal', 3, 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/shower/showeranal6.mp4');
    scene.text('You find that you are reciprocating his motion as you push back into his thrusts and clench down as he withdraws from you. Kolka reaches up and grabs your right breast, squeezing it hard and thumbing your nipple as his pace increases.');
    scene.text('You know the noise of the shower can only hide so much, and are doing your best to keep your voice down as Kolka says "I\'m about to cum."');
    scene.text('You\'re only able to respond with a nod as you\'re biting your lower lip to help keep quiet. You feel Kolka push in hard as he cums deep inside you.');
    qspCall(s, 'arousal', 'breast', (-3), 'incest');
    qspCall(s, 'arousal', 'anal', 3, 'incest');
    qspCall(s, 'cum_call', 'anal', 'A34', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/brotherwash.jpg');
    scene.text('Straightening up, you both go back to washing yourselves in silence before you turn to face him.');
    scene.text('"You really are the best sister." Kolka says.');
    scene.text('"I know," you reply with a wide grin.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrotherShowerAnalVagnvAnalnv(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
  scene.text('"Sorry Kolka," you say while doing your best to pretend that you\'re not going to continue, before pushing your backside towards him. "You\'re going to have to settle for anal today."');
  scene.text('He grins before sighing. "If I must."');
  scene.text('You both giggle before Kolka places his hands on your hips and pulls you back. You lean forward, using your arms to brace yourself on the wall and taking a wider stance to give Kolka room behind you.');
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  ((s as any).brotherQW ?? {})['anal'] = (((s as any).brotherQW ?? {})['anal'] ?? 0) + (1);
  qspCall(s, 'arousal', 'anal', 3, 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/shower/showeranal6.mp4');
    scene.text('As the water from the shower falls on your back and between your ass cheeks, you feel Kolka breaching your anus in one powerful motion. As the glorious feeling of his cock fills you up, he reaches forward and grasps your breasts. A moment later, he\'s started moving, and you meet his thrusts by pushing back, willing him to go deeper. Every time he withdraws, you feel yourself gripping him to unconsciously pull him back in.');
    scene.text('"I\'m about to cum," he says, and you simply nod. After a final flurry of thrusts, Kolka cums, flooding your bowels with his seed.');
    qspCall(s, 'arousal', 'anal', 3, 'incest');
    qspCall(s, 'cum_call', 'anal', 'A34', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('Straightening up, you both go back to washing yourselves in silence before you turn to face him.');
    scene.text('"The things I do for you…" Kolka says with a cheeky grin.');
    scene.text('You just pull a face and stick out your tongue before you both giggle and get out of the shower.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrotherFuckCum(s: GameState, scene: SceneBuilder): void {
  (s as any).brothercumchoice = Math.floor(Math.random() * 5) + 1;
  scene.img('images/shared/sex/shower/doggy4.mp4');
  if (((s as any).brotherQW ?? 0)?.['fuck'] === 1) {
    (s as any).brothercumchoice = 1;
  } else {
    // TODO-QSP: dynamic text: "Nnngh~!" you bite your lip as you feel your brother's <<npc_dick['A34']>> cm co...
    scene.text(`"Nnngh~!" you bite your lip as you feel your brother's ${((s as any).npc_dick ?? 0)?.['A34']} cm cock slide all the way into your pussy. You waste no time and the two of you start furiously fucking each other like the sex crazed teenagers you are.`);
    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 6) + 5, 'incest');
    if (((s as any).brothercumchoice ?? 0) < 5) {
      scene.text('Suddenly, Kolka starts tapping you on the shoulder.');
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).brothercumchoice ?? 0) === 1) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>-! I'm gonna cum! What should I do?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}-! I'm gonna cum! What should I do?"`);
    scene.actions([
      { label: 'Not inside me!', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'hj', 1, 'incest');
    qspCall(s, 'cum_call', 'stomach', 'A34', 1);
    scene.img('images/shared/sex/shower/jerkoff1.mp4');
    scene.text('"Not inside me!" you cry out. You quickly pull yourself off him and turn around, grabbing his cock with your hand and jerking him furiously until he groans and you feel his hot cum spattering all over your stomach.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Suck him off', goto: ['brother_shower_sex', 'shower_swallow'] },
      { label: 'Let him cum on your face', goto: ['brother_shower_sex', 'shower_facial'] },
      { label: 'Fuck him till he cums', goto: ['brother_shower_sex', 'shower_creampie'] },
      { label: 'Fill me up!', goto: ['brother_shower_sex', 'shower_fill_me_up'] },
    ]);
  } else {
    if (((s as any).brothercumchoice ?? 0) === 2) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>-! I'm almost there! Can I come inside you today?"
      scene.text(`"${((s as any).pcs_nickname ?? 0)}-! I'm almost there! Can I come inside you today?"`);
      if (((s as any).knowpreg ?? 0) === 0  &&  (!((s as any).thinkpreg ?? 0))) {
        scene.actions([
          { label: 'Push him off (not inside!)', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'stomach', 'A34', 1);
    scene.img('images/shared/sex/shower/jerkoff1.mp4');
    scene.text('"No! Not inside me!" you cry out. You push him off you and turn around. Grabbing his cock, you jerk him vigorously until he groans, spraying hot cum that spatters all over your stomach.');
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      scene.text('Feeling his spunk on your stomach, you suddenly grow annoyed and wonder why you even finished him off. "What the fuck Kolka?! Are you <i>trying</i> to get me pregnant?"');
      if (((s as any).birth_control ?? 0)?.['kolka_knows'] === 1) {
        ((s as any).birth_control ?? {})['kolka_knows'] = 2;
        scene.text('"I thought you were on birth control!"');
        scene.text('"Well I stopped!"');
        scene.text('"Well how was I supposed to know that?"');
      }
    }
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
        ]);
      }
      scene.actions([
        { label: 'Push him off (not today)', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'stomach', 'A34', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/shower/jerkoff1.mp4');
    scene.text('"Not today Kolka." You push your brother off of you and turn around. Grabbing his cock, you jerk him vigorously until he groans, spraying hot cum that spatters all over your stomach.');
    if (((s as any).birth_control ?? 0)?.['kolka_knows'] === 1) {
      scene.text('"Hey what gives?" he complains. "I thought you were on birth control? Why can\'t I cum inside?"');
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
        ((s as any).birth_control ?? {})['kolka_knows'] = 2;
        scene.text('"Sorry, I stopped using it a while ago. If you came inside me, you could have seriously knocked me up."');
        scene.text('Kolka gulps at the realization of what you just said.');
      } else {
        scene.text('"I just didn\'t want you to come inside me today," you say irritatedly.');
        scene.text('"But why does it matter if you\'re on birth control?"');
        scene.text('"Because I said so! It\'s my body! I get a say in where you cum on it!"');
      }
    }
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      scene.text('"Sorry," you smile apologetically. "I\'m not on birth control and I can\'t afford to get knocked up. Especially not by my little brother."');
    }
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
        { label: 'Fuck him till he cums', goto: ['brother_shower_sex', 'shower_creampie'] },
        { label: 'Fill me up!', goto: ['brother_shower_sex', 'shower_fill_me_up'] },
      ]);
    } else {
      if (((s as any).brothercumchoice ?? 0) === 3) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>-! I'm almost there! Let me cum on your face!"
        scene.text(`"${((s as any).pcs_nickname ?? 0)}-! I'm almost there! Let me cum on your face!"`);
        scene.actions([
          { label: 'Let him cum on your face', goto: ['brother_shower_sex', 'shower_facial'] },
          { label: 'Ignore him, make him come inside you', goto: ['brother_shower_sex', 'shower_forced_creampie'] },
        ]);
      } else {
        if (((s as any).brothercumchoice ?? 0) === 4) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>-! I'm almost there! Can I cum in your mouth?"
          scene.text(`"${((s as any).pcs_nickname ?? 0)}-! I'm almost there! Can I cum in your mouth?"`);
          (s as any).brotherbjcomment = 3;
          scene.actions([
            { label: 'Let him cum in your mouth', goto: ['brother_shower_sex', 'shower_swallow'] },
            { label: 'Ignore him, make him come inside you', goto: ['brother_shower_sex', 'shower_forced_creampie'] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/shared/sex/shower/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
    qspCall(s, 'cum_call', '', '', 'A34', 1);
    scene.text('Suddenly Kolka grabs you tight, thrusting his cock into you as deep as it can go and you can feel him pulsating inside you.');
    if (((s as any).pcs_horny ?? 0) >= 95) {
      ((s as any).brotherQW ?? {})['shower_fuck_day'] = ((s as any).daystart ?? 0);
      qspCall(s, 'arousal', 'vaginal', 1);
    }
    scene.text('A moment later, he pulls out of you and you can feel a thick liquid dripping from your pussy. You frown at that, and turn your head around to face him.');
    scene.text('"What just… wait, is that…? Did you just come inside me?"');
    if (((s as any).birth_control ?? 0)?.['kolka_knows'] === 1) {
      scene.text('"Well yeah," he says. "You\'re on birth control anyways right?"');
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
        scene.actions([
          { label: '"I\'m not on it anymore you idiot!"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    ((s as any).birth_control ?? {})['kolka_knows'] = 2;
    scene.text('"I\'m not on birth control anymore you fucking idiot!"');
    scene.text('"What?? But you said-!"');
    scene.text('"Well you didn\'t tell me about it! How was I supposed to know?!"');
    scene.text('"Fuck!"');
    scene.text('<i>Maybe I can get a morning-after pill from the pharmacy,</i> you think to yourself.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
          { label: '"I\'m not but it\'s okay"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    ((s as any).birth_control ?? {})['kolka_knows'] = 2;
    scene.text('"Actually… I kinda stopped using it a while ago…"');
    scene.text('"What?? But you said-!"');
    scene.text('"I know, I know. I\'m sorry Kolka, this is my fault, I should have told you. But now you know I guess?" you smile weakly at him.');
    scene.text('<i>Maybe I can get a morning-after pill from the pharmacy,</i> you think to yourself.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Was just asking"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    if (((s as any).brotherQW ?? 0)?.['shower_fuck_day'] === ((s as any).daystart ?? 0)) {
      scene.text('"Yup," you smile. "So it\'s no problem. I was just asking because I was a little lightheaded after that. I think we came at the same time."');
      scene.text('"Do you orgasm every time someone cums inside you?" he asks, raising an eyebrow.');
      scene.text('"Only if I\'ve been properly fucked beforehand," you respond wryly.');
    } else {
      scene.text('"Yup," you smile. "Was just asking because I wasn\'t sure what happened."');
      scene.text('"You didn\'t feel me come inside you?" he asks, raising an eyebrow?"');
      scene.text('"I did, I just didn\'t understand why you were cumming without making me cum first. I thought you were a better lover than that," you respond wryly.');
    }
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
          { label: '"You still need to ask" (tease)', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"Well," you chide him, "you still need to ask."');
    scene.text('"How come? It\'s not like you\'re in any danger are you?"');
    scene.text('"No, but I like telling you to come inside me," you smirk.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
          { label: '"You still need to ask"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"Well, you still need to ask," you chide him.');
    scene.text('"How come? It\'s not like you\'re in any danger are you?"');
    scene.text('"No, but you still need to ask. It\'s my pussy and it\'s my right to choose whether you\'re filling it with cum or not."');
    scene.text('"Tch. Whatever."');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
        ]);
      }
    } else {
      scene.text('Kolka\'s eyes are wide and filled with worry.');
      // TODO-QSP: dynamic text: "I am <i>so</i> sorry <<$pcs_nickname>>! I didn't mean to! I just couldn't hold ...
      scene.text(`"I am <i>so</i> sorry ${((s as any).pcs_nickname ?? 0)}! I didn't mean to! I just couldn't hold it in and before I could say anything I just-!"`);
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
        ((s as any).birth_control ?? {})['kolka_knows'] = 1;
        scene.actions([
          { label: '"I\'m on birth control but be careful"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"It\'s okay Kolka, I\'m on birth control," you reassure him. His expression melts with visible relief. "But still, you need to be more careful. If I forget to take my pills or stop for some reason, you cumming inside me like that could be really dangerous. I could really get pregnant."');
    scene.text('He nods back at you in understanding. "I\'m sorry," he says again. "I\'ll be more careful in the future."');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
          { label: '"I\'m on birth control so you don\'t have to worry"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"It\'s okay Kolka, I\'m on birth control," you reassure him. His expression melts with visible relief. "So that means you can come inside me as much as you like and you don\'t have to worry."');
    scene.text('You wink at him and his jaw drops open. He looks down at your cum dripping pussy and you can feel a hunger exuding from him.');
    scene.text('<i>Oops. I might have just created a monster,</i> you think to yourself.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
          { label: 'Play a prank on him', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"Oh my god," you say, adopting an expression of severe panic. "You just came inside me! Your own sister! Do you have any idea what that means?"');
    scene.text('He wilts back from you. "I-"');
    // TODO-QSP: dynamic text: "I could get pregnant Kolka! I'm only <<age>>! I'm not ready to be a mother! Are...
    scene.text(`"I could get pregnant Kolka! I'm only ${((s as any).age ?? 0)}! I'm not ready to be a mother! Are you ready to be a father?? If I have a baby, are you going to take responsibility? Oh god, what is ${((s as any).npc_nickname ?? 0)?.['A29']} going to think? Her son knocking up his sister?!"`);
    scene.text('Kolka\'s face visibly pales. "Oh shit! No! What are we going to do? I don\'t want to be a dad! I don\'t want to get in trouble for this! I-! I-!"');
    scene.text('He\'s on the verge of tears now and you can\'t hold back any longer and bust into near uncontrollable laughter. Your body is wracked with giggles, trying not to let your laughs escape the room and echo outside the door.');
    scene.text('"WHY ARE YOU LAUGHING?! THIS IS SERIOUS! YOU WERE SERIOUS A SECOND AGO!!"');
    // TODO-QSP: dynamic text: "Shhhhh!" you hush him, still laughing. "Pipe down would you?? Do you want <<$np...
    scene.text(`"Shhhhh!" you hush him, still laughing. "Pipe down would you?? Do you want ${((s as any).npc_nickname ?? 0)?.['A29']} and dad to find out? Relax, I'm just fucking with you. I'm on birth control, I'm not gonna get pregnant."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    scene.text('"What the fuck! Are you fucking kidding me?!"');
    scene.text('"Would you rather I not be?" you giggle, his reactions sending you into another fit. "Would you rather have had your sperm swarming around my unprotected uterus looking for eggs to impregnate?"');
    scene.text('"You know what I mean!" His anger has you cackling further and you have to spray yourself in the face with the showerhead just to calm down.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    ]);
  } },
        ]);
      } else {
        if ((!((s as any).succubusflag ?? 0))) {
          if (((s as any).mesec ?? 0) > 0) {
            scene.actions([
              { label: '"It\'s okay, I\'m on my period"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"It\'s okay Kolka, I\'m on my period right now. I don\'t think I can get pregnant on my period."');
    scene.text('His face sighs with visible relief.');
    scene.text('"We got lucky this time. Consider it a freebie," you smile at him.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
              { label: '"You need to be more careful!"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"You need to be more careful!" you scold him. "What if I get pregnant?!"');
    scene.text('"I know! I know! I\'m sorry!"');
    scene.text('You huff out in anger but turn back to face him again anyways.');
    scene.text('"Look, I was on my period this time and I don\'t think I can get pregnant on my period. But you should know better! If I wasn\'t on my period right now this could have been really bad! So show some self control next time!" He nods fearfully in agreement.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
            ]);
          } else {
            if (((s as any).knowpreg ?? 0) === 1) {
              scene.actions([
                { label: '"I\'m already pregnant"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('<i>Well,</i> you think to yourself, <i>I\'m already pregnant.</i>');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
              ]);
            } else {
              scene.actions([
                { label: '"It\'s okay, it was an accident"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    ((s as any).brother ?? {})['cp_accident'] = (((s as any).brother ?? {})['cp_accident'] ?? 0) + (1);
    scene.text('"It\'s okay Kolka," you say, trying to calm him down. "Look, I\'m not mad, it was just an accident."');
    scene.text('"But-!"');
    scene.text('"Yeah, I know. I could get pregnant from this. But we\'ll just have to hope I don\'t. We can\'t change it now, we\'ll just have to be more careful in the future."');
    scene.text('"The future? You mean…"');
    scene.text('"Yes, I\'m still going to keep fucking you Kolka," you smile at him. "Just cause this happened doesn\'t mean I\'m going to leave you alone. So just learn from the mistake and we\'ll move on from it together, okay? Maybe I can buy a morning-after pill from the pharmacy later."');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
                { label: '"You need to be more careful!"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"You need to be more careful!" you scold him. "What if I get pregnant?!"');
    scene.text('"I know! I know! I\'m sorry!"');
    scene.text('You huff out in anger but turn back to face him again anyways.');
    scene.text('"I\'m not on birth control! This is really dangerous!"');
    scene.text('"I know! I know!"');
    scene.text('"Fuck! What the fuck were you thinking?!"');
    scene.text('You continue to swear at your brother for the next minute while he pleads for your forgiveness.');
    scene.text('<i>Maybe I can get a morning-after pill from the pharmacy,</i> you think to yourself.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
                { label: '"What the fuck!"', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"What the fuck Kolka!" you hiss. "What if I get pregnant?!"');
    scene.text('"I know! I know! I\'m sorry!"');
    scene.text('"You fucking moron! Get the fuck out!" In your rage, you shove him out of the shower and into the hallway, sopping wet before slamming it behind him and closing the latch.');
    scene.text('<i>Fuck! Fuck! Fuck! Fuck, fuck!</i>');
    scene.text('<i>Idiot!… I wonder if I can get a morning-after pill from the pharmacy…</i> you think as you watch the cum spill from your pussy and run down the drain.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
              ]);
            }
          }
          if (((s as any).brother ?? 0)?.['cp_accident'] >= 5) {
            scene.actions([
              { label: '"Plan B is expensive!"', handler: (st: GameState) => {
    ((s as any).brother ?? {})['cp_accident'] = (((s as any).brother ?? {})['cp_accident'] ?? 0) + (1);
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"Come on Kolka, I\'m going to have to buy another morning after pill now! I know accidents happen but this is getting expensive!"');
    scene.text('"Well what if you started taking birth control? Then I can cum in you as much any time right?"');
    scene.text('"That\'s not the point Kolka. You need to have more self control!"');
    scene.text('<i>Though he is right…</i>');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
            ]);
          }
        } else {
          scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
          scene.text('"It\'s okay Kolka, I\'m on birth control," you lie. His expression melts with visible relief. "So that means you can come inside me as much as you like and you don\'t have to worry."');
          scene.text('You wink at him and his jaw drops open. He looks down at your cum dripping pussy and you can feel a hunger exuding from him.');
          scene.text('<i>Oops. I might have just created a monster,</i> you think to yourself. <i>Well it\'s not like I could have told him the truth that I\'m a magical sex demon now could I?</i>');
          qspCall(s, 'brother_shower_sex', 'ending_route_routine');
        }
      }
    }
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerSwallow(s: GameState, scene: SceneBuilder): void {
  (s as any).brotherbjcomment = Math.floor(Math.random() * 2) + 1;
  qspCall(s, 'boystat', 'A34');
  qspCall(s, 'arousal', 'bj', 1, 'incest');
  qspCall(s, 'cum_call', 'mouth_swallow', 'A34', 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/showerbj.mp4');
  if (((s as any).brotherQW ?? 0)?.['shower_fuck_day'] === ((s as any).daystart ?? 0)) {
    scene.text('Sinking to your knees, you barely put the tip of Kolka\'s cock in before he explodes between your lips. Cum fills your mouth and you contemplate what to do with it.');
  } else {
    scene.text('You keep sucking on Kolka\'s cock until he starts tapping on your head.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>-! I'm gonna-!"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}-! I'm gonna-!"`);
    scene.text('He doesn\'t even finish the word before you feel hot liquid squirting into your mouth.');
    scene.text('"… cum."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/showerbj.mp4');
    scene.text('You suck a little more, making sure you\'ve drained him to the last drop and then withdraw your mouth with carefully closed lips before swallowing it all in a single gulp.');
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: '"Tasty!"', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"Mmm!" you smile at him. "Say, you\'re pretty tasty!" you say, playfully sucking and licking his cock little more before finishing up with a light kiss on the tip and standing up. "Might have to get myself another drink later! \'Right off the tap\' if you know what I mean," winking at him.');
    if (((s as any).brotherbjcomment ?? 0) === 1) {
      scene.text('"That really tastes good to you?"');
      scene.text('"Mhm," you nod, letting the water run through your hair a little more. "Didn\'t used to at first. But maybe it\'s just an acquired taste. Or maybe little brothers are just the best vintage of cum!" You grin and wiggle your eyebrows at him.');
      qspCall(s, 'brother_shower_sex', 'ending_route_routine');
    } else {
      if (((s as any).brotherbjcomment ?? 0) === 2) {
        scene.text('Kolka regards you with a bit of a look as you stand back up.');
        scene.text('"What?" you ask at him.');
        // TODO-QSP: dynamic text: "You're kind of a slut, aren't you <<$pcs_nickname>>?"
        scene.text(`"You're kind of a slut, aren't you ${((s as any).pcs_nickname ?? 0)}?"`);
        scene.actions([
          { label: 'Feign insult', handler: (st: GameState) => {
    scene.text('You gasp in mock indignation. "Kolka! How dare you! I have never been anything other than ladylike! How could you call your beloved sister a slut?"');
    scene.text('"Probably because she loves the taste of cum," he snickers at you while you rinse your hair one last time.');
    scene.text('"Have you considered maybe it\'s just yours?" you ask, looking over your shoulder.');
    scene.text('"A cumslut is still a cumslut, even if it\'s only for one kind."');
    scene.text('You roll your eyes. He\'s being a punk but you can\'t find the anger to be annoyed with him. He does have a bit of a point after all.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
          { label: 'Careful what you say', handler: (st: GameState) => {
    scene.text('"Hey! Careful what you say little brother," you say admonishingly. "Your big sister might stop doing you \'favors\' if you act too much like a brat."');
    scene.text('"Hey, I can\'t help it if my big sister is a slut!" he grins. "I just call it like I see it, and girls who swallows are usually sluts. Besides, I don\'t think I have to worry too much. If you stopped blowing me, where else would you get your favorite drink?"');
    if (((s as any).brotherQW ?? 0)?.['shower_fuck_day'] === ((s as any).daystart ?? 0)) {
      scene.text('You roll your eyes. "I\'m a slut remember? Maybe I\'ll just go around the corner and blow someone else!" you growl at him. Tearing back the curtain, you step out of the tub somewhat annoyed with Kolka. Partially because he\'s being a punk, but also partially because he\'s actually kind of right. Fucking your brother in the shower and swallowing his cum <i>is</i> pretty slutty…');
      qspCall(s, 'brother_shower_sex', 'ending_route_routine');
    } else {
      scene.text('You roll your eyes. "I\'m a slut remember? Maybe I\'ll just go around the corner and blow someone else!" You growl at him and shut off the water. Tearing back the curtain, you step out of the tub somewhat annoyed with Kolka. Partially because he\'s being a punk, but also partially because he\'s actually kind of right. Swallowing your brother\'s cum <i>is</i> pretty slutty…');
      qspCall(s, 'brother_shower_sex', 'ending_route_routine');
    }
  } },
          { label: 'Yeah, I am', handler: (st: GameState) => {
    scene.text('"Uhmm… yeah? What tipped you off? Was it the part where I gave you shower head?"');
    scene.text('"No, it was the part where you swallowed my cum like a shot of vodka. Only sluts swallow like that," he says, grinning.');
    scene.text('You punch him in the arm playfully but you aren\'t really mad. He does have a point after all.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
          { label: 'Kiss him to gross him out', handler: (st: GameState) => {
    scene.text('You frown at him and fling your arms around his neck without warning. You press your lips against his and force your tongue into his mouth as far as it can go. He sputters, flailing backward and pushing you away.');
    // TODO-QSP: dynamic text: "Ugh! Ew! Gross! What the hell <<$pcs_nickname>>?! I just came in your mouth! I ...
    scene.text(`"Ugh! Ew! Gross! What the hell ${((s as any).pcs_nickname ?? 0)}?! I just came in your mouth! I don't want to taste that!"`);
    scene.text('He rips open the shower curtain and you grin back in satisfaction as he stumbles out to escape.');
    scene.text('"Well maybe you shouldn\'t be calling girls sluts just because they\'re nice enough to swallow your cum!"');
    scene.text('<i>Well,</i> you think to yourself. <i>I didn\'t <b>just</b> swallow. I did also say I thought it was tasty. I suppose that is a bit slutty isn\'t it?</i>');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
          { label: 'Only for you(sisterly)', handler: (st: GameState) => {
    scene.text('"Only for you!" You wrap your arms around him, smothering him and rubbing your head against his cheek. "I just love you so very much! What sister could stop herself from slutting up for such a cute baby brother?"');
    scene.text('"Ack!" he cries out and shoves you away. "Get off of me! Weirdo!"');
    if (((s as any).brotherQW ?? 0)?.['shower_fuck_day'] === ((s as any).daystart ?? 0)) {
      scene.text('"Hey! What\'s wrong with that?" you grin at him. "I\'d say it\'s pretty weird to for your sister to let you fuck her in the shower. I thought you liked that! Don\'t you want me to be a slutty weirdo then?"');
      scene.text('"Bah!" he says, clambering out of the shower to escape you, grumbling as he does so. "More slut and less weirdo!"');
      qspCall(s, 'brother_shower_sex', 'ending_route_routine');
    } else {
      scene.text('"Hey! What\'s wrong with that?" you grin at him. "I\'d say it\'s pretty weird to get slutty blowjobs from your sister in the shower. I thought you liked that! Don\'t you want me to be a slutty weirdo then?"');
      scene.text('"Bah!" he says, clambering out of the shower to escape you, grumbling as he does so. "More slut and less weirdo!"');
      qspCall(s, 'brother_shower_sex', 'ending_route_routine');
    }
  } },
          { label: 'Only for you (loving)', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/brotherpussyfeel.mp4');
    scene.text('"Only for you," you whisper, suddenly serious, looking longingly into his eyes.');
    scene.text('He looks back at you a hesitant expression on his face. You lean in, wrapping your arms around him and pressing your breasts into his chest.');
    scene.text('"Yes, I\'m a slut," you murmur into his ear. "I would never be a slut for anyone else Kolka," taking his hand. "But I\'ll happily be a slut for you."');
    scene.text('With your final words you press his hand against your pussy and the heat between your legs.');
    scene.text('Neither of you say anything for a few minutes, standing still with your breasts still pressed against him and his fingers gently working themselves in and out of your pussy. You realize you can\'t stay in there together too long, lest someone become suspicious and you wistfully pull away, Kolka\'s fingers slipping from your pussy as you do.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: '"Let\'s finish up"', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"Come on Kolka, let\'s finish up quickly before someone starts wondering where we are."');
    scene.text('You stand up without further comment, letting the water run over your body a little more and making sure your hair is thoroughly rinsed.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Stare intimately', handler: (st: GameState) => {
    scene.text('Looking into his eyes, you stare at him and lean forward to give him a very long and intimate kiss on the tip of his cock before standing up. The two of you hold each other in continued silence, spending a few more minutes under the water and basking in the afterglow together.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Yuck', handler: (st: GameState) => {
    scene.text('"Yeech," you wince, sticking out your tongue. "That\'s gross."');
    scene.text('"But you swallowed it anyways?" Kolka asks, confused.');
    scene.text('"Spitting is quitting," you smirk.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    ]);
  } },
    { label: 'Spit', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/showerbj.mp4');
    scene.text('"Yeeeech…"');
    scene.text('Opening your mouth, you drool and let his cum drip down off your tongue before wadding up what\'s left and spitting it onto the bottom of the bathtub.');
    if (((s as any).brotherQW ?? 0)?.['shower_fuck_day'] === ((s as any).daystart ?? 0)) {
      scene.text('"Thanks for the warning Kolka," you say, smiling as you standing up.');
    }
    if (((s as any).brotherbjcomment ?? 0) === 1) {
      scene.text('"Sorry sis," he says looking somewhat ashamed. "I just couldn\'t hold it any longer. I tried, I really did!"');
      scene.text('"It\'s okay Kolka," you smile up at him. "It happens sometimes. Just try to warn me a little sooner next time, okay?" He nods promisingly.');
      if (((s as any).brotherQW ?? 0)?.['bj'] > 5) {
        scene.text('You suppress a grin when he promises to do better in the future. You\'ve given him enough blowjobs to suspect that he doesn\'t give any warning because he wants to cum in your mouth. He never seems to have this problem when he asks to give you a facial. <i>Oh well,</i> you mentally shrug to yourself. <i>What\'s a girl to do?</i>');
      }
      scene.text('"Now come on, let\'s finish up before someone wonders where we are."');
      qspCall(s, 'brother_shower_sex', 'ending_route_routine');
    } else {
      if (((s as any).brotherbjcomment ?? 0) === 2) {
        scene.text('"A little warning next time maybe?"');
        scene.text('"Sorry sis. Your mouth just felt so good and your blowjobs are so great and… Sorry… I just couldn\'t hold it."');
        scene.text('"It\'s okay Kolka," you smile up at him. "It\'s not like I can be mad at you for saying I\'m good at giving head." You give him a quick kiss on the tip of his cock before standing up.');
        scene.text('"Now come on, let\'s finish up before someone wonders where we are."');
        qspCall(s, 'brother_shower_sex', 'ending_route_routine');
      }
    }
  } },
  ]);
  scene.build();
}

function enterShowerFacial(s: GameState, scene: SceneBuilder): void {
  (s as any).brotherbjcomment = Math.floor(Math.random() * 2) + 1;
  qspCall(s, 'boystat', 'A34');
  qspCall(s, 'cum_call', 'face', 'A34', 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/facial1.jpg');
  if (((s as any).brotherQW ?? 0)?.['shower_fuck_day'] === ((s as any).daystart ?? 0)) {
    scene.text('You kneel down in front of Kolka, jerking his cock off. He starts to cum and as the first spurt hits you, you squeeze your eyes shut, continuing to jerk your brother until your face is thoroughly coated and feel no more droplets.');
  } else {
    if (((s as any).brotherQW ?? 0)?.['shower_bj_day'] === ((s as any).daystart ?? 0)) {
      scene.text('You let his cock slip out of your mouth and close your eyes in anticipation, listening to the light fapping sound of your brother jerking off just centimeters in front of you. Within seconds, you feel his hot cum spattering all over you. It\'s a surprisingly big load, as you feel several spurts hit your face before he\'s finally done ejaculating.');
    }
  }
  if (((s as any).brotherbjcomment ?? 0) === 1) {
    scene.text('"That\'s a pretty good look for you. Ever consider going out like that?"');
    scene.actions([
      { label: 'Hardy har har', handler: (st: GameState) => {
    scene.text('"Hardy, har, har." Even with your eyes closed, you can feel his self satisfied grin radiating towards you. You squeeze your eyelids tighter, feeling blindly for the water stream to rinse Kolka\'s cum off, pushing him out of the way when you realize he\'s blocking it. "You ever consider going out with my foot up your ass?"');
    scene.text('"Hey, I\'m only asking! You never know, you might start a new trend!" You finish wiping the last of his cum off your face, grimacing when you see that it\'s now stuck to your hands instead. You turn, wiping it on your brother\'s arm. "Hey!"');
    scene.text('"Maybe you should try wearing it yourself," you retort sarcastically, ignoring his complaint. "\'You never know, you might start a new trend!\'"');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Only on Sundays', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/facial2.jpg');
    scene.text('"Sometimes. Only on Sundays though. White cum probably goes well with a white dress at Divine Liturgy."');
    scene.text('You hear him snicker and grin at him with closed eyes, flicking your tongue out to have a taste of the spunk slowly dripping down your face. You motion for Kolka to move aside and let you rinse your face off.');
    scene.text('"Good for spreading a reputation as a town slut too," he adds.');
    scene.text('Finishing rinsing off your face you reply, "Well it\'s not like they can complain about wearing my best makeup to church," causing you both to muffle laughter.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Why? Are you willing to help?', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/facial2.jpg');
    scene.text('"Why do you ask?" you ask, flicking your tongue out to catch a taste of cum, eyes still closed. "Did you want to help me put it on every morning?"');
    scene.text('You wipe the spunk out of your eyes to can see Kolka grinning at you. "Well of course I would! What kind of brother would I be if I wasn\'t willing to help my sister put on her best makeup?"');
    scene.text('"Mhm," you hum, sucking the tart semen off your fingers. "And you would be doing this for completely selfless reasons with no ulterior motive I\'m sure, especially not to get a free blowjob in the morning."');
    scene.text('You rinse the rest of the cum off your face as Kolka continues, "Of course I wouldn\'t be doing this <i>just</i> for blowjobs. I\'d hope to get a few morning fucks in too!" You smack his arm, rolling your eyes but smiling anyways.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'I only did this because I owed you one', handler: (st: GameState) => {
    scene.text('"I only did this because I owed you one," You say, wiping the cum from your eyes with your hands. Your eyes clear, you see a questioning look on his face. "Did you already forget? I promised I\'d let you cum on my face this time."');
    scene.text('"Oh! Right."');
    scene.text('"Yeah. Right. So instead of making fun of me, be grateful that you have a sister who keeps her promises."');
    scene.text('"But what if I\'m not making fun of you? Seriously, my cum on your face is one of my favorite looks for you!"');
    scene.text('You roll your eyes, but despite yourself you can\'t suppress a smile.');
    scene.text('"So you really don\'t like getting facials?" he asks.');
    scene.actions([
      { label: 'It\'s not all that bad', handler: (st: GameState) => {
    scene.text('"It\'s not all that bad I guess," you say. "It\'s just not something I want <i>every</i> time, you know?"');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'I prefer to swallow', handler: (st: GameState) => {
    scene.text('"Nah," you say. "I prefer to swallow."');
    scene.text('You grin lewdly at him and you can practically feel him drooling.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'I prefer creampies', handler: (st: GameState) => {
    scene.text('"Nah," you say. "I prefer it when people come inside me."');
    scene.text('You grin lewdly at him and you can practically feel him drooling.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('"What\'s it feel like? Having cum on your face like that?"');
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: 'Feels like a waste', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/facial2.jpg');
    scene.text('"Feels like a waste," you say, your tongue flicking about for any sperm it can find within its reach.');
    scene.text('Clearly confused, Kolka asks, "What do you mean?"');
    scene.text('Wiping your face with your hand, you give it a hard lick, savouring the flavour as you do. "You lose so much someone cums on your face. Falls off or gets stuck in your hair, hands aren\'t really good utensils for scooping up cum either. Much easier to get it straight from the tap if you know what I mean.');
    scene.text('Your brother\'s confusion continues until his eyes go wide with the realization that you\'re talking about enjoying the taste of semen. Almost as soon as the realization crosses his face, his eyes become obscured by confusion again.');
    scene.text('"But if you like eating cum so much, why did you let me cum on your face?"');
    scene.text('You give your hand another lick, sucking on the tips of your fingers where you scrapped the cum out of your eyebrow.');
    scene.text('"\'Cause I\'m a good sister," you smile at him.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      ]);
    }
    scene.actions([
      { label: 'Sticky', handler: (st: GameState) => {
    scene.text('"Sticky," you say, squeezing your eyes tight, feeling blindly for the water stream to rinse your face off. "To be honest, it\'s not that enjoyable for me."');
    scene.text('"Really?" Kolka helps you find the showerhead and you start scrubbing your face, annoyed at how it ends up sticking to your hands instead of just sliding down the drain. "If it\'s so annoying, why do girls you let people give them facials?"');
    scene.text('Your eyes finally clear of the viscous liquid, you look pointedly at Kolka. "Why do boys always want to cum on girls faces?" you ask, raising an eyebrow and before realizing there\'s still a wad of spunk still stuck in it.');
    scene.text('Kolka\'s lips twist as he sees your point. "Well… We don\'t <i>always</i> want to cum on your faces… Sometimes we want you to swallow instead." Your face finally clean, you shut off the water, rolling your eyes at your brother\'s justification.');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Why don\'t you find out?', handler: (st: GameState) => {
    scene.text('"Why don\'t you find out for yourself if you\'re so curious," you say, frowning and blindly searching for the water stream to rinse your face. "I\'m sure it wouldn\'t be too hard for you to cum all over yourself and wear it on your face."');
    scene.text('"Yeesh, I was just asking," Kolka complains.');
    scene.text('"Yeah, well I\'m just telling," you respond, grimacing as you wipe the sticky liquid from your eyes so you can find the showerhead.');
    scene.text('<i>Ugh. Maybe I should have just swallowed,</i> you think to yourself. <i>At least I wouldn\'t have to deal with this mess if I had.</i>');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Feels pretty good', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/facial2.jpg');
    scene.text('"Feels pretty good actually," you say cheerfully. "It\'s kind of like getting a face mask except it\'s hot and comes with a sense of flattery that your face is the place that someone wanted to blow their load."');
    scene.text('"Huh. Wouldn\'t have guessed that."');
    scene.text('Your tongue instinctively flicks out to catch a liquid you feel dribbling down your cheek and you feel an overwhelming lack of surprise when it tastes like cum.');
    scene.actions([
      { label: 'Better than having to swallow', handler: (st: GameState) => {
    scene.text('"Yech-!" you stick your tongue out in distaste of the bitter sperm. "I\'ll tell you what else, getting a facial is also a lot better because it means I don\'t have to swallow," you say, reaching blindly for the showerhead.');
    scene.text('"Oh. I thought girls were into that sort of thing. At least, a lot of the girls in porn swallow."');
    scene.text('Finding the showerhead at last, you start to rinse off your face, responding, "Yeah, well, anyone who says they like to swallow is either a liar or a slut." Your face washed clean, you blink a couple times to see Kolka grinning at you.');
    scene.text('"And what does that make you? A girl who lets her little brother cum on her face?"');
    scene.text('You pause and smile back at him before answering. "A good sister."');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'Tastes good too', handler: (st: GameState) => {
    scene.text('"Mmm… It tastes good too," you say appreciatively, licking your lips to find any more stray drops.');
    scene.text('"Oh! So girls really do like to eat cum! I always wondered if that was just something they did in pornos."');
    scene.text('You wipe your eyes so you can look at him and suck the spunk off your fingers.');
    scene.text('"Oh yeah. I wish all face masks were as edible as a facial. Though they could probably never be this satisfying."');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    ]);
  } },
      { label: 'I only did this because I owed you one', handler: (st: GameState) => {
    scene.text('"I only did this because I owed you one," You say, wiping the cum from your eyes with your hands. Your eyes clear, you see a questioning look on his face. "Did you already forget? I promised I\'d let you cum on my face this time."');
    scene.text('"Oh! Right… So you don\'t like having cum on your face like that?"');
    scene.actions([
      { label: 'Not really', handler: (st: GameState) => {
    scene.text('"Not really, no," you say, grimacing as some drips into your eye before you find the showerhead.');
    scene.text('"So… Why do you let me do it? Just because you promised?"');
    scene.text('Finally rinsing your face clean, you turn to face him, meeting his eye.');
    scene.text('"\'Cause I\'m a good sister."');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
      { label: 'It\'s just messy', handler: (st: GameState) => {
    scene.text('"It\'s not like it actually feels that bad," you say, blinking to keep it out of your eyes and reaching for the showerhead. "It\'s just really messy. Can be hard to clean out of your hair sometimes."');
    scene.text('"Ahh. I see. So… Why did you let me do it today? Just because you promised? Cause we\'re in the shower and it\'s easier to clean?"');
    scene.text('You turn towards him, meeting his eye, his cum still coating your face.');
    scene.text('"Cause I\'m a good sister."');
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerCreampie(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/shower/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
  scene.text('You don\'t respond verbally but pick up the pace, slapping your ass back against Kolka\'s cock until he grabs you tight and you can feel his cock pulsating, spurts of cum pouring out inside you.');
  qspCall(s, 'arousal', 'vaginal', 1, 'incest');
  qspCall(s, 'cum_call', '', '', 'A34', 1);
  qspCall(s, 'stat', '');
  scene.text('Looking back at Kolka with a self satisfied smirk, you slip off his cock, feeling cum gush from your pussy and spatter on the bath tub floor.');
  qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  if ((!((s as any).succubusflag ?? 0))) {
    if (((s as any).knowpreg ?? 0) === 1  ||  ((s as any).thinkpreg ?? 0) === 1) {
      scene.text('You chuckle to yourself, "Well, at least I can\'t get any more pregnant than I already am!"');
    } else {
      if (((s as any).birth_control ?? 0)?.['kolka_knows'] === 1) {
        scene.text('"I love having a sister who\'s on birth control," he grins, watching another glob of cum dribble out of you.');
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          ((s as any).birth_control ?? {})['kolka_knows'] = 1;
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" he says with wide eyes. "Is it okay that I came inside you ...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}!" he says with wide eyes. "Is it okay that I came inside you like that? What if you get pregnant?"`);
          scene.text('"Don\'t worry about it," you smile. "I\'m on birth control. I could take a thousand creampies from you, I won\'t get pregnant."');
          scene.text('Kolka\'s eyes get even wider and his cock already seems to be hardening up again.');
          scene.text('<i>Whoops,</i> you think to yourself. <i>I wonder if it\'s going to come back to bite me that I told him that…</i>');
        } else {
          if (((s as any).mesec ?? 0) > 0) {
            scene.text('"Happy?" you ask him. He nods back at you with a self-satisfied grin. "Just feel lucky that I\'m on my period. I might not have let you do that otherwise."');
          } else {
            scene.text('You watch as another glob of cum dribbles from your pussy, plopping onto the tub floor. <i>I need to buy a morning-after pill from the pharmacy. What if I get pregnant?</i>');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerForcedCreampie(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/shower/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
  qspCall(s, 'cum_call', '', '', 'A34', 1);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    qspCall(s, 'arousal', 'vaginal', 1, 'incest');
  } else {
    scene.text('Smiling mischievously, you suddenly speed up instead of pulling out, causing your brother to erupt inside you. He groans and you curl your toes in pleasure, feeling his cum spurting deep inside you. It\'s not enough to bring you to orgasm, but it still feels good. You tighten up on him and work your hips a little more, trying to milk him for a couple more shots. Finally, Kolka pulls away and his cock slips from inside you, cum bursting out of your pussy like an uncorked champagne bottle.');
  }
  if (((s as any).brothercumchoice ?? 0) === 3) {
    scene.text('Kolka steps back, staring as he watches his spunk drip from your pussy. "Why\'d you do that? I wanted to give you a facial."');
  } else {
    if (((s as any).brothercumchoice ?? 0) === 4) {
      scene.text('Kolka steps back, staring as he watches his spunk drip from your pussy. "Why\'d you do that? I wanted to cum in your mouth."');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'And I wanted a creampie (argue)', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"And I wanted a creampie! Sorry Kolka, but my vote outweighs yours."');
    scene.text('"And why\'s that?!"');
    scene.text('"Because."');
    scene.text('"Because what?"');
    scene.text('"Because I\'m a girl, I\'m a girl who\'s your older sister, and I\'m a girl who\'s your older sister who\'s letting you fuck her! And if it weren\'t for me, then you\'d be on a date with Pamela Handerson instead," you say, making a jerking motion with your hand. "You should be grateful to be getting anything at all, let alone deciding where you get to cum on me."');
    scene.text('"But that\'s not fair! So what I want doesn\'t count for anything?"');
    scene.text('"Nope! But I get to decide if I\'m feeling generous."');
    scene.text('With Kolka\'s hands balled into fists at his side and your hands on your hips, the two of you glare at each other, scowling. This turned into a much bigger argument than you meant it to.');
    if ((!((s as any).succubusflag ?? 0))) {
      if (((s as any).knowpreg ?? 0) === 1  ||  ((s as any).thinkpreg ?? 0) === 1) {
        scene.text('You chuckle to yourself. "Well, at least I can\'t get any more pregnant than I already am!"');
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  ||  ((s as any).tabletkishot ?? 0) >= 1) {
          scene.text('<i>Goddamn it,</i> you think, looking down to watch another glob of cum drips from your snatch. <i>Only my idiot brother could ruin a perfectly good creampie like this.</i>');
          // TODO-QSP: dynamic text: <i>At least '+iif(birth_control['implant_status'] > 1, 'I have a birth control i...
          scene.text('<i>At least \'+iif(birth_control[\'implant_status\'] > 1, \'I have a birth control implant\', \'I\'m on birth control\')+\'…</i>');
        } else {
          if (((s as any).mesec ?? 0) > 0) {
            scene.text('<i>Goddamn it,</i> you think, looking down to watch another glob of cum drips from your snatch. <i>Only my idiot brother could ruin a perfectly good creampie like this.</i>');
            scene.text('<i>At least I don\'t have to worry about getting pregnant on my period… right…?</i>');
          } else {
            scene.text('<i>Goddamn it,</i> you think, looking down to watch another glob of cum drips from your snatch. <i>Fuck. I shouldn\'t have done this anyways. This gets me pregnant?</i>');
          }
        }
      }
    }
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    { label: 'It felt too good', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"I\'m sorry Kolka! Your cock just felt so good, I couldn\'t stop! You can\'t be mad at me for being too addicted to your cock to stop, can you?" You kneel down, trying to apologize by cleaning him up with your tongue.');
    if (((s as any).brothercumchoice ?? 0) === 3) {
      scene.text('He grumbles a bit but you can tell that he\'s not mad at you. "I guess I can\'t be mad about that… But next time I ask, I want to cum on your face!"');
    } else {
      if (((s as any).brothercumchoice ?? 0) === 4) {
        scene.text('He grumbles a bit but you can tell that he\'s not mad at you. "I guess I can\'t be mad about that… But next time I ask, I want to cum in your mouth! And you better swallow it!"');
      }
    }
    scene.text('"Okay, it\'s a promise," you say, standing back up and kissing him on the cheek. "So long as I can stop myself that is."');
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  ||  ((s as any).tabletkishot ?? 0) >= 1) {
      scene.text('<i>Fuck, that felt good…</i> you think to yourself, looking down to watch another glob dribbles out of you with satisfaction.');
      // TODO-QSP: dynamic text: <i>It's a good thing '+iif(birth_control['implant_status'] > 1, 'I have a birth ...
      scene.text('<i>It\'s a good thing \'+iif(birth_control[\'implant_status\'] > 1, \'I have a birth control implant\', \'I\'m on birth control\')+\'…</i>');
    } else {
      if (((s as any).mesec ?? 0) > 0) {
        scene.text('<i>Fuck, that felt good…</i> you think to yourself as another glob dribbles out, plopping onto the tub floor.');
        scene.text('<i>It\'s a good thing I can\'t get pregnant when I\'m on my period… right…?</i>');
      } else {
        scene.text('<i>Shit… I probably should have had more self control…</i> you think to yourself, watching another glob of cum dribble from your pussy. <i>What if this gets me pregnant?</i>');
      }
    }
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
    { label: 'Too much mess', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('"Too messy," you say. "Sorry Kolka, but I don\'t feel like cleaning that off my face. You understand don\'t you?"');
    scene.text('"Yeah I guess…"');
    if ((!((s as any).succubusflag ?? 0))) {
      if (((s as any).knowpreg ?? 0) === 1  ||  ((s as any).thinkpreg ?? 0) === 1) {
        scene.text('You chuckle to yourself. "Well, at least I can\'t get any more pregnant than I already am!"');
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  ||  ((s as any).tabletkishot ?? 0) >= 1) {
          scene.text('<i>Fuck, that feels good…</i> you think to yourself, looking down to watch another glob dribbles out of you with satisfaction.');
          // TODO-QSP: dynamic text: <i>It's a good thing '+iif(birth_control['implant_status'] > 1, 'I have a birth ...
          scene.text('<i>It\'s a good thing \'+iif(birth_control[\'implant_status\'] > 1, \'I have a birth control implant\', \'I\'m on birth control\')+\'…</i>');
        } else {
          if (((s as any).mesec ?? 0) > 0) {
            scene.text('<i>Fuck, that feels good…</i> you think to yourself as another glob dribbles out, plopping onto the tub floor.');
            scene.text('<i>It\'s a good thing I can\'t get pregnant when I\'m on my period… right…?</i>');
          } else {
            scene.text('<i>Shit…</i> Another glob of cum dribbles from your pussy, plopping onto the tub floor. <i>Maybe I should have let him cum on my face after all… What if I get pregnant?</i>');
          }
        }
      }
    }
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
  ]);
  scene.build();
}

function enterShowerFillMeUp(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/shower/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
  qspCall(s, 'cum_call', '', '', 'A34', 1);
  qspCall(s, 'stat', '');
  scene.text('"Yes! Yes!" you cry out. "Fill me up!"');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    ((s as any).brotherQW ?? {})['shower_fuck_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'arousal', 'vaginal', 1, 'incest');
  } else {
    scene.text('Your cries push him over the edge and Kolka can\'t hold back any longer. He groans and pulls you tight against him. His cock plunges deep and you feel his cum spurting deep inside you. You bite your lip and curl your toes, enjoying the sensation even if it doesn\'t bring you to orgasm. Eventually his cock stops pulsating and you feel him slide out of you.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Feel his cum', handler: (st: GameState) => {
    scene.img(`images/shared/sex/cum/vagcreampie/doggy${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('Pressing your face against the cool wall, you feel Kolka\'s cum drip from your pussy, and look back at him.');
    if ((!((s as any).succubusflag ?? 0))) {
      if (((s as any).knowpreg ?? 0) === 1  ||  ((s as any).thinkpreg ?? 0) === 1) {
      } else {
        if (((s as any).birth_control ?? 0)?.['kolka_knows'] === 1) {
          scene.text('"I love having a sister who\'s on birth control," he grins, watching another glob of cum dribble out of you.');
          scene.text('"Yeah, it was good for me too, thanks," you roll your eyes before straightening up.');
        } else {
          if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
            ((s as any).birth_control ?? {})['kolka_knows'] = 1;
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" he says with wide eyes. "Is it okay that I came inside you ...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}!" he says with wide eyes. "Is it okay that I came inside you like that? What if you get pregnant?"`);
            scene.text('"Don\'t worry about it," you smile. "I\'m on birth control. I could take a thousand creampies from you, I won\'t get pregnant."');
            scene.text('Kolka\'s eyes get even wider and his cock already seems to be hardening up again.');
            scene.text('<i>Whoops,</i> you think to yourself. <i>I wonder if it\'s going to come back to bite me that I told him that…</i>');
          } else {
            if (((s as any).mesec ?? 0) > 0) {
              scene.text('"Happy?" you faintly smile at him. He nods back at you with a self-satisfied grin. "Just feel lucky that I\'m on my period. I might not have let you do that otherwise."');
            } else {
              scene.text('He has a grin on his face while he watches the cum spilling out of you.');
              scene.text('<i>Huh…</i> you think, basking in the afterglow. <i>I\'ll have to buy a morning-after pill from the pharmacy…</i>');
            }
          }
        }
      }
    }
    qspCall(s, 'brother_shower_sex', 'ending_route_routine');
  } },
  ]);
  scene.build();
}

function enterEndingRouteRoutine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  if (((s as any).brotherQW ?? 0)?.['shower_fuck_day'] === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherShowerFuckEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  ((s as any).brotherQW ?? {})['shower_times'] = (((s as any).brotherQW ?? {})['shower_times'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).brotherQW ?? 0)?.['club'] === 1  &&  ((s as any).brotherQW ?? 0)?.['virgin_talk'] === 0) {
    ((s as any).brotherQW ?? {})['virgin_talk'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    scene.text('Thoroughly satisfied with the dicking you received from your brother, you lean into him letting him feel you up from behind.');
    scene.text('"So," you ask, nonchalantly grabbing his cock and working it gently. "Did you enjoy losing your virginity? Was it everything your teenage brain dreamed of?"');
    scene.text('"Everything and more," he responds, gently pinching your nipples. You to moan and squeeze his dick in response. "But more than that, I\'m happy to be part of the club."');
    scene.actions([
      { label: 'I\'m glad you\'re in the club too', handler: (st: GameState) => {
    scene.text('"I\'m glad you\'re in the club too," you smile back at him. "Seriously, I meant it when I said I don\'t get around much. You\'re not just another boy who\'s fucked me Kolka. You\'re my brother. You\'re special."');
    scene.text('He hesitates before he asks his next question. "Does that mean that I\'m going to be the only \'active\' member of the club? I mean… does this mean that I\'m going to be the only one you have sex with?"');
    scene.actions([
      { label: 'No, it means we help each other out', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 9) {
      ((s as any).brotherQW ?? {})['Sex'] = 9;
    }
    scene.text('"Well…" You think for a moment. "I\'d still like to get a boyfriend, maybe get married some day. And I like fucking you, but you\'re still just my brother to me. I can\'t really see you any other way. Besides, I\'m sure that you\'d like to get a real girlfriend someday. Not just be that boy who\'s so pathetic because the only poon he can get is from his sister. Maybe we can just take care of each other? So we\'d still see other people and stuff, but we can always fuck each other\'s brains out whenever we need some relief. How does that sound?"');
    scene.text('"Sounds good," he grins at you. "Besides, you can\'t be the only girl I have sex with. I need to fuck a real virgin some day. Not some loose slut throwing freebies to her brother."');
    scene.text('You smack his arm but smile anyways. "Yeah, but I still have <i>your</i> virginity. No matter how many other girls\' you take, yours will always be mine!"');
    scene.text('The two of you banter back and forth for a little while longer before you realize someone might notice that your brother is missing and become suspicious. You quickly shut off the water and dry him off, gathering Kolka\'s clothes and shooing him into the hallway.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
      { label: 'Yes, I love you', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 10) {
      ((s as any).brotherQW ?? {})['Sex'] = 10;
    }
    scene.text('His question strikes you by surprise. Even more surprisingly, you hear yourself whispering.');
    scene.text('"Yes."');
    scene.text('"You\'re the only one for Kolka. You\'re my brother and I love you like a brother but… I also feel something more for you. I want to be with you. I love you."');
    scene.text('He seems taken aback by your answer and thinks about it for a minute.');
    scene.text('"Yeah. I love you too sis," he says, gently kissing you. He seems happy but a little wistful. "I wish I could have taken your virginity too though."');
    scene.text('You quickly try to console him. "I\'m sorry Kolka! I\'m sorry I couldn\'t save it for you. But I\'ll make it up to you! Because you\'re going to get to far more of me than the person who took it. You\'ll have me forever…"');
    scene.text('The sit under the water together for a little while longer before you realize someone might notice that your brother is missing and become suspicious. You quickly shut off the water and dry him off, gathering Kolka\'s clothes and shooing him into the hallway.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
    ]);
  } },
      { label: 'Glad to have a new member (slut)', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    scene.text('"Oh yeah, I\'m glad to have a new member. You can never have enough members inside y-, I mean, in the club," you say, winking at him mischievously.');
    scene.text('"Slut."');
    scene.text('"Cocktoy."');
    scene.text('"Cum dump."');
    scene.text('"Dicking machine."');
    scene.text('"Cocksleeve."');
    scene.text('The two of you banter back and forth for a little while longer before you realize someone might notice that your brother is missing and become suspicious. You quickly shut off the water and dry him off, gathering Kolka\'s clothes and shooing him into the hallway.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
    ]);
  } else {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('Your teenage fuck session finished and bodies relatively clean -despite your best attempts to undo the effects of your recent washing- the two of you rinse yourselves off one last time to ensure no cum or other suspicious bodily fluids remain.');
    ((s as any).brotherQW ?? {})['know_not_virgin'] = 1;
    if (((s as any).brotherQW ?? 0)?.['fuck'] === 1) {
      if (((s as any).brotherQW ?? 0)?.['virgin_lie'] === 0) {
        if (((s as any).brotherQW ?? 0)?.['virgin_truth'] === 1) {
          ((s as any).brotherQW ?? {})['virgin_think_took'] = 1;
        } else {
          ((s as any).brotherQW ?? {})['virgin_think_took'] = 0;
        }
      } else {
        if (((s as any).brotherQW ?? 0)?.['virgin_lie'] < 3) {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. Can I ask you something? I've been wondering…"
          scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}. Can I ask you something? I've been wondering…"`);
          scene.text('"Hmm? What is it?"');
          scene.text('"When I put it in before, I thought I felt something, some kind of resistance. When I pushed past it I heard you make a sound, like you were in pain. Was… was that your hymen?"');
          scene.text('You freeze in place suddenly, not knowing what to do.');
          scene.text('"Did you lie to me about not being a virgin?"');
          scene.text('You turn towards him, biting your lip and not saying anything. The guilty look on your face gives everything away.');
          // TODO-QSP: dynamic text: "Why did you lie about that <<$pcs_nickname>>?"
          scene.text(`"Why did you lie about that ${((s as any).pcs_nickname ?? 0)}?"`);
          ((s as any).brotherQW ?? {})['virgin_think_took'] = 0;
          scene.actions([
            { label: 'I don\'t know', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 25);
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    if (((s as any).brotherQW ?? 0)?.['virgin_lie'] === 1) {
      scene.text('"I… I don\'t know. I just panicked I guess. Thought that maybe it might be better for you if you thought your big sister was more experienced and had been with other boys before." You look back at him apprehensively, worried about what he\'ll say or do next now that you\'ve admitted the truth.');
    } else {
      if (((s as any).brotherQW ?? 0)?.['virgin_lie'] === 2) {
        scene.text('"I… I don\'t know. I just panicked I guess. Thought that maybe it might be better for you if you thought your big sister was a big slut who fucked all the boys in town." You look back at him apprehensively, worried about what he\'ll say or do next now that you\'ve admitted the truth.');
      }
    }
    scene.text('Your brother regards you for a moment. And then he smiles.');
    scene.text('"Dummy."');
    scene.text('You shy away. And then blink a few times registering what you just heard.');
    scene.text('"What…?"');
    // TODO-QSP: dynamic text: "I called you a dummy <<$pcs_nickname>>. How could you think that I'd like you m...
    scene.text(`"I called you a dummy ${((s as any).pcs_nickname ?? 0)}. How could you think that I'd like you more if you were fucking other guys? You know that most guys like to fuck virgins, right?"`);
    scene.text('"They do?"');
    scene.text('"Yes, we do! Anyone can fuck a slut. That\'s what makes them sluts. But a girl is only a virgin once. And besides…" His grin grows wider. "This means that we lost our virginities together. I have yours and you have mine. And… I know we\'re siblings and stuff… I know that some people think that\'s wrong, but you being my sister just makes this feel more right to me. I feel closer to you now. How many other brothers and sisters can say they had their first time together? I\'m glad you were a virgin! And I\'m glad we got to share that together…"');
    scene.text('He trails off and you eye him for a moment before you break into a smile, wrapping him a tight hug.');
    scene.text('"Aww! You\'re actually quite the romantic, little brother!"');
    scene.text('"Pfft~! It\'s not like I\'m gonna marry you or anything like that. You\'re still my sister. And I\'m still gonna fuck lots of other girls once they start looking my way! But…" he trails off again.');
    scene.text('"… now we have a bond that other siblings don\'t have," you finish. "And no matter what else happens, we\'ll carry each other\'s virginities for the rest of our lives." He nods.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['Sex'] = 9;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    scene.text('You stand together for a few more minutes, holding each other under the water of the shower, not saying anything. Finally, you break the silence.');
    scene.text('"Well, if you\'re going to be trying to fuck other girls, you can\'t be mad at me when I fuck other boys," you smirk at him.');
    scene.text('"Go ahead! I won\'t need you! In a couple years, I\'ll practically be drowning in pussy!"');
    scene.text('"Yeah, right! That sounds about as likely as your dick growing 20 centimeters overnight! I\'m more likely to find you sitting at home with blue balls, begging me for blowjobs."');
    scene.text('"You\'ll see! Girls will be lining up the block for a turn to ride my magnificent cock!"');
    scene.actions([
      { label: 'And what if I want a turn?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    scene.text('"And if I want a turn? Will I have to wait in line like the rest?"');
    scene.text('He opens his mouth and pauses, suddenly realizing the implications of your turn in the flow of banter.');
    scene.text('"… no…" he mutters. "… you won\'t have to wait… sisters get special dick privileges."');
    scene.text('Kolka looks away, his cheeks a little redder than they were before, an erection hardening and rubbing up against your thighs. You smile at him. He can be such a sweet boy sometimes.');
    scene.text('"Good! And <i>you</i> should know, little brothers get an all access pussy pass too," you say, leaning in to give him a light kiss on the lips.');
    scene.text('"… even if you have a boyfriend?" he asks hesitantly.');
    scene.text('"Even if I have a boyfriend," you insist. "After all, my relationship with my brother is special. He took my virginity!"');
    scene.text('The conversation winding down, the two of you remember that you have to get your brother out of here, lest the rest of your family grow suspicious of his absence. Leaving the shower running, you quickly help him towel off. Afterwards, he collects his clothes, gives you another quick kiss on the cheek, and slips out the door into the hallway. Your brother gone, now there\'s nothing left to do but turn off the water and dry yourself off.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. Can I ask you something? I've been wondering…"
          scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}. Can I ask you something? I've been wondering…"`);
          scene.text('"Hmm? What is it?"');
          if (((s as any).pcs_vag ?? 0) >= 25) {
            ((s as any).brotherQW ?? {})['virgin_think_took'] = 0;
            scene.text('"If it was your first time, how come you\'re so loose?"');
            scene.text('<i>Shit!</i>');
            scene.text('"I always heard that virgins are supposed to be really tight for their first time, but you weren\'t. I mean, it still felt really good but I slid in so easily. How come?"');
            scene.text('Unable to come up with a suitable explanation, you decide to retaliate with false offense.');
            scene.text('"What are you trying to say about me? Huh? That I\'m a slut? That I would lie to you about giving you my virginity? How dare you!"');
            scene.text('Kolka shies away at your sudden burst of emotion.');
            scene.text('"I\'m sorry! I jus-"');
            scene.text('"Just nothing! I can\'t believe I just gave my virginity to such an ungrateful brat!"');
            scene.actions([
              { label: 'Kick him out to cover up your lie', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    scene.text('Not knowing what else to do, you yank open the shower curtain and shove Kolka towards the door.');
    scene.text('"Get out."');
    scene.text('"But I-!"');
    scene.text('"Out!"');
    scene.text('Still dripping wet with his clothes in his arms, you shove your brother into the hallway naked. If your parents ask about it, you\'ll just tell them he was peeping on you and you sprayed him with the showerhead.');
    scene.text('Your brother out of the room you lean back onto the door and close your eyes, feeling bad for what you just did. Maybe you shouldn\'t have lied to him about that after all…');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
            ]);
          } else {
            scene.text('"If that was your first time, how come you didn\'t have a hymen? Isn\'t that supposed to tear the first time a girl has sex? I didn\'t feel it when I put my dick inside you."');
            scene.text('<i>Shit!</i>');
            scene.text('"Well, uhh, I\'m definitely a virgin! I mean, I was until you fucked me for the first time, uhh, today!" you stammer, hoping your furious blush is covered up by the heat of the shower. "You definitely tore my hymen! It, uhh, it really hurt! Maybe you just didn\'t notice when you did! I sure noticed! Ahaha, haha, ha…"');
            scene.text('"Hmm. Well, you <i>were</i> pretty tight. You\'re probably right and I just didn\'t feel it."');
            scene.text('You sigh quietly in relief, your hasty lies about your chastity bought by your brother. That was a close one…');
            ((s as any).brotherQW ?? {})['virgin_think_took'] = 1;
            scene.actions([
              { label: 'Finish showering', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    scene.text('Stepping out of the shower, you grab a towel to personally help your brother dry off, paying special attention to his cock and balls. Once finished, you stand back to smirk at him, you yourself still naked and dripping wet.');
    scene.text('"Well? Did you have fun showering with your sister??"');
    scene.text('Kolka does nothing but grin at you in response.');
    scene.actions([
      { label: 'Ruffle his hair and send him on his way', handler: (st: GameState) => {
    scene.text('"Well, glad you enjoyed yourself," you say, ruffling his hair, smiling when he cringes back in response to the child-like treatment. "See you later bro."');
    scene.text('He nods back at you, picking up his clothes before peeking into the hallway to make sure no one is there and slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
      { label: 'Kiss him goodbye (just a peck)', handler: (st: GameState) => {
    scene.text('You lean in and peck Kolka on the lips with a quick kiss.');
    scene.text('"See you next time," you smile.');
    scene.text('He smiles back at you and picks up his clothes before peeking into the hallway to make sure no one is there and slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
      { label: 'Kiss him goodbye (intimate)', handler: (st: GameState) => {
    scene.text('You lean in to give your brother an intimate kiss, then stepping back to meet his eyes.');
    scene.text('"See you later," you whisper.');
    scene.text('He smiles back at you and picks up his clothes before peeking into the hallway to make sure no one is there and slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
      { label: 'Until next time (grab his cock)', handler: (st: GameState) => {
    scene.text('A sly smile on your face, you step forward to grab him by the cock.');
    scene.text('"Until next time little brother," you murmur into his ear, giving his dick a hard squeeze. Then, you slap his ass and push him towards the door. "Now, shoo! Before someone catches us in here together."');
    scene.text('Startled, he does as you say, picking up his clothes and peeking into the hallway to make sure no one is there before slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
    ]);
  } },
            ]);
          }
        }
      }
    }
    if (((s as any).brotherQW ?? 0)?.['virgin_lie'] === 0  ||  ((s as any).brotherQW ?? 0)?.['fuck'] >= 2) {
      scene.actions([
        { label: 'Did you have fun?', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    scene.text('Thoroughly satisfied with the dicking you received, you grab a towel to personally help your brother dry off, paying special attention to his cock and balls. Once finished, you stand back to smirk at him, you yourself still naked and dripping wet.');
    scene.text('"Well? Did you have fun showering with your sister??"');
    scene.text('Kolka does nothing but grin at you in response.');
    scene.actions([
      { label: 'Ruffle his hair and send him on his way', handler: (st: GameState) => {
    scene.text('"Well, glad you enjoyed yourself," you say, ruffling his hair, smiling when he cringes back in response to the child-like treatment. "See you later bro."');
    scene.text('He nods back at you, picking up his clothes before peeking into the hallway to make sure no one is there and slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
      { label: 'Kiss him goodbye', handler: (st: GameState) => {
    scene.text('You lean in to give your brother an intimate kiss, then stepping back to meet his eyes.');
    scene.text('"See you later," you whisper.');
    scene.text('He smiles back at you and picks up his clothes before peeking into the hallway to make sure no one is there and slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
      { label: 'Until next time (grab his cock)', handler: (st: GameState) => {
    scene.text('A sly smile on your face, you step forward to grab him by the cock.');
    scene.text('"Until next time little brother," you murmur into his ear, giving his dick a hard squeeze. Then, you slap his ass and push him towards the door. "Now, shoo! Before someone catches us in here together."');
    scene.text('Startled, he does as you say, picking up his clothes and peeking into the hallway to make sure no one is there before slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
    ]);
  } },
        { label: 'Kick him out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    if (((s as any).brotherQW ?? 0)?.['virgin_lie'] !== 2  ||  ((s as any).brotherQW ?? 0)?.['fuck'] >= 2) {
      scene.text('Thoroughly annoyed with Kolka, you shove him towards the door.');
    } else {
      if (((s as any).brotherQW ?? 0)?.['virgin_lie'] === 2) {
        scene.text('Not knowing what else to do, you yank open the shower curtain and shove Kolka towards the door.');
        scene.text('"Get out."');
        scene.text('"But I-!"');
        scene.text('"Out!"');
        scene.text('Still dripping wet with his clothes in his arms, you shove your brother into the hallway naked. If your parents ask about it, you\'ll just tell them he was peeping on you and you sprayed him with the showerhead.');
        scene.text('<br>Your brother out of the room you lean back onto the door and close your eyes, feeling bad for what you just did. Maybe you shouldn\'t have lied to him about that after all…');
      }
    }
    if (((s as any).pcs_horny ?? 0) > 70  &&  (((s as any).brotherQW ?? 0)?.['virgin_lie'] !== 2  ||  ((s as any).brotherQW ?? 0)?.['fuck'] >= 2)) {
      scene.text('And fuck! You\'re still so goddamn horny!');
    }
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherShowerFinish(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish_end');
  } },
  ]);
  scene.build();
}

function enterBrotherShowerFinishdryoff(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish drying off', handler: (st: GameState) => {
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish_end');
  } },
  ]);
  scene.build();
}

function enterBrotherShowerFinishEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).mirror_steam = ((s as any).hour ?? 0);
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sex_menu':
      enterSexMenu(s, scene);
      break;
    case 'mutual_masturbation':
      enterMutualMasturbation(s, scene);
      break;
    case 'brother_shower_bj':
      enterBrotherShowerBj(s, scene);
      break;
    case 'brother_shower_fuck_first':
      enterBrotherShowerFuckFirst(s, scene);
      break;
    case 'brother_shower_fuck_first2':
      enterBrotherShowerFuckFirst2(s, scene);
      break;
    case 'brother_shower_fuck_first3':
      enterBrotherShowerFuckFirst3(s, scene);
      break;
    case 'brother_shower_fuck':
      enterBrotherShowerFuck(s, scene);
      break;
    case 'brother_shower_anal':
      enterBrotherShowerAnal(s, scene);
      break;
    case 'brother_shower_anal_vagv_analv':
      enterBrotherShowerAnalVagvAnalv(s, scene);
      break;
    case 'brother_shower_anal_vagnv_analv':
      enterBrotherShowerAnalVagnvAnalv(s, scene);
      break;
    case 'brother_shower_anal_vagv_analnv':
      enterBrotherShowerAnalVagvAnalnv(s, scene);
      break;
    case 'brother_shower_anal_vagnv_analnv':
      enterBrotherShowerAnalVagnvAnalnv(s, scene);
      break;
    case 'brother_fuck_cum':
      enterBrotherFuckCum(s, scene);
      break;
    case 'shower_swallow':
      enterShowerSwallow(s, scene);
      break;
    case 'shower_facial':
      enterShowerFacial(s, scene);
      break;
    case 'shower_creampie':
      enterShowerCreampie(s, scene);
      break;
    case 'shower_forced_creampie':
      enterShowerForcedCreampie(s, scene);
      break;
    case 'shower_fill_me_up':
      enterShowerFillMeUp(s, scene);
      break;
    case 'ending_route_routine':
      enterEndingRouteRoutine(s, scene);
      break;
    case 'brother_shower_fuck_end':
      enterBrotherShowerFuckEnd(s, scene);
      break;
    case 'brother_shower_finish':
      enterBrotherShowerFinish(s, scene);
      break;
    case 'brother_shower_finishdryoff':
      enterBrotherShowerFinishdryoff(s, scene);
      break;
    case 'brother_shower_finish_end':
      enterBrotherShowerFinishEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const brother_shower_sex: LocationDef = {
  name: 'brother_shower_sex',
  title: 'Kneeling down, you take Kolka\'s freshly washed cock and push',
  region: 'other',
  enter: enter,
};
