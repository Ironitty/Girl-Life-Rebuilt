import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBreakfastChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
  scene.text('You take a seat at the table and Zoya smiles at you.');
  // TODO-QSP: dynamic text: "Good morning, <<$pcs_firstname>>. I hope you slept well?"
  scene.text(`"Good morning, ${((s as any).pcs_firstname ?? '')}. I hope you slept well?"`);
  scene.text('You nod. "I did, thank you."');
  scene.text('"Are you hungry? I can have Milena make some breakfast for you."');
  scene.text('You shake your head. "No thanks. I just wanted to chat with you if that\'s okay?"');
  scene.text('She takes a sip of her coffee and places the mug back down before motioning for you to sit down. "Of course."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a seat', goto: ['zoya_chat', 'breakfast_chat1'] },
  ]);
  scene.build();
}

function enterPoolChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
  scene.text('You take a seat at the edge of the pool and Zoya looks over at you.');
  scene.text('"I normally have a rule against being disturbed when I\'m sunbathing, but I can make an exception for you."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"Sorry!" you reply. "I\'ll just leave you be."');
    scene.text('You stand back up and prepare to head back indoors as Zoya lies back on the floatie.');
    scene.actions([
      { label: 'Leave her be', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    { label: 'Start chatting', goto: ['zoya_chat', 'pool_chat1'] },
  ]);
  scene.build();
}

function enterLoungeChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
  scene.text('You approach Zoya and she looks up from her paperwork.');
  // TODO-QSP: dynamic text: "Good evening, <<$pcs_firstname>>. Please take a seat."
  scene.text(`"Good evening, ${((s as any).pcs_firstname ?? '')}. Please take a seat."`);
  scene.text('You thank her and sit on the sofa next to her.');
  scene.text('"How can I help you?" she asks as she takes a sip of her wine and places the glass down.');
  scene.text('"I just wanted to chat with you if that\'s okay?" you politely ask.');
  scene.text('She nods. "Of course."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a seat', goto: ['zoya_chat', 'lounge_chat1'] },
  ]);
  scene.build();
}

function enterBreakfastChat1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
  scene.text('You decide what you want to talk about as Zoya continues eating her breakfast.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I should get going," you say as you stand up from the table. "It was nice chatting with you!"');
    // TODO-QSP: dynamic text: "The pleaure was mine, <<$pcs_firstname>>," she smiles. "Feel free to stop and c...
    scene.text(`"The pleaure was mine, ${((st as any).pcs_firstname ?? '')}," she smiles. "Feel free to stop and chat whenever you wish."`);
    scene.text('You smile and nod before walking away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    { label: 'Make small talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You make small talk with Zoya, chatting with her about various topics.');
    scene.actions([
      { label: 'Keep talking', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Stop talking', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    { label: 'Talk about her work', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What\'s it like working at the hospital?" you ask. "Albina said you work as a psychiatrist?"');
    scene.text('She lights up at your question. "I love it! Ever since I was a teenager, I wanted to help people with mental health struggles. It\'s a very neglected form of healthcare, so I do what I can to ensure that my patients get the help they need."');
    scene.actions([
      { label: 'What made you want to do it?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What made you decide to become a psychiatrist, if you don\'t mind me asking?"');
    scene.text('"My grandparents died before I was born and I was raised by my mother and father alone. Despite that, it was a happy and loving life until my mother was killed in a car accident when I was 16."');
    scene.text('A look of sadness washes over her as she sighs. "My father never got over his grief and fell into depression fuelled alcoholism. He drank himself to death shortly after my 18th birthday."');
    scene.text('She quickly wipes away the tear in her eye. "For a while, I blamed myself for not being able to help him, not that I even could have at the time. That\'s when I decided to become someone who actually <i>could</i>, so I moved here to study at the university. That\'s when my life took the turns that brought me here today."');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I didn\'t mean to bring those memories back up," you say, feeling very guilty.');
    scene.text('She smiles. "Don\'t be. As tragic as it was, my father\'s death inspired me to become who I am today. I know that I\'m making him proud by helping others who are in the same situation as he was, giving them the much needed help he never received."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
    ]);
  } },
      { label: 'You\'re not from here?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('Something she said caught your attention. "You moved here? So you\'re not from here?"');
    scene.text('"Oh, no. I was born and raised on the outskirts of Kursk. I was always told that both of my grandfathers took part in the big battle that happened there during the Patriotic War."');
    scene.text('"Would you ever move back home?" you ask.');
    scene.text('"I\'ve thought about it, but I\'ve made a life for myself here and it would be unfair to move Albina away when she has friends here and is so close to making it into the university."');
    scene.actions([
      { label: 'Change the subject', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You stand up from the table. "It was nice chatting with you, but I should get going."');
    // TODO-QSP: dynamic text: "The pleaure was mine, <<$pcs_firstname>>," she smiles. "Feel free to stop and c...
    scene.text(`"The pleaure was mine, ${((st as any).pcs_firstname ?? '')}," she smiles. "Feel free to stop and chat whenever you wish."`);
    scene.text('You smile and nod before walking away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Ask for career advice', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What advice would you give to someone who was looking for a job like yours?" you ask politely.');
    scene.text('"You want to be like Albina and study nursing at the university?" she smiles.');
    scene.text('"I\'m thinking about it," you reply.');
    scene.text('"Then you should take your studies seriously," she states. "Lives will be in your hands, so you must know <i>exactly</i> what to do and <i>when</i>. A hospital is no place to slack off or second guess yourself."');
    scene.actions([
      { label: 'Talk about Albina going to university', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"You must be proud of Albina wanting to follow in your footsteps," you say with a small smile.');
    scene.text('Zoya beams with pride. "I am. I know she likes to put up a tough exterior, but it turns out she has a real passion for wanting to help children, so I\'ll make sure she gets a top spot working at the hospital\'s pediatric unit when she completes her studies."');
    scene.text('She smiles at you. "If you\'re as serious about being a nurse as Albina is, then I can try and put in a word for you as well, but only if you dedicate the time and effort to completing your studies."');
    scene.text('"Really?" you beam. "That would be amazing! I promise I won\'t let you down!"');
    scene.text('She smiles and the two of you discuss what it\'s like working at the hospital.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      { label: 'Talk about Albina working with children', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I know what you mean about her putting on a tough girl face," you reply. "I didn\'t expect her to be so passionate about working with children, though."');
    scene.text('Oh? And why is that?" Zoya asks.');
    scene.text('"No offense, but from our conversations and what I\'ve seen and heard, Albina doesn\'t strike me as the type of person who seems interested in children."');
    scene.text('Zoya smiles. "She\'s young. Just because her mother insticts haven\'t kicked in yet doesn\'t mean she can\'t help them. Being a pediatric nurse isn\'t just about giving children their medicine. It\'s also about helping them feel safe in a scary place like a hospital. Working with them might help her nurture those insticts."');
    scene.text('You nod and the two of you discuss what it\'s like working at the hospital.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about Boris', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Uhhm… Is it okay if I ask about… Albina\'s father?" you meekly ask.');
    scene.text('She falters a little, almost spilling her coffee. "That depends on what you want to know. He wasn\'t a nice person, so I don\'t have many, if any, nice things to say about him."');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Sorry! I didn\'t mean to bring up bad memories!" you reply as you feel yourself blushing in embarrassment at your stupid question.');
    scene.text('"We can just change the subject," she says, but you think she\'s hiding her true reaction behind her mug as she takes another sip of coffee.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
    ]);
  } },
      { label: 'How did you meet?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"How did the two of you meet?" you ask.');
    scene.text('She sighs. "I was young and stupid. I don\'t know if Albina has told you this, but I paid for my university studies by posing as an erotic model for the Aphrodite studio."');
    scene.text('She stops to sigh again before she continues. "It was incredibly demeaning, but it paid well and was better than being a stripper. Anyway, Boris visited the studio one day, apparently just to see me. He had seen my photos and \'fell in love with my body\' as he put it."');
    scene.text('She takes a deep breath. "He took me out for a fancy dinner and we hit it off. \'Sex on the first date\' kind of hitting it off," she says, a small smile creeping onto her lips. "We started dating soon after and I loved bragging to my friends about my rich boyfriend, even if he was a few years my senior, because it meant I didn\'t have to work that demeaning job anymore. He asked me to marry him a few months later and, being the stupid fool I was, I accepted on the promise that he pay for my studies."');
    scene.text('"I should have seen it sooner, but I was desperate to achieve my dream of becoming a psychiatrist and I saw Boris\' money as a golden ticket. Instead, I was paraded around as his 21 year old trophy wife for all of his friends to gawk and leer at whenever they wanted. I eventually escaped that life, but it meant being forced to leave my beautiful little girl behind…"');
    scene.text('The mood turns rather somber as she takes another sip of her coffee.');
    scene.actions([
      { label: 'Talk about Albina', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina was really excited when she told me you were coming back. It\'s the happiest I\'ve ever seen her, in fact," you smile.');
    scene.text('"She\'s my pride and joy, probably the best thing that\'s ever happened to me, but I wish she had been born to a better father, one that actually cared about her being his child."');
    scene.text('"She mentioned something about her father being… abusive…" you whisper.');
    scene.text('She nods. "It\'s a touchy subject for her, so I\'ll discuss it with her only when she\'s ready to do so. You should do the same."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the table. "I\'ll just leave you be…"');
    scene.text('She silently nods and takes a sip of coffee as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
      { label: 'What was he like?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What… What was he like?" you ask.');
    scene.text('She snorts. "A prick. And a cheating, abusive prick at that. What he done to me was bad enough, but the way he treated Albina simply because he didn\'t want her as his child? That was when he showed his true colors."');
    scene.text('"Albina mentioned something about him being… abusive…" you whisper.');
    scene.text('She nods. "It\'s a very touchy subject for her, but it\'s one I\'ll discuss with her only when she\'s ready to do so. You should do the same."');
    scene.actions([
      { label: 'He cheated on you?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"He cheated on you?" you ask. "But you\'re one of the prettiest people I\'ve ever seen! I can only imagine how you looked when you were younger."');
    // TODO-QSP: dynamic text: She smiles at your compliment. "Thank you <<$pcs_firstname>>, but sadly having a...
    scene.text(`She smiles at your compliment. "Thank you ${((st as any).pcs_firstname ?? '')}, but sadly having a trophy wife wasn't good enough for him. He would regularly seduce other young women for sex and even hire escorts, and he was just as abusive to them as he was towards to me."`);
    scene.text('"He was violent?" you ask, a flash of concern appearing on your face.');
    scene.text('"Not to me at least," she says solemnly. "I can\'t speak for the other women in his life, but while he was very much verbally abusive, he never laid a finger on me. Maybe because I was his \'prized good\' so to speak? God, I can only hope the same can be said for Albina…"');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the table. "I\'ll just leave you be…"');
    scene.text('She silently nods and takes a sip of coffee as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
      { label: 'Is that why you left?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Was it him acting the way he did that made you decide to leave him?" you ask.');
    scene.text('Her look turns serious. "… Yes… But he made me choose between my future career… and Albina. Leaving my daughter in his clutches is something that I\'ll never forgive myself for doing. Even if I did make a life for myself and was eventually able to reunite with her, I\'ll take the shame of what I done to get here to my grave."');
    scene.text('The mood turns rather somber as she takes another sip of her coffee.');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the table. "I\'ll just leave you be…"');
    scene.text('She silently nods and takes a sip of coffee as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
      { label: 'Talk about Albina', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina mentioned how he… took his frustration about you… out on her…" you meekly state.');
    scene.text('She snorts. "He done that well before I left. He had nothing but disdain for her the moment she was born. Even being at the hospital for her birth was something he only done to keep up appearances."');
    scene.text('"Still. He treated quite badly over the years, and not just verbally…" you whisper.');
    scene.text('"I\'m well aware of what Boris put her through in my absence," she states, her voice quivering slightly. "I hate that I wasn\'t here to protect her from him, but, like I said, it\'s not something that Albina is comfortable with discussing yet. That kind of trauma is hard to overcome, but I know my daughter, and she <i>will</i>be strong enough to face it when she\'s ready."');
    scene.text('The mood turns rather somber as she takes another sip of her coffee.');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the table. "I\'ll just leave you be…"');
    scene.text('She silently nods and takes a sip of coffee as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about her being a model', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina said you used to work as a model?" you ask.');
    scene.text('"I did, for a while," she replies. "Only to pay for my university studies, though. I never intended to make a career out of it. Why? Are you interested in such a career?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Yes," you reply. "Modelling is something that has always interested me."');
    scene.text('"I don\'t doubt that you have what it takes, just be careful if you do go through with it," she says. "The modelling industry is infamous for taking advantage of the girls who work for them."');
    if (((st as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.text('Unsure how she would react, you decide to leave out the fact that you already are a model.');
    }
    scene.actions([
      { label: 'Ask what kind of modelling she done', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What kind of modelling did you do, if you don\'t mind me asking?"');
    scene.text('"Like I said, I never intended for it be my career, but… I was a rather exceptional erotic model. The best of the best at the studio during the time, in fact."');
    scene.text('"Oh wow! I can only imagine all of the attention that brought you!"');
    scene.text('She laughs. "Not of all it good, I assure you! I had many a sleazy photographer who tried getting me to sleep with them just because they photographed my vagina. Those are the ones you should ignore. They have no respect for their models and thus no respect for the art they claim to be creating."');
    scene.text('You nod and smile. It\'s nice to see this chatty side of Zoya.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      { label: 'Compliment her appearance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can see why you chose to be a model," you state. "You\'re one of the most beautiful looking women I\'ve ever seen."');
    // TODO-QSP: dynamic text: She smiles at your compliment, and you think she even blushes a little. "You''re...
    scene.text(`She smiles at your compliment, and you think she even blushes a little. "You're too kind ${((st as any).pcs_firstname ?? '')}, but I can assure you that I'm well past my modelling years. I'll be 40 before I know it!"`);
    scene.text('"Maybe," you reply. "But any man would be lucky to be dating a woman like you, never mind call you his wife!"');
    scene.text('She just smiles at you again, and you wonder if it\'s because your compliments are making her feel young again.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    if (((st as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.text('Unsure how she would react, you decide not to tell her that you actually are a model.');
    }
    scene.text('"Oh, no. I was just curious was all," you reply. "I could never imagine myself being a model."');
    scene.text('"It\'s certainly not a career for everyone," she says. "The only reason I got out of the industry was because of… Ahem. Boris."');
    scene.text('"Would you have ever gone back to modelling if your doctor career never worked out?" you ask.');
    scene.text('"No," she firmly states. "I never wanted to be that kind of model to begin with. Even though it turned out to be a case of very bad judgement on my part, marrying Boris was the perfect excuse for leaving and never looking back."');
    scene.actions([
      { label: 'Ask what kind of modelling she done', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What kind of modelling did you do, if you don\'t mind me asking?"');
    scene.text('"Like I said, I never intended for it be my career, but… I was a rather exceptional erotic model. The best of the best at the studio during the time, in fact."');
    scene.text('"Oh wow! I can only imagine all of the attention that brought you!"');
    scene.text('She laughs. "Not of all it good, I assure you! I had many a sleazy photographer who tried getting me to sleep with them just because they photographed my vagina. Those are the ones you should ignore. They have no respect for their models and thus no respect for the art they claim to be creating."');
    scene.text('You nod and smile. It\'s nice to see this chatty side of Zoya.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      { label: 'Compliment her appearance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can see why you chose to be a model," you state. "You\'re one of the most beautiful looking women I\'ve ever seen."');
    // TODO-QSP: dynamic text: She smiles at your compliment, and you think she even blushes a little. "You''re...
    scene.text(`She smiles at your compliment, and you think she even blushes a little. "You're too kind ${((st as any).pcs_firstname ?? '')}, but I can assure you that I'm well past my modelling years. I'll be 40 before I know it!"`);
    scene.text('"Maybe," you reply. "But any man would be lucky to be dating a woman like you, never mind call you his wife!"');
    scene.text('She just smiles at you again, and you wonder if it\'s because your compliments are making her feel young again.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about Albina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Do you mind if we talk about Albina?" you ask.');
    scene.text('"That depends on what you want to know," she sternly replies.');
    scene.actions([
      { label: 'What was she like when she was younger?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What was she was she like when she was younger?" you ask.');
    scene.text('Zoya smiles, as if recounting a happy memory. "A very happy little girl who had her sights set on becoming the best dancer the world had ever seen, but she lost that innocence when I left."');
    scene.text('You nod. "She definitely had a bit of a mean streak at school when we were growing up!"');
    scene.text('"She still does," Zoya replies. "But she\'s a lot happier now than when I first returned, and I think she has you to thank for that. Being there for her as <i>more</i> than just her best friend, showing her that she\'s not alone anymore… You really have helped her get out of that dark place she was trapped in all these years."');
    if (((st as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('Your heart skips a beat. Does she know that you and Albina have been fooling around with each other?');
    }
    scene.text('"Oh I don\'t know about that…" you reply as you feel yourself blushing. "I might have been here for her, but I think most of the credit goes to you. You\'re her beloved Mama after all!"');
    scene.text('"I do wonder what she would have been like if I were there to… Better influence her when she was growing up," Zoya says with a hint of remorse. "But that\'s not a story worth telling."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      { label: 'Do you worry about her?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    // TODO-QSP: dynamic text: "My <<$npc_nickname[''A29'']>> is always nagging at me about being safe and doin...
    scene.text(`"My ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} is always nagging at me about being safe and doing something with my life. Do you ever worry about Albina and what choices she makes?"`);
    scene.text('"All the time," she replies. "It\'s why I\'m happy that she\'s going to the university so she can eventually get herself a good job and make a better life for herself away from the bad influences she\'s been exposed to here. I don\'t want her getting pregnant and having to put her life on hold to raise a baby."');
    scene.actions([
      { label: 'Like you did?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Like you had to do?" you ask.');
    scene.text('She glares at you. "When you put it so bluntly, yes. Children might be in her future, but <i>not</i> before she makes a career for herself first."');
    scene.text('You can see the tension on her face as she tries to mask her feelings.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      { label: 'She doesn\'t seem like the mother type', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"No offense, but from what I know, she very much isn\'t interested in having children," you reply. "She\'s always practicing safe sex."');
    scene.text('"Not safe enough. The birth control shot she\'s on might protect her from getting pregnant, but it won\'t stop STIs!" she sighs. "I wish she would use the condoms I give her. I\'m worried that she might be allergic to the latex, but is too embarrassed to tell me."');
    scene.text('She then turns to you. "I hope you\'re practicing safe sex as well, young lady? You can never be too careful with these things."');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1  ||  ((st as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.actions([
        { label: 'I\'m still a virgin', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You feel yourself blushing. "Oh. Uhhh… I\'m… I\'m still a virgin…"');
    // TODO-QSP: dynamic text: "Oh. Oh, I''m sorry for putting you on the spot like that, <<$pcs_firstname>>!" ...
    scene.text(`"Oh. Oh, I'm sorry for putting you on the spot like that, ${((st as any).pcs_firstname ?? '')}!" she replies. "My advice in that case would be to make sure you're using both condoms <i>and</i> birth control once you're active."`);
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I use condoms and birth control', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I use both," you reply. "You can never be too safe when it comes to this kind of thing."');
    scene.text('She smiles and nods. "I\'m glad you see it that way. I just wish that Albina did too. Pregnancy is one thing, but catching an STI would be even worse."');
    scene.text('"She seems pretty set against using condoms," you shrug. "I don\'t even think the risk of an STI would convince her to even consider it."');
    scene.text('"That\'s what I\'m worried about," she sighs. "She\'s too damn stubborn for her own good, maybe a little too much like me when I was that age."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
        { label: 'I use birth control, but not condoms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I\'m in the same boat as Albina," you reply. "I\'m on birth control, but I don\'t use condoms."');
    scene.text('She shakes her head. "You should be using both. Like I said, birth control won\'t stop you from being infected with an STI. Get yourself a pack or two of condoms next time you\'re topping up your birth control."');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
        { label: 'I use condoms, not birth control', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I use condoms, but not birth control," you reply.');
    scene.text('She shakes her head. "You should be using both. Condoms aren\'t 100% effective and all it takes is a single sperm from a broken condom. Pick up some pills next time you\'re topping up your condoms."');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
        { label: 'I don\'t use protection', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I, uhh… I don\'t use protection," you sheepishly reply. "I just rely on the pullout method."');
    // TODO-QSP: dynamic text: "The pull-" she gasps. "<<$pcs_firstname>>! He doesn''t have to ''finish'' insid...
    scene.text(`"The pull-" she gasps. "${((st as any).pcs_firstname ?? '')}! He doesn't have to 'finish' inside you for his sperm to get into your vagina! Not to mention the risk of catching an STI!"`);
    scene.text('She shakes her head. "You can\'t be so reckless when it comes to pregnancy, especially at your age. Get yourself down to the pharmacy and buy some condoms and birth control pills!"');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'She\'s a smart girl', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"She\'s a smart girl," you reply. "A lot smarter than she lets on, actually. I can\'t imagine her doing something stupid like that and disappointing you."');
    scene.text('She\'s smart, but very much stubborn," she replies. "It\'s good that she sticks to her own opinions, but I worry that her stubborn nature will cause her harm some day."');
    scene.actions([
      { label: 'I can watch out for her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can watch out for her for you," you reply. "She does listen to me… Sometimes."');
    // TODO-QSP: dynamic text: She smiles. "I appreciate that, <<$pcs_firstname>>, but I don''t want her to fee...
    scene.text('She smiles. "I appreciate that, ' + ((st as any).pcs_firstname ?? '') + ', but I don\'t want her to feel like she\'s being manipulated, so don\'t overstep your bounds as her friend. \' + iif(npc_had_sex[\'A23\'], \'Or whatever your relationship with her might be.\', \') + \'"');
    if (((st as any).npc_had_sex ?? 0)?.['A23']) {
      scene.actions([
        { label: 'My relationship with her?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"My… Relationship with her?" you ask.');
    scene.text('Does she know that you and Albina have been fooling around?');
    scene.text('"Oh, pardon me. It\'s just that I\'ve seen the way Albina looks at you. Along with how excited she gets when she talks about you, I think you might view each other as… more than friends?"');
    scene.text('You can feel your heart racing as you try to come up with an answer. "Oh. Uhh…"');
    scene.text('"Almost like you consider yourselves… Sisters?" she states.');
    scene.text('"Oh. Yeah… I guess you could say that…"');
    scene.text('You think that she knows just <i>how</i> close you and Albina actually are, but is being polite and not embarrassing you by bringing it up directly.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I\'ll be careful', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I\'m not saying I would manipulate her," you say. "Just… Make sure she doesn\'t stray <i>too far</i> from the path she wants to go down."');
    scene.text('"That\'s all we can do, isn\'t it?" she sighs. "I\'m confident she can find her own way in life without needing us to guide her, though."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Were you excited to be a mother?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Were you excited when you found out you were pregnant with her?" you ask.');
    scene.text('"Not at first, no," she replies. "I was 21 and thought I would have years of university studying ahead of me at the time. Don\'t get wrong, I planned on having children eventually, but only once I had a career in place and was ready to settle down."');
    scene.text('She smiles. "In the end, Albina was a bundle of joy that I never knew I needed. Being a young mother, I was always scared that I would screw it up or have to give her up for adoption, but to my surprise, I settled into motherhood quite easily, despite her largely absent father."');
    scene.actions([
      { label: 'Did you name her after someone?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Is Albina named after anyone in particular, if you don\'t mind me asking? I know a lot of first time parents like to name their children after someone special."');
    scene.text('She smiles. "She is indeed. When I first saw her in my arms when she was born, I saw my mother\'s eyes looking right back at me. Of course, Boris didn\'t even remotely care, so I named her after my mother right there on the spot."');
    scene.text('"That\'s… That\'s actually quite adorable!" you reply. "Does Albina know that?"');
    scene.text('"Not as far as I\'m aware," she replies. "I\'ve never told her and I know that Boris sure as hell didn\'t!"');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
      { label: 'Do you want grandchildren?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Do you want to have grandchildren?" you ask.');
    // TODO-QSP: dynamic text: "I''m still a bit young for that, <<$pcs_firstname>>!" she laughs. "Yes, I would...
    scene.text(`"I'm still a bit young for that, ${((st as any).pcs_firstname ?? '')}!" she laughs. "Yes, I would, but like I said, I want Albina to live her life first and get a good job before she has children. I don't want her being tied down with a child at such a young age."`);
    scene.text('"I know she doesn\'t feel like it yet, but I think Albina would make an amazing mother," you reply.');
    scene.text('"That may be so, but I\'m not going to force her into it, especially if she\'s not with a man who would make a suitable father. My grandchild will <i>not</i> have someone like Boris as their father."');
    scene.text('You can see the tension on her face as she tries to mask her feelings.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'breakfast_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPoolChat1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I should get going," you say as you stand up from the edge of the pool. "It was nice chatting with you!"');
    // TODO-QSP: dynamic text: "The pleaure was mine, <<$pcs_firstname>>," she smiles. "Feel free to stop and c...
    scene.text(`"The pleaure was mine, ${((st as any).pcs_firstname ?? '')}," she smiles. "Feel free to stop and chat whenever you wish."`);
    scene.text('You smile and nod before walking away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    { label: 'Make small talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You make small talk with Zoya, chatting with her about various topics.');
    scene.actions([
      { label: 'Keep talking', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Stop talking', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    { label: 'Talk about her work', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What\'s it like working at the hospital?" you ask. "Albina said you work as a psychiatrist?"');
    scene.text('She lights up at your question. "I love it! Ever since I was a teenager, I wanted to help people with mental health struggles. It\'s a very neglected form of healthcare, so I do what I can to ensure that my patients get the help they need."');
    scene.actions([
      { label: 'What made you want to do it?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What made you decide to become a psychiatrist, if you don\'t mind me asking?"');
    scene.text('"My grandparents died before I was born and I was raised by my mother and father alone. Despite that, it was a happy and loving life until my mother was killed in a car accident when I was 16."');
    scene.text('A look of sadness washes over her as she sighs. "My father never got over his grief and fell into depression fuelled alcoholism. He drank himself to death shortly after my 18th birthday."');
    scene.text('She quickly wipes away the tear in her eye. "For a while, I blamed myself for not being able to help him, not that I even could have at the time. That\'s when I decided to become someone who actually <i>could</i>, so I moved here to study at the university. That\'s when my life took the turns that brought me here today."');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I didn\'t mean to bring those memories back up," you say, feeling very guilty.');
    scene.text('She smiles. "Don\'t be. As tragic as it was, my father\'s death inspired me to become who I am today. I know that I\'m making him proud by helping others who are in the same situation as he was, giving them the much needed help he never received."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
    ]);
  } },
      { label: 'You\'re not from here?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('Something she said caught your attention. "You moved here? So you\'re not from here?"');
    scene.text('"Oh, no. I was born and raised on the outskirts of Kursk. I was always told that both of my grandfathers took part in the big battle that happened there during the Patriotic War."');
    scene.text('"Would you ever move back home?" you ask.');
    scene.text('"I\'ve thought about it, but I\'ve made a life for myself here and it would be unfair to move Albina away when she has friends here and is so close to making it into the university."');
    scene.actions([
      { label: 'Change the subject', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You stand up from the edge of the pool. "It was nice chatting with you, but I should get going."');
    // TODO-QSP: dynamic text: "The pleaure was mine, <<$pcs_firstname>>," she smiles. "Feel free to stop and c...
    scene.text(`"The pleaure was mine, ${((st as any).pcs_firstname ?? '')}," she smiles. "Feel free to stop and chat whenever you wish."`);
    scene.text('You smile and nod before walking away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Ask for career advice', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What advice would you give to someone who was looking for a job like yours?" you ask politely.');
    scene.text('"You want to be like Albina and study nursing at the university?" she smiles.');
    scene.text('"I\'m thinking about it," you reply.');
    scene.text('"Then you should take your studies seriously," she states. "Lives will be in your hands, so you must know <i>exactly</i> what to do and <i>when</i>. A hospital is no place to slack off or second guess yourself."');
    scene.actions([
      { label: 'Talk about Albina going to university', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"You must be proud of Albina wanting to follow in your footsteps," you say with a small smile.');
    scene.text('Zoya beams with pride. "I am. I know she likes to put up a tough exterior, but it turns out she has a real passion for wanting to help children, so I\'ll make sure she gets a top spot working at the hospital\'s pediatric unit when she completes her studies."');
    scene.text('She smiles at you. "If you\'re as serious about being a nurse as Albina is, then I can try and put in a word for you as well, but only if you dedicate the time and effort to completing your studies."');
    scene.text('"Really?" you beam. "That would be amazing! I promise I won\'t let you down!"');
    scene.text('She smiles and the two of you discuss what it\'s like working at the hospital.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      { label: 'Talk about Albina working with children', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I know what you mean about her putting on a tough girl face," you reply. "I didn\'t expect her to be so passionate about working with children, though."');
    scene.text('Oh? And why is that?" Zoya asks.');
    scene.text('"No offense, but from our conversations and what I\'ve seen and heard, Albina doesn\'t strike me as the type of person who seems interested in children."');
    scene.text('Zoya smiles. "She\'s young. Just because her mother insticts haven\'t kicked in yet doesn\'t mean she can\'t help them. Being a pediatric nurse isn\'t just about giving children their medicine. It\'s also about helping them feel safe in a scary place like a hospital. Working with them might help her nurture those insticts."');
    scene.text('You nod and the two of you discuss what it\'s like working at the hospital.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about Boris', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Uhhm… Is it okay if I ask about… Albina\'s father?" you meekly ask.');
    scene.text('She falters a little. "That depends on what you want to know. He wasn\'t a nice person, so I don\'t have many, if any, nice things to say about him."');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Sorry! I didn\'t mean to bring up bad memories!" you reply as you feel yourself blushing in embarrassment at your stupid question.');
    scene.text('"We can just change the subject," she says, but you think she\'s hiding her true reaction behind her poker face.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
    ]);
  } },
      { label: 'How did you meet?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"How did the two of you meet?" you ask.');
    scene.text('She sighs. "I was young and stupid. I don\'t know if Albina has told you this, but I paid for my university studies by posing as an erotic model for the Aphrodite studio."');
    scene.text('She stops to sigh again before she continues. "It was incredibly demeaning, but it paid well and was better than being a stripper. Anyway, Boris visited the studio one day, apparently just to see me. He had seen my photos and \'fell in love with my body\' as he put it."');
    scene.text('She takes a deep breath. "He took me out for a fancy dinner and we hit it off. \'Sex on the first date\' kind of hitting it off," she says, a small smile creeping onto her lips. "We started dating soon after and I loved bragging to my friends about my rich boyfriend, even if he was a few years my senior, because it meant I didn\'t have to work that demeaning job anymore. He asked me to marry him a few months later and, being the stupid fool I was, I accepted on the promise that he pay for my studies."');
    scene.text('"I should have seen it sooner, but I was desperate to achieve my dream of becoming a psychiatrist and I saw Boris\' money as a golden ticket. Instead, I was paraded around as his 21 year old trophy wife for all of his friends to gawk and leer at whenever they wanted. I eventually escaped that life, but it meant being forced to leave my beautiful little girl behind…"');
    scene.text('The mood turns rather somber as she seemingly takes a minute to compose herself.');
    scene.actions([
      { label: 'Talk about Albina', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina was really excited when she told me you were coming back. It\'s the happiest I\'ve ever seen her, in fact," you smile.');
    scene.text('"She\'s my pride and joy, probably the best thing that\'s ever happened to me, but I wish she had been born to a better father, one that actually cared about her being his child."');
    scene.text('"She mentioned something about her father being… abusive…" you whisper.');
    scene.text('She nods. "It\'s a touchy subject for her, so I\'ll discuss it with her only when she\'s ready to do so. You should do the same."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the edge of the pool. "I\'ll just leave you be…"');
    scene.text('She silently nods and re-adjusts herself on the floatie as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
      { label: 'What was he like?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What… What was he like?" you ask.');
    scene.text('She snorts. "A prick. And a cheating, abusive prick at that. What he done to me was bad enough, but the way he treated Albina simply because he didn\'t want her as his child? That was when he showed his true colors."');
    scene.text('"Albina mentioned something about him being… abusive…" you whisper.');
    scene.text('She nods. "It\'s a very touchy subject for her, but it\'s one I\'ll discuss with her only when she\'s ready to do so. You should do the same."');
    scene.actions([
      { label: 'He cheated on you?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"He cheated on you?" you ask. "But you\'re one of the prettiest people I\'ve ever seen! I can only imagine how you looked when you were younger."');
    // TODO-QSP: dynamic text: She smiles at your compliment. "Thank you <<$pcs_firstname>>, but sadly having a...
    scene.text(`She smiles at your compliment. "Thank you ${((st as any).pcs_firstname ?? '')}, but sadly having a trophy wife wasn't good enough for him. He would regularly seduce other young women for sex and even hire escorts, and he was just as abusive to them as he was towards to me."`);
    scene.text('"He was violent?" you ask, a flash of concern appearing on your face.');
    scene.text('"Not to me at least," she says solemnly. "I can\'t speak for the other women in his life, but while he was very much verbally abusive, he never laid a finger on me. Maybe because I was his \'prized good\' so to speak? God, I can only hope the same can be said for Albina…"');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the edge of the pool. "I\'ll just leave you be…"');
    scene.text('She silently nods and re-adjusts herself on the floatie as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
      { label: 'Is that why you left?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Was it him acting the way he did that made you decide to leave him?" you ask.');
    scene.text('Her look turns serious. "… Yes… But he made me choose between my future career… and Albina. Leaving my daughter in his clutches is something that I\'ll never forgive myself for doing. Even if I did make a life for myself and was eventually able to reunite with her, I\'ll take the shame of what I done to get here to my grave."');
    scene.text('The mood turns rather somber as she seemingly takes a minute to compose herself.');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the edge of the pool. "I\'ll just leave you be…"');
    scene.text('She silently nods and re-adjusts herself on the floatie as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
      { label: 'Talk about Albina', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina mentioned how he… took his frustration about you… out on her…" you meekly state.');
    scene.text('She snorts. "He done that well before I left. He had nothing but disdain for her the moment she was born. Even being at the hospital for her birth was something he only done to keep up appearances."');
    scene.text('"Still. He treated quite badly over the years, and not just verbally…" you whisper.');
    scene.text('"I\'m well aware of what Boris put her through in my absence," she states, her voice quivering slightly. "I hate that I wasn\'t here to protect her from him, but, like I said, it\'s not something that Albina is comfortable with discussing yet. That kind of trauma is hard to overcome, but I know my daughter, and she <i>will</i>be strong enough to face it when she\'s ready."');
    scene.text('The mood turns rather somber as she seemingly takes a minute to compose herself.');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the edge of the pool. "I\'ll just leave you be…"');
    scene.text('She silently nods and re-adjusts herself on the floatie as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about her being a model', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina said you used to work as a model?" you ask.');
    scene.text('"I did, for a while," she replies. "Only to pay for my university studies, though. I never intended to make a career out of it. Why? Are you interested in such a career?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Yes," you reply. "Modelling is something that has always interested me."');
    scene.text('"I don\'t doubt that you have what it takes, just be careful if you do go through with it," she says. "The modelling industry is infamous for taking advantage of the girls who work for them."');
    if (((st as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.text('Unsure how she would react, you decide to leave out the fact that you already are a model.');
    }
    scene.actions([
      { label: 'Ask what kind of modelling she done', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What kind of modelling did you do, if you don\'t mind me asking?"');
    scene.text('"Like I said, I never intended for it be my career, but… I was a rather exceptional erotic model. The best of the best at the studio during the time, in fact."');
    scene.text('"Oh wow! I can only imagine all of the attention that brought you!"');
    scene.text('She laughs. "Not of all it good, I assure you! I had many a sleazy photographer who tried getting me to sleep with them just because they photographed my vagina. Those are the ones you should ignore. They have no respect for their models and thus no respect for the art they claim to be creating."');
    scene.text('You nod and smile. It\'s nice to see this chatty side of Zoya.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      { label: 'Compliment her appearance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can see why you chose to be a model," you state. "You\'re one of the most beautiful looking women I\'ve ever seen."');
    // TODO-QSP: dynamic text: She smiles at your compliment, and you think she even blushes a little. "You''re...
    scene.text(`She smiles at your compliment, and you think she even blushes a little. "You're too kind ${((st as any).pcs_firstname ?? '')}, but I can assure you that I'm well past my modelling years. I'll be 40 before I know it!"`);
    scene.text('"Any man would be lucky to be dating a woman like you, never mind call you his wife!" you reply. "If you don\'t mind me saying, your… Uhh… Your breasts are incredible!"');
    if (((st as any).AlbinaQW ?? 0)?.['check_out_zoya'] > 0) {
      // TODO-QSP: dynamic text: "I believe we''ve had this conversation about looking at my breasts before, <<$p...
      scene.text(`"I believe we've had this conversation about looking at my breasts before, ${((st as any).pcs_firstname ?? '')}…"`);
    } else {
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['check_out_zoya'] = ((st as any).AlbinaQW['check_out_zoya'] ?? 0) + (1);
      // TODO-QSP: dynamic text: "I appreciate your attempt at a compliment <<$pcs_firstname>>, but it''s rude to...
      scene.text(`"I appreciate your attempt at a compliment ${((st as any).pcs_firstname ?? '')}, but it's rude to look at a person's breasts like that, even if they are exposed."`);
    }
    scene.text('"Sorry!" you squeak. "I just wanted you to know that I think your breasts are… nice!"');
    scene.text('She can\'t help but smile at you. "Thanks to genetics, large breasts run in the family. My mother, my grandmother and even my great grandmother were all as well endowed as I am. Just don\'t let Albina know that. I know she\'s very insecure about her own breasts, especially compared to some of the other girls."');
    if (((st as any).tits ?? 0) >= 4) {
      scene.text('"I\'m aware," you reply. "I try not to make a big deal about it when I see her staring or asking questions, but I know she wants to have breasts that are as big as mine."');
    }
    scene.text('She sighs. "Why do girls these days have to make such a big deal about their breast size? I swear that pornography and social media have made the youth of today overly self-conscious about their bodies. It\'s disgusting."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    if (((st as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.text('Unsure how she would react, you decide not to tell her that you actually are a model.');
    }
    scene.text('"Oh, no. I was just curious was all," you reply. "I could never imagine myself being a model."');
    scene.text('"It\'s certainly not a career for everyone," she says. "The only reason I got out of the industry was because of… Ahem. Boris."');
    scene.text('"Would you have ever gone back to modelling if your doctor career never worked out?" you ask.');
    scene.text('"No," she firmly states. "I never wanted to be that kind of model to begin with. Even though it turned out to be a case of very bad judgement on my part, marrying Boris was the perfect excuse for leaving and never looking back."');
    scene.actions([
      { label: 'Ask what kind of modelling she done', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What kind of modelling did you do, if you don\'t mind me asking?"');
    scene.text('"Like I said, I never intended for it be my career, but… I was a rather exceptional erotic model. The best of the best at the studio during the time, in fact."');
    scene.text('"Oh wow! I can only imagine all of the attention that brought you!"');
    scene.text('She laughs. "Not of all it good, I assure you! I had many a sleazy photographer who tried getting me to sleep with them just because they photographed my vagina. Those are the ones you should ignore. They have no respect for their models and thus no respect for the art they claim to be creating."');
    scene.text('You nod and smile. It\'s nice to see this chatty side of Zoya.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      { label: 'Compliment her appearance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can see why you chose to be a model," you state. "You\'re one of the most beautiful looking women I\'ve ever seen."');
    // TODO-QSP: dynamic text: She smiles at your compliment, and you think she even blushes a little. "You''re...
    scene.text(`She smiles at your compliment, and you think she even blushes a little. "You're too kind ${((st as any).pcs_firstname ?? '')}, but I can assure you that I'm well past my modelling years. I'll be 40 before I know it!"`);
    scene.text('"Any man would be lucky to be dating a woman like you, never mind call you his wife!" you reply. "If you don\'t mind me saying, your… Uhh… Your breasts are incredible!"');
    if (((st as any).AlbinaQW ?? 0)?.['check_out_zoya'] > 0) {
      // TODO-QSP: dynamic text: "I believe we''ve had this conversation about looking at my breasts before, <<$p...
      scene.text(`"I believe we've had this conversation about looking at my breasts before, ${((st as any).pcs_firstname ?? '')}…"`);
    } else {
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['check_out_zoya'] = ((st as any).AlbinaQW['check_out_zoya'] ?? 0) + (1);
      // TODO-QSP: dynamic text: "I appreciate your attempt at a compliment <<$pcs_firstname>>, but it''s rude to...
      scene.text(`"I appreciate your attempt at a compliment ${((st as any).pcs_firstname ?? '')}, but it's rude to look at a person's breasts like that, even if they are exposed."`);
    }
    scene.text('"Sorry!" you squeak. "I just wanted you to know that I think your breasts are… nice!"');
    scene.text('She can\'t help but smile at you. "Thanks to genetics, large breasts run in the family. My mother, my grandmother and my great grandmother were all as well endowed as I am. Just don\'t let Albina know that. I know she\'s very insecure about her own breasts, especially compared to some of the other girls."');
    if (((st as any).tits ?? 0) >= 4) {
      scene.text('"I\'m aware," you reply. "I try not to make a big deal about it when I see her staring or asking questions, but I know she wants to have breasts that are as big as mine."');
    }
    scene.text('She sighs. "Why do girls these days have to make such a big deal about their breast size? I swear that pornography and social media have made the youth of today overly self-conscious about their bodies. It\'s disgusting."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about Albina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Do you mind if we talk about Albina?" you ask.');
    scene.text('"That depends on what you want to know," she sternly replies.');
    scene.actions([
      { label: 'What was she like when she was younger?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What was she was she like when she was younger?" you ask.');
    scene.text('Zoya smiles, as if recounting a happy memory. "A very happy little girl who had her sights set on becoming the best dancer the world had ever seen, but she lost that innocence when I left."');
    scene.text('You nod. "She definitely had a bit of a mean streak at school when we were growing up!"');
    scene.text('"She still does," Zoya replies. "But she\'s a lot happier now than when I first returned, and I think she has you to thank for that. Being there for her as <i>more</i> than just her best friend, showing her that she\'s not alone anymore… You really have helped her get out of that dark place she was trapped in all these years."');
    if (((st as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('Your heart skips a beat. Does she know that you and Albina have been fooling around with each other?');
    }
    scene.text('"Oh I don\'t know about that…" you reply as you feel yourself blushing. "I might have been here for her, but I think most of the credit goes to you. You\'re her beloved Mama after all!"');
    scene.text('"I do wonder what she would have been like if I were there to… Better influence her when she was growing up," Zoya says with a hint of remorse. "But that\'s not a story worth telling."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      { label: 'Do you worry about her?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    // TODO-QSP: dynamic text: "My <<$npc_nickname[''A29'']>> is always nagging at me about being safe and doin...
    scene.text(`"My ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} is always nagging at me about being safe and doing something with my life. Do you ever worry about Albina and what choices she makes?"`);
    scene.text('"All the time," she replies. "It\'s why I\'m happy that she\'s going to the university so she can eventually get herself a good job and make a better life for herself away from the bad influences she\'s been exposed to here. I don\'t want her getting pregnant and having to put her life on hold to raise a baby."');
    scene.actions([
      { label: 'Like you did?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Like you had to do?" you ask.');
    scene.text('She glares at you. "When you put it so bluntly, yes. Children might be in her future, but <i>not</i> before she makes a career for herself first."');
    scene.text('You can see the tension on her face as she tries to mask her feelings.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      { label: 'She doesn\'t seem like the mother type', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"No offense, but from what I know, she very much isn\'t interested in having children," you reply. "She\'s always practicing safe sex."');
    scene.text('"Not safe enough. The birth control shot she\'s on might protect her from getting pregnant, but it won\'t stop STIs!" she sighs. "I wish she would use the condoms I give her. I\'m worried that she might be allergic to the latex, but is too embarrassed to tell me."');
    scene.text('She then turns to you. "I hope you\'re practicing safe sex as well, young lady? You can never be too careful with these things."');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1  ||  ((st as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.actions([
        { label: 'I\'m still a virgin', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You feel yourself blushing. "Oh. Uhhh… I\'m… I\'m still a virgin…"');
    // TODO-QSP: dynamic text: "Oh. Oh, I''m sorry for putting you on the spot like that, <<$pcs_firstname>>!" ...
    scene.text(`"Oh. Oh, I'm sorry for putting you on the spot like that, ${((st as any).pcs_firstname ?? '')}!" she replies. "My advice in that case would be to make sure you're using both condoms <i>and</i> birth control once you're active."`);
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I use condoms and birth control', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I use both," you reply. "You can never be too safe when it comes to this kind of thing."');
    scene.text('She smiles and nods. "I\'m glad you see it that way. I just wish that Albina did too. Pregnancy is one thing, but catching an STI would be even worse."');
    scene.text('"She seems pretty set against using condoms," you shrug. "I don\'t even think the risk of an STI would convince her to even consider it."');
    scene.text('"That\'s what I\'m worried about," she sighs. "She\'s too damn stubborn for her own good, maybe a little too much like me when I was that age."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
        { label: 'I use birth control, but not condoms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I\'m in the same boat as Albina," you reply. "I\'m on birth control, but I don\'t use condoms."');
    scene.text('She shakes her head. "You should be using both. Like I said, birth control won\'t stop you from being infected with an STI. Get yourself a pack or two of condoms next time you\'re topping up your birth control."');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
        { label: 'I use condoms, not birth control', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I use condoms, but not birth control," you reply.');
    scene.text('She shakes her head. "You should be using both. Condoms aren\'t 100% effective and all it takes is a single sperm from a broken condom. Pick up some pills next time you\'re topping up your condoms."');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
        { label: 'I don\'t use protection', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I, uhh… I don\'t use protection," you sheepishly reply. "I just rely on the pullout method."');
    // TODO-QSP: dynamic text: "The pull-" she gasps. "<<$pcs_firstname>>! He doesn''t have to ''finish'' insid...
    scene.text(`"The pull-" she gasps. "${((st as any).pcs_firstname ?? '')}! He doesn't have to 'finish' inside you for his sperm to get into your vagina! Not to mention the risk of catching an STI!"`);
    scene.text('She shakes her head. "You can\'t be so reckless when it comes to pregnancy, especially at your age. Get yourself down to the pharmacy and buy some condoms and birth control pills!"');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'She\'s a smart girl', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"She\'s a smart girl," you reply. "A lot smarter than she lets on, actually. I can\'t imagine her doing something stupid like that and disappointing you."');
    scene.text('She\'s smart, but very much stubborn," she replies. "It\'s good that she sticks to her own opinions, but I worry that her stubborn nature will cause her harm some day."');
    scene.actions([
      { label: 'I can watch out for her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can watch out for her for you," you reply. "She does listen to me… Sometimes."');
    // TODO-QSP: dynamic text: She smiles.  "I appreciate that, <<$pcs_firstname>>, but I don''t want her to fe...
    scene.text('She smiles.  "I appreciate that, ' + ((st as any).pcs_firstname ?? '') + ', but I don\'t want her to feel like she\'s being manipulated, so don\'t overstep your bounds as her friend. \' + iif(npc_had_sex[\'A23\'], \'Or whatever your relationship with her might be.\', \') + \'"');
    if (((st as any).npc_had_sex ?? 0)?.['A23']) {
      scene.actions([
        { label: 'My relationship with her?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"My… Relationship with her?" you ask.');
    scene.text('Does she know that you and Albina have been fooling around?');
    scene.text('"Oh, pardon me. It\'s just that I\'ve seen the way Albina looks at you. Along with how excited she gets when she talks about you, I think you might view each other as… more than friends?"');
    scene.text('You can feel your heart racing as you try to come up with an answer. "Oh. Uhh…"');
    scene.text('"Almost like you consider yourselves… Sisters?" she states.');
    scene.text('"Oh. Yeah… I guess you could say that…"');
    scene.text('You think that she knows just <i>how</i> close you and Albina actually are, but is being polite and not embarrassing you by bringing it up directly.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I\'ll be careful', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I\'m not saying I would manipulate her," you say. "Just… Make sure she doesn\'t stray <i>too far</i> from the path she wants to go down."');
    scene.text('"That\'s all we can do, isn\'t it?" she sighs. "I\'m confident she can find her own way in life without needing us to guide her, though."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Were you excited to be a mother?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Were you excited when you found out you were pregnant with her?" you ask.');
    scene.text('"Not at first, no," she replies. "I was 21 and thought I would have years of university studying ahead of me at the time. Don\'t get wrong, I planned on having children eventually, but only once I had a career in place and was ready to settle down."');
    scene.text('She smiles. "In the end, Albina was a bundle of joy that I never knew I needed. Being a young mother, I was always scared that I would screw it up or have to give her up for adoption, but to my surprise, I settled into motherhood quite easily, despite her largely absent father."');
    scene.actions([
      { label: 'Did you name her after someone?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Is Albina named after anyone in particular, if you don\'t mind me asking? I know a lot of first time parents like to name their children after someone special."');
    scene.text('She smiles. "She is indeed. When I first saw her in my arms when she was born, I saw my mother\'s eyes looking right back at me. Of course, Boris didn\'t even remotely care, so I named her after my mother right there on the spot."');
    scene.text('"That\'s… That\'s actually quite adorable!" you reply. "Does Albina know that?"');
    scene.text('"Not as far as I\'m aware," she replies. "I\'ve never told her and I know that Boris sure as hell didn\'t!"');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
      { label: 'Do you want grandchildren?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Do you want to have grandchildren?" you ask.');
    // TODO-QSP: dynamic text: "I''m still a bit young for that, <<$pcs_firstname>>!" she laughs. "Yes, I would...
    scene.text(`"I'm still a bit young for that, ${((st as any).pcs_firstname ?? '')}!" she laughs. "Yes, I would, but like I said, I want Albina to live her life first and get a good job before she has children. I don't want her being tied down with a child at such a young age."`);
    scene.text('"I know she doesn\'t feel like it yet, but I think Albina would make an amazing mother," you reply.');
    scene.text('"That may be so, but I\'m not going to force her into it, especially if she\'s not with a man who would make a suitable father. My grandchild will <i>not</i> have someone like Boris as their father."');
    scene.text('You can see the tension on her face as she tries to mask her feelings.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'pool_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'pool_side'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLoungeChat1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
  scene.text('You decide what you want to talk about as Zoya takes another sip of her wine before placing the glass back down.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I should get going," you say as you stand up. "It was nice chatting with you!"');
    // TODO-QSP: dynamic text: "The pleaure was mine, <<$pcs_firstname>>," she smiles. "Feel free to stop and c...
    scene.text(`"The pleaure was mine, ${((st as any).pcs_firstname ?? '')}," she smiles. "Feel free to stop and chat whenever you wish."`);
    scene.text('You smile and nod before walking away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    { label: 'Make small talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You make small talk with Zoya, chatting with her about various topics.');
    scene.actions([
      { label: 'Keep talking', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Stop talking', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    { label: 'Talk about her work', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What\'s it like working at the hospital?" you ask. "Albina said you work as a psychiatrist?"');
    scene.text('She lights up at your question. "I love it! Ever since I was a teenager, I wanted to help people with mental health struggles. It\'s a very neglected form of healthcare, so I do what I can to ensure that my patients get the help they need."');
    scene.actions([
      { label: 'What made you want to do it?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What made you decide to become a psychiatrist, if you don\'t mind me asking?"');
    scene.text('"My grandparents died before I was born and I was raised by my mother and father alone. Despite that, it was a happy and loving life until my mother was killed in a car accident when I was 16."');
    scene.text('A look of sadness washes over her as she sighs. "My father never got over his grief and fell into depression fuelled alcoholism. He drank himself to death shortly after my 18th birthday."');
    scene.text('She quickly wipes away the tear in her eye. "For a while, I blamed myself for not being able to help him, not that I even could have at the time. That\'s when I decided to become someone who actually <i>could</i>, so I moved here to study at the university. That\'s when my life took the turns that brought me here today."');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I didn\'t mean to bring those memories back up," you say, feeling very guilty.');
    scene.text('She smiles. "Don\'t be. As tragic as it was, my father\'s death inspired me to become who I am today. I know that I\'m making him proud by helping others who are in the same situation as he was, giving them the much needed help he never received."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
    ]);
  } },
      { label: 'You\'re not from here?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('Something she said caught your attention. "You moved here? So you\'re not from here?"');
    scene.text('"Oh, no. I was born and raised on the outskirts of Kursk. I was always told that both of my grandfathers took part in the big battle that happened there during the Patriotic War."');
    scene.text('"Would you ever move back home?" you ask.');
    scene.text('"I\'ve thought about it, but I\'ve made a life for myself here and it would be unfair to move Albina away when she has friends here and is so close to making it into the university."');
    scene.actions([
      { label: 'Change the subject', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You stand up. "It was nice chatting with you, but I should get going."');
    // TODO-QSP: dynamic text: "The pleaure was mine, <<$pcs_firstname>>," she smiles. "Feel free to stop and c...
    scene.text(`"The pleaure was mine, ${((st as any).pcs_firstname ?? '')}," she smiles. "Feel free to stop and chat whenever you wish."`);
    scene.text('You smile and nod before walking away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Ask for career advice', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What advice would you give to someone who was looking for a job like yours?" you ask politely.');
    scene.text('"You want to be like Albina and study nursing at the university?" she smiles.');
    scene.text('"I\'m thinking about it," you reply.');
    scene.text('"Then you should take your studies seriously," she states. "Lives will be in your hands, so you must know <i>exactly</i> what to do and <i>when</i>. A hospital is no place to slack off or second guess yourself."');
    scene.actions([
      { label: 'Talk about Albina going to university', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"You must be proud of Albina wanting to follow in your footsteps," you say with a small smile.');
    scene.text('Zoya beams with pride. "I am. I know she likes to put up a tough exterior, but it turns out she has a real passion for wanting to help children, so I\'ll make sure she gets a top spot working at the hospital\'s pediatric unit when she completes her studies."');
    scene.text('She smiles at you. "If you\'re as serious about being a nurse as Albina is, then I can try and put in a word for you as well, but only if you dedicate the time and effort to completing your studies."');
    scene.text('"Really?" you beam. "That would be amazing! I promise I won\'t let you down!"');
    scene.text('She smiles and the two of you discuss what it\'s like working at the hospital.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      { label: 'Talk about Albina working with children', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I know what you mean about her putting on a tough girl face," you reply. "I didn\'t expect her to be so passionate about working with children, though."');
    scene.text('Oh? And why is that?" Zoya asks.');
    scene.text('"No offense, but from our conversations and what I\'ve seen and heard, Albina doesn\'t strike me as the type of person who seems interested in children."');
    scene.text('Zoya smiles. "She\'s young. Just because her mother insticts haven\'t kicked in yet doesn\'t mean she can\'t help them. Being a pediatric nurse isn\'t just about giving children their medicine. It\'s also about helping them feel safe in a scary place like a hospital. Working with them might help her nurture those insticts."');
    scene.text('You nod and the two of you discuss what it\'s like working at the hospital.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about Boris', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Uhhm… Is it okay if I ask about… Albina\'s father?" you meekly ask.');
    scene.text('She falters a little, almost spilling her wine. "That depends on what you want to know. He wasn\'t a nice person, so I don\'t have many, if any, nice things to say about him."');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Sorry! I didn\'t mean to bring up bad memories!" you reply as you feel yourself blushing in embarrassment at your stupid question.');
    scene.text('"We can just change the subject," she says, but you think she\'s hiding her true reaction behind her mug as she takes another sip of coffee.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
    ]);
  } },
      { label: 'How did you meet?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"How did the two of you meet?" you ask.');
    scene.text('She sighs. "I was young and stupid. I don\'t know if Albina has told you this, but I paid for my university studies by posing as an erotic model for the Aphrodite studio."');
    scene.text('She stops to sigh again before she continues. "It was incredibly demeaning, but it paid well and was better than being a stripper. Anyway, Boris visited the studio one day, apparently just to see me. He had seen my photos and \'fell in love with my body\' as he put it."');
    scene.text('She takes a deep breath. "He took me out for a fancy dinner and we hit it off. \'Sex on the first date\' kind of hitting it off," she says, a small smile creeping onto her lips. "We started dating soon after and I loved bragging to my friends about my rich boyfriend, even if he was a few years my senior, because it meant I didn\'t have to work that demeaning job anymore. He asked me to marry him a few months later and, being the stupid fool I was, I accepted on the promise that he pay for my studies."');
    scene.text('"I should have seen it sooner, but I was desperate to achieve my dream of becoming a psychiatrist and I saw Boris\' money as a golden ticket. Instead, I was paraded around as his 21 year old trophy wife for all of his friends to gawk and leer at whenever they wanted. I eventually escaped that life, but it meant being forced to leave my beautiful little girl behind…"');
    scene.text('The mood turns rather somber as she takes another sip of her wine.');
    scene.actions([
      { label: 'Talk about Albina', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina was really excited when she told me you were coming back. It\'s the happiest I\'ve ever seen her, in fact," you smile.');
    scene.text('"She\'s my pride and joy, probably the best thing that\'s ever happened to me, but I wish she had been born to a better father, one that actually cared about her being his child."');
    scene.text('"She mentioned something about her father being… abusive…" you whisper.');
    scene.text('She nods. "It\'s a touchy subject for her, so I\'ll discuss it with her only when she\'s ready to do so. You should do the same."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up. "I\'ll just leave you be…"');
    scene.text('She silently nods and takes a sip of wine as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
      { label: 'What was he like?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What… What was he like?" you ask.');
    scene.text('She snorts. "A prick. And a cheating, abusive prick at that. What he done to me was bad enough, but the way he treated Albina simply because he didn\'t want her as his child? That was when he showed his true colors."');
    scene.text('"Albina mentioned something about him being… abusive…" you whisper.');
    scene.text('She nods. "It\'s a very touchy subject for her, but it\'s one I\'ll discuss with her only when she\'s ready to do so. You should do the same."');
    scene.actions([
      { label: 'He cheated on you?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"He cheated on you?" you ask. "But you\'re one of the prettiest people I\'ve ever seen! I can only imagine how you looked when you were younger."');
    // TODO-QSP: dynamic text: She smiles at your compliment. "Thank you <<$pcs_firstname>>, but sadly having a...
    scene.text(`She smiles at your compliment. "Thank you ${((st as any).pcs_firstname ?? '')}, but sadly having a trophy wife wasn't good enough for him. He would regularly seduce other young women for sex and even hire escorts, and he was just as abusive to them as he was towards to me."`);
    scene.text('"He was violent?" you ask, a flash of concern appearing on your face.');
    scene.text('"Not to me at least," she says solemnly. "I can\'t speak for the other women in his life, but while he was very much verbally abusive, he never laid a finger on me. Maybe because I was his \'prized good\' so to speak? God, I can only hope the same can be said for Albina…"');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up. "I\'ll just leave you be…"');
    scene.text('She silently nods and takes a sip of wine as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
      { label: 'Is that why you left?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Was it him acting the way he did that made you decide to leave him?" you ask.');
    scene.text('Her look turns serious. "… Yes… But he made me choose between my future career… and Albina. Leaving my daughter in his clutches is something that I\'ll never forgive myself for doing. Even if I did make a life for myself and was eventually able to reunite with her, I\'ll take the shame of what I done to get here to my grave."');
    scene.text('The mood turns rather somber as she takes another sip of her coffee.');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up from the table. "I\'ll just leave you be…"');
    scene.text('She silently nods and takes a sip of wine as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
      { label: 'Talk about Albina', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina mentioned how he… took his frustration about you… out on her…" you meekly state.');
    scene.text('She snorts. "He done that well before I left. He had nothing but disdain for her the moment she was born. Even being at the hospital for her birth was something he only done to keep up appearances."');
    scene.text('"Still. He treated quite badly over the years, and not just verbally…" you whisper.');
    scene.text('"I\'m well aware of what Boris put her through in my absence," she states, her voice quivering slightly. "I hate that I wasn\'t here to protect her from him, but, like I said, it\'s not something that Albina is comfortable with discussing yet. That kind of trauma is hard to overcome, but I know my daughter, and she <i>will</i>be strong enough to face it when she\'s ready."');
    scene.text('The mood turns rather somber as she takes another sip of her wine.');
    scene.actions([
      { label: 'Change the subject', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
    ]);
  } },
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Oh… I\'m sorry. I shouldn\'t have asked you to bring those bad memories back up," you say, feeling very guilty. "It was none of my business."');
    scene.text('You stand up. "I\'ll just leave you be…"');
    scene.text('She silently nods and takes a sip of wine as you gingerly walk away.');
    scene.actions([
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about her being a model', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina said you used to work as a model?" you ask.');
    scene.text('"I did, for a while," she replies. "Only to pay for my university studies, though. I never intended to make a career out of it. Why? Are you interested in such a career?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Yes," you reply. "Modelling is something that has always interested me."');
    scene.text('"I don\'t doubt that you have what it takes, just be careful if you do go through with it," she says. "The modelling industry is infamous for taking advantage of the girls who work for them."');
    if (((st as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.text('Unsure how she would react, you decide to leave out the fact that you already are a model.');
    }
    scene.actions([
      { label: 'Ask what kind of modelling she done', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What kind of modelling did you do, if you don\'t mind me asking?"');
    scene.text('"Like I said, I never intended for it be my career, but… I was a rather exceptional erotic model. The best of the best at the studio during the time, in fact."');
    scene.text('"Oh wow! I can only imagine all of the attention that brought you!"');
    scene.text('She laughs. "Not of all it good, I assure you! I had many a sleazy photographer who tried getting me to sleep with them just because they photographed my vagina. Those are the ones you should ignore. They have no respect for their models and thus no respect for the art they claim to be creating."');
    scene.text('You nod and smile. It\'s nice to see this chatty side of Zoya.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      { label: 'Compliment her appearance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can see why you chose to be a model," you state. "You\'re one of the most beautiful looking women I\'ve ever seen."');
    // TODO-QSP: dynamic text: She smiles at your compliment, and you think she even blushes a little. "You''re...
    scene.text(`She smiles at your compliment, and you think she even blushes a little. "You're too kind ${((st as any).pcs_firstname ?? '')}, but I can assure you that I'm well past my modelling years. I'll be 40 before I know it!"`);
    scene.text('"Maybe," you reply. "But any man would be lucky to be dating a woman like you, never mind call you his wife!"');
    scene.text('She just smiles at you again, and you wonder if it\'s because your compliments are making her feel young again.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    if (((st as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.text('Unsure how she would react, you decide not to tell her that you actually are a model.');
    }
    scene.text('"Oh, no. I was just curious was all," you reply. "I could never imagine myself being a model."');
    scene.text('"It\'s certainly not a career for everyone," she says. "The only reason I got out of the industry was because of… Ahem. Boris."');
    scene.text('"Would you have ever gone back to modelling if your doctor career never worked out?" you ask.');
    scene.text('"No," she firmly states. "I never wanted to be that kind of model to begin with. Even though it turned out to be a case of very bad judgement on my part, marrying Boris was the perfect excuse for leaving and never looking back."');
    scene.actions([
      { label: 'Ask what kind of modelling she done', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What kind of modelling did you do, if you don\'t mind me asking?"');
    scene.text('"Like I said, I never intended for it be my career, but… I was a rather exceptional erotic model. The best of the best at the studio during the time, in fact."');
    scene.text('"Oh wow! I can only imagine all of the attention that brought you!"');
    scene.text('She laughs. "Not of all it good, I assure you! I had many a sleazy photographer who tried getting me to sleep with them just because they photographed my vagina. Those are the ones you should ignore. They have no respect for their models and thus no respect for the art they claim to be creating."');
    scene.text('You nod and smile. It\'s nice to see this chatty side of Zoya.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      { label: 'Compliment her appearance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can see why you chose to be a model," you state. "You\'re one of the most beautiful looking women I\'ve ever seen."');
    // TODO-QSP: dynamic text: She smiles at your compliment, and you think she even blushes a little. "You''re...
    scene.text(`She smiles at your compliment, and you think she even blushes a little. "You're too kind ${((st as any).pcs_firstname ?? '')}, but I can assure you that I'm well past my modelling years. I'll be 40 before I know it!"`);
    scene.text('"Maybe," you reply. "But any man would be lucky to be dating a woman like you, never mind call you his wife!"');
    scene.text('She just smiles at you again, and you wonder if it\'s because your compliments are making her feel young again.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Talk about Albina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Do you mind if we talk about Albina?" you ask.');
    scene.text('"That depends on what you want to know," she sternly replies.');
    scene.actions([
      { label: 'What was she like when she was younger?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"What was she was she like when she was younger?" you ask.');
    scene.text('Zoya smiles, as if recounting a happy memory. "A very happy little girl who had her sights set on becoming the best dancer the world had ever seen, but she lost that innocence when I left."');
    scene.text('You nod. "She definitely had a bit of a mean streak at school when we were growing up!"');
    scene.text('"She still does," Zoya replies. "But she\'s a lot happier now than when I first returned, and I think she has you to thank for that. Being there for her as <i>more</i> than just her best friend, showing her that she\'s not alone anymore… You really have helped her get out of that dark place she was trapped in all these years."');
    if (((st as any).npc_had_sex ?? 0)?.['A23']) {
      scene.text('Your heart skips a beat. Does she know that you and Albina have been fooling around with each other?');
    }
    scene.text('"Oh I don\'t know about that…" you reply as you feel yourself blushing. "I might have been here for her, but I think most of the credit goes to you. You\'re her beloved Mama after all!"');
    scene.text('"I do wonder what she would have been like if I were there to… Better influence her when she was growing up," Zoya says with a hint of remorse. "But that\'s not a story worth telling."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      { label: 'Do you worry about her?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    // TODO-QSP: dynamic text: "My <<$npc_nickname[''A29'']>> is always nagging at me about being safe and doin...
    scene.text(`"My ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} is always nagging at me about being safe and doing something with my life. Do you ever worry about Albina and what choices she makes?"`);
    scene.text('"All the time," she replies. "It\'s why I\'m happy that she\'s going to the university so she can eventually get herself a good job and make a better life for herself away from the bad influences she\'s been exposed to here. I don\'t want her getting pregnant and having to put her life on hold to raise a baby."');
    scene.actions([
      { label: 'Like you did?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Like you had to do?" you ask.');
    scene.text('She glares at you. "When you put it so bluntly, yes. Children might be in her future, but <i>not</i> before she makes a career for herself first."');
    scene.text('You can see the tension on her face as she tries to mask her feelings.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      { label: 'She doesn\'t seem like the mother type', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"No offense, but from what I know, she very much isn\'t interested in having children," you reply. "She\'s always practicing safe sex."');
    scene.text('"Not safe enough. The birth control shot she\'s on might protect her from getting pregnant, but it won\'t stop STIs!" she sighs. "I wish she would use the condoms I give her. I\'m worried that she might be allergic to the latex, but is too embarrassed to tell me."');
    scene.text('She then turns to you. "I hope you\'re practicing safe sex as well, young lady? You can never be too careful with these things."');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1  ||  ((st as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.actions([
        { label: 'I\'m still a virgin', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('You feel yourself blushing. "Oh. Uhhh… I\'m… I\'m still a virgin…"');
    // TODO-QSP: dynamic text: "Oh. Oh, I''m sorry for putting you on the spot like that, <<$pcs_firstname>>!" ...
    scene.text(`"Oh. Oh, I'm sorry for putting you on the spot like that, ${((st as any).pcs_firstname ?? '')}!" she replies. "My advice in that case would be to make sure you're using both condoms <i>and</i> birth control once you're active."`);
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I use condoms and birth control', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I use both," you reply. "You can never be too safe when it comes to this kind of thing."');
    scene.text('She smiles and nods. "I\'m glad you see it that way. I just wish that Albina did too. Pregnancy is one thing, but catching an STI would be even worse."');
    scene.text('"She seems pretty set against using condoms," you shrug. "I don\'t even think the risk of an STI would convince her to even consider it."');
    scene.text('"That\'s what I\'m worried about," she sighs. "She\'s too damn stubborn for her own good, maybe a little too much like me when I was that age."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
        { label: 'I use birth control, but not condoms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I\'m in the same boat as Albina," you reply. "I\'m on birth control, but I don\'t use condoms."');
    scene.text('She shakes her head. "You should be using both. Like I said, birth control won\'t stop you from being infected with an STI. Get yourself a pack or two of condoms next time you\'re topping up your birth control."');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
        { label: 'I use condoms, not birth control', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I use condoms, but not birth control," you reply.');
    scene.text('She shakes her head. "You should be using both. Condoms aren\'t 100% effective and all it takes is a single sperm from a broken condom. Pick up some pills next time you\'re topping up your condoms."');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
        { label: 'I don\'t use protection', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I, uhh… I don\'t use protection," you sheepishly reply. "I just rely on the pullout method."');
    // TODO-QSP: dynamic text: "The pull-" she gasps. "<<$pcs_firstname>>! He doesn''t have to ''finish'' insid...
    scene.text(`"The pull-" she gasps. "${((st as any).pcs_firstname ?? '')}! He doesn't have to 'finish' inside you for his sperm to get into your vagina! Not to mention the risk of catching an STI!"`);
    scene.text('She shakes her head. "You can\'t be so reckless when it comes to pregnancy, especially at your age. Get yourself down to the pharmacy and buy some condoms and birth control pills!"');
    scene.text('You just nod your head. You know she means well, but you get enough badgering from your own mother.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'She\'s a smart girl', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"She\'s a smart girl," you reply. "A lot smarter than she lets on, actually. I can\'t imagine her doing something stupid like that and disappointing you."');
    scene.text('She\'s smart, but very much stubborn," she replies. "It\'s good that she sticks to her own opinions, but I worry that her stubborn nature will cause her harm some day."');
    scene.actions([
      { label: 'I can watch out for her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I can watch out for her for you," you reply. "She does listen to me… Sometimes."');
    // TODO-QSP: dynamic text: She smiles.  "I appreciate that, <<$pcs_firstname>>, but I don''t want her to fe...
    scene.text('She smiles.  "I appreciate that, ' + ((st as any).pcs_firstname ?? '') + ', but I don\'t want her to feel like she\'s being manipulated, so don\'t overstep your bounds as her friend. \' + iif(npc_had_sex[\'A23\'], \'Or whatever your relationship with her might be.\', \') + \'"');
    if (((st as any).npc_had_sex ?? 0)?.['A23']) {
      scene.actions([
        { label: 'My relationship with her?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"My… Relationship with her?" you ask.');
    scene.text('Does she know that you and Albina have been fooling around?');
    scene.text('"Oh, pardon me. It\'s just that I\'ve seen the way Albina looks at you. Along with how excited she gets when she talks about you, I think you might view each other as… more than friends?"');
    scene.text('You can feel your heart racing as you try to come up with an answer. "Oh. Uhh…"');
    scene.text('"Almost like you consider yourselves… Sisters?" she states.');
    scene.text('"Oh. Yeah… I guess you could say that…"');
    scene.text('You think that she knows just <i>how</i> close you and Albina actually are, but is being polite and not embarrassing you by bringing it up directly.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I\'ll be careful', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"I\'m not saying I would manipulate her," you say. "Just… Make sure she doesn\'t stray <i>too far</i> from the path she wants to go down."');
    scene.text('"That\'s all we can do, isn\'t it?" she sighs. "I\'m confident she can find her own way in life without needing us to guide her, though."');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Were you excited to be a mother?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Were you excited when you found out you were pregnant with her?" you ask.');
    scene.text('"Not at first, no," she replies. "I was 21 and thought I would have years of university studying ahead of me at the time. Don\'t get wrong, I planned on having children eventually, but only once I had a career in place and was ready to settle down."');
    scene.text('She smiles. "In the end, Albina was a bundle of joy that I never knew I needed. Being a young mother, I was always scared that I would screw it up or have to give her up for adoption, but to my surprise, I settled into motherhood quite easily, despite her largely absent father."');
    scene.actions([
      { label: 'Did you name her after someone?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Is Albina named after anyone in particular, if you don\'t mind me asking? I know a lot of first time parents like to name their children after someone special."');
    scene.text('She smiles. "She is indeed. When I first saw her in my arms when she was born, I saw my mother\'s eyes looking right back at me. Of course, Boris didn\'t even remotely care, so I named her after my mother right there on the spot."');
    scene.text('"That\'s… That\'s actually quite adorable!" you reply. "Does Albina know that?"');
    scene.text('"Not as far as I\'m aware," she replies. "I\'ve never told her and I know that Boris sure as hell didn\'t!"');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
    ]);
  } },
      { label: 'Do you want grandchildren?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Do you want to have grandchildren?" you ask.');
    // TODO-QSP: dynamic text: "I''m still a bit young for that, <<$pcs_firstname>>!" she laughs. "Yes, I would...
    scene.text(`"I'm still a bit young for that, ${((st as any).pcs_firstname ?? '')}!" she laughs. "Yes, I would, but like I said, I want Albina to live her life first and get a good job before she has children. I don't want her being tied down with a child at such a young age."`);
    scene.text('"I know she doesn\'t feel like it yet, but I think Albina would make an amazing mother," you reply.');
    scene.text('"That may be so, but I\'m not going to force her into it, especially if she\'s not with a man who would make a suitable father. My grandchild will <i>not</i> have someone like Boris as their father."');
    scene.text('You can see the tension on her face as she tries to mask her feelings.');
    scene.actions([
      { label: 'Talk about something else', goto: ['zoya_chat', 'lounge_chat1'] },
      { label: 'Leave', goto: ['albinahome', 'living_room'] },
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
    case 'breakfast_chat':
      enterBreakfastChat(s, scene);
      break;
    case 'pool_chat':
      enterPoolChat(s, scene);
      break;
    case 'lounge_chat':
      enterLoungeChat(s, scene);
      break;
    case 'breakfast_chat1':
      enterBreakfastChat1(s, scene);
      break;
    case 'pool_chat1':
      enterPoolChat1(s, scene);
      break;
    case 'lounge_chat1':
      enterLoungeChat1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const zoya_chat: LocationDef = {
  name: 'zoya_chat',
  title: 'You take a seat at the table and Zoya smiles at you.',
  region: 'other',
  enter: enter,
};
