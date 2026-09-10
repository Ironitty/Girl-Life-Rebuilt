import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSexMenu(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Blow him', goto: ['brother_shower_sex', 'brother_shower_bj'] },
    { label: 'Fuck him', goto: ['brother_shower_sex', 'brother_shower_fuck'] },
    { label: 'Offer him your ass', goto: ['brother_shower_sex', 'brother_shower_anal'] },
  ]);
  scene.build();
}

function enterMutualMasturbation(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/shower/fun2.mp4');
  scene.build();
}

function enterBrotherShowerBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A34');
  qspCall(s, 'npc_relationship', 'modify', 'A34', 3);
  (s as any).brotherQW['bj'] = ((s as any).brotherQW['bj'] ?? 0) + (1);
  (s as any).brotherQW['shower_fuck_day'] = ((s as any).daystart ?? 0);
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
    (s as any).brotherQW['Sex'] = 6;
  }
  scene.img('images/shared/home/bathroom/showerbj.mp4');
  scene.text('Kneeling down, you take Kolka\'s freshly washed cock and push it between your lips, sucking gently. Several minutes go by while you to continue blowing your brother, going slowly up and down his length, the sound of water raining down from the showerhead muting the soft slurping sounds coming from your mouth.');
  qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 3) + 3, 'incest');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 5) + 1, 'incest');
    if (Math.floor(Math.random() * 2) + 0 === 0) {
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
    (s as any).brotherQW['Sex'] = 7;
  }
  scene.img('images/shared/sex/shower/doggy_enter2.mp4');
  scene.text('You lean back into your brother, gripping his member and jerking it a few times to make sure he\'s still hard enough for what you want to do next. You pull on him, carefully guiding his cock until you can feel the tip pressing against the entrance of pussy.');
  if (((s as any).brotherQW ?? 0)?.['know_not_virgin'] === 1) {
    (s as any).brotherQW['fuck'] = ((s as any).brotherQW['fuck'] ?? 0) + (1);
    // TODO-QSP: dynamic text: "I was wondering if you were going to let me join the "Boys Who Fuck <<$pcs_nick...
    scene.text(`"I was wondering if you were going to let me join the "Boys Who Fuck ${((s as any).pcs_nickname ?? 0)}" Club," he says, grin radiating from behind you.`);
    scene.actions([
      { label: 'It\'s pretty exclusive', handler: (st: GameState) => {
    (s as any).brotherQW['club'] = 1;
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
    (s as any).brotherQW['club'] = 1;
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
    (s as any).brotherQW['fuck'] = ((s as any).brotherQW['fuck'] ?? 0) + (1);
    scene.text('You feel Kolka tense up behind you and he hesitates.');
    scene.text('"Is this…? Are you…?"');
    scene.text('"My first time? A virgin?"');
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.actions([
        { label: 'Yes, I\'m a virgin', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 20);
    (s as any).brotherQW['virgin_lie'] = 0;
    (s as any).brotherQW['virgin_truth'] = 1;
    scene.text('"Yeah. I am." You smile at him. "I\'m giving my first time to you little brother."');
    scene.text('Still smiling, you push your ass towards him and impale yourself on his cock.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first2'] },
    ]);
  } },
        { label: 'No, I\'m not (lie)', handler: (st: GameState) => {
    (s as any).brotherQW['virgin_lie'] = 1;
    (s as any).brotherQW['virgin_truth'] = 0;
    scene.text('"Nope!" You smile at him. "Sorry to disappoint, but I lost my virginity a while back little brother."');
    scene.text('You\'re not really sure why you\'re lying to him about this, but there\'s no time to think about that as you push your ass towards him and impale yourself on his cock.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first2'] },
    ]);
  } },
        { label: 'No, I\'m a slut (lie)', handler: (st: GameState) => {
    (s as any).brotherQW['virgin_lie'] = 2;
    (s as any).brotherQW['virgin_truth'] = 0;
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
    (s as any).brotherQW['virgin_lie'] = 0;
    (s as any).brotherQW['virgin_truth'] = 2;
    (s as any).brotherQW['know_not_virgin'] = 1;
    scene.text('"Nope!" You smile at him. "Sorry to disappoint, but I lost my virginity a while back little brother."');
    scene.text('With one more quick jerk on his cock for good measure and push your ass towards him, swallowing his length with your pussy.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first2'] },
    ]);
  } },
        { label: 'No, I\'m a slut', handler: (st: GameState) => {
    (s as any).brotherQW['virgin_lie'] = 0;
    (s as any).brotherQW['virgin_truth'] = 3;
    (s as any).brotherQW['know_not_virgin'] = 1;
    scene.text('"Nope!" You smile at him. "Sorry to disappoint, but yours is just going to be one more of many different dicks that have been inside my pussy little brother."');
    scene.text('You\'re not really sure why you\'re telling him about this, especially with the implication that you\'re a huge slut, but there\'s no time to think about that as you thrust your hips backward to take his entire length inside you in one go. Your brother gasps at the rush of having his cock entirely swallowed by your pussy, grabbing you by the hips to steady himself.');
    scene.actions([
      { label: 'Continue', goto: ['brother_shower_sex', 'brother_shower_fuck_first3'] },
    ]);
  } },
        { label: 'Yes, you\'re my first time (lie)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 10);
    (s as any).brotherQW['virgin_lie'] = 3;
    (s as any).brotherQW['virgin_truth'] = 0;
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
  scene.build();
}

function enterBrotherShowerFuckFirst2(s: GameState, scene: SceneBuilder): void {
  (s as any).eff_contra = (((s as any).argc ?? 0) > 1) ? (qspUntranslated(s, "ARGS[1]", { location: "brother_shower_sex" })) : (((s as any).sexcontra ?? 0));
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
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/shared/sex/shower/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('Several minutes pass and your pain is long forgotten. The only thing you can feel now is the ecstasy of Kolka\'s cock pumping in and out of your pussy. His hands come up to grope your breasts and you moan in pleasure. Is this what sex is? How did you live your life without it? Why did you wait so long to lose your virginity? Why didn\'t you jump on your brother\'s cock sooner?!');
    } else {
      scene.text('Several minutes go by and you find yourself thoroughly enjoying your brother\'s cock pump in and out of your pussy. His hands grope your breasts and you moan in pleasure. Is this what sex is? How did you live your life without it? Why did you wait so long to lose your virginity? Why didn\'t you jump on your brother\'s cock sooner?!');
      scene.text('Several minutes go by as you enjoy Kolka\'s cock. His hands come up to grope you, and you moan in pleasure, your breasts being used as leverage to fuck you harder. Fuck! He\'s pretty good for his first time. Maybe you should have jumped on your brother\'s dick ages ago!');
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
      if (((s as any).succubusflag ?? 0) === 0) {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  ||  ((s as any).tabletkishot ?? 0) >= 1) {
          // TODO-QSP: dynamic text: <i>Well,</i> you think to yourself, <i>It's a good thing '+iif(birth_control['im...
          scene.text('<i>Well,</i> you think to yourself, <i>It\'s a good thing \'+iif(birth_control[\'implant_status\'] > 1, \'I have a birth control implant.\', \'I\'m on birth control.\')+\'</i>');
        } else {
          scene.text('<i>Well,</i> you think to yourself, <i>I don\'t think I can get pregnant when I\'m on my period… right…?</i>');
          if (((s as any).knowpreg ?? 0) === 1) {
            scene.text('<i>Well,</i> you think to yourself, <i>I\'m already pregnant.</i>');
          } else {
            scene.text('<i>Damn…</i> You close your eyes, sighing as you feel another glob of Kolka\'s cum drip from your pussy. <i>I should go buy a morning-after pill from the pharmacy…</i>');
          }
        }
        qspCall(s, 'brother_shower_sex', 'ending_route_routine');
      }
    }
  } },
  ]);
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
    default:
      enterSexMenu(s, scene);
      break;
  }
}

export const brother_shower_sex: LocationDef = {
  name: 'brother_shower_sex',
  title: 'Kneeling down, you take Kolka\'s freshly washed cock and push',
  region: 'other',
  enter: enter,
};
