import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSexTalkStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('Knowing that you don\'t have much experience in the subject, she offers to change the topic.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('You steer the conversation towards sex, a topic Albina is more than comfortable with and readily engages with you about it.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalkTopics(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her lead', handler: (st: GameState) => {
    qspCall(st, 'albina_sex_chat', 'sex_talk_albina_lead');
  } },
  ]);
  scene.build();
}

function enterSexTalkTopics(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: '"I don\'t like blowjobs"', handler: (st: GameState) => {
    scene.text('"Really? You\'ve gotten off on a blowjob before?" You wrinkle your nose. "I hate blowjobs. The taste is awful, they make my jaw ache, and they\'re just gross all around."');
    scene.text('"I can understand that," she nods. "They\'re not for everybody. I guess I\'m just used to the taste. And just to be clear, it\'s only in that specific situation that I like blowjobs."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: '"That\'s hot"', handler: (st: GameState) => {
    scene.text('"That\'s fucking hot," you grin at her and she grins back.');
    scene.text('"Well? What about you? Do you like giving head?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlowjobTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Tease her', handler: (st: GameState) => {
    scene.text('"You cum from blowjobs?" you snicker. "You slut."');
    scene.text('"I <i>have</i> cum from <i>one or two</i> blowjobs before," she says, smacking you with a pillow and grinning back at you as she does. "It doesn\'t happen <i>every</i> time. But what about you, huh? Do you like giving head?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlowjobTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: '"You\'re just like my sister"', handler: (st: GameState) => {
    scene.text('"You\'re just like my sister, you know that?" you snicker and she cocks her head while giving you a confused look.');
    scene.text('You pull up your hand and start counting off on your fingers. "You love taking it up the ass, you love getting face fucked, you love swallowing-"');
    scene.text('"I don\'t love swallowing!" she interrupts in protest. "I said I <i>always</i> swallow because I\'m not an impolite bitch! There\'s a difference!"');
    scene.text('"Suuuure!" you jokingly reply and continue to tease her until she picks up a pillow and smacks you with it.');
    scene.text('"Well what about you, huh?" she grins. "Do you like giving head?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlowjobTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBlowjobTalk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I hate it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I hate giving blowjobs," you reply while wrinkling your nose. "The taste is awful, they make my jaw ache, and they\'re just gross all around."');
    scene.text('"I can understand that," she nods. "They\'re not for everybody. I guess I\'ve just seen so much cock I\'m used to the taste and the ache. Just another part of the process."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I don\'t like it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I don\'t really like it," you reply while wrinkling your nose. "They\'re not the <i>worst</i>, but I don\'t get off on them at all. I mostly just sit there bored out of my mind until it\'s over."');
    scene.text('"I get that," she nods. "If it\'s not a skull-fucking, I feel pretty much the same way. Just something you have to do until you get to the good part."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Don\'t love it, don\'t hate it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Hmm. I don\'t know. It\'s okay, I guess..." you shrug. "I don\'t really like them, but I don\'t really hate them either. Just kind of something I do. I don\'t know. It\'s a cock in my mouth. Is there much more to say?"');
    scene.text('"I get that," she nods. "If it\'s not a skull-fucking, I feel pretty much the same way. Just something you have to do until you get to the good part."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I like it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I like it," you reply. "Knowing that I\'m in charge of a guy\'s pleasure is really hot. I like the feeling of them squirming inside my mouth and knowing that it\'s because of me."');
    scene.text('"I get that," she says with an understanding nod. "Not my personal cup of tea, but I can see the appeal when you put it like that."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I love it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I <i>love</i> blowjobs," you gush. "I love everything about them! The feel of a guy\'s dick in my mouth, the taste, the smell, the way I can make him moan and squirm. I could get off on giving head."');
    scene.text('"I get that," she smirks amusedly. "Not my personal cup of tea, but I can see the appeal when you put it like that."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Only when it\'s rough', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'m like you," you reply. "When I\'m blowing a guy, it\'s just whatever. But when he starts getting rough with me-"');
    scene.text('"It\'s so fucking hot, right?" she interrupts.');
    scene.text('"It\'s like a waterfall between my legs," you gush back excitedly. "It makes me want to just go limp and-"');
    scene.text('"Let him grab you with both hands and skullfuck you?"');
    scene.text('"Yes!"');
    scene.text('The conversation quickly turns into a revolving circle of your shared face-fucking fetish.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Only if his dick is small', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I like it..." you start. "But only when his dick is small enough. When it\'s too big, it takes so much effort just to get it in my mouth and I feel like I\'m gonna choke. An aching jaw is kind of a turn off, but when it\'s average or small and I can suck it no problem, blowjobs can be kind of fun."');
    scene.text('"I get that," she nods. "Definitely choked on my share of big dicks. Almost threw up several times before I lost my gag reflex."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Only if his dick is big', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I like it when it\'s a big dick," you smirk. "There\'s something really satisfying about having a big dick in my mouth, making me stretch my lips to get around it. It\'s... <i>meaty</i>. As opposed to when it\'s small or average, it feels like there\'s too much space by comparison."');
    scene.text('"I get that," she smiles back amusedly. "I\'ve choked on a lot of dick in my time, but always better to choke on a bigger one than a smaller one. Better to get skullfucked with."');
    scene.text('She grins wickedly.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enter69Talk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like 69ing?" you ask.');
  scene.text('"With a guy or a girl?" she smirks back wickedly.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Guy', handler: (st: GameState) => {
    scene.text('"A guy," you smile back and she twists her lips in thought for a moment before taking a deep breath and letting out a big sigh.');
    scene.text('"It\'s just a novelty if you ask me," she says, boredly twirling her finger through her hair. "Too much going on at once. I\'m sucking dick trying to make him feel good, his face is between my legs, or at least trying to because matching dick to mouth and pussy to face is hard at my height; especially if he\'s tall. It\'s a big hassle and I can\'t concentrate on anything. I just give a worse blowjob while getting less pleasure from being eaten out. <i>If</i> he even is eating me out. And don\'t get me started about when the guy\'s on top. Trying to suck a dick hanging above you on your back is so much harder than when it\'s standing up straight in front of you."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    if (((s as any).region ?? 0) === 'city') {
      scene.text('"A few times a week," she shrugs, a sly smirk on her face. "Depends on how many guys I end up going home with."');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterMasturbationMethod(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"How do you prefer to masturbate?" you ask.');
  scene.text('"Ideally?" she smirks. "I prefer real sex. Nothing beats a hard, hot cock inside me. <i>But</i> failing that, I use a dildo. Ass up, head down, big rubber cock between my cheeks and fingers on my clit."');
  scene.text('"You have a favorite toy?"');
  scene.text('"Of course," she smiles. "I use different dildos to fuck my pussy, but I like to keep a special one aside just for fucking my ass. One that\'s nice and girthy enough to <i>really</i> stretch me out."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCumTaste1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like the taste of cum?" you ask and she immediately wrinkles her nose.');
  scene.text('"No! It\'s <i>vile</i>!" she replies as she makes a fake gagging sound. "I brush my teeth the first chance I get after I finish a guy with my mouth. Why? Do you like it?"');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTaste2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCumTaste2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['cumeater'] !== 0) {
    scene.actions([
      { label: 'I got used to it', handler: (st: GameState) => {
    scene.text('"I just got used to it to be honest," you shrug. "I didn\'t like it at first, but after swallowing a bunch of loads, it\'s removed any disgust I associated with it."');
    scene.text('She shakes her head. "I don\'t know how you can stand it. I\'ve tasted dozens of different guy\'s cum and they\'re <i>all</i> awful. One of them claimed he ate pineapple just for me, but either he was lying or that stuff about making it taste sweeter is bullshit!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s gross', handler: (st: GameState) => {
    scene.text('"No, I agree with you one hundred percent," you say, making a face of disgust yourself. "It\'s bitter, it\'s sour, it\'s slimy. I want to throw up as soon as I taste it. It\'s just... <i>ugh!</i>"');
    scene.text('The two of you share an involuntary shudder. Seems you\'re in agreement.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Don\'t mind it', handler: (st: GameState) => {
    scene.text('"I don\'t really mind it," you shrug. "It\'s a little bitter, not my favourite flavour in the world, but not really a dealbreaker for me either."');
    scene.text('She shakes her head. "I don\'t know how you can stand it. I\'ve tasted dozens of different guy\'s cum and they\'re <i>all</i> awful. One of them claimed he ate pineapple just for me, but either he was lying or that stuff about making it taste sweeter is bullshit!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I like it', handler: (st: GameState) => {
    scene.text('"I like it actually," you say. "It\'s a little salty, but not offensively so. Like the white part of a fried egg. Similar texture too. I can swallow it no problem."');
    scene.text('She shakes her head. "I don\'t know how you can stand it. I\'ve tasted dozens of different guy\'s cum and they\'re <i>all</i> awful. One of them claimed he ate pineapple just for me, but either he was lying or that stuff about making it taste sweeter is bullshit!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I love it', handler: (st: GameState) => {
    scene.text('"I <i>love</i> the taste of cum," you gush. "I love it when guys cum in my mouth and I love swallowing. I don\'t know what it is about it, but I could drink cum by the bucket."');
    scene.text('"I don\'t know how you can stand it," she replies as she shakes her head. "I\'ve tasted dozens of different guy\'s cum and they\'re <i>all</i> awful. One of them claimed he ate pineapple just for me, but either he was lying or that stuff about making it taste sweeter is bullshit!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFacialTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like it when guys cum on your face?" you ask.');
  scene.text('"Sometimes," she shrugs. "When a guy cums on my face, I feel <i>dirty</i>. Like a used cum rag. Which... I don\'t mind if I\'m in the mood for that kind of thing. Like when Lazar fucks me so hard that my makeup is fucked and my hair is frizzy and I\'m practically about to pass out. That\'s the perfect time for him to cum on my face. But that\'s situational. I\'d much rather he just blow his load in my ass. I\'m <i>always</i> in the mood for that..." she grins.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCockTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you like a guy with a big cock?" you ask.');
  scene.text('She can\'t hold back a toothy grin. "I fucking <i>love</i> a big cock! The way they fill me up and stretch my holes... Fuck, I could cum just thinking about it..."');
  scene.text('"I\'ll take that as a yes then," you reply, causing you both to laugh.');
  scene.text('"What about you, slut?" she grins. "Do you like them hung like a horse?"');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCockTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCockTalk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I love them too', handler: (st: GameState) => {
    scene.text('You grin back. "I love them too..."');
    scene.text('"Especially when they\'re using them in the <i>other</i> hole?" she asks with a smile.');
    scene.text('You giggle. "You really can\'t help yourself, can you?"');
    scene.text('"What? The <i>best</i> part about a big cock is when it goes up your ass!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'They\'re okay', handler: (st: GameState) => {
    scene.text('"They\'re okay, I guess..." you reply. "I don\'t dislike them, but... It\'s just a dick? I don\'t get why being bigger is such a big deal."');
    scene.text('Her jaw drops. "You don\'t <i>get it</i>? The bigger a guy\'s cock, the better it feels inside you. You just need to get fucked properly, then you\'ll understand."');
    scene.text('You shrug. "If you say so. I don\'t think I\'ll ever understand why other girls find them so fascinating."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I don\'t like them', handler: (st: GameState) => {
    scene.text('You shake your head. "I don\'t like them."');
    scene.text('Her jaw drops. "<i>What</i>?! How can you <i>not</i> like having a big fat cock stretching your pussy?!"');
    scene.text('"Because it <i>hurts</i>?" you frown. "I don\'t get how other girls find them sexy or pleasurable. I\'m perfectly happy with an average sized guy."');
    scene.text('"You just need practice," she replies. "Buy a nice big dildo and train your pussy until it doesn\'t hurt anymore. You\'ll thank me later on when a guy fucking you with his big cock gives you the best orgasm you\'ll ever have."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Quite the fantasy', handler: (st: GameState) => {
    scene.text('"That\'s... That\'s quite some fantasy, Albina..." you reply, as equally aroused as you are shocked.');
    scene.text('"I blame my daddy issues," she shrugs.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.text('You chat for a few more minutes about the differences between sucking dick and eating pussy.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.text('You chat for a few more minutes about the differences between sucking dick and eating pussy.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'I don\'t like it', handler: (st: GameState) => {
    scene.text('You shake your head. "No, it\'s not really my thing."');
    scene.text('"Then why did you ask?" she asks with a curious gaze.');
    scene.text('"I was just curious," you shrug.');
    // TODO-QSP: dynamic text: "That's called being in the closet, <<$pcs_nickname>>," she replies before chang...
    scene.text(`"That's called being in the closet, ${((s as any).pcs_nickname || '')}," she replies before changing the subject.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexTalkAlbinaLead(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['chat_rand'] = Math.floor(Math.random() * 11) + 1;
  if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 1  &&  ((s as any).AlbinaQW ?? 0)?.['porno'] === 0  &&  ((s as any).region ?? 0) === 'city'  &&  (((s as any).month ?? 0) > 10  ||  ((s as any).year ?? 0) >= 2018)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAdmitPorno(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFavPosChat(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 3) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 4) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexToys(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 5) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPenetrationCum1(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 6) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRoughLove(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 7) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAssToPussy(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 8) {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCount1(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 9) {
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBiggestDickTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                  } else {
                    if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 10) {
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLesbianTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                    } else {
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexualFantasies1(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  // TODO-QSP: end
  scene.build();
}

function enterAdmitPorno(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['porno'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('She blushes heavily while seemingly struggling to form a sentence.');
  // TODO-QSP: dynamic text: "Since we're talking about sex and all, I, uhhh... I have something I need to ad...
  scene.text(`"Since we're talking about sex and all, I, uhhh... I have something I need to admit, ${((s as any).pcs_nickname || '')}..."`);
  scene.text('"It must be important if you\'re this uneasy about something to do with sex of all things," you reply.');
  scene.text('She avoids eye contact with you as she takes a deep breath. "Okay, here goes. I was paid to do porn..."');
  if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] !== '') {
    scene.text('And before you say anything, yes I know I gave you shit for doing it, which just makes it worse!"');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Question her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] !== '') {
      scene.text('"You were pretty vocal in your... <i>issues</i> with me doing porn. How did you end up getting into it?"');
    } else {
      scene.text('"You did porn?!" you exclaim. "How did that end up happening?"');
    }
    if (((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
      scene.text('"I had a bit of a slow night at the club and wasn\'t making much in tips. This guy I gave a lap dance to said he was a talent scout for some porn company and that he wanted to do a \'casting\' video of me."');
      scene.text('"And you agreed?" you ask.');
      scene.text('She sighs. "Like I said, I wasn\'t making much money that night and was pretty desperate, so I agreed without thinking. It didn\'t help that I was super horny as well and took the chance to get laid."');
      if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] > 1) {
        scene.text('You sigh in return. "I know who you\'re talking about... because I\'ve done the same thing..."');
        scene.text('"Oh?" she asks in surprise. "I wonder how many of the other girls at the club he\'s tried this with, and how many agreed..."');
        scene.text('"It sounds like you regret doing it?" you ask.');
        scene.text('She sighs. "Showing myself off was fun at the time, especially once I got used to the camera, but the shame I felt afterwards just made the feeling that I had betrayed myself even worse."');
      } else {
        if (((s as any).strip_club ?? 0)?.['porn_scout'] === 1) {
          scene.text('"I\'ve danced for him too. He tips well, but I\'ve never done porn with him," you reply.');
          scene.text('"Then you shouldn\'t," she says. "Showing myself off was fun at the time, especially once I got used to the camera, but the shame and regret I felt afterwards just made the feeling that I had betrayed myself even worse. The way I acted like a slutty fucking whore on camera... It made me sick.""');
        } else {
          scene.text('"I can\'t say I\'ve ever met him myself, but it sounds like you regret doing this?" you reply.');
          scene.text('She sighs. "Showing myself off was fun at the time, especially once I got used to the camera, but the shame I felt afterwards just made the feeling that I had betrayed myself even worse. The way I acted like a slutty fucking whore on camera... It made me sick."');
        }
      }
    } else {
      scene.text('"I don\'t want to get into the full details, but I met this guy who offered me quite a lot of money to do it," she states.');
      scene.text('"And you agreed?" you ask.');
      scene.text('She sighs. "I needed the money, so I agreed without thinking. It didn\'t help that I was pretty horny as well and took the chance to get laid."');
      scene.text('"It sounds like you regret doing it?" you ask.');
      scene.text('She sighs again. ""Showing myself off was fun at the time, especially once I got used to the camera, but the shame I felt afterwards just made the feeling that I had betrayed myself even worse. The way I acted like a slutty fucking whore on camera... It made me sick.""');
    }
    scene.actions([
      { label: 'Question her further', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You felt like you had betrayed yourself?" you ask.');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === 1) {
      scene.text('"You know exactly what I mean," she bluntly replies. "All that shit we went through together back in Pavlovsk... Selling my body for money is something I promised I would never do again, yet here I am being paid to slut it up on camera for creeps on the internet!"');
      scene.text('A tinge of guilt runs through you. "Albina... I never meant to-"');
      scene.text('She scoffs. "He even sent me a fucking link giving me \'free access\' to the video a few days later. He was charging a premium for creeps to watch me! \'Casting Corner\' or something he called it. Just the pictures of me smiling while slutting it up had me feeling ashamed, so I never watched the video. I deleted the link straight away and cried."');
    } else {
      scene.text('"Yeah," she replies. "I made a promise to myself when I started university to never allow myself to be exploited, especially for money. Doing porn, even just a stupid little video like that, is a betrayal of that principle."');
      scene.text('She scoffs. "He even sent me a fucking link giving me \'free access\' to the video a few days later. He was charging a premium for creeps to watch me! \'Casting Corner\' or something he called it. Just the pictures of me smiling while slutting it up had me feeling ashamed, so I never watched the video. I deleted the link straight away and cried."');
    }
    scene.text('Tears well up in her eyes and you can see the regret eating away at her, the distraught look on her face a sign that she\'s wondering what you must think of her right now.');
    if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] > 1) {
      scene.text('"I\'m guilty of doing the same thing, so I\'m in no position to judge you," you tell her with a smile. "But this will be our little secret. If anybody dares mention it, then I\'ll kick their ass for you."');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] !== '') {
        scene.text('"I\'m a full blown porn actress, so it\'s not like I\'m going to judge you for it," you tell her with a smile. "I can confidently tell you that nobody who matters will ever see that video. You\'re an amateur in a sea of girls who are way more famous. You\'ll be a novelty at best that will wear off when the next casting video pops up."');
      } else {
        scene.text('"You\'re my friend, so I\'m not going to judge you for it, especially if you think it was a mistake," you smile. "Don\'t let it ruin what you\'re trying to acheive with your life here, though. You\'re better than that. I know you are."');
      }
    }
    // TODO-QSP: dynamic text: A small smile appears on her lips as she wipes her eyes. "Thanks <<$pcs_nickname...
    scene.text(`A small smile appears on her lips as she wipes her eyes. "Thanks ${((s as any).pcs_nickname || '')}. That... Actually makes me feel a lot better."`);
    scene.text('She then suddenly springs forwards to give you a hug. "This was eating me up and I really needed to get it off my chest. Thanks for listening and... not judging me about it."');
    scene.text('"I\'m your friend, Albina," you reply as you return the hug. "You know you can talk to me about anything and I\'ll never judge you for it."');
    scene.text('"I know," she says as she pulls away from you. "This is one thing I <i>never</i> want to talk about again, though."');
    scene.text('You just nod, and with the conversation over, you move on to talk about other things.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFavPosChat(s: GameState, scene: SceneBuilder): void {
  scene.text('"So what\'s your favourite position?" she asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Missionary', goto: ['albina_sex_chat', 'missionary'] },
    { label: 'Doggystyle', goto: ['albina_sex_chat', 'doggystyle'] },
    { label: 'Cowgirl', goto: ['albina_sex_chat', 'cowgirl'] },
    { label: 'Blowjobs', goto: ['albina_sex_chat', 'bj_fav'] },
  ]);
  scene.build();
}

function enterMissionary(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('Missionary," you admit.');
  scene.text('"BO-RING!" she shouts.');
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s nice!', handler: (st: GameState) => {
    scene.text('"What\'s wrong with missionary?" you protest. "I think it\'s nice."');
    scene.text('"You\'re trying to tell me that lying on your back doing nothing is \'nice\'?" She rolls her eyes. "Nuh uh. Bend me over and spank me! Grab me by the hair and pound my ass! Doggystyle is the way to go!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissionary2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'It\'s romantic', handler: (st: GameState) => {
    scene.text('"It\'s romantic!" you protest. "You can look up into his eyes when you cum. Or kiss while he fucks you. It makes it so much better."');
    scene.text('"Romance is for decrepit old fucks," she says and rolls her eyes. "Nuh uh. Give it to me <i>dirty</i>. Bend me over and spank me! Grab me by the hair and pound my ass! Doggystyle is the way to go!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissionary2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'It\'s easy', handler: (st: GameState) => {
    scene.text('"It\'s easy," you shrug. "I don\'t have to do any work. Just lay there and get dicked."');
    scene.text('"Holy <i>fuck</i>! You sound like a dull lay," she says and rolls her eyes. "I can\'t believe you\'re the kind of girl who starfishes. Not only that, but you actually <i>like</i> it! Nuh uh. Not me. Give it to me <i>dirty</i>. Bend me over and spank me! Grab me by the hair and pound my ass! Doggystyle is the way to go!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissionary2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I like feeling his weight', handler: (st: GameState) => {
    scene.text('"I love the feeling of a guy\'s weight on top of me," you gush. "His entire body, pressing down through his cock and into my pussy. You can\'t get that kind of intensity in any other position."');
    scene.text('"Sure you can. All you have to do is get him to ram it into you from behind so hard your knees buckle and let him prone-bone the shit out of you," she snickers.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissionary2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMissionary2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'verbal_erotica', (-10));
  qspCall(s, 'stat', '');
  scene.text('You both agree to disagree, but find yourself a little turned on by her response. Judging by the way she\'s rubbing her thighs together, you think she is too.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her about her anal fetish', goto: ['albina_sex_chat', 'anal'] },
  ]);
  scene.build();
}

function enterDoggystyle(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"I like doggystyle."');
  scene.text('"That\'s my girl!" she cheers excitedly. "What\'s your favorite thing about it?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s more intense', handler: (st: GameState) => {
    scene.text('"There\'s something <i>intense</i> about it," you say. "Something primal. I can\'t explain it, but when I get fucked from behind, it drives me wild."');
    scene.text('"I definitely get that," she says. "I love that about it too. All I want from a guy is for him to grab me by the hair, shove his cock up my ass, and spank me until I cum. Best night ever."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggystyle2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'It goes deeper', handler: (st: GameState) => {
    scene.text('"It goes deeper in doggy," you explain. "I feel like it <i>fills</i> me, hitting every part of my insides. It just feels the best in that position."');
    scene.text('"Fuck yeah," she says. "Doggy is the only way to <i>really</i> get balls deep inside a girl. And then when you get grabbed by the hair and pulled back even harder? And when he shoves it up your ass and spanks you? Fuck me, I could cum just thinking about it."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggystyle2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Easy spankings', handler: (st: GameState) => {
    scene.text('"I love getting spanked," you grin.');
    scene.text('"Fuck yeah!" she shouts, high fiving you so hard it hurts. "There\'s nothing I love more than a cock balls deep up my ass and being spanked until it\'s red and tender. If I can still sit down without wincing after, then you didn\'t really fuck me."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDoggystyle2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDoggystyle2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'verbal_erotica', (-10));
  qspCall(s, 'stat', '');
  scene.text('You giggle at her answer, feeling warmth blossoming between your hips and wetness seeping from your pussy. With the "fuck me eyes" she\'s giving you, you think Albina\'s probably feeling something similar.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her about her anal fetish', goto: ['albina_sex_chat', 'anal'] },
  ]);
  scene.build();
}

function enterCowgirl(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"I like cowgirl," you admit.');
  scene.text('She raises an eyebrow. "Oh? That\'s what you\'re into?"');
  if (((s as any).grupTipe ?? 0) === 2) {
    scene.actions([
      { label: 'I like the workout', handler: (st: GameState) => {
    scene.text('"I like the workout it gives me," you grin. "If I position myself properly, I can do squats <i>and</i> get dicked at the same time. Squats are a lot more fun when you get to cum when doing them."');
    scene.text('She grins at you. "I didn\'t think of it that way, but riding dick is a close second for me. If I\'m gonna get fucked, I want to <i>feel</i> it, and I\'m only going to get that when I\'m bent over being spanked and pounded in doggy."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It feels better', handler: (st: GameState) => {
    scene.text('"It just feels better," you shrug. "I don\'t know how to explain it. The angle? Just the way it fits inside when I\'m on top? It feels good. What can I say?"');
    scene.text('"I think it feels best in doggy," she says. "It goes way deeper and you can get surprise anal in that position, which is the <i>best</i> kind of anal. Plus spankings. If I can\'t sit down after a fuck, it was a <i>gooood</i> fuck."');
    scene.text('She then gives you a sly grin. "But riding dick is a close second for me."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I like being in control', handler: (st: GameState) => {
    scene.text('"I like being in control," you explain. "If I want to go slow, I can go slow. If I want to go fast, I can ride him as hard as I like. It makes me feel... powerful? Just knowing that I\'m the one in charge is such a turn on for me."');
    scene.text('"That kind of stuff doesn\'t matter to me," she shrugs back. "I like it hard and rough every time. Don\'t get all slow and gentle with me. If I\'m gonna get fucked, I want to <i>feel</i> it. If I want my face forced into the sheets with a cock balls deep up my ass being spanked until my eyes water, I\'m only going to get that in doggy."');
    scene.text('She grins at you, clearly imagining a cock stuffed up her ass right now, but a few seconds later, it melts into a concessionary smile. "I\'ll admit though, a hard ride is pretty good too."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I like it when he grabs my breasts', handler: (st: GameState) => {
    scene.text('"I like having my boobs grabbed," you grin. "If I\'m on top, then his hands are free to grope me."');
    scene.text('"But he can still grab your tits from behind," she argues. "Plus, he can spank you until you\'re red and wriggling too. Why choose when you can have both?"');
    scene.text('She then gives you a sly grin. "Though I\'ll admit, riding dick is a close second for me."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCowgirl2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCowgirl2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'verbal_erotica', (-10));
  qspCall(s, 'stat', '');
  scene.text('You both agree to disagree, but find yourself a little turned on by her response. Judging by the way she\'s rubbing her thighs together, you think she is too.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her about her anal fetish', goto: ['albina_sex_chat', 'anal'] },
  ]);
  scene.build();
}

function enterBjFav(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"I really like giving head," you admit.');
  scene.text('"Ugh, <i>yes!</i>" she says while giving you a lustful look. "I love it when guys grab me by the hair and skullfuck me. What do you like about it?"');
  if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
    scene.actions([
      { label: 'I do it for my boyfriend', handler: (st: GameState) => {
    scene.text('"I like making my boyfriend feel good," you smile. "He likes it, so I like it."');
    scene.text('She rolls her eyes. "Oh puh-leez! If I knew you were going to talk about romantic bullshit like that, I wouldn\'t have asked. Romance is for decrepit old fucks."');
    scene.text('Her words come across sharp, but you can see the twinkle in her eye that lets you know she\'s just kidding.');
    scene.text('"But seriously. Don\'t you ever get tired of swallowing?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitOrSwallow(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I love my boyfriend', handler: (st: GameState) => {
    scene.text('"Because of my boyfriend," you say, involuntarily smiling as your thoughts drift towards him. "I love him so much and I love seeing the pleasure on his face when his cock is in my mouth. I want to spoil him, so I love giving him head."');
    scene.text('She rolls her eyes. "Oh puh-leez! If I knew you were going to talk about romantic bullshit like that, I wouldn\'t have asked. Romance is for old decrepit fucks."');
    scene.text('Her words come across sharp, but you can see the twinkle in her eye that lets you know she\'s just kidding.');
    scene.text('"But seriously. Don\'t you ever get tired of swallowing?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitOrSwallow(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I like being in control', handler: (st: GameState) => {
    scene.text('"It makes me feel like I\'m in charge," you grin, though Albina looks back at you confused.');
    scene.text('"In charge?" she asks. "You\'re on your knees serving someone else\'s needs. What about it makes you feel like you\'re in charge?"');
    scene.text('"When a dick is in my mouth, it means I\'m in control of all the pleasure," you say. "I can tease him, I can edge him, I can suck him dry, I can make him beg, I choose when to make him cum. Plus, I\'ve got teeth."');
    scene.text('You flash Albina a wicked grin. "When your cock is surrounded by my teeth, <i>I\'m</i> the one in charge."');
    scene.text('"Huh. Never thought of it like that..." she smirks back. "Still, can\'t do anything about it when they cum in your mouth. I\'d rather they just bend me over and blast my ass."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitOrSwallow(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I like being subservient', handler: (st: GameState) => {
    scene.text('"I think I\'m just a bit of a sub," you shrug. "I like being on my knees, with his hand on my head, moving me up and down his cock."');
    scene.text('"You\'re <i>such</i> a goodie two shoes," she teases.');
    scene.text('"... I like it when he calls me a good girl too," you admit and she gives a sharp bark of laughter.');
    scene.text('"I bet. But don\'t you ever get tired of swallowing?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitOrSwallow(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Good girls swallow', handler: (st: GameState) => {
    scene.text('"No," you reply without hesitation. "I\'m a good girl. And good girls always swallow."');
    scene.text('"Doesn\'t mean you always like it," she says, twisting her mouth wistfully.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'I like pleasing people', handler: (st: GameState) => {
    scene.text('"I like pleasing people," you shrug. "I love hearing a guy moan while I\'m blowing him. It makes me feel so hot and sexy. And when he throbs in my mouth-" You stop, shivering at the thought and grin at Albina. "I could cum just thinking about it."');
    scene.text('She smirks back at you. "I bet. But don\'t you ever get tired of swallowing?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitOrSwallow(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Oral fixation', handler: (st: GameState) => {
    scene.text('"I think I have some kind of oral fixation," you say. "The feeling of a cock in my mouth just turns me on. I can\'t explain it. I like feeling it on my tongue, the taste, I think I even kind of like the way it makes my jaw ache after I\'ve been blowing a guy for a long time."');
    scene.text('"I like the ache too," she says. "Especially if it\'s right after a rough fucking. I like feeling like a used dish rag at the end of a good fuck, but I\'d still rather they just blow their load in my ass instead of in my mouth. It gets boring swallowing."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitOrSwallow(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you nod. "There\'s something about hot cum shooting up your ass that just..."');
    scene.text('"Exactly," she grins.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I prefer creampies', handler: (st: GameState) => {
    scene.text('"I prefer creampies myself," you smirk. You\'re about to continue when you notice the color drain from Albina\'s face. "What?"');
    scene.text('"Nothing," she says, shrugging like she didn\'t just give you a look like she\'d seen a ghost. "I was just surprised was all."');
    scene.actions([
      { label: 'Let it go', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('She seems spooked for some reason, but you don\'t want to make her uncomfortable and decide to let it go.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Pursue it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('Something\'s off. Albina is so open about her sex life, so it feels strange that she\'d be surprised about anything sex related.');
    scene.text('"No, really," you insist, pressing on. "What\'s so weird about liking creampies?"');
    scene.text('"Nothing!" she snaps. "I said I was just surprised! Why can\'t you just accept what I told you, you dumb bitch?!"');
    scene.text('Your eyes go wide in shock at her sudden flash of anger. Worried she might slap you if you say anything else, you stay silent until she starts talking to you again like nothing happened.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Everything!', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.text('"Everything!" you grin. "I love pleasing a man. I love hearing him moan. I love being in control of his pleasure. I love the taste of cock. I love insisting that he relax and let me take care of it. I love feeling him get harder in my mouth. I love the intimate connection that we form. And..."');
      scene.text('You trail off, meeting Albina\'s eyes.');
      scene.text('"I <i>love</i> the taste of cum."');
      scene.text('"Slut," she smirks.');
      scene.text('"Cumslut," you correct and she gives a sharp bark of laughter.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"Everything!" you grin. "I love pleasing a man. I love hearing him moan. I love being in control of his pleasure. I love the taste of cock. I love insisting that he relax and let me take care of it. I love feeling him get harder in my mouth. I love the intimate connection that we form. What\'s <i>not</i> to love about sucking cock?"');
      scene.text('"Slut," she snickers back. "But don\'t you ever get tired of swallowing?"');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpitOrSwallow(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterSpitOrSwallow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I spit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"What do you mean?" you ask with a puzzled look. "I don\'t swallow. I just spit?"');
    scene.text('"What do <i>you</i> mean?" she asks in return, giving you a bemused look right back.');
    scene.actions([
      { label: 'It tastes funny', handler: (st: GameState) => {
    scene.text('"It tastes funny," you say matter of factly. "So I just spit it out."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSwallowWhy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'It tastes gross', handler: (st: GameState) => {
    scene.text('"Ugh, no!" you grimace in disgust. "It tastes gross! I could never swallow it, so I just spit."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSwallowWhy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'It feels weird', handler: (st: GameState) => {
    scene.text('"It feels weird," you shrug. "The flavor is whatever, but I can\'t get over the texture. It\'s like swallowing a load of snot, so I just spit."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSwallowWhy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Swallowing isn\'t my thing', handler: (st: GameState) => {
    scene.text('"Eh, swallowing just isn\'t really my thing," you shrug. "Never been into it. I avoid it when I can."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSwallowWhy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Not really', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Not really," you shrug. "It\'s just part of sex. I don\'t really care one way or the other as long as it makes him happy."');
    scene.text('"I guess," she sighs. "Well <i>I</i> get tired of it."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I got used to the taste', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I got used to the taste after a while," you shrug. "It\'s not my favorite thing in the world, but I\'m used to it."');
    scene.text('"I guess I\'m like that too," she sighs. "Still. Gets tiring if it\'s all a guy wants to do, though."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Spitters are quitters', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Spitters are quitters," you smirk.');
    scene.text('"Well you\'ve got that much right," she laughs back.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I like the taste', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I like the taste," you smile. "There\'s something satisfying about the thick salty flavor of it."');
    scene.text('She wrinkles her nose in disgust. "Ew! You <i>like</i> it?"');
    scene.text('"Yeah. You don\'t?"');
    scene.text('"No! It tastes like shit!" she replies and fake gags.');
    scene.text('"Then why swallow?"');
    scene.text('"Cause you\'re <i>supposed</i> to? Duh!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'It makes me feel sexy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I love swallowing," you grin. "It makes me feel sexy. Just the look on a guy\'s face when you gulp down his load, nngh~! That alone is worth it."');
    scene.text('"Different strokes I guess," she says wryly. "Well <i>I</i> get tired of it."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSwallowWhy(s: GameState, scene: SceneBuilder): void {
  scene.text('"What the fuck?" Albina stares at you like you just said you have a meter long cock. "You <i>never</i> spit! You <i>always</i> swallow!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Why would I do that?', handler: (st: GameState) => {
    scene.text('"Why would I do that?" you ask. "Why would I swallow if I don\'t want to?"');
    scene.text('"Because you\'re <i>supposed</i> to," she insists. "You know what? Let\'s just drop it. You\'re weird."');
    scene.text('<i>I\'m the weird one here?</i> you think to yourself.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Do you like the taste?', handler: (st: GameState) => {
    scene.text('"Why?" you ask. "Do <i>you</i> like the taste?"');
    scene.text('"No, of course I don\'t like the taste!" she replies while wrinkling her nose. "It\'s awful!"');
    scene.text('"Then why swallow?"');
    scene.text('"Cause you\'re supposed to? <i>Duh</i>!" She gives you another odd look. "You know what? Let\'s just drop it. You\'re weird."');
    scene.text('<i>I\'m the weird one here?</i> you think to yourself.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBirthControlTalk(s: GameState, scene: SceneBuilder): void {
  scene.text('"Do you use birth control?" she asks.');
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    if (((s as any).pillcon2 ?? 0) > 0  &&  ((s as any).pillcon2 ?? 0) < 36000) {
      scene.text('"I just started the pill," you tell her. "But it\'s too soon for it to start being effective yet."');
      scene.text('"I\'m on the pill too," she nods. "I hate condoms, but I\'m terrified of getting knocked up so I take them <i>religiously</i>."');
      scene.actions([
        { label: 'I want to be extra safe', handler: (st: GameState) => {
    scene.text('"Me too," you say. "Not the condom part, but the pregnant part. I insist every guy uses a condom, but I\'m so scared it\'s going to break that I\'m taking the pill just to be extra safe."');
    scene.text('"I get that," she replies, staring off into the corner for a few seconds before glancing back at you again.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I hate condoms too', handler: (st: GameState) => {
    scene.text('"Me too," you say. "I can\'t <i>feel</i> anything when the guy\'s wearing a condom. I want skin on skin contact. I can\'t wait till I can start going bareback."');
    scene.text('"It\'s way better," she grins. "You\'re gonna love it."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I don\'t want to worry', handler: (st: GameState) => {
    scene.text('"I just don\'t want to worry about it," you sigh. "What if the guy doesn\'t have one? What if I don\'t have one? What if the condom breaks? He said he\'s going to pull out, but what if he doesn\'t? It\'s too much stress. Easier to just take a pill every day."');
    scene.text('"I would <i>never</i> let a guy to go bareback on me if I wasn\'t on the pill," she says, looking horrified at you. "You can\'t trust them with that shit. For fuck\'s sake, I take it up the ass most of the time and I <i>still</i> don\'t trust them not to cum in my pussy. You know what I mean?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I love creampies', handler: (st: GameState) => {
    scene.text('"I <i>love</i> creampies," you gush. "Once the pill starts kicking in, I\'ll be able to get all the creampies I want."');
    scene.text('"Oh..." she gulps before looking away.');
    scene.text('"What\'s with that reaction? Feeling turned on? You don\'t have a creampie fetish, do you?" you snicker teasingly.');
    scene.text('<b>"Fuck off!"</b> she shouts, whirling on you with fury in her eyes. "I don\'t have a fetish for that shit so <b>shut the fuck up</b> and keep it that way!"');
    scene.text('You back off, stunned by her sudden explosion. What the hell was that about?');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'None', handler: (st: GameState) => {
    scene.text('"No, I don\'t use any kind of birth control," you shake your head and Albina goes visibly pale.');
    scene.text('"What the fuck?! Why not?! Aren\'t you afraid of getting pregnant?!"');
    scene.actions([
      { label: 'Don\'t see the point', handler: (st: GameState) => {
    scene.text('"Just don\'t see the point," you shrug, revealing how irresponsible your behavior is. "Taking pills is such a chore and condoms suck. Unprotected sex is more fun."');
    scene.text('"Don\'t see the point?!" she sputters before sighing and shaking her head. "I don\'t understand you at all."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I want to have a baby', handler: (st: GameState) => {
    if (((s as any).npc_pregtalk ?? 0)?.['A23'] === 0) {
      scene.text('"What if that\'s <i>why</i> I don\'t use any?" you smile and Albina\'s jaw drops. "I kind of <i>want</i> to have a baby."');
      if (((s as any).age ?? 0) < 18) {
        scene.text('"At our age? Seriously? You\'re not even 18! You want to be a teen mom and fuck up your life?"');
      } else {
        scene.text('"At our age? Seriously? You want to be a teen mom and fuck up your life?"');
      }
      if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
        scene.actions([
          { label: 'I love my boyfriend', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"But I love my boyfriend so much!" you say. "He\'ll be a great dad, I know it!"');
    scene.text('"That\'s what Mama thought," she says with a disapproving look. "Just because a guy seems nice now doesn\'t mean he won\'t turn into a total fuckbag the moment you\'re knocked up. Try to remember that before you get pregnant."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'I\'ll be a great mom', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You think I wouldn\'t be a great mom?" you ask dejectedly. "I do..."');
    scene.text('"That\'s not the point," she replies while shaking her head. "A kid is a lot of responsibility. They become the priority in your life. They can get in the way of dreams and other things you want to do..."');
    scene.text('She trails off, looking away.');
    scene.text('"Mama had to put a lot of dreams on hold because she got pregnant with me. Because of my shitbag dad, but because of me too. I love Mama, but it wasn\'t until she didn\'t have to take care of me anymore that she got to actually live her life. Try to remember that before you get pregnant."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.text('"What if that\'s <i>why</i> I don\'t use any?" you reply and Albina\'s jaw drops. "I want another baby," you say with a bashful smile.');
      scene.text('"You\'re crazy!" she says while shaking her head. "I can\'t believe you want to push another one of those things out of your pussy. Didn\'t it hurt enough the first time?"');
      scene.text('"You\'ll understand when you\'re a mother," you reply haughtily and Albina gulps and looks away.');
      scene.text('"I haven\'t decided if I want kids..." she says, a slight shake in her voice.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
        { label: 'Condoms', handler: (st: GameState) => {
    scene.text('"Just condoms," you shrug. "No medication though."');
    scene.text('"Ugh, I <i>hate</i> condoms," she moans. "That\'s why I\'m on the pill. Why don\'t you switch?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillHassleCondomVer(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlHormones(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'More reliable', handler: (st: GameState) => {
    scene.text('"Condoms are more reliable," you say. "I can\'t forget to use a condom like I can forget to take a pill."');
    scene.text('"But condoms can still break," she argues.');
    scene.text('"And I can get too tired and fall asleep before remembering to take my pill," you point out. "In the grand scheme of things, condoms are just safer."');
    scene.text('"I prefer bareback," she says before taking a deep breath and sighing. "But I also take my pill religiously. I guess it\'s better to use condoms if you don\'t trust yourself to take the pill... Wait, why not get the shot instead?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        { label: 'The pullout method', handler: (st: GameState) => {
    scene.text('"Does the pullout method count?" you grin and Albina looks at you like you just said you want to fuck a fire truck.');
    scene.text('"Seriously?! You would trust a guy with that shit? I mostly take it up the ass and I <i>still</i> take the pill because I don\'t trust a guy not to blow his load in my pussy."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillHassleNoCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlHormones(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Condoms suck', handler: (st: GameState) => {
    scene.text('"But condoms are the <i>worst!</i>" you moan. "I can\'t <i>feel</i> anything when the guy\'s wearing one. I want skin on skin contact. It\'s bareback or nothing."');
    scene.text('"I hate condoms too, but that doesn\'t explain why you won\'t just get on the pill?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillHassleNoCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlHormones(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        { label: 'The calendar method and condoms', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I use the calendar method," you tell her.');
    scene.text('"The <i>what?</i>" She stares at you with a confused expression.');
    scene.text('"The calendar method," you begin explaining. "You start by tracking your period and use that to figure out when your cycles are. From there, you can figure out when you\'re ovulating and likely to get pregnant and when it\'s safe. I go bareback on safe days and use condoms on danger days."');
    scene.text('"Oh <i>god</i>, it\'s the worst of both," she says while grimacing at you. "Condoms <i>and</i> still in danger of being knocked up!"');
    scene.text('"It\'s not dangerous!" you protest. "Once you have your cycle down, it\'s just a matter of keeping track."');
    scene.text('"And if you\'re too horny to remember what day it is?" she asks while giving you a dead stare.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillProblem(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalendarMethodWorking(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Uhh...', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Uhh..." you say dumbly as Albina continues to stare at you.');
    scene.text('"Yeah, that\'s what I thought. Why not just start the pill?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillHassleCondomVer(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlHormones(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillProblem(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        { label: 'The calendar method (no condoms)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I use the calendar method," you tell her.');
    scene.text('"The <i>what?</i>" She stares at you with a confused expression.');
    scene.text('"The calendar method," you begin explaining. "You start by tracking your period and use that to figure out when your cycles are. From there, you can figure out when you\'re ovulating and likely to get pregnant and when it\'s safe. Guys can cum inside me on safe days and I make sure to warn them if it\'s a danger day so they can pull out."');
    scene.text('"Seriously?! You would trust a guy with that shit?" She looks at you in bewilderment. "I mostly take it up the ass and I <i>still</i> take the pill because I don\'t trust a guy not to blow his load in my pussy."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillHassleNoCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalendarMethodWorking(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Condoms suck', handler: (st: GameState) => {
    scene.text('"But condoms are the <i>worst!</i>" you moan. "I can\'t <i>feel</i> anything when the guy\'s wearing a condom. I want skin on skin contact. It\'s bareback or nothing."');
    scene.text('"I hate condoms too, but that doesn\'t explain why you won\'t just get on the pill?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillHassleNoCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlHormones(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    }
  } else {
    scene.text('"I\'m on the pill," you tell her.');
    scene.text('"I\'m on the pill too," she nods. "I hate condoms, but I\'m terrified of getting knocked up so I take them <i>religiously</i>."');
    scene.actions([
      { label: 'I want to be extra safe', handler: (st: GameState) => {
    scene.text('"Me too," you say. "Not the condom part, but the pregnant part. I insist every guy uses a condom, but I\'m so scared it\'s going to break that I take the pill just to be extra safe."');
    scene.text('"I get that," she replies, staring off into the corner for a few seconds before glancing back at you again.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I hate condoms too', handler: (st: GameState) => {
    scene.text('"Me too," you say. "I can\'t <i>feel</i> anything when the guy\'s wearing a condom. I want skin on skin contact. It\'s so much better bareback."');
    scene.text('"Damn straight," she grins while high-fiving you. "Condoms are fucking dumb."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I don\'t want to worry', handler: (st: GameState) => {
    scene.text('"I just don\'t want to worry about it," you sigh. "What if the guy doesn\'t have one? What if I don\'t have one? What if the condom breaks? He said he\'s going to pull out, but what if he doesn\'t? It\'s too much stress. Easier to just take a pill every day."');
    scene.text('"I would <i>never</i> let a guy to go bareback on me if I wasn\'t on the pill," she says, looking horrified at you. "You can\'t trust them with that shit. For fuck\'s sake, I mostly take it up the ass and I <i>still</i> don\'t trust them not to cum in my pussy. You know what I mean?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I love creampies', handler: (st: GameState) => {
    scene.text('"I <i>love</i> creampies," you gush. "When a guy comes inside me, it\'s the best feeling in the world. I can feel his cum fill me up inside. Can\'t get that with a condom."');
    scene.text('"Oh..." she gulps before looking away.');
    scene.text('"What\'s with that reaction? Feeling turned on? You don\'t have a creampie fetish, do you?" you snicker teasingly.');
    scene.text('<b>"Fuck off!"</b> she shouts, whirling on you with fury in her eyes. "I don\'t have a fetish for that shit, so <b>shut the fuck up</b> and keep it that way!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthControlPillHassleCondomVer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Too much hassle', handler: (st: GameState) => {
    scene.text('"Too much hassle," you sigh. "I don\'t want to remember to take a pill every day. It\'s just easier to put a condom on the guy\'s cock before he fucks me. If the condom breaks, I can just get a morning after pill."');
    scene.text('"I guess that\'s fair," she concedes. "Just takes one missed day to get knocked up, though. That\'s why I take mine religiously. I set alarms and everything to remind me. You don\'t know what you\'re missing out on. Bareback is the best."');
    scene.text('She grins a slutty grin at you.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBirthControlPillHassleNoCondoms(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Too much hassle', handler: (st: GameState) => {
    scene.text('"Too much hassle," you sigh. "I don\'t want to remember to take a pill every day. It\'s just one more annoying thing to do. I just want to have sex and enjoy it. Besides, I can always get a morning after pill."');
    scene.text('"You\'re crazy!" she says while shaking her head. "Condom or bareback, I wouldn\'t fuck guys <i>at all</i> if I wasn\'t on birth control... but that\'s why I need to be on birth control."');
    scene.text('You both erupt into laughter.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBirthControlHormones(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No hormones', handler: (st: GameState) => {
    scene.text('"I don\'t want to mess with my body like that," you say while shaking your head. "Birth control hormones stop you from getting pregnant, but they do all other kinds of other stuff to you. I hear horror stories from changing your tastes to sudden weight gain to killing your sex drive, which sort of defeats the point of getting on the pill in the first place."');
    scene.text('"No periods though," she smirks. "But I guess you have a point. Since I started the pill, I get a lot wetter than I used to. But that just made surprise buttsex better. All natural lube."');
    scene.text('She grins a slutty grin at you and you both erupt into laughter.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBirthControlPillProblem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Pill has the same problem', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"The pill has the same problem with memory," you point out. "If I\'m too horny to forget a condom, what if I\'m too horny to remember my pill? Or too tired?"');
    scene.text('"I guess you have a point there," she sighs. "My fear of getting pregnant outweighs my horniness, but I guess not every girl is like that. Some of them are just dumb like you."');
    scene.text('"If your fear is greater than your horniness, then you must be constantly wetting yourself!"');
    scene.text('She whips around, smacking you hard with a pillow. You cackle with glee, laughing harder as her blows pick up speed and force, but she never stops grinning so you know she can\'t be that mad.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCalendarMethodWorking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kid ?? 0) === 0  &&  ((s as any).abort ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0))) {
    scene.actions([
      { label: 'Haven\'t gotten pregnant yet', handler: (st: GameState) => {
    scene.actions([
      { label: 'Casual', handler: (st: GameState) => {
    scene.text('"Well, I haven\'t gotten pregnant yet," you shrug. "So it seems like it\'s working."');
    scene.text('"<i>Yet</i> being the operative word," she replies dryly. "It only takes one asshole to fuck your life up forever."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Smug', handler: (st: GameState) => {
    scene.text('"I haven\'t gotten pregnant yet," you smirk back. "So I think it\'s working pretty well."');
    scene.text('"<i>Yet</i> being the operative word," she replies dryly. "It only takes one asshole to fuck your life up forever."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexToys(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/talk/anal_dildo.jpg');
  scene.text('"Mama is always leaving condoms in my room trying to get me to be safe, but I hate using them," she says while rolling her eyes. "If I\'m gonna take a cock, I want to <i>feel</i> the cock, you know what I mean? I just use them on my dildos instead. It saves me a lot of clean up."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRoughLove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/cocksucker4.jpg');
  scene.text('"If my makeup isn\'t completely fucked up and running down my face by the time he cums, I barely even count it as sex," she grins.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterAssToPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/anal/doggy/anal31.jpg');
  // TODO-QSP: iif(AlbinaQW['knows_anal'] = 1, '"When you do anal, ', 'If you ever try anal, ') + 'make sure you ne...
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterLesbianTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_had_sex ?? 0)?.['A23']) {
    scene.text('"Have you ever done it with another girl before?" she asks.');
    scene.text('You raise an eyebrow and she rolls her eyes. "<i>Besides</i> me, obviously."');
  } else {
    scene.text('"Have you ever done it with another girl before?" she asks.');
  }
  if (((s as any).npc_had_sex ?? 0)?.['A23']) {
    scene.actions([
      { label: 'Just you', handler: (st: GameState) => {
    scene.text('"Just you," you say.');
    scene.text('"Me too," she replies, a faint blush coloring her cheeks. "What\'s your favorite part about fucking me?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLesbianTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['female_sexual_partners'] > 0) {
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('"Yes," you say.');
    if (((s as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('"Only you," she replies, a faint blush coloring her cheeks. "What\'s your favorite part about fucking me?"');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLesbianTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"I haven\'t," she replies, a faint blush coloring her cheeks.');
      scene.actions([
        { label: 'Keep talking', handler: (st: GameState) => {
    qspCall(st, 'albina_sex_chat', 'sex_talk');
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.text('You shake your head. "I can\'t say I have."');
    scene.text('"Oh. Never mind then," she says before turning away from you, a faint blush coloring her cheeks.');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    qspCall(st, 'albina_sex_chat', 'sex_talk');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLesbianTalk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I like your taste', handler: (st: GameState) => {
    scene.text('"I like the way your pussy tastes," you say, licking your lips.');
    scene.text('"I like the way I taste too," she shamelessly grins back at you. "But you\'re pretty tasty yourself."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'You\'re good at eating pussy', handler: (st: GameState) => {
    scene.text('"When you eat me out," you grin. "How\'d you get so good at eating pussy?"');
    scene.text('"I don\'t really think about it," she shrugs, but you can tell she\'s feeling smug about the compliment. "Maybe I\'m good because I like it so much."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterLesbianTalk3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterBiggestDickTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"What\'s the biggest dick you\'ve ever taken?" she asks with a grin.');
  if (((s as any).stat ?? 0)?.['biggest_cock'] < 9) {
    if (((s as any).stat ?? 0)?.['biggest_dildo'] >= 15) {
      scene.actions([
        { label: 'Big dildo', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Biggest dick I've ever had was only about <<stat['biggest_cock']>>cm," you say.
    scene.text(`"Biggest dick I've ever had was only about ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm," you say.`);
    // TODO-QSP: dynamic text: Albina seems shocked, almost offended, but before she can respond, you continue....
    scene.text(`Albina seems shocked, almost offended, but before she can respond, you continue. "But the biggest dildo I've ever taken is ${((s as any).stat ?? 0)?.['biggest_dildo'] ?? ''}cm."`);
    scene.text('You grin as her jaw drops before her expression recovers into her own sly grin.');
    if (((s as any).stat ?? 0)?.['biggest_dildo'] < 23) {
      scene.text('"Lazar\'s even bigger than that," she smirks.');
    } else {
      scene.text('"Damn, that\'s even bigger than Lazar..." she smirks. "Ever shoved it up your ass?"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Only a small one (you liked it)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hmm... Maybe... <<stat['biggest_cock']>>cm?" you tell her.
    scene.text(`"Hmm... Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you tell her.`);
    scene.text('Her jaw drops. "What?! That\'s practically just a finger!"');
    scene.text('"I didn\'t mind," you shrug. "I liked it."');
    scene.text('"Girl, we\'ve got to find you a real dick to fuck," she says seriously. "Unless he\'s at least 12cm, it doesn\'t count as real sex."');
    scene.text('A playful smile then crosses her lips. "I bet Lazar might be willing..."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Only a small one (embarrassed)', handler: (st: GameState) => {
    scene.text('"Not very big..." you blush and Albina raises an eyebrow.');
    scene.text('"Exactly how small is \'not very big\'?" she asks.');
    // TODO-QSP: dynamic text: "Maybe... <<stat['biggest_cock']>>cm?" you admit.
    scene.text(`"Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you admit.`);
    scene.text('Her jaw drops. "What?! That\'s practically just a finger!"');
    scene.text('"Not very impressive is it?" you say ruefully.');
    scene.text('"Girl, we\'ve got to find you a real dick to fuck," she says seriously.');
    scene.text('A playful smile then crosses her lips. "I bet Lazar might be willing..."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Only a small one (annoyed)', handler: (st: GameState) => {
    scene.text('"Ugh! As if I could call it a dick!"');
    scene.text('Albina raises an eyebrow.');
    // TODO-QSP: dynamic text: "The 'biggest'," you start, making air quotes with your fingers. "I've ever had ...
    scene.text(`"The 'biggest'," you start, making air quotes with your fingers. "I've ever had was only about ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm!"`);
    scene.text('Her jaw drops. "What?! That\'s practically just a finger!"');
    scene.text('"I know, right?!" you moan loudly. "What\'s a girl got to do to get a real dick to fuck?!"');
    scene.text('A playful smile crosses her lips. "I bet Lazar might be willing... He\'s fucking <i>big</i>..."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['biggest_cock'] < 15) {
      if (((s as any).stat ?? 0)?.['biggest_dildo'] >= 15) {
        scene.actions([
          { label: 'Big dildo', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Biggest dick I've ever had was only about <<stat['biggest_cock']>>cm," you say.
    scene.text(`"Biggest dick I've ever had was only about ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm," you say.`);
    // TODO-QSP: dynamic text: Albina seems shocked, almost offended, but before she can respond, you continue....
    scene.text(`Albina seems shocked, almost offended, but before she can respond, you continue. "But the biggest dildo I've ever taken is ${((s as any).stat ?? 0)?.['biggest_dildo'] ?? ''}cm."`);
    scene.text('You grin as her jaw drops before her expression recovers into her own sly grin.');
    if (((s as any).stat ?? 0)?.['biggest_dildo'] < 23) {
      scene.text('"Lazar\'s even bigger than that," she smirks.');
    } else {
      scene.text('"Damn, that\'s even bigger than Lazar..." she smirks. "Ever shoved it up your ass?"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Only an average one (you liked it)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hmm... Maybe... <<stat['biggest_cock']>>cm?" you tell her.
    scene.text(`"Hmm... Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you tell her.`);
    scene.text('"Seriously?" she asks, looking rather unimpressed. "Lazar is practically twice as big!"');
    scene.text('"I didn\'t mind," you shrug. "I liked it."');
    scene.text('"You just don\'t know what you\'re missing out on," she smirks.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Only an average one (embarrassed)', handler: (st: GameState) => {
    scene.text('"Not very big..." you blush.');
    scene.text('"Exactly how small is \'not very big\'?" she asks while raising an eyebrow.');
    // TODO-QSP: dynamic text: "Maybe... <<stat['biggest_cock']>>cm?" you admit.
    scene.text(`"Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you admit.`);
    scene.text('"That\'s... Pretty average, yeah..." she replies.');
    scene.text('"Not very impressive is it?" you say ruefully.');
    scene.text('"You need to get laid by something bigger," she says seriously.');
    scene.text('A playful smile then crosses her lips. "I bet Lazar might be willing..."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Only an average one (annoyed)', handler: (st: GameState) => {
    scene.text('"Pretty average, if you could even call it that!" you scoff.');
    scene.text('Albina raises an eyebrow. "Define \'average\'"');
    // TODO-QSP: dynamic text: "About <<stat['biggest_cock']>>cm," you reply.
    scene.text(`"About ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm," you reply.`);
    scene.text('"That\'s... Pretty average, yeah..." she replies.');
    scene.text('You sigh loudly. "What\'s a girl got to do to get a real dick to fuck?"');
    scene.text('A playful smile crosses her lips. "I bet Lazar might be willing... He\'s fucking <i>big</i>..."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['biggest_cock'] < 20) {
        scene.actions([
          { label: 'An above average one (you liked it)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hmm... Maybe... <<stat['biggest_cock']>>cm?" you tell her.
    scene.text(`"Hmm... Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you tell her.`);
    scene.text('"Hhhmm..." she replies. "Lazar is still bigger than that."');
    scene.text('"I didn\'t mind," you shrug. "I liked it."');
    scene.text('"I know you did, you slut!" she smirks.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Above average (embarrassed)', handler: (st: GameState) => {
    scene.text('"Above average..." you blush.');
    scene.text('"Exactly how big is \'above average\'?" she asks while raising an eyebrow.');
    // TODO-QSP: dynamic text: "Maybe... <<stat['biggest_cock']>>cm?" you admit.
    scene.text(`"Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you admit.`);
    scene.text('"Yeah, that\'s above average for most guys..." she replies.');
    scene.text('"It\'s something, no?" you say ruefully.');
    scene.text('"Girl, you need a guy that\'s even bigger," she says seriously.');
    scene.text('A playful smile then crosses her lips. "I bet Lazar might be willing..."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Above average (annoyed)', handler: (st: GameState) => {
    scene.text('"He was above average, but I want something bigger."');
    scene.text('"Exactly how big is \'above average\'?" she asks while raising an eyebrow.');
    // TODO-QSP: dynamic text: "<<stat['biggest_cock']>>cm," you tell her.
    scene.text(`"${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm," you tell her.`);
    scene.text('"Yeah, that\'s above average for most guys..." she replies.');
    scene.text('You sigh loudly. "What\'s a girl got to do to get a real dick to fuck?"');
    scene.text('A playful smile crosses her lips. "I bet Lazar might be willing... He\'s fucking <i>big</i>..."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['biggest_cock'] === 30) {
          scene.actions([
            { label: 'A monstrous one (open)', handler: (st: GameState) => {
    scene.text('"I don\'t even think it\'s possible for a cock to be this big!" you laugh.');
    scene.text('She raises an eyebrow. "Try me."');
    // TODO-QSP: dynamic text: "<<stat['biggest_cock']>>cm," you tell her with a smile.
    scene.text(`"${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm," you tell her with a smile.`);
    if (((s as any).region ?? 0) === 'city') {
      scene.text('Her jaw drops. "Holy shit! And I thought my record of 28cm was impressive! Who is this guy and where can I fuck him?"');
      scene.text('You both laugh as you tell her what it was like taking such a massive cock inside you.');
    } else {
      scene.text('Her jaw drops. "Holy shit! And I thought Lazar was big! Who is this guy and where can I fuck him?"');
      scene.text('You both laugh as you tell her what it was like taking such a massive cock inside you.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
            { label: 'A monstrous one (embarrassed)', handler: (st: GameState) => {
    scene.text('"I... I didn\'t even know it was possible for a guy to be this... big..." you blush.');
    scene.text('She raises an eyebrow. "Try me."');
    // TODO-QSP: dynamic text: "<<stat['biggest_cock']>>cm..." you blush. "He had a <<stat['biggest_cock']>>cm ...
    scene.text(`"${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm..." you blush. "He had a ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm cock...`);
    if (((s as any).region ?? 0) === 'city') {
      scene.text('Her jaw drops. "Holy shit! And I thought my record of 28cm was impressive! Who is this guy and where can I fuck him?"');
      scene.text('You continue blushing as she asks you what it was like taking such a massive cock inside you.');
    } else {
      scene.text('Her jaw drops. "Holy shit! And I thought Lazar was big! Who is this guy and where can I fuck him?"');
      scene.text('You continue blushing as she asks you what it was like taking such a massive cock inside you.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          if (((s as any).stat ?? 0)?.['biggest_cock'] < 23) {
            scene.actions([
              { label: 'A pretty big one (you liked it)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hmm... Maybe... <<stat['biggest_cock']>>cm?" you tell her.
    scene.text(`"Hmm... Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you tell her.`);
    scene.text('"Hhhmm..." she replies. "Lazar is still bigger than that."');
    scene.text('"I didn\'t mind," you shrug. "I liked it."');
    scene.text('"I know you did, you slut!" she smirks.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
              { label: 'A pretty big one (embarrassed)', handler: (st: GameState) => {
    scene.text('"A pretty big one..." you blush.');
    scene.text('"Exactly how big is \'pretty big\'?" she asks while raising an eyebrow.');
    // TODO-QSP: dynamic text: "Maybe... <<stat['biggest_cock']>>cm?" you admit.
    scene.text(`"Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you admit.`);
    scene.text('"Yeah, that\'s pretty big," she replies.');
    scene.text('"Pretty impressive, no?" you say ruefully.');
    scene.text('"You say that, but Lazar is still bigger than that," she smiles. "Not by much, mind you."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
              { label: 'A pretty big one (annoyed)', handler: (st: GameState) => {
    scene.text('"He was pretty big, but is it wrong that I wanted something bigger?"');
    scene.text('"Exactly how big is \'pretty big\'?" she asks while raising an eyebrow.');
    // TODO-QSP: dynamic text: "<<stat['biggest_cock']>>cm," you tell her.
    scene.text(`"${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm," you tell her.`);
    scene.text('"Not bad, but Lazar is still bigger," she replies. "Not by much, mind you."');
    scene.text('"I know!" you moan. "What does a girl have to do to get a guy who\'s hung like a horse?"');
    scene.text('A playful smile crosses her lips. "I bet Lazar might be willing to fuck you. If you can handle him, that is..."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
            ]);
          } else {
            if (((s as any).stat ?? 0)?.['biggest_cock'] === 23) {
              scene.actions([
                { label: 'A huge one (open)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "<<stat['biggest_cock']>>cm," you tell her with a smile.
    scene.text(`"${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm," you tell her with a smile.`);
    scene.text('"Hhhmm..." she replies. "That\'s the same size as Lazar. Wait. Was it him?"');
    if (((s as any).AlbinaQW ?? 0)?.['Lazar_Threesome'] !== 0  &&  ((s as any).npc_had_sex ?? 0)?.['A149']) {
      scene.text('You nod. "Yeah. Those threesomes we have are <i>amazing</i>!"');
      scene.text('She smiles. "He really does know how to use his cock, doesn\'t he?"');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A149']) {
        scene.text('"Yes," you reply and she grins.');
        scene.text('"You slut!" she grins. "I wonder what panties you gave him for his collection..."');
      } else {
        scene.text('"No, it was another guy," you reply. "Probably the best cock I\'ve ever had."');
        scene.text('"If he\'s as big as you say, then I have no doubts about it," she grins.');
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
                { label: 'A huge one (embarrassed)', handler: (st: GameState) => {
    scene.text('"A huge one..." you blush.');
    scene.text('"Exactly how huge is \'huge\'?" she asks while raising an eyebrow.');
    scene.text('"Hhhmm..." she replies. "That\'s the same size as Lazar. Wait. Was it him?"');
    if (((s as any).AlbinaQW ?? 0)?.['Lazar_Threesome'] !== 0  &&  ((s as any).npc_had_sex ?? 0)?.['A149']) {
      scene.text('You nod and blush even more. "Yeah... Those threesomes we have..."');
      scene.text('She smiles. "He really does know how to use his cock, doesn\'t he?"');
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A149']) {
        scene.text('"Yes..." you blush and she grins.');
        scene.text('"You slut!" she grins. "I wonder what panties you gave him for his collection..."');
      } else {
        scene.text('"No, it was another guy," you reply. "It felt... nice."');
        // TODO-QSP: dynamic text: "Don't act all shy, <<$pcs_nickname>>!" she grins. "If he's as big as you say, t...
        scene.text(`"Don't act all shy, ${((s as any).pcs_nickname || '')}!" she grins. "If he's as big as you say, then I have no doubt that he had you moaning like a well fucked slut."`);
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
              ]);
            } else {
              scene.actions([
                { label: 'A massive one (open)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "<<stat['biggest_cock']>>cm," you tell her with a smile.
    scene.text(`"${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm," you tell her with a smile.`);
    if (((s as any).region ?? 0) === 'city') {
      // TODO-QSP: dynamic text: "Pretty impressive, <<$pcs_nickname>>," she replies with a grin. "My record is 2...
      scene.text(`"Pretty impressive, ${((s as any).pcs_nickname || '')}," she replies with a grin. "My record is 28cm."`);
    } else {
      scene.text('"Holy shit!" she exclaims and compares the length to her forearm. "How did something like <i>that</i> fit inside your pussy?!"');
      scene.text('"It did," you shrug. "And it was <i>amazing</i>!"');
      scene.text('"You slut!" she grins. "You need to introduce me to this guy. And his cock."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
                { label: 'A massive one (embarrassed)', handler: (st: GameState) => {
    scene.text('"Is \'massive\' a term I could use?" you blush.');
    scene.text('"Exactly how big is \'massive\'?" she asks while raising an eyebrow.');
    // TODO-QSP: dynamic text: "Maybe... <<stat['biggest_cock']>>cm?" you admit.
    scene.text(`"Maybe... ${((s as any).stat ?? 0)?.['biggest_cock'] ?? ''}cm?" you admit.`);
    if (((s as any).region ?? 0) === 'city') {
      // TODO-QSP: dynamic text: "Pretty impressive, <<$pcs_nickname>>," she replies with a grin. "My record is 2...
      scene.text(`"Pretty impressive, ${((s as any).pcs_nickname || '')}," she replies with a grin. "My record is 28cm."`);
    } else {
      // TODO-QSP: dynamic text: Her jaw drops. "Holy shit! <<$pcs_nickname>>! Who is this guy and when can you g...
      scene.text(`Her jaw drops. "Holy shit! ${((s as any).pcs_nickname || '')}! Who is this guy and when can you get him in my bed?"`);
      scene.text('You continue blushing as Albina fawns over you, but feel a sense of pride within yourself.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep your secrets', handler: (st: GameState) => {
    scene.text('"Hmmm... Why should I tell you?" you reply teasingly.');
    scene.text('"Must either be a spicy answer or a boring one if you\'re trying to keep it secret," she responds, her eyes twinkling. "Come on, fess up. Toothpick or hockey stick?"');
    scene.text('"You\'ll just have to imagine."');
    scene.text('She spends a few more minutes trying to pry it out of you, but you manage to keep that information to yourself and she eventually gives up.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAlbAskBodyCount1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"How many guys have you slept with?" she asks, looking surprisingly curious.');
  if (((s as any).stat ?? 0)?.['female_sexual_partners'] + ((s as any).stat ?? 0)?.['herm_sexual_partners'] > 0) {
    scene.actions([
      { label: '<i>Just</i> guys?', handler: (st: GameState) => {
    scene.text('"<i>Just</i> guys?" you ask slyly.');
    scene.text('Her eyes twinkle back at you. "Fair point. Okay, how many <i>people</i> have you slept with?"');
    scene.actions([
      { label: 'Tell her your body count', handler: (st: GameState) => {
    qspCall(st, 'albina_sex_chat', 'alb_ask_body_count2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her your body count', handler: (st: GameState) => {
    qspCall(st, 'albina_sex_chat', 'alb_ask_body_count2');
  } },
  ]);
  scene.build();
}

function enterAlbAskBodyCount2(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_body_count = (((s as any).stat ?? {})?.['male_sexual_partners'] ?? 0) + (((s as any).stat ?? {})?.['female_sexual_partners'] ?? 0) + (((s as any).stat ?? {})?.['herm_sexual_partners'] ?? 0);
  if (((s as any).temp_body_count ?? 0) <= 5) {
    // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "Only <<temp_body_count>>."',...
    scene.text('"Really??" She seems rather surprised.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountFew(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).temp_body_count ?? 0) <= 10) {
      // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "I''ve slept with <<temp_body...
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountFew(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).temp_body_count ?? 0) <= 15) {
        // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "I''ve probably fucked about ...
        scene.text('"Those are rookie numbers," she smirks. "You gotta up your game, girl."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountFew(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).temp_body_count ?? 0) <= 20) {
          // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "I''ve fucked more than a doz...
          scene.text('"You\'re practically a prude!" she grins. ');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountFew(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).temp_body_count ?? 0) <= 25) {
            // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "I''ve probably fucked about ...
            scene.text('"Not bad," she smirks, looking impressed.');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountDozens(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).temp_body_count ?? 0) <= 50) {
              // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "I''ve fucked a few dozen. Ma...
              scene.text('"Not bad," she smirks, looking impressed.');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountDozens(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).temp_body_count ?? 0) <= 100) {
                // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "I''ve fucked a few dozen peo...
                scene.text('"Fifty? Damn!" she smirks and looks you up and down, seemingly impressed. It\'s hard not to notice how her eyes linger briefly between your legs. "That\'s a hefty number."');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountDozens(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).temp_body_count ?? 0) <= 200) {
                  // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "I''ve probably fucked about ...
                  scene.text('Her jaw drops. "<i>A hundred</i>? I was getting pimped out for <i>years</i> and I haven\'t fucked that many people!"');
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountHundreds(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  // TODO-QSP: iif(npc_had_sex['A23'], '"Well, including you..." you start teasingly. "I''ve fucked hundreds of peo...
                  scene.text('Her jaw drops. "<i>Hundreds?</i>"');
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbAskBodyCountHundreds(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbAskBodyCountHundreds(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Get embarrassed', handler: (st: GameState) => {
    scene.actions([
      { label: 'I like sex', handler: (st: GameState) => {
    scene.text('Her reaction makes you blush and you suddenly feel embarrassed.');
    scene.text('"I just like sex..." you mumble shyly.');
    scene.text('She laughs while patting you on the arm. "Don\'t worry, I\'m not slut shaming you."');
    scene.text('You glance at her and she gives you a playful smile. "Okay, maybe a little. But holy fuck! I love getting railed too, but that\'s a lot of fucking! I don\'t know whether to be impressed or concerned!"');
    scene.text('She laughs again and another wave of heat flushes through your face.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'People keep asking', handler: (st: GameState) => {
    scene.text('Her reaction makes you blush and you suddenly feel embarrassed.');
    scene.text('"People keep asking..." you mumble shyly. "It adds up quick..."');
    scene.text('She cocks an eyebrow. "You fuck anybody that asks?"');
    scene.text('"Pretty much," you confess.');
    // TODO-QSP: dynamic text: She stares at you for a few seconds before a wicked smile slowly spreads across ...
    scene.text(`She stares at you for a few seconds before a wicked smile slowly spreads across her lips. "${((s as any).pcs_nickname || '')}... That's kinda slutty."`);
    scene.text('Her smile transforms into a full blown grin and another wave of heat flushes through your face.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Be confident', handler: (st: GameState) => {
    scene.actions([
      { label: 'I like sex', handler: (st: GameState) => {
    scene.text('"I like sex," you shrug. "If I get the opportunity to fuck, I take it."');
    scene.text('"I love getting railed too, but that\'s a lot of fucking!" she laughs. "I don\'t know whether to be impressed or concerned!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'People keep asking', handler: (st: GameState) => {
    scene.text('"People keep asking," you shrug. "If they want to fuck me, they can fuck me."');
    scene.text('She cocks an eyebrow. "You fuck anybody that asks?"');
    scene.text('"Pretty much," you shrug again.');
    // TODO-QSP: dynamic text: She stares at you for a few seconds before a wicked smile slowly spreads across ...
    scene.text(`She stares at you for a few seconds before a wicked smile slowly spreads across her lips. "${((s as any).pcs_nickname || '')}... That's kinda slutty."`);
    scene.text('Her smile then transforms into a full blown grin.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbAskBodyCountDozens(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Sex is fun', handler: (st: GameState) => {
    scene.text('"What can I say?" you smirk in return. "Sex is fun."');
    scene.text('"No argument there," she grins back.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I like one night stands', handler: (st: GameState) => {
    scene.text('"I love one night stands," you grin. "Fuck and forget, that\'s my style."');
    scene.text('"Slut," she grins back.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAlbAskBodyCountFew(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['male_sexual_partners'] + ((s as any).stat ?? 0)?.['female_sexual_partners'] + ((s as any).stat ?? 0)?.['herm_sexual_partners'] > 2 * (((s as any).stat ?? 0)?.['men_fucked'] + ((s as any).stat ?? 0)?.['women_fucked'] + ((s as any).stat ?? 0)?.['herm_fucked'])) {
    scene.actions([
      { label: 'I mostly fool around', handler: (st: GameState) => {
    scene.text('"I fool around a lot," you shrug. "But I rarely go all the way. Hand stuff, mouth stuff. Just not a lot of..."');
    scene.text('You curl your index finger into a circle and pump the finger of your other hand through it suggestively.');
    scene.text('"You\'re such a tease!" she snickers. "I bet you just get a kick out of getting boys hard and bothered."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Trust issues', handler: (st: GameState) => {
    scene.text('"It\'s a trust thing," you say. "I don\'t want to let someone put it in me unless I trust them."');
    scene.text('"I get that," she replies softly and the conversation suddenly feels somewhat somber...');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I prefer partners who know me', handler: (st: GameState) => {
    scene.text('"I like doing it consistently with the same people," you say. "You get to learn what they like and they learn what I like. It just gets better."');
    scene.text('"I know what you mean," she grins. "Lazar was good the first time we fucked, but now he\'s <i>incredible</i>. He knows how to hit this spot in my ass with his cock while doing this thing with my clit- <i>Mmph!</i> It drives me cra-zy!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSexualFantasies1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>," she says with a sly look. "Do you have any sexual fantasies...
  scene.text(`"${((s as any).pcs_nickname || '')}," she says with a sly look. "Do you have any sexual fantasies?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.actions([
      { label: '(Embarrassed)', handler: (st: GameState) => {
    scene.text('Your face heats up in a crimson blush and you look away instinctively.');
    scene.text('"N-no," you stammer. "Not really."');
    scene.text('"Sounds like bullshit to me," she grins. "It must be something kinky."');
    scene.text('"No! I don\'t have any!" you protest. "I swear!"');
    scene.text('"Hmmm... What would you want to hide from me?" she ponders and starts tapping her chin. "Do you want to get dominated? Slave play? Do you want to get tied up? Oh! Is it like one of those weird Japanese tentacle things?"');
    scene.text('She teases you relentlessly for several more minutes until you finally manage to change the subject.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: '(Straight faced)', handler: (st: GameState) => {
    scene.text('"No," you say with a shake of your head. "I don\'t have any."');
    scene.text('"Sounds like bullshit to me," she grins. "It must be something kinky."');
    scene.text('"No really," you insist. "I really don\'t have any \'fantasies.\' I\'m perfectly content with the sex I have already."');
    scene.text('"You\'re actually being serious, aren\'t you?" she pouts. "What the fuck? That\'s so boring!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: '(Uninterested)', handler: (st: GameState) => {
    scene.text('"Nah, not really," you shrug.');
    scene.text('"Seriously?" She gives you a look of disbelief. "You don\'t have <i>any</i> fantasies?"');
    scene.text('"Dreaming about sex seems like a waste of time to me."');
    scene.text('"Fuck, that\'s so boring!" she pouts as she rolls her eyes.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Rape play', handler: (st: GameState) => {
    scene.text('"I have fantasies about being raped," you admit and the color drains from Albina\'s face.');
    scene.text('"Seriously?"');
    scene.text('The way she asks almost seems fearful.');
    if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).trait_vars ?? 0)?.['rape_fetish'] > 0) {
      scene.actions([
        { label: 'Tell her you\'ve been raped', handler: (st: GameState) => {
    scene.text('"Well I\'ve been raped before," you tell her and she somehow grows paler. "At the time it was horrifying, but the more I thought about it... I can\'t explain it. Something about being overpowered and getting <i>taken</i> like that was so hot. I can feel myself getting wet thinking about it."');
    scene.text('"I can\'t understand that at all," she whispers quietly.');
    scene.text('You sense you might have just killed the mood and the conversation slowly turns away from sexual topics.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
    scene.actions([
      { label: 'Seriously', handler: (st: GameState) => {
    scene.text('"Seriously. Just the idea of being overpowered against my will. Of being <i>taken</i>. It really turns me on. I can\'t explain it."');
    scene.text('"I can\'t understand that at all," she whispers quietly.');
    scene.text('You sense you might have just killed the mood and the conversation slowly turns away from sexual topics.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    { label: 'BBC', handler: (st: GameState) => {
    if (((s as any).region ?? 0) === 'city') {
      if (((s as any).npc_had_sex ?? 0)?.['A55']  ||  ((s as any).npc_had_sex ?? 0)?.['A82']  ||  ((s as any).npc_had_sex ?? 0)?.['A146']  ||  ((s as any).npc_had_sex ?? 0)?.['A243']) {
        scene.text('"Well, it\'s not really a fantasy <i>anymore</i>, but I always thought about what it would feel like to be fucked... by a big black cock..."');
        scene.text('A smile appears on her lips. "So you\'re saying you\'ve been fucked by a black guy?"');
        scene.text('You blush slightly and she grins.');
        scene.text('"I know that feeling. I\'ve felt it myself."');
        if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2) {
          scene.text('"You mean Ermias, right?" you grin.');
          scene.text('She nods and smiles while holding her hands apart to show you how big he is.');
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
            scene.text('You wonder if she means the black you saw her having sex with, but decide not to mention him in case she asks how you found out.');
            scene.text('"You\'ve actually fucked a black guy? <i>Sllluuuut</i>!" you reply and you both burst into laughter.');
            scene.text('"Takes one to know one!" she shoots back.');
          } else {
            scene.text('"You\'ve actually fucked a black guy?" you .');
            scene.text('She nods and smiles while holding her hands apart to show you how big he is.');
            scene.text('"Slut!" you giggle.');
            scene.text('"Takes one to know one!" she shoots back.');
          }
        }
      } else {
        scene.text('"Call me basic, but... Big black cock..." you admit and a smirk appears on Albina\'s face.');
        scene.text('"You\'re more than basic. You\'re a basic <i>slut</i>," she laughs.');
        scene.text('You smack her on the arm. "Like you haven\'t thought about it!"');
        scene.text('"Hey! For your information, I\'ve done <i>more</i> than think about it..."');
        if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2) {
          scene.text('"You mean Ermias, right?" you grin.');
          scene.text('She nods and smiles while holding her hands apart to show you how big he is.');
          scene.text('"What about you? Have you lived out your fantasy yet?"');
          scene.text('"No, I haven\'t," you reply. "That\'s why it\'s called a fantasy."');
          scene.text('"You\'re missing out," she says. "You should try it."');
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
            scene.text('You wonder if she means the black you saw her having sex with, but decide not to mention him in case she asks how you found out.');
            scene.text('"You\'ve actually fucked a black guy? Now who\'s the slut?" you reply and you both burst into laughter.');
            scene.text('"You\'re telling me you haven\'t?" she asks.');
            scene.text('"No, I haven\'t," you reply. "That\'s why it\'s called a fantasy."');
            scene.text('"You\'re missing out," she says. "You should try it."');
          } else {
            scene.text('"You\'ve actually fucked a black guy? Now who\'s the slut?" you reply and you both burst into laughter.');
            scene.text('"You\'re telling me you haven\'t?" she asks.');
            scene.text('"No, I haven\'t," you reply. "That\'s why it\'s a fantasy."');
            scene.text('"You\'re missing out," she says. "You should try it."');
          }
        }
      }
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A55']  ||  ((s as any).npc_had_sex ?? 0)?.['A82']  ||  ((s as any).npc_had_sex ?? 0)?.['A146']) {
        scene.text('"Well, it\'s not really a fantasy <i>anymore</i>, but I always thought about what it would feel like to be fucked... by a big black cock..."');
        scene.text('A smile appears on her lips. "So you\'re saying you\'ve been fucked by a black guy?"');
        if (((s as any).npc_had_sex ?? 0)?.['A55']) {
          scene.text('You nod and hold your hands wide apart to show her how big Olu\'s cock is.');
          scene.text('Oh my <i>god</i>!" she gasps. "How did that thing not rip you in two?!"');
          scene.text('"It sometimes felt like it would, honestly," you giggle. "But it was some of the best sex I\'ve ever had."');
          scene.text('"I can imagine," she smiles.');
        } else {
          scene.text('You nod and she grins.');
          scene.text('"It was Marcus, wasn\'t it? You slut!"');
          scene.text('"I\'m not saying a word!" you reply. You\'ll just have to guess."');
          scene.text('"That\'s an admission if I\'ve ever heard one. I knew it. <i>Sluuuuut</i>!" she says with a lot of emphasis.');
          scene.text('You both burst out in laughter at her antics.');
        }
      } else {
        scene.text('"Call me basic, but... Big black cock..." you admit and a smirk appears on Albina\'s face.');
        scene.text('"You\'re more than basic. You\'re a basic <i>slut</i>," she laughs.');
        scene.text('You smack her on the arm. "Like you haven\'t thought about it!"');
        scene.text('"I might have..." she admits. "But I wouldn\'t admit it to my friends!"');
        scene.text('"Bitch!" you laugh while smacking her arm.');
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbinasFantasy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'BDSM', handler: (st: GameState) => {
    scene.text('"I, uh... I\'ve been thinking about... bondage, and that sort of stuff," you admit as you feel yourself start blushing.');
    scene.text('"Ooohhhh, kinky! You want me to tie you up and spank you?" she grins.');
    scene.text('You feel yourself blushing even more and Albina laughs.');
    scene.text('"Oh my god, you\'re actually thinking about it! You slut!"');
    scene.text('"Shut up!" you reply and you both laugh.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbinasFantasy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAlbinasFantasy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about her fantasies', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Well? What about you?" you ask. "Do <i>you</i> have any fantasies?"');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.text('She grins. "You really want to know?"');
      scene.text('"I asked, didn\'t I?" you reply.');
      scene.text('"Okay, fine," she says. "My biggest fantasy... is being fucked by tentacles. Big, fat slimy ones that slither all the way into my womb and fill me with so much thick, goopy tentacle cum that my belly inflates like a balloon."');
      scene.text('You look at her wide-eyed. "Are you being serious?"');
      scene.text('She can\'t contain herself and bursts out laughing. "Of course not, but you should see the look on your face right now!"');
      scene.text('You smack her with a pillow. "Bitch! I told you mine, so tell me yours!"');
      scene.text('"Ow! Okay, okay!" she squeals as she shields herself from your blow. "If you must know, I\'ve recently been wondering how it might feel to be... tied up..."');
    } else {
      scene.text('She chews her lip. "Recently... I\'ve been wondering how it might feel to be... tied up..." she admits.');
    }
    scene.actions([
      { label: 'Tease her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You want someone to tie you up and call you a bad girl?" you smirk. "Maybe whip you for good measure?"');
    scene.text('"Among other things," she grins. "I don\'t know. The idea of being tied up tight and left to someone else\'s mercy just... turns me on."');
    scene.text('"You\'re thinking about it right now, aren\'t you?" you grin.');
    scene.text('A smile creeps onto her face as she squeezes her legs together. "Maybe..."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPenetrationCum1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Can you cum from getting fucked?" she asks. "Meaning <i>just</i> from getting fucked. No clit play or anything."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    scene.text('"I sure <i>do</i>," you grin back, putting an extra emphasis on the word that shows how you orgasm.');
    scene.text('"Ugh! That\'s so unfair!" she replies, giving you a wistful smirk. "I love getting fucked, but if I wanna cum I have to work my clit like mad! Even if my ass is being pounded and spanked raw, all that pleasure builds up with no release unless my clit gets some attention."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Can\'t everybody?', handler: (st: GameState) => {
    scene.text('"Can\'t everybody?" you ask in confusion. "How else would you cum if not from getting fucked?"');
    scene.text('"No, but I mean like, without any clit play," she elaborates, thinking you\'re misunderstanding.');
    scene.text('"Yeah?" you reply, even more confused. "Cock goes in pussy, cock makes girl cum. That\'s just sex, isn\'t it?"');
    scene.text('"You bitch!" she cries, smacking you with a pillow with an unbelievable grin on her face. "No, not every girl can get off like that! If I wanna cum, I have to work my clit like mad! Even if my ass is being pounded and spanked raw, all that pleasure builds up with no release unless my clit gets some attention. You lucky bitch," she repeats, shaking her head.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"So..." you ask slowly. "... What is it you like about anal?"');
  scene.text('She gives you a dry look. "And why do you want to know?"');
  if (((s as any).stat ?? 0)?.['anal'] === 0) {
    scene.actions([
      { label: 'I want to try it (shy)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Well..." you stammer. "I... I want to try it and..."');
    scene.text('She gives you a hard stare. "And you thought to ask the buttslut how to do it?"');
    scene.text('You stutter trying to form an answer, and she breaks into laughter.');
    // TODO-QSP: dynamic text: "Relax <<$pcs_nickname>>, I'm just fucking with you. What do you want to know?"
    scene.text(`"Relax ${((s as any).pcs_nickname || '')}, I'm just fucking with you. What do you want to know?"`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalQuestionsShy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I want to try it (open)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Cause I want to try it," you say and she gives you a hard stare.');
    scene.text('"So you thought you should ask the buttslut about it?"');
    scene.text('"Yeah," you grin without flinching and she laughs heartily.');
    // TODO-QSP: dynamic text: "Damn <<$pcs_nickname>>! I can't even scare you for a second, can I? Well, you'r...
    scene.text(`"Damn ${((s as any).pcs_nickname || '')}! I can't even scare you for a second, can I? Well, you're asking the right girl. What do you want to know?"`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalQuestionsOpen(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I was looking for some advice (shy)', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['knows_anal'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Well... I- I\'ve tried it a few times..." you stammer. "But it\'s always been... painful... So I thought could ask-"');
    scene.text('"The buttslut about it?" she asks, giving you a hard stare. You sputter, trying to come up with an answer that will get you out of this before she breaks into laughter.');
    // TODO-QSP: dynamic text: "Relax <<$pcs_nickname>>, I'm just fucking with you. What do you want to know?"
    scene.text(`"Relax ${((s as any).pcs_nickname || '')}, I'm just fucking with you. What do you want to know?"`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalQuestionsShy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I was looking for some advice (open)', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['knows_anal'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'ve tried anal a few times, but it\'s always painful and not very enjoyable," you explain. "So I thought-"');
    scene.text('"You could ask the buttslut about it and she\'d tell you all about how to get your asshole ravaged by cock?" she asks, glaring at you.');
    scene.text('"Well... Yeah," you grin. "Is there a better person to ask than you?"');
    scene.text('She laughs heartily and grins back at you. "No, you\'re probably right about that. I\'m the queen of buttfucking. So what is it you want to know?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalQuestionsOpen(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Because of the rumors', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Oh, it\'s just..." You stutter, flustered by her response. "You know there\'s... stuff going around school about you?"');
    scene.text('"Oh I know all about that," she says, rolling her eyes. "Just because I have a big ass means I like doing anal, right? Just like all the stupid porn videos say? I swear boys are fucking idiots sometimes!"');
    scene.text('"I just like anal, okay?!" she suddenly blurts out in anger. "I don\'t even know why I\'m justifying myself right now!"');
    scene.text('You\'ve clearly hit a nerve and quickly back off.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Curiosity', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    // TODO-QSP: '"I''m just... really curious," you tell her. She raises an eyebrow. ' + iif(stat['anal'] = 0, '"I''...
    scene.text('She chews on her cheek for a second, seeming to be judging if you\'re serious or not before her lips split into a reluctant smile.');
    scene.text('"Well, if you <i>must</i> to know..." she says. "There\'s something I love about the my asshole getting <i>stretched out</i>. I can\'t even really describe it to myself. That feeling of a big cock spreading my cheeks, pummeling a hole it isn\'t supposed to go in... Fuck, it makes my insides gush. And when it\'s over and I\'m left exhausted and scuffed up with cum leaking from my asshole -<i>Fuck</i>- That\'s the best feeling in the world to me."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAnalQuestionsShy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['anal'] === 0) {
    scene.actions([
      { label: 'Where do I start?', handler: (st: GameState) => {
    scene.text('"Well..." you mumble. "Where do I even start?"');
    scene.text('She nods. "Humble question. Good. Too many girls try to get ahead of themselves with this kind of thing. My advice? Start small."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalEnd1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'What position?', handler: (st: GameState) => {
    scene.text('"What... position should I have my first time in?" you ask shyly.');
    // TODO-QSP: dynamic text: "You're getting way too far ahead of yourself, <<$pcs_nickname>>. Here's my advi...
    scene.text(`"You're getting way too far ahead of yourself, ${((s as any).pcs_nickname || '')}. Here's my advice: Start small," she replies.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalEnd1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Does it hurt?', handler: (st: GameState) => {
    scene.text('"Does it hurt?" you ask shyly.');
    scene.text('She smiles in response. "Oh man, if you\'re asking that then you\'re <i>definitely</i> not ready. Here\'s my advice: Start small."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalEnd1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'How do you enjoy it?', handler: (st: GameState) => {
    scene.text('"How do you... enjoy it?" you ask, cringing at how badly you phrased it.');
    scene.text('"You mean how do I manage to orgasm while my asshole is getting plowed like a field?" she asks in return.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalEnd2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalQuestionsOpen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['anal'] === 0) {
    scene.actions([
      { label: 'Where do I start?', handler: (st: GameState) => {
    scene.text('"Where do I even start?" you ask.');
    scene.text('She nods. "Humble question. Too many girls try to get ahead of themselves with this kind of thing. My advice? Start small."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalEnd1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'What\'s the best position?', handler: (st: GameState) => {
    scene.text('"What\'s the best position to try it in?" you ask excitedly. "Cowgirl seems hard, but doggy seems like it could be rough. I was won-"');
    // TODO-QSP: dynamic text: She holds her hand up and interrupts you. "You're getting way too far ahead of y...
    scene.text(`She holds her hand up and interrupts you. "You're getting way too far ahead of yourself, ${((s as any).pcs_nickname || '')}. Here's my advice: Start small."`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalEnd1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'How do you enjoy it?', handler: (st: GameState) => {
    scene.text('"How do you enjoy it?" you ask, cringing at the memories of your past experiences.');
    scene.text('"You mean how do I manage to orgasm while my asshole is getting plowed like a field?" she asks in return.');
    scene.text('"Yeah. It\'s always too painful for me. I can\'t even get wet."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalEnd2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal2(s: GameState, scene: SceneBuilder): void {
  scene.text('"Try playing with your asshole while masturbating and get used to something touching you down there. If you\'re feeling brave, try a finger up to your knuckle right when you\'re about to cum. Then next time try one from the start. Or a small dildo with lots of lube. Or better yet, a butt plug. Then you can practice all day," she smirks. "Find out what works for you and <i>then</i> try it with a real dick, otherwise it\'ll be <i>very</i> painful and could put you off trying it again."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalEnd1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterAnalEnd1(s: GameState, scene: SceneBuilder): void {
  scene.text('You thank her for her helpful advice and she continues answering your questions and giving you all the advice she feels you need to know.');
  scene.text('"And, if you need some <i>hands on</i> teaching... you know you can always <i>come</i> here," she says, shamelessly eye fucking you.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterAnalEnd2(s: GameState, scene: SceneBuilder): void {
  scene.text('"One word," she says, holding up her finger. "Practice. Your mistake was going straight for a real dick. That\'s a big no no. Practice with your fingers or a small dildo first to see what works for you. Some girls like it slow and gentle, others like it fast and rough. Just keep practicing and getting used to it. And relax. It\'ll always be a little painful, but it\'ll become more pleasurable the more you do it, especially when you get better at controlling the instinctive reflex to clench around what\'s inside you, whether that be a dildo or a fat cock."');
  scene.text('She grins at you. "If you ever want a <i>hands on</i> lesson, then I\'m willing to \'teach\' you some things..."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
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
    case 'admit_porno':
      enterAdmitPorno(s, scene);
      break;
    case 'fav_pos_chat':
      enterFavPosChat(s, scene);
      break;
    case 'missionary':
      enterMissionary(s, scene);
      break;
    case 'missionary2':
      enterMissionary2(s, scene);
      break;
    case 'doggystyle':
      enterDoggystyle(s, scene);
      break;
    case 'doggystyle2':
      enterDoggystyle2(s, scene);
      break;
    case 'cowgirl':
      enterCowgirl(s, scene);
      break;
    case 'cowgirl2':
      enterCowgirl2(s, scene);
      break;
    case 'bj_fav':
      enterBjFav(s, scene);
      break;
    case 'spit_or_swallow':
      enterSpitOrSwallow(s, scene);
      break;
    case 'swallow_why':
      enterSwallowWhy(s, scene);
      break;
    case 'birth_control_talk':
      enterBirthControlTalk(s, scene);
      break;
    case 'birth_control_pill_hassle_condom_ver':
      enterBirthControlPillHassleCondomVer(s, scene);
      break;
    case 'birth_control_pill_hassle_no_condoms':
      enterBirthControlPillHassleNoCondoms(s, scene);
      break;
    case 'birth_control_hormones':
      enterBirthControlHormones(s, scene);
      break;
    case 'birth_control_pill_problem':
      enterBirthControlPillProblem(s, scene);
      break;
    case 'calendar_method_working':
      enterCalendarMethodWorking(s, scene);
      break;
    case 'sex_toys':
      enterSexToys(s, scene);
      break;
    case 'rough_love':
      enterRoughLove(s, scene);
      break;
    case 'ass_to_pussy':
      enterAssToPussy(s, scene);
      break;
    case 'lesbian_talk1':
      enterLesbianTalk1(s, scene);
      break;
    case 'lesbian_talk2':
      enterLesbianTalk2(s, scene);
      break;
    case 'lesbian_talk3':
      enterLesbianTalk3(s, scene);
      break;
    case 'biggest_dick_talk1':
      enterBiggestDickTalk1(s, scene);
      break;
    case 'alb_ask_body_count1':
      enterAlbAskBodyCount1(s, scene);
      break;
    case 'alb_ask_body_count2':
      enterAlbAskBodyCount2(s, scene);
      break;
    case 'alb_ask_body_count_hundreds':
      enterAlbAskBodyCountHundreds(s, scene);
      break;
    case 'alb_ask_body_count_dozens':
      enterAlbAskBodyCountDozens(s, scene);
      break;
    case 'alb_ask_body_count_few':
      enterAlbAskBodyCountFew(s, scene);
      break;
    case 'sexual_fantasies1':
      enterSexualFantasies1(s, scene);
      break;
    case 'albinas_fantasy':
      enterAlbinasFantasy(s, scene);
      break;
    case 'penetration_cum1':
      enterPenetrationCum1(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'anal_questions_shy':
      enterAnalQuestionsShy(s, scene);
      break;
    case 'anal_questions_open':
      enterAnalQuestionsOpen(s, scene);
      break;
    case 'anal2':
      enterAnal2(s, scene);
      break;
    case 'anal_end1':
      enterAnalEnd1(s, scene);
      break;
    case 'anal_end2':
      enterAnalEnd2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_sex_chat: LocationDef = {
  name: 'albina_sex_chat',
  title: 'Knowing that you don\'t have much experience in the subject, ',
  region: 'other',
  enter: enter,
};
