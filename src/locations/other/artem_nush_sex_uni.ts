import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAnushka_3some1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'npcStat', 'A144', 'a');
  ((s as any).artemQW = (s as any).artemQW ?? {})['nushart_oral'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some1.jpg');
  scene.text('He just nods and you talk about how things will go before you hear a knock at the door. Artem gets up and answers it, and you see Anushka standing in the hallway. He stands aside to let her in, slapping her hard on the ass as he does, causing her to jump and yelp slightly in surprise. "Someone\'s feeling feisty today I see," she says aa she looks back at him, then looks at you with a grin as she moves over to sit next to you. Artem closes the door and locks it.');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    scene.text('As he turns around, he nods and gives her a confident smile. "Why wouldn\'t I be? I owned your ass and we all know it. Now the bad girl is back for more nerd dick."');
    scene.text('She looks up at him and bites her lower lip. "You think so?" While her tone has a bit of a bite to it, you don\'t buy it. Artem is right and you can see by the look on his face that he knows it too.');
    scene.text('He grins. "I know so. Deep down, we both know you like being treated like a dirty slut and the thought of some nerd you used to bully treating you like his little cum slut has you all wet. You can\'t wait to be humiliated by a nerd while he fucks you. Tell me I\'m wrong."');
    scene.text('She\'s speechless; the shock of just how different he\'s acting seems to be too much for her to process. When she doesn\'t reply, he confidently walks over, leans forward and runs his hand up her skirt. You see her stiffen and gasp slightly when his hand disappears up her skirt. "Just what I suspected," he grins. "You\'re soaking wet already." When he pulls his hand out of her skirt, he pulls her panties off and tosses them aside. Even you\'re a little surprised by how dominant he\'s being, but you figure this is good for him.');
    scene.text('You watch as he grabs her skirt and unbuttons it before yanking it off. He then pulls off her shirt and then her bra. She never once complains or acts like she\'s not into it. In fact, she mostly bites her lower lip and occasionally giggles. He then forces her to kneel on the floor, completely exposed and naked in front of him as he starts to unbutton his pants. "Open your mouth," he orders.');
    qspCall(s, 'arousal', 'voyeur', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', goto: ['artem_nush_sex_uni', 'anushka_3some1_dom_bj'] },
    ]);
  } else {
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 2) {
      scene.text('As he turns around, he nods and gives her a confident smile. "I knew you\'d be back. When I\'m done with you, you\'ll know your ass was completely owned by a nerd. That a nerd made you his bitch and fucked you for his pleasure."');
      scene.text('She looks up at him and bites her lower lip. "I… Almost believe you…"');
      scene.text('He confidently walks over and grabs her by the chin, then lowers his face down so they\'re looking eye to eye. "Seeing is believing. I figured girls like you get off on being treated like dirty little sluts, so I\'m going to give you exactly what you want."');
      scene.text('He lets go of her and sits down between the two of you before he gives you a look and smiles. You give him a proud smile. "Now both of you strip and make out while I watch," he orders.');
      scene.text('Anushka doesn\'t say anything as she starts stripping down to her underwear. You do the same and the two of you are soon making out while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
      qspCall(s, 'arousal', 'kiss', 2, 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Eat her out', goto: ['artem_nush_sex_uni', 'anushka_3some1_oral2'] },
      ]);
    } else {
      if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 1) {
        scene.text('As he turns around, he nods and gives her a confident smile. "I promised myself that if I ever got another chance to fuck you, that I was going to fuck your ass raw."');
        scene.text('She looks up at him and bites her lower lip. "That\'s a bold claim."');
        scene.text('He confidently walks over and forces himself between the two of you. "It\'ll be a fact soon enough. Now I want both of you to strip and make out while I watch."');
        scene.text('Anushka doesn\'t say anything as she starts stripping down to her underwear. You do the same and the two of you are soon making out while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
        qspCall(s, 'arousal', 'kiss', 2, 'sub');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Eat her out', goto: ['artem_nush_sex_uni', 'anushka_3some1_oral2'] },
        ]);
      } else {
        scene.text('As he turns around, he nods and gives her a confident smile. "That\'s right, and I\'m not going to hold back on you this time."');
        scene.text('She looks around the room and you can see her smirking. "Promises, promises…"');
        scene.text('He takes a deep breath before he walks over and sits between the two of you. "I think the two of you should strip and makeout while I watch."');
        scene.text('Anushka grins at his comment. "Well look at you, all bossy and confident. I like it." She starts stripping down to her underwear and you do the same. The two of you are soon making out as you strip while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
        qspCall(s, 'arousal', 'kiss', 2);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Eat her out', goto: ['artem_nush_sex_uni', 'anushka_3some1_oral2'] },
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
    { label: 'Give Artem a blowjob', goto: ['artem_nush_sex_uni', 'anushka_3some1_bj'] },
  ]);
  scene.build();
}

function enterAnushka_3some1Oral2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some3.jpg');
  scene.text('Artem pushes your face into Anushka\'s pussy and you start licking. She\'s already wet and moans loudly as you feel Artem let go of you.');
  scene.text('You eat her out for a few minutes with no idea what Artem is doing before you pull away and see him kneeling next to you. He quickly leans in to take your place.');
  qspCall(s, 'arousal', 'cuni_give', 2, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Artem eat her out', goto: ['artem_nush_sex_uni', 'anushka_3some1_oral1'] },
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
    { label: 'Eat her out', goto: ['artem_nush_sex_uni', 'anushka_3some1_oral2'] },
  ]);
  scene.build();
}

function enterAnushka_3some1Bj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some4.jpg');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
    scene.text('You get on all fours on the couch between his legs and start stroking his cock with your hand before you take it into your mouth, bobbing your head up and down on his shaft. Artem moans as you start sucking his dick. "Don\'t just stand there! Use that mouth of yours for something good for a change and get my girl nice and wet!" Moments later, you feel a warm wet tongue starts lapping at your clit as Anushka starts eating you out.');
  } else {
    scene.text('You get on all fours on the couch between his legs and start stroking his cock with your hand before you take it into your mouth, bobbing your head up and down on his shaft. Artem moans as you start sucking his dick. "Go on and pleasure my girl," he orders and moments later, you feel a warm wet tongue starts lapping at your clit as Anushka starts eating you out.');
  }
  qspCall(s, 'arousal', 'bj', 2);
  qspCall(s, 'arousal', 'cuni', (-2), ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell Anushka to suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some5.jpg');
    if (((st as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
      scene.text('You pop his dick out of your mouth and look back at Anushka. "Get up here and suck his cock like the good little slut you are!"');
      scene.text('She stops eating you out to look up at you with an amused smirk on her face before she moves up and kneels down beside the couch. She obediently takes his cock in one hand and starts stroking it while she takes the head into her mouth, tightly wraps her lips around his shaft and starts sucking. You glance up at Artem and see him smiling. "I\'m glad you talked me into this. It\'s great having our own little fuck slut."');
      scene.text('You give him an amused smile before you start licking his balls, which makes him moan loudly.');
    } else {
      scene.text('You pop his dick out of your mouth and look back at Anushka. "Get up here and suck this cock like the good little slut you are!"');
      scene.text('She stops eating you out to look up at you with an amused smirk on her face before she moves up and kneels down beside the couch. She obediently takes his cock in one hand and starts stroking it while she takes the head into her mouth, tightly wraps her lips around his shaft and starts sucking. After you\'re satisfied that she\'s doing what you want, you start licking his balls and hear him moaning loudly.');
    }
    qspCall(st, 'arousal', 'foreplay_give', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some6.jpg');
    // TODO-QSP: dynamic text: He grabs hold of Anushka''s head and pulls her off as he looks at you. "I need t...
    scene.text(`He grabs hold of Anushka's head and pulls her off as he looks at you. "I need to fuck you, ${((st as any).pcs_nickname || '')}."`);
    // TODO-QSP: dynamic text: You lift yourself up and straddle him before lining his dick up with your pussy ...
    scene.text(`You lift yourself up and straddle him before lining his dick up with your pussy and slowly lowering yourself down on it, taking his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick inside you. As you start riding him, Anushka moves up to his head, straddles his face and lowers herself down, grinding her crotch into his face as you ride him. You both moan from the pleasure of the act and watching your friend be pleasured by your boyfriend.`);
    scene.text('A few minutes later, he lifts her off and then smacks your ass. "Bring that sweet pussy up here."');
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch with Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some7.jpg');
    if (((st as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
      scene.text('You get off him and move up to his face to straddle it. As you do, you look at Anushka. "Sit on my boyfriend\'s cock like a good little slut."');
      scene.text('Anushka laughs at your comment. "Whatever you say, nerd tamer."');
      scene.text('She lifts herself up and shimmies down his body until she\'s above his dick. You straddle his face and he starts licking your wet pussy as you watch Anushka lower herself down until his cock slides into her wet pussy. She moans softly as she starts riding him in reverse cowgirl style.');
      scene.text('"Take the whole thing," you tell her as you reach over and grab her shoulders, pushing her down until she\'s impaled balls deep on his cock.');
    } else {
      scene.text('You get off him and move up to his face to straddle it. As you do, you look at Anushka. "Get over here. I want to see you ride this cock, slut."');
      scene.text('Anushka laughs at your comment. "Whatever you say, nerd tamer."');
      scene.text('She lifts herself up and shimmies down his body until she\'s above his dick. You straddle his face and he starts licking your wet pussy as you watch Anushka lower herself down, impaling herself on his cock. She moans softly as she starts riding him in reverse cowgirl style.');
    }
    qspCall(st, 'arousal', 'cuni', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lay on your side', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some8.jpg');
    scene.text('After a few minutes, you lean forward and slap her ass, which causes her to yelp a little in surprise. "Don\'t be greedy! I want another go."');
    scene.text('She scoffs. "Me? Greedy? You rode him for longer than I did!" She rolls her eyes and climbs off him as you lie down on your side next to him and he turns on his side to face you. You hold up one of your legs and Artem wastes no time. He slides his dick back inside you and starts gently thrusting as Anushka gets down and starts licking and sucking his balls.');
    qspCall(st, 'arousal', 'vaginal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let Artem take charge', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some9.jpg');
    scene.text('He pulls out of you and gets up. You slide off the couch as he grabs Anushka and forcefully pushes her down on the ottoman. She gasps a little at his sudden action, but before she can say anything, he grabs her leg and pulls her towards him until her ass is almost hanging off the end. He then pushes her legs apart and plunges his cock back into her pussy, causing her to moan as you move up towards her head and sit on her face. She starts eating you out as you glance at Artem and give him a reassuring smile.');
    scene.text('"Can you hand me the lube?" he asks.');
    qspCall(st, 'arousal', 'cuni', 2, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Hand him the lube', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some10.jpg');
    scene.text('You reach over and grab the lube while grinding your pussy against Anushka\'s face. You don\'t know if Anushka heard him or if she\'s just ignoring what the two of you are saying as you keep riding her face until you hear her muffled loud groan. Glancing back, you see that Artem has inserted his dick into her ass.');
    qspCall(st, 'arousal', 'cuni', 2, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him have his fun', goto: ['artem_nush_sex_uni', 'anushka_3some1_rough1'] },
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
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some11.jpg');
  scene.text('You want to watch your boyfriend fuck your friend\'s ass, so you climb off her and kneel beside her so you can get a good look at Artem\'s cock sliding in and out of her ass. "Come on, fuck her like the dirty little slut she is!"');
  scene.text('Anushka looks up at him while biting her lower lip, but doesn\'t say anything. He looks at you when you speak up, then looks at her, and his gaze hardens before he starts ramming his cock harder in her ass. Anushka responds by moaning louder, enjoying the hard fucking Artem is giving her ass.');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him to butt fuck you', goto: ['artem_nush_sex_uni', 'anushka_3some1_anal'] },
    { label: 'Let him keep going', goto: ['artem_nush_sex_uni', 'anushka_3some1_doggy'] },
  ]);
  scene.build();
}

function enterAnushka_3some1Anal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some12.jpg');
  scene.text('You reach up and cup his face in your hands, holding his gaze so he looks directly into your eyes. "I want you to fuck my ass now."');
  scene.text('He grins widely at you and you move to straddle Anushka\'s face while he moves around behind you, near the top of her head. He squirts some lube onto your asshole and works it in before he gently slides his cock up your ass, pausing when you tense up and only moving again when you relax. He\'s soon slowly, yet lovingly fucking your ass while Anushka eats you out.');
  qspCall(s, 'arousal', 'anal', 2, 'lube');
  qspCall(s, 'arousal', 'cuni', (-2), ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some13.jpg');
    scene.text('You lower your head between Anushka\'s legs and start lapping at her clit, and she does the same to you as Artem continues fucking your ass. He gets a little rougher with you and starts fucking you harder and deeper as he seems to get caught up in the moment before he he suddenly pulls out of you and slaps your butt cheek. "Let\'s switch it up."');
    qspCall(st, 'arousal', 'anal', 2, 'lube');
    qspCall(st, 'arousal', 'cuni', (-2), ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him control the situation', goto: ['artem_nush_sex_uni', 'anushka_3some1_doggy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some1Doggy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some14.jpg');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
    scene.text('Artem half pulls, half helps Anushka get up as you lay down in her place. As soon as you\'re on your back, she straddles your face and you see her slightly gaping asshole above you. As you start licking her pussy, Artem comes up behind her and shoves his dick balls deep up her ass in one thrust, causing her to moan loudly. "You love taking my nerd dick up your ass, don\'t you? Tell me you love it. Beg me to fuck your ass."');
    scene.text('"Oh fuck yes! I love your big nerd dick in my ass…" she moans as he fucks her ass while you eat her out. "Please, please… Pound my ass…" He gives her ass cheek a few smacks as he pounds her ass.');
  } else {
    scene.text('Artem half pulls, half helps Anushka get up as you lay down in her place. As soon as you\'re on your back, she straddles your face and you see her slightly gaping asshole above you. As you start licking her pussy, Artem comes up behind her and slides his dick back into her asshole, causing her to moan loudly. "Yeah, you like that, don\'t you slut? Tell me how much you love taking nerd dick in your ass."');
    scene.text('"Oh fuck yes! I love your big nerd dick in my ass…" she moans as he fucks her ass while you eat her out. He gives her ass cheek a few smacks as he keeps thrusting into her ass.');
  }
  qspCall(s, 'arousal', 'cuni_give', 2, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep eating her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some15.jpg');
    scene.text('As you lick your friend\'s pussy, you have a perfect view to watch Artem\'s cock as he starts taking long, hard thrusts into her ass. "OH FUCK… OH FUCK… OH FUUUCCCKKK!" she cries out as her her legs start shaking and your face is covered in her pussy juices. Artem fucks her through her orgasm, not letting up or slowing down as she cums hard.');
    qspCall(st, 'arousal', 'cuni_give', 2, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some16.jpg');
    if (((st as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
      scene.text('"That\'s right. Moan like a slut as this nerd pounds that ass. I own your ass now," he says before he leans forward and reaches out with one of his arms. A moment later, you feel her breasts lifting off your stomach as Artem pulls her up. "Tell me whose ass this is."');
      scene.text('"It\'s your ass…" she pants.');
      scene.text('He grunts a reply. "No, this ass belongs to the nerds. You used to be some cool badass chick. Now… Now you\'re owned by some nerd. Maybe I\'ll share you with the other nerds and they can all take a turn fucking you. You\'d like that, wouldn\'t you?" Anushka is panting harder and moaning louder as he speaks.');
      scene.text('When she doesn\'t respond to his question, he asks again. "WOULDN\'T YOU?!" he asks in a commanding voice and you find yourself getting wet at his dominating tone.');
      scene.text('"OHHH YES… YES… YES…" Anushka cries out as she has another orgasm, coating your face with her juices again.');
      scene.text('"Look at you cumming again just thinking about being fucked by other nerds!" Artem boasts as he keeps fucking her until she rides out her second orgasm. He then pulls out of Anushka and starts stroking his dick while pulling her off you.');
    } else {
      if (((st as any).artemQW ?? 0)?.['rough_anal_nush'] <= 1) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['rough_anal_nush'] = 2;
        scene.text('Despite grunting like he\'s about to cum, he manages to control himself and starts smacking her ass as he continues fucking her. "OHHH… YES… YES… YES…" she cries out as she has another orgasm, coating your face with her juices again. He keeps fucking her until she rides out her second orgasm. He then pulls out of Anushka and starts stroking his dick while pulling her off you.');
      } else {
        scene.text('It doesn\'t take much longer before he starts to grunt, and you can tell he\'s about to cum, yet he manages to control himself. "OHHH… YES… YES… YES…" she cries out as she has another orgasm, coating your face with her juices again. He keeps fucking her until she rides out her second orgasm. He then pulls out of Anushka and starts stroking his dick while pulling her off you.');
      }
    }
    qspCall(st, 'arousal', 'cuni_give', 5, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Sit up and watch', goto: ['artem_nush_sex_uni', 'anushka_3some1_dom_facial'] },
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
    { label: 'Clean up', goto: ['artem_nush_sex_uni', 'anushka_3some1_cleanup'] },
    { label: 'Lick the cum from her face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some17.jpg');
    scene.text('You kneel down next to Anushka as she closes her mouth and swallows Artem\'s cum. You start licking the cum off her face as she patiently sits still until you\'ve licked up every last drop of Artem\'s cum from her face. Once you finish, you look over at him and notice that his dick is already hard again. You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['artem_nush_sex_uni', 'anushka_3some1_cleanup'] },
    ]);
  } },
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_cumkiss.jpg');
    scene.text('You kneel down and start kissing her as he sits on the couch and watches you. The two of you deeply and passionately make out, passing Artem\'s cum back and forth between you. Once you\'re finished, you both swallow his cum before you look over at him and notice that his dick is already hard again. You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['artem_nush_sex_uni', 'anushka_3some1_cleanup'] },
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
  scene.text('You bite your lip, half expecting Anushka to go off on him now for admitting it was just an act, but to your surprise she walks over and pats him on the cheek. "You did great and I loved it. Word of advice, though. Next time, don\'t ruin it like that. Own the attitude, okay?"');
  scene.text('He giggles softly as he nods. "Got it." Then it seems to hit him. "Next time?"');
  scene.text('She shrugs as she starts getting dressed. "Sure, if you guys want. I had fun, so why not?"');
  // TODO-QSP: dynamic text: He grins ear from ear, apparently never expecting to hear all the praise he''s g...
  scene.text(`He grins ear from ear, apparently never expecting to hear all the praise he's getting. "Yeah, sure." Then he glances at you. "I mean if ${((s as any).pcs_nickname || '')} is okay with it."`);
  scene.text('You smile at him. "We can talk about it later." You had fun, but do you wantyour boyfriend fucking one of your best friends to be a regular thing?');
  if (((s as any).grupTipe ?? 0) === 3) {
    // TODO-QSP: dynamic text: Once you''re all dressed, Anushka touches up her makeup using her compact mirror...
    scene.text(`Once you're all dressed, Anushka touches up her makeup using her compact mirror. Once she's done, she stands up. "Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((s as any).pcs_nickname || '')}. Later nerds."`);
  } else {
    // TODO-QSP: dynamic text: Once you''re all dressed, Anushka touches up her makeup using her compact mirror...
    scene.text(`Once you're all dressed, Anushka touches up her makeup using her compact mirror. Once she's done, she stands up. "Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((s as any).pcs_nickname || '')}. Later losers."`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask how he feels', goto: ['artem_nush_sex_uni', 'nush3some1_how_he_feels'] },
    { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "Thank you, thank you for everything. I had a great time. I really needed this more than you\'ll ever know." He kisses you again before walking you to the door. As you leave, you think about what just happened. You\'ve set it up so your boyfriend and best friend are interested in having more threesomes. As you head out the door and Artem closes it behind you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNush3some1HowHeFeels(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You smile and kiss him again. You pause while looking at him; he just seems a little different and more confident. "So, how did that make you feel?"');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
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
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
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
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['artem_dom'] = 1;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile at him. "We\'ll see. Maybe I\'ll save it for special rewards for you."');
    scene.text('You talk for a few minutes before you tell him you need to get going. He kisses you before walking you to the door. As you leave, you think about what just happened. You\'ve set it up so your boyfriend and best friend are interested in having more threesomes. As you head out the door and Artem closes it behind you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnushka_3some2(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some1.jpg');
  scene.text('As the two of you talk about last time and what he\'s expecting this time, there\'s a knock on the door. Artem gets up and answers it, and you see Anushka standing in the hallway. He stands aside to let her in, slapping her hard on the ass as he does. "Yeah baby, smack my ass…" she says teasingly as he locks the door before quickly catching up to smack her again.');
  scene.text('"I\'m going to do a lot more than smack it!" he replies with a grin.');
  scene.text('She gives you an amused, yet slightly aroused grin as she walks over to the couch and Artem starts undressing her. Once she\'s naked, he pushes her down firmly by the shoulders and she drops down onto her knees in front of him. "Open your mouth, slut," he says as he unbuttons his pants.');
  qspCall(s, 'arousal', 'voyeur', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch', goto: ['artem_nush_sex_uni', 'anushka_3some2_dom_bj'] },
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
    // TODO-QSP: dynamic text: Artem buries your face in Anushka''s pussy and you start licking. She''s already...
    scene.text(`Artem buries your face in Anushka's pussy and you start licking. She's already wet and moans loudly as you feel Artem let go of you. "That's it. Get her nice and wet for me, ${((st as any).pcs_nickname || '')}."`);
    scene.text('As you eat her out, you notice Artem undressing out of the corner of your eye. Once he\'s naked, he kneels down next to you. "Take off your clothes," he orders as you move aside, letting him lean in and take your place.');
    qspCall(st, 'arousal', 'cuni_give', 2, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Artem eat her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some2.jpg');
    scene.text('Artem buries his face in Anushka\'s pussy and starts eating her out, which causes her to moan loudly as you watch the action while undressing. After a few minutes, he pulls away and examines her wet pussy. "Look how wet you are! You just can\'t wait for some nerd dick, can you? Beg me to fuck you."');
    scene.text('She glances over at you with a bemused grin on her face. "Please fuck me with your big nerd dick! Pound my little pussy, please!" You can tell she\'s hamming it up a little for him.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Artem fuck her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_fuck1.jpg');
    // TODO-QSP: dynamic text: Artem stands up and smacks his dick against Anushka''s ass cheeks a few times be...
    scene.text(`Artem stands up and smacks his dick against Anushka's ass cheeks a few times before he rubs the tip against her soaking wet pussy, causing her to moan. You watch as he slides his dick into her, her pussy easily swallowing up ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} cock as he starts fucking her. Listening to her moaning with each thrust is arousing you, so you slide your hand down to your own wet pussy and start rubbing your clit, masturbating as you watch them fuck.`);
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka get pounded', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_fuck2.jpg');
    scene.text('Artem suddenly buries his cock balls deep into Anushka\'s pussy and she moans loudly as he starts really pounding her hard, his balls slapping against her clit with each thrust. She stares right at you as you rub your clit with your hand, watching your boyfriend pound your friend in front of you.');
    scene.text('He glances over at you. "Are you ready to join in, my love?"');
    if (((st as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((st as any).strapNumber ?? 0) > 0  &&  ((st as any).strapNumber ?? 0) < 5) {
      scene.text('You do have a strapon in your purse, so you could fuck her too.');
    }
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'stat', '');
    if (((st as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((st as any).strapNumber ?? 0) > 0  &&  ((st as any).strapNumber ?? 0) < 5) {
      scene.actions([
        { label: 'You want to fuck her', goto: ['artem_nush_sex_uni', 'anushka_3some2_dom_strapon'] },
      ]);
    }
    scene.actions([
      { label: 'Yes', goto: ['artem_nush_sex_uni', 'anushka_3some2_bj'] },
      { label: 'You just want to watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal1.jpg');
    scene.text('You look at him and smile. "I just want to watch you fuck her this time."');
    scene.text('Artem looks a little surprised, but just nods. "Okay. Can you hand me the lube then?" You grab the lube and pass it to him, and he lubes up Anushka\'s asshole as he keeps fucking her pussy. Once he has her ready, he pulls out of her pussy and lines his dick up against her asshole before he pushes forward and his cock slides into her ass, causing her to gasp and moan. She glances back over her shoulder, watching you masturbate while Artem starts fucking her ass.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal2.jpg');
    scene.text('As Artem fucks Anushka\'s ass, he starts slapping her ass cheek with one hand, which makes her moan louder before her legs start to shake as she cries out in orgasm. Artem keeps fucking her hard and fast as she rides through her orgasm until her legs stop shaking.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal3.jpg');
    scene.text('Anushka reaches back and puts a hand against his hip to try and slow him down, but Artem keeps smacking her hand away and doesn\'t slow down as he starts to grunt, getting close to shooting his load as well. "Stop trying to slow me down! This ass belongs to the nerds, so take my cock. Take it!" he grunts, barely able to contain himself anymore.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal_cum.jpg');
    scene.text('Artem suddenly pulls out of Anushka and starts cumming over her ass. He milks every drop out of his cock before he lets out a loud sigh and half sits, half collapses on the couch. Anushka remains where she is with her ass in the air, covered in his cum.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).artemQW ?? 0)?.['nush3some_again'] === 5) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['nush3some_again'] = 6;
    }
    if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('Anushka grabs some tissues and starts cleaning herself up. "Why didn\'t join in?" she asks. "That time of the month?"');
    scene.text('You smirk. "No, I just wanted to watch your ass get owned by some nerd dick. You\'re really starting to become a submissive little slut to him."');
    scene.text('Anushka rolls her eyes and shakes her head. "Whatever gets you off." Once she finishes cleaning the cum off herself, she starts getting dressed, as do you and Artem. Anushka then grabs her purse and compact and starts touching up her makeup.');
    if (((st as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: Once you''re all dressed, Anushka finishes her makeup and gets up. "Okay, I need...
      scene.text(`Once you're all dressed, Anushka finishes her makeup and gets up. "Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later nerds."`);
    } else {
      // TODO-QSP: dynamic text: Once you''re all dressed, Anushka finishes her makeup before she gets up. "Okay,...
      scene.text(`Once you're all dressed, Anushka finishes her makeup before she gets up. "Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later losers."`);
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "See you later, babe. I can\'t wait to do this again, though I hope you join in next time." He kisses you again before walking you to the door. As you leave, you think about what just happened. You just let your boyfriend fuck your best friend. As you head out the door and Artem closes it behind you, you wonder if it was a mistake to watch them. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
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
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some4.jpg');
  scene.text('You nod and he pulls out of Anushka and slaps her ass so that she\'ll move out of the way before he lays down on his back. "Come over and give me a blowjob," he orders and you get on all fours between his legs and start stroking his cock with your hand before you take it into your mouth, bobbing your head up and down on his shaft.');
  scene.text('Artem moans as you start sucking his dick. "Don\'t just stand there. Use that mouth of yours for something good for a change and get my girl nice and wet!" he barks at Anushka before you feel her tongue start lapping at your clit as she starts eating you out.');
  qspCall(s, 'arousal', 'bj', 2);
  qspCall(s, 'arousal', 'cuni', (-2), ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell Anushka to suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some5.jpg');
    scene.text('You pop his dick out of your mouth and look back at Anushka. "Get up here and suck his cock like the good little slut you are!"');
    scene.text('She stops eating you out to look up at you with an amused smirk on her face before she moves up and kneels down beside the couch. She obediently takes his cock in one hand and starts stroking it while she takes the head of his dick into her mouth, tightly wraps her lips around his shaft and starts sucking. You glance up at Artem and see him smiling. "I\'m glad you talked me into this. It\'s great having our own little fuck slut."');
    scene.text('You give him an amused smile before you start licking his balls, which makes him moan loudly.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some6.jpg');
    // TODO-QSP: dynamic text: He grabs hold of Anushka''s head and pulls her off before he looks at you. "I ne...
    scene.text(`He grabs hold of Anushka's head and pulls her off before he looks at you. "I need to fuck you, ${((st as any).pcs_nickname || '')}."`);
    // TODO-QSP: dynamic text: You straddle him and line his dick up with your pussy before slowly lowering you...
    scene.text(`You straddle him and line his dick up with your pussy before slowly lowering yourself down onto it, taking his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick inside you. As you start riding him, Anushka moves up to his head, straddles his face and lowers herself down, grinding her crotch into his face as you ride him. You both moan from the pleasure of the act.`);
    scene.text('A few minutes later, he lifts her off and smacks your ass. "Bring that sweet pussy up here."');
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch with Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some7.jpg');
    scene.text('You get off him and move up to his face to straddle it. As you do, you look at Anushka. "Sit on my boyfriend\'s cock like a good little slut."');
    scene.text('Anushka laughs at your comment. "Whatever you say, nerd tamer." She lifts herself up and shimmies down his body until she\'s above his dick. You straddle his face and he starts licking your wet pussy as you watch Anushka lower herself down until his cock slides into her wet pussy. She moans softly as she starts riding him reverse cowgirl style.');
    scene.text('"Take the whole thing," you tell her as you reach over and grab her shoulders, pushing her down until she\'s impaled balls deep on his cock.');
    qspCall(st, 'arousal', 'cuni', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lay on your side', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some8.jpg');
    scene.text('After a few minutes, you lean forward and slap her ass, which causes her to yelp a little in surprise. "Don\'t be greedy! I want another go."');
    scene.text('She scoffs. "Me? Greedy? You rode him for longer than I did!" She rolls her eyes and climbs off him as you lie down on your side next to him and he turns on his side to face you. You hold up one of your legs and Artem wastes no time. He slides his dick back inside you and starts gently thrusting as Anushka gets down and starts licking and sucking his balls.');
    qspCall(st, 'arousal', 'vaginal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let Artem take charge', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some9.jpg');
    scene.text('He pulls out of you and gets up. You slide off the couch as he grabs Anushka and forecefully pushes her down on the ottoman. She gasps a little at his sudden action, but before she can say anything, he grabs her leg and pulls her towards him until her ass is almost hanging off the end. He then pushes her legs apart and plunges his cock back into her pussy, causing her to moan as you move up towards her head and sit on her face. She starts eating you out as you glance at Artem and give him a reassuring smile.');
    scene.text('"Can you hand me the lube?" he asks.');
    qspCall(st, 'arousal', 'cuni', 2, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Hand him the lube', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some10.jpg');
    scene.text('You reach over and grab the lube while grinding your pussy against Anushka\'s face before passing it back to him. You don\'t know if Anushka heard him or if she\'s just ignoring what the two of you are saying as you keep riding her face until you hear her muffled groan. Glancing back, you see that Artem has inserted his dick into her ass and started butt fucking her.');
    qspCall(st, 'arousal', 'cuni', 2, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him have his fun', goto: ['artem_nush_sex_uni', 'anushka_3some2_rough1'] },
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
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some11.jpg');
  scene.text('You want to watch your boyfriend fuck your friend\'s ass, so you climb off her and kneel beside her so you can get a good look at Artem\'s cock sliding in and out of her ass. "Listen to this slut moan! She loves getting her ass owned by nerd cock!"');
  scene.text('Anushka responds by moaning louder as he looks at you and grins. "Yeah she does! By the time we\'re done with her, she\'ll be begging every nerd at the university to fuck her ass!" He then looks down at Anushka. "Wouldn\'t you, slut?" He doesn\'t wait for her to respond. "Oh how the mighty have fallen. I remember when you were a badass bitch and now you\'re our little submissive fuck slut."');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him to butt fuck you', goto: ['artem_nush_sex_uni', 'anushka_3some1_anal'] },
    { label: 'Let him keep going', goto: ['artem_nush_sex_uni', 'anushka_3some1_doggy'] },
  ]);
  scene.build();
}

function enterAnushka_3some2Anal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some12.jpg');
  scene.text('You reach up and cup his face in your hands, holding his gaze so he looks directly into your eyes. "I want you to fuck my ass now."');
  scene.text('He grins widely at you and you move to straddle Anushka\'s face while he moves around behind you, near the top of her head. He squirts some lube onto your asshole and works it in before he gently slides his cock up your ass, pausing when you tense up and only moving again when you relax. He\'s soon slowly yet lovingly fucking your ass while Anushka eats you out.');
  qspCall(s, 'arousal', 'anal', 2, 'lube');
  qspCall(s, 'arousal', 'cuni', (-2), ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some13.jpg');
    scene.text('You lower your head between Anushka\'s legs and start lapping at her clit, and she does the same to you as Artem continues fucking your ass. He gets a little rougher with you and starts fucking you harder and deeper as he seems to get caught up in the moment before he he suddenly pulls out of you and slaps your ass cheek. "Let\'s switch it up."');
    qspCall(st, 'arousal', 'anal', 2, 'lube');
    qspCall(st, 'arousal', 'cuni', (-2), ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him control the situation', goto: ['artem_nush_sex_uni', 'anushka_3some2_doggy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some2Doggy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some14.jpg');
  scene.text('Artem half pulls, half helps Anushka get up as you lay down in her place. As soon as you\'re on your back, she straddles your face and you see her slightly gaping asshole above you. As you start licking her pussy, Artem comes up behind her and shoves his dick balls deep up her ass in one thrust, causing her to moan loudly. "Damn, look how easy my dick just slides into her slutty ass! It\'s like her ass was made for taking dick!"');
  scene.text('"Oh fuck… Yes… I love big nerd dick… In my ass…" she moans breathlessly as he fucks her ass and you eat her out.');
  qspCall(s, 'arousal', 'cuni_give', 2, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep eating her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some15.jpg');
    scene.text('As you lick your friend\'s pussy, you have a perfect view to watch Artem\'s cock as he starts taking long, hard thrusts into her ass. "OH FUCK… OH FUCK… OH FUUUCCCKKK!" she cries out as her her legs start shaking and your face is covered in her pussy juices. Artem fucks her through her orgasm, not letting up or slowing down as she cums hard.');
    qspCall(st, 'arousal', 'cuni_give', 2, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some16.jpg');
    scene.text('"That\'s right. Moan like a slut while taking my dick in your ass!" he says before he leans forward and reaches out with one of his arms. A moment later you feel her breasts lifting off your stomach, you can only guess that he is pulling her up and back by her hair. "Tell me whose ass this is."');
    scene.text('She moans and pants. "It belongs to the nerds!"');
    scene.text('He grunts a reply. "That\'s right, your ass belongs to the nerds. What do you think about me inviting Petka over to have a turn with your ass? Or maybe at the next D&D night, I\'ll just bend you over the table and fuck your ass in front of all my friends? You\'d like that, wouldn\'t you?" Anushka is panting hard and doesn\'t respond. "WOULDN\'T YOU!" He sounds louder in a commanding voice and you find yourself getting wetter at his dominating tone.');
    scene.text('It seems to be working for Anushka. "OHHH… YES… YES… YES…" she cries out as she has another orgasm, coating your face with her juices again. You\'re pretty sure she isn\'t really paying attention to what he\'s saying.');
    scene.text('Artem laughs as he keeps fucking her. "Look at you cumming again just thinking about being fucked by other nerds!" He keeps fucking her until she rides out her second orgasm, then pulls out of Anushka\'s asshole and starts stroking his dick while pulling her off you.');
    qspCall(st, 'arousal', 'cuni_give', 5, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Sit up and watch', goto: ['artem_nush_sex_uni', 'anushka_3some2_dom_facial'] },
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
    { label: 'Lick the cum from her face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some17.jpg');
    scene.text('You kneel down next to Anushka as she closes her mouth and swallows Artem\'s cum. You start licking the cum off her face as she patiently sits still until you\'ve licked up every last drop of Artem\'s cum from her face. Once you finish, you look over at him and notice that his dick is already hard again. You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A2', 1);
  } },
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_cumkiss.jpg');
    scene.text('You kneel down and start kissing her as he sits on the couch and watches you. The two of you deeply and passionately make out, passing Artem\'s cum back and forth between you. Once you\'re finished, you both swallow his cum before you look over at him and notice that his dick is already hard again. You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A2', 1);
  } },
    { label: 'Clean up', goto: ['artem_nush_sex_uni', 'anushka_3some2_cleanup'] },
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
    // TODO-QSP: dynamic text: Once you''re all dressed, Anushka touches up her makeup using her compact mirror...
    scene.text(`Once you're all dressed, Anushka touches up her makeup using her compact mirror. Once she's done, she gets up. "Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((s as any).pcs_nickname || '')}. Later nerds."`);
  } else {
    // TODO-QSP: dynamic text: Once you''re all dressed, Anushka touches up her makeup using her compact mirror...
    scene.text(`Once you're all dressed, Anushka touches up her makeup using her compact mirror. Once she's done, she gets up. "Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((s as any).pcs_nickname || '')}. Later losers."`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "I look forward to next time. Maybe we can change it up a bit?" He kisses you again before walking you to the door. As you leave, you think about what just happened. You\'ve managed to make it a regular thing for you and your boyfriend to have a threesome with your best friend. As you head out the door and Artem closes it behind you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some2DomStrapon(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'D' + ((s as any).strapNumber ?? 0) + '');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_strap1.jpg');
  scene.text('While Artem fucks Anushka doggy style, you grab your purse and pull out your strapon harness. You slip into it and buckle it in place before taking the dildo out and attaching it to the harness. Artem glances over at you once you have the strapon firmly attached and pulls out of Anushka before standing aside. You walk up and give her ass a hard slap. "Roll over. I want you to watch me while I fuck you with my big dick!"');
  // TODO-QSP: dynamic text: Anushka rolls over onto her back and spreads her legs before you scoot up on you...
  scene.text(`Anushka rolls over onto her back and spreads her legs before you scoot up on your knees and slide the dildo into her. Your ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dildo slides easily into her wet pussy, making her moan loudly as you start fucking her.`);
  qspCall(s, 'arousal', 'vaginal_strap_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_fuck2.jpg');
    scene.text('Artem leans over to watch your dildo slide in and out of her pussy while stroking his dick, eager to get another go himself. "Damn, she\'s so wet that thing\'s just sliding in and out of her with ease." Anushka for her part just moans loving getting fucked by you while Artem watches. After a couple of minutes Artem grabs the lube off the end table and starts to lube up his dick with it. "Okay, roll the slut over so I can have a go at her ass."');
    scene.text('You pull out of her, which causes her to moan softly in disappointment as you stand up. "Roll over and present that ass, slut!" Anushka bites her lower lip and rolls back over before Artem pulls her off the couch into a kneeling position on the floor in front of it. He then pushes her forward, bending her over the couch seat.');
    qspCall(st, 'arousal', 'vaginal_strap_give', 2, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal1.jpg');
    scene.text('He squirts amble lube onto her asshole before tossing the bottle aside. "Time to ripen up some gopnik ass with a nerd dick!" he laughs as he roughly shoves his dick up her ass.');
    scene.text('She partially jumps forward, but her hips hit the edge of the couch and can\'t she move. "Ow, fuck…" Artem goes very slowly until she fully relaxes and starts moaning loudly.');
    scene.text('You stroke your dildo like it\'s a cock while you watch Artem fuck Anushka\'s ass; the louder she moans, the harder and faster he goes.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take turns fucking her ass', goto: ['artem_nush_sex_uni', 'anushka_3some2_dom_strapon_anal'] },
      { label: 'Just watch him fuck her ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal2.jpg');
    scene.text('As Artem fucks Anushka\'s ass, he starts slapping her ass cheek, which makes her moan louder before her legs start to shake and she cries out in orgasm. Artem keeps fucking her hard and fast as she rides through her orgasm until her legs stop shaking.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal3.jpg');
    scene.text('Anushka reaches back and puts a hand against his hip to try and slow him down, but Artem keeps smacking her hand away and doesn\'t slow down as he starts to grunt, getting close to shooting his load as well. "Stop trying to slow me down! This ass belongs to the nerds, so take my cock. Take it!" he grunts, barely able to contain himself anymore.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal_cum.jpg');
    scene.text('Artem suddenly pulls out of Anushka and starts cumming over her ass. He milks every drop out of his cock before he lets out a loud sigh and half sits, half collapses on the couch. Anushka remains where she is with her ass in the air, covered in his cum.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).artemQW ?? 0)?.['nush3some_again'] === 5) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['nush3some_again'] = 6;
    }
    if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('Anushka grabs some tissues and starts cleaning herself up. "How come you didn\'t join in?" she asks. "That time of the month?"');
    scene.text('You laugh. "No, I just wanted to watch your ass get owned by some nerd dick. You\'re starting to really become a submissive slut to him."');
    scene.text('Anushka rolls her eyes and shakes her head. "Whatever gets you off." Once she finishes cleaning herself, she starts getting dressed, as do you and Artem. Anushka then grabs her purse and compact and starts to touch up her makeup.');
    if (((st as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: Once you''re all dressed and Anushka is done touching up her makeup, she gets up...
      scene.text(`Once you're all dressed and Anushka is done touching up her makeup, she gets up. "Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later nerds."`);
    } else {
      // TODO-QSP: dynamic text: Once you''re all dressed and Anushka is done touching up her makeup, she gets up...
      scene.text(`Once you're all dressed and Anushka is done touching up her makeup, she gets up. "Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later losers."`);
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "See you later, babe. I can\'t wait to do this again, though I hope you join in next time." He kisses you again before walking you to the door. As you leave, you think about what just happened. You just let your boyfriend fuck your best friend. As you head out the door and Artem closes it behind you, you wonder if it was a mistake to watch them. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
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
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) + (1);
  qspCall(s, 'boyStat', 'D' + ((s as any).strapNumber ?? 0) + '');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_strap_anal1.jpg');
  scene.text('You stand next to him and watch as he fucks her ass. "Babe, I want to fuck her too," you tell him.');
  scene.text('He looks over at you and grins, then pulls out of her asshole, leaving it gaping and waiting for you. You grab her ass cheeks with your hands and spread them wide, making her hole gape a bit wider as you position yourself and line the tip of the dildo up with her hole before you push it in.');
  // TODO-QSP: dynamic text: She moans loudly as the <<dick>>cm <<$dick_girth>> dildo easily slides into her ...
  scene.text(`She moans loudly as the ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dildo easily slides into her lubed asshole and you fuck her for a few minutes before Artem starts crowding against you, wanting another go himself.`);
  qspCall(s, 'arousal', 'anal_strap_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let Artem have a turn', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal2.jpg');
    scene.text('You pull out of her and move aside as Artem slides over to take your place. He slides his dick into her awaiting asshole and starts fucking her ass while slapping her ass cheek. Before too long, her legs start to shake as she cries out in orgasm, Artem fucking her hard and fast until her legs stop shaking.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take your turn again', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_strap_anal2.jpg');
    scene.text('"I want to fuck her ass some more," you tell Artem, who suddenly pulls out of Anushka and gives her ass a good slap and moves aside.');
    scene.text('"Sorry honey, I got carried away fucking our pet slut\'s ass," he grins and you smile at him as you slide your dildo back up her ass and start fucking her hard and fast. After a few minutes, you think she\'s about to have another orgasm and can tell Artem is not that far off himself, so you move aside to give him another go.');
    qspCall(st, 'arousal', 'anal_strap_give', 2, 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Let Artem have another turn', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal3.jpg');
    scene.text('Artem shoves his dick into Anushka, going balls deep into her ass in a single thrust before he starts fucking her. "Take my cock, bitch!" he grunts as Anushka\'s legs start shaking again as she has a second orgasm. As she\'s coming down, he starts to grunt, barely able to contain himself anymore.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some_dom_anal_cum.jpg');
    scene.text('Artem suddenly pulls out of Anushka and starts cumming over her ass. He milks every drop out of his cock before he lets out a loud sigh and half sits, half collapses on the couch. Anushka remains where she is with her ass in the air, covered in his cum.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).artemQW ?? 0)?.['nush3some_again'] === 5) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['nush3some_again'] = 6;
    }
    if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('Anushka grabs some tissues and starts cleaning up. "That was amazing, though I think my ass is going to be sore tomorrow."');
    scene.text('Artem snorts. "Serves you right for all the years you bullied me."');
    scene.text('You laugh. "You\'re becoming a real submissive butt slut for this nerd, aren\'t you?"');
    scene.text('Anushka rolls her eyes and shakes her head. "Whatever. I just like getting fucked." Once she finishes cleaning herself, she starts getting dressed, as do you and Artem. Anushka then grabs her purse and compact and starts to touch up her makeup.');
    if (((st as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: Once you''re all dressed and Anushka is done touching up her makeup, she gets up...
      scene.text(`Once you're all dressed and Anushka is done touching up her makeup, she gets up. ""Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later nerds."`);
    } else {
      // TODO-QSP: dynamic text: Once you''re all dressed and Anushka is done touching up her makeup, she gets up...
      scene.text(`Once you're all dressed and Anushka is done touching up her makeup, she gets up. ""Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later losers."`);
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
    scene.text('He hugs you. "See you later babe, I can\'t wait to do this again." He kisses you again before walking you to the door. As you leave, you think about what just happened. You and your boyfriend justed fucked your best friend. As you head out the door and Artem closes it behind you, you wonder if this was a mistake. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
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

function enterNerdGameNightWalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'npcStat', 'A144', 'a');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/walking.jpg');
  if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
    scene.text('You and Artem hold hands and Anushka walks on the other side of him as the three of you talk about a variety of subjects, mostly about the university, your respective courses and the professors. Artem then talks about the D&D game, but quickly drops it when Anushka seems like she\'s getting bored.');
    scene.text('You then walk past the garages out back of the apartment complex Anushka lives in, and she points out which one the band is renting. Artem suddenly stops and takes his jacket off before spreading it wide on the ground. "Hey, why don\'t we sit and talk for a bit here?" If you want Anushka to have sex with Artem, then you should sit with her between you and him. If you want to have sex with him, then you should sit between them.');
  } else {
    scene.text('You and Artem hold hands and Anushka walks on the other side of him as the three of you talk about a variety of subjects, but they mostly chat about the university and what they think of their professors and fellow students in each of their classes. Artem then talks about the D&D game, but quickly drops it when Anushka seems like she\'s getting bored.');
    scene.text('You then walk past the garages out back of the apartment complex Anushka lives in, and she points out which one the band is renting. Artem suddenly stops and takes his jacket off before spreading it wide on the ground. "Hey, why don\'t we sit down and talk for a bit here?" If you want Anushka to have sex with Artem, then you should sit with her between you and him. If you want to have sex with him, then you should sit between them.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit between Artem and Anushka', goto: ['artem_nush_sex_uni', 'artem_sveta'] },
    { label: 'Sit down on the other side of Anushka', goto: ['artem_nush_sex_uni', 'artem_nush'] },
  ]);
  scene.build();
}

function enterArtemNush(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk1.jpg');
  scene.text('Anushka sits and leaves room for you between her and Artem, but you motion for her to scoot over next to Artem and you sit next to her, sandwiching her between the two of you. Artem gives you a questioning look, but you just smile and nod at him.');
  scene.text('He grins and leans back in a half-reclining position as you engage Anushka in a conversation about her latest sexual partner. You can see the bulge growing in his pants, and Anushka soon does as well. "Guess someone likes my story, huh?" she asks in a bemused tone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her to peek', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk2.jpg');
    scene.text('You lean against her, pushing her closer to Artem. "I think someone wants to say hi. Why don\'t you take a peek?"');
    scene.text('She looks back at you with a questioning look but starts to unbutton and unzip his pants to peek inside. "It\'s too dark to see anything. Pull his dick out so we can see it," you tell her.');
    scene.actions([
      { label: 'Tell her to take it out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj1.jpg');
    // TODO-QSP: dynamic text: She reaches into his underwear and pulls out his <<dick>>cm <<$dick_girth>> dick...
    scene.text(`She reaches into his underwear and pulls out his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick. Once it's free, he reaches over and pulls her head down into his lap. "You made it hard, so now you got to suck it," you say with a smirk.`);
    scene.text('She starts stroking his dick with one hand before taking it into her mouth and sucking on it as Artem moans in pleasure.');
    scene.text('"This is the best use for that mouth of her\'s," he says as you grin at him.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Push her head down', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['dom_nush'] = ((st as any).anushkaQW['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj2.jpg');
    scene.text('As Anushka continues sucking Artem\'s cock, you reach over and push her head down to force her to take more of it into her mouth.');
    scene.text('"Oh yeah babe! Just like that…" Artem moans as he looks at you.');
    qspCall(st, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Grab her hair', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj3.jpg');
    scene.text('You grab hold of Anushka\'s hair and push her head down until you hear her gagging on his cock.');
    scene.text('"God, you\'re the best girlfriend a guy could have!" he says between moans as you make Anushka deepthroat his cock.');
    scene.text('After a few minutes of this, Artem looks you dead in the eye. "Help me take her jeans off so I can fuck this slut."');
    qspCall(st, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take her pants off', goto: ['artem_nush_sex_uni', 'artem_nush_strip'] },
    ]);
  } },
    ]);
  } },
      { label: 'Let her suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj2.jpg');
    scene.text('As Anushka sucks Artem\'s cock, you lean over and partially lay on her back so you can peek around and watch as most of his dick disappears into her mouth with each downward bob of her head.');
    scene.text('"Yeah bitch… Just like that… Suck my dick!" Artem groans between moans of pleasure.');
    qspCall(st, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Grab her hair', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj3.jpg');
    scene.text('You grab hold of Anushka\'s hair and pull it up out of the way so it\'s easier to watch her suck Artem\'s dick.');
    scene.text('"Just look at you submissively and obediently sucking my dick like a good little slut. We\'ll make you into a slut for all the nerds before long," he says to her.');
    scene.text('After a few minutes of this, Artem looks you dead in the eye. "Help me take her jeans off so I can fuck this dirty slut in this alley."');
    qspCall(st, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take her pants off', goto: ['artem_nush_sex_uni', 'artem_nush_strip'] },
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
    qspCall(st, 'arousal', 'voyeur', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Help her onto all fours', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/anushka/walk_vaginal1.jpg');
    scene.text('You help Anushka get up on all fours so her ass is facing Artem. Once she\'s in place, Artem kneels down behind her. "Damn, you\'re soaking wet! Look babe, her juices are already running down her thigh!"');
    // TODO-QSP: dynamic text: He moves forward and she suddenly moans loudly as he shoves his <<dick>>cm <<$di...
    scene.text(`He moves forward and she suddenly moans loudly as he shoves his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} cock inside her pussy and starts fucking her as you lean in and start kissing her.`);
    qspCall(st, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Spread her ass cheeks', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/anushka/walk_vaginal2.jpg');
    scene.text('After you break the kiss with her, you reach back and spread her ass cheeks as wide as you can while looking up at Artem. He grins as he gets the hint.');
    scene.text('"Look at that little asshole, just begging to be used by nerd dick!" he says before he spits on her ass and uses a finger to rub it into her asshole.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Hold her in place', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_anal1.jpg');
    scene.text('After spending a few more minutes fucking her pussy, he pulls his hips back. "Tell me you want this nerd dick in your ass."');
    scene.text('"Yes… I want you to fuck my ass with your big nerd dick," she says, sounding rather desperate, yet also aroused.');
    scene.text('You hold her ass cheeks wide for him as he lines his dick up with her asshole. "Oh fuck!" she mutters as he forces his cock up her ass.');
    scene.text('He moans loudly as he works his dick deeper into her. "Damn, her ass feels tighter without all that bottled lube."');
    scene.text('She starts leaning forward in an effort to keep him from going too deep. "Hold her for me, babe," he says and you grab hold of her arms to keep her from pulling away from him.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Keep holding her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/anushka/walk_anal2.jpg');
    scene.text('Now that she\'s unable to move, Artem shoves his hips forward again, causing her to moan loudly. As he starts really hammering her ass, she starts crying out and shaking as she has a massive orgasm, so much so you have to help hold her up as Artem starts grunting louder himself.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
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
    if (((st as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: Once they''re both dressed, Anushka gets ready to leave. ""Okay, I need to get g...
      scene.text(`Once they're both dressed, Anushka gets ready to leave. ""Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later nerds."`);
    } else {
      // TODO-QSP: dynamic text: Once they''re both dressed, Anushka gets ready to leave. ""Okay, I need to get g...
      scene.text(`Once they're both dressed, Anushka gets ready to leave. ""Okay, I need to get going, but I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later losers."`);
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
      scene.text('"I can\'t believe I\'m fucking her on the regular now! I\'m so glad you talked me into this," he says with a grin as you walk back to the university dorms.');
      scene.text('You smile and kiss him again as you get on the elevator in the dorms. "I\'m glad you had fun, but I need to get going as well."');
      scene.text('Once the doors to the tenth floor open, he hugs you. "See you later, babe. I can\'t wait to do this again, but maybe next time I can fuck you instead?" He kisses you again before you walk out of the elevator and he pushes the button for his floor. As you walk down to your room, you think about what just happened. Your boyfriend just fucked your best friend while you watched. You wonder if it was a mistake, but suppose that only time will tell…');
      scene.actions([
        { label: 'Go to your dorm floor', goto: ['uni_dorm', 'tenth_floor'] },
      ]);
    } else {
      scene.text('Artem walks you back to the well-lit streets, where you smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
      scene.text('He hugs you. "See you later, babe. I can\'t wait to do this again, though maybe next time I can fuck you instead?" He kisses you again before walking towards the university campus. As you leave, you think about what just happened. Your boyfriend just fucked your best friend while you watched. You wonder if it was a mistake, but suppose that only time will tell…');
      scene.actions([
        { label: 'Leave', goto: ['city_island', ''] },
      ]);
    }
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
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj1.jpg');
    scene.text('You pull his dick out and he looks at you with pleading eyes. "Please suck it, babe."');
    // TODO-QSP: dynamic text: You lean forward and take his dick into your mouth and start sucking it while st...
    scene.text(`You lean forward and take his dick into your mouth and start sucking it while stroking his shaft. "Damn ${((st as any).pcs_nickname || '')}, you're getting good at that!" Anushka says.`);
    scene.text('You\'re unable to answer, so Artem replies for you. "She\'s the best!"');
    scene.text('Anushka snorts a bit of a giggle, Artem likely not getting why she found it funny.');
    qspCall(st, 'arousal', 'bj', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj2.jpg');
    scene.text('As you\'re sucking Artem\'s dick, you feel a hand press down on the back of your head and force it down until his dick slides down your throat, causing you to gag. You think it\'s Artem at first, but soon realize that it\'s Anushka.');
    qspCall(st, 'arousal', 'bj', 2, 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get your hair grabbed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_bj3.jpg');
    scene.text('You feel her fingers wrap themselves in your hair as she roughly forces you to deepthroat Artem before he speaks up. "Okay, let her up."');
    scene.text('You can keep sucking his dick until he blows his load, offer up your pussy or give him your ass.');
    qspCall(st, 'arousal', 'bj', 2, 'deepthroat', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Spread your legs', goto: ['artem_nush_sex_uni', 'artem_sveta_vag'] },
      { label: 'Offer him your ass', goto: ['artem_nush_sex_uni', 'artem_sveta_anal'] },
      { label: 'Just suck him off', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_facial.jpg');
    scene.text('He stands up and you keep sucking his dick until he tells you he\'s about to cum. You then pop his dick out of your mouth and jerk him off until he starts cumming on your face. Once you\'ve milked every last drop out of him, you look up at him with a grin as he tucks his dick back away in his pants.');
    qspCall(st, 'cum_call', 'face', 'A2', 1);
    qspCall(st, 'arousal', 'end');
    if (((st as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: "Thanks for the show guys, but I need to get going," Anushka says. "I guess I''l...
      scene.text(`"Thanks for the show guys, but I need to get going," Anushka says. "I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later nerds."`);
    } else {
      // TODO-QSP: dynamic text: "Thanks for the show guys, but I need to get going," Anushka says. "I guess I''l...
      scene.text(`"Thanks for the show guys, but I need to get going," Anushka says. "I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later losers."`);
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
      scene.text('"That was amazing!" he smiles as you walk back to the university dorms.');
      scene.text('You smile and kiss him again as you get on the elevator in the dorms. "I\'m glad you had fun, but I need to get going as well."');
      scene.text('Once the doors to the tenth floor open, he hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before you walk out of the elevator and he pushes the button for his floor. As you walk down to your room, you think about what just happened. You just sucked your boyfriend\'s dick in front of your friend. You wonder if it was a mistake, but you suppose only time will tell…');
      scene.actions([
        { label: 'Go to your dorm floor', goto: ['uni_dorm', 'tenth_floor'] },
      ]);
    } else {
      scene.text('Artem walks you back to the well lit streets out of the alleyway, where you smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
      scene.text('He hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before walking towards the university campus. As you leave, you think about what just happened. You just sucked your boyfriend\'s dick in front of your friend. You wonder if it was a mistake, but you suppose only time will tell…');
      scene.actions([
        { label: 'Leave', goto: ['city_island', ''] },
      ]);
    }
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
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_vaginal1.jpg');
  scene.text('You slide his dick out of your mouth and turn to look at him. "I want you to fuck me, right here, right now."');
  // TODO-QSP: dynamic text: He just grins and gets up as Anushka helps you get naked from the waist down whi...
  scene.text(`He just grins and gets up as Anushka helps you get naked from the waist down while he strips out of his pants and underwear. Once you're both ready, you lay on your back and spread your legs wide before he lays down between your legs and slides his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock into your already wet pussy.`);
  qspCall(s, 'arousal', 'vaginal', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Anushka', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_vaginal2.jpg');
    scene.text('As Artem fucks you, you glance over and see that Anushka has her hand down her pants, rubbing one out as she watches you get fucked by Artem. You just grin.');
    qspCall(st, 'arousal', 'vaginal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Offer up your ass', goto: ['artem_nush_sex_uni', 'artem_sveta_anal'] },
      { label: 'Get fucked some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_vaginal3.jpg');
    scene.text('Anushka is soon moaning almost as loud as you are, enough to attract even Artem\'s attention. "What a little slut you are, rubbing one off while you watch me fuck your friend," he grins. "Admit it. You wish you were being fucked by some nerd cock right now, don\'t you?"');
    scene.text('Anushka bites her lower lip and redoubles her effort as she keeps rubbing one off. "YES! Oh fuck yes, I wish you were fucking me with your big nerd cock right now!"');
    // TODO-QSP: dynamic text: Artem looks at you and smiles before looking back at her as he keeps fucking you...
    scene.text(`Artem looks at you and smiles before looking back at her as he keeps fucking you. "Maybe next time I'll ask Petka or Feofan to come along and they can fuck you while you watch me fuck ${((st as any).pcs_nickname || '')}. You'd like that, wouldn't you? I can tell by your expression that the meer thought of some other nerd using you turns you on."`);
    qspCall(st, 'arousal', 'vaginal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_vaginal4.jpg');
    scene.text('He then starts really pounding your pussy, even more so once Anushka starts arching her back and moaning loudly as she rubs herself to orgasm. This pushes Artem to the edge as well as he starts grunting hard before he pulls out of you and points his dick in your face.');
    qspCall(st, 'arousal', 'vaginal', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Artem blows his load', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_facial.jpg');
    scene.text('You quickly jerk him off and he soon starts cumming on your face. Once you\'ve milked every last drop out of him, you look up at him with a grin as he tucks his dick back away in his pants.');
    qspCall(st, 'cum_call', 'face', 'A2', 1);
    qspCall(st, 'arousal', 'end');
    if (((st as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: "Thanks for the show guys, but I need to get going," Anushka says. "I guess I''l...
      scene.text(`"Thanks for the show guys, but I need to get going," Anushka says. "I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later nerds."`);
    } else {
      // TODO-QSP: dynamic text: "Thanks for the show guys, but I need to get going," Anushka says. "I guess I''l...
      scene.text(`"Thanks for the show guys, but I need to get going," Anushka says. "I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later losers."`);
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
      scene.text('"That was amazing!" he smiles as you walk back to the university dorms.');
      scene.text('You smile and kiss him again as you get on the elevator in the dorms. "I\'m glad you had fun, but I need to get going as well."');
      scene.text('Once the doors to the tenth floor open, he hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before you walk out of the elevator and he pushes the button for his floor. As you walk down to your room, you think about what just happened. You just fucked your boyfriend in front of your best friend and she rubbed one out while watching you! You wonder if it was a mistake, but you suppose only time will tell…');
      scene.actions([
        { label: 'Go to your dorm floor', goto: ['uni_dorm', 'tenth_floor'] },
      ]);
    } else {
      scene.text('Artem walks you back to the well lit streets out of the alleyway where you smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
      scene.text('He hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before walking towards the university campus. As you leave, you think about what just happened. You just fucked your boyfriend in front of your best friend and she rubbed one out while watching you! You wonder if it was a mistake, but you suppose only time will tell…');
      scene.actions([
        { label: 'Leave', goto: ['city_island', ''] },
      ]);
    }
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
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_anal1.jpg');
  scene.text('"I want you to fuck my ass," you tell him with a smile.');
  scene.text('He grins. "Get on all fours for me then."');
  scene.text('You get on all fours while Anushka keeps rubbing one out. Artem uses your pussy juices and some spit to lube your asshole up before he gently slides it in. Once his dick is inside you, he starts to slowly fuck your ass.');
  qspCall(s, 'arousal', 'anal', 2, 'lube');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take an anal pounding', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_anal2.jpg');
    scene.text('Artem pushes his cock deeper into your ass as he starts to fuck you harder and faster, even more so once Anushka starts arching her back and moaning loudly as she rubs herself to orgasm. This pushes Artem to the edge as well as he starts grunting hard before he pulls out of you and points his dick in your face.');
    qspCall(st, 'arousal', 'anal', 2, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Artem blows his load', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
      }
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/city/coffee_hole/sveta/walk_facial.jpg');
    scene.text('You quickly jerk him off and he soon starts cumming on your face. Once you\'ve milked every last drop out of him, you look up at him with a grin as he tucks his dick back away in his pants.');
    qspCall(st, 'cum_call', 'face', 'A2', 1);
    qspCall(st, 'arousal', 'end');
    if (((st as any).grupTipe ?? 0) === 3) {
      // TODO-QSP: dynamic text: "Thanks for the show guys, but I need to get going," Anushka says. "I guess I''l...
      scene.text(`"Thanks for the show guys, but I need to get going," Anushka says. "I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later nerds."`);
    } else {
      // TODO-QSP: dynamic text: "Thanks for the show guys, but I need to get going," Anushka says. "I guess I''l...
      scene.text(`"Thanks for the show guys, but I need to get going," Anushka says. "I guess I'll see you at the Coffee Hole for your nerd night," she says to Artem before she turns to you. "I'll see you around, ${((st as any).pcs_nickname || '')}. Later losers."`);
    }
    scene.actions([
      { label: 'You need to leave too', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
      scene.text('"That was amazing!" he smiles as you walk back to the university dorms.');
      scene.text('You smile and kiss him again as you get on the elevator in the dorms. "I\'m glad you had fun, but I need to get going as well."');
      scene.text('Once the doors to the tenth floor open, he hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before you walk out of the elevator and he pushes the button for his floor. As you walk down to your room, you think about what just happened. You just fucked your boyfriend in front of your best friend and she rubbed one out while watching you! You wonder if it was a mistake, but you suppose only time will tell…');
      scene.actions([
        { label: 'Go to your dorm floor', goto: ['uni_dorm', 'tenth_floor'] },
      ]);
    } else {
      scene.text('Artem walks you back to the well lit streets out of the alleyway where you smile and kiss him again. "I\'m glad you had fun, but I need to get going as well."');
      scene.text('He hugs you. "See you later, babe. Maybe next time I can fuck Nush? What do you think?" He kisses you again before walking towards the university campus. As you leave, you think about what just happened. You just fucked your boyfriend in front of your best friend and she rubbed one out while watching you! You wonder if it was a mistake, but you suppose only time will tell…');
      scene.actions([
        { label: 'Leave', goto: ['city_island', ''] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoffeeHole1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'npcStat', 'A144', 'a');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
  if (((s as any).artemQW ?? 0)?.['nush_bully_payback_uni'] === 0) {
    scene.text('As you follow them in, closing the door behind you, Artem drags Anushka over to the small kitchen area where they make the pastries and other stuff they sell.');
    scene.text('Once Artem stops pulling her along, she pulls her arm free and looks at him with an aroused look on her face. "What kind of lesson do you think you\'re going to teach me this time?"');
  } else {
    scene.text('As you follow them in, closing the door behind you, Artem drags Anushka over to the small kitchen area where they make the pastries and other stuff they sell.');
    scene.text('Once Artem stops pulling her along, she pulls her arm free and looks at him as she snorts a laugh. "Bitch, huh? Just how…"');
    scene.text('You don\'t get to hear her finish whatever it was she was going to say since Artem interrupts her.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch what happens', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback1.jpg');
    if (((st as any).artemQW ?? 0)?.['nush_bully_payback_uni'] === 0) {
      scene.text('Having loosened his grip enough that she was able to pull free, he reaches up with both hands and places them on her shoulders. He then pushes her down, forcing her down on her knees. "I\'m tired of you running your mouth slut, so you\'re going to do something useful with it."');
      scene.text('He looks over at you and smiles as you walk over to join them. You give him a nod of approval as Anushka gazes up at him, looking slightly aroused by his actions and comments. You\'re pretty sure she, like you, knows exactly where this is headed.');
      scene.text('When he sees you nod, he looks down at Anushka kneeling in front of him and grins. "Bad little bitch, down on her knees in front of a nerd!" He roughly grabs her by her hair, forcing her head back so she\'s looking directly up at him. He then leans forward. "Just where you fucking belong!"');
      scene.text('He straighten back up, releasing her hair as he does. "Now take my dick out and stick it in your mouth!"');
      scene.text('On his command, she unbuckles his belt and unzips his fly. She then pulls down his pants down around his knees, you can already see his hard dick straining against his underwear.');
      scene.text('Anushka rubs his dick through his underwear, getting a slight moan from Artem as she does before she starts pulling his underwear down. Once they\'re low enough, his hard dick springs free and almost smacks her in the face, which gets a slight giggle out of her.');
      scene.text('With his hard cock right in front of her, she uses one hand to start strokimg it.');
    } else {
      scene.text('Having loosened his grip enough that she was able to pull free he reaches up with both hands and places them on her shoulders. He pushes her down, forcing her down on her knees as he says. "Get back down on your knees like the good little slut, that you are." While he talks down to her, she is on her knees looking up at him. She looks slightly turned on by his actions and comments, you all know where this is going.');
      scene.text('While she looks up at him from her knees, he grins down at her. "Bad little bitch, down on her knees in front of me, ready to serve a nerd!" Then he roughly grabs her by her hair, forcing her head back so she is looking more directly up at him. He leans forward a bit and more quietly says to her. "Just where you should be, with a nerd dick in your mouth!" With that he straighten back up, releasing her hair as he does. "Now unbutton my pants, take my dick out and suck it!" On his command, she unbuckles his belt, unbuttons the top button of pants, then unzips his fly. She then pulls down his pants down around his knees, you can already see his hard dick straining against his underwear.');
      scene.text('Anushka rubs his dick through his underwear, getting a slight moan from Artem as she does before she starts pulling his underwear down. Once they\'re low enough, his hard dick springs free and almost smacks her in the face, which gets a slight giggle out of her.');
      scene.text('With his hard cock right in front of her, she uses one hand to start stroking it.');
    }
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    if (((st as any).artemQW ?? 0)?.['nush_bully_payback_uni'] === 0) {
      scene.actions([
        { label: 'Just watch', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
    ((st as any).artemQW = (st as any).artemQW ?? {})['nush_bully_payback_uni'] = ((st as any).artemQW['nush_bully_payback_uni'] ?? 0) + (1);
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['artem_dom'] = ((st as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback2.jpg');
    scene.text('Artem moans as he looks down at her. "Oh yeah, that\'s it… Now stick my cock in your mouth and suck it!"');
    // TODO-QSP: dynamic text: While stroking his <<dick>>cm <<$dick_girth>> dick with one hand, she starts to ...
    scene.text(`While stroking his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick with one hand, she starts to suck on the head with her mouth. As she does, she turns her head slightly and gives you a side glance. Likely making sure you're okay with this, you give her a very slight nod and a smile.`);
    scene.text('Artem seems oblivious to the little exchange between the two of you as he moans softly. "Yeah, that\'s it… Suck my big dick. You like sucking on nerd cock, don\'t you?"');
    scene.text('She takes her mouth off the tip of his dick while her hand continues to stroke the shaft of his cock. "I love sucking on your big fat nerd dick! I love the way it tastes in my mouth…"');
    scene.text('Artem smirks down at her. "Shut up and keep sucking my cock, slut!"');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka suck your BF\'s dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback3.jpg');
    // TODO-QSP: dynamic text: You watch as Anushka takes his <<dick>>cm <<$dick_girth>> cock about half way in...
    scene.text(`You watch as Anushka takes his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} cock about half way into her mouth, which causes Artem to moan louder. "Oh fuck Nush, you're so good at this!"`);
    scene.text('She keeps sucking his dick while looking at you, making you wonder if she\'s getting off on you watching her suck your boyfriend\'s cock in front of you.');
    scene.text('Artem isn\'t really paying attention to the two of you and moans louder before he looks back down at her.');
    scene.text('"Take your clothes off!" he says in a commanding tone of voice.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka strip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback4.jpg');
    scene.text('Anushka does as she\'s told and begins to strip while continuing to suck Artem\'s cock. She briefly removes her mouth from his dick to pull off her shirt; once it\'s off, she pops his cock back in her mouth and starts sucking it again.');
    scene.text('She then pulls off her shorts, slipping them off and tossing them aside, followed by her panties. Her lips stay locked around his dick the whole time as she keeps sucking. Finally she removes her bra and tosses it aside as well, leaving her wearing only her garter belt and stockings.');
    scene.text('"Oh fuck, I\'m about to cum!" Artem groans.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Artem cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback5.jpg');
    scene.text('Artem pulls his dick out of her mouth and starts shooting spurts of cum at once. You think a little of it went into her mouth as more of it lands on her chin and on her nose. Another spurt lands on her breast, while another lands on her shoulder.');
    scene.text('Once he finally stops, he rubs his dick against her lips and face, smearing the cum around her face as a little more drips out of the tip.');
    scene.text('After a minute, he grabs her roughly by the hair. "Now lick the cum from my dick, like a good little slut!"');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka lick up his cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback6.jpg');
    scene.text('Anushka starts licking the cum from his dick as he ordered as Artem watches. "You\'re such an obedient little slut."');
    scene.text('Anushka doesn\'t respond to him as she focuses on her task of licking his dick clean of cum, licking the tip before sucking on the head.');
    qspCall(st, 'arousal', 'voyeur_sex', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch them finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback7.jpg');
    scene.text('With just the head of Artem\'s dick in her mouth, she uses one hand to grip it tightly and milks it, stroking slowly up the shaft before letting go and gripping it again at the base, only to repeat the action a few times.');
    scene.text('She milks every last drop of his cum out of his dick into her mouth before she finally lets go and pulls her head way, freeing his cock from her mouth.');
    scene.text('Artem reaches down, cups her chin in her hand and tilts her head back until she\'s looking up at him. "That\'s a good little slut. Now stay just like this until we\'re gone, understand?"');
    scene.text('Anushka nods her head as best as she can while looking up at him. "Yes, I understand."');
    scene.text('He lets go of her and pats her on top of the head like one might pet a dog before turning to look at you. "Ready, babe?"');
    scene.text('You nod at him. "Yeah, I\'m ready if you\'re done."');
    scene.text('He glances back down at Anushka. "Yeah, I think I\'m done… for now." His tone and mannerism leave no doubt he has every intention of doing this again.');
    scene.text('He walks over to you and gives you a kiss. "You\'re the best girlfriend a man could ever ask for."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffee_hole/inside.jpg');
    scene.text('With that, the two of you walk over to the door. He opens it and you head out, but not before glancing back to see Anushka kneeling with cum on her face and chest.');
    scene.text('Out front is a couple of customers who seem to be waiting to get served.');
    scene.text('Artem smiles at them. "She\'ll be right out to take care of you."');
    scene.text('The customers seem content with the answer, though obviously a little puzzled about what you were doing in the back of the shop when you clearly don\'t work here.');
    scene.text('The two of you walk back to the dorms, holding hands while talking about what just happened. Artem naturally seems very excited about making his one time bully suck his dick.');
    scene.text('Once back at his dorm room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    qspCall(st, 'arousal', 'voyeur_sex', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
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
    } else {
      scene.actions([
        { label: 'Just watch', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['artem_dom'] = ((st as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback21.jpg');
    // TODO-QSP: dynamic text: Artem roughly grabs her by the hair and forces his dick into her mouth. She''s o...
    scene.text(`Artem roughly grabs her by the hair and forces his dick into her mouth. She's only too happy to oblige him and you watch as he forces her head to bob back and forth as she sucks his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick, his hand firmly gripping her by the hair and guiding her head.`);
    scene.text('You watch as your friend sucks your boyfriend\'s cock in front of you, neither one paying any attention to you at the moment. Artem then glances over at you with a huge grin on his face, obviously loving how he\'s making Anushka suck his cock before he turns back to her. "Yeah, that\'s it! Suck my big dick! You love sucking a nerd cock, don\'t you?"');
    scene.text('He roughly pulls her head far enough back that his cock pops out of her mouth. With her mouth no longer filled with cock, she looks up to him and grins. "I love sucking your big fat nerd cock! I love the way it tastes in my mouth…"');
    scene.text('He smirks down at her as he shoves his dick back in her mouth. "Shut up and suck my cock, slut! It\'s the only thing you\'re good for!"');
    qspCall(st, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback22.jpg');
    // TODO-QSP: dynamic text: Artem pulls her head forward by her hair while forcing his <<dick>>cm <<$dick_gi...
    scene.text(`Artem pulls her head forward by her hair while forcing his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} cock balls deep down her throat, which causes him to moan louder. "Oh fuck Nush, you're so good at this!"`);
    scene.text('Once she starts to struggle, he finally pulls her head back so his dick pops out of her mouth. She gasps for air once his dick is free, her eyes slightly watering as drool drips from her open mouth.');
    scene.text('Once she\'s mostly caught her breath, he shoves his cock back down her throat. After a few minutes of this, he pulls his dick out of her mouth one more time.');
    scene.text('"Take your clothes off!" he says in a commanding tone of voice.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka strip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback23.jpg');
    scene.text('Anushka does as she\'s told and begins to strip. She pulls her shirt off over her head and tosses it aside, followed by her bra. She then pulls off her shorts, followed by her panties, leaving her naked other than her stockings and garter belt.');
    scene.text('Her lips stay locked around his dick the whole time as she keeps sucking.');
    if (((st as any).artemQW ?? 0)?.['nush_bully_payback_uni'] >= 2) {
      scene.text('Artem watches her strip for him, as do you. She then looks back up at him before he grabs her roughly by the hair again. "You\'re an obedient little bitch, doing as your nerd master says. Now get up on the table and lay on your back."');
      scene.text('She gets off her knees and sits on the table. As she starts to lean back, Artem walks up and pushes her legs apart so he can stand between them before he roughly pushes her onto her back.');
    } else {
      scene.text('Artem watches her strip for him, as do you. She then looks back up at him before he grabs her roughly by the hair again. "You\'re an obedient little bitch, doing as your nerd master says. Now open your mouth like a good little slut."');
      scene.text('As soon as she opens her mouth, he shoves his dick back in it.');
    }
    qspCall(st, 'arousal', 'voyeur', 2);
    qspCall(st, 'stat', '');
    if (((st as any).artemQW ?? 0)?.['nush_bully_payback_uni'] >= 2) {
      scene.actions([
        { label: 'Watch what happens next', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['nush_bully_payback_uni'] = ((st as any).artemQW['nush_bully_payback_uni'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback31.jpg');
    scene.text('Artem smacks her thighs, making her spread her legs wider and lifting them up at the same time. "Spread your legs wider. I know a slut like you knows how to spread her legs."');
    scene.text('Once he\'s happy with the placement of her legs, he slides one hand down to her pussy and rubs her clit before sliding his fingers further down to her slit.');
    scene.text('You can\'t see what he\'s doing, but Anushka\'s moan and Artem\'s next words leaves no doubt. "Damn, that pussy is soaking wet! Just eager for a nerd cock to pound it, isn\'t it?"');
    scene.text('Anushka moans more as she watches him. "Yes, fuck me. My pussy aches for your big nerd cock!"');
    scene.text('Just as she finishes saying that, Artem moves forward and she gasps before moaning loudly. "Oh fuck yes! Fill my pussy with your big cock!"');
    scene.text('He reaches up to grab and squeeze one of her breasts as he starts fucking her.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Artem fuck Anushka', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback32.jpg');
    scene.text('Artem suddenly slams his hips forward, burying his dick balls deep into Anushka\'s pussy, causing her to gasp and cry out. "OH FUCK YES!… YES YES YES… Just like that… Oh yes!… Pound my tight little pussy!"');
    scene.text('With that encouragement, Artem starts to pound her hard, fast and deep. "That\'s right, take my cock, you little slut! Whose pussy is this?!"');
    scene.text('Anushka moans louder. "It\'s your pussy… OH FUCK YES!… It\'s a pussy for… Nerds to fuck…" she answers in a husky tone of voice.');
    scene.text('Artem grins even wider at her words, apparently hearing exactly what he wanted to hear. He pulls his dick almost all the way out before slamming it back into her pussy.');
    scene.text('He punctuates each word as he talks. "This… Pussy… Belongs… To… The… Nerds!"');
    scene.text('Anushka rolls her head back, becoming lost in the pleasure. You\'re not sure if she heard much, if any, of what Artem said.');
    qspCall(st, 'arousal', 'voyeur_sex', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch what happens next', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback33.jpg');
    scene.text('Anushka rolls her head to the side to look at you, or maybe just in your direction. She bites her lower lip and seems almost completely out of it. You\'re not sure if she\'s even aware you\'re there as Artem fucks her hard, fast and deep.');
    scene.text('She moans louder as he fucks her and eventually moves her hand down to her clit, rubbing it with her fingers as Artem keeps pounding her pussy.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback34.jpg');
    scene.text('Anushka closes her eyes. "OH FUCK!… OH FUCK!… DON\'T STOP!… FUCK!… I\'M CUMMING!"');
    scene.text('As she cries out, her legs start shaking and she starts having an orgasm as Artem keeps fucking her. Once it passes, she seems to almost collapse while Artem keeps fucking her, but his grunts tell you he\'s getting close as well.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback35.jpg');
    scene.text('He suddenly pulls his dick out of her and grabs her by the legs. He spins her around on the table until her head is at his dick. "Roll over!"');
    scene.text('He has an urgent tone to his voice and you can tell he\'s right on the edge. Anushka rolls over and gets up on all fours and Artem shoves his dick in her mouth. "OH FUCK! Yeah… Suck your pussy juices off my dick!"');
    scene.text('Anushka does just that and starts sucking his dick again.');
    qspCall(st, 'arousal', 'voyeur_sex', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch him finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback26.jpg');
    scene.text('He grabs her by the hair to hold her head in place as he fucks her mouth. "OH GOD!… I\'m cumming!"');
    scene.text('You see his dick twitching in her mouth as he moans loudly, emptying his balls into her mouth. Once he\'s finished, he pulls his dick out of her mouth while letting go of her hair. "Show me the cum, like a good little slut."');
    scene.text('She sticks her tongue out, showing it coated in his cum. He grins down at her, then over at you before looking back at her. "Now swallow!"');
    scene.text('She closes her mouth and swallows before sticking her tongue out again. Artem reaches down and cups her chin in her hand and tilts her head back until she\'s looking up at him. "That\'s a good little bitch. Now stay just like this until we\'re gone, understand?"');
    scene.text('Anushka nods her head as best she can while looking up at him. "Yes, I understand…" she says in a husky tone.');
    scene.text('He lets go of her and pats her on top of the head like one might pet a dog before turning to look at you. "Ready, babe?"');
    scene.text('You nod at him. "Yeah. I\'m ready if you\'re done."');
    scene.text('He glances at Anushka, now laying on her stomach on the table. "Yeah, I think I\'m done… for now." His tone and mannerism leaving no doubt he has every intention of doing this again.');
    scene.text('He walks over to you and gives you a kiss. "You\'re the best girlfriend a man could ever ask for."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffee_hole/inside.jpg');
    scene.text('With that, the two of you walk over to the door. He opens it and you head out, but not before glancing back to see Anushka kneeling with cum on her face and chest.');
    scene.text('Out front is a couple of customers who seem to be waiting to get served.');
    scene.text('Artem smiles at them. "She\'ll be right out to take care of you."');
    scene.text('The customers seem content with the answer, though obviously a little puzzled about what you were doing in the back of the shop when you clearly don\'t work here.');
    scene.text('The two of you walk back to the dorms, holding hands while talking about what just happened. Artem naturally seems very excited about making his one time bully suck his dick.');
    scene.text('Once back at his dorm room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    qspCall(st, 'arousal', 'voyeur_sex', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
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
    } else {
      scene.actions([
        { label: 'Watch Anushka suck your BF\'s cock', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['nush_bully_payback_uni'] = ((st as any).artemQW['nush_bully_payback_uni'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback24.jpg');
    scene.text('Anushka\'s eyes flicker over to you as your boyfriend fucks her mouth, periodically shoving it balls deep down her throat. Artem moans before he seems to notice she\'s no longer looking up at him.');
    scene.text('He reaches down with his other hand and lightly smacks her face. "Look at me when you suck my dick!"');
    scene.text('She looks at him as best she can while getting throat fucked.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback25.jpg');
    scene.text('Artem moans even louder while Anushka occasionally gags as he shoves his dick balls deep into her mouth and keeps it there a little too long. Neither one seem to be paying any attention to you.');
    scene.text('After another minute or two of this Artem moans even louder. "Fuck, I\'m about to cum!"');
    qspCall(st, 'arousal', 'voyeur_sex', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch him finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback26.jpg');
    scene.text('He pulls her head back by the hair, leaving the head of his dick in her mouth as you watch his body twitch and he groans loudly.');
    scene.text('Once he\'s finished he pulls his dick out of her mouth while letting go of her hair. "Show me the cum, little a good little slut."');
    scene.text('She sticks her tongue out, showing it coated in his cum. He grins down at her, then over at you before looking back at her. "Now swallow!"');
    scene.text('She closes her mouth and swallows before sticking her tongue out again to show she swallowed all of his cum.');
    scene.text('Artem reaches down, cups her chin in her hand and tilts her head back until she\'s looking up at him. "That\'s a good little slut. Now stay just like this until we\'re gone, understand?"');
    scene.text('Anushka nods her head as best as she can while looking up at him. "Yes, I understand."');
    scene.text('He lets go of her and pats her on top of the head like one might pet a dog before turning to look at you. "Ready, babe?"');
    scene.text('You nod at him. "Yeah, I\'m ready if you\'re done."');
    scene.text('He glances back down at Anushka. "Yeah, I think I\'m done… for now." His tone and mannerism leaving no doubt he has every intention of doing this again.');
    scene.text('He walks over to you and gives you a kiss. "You\'re the best girlfriend a man could ever ask for."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffee_hole/inside.jpg');
    scene.text('With that, the two of you walk over to the door. He opens it and you head out, but not before glancing back to see Anushka on her knees rubbing her clit, likely trying to get herself off quickly before going back to work.');
    scene.text('Out front is a couple of customers who seem to be waiting to get served.');
    scene.text('Artem smiles at them. "She\'ll be right out to take care of you."');
    scene.text('The customers seem content with the answer, though obviously a little puzzled about what you were doing in the back of the shop when you clearly don\'t work here.');
    scene.text('The two of you walk back to the dorms, holding hands while talking about what just happened. Artem naturally seems very excited about making his one time bully suck his dick.');
    scene.text('Once back at his dorm room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    qspCall(st, 'arousal', 'voyeur_sex', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterNerdGameOrcBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'npcStat', 'A144', 'a');
  ((s as any).artemQW = (s as any).artemQW ?? {})['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
  scene.img('images/locations/city/island/coffe_hole/npcs/nush_counter.jpg');
  scene.text('As you walk up to the counter, Anushka glances to the others from your little group heading out. "You guys done for the night?"');
  scene.text('Artem smiles to her. "More or less." Then he makes a little small talk with her, you are kinda amazed how much better he has gotten at just making small talk with a girl from when you first started dating him.');
  scene.text('Artem keeps looking around at the last customer still here as the three of you talk about a variety of things. Once the last other customer leaves he smiles and then walks around the counter back where she is. She looks at him and raises a slender brow. "Can I help you?"');
  scene.text('He grins at her. "Yeah you can." Then he suddenly reaches out and grabs her by the hair, forcing her down, until she gets down on her knees in front of him. "Now take my dick out and suck it like the good little slut you are."');
  scene.text('When she doesn\'t do what he says at once, he smacks her face with his hand. Not to hard, but just enough she felt it and it makes a slight pop sound. She looks very surprised but also very turned on by that.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch what happens', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback1.jpg');
    scene.text('Now she does as she is told, she reaches up and starts to unbuckle his belts, followed by unbuttoning the top button of pants, then unzips his fly. She then pulls down his pants down around his knees, you can already see his hard dick straining against his underwear.');
    scene.text('Anushka rubs his dick through his underwear, getting a slight moan from Artem as she does before she starts pulling his underwear down. Once they\'re low enough, his hard dick springs free and almost smacks her in the face, which gets a slight giggle out of her.');
    scene.text('With his hard cock right in front of her, she uses one hand to start stroking it.');
    scene.text('While she looks up at him from her knees stroking his dick, he grins down at her. "Bad little bitch, down on her knees eager to suck some nerd cock! You love it when I make you suck nerd cock don\'t you?"');
    scene.text('In a breathless tone she replies. "Yes." You can tell she is very turned on by this.');
    scene.text('He grins down at her. "Then open your mouth and start sucking my cock!"');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback2.jpg');
    // TODO-QSP: dynamic text: While stroking his <<dick>>cm <<$dick_girth>> dick with one hand, she starts to ...
    scene.text(`While stroking his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick with one hand, she starts to suck on the head with her mouth. As she does, she turns her head slightly and gives you a side glance. Likely making sure you're okay with this, you give her a very slight nod and a smile.`);
    scene.text('Artem seems oblivious to the little exchange between the two of you as he moans softly. "Yeah, that\'s it… Suck my big dick. You like sucking on nerd cock, don\'t you?"');
    scene.text('She takes her mouth off the tip of his dick while her hand continues to stroke the shaft of his cock. "I love sucking on your big fat nerd dick! I love the way it tastes in my mouth…"');
    scene.text('Artem smirks down at her. "Shut up and keep sucking my cock, slut!"');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka suck your BF\'s dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback3.jpg');
    // TODO-QSP: dynamic text: You watch as Anushka takes his <<dick>>cm <<$dick_girth>> cock about half way in...
    scene.text(`You watch as Anushka takes his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} cock about half way into her mouth, which causes Artem to moan louder. "Oh fuck Nush, you're so good at this!"`);
    scene.text('She keeps sucking his dick while looking at you, making you wonder if she\'s getting off on you watching her suck your boyfriend\'s cock in front of you.');
    scene.text('Artem isn\'t really paying attention to the two of you and moans louder before he looks back down at her.');
    scene.text('"Take off your top and show me your titties!" he says in a commanding tone of voice.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka strip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback4.jpg');
    scene.text('Anushka does as she\'s told and begins to strip while continuing to suck Artem\'s cock. She briefly removes her mouth from his dick to pull off her shirt; once it\'s off, she pops his cock back in her mouth and starts sucking it again. While she goes back to sucking his dick with her mouth, she takes off her bra and tosses it aside as well. Artem reaches down and starts to squeeze her tits as she sucks his dick.');
    scene.text('"Oh fuck, I\'m about to cum!" Artem groans.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Artem cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/sex/artem_nush_payback26.jpg');
    scene.text('He grabs her by the hair to hold her head in place as he fucks her mouth. "OH GOD!… I\'m cumming!"');
    scene.text('You see his dick twitching in her mouth as he moans loudly, emptying his balls into her mouth. Once he\'s finished, he pulls his dick out of her mouth while letting go of her hair. "Show me the cum, like a good little slut."');
    scene.text('She sticks her tongue out, showing it coated in his cum. He grins down at her, then over at you before looking back at her. "Now swallow!"');
    scene.text('She closes her mouth and swallows before sticking her tongue out again. Artem reaches down and cups her chin in her hand and tilts her head back until she\'s looking up at him. "That\'s a good little bitch. Now stay just like this until we\'re gone, understand?"');
    scene.text('Anushka nods her head as best she can while looking up at him. "Yes, I understand…" she says in a husky tone.');
    scene.text('He lets go of her and pats her on top of the head like one might pet a dog before turning to look at you. "Ready, babe?"');
    scene.text('You nod at him. "Yeah. I\'m ready if you\'re done."');
    scene.text('He glances at Anushka, still on her knees, topless behind the counter. "Yeah, I think I\'m done… for now." His tone and mannerism leaving no doubt he has every intention of doing this again.');
    scene.text('He walks over to you and gives you a kiss. "You\'re the best girlfriend a man could ever ask for."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffee_hole/inside.jpg');
    scene.text('With that, the two of you walk over to the door. He opens it and you head out, but not before glancing back to see Anushka kneeling with cum on her face and chest.');
    scene.text('Out front is a couple of customers who seem to be waiting to get served.');
    scene.text('Artem smiles at them. "She\'ll be right out to take care of you."');
    scene.text('The customers seem content with the answer, though obviously a little puzzled about what you were doing in the back of the shop when you clearly don\'t work here.');
    scene.text('The two of you walk back to the dorms, holding hands while talking about what just happened. Artem naturally seems very excited about making his one time bully suck his dick.');
    scene.text('Once back at his dorm room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    qspCall(st, 'arousal', 'voyeur_sex', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
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
    case 'nerd_game_night_walk':
      enterNerdGameNightWalk(s, scene);
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
    case 'coffee_hole1':
      enterCoffeeHole1(s, scene);
      break;
    case 'nerd_game_orc_bj':
      enterNerdGameOrcBj(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_nush_sex_uni: LocationDef = {
  name: 'artem_nush_sex_uni',
  title: 'He just nods and you talk about how things will go before yo',
  region: 'other',
  enter: enter,
};
