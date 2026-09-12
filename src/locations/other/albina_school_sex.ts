import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBreakFun_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/chat/cooljocks.jpg');
  scene.text('You look around for Albina, but she\'s nowhere to be seen. Just then, you get an alert on your phone and open it to find a message from her.');
  scene.text('"Come to the girls restroom now. No questions."');
  scene.text('You decide not to keep her waiting and make your way to the restroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the restroom', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/bathroom/bathroom1.jpg');
    // TODO-QSP: dynamic text: You enter the girls restroom to find that nobody is inside. As you walk further ...
    scene.text(`You enter the girls restroom to find that nobody is inside. As you walk further in, you hear Albina. "In here, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You walk over to the furthest stall and find Albina inside sitting on the toilet, her legs spread wide. She has a mischievous grin on her face and you know exactly what kind of mood she\'s in.');
    scene.text('"Don\'t worry, nobody will disturb us. I made sure of it," she says with a smile and motions for you to come closer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/bathroom/bathroom2.jpg');
    scene.text('You\'re pretty certain you already know <i>exactly</i> she wants to do, but decide to ask anyway. "What are you doing in here?"');
    // TODO-QSP: dynamic text: She justs laughs at your question as she stands and walks up to you. "Come on <<...
    scene.text(`She justs laughs at your question as she stands and walks up to you. "Come on ${((s as any).pcs_nickname ?? 0)}, you're not that stupid. I was thinking about the times we've had some fun and how good your tongue felt on my pussy."`);
    scene.text('She pulls up her skirt and invintingly wiggles her ass at you. "Now I\'m wet and want you to eat me out."');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/maekup.jpg');
    scene.text('You shake your head. "Sorry Albina, but I don\'t feel like doing that."');
    scene.text('She looks a little disappointed as she fixes her skirt, but walks over to you and leans in to whisper in your ear.');
    scene.text('"That\'s okay, but just know that I\'ll be sitting in class with a <i>very</i> wet pussy thinking about how good you are at eating it..." she says softly before walking over to the mirror and touching up her makeup before leaving.');
    scene.text('You find yourself feeling a little aroused before quickly leaving yourself as the bell for your next class rings.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A23');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/bathroom/bathroom3.jpg');
    scene.text('She\'s clearly manipulating you and it\'s working. You find yourself aroused by what she said and what she\'s doing and obediently get on your knees in front of her as she pulls her thong down and steps out of it before lifting her leg up to rest it on the door frame.');
    scene.text('She wasn\'t kidding. Her glistening pussy is dripping wet as you bring your head up to her crotch. She grabs you by the hair and shoves your face into her pussy, holding you tightly against her as you start licking and sucking her engorged clit, her soft moans of pleasure arousing you even further.');
    scene.text('"Mmmmhm... Yeah, that feels good! Keep going!"');
    qspCall(s, 'arousal', 'cuni_give', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/bathroom/bathroom4.jpg');
    scene.text('This continues for a while until she pulls you away from her and shoves you down on the floor. "I\'m almost there, but I want to sit on your face first."');
    scene.text('You lay flat on your back as she lowers herself down and plants her pussy on your face, coating you with her wetness as you resume pleasuring her. Her moans soon become louder and she starts grinding against you as she reaches climax.');
    scene.text('"<i>Fuck</i>, gonna cum!" she cries before she lifts herself off you and you\'re drenched by the flood of juices that spray from her pussy.');
    scene.text('When she finishes squirting, she drops back down and grinds against you again, smearing her wetness all over your face.');
    qspCall(s, 'arousal', 'cuni_give', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albina_school_sex', 'break_fun_2'] },
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

function enterBreakFun_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/locations/pavlovsk/school/bathroom/maekup.jpg');
    // TODO-QSP: dynamic text: Satisfied, she climbs off of you and helps you to your feet. "That was amazing, ...
    scene.text(`Satisfied, she climbs off of you and helps you to your feet. "That was amazing, ${((s as any).pcs_nickname ?? 0)}! I really needed that," she says before pulling her thong back on and fixing her skirt.`);
    scene.text('She then walks over to the mirror to touch up her makeup when her phone pings with a text message and she suddenly takes off. "I\'d love to return the favor, but I promised Vicky I\'d do something with her before our next class. I need to go, but I owe you one!" she says and winks at you before walking out the door with some sway in her hips.');
    scene.text('You clean up at the sink and prepare to leave yourself, feeling very horny and a little disappointed that you won\'t get a release.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/bathroom/bathroom5.jpg');
    // TODO-QSP: dynamic text: Satisfied, she climbs off of you and helps you to your feet. "That was amazing, ...
    scene.text(`Satisfied, she climbs off of you and helps you to your feet. "That was amazing, ${((s as any).pcs_nickname ?? 0)}! I really needed that," she says before pulling her thong back on and fixing her skirt.`);
    scene.text('A sly grin appears on her face as she pulls her phone out and looks at it. "We\'ve got just enough time for me to return the favor..." she says before pushing you down onto the toilet and kneeling in front of you.');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: She pushes your skirt up and is surprised at what she sees. "No panties, <<$pcs_...
      scene.text(`She pushes your skirt up and is surprised at what she sees. "No panties, ${((s as any).pcs_nickname ?? 0)}? You are a naughty girl!" she says with a laugh before spreading your legs and burying her face in your crotch.`);
    } else {
      scene.text('She pushes your skirt up before pulling your panties off and spreading your legs wide. She then smiles up at you before burying her face in your crotch.');
    }
    qspCall(s, 'arousal', 'cuni', (-15), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/bathroom/bathroom5.jpg');
    scene.text('You moan softly as she traces her tongue along your folds and over your clit. She does this for a few seconds before concentrating solely on your clit, expertly licking and sucking on it, her tongue piercing only adding to your pleasure.');
    scene.text('She teases you like this for only a few seconds before you feel your orgasm building, your breathing becoming more ragged.');
    qspCall(s, 'arousal', 'cuni', (-15), 'lesbian');
    qspCall(s, 'stat', '');
    scene.text('She keeps teasing your clit throughout your orgasm, increasing your pleasure even further. Once your orgasm passes, she pulls away and you look down at her with an appreciative smile.');
    scene.text('She licks her lips and winks at you in response before getting to her feet and walking over to the sink to clean up. You fix your clothes and join her, your legs still rather weak.');
    scene.text('Once you\'ve both cleaned up, she pulls you in for a quick, but passionate kiss before leaving with a teasing sway in her hips. You quickly compose yourself before heading out behind her as the bell for your next class rings.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLunchFun_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  // TODO-QSP: dynamic text: As you approach Albina, she gives you a sly grin. "Hey <<$pcs_nickname>>. I'm fe...
  scene.text(`As you approach Albina, she gives you a sly grin. "Hey ${((s as any).pcs_nickname ?? 0)}. I'm feeling a little bored, so why don't we go and have a little <i>fun</i>?" she softly whispers in your ear.`);
  scene.text('You know exactly what she means by this.');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('"Not today Albina. I don\'t feel like it," you tell her while shaking your head.');
    scene.text('She looks a little disappointed, but doesn\'t press the matter any further.');
    scene.text('"In that case, just know that I\'ll be sitting in class with a <i>very</i> wet pussy thinking about great you are at eating it..." she whispers teasingly.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).AlbinaQW ?? 0)?.['julia_sex'] === 0) {
      scene.text('You silently nod and she discreetly motions for you to follow her to one of the empty classrooms. Once inside, she grabs hold of you and is about to kiss you when she jumps back and squeals in fright. You look round and find Julia blankly staring at the two of you.');
      scene.actions([
        { label: 'Continue', goto: ['albina_school_sex', 'lunch_fun_1_2'] },
      ]);
    } else {
      scene.text('You silently nod and she discreetly motions for you to follow her to one of the empty classrooms. Once inside, she grabs hold of you and hungrily kisses you as her hands start roaming over your body.');
      scene.actions([
        { label: 'Continue', goto: ['albina_school_sex', 'lunch_fun_2'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterLunchFun_1_2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['julia_sex'] = 1;
  qspCall(s, 'npcStat', 'A23');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/threesome1.jpg');
  scene.text('You both walk over to the desk where Julia is sitting, which is cluttered with studying materials. Albina leans on the desk as you stand behind Julia and take a peek at what she\'s doing.');
  scene.text('"Why are you all alone in here? Shouldn\'t you be with the other geeks?" Albina asks teasingly as Julia squirms in her chair.');
  scene.text('"Uh... We... Uhh, have a test coming up. I, uh, just needed a quiet place... T-To study.... Away from... The others. Wha... What are you doing here?" she stutters, clearly frightened of what Albina\'s intentions are.');
  // TODO-QSP: dynamic text: Albina leans over into Julia's face. "<<$pcs_nickname>> and I were just going to...
  scene.text(`Albina leans over into Julia's face. "${((s as any).pcs_nickname ?? 0)} and I were just going to have a little fun is all. I know you would <i>love</i> to watch that..."`);
  scene.text('Julia blushes and looks around for a way out as Albina smiles. "Don\'t be shy, Julia. I know you love staring at my ass, and who can blame you? It\'s so <i>big</i> and <i>firm</i> and you\'d just love to feel it in your hands and give it a good squeeze, wouldn\'t you?"');
  scene.text('Julia blushes and squirms even more as she looks at the floor. "I, I... What are you... Talking about?"');
  // TODO-QSP: dynamic text: "Don't be like that, Julia! I'd like it, no <i>love</i> it, if you played with m...
  scene.text(`"Don't be like that, Julia! I'd like it, no <i>love</i> it, if you played with my ass right here, right now. '+iif(func('pcs_has_attr', 'OR', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble'),'I bet you'd love to have a feel of ${((s as any).pcs_nickname ?? 0)}'s ass as well, wouldn't you?',')+'"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/threesome2.jpg');
    scene.text('Julia sits in silence before awkwardly answering. "Ye... Yes, but please don\'t tell anyone! Please, just leave me alone!"');
    scene.text('Albina smiles. "Oh, I won\'t tell anyone. It\'ll be our little secret. I\'ve got a far better idea." She then takes both you and Julia by surprise by sweeping Julia\'s stuff off the desk and climbing over to softly kiss Julia on the lips.');
    scene.text('Julia doesn\'t flinch and even starts returning the kiss. The two of them are soon passionately making out in front of you and you see Julia closing her legs tightly together.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/threesome3.jpg');
    scene.text('After a few seconds, Albina breaks the kiss and has Julia sit up on the teacher\'s desk and spread her legs before she pushes her skirt up and pulls her panties aside to reveal how aroused Julia is feeling.');
    scene.text('"That\'s one very wet pussy! What a naughty girl! I bet you\'re thinking about how wet our pussies must be..."');
    scene.text('Julia sits quietly and Albina just laughs before undoing her skirt and stepping out of it. She then grabs Julia\'s hands and places them on her thong clad ass. "Give it a good squeeze, Julia. I\'m not going to bite you."');
    scene.text('To your surprise, Julia actually does start playing with Albina\'s ass, and with great enthusiasm. You think you see a small smile creep onto her face as Albina continues undressing and you follow her lead.');
    qspCall(s, 'arousal', 'erotic', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/threesome4.jpg');
    scene.text('The two of you are soon naked and that\'s when Albina stops Julia and pulls her off the desk. You help Albina undress her before you and Albina climb onto the table and she leans back against you with her legs spread, presenting her wet pussy to Julia, who stares wide eyed at her.');
    scene.text('"I know you want a taste, Julia. Go ahead," she says teasingly.');
    scene.text('You see another small smile on Julia\'s face as she gets on her knees between Albina\'s legs and, without hesitation, starts licking her pussy.');
    scene.text('"</i>MMMHHMM!</i> That feels good! Keep going!" Albina moans and Julia complies, soon reducing her to a quivering mess of loud, pleasured moans as she grabs Julia\'s hair and holds her tightly against her crotch.');
    scene.text('Julia doesn\'t seem to care and appears to double her efforts, which causes Albina to moan even louder.');
    qspCall(s, 'arousal', 'erotic_nudity', (-8), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/threesome5.jpg');
    scene.text('You feel a little left out, so you slide out from behind Albina and lay her flat on the desk before straddling her and sitting on her face, moaning loudly as she immediately starts eating your pussy.');
    scene.text('Albina gives out as much as she\'s receiving and you soon find yourself growing weak from the pleasure as her pierced tongue expertly swirls around your clit.');
    qspCall(s, 'arousal', 'cuni', (-15), 'lesbian');
    qspCall(s, 'stat', '');
    scene.text('Julia soon brings Albina over the edge and her muffled moans feel amazing against your sensitive clit before you climb off her and she flops back on the desk in ecstasy.');
    // TODO-QSP: dynamic text: "Fuck Julia, you're an absolute pro! Only <<$pcs_nickname>> has come close to ea...
    scene.text(`"Fuck Julia, you're an absolute pro! Only ${((s as any).pcs_nickname ?? 0)} has come close to eating my pussy as good as you did!" She then sits up and looks down at the meek looking nerd, who's clearly aroused and in need of a release. "Get up here. It's your turn."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/threesome6.jpg');
    scene.text('Julia seems a little stunned, and maybe afraid, by what Albina said, so you slide off the desk and pull her to her feet before getting her to climb up onto the desk and bend over.');
    scene.text('You then kneel below her now dripping wet pussy and gently run your tongue along her folds to her engorged clit. You flick your tongue over her clit, which causes her to moan loudly in pleasure as Albina goes down on her ass, rimming and tongue fucking her asshole.');
    scene.text('She covers her mouth to muffle her pleasured moans and a few seconds later, you and Albina\'s combined efforts bring her over the edge. She barely contains her screams of pleasure as she cums, you and Albina continuing to please her throughout her orgasm. Once her orgasm passes, she collapses onto the desk.');
    qspCall(s, 'arousal', 'cuni_give', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/threesome7.jpg');
    scene.text('Albina pulls her into an embrace as you sit back on the desk alongside them. You sit quietly for a few minutes in post orgasm bliss before Julia suddenly scurries to her feet.');
    scene.text('"Oh no no no! Lunch is almost over! I.. I need to go before Zinaida wonders where I am. I said I would discuss strategies for our game night with her after I finished studying."');
    scene.text('You and Albina sit and watch in amusement as she frantically picks up her clothes and stumbles around pulling them on as quickly as she can before she picks up her scattered belongings from the floor, stuffs them into her bag and runs out of the room.');
    scene.text('Once she\'s gone, the two of you share a laugh at what just happened before you both get dressed yourselves.');
    scene.text('"Well that certainly was fun. I suspected Julia had a thing for me, but I wasn\'t expecting her to be so... enthusiastic..." Albina says with a grin as she pulls her skirt back on. "The girl\'s got some great tits and an amazing ass. Shame she hangs with those geeks."');
    scene.text('The bell rings as you finish getting dressed and you both head out to your next class.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
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

function enterLunchFun_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/class1.jpg');
  scene.text('After a few seconds, she breaks the kiss and smiles at you. "I hope you\'re hungry because you\'re having my pussy for lunch today."');
  scene.text('You can sense the lust in her voice as she pushes you onto the floor, hikes up her skirt and pulls her thong off before sitting on your face.');
  scene.text('She moans loudly in pleasure as you start eating her out, her moans growing louder and her pussy growing wetter as she starts grinding against you, smearing her wetness across your face.');
  scene.text('After a few more seconds where she moans even louder and grinds even faster, she suddenly pulls herself off of you, her breath heavy.');
  qspCall(s, 'arousal', 'cuni_give', 2);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/class2.jpg');
    // TODO-QSP: dynamic text: She pulls you up to your feet and you practically rip each other's clothes off a...
    scene.text(`She pulls you up to your feet and you practically rip each other's clothes off and make out before she lies back on a desk and spreads her legs. "Get that magic tongue of yours over here and make me cum, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You smile at her as you climb onto the desk and crawl over to her, teasing her a little by sucking on her nipple before moving down to her now dripping wet pussy.');
    scene.text('She tightly wraps her legs around your head, pressing your face against her crotch as you lick and suck on her engorged clit.');
    scene.text('After a few minutes of this, her grip tightens around your head. "Oh fuck! Don\'t stop, I\'m gonna-"');
    scene.text('She isn\'t able to finish her sentence before she lets out a muffled cry of pleasure and starts squirting into your mouth and across your face.');
    scene.text('Once she finishes, you swallow her juices and she relaxes her grip, allowing you to sit up as she lies panting on the desk.');
    qspCall(s, 'arousal', 'cuni_give', 3);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/class3.jpg');
    scene.text('"Oh... Oh wow. That was... I really needed that..." she pants as she rides out her orgasm. "I should return the favor..."');
    scene.text('She then climbs off the desk and pulls you over to the edge as you lie back, licking her lips before she buries her head in your crotch, causing you to moan loudly as she eats you out. She knows exactly what she\'s doing and has you approaching orgasm within minutes.');
    // TODO-QSP: dynamic text: Seeing this, she stops licking your pussy and stands up; you barely have time to...
    scene.text(`Seeing this, she stops licking your pussy and stands up; you barely have time to ask what's happening before she jams her fingers deep inside you and starts fingerbanging you. "Cum for me, ${((s as any).pcs_nickname ?? 0)}..." she whispers in your ear before making out with you.`);
    scene.text('You moan loudly into her mouth as she brings you to a powerful orgasm, leaving you panting on the desk as she pulls her fingers out and sucks on them. "You taste really fucking good, you know that?" she says teasingly with a wink.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'arousal', 'finger', (-5), 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/school/classroom/class4.jpg');
    scene.text('She climbs back onto the desk and you start making out again. You can taste yourself on her lips and tongue as she reaches down and gives your sensitive clit a few teasing rubs.');
    scene.text('She then breaks the kiss and leans over the edge of the desk, fumbling around in search of something.');
    qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spank her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/classafter.jpg');
    scene.text('Her ass is too inviting and she yelps in surprise when you smack it hard.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!!!" she says while looking back and biting her lip. "You know...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}!!!" she says while looking back and biting her lip. "You know I'd love it if you continued, but we need to get dressed before someone finds us."`);
    scene.text('You nod and start getting dressed, Albina making a show of giving you what you can only describe as a reverse striptease. Once you\'re dressed, she gives you a final kiss and surprises you by spanking you back, making you jump a little as she smiles and walks out the door with some sway in her hips.');
    scene.text('You quickly hurry out behind her as the bell for your next class rings.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Finger her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/classafter.jpg');
    scene.text('Her legs are slightly spread, so you move in behind her and slide your fingers inside her still wet hole.');
    // TODO-QSP: dynamic text: "Ooohh <<$pcs_nickname>>..." she moans softly. "While I'd love a round two, we s...
    scene.text(`"Ooohh ${((s as any).pcs_nickname ?? 0)}..." she moans softly. "While I'd love a round two, we should get dressed before someone finds us."`);
    scene.text('You nod and start getting dressed, Albina making a show of giving you what you can only describe as a reverse striptease. Once you\'re dressed, she gives you a final kiss and gets her own back by pinching your nipple, making you squeal a little as she smiles and walks out the door with some sway in her hips.');
    scene.text('You quickly hurry out behind her as the bell for your next class rings.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
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
    case 'break_fun_1':
      enterBreakFun_1(s, scene);
      break;
    case 'break_fun_2':
      enterBreakFun_2(s, scene);
      break;
    case 'lunch_fun_1':
      enterLunchFun_1(s, scene);
      break;
    case 'lunch_fun_1_2':
      enterLunchFun_1_2(s, scene);
      break;
    case 'lunch_fun_2':
      enterLunchFun_2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_school_sex: LocationDef = {
  name: 'albina_school_sex',
  title: 'You look around for Albina, but she\'s nowhere to be seen. Ju',
  region: 'other',
  enter: enter,
};
