import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'vann';
  (s as any).loc_arg = 'start';
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  if (((s as any).locM ?? 0) === 'uni_dorm'  &&  (!((s as any).vannin ?? 0))) {
    (s as any).vanobrand = Math.floor(Math.random() * 16) + 0;
    (s as any).vannin = 1;
    if ((!((s as any).vanobrand ?? 0))) {
      qspGoto(s, 'vann', 'v1');
    }
    if (((s as any).vanobrand ?? 0) === 1) {
      qspGoto(s, 'vann', 'v2');
    }
    if (((s as any).vanobrand ?? 0) === 2) {
      qspGoto(s, 'vann', 'v3');
    }
  }
  (s as any).vannin = 1;
  scene.img('images/shared/home/bathroom/wash1.jpg');
  if (((String('uni_dorm;Palatka;bordel').indexOf(String(((s as any).locM ?? 0)))) + 1) > 0) {
    qspCall(s, 'din_van', 'private');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['vann', 'fin'] },
  ]);
  scene.build();
}

function enterFin(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'locM', 'locM_arg');
  // TODO-QSP: end
  scene.build();
}

function enterBrit1(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  scene.img('images/locations/city/island/university/dorm/sex/bathroom/brit1.jpg');
  scene.text('As you apply shaving foam to your pubis in the bath, a guy comes in. You are so engrossed in what you are doing that you don\'t notice him. Only when he turns on the electric shaver he plugged in do you look up and see him standing in front of you with a smile. A few seconds later, he looks up at your face and says "Hey, do you mind that I\'m in here to shave?" Noticing your inept movements as you continue to apply shaving foam to your pussy, he adds, "I can help if you want. I have an older sister who was supposed to get married four years ago. Her fiance used to help her shave, but he fled while she was pregnant. I took over that role, and I\'m pretty good at it." You can\'t help but imagine this hunk of a man at thirteen, squatting in front of a pregnant woman and shaving her pussy. It was probably his first sexual experience.');
  qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Scream', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Scream', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.text('You yell so loud that you are probably heard out on the street. "Don\'t cry, I just wanted to help! Lock the door next time." He tries to reassure you, but you just keep yelling at him. He has no choice but to flee the bathroom.');
    scene.text('You quickly finish shaving.');
    scene.actions([
      { label: 'Finish', goto: ['vann', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him stay', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/brit2.jpg');
    scene.text('"Go ahead…" you reply, and you go back to the task of trying to shave your pussy. A few minutes later, you hear the hum of his electric razor die. You look up to see him watching you.');
    scene.text('"No no no!" he shrieks. "You\'re doing it wrong," he says in frustration and grabs the disposable razor from you. You stare at him in stunned silence as he sits down in front of you. He is staring right at your foam covered vagina.');
    scene.text('"Hair is meant to be shaved in a specific direction. Do it the wrong way, and you\'re liable to get ingrown hairs. Those are painful."');
    scene.text('You keep quiet while looking at the concentration on his face. You occasionally see his tongue stick out of his mouth when he gets to a particularly tough section.');
    scene.text('"Did you help shave your sister often?" you ask.');
    scene.actions([
      { label: 'Listen to his response', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/brit2.jpg');
    scene.text('He looks back up at you. He\'d been concentrating so hard on your pussy that he completely forgot that you existed.');
    scene.text('"Uh…" He nods his head. "Yes, I did. At first, she was very nervous and only used to call me in once every two weeks, but her confidence grew. Eventually, I shaved her every two days or so. She only had stubble at that point, so I basically just had to run through it with a razor, though I could still feel her tiny bristles on my finger." He pauses when he realizes he blurted out too much.');
    scene.text('"That was kind of you. Not everyone would be willing to help their sister with such a delicate matter," you remark, pretending that nothing is wrong with either you getting shaved by a stranger or with what he said.');
    scene.text('"It wasn\'t as easy as you make it out to be. I practically had to beg her to let me do it. She is a strong woman." You can hear the admiration in his voice when he talks about her. "I couldn\'t just leave her. She didn\'t have anyone else, so I felt it was my duty, as her brother, to look after her. I bathed her, clothed her, shaved and showered her. I even helped her give birth to a beautiful baby girl." You keep looking down at him throughout his rambling and notice that, as he fawns over his sister, a bulge is growing in his shorts.');
    scene.text('You get a naughty idea. "Did you just touch her, or did you get a taste?" you ask suddenly.');
    scene.actions([
      { label: 'Naughty question', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/brit2.jpg');
    scene.text('"Both," he says nonchalantly until he realizes what he just admitted to. You see his face turn red. You smile, pleased that you managed to get him to reveal something embarrassing about himself.');
    scene.text('"Oh?" You cock your head to the side, your mischievous smile persisting. "Did she return the favor, or did she let poor little you do all that work with no pay?" you ask while being playfully sympathetic.');
    scene.text('His face gets even redder, looking like a lobster, but then he looks up. "Motivation," he says quickly. "I didn\'t really know how to shave her well back then. One day my hands were shaking so much that they slipped. I saw the blood and just ran. I was actually surprised the next day when she called me inside the bathroom. I thought she was going to hit me, but she let me shave her again. She showed me how to do it right. Afterwards, she pulled down my shorts and took me into her mouth. When the shower was over, she told me that every time I did it right, she\'d repay me in kind."');
    scene.text('"Did you fuck!" you blurt out, outright voicing your perverted thoughts. You\'re so engrossed in his story that you forget about the razor that he\'s shaving your foamy slit with.');
    scene.actions([
      { label: 'Did they have sex', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/brit2.jpg');
    scene.text('This time, he looks like a tomato, but you see him shake his head vigorously to get rid of it. After all, he\'d already told you as much as he had, so why not the whole story? "We did," he admits. "She became…" he clears his throat, "quite active when she was in her third trimester and blew me at least three times a day. I noticed one day that she was touching herself while she took my cock in her mouth, and I asked about it. She told me that even pregnant women have needs. I asked if I could help, and she told me to get the bottle of lube from her room." His eyes are far away as he recalls his first time. "When I returned, I found her massaging her asshole. I wondered out loud why we weren\'t having… you know," he shrugs, "normal sex. She said that we were brother and sister, so we shouldn\'t do it that way."');
    scene.text('He pauses.');
    scene.text('"So then???" you ask impatiently, curious as to what he did to his sister. You have gotten a little wet yourself, which doesn\'t escape his notice.');
    scene.text('He rubs your clit a little before continuing. "I rubbed a lot of lube onto her anus before gently easing my dick into her ass. She yelled out, but I could see that she wasn\'t in pain and I continued. She started shaking her ass at me while moaning out loud as she rode my cock. I didn\'t last long with her moaning like that. I came deep inside her, but she kept riding me until I was spent. I was exhausted, and I loved it. Eventually, we stopped doing the blowjobs altogether, and I kept fucking her ass every day. By the time she gave birth, we\'d already done the Kama Sutra on her ass, and she had this beautiful gape." He has drawn such a vivid picture for you that you are leaking pussy juice all over his hand while he shaves you.');
    scene.text('He raises his hand to his lips and licks it off before getting up. "Well, I\'m finished," he says, leaving you with an ache in your loins.');
    scene.text('"Any other problems you\'d like me to look at?" he asks, and you can see the same mischievous smirk on his face that you\'d had earlier.');
    qspCall(s, 'willpower', 'cuni', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['vann', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Come on', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'guy from the uni dorm bathroom', Math.floor(Math.random() * 27) + 19);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).picrand = 74;
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/brit3.jpg');
    scene.text('"Well at least you only have to shave your face," you say with a laugh.');
    scene.text('"I\'m going to shave you smooth now," he replies. With these words, he begins to lather you with foam, smearing it all over your body. His hands slide over you, and you melt at his touch. His hand soon slides over your freshly shaved pussy.');
    scene.actions([
      { label: 'Continue', goto: ['sex', 'kuni'] },
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

function enterV1(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  scene.img('images/locations/city/island/university/dorm/sex/bathroom/v0.jpg');
  scene.text('You enter the bathroom and see a girl sitting on the edge of the bathtub smearing her feet with cream.');
  scene.text('"Oops… Sorry, I\'ll come back later," you say and turn to leave.');
  scene.text('"No, it\'s okay, you can stay. I\'m almost finished," she says with a smile. You go to the sink to wash your hands, keeping yourself busy until she leaves. However, she seems not to be in a hurry, and a couple of minutes later, she asks, "Do you want your feet done too?"');
  qspCall(s, 'willpower', 'foreplay', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.text('"Ehm… No, thank you… Not really," you reply.');
    scene.text('"Your loss," she says with a wink, and after a while, she finally finishes and leaves.');
    scene.actions([
      { label: 'Continue', goto: ['vann', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (s as any).picrand = 21;
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v1.jpg');
    scene.text('"Well, why not?" you reply. She smiles and begins to apply the cream to your feet. Her hands stroke your ankles, before gradually making their way up to your thighs and hips and then to your buttocks. She stops there longer than on any other part of your legs, her hands gently squeezing your ass for a while.');
    scene.text('They then find their way to the inside of your thighs, and her fingers reach your pussy. When you part your legs slightly, she keeps one hand between your legs massaging your pussy while the other returns to kneading your ass cheek. You squirm as you suddenly feel a tingle on your foot and look down to see her kissing it. She starts moving upwards, kissing your leg until her tongue slides between your thighs to your pussy.');
    scene.actions([
      { label: 'Proceed', goto: ['lezbsex', 'kuni'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterV2(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  scene.img('images/locations/city/island/university/dorm/sex/bathroom/v2.jpg');
  scene.text('You walk into the bathroom and wash your hands at the sink. You suddenly hear a noise behind you, and realizing that you are not in the bathroom alone, you turn sharply and see a guy standing in the bath with a towel around his neck, masturbating. He continues masturbating, seemingly unaware of your presence. A few seconds later, he finally notices and tries to cover himself with his towel. He scurries towards the door, muttering an apology under his breath.');
  qspCall(s, 'willpower', 'hj', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Offer help', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Offer help', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npcgeneratec', '', 0, 'guy from the uni dorm bathroom', Math.floor(Math.random() * 27) + 19);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).picrand = 75;
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v3.jpg');
    scene.text('"Let me help you…" you say sweetly. The guy pauses. "What?" he replies. You walk up to him and slide your hand under his towel, slowly jerking his cock in your hand. The guy relaxes and drops his towel as you drop to your knees and keep stroking his shaft. He begins to moan in pleasure.');
    scene.actions([
      { label: 'Get your pussy eaten', goto: ['sex', 'kuni'] },
      { label: 'Give him a blowjob', goto: ['sex', 'minet'] },
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).sexvolume = 10;
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    (s as any).sexvolume = 30;
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v4.jpg');
    scene.text('You continue to stroke his shaft. The guy lies down on the edge of the bathtub, and you start jerking him with both hands which, judging by his moans, you think he likes. You are just starting to think about how his cock would feel inside you when it begins to twitch in your hands and a stream of cum splatters across your face, some landing in your open mouth. "Damn it, you fucking asshole! Warn me next time!" you yell at him. "Sorry… " is all he mumbles as he quickly grabs his towel and runs out of the bathroom.');
    scene.actions([
      { label: 'Continue', goto: ['vann', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him go', goto: ['vann', 'start'] },
  ]);
  scene.build();
}

function enterV3(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  scene.img('images/locations/city/island/university/dorm/sex/bathroom/v5.jpg');
  scene.text('Not bothering to check if anyone is present, you run into the bathroom and quickly sit on the toilet. "Just in time…" you think to yourself with relief. You then realize that someone else is here. Turning your head, you see a guy in the shower. He stands there, smiling. "Hello there."');
  scene.text('"Hi…" you reply with an awkward grin as your cheeks flush bright red. "Sorry, I just have to…" you continue.');
  scene.text('"Yes, yes. Of course. Nature calls when she calls!" he says, laughing. You continue urinating, ready to sink into the ground in embarrassment. Meanwhile, the guy climbs out of the shower and stands in front of you, silently watching. You see his impressively sized cock getting hard, and soon enough, he is as hard as a rock, his dick inches from your face. He brings it close to your lips, clearly hinting at a blowjob. Feeling uncomfortable, you try to ask him to step back, but as soon as you open your mouth, he shoves his cock inside.');
  scene.text('"Sorry, but nature calls," he says, smiling.');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Bite', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Bite', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.text('You clamp your teeth down on his fleshy tip, and he starts screaming and swearing, shouting words that are incredibly vulgar. You bite even harder, and he screams even louder, thinking you\'re about to bite his dick off. You release him from your grip, and he runs out into the hallway nude, screaming even more vulgar curses at you.');
    scene.actions([
      { label: 'Continue', goto: ['vann', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 3, 'deepthroat', 'rough');
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v6.jpg');
    scene.text('You begin gently licking the head and massaging his testicles. He starts to moan and grabs your head with both hands, shoving his dick down your throat. You begin to choke and gag, but his hand keeps a firm grip on your head. He eventually relaxes his grip, and you begin to deepthroat him. A few minutes later, he pulls out of your mouth and pulls you to your feet. He turns you around and bends you over the toilet.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 6, 'rough', 'sub', 'humiliation');
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v7.jpg');
    scene.text('He inserts his penis into your vagina and starts to fuck you, his thrusts strong and deep. You didn\'t have time to wipe, and urine is trickling down your leg. "What am I doing? I\'m getting fucked like a cheap whore in the dorm bathroom, bent over the toilet leaking piss all over myself. Yet, the most disgusting part is that I like it!" you think to yourself as you just stand there, letting this guy thrust in and out of you. Soon, he pulls out and tells you to get on your knees.');
    scene.actions([
      { label: 'Sit on the floor', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 1, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    (s as any).sexvolume = 10;
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    (s as any).sexvolume = 18;
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    (s as any).sexvolume = 12;
    (s as any).spafinloc = 15;
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v8.jpg');
    scene.text('You turn and drop to your knees in front of him as he starts jerking his cock above your face.');
    scene.text('"Open wide!" You open your mouth and his cum splatters across your face, tits and tongue.');
    scene.text('"Well, thank you, but you were… lacking something," he says as he gets dressed and walks out, leaving you on the floor covered in his cum. "Fucking asshole!" you whisper to yourself as you stand up.');
    scene.actions([
      { label: 'Continue', goto: ['vann', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterV4(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'masturbate');
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  }
  scene.img('images/locations/city/island/university/dorm/sex/bathroom/v9.jpg');
  scene.text('You spray water from the faucet directly onto your pussy and let the jet of warm water caress you. Getting further into it, you push your fingers inside your pussy while the water takes care of your clit. You\'re completely absorbed in your masturbation until you hear someone turn on the faucet in the sink. Opening your eyes, you see a guy standing at the sink, looking at you and grinning.');
  scene.text('"Sorry, don\'t let me interrupt. I\'m just enjoying the show!" he says without looking away from your pussy, your fingers still tightly jammed inside it.');
  qspCall(s, 'willpower', 'misc', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Scream', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Scream', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).pcs_horny = 0;
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v10.jpg');
    scene.text('You scream so loud that you hurt your ears. The guy jumps and hurriedly retreats from the bathroom. You are once again left alone, but the excitement is gone, and you don\'t really feel like masturbating anymore.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['vann', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Cover up', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v10.jpg');
    scene.text('You instinctively cover your naked pussy and unsuccessfully try to cover your breasts with your other hand. The guy just keeps watching you, and his smile grows wider. You realize that your hand is still stroking your pussy, and his gaze only excites you further. You remove your hand from your crotch, and he walks up and sits on the edge of the tub. He lifts a loofah out of the water and hands it to you. "Can I help you…? I mean with washing your back?" he asks. You sit and stare blankly at him, not knowing what to say.');
    qspCall(s, 'willpower', 'foreplay', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v10.jpg');
    scene.text('"No, thank you." you reply.');
    scene.text('"As you wish," he says and turns around, heading to the door. On the threshold, he turns. "You should lock the door in the future. Some guys are… more inclined to \'help you,\'" he quips before walking away.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['vann', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'guy from the uni dorm bathroom', Math.floor(Math.random() * 27) + 19);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).picrand = 76;
    scene.img('images/locations/city/island/university/dorm/sex/bathroom/v11.jpg');
    scene.text('You nod, and he immediately strips off his clothes and climbs into the bath with you. He begins to rub your loofah, along with his free hand, over your body, caressing your chest before sliding down to your pussy. His fingers gently caress your pussy, and you shudder and cling to him, his erection grinding between your ass cheeks. He begins to slide up and down, and you lean forward, giving him room to maneuver. However, he doesn\'t penetrate you, instead placing his hands on your shoulders and gently pushing you down. You understand what he wants and turn to face him. You lean down and suck on his balls before licking his shaft from base to tip.');
    qspCall(s, 'arousal', 'vaginal_finger', 10);
    scene.actions([
      { label: 'Give him a blowjob', goto: ['sex', 'minet'] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'fin':
      enterFin(s, scene);
      break;
    case 'brit1':
      enterBrit1(s, scene);
      break;
    case 'v1':
      enterV1(s, scene);
      break;
    case 'v2':
      enterV2(s, scene);
      break;
    case 'v3':
      enterV3(s, scene);
      break;
    case 'v4':
      enterV4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vann: LocationDef = {
  name: 'vann',
  title: 'As you apply shaving foam to your pubis in the bath, a guy c',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
