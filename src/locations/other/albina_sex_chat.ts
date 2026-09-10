import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSexTalkStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('Knowing that you don\'t have much experience in the subject, she offers to change the topic.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } else {
    scene.text('You steer the conversation towards sex, a topic Albina is more than comfortable with and readily engages with you about it.');
    qspCall(s, 'albina_sex_chat', 'sex_talk2');
  }
  scene.build();
}

function enterSexTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    { label: 'Keep talking about sex', handler: (st: GameState) => {
    qspCall(st, 'albina_sex_chat', 'sex_talk2');
  } },
    { label: 'Ask her about anal', goto: ['albina_sex_chat', 'anal'] },
  ]);
  scene.build();
}

function enterSexTalk2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  qspCall(s, 'albina_sex_chat', 'sex_talk_topics');
  scene.actions([
    { label: 'Let her lead', handler: (st: GameState) => {
    qspCall(st, 'albina_sex_chat', 'sex_talk_albina_lead');
  } },
  ]);
  scene.build();
}

function enterSexTalkTopics(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Lead the conversation', handler: (st: GameState) => {
    scene.actions([
      { label: 'Talk about blowjobs', handler: (st: GameState) => {
    scene.actions([
      { label: '"Do you like blowjobs?"', goto: ['albina_sex_chat', 'blowjob_talk1'] },
      { label: '"Do you like 69ing?"', goto: ['albina_sex_chat', '69_talk1'] },
    ]);
  } },
      { label: 'Talk about masturbation', handler: (st: GameState) => {
    scene.actions([
      { label: '"How often do you masturbate?"', goto: ['albina_sex_chat', 'masturbation_frequency'] },
      { label: '"How do you prefer to masturbate?"', goto: ['albina_sex_chat', 'masturbation_method'] },
    ]);
  } },
      { label: 'Talk about cum', handler: (st: GameState) => {
    scene.actions([
      { label: '"Do you like the taste?"', goto: ['albina_sex_chat', 'cum_taste1'] },
      { label: '"Do you like facials?"', goto: ['albina_sex_chat', 'facial_talk1'] },
    ]);
  } },
      { label: 'Talk about boys', handler: (st: GameState) => {
    scene.actions([
      { label: '"Do you like big cocks?"', goto: ['albina_sex_chat', 'cock_talk1'] },
      { label: '"What type of guys do you like?"', goto: ['albina_sex_chat', 'guy_talk'] },
    ]);
  } },
      { label: 'Talk about girls', handler: (st: GameState) => {
    scene.actions([
      { label: '"Do you like eating pussy?"', goto: ['albina_sex_chat', 'pussy_talk'] },
      { label: '"What girls do you find hot?"', goto: ['albina_sex_chat', 'girl_talk'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBlowjobTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like giving blowjobs?" you ask and Albina twists her lips thoughtfully, almost like she can\'t make up her mind.');
  scene.text('"I don\'t really mind giving head, but it\'s not my favorite," she says eventually. "It\'s just foreplay to get the guy hard or a way to get them to finish. Although... when a guy grabs my hair, takes charge, and shoves it down my throat... <i>Fuck me</i>... There\'s something so hot about that. It\'s actually made me cum once or twice before."');
  scene.actions([
    { label: '"I don\'t like blowjobs"', handler: (st: GameState) => {
    scene.text('"Really? You\'ve gotten off on a blowjob before?" You wrinkle your nose. "I hate blowjobs. The taste is awful, they make my jaw ache, and they\'re just gross all around."');
    scene.text('"I can understand that," she nods. "They\'re not for everybody. I guess I\'m just used to the taste. And just to be clear, it\'s only in that specific situation that I like blowjobs."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: '"That\'s hot"', handler: (st: GameState) => {
    scene.text('"That\'s fucking hot," you grin at her and she grins back.');
    scene.text('"Well? What about you? Do you like giving head?"');
    qspCall(s, 'albina_sex_chat', 'blowjob_talk2');
  } },
    { label: 'Tease her', handler: (st: GameState) => {
    scene.text('"You cum from blowjobs?" you snicker. "You slut."');
    scene.text('"I <i>have</i> cum from <i>one or two</i> blowjobs before," she says, smacking you with a pillow and grinning back at you as she does. "It doesn\'t happen <i>every</i> time. But what about you, huh? Do you like giving head?"');
    qspCall(s, 'albina_sex_chat', 'blowjob_talk2');
  } },
    { label: '"You\'re just like my sister"', handler: (st: GameState) => {
    scene.text('"You\'re just like my sister, you know that?" you snicker and she cocks her head while giving you a confused look.');
    scene.text('You pull up your hand and start counting off on your fingers. "You love taking it up the ass, you love getting face fucked, you love swallowing-"');
    scene.text('"I don\'t love swallowing!" she interrupts in protest. "I said I <i>always</i> swallow because I\'m not an impolite bitch! There\'s a difference!"');
    scene.text('"Suuuure!" you jokingly reply and continue to tease her until she picks up a pillow and smacks you with it.');
    scene.text('"Well what about you, huh?" she grins. "Do you like giving head?"');
    qspCall(s, 'albina_sex_chat', 'blowjob_talk2');
  } },
  ]);
  scene.build();
}

function enterBlowjobTalk2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I hate it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I hate giving blowjobs," you reply while wrinkling your nose. "The taste is awful, they make my jaw ache, and they\'re just gross all around."');
    scene.text('"I can understand that," she nods. "They\'re not for everybody. I guess I\'ve just seen so much cock I\'m used to the taste and the ache. Just another part of the process."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'I don\'t like it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I don\'t really like it," you reply while wrinkling your nose. "They\'re not the <i>worst</i>, but I don\'t get off on them at all. I mostly just sit there bored out of my mind until it\'s over."');
    scene.text('"I get that," she nods. "If it\'s not a skull-fucking, I feel pretty much the same way. Just something you have to do until you get to the good part."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'Don\'t love it, don\'t hate it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Hmm. I don\'t know. It\'s okay, I guess..." you shrug. "I don\'t really like them, but I don\'t really hate them either. Just kind of something I do. I don\'t know. It\'s a cock in my mouth. Is there much more to say?"');
    scene.text('"I get that," she nods. "If it\'s not a skull-fucking, I feel pretty much the same way. Just something you have to do until you get to the good part."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'I like it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I like it," you reply. "Knowing that I\'m in charge of a guy\'s pleasure is really hot. I like the feeling of them squirming inside my mouth and knowing that it\'s because of me."');
    scene.text('"I get that," she says with an understanding nod. "Not my personal cup of tea, but I can see the appeal when you put it like that."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'I love it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I <i>love</i> blowjobs," you gush. "I love everything about them! The feel of a guy\'s dick in my mouth, the taste, the smell, the way I can make him moan and squirm. I could get off on giving head."');
    scene.text('"I get that," she smirks amusedly. "Not my personal cup of tea, but I can see the appeal when you put it like that."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'Only when it\'s rough', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'m like you," you reply. "When I\'m blowing a guy, it\'s just whatever. But when he starts getting rough with me-"');
    scene.text('"It\'s so fucking hot, right?" she interrupts.');
    scene.text('"It\'s like a waterfall between my legs," you gush back excitedly. "It makes me want to just go limp and-"');
    scene.text('"Let him grab you with both hands and skullfuck you?"');
    scene.text('"Yes!"');
    scene.text('The conversation quickly turns into a revolving circle of your shared face-fucking fetish.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'Only if his dick is small', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I like it..." you start. "But only when his dick is small enough. When it\'s too big, it takes so much effort just to get it in my mouth and I feel like I\'m gonna choke. An aching jaw is kind of a turn off, but when it\'s average or small and I can suck it no problem, blowjobs can be kind of fun."');
    scene.text('"I get that," she nods. "Definitely choked on my share of big dicks. Almost threw up several times before I lost my gag reflex."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'Only if his dick is big', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I like it when it\'s a big dick," you smirk. "There\'s something really satisfying about having a big dick in my mouth, making me stretch my lips to get around it. It\'s... <i>meaty</i>. As opposed to when it\'s small or average, it feels like there\'s too much space by comparison."');
    scene.text('"I get that," she smiles back amusedly. "I\'ve choked on a lot of dick in my time, but always better to choke on a bigger one than a smaller one. Better to get skullfucked with."');
    scene.text('She grins wickedly.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
  ]);
  scene.build();
}

function enter69Talk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like 69ing?" you ask.');
  scene.text('"With a guy or a girl?" she smirks back wickedly.');
  scene.actions([
    { label: 'Guy', handler: (st: GameState) => {
    scene.text('"A guy," you smile back and she twists her lips in thought for a moment before taking a deep breath and letting out a big sigh.');
    scene.text('"It\'s just a novelty if you ask me," she says, boredly twirling her finger through her hair. "Too much going on at once. I\'m sucking dick trying to make him feel good, his face is between my legs, or at least trying to because matching dick to mouth and pussy to face is hard at my height; especially if he\'s tall. It\'s a big hassle and I can\'t concentrate on anything. I just give a worse blowjob while getting less pleasure from being eaten out. <i>If</i> he even is eating me out. And don\'t get me started about when the guy\'s on top. Trying to suck a dick hanging above you on your back is so much harder than when it\'s standing up straight in front of you."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'Girl', handler: (st: GameState) => {
    scene.text('"A girl," you say.');
    if (((s as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('"It\'s... different... When you- I mean we- It made me-"');
      scene.text('She flushes, growing flustered in a way you rarely see.');
      scene.text('"When we... <i>did that...</i> it was very... wet..." she says slowly. "Not sure I can describe it another way. Everything was soft and squishy, my pussy was like a waterfall and I wanted to drown myself in yours. Really different from 69ing with a guy. Or sex with guys as a whole."');
    } else {
      scene.text('"It\'s very... wet..." she says slowly, growing flustered in a way you rarely see. "Not sure I can describe it another way. Everything was soft and squishy, my pussy was like a waterfall and I wanted to drown myself in yours. Really different from 69ing with a guy. Or sex with guys as a whole."');
    }
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
  ]);
  scene.build();
}

function enterMasturbationFrequency(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"How often do you masturbate?" you ask.');
  if (((s as any).region ?? 0) === 'pav') {
    scene.text('"A few times a week," she shrugs, a sly smirk on her face. "Depends on if Lazar comes over or not."');
  } else {
    scene.text('"A few times a week," she shrugs, a sly smirk on her face. "Depends on how many guys I end up going home with."');
  }
  qspCall(s, 'albina_sex_chat', 'sex_talk');
  scene.build();
}

function enterMasturbationMethod(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"How do you prefer to masturbate?" you ask.');
  scene.text('"Ideally?" she smirks. "I prefer real sex. Nothing beats a hard, hot cock inside me. <i>But</i> failing that, I use a dildo. Ass up, head down, big rubber cock between my cheeks and fingers on my clit."');
  scene.text('"You have a favorite toy?"');
  scene.text('"Of course," she smiles. "I use different dildos to fuck my pussy, but I like to keep a special one aside just for fucking my ass. One that\'s nice and girthy enough to <i>really</i> stretch me out."');
  qspCall(s, 'albina_sex_chat', 'sex_talk');
  scene.build();
}

function enterCumTaste1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like the taste of cum?" you ask and she immediately wrinkles her nose.');
  scene.text('"No! It\'s <i>vile</i>!" she replies as she makes a fake gagging sound. "I brush my teeth the first chance I get after I finish a guy with my mouth. Why? Do you like it?"');
  qspCall(s, 'albina_sex_chat', 'cum_taste2');
  scene.build();
}

function enterCumTaste2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['cumeater'] !== 0) {
    scene.actions([
      { label: 'I got used to it', handler: (st: GameState) => {
    scene.text('"I just got used to it to be honest," you shrug. "I didn\'t like it at first, but after swallowing a bunch of loads, it\'s removed any disgust I associated with it."');
    scene.text('She shakes her head. "I don\'t know how you can stand it. I\'ve tasted dozens of different guy\'s cum and they\'re <i>all</i> awful. One of them claimed he ate pineapple just for me, but either he was lying or that stuff about making it taste sweeter is bullshit!"');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    ]);
  }
  scene.actions([
    { label: 'It\'s gross', handler: (st: GameState) => {
    scene.text('"No, I agree with you one hundred percent," you say, making a face of disgust yourself. "It\'s bitter, it\'s sour, it\'s slimy. I want to throw up as soon as I taste it. It\'s just... <i>ugh!</i>"');
    scene.text('The two of you share an involuntary shudder. Seems you\'re in agreement.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'Don\'t mind it', handler: (st: GameState) => {
    scene.text('"I don\'t really mind it," you shrug. "It\'s a little bitter, not my favourite flavour in the world, but not really a dealbreaker for me either."');
    scene.text('She shakes her head. "I don\'t know how you can stand it. I\'ve tasted dozens of different guy\'s cum and they\'re <i>all</i> awful. One of them claimed he ate pineapple just for me, but either he was lying or that stuff about making it taste sweeter is bullshit!"');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'I like it', handler: (st: GameState) => {
    scene.text('"I like it actually," you say. "It\'s a little salty, but not offensively so. Like the white part of a fried egg. Similar texture too. I can swallow it no problem."');
    scene.text('She shakes her head. "I don\'t know how you can stand it. I\'ve tasted dozens of different guy\'s cum and they\'re <i>all</i> awful. One of them claimed he ate pineapple just for me, but either he was lying or that stuff about making it taste sweeter is bullshit!"');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'I love it', handler: (st: GameState) => {
    scene.text('"I <i>love</i> the taste of cum," you gush. "I love it when guys cum in my mouth and I love swallowing. I don\'t know what it is about it, but I could drink cum by the bucket."');
    scene.text('"I don\'t know how you can stand it," she replies as she shakes her head. "I\'ve tasted dozens of different guy\'s cum and they\'re <i>all</i> awful. One of them claimed he ate pineapple just for me, but either he was lying or that stuff about making it taste sweeter is bullshit!"');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
  ]);
  scene.build();
}

function enterFacialTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like it when guys cum on your face?" you ask.');
  scene.text('"Sometimes," she shrugs. "When a guy cums on my face, I feel <i>dirty</i>. Like a used cum rag. Which... I don\'t mind if I\'m in the mood for that kind of thing. Like when Lazar fucks me so hard that my makeup is fucked and my hair is frizzy and I\'m practically about to pass out. That\'s the perfect time for him to cum on my face. But that\'s situational. I\'d much rather he just blow his load in my ass. I\'m <i>always</i> in the mood for that..." she grins.');
  qspCall(s, 'albina_sex_chat', 'sex_talk');
  scene.build();
}

function enterCockTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like a guy with a big cock?" you ask.');
  scene.text('She can\'t hold back a toothy grin. "I fucking <i>love</i> a big cock! The way they fill me up and stretch my holes... Fuck, I could cum just thinking about it..."');
  scene.text('"I\'ll take that as a yes then," you reply, causing you both to laugh.');
  scene.text('"What about you, slut?" she grins. "Do you like them hung like a horse?"');
  qspCall(s, 'albina_sex_chat', 'cock_talk2');
  scene.build();
}

function enterCockTalk2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I love them too', handler: (st: GameState) => {
    scene.text('You grin back. "I love them too..."');
    scene.text('"Especially when they\'re using them in the <i>other</i> hole?" she asks with a smile.');
    scene.text('You giggle. "You really can\'t help yourself, can you?"');
    scene.text('"What? The <i>best</i> part about a big cock is when it goes up your ass!"');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'They\'re okay', handler: (st: GameState) => {
    scene.text('"They\'re okay, I guess..." you reply. "I don\'t dislike them, but... It\'s just a dick? I don\'t get why being bigger is such a big deal."');
    scene.text('Her jaw drops. "You don\'t <i>get it</i>? The bigger a guy\'s cock, the better it feels inside you. You just need to get fucked properly, then you\'ll understand."');
    scene.text('You shrug. "If you say so. I don\'t think I\'ll ever understand why other girls find them so fascinating."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    { label: 'I don\'t like them', handler: (st: GameState) => {
    scene.text('You shake your head. "I don\'t like them."');
    scene.text('Her jaw drops. "<i>What</i>?! How can you <i>not</i> like having a big fat cock stretching your pussy?!"');
    scene.text('"Because it <i>hurts</i>?" you frown. "I don\'t get how other girls find them sexy or pleasurable. I\'m perfectly happy with an average sized guy."');
    scene.text('"You just need practice," she replies. "Buy a nice big dildo and train your pussy until it doesn\'t hurt anymore. You\'ll thank me later on when a guy fucking you with his big cock gives you the best orgasm you\'ll ever have."');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
  ]);
  scene.build();
}

function enterGuyTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"What kind of guys do you like?" you ask.');
  scene.text('"You mean my type?" she asks in reply and you nod.');
  if (((s as any).region ?? 0) === 'pav') {
    scene.text('"Truthfully? Lazar is hot as fuck and is amazing at fucking my brains out, but I think I might actually be into older men..."');
    scene.text('"Seriously?" you ask, a little shocked at her answer.');
    scene.text('"Yeah," she says. "I think I might have a bit of a... crush on Coach Pavlovich..."');
    scene.text('She starts blushing heavily, something you\'ve never seen her do before.');
    scene.text('"Every time I see him, I... Fuck, I just want him to take me into his office, bend me over his desk and spank me with his paddle until I\'m wet and quivering... Then pound the shit out of me until I cum. Then do it all again..."');
    scene.actions([
      { label: 'He is pretty hot', handler: (st: GameState) => {
    scene.text('"I\'ll admit, he <i>is</i> quite hot," you reply and she grins.');
    scene.text('"I know, right? I\'m going to have to rub one out thinking about him tonight..."');
    scene.text('"Albina!" you exclaim and she shrugs.');
    scene.text('"What? I can\'t help it if I have daddy issues!"');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
      { label: 'Quite the fantasy', handler: (st: GameState) => {
    scene.text('"That\'s... That\'s quite some fantasy, Albina..." you reply, as equally aroused as you are shocked.');
    scene.text('"I blame my daddy issues," she shrugs.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
    ]);
  } else {
    scene.text('"I\'m into older men," she casually states.');
    scene.text('"Seriously?" you ask, a little shocked at her answer.');
    scene.text('"Yeah," she says. "I had the <i>biggest</i> crush on Coach Pavlovich back in school. The fantasies I had about him made me realize <i>just</i> how hot I found older guys."');
    scene.text('"So you\'re fucking older guys now?" you ask.');
    scene.text('"No," she pouts. "There <i>is</i> one older guy I regularly hook up with, but I find myself rubbing one out to the <i>idea</i> of it more often than not. <i>Especially</i> Coach Pavlovich... Do you think...?"');
    scene.text('"You could still fuck him if you ever saw him again?" you laugh. "I doubt it, but you never know..."');
    scene.text('"Let\'s not kid ourselves. He would <i>love</i> to fuck me, especially if I were to drop my panties and bend over for him," she replies, which causes you both to laugh.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  }
  scene.build();
}

function enterPussyTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like eating pussy?" you ask and she grins.');
  if (((s as any).npc_had_sex ?? 0)?.['A23']) {
    scene.text('"Yours or just in general?"');
    scene.text('"Both," you shrug.');
  } else {
    scene.text('"Why? You want me to prove myself?"');
    scene.text('"I was just curious," you shrug.');
  }
  scene.text('"I guess I like it," she shrugs back. "It\'s different than sucking a dick. And a lot better for my jaw! Do you like it?"');
  scene.actions([
    { label: 'I like it too', handler: (st: GameState) => {
    scene.text('"I like it as well," you reply. "Girls taste a lot better than guys!"');
    scene.text('She laughs. "I get that."');
    if (((s as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('A smirk then appears on her lips. "Did you want to taste me?"');
      scene.actions([
        { label: 'Yes', goto: ['albina_sex_scenes', 'pussy_eating_contest'] },
        { label: 'No', handler: (st: GameState) => {
    scene.text('Oh. Uhh... No thanks," you reply. "I was just curious was all."');
    scene.text('She pouts a little before she changes the subject.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
      ]);
    } else {
      scene.text('You chat for a few more minutes about the differences between sucking dick and eating pussy.');
      qspCall(s, 'albina_sex_chat', 'sex_talk');
    }
  } },
    { label: 'It\'s okay', handler: (st: GameState) => {
    scene.text('"It\'s okay," you reply. "Like you said, it\'s a lot different than sucking a dick."');
    if (((s as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('A smirk appears on her lips. "Were you asking because you wanted to eat mine?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    scene.text('A guilty smile creeps onto your lips.');
    scene.text('"Ha!" she laughs. "I knew it, you slut!"');
    scene.actions([
      { label: 'Continue', goto: ['albina_sex_scenes', 'pussy_eating_contest'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    scene.text('Oh. Uhh... No thanks," you reply. "I was just curious was all."');
    scene.text('She pouts a little before she changes the subject.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
      ]);
    } else {
      scene.text('You chat for a few more minutes about the differences between sucking dick and eating pussy.');
      qspCall(s, 'albina_sex_chat', 'sex_talk');
    }
  } },
    { label: 'I don\'t like it', handler: (st: GameState) => {
    scene.text('You shake your head. "No, it\'s not really my thing."');
    scene.text('"Then why did you ask?" she asks with a curious gaze.');
    scene.text('"I was just curious," you shrug.');
    // TODO-QSP: dynamic text: "That's called being in the closet, <<$pcs_nickname>>," she replies before chang...
    scene.text(`"That's called being in the closet, ${((s as any).pcs_nickname ?? 0)}," she replies before changing the subject.`);
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } },
  ]);
  scene.build();
}

function enterGirlTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  if (((s as any).region ?? 0) === 'pav') {
    scene.text('"Do you find any of the girls at school attractive?" you ask.');
    scene.text('She frowns. "What?! No!"');
    scene.text('Her answer is a little too abrupt, and the slight blushing of her cheeks betrays her true feelings.');
    scene.text('"Oh my god, you\'re thinking about her right now, aren\'t you?!"');
    scene.text('"Shut up!" she replies. "We are <i>so</i> not having this conversation right now!"');
    scene.text('"I bet it\'s one of the nerds. Or Katja," you jest and she rolls her eyes jokingly before smacking you with a pillow.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  } else {
    scene.text('"Do you find any of the girls in your classes attractive?" you ask.');
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
      scene.text('She blushes and bites her lip before she answers. "Well... You know Mia and Yana, the twins in our class?"');
      scene.text('You nod and she continues. "I talk to them quite a lot and... I think they might be into me and... I think I might like them back... Just a little..."');
      scene.text('"So you\'re down to have a little fun with them?"');
      scene.text('"They\'re the partying type, so I can have fun with them in more ways than one..."');
    } else {
      scene.text('She blushes and bites her lip before she answers. "There\'s a pair of twins in my class I talk to and... Well... I think I might be into them. Just a little. I think they might be into me as well..."');
      scene.text('"Ohhhh, twins! So you\'re down to have a little fun with <i>both</i> of them?"');
      scene.text('"They\'re the partying type, so I can have fun with them in more ways than one..."');
    }
    scene.text('You spend the next few minutes chatting about the twins and what they\'re like before the conversation moves on.');
    qspCall(s, 'albina_sex_chat', 'sex_talk');
  }
  scene.build();
}

function enterSexTalkAlbinaLead(s: GameState, scene: SceneBuilder): void {
  (s as any).AlbinaQW['chat_rand'] = Math.floor(Math.random() * 11) + 1;
  if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 1  &&  ((s as any).AlbinaQW ?? 0)?.['porno'] === 0  &&  ((s as any).region ?? 0) === 'city'  &&  (((s as any).month ?? 0) > 10  ||  ((s as any).year ?? 0) >= 2018)) {
    qspCall(s, 'albina_sex_chat', 'admit_porno');
  } else {
    qspCall(s, 'albina_sex_chat', 'fav_pos_chat');
    if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 3) {
      qspCall(s, 'albina_sex_chat', 'birth_control_talk');
    } else {
      qspCall(s, 'albina_sex_chat', 'sex_toys');
      if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 5) {
        qspCall(s, 'albina_sex_chat', 'penetration_cum1');
      } else {
        qspCall(s, 'albina_sex_chat', 'rough_love');
        if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 7) {
          qspCall(s, 'albina_sex_chat', 'ass_to_pussy');
        } else {
          qspCall(s, 'albina_sex_chat', 'alb_ask_body_count1');
          if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 9) {
            qspCall(s, 'albina_sex_chat', 'biggest_dick_talk1');
          } else {
            qspCall(s, 'albina_sex_chat', 'lesbian_talk1');
            qspCall(s, 'albina_sex_chat', 'sexual_fantasies1');
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sex_talk_start':
      enterSexTalkStart(s, scene);
      break;
    case 'sex_talk':
      enterSexTalk(s, scene);
      break;
    case 'sex_talk2':
      enterSexTalk2(s, scene);
      break;
    case 'sex_talk_topics':
      enterSexTalkTopics(s, scene);
      break;
    case 'blowjob_talk1':
      enterBlowjobTalk1(s, scene);
      break;
    case 'blowjob_talk2':
      enterBlowjobTalk2(s, scene);
      break;
    case '69_talk1':
      enter69Talk1(s, scene);
      break;
    case 'masturbation_frequency':
      enterMasturbationFrequency(s, scene);
      break;
    case 'masturbation_method':
      enterMasturbationMethod(s, scene);
      break;
    case 'cum_taste1':
      enterCumTaste1(s, scene);
      break;
    case 'cum_taste2':
      enterCumTaste2(s, scene);
      break;
    case 'facial_talk1':
      enterFacialTalk1(s, scene);
      break;
    case 'cock_talk1':
      enterCockTalk1(s, scene);
      break;
    case 'cock_talk2':
      enterCockTalk2(s, scene);
      break;
    case 'guy_talk':
      enterGuyTalk(s, scene);
      break;
    case 'pussy_talk':
      enterPussyTalk(s, scene);
      break;
    case 'girl_talk':
      enterGirlTalk(s, scene);
      break;
    case 'sex_talk_albina_lead':
      enterSexTalkAlbinaLead(s, scene);
      break;
    default:
      enterSexTalkStart(s, scene);
      break;
  }
}

export const albina_sex_chat: LocationDef = {
  name: 'albina_sex_chat',
  title: 'Knowing that you don\'t have much experience in the subject, ',
  region: 'other',
  description: ['Knowing that you don\'t have much experience in the subject, she offers to change the topic.'],
  enter: enter,
};
