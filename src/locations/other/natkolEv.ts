import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterKolkabj(s: GameState, scene: SceneBuilder): void {
  ((s as any).NatbelQW ?? {})['KolkaFuckDay'] = ((s as any).daystart ?? 0);
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 8) {
    ((s as any).NatbelQW ?? {})['QWstage'] = 9;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natnudebed.jpg');
  if (((s as any).NatbelQW ?? 0)?.['KolkaSex'] === 0) {
    scene.text('"Today I want you to do something different for me, Natasha. You did promise to do anything that I wanted, remember?"');
    // TODO-QSP: dynamic text: "Y-Yes <<$pcs_nickname>>."
    scene.text(`"Y-Yes ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Good, then undress, and I\'ll arrange for a special guest. Don\'t worry it\'ll stay between the three of us."');
    // TODO-QSP: dynamic text: You take out your phone and call your brother while you watch Natasha undress. A...
    scene.text(`You take out your phone and call your brother while you watch Natasha undress. After a couple of rings, your brother picks up. "Hello, ${((s as any).pcs_nickname ?? 0)} what's up?" He asks.`);
    scene.text('You tell him. "Hey Kolka, come up to apartment #19, I have a special surprise for you."');
    scene.text('He pauses for a moment, obviously wondering what it could be. "What is it?" He asks.');
    scene.text('You giggle slightly as you look at Natasha\'s now naked body. "I promise you will enjoy it."');
    scene.text('"Ok, I\'ll be up in a couple of minutes." He tells you before hanging up.');
  } else {
    scene.text('"Today we are going to train my brother some more, you would like that, wouldn\'t you?" You ask her.');
    // TODO-QSP: dynamic text: Her eyes drop a bit, and she nods. "Y-Yes <<$pcs_nickname>>." She begins to undr...
    scene.text(`Her eyes drop a bit, and she nods. "Y-Yes ${((s as any).pcs_nickname ?? 0)}." She begins to undress without you even having to ask.`);
    // TODO-QSP: dynamic text: You take out your phone and call your brother while you watch Natasha undress. A...
    scene.text(`You take out your phone and call your brother while you watch Natasha undress. After a couple of rings, your brother picks up. "Hello ${((s as any).pcs_nickname ?? 0)}, whats up?" He asks.`);
    scene.text('You tell him. "Hey Kolka, come up to Natasha\'s, we have another lesson for you."');
    scene.text('"Ok, I\'ll be right up." He tells you eagerly before hanging up, you can just imagine him running up the stairs.');
  }
  scene.actions([
    { label: 'Wait for him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natnudebed2.jpg');
    scene.text('A few minutes later, you hear the front door open and then close as Kolka calls out. "Hello?"');
    scene.text('"In the bedroom!" You call out to him.');
    scene.text('When Kolka enters the room, Natasha immediately tries to cover herself with her hands. He stops dead when he sees Natasha naked and stares at her.');
    scene.text('"Don\'t you dare try to hide Natasha. Show him your beautiful body." You order her, to which she drops her hands, allowing Kolka to get a good look at her exposed tits.');
    scene.text('Kolka\'s eyes are glued to Natasha\'s body. He has a noticeable bulge in his pants.');
    if (((s as any).NatbelQW ?? 0)?.['KolkaSex'] === 0) {
      if (((s as any).brotherQW ?? 0)?.['Sex'] > 6) {
        scene.text('"You like Natasha\'s body more than mine brother?" You ask him with a tone of mocked hurt to your voice.');
        scene.text('"I-I…" He starts stammering. "I didn\'t expect her to have a body like this."');
        scene.text('"So, whose pussy do you think is tighter, hers or mine?" You say, enjoying the look of confusion in his eyes as he tries to come up with an answer that will please you.');
        scene.text('"I\'m just teasing you, bro, I\'m pretty sure there isn\'t a single boy on the planet who can think straight with a naked girl in front of him."');
        scene.text('"Just remember, we\'re here so that we can teach you how to do this properly. So you\'re going to obey my instructions." You say with a sultry tone of voice.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A34'] >= 80) {
          scene.text('"She\'s beautiful isn\'t she?" You ask him.');
          scene.text('"I-I…" He starts stammering but manages to nod in affirmation. "Yes."');
          scene.text('"So, who\'s body is hotter, hers or mine?" You say, seeing the shocked and confused look in his eyes as a brilliant shade of scarlet colors his face.');
          scene.text('"I\'m just teasing you bro; I\'m pretty sure there isn\'t a single boy on the planet who can think straight with a naked girl in front of him."');
          scene.text('He smiles a bit at that, but doesn\'t answer as he stares at Natasha with obvious lust in his eyes.');
          scene.text('"Would you like to fuck her bro?" You ask him.');
          scene.text('He looks at you shocked at the question, then starts nodding eagerly. "I would love to."');
        } else {
          scene.text('"I can clearly see that you want her." You tell your brother, indicating towards the bulge in his pants, which causes him to blush.');
          scene.text('"How would you like to fuck her bro?" You ask him.');
          scene.text('He looks at you, shocked at the question, and then starts nodding. "I would love to."');
          scene.text('"Good, we\'re going to teach you how to treat a girl, at least once you get to her bedroom." You say with a laugh.');
        }
      }
    } else {
      scene.text('"I see that you\'re ready for your next lesson bro."');
    }
    scene.actions([
      { label: 'Make her blow Kolka', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['Debt'] = (((s as any).NatbelQW ?? {})['Debt'] ?? 0) - (500);
    ((s as any).NatbelQW ?? {})['bj'] = (((s as any).NatbelQW ?? {})['bj'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbj\' + rand(1, 3) + \'.mp4');
    scene.text('"You\'re going to use that mouth of yours to make Kolka feel good; you got it?" You hiss at Natasha, grabbing her jaw, and staring into her eyes.');
    scene.text('Natasha jerkily nods and motions him over to the side of her bed. She reaches up with trembling hands to unfasten Kolka\'s pants and pulls out his semi-hard dick. She tentatively begins to lick it, and after a moment takes the now fully erect shaft into her mouth.');
    scene.text('"Get her hair out of the way Kolka. I want to see this properly." You tell Kolka, and he gathers her hair in his hand, keeping hold of it as he uses it to guide her mouth up and down on his shaft.');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    if (((s as any).NatbelQW ?? 0)?.['KolkaSex'] > 5) {
      // TODO-QSP: act 'Continue': gs 'natkolEv', 'softsex'
    }
    scene.actions([
      { label: 'Let Kolka cum', handler: (st: GameState) => {
    // TODO-QSP: gt 'natkolEv', 'kolkacum', 0
  } },
    ]);
  } },
      { label: 'Make them 69', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['Debt'] = (((s as any).NatbelQW ?? {})['Debt'] ?? 0) - (500);
    ((s as any).NatbelQW ?? {})['bj'] = (((s as any).NatbelQW ?? {})['bj'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natbj4.mp4');
    scene.text('"Kolka, you need to learn how to pleasure a girl, if you want to keep one that is. I want you to eat Natasha\'s pussy while she sucks your dick. Now lie back on the bed" He eagerly lays in the bed on his back, pulling his clothes off as he does.');
    scene.text('"You\'re going to use that mouth of yours to make Kolka feel good, you understand?" You hiss at Natasha, grabbing her jaw and staring into her eyes. "Don\'t worry you\'re going to enjoy this too."');
    scene.text('Natasha jerkily nods. "Now lie down on top of Kolka so he can lick your pussy while you suck his dick."');
    scene.text('Natasha positions herself on top of Kolka and reaches up with trembling hands to grab ahold of his semi-hard dick. She tentatively begins to lick it, and after a moment takes the now fully erect shaft into her mouth.');
    scene.text('"Don\'t just look at it Kolka, lick her." You order Kolka, and he obediently starts licking Natasha\'s pussy, occasionally sucking on her clit, making Natasha moan lewdly around his cock.');
    scene.text('After a few more minutes Kolka says, "I\'m going to cum."');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    if (((s as any).NatbelQW ?? 0)?.['KolkaSex'] > 5) {
      // TODO-QSP: act 'Continue': gs 'natkolEv', 'softsex'
    }
    scene.actions([
      { label: 'Let Kolka cum', handler: (st: GameState) => {
    qspCall(st, 'natkolEv', 'kolkacum', 0);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSoftsex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['KolkaSex'] > 10) {
    scene.actions([
      { label: 'Let Kolka fuck her', goto: ['natkolEv', 'penetration'] },
    ]);
  }
  scene.actions([
    { label: 'Make her give him a titjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/nattitjob.mp4');
    scene.text('"I want you to finish him off with your tits today Natasha." You order her.');
    scene.text('Natasha obediently kneels between his legs and presses her tits around Kolka\'s dick. She starts to move them up and down his shaft slowly at first, then rapidly picks up the speed as her saliva lubricates the motion.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natfacial.mp4');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    scene.text('"Jerk him off onto your tits Natasha."');
    scene.text('Natasha leans over Kolka\'s cock and squeezes her tits together with one hand. With the other, she rapidly strokes his cock. With a grunt, Kolka shoots a huge load of cum onto Natasha\'s tits. By the time he\'s finished Natasha\'s chest is covered in cum.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    ((s as any).NatbelQW ?? {})['KolkaSex'] = (((s as any).NatbelQW ?? {})['KolkaSex'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'natkolEv', 'cumeater', 'tits');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'Make her give him an assjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natassjob.mp4');
    scene.text('"I want you to finish him off with your asscheeks today Natasha." You order her.');
    scene.text('Natasha obediently lies down on her stomach and presents her ass for Kolka to use. Kolka takes his time rubbing his dick over Natasha\'s asshole and pussy before he presses his dick between her cheeks and starts hammering away.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natassjobcum.mp4');
    scene.text('After a few minutes, Natasha gets on all fours so she can fuck Kolka back. Soon after he says "I\'m going to cum."');
    scene.text('"Shoot your load on her back bro."');
    scene.text('Kolka groans and shoots his cum onto Natasha\'s back. By the time he\'s done Natasha\'s back is covered in cum.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    ((s as any).NatbelQW ?? {})['KolkaSex'] = (((s as any).NatbelQW ?? {})['KolkaSex'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'Make her give him a thighjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natthighjob01.mp4');
    scene.text('"That\'s enough of a warmup. Lie down on your back and put your legs in the air Natasha. You are going to let Kolka fuck your thighs."');
    scene.text('Natasha obediently lays back and positions Kolka\'s dick between her thighs so that it rubs against her pussy as she slowly moves up and down.');
    scene.text('You can see Kolka\'s dick getting wet from Natasha\'s juices.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natthighjob02.mp4');
    scene.text('When Natasha starts to tire Kolka takes over and starts thrusting his dick against Natasha\'s pussy, making her moan in pleasure.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natthighjobcum.mp4');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    scene.text('"Cum on her pussy Kolka." You tell him.');
    scene.text('Natasha pulls her legs up against her chest while Kolka holds his dick against her pussy with one hand as he keeps thrusting. With a grunt, Kolka shoots a huge load of his cum onto Natasha\'s wet pussy. By the time he\'s done her pussy is covered in his sperm.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    ((s as any).NatbelQW ?? {})['KolkaSex'] = (((s as any).NatbelQW ?? {})['KolkaSex'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'natkolEv', 'cumeater', 'labia');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Make her give him a footjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natfootjob.mp4');
    if (((s as any).NatbelQW ?? 0)?.['KolkaFootjob'] === 0) {
      ((s as any).NatbelQW ?? {})['KolkaFootjob'] = 1;
      scene.text('"Have you ever had a footjob, Kolka? I bet Natasha\'s feet feel great."');
      scene.text('"No, but you know I\'m open to trying new things." Kolka says with a grin.');
    }
    scene.text('"Well Natasha, lie back and use those soft feet of yours to get him off."');
    scene.text('The two of them get comfortable on the bed and Natasha takes Kolka\'s dick between her feet and gently starts massaging her soles and toes against it.');
    scene.text('"So, do her feet feel as soft as they look, Kolka?"');
    scene.text('"Y-Yeah, this is amazing." He lets out in a low groan.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natfootjobcum.mp4');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    scene.text('"Pick up the pace Natasha." You tell her.');
    scene.text('Natasha wraps her toes around his cockhead, squeezing it and starting to move rapidly. With a grunt, Kolka shoots a huge load of cum between her toes, and onto his stomach. By the time he\'s done, his stomach and Natasha\'s feet are covered in sperm.');
    scene.text('"That\'s all for today Kolka. You can clean up and get dressed. I have a few things I want to discuss with Natasha."');
    ((s as any).NatbelQW ?? {})['KolkaSex'] = (((s as any).NatbelQW ?? {})['KolkaSex'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPenetration(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natfinger.mp4');
  scene.text('You kneel down behind Natasha and put your hand between her legs, caressing her pussy for a few seconds before putting a finger in her, feeling how wet she is. When you pull it out again your finger is covered in her juices.');
  scene.text('"Do you want Kolka\'s dick in your pussy?" You whisper in her ear.');
  scene.text('Natasha looks at you and then nods her head slowly.');
  if (((s as any).NatbelQW ?? 0)?.['KolkaSex'] > 20) {
    scene.actions([
      { label: 'Let him fuck her ass', goto: ['natkolEv', 'natkolkaanalprep'] },
    ]);
  }
  scene.actions([
    { label: 'Missionary', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['vaginal'] = (((s as any).NatbelQW ?? {})['vaginal'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natmissionary01.mp4');
    scene.text('"Then ask him, better yet, beg him to make your pussy feel good. Let him know how much you want it." You tell her as you push her down onto her back.');
    scene.text('Natasha immediately opens her legs, giving Kolka an inviting view of her soaking pussy. "P-Please fuck my pussy, Kolka… I-I need it. I want you inside me now."');
    scene.text('Kolka looks at you and grins before turning his attention back to Natasha. He guides his cock into Natasha\'s eager pussy and starts fucking her gently, causing her to moan out in pleasure.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natmissionary02.mp4');
    scene.text('"Fuck her harder Kolka. She can take it."');
    scene.text('Kolka first looks at you and then at Natasha, searching for confirmation of what you just said.');
    scene.text('"F-Faster… Please." She begs him.');
    scene.text('Kolka doesn\'t need any further urging on and starts to fuck Natasha hard, causing her tits to bounce up and down with each thrust into her.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natmissionary03.mp4');
    scene.text('You can see that Natasha is getting right on the edge. "She\'s almost there Kolka. Just grab her and fuck her hard. I want to see her cum on your dick."');
    scene.text('Kolka grabs hold of Natasha, lifting her up and starts fucking her as fast as he can. Within a few minutes, you can see Natasha\'s eyes roll back in her head while she moans loudly as her orgasm rockets through her.');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    qspCall(s, 'natbelEv', 'natcumresponse');
    qspCall(s, 'natkolEv', 'kolkacum', 1);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Let her ride him in Cowgirl', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['vaginal'] = (((s as any).NatbelQW ?? {})['vaginal'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natride01.mp4');
    scene.text('"Maybe I\'ll let you fuck him." You tell Natasha as you push Kolka down on the bed.');
    scene.text('"Grind your pussy on his cock Natasha. And you better start begging, or I won\'t let him put it inside."');
    scene.text('Natasha immediately starts rubbing her soaked pussy on Kolka\'s dick. "P-Please put it in… I-I need it. I want you inside me now."');
    scene.text('You run your hand over Natasha\'s body and give Kolka a nod "Ok Kolka, put it in, you should never leave a girl hanging when she needs it this bad."');
    // TODO-QSP: dynamic text: "I won't <<$pcs_nickname>>. She can ride my dick all she wants." He tells you as...
    scene.text(`"I won't ${((s as any).pcs_nickname ?? 0)}. She can ride my dick all she wants." He tells you as he guides his dick inside her wet pussy.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natride02.mp4');
    scene.text('As you step back, Natasha needs no further encouragement. She places her hands on Kolka\'s chest and starts riding his dick, letting out a moan from time to time.');
    scene.text('"Your tight pussy feels great." Kolka tells her. "Keep going." To which she starts riding him even faster.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natride03.mp4');
    scene.text('You can see that Natasha is getting right on the edge. "She\'s almost there Kolka. Just grab her and fuck her hard. I want to see her cum on your dick."');
    scene.text('Kolka grabs Natasha by the ass, holding her in place and starts fucking her as fast as he can. Within a few minutes, you can see Natasha\'s eyes roll back in her head while she moans loudly as her orgasm hits her.');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    qspCall(s, 'natbelEv', 'natcumresponse');
    qspCall(s, 'natkolEv', 'kolkacum', 2);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Let him fuck her in Doggystyle', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['vaginal'] = (((s as any).NatbelQW ?? {})['vaginal'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natonbelly.mp4');
    scene.text('"Then ask him, better yet, beg him to make your pussy feel good. Let him know how much you want it." You tell her as you push her down on her belly.');
    scene.text('Natasha immediately pushes her ass up, giving Kolka an inviting view of her soaking wet pussy. "P-Please fuck my pussy, Kolka… I-I need it. I want you inside me now."');
    scene.text('Kolka looks at you and grins before turning his attention back to Natasha. He guides his cock into Natasha\'s eager pussy and starts fucking her gently, causing her to moan out in pleasure.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natdoggy01.mp4');
    scene.text('After a while, you see that Kolka is starting to tire and you decide to give him a little bit of rest.');
    scene.text('"Time for you to do some work too Natasha. Get on all fours and fuck yourself on Kolka\'s dick."');
    scene.text('Kolka grabs Natasha by the hips and pulls her up until she\'s sitting on her hands and knees, keeping his dick inside of her pussy.');
    // TODO-QSP: dynamic text: Once she's positioned properly, he urges her on. "Come on Natasha you heard <<$p...
    scene.text(`Once she's positioned properly, he urges her on. "Come on Natasha you heard ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('Not skipping a beat Natasha starts to fuck Kolka\'s dick as hard as she can. Each time she bottoms out you hear an audible slap as his balls hit her pussy, followed by her moans of pleasure.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natdoggy02.mp4');
    scene.text('You can see that Natasha is getting right on the edge. "She\'s almost there Kolka. Just grab her and fuck her hard. I want to see her cum on your cock."');
    scene.text('Kolka grabs Natasha by the hips, holding her in place and starts fucking her as fast as he can. Within a few minutes you can see Natasha\'s eyes roll back in her head while she moans loudly as her orgasm hits her.');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    qspCall(s, 'natbelEv', 'natcumresponse');
    qspCall(s, 'natkolEv', 'kolkacum', 3);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNatkolkaanalprep(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalfinger.mp4');
  if (((s as any).NatbelQW ?? 0)?.['anal'] < 5) {
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      scene.text('"Natasha has a cute little ass doesn\'t she Kolka? Would you like to fuck it?"');
      scene.text('"W-Wait… I\'ve never had anal sex before." She whimpers.');
    } else {
      scene.text('"Would you like to fuck Natasha\'s cute little asshole again?" You ask Kolka.');
      scene.text('"W-Wait… It really hurt the last time we did that." She whimpers.');
    }
    scene.text('"Present your ass to him. You just need to get used to it, Natasha."');
    scene.text('Natasha hesitantly gets on all fours and Kolka immediately starts playing with her asshole, testing it with a finger.');
    scene.text('"Wow. That\'s really tight. How does it feel having my finger in there Natasha?" He asks her.');
    scene.text('"I-It\'s weird." She stammers.');
    scene.text('"You\'ll learn to love it." You tell her. "You know what, how about a deal? If Kolka manages to get you off with his mouth, you\'ll let him try anal."');
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      scene.text('Natasha looks at you, and you can clearly see that she\'s not sure she wants this. "You\'ll never know if you like it if you don\'t try it at least once Natasha." You try to persuade her.');
      scene.text('"Ok, I guess I can give it a try."');
    } else {
      scene.text('Natasha looks at you, and you can clearly see that she\'s not sure she if wants to do this again. "You never gave yourself the chance to get into it Natasha." You try to persuade her.');
      scene.text('"Ok, I guess I can give it a try again."');
    }
  } else {
    scene.text('"Would you like to fuck Natasha\'s cute little asshole again?" You ask Kolka.');
    // TODO-QSP: dynamic text: "Of course <<$pcs_nickname>>." He says with a big grin on his face at the prospe...
    scene.text(`"Of course ${((s as any).pcs_nickname ?? 0)}." He says with a big grin on his face at the prospect of fucking her tight asshole again.`);
    scene.text('"Present your ass to him. Time for some more training, Natasha."');
    scene.text('Natasha hesitantly gets on all fours and Kolka immediately starts playing with her asshole, testing it with a finger.');
    scene.text('"Wow, It\'s always so tight. You like having my finger in there, don\'t you, Natasha?" He asks her.');
    scene.text('"Y-Yeah." She stammers. "But would you… Would you lick me again first please?"');
  }
  if (((s as any).NatbelQW ?? 0)?.['anal'] >= 5) {
    scene.actions([
      { label: 'Skip straight to anal', handler: (st: GameState) => {
    qspCall(st, 'natkolEv', 'natkolkaanalsex');
  } },
    ]);
  }
  scene.actions([
    { label: 'Kolka licks her pussy', handler: (st: GameState) => {
    (s as any).natkolkadeal = 1;
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcuni.mp4');
    scene.text('Natasha lies back on the bed and opens her legs for Kolka.');
    scene.text('"Come on Kolka. Earn your reward." You eagerly urge him on.');
    scene.text('He doesn\'t waste a second and places his mouth on her pussy. Licking it gently first, and then gradually putting more passion into it.');
    scene.text('You enjoy the sound of Natasha\'s moans as Kolka keeps working her pussy, switching between sucking on her clit and fucking her pussy with his tongue.');
    scene.text('After a few minutes, Natasha suddenly grabs his head and keeps it pressed firmly against her pussy.');
    scene.text('"P-Please." She begs him, right before her entire body starts to shake in an intense orgasm.');
    scene.text('"It looks like Kolka earned a reward." You say, looking in Natasha\'s eyes.');
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      // TODO-QSP: dynamic text: "Y-Yeah, I'll try it, <<$pcs_nickname>>." She says, still out of breath.
      scene.text(`"Y-Yeah, I'll try it, ${((s as any).pcs_nickname ?? 0)}." She says, still out of breath.`);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 5) {
        scene.text('"Y-Yeah, he can fuck my ass again." She says, still out of breath.');
      } else {
        scene.text('"Y-Yeah, please fuck my ass again Kolka." She says, still out of breath.');
      }
    }
    scene.actions([
      { label: 'Anal sex', handler: (st: GameState) => {
    qspCall(st, 'natkolEv', 'natkolkaanalsex');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNatkolkaanalsex(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Make her perform missionary anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalmissionary01.mp4');
    scene.text('"Move over to the edge of the bed and spread that ass, Natasha." You order her.');
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      scene.text('"Ok, but please be gentle Kolka. I\'ve never done this before." She begs him as she does as you instructed.');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
        scene.text('"Ok, but please be gentle Kolka." She begs him as she does as you instructed.');
      } else {
        scene.text('"I want you in my ass, Kolka." She begs him as she does as you instructed.');
      }
    }
    scene.text('Kolka doesn\'t waste any time and presses the tip of his dick against her sphincter.');
    if (((s as any).natkolkadeal ?? 0) === 1) {
      scene.text('"Time for my reward." He tells her as he slowly starts pushing himself into Natasha\'s ass.');
    } else {
      scene.text('"I love your tight asshole." He tells her as he slowly starts pushing himself into Natasha\'s ass.');
    }
    if (((s as any).NatbelQW ?? 0)?.['anal'] < 5) {
      scene.text('The moment his tip pops inside Natasha she lets out a groan of pain. "I-It hurts… Aah… I don\'t know if I… Please… Gently…" She begs him in pained gasps.');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
        scene.text('The moment his tip pops inside Natasha lets out a groan of mixed pleasure and pain. "Aah… Be gentle with my ass." She begs him.');
      } else {
        scene.text('The moment his tip pops inside Natasha lets out a groan of pleasure. "Aah… Please take my ass. I want it." She begs him.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalmissionary02.mp4');
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      scene.text('"I\'m going to start moving now Natasha." Kolka says as he slowly pushes deeper into her ass, making her cry out again.');
      scene.text('"Please do it gently. I-It hurts." Natasha pleads again as she uses her hands to keep Kolka from going too deep.');
      scene.text('"Jesus your ass is tight Natasha. You\'re nearly crushing me." He pants as he slowly pushes in and out, making her wince and gasp with each thrust.');
      scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing great for your first time."');
      scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
      qspCall(s, 'natkolEv', 'kolkacum', 4);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 5) {
        scene.text('"I\'m going to start moving now Natasha." Kolka says as he slowly pushes deeper into her ass, making her moan.');
        scene.text('"Ok, just go slow so I can adjust." Natasha pleads again as she uses her hands to keep Kolka from going too deep.');
        scene.text('"Relax your ass. I won\'t go too fast." He pants as he slowly pushes in and out, making her gasp with each thrust.');
        scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing a lot better than last time."');
        scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
        qspCall(s, 'natkolEv', 'kolkacum', 4);
      } else {
        if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
          scene.text('"You like it, don\'t you?" Kolka asks as he slowly pushes himself deep into her ass, making her moan.');
          scene.text('"Y-Yeah but don\'t go too fast. I need to adjust a bit." Natasha says as she uses her hands to keep Kolka from going too deep.');
          scene.text('"Relax your ass. I won\'t go too fast." He pants as he slowly pushes in and out, making her moan with each thrust.');
          scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing great."');
          scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
          qspCall(s, 'natkolEv', 'kolkacum', 4);
        } else {
          scene.text('"How much do you want it?" Kolka asks as he slowly pushes himself deep into her ass, making her moan.');
          scene.text('"Y-Yeah I love how you feel in my ass." Natasha says as she uses her hands to keep Kolka from going too deep right away.');
          scene.text('"I love fucking your tight ass, Natasha." He pants as he slowly pushes in and out, making her moan with each thrust.');
          scene.text('"Harder, I-I want it harder." She pleads with him.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalmissionary03.mp4');
    scene.text('Kolka lifts Natasha\'s ass off the bed, giving him better access to her asshole and really starts to pound her hard, making her cry out for even more.');
    scene.text('The thought of having turned Natasha into a butt slut makes your pussy so wet that you can feel it running down your inner thighs.');
    scene.text('It doesn\'t take much of Kolka\'s relentless pounding before she starts to shake in orgasm.');
    scene.text('After a few more strokes Kolka says "I\'m going to cum."');
    qspCall(s, 'natkolEv', 'kolkacum', 4);
  } },
          ]);
        }
      }
    }
    ((s as any).NatbelQW ?? {})['anal'] = (((s as any).NatbelQW ?? {})['anal'] ?? 0) + (1);
  } },
    ]);
  } },
    { label: 'Make her perform cowgirl anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalride01.mp4');
    scene.text('"You\'re going to ride him with that ass of yours, Natasha." You order her.');
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      scene.text('"Ok, but please let me take it slow. I\'ve never done this before." She begs as she does as you instructed.');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
        scene.text('"Ok, but please let me take it slow." She begs as she does as you instructed.');
      } else {
        scene.text('"I want you in my ass again." She says to Kolka as she does as you instructed.');
      }
    }
    if (((s as any).natkolkadeal ?? 0) === 1) {
      scene.text('"Time for my reward." He tells her as she slowly starts pushing his dick into her ass.');
    } else {
      scene.text('"I love your tight asshole." He tells her as she slowly starts lowering her ass onto his dick.');
    }
    if (((s as any).NatbelQW ?? 0)?.['anal'] < 5) {
      scene.text('The moment his tip pops inside Natasha lets out a groan of pain. "I-It hurts… Aah… I don\'t know if I…" She begs in pained gasps.');
      scene.text('"Just hold it there Natasha. Give your ass a moment to adjust." You order her.');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
        scene.text('The moment his tip pops inside Natasha lets out a groan of mixed pleasure and pain. "Aah… I have to take this slow." She tells him.');
        scene.text('"Just go slow, Natasha. Give your ass a moment to adjust." You order her.');
      } else {
        scene.text('The moment his tip pops inside Natasha lets out a groan of pleasure. "Aah… I love it in my ass." She tells him as she takes his dick as deep as she can.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalride02.mp4');
    scene.text('"Turn around and put your feet on his knees. Let him fuck your ass." You order Natasha.');
    scene.text('Natasha obediently turns around and slowly puts his dick in her ass again before placing her feet on his knees.');
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      scene.text('"I\'m going to start moving now Natasha." Kolka says as he slowly pushes deeper into her ass, making her cry out again.');
      scene.text('"Please do it gently. I-It hurts." Natasha pleads again.');
      scene.text('"Jesus your ass is tight Natasha. You\'re nearly crushing me." He pants as he slowly pushes in and out, making her wince and gasp with each thrust.');
      scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing great for your first time."');
      scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
      qspCall(s, 'natkolEv', 'kolkacum', 5);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 5) {
        scene.text('"I\'m going to start moving now Natasha." Kolka says as he slowly pushes deeper into her ass, making her moan.');
        scene.text('"Ok, just go slow so I can adjust." Natasha pleads again.');
        scene.text('"Relax your ass. I won\'t go too fast." He pants as he slowly pushes in and out, making her gasp with each thrust.');
        scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing a lot better than last time."');
        scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
        qspCall(s, 'natkolEv', 'kolkacum', 5);
      } else {
        if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
          scene.text('"You like it, don\'t you?" Kolka asks as he slowly pushes himself deep into her ass, making her moan.');
          scene.text('"Y-Yeah but don\'t go too fast. I need to adjust a bit." Natasha says.');
          scene.text('"Relax your ass. I won\'t go too fast." He pants as he slowly pushes in and out, making her moan with each thrust.');
          scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing great."');
          scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
          qspCall(s, 'natkolEv', 'kolkacum', 5);
        } else {
          scene.text('"How much do you want it?" Kolka asks as he slowly pushes himself deep into her ass, making her moan.');
          scene.text('"Y-Yeah I love how you feel in my ass." Natasha says.');
          scene.text('"I love fucking your tight ass, Natasha." He pants as he slowly pushes in and out, making her moan with each thrust.');
          scene.text('"Harder, I-I want it harder." She pleads with him.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalride03.mp4');
    scene.text('Kolka grabs Natasha\'s legs and lays them on top of his chest, giving him better access to her asshole. He starts to really pound away at her asshole, making her cry out for even more.');
    scene.text('The thought of having turned Natasha into a butt slut makes your pussy so wet that you can feel it running down your inner thighs.');
    scene.text('It doesn\'t take much of Kolka\'s relentless pounding before she starts to shake in orgasm.');
    scene.text('After a few more thrusts Kolka says "I\'m going to cum."');
    qspCall(s, 'natkolEv', 'kolkacum', 5);
  } },
          ]);
        }
      }
    }
    ((s as any).NatbelQW ?? {})['anal'] = (((s as any).NatbelQW ?? {})['anal'] ?? 0) + (1);
  } },
    ]);
  } },
    { label: 'Make her perform doggystyle anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanaldoggy01.mp4');
    scene.text('"Lie down and spread that ass, Natasha." You order her.');
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      scene.text('"Ok, but please be gentle Kolka. I\'ve never done this before." She begs him as she does as you instructed.');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
        scene.text('"Ok, but please be gentle Kolka." She begs him as she does as you instructed.');
      } else {
        scene.text('"I want you in my ass, Kolka." She begs him as she does as you instructed.');
      }
    }
    scene.text('Kolka doesn\'t waste any time and presses the tip of his dick against her sphincter.');
    if (((s as any).natkolkadeal ?? 0) === 1) {
      scene.text('"Time for my reward." He tells her as he slowly starts pushing himself into Natasha\'s ass.');
    } else {
      scene.text('"I love your tight asshole." He tells her as he slowly starts pushing himself into Natasha\'s ass.');
    }
    if (((s as any).NatbelQW ?? 0)?.['anal'] < 5) {
      scene.text('The moment his tip pops inside Natasha lets out a groan of pain. "I-It hurts… Aah… I don\'t know if I… Please… Gently…" She begs him in pained gasps.');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
        scene.text('The moment his tip pops inside Natasha lets out a groan of mixed pleasure and pain. "Aah… Be gentle with my ass." She begs him.');
      } else {
        scene.text('The moment his tip pops inside Natasha lets out a groan of pleasure. "Aah… Please take my ass. I want it." She begs him.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanaldoggy02.mp4');
    scene.text('"Get on all fours now Natasha." You order her.');
    scene.text('Natasha obediently gets up on her hands and knees and presents her ass to Kolka, allowing him to insert his dick again.');
    if (((s as any).NatbelQW ?? 0)?.['anal'] === 0) {
      scene.text('"I\'m going to start moving now Natasha." Kolka says as he slowly pushes deeper into her ass, making her cry out again.');
      scene.text('"Please do it gently. I-It hurts." Natasha pleads again.');
      scene.text('"Jesus your ass is tight Natasha. You\'re nearly crushing me." He pants as he slowly pushes in and out, making her wince and gasp with each thrust.');
      scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing great for your first time."');
      scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
      qspCall(s, 'natkolEv', 'kolkacum', 6);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['anal'] < 5) {
        scene.text('"I\'m going to start moving now Natasha." Kolka says as he slowly pushes deeper into her ass, making her moan.');
        scene.text('"Ok, just go slow so I can adjust." Natasha pleads again.');
        scene.text('"Relax your ass. I won\'t go too fast." He pants as he slowly pushes in and out, making her gasp with each thrust.');
        scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing a lot better than last time."');
        scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
        qspCall(s, 'natkolEv', 'kolkacum', 6);
      } else {
        if (((s as any).NatbelQW ?? 0)?.['anal'] < 10) {
          scene.text('"You like it, don\'t you?" Kolka asks as he slowly pushes himself deep into her ass, making her moan.');
          scene.text('"Y-Yeah but don\'t go too fast. I need to adjust a bit." Natasha says.');
          scene.text('"Relax your ass. I won\'t go too fast." He pants as he slowly pushes in and out, making her moan with each thrust.');
          scene.text('You sit down on the bed next to Natasha and whisper in her ear. "Keep your asshole relaxed. You\'re doing great."');
          scene.text('After a few more minutes of slowly fucking her ass, Kolka says "I\'m going to cum."');
          qspCall(s, 'natkolEv', 'kolkacum', 6);
        } else {
          scene.text('"How much do you want it?" Kolka asks as he slowly pushes himself deep into her ass, making her moan.');
          scene.text('"I-I need it really bad. I love how you feel in my ass." Natasha says.');
          scene.text('"I love fucking your tight ass, Natasha." He pants as he slowly pushes in and out, making her moan with each stroke.');
          scene.text('"Harder, I-I want it harder." She pleads with him.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanaldoggy03.mp4');
    scene.text('Kolka grabs Natasha by the hips and really starts to pound away, making her cry out for even more.');
    scene.text('The thought of having turned Natasha into a butt slut makes your pussy so wet that you can feel it running down your inner thighs.');
    scene.text('It doesn\'t take much of Kolka\'s relentless pounding before she starts to shake in orgasm.');
    scene.text('After a few more thrusts Kolka says "I\'m going to cum."');
    qspCall(s, 'natkolEv', 'kolkacum', 6);
  } },
          ]);
        }
      }
    }
    ((s as any).NatbelQW ?? {})['anal'] = (((s as any).NatbelQW ?? {})['anal'] ?? 0) + (1);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKolkacum(s: GameState, scene: SceneBuilder): void {
  ((s as any).NatbelQW ?? {})['KolkaSex'] = (((s as any).NatbelQW ?? {})['KolkaSex'] ?? 0) + (1);
  qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
  qspCall(s, 'arousal', 'end');
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'dom');
    qspCall(s, 'arousal', 'end');
    if (((s as any).NatbelQW ?? 0)?.['KolkaCP'] > 0) {
      scene.actions([
        { label: 'Let him cum inside her', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['KolkaCP'] = (((s as any).NatbelQW ?? {})['KolkaCP'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcreampiemissionary.mp4');
    scene.text('"Cum in her pussy Kolka, I want you to paint her insides with your cum."');
    scene.text('With a grunt Kolka pushes himself deep in Natasha, shooting his load in her pussy. When he pulls out, you can see some of it dripping out of her full pussy.');
    scene.text('Natasha just looks at you with a strange expression on her face. You can\'t really decide whether she is scared that Kolka came in her pussy, or if she enjoyed it. Maybe both at the same time?');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    if ((Math.floor(Math.random() * 100) + 1) >= 95  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] === 0) {
      ((s as any).NatbelQW ?? {})['pregday'] = ((s as any).daystart ?? 0);
    }
    qspCall(s, 'natkolEv', 'cumeater', 'pussy');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him cum on her belly', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      ((s as any).NatbelQW ?? {})['KolkaCP'] = (((s as any).NatbelQW ?? {})['KolkaCP'] ?? 0) + (1);
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcreampiemissionary.mp4');
      scene.text('After a few more minutes Kolka says "I\'m going to cum."');
      qspCall(s, 'natbelEv', 'natcumresponse');
      scene.text('You let her pull away from your brother, but it appears Kolka was really close, and before anyone could do anything, your brother pumps a huge load of his seed into Natasha\'s body.');
      scene.text('"Fuck, I really am sorry, Natasha!" He says apologetically. "It is just, you are so hot!"');
      scene.text('Natasha doesn\'t even listen to him, just looks at you with a strange expression on her face. You can\'t really decide whether she is scared that Kolka came in her pussy, or enjoyed it. Maybe both at the same time?');
      scene.text('You quietly signal your brother to dress up and leave while you kiss her deeply. "I hope you enjoyed it, pet. We may repeat it."');
      if ((Math.floor(Math.random() * 100) + 1) >= 95  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] === 0) {
        ((s as any).NatbelQW ?? {})['pregday'] = ((s as any).daystart ?? 0);
      }
      qspCall(s, 'natkolEv', 'cumeater', 'pussy');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcumbelly.mp4');
      scene.text('After a few more minutes Kolka says "I\'m going to cum."');
      qspCall(s, 'natbelEv', 'natcumresponse');
      scene.text('"Cum on her belly."');
      scene.text('With a grunt Kolka pulls his cock out of Natasha at the last second and starts jerking it over her pussy, shooting a huge load all over Natasha\'s belly and pussy. By the time he\'s done Natasha\'s belly is covered in cum, some even reached her tits.');
      scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
      qspCall(s, 'natkolEv', 'cumeater', 'belly');
    }
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      { label: 'Let him cum on her pussy', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      ((s as any).NatbelQW ?? {})['KolkaCP'] = (((s as any).NatbelQW ?? {})['KolkaCP'] ?? 0) + (1);
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcreampiemissionary.mp4');
      scene.text('After a few more minutes Kolka says "I\'m going to cum."');
      qspCall(s, 'natbelEv', 'natcumresponse');
      scene.text('You let her pull away from your brother, but it appears Kolka was really close, and before anyone could do anything, your brother pumps his seed in Natasha\'s body.');
      scene.text('"Fuck, I really am sorry, Natasha!" He says apologetically. "It is just, you are so hot!"');
      scene.text('Natasha doesn\'t even listen to him, just looks at you with a strange expression on her face. You can\'t really decide whether she is scared that Kolka came in her pussy, or if she enjoyed it. Maybe both at the same time?');
      scene.text('You quietly signal your brother to dress up and leave while you kiss her deeply. "I hope you enjoyed it, pet. We may repeat it."');
      if ((Math.floor(Math.random() * 100) + 1) >= 95  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] === 0) {
        ((s as any).NatbelQW ?? {})['pregday'] = ((s as any).daystart ?? 0);
      }
      qspCall(s, 'natkolEv', 'cumeater', 'pussy');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcumpussy.mp4');
      scene.text('After a few more minutes Kolka says "I\'m going to cum."');
      qspCall(s, 'natbelEv', 'natcumresponse');
      scene.text('"Cum on her pussy."');
      scene.text('With a grunt Kolka pulls his cock out of Natasha at the last second and starts jerking it over her pussy, shooting his load all over Natasha\'s pussy. By the time he\'s done Natasha\'s pussy is covered in cum, some dripping down her ass.');
      scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
      qspCall(s, 'natkolEv', 'cumeater', 'labia');
    }
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 2) {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'dom');
    qspCall(s, 'arousal', 'end');
    if (((s as any).NatbelQW ?? 0)?.['KolkaCP'] > 0) {
      scene.actions([
        { label: 'Cum inside', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['KolkaCP'] = (((s as any).NatbelQW ?? {})['KolkaCP'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcreampieride.mp4');
    scene.text('"Cum in her pussy Kolka, I want you to paint her insides with your cum."');
    scene.text('As if on command Kolka starts shooting his load in her pussy. When he pulls out, you can see some of it dripping out of her full pussy.');
    scene.text('Natasha just looks at you with a strange expression on her face. You can\'t really decide whether she is scared that Kolka came in her pussy, or if she enjoyed it. Maybe both at the same time?');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    if ((Math.floor(Math.random() * 100) + 1) >= 95  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] === 0) {
      ((s as any).NatbelQW ?? {})['pregday'] = ((s as any).daystart ?? 0);
    }
    qspCall(s, 'natkolEv', 'cumeater', 'pussy');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him cum on her ass', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      ((s as any).NatbelQW ?? {})['KolkaCP'] = (((s as any).NatbelQW ?? {})['KolkaCP'] ?? 0) + (1);
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcreampieride.mp4');
      scene.text('After a few more minutes Kolka says "I\'m going to cum."');
      qspCall(s, 'natbelEv', 'natcumresponse');
      scene.text('You let her pull away from your brother, but it appears Kolka was really close, and before anyone could do anything, your brother pumps a huge load of his seed into Natasha\'s body.');
      scene.text('"Fuck, I really am sorry, Natasha!" He says apologetically. "It is just, you are so hot!"');
      scene.text('Natasha doesn\'t even listen to him, just looks at you with a strange expression on her face. You can\'t really decide whether she is scared that Kolka came in her pussy, or if she enjoyed it. Maybe both at the same time?');
      scene.text('You quietly signal your brother to dress up and leave while you kiss her deeply. "I hope you enjoyed it, pet. We may repeat it."');
      if ((Math.floor(Math.random() * 100) + 1) >= 95  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] === 0) {
        ((s as any).NatbelQW ?? {})['pregday'] = ((s as any).daystart ?? 0);
      }
      qspCall(s, 'natkolEv', 'cumeater', 'pussy');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcumride.mp4');
      scene.text('After a few more minutes Kolka says "I\'m going to cum."');
      qspCall(s, 'natbelEv', 'natcumresponse');
      scene.text('"Cum on her ass."');
      scene.text('With a grunt Kolka pulls his cock out of Natasha\'s pussy at the last second and starts jerking it over her ass, shooting a huge load all over Natasha\'s ass. By the time he\'s done Natasha\'s ass is covered in cum, some even reached lower back.');
      scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
      qspCall(s, 'natkolEv', 'cumeater', 'butt');
    }
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 3) {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'dom');
    qspCall(s, 'arousal', 'end');
    if (((s as any).NatbelQW ?? 0)?.['KolkaCP'] > 0) {
      scene.actions([
        { label: 'Let him cum inside', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['KolkaCP'] = (((s as any).NatbelQW ?? {})['KolkaCP'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcreampiedoggy.mp4');
    scene.text('"Cum in her pussy Kolka, I want you to paint her insides with your cum."');
    scene.text('As if on command Kolka starts shooting his load in her pussy. When he pulls out, you can see some of it dripping out of her full pussy.');
    scene.text('Natasha just looks at you with a strange expression on her face. You can\'t really decide whether she is scared that Kolka came in her pussy, or if she enjoyed it. Maybe both at the same time?');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    if ((Math.floor(Math.random() * 100) + 1) >= 95  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] === 0) {
      ((s as any).NatbelQW ?? {})['pregday'] = ((s as any).daystart ?? 0);
    }
    qspCall(s, 'natkolEv', 'cumeater', 'pussy');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him cum on her ass', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      ((s as any).NatbelQW ?? {})['KolkaCP'] = (((s as any).NatbelQW ?? {})['KolkaCP'] ?? 0) + (1);
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcreampiedoggy.mp4');
      scene.text('After a few more minutes Kolka says "I\'m going to cum."');
      qspCall(s, 'natbelEv', 'natcumresponse');
      scene.text('You let her pull away from your brother, but it appears Kolka was really close, and before anyone could do anything, your brother pumps his seed in Natasha\'s body.');
      scene.text('"Fuck, I really am sorry, Natasha!" He says apologetically. "It is just, you are so hot!"');
      scene.text('Natasha doesn\'t even listen to him, just looks at you with a strange expression on her face. You can\'t really decide whether she is scared that Kolka came in her pussy, or if she enjoyed it. Maybe both at the same time?');
      scene.text('You quietly signal your brother to dress up and leave while you kiss her deeply. "I hope you enjoyed it, pet. We may repeat it."');
      if ((Math.floor(Math.random() * 100) + 1) >= 95  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] === 0) {
        ((s as any).NatbelQW ?? {})['pregday'] = ((s as any).daystart ?? 0);
      }
      qspCall(s, 'natkolEv', 'cumeater', 'pussy');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcumassdoggy.mp4');
      scene.text('After a few more minutes Kolka says "I\'m going to cum."');
      qspCall(s, 'natbelEv', 'natcumresponse');
      scene.text('"Cum on her ass."');
      scene.text('With a grunt Kolka pulls his cock out of Natasha\'s pussy at the last second and starts jerking it over her ass, shooting a huge load all over Natasha\'s ass. By the time he\'s done Natasha\'s ass is covered in cum, some even reached her lower back.');
      scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
      qspCall(s, 'natkolEv', 'cumeater', 'butt');
    }
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 4) {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let him cum on her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcumpussy.mp4');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    scene.text('"Cum on her pussy."');
    scene.text('With a grunt Kolka pulls his cock out of Natasha at the last second and starts jerking it over her pussy, shooting a huge load of his cum all over Natasha\'s pussy. By the time he\'s done Natasha\'s pussy is covered in cum, some dripping down her ass.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    qspCall(s, 'natkolEv', 'cumeater', 'labia');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      { label: 'Let him cum inside', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalcreampiemissionary.mp4');
    scene.text('"Cum in her ass Kolka, I want you to paint her insides with your cum."');
    scene.text('As if on command Kolka starts shooting his load into her ass. After a second he takes his dick out and shoots the rest of his load onto her asshole.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    qspCall(s, 'natkolEv', 'cumeater', 'anus');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 5) {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let him cum inside', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalcreampieride.mp4');
    scene.text('"Cum in her ass Kolka, I want you to paint her insides with your cum."');
    scene.text('As if on command Kolka starts shooting his load into her ass. When he pulls out, Natasha rolls off him and you can see some of it dripping out of her full asshole.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    qspCall(s, 'natkolEv', 'cumeater', 'anus');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 6) {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let him cum on her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcumassdoggy.mp4');
    scene.text('After a few more minutes Kolka says "I\'m going to cum."');
    scene.text('"Cum on her ass."');
    scene.text('With a grunt Kolka pulls his cock out of Natasha\'s ass at the last second and starts jerking it, shooting a huge load all over Natasha\'s ass. By the time he\'s done Natasha\'s ass is covered in cum, some even reached her lower back.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    qspCall(s, 'natkolEv', 'cumeater', 'butt');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      { label: 'Let him cum inside', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natanalcreampiedoggy.mp4');
    scene.text('"Cum in her ass Kolka, I want you to paint her insides with your cum."');
    scene.text('As if on command Kolka starts shooting his load in her ass. When he pulls out, you can see some of it dripping out of her full ass.');
    scene.text('He pushes his dick back into her ass a few more times. Each time he takes it out some of his cum seeps out as well.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    qspCall(s, 'natkolEv', 'cumeater', 'anus');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Let him cum on her face', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natfacial.mp4');
    scene.text('"Do it on her face."');
    scene.text('Natasha kneels down at Kolka\'s feet and jerks his cock over her face rapidly. With a grunt, Kolka shoots a huge load of his cum onto Natasha\'s face. By the time he\'s done Natasha\'s face and chest are covered in the cum that she didn\'t manage to catch in her mouth.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    qspCall(s, 'natkolEv', 'cumeater', 'face');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    { label: 'Let him cum in her mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcummouth.mp4');
    scene.text('"Cum in her mouth."');
    scene.text('Kolka holds Natasha by the hair as he pistons his cock into her mouth rapidly. Natasha\'s chin is covered with her drool, and it is dripping down everywhere. With a grunt, Kolka pulls his dick from Natasha\'s mouth, and she automatically opens her mouth and sticks out her tongue. Kolka pumps his dick a few times then shoots his cum into Natasha\'s waiting mouth.');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natswallow2.mp4');
    scene.text('"Swallow it, slut." You command, when Kolka is done, before Natasha can spit the sperm out.');
    scene.text('Natasha grimaces but complies, swallowing Kolka\'s load then opening her mouth to show that it is all gone.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'Let him cum down her throat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natthroat.mp4');
    scene.text('"Do it in her throat."');
    scene.text('Natasha, sits down at the side of the bed and starts deepthroating his cock rapidly. Natasha\'s chin is covered with her drool and it is dripping down everywhere. "Here it comes." He says and Natasha forces herself down on his cock as far as she can go while Kolka releases his cum down her throat. Not a drop escapes her mouth.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    { label: 'Let him cum on her tits', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natcumtits.mp4');
    scene.text('"Jerk him off on your tits Natasha."');
    scene.text('Natasha leans over Kolka\'s cock and squeezes her tits together with one hand. With the other, she rapidly strokes his cock. With a grunt, Kolka shoots a huge load of his cum onto Natasha\'s tits. By the time he\'s done Natasha\'s chest is covered in cum.');
    scene.text('"That\'s all for today Kolka. You can get dressed. I have a few things I want to discuss with Natasha."');
    qspCall(s, 'natkolEv', 'cumeater', 'tits');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumeater(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1  &&  ((s as any).brotherQW ?? 0)?.['Sex'] >= 6) {
    scene.text('Seeing the cum on Natasha\'s body, you get a sudden urge to lap it up.');
    // TODO-QSP: act iif($temp_loc = 'pussy' or $temp_loc = 'anus', 'Eat Kolka''s cum out of Natasha''s <<$temp_loc>>...
    if (((s as any).temp_loc ?? 0) === 'labia'  ||  ((s as any).temp_loc ?? 0) === 'pussy'  ||  ((s as any).temp_loc ?? 0) === 'anus') {
      qspCall(s, 'npcStat', 'A16');
      scene.img(`images/shared/sex/cum/eat/eat_cum_${((s as any).temp_loc ?? 0)}.mp4`);
      // TODO-QSP: 'After Kolka closes the door you move closer to Natasha who''s still recovering her breath on the be...
      // TODO-QSP: dynamic text: This goes on for about three minutes until you're satisfied you got most of your...
      scene.text('This goes on for about three minutes until you\'re satisfied you got most of your snack \'+iif($temp_loc=\'labia\', \'off\', \'out of\')+\' the Natasha-shaped cum dispenser who is now lying there, chest heaving, with eyes glazed over and only able to produce incoherent groaning noises. If you weren\'t so absorbed in getting to the cum, you would have noticed she came twice in these last three minutes. You feel a tinge of pity for the poor girl after you \'+iif($temp_loc=\'labia\', \'get up\', \'push her off you\')+\' and see the state she\'s in. Pulling the bed covers over her naked body, you give her a small kiss on the lips and leave her room, hoping she has some nice dreams in her orgasm-induced coma.');
      qspCall(s, 'arousal', '', ((((s as any).temp_loc ?? 0)==='anus') ? ('rimming_give') : ('cuni_give')), 3, 'lesbian', 'dom');
      qspCall(s, 'arousal', 'kiss', 1, 'lesbian', 'dom');
      qspCall(s, 'arousal', 'end');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'npc_relationship', 'modify', 'A16', 'love');
      scene.actions([
        { label: 'Leave the apartment', goto: ['pod_ezd', 'etaj_4'] },
      ]);
    } else {
      scene.img(`images/shared/sex/cum/eat/eat_cum_${((s as any).temp_loc ?? 0)}.mp4`);
      // TODO-QSP: dynamic text: After Kolka closes the door you move closer to Natasha who's still recovering he...
      scene.text(`After Kolka closes the door you move closer to Natasha who's still recovering her breath on the bed. His cum is slowly starting to slide down her skin, which simply becomes too much for you to bear. You jump on the bed, startling her and dive mouth first towards her cum covered ${((s as any).temp_loc ?? 0)}. Natasha is in no condition to stop you so all you hear are strained moans of protest and pleasure as you happily slurp and lick the spunk off her body.`);
      scene.text('You continue to give her a thorough tongue cleaning for the next two minutes until you find no more stray drops, while your Natasha-shaped cum platter is just lying there giggling, with eyes glazed over and clearly enjoying your ministrations. When you pull away from her you see a teasing look on Natasha\'s face which makes you blush a little realizing you lost control there for a moment. Fortunately she doesn\'t say anything, gives you a quick peck on the cheek and carries on getting dressed like nothing happened.');
      qspCall(s, 'arousal', 'foreplay_give', 2, 'lesbian', 'dom');
      qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
      qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
      scene.actions([
        { label: 'Continue', goto: ['natbelapt', 'natroom'] },
      ]);
    }
    qspCall(s, 'boyStat', 'A34');
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'mouth', 'A34', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
  }
  qspCall(s, 'willpower', 'swallow', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Resist the urge [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Resist the urge [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: killvar 'temp_loc'
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['natbelapt', 'natroom'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kolkabj':
      enterKolkabj(s, scene);
      break;
    case 'softsex':
      enterSoftsex(s, scene);
      break;
    case 'penetration':
      enterPenetration(s, scene);
      break;
    case 'natkolkaanalprep':
      enterNatkolkaanalprep(s, scene);
      break;
    case 'natkolkaanalsex':
      enterNatkolkaanalsex(s, scene);
      break;
    case 'kolkacum':
      enterKolkacum(s, scene);
      break;
    case 'cumeater':
      enterCumeater(s, scene);
      break;
    default:
      enterKolkabj(s, scene);
      break;
  }
}

export const natkolEv: LocationDef = {
  name: 'natkolEv',
  title: '"Today I want you to do something different for me, Natasha.',
  region: 'other',
  locationType: 'bathroom',
  description: ['"Today I want you to do something different for me, Natasha. You did promise to do anything that I wanted, remember?"'],
  enter: enter,
};
