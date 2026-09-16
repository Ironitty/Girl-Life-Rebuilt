import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAnushka_3some1(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['nushart_oral'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some1.jpg');
  scene.text('He just nods and you talk about how things will go before your phone buzzes; it\'s a text from Anushka containing more emojis. Seeing this, Artem gets up and leaves the room, returning a few minutes later with Anushka in front of him. As he closes the door he reaches out and slaps her hard on the ass, causing her to jump, yepping slightly in surprise. She looks back to him and then looks back to you with a grin, as she moves over to sit next to you. After that he closes the door and locks it after she does. "Someone is feeling feisty today I see." She says.');
  qspCall(s, 'arousal', 'kiss', 2, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    scene.text('As he turns around, he nods and gives her a confident smile. "Why wouldn\'t I be? I owned your ass and we all know it. Now the bad girl is back for more nerd dick."');
    scene.text('She looks up at him and bites her lower lip. "You think so?" While her tone has a bit of a bite to it, you don\'t buy it. Artem is right and you can see by the look on his face that he knows it too.');
    scene.text('He grins. "I know so. Deep down, we both know you like being treated like a dirty slut and the thought of some nerd you used to bully treating you like his little cum slut has you all wet. You can\'t wait to be humiliated by a nerd while he fucks you. Tell me I\'m wrong."');
    scene.text('She\'s speechless; the shock of just how different he\'s acting seems to be too much for her to process. When she doesn\'t reply, he confidently walks over, leans forward and runs his hand up her skirt. You see her stiffen and gasp slightly when his hand disappears up her skirt. "Just what I suspected," he grins. "You\'re soaking wet already." When he pulls his hand out of her skirt, he pulls her panties off and tosses them aside. Even you\'re a little surprised by how dominant he\'s being, but you figure this is good for him.');
    scene.text('You watch as he grabs her skirt and unbuttons it before yanking it off. He then pulls off her shirt and then her bra. She never once complains or acts like she\'s not into it. In fact, she mostly bites her lower lip and occasionally giggles. He then forces her to kneel on the floor, completely exposed and naked in front of him as he starts to unbutton his pants. "Open your mouth," he orders.');
    scene.actions([
      { label: 'Watch', goto: ['artem_nush_sex', 'anushka_3some1_dom_bj'] },
    ]);
  } else {
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 2) {
      scene.text('As he turns around, he nods and gives her a confident smile. "I knew you\'d be back. When I\'m done with you, you\'ll know your ass was completely owned by a nerd. That a nerd made you his bitch and fucked you for his pleasure."');
      scene.text('She looks up at him and bites her lower lip. "I… Almost believe you…"');
      scene.text('He confidently walks over and grabs her by the chin, then lowers his face down so they\'re looking eye to eye. "Seeing is believing. I figured girls like you get off on being treated like dirty little sluts, so I\'m going to give you exactly what you want."');
      scene.text('He lets go of her and sits down between the two of you before he gives you a look and smiles. You give him a proud smile. "Now both of you strip and make out while I watch," he orders.');
      scene.text('Anushka doesn\'t say anything as she starts stripping down to her underwear. You do the same and the two of you are soon making out while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
      scene.actions([
        { label: 'Eat her out', goto: ['artem_nush_sex', 'anushka_3some1_oral2'] },
      ]);
    } else {
      if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 1) {
        scene.text('As he turns around, he nods and gives her a confident smile. "I promised myself that if I ever got another chance to fuck you, that I was going to fuck your ass raw."');
        scene.text('She looks up at him and bites her lower lip. "That\'s a bold claim."');
        scene.text('He confidently walks over and forces himself between the two of you. "It\'ll be a fact soon enough. Now I want both of you to strip and make out while I watch."');
        scene.text('Anushka doesn\'t say anything as she starts stripping down to her underwear. You do the same and the two of you are soon making out while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
        scene.actions([
          { label: 'Eat her out', goto: ['artem_nush_sex', 'anushka_3some1_oral2'] },
        ]);
      } else {
        scene.text('As he turns around, he nods and gives her a confident smile. "That\'s right, and I\'m not going to hold back on you this time."');
        scene.text('She looks around the room and you can see her smirking. "Promises, promises…"');
        scene.text('He takes a deep breath before he walks over and sits between the two of you. "I think the two of you should strip and makeout while I watch."');
        scene.text('Anushka grins at his comment. "Well look at you, all bossy and confident. I like it." She starts stripping down to her underwear and you do the same. The two of you are soon making out as you strip while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
        scene.actions([
          { label: 'Eat her out', goto: ['artem_nush_sex', 'anushka_3some1_oral2'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnushka_3some1Oral1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some2.jpg');
  scene.text('Artem buries his face in Anushka\'s pussy from behind and starts eating her out, which causes her to moan loudly as you watch the action. After a few minutes, he pulls away from her. "You\'re wet enough, but I\'m not ready to fuck you yet," he says as he takes off the rest of his clothes, indicating for you to get naked as well before he lays down on the couch and motions you over. "I want you to suck my dick."');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Give Artem a blowjob', goto: ['artem_nush_sex', 'anushka_3some1_bj'] },
  ]);
  scene.build();
}

function enterAnushka_3some1Oral2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some3.jpg');
  scene.text('Artem pushes your face into Anushka\'s pussy and you start licking. She\'s already wet and moans loudly as you feel Artem let go of you.');
  scene.text('You eat her out for a few minutes with no idea what Artem is doing before you pull away and see him kneeling next to you. He quickly leans in to take your place.');
  qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Artem eat her out', goto: ['artem_nush_sex', 'anushka_3some1_oral1'] },
  ]);
  scene.build();
}

function enterAnushka_3some1DomBj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_bj.jpg');
  scene.text('Anushka opens her mouth and he shoves his dick in before she starts sucking. After a minute or so of this, he grabs her by the back of the head and shoves his hips forward, sliding his dick all the way into her mouth until his balls are against her chin. You can hear her gagging as he starts roughly fucking her mouth.');
  scene.text('He finally pulls his dick out of her mouth and she gasps for air as he pulls her up from where she was kneeling. He turns her around and pushes her onto the couch where she kneels as he reaches over to grab you and pull your head over to her pussy.');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', goto: ['artem_nush_sex', 'anushka_3some1_oral2'] },
  ]);
  scene.build();
}

function enterAnushka_3some1Bj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some4.jpg');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
    scene.text('You get on all fours on the couch between his legs and start stroking his cock with your hand before you take it into your mouth, bobbing your head up and down on his shaft. Artem moans as you start sucking his dick. "Don\'t just stand there! Use that mouth of yours for something good for a change and get my girl nice and wet!" Moments later, you feel a warm wet tongue starts lapping at your clit as Anushka starts eating you out.');
  } else {
    scene.text('You get on all fours on the couch between his legs and start stroking his cock with your hand before you take it into your mouth, bobbing your head up and down on his shaft. Artem moans as you start sucking his dick. "Go on and pleasure my girl," he orders and moments later, you feel a warm wet tongue starts lapping at your clit as Anushka starts eating you out.');
  }
  qspCall(s, 'arousal', 'bj', 2);
  qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell Anushka to suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some5.jpg');
    if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
      scene.text('You pop his dick out of your mouth and look back at Anushka. "Get up here and suck his cock like the good little slut you are!"');
      scene.text('She stops eating you out to look up at you with an amused smirk on her face before she moves up and kneels down beside the couch. She obediently takes his cock in one hand and starts stroking it while she takes the head into her mouth, tightly wraps her lips around his shaft and starts sucking. You glance up at Artem and see him smiling. "I\'m glad you talked me into this. It\'s great having our own little fuck slut."');
      scene.text('You give him an amused smile before you start licking his balls, which makes him moan loudly.');
    } else {
      scene.text('You pop his dick out of your mouth and look back at Anushka. "Get up here and suck this cock like the good little slut you are!"');
      scene.text('She stops eating you out to look up at you with an amused smirk on her face before she moves up and kneels down beside the couch. She obediently takes his cock in one hand and starts stroking it while she takes the head into her mouth, tightly wraps her lips around his shaft and starts sucking. After you\'re satisfied that she\'s doing what you want, you start licking his balls and hear him moaning loudly.');
    }
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some6.jpg');
    // TODO-QSP: dynamic text: He grabs hold of Anushka's head and pulls her off as he looks at you. "I need to...
    scene.text(`He grabs hold of Anushka's head and pulls her off as he looks at you. "I need to fuck you, ${((s as any).pcs_nickname || '')}."`);
    // TODO-QSP: dynamic text: You lift yourself up and straddle him before lining his dick up with your pussy ...
    scene.text(`You lift yourself up and straddle him before lining his dick up with your pussy and slowly lowering yourself down on it, taking his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick inside you. As you start riding him, Anushka moves up to his head, straddles his face and lowers herself down, grinding her crotch into his face as you ride him. You both moan from the pleasure of the act and watching your friend be pleasured by your boyfriend.`);
    scene.text('A few minutes later, he lifts her off and then smacks your ass. "Bring that sweet pussy up here."');
    qspCall(s, 'arousal', 'vaginal', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch with Anushka', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some7.jpg');
    if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
      scene.text('You get off him and move up to his face to straddle it. As you do, you look at Anushka. "Sit on my boyfriend\'s cock like a good little slut."');
      scene.text('Anushka laughs at your comment. "Whatever you say, nerd tamer."');
      scene.text('She lifts herself up and shimmies down his body until she\'s above his dick. You straddle his face and he starts licking your wet pussy as you watch Anushka lower herself down until his cock slides into her wet pussy. She moans softly as she starts riding him in reverse cowgirl style.');
      scene.text('"Take the whole thing," you tell her as you reach over and grab her shoulders, pushing her down until she\'s impaled balls deep on his cock.');
    } else {
      scene.text('You get off him and move up to his face to straddle it. As you do, you look at Anushka. "Get over here. I want to see you ride this cock, slut."');
      scene.text('Anushka laughs at your comment. "Whatever you say, nerd tamer."');
      scene.text('She lifts herself up and shimmies down his body until she\'s above his dick. You straddle his face and he starts licking your wet pussy as you watch Anushka lower herself down, impaling herself on his cock. She moans softly as she starts riding him in reverse cowgirl style.');
    }
    qspCall(s, 'arousal', 'cuni', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay on your side', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some8.jpg');
    scene.text('After a few minutes, you lean forward and slap her ass, which causes her to yelp a little in surprise. "Don\'t be greedy! I want another go."');
    scene.text('She scoffs. "Me? Greedy? You rode him for longer than I did!" She rolls her eyes and climbs off him as you lie down on your side next to him and he turns on his side to face you. You hold up one of your legs and Artem wastes no time. He slides his dick back inside you and starts gently thrusting as Anushka gets down and starts licking and sucking his balls.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let Artem to take charge', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some9.jpg');
    scene.text('He pulls out of you and gets up. You slide off the couch as he grabs Anushka and forcefully pushes her down on the ottoman. She gasps a little at his sudden action, but before she can say anything, he grabs her leg and pulls her towards him until her ass is almost hanging off the end. He then pushes her legs apart and plunges his cock back into her pussy, causing her to moan as you move up towards her head and sit on her face. She starts eating you out as you glance at Artem and give him a reassuring smile.');
    scene.text('"Can you hand me the lube?" he asks.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hand him the lube', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some10.jpg');
    scene.text('You reach over and grab the lube while grinding your pussy against Anushka\'s face. You don\'t know if Anushka heard him or if she\'s just ignoring what the two of you are saying as you keep riding her face until you hear her muffled loud groan. Glancing back, you see that Artem has inserted his dick into her ass.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him have his fun', goto: ['artem_nush_sex', 'anushka_3some1_rough1'] },
    ]);
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
  } },
  ]);
  scene.build();
}

function enterAnushka_3some1Rough1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some11.jpg');
  scene.text('You want to watch your boyfriend fuck your friend\'s ass, so you climb off her and kneel beside her so you can get a good look at Artem\'s cock sliding in and out of her ass. "Come on, fuck her like the dirty little slut she is!"');
  scene.text('Anushka looks up at him while biting her lower lip, but doesn\'t say anything. He looks at you when you speak up, then looks at her, and his gaze hardens before he starts ramming his cock harder in her ass. Anushka responds by moaning louder, enjoying the hard fucking Artem is giving her ass.');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him to butt fuck you', goto: ['artem_nush_sex', 'anushka_3some1_anal'] },
    { label: 'Let him keep going', goto: ['artem_nush_sex', 'anushka_3some1_doggy'] },
  ]);
  scene.build();
}

function enterAnushka_3some1Anal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some12.jpg');
  scene.text('You reach up and cup his face in your hands, holding his gaze so he looks directly into your eyes. "I want you to fuck my ass now."');
  scene.text('He grins widely at you and you move to straddle Anushka\'s face while he moves around behind you, near the top of her head. He squirts some lube onto your asshole and works it in before he gently slides his cock up your ass, pausing when you tense up and only moving again when you relax. He\'s soon slowly, yet lovingly fucking your ass while Anushka eats you out.');
  qspCall(s, 'arousal', 'anal', 2, 'lube');
  qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some13.jpg');
    scene.text('You lower your head between Anushka\'s legs and start lapping at her clit, and she does the same to you as Artem continues fucking your ass. He gets a little rougher with you and starts fucking you harder and deeper as he seems to get caught up in the moment before he he suddenly pulls out of you and slaps your butt cheek. "Let\'s switch it up."');
    qspCall(s, 'arousal', 'anal', 2, 'lube');
    qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him control the situation', goto: ['artem_nush_sex', 'anushka_3some1_doggy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some1Doggy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some14.jpg');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
    scene.text('Artem half pulls, half helps Anushka get up as you lay down in her place. As soon as you\'re on your back, she straddles your face and you see her slightly gaping asshole above you. As you start licking her pussy, Artem comes up behind her and shoves his dick balls deep up her ass in one thrust, causing her to moan loudly. "You love taking my nerd dick up your ass, don\'t you? Tell me you love it. Beg me to fuck your ass."');
    scene.text('"Oh fuck yes! I love your big nerd dick in my ass…" she moans as he fucks her ass while you eat her out. "Please, please… Pound my ass…" He gives her ass cheek a few smacks as he pounds her ass.');
  } else {
    scene.text('Artem half pulls, half helps Anushka get up as you lay down in her place. As soon as you\'re on your back, she straddles your face and you see her slightly gaping asshole above you. As you start licking her pussy, Artem comes up behind her and slides his dick back into her asshole, causing her to moan loudly. "Yeah, you like that, don\'t you slut? Tell me how much you love taking nerd dick in your ass."');
    scene.text('"Oh fuck yes! I love your big nerd dick in my ass…" she moans as he fucks her ass while you eat her out. He gives her ass cheek a few smacks as he keeps thrusting into her ass.');
  }
  qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
  qspCall(s, 'arousal', 'voyeur_sex', (-2));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep eating her out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some15.jpg');
    scene.text('As you lick your friend\'s pussy, you have a perfect view to watch Artem\'s cock as he starts taking long, hard thrusts into her ass. "OH FUCK… OH FUCK… OH FUUUCCCKKK!" she cries out as her her legs start shaking and your face is covered in her pussy juices. Artem fucks her through her orgasm, not letting up or slowing down as she cums hard.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Slurp at her soaking wet pussy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some16.jpg');
    if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
      scene.text('"That\'s right. Moan like a slut as this nerd pounds that ass. I own your ass now," he says before he leans forward and reaches out with one of his arms. A moment later, you feel her breasts lifting off your stomach as Artem pulls her up. "Tell me whose ass this is."');
      scene.text('"It\'s your ass…" she pants.');
      scene.text('He grunts a reply. "No, this ass belongs to the nerds. You used to be some cool badass chick. Now… Now you\'re owned by some nerd. Maybe I\'ll share you with the other nerds and they can all take a turn fucking you. You\'d like that, wouldn\'t you?" Anushka is panting harder and moaning louder as he speaks.');
      scene.text('When she doesn\'t respond to his question, he asks again. "WOULDN\'T YOU?!" he asks in a commanding voice and you find yourself getting wet at his dominating tone.');
      scene.text('"OHHH YES… YES… YES…" Anushka cries out as she has another orgasm, coating your face with her juices again.');
      scene.text('"Look at you cumming again just thinking about being fucked by other nerds!" Artem boasts as he keeps fucking her until she rides out her second orgasm. He then pulls out of Anushka and starts stroking his dick while pulling her off you.');
    } else {
      if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] <= 1) {
        ((s as any).artemQW = (s as any).artemQW ?? {})['rough_anal_nush'] = 2;
        scene.text('Despite grunting like he\'s about to cum, he manages to control himself and starts smacking her ass as he continues fucking her. "OHHH… YES… YES… YES…" she cries out as she has another orgasm, coating your face with her juices again. He keeps fucking her until she rides out her second orgasm. He then pulls out of Anushka and starts stroking his dick while pulling her off you.');
      } else {
        scene.text('It doesn\'t take much longer before he starts to grunt, and you can tell he\'s about to cum, yet he manages to control himself. "OHHH… YES… YES… YES…" she cries out as she has another orgasm, coating your face with her juices again. He keeps fucking her until she rides out her second orgasm. He then pulls out of Anushka and starts stroking his dick while pulling her off you.');
      }
    }
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'voyeur_sex', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit up and watch', goto: ['artem_nush_sex', 'anushka_3some1_dom_facial'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some1DomFacial(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_mouthful.jpg');
  scene.text('"Stick out your tongue," he orders once he has Anushka kneeling on the floor in front of him. You watch as she sticks out her tongue and he puts the tip of his dick just above it. He groans loudly as he shoots his cum into her mouth; most of it ends up in her mouth, but some lands on the side of her face and on her breasts. Once he squeezes the last drop of cum out of his dick, he lets out a loud satisfied sigh and sits on the couch.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Clean up', goto: ['artem_nush_sex', 'anushka_3some1_cleanup'] },
    { label: 'Lick the cum from her face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some17.jpg');
    scene.text('You kneel down next to Anushka as she closes her mouth and swallows Artem\'s cum. You start licking the cum off her face as she patiently sits still until you\'ve licked up every last drop of Artem\'s cum from her face. Once you finish, you look over at him and notice that his dick is already hard again. You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['artem_nush_sex', 'anushka_3some1_cleanup'] },
    ]);
  } },
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_cumkiss.jpg');
    scene.text('You kneel down and start kissing her as he sits on the couch and watches you. The two of you deeply and passionately make out, passing Artem\'s cum back and forth between you. Once you\'re finished, you both swallow his cum before you look over at him and notice that his dick is already hard again. You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['artem_nush_sex', 'anushka_3some1_cleanup'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some1Cleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 12;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 3) {
    ((s as any).artemQW = (s as any).artemQW ?? {})['nush3some_again'] = 4;
  }
  if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
    ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 20) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
    }
  }
  scene.img('images/pc/activities/misc/dress_1.mp4');
  scene.text('Once you\'re all cleaned up, you start dressing before Anushka grabs her purse off the floor where she dropped it. "I have to admit, you surprised me Artem. That sex there was better than I was expecting. Hell, you were better than I was expecting. Who knew you had such a bad boy streak in you?"');
  scene.text('Artem blushes a little at her compliment, but you also notice his chest swell in obvious pride at her words. "Thanks… Uh… I hope everything I said was okay and I didn\'t push it too far?"');
  scene.text('You bite your lip, half expecting Anushka to go off on him now for admitting it was just an act, but to your surprise, she walks over and pats him on the cheek. "You did great and I loved it. Word of advice, though. Next time, don\'t ruin it like that. Own the attitude, okay?"');
  scene.text('He giggles softly as he nods. "Got it." Then it seems to hit him. "Next time?"');
  scene.text('She shrugs as she starts getting dressed. "Sure, if you guys want. I had fun, so why not?"');
  // TODO-QSP: dynamic text: He grins ear from ear, apparently never expecting to hear all the praise he's ge...
  scene.text(`He grins ear from ear, apparently never expecting to hear all the praise he's getting. "Yeah, sure." Then he glances at you. "I mean if ${((s as any).pcs_nickname || '')} is okay with it."`);
  scene.text('You smile at him. "We can talk about it later." You had fun, but do you want your boyfriend fucking one of your best friends to be a regular thing?');
  if (((s as any).grupTipe ?? 0) === 3) {
    scene.text('Once you\'re all dressed, Anushka touches up her makeup using her compact mirror. Once she\'s done, she stands up. "Okay, I need to get going. Later nerds."');
  } else {
    scene.text('Once you\'re all dressed, Anushka touches up her makeup using her compact mirror. Once she\'s done, she stands up. "Okay, I need to get going. Later losers."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask how he feels', goto: ['artem_nush_sex', 'nush3some1_how_he_feels'] },
    { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "Thank you, thank you for everything. I had a great time. I really needed this more than you\'ll ever know." He kisses you again before walking you to the door. As you leave, you think about what just happened. You\'ve set it up so your boyfriend and best friend are interested in having more threesomes. As you head out the door and Artem closes it behind you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNush3some1HowHeFeels(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You smile and kiss him again. You pause while looking at him; he just seems a little different and more confident. "So, how did that make you feel?"');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
    scene.text('He gets up and starts pacing around, full of energy. "Fuck, that was amazing! It was great making my former bully say all that stuff and I totally owned her and treated her like my bitch!" You notice he said \'former bully\' and wonder if he even realized it, but it seems like he doesn\'t plan on letting her bully him anymore, not after this.');
    scene.text('You give him an encouraging look to continue, so he does. "I mean I never dreamed in a million years that I would be fucking Nush in the ass and making her beg me to pound her harder." He shakes his head in disbelief, like he\'s still having problems believing what just happened. "Man what a RUSH!" Then he turns suddenly to look back at you. "Did you see how turned on she got when I said I might share her with the others?"');
    scene.text('You nod your head, not that you could have missed it. "Yes I heard her, kinda hard not to with how loud she was."');
    scene.text('He nods and goes back to pacing. "Maybe next time I\'ll invite Petka over. Wouldn\'t he be freaked if I made her submit to him? I know he\'d love getting some payback on her too."');
    scene.text('You frown. "She\'s not a whore for you to pimp out."');
    scene.text('He looks at you, seemingly a little confused by what you said. "I know, I know. I just thought…" He trails off, clearly unsure where he was going with this.');
    scene.text('You smile at him. "Just remember; she might like to be submissive and let guys use her, but she\'s letting it happen. Push her too far and she\'s going to push back. <i>Hard</i>."');
    scene.actions([
      { label: 'Wait for his reply', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('He looks thoughtful before he nods. "You\'re right, I just sometimes get carried away because of all the times she bullied me, you know?"');
    scene.text('You give him a soft, caring smile. "I know, but she\'s my friend and she isn\'t that bad really. Plus she\'s still a person."');
    scene.text('He nods again. "Yeah, you\'re right. Maybe we can causally bring involving someone else, then we can bring up Petka and see what she thinks?"');
    scene.text('You nod in agreement. "I think that would be a good way to do it."');
    scene.text('He nods. "Yeah, I think so too. I mean not all the time, but sometimes. If you\'re okay with it, that is…" he says while looking at you, worried he might be coming across as too eager.');
    scene.actions([
      { label: 'We\'ll see', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile at him. "We\'ll see. Maybe I\'ll save it for special rewards for you."');
    scene.text('He laughs and hugs you. "Thank you, thank you for everything. I had a great time. I never realized how much I would enjoy being so… so dominant to a girl…"');
    scene.text('You talk for a few minutes before you tell him you need to get going. He kisses you before walking you to the door. As you leave, you think about what just happened. You\'ve set it up so your boyfriend and best friend are interested in having more threesomes. As you head out the door and Artem closes it behind you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('He looks thoughtful for a second. "You know what? I feel great, I really do. It was great making her say all that stuff and I totally owned her and treated her like my bitch!" He pauses and glances to you with a slight blush. "I mean <i>our</i> bitch."');
    scene.text('You give him an encouraging look to continue, so he does. "I mean I never dreamed in a million years that I would get to fuck Nush and humiliate her by making her tell me how much she loves it."');
    scene.text('You squeeze his hand. "Well you look happy and if this makes you happy, then I\'m happy. So does this mean you really want to do this again?"');
    scene.text('He nods at once. "Yeah, yeah I really would. I mean not all the time but sometimes, yeah. If you\'re okay with it, that is…" he says while looking at you, worried he might be coming across as too eager.');
    scene.actions([
      { label: 'We\'ll see', handler: (st: GameState) => {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile at him. "We\'ll see. Maybe I\'ll save it for special rewards for you."');
    scene.text('You talk for a few minutes before you tell him you need to get going. He kisses you before walking you to the door. As you leave, you think about what just happened. You\'ve set it up so your boyfriend and best friend are interested in having more threesomes. As you head out the door and Artem closes it behind you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnushka_3some2(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some1.jpg');
  scene.text('The two of you talk about last time and what he is expecting this time, before your phone buzzes; it\'s a text from Anushka containing more emojis. Seeing this, Artem gets up and leaves the room, returning a few minutes later with Anushka in front of him. As he closes the door, he reaches out and slaps her hard on the ass. "Yeah baby, smack my ass…" she says teasingly as he locks the door before quickly catching up to smack her again.');
  scene.text('"I\'m going to do a lot more than smack it!" he replies with a grin.');
  scene.text('She gives you an amused, yet slightly aroused grin as she walks over to the couch and Artem starts undressing her. Once she\'s naked, he pushes her down firmly by the shoulders and she drops down onto her knees in front of him. "Open your mouth, slut," he says as he unbuttons his pants.');
  qspCall(s, 'arousal', 'voyeur', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch', goto: ['artem_nush_sex', 'anushka_3some2_dom_bj'] },
  ]);
  scene.build();
}

function enterAnushka_3some2DomBj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_bj.jpg');
  scene.text('Anushka opens her mouth and he shoves his dick in before she starts sucking. After a minute or so of this, he grabs her by the back of the head and shoves his hips forward, sliding his dick all the way into her mouth until his balls are against her chin. You can hear her gagging as he starts roughly fucking her mouth.');
  scene.text('He finally pulls his dick out of her mouth and she gasps for air as he pulls her up from where she was kneeling. He turns her around and pushes her onto the couch where she kneels as he reaches over to grab you and pull your head over to her pussy.');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some3.jpg');
    // TODO-QSP: dynamic text: Artem buries your face in Anushka's pussy and you start licking. She's already w...
    scene.text(`Artem buries your face in Anushka's pussy and you start licking. She's already wet and moans loudly as you feel Artem let go of you. "That's it. Get her nice and wet for me, ${((s as any).pcs_nickname || '')}."`);
    scene.text('As you eat her out, you notice Artem undressing out of the corner of your eye. Once he\'s naked, he kneels down next to you. "Take off your clothes," he orders as you move aside, letting him lean in and take your place.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Artem eat her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some2.jpg');
    scene.text('Artem buries his face in Anushka\'s pussy and starts eating her out, which causes her to moan loudly as you watch the action while undressing. After a few minutes, he pulls away and examines her wet pussy. "Look how wet you are! You just can\'t wait for some nerd dick, can you? Beg me to fuck you."');
    scene.text('She glances over at you with a bemused grin on her face. "Please fuck me with your big nerd dick! Pound my little pussy, please!" You can tell she\'s hamming it up a little for him.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Artem fuck her', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_fuck1.jpg');
    // TODO-QSP: dynamic text: Artem stands up and smacks his dick against Anushka's ass cheeks a few times bef...
    scene.text(`Artem stands up and smacks his dick against Anushka's ass cheeks a few times before he rubs the tip against her soaking wet pussy, causing her to moan. You watch as he slides his dick into her, her pussy easily swallowing up ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock as he starts fucking her. Listening to her moaning with each thrust is arousing you, so you slide your hand down to your own wet pussy and start rubbing your clit, masturbating as you watch them fuck.`);
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka get really pounded', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_fuck2.jpg');
    scene.text('Artem suddenly buries his cock balls deep into Anushka\'s pussy and she moans loudly as he starts really pounding her hard, his balls slapping against her clit with each thrust. She stares right at you as you rub your clit with your hand, watching your boyfriend pound your friend in front of you.');
    scene.text('He glances over at you. "Are you ready to join in, my love?"');
    if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).strapNumber ?? 0) > 0  &&  ((s as any).strapNumber ?? 0) < 5) {
      scene.text('You do have a strapon in your purse, so you could fuck her too.');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).strapNumber ?? 0) > 0  &&  ((s as any).strapNumber ?? 0) < 5) {
      scene.actions([
        { label: 'You want to fuck her', goto: ['artem_nush_sex', 'anushka_3some2_dom_strapon'] },
      ]);
    }
    scene.actions([
      { label: 'Yes', goto: ['artem_nush_sex', 'anushka_3some2_bj'] },
      { label: 'You just want to watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal1.jpg');
    scene.text('You look at him and smile. "I just want to watch you fuck her this time."');
    scene.text('Artem looks a little surprised, but just nods. "Okay. Can you hand me the lube then?" You grab the lube and pass it to him, and he lubes up Anushka\'s asshole as he keeps fucking her pussy. Once he has her ready, he pulls out of her pussy and lines his dick up against her asshole before he pushes forward and his cock slides into her ass, causing her to gasp and moan. She glances back over her shoulder, watching you masturbate while Artem starts fucking her ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal2.jpg');
    scene.text('As Artem fucks Anushka\'s ass, he starts slapping her ass cheek with one hand, which makes her moan louder before her legs start to shake as she cries out in orgasm. Artem keeps fucking her hard and fast as she rides through her orgasm until her legs stop shaking.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal3.jpg');
    scene.text('Anushka reaches back and puts a hand against his hip to try and slow him down, but Artem keeps smacking her hand away and doesn\'t slow down as he starts to grunt, getting close to shooting his load as well. "Stop trying to slow me down! This ass belongs to the nerds, so take my cock. Take it!" he grunts, barely able to contain himself anymore.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal_cum.jpg');
    scene.text('Artem suddenly pulls out of Anushka and starts cumming over her ass. He milks every drop out of his cock before he lets out a loud sigh and half sits, half collapses on the couch. Anushka remains where she is with her ass in the air, covered in his cum.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 5) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['nush3some_again'] = 6;
    }
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('Anushka grabs some tissues and starts cleaning herself up. "Why didn\'t join in?" she asks. "That time of the month?"');
    scene.text('You smirk. "No, I just wanted to watch your ass get owned by some nerd dick. You\'re really starting to become a submissive little slut to him."');
    scene.text('Anushka rolls her eyes and shakes her head. "Whatever gets you off." Once she finishes cleaning the cum off herself, she starts getting dressed, as do you and Artem. Anushka then grabs her purse and compact and starts touching up her makeup.');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Once you\'re all dressed, Anushka finishes her makeup and gets up. "Okay, I need to get going. Later nerds."');
    } else {
      scene.text('Once you\'re all dressed, Anushka finishes her makeup before she gets up. "Okay, I need to get going. Later losers."');
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "See you later, babe. I can\'t wait to do this again, though I hope you join in next time." He kisses you again before walking you to the door. As you leave, you think about what just happened. You just let your boyfriend fuck your best friend. As you head out the door and Artem closes it behind you, you wonder if it was a mistake to watch them. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
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

function enterAnushka_3some2Bj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some4.jpg');
  scene.text('You nod and he pulls out of Anushka and slaps her ass so that she\'ll move out of the way before he lays down on his back. "Come over and give me a blowjob," he orders and you get on all fours between his legs and start stroking his cock with your hand before you take it into your mouth, bobbing your head up and down on his shaft.');
  scene.text('Artem moans as you start sucking his dick. "Don\'t just stand there. Use that mouth of yours for something good for a change and get my girl nice and wet!" he barks at Anushka before you feel her tongue start lapping at your clit as she starts eating you out.');
  qspCall(s, 'arousal', 'bj', 2);
  qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell Anushka to suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some5.jpg');
    scene.text('You pop his dick out of your mouth and look back at Anushka. "Get up here and suck his cock like the good little slut you are!"');
    scene.text('She stops eating you out to look up at you with an amused smirk on her face before she moves up and kneels down beside the couch. She obediently takes his cock in one hand and starts stroking it while she takes the head of his dick into her mouth, tightly wraps her lips around his shaft and starts sucking. You glance up at Artem and see him smiling. "I\'m glad you talked me into this. It\'s great having our own little fuck slut."');
    scene.text('You give him an amused smile before you start licking his balls, which makes him moan loudly.');
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some6.jpg');
    // TODO-QSP: dynamic text: He grabs hold of Anushka's head and pulls her off before he looks at you. "I nee...
    scene.text(`He grabs hold of Anushka's head and pulls her off before he looks at you. "I need to fuck you, ${((s as any).pcs_nickname || '')}."`);
    // TODO-QSP: dynamic text: You straddle him and line his dick up with your pussy before slowly lowering you...
    scene.text(`You straddle him and line his dick up with your pussy before slowly lowering yourself down onto it, taking his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick inside you. As you start riding him, Anushka moves up to his head, straddles his face and lowers herself down, grinding her crotch into his face as you ride him. You both moan from the pleasure of the act.`);
    scene.text('A few minutes later, he lifts her off and smacks your ass. "Bring that sweet pussy up here."');
    qspCall(s, 'arousal', 'vaginal', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch with Anushka', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some7.jpg');
    scene.text('You get off him and move up to his face to straddle it. As you do, you look at Anushka. "Sit on my boyfriend\'s cock like a good little slut."');
    scene.text('Anushka laughs at your comment. "Whatever you say, nerd tamer." She lifts herself up and shimmies down his body until she\'s above his dick. You straddle his face and he starts licking your wet pussy as you watch Anushka lower herself down until his cock slides into her wet pussy. She moans softly as she starts riding him reverse cowgirl style.');
    scene.text('"Take the whole thing," you tell her as you reach over and grab her shoulders, pushing her down until she\'s impaled balls deep on his cock.');
    qspCall(s, 'arousal', 'cuni', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay on your side', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some8.jpg');
    scene.text('After a few minutes, you lean forward and slap her ass, which causes her to yelp a little in surprise. "Don\'t be greedy! I want another go."');
    scene.text('She scoffs. "Me? Greedy? You rode him for longer than I did!" She rolls her eyes and climbs off him as you lie down on your side next to him and he turns on his side to face you. You hold up one of your legs and Artem wastes no time. He slides his dick back inside you and starts gently thrusting as Anushka gets down and starts licking and sucking his balls.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let Artem take charge', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some9.jpg');
    scene.text('He pulls out of you and gets up. You slide off the couch as he grabs Anushka and forecefully pushes her down on the ottoman. She gasps a little at his sudden action, but before she can say anything, he grabs her leg and pulls her towards him until her ass is almost hanging off the end. He then pushes her legs apart and plunges his cock back into her pussy, causing her to moan as you move up towards her head and sit on her face. She starts eating you out as you glance at Artem and give him a reassuring smile.');
    scene.text('"Can you hand me the lube?" he asks.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hand him the lube', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some10.jpg');
    scene.text('You reach over and grab the lube while grinding your pussy against Anushka\'s face before passing it back to him. You don\'t know if Anushka heard him or if she\'s just ignoring what the two of you are saying as you keep riding her face until you hear her muffled groan. Glancing back, you see that Artem has inserted his dick into her ass and started butt fucking her.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him have his fun', goto: ['artem_nush_sex', 'anushka_3some2_rough1'] },
    ]);
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
  } },
  ]);
  scene.build();
}

function enterAnushka_3some2Rough1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some11.jpg');
  scene.text('You want to watch your boyfriend fuck your friend\'s ass, so you climb off her and kneel beside her so you can get a good look at Artem\'s cock sliding in and out of her ass. "Listen to this slut moan! She loves getting her ass owned by nerd cock!"');
  scene.text('Anushka responds by moaning louder as he looks at you and grins. "Yeah she does! By the time we\'re done with her, she\'ll be begging every nerd to fuck her ass!" He then looks down at Anushka. "Wouldn\'t you, slut?" He doesn\'t wait for her to respond. "Oh how the mighty have fallen. I remember when you were a badass bitch and now you\'re our little submissive fuck slut."');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him to butt fuck you', goto: ['artem_nush_sex', 'anushka_3some1_anal'] },
    { label: 'Let him keep going', goto: ['artem_nush_sex', 'anushka_3some1_doggy'] },
  ]);
  scene.build();
}

function enterAnushka_3some2Anal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some12.jpg');
  scene.text('You reach up and cup his face in your hands, holding his gaze so he looks directly into your eyes. "I want you to fuck my ass now."');
  scene.text('He grins widely at you and you move to straddle Anushka\'s face while he moves around behind you, near the top of her head. He squirts some lube onto your asshole and works it in before he gently slides his cock up your ass, pausing when you tense up and only moving again when you relax. He\'s soon slowly yet lovingly fucking your ass while Anushka eats you out.');
  qspCall(s, 'arousal', 'anal', 2, 'lube');
  qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some13.jpg');
    scene.text('You lower your head between Anushka\'s legs and start lapping at her clit, and she does the same to you as Artem continues fucking your ass. He gets a little rougher with you and starts fucking you harder and deeper as he seems to get caught up in the moment before he he suddenly pulls out of you and slaps your ass cheek. "Let\'s switch it up."');
    qspCall(s, 'arousal', 'anal', 2, 'lube');
    qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him control the situation', goto: ['artem_nush_sex', 'anushka_3some2_doggy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some2Doggy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some14.jpg');
  scene.text('Artem half pulls, half helps Anushka get up as you lay down in her place. As soon as you\'re on your back, she straddles your face and you see her slightly gaping asshole above you. As you start licking her pussy, Artem comes up behind her and shoves his dick balls deep up her ass in one thrust, causing her to moan loudly. "Damn, look how easy my dick just slides into her slutty ass! It\'s like her ass was made for taking dick!"');
  scene.text('"Oh fuck… Yes… I love big nerd dick… In my ass…" she moans breathlessly as he fucks her ass and you eat her out.');
  qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep eating her out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some15.jpg');
    scene.text('As you lick your friend\'s pussy, you have a perfect view to watch Artem\'s cock as he starts taking long, hard thrusts into her ass. "OH FUCK… OH FUCK… OH FUUUCCCKKK!" she cries out as her her legs start shaking and your face is covered in her pussy juices. Artem fucks her through her orgasm, not letting up or slowing down as she cums hard.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Slurp at her soaking wet pussy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some16.jpg');
    scene.text('"That\'s right. Moan like a slut while taking my dick in your ass!" he says before he leans forward and reaches out with one of his arms. A moment later you feel her breasts lifting off your stomach, you can only guess that he is pulling her up and back by her hair. "Tell me whose ass this is."');
    scene.text('She moans and pants. "It belongs to the nerds!"');
    scene.text('He grunts a reply. "That\'s right, your ass belongs to the nerds. What do you think about me inviting Petka over to have a turn with your ass? Or maybe at the next D&D night, I\'ll just bend you over the table and fuck your ass in front of all my friends? You\'d like that, wouldn\'t you?" Anushka is panting hard and doesn\'t respond. "WOULDN\'T YOU!" He sounds louder in a commanding voice and you find yourself getting wetter at his dominating tone.');
    scene.text('It seems to be working for Anushka. "OHHH… YES… YES… YES…" she cries out as she has another orgasm, coating your face with her juices again. You\'re pretty sure she isn\'t really paying attention to what he\'s saying.');
    scene.text('Artem laughs as he keeps fucking her. "Look at you cumming again just thinking about being fucked by other nerds!" He keeps fucking her until she rides out her second orgasm, then pulls out of Anushka\'s asshole and starts stroking his dick while pulling her off you.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit up and watch', goto: ['artem_nush_sex', 'anushka_3some2_dom_facial'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some2DomFacial(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_mouthful.jpg');
  scene.text('"Stick out your tongue," he orders once he has Anushka kneeling on the floor in front of him. You watch as she sticks out her tongue and he puts the tip of his dick just above it. He groans loudly as he shoots his cum into her mouth; most of it ends up in her mouth, but some lands on the side of her face and on her breasts. Once he squeezes the last drop of cum out of his dick, he lets out a loud satisfied sigh and sits on the couch.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Clean up', goto: ['artem_nush_sex', 'anushka_3some2_cleanup'] },
    { label: 'Lick the cum from her face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some17.jpg');
    scene.text('You kneel down next to Anushka as she closes her mouth and swallows Artem\'s cum. You start licking the cum off her face as she patiently sits still until you\'ve licked up every last drop of Artem\'s cum from her face. Once you finish, you look over at him and notice that his dick is already hard again. You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['artem_nush_sex', 'anushka_3some2_cleanup'] },
    ]);
  } },
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_cumkiss.jpg');
    scene.text('You kneel down and start kissing her as he sits on the couch and watches you. The two of you deeply and passionately make out, passing Artem\'s cum back and forth between you. Once you\'re finished, you both swallow his cum before you look over at him and notice that his dick is already hard again. You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['artem_nush_sex', 'anushka_3some2_cleanup'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some2Cleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 12;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
    ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 15) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
    }
  }
  scene.img('images/pc/activities/misc/dress_1.mp4');
  scene.text('Once you\'re all cleaned up, you start dressing before Anushka grabs her purse off the floor where she dropped it. "I have to admit, you\'re starting to get really good at this. That new bad boy streak of yours is really starting to shine."');
  scene.text('Artem blushes a little at her compliment, but you also notice his chest swell in obvious pride at her words. "Thanks. You weren\'t too bad yourself."');
  scene.text('Anushka snorts a laugh in reply then looks at you. "I think we might have created a monster."');
  scene.text('He swells with pride again. "Next time you\'ll have <i>three</i> orgasms!" he proclaims.');
  scene.text('"Promises, promises…" she grins before looking at you. "He\'s all yours to deal with."');
  if (((s as any).grupTipe ?? 0) === 3) {
    scene.text('Once you\'re all dressed, Anushka touches up her makeup using her compact mirror. Once she\'s done, she gets up. "Okay, I need to get going. Later nerds."');
  } else {
    scene.text('Once you\'re all dressed, Anushka touches up her makeup using her compact mirror. Once she\'s done, she gets up. "Okay, I need to get going. Later losers."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "I look forward to next time. Maybe we can change it up a bit?" He kisses you again before walking you to the door. As you leave, you think about what just happened. You\'ve managed to make it a regular thing for you and your boyfriend to have a threesome with your best friend. As you head out the door and Artem closes it behind you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some2DomStrapon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_strap1.jpg');
  scene.text('While Artem fucks Anushka doggy style, you grab your purse and pull out your strapon harness. You slip into it and buckle it in place before taking the dildo out and attaching it to the harness. Artem glances over at you once you have the strapon firmly attached and pulls out of Anushka before standing aside. You walk up and give her ass a hard slap. "Roll over. I want you to watch me while I fuck you with my big dick!"');
  // TODO-QSP: dynamic text: Anushka rolls over onto her back and spreads her legs before you scoot up on you...
  scene.text(`Anushka rolls over onto her back and spreads her legs before you scoot up on your knees and slide the dildo into her. Your ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dildo slides easily into her wet pussy, making her moan loudly as you start fucking her.`);
  qspCall(s, 'arousal', 'vaginal_strap_give', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_fuck2.jpg');
    scene.text('Artem leans over to watch your dildo slide in and out of her pussy while stroking his dick, eager to get another go himself. "Damn, she\'s so wet that thing\'s just sliding in and out of her with ease." Anushka for her part just moans loving getting fucked by you while Artem watches. After a couple of minutes Artem grabs the lube off the end table and starts to lube up his dick with it. "Okay, roll the slut over so I can have a go at her ass."');
    scene.text('You pull out of her, which causes her to moan softly in disappointment as you stand up. "Roll over and present that ass, slut!" Anushka bites her lower lip and rolls back over before Artem pulls her off the couch into a kneeling position on the floor in front of it. He then pushes her forward, bending her over the couch seat.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal1.jpg');
    scene.text('He squirts amble lube onto her asshole before tossing the bottle aside. "Time to ripen up some gopnik ass with a nerd dick!" he laughs as he roughly shoves his dick up her ass.');
    scene.text('She partially jumps forward, but her hips hit the edge of the couch and can\'t she move. "Ow, fuck…" Artem goes very slowly until she fully relaxes and starts moaning loudly.');
    scene.text('You stroke your dildo like it\'s a cock while you watch Artem fuck Anushka\'s ass; the louder she moans, the harder and faster he goes.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take turns fucking her ass', goto: ['artem_nush_sex', 'anushka_3some2_dom_strapon_anal'] },
      { label: 'Just watch him fuck her ass', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal2.jpg');
    scene.text('As Artem fucks Anushka\'s ass, he starts slapping her ass cheek, which makes her moan louder before her legs start to shake and she cries out in orgasm. Artem keeps fucking her hard and fast as she rides through her orgasm until her legs stop shaking.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal3.jpg');
    scene.text('Anushka reaches back and puts a hand against his hip to try and slow him down, but Artem keeps smacking her hand away and doesn\'t slow down as he starts to grunt, getting close to shooting his load as well. "Stop trying to slow me down! This ass belongs to the nerds, so take my cock. Take it!" he grunts, barely able to contain himself anymore.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal_cum.jpg');
    scene.text('Artem suddenly pulls out of Anushka and starts cumming over her ass. He milks every drop out of his cock before he lets out a loud sigh and half sits, half collapses on the couch. Anushka remains where she is with her ass in the air, covered in his cum.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 5) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['nush3some_again'] = 6;
    }
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('Anushka grabs some tissues and starts cleaning herself up. "How come you didn\'t join in?" she asks. "That time of the month?"');
    scene.text('You laugh. "No, I just wanted to watch your ass get owned by some nerd dick. You\'re starting to really become a submissive slut to him."');
    scene.text('Anushka rolls her eyes and shakes her head. "Whatever gets you off." Once she finishes cleaning herself, she starts getting dressed, as do you and Artem. Anushka then grabs her purse and compact and starts to touch up her makeup.');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Once you\'re all dressed and Anushka is done touching up her makeup, she gets up. "Okay, I need to get going. Later nerds."');
    } else {
      scene.text('Once you\'re all dressed and Anushka is done touching up her makeup, she gets up. "Okay, I need to get going. Later losers."');
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "See you later, babe. I can\'t wait to do this again, though I hope you join in next time." He kisses you again before walking you to the door. As you leave, you think about what just happened. You just let your boyfriend fuck your best friend. As you head out the door and Artem closes it behind you, you wonder if it was a mistake to watch them. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some2DomStraponAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_strap_anal1.jpg');
  scene.text('You stand next to him and watch as he fucks her ass. "Babe, I want to fuck her too," you tell him.');
  scene.text('He looks over at you and grins, then pulls out of her asshole, leaving it gaping and waiting for you. You grab her ass cheeks with your hands and spread them wide, making her hole gape a bit wider as you position yourself and line the tip of the dildo up with her hole before you push it in.');
  // TODO-QSP: dynamic text: She moans loudly as the <<dick>>cm <<$dick_girth>> dildo easily slides into her ...
  scene.text(`She moans loudly as the ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dildo easily slides into her lubed asshole and you fuck her for a few minutes before Artem starts crowding against you, wanting another go himself.`);
  qspCall(s, 'arousal', 'anal_strap_give', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let Artem have a turn', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal2.jpg');
    scene.text('You pull out of her and move aside as Artem slides over to take your place. He slides his dick into her awaiting asshole and starts fucking her ass while slapping her ass cheek. Before too long, her legs start to shake as she cries out in orgasm, Artem fucking her hard and fast until her legs stop shaking.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take your turn again', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_strap_anal2.jpg');
    scene.text('"I want to fuck her ass some more," you tell Artem, who suddenly pulls out of Anushka and gives her ass a good slap and moves aside.');
    scene.text('"Sorry honey, I got carried away fucking our pet slut\'s ass," he grins and you smile at him as you slide your dildo back up her ass and start fucking her hard and fast. After a few minutes, you think she\'s about to have another orgasm and can tell Artem is not that far off himself, so you move aside to give him another go.');
    qspCall(s, 'arousal', 'anal_strap_give', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let Artem have another turn', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal3.jpg');
    scene.text('Artem shoves his dick into Anushka, going balls deep into her ass in a single thrust before he starts fucking her. "Take my cock, bitch!" he grunts as Anushka\'s legs start shaking again as she has a second orgasm. As she\'s coming down, he starts to grunt, barely able to contain himself anymore.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal_cum.jpg');
    scene.text('Artem suddenly pulls out of Anushka and starts cumming over her ass. He milks every drop out of his cock before he lets out a loud sigh and half sits, half collapses on the couch. Anushka remains where she is with her ass in the air, covered in his cum.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 5) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['nush3some_again'] = 6;
    }
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('Anushka grabs some tissues and starts cleaning up. "That was amazing, though I think my ass is going to be sore tomorrow."');
    scene.text('Artem snorts. "Serves you right for all the years you bullied me."');
    scene.text('You laugh. "You\'re becoming a real submissive butt slut for this nerd, aren\'t you?"');
    scene.text('Anushka rolls her eyes and shakes her head. "Whatever. I just like getting fucked." Once she finishes cleaning herself, she starts getting dressed, as do you and Artem. Anushka then grabs her purse and compact and starts to touch up her makeup.');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Once you\'re all dressed and Anushka is done touching up her makeup, she gets up. ""Okay, I need to get going. Later nerds."');
    } else {
      scene.text('Once you\'re all dressed and Anushka is done touching up her makeup, she gets up. ""Okay, I need to get going. Later losers."');
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "See you later babe, I can\'t wait to do this again." He kisses you again before walking you to the door. As you leave, you think about what just happened. You and your boyfriend justed fucked your best friend. As you head out the door and Artem closes it behind you, you wonder if this was a mistake. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
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
  } },
  ]);
  scene.build();
}

function enterArtemNushDiscoWalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/pavlovsk/school/boy/artem/walking.jpg');
  scene.text('Artem leads you down the side streets and into the alleyway that runs behind the apartment courtyard where all the garages are located. You and Artem hold hands and Anushka walks on the other side of him as the three of you talk about a variety of subjects, mostly about your classmates and teachers. Artem then talks about the D&D game, but quickly drops it when Anushka seems like she\'s getting bored.');
  scene.text('She changes the subject by asking you what you thought of some of the boys at the disco tonight, but is interrupted by a smacking sound as she jumps. "What the fuck, dude?" she asks.');
  scene.text('Artem has a smug look on his face. "Just a little punishment for trying to get my girl to look at other guys."');
  scene.text('Anushka responds. "She\'s a big girl," she replies. "If she wants to look she can look. Who knows… Maybe she\'ll find someone better?"');
  scene.text('Artem barks a laugh. "Doubtful. I\'m a great boyfriend. I\'m kind, caring, romantic, good in bed and when my girl needs to be dominated, then I can do that too. What more could she want?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Just let them banter', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/walking.jpg');
    scene.text('Anushka snorts. "Maybe she wants to try a real bad boy for a change…"');
    scene.text('Artem responds by smacking her on the ass again. "Maybe, but I\'m not worried."');
    scene.text('Anushka scowls a little. "What was that for?"');
    scene.text('Artem looks smugly pleased with himself. "Just a reminder that, for all your bad girl attitude, your ass still belongs to the nerds."');
    scene.text('They keep bantering for a few minutes before they fall into silence, so you bring the conversation back around to school.');
    scene.text('You soon arrive in front of the garages as you walk towards the courtyard. Artem suddenly stops and takes his jacket off before spreading it wide on the ground. "Hey, why don\'t we sit down and talk for a bit here?" If you want Anushka to have sex with Artem, then you should sit with her between you and him. If you want to have sex with him, then you should sit between them.');
    scene.actions([
      { label: 'Sit between Artem and Anushka', goto: ['artem_nush_sex', 'artem_sveta'] },
      { label: 'Sit on the other side of Anushka', goto: ['artem_nush_sex', 'artem_nush'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtemNush(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk1.jpg');
  scene.text('Anushka sits and leaves room for you between her and Artem, but you motion for her to scoot over next to Artem and you sit next to her, sandwiching her between the two of you. Artem gives you a questioning look, but you just smile and nod at him.');
  scene.text('He grins and leans back in a half reclining position as you engage Anushka in a conversation about her latest sexual partner. You can see the bulge growing in his pants, and Anushka soon does as well. "Guess someone likes my story, huh?" she asks in a bemused tone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her to peek', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk2.jpg');
    scene.text('You lean against her, pushing her closer to Artem. "I think someone wants to say hi. Why don\'t you take a peek?"');
    scene.text('She looks back at you with a questioning look, but starts to unbutton and unzip his pants to peek inside. "It\'s too dark to see anything. Pull his dick out so we can see it," you tell her.');
    scene.actions([
      { label: 'Tell her to take it out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj1.jpg');
    // TODO-QSP: dynamic text: She reaches into his underwear and pulls out his <<dick>>cm <<$dick_girth>> dick...
    scene.text(`She reaches into his underwear and pulls out his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick. Once it's free, he reaches over and pulls her head down into his lap. "You made it hard, so now you got to suck it," you say with a smirk.`);
    scene.text('She starts stroking his dick with one hand before taking it into her mouth and sucking on it as Artem moans in pleasure.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Push her head down', handler: (st: GameState) => {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj2.jpg');
    scene.text('As Anushka continues sucking Artem\'s cock, you reach over and push her head down to force her to take more of it into her mouth.');
    scene.text('"Oh yeah babe! Just like that…" Artem moans as he looks at you.');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Grab her hair', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj3.jpg');
    scene.text('You grab hold of Anushka\'s hair and push her head down until you hear her gagging on his cock.');
    scene.text('"Just think if some of the other gopniks walked by and seen you sucking my nerd dick. What would they think?" Artem says to her between moans as you make her deepthroat his cock.');
    scene.text('After a few minutes of this, Artem looks you dead in the eye. "Help me take her jeans off so I can fuck this slut."');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take her pants off', goto: ['artem_nush_sex', 'artem_nush_strip'] },
    ]);
  } },
    ]);
  } },
      { label: 'Let her suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj2.jpg');
    scene.text('As Anushka sucks Artem\'s cock, you lean over and partially lay on her back so you can peek around and watch as most of his dick disappears into her mouth with each downward bob of her head.');
    scene.text('"Yeah bitch… Just like that… Suck my dick!" Artem groans between moans of pleasure.');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Grab her hair', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj3.jpg');
    scene.text('You grab ahold of Anushka\'s hair to pull it up out of the way so it is easier to watch her suck Artem\'s dick. "Just think if some of the other gopniks walked by and seen you sucking my nerd dick. What would they think?" Artem says with a smirk.');
    scene.text('After a few minutes of this, Artem looks you dead in the eye. "Help me take her jeans off so I can fuck this slut."');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take her pants off', goto: ['artem_nush_sex', 'artem_nush_strip'] },
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

function enterArtemNushStrip(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/anushka/walk_strip1.jpg');
  scene.text('You pull her head up and both you and Artem start unbuttoning her jeans. Once you have them off, Artem tosses them aside as Anushka continues jerking him off. He then starts to tug at her panties.');
  qspCall(s, 'arousal', 'voyeur', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Artem take off her panties', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/anushka/walk_strip2.jpg');
    scene.text('Artem roughly pulls her panties off and tosses them down by her jeans before he stands up and starts pulling down his pants and underwear. "Roll the dirty slut over on all fours so I can fuck her."');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Help her onto all fours', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/anushka/walk_vaginal1.jpg');
    scene.text('You help Anushka get up on all fours so her ass is facing Artem. Once she\'s in place, Artem kneels down behind her. "Damn, you\'re soaking wet! Look babe, her juices are already running down her thigh!"');
    // TODO-QSP: dynamic text: He moves forward and she suddenly moans loudly as he shoves his <<dick>>cm <<$di...
    scene.text(`He moves forward and she suddenly moans loudly as he shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock inside her pussy and starts fucking her as you lean in and start kissing her.`);
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spread her ass cheeks', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/anushka/walk_vaginal2.jpg');
    scene.text('After you break the kiss with her, you reach back and spread her ass cheeks as wide as you can while looking up at Artem. He grins as he gets the hint.');
    scene.text('"Look at that little asshole, just begging to be used by nerd dick!" he says before he spits on her ass and uses a finger to rub it into her asshole.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hold her in place', handler: (st: GameState) => {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_anal1.jpg');
    scene.text('After spending a few more minutes fucking her pussy, he pulls his hips back. "Tell me you want this nerd dick in your ass."');
    scene.text('"Yes… I want you to fuck my ass with your big nerd dick," she says, sounding rather desperate, yet also aroused.');
    scene.text('You hold her ass cheeks wide for him as he lines his dick up with her asshole. "Oh fuck!" she mutters as he forces his cock up her ass.');
    scene.text('He moans loudly as he works his dick deeper into her. "Damn, her ass feels tighter without all that bottled lube."');
    scene.text('She starts leaning forward in an effort to keep him from going too deep. "Hold her for me, babe," he says and you grab hold of her arms to keep her from pulling away from him.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Keep holding her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/anushka/walk_anal2.jpg');
    scene.text('Now that she\'s unable to move, Artem shoves his hips forward again, causing her to moan loudly. As he starts really hammering her ass, she starts crying out and shaking as she has a massive orgasm, so much so you have to help hold her up as Artem starts grunting louder himself.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_facial.jpg');
    scene.text('Artem suddenly pulls out of Anushka and stands up. "Turn her around to face me." You help her quickly turn around, her body still shaking from her orgasm. "Jerk me off and let me cum over your face, slut!" he orders.');
    scene.text('She takes hold of his dick and starts jerking him off. Almost at once, he starts cumming over her face. She milks his cock until every last drop of it has been squeezed out of it. They both sigh and sit back against the garage once he\'s finished.');
    scene.text('Anushka grabs some tissues from her purse and starts cleaning the cum off her face. "Where are my clothes?"');
    scene.text('Artem points to where her jeans and panties. "I threw them over there."');
    scene.text('She gets up and walks over to pick up her panties before she flips him off. "You\'re turning into a bit of an asshole, you know that?"');
    scene.text('He just laughs at her response. "Yet you just came from it, so you obviously love it."');
    scene.text('Anushka rolls her eyes and shakes her head as she starts putting her jeans back on and Artem starts to get dressed as well.');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Once they\'re both dressed, Anushka gets ready to leave. ""Okay, I need to get going. Later nerds."');
    } else {
      scene.text('Once they\'re both dressed, Anushka gets ready to leave. ""Okay, I need to get going. Later losers."');
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Artem walks you up to your apartment door. You smile and kiss him. "Good night, honey."');
    scene.text('He hugs you. "See you later, babe. I can\'t wait to do this again, though maybe next time I can fuck you instead?" He kisses you again before you head into your apartment. As you stand in the hallway, you think about what just happened. Your boyfriend just fucked your best friend while you watched. You wonder if it was a mistake, but suppose that only time will tell…');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    (st as any).pavhome_enter = 1;
  }, goto: ['korrPar', ''] },
    ]);
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtemSveta(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk1.jpg');
  scene.text('Artem and Anushka take a seat, with Anushka leaving room for you to sit between her and Artem. You sit between them and lean against Artem as the three of you talk a bit more.');
  scene.text('Artem leans back in a half reclining position and you can see his bulge growing in his pants. After a while, Anushka notices as well. "Looks like someone is getting a little worked up, huh?" she asks is a bemused tone.');
  scene.text('Artem smiles at you. "Sorry babe, but I can\'t help it. You\'re just so beautiful."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a peek', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk2.jpg');
    scene.text('You unbutton his pants, but it\'s too dark to see anything as you hear Anushka\'s voice in your ear. It seems she\'s leaned over to try and take a look too. "Go on. Pull it out."');
    scene.actions([
      { label: 'Pull his dick out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj1.jpg');
    scene.text('You pull his dick out and he looks at you with pleading eyes. "Please suck it, babe."');
    // TODO-QSP: dynamic text: You lean forward and take his dick into your mouth and start sucking it while st...
    scene.text(`You lean forward and take his dick into your mouth and start sucking it while stroking his shaft. "Damn ${((s as any).pcs_nickname || '')}, you're getting good at that!" Anushka says.`);
    scene.text('You\'re unable to answer, so Artem replies for you. "She\'s the best!"');
    scene.text('Anushka snorts a bit of a giggle, Artem likely not getting why she found it funny.');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj2.jpg');
    scene.text('As you\'re sucking Artem\'s dick, you feel a hand press down on the back of your head and force it down until his dick slides down your throat, causing you to gag. You think it\'s Artem at first, but soon realize that it\'s Anushka.');
    qspCall(s, 'arousal', 'bj', 2, 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your hair grabbed', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj3.jpg');
    scene.text('You feel her fingers wrap themselves in your hair as she roughly forces you to deepthroat Artem before he speaks up. "Okay, let her up."');
    scene.text('You can keep sucking his dick until he blows his load, offer up your pussy or give him your ass.');
    qspCall(s, 'arousal', 'bj', 2, 'deepthroat', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spread your legs', goto: ['artem_nush_sex', 'artem_sveta_vag'] },
      { label: 'Offer up your ass', goto: ['artem_nush_sex', 'artem_sveta_anal'] },
      { label: 'Just suck him off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'boyStat', 'A2');
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_facial.jpg');
    scene.text('He stands up and you keep sucking his dick until he tells you he\'s about to cum. You then pop his dick out of your mouth and jerk him off until he starts cumming on your face. Once you\'ve milked every last drop out of him, you look up at him with a grin as he tucks his dick back away in his pants.');
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('"Thanks for the show guys, but I need to get going," Anushka says. "Later nerds."');
    } else {
      scene.text('"Thanks for the show guys, but I need to get going," Anushka says. "Later losers."');
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Artem walks you up to your apartment door. You smile and kiss him. "Good night, honey."');
    scene.text('He hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before you head into your apartment. As you stand in the hallway, you think about what just happened. You just sucked your boyfriend\'s dick in front of your friend. You wonder if it was a mistake, but you suppose only time will tell…');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    (st as any).pavhome_enter = 1;
  }, goto: ['korrPar', ''] },
    ]);
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
  } },
  ]);
  scene.build();
}

function enterArtemSvetaVag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_vaginal1.jpg');
  scene.text('You slide his dick out of your mouth and turn to look at him. "I want you to fuck me, right here, right now."');
  // TODO-QSP: dynamic text: He just grins and gets up as Anushka helps you get naked from the waist down whi...
  scene.text(`He just grins and gets up as Anushka helps you get naked from the waist down while he strips out of his pants and underwear. Once you're both ready, you lay on your back and spread your legs wide before he lays down between your legs and slides his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock into your already wet pussy.`);
  qspCall(s, 'arousal', 'vaginal', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Anushka', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_vaginal2.jpg');
    scene.text('As Artem fucks you, you glance over and see that Anushka has her hand down her pants, rubbing one out as she watches you get fucked by Artem. You just grin.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Offer up your ass', goto: ['artem_nush_sex', 'artem_sveta_anal'] },
      { label: 'Get fucked some more', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_vaginal3.jpg');
    scene.text('Anushka is soon moaning almost as loud as you are, enough to attract even Artem\'s attention. "What a little slut you are, rubbing one off while you watch me fuck your friend," he grins. "Admit it. You wish you were being fucked by some nerd cock right now, don\'t you?"');
    scene.text('Anushka bites her lower lip and redoubles her effort as she keeps rubbing one off. "YES! Oh fuck yes, I wish you were fucking me with your big nerd cock right now!"');
    // TODO-QSP: dynamic text: Artem looks at you and smiles before looking back at her as he keeps fucking you...
    scene.text(`Artem looks at you and smiles before looking back at her as he keeps fucking you. "Maybe next time I'll ask Petka or Feofan to come along and they can fuck you while you watch me fuck ${((s as any).pcs_nickname || '')}. You'd like that, wouldn't you? I can tell by your expression that the meer thought of some other nerd using you turns you on."`);
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him finish', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_vaginal4.jpg');
    scene.text('He then starts really pounding your pussy, even more so once Anushka starts arching her back and moaning loudly as she rubs herself to orgasm. This pushes Artem to the edge as well as he starts grunting hard before he pulls out of you and points his dick in your face.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Artem blows his load', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_facial.jpg');
    scene.text('You quickly jerk him off and he soon starts cumming on your face. Once you\'ve milked every last drop out of him, you look up at him with a grin as he tucks his dick back away in his pants.');
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('"Thanks for the show guys, but I need to get going," Anushka says. "Later nerds."');
    } else {
      scene.text('"Thanks for the show guys, but I need to get going," Anushka says. "Later losers."');
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Artem walks you up to your apartment door. You smile and kiss him. "Good night, honey."');
    scene.text('He hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before you head into your apartment. As you stand in the hallway, you think about what just happened. You just let your boyfriend fuck you in some dirty alley while your friend watched and rubbed one out. You wonder if this was a mistake, but suppose only time will tell…');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    (st as any).pavhome_enter = 1;
  }, goto: ['korrPar', ''] },
    ]);
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

function enterArtemSvetaAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_anal1.jpg');
  scene.text('"I want you to fuck my ass," you tell him with a smile.');
  scene.text('He grins. "Get on all fours for me then."');
  scene.text('You get on all fours while Anushka keeps rubbing one out. Artem uses your pussy juices and some spit to lube your asshole up before he gently slides it in. Once his dick is inside you, he starts to slowly fuck your ass.');
  qspCall(s, 'arousal', 'anal', 2, 'lube');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take an anal pounding', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_anal2.jpg');
    scene.text('Artem pushes his cock deeper into your ass as he starts to fuck you harder and faster, even more so once Anushka starts arching her back and moaning loudly as she rubs herself to orgasm. This pushes Artem to the edge as well as he starts grunting hard before he pulls out of you and points his dick in your face.');
    qspCall(s, 'arousal', 'anal', 2, 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Artem blows his load', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_facial.jpg');
    scene.text('You quickly jerk him off and he soon starts cumming on your face. Once you\'ve milked every last drop out of him, you look up at him with a grin as he tucks his dick back away in his pants.');
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('"Thanks for the show guys, but I need to get going," Anushka says. "Later nerds."');
    } else {
      scene.text('"Thanks for the show guys, but I need to get going," Anushka says. "Later losers."');
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Artem walks you up to your apartment door. You smile and kiss him. "Good night, honey."');
    scene.text('He hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before you go into your apartment. As you stand in the hallway, you think about what just happened. You just let your boyfriend fuck you in the ass in some dirty alley while your friend watched and rubbed one out. You wonder if this was a mistake, but suppose only time will tell…');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    (st as any).pavhome_enter = 1;
  }, goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtemChaseNush(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('Quickly following after Artem, you hear a few of the nerds whispering and wondering what Artem is up to, but none of them follow. Once out in the hall, you see him up ahead power walking as he follows the gopniks.');
  scene.text('Just as he\'s about to turn the corner after them, he notices you and grins. As you round the corner yourself, you see the gopniks head around another corner to the stairwell where they normally hang out.');
  scene.text('Anushka trails behind the main group a little as Artem catches up to her. He glances around to make sure no one else is around before he grabs her by the arm and shoves her against the wall next to a classroom door. He quickly opens it, looks inside, and shoves her in.');
  scene.text('As you catch up, Artem glances at you. "Close the door when you come in."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go in and close the door', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/classafter.jpg');
    if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 2) {
      scene.text('You follow him inside and pull the door closed behind you. Anushka just stands there, looking mildly bemused at the situation while Artem stands just inside the door.');
      scene.text('He glances at you when you close the door. "Watch the door while I teach this bitch a lesson!"');
      scene.text('Anushka snorts a slight laugh at his comment. "Bitch, huh? Just how…"');
      scene.text('You don\'t get to hear her finish whatever it was she was going to say as Artem interrupts her.');
      scene.text('"Shut your mouth, bitch! Now get down on your knees like a good little slut!" His tone is firm and his voice holds a hard edge of domination and control.');
      scene.text('When she doesn\'t do as he demands, he steps closer to her, forcing her to look up at him and showing how much taller he is then her. "I said get down on your knees, <i>bitch</i>!"');
      scene.text('She bites her lower lip as she looks up at him before she slowly gets down on her knees in front of him.');
      scene.actions([
        { label: 'Watch him get payback', goto: ['artem_nush_sex', 'nush_bully_payback2'] },
      ]);
    } else {
      if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 3) {
        scene.text('You follow him inside and pull the door closed behind you. Anushka stands there looking already turned on, likely knowing where this is going.');
        scene.text('Artem glances at you when you close the door. "Watch the door while I remind this slut who\'s in charge here!"');
        scene.text('She already looks turned on by his words. "Slut, huh?"');
        scene.text('"Shut your mouth and get down on your knees like the good little slut that you are!" His tone is firm and his voice holds a hard edge of domination and control.');
        scene.text('Anushka bites her lower lip as she looks up at him before she slowly gets down on her knees in front of him.');
        scene.text('"That\'s it," he grins. "Be a good little slut and obey your nerd master."');
        scene.actions([
          { label: 'Watch him get payback', goto: ['artem_nush_sex', 'nush_bully_payback3'] },
        ]);
      } else {
        if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] >= 4) {
          scene.text('You follow him inside and pull the door closed behind you. Anushka stands there already looking aroused, likely knowing where this is going.');
          scene.text('Artem glances at you when you close the door. "Watch the door while remind this slut that she\'s owned by a nerd!"');
          scene.text('She looks even more turned on by his words. "Owned?"');
          scene.text('"You\'re either dumb or you don\'t listen very good. I said I own you!" As he talks, he roughly removes her school jacket and tosses it aside. "I own your mouth and you will swallow my nerd cum anytime I want, like I showed you last time."');
          scene.text('He keeps talking as he takes off her blouse and her bra, tossing both aside. "I own your pussy! It is mine to fuck when I want."');
          scene.text('He removes her skirt and tosses it aside as well. "I own your ass and you will take my nerd dick up your ass, any time I want."');
          scene.text('He then pulls off her panties and tosses them aside. "Now get on the desk so I can do what I want to you!"');
          qspCall(s, 'arousal', 'voyeur', 2);
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Watch him get payback', goto: ['artem_nush_sex', 'nush_bully_payback4'] },
          ]);
        } else {
          scene.text('Anushka snorts a slight laugh at his comment. "Bitch, huh? Just how…"');
          scene.text('You don\'t get to hear her finish whatever it was she was going to say as Artem interrupts her.');
          scene.text('He grabs both her arms. "Shut your mouth, slut!" He then pushes her over to the teacher\'s desk, roughly spinning her around so she\'s facing away from him.');
          scene.text('He pushes roughly, forcing her to bend over the edge of the desk. He then gives her ass a hard slap, which makes her yelp in surprise.');
          scene.text('He then turns to you with a lustful and eager grin on his face. "What do you think we should do to this bitch?"');
          if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 0) {
            scene.actions([
              { label: 'Do what you want', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You give him an encouraging smile. "You were the one she was bullying. You should decide what you do to her as payback."');
    scene.text('He nods. "You\'re right. I just wanted to make sure you were… you know… Okay with it."');
    scene.text('You give him a bemused snort. "What? I already let you fuck her and me, so do what you want with her."');
    scene.text('He hesitates just a moment more, like he\'s still a little unsure where you might draw the line in your new relationship before he turns his attention back to Anushka. He pushes up her skirt, showing off her panty clad ass to you as he does.');
    scene.text('He suddenly gives her ass a hard slap, making her yelp before he pulls her panties part way down her thighs, just enough to expose her ass and pussy.');
    scene.text('He then starts spanking her with his bare hand. "Yeah, you like being dominated by a nerd, don\'t you?"');
    scene.text('Her little yelps quickly turn into moans and you can see her biting her lower lip.');
    scene.text('"Yeah you do! Listen to you moaning like a slut! You love the idea of being bent over and exposed while a nerd spanks yours ass." You\'re not sure just how much she\'s listening to him. "Being humiliated and used by a nerd when anyone could walk in at any moment. It makes you hot. It turns you on, doesn\'t it?"');
    scene.text('He  stops slapping her ass and slides his hand between her legs as he laughs. "Just what I thought. Your pussy is soaking wet!"');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    ((s as any).artemQW = (s as any).artemQW ?? {})['nush_bully_payback'] = 1;
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/show_pussy.jpg');
    scene.text('He leans down until his mouth is near her ear. You have to strain a bit, but you hear him well enough when he whispers in her ear. "I own you. A nerd owns you. Let me hear you say it."');
    scene.text('She turns her head enough to look back at him over her shoulder. "You own me," she says in husky tones, clearly enjoying herself, likely even more than Artem.');
    scene.text('He smacks her ass again. "I said say it!"');
    scene.text('She moans and tries again. "You own me. A nerd owns me."');
    scene.text('You\'re not sure if he notices how much she\'s into this as he straightens up. "That\'s right! And don\'t forget it! This nerd owns you. Now I want you to stay just like that until we leave."');
    scene.text('He then walks over to you with a huge grin on his face and pulls you into a close hug and a big long passionate kiss. Once he breaks the kiss, he turns his head back towards Anushka. You follow his gaze and see her staying right where she was told, her panties still part way down her thighs, her bare ass and pussy on full display.');
    scene.text('"Look at her. She\'s such an obedient little slut." Then he turns to look at you again. "Our little slut."');
    scene.text('He looks back at her. "You can pull your panties up once we leave."');
    scene.text('He opens the door and the two of you walk out hand in hand. You talk quietly about what just happened and you can tell this helped grow his confidence.');
    scene.text('Before long, the bell rings and he kisses you. You say your goodbyes before heading to class.');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 1) {
              scene.actions([
                { label: 'Do what you want', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/artem_nush_school_strip1.jpg');
    scene.text('You give him an encouraging smile. "You were the one she was bullying and you handled it well last time, but she obviously didn\'t learn her lesson."');
    scene.text('He nods. "You\'re right. She needs a harsher lesson this time."');
    scene.text('He turns his attention back to Anushka and slaps her ass again, eliciting another yelp from her. He then comes to stand next to you.');
    scene.text('As he does, she gets up off the desk and gives him a puzzled stare.');
    scene.text('"Be a good little bitch and strip for me," he says with a grin.');
    scene.text('She smirks before she removes her school jacket. A moment latter, she reaches behind her back and slips her arms one at a time into her shirt, only to slide her arms back out the sleeves. She\'s holding her bra in her hand, which she lays across the back of the chair.');
    scene.actions([
      { label: 'Watch Anushka strip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/artem_nush_school_strip2.jpg');
    scene.text('She slowly and deliberately unbuttons each button on her blouse before she slowly opens it up to expose her small perky breasts.');
    scene.text('"That\'s it. Obey your owner, you little slut."');
    scene.text('She pulls her blouse wide open at his comment. You\'re sure she\'s enjoying herself just as much, if not more than Artem.');
    scene.text('"Now the rest," he says as he stares at her exposed breasts.');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    ((s as any).artemQW = (s as any).artemQW ?? {})['nush_bully_payback'] = 2;
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/artem_nush_school_strip3.jpg');
    scene.text('She reaches up the sides of her skirt, causing it to hike up almost enough to the point where you can almost see her panties.');
    scene.text('She starts tracing her hands back down her thighs as she slowly slides her panties down her legs until she lets go and they fall around her ankles. She steps out of them and sits on the teacher\'s chair with her legs together, slowly pulling up her skirt as she does.');
    scene.text('Once she\'s seated, she very slowly spreads her legs apart, her shaved pussy coming into view as she does. She slowly opens her legs wider until they\'re as wide apart as they will go in her position.');
    scene.text('"Look at that little pussy," Artem smirks. "A little pussy that\'s been torn up by nerd dick." He then pulls out his phone and takes a picture. "That\'s a good little bitch. Your master approves. Now stay like that until we\'re gone."');
    scene.text('He opens the door and the two of you walk out hand in hand. You talk quietly about what just happened and you can tell this helped grow his confidence.');
    scene.text('Before long, the bell rings and he kisses you. You say your goodbyes before heading to class.');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
          scene.actions([
            { label: 'Leave her alone', handler: (st: GameState) => {
    ((s as any).artemQW = (s as any).artemQW ?? {})['nush_bully_payback'] = (-1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "Nothing. Leave her alone."');
    scene.text('He looks surprised and a little angry at your response. "What do you mean <i>nothing</i>? You saw what she did! She was bullying my friends, bullying me just like always! It\'s time someone taught her a lesson. You know how I feel about that. I thought you of all people would understand…"');
    scene.text('Anushka doesn\'t interrupt the two of you. Instead, she places her elbow on the desk and props her head up to watch the two of you with a bored expression on her face. You shake your head at them, but speak to Artem. "So what? You want to bully her to show her bullying is bad? You want to become what you hate? Is that it?"');
    scene.text('He looks even more angry and is about to say something, but then snaps his mouth closed as your words hit home. His shoulders drop and the anger drains from his face as he lets go of Anushka.');
    scene.text('"Yeah, I guess you\'re right…" he sighs. "It just makes me so angry sometimes…"');
    scene.text('Anushka sighs and gets up from the table. "This is boring, I\'m going to go now."');
    scene.text('She walks over to the door and opens it, giving both of you a cheeky smile as she walks out. "Later nerds."');
    scene.text('Artem gives you a look of exasperation and you both talk about how there are better ways to deal with the bullying before the bell rings. He gives you a hug and a kiss before you both head out to your next class.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterNushBullyPayback2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback1.jpg');
  scene.text('Once she\'s down on her knees looking up, he towers over her. "Unbutton my pants." Again, his tone is firm and commanding.');
  scene.text('She reaches up and unbuckles his belt, then uzips his fly. She looks up at him with a big smile on her face.');
  scene.text('"That\'s it, now take my dick out and suck it!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Anushka suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback2.jpg');
    scene.text('Anushka pulls his dick out, which is already hard by the time she gets it clear of his pants and underwear and starts stroking it with one hand while sucking on the tip.');
    scene.text('As she does, her eyes turn to look at you. You\'re not sure if she\'s doing it as a way to involve you as well.');
    scene.text('Artem moans softly. "Oh yeah, that\'s it. I think we finally found a good use for your mouth. Don\'t just play with it, I said suck it!"');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback3.jpg');
    scene.text('She removes her hand from his dick and starts bobbing her head back and forth so she can take more of the length into her mouth.');
    scene.text('Artem moans more as he looks down and watches Anushka suck his dick. "How do you feel, down on your knees, submissively sucking a nerd\'s cock?"');
    scene.text('He pushes his hips forward to make sure his dick stays in her mouth. "You don\'t have to answer that, I already know. You love being down on your knees, you love being owned by a nerd. Now take off your top for me so I can see those tits."');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka strip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback4.jpg');
    scene.text('She slips out of her jacket, then unbuttons and removes her blouse. She has a little more trouble taking her bra off, pulling it down to expose her breasts before slipping her arms out of the straps and unfastening it to toss it aside.');
    scene.text('By the time she\'s topless, Artem is starting to moan loudly. You can tell he\'s about to cum.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Artem cum', handler: (st: GameState) => {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    ((s as any).artemQW = (s as any).artemQW ?? {})['nush_bully_payback'] = 3;
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback5.jpg');
    scene.text('Artem suddenly pulls his dick out of her mouth and grabs her by the hair so she can\'t pull away as he starts stroking his cock. Within a few seconds, he starts shooting cum over Anushka\'s face.');
    scene.text('Several thick streams of cum ooze down her face as a little misses and lands on her breasts instead.');
    scene.text('Once he finishes, he shoves his dick back in her mouth. "Now clean my dick. Suck it clean, slut."');
    scene.text('"You really like sucking nerd cock, don\'t you?" he smirks before he pulls his dick back out of her mouth.');
    scene.text('Breathlessly, she looks up at him. "Yes…"');
    scene.text('He smirks down at her. "Yes what?"');
    scene.text('She bites her lower lip as she looks up at him. "Yes. I really love sucking nerd cock."');
    scene.text('He chuckles. "I know you do," he says as he slips his dick back in his pants and buttons them back up. "You\'re a good little slut. Now stay like that until we\'re gone."');
    scene.text('He opens the door and the two of you walk out hand in hand. You talk quietly about what just happened and you can tell this has helped grow his confidence.');
    scene.text('Before long, the bell rings and he kisses you. You say your goodbyes before heading to class.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
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

function enterNushBullyPayback3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback1.jpg');
  scene.text('Once she\'s down on her knees, he towers over her. "Unbutton my pants." Again his tone is firm and commanding.');
  scene.text('She reaches up and unbuckles his belt, then unzips his fly. She\'s looking up at him with a big smile on her face.');
  scene.text('He suddenly reaches down and grabs her by the hair. "I bet you can\'t wait to wrap those pretty little lips of yours around some nerd cock, can you?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen to her answer', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback21.jpg');
    scene.text('"Yes…" she starts to say, but you don\'t get to hear what more she has to say. As soon as she opens her mouth, Artem shoves his dick into it.');
    scene.text('She seems surprised at first at the sudden intrusion and starts to pull back, but Artem keeps a firm grip on her hair and keeps her from pulling away.');
    scene.text('"That\'s it. Wrap those lips around my big nerd cock and suck it," he says as he slowly forces his dick deeper into her mouth.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback22.jpg');
    scene.text('He suddenly shoves her head forward, forcing his dick balls deep into her mouth. "That\'s a good little slut."');
    scene.text('He holds her head in place until she starts to struggle a bit, then he pulls her head back until his dick comes out of her mouth. She gasps for air, with drool running out of her mouth.');
    scene.text('Just when she seems to have caught her breath, he shoves his dick back in her mouth. "Take off your top so I can see those tits."');
    scene.text('She takes off her jacket, followed by her blouse, and finally her bra, leaving her naked from the waist up, all while sucking his dick.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback23.jpg');
    scene.text('Artem looks over at you with a grin. "Look at her down on her knees with a mouth full of nerd cock. She doesn\'t look so high and mighty now, does she?"');
    scene.text('You see Anushka looking at you as she keeps sucking his dick. "No, baby. She doesn\'t look so tough with your big cock in her mouth."');
    scene.text('Artem barks a short laugh at your comment and then looks down at Anushka. "You hear that, bitch?" He shoves his dick deeper into her mouth, again making her gag for a moment before easing up. "Just a few minutes ago, you were some badass chick, coming into our room to bully some nerds with the other gopniks."');
    scene.text('He grins down at her. "You\'re not so tough now without your friends around. Look at you, obediently down on your knees, submissively sucking a nerd\'s dick, during school no less. I wonder what your gopnik friends would say if they could see you now?"');
    scene.text('Anushka doesn\'t comment back. Having a dick in her mouth would make that difficult to say the least, but she seems to be enjoying herself almost as much as him.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching Artem get a blowjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback24.jpg');
    scene.text('She stops watching you and focuses on giving Artem a blowjob. You can see him starting to really focus as well as his breathing gets harder. You know from experience he\'s about to cum.');
    scene.text('Just then, he pulls his dick out of her mouth and strokes it with his hand. "Open your mouth, slut!"');
    scene.text('Anushka does as she\'s told and opens her mouth. Artem groans loudly as he shoots his first spurt of cum right into her open mouth. He shoots several more spurts of cum, most of them also going into her mouth, though some hit the edge of her mouth and splatters on her cheek.');
    scene.text('Once he\'s done, he lets go of her hair. "Show us my cum on your tongue."');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka show the cum', handler: (st: GameState) => {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    ((s as any).artemQW = (s as any).artemQW ?? {})['nush_bully_payback'] = 4;
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_payback24.jpg');
    scene.text('Anushka sticks out her tongue, which is covered in Artem\'s cum.');
    scene.text('"Look how obedient she is," he says as he pats the top of her head like a dog. "Now swallow it. <i>All</i> of it."');
    scene.text('She does what he says and swallows, sticking her tongue back out to show it now clean of his cum. Once she has, he sticks his dick back in her mouth.');
    scene.text('She starts sucking his dick again, but he pulls it out a moment later. "You just love the taste of nerd cum, don\'t you?"');
    scene.text('She looks up at him while still on her knees in front of him. "Yes."');
    scene.text('He frowns down at her. "Yes what?"');
    scene.text('She smiles up at him. "I love the taste of nerd cum. I love swallowing nerd cum."');
    scene.text('Her comments hit home as you see his dick twitching.');
    scene.text('He slips his dick back in his pants and buttons them back up. "Let\'s see if you learned your lesson this time or if you need further lessons."');
    scene.text('Anushka doesn\'t respond as he walks over to you and gives you a hug and a kiss. "I love owning our own little personal gopnik fuck toy. Thank you so much for making this all happen. You\'re the best girlfriend ever!"');
    scene.text('He looks back over at Anushka. "Now stay just like that until we leave."');
    scene.text('He opens the door and the two of you walk out hand in hand. You talk quietly about what just happened and you can tell this helped grow his confidence.');
    scene.text('Before long, the bell rings and he kisses you. You say your goodbyes before heading to class.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
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

function enterNushBullyPayback4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_school_bj1.jpg');
  scene.text('Once she\'s almost completely naked other than the garter belt and stockings, she does what he says and climbs on the teacher\'s desk. She starts to lay down on her back, but Artem stops her. "No, lay on your stomach."');
  scene.text('She rolls over and lays on her stomach. As she does, he unbuttons his pants and pulls out his dick. Stepping over to stand next to the desk, he grabs her by the back of the head and pulls her over to him. Anushka firmly grips his dick with one hand as she opens her mouth.');
  scene.text('Artem lets out a slight moan when she starts sucking on his dick. "Yeah, that\'s right! Suck my nerd dick, bitch! Show me how much you love it!"');
  scene.text('She starts stroking his dick with one hand while sucking on it as he grips her by the hair.');
  qspCall(s, 'arousal', 'voyeur_sex', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Anushka suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_school_bj2.jpg');
    scene.text('He holds her head in place with one hand as he starts to thrust his hips forward, fucking her mouth as he moans slightly louder. "Oh yeah, what a good little slut you are! I could bring my friends in and each of them could take turns fucking the badass chick. Maybe we could make you into the nerd\'s personal little slut? Would you like that? I bet you would."');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch what Artem does', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_school_vag1.jpg');
    scene.text('He reaches up and grabs one of her legs before pulling it around, spinning her on the desk until her head is facing away from him. He then grabs her by the hips and pulls her towards him, causing her to slide off the table.');
    scene.text('She starts to stand up, but he roughly pushes her forward, bending her over the desk, followed by grabbing her right leg and pulling it up and placing her knee on the desk.');
    scene.text('Once she\'s bent over and her legs spread wide, he steps up directly behind her. Grabbing his dick while looking down, he guides the tip to her pussy before roughly shoving it insider her, causing her to gasp.');
    scene.text('Noticing her reaction, Artem grins and gives her ass a hard smack as he starts roughly fucking her. "That\'s right, bitch! Take it! Take my cock!"');
    scene.text('She start moaning. "You\'re such a dirty little slut, moaning like a whore while a nerd fucks you."');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Artem fuck her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_school_vag2.jpg');
    scene.text('He keeps fucking her hard and rough and she moans loudly before yelping slightly when he smacks her ass.');
    scene.text('"Tell me how much you love being fucked by a nerd!"');
    scene.text('She moans and glances back at him. "I love taking your big fat nerd cock in my pussy!"');
    scene.text('He laughs as he keeps fucking her, looking at her as she looks back over her shoulder at him. "Tell me how much you love being owned by a nerd! Tell me how much you love being a submissive slut to a nerd!"');
    scene.text('She moans even louder. "I love being owned by a nerd! I love being your submissive slut! You can do anything you want to me!"');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Artem does next', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_school_anal1.jpg');
    scene.text('He grins at her, then looks over at you. "Did you hear what she said?"');
    scene.text('You nod your head. "Yeah baby. You turned this little gopnik bitch into your personal slut. She\'s yours to do with as you wish."');
    scene.text('He nods at you with a huge grin on his face before looking at Anushka. "Is that right? I can do anything I want?"');
    scene.text('You can tell she\'s loving this verbal banter. "Yes… Anything…"');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 20) {
      scene.text('He laughs. "I\'m going to make you regret saying that."');
      scene.text('He pulls his dick out of her wet pussy before suddenly shoving it up her ass, with only her pussy juices for lube.');
      scene.text('She winces in pain and tries to pull away from him as she cries out, but he grabs her by the hips to keep her in place."');
      scene.text('"How can it hurt? Didn\'t you just say I had a tiny dick?" he says in a taunting tone as he keeps fucking her ass.');
      scene.text('She grunts a little in pain. "OH, OH! I was wrong! AAH, AAH! You have a big dick!" she says in a high pitched whine as her hands tightly grip the edges of the desk.');
      scene.text('He shakes his head and grins, clearly enjoying himself. "Nah, I think you were right. I just have a tiny little nerd dick."');
      scene.text('She shakes her head as she looks back at him. "NO, NO… OH FUCK!… It\'s big… It\'s fucking huge… Ugh!"');
      scene.text('He holds her by the hips, making sure she can\'t pull away. "Since you seem to keep forgetting that I own you, that I own this ass. Let me teach you that it\'s mine to fuck when, where and how I want! Say it!"');
      scene.text('"My ass is… Aah… yours to fuck… Uugh… when, where, and… Oooh… how you want…" she says in a breathless, high pitched tone.');
      scene.text('He grins at her words. "That\'s right. Now shut up and take this big nerd cock up your ass like a good little slut, bitch."');
    } else {
      scene.text('He laughs. "I\'m going to make you regret saying that." He pulls out a small bottle of lube from his jacket pocket, showing he was planning this all along. He squirts a fair amount between her ass checks before he pulls his dick out of her wet pussy and shoves it into her asshole.');
      scene.text('She winces in pain as he struggles to get it in until the lube does it\'s job and his dick slides into her asshole. She tries to pull away from him as she cries out, but he grabs her by the hips to keep her from pulling away from him.');
      scene.text('"Shut up, bitch! I told you before I own you, I own this ass. It\'s mine to fuck when, where and how I want. So just take this nerd cock up your ass like a good little slut."');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka get butt fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_school_anal2.jpg');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 20) {
      scene.text('Her face is scrunched up a little in pain as she grips the edge of the desk tightly with her hands. She\'s taking deep breaths and blowing them out through pursed lips, clearly trying to relax so she can enjoy the butt fucking Artem is giving her. Artem notices her starting to relax and loosen her grip on the desk as her groans start turning into moans of pleasure.');
      scene.text('"Is it starting to feel good, slut?" he grins.');
      scene.text('She nods and moans a little louder. "Yeah…"');
      scene.text('"You\'ve been a little bitch today. I don\'t think you deserve that yet," he says as he shoves his dick balls deep into her ass. He grins and slides it about half way out of her ass before slamming it back in balls deep again.');
      scene.text('Anushka tenses up again and tries once more to pull away, but is unable to pull out of Artem\'s grip. "OH FUCK! Oh fuck! Oh fuck!"');
      scene.text('Artem pulls his dick almost all the way out of her ass this time before slamming it back in balls deep. "I said shut up and take it, slut! We all know you love being pounding in the ass by nerd cock!"');
      scene.text('After a few minutes, her groans slowly turn into moans of pleasure and she starts smiling as she starts to enjoy the rough butt fucking Artem is giving her.');
    } else {
      scene.text('Her face is scrunched up a little in pain as she grips the edge of the desk tightly with her hands. She\'s taking deep breaths and blowing them out through pursed lips, clearly trying to relax so she can enjoy the butt fucking Artem is giving her.');
      scene.text('She soon starts to relax and loosen her grip on the desk as her groans start turning into moans of pleasure. A smile plays across her lips and she moans as his dick slowly slides deeper up her ass until it\'s balls deep.');
      scene.text('She starts moaning loudly as he pounds her ass balls deep. "OH FUCK! Oh fuck! Oh fuck!"');
      scene.text('Artem pulls his dick almost all the way out of her ass before slamming it back in balls deep. "I said shut up and take it, slut! We all know you love being pounding in the ass by nerd cock!"');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_school_anal3.jpg');
    scene.text('He suddenly pulls out of her and slaps her ass. "Roll over."');
    scene.text('She turns and gets her ass up onto the desk before Artem pushes her back on the desk.');
    scene.text('He then slides his dick back into her ass, which elicits a louder moan from her. "OH YES! Fuck my tight little asshole with your big nerd cock!"');
    scene.text('Artem doesn\'t respond as he fucks her hard and fast and she gets more and more into it. "OH YES! Just like that! Fuck… Yes… Yes…"');
    scene.text('Just when it sounds like Anushka is about to have an orgasm, he suddenly pulls his dick out of her ass and starts jerking it hard and fast. "No cumming for you!"');
    scene.text('Anushka looks seriously disappointed he didn\'t fuck her until she came.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Artem cum', handler: (st: GameState) => {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    ((s as any).artemQW = (s as any).artemQW ?? {})['nush_bully_payback'] = 5;
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/school/sex/artem_nush_school_cum1.jpg');
    scene.text('Artem groans loudly and starts shooting his cum. A fair bit ends up on her face, some lands on her stomach and breasts, while the rest ends up on the desk.');
    scene.text('She grins. "Stick your big nerd dick back in my ass."');
    scene.text('Her tone is mildly pleading. She clearly wants him to fuck her a little more until she can get off.');
    scene.text('He shakes his head. "No! I said no cumming for you and I mean it!"');
    scene.text('When she starts rubbing her clit with her hand, he pulls her off the desk, forcing her to stop as he grabs her by the hair and shoves her face down against the desk. "Clean this mess off the desk with your tongue!"');
    scene.text('As she licks up his cum, you can see his dick getting soft and limp. By the time she finishes licking up his cum from the desk, he has put his dick away. When she turns around, she looks disappointed with a pouty look on her face.');
    scene.text('He walks over to you and gives you a hug and a kiss. "I still can barely believe this is all real! The gopnik bitch that used to torment and tease me all the time, is now my little fuck slut. I mean I just fucked her ass in the middle of a school day on a teachers desk, during lunch break."');
    scene.text('He glances back at Anushka, who is covered in his cum. "I can\'t believe how much my life has changed." He looks back at you and looks you in the eye. You can feel the love he has for you radiating in the look. "And it\'s all thanks to you. You\'re the best girl in the world!"');
    scene.text('He looks back over at Anushka. "Stay just like that until we leave."');
    scene.text('He opens the door and the two of you walk out hand in hand. You talk quietly about how he didn\'t want her to cum as payback. Apparently, she once got him rock hard by teasing him during class, giving him a case of blue balls. He laughs as he tells you about how he enjoyed doing the same to her this time.');
    scene.text('Before long, the bell rings and he kisses you. You say your goodbyes before heading to class.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'anushka_3some1':
      enterAnushka_3some1(s, scene);
      break;
    case 'anushka_3some1_oral1':
      enterAnushka_3some1Oral1(s, scene);
      break;
    case 'anushka_3some1_oral2':
      enterAnushka_3some1Oral2(s, scene);
      break;
    case 'anushka_3some1_dom_bj':
      enterAnushka_3some1DomBj(s, scene);
      break;
    case 'anushka_3some1_bj':
      enterAnushka_3some1Bj(s, scene);
      break;
    case 'anushka_3some1_rough1':
      enterAnushka_3some1Rough1(s, scene);
      break;
    case 'anushka_3some1_anal':
      enterAnushka_3some1Anal(s, scene);
      break;
    case 'anushka_3some1_doggy':
      enterAnushka_3some1Doggy(s, scene);
      break;
    case 'anushka_3some1_dom_facial':
      enterAnushka_3some1DomFacial(s, scene);
      break;
    case 'anushka_3some1_cleanup':
      enterAnushka_3some1Cleanup(s, scene);
      break;
    case 'nush3some1_how_he_feels':
      enterNush3some1HowHeFeels(s, scene);
      break;
    case 'anushka_3some2':
      enterAnushka_3some2(s, scene);
      break;
    case 'anushka_3some2_dom_bj':
      enterAnushka_3some2DomBj(s, scene);
      break;
    case 'anushka_3some2_bj':
      enterAnushka_3some2Bj(s, scene);
      break;
    case 'anushka_3some2_rough1':
      enterAnushka_3some2Rough1(s, scene);
      break;
    case 'anushka_3some2_anal':
      enterAnushka_3some2Anal(s, scene);
      break;
    case 'anushka_3some2_doggy':
      enterAnushka_3some2Doggy(s, scene);
      break;
    case 'anushka_3some2_dom_facial':
      enterAnushka_3some2DomFacial(s, scene);
      break;
    case 'anushka_3some2_cleanup':
      enterAnushka_3some2Cleanup(s, scene);
      break;
    case 'anushka_3some2_dom_strapon':
      enterAnushka_3some2DomStrapon(s, scene);
      break;
    case 'anushka_3some2_dom_strapon_anal':
      enterAnushka_3some2DomStraponAnal(s, scene);
      break;
    case 'artem_nush_disco_walk':
      enterArtemNushDiscoWalk(s, scene);
      break;
    case 'artem_nush':
      enterArtemNush(s, scene);
      break;
    case 'artem_nush_strip':
      enterArtemNushStrip(s, scene);
      break;
    case 'artem_sveta':
      enterArtemSveta(s, scene);
      break;
    case 'artem_sveta_vag':
      enterArtemSvetaVag(s, scene);
      break;
    case 'artem_sveta_anal':
      enterArtemSvetaAnal(s, scene);
      break;
    case 'artem_chase_nush':
      enterArtemChaseNush(s, scene);
      break;
    case 'nush_bully_payback2':
      enterNushBullyPayback2(s, scene);
      break;
    case 'nush_bully_payback3':
      enterNushBullyPayback3(s, scene);
      break;
    case 'nush_bully_payback4':
      enterNushBullyPayback4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_nush_sex: LocationDef = {
  name: 'artem_nush_sex',
  title: 'He just nods and you talk about how things will go before yo',
  region: 'other',
  enter: enter,
};
