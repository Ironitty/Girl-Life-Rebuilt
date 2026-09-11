import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHallSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall2.jpg');
  scene.text('Fedor licks his finger tips then he leans forward and begins kissing you as he reaches down between your legs and rubs your vagina. You spread your legs for him, giving him easier access. You continue to kiss Fedor while enjoying his finger tips on your clit until he eventually picks you up by your shoulders and then lightly pushes you against the wall then buries his head between your legs.');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Spread your legs', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall3.jpg');
    scene.text('You spread your legs enjoying the feeling of Fedor\'s tongue on your clitoris, gently caressing it. You can feel the pleasure build up as Fedor continues to massage your clitoris with his tongue.');
    qspCall(s, 'arousal', 'cuni', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall4.jpg');
    scene.text('Fedor grabs your leg and lifts it up on his shoulders, giving himself better access to your pussy as he continues caressing your clitoris at an increased pace, trying his best to give you an orgasm. You tilt your head back and say, "Ohh yes Fedor, just like that." as he continues to pick up the pace making you feel weak in the knees as his strong arms hold you up.');
    qspCall(s, 'arousal', 'cuni', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy his embrace', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall5.mp4');
    scene.text('After a few seconds Fedor gets up then turns you around, pressing his body against yours as he enters your vagina from behind. Thrusting his dick deep inside you while his hips smack against your ass causing your whole body to bounce against the wall. You continue getting fucked while enjoying the warmth of Fedor\'s body pressing against yours and the feeling of his hot breath on your back while he holds your hips firmly. Fedor whispers in your ear. "I\'m ready to cum, How would you like it?"');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum10.mp4');
    // TODO-QSP: dynamic text: Fedor nods his head as he continues thrusting faster. You lay against the wall e...
    scene.text(`Fedor nods his head as he continues thrusting faster. You lay against the wall enjoying his thrusts as you soon feel a burst of warmth fill your womb. Fedor holds you tightly as he fills you with his seed. You do your best to milk him dry as you feel his cum slowly leaking out of your pussy and after a few seconds Fedor catches his breath then says, "Ohh ${((s as any).pcs_nickname ?? 0)} You're an absolute gem." The affectionate tone of his voice fills your heart with a sudden warmth. "Oh Fedor, you're so sweet." You and Fedor both get dressed and then Fedor leads you to the bathroom to get washed up.`);
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'In my mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/yum.mp4');
    scene.text('Fedor then pulls out of you and begins jerking himself while you turn around and take his penis into your mouth. You start sucking and licking until you feel a jet of sperm fill your mouth and instead of swallowing, you look up to Fedor with an open mouth then stare into his eyes as you swallow his cum.');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    // TODO-QSP: dynamic text: Fedor looks at you with a very pleased expression. "You know just what I like." ...
    scene.text(`Fedor looks at you with a very pleased expression. "You know just what I like." then rubs your forehead, before getting dressed. When you are both dressed Fedor asks "So ${((s as any).pcs_firstname ?? 0)}, are you still up for that movie?`);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sure thing', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
      { label: 'On my face', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/chest/cumbreats.mp4');
    scene.text('Fedor then pulls out of you and begins jerking himself while you turn around and kneel down in front of him, firmly massaging your breast as you watch him jerking off. You close your eyes in anticipation of his cum covering your face. After a few seconds you feel squirts of cum over your face. The warmth of it causes you to feel very at ease before you carefully open your eyes to see Fedor admiring the view with a very pleased smile on his face. Fedor says, "That\'s a good look for you." You respond, "If I really look that good then why don\'t you come over here and give me a kiss." You then lead forward bringing your face to his as he pulls away. "Uhhh, Maybe after you wash up first." You both laugh as Fedor guides you to the bathroom to clean up.');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['FedorEv4', 'Bathroom Wash'] },
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

function enter3Way(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall5.mp4');
  scene.text('Fedor kisses you then lifts you up to your feet as he approaches you from behind and then sticks two of his fingers inside of your vagina, gently rubbing your insides. After a few seconds he begins sliding his cock inside of your pussy giving you a rush of pleasure. He slowly starts thrusting his dick deeper inside you giving you the occasional smack on the ass. You turn to face Fedor and see someone standing in the doorway, causing your breath to stop as you notice that not only have you both forgot to close the door but someone has been watching you this whole time.');
  qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Look closer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/ivan1.jpg');
    // TODO-QSP: dynamic text: You look closely at the person in the doorway then recognize him as Ivan. You ex...
    scene.text(`You look closely at the person in the doorway then recognize him as Ivan. You exclaim. "Fedor, Ivan is standing in the doorway!" Fedor quickly stops and turns to Ivan and says, "Ohh shit, I totally forgot that I invited Ivan to hang out with me this afternoon." Ivan approaches you casually as he says, "I could come back later if this is a bad time but I wouldn't say no to joining in on the fun… if you don't mind sharing, that is." Fedor responds, "Sharing? Sharing wha… ohh… I see." Fedor turns to you with a curious look on his face. "What do you think ${((s as any).pcs_firstname ?? 0)}?"`);
    scene.actions([
      { label: 'Invite Ivan to join', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/chat.jpg');
    scene.text('You respond, "If it\'s fine with you, I won\'t object." Fedor ponders for a few seconds then tells Ivan "Alright I\'m willing to share as long as you promise not to get my girl pregnant." Ivan chuckles, then responds, "I know what I\'m doing and plus, I wouldn\'t have any time to raise a kid of my own." Fedor smirks and says, "I guess it\'s settled then, you can sign right here." as he lifts his fist up which Ivan bumps with his.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 3) + 1;
    if (((s as any).VK ?? 0) <= 1) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', '3way1'] }]);
    } else {
      if (((s as any).VK ?? 0) <= 2) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', '3way2'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', '3way3'] }]);
      }
    }
  } },
    ]);
  } },
      { label: 'Refuse and get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    // TODO-QSP: dynamic text: You scold Fedor and as you state "I'm not that kind of girl Fedor!" He stammers ...
    scene.text(`You scold Fedor and as you state "I'm not that kind of girl Fedor!" He stammers as he responds, "I didn't mean to imply that you… I'm sorry ${((s as any).pcs_firstname ?? 0)}." Ivan then responds, "Don't worry ${((s as any).pcs_firstname ?? 0)}. It was just a joke. I wouldn't want to come in between you… or would I?" he then laughs as he walks away. You get dressed then grab Fedor by the hand. "It's alright Fedor, I know you care for me, so I'm willing to look past this." as you give Fedor a sweet smile while leading him to the livingroom.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go with Fedor', goto: ['FedorEv4', 'Home 2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3way1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed1.mp4');
  scene.text('Ivan spanks your ass. "Let\'s head to the bedroom and get started." You grab both of their hands and lead them to the bedroom while Fedor caresses your breasts with his free hand as Ivan does the same to your ass. When you reach the bedroom Ivan and Fedor begin undressing as you climb onto the bed waving your finger with a come hither gesture. They both climb onto the bed on both sides of you and you begin stroking their cocks gently while staring Fedor in the eyes as Ivan paws at your ass which urges you to pick up the pace and stroke their cocks faster.');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'arousal', 'hj', 5, 'dom');
  qspCall(s, 'boyStat', 'A3');
  qspCall(s, 'arousal', 'hj', (-5), 'dom');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Ride Fedor', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed2.mp4');
    // TODO-QSP: dynamic text: You feel Ivan's hands clench your waist as he lifts you up and pushes you down o...
    scene.text(`You feel Ivan's hands clench your waist as he lifts you up and pushes you down on Fedor dick causing an instant rush of arousal and excitement to flow through you. You reach over to continue jerking Ivan as you Ride Fedor's dick so that Ivan won't feel left out and you can see a very pleased smile on his face as he stares into your eyes while you jerk him off. Ivan then lays back, making himself comfortable. After a few seconds Ivan leans forward and smacks your ass. "Hey ${((s as any).pcs_nickname ?? 0)} why don't you put that pretty mouth of yours to work?"`);
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'arousal', 'hj', (-5), 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck Ivan\'s dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed3.mp4');
    // TODO-QSP: dynamic text: You happily nod as you lean forward and wrap you lips around Ivan's dick causing...
    scene.text(`You happily nod as you lean forward and wrap you lips around Ivan's dick causing an almost instant moan from him. Fedor turns you on your side as he continues to thrust his cock inside your pussy. You spread your legs as wide as you can to give him the easiest access to your pussy. Fedor continues picking up the pace and you continue sucking Ivan's dick trying your best to keep up with Fedor's pace. Fedor turns you onto your back as he continues to fuck you harder as you do your best not to release Ivan's dick from your mouth as you continue licking and sucking his dick trying your best to get him off. Ivan asks Fedor "Are you ready to cover her up?" Fedor replies, "That depends, ${((s as any).pcs_firstname ?? 0)} Where do you want it?"`);
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'arousal', 'bj', (-5), 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1  &&  (!((s as any).IvanPregChat ?? 0))) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed4.mp4');
    // TODO-QSP: dynamic text: "Cum inside me!" you say before wrapping your lips back around Ivan's dick and F...
    scene.text(`"Cum inside me!" you say before wrapping your lips back around Ivan's dick and Fedor responds, "Sure thing." Ivan then turns to Fedor. "You're gonna get ${((s as any).pcs_nickname ?? 0)} pregnant… well If that's what you want but don't go asking me to babysit for you." Ivan and Fedor begin pumping you faster. After a few seconds Fedor groans and you feel his seed filling your womb causing a muffled moan from you which seems to push Ivan over the edge as he begins shooting his load directly down your throat while you do your best to swallow every drop of. When they are finished Fedor slowly pulls out of you, causing the cum in your womb to almost gush out of your vagina and onto the bed.`);
    // TODO-QSP: dynamic text: You lay back catching your breath as you listen to Fedor and Ivan talking. "Dude...
    scene.text(`You lay back catching your breath as you listen to Fedor and Ivan talking. "Dude I can't believe you're already knocking up a girl. Do your parents know?" Fedor shakes his head. "Nah man, you have to keep quiet about this or my mother will freak out." Ivan responds, "No problem man but I'd be more worried about ${((s as any).pcs_firstname ?? 0)}'s parents finding out, if I were you" Fedor remains silent as Ivan pats him on the back. "Don't let it get it you down. I'm sure It will all work out in the end." and then he gets dressed and walks out of the room. Fedor sits still for a second before turning to you. "Let's get you washed up ${((s as any).pcs_nickname ?? 0)}." then carries you to the bathroom.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).FedorLoveTalk ?? 0) === 1  &&  ((s as any).IvanPregChat ?? 0) === 1) {
        scene.actions([
          { label: 'Inside me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed4.mp4');
    // TODO-QSP: dynamic text: "Cum inside me!" you say before wrapping your lips back around Ivan's dick as he...
    scene.text(`"Cum inside me!" you say before wrapping your lips back around Ivan's dick as he turns to you. "Don't worry ${((s as any).pcs_nickname ?? 0)}. We'll fill you up real good." Ivan and Fedor begin pumping you faster. After a few seconds Fedor groans and you feel his seed filling your womb causing a muffled moan from you which seems to push Ivan over the edge as he begins shooting his load directly down your throat which you do your best to swallow every drop of. When they are finished Fedor slowly pulls out of your causing the cum in your womb to almost gush out of your vagina and onto the bed. You lay back catching your breath as you listen to Fedor and Ivan chatting. "${((s as any).pcs_firstname ?? 0)} is an amazing girl. You gotta invite me here more often."`);
    // TODO-QSP: dynamic text: Fedor shrugs. "It's all up to <<$pcs_firstname>>." Ivan responds, "Whipped huh?"...
    scene.text(`Fedor shrugs. "It's all up to ${((s as any).pcs_firstname ?? 0)}." Ivan responds, "Whipped huh?" he then looks up your body. "I can't say I blame you. ${((s as any).pcs_nickname ?? 0)}'s is quite the fox." Fedor gives Ivan a fist bump before Ivan gets dressed and walks out of the room. Fedor turns to you "So how did you enjoy that?" You reply, "You were both amazing. I had a great time." Fedor responds, "Awesome, now let's get you cleaned up." Fedor then lifts you up and carries you to the bathroom.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed4.mp4');
    // TODO-QSP: dynamic text: "Cover me in your cum." you say before wrapping your lips back around Ivan's dic...
    scene.text(`"Cover me in your cum." you say before wrapping your lips back around Ivan's dick as he turns to Fedor. "You heard the girl, Let's give her some body paint." Ivan then gives him a high five as they continue spit roasting you. After a few seconds Fedor pulls out and starts covering your stomach with his seed and soon after Ivan pulls out of your mouth and immediately begins spraying his load all over you face. They both continue covering your body as you try to catch their cum with your hand then rub it all over your body. Ivan turns to Fedor. "Holy shit, ${((s as any).pcs_nickname ?? 0)} is nasty… I almost envy you." as he gets out of the bed and exits the bedroom to clean up.`);
    // TODO-QSP: dynamic text: Fedor turns to you "That was great <<$pcs_nickname>>. Maybe we can do it again s...
    scene.text(`Fedor turns to you "That was great ${((s as any).pcs_nickname ?? 0)}. Maybe we can do it again sometime." You give him a mischievous smile as you respond, "Continue treating me right and I might agree to do this again." Fedor then replies, "You have yourself a deal." with a playful smile as he lifts you up and carries you to the bathroom to wash up.`);
    scene.img('images/shared/sex/cum/stomach/cumbelly2.mp4');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3way2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A5');
  scene.text('Ivan grabs you by the waist and carries you to the bedroom as Fedor follows closely behind. Ivan gives you an occasional smack on the ass as he carries you to the bedroom. When you arrive, Ivan tosses you onto the bed then begins undressing as Fedor does the same. You lustfully stare at their big cocks as they climb on the bed on both sides of you and start rubbing you all over your body as you reach for their dicks and begin jerking them off. Fedor brings his face to yours and looks you in the eyes, giving you a strange rush of excitement. Fedor then lies back as Ivan lifts you up and pushes you down on Fedor\'s dick which gives you a rush of excitement.');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed5.mp4');
  qspCall(s, 'boyStat', 'A3');
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'arousal', 'hj', (-5), 'sub');
  qspCall(s, 'arousal', 'bj', (-5), 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Cowgirl', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed6.mp4');
    // TODO-QSP: dynamic text: You begin riding Fedor's dick as Ivan shoves his dick down your throat and start...
    scene.text(`You begin riding Fedor's dick as Ivan shoves his dick down your throat and starts to throat fuck you while Fedor continues fucking your pussy. You gag on Ivan's cock and he pulls away. Ivan gives you a few seconds to catch your breath as he raises his dick to your mouth and begins brushing your lips with his cock. When you finish catching your breath, you casually wrap your lips around Ivan's dick and do your best to lick and suck him off. After a few minutes Ivan says, "Hey ${((s as any).pcs_firstname ?? 0)}, Now that I'm all lubed up, It's time to fuck your ass."`);
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'arousal', 'bj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spitroast', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/bed7.mp4');
    // TODO-QSP: dynamic text: "Sure thing." Ivan pushes you on your hands and moves up behind you as Fedor app...
    scene.text(`"Sure thing." Ivan pushes you on your hands and moves up behind you as Fedor approaches you with his dick in his hand. You wrap your lips around it as you feel Ivan's cock slowly entering your anus which cause a slight pain as your ass adjusts to Ivan's dick. After a few seconds Ivan begins thrusting his dick further in your ass which causes pain at first but then fades into pleasure. You feel a thrill of being fucked from two sides as Ivan's large dick in your ass begins pushing deeper inside you. Ivan asks "Hey ${((s as any).pcs_nickname ?? 0)}, Do you mind if I fill up your ass?"`);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'bj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pull out please', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/cumface3.mp4');
    // TODO-QSP: dynamic text: You turn to Ivan, letting Fedor's dick slide out of your mouth but then extend y...
    scene.text(`You turn to Ivan, letting Fedor's dick slide out of your mouth but then extend your hand to jerk him off as you respond, "I'd rather you both cover me in your cum." Ivan grins. "Damn ${((s as any).pcs_nickname ?? 0)} you're a little minx aren't you?" he then rapidly increases his pace and then Fedor pulls out of you and holds your face to his dick as he unloads all his cum into your face which seems to cause Ivan to groan and pull out just in time to paint both your ass and back with his load. You lay on your back catching your breath as you listen to Fedor and Ivan chat. "Damn Fedor, you really lucked out with ${((s as any).pcs_firstname ?? 0)}. I never fucked a girl with an ass as fine as her's."`);
    // TODO-QSP: dynamic text: Fedor responds, "I like to believe that it's more than luck but I can't help but...
    scene.text(`Fedor responds, "I like to believe that it's more than luck but I can't help but feel very lucky every time I look at her." Fedor's comments cause you to blush as Ivan responds, "${((s as any).pcs_nickname ?? 0)}'s a good catch. I wish you both the very best." as he gets dressed then walks out of the room. Fedor turns to you then gives you a kiss on the forehead "Let's get you cleaned up." he lifts you up then carries you to the bathroom.`);
    scene.img('images/shared/sex/cum/cum3.mp4');
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'back', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
      { label: 'Fill me up', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/analcreampie/cumanal2.mp4');
    // TODO-QSP: dynamic text: You turn to Ivan, letting Fedor's dick slide out of your mouth but then extend y...
    scene.text(`You turn to Ivan, letting Fedor's dick slide out of your mouth but then extend your hand to jerk him off as you respond, "I want you both to fill me up." Ivan grins. "Hell yeah ${((s as any).pcs_firstname ?? 0)} I'll fill you up real good." he then rapidly increases his pace and soon Ivan grabs your hips tightly as he pumps his load into your ass, doing his best to fill your ass to the brim with his seed. Soon after Fedor groans as he shoots his load down your throat which you swallow obediently, savoring every drop. When they both finish with you, they begin chatting with each other. "${((s as any).pcs_nickname ?? 0)} is a great catch. You need to hold onto this one Fey."`);
    scene.text('Fedor responds, "Don\'t worry, I don\'t plan on letting her go, she is my number one girl." as he gently rubs your ass. Ivan gets dressed then leaves the room and Fedor turns to you "You\'re a great girl. I hope you enjoyed yourself as much as we did." You reply, "I had a wonderful time getting fucked by 2 strong men." Fedor smiles as he kisses you on your forehead before lifting you up and carrying you to the bathroom to get cleaned up.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum1.mp4');
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3way3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/foreplay1.mp4');
  scene.text('Ivan kisses you on the neck then places his hands on your shoulders pushing you down to your knees as he and Fedor stand directly in front of you with their crotches in you face. You know exactly what they want, so you pull down their pants and begin gently stroking their cocks while alternating whose eyes you stare into, trying to give them both equal satisfaction. Fedor pats you on the head and shortly after, Ivan lightly grabs your chin and turns your face to his as he says to you "I\'m planning on fucking your ass in a bit, so you might want to lube me up."');
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'boyStat', 'A3');
  qspCall(s, 'arousal', 'hj', (-5), 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck Ivan\'s dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/foreplay2.mp4');
    scene.text('You eagerly wrap your lips around Ivan\'s dick as you continue to masturbate Fedor. Knowing that Ivan will fuck your ass soon, you do your best to lube up Ivan\'s dick by licking, sucking and even spitting on his dick, getting it nice and slick as Fedor begins pawing at your breasts and occasionally brushing the hair off your face.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'hj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/hall1.mp4');
    scene.text('After a few moments, Ivan pulls away from you, so you instinctively start sucking Fedor\'s dick in Ivan\'s place but soon you feel strong hands around your shoulders then realize that Ivan has lifted you 2 feet off the ground. Ivan carries you to the living room then drops you on your feet. Ivan roughly bends you over the edge of the sofa and before you know what\'s happening, Ivan enters your anus causing you to groan in pain. Fedor then shouts "Ivan take it easy. Are you trying to cripple my girl!?"');
    // TODO-QSP: dynamic text: Ivan responds, "Yeah, I guess I did get a bit carried away, Sorry <<$pcs_firstna...
    scene.text(`Ivan responds, "Yeah, I guess I did get a bit carried away, Sorry ${((s as any).pcs_firstname ?? 0)}. I'll slow down for you." and true to his word he slows his pace allowing your ass to adjust for his dick before slowly increasing his pace. You are beginning to enjoy Ivan's dick in your ass as Fedor sits down in front of you watching you get fucked which turns you on. While Ivan continues pounding your ass, Fedor gets up and tells Ivan. "Hey Ivan, don't go hogging my girl now."`);
    qspCall(s, 'boyStat', 'A3');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spit roast', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/hall2.mp4');
    scene.text('Ivan chuckles then looks around then grabs you by the waist and guides you to a nearby stool then sits you down on it. Fedor walks in front of you and presses his dick against your lips as you happily open your mouth, welcoming his dick inside as you feel Ivan\'s hands on your waist, lifting your ass up off the stool then inserting his dick slowly into your ass. You do your best to match Ivan\'s thrusts with your own hips as you continue to please Fedor the best you can.');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'arousal', 'bj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Double penetration', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/hall3.mp4');
    // TODO-QSP: dynamic text: After a few minutes Ivan grabs your legs and lifts you up without removing his d...
    scene.text(`After a few minutes Ivan grabs your legs and lifts you up without removing his dick from your ass. Ivan then walks to the couch with you in his arms, he then leans back onto the couch causing his dick to go even further in your anus evoking a loud moan from you, enjoying every inch of his dick inside you. You finally open your eyes to see that Ivan was holding your legs open as Fedor was entering your vagina immediately resulting in another loud moan as you are filled in both of your holes by 2 big cocks. The pleasure feels intense as they both continue roughly fucking you. After a few minutes you can hear Ivan saying "It's almost end time. Where do you want it ${((s as any).pcs_nickname ?? 0)}?"`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'arousal', 'anal', (-5), 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1  &&  (!((s as any).IvanPregChat ?? 0))) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/double.mp4');
    // TODO-QSP: dynamic text: "I want both of you to fill me up at the same time. Think you can do that?" Fedo...
    scene.text(`"I want both of you to fill me up at the same time. Think you can do that?" Fedor nods and Ivan has a puzzled look on his face as he says, "Uhh sure, I'm down." as he picks up the pace. You lay in between Ivan and Fedor completely in a trance of pleasure, waiting for them to finish and soon enough you hear them groan as you feel a warm rush filling both your anus and womb simultaneously, causing all of you to let out a perfectly in sync moan as they pump their seed into both of your holes. While you are catching your breath Ivan pulls out from under you and asks "${((s as any).pcs_firstname ?? 0)} I trust that you are on the pill… right?"`);
    // TODO-QSP: dynamic text: You lower your head and turn away as you hesitantly reply, "Well… Not exactly…" ...
    scene.text(`You lower your head and turn away as you hesitantly reply, "Well… Not exactly…" Ivan shoots Fedor a shocked look. "Fedor you are intentionally getting ${((s as any).pcs_firstname ?? 0)} pregnant?!" Fedor scratches the back of his neck as he responds, "Yeah we've both decided to take our relationship to the next level." Ivan says, "I hope you both know what you are doing. I trust that you will both find a way to make it work." as he gets dressed and leaves the house. Fedor slowly turns to you "I know things will work out great for us." you respond, "Of course it will. Nothing can tear us apart." Fedor gives you a kiss on your forehead before lifting you up and carrying you to the bathroom to get cleaned up.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum8.mp4');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).FedorLoveTalk ?? 0) === 1  &&  ((s as any).IvanPregChat ?? 0) === 1) {
        scene.actions([
          { label: 'Inside me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/double.mp4');
    // TODO-QSP: dynamic text: "I want both of you to fill me up at the same time. Think you can do that?" Fedo...
    scene.text(`"I want both of you to fill me up at the same time. Think you can do that?" Fedor and Ivan nod as Ivan says, "Damn right, I can do that. You ready Fedor?" Fedor responds, "Hell yeah, it should be easy enough." as he picks up the pace. You lay in between Ivan and Fedor completely in a trace of pleasure, waiting for them to finish and soon enough you hear them groan as you feel a warm rush filling both your anus and womb simultaneously causing all of you to let out a perfectly in sync moan as they pump their seed into both of your holes. While you are catching your breath Ivan pulls out from under you. "${((s as any).pcs_firstname ?? 0)} You fuck like a bunny. I love it and can't wait till next time."`);
    scene.text('Fedor turns to him. "Only when I\'m involved. I don\'t want you getting any ideas Ivan." Ivan laughs as he responds, "Worried that I\'m going to take your girl? You have nothing to worry about Fey. I would never steal my friend\'s girl." as he gets dressed and leaves the house. Fedor chuckles then turns to you "You know I was just kidding with Ivan right? I trust you completely." You respond, "Of course. I know that we will be together forever." Fedor gives you a passionate kiss before lifting you up then carrying you to the bathroom to get washed up.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum8.mp4');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'All over my face', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/cumface3.mp4');
    scene.text('Ivan grins as he nods then continues to pound your ass before he pulls out of you then pulls you to your knees as he and Fedor jerk off right in front of you. You patiently watch them with a very seductive smile, waiting for their cum to shower you. Ivan cums first, spraying his load all over your face with some of it getting in your hair and then Fedor grabs the top of your head and tilts it toward his dick as he lets out a groan and showers you with his seed. You do your best to catch as much of it in your mouth but most of it covers your face and chest.');
    // TODO-QSP: dynamic text: After they are done, they both watch you dripping with their cum as Ivan says, "...
    scene.text(`After they are done, they both watch you dripping with their cum as Ivan says, "Damn ${((s as any).pcs_firstname ?? 0)} you have got to be the naughtiest little minx I ever met." You tilt your head while sharing a playful smile as Ivan gets dressed and waves goodbye then walks out of the house. Fedor gives you a light pat on the butt "I hope you enjoyed yourself. I know I did." you lean forward and give him a kiss on the cheek. Fedor then lifts you up and carries you to the bathroom to get washed up.`);
    scene.img('images/shared/sex/cum/facial/cumface2.mp4');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Bathroom Wash'] },
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

function enterLivingroom1(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa1.mp4');
  scene.text('While kissing Fedor, you begin rubbing down his chest, lightly rubbing on his muscles as Fedor paws at your ass, clearly getting hard as you both feel up on each other. You reach down and grab onto his penis and gently begin stroking it as you stare Fedor in the eyes. You feel Fedor\'s hand on the back of your head pushing you down to his crotch and you happily wrap your lips around his dick, licking and sucking his cock as thoroughly as possible.');
  qspCall(s, 'arousal', 'hj', 5, 'dom');
  qspCall(s, 'arousal', 'bj', (-5), 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Ride him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa2.mp4');
    scene.text('After a few minutes of sucking Fedor\'s dick, you stand up and turn around for Fedor, giving him a clear view of both of your holes and he begins rubbing and licking your pussy. You continue enjoying his licking but decide that you want more, so you lightly push Fedor\'s head away and slowly insert his dick into your pussy and then begin riding him. Fedor lays back, clearly enjoying you riding him as you enjoy the feeling of control as you realize that you are in charge of the thrusts and in full control of both, yours and Fedors pleasure. Fedor leans forward and begins kissing your lips dragging you back on the sofa with him.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa3.mp4');
    scene.text('You turn to face Fedor while his penis is still inside you, causing a very pleasant sensation for you both, evoking a moan from you and Fedor almost simultaneously. You begin enjoying the new position as it gives you more control of your thrusts as you quicken your pace, pushing Fedor\'s dick deeper inside you using only your weight. Fedor occasionally smacks your ass just hard enough to cause you to flinch but not hard enough to hurt you, showing you that Fedor likes to remain some sense of control but not willing to hurt you in doing it. Fedor leans forward and kisses you on the cheek before whispering "How does my girl want her reward today?" with a mischievous smile on his face.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum3.mp4');
    // TODO-QSP: dynamic text: You continue thrusting faster, riding Fedor's cock as fast as you can as you sta...
    scene.text(`You continue thrusting faster, riding Fedor's cock as fast as you can as you stare into his eyes. Fedor's head tilts back and he lets out a loud groan as he begins filling you with his seed. You push down on his dick making sure that he is as far inside you as possible. After Fedor finishes filling you up he looks you in the eyes "${((s as any).pcs_firstname ?? 0)} you're so perfect. I can't think of anyone who could make me happier than you." Which you respond, "I'll always be here to keep you happy and fully satisfied, my love." Fedor leans forward and gives you a passionate kiss before getting dressed and leaving the room.`);
    scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Jerk him off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/handjob/handjob2.mp4');
    // TODO-QSP: dynamic text: You give Fedor a kiss and slowly climb off him then drop to your knees as you be...
    scene.text(`You give Fedor a kiss and slowly climb off him then drop to your knees as you begin jerking him off. You stroke Fedor's penis faster while staring into his eyes waiting for him to finish then his eyes begin squinting as he groans and releases his load which leaks down your hands. You enjoy watching as his penis squirts cum into the air and leaking down your hands. Fedor takes a few seconds to catch his breath then looks down at you "${((s as any).pcs_firstname ?? 0)} your hands are so soft." as he gets dressed and walks out of the room to get cleaned up.`);
    scene.img('images/shared/sex/cum/handjob/hand0,0.mp4');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
      { label: 'In my mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj1.mp4');
    // TODO-QSP: dynamic text: You give Fedor a kiss and slowly climb off him then drop to your knees as you wr...
    scene.text(`You give Fedor a kiss and slowly climb off him then drop to your knees as you wrap your lips around his dick and begin sucking it rapidly until you hear Fedor groan. You feel a warmth filling your mouth and you do your best to swallow every drop of Fedor's precious nectar, knowing how much he enjoys it when you swallow his cum. After you finish, Fedor strokes your cheek. "${((s as any).pcs_firstname ?? 0)} you always know just what I need." He then kisses your forehead before getting dressed then leaving the room.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj3.mp4');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLivingroom2(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa4.mp4');
  scene.text('Fedor gets up off the sofa to remove his pants as you crawl on the sofa up to him and grab his dick then lightly pull it to your face as you wrap your lips around it and begin sucking Fedor\'s dick. Fedor leans his hips forward gently pushing his cock deeper down your throat as you open your mouth wider to welcome it. You stare into his eyes as he rubs your cheeks in an adoring manner. After a few minutes Fedor lightly pull away from you then moves closer to you.');
  qspCall(s, 'arousal', 'bj', 5, 'dom');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa5.mp4');
    scene.text('Without breaking eye contact he lifts you up and begins kissing you all over your neck as he lifts you up by your ass and pushes you down onto his dick causing a rush of pleasure to fill your lower abdomen. Fedor is holding you up almost effortlessly and you can\'t help but feel so turned on as he holds you in his arms, fucking you harder with each thrust. You close your eyes and focus on the pleasure building while feeling Fedor\'s strong hands holding you up by your ass and his large dick thrusting into your pussy.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your eyes', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa6.mp4');
    scene.text('You finally open your eyes to see Fedor panting as he holds you, noticing that Fedor is starting to tire, you whisper in his ear "You can put me down now. I wouldn\'t want my man to get weary before I have the change to drain his balls of their precious nectar." Fedor chuckles as he lowers you to the ground but doesn\'t stop kissing and caressing you. You get down on your knees to finish him off but it seems that he has other plans when he lightly pushes you to the ground in a playful manner. Fedor inserts his dick back inside you as you spread your legs to give him easier access. Fedor continues fucking you as he whispers in your ear "I\'m about to empty my balls. Where would you like it?"');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Cum inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa6.mp4');
    // TODO-QSP: dynamic text: Fedor hears you and continues to increase the pace of his thrust until you feel ...
    scene.text(`Fedor hears you and continues to increase the pace of his thrust until you feel him tightly grip your hips as begins filling your womb with his seed. You wrap your legs around Fedor's hips, pushing him deeper inside you as the warmth of his seed fills your womb. Fedor looks down at you then gives you a light kiss on the lips before saying "${((s as any).pcs_firstname ?? 0)} you are so precious to me. You realize that, don't you?" You return the kiss and respond, "And you are everything to me. I love you Fyodor." Fedor leans forward and gives you a long passionate kiss before climbing off of you and getting dressed.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa6.mp4');
    // TODO-QSP: dynamic text: "Pull out and cover me with your cum." Fedor begins picking up his pace, clearly...
    scene.text(`"Pull out and cover me with your cum." Fedor begins picking up his pace, clearly trying to finish as quickly as possible and after a few seconds he pulls out of you and begins spraying his cum all over your chest and stomach as you grab onto his dick doing your best to milk him dry while feeling the squirt of warm cum covering you body. You continue milking him until he's finished and then rub all the cum off his dick while rubbing it all over your chest, enjoying the warmth. Once you're done, Fedor admires your body, covered in his cum. "You really seem to love my cum. Don't you ${((s as any).pcs_nickname ?? 0)}?" you respond, "Of course I do, your cum is just the moisturizer I need to keep my skin nice and… moist for you." You and Fedor begin laughing as he picks you up and carries you to the bathroom to clean up.`);
    scene.img('images/shared/sex/cum/cum110.mp4');
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
      { label: 'On my face', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/sofa6.mp4');
    // TODO-QSP: dynamic text: Fedor grins as he pulls out of you and climbs over you while jerking his penis i...
    scene.text(`Fedor grins as he pulls out of you and climbs over you while jerking his penis in front of your face. You stare at Fedor's penis while licking your lips and soon you see it begin to erupt and spray cum all over you face. You close your eyes while enjoying the warmth of his seed on your face, giving Fedor a pleased smile as he continues pumping your face with his cum. When Fedor finishes he looks down to you "You really seem to enjoy cum on your face. Don't you ${((s as any).pcs_firstname ?? 0)}?" Which you respond, "Only yours babe." Fedor flashes a bright smile as he replies, "That's my girl" Fedor then gets dressed and walks out of the room.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum9.mp4');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLivingroom3(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball1.mp4');
  scene.text('');
  scene.actions([
    { label: 'Lay on the ball', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball2.mp4');
    scene.text('');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball3.mp4');
    scene.text('');
    qspCall(s, 'arousal', 'anal', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball3.mp4');
    scene.text('');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball3.mp4');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball3.mp4');
    scene.text('');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball3.mp4');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Ride Fedor', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball4.mp4');
    scene.text('');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball5.mp4');
    scene.text('');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball5.mp4');
    scene.text('');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball3.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball5.mp4');
    scene.text('');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/ball3.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathroom1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('You pull off of Fedor then tell him "I have to use the bathroom real quick. I\'ll be right back." You then get up, turn away and walk to the bathroom.');
  scene.actions([
    { label: 'Walk to bathroom', goto: ['FedorEv4', 'Bathroom'] },
  ]);
  scene.build();
}

function enterBathroomCam(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/cam1.jpg');
  // TODO-QSP: dynamic text: You pull down your pants and sit on the toilet as you ponder what you and Fedor ...
  scene.text(`You pull down your pants and sit on the toilet as you ponder what you and Fedor will do today. You are so lost in though, that you don't even notice that Fedor has entered the room until you see his shadow loom over your feet. You look up to see Fedor holding a camera and can't help but laugh when you see a goofy look on his face as he stands there recording you. Fedor then asks "Hey ${((s as any).pcs_firstname ?? 0)} care to put on a show for the camera?"`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/cam2.jpg');
  scene.actions([
    { label: 'Sounds like fun', goto: ['FedorEv4_sex', 'Bathroom Cam 2'] },
    { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/no1.jpg');
    scene.text('You quickly pull up your pants then cover your face with your hands as you tell Fedor "I don\'t think that making a "sex tape" is a good idea."');
    // TODO-QSP: dynamic text: Fedor responds, "C'mon <<$pcs_nickname>> no one outside of this room will ever s...
    scene.text(`Fedor responds, "C'mon ${((s as any).pcs_nickname ?? 0)} no one outside of this room will ever see it."`);
    scene.text('You speak to Fedor in a more stern voice "I\'m not going to risk the chance of anyone getting that video."');
    scene.text('Fedor responds in a fake sad voice. "You don\'t trust me?"');
    scene.actions([
      { label: 'Alright fine. I trust you', goto: ['FedorEv4_sex', 'Bathroom Cam 2'] },
      { label: 'I said no', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/no2.jpg');
    scene.text('You shoot Fedor a firm stare "I said <b>NO!</b>" Fedor recoils back and then you take a deep breath then tell Fedor "It\'s not that I don\'t trust you but someone could swipe or even hack your phone then share the video with all their friends or even upload it online."');
    scene.text('Fedor nods "I understand… You are just worried that the camera will add 200 pounds to you, aren\'t you?"');
    scene.text('You laugh as you push him against the counter, almost knocking him down on it as you reply "I\'m just worried that your fat head will get in the way and ruin the whole video." You and Fedor burst into laughter as he closes the camera and winks at you as he walks out of the bathroom.');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv4', 'Quick Wash'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathroomCam2(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorCam = ((s as any).FedorCam ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/cam3.jpg');
  scene.text('Fedor happily lifts your shirt as he asks "How about you take off that shirt and show me your tits?"');
  scene.actions([
    { label: 'Take off your shirt', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/cam4.jpg');
    scene.text('You remover your shirt and continue staring into the camera lens, feeling excitement, knowing that you are topless in front of a camera. Fedor begins pulling at your pants "Now, let\'s see what you have under those pants, Shall we?" You think about it but then decide to turn the tables on Fedor. "I will show you <b>BUT</b> you have to show me what you\'re hiding under there." You say as you begin pull at his pants.');
    scene.actions([
      { label: 'See what Fedor does', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/cam5.jpg');
    scene.text('Not needing any more persuasion, Fedor quickly removes his pants and begins jerking his penis as he said "Alright I did part, It\'s your turn." You respond, "A deal\'s a deal." as you begin removing your pants. Fedor begins circling around you, recording you from all sides as you are standing in front of him, in the nude. You are feeling more and more turned on as he records you and after a few minutes Fedor asks "What kind of show will we be having today?"');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blowjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/cambj1.jpg');
    scene.text('You flash Fedor a playful smile as you slowly drop to your knees in front of him and begin to gently kiss the tip of his penis repeatedly as he continues recording you. You almost forget about the camera as you close your eyes, getting more into feeling of his warm penis pressed against your lips but eventually open you eyes and look up at Fedor to see a very pleased smile on his face.');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/cambj2.jpg');
    scene.text('Fedor starts patting your head as you continue to kiss and lick the tip of his penis until he begins pushing your head toward his pelvis, forcing his dick into your mouth as you open your mouth welcoming it inside. You begin sucking and licking Fedor\'s dick, doing your best to please him as he moans while rubbing your head. Fedor\'s moans get more frequent as you pick up the pace and after a few more seconds Fedor tells you "I\'m gonna cum."');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your face', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/shared/sex/cum/facial/cumface1.mp4');
    scene.text('You pull Fedor\'s dick out of your mouth and begin licking the tip until he groans. You pull away from his dick and open your mouth as he covers your face with his seed, leaving your face feeling warm and sticky as his cum begins dripping down your face and onto your chest. You look up to see Fedor with a very satisfied look on his face while still keeping the camera trained on you causing you to feel flushed as you just remember that he was recording you the whole time. Fedor pats your head as he said "What a great performance. You were great." while closing the camera and walking out of the bathroom.');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
      { label: 'In your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/cum1.jpg');
    // TODO-QSP: dynamic text: You continue sucking on Fedor's dick faster as you hear him groan and fill your ...
    scene.text(`You continue sucking on Fedor's dick faster as you hear him groan and fill your mouth with his seed which begins dripping down you lip. You slowly look up to see Fedor with a very pleased smile as he keeps the camera trained on you, causing you to feel flushed as you just remember that he was recording you the whole time. Fedor pats your head as he said "You always give the best blowjobs ${((s as any).pcs_nickname ?? 0)}." while closing the camera and walking out of the bathroom.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/cum2.jpg');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Footjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/camfj1.jpg');
    scene.text('You grab Fedor by the shoulders and pull him down with you as you both land on your knees. Fedor raises an eyebrow noticeably a little puzzled at your actions but his look fades when he observes you wrapping your feet around his penis. You wink at Fedor as you begins rubbing the tip of his dick with your toes and after a few seconds you wrap your toes around is cock and begin stroking it gently.');
    qspCall(s, 'arousal', 'footjob', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/camfj2.jpg');
    scene.text('Fedor lets out a light moan, encouraging you to wrap the base of your feet around his dick, stroking his penis as firmly as you can. You stare into the camera as you spread your legs wider, giving it a better view, knowing that Fedor will be watching this video later. Fedor stares into your eyes as he said "I\'m ready to cum."');
    qspCall(s, 'arousal', 'footjob', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/fj3.mp4');
    scene.text('You stroke his cock faster as he pushes toward you while holding onto your hips then groans as he shoot his load on your face and chest. Fedor\'s cum, almost hits you in the eye causing you to quickly turn away. After Fedor is fully spent he looks down at you with a playful smile "I\'ve seen some girls on the field, who were good with their feet but not the same way you are." You giggle as you place your feet on his chest and give him a playful push. Fedor leans forward and lifts one of you feet up to his face, then gives it a kiss before getting dressed and leaving the bathroom.');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'footjob', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/camanal1.jpg');
    scene.text('You walk up to Fedor and whisper in his ear "I want you to fuck my ass. Fedor gives you a smile as he places his camera on the ground in front of you then walks around you, grabbing you by the hips and pushing you into a kneeling position as he inserts his penis in your ass. You feel a jolt of pain as it first enters your anus but Fedor waits a few seconds for your ass to adjust to his dick then begins thrusting his hips into yours, ramming his dick deeper in your ass.');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/camanal2.jpg');
    scene.text('After a few seconds all the pain fades and is replaced with pleasure as you begin pushing your hips against Fedor\'s, pushing his dick deeper inside you. You take this time to look toward the camera on the floor in front of you and give it a wink as you continue fucking Fedor\'s dick with your ass. Fedor lightly smacks your ass as he tells you "Where do you want my cum?"');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On my back', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/camanal1.jpg');
    scene.text('Fedor nods and then increases his pace, ramming his pelvis into your ass causing the sound of your bodies slapping together to fill the room until Fedor lets out a groans as he pulls out fo you and begins painting your back with his cum. After Fedor finishes he gives your ass a nice firm smack as he gets up and picks up his camera. Fedor begins wiping a drop of cum off the lens as he turns to you "I\'m sure this will look great on that porn site." as he flashes you a playful grin. You point your finger at him with a smile on your face "Don\'t you dare." and you both laugh as Fedor gets dressed and leaves the bathroom.');
    scene.img('images/shared/sex/cum/cum5.mp4');
    qspCall(s, 'cum_call', 'back', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
      { label: 'In my ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/camanal1.jpg');
    // TODO-QSP: dynamic text: You turn to face Fedor as you say, "I want you to fill my as with your cum." Fed...
    scene.text(`You turn to face Fedor as you say, "I want you to fill my as with your cum." Fedor flashes a wide smile as he replies, "As you wish milady." and begins increasing his pace while giving your ass an occasional smack. After a few seconds Fedor grips your hips firmly and begins filling your ass with his seed as you thrust your hips against his, doing your best to milk him dry. Fedor takes a few seconds to catch his breath as he pulls out of you causing a jet of sperm to pour out of your ass, causing a loud moan to escape your mouth. Fedor picks up the camera and says to himself, "Maybe I should have placed the camera on the other side… oh well, I'm sure it will come out great anyway." he then looks to you "Good job ${((s as any).pcs_nickname ?? 0)} you were great." as he gets dressed and leaves the bathroom.`);
    scene.img('images/shared/sex/cum/analcreampie/cumanal2.mp4');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Vaginal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/camvag1.jpg');
    scene.text('You give Fedor a mischievous smile as you reply, "How about you pound my pussy? I need your hard dick inside me." Fedor has a pleased yet surprised look on his, it seems he was not expecting you to speak in that manner. Fedor places the camera at the edge on the sink while using his hair gel bottle to keep it at a good angle angle. After his camera is set up, Fedor picks you up off your feet then lowers you to the ground. You feel the cold floor as he lowers you on your back but the cold sensation soon fades and instead you feel Fedor spreading your legs then entering your vagina.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/camvag2.jpg');
    scene.text('The feeling of Fedor\'s dick in your pussy fills your body with a feeling of bliss. Fedor thrusts his hips, pushing his dick further inside your vagina as he lifts your leg off the ground. You turn to the camera then blow a kiss at it, hoping to please Fedor when he watches it. After a few minutes, Fedor leans over your shoulder and whispers in your ear "I\'m ready to cum for you."');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum4.mp4');
    // TODO-QSP: dynamic text: You turn around and look Fedor in the eyes as you say, "Fill me with your seed."...
    scene.text(`You turn around and look Fedor in the eyes as you say, "Fill me with your seed." Fedor gives you a pleased smile as he nods and increases the pace of his thrusts. Soon you hear Fedor groan then feel his seed filling your womb with its warmth. You thrust your hips into Fedors pelvis, trying your best to get his seed as deep inside you as possible. After Fedor catches his breath he pulls out of you, causing a jet of sperm to erupt from your vagina and leak onto the floor. Fedor picks up his camera then watches the video for a few seconds before turning to you "The video came out great. Thank you ${((s as any).pcs_firstname ?? 0)}." you give Fedor a wide smile as he gets dressed and leaves the room.`);
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum2.mp4');
    // TODO-QSP: dynamic text: You turn to Fedor and look into his eyes "I want you to paint my ass cheeks whit...
    scene.text(`You turn to Fedor and look into his eyes "I want you to paint my ass cheeks white." He nods with a smile on his face as he groans and paints your ass with his cum. You can feel the trickles of cum covering your ass then slowly leaking down to the floor. Fedor gets up then picks up his camera. Fedor starts watching the video for a few seconds then turns to you "The video came out great. Excellent job ${((s as any).pcs_nickname ?? 0)}." you happily nod at Fedor as he gets dressed and leaves the room.`);
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
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

function enterBathroom2(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/Cam/cam1.jpg');
  scene.text('You sit on the toilet thinking about how they make gummy bears when you see a shadow loom over you. You look up to see Fedor\'s dick right in your face, causing you to gasp in shock as Fedor thrust his penis into your open mouth. You look up to see Fedor standing over you with a mischievous smile. "I thought you might like something to suck on but sadly I\'m all out of lollipops." You slowly pull his dick out of your mouth which you massage it with your hands. "Mmmm my favorite flavor, Fyodor." and you give him a wink as you slide his penis back in your mouth.');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex1.jpg');
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex2.jpg');
    // TODO-QSP: dynamic text: Fedor begins undressing you as you continue sucking his dick. After a few second...
    scene.text(`Fedor begins undressing you as you continue sucking his dick. After a few seconds Fedor lifts you off the ground and carries you to the bathtub where you are seated on the ledge. You reach out and grasp Fedor's cock and begin slowly jerking him off as you stare deeply into his eyes, doing your best to convey your affection without speaking. Fedor returns the stare as he said "${((s as any).pcs_firstname ?? 0)} you are so beautiful." which causes your cheeks to burn red as you continue stroking his hard cock as he lets out soft moans.`);
    qspCall(s, 'arousal', 'foreplay_give', 5);
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Vaginal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex3.jpg');
    scene.text('Fedor reaches down and begins rubbing your clitoris as you continue jerking him off. After a few seconds he lightly pushes you back then inserts his hard penis into your wet slick vagina, causing you to moan loudly as you feet a sudden burst of pleasure between your legs. Fedor begins thrusting his dick further inside you, causing you to tilt your head back as you feel waves of pleasure engulfing your body. Fedor continues increasing the pace until he eventually slows down. Fedor looks down at you. "I\'m cumming."');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'vaginal', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex3.jpg');
    // TODO-QSP: dynamic text: Fedor reaches for your chest and begins lightly squeezing and rubbing your breas...
    scene.text(`Fedor reaches for your chest and begins lightly squeezing and rubbing your breasts as he increases his pace. Fedor suddenly grips your waist with both hands and groans as he begins filling your womb with his seed. The warmth of his seed spraying inside you, fills you with a burst of excitement as you thrust your hips milking every last drop out of Fedor's dick. Fedor takes a moment to catch his breath then looks down at you. "${((s as any).pcs_firstname ?? 0)} you're the most incredible girl I've even met."`);
    scene.text('You respond, "I just know what you like babe and I give it." Fedor gives you a grateful smile as he pulls out of you causing his cum to leak out of you and on the ground. Fedor leans forward and gives you a gentle kiss before getting dressed and leaving the room.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex3.jpg');
    scene.text('Fedor nods as he thrusts inside you a few more times then pulls out, covering your chest with his cum as you reach out and start jerking his dick, milking him as best you can while moaning as you feel his warm seed covering your chest. After Fedor finishes spraying you with his load, he looks down at you and says, "You\'re really good at milking. Were you raised on a farm or something?" You give him a smirk as you reply, "No, I\'ve never milked cows, only men." He breaks out in laughter and then responds, "Not too many men I hope." You turn away from Fedor as you say, "Well a girl doesn\'t kiss and tell." he smirks and gives you a playful stare before getting dressed and walking out of the bathroom.');
    scene.img('images/shared/sex/cum/cum2.mp4');
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathroom3(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  qspCall(s, 'boyStat', 'A5');
  scene.text('VKwip');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex4.jpg');
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'VKwip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex5.jpg');
    scene.text('VKwip');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'VKwip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex6.jpg');
    scene.text('VKwip');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex6.jpg');
    scene.text('VKwip');
    scene.img('images/shared/sex/cum/cum81.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'On my ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/sex6.jpg');
    scene.text('VKwip');
    scene.img('images/shared/sex/cum/cum3.mp4');
    qspCall(s, 'cum_call', 'back', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKitchen1(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen.mp4');
  scene.text('As soon as you enter the kitchen Fedor grabs you by your hips then spins you around and lightly pushes you against the counter as he begins kissing you lustfully. You break off the kiss and drop to your knees in front of him then begin licking the tip of Fedor\'s penis causing him to moan. You lick his dick a few more times then slowly wrap your lips around his shaft, trying to take the full length into your mouth.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen.mp4');
    scene.text('You continue to suck Fedor\'s dick as you look up at him, doing your best to please him. You decide that you want some pleasure too, so you stand up then push Fedor onto a nearby chair and then begin riding his hard cock, Moaning at the sensation of his dick rubbing against your g-spot. You begin thrusting faster, giving into the pleasure while moaning loudly and after a few seconds Fedor pushes against you causing both of you to fall to the ground.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen1.jpg');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'vaginal', (-5), 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On the floor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen2.jpg');
    scene.text('You don\'t stop riding his dick even when on the floor. Fedor grabs your hips as he begins thrusting even harder, ramming his cock deeper inside your pussy. You are so entranced at the pleasure that you don\'t even notice that you are almost screaming in pleasure which only gets Fedor more excited as he thrusts faster. After a few seconds Fedor tells you "I\'m gonna cum."');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen2.jpg');
    scene.text('Fedor increases his pace as he gives your ass a quick smack. Fedor groans and you feel his warm seed filling your womb. You press your hips against Fedor\'s as he finishes pumping you with his seed, Fedor then pulls out of you, causing the cum inside your vagina to leak out which mildly tickles you as it slides down your leg. Fedor then says, "I really lucked out when I met you." you turn to Fedor and respond, "We\'re both lucky." Fedor give you a wink as he gets dressed then leaves the kitchen.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum4.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Kitchen'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen2.jpg');
    // TODO-QSP: dynamic text: Fedor gives your ass a light smack and then pulls out of you as he begins sprayi...
    scene.text('Fedor gives your ass a light smack and then pulls out of you as he begins spraying his load on your leg. You can feel trickles of Fedor\'s warm cum dripping onto your leg. Fedor gives your ass a gentle rub. "No matter where we go you always know how to show me a good time." You turn to Fedor as you respond, "The only thing we need for a good time is \' + $func(\'wrap\', \'accent\', \'<b>You</b>\') + \' and <font color="#ff00cc"><b>Me</b></font>." Fedor gives your ass one last smack as he gets up then dresses himself before leaving the kitchen.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum2.mp4');
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKitchen2(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen3.jpg');
  scene.text('You enter the kitchen with Fedor and he begins kissing your neck as he lightly grabs and squeezes your breasts. Fedor\'s hands raises up to your shoulders, he then pushes you onto your knees and then presses his penis against your lips You welcome his dick inside your mouth by opening up and wrapping your lips around Fedor\'s dick, licking and sucking his cock as you rub on his balls with your finger tips.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen4.jpg');
    scene.text('You continue pleasuring Fedor with your tongue until you feel his hands on you shoulders, pulling you up off your feet and then onto the nearby counter. You flinch when you feel the cold counter pressed against your ass but soon that feeling is replaced by Fedor\'s fingers rubbing against your clitoris, bringing you a gradual feeling of pleasure. After a few seconds Fedor lowers his head to your crotch and begins licking your clitoris gently which enacts a moan from your mouth.');
    qspCall(s, 'arousal', 'cuni', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen5.jpg');
    scene.text('Fedor continues pleasing you as he picks up the pace increasing the pleasure building up inside you. After a few minutes, Fedor grabs the counter with both hands then lifts himself to his feet. Fedor begins rubbing his penis against your vaginal lips until you feel his dick slide into your pussy. Fedor begins thrusting while gradually increasing his pace as he holds your legs up on his shoulders. After a few more minutes, Fedor looks you in the eyes. "I\'ve got some cum ready for you. Where would you like it?"');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen5.jpg');
    // TODO-QSP: dynamic text: You wrap your legs around Fedor as he thrust his dick further inside you, Fedor ...
    scene.text(`You wrap your legs around Fedor as he thrust his dick further inside you, Fedor then lets out a groan as he begins pumping his seed into your womb. You can feel his penis throbbing inside you, filling you up with his seed. Fedor looks down to you "Your such a great fuck ${((s as any).pcs_nickname ?? 0)}." you respond, "Well that's only one of my many talents." to which Fedor replies, "You'll have to show me those other talents sometime." Fedor then gets dressed then walks out of the room.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Kitchen'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'On my chest', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/sex/kitchen5.jpg');
    scene.text('Fedor nods and then gives you a few more thrusts as you spread your legs in anticipation. Fedor quickly pulls out of you then groans and begins painting your chest with his cum as you reach out for his penis with both hands, milking him. You feel the warmth of his cum gradually covering your chest as you continue milking him as best you can. After Fedor is spent, he looks down at you, "I love seeing you covered in my cum. You look so sexy." You give Fedor a mischievous smile as he pulls away from you and gets dressed before walking out of the kitchen.');
    scene.img('images/shared/sex/cum/cum110.mp4');
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedroomCam(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  (s as any).FedorFilm = ((s as any).FedorFilm ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'stat', '');
  if (((s as any).fedorKozlovQW ?? 0) < -10) {
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  // TODO-QSP: dynamic text: As you both enter the bedroom, Fedor walks up to his desk then opens a drawer an...
  scene.text(`As you both enter the bedroom, Fedor walks up to his desk then opens a drawer and pulls out a camera. He turns to you. "Hey ${((s as any).pcs_nickname ?? 0)}, how about we make a little video, just for us?"`);
  scene.actions([
    { label: 'Sounds good to me', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/cam1.mp4');
    scene.text('Fedor\'s face lights up as he responds, "Great, let\'s start with you taking off your clothes." Fedor turns on his camera as you begin slowly stripping in front of the bedroom mirror. After removing your top you slowly turn to Fedor, to see him rubbing on his crotch as he records you. You continue stripping, removing your panties while feeling both embarrassed and turned on at the same time, feeling your face growing flushed.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/cam2.mp4');
    // TODO-QSP: dynamic text: You can feel your heart pounding as you stand naked, in front of the camera. Fed...
    scene.text(`You can feel your heart pounding as you stand naked, in front of the camera. Fedor smirks as he says, "Hey ${((s as any).pcs_firstname ?? 0)}, why don't you dance for the camera?" You stand still for a second before beginning to dance. You continue dancing while trying to do your best to move as sexy as possible. You can feel yourself getting lost in your movements and almost forget about the camera as you get more focused on moving your body. After a few seconds Fedor asks "What kind of show shall we put on today?"`);
    scene.actions([
      { label: 'Jerk him off', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/handjob1.mp4');
    // TODO-QSP: dynamic text: You push Fedor onto the bed, then begin unbuttoning his pants. You take Fedor's ...
    scene.text(`You push Fedor onto the bed, then begin unbuttoning his pants. You take Fedor's penis out of his pants, then begin slowly stroking it, as you stare at the camera. Fedor asks "How do you like my dick ${((s as any).pcs_nickname ?? 0)}?" You reply, "I love it. So warm, soft and hard." Fedor gives you a very pleased smile as he lightly moans. You begin rubbing the base of his penis while enjoying how soft and warm his dick is until you hear Fedor say, "I'm gonna cum."`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/camhj1.mp4');
    qspCall(s, 'arousal', 'hj', 5, 'dom', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/camhj1.mp4');
    scene.text('You continue rubbing Fedor\'s penis while admiring it until you hear Fedor start to groan. You suddenly feel his penis begin throbbing in your hand as he sprays his load into the air. Fedor\'s warm cum begins leaking down your hands as you look up at him with a confident grin. Fedor looks down to you and says, "Wow, you are really good with your hands." you give him a wink as he turns off the camera then gets dressed.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/camhj2.mp4');
    qspCall(s, 'cum_call', 'hands', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'hj', 5, 'dom', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj14.mp4');
    // TODO-QSP: dynamic text: You push Fedor onto the bed then begin unbuttoning his pants. You take Fedor's p...
    scene.text(`You push Fedor onto the bed then begin unbuttoning his pants. You take Fedor's penis out of his pants then begin slowly stroking it, as you stare at the camera before wrapping your lips around his shaft, causing him to let out a low moan. You begin sucking Fedor's dick while staring at the camera as he says, "You look so sexy with my dick in your mouth." you let out a low moan which seems to stimulate Fedor even more as he lets out a moan. Fedor looks down at you and says, "I'm cumming ${((s as any).pcs_nickname ?? 0)}."`);
    scene.img('images/shared/sex/blowjob/kotovbj11.mp4');
    qspCall(s, 'arousal', 'bj', 5, 'dom', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/cambj1.mp4');
    // TODO-QSP: dynamic text: You pull Fedor's penis out of your mouth then begin licking the shaft firmly. Fe...
    scene.text(`You pull Fedor's penis out of your mouth then begin licking the shaft firmly. Fedor groans then begins spraying his load in the air which shoots across the room. You begin firmly stroking Fedor's dick, milking every drop out of it while staring into the camera with a seductive grin. Fedor takes a second to catch his breath then says, "Damn ${((s as any).pcs_firstname ?? 0)}, You really know how work your tongue." as he packs up the camera then gets dressed.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/lick4.mp4');
    qspCall(s, 'cum_call', 'hands', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5, 'dom', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
      { label: 'In your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/cambj1.mp4');
    // TODO-QSP: dynamic text: You continue sucking on Fedor's dick while staring at the camera, feeling more t...
    scene.text(`You continue sucking on Fedor's dick while staring at the camera, feeling more turned on as Fedor continues filming you. Fedor suddenly groans and you feel his cum shooting down your throat which you happily swallow, knowing how much it turns Fedor on when you swallow his cum. Fedor looks down at you with a very pleased smile. "You were outstanding ${((s as any).pcs_firstname ?? 0)}. Thank you." you give him a wink as he closes the camera then gets dressed.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum1.mp4');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5, 'dom', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/anal8.mp4');
    scene.text('You give Fedor a wink then walk up to a nearby stool and bend over. You lick your fingertips then begin massaging your anus with your fingers while giving Fedor a very inviting look.');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    // TODO-QSP: dynamic text: Fedor gives you a seductive smile as he takes off his pants then approaches you ...
    scene.text(`Fedor gives you a seductive smile as he takes off his pants then approaches you and soon you feel his penis tip pressing against your anus. Suddenly you feel Fedor's penis enter your ass causing a jolt of pain. Fedor holds still for a few seconds, giving your ass some time to adjust to his dick before slowly fucking your ass. After a few minutes of Fedor fucking your ass he says, "${((s as any).pcs_firstname ?? 0)} are you ready for my cum?"`);
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/shared/sex/anal/doggy/anal9.mp4');
    // TODO-QSP: dynamic text: You look back at Fedor then say, "Paint my ass with your cum." Fedor gives you a...
    scene.text(`You look back at Fedor then say, "Paint my ass with your cum." Fedor gives you a wink then increases his pace before pulling his penis out of your ass and painting your ass with his warm seed. You stare directly at the camera as Fedor sprays his cum all over your ass. Fedor gives your lower ass a smack before saying "You have such a tight firm ass ${((s as any).pcs_nickname ?? 0)}. I love it." You give Fedor a wink as he gets dressed.`);
    scene.img('images/shared/sex/cum/cum5.mp4');
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
      { label: 'Inside me', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/shared/sex/anal/doggy/anal9.mp4');
    // TODO-QSP: dynamic text: You turn to face the camera then say, "Cum inside my ass." Fedor gives you a ple...
    scene.text(`You turn to face the camera then say, "Cum inside my ass." Fedor gives you a pleased smile as he increases his pace. You enjoy the feeling of Fedor's big hard cock in your ass when you hear him groan and begin pumping your ass with his seed. You continue staring into the camera as Fedor fills your ass with cum until he finishes and says, "Your ass is so tight and beautiful ${((s as any).pcs_firstname ?? 0)}. Just like you." he then leans forward and gives you a kiss on your cheek before getting dressed.`);
    scene.img('images/shared/sex/cum/analcreampie/cumanal2.mp4');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Vaginal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/camvag1.mp4');
    scene.text('You turn around then place your hands on the mirror while slowly rubbing on your clitoris. Fedor realizes what you want and removes his pants before walking up');
    // TODO-QSP: dynamic text: behind you. You can feel Fedor's hand firmly rubbing on your clit, causing you t...
    scene.text(`behind you. You can feel Fedor's hand firmly rubbing on your clit, causing you to moan softly. After a few seconds, you feel Fedor's penis slowly rubbing against your vagina. Fedor's penis enters your vagina giving you a jolt of pressure followed by a building pleasure. You push back, forcing Fedor's dick even further inside your pussy and begin grinding on his dick while focusing on how good it feels inside you. You then hear Fedor whispering in your ear "${((s as any).pcs_firstname ?? 0)} I'm ready to cum for you."`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/camvag1.mp4');
    // TODO-QSP: dynamic text: You look up at Fedor's reflection. "Fill me with your cum." Fedor has a very ple...
    scene.text(`You look up at Fedor's reflection. "Fill me with your cum." Fedor has a very pleased smile on his face as he increases his pace. Fedor then groans and you feel his seed filling your womb causing you to let out a loud moan. You look up at the camera as you focus on Fedor's hard cock throbbing inside you and his warm cum filling up your pussy. After a few seconds Fedor asks "How does my cum feel ${((s as any).pcs_firstname ?? 0)}?" You reply, "It feels so warm and pleasant. Your cum belongs inside me Fyodor." Fedor gives you a sweet smile as he responds, "Ohh ${((s as any).pcs_firstname ?? 0)}, you are the sweetest, most beautiful girlfriend I could ever ask for." Fedor kisses you passionately as he closes his camera then begins getting dressed.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum10.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/camvag2.mp4');
    scene.text('You look up at Fedor\'s reflection. "Cum on my ass."');
    // TODO-QSP: dynamic text: Fedor gives your ass a firm smack as he thrust his hips a few more times before ...
    scene.text(`Fedor gives your ass a firm smack as he thrust his hips a few more times before groaning. You can feel Fedor's warm cum covering your ass and back as you bite your lips, enjoying the warmth of Fedor's cum on your back. Fedor rubs your legs as he says, "You're so sexy ${((s as any).pcs_firstname ?? 0)}." You slowly look up to Fedor and give him a wink. Fedor then pans his camera up your body, recording the cum dripping off your body before turning off the camera then getting dressed.`);
    scene.img('images/shared/sex/cum/cum5.mp4');
    qspCall(s, 'cum_call', 'back', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Sorry but I can\'t risk it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).fedorKozlovQW ?? 0) < -10) {
      scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    } else {
      scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
    // TODO-QSP: dynamic text: "Sorry Fedor but I can't risk a video like that getting out." Fedor gives you a ...
    scene.text(`"Sorry Fedor but I can't risk a video like that getting out." Fedor gives you a smile as he replies, "Don't worry ${((s as any).pcs_firstname ?? 0)}, I understand." Fedor then puts the camera away then walks up to you and gives you a soft kiss.`);
    scene.actions([
      { label: 'Lead him out of the room', goto: ['FedorEv4', 'random_sex'] },
      { label: 'Walk away', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedroom1(s: GameState, scene: SceneBuilder): void {
  (s as any).WithFedor = 0;
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/caress1.jpg');
  scene.text('As you and Fedor enter the bedroom, Fedor starts pawing at your breasts and licking your neck as he\'s undressing you. Enjoying his caress, you tilt your head back letting him undress and fondle your body. After you are undressed, you turn to Fedor and begin undressing him while licking and sucking on his neck. When you are both undressed, Fedor kisses your lips tenderly while continuing to caress your body."');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/bedroomkiss2.mp4');
  qspCall(s, 'arousal', 'kiss', 5, 'sub');
  qspCall(s, 'arousal', 'foreplay', (-5), 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Jerk him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/hj1.mp4');
    scene.text('You break off the kiss, and push Fedor onto the bed. You sit down on the bed next to him, then reach down to his penis, and wrap your fingers around his shaft, and begin slowly stocking his cock, while staring into his eyes. You can see a longing look in Fedor\'s eyes as you gently stroke his penis and feel it start to throb a bit in your hand.');
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/hj2.mp4');
    // TODO-QSP: dynamic text: Fedor brings his face to yours to kiss you as you continue jerking him off and y...
    scene.text(`Fedor brings his face to yours to kiss you as you continue jerking him off and you raise your face to match his and give him a soft passionate kiss. You can feel Fedor's tongue enter your mouth as you do your best to massage his tongue with yours while feeling your hand get a bit wet from the pre-cum leaking from Fedor's penis. Fedor then pulls away from your lips as he looks you in the eyes "${((s as any).pcs_firstname ?? 0)} Your hands are so soft. I won't last much longer."`);
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/hj3.mp4');
    // TODO-QSP: dynamic text: You continue jerking him off and Fedor realizes that you want him to cum, so he ...
    scene.text(`You continue jerking him off and Fedor realizes that you want him to cum, so he leans back and begins lightly grunting as he nears closer to climax. You continue stroking his penis, enjoying the fact you are in complete control of his pleasure at the same time happy that you are able to give your man the release he deserves. Fedor's breathing grows more rapid then stops as his penis begins throbing in your hand. Fedor's penis erupts with his warm cum which you can feel pouring down your hand. You continue milking him until Fedor sits up. "Thank you for that ${((s as any).pcs_firstname ?? 0)}. It's your turn now."`);
    qspCall(s, 'cum_call', 'hands', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Your turn', goto: ['FedorEv4_sex', 'Bedroom 3'] },
    ]);
  } },
      { label: 'Try another position', goto: ['FedorEv4_sex', 'Bedroom 2'] },
    ]);
  } },
    ]);
  } },
    { label: 'Kiss his dick', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/lick1.mp4');
    // TODO-QSP: dynamic text: You push Fedor onto the bed then climb on top of him. Fedor looks down at you in...
    scene.text(`You push Fedor onto the bed then climb on top of him. Fedor looks down at you in anticipation for what you will do next. You lick up the shaft of his penis as you reach the tip, you give his penis a soft but firm suck while staring ito his eyes. Fedor gives you a look of adoration as you passionately kiss the tip of his penis, doing you best to let Fedor know how much he means to you. Fedor smiles as he says, "${((s as any).pcs_firstname ?? 0)} I'm so lucky to have you in my life." You reply, "I can say same about you." before returning your lips to the tip of his penis, giving it a loving kiss.`);
    qspCall(s, 'arousal', 'rimming', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/lick\'+rand(2, 3)+\'.mp4');
    // TODO-QSP: dynamic text: You stare into Fedor's eyes as you begin licking the tip of his penis. Fedor let...
    scene.text(`You stare into Fedor's eyes as you begin licking the tip of his penis. Fedor lets out a moan as your tongue hits the very tip of his penis which reveals to you just how sensitive that spot is, so you continue licking his penis in a circular motion, enjoying his body flinch every time your tongue hits his tip. Fedor looks down at you and says, "${((s as any).pcs_nickname ?? 0)} you're… driving me crazy doing that. I can't hold on much longer"`);
    qspCall(s, 'arousal', 'rimming', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/lick4.mp4');
    // TODO-QSP: dynamic text: Noticing how close Fedor is to the edge of pleasure, you happily increase the pa...
    scene.text(`Noticing how close Fedor is to the edge of pleasure, you happily increase the pace of your tongue and even lick up the shaft as Fedor groans and begins shooting his cum in the air. You watch him carefully as he cums over his own chest. Watching him cum for you, gives you a warm feeling in you crotch as your vagina gets more and more wet. Fedor looks down to you "Damn ${((s as any).pcs_firstname ?? 0)} you are really a pro at this, aren't you?" You respond "Well I know what my man needs." Fedor then replies, "And I know what you need right now"`);
    qspCall(s, 'cum_call', 'hands', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'rimming', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Your turn', goto: ['FedorEv4_sex', 'Bedroom 3'] },
    ]);
  } },
      { label: 'Try another position', goto: ['FedorEv4_sex', 'Bedroom 2'] },
    ]);
  } },
    ]);
  } },
    { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj4.mp4');
    scene.text('You continue kissing Fedor for a few more seconds before dropping to your knees and licking Fedor\'s penis, teasing his dick with your tongue before wrapping your lips around the shaft and massaging it with your tongue. Fedor lilts his head back and lets out a light moan as you continue licking and sucking his hard cock. Fedor looks down at you and begins rubbing the top of your head with his left hand, obviously pleased with you.');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue sucking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj5.mp4');
    scene.text('You begin increasing the pace as you look up to Fedor then get lost in his longing eyes. You begin feel so exciting, knowing how badly he needs you right now, How much he adores what you are doing for him. The excitement makes your spine tinkle a little bit. Fedor tilts his head back as he lets out a light grunt, trying to hold back from cumming. Fedor looks down to you and says, "You\'re so damn good with your mouth. I can\'t hold back much longer."');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum1.mp4');
    // TODO-QSP: dynamic text: You let out a smile as you greatly increase the pace almost fucking his dick wit...
    scene.text(`You let out a smile as you greatly increase the pace almost fucking his dick with your throat while trying to hold back from gagging. Fedor's head quickly jerks back as his cock begins throbbing in your mouth, filling your throat with his cum. You can feel Fedor's warm cum squirting down your throat and leaking from your lips as you do your best to swallow every single drop, not wanting to waste a drop of Fedor's sweet necter. When Fedor finishes, he looks down to you and says, "You really are amazing ${((s as any).pcs_firstname ?? 0)}. It's time for your reward."`);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Receive your reward', goto: ['FedorEv4_sex', 'Bedroom 3'] },
    ]);
  } },
      { label: 'Try another position', goto: ['FedorEv4_sex', 'Bedroom 2'] },
    ]);
  } },
    ]);
  } },
    { label: '69', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/69a.mp4');
    scene.text('You take a step back then lean forward to suck Fedor\'s dick and he begins rubbing your back until his hands end up on your waist which he then grips firmly and lift you off the ground. You do your best not to let Fedor\'s dick escape your mouth as you wait to see what he does. After a few seconds on licking and suck Fedor\'s dick, you feel Fedor\'s tongue on your clitoris, lightly licking it which gives you a nice constant build of pleasure.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/69b.mp4');
    scene.text('You can feel the pressure of you weight building up in your head but continue to suck Fedor\'s dick, trying your best to return the pleasure that Fedor is giving you. After a few seconds Fedor begins stepping back to the bed, where he lays on his back, never breaking contact with your clitoris. You can feel Fedor lightly grunt as his dick leaks a little pre cum into your mouth which you happily swallow despite it\'s tart taste. Fedor pulls from your clitoris but continues rubbing it with his finger as he tells you "Are you ready to cum with me?."');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Always', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj3.mp4');
    // TODO-QSP: dynamic text: "I'm always ready to cum with you." Fedor immediately returns to licking your cl...
    scene.text(`"I'm always ready to cum with you." Fedor immediately returns to licking your clit as you continue sucking his dick, feeling the pleasure build up quickly and then feeling your clitoris heat up as your body begins squirming as waves of pleasure hit your whole body. You moan loudly as you feel Fedor's hands tighten around your hips and his penis begins throbbing in your mouth filling it with his cum which you can't seem to keep from leaking out of your mouth as you climax. After you both finish, you roll off of Fedor and catch your breath as he says, "${((s as any).pcs_nickname ?? 0)} You're the best. You know that right?" You reply, "Only the best deserves the best." Fedor give you a very passionate kiss before getting dressed then walking out of the bedroom.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vagkiss.mp4');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
      { label: 'Try another position', goto: ['FedorEv4_sex', 'Bedroom 2'] },
    ]);
  } },
    ]);
  } },
    { label: 'Footjob', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/fj1.mp4');
    scene.text('You decide to try something different as you push Fedor on the bed. You climb onto th bed in front of Fedor then sit in front of him extending your feet to his face which he happily licks while staring into your eyes. Once your feet are nice and wet you wrap them around Fedor\'s dick and begin stroking his cock with your feet as you stare into his eyes with glee, seeing how excited he seems to be for this new position.');
    qspCall(s, 'arousal', 'footjob', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/fj2.mp4');
    // TODO-QSP: dynamic text: You try to find the best way to please Fedor using only your feet and you end up...
    scene.text(`You try to find the best way to please Fedor using only your feet and you end up deciding to stroke his penis with your toes as your other foot holds his hard cock in place and to your joy, you hear a moan escape Fedor's mouth whixh notifies you that you are doing a good job pleasing him. You start increasing the pace as Fedor begins moving his hips going along with your strokes. Fedor wraps his hands around your ankles and begins rubbing it as he tells you "${((s as any).pcs_firstname ?? 0)} your feet are so smooth. I won't be able to hold on much longer at this rate."`);
    qspCall(s, 'arousal', 'footjob', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/fj3.mp4');
    // TODO-QSP: dynamic text: You greatly increase the pace of your strokes as Fedor raises up to his knees wh...
    scene.text(`You greatly increase the pace of your strokes as Fedor raises up to his knees while pushing his chest forward as his pleasure builds up fast. After a few more strokes, Fedor groans and you feel his penis begins throbbing as he sprays his load all over your chest and one drop almost gets in your eye as he covers you in his cum. After Fedor is fully spent, he looks down at you and says, "${((s as any).pcs_firstname ?? 0)} how did you get so good with your feet. I didn't know a footjob could be that amazing." You respond, "I guess all those gym classes had to be good for something right?" Fedor chuckles as he gets dressed and walks out of the room.`);
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'footjob', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Your turn', goto: ['FedorEv4_sex', 'Bedroom 3'] },
    ]);
  } },
      { label: 'Try another position', goto: ['FedorEv4_sex', 'Bedroom 2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedroom2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/caress2.jpg');
  scene.text('Fedor begins kissing you passionately as he reaches out for your hands. You continue kissing as your hands meet up and you both interlock your fingers which gives you a warm feeling inside feeling Fedor\'s fingers wrapped around yours, his lips on yours, his tongue caressing yours, his chest pressed against yours and his heart beating at the same pace as yours. Fedor gently pulls away from your lips then asks "What do you desire, my love?"');
  qspCall(s, 'arousal', 'kiss', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Missionary', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vag.mp4');
    scene.text('You reply, "Please fuck my pussy." as you spread your legs wide.');
    // TODO-QSP: dynamic text: Fedor responds, "I'll fuck you real good <<$pcs_firstname>>." as he shoves his d...
    scene.text(`Fedor responds, "I'll fuck you real good ${((s as any).pcs_firstname ?? 0)}." as he shoves his dick into your pussy causing a loud moan to escape your mouth. You wrap your legs around Fedor's waist as he continues thrusting his dick further inside your pussy. You begin kissing Fedor's neck as he fucks you.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vag2.mp4');
    scene.text('Fedor picks up the pace as you lay back enjoying his hard cock fucking your wet pussy, enjoying every second of it, feeling Fedor\'s body pressing against yours and his penis rubbing your g-spot, gradually building your pleasure with each thrust. After a few minutes Fedor whispers in your ear "I\'m ready to cum. How would you like it?"');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    scene.text('You look Fedor in the eyes as you reply, "Fill me with your seed, my love." Fedor gives you a passionate kiss as he begin increasing his pace. You can feel Fedor\'s penis entering deeper inside you as he groans and begins filling your womb with his warm cum. You can feel his penis throbbing as he continues to pump your pussy with his seed. After Fedor finishes, he looks down to you. "You are the best girlfriend I could ever ask for. I\'m so lucky to have you." You look him in the eyes as you reply, "I love you Fyodor and I always will." Fedor leans forward and gives you a long passionate kiss before getting dressed and leaving the room.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vagkiss.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vag2.mp4');
    // TODO-QSP: dynamic text: Fedor nods as he continues fucking you at an increased pace and soon pulls out o...
    scene.text(`Fedor nods as he continues fucking you at an increased pace and soon pulls out of you and begins jerking his penis over your stomach, covering you in his cum. The warmth of his cum covers both your stomach and chest which greatly excites you. After Fedor finishes he looks down at you and says, "You're amazing as always ${((s as any).pcs_firstname ?? 0)}, The best fuck a man could ask for." You look up at him and reply, "I could say the same about you, my love." Fedor gives you a passionate kiss before getting dressed and leaving the room.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vagcum.mp4');
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Cowgirl', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/cowgirlkiss.mp4');
    scene.text('You reply, "I want to ride your big hard cock." Fedor leans back and says, "It\'s all yours, my love." you quickly climb on top of Fedor and gently guide his penis into your vagina then lower yourself on top of it, feeling it slide into your wet vagina with no effort. You begin riding Fedor\'s cock as he leans forward and gives you a passionate kiss. The feeling of Fedor\'s dick inside you and his tongue caressing yours, fills you with a warm feeling in your heart to know how passionately Fedor is kissing you.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/cowgirlkiss2.mp4');
    // TODO-QSP: dynamic text: As you continue riding Fedor, you can't help but run your hands up his chest, fe...
    scene.text(`As you continue riding Fedor, you can't help but run your hands up his chest, feeling his firm muscles, enjoying every curve of his chest which fills you with excitement, to know that this strong man is all yours. Fedor looks you in the eyes as he says, "You're the sexiest girl I've ever met in my life. There is no one I'd rather be fucking than you." You respond, "Well you can fuck me whenever you want babe." His eyes light up as he responds "You always know just what to say." Fedor then gives you a few more thrusts before saying "${((s as any).pcs_nickname ?? 0)} I'm ready to cum for you, so tell me how you want it."`);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum3.mp4');
    // TODO-QSP: dynamic text: You look Fedor in the eyes as you reply, "Fill me with your seed, my love." Fedo...
    scene.text(`You look Fedor in the eyes as you reply, "Fill me with your seed, my love." Fedor gives you a passionate kiss as you both increase the pace. You soon feel Fedor's arms tighten around you as he groans. You can feel Fedor's warm seed quickly filling your womb and you continue riding him, trying to keep his dick as far inside you as possible. You let out a loud moan as Fedor finishes pumping your pussy with his seed. Fedor catches his breath before looking you in the eyes "You are the most precious thing in my life. I love you ${((s as any).pcs_firstname ?? 0)}." You can feel tears begin to form in your eyes as you reply, "I love you too Fyodor, with all my heart." Fedor leans forward then gives you a long passionate kiss before getting dressed and leaving the room.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vagkiss.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/cowgirlkiss2.mp4');
    scene.text('"Cover me with your hot cum." Fedor nods as he quickens his pace then lightly pushes you on your back as he begins jerking off over you. Fedor groans and begins spraying his warm cum on your chest as you lay back enjoying the warmth of his cum cover your stomach and chest. After Fedor finishes catching his breath he looks down to you. "That\'s my girl. Always enjoying my cum." You give Fedor a mischievous grin as you respond, "Well I hear it\'s good for my skin." Fedor chuckles as he gets dressed and leaves the room.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vagcum.mp4');
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/cuni.mp4');
    scene.text('You reply, "I want you to fuck my ass." Fedor gives you a smile as he grabs you by the arm and flips you onto your stomach. Fedor rubs your ass and gives it a firm smack then grabs onto your legs and lifts up your ass to his face where he begins licking your vagina and anus. You let out a soft moan as Fedor alternates between licking your ass and vagina. Fedor begins focusing on your ass properly lubricating your asshole before climbing onto his knees. You can feel Fedor\'s penis lightly pushing against your anus and gradually pushing deeper inside you which gives you a sharp pain as his penis expands your anus.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/virginanal2.mp4');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'foreplay', 5, 'dom');
    qspCall(s, 'arousal', 'anal', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doggystyle', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/virginanal3.mp4');
    // TODO-QSP: dynamic text: Fedor gives your ass a few seconds to adjust to his cock and then begins thrusti...
    scene.text(`Fedor gives your ass a few seconds to adjust to his cock and then begins thrusting his dick inside you which causes a bit of pain at first but the pain begins to dissipate and it is quickly replaced with pleasure. The feeling of Fedor's hard cock inside your ass which fills you with excitement as you shout out "Ohh yes Fyodor. Fuck me like a bitch!" Fedor gives you a firm smack on the ass as he replies, "Don't worry ${((s as any).pcs_firstname ?? 0)}, I'll fuck you real good."`);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/virginanal4.mp4');
    scene.text('Fedor pushes against you and begin pumping you even faster while he wraps his arms around yours giving him more leverage to push his dick deeper in your ass. You let out a loud moan as he rams your ass harder, stretching out your asshole which hurts a bit but the knowledge that you are giving Fedor the pleasure he deserves fills you with excitement, making the pain worth it. Fedor says, "Are you ready for my cum" Which you quickly respond, "Yes Fedor, cum inside me."');
    scene.text('He then quickens his pace and you feel his body press firmly against yours as he begins pumping his cum inside your ass. When Fedor is finished he whispers in your ear "How does my bitch like her ass fucking?" You turn back to him with a mischievous grin on your face "I love it when you fuck my ass." Fedor responds "Good girl" then gives your ass one last smack before getting dressed.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/analcum.mp4');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Reverse cowgirl', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/ride1.mp4');
    scene.text('You reply, "I want to ride your big hard cock."');
    scene.text('Fedor leans back and says, "It\'s all yours my love." you quickly climb on top of Fedor and gently guide his penis into your vagina then lower yourself on top of it, feeling it slide into your wet vagina with no effort. You begin riding Fedor\'s cock as he grabs onto your arms to keep you from losing your balance. The feeling of Fedor\'s dick inside you and his strong arms holding you steady gives you a warm feeling in your heart, knowing that he will not let you fall.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/ride2.mp4');
    // TODO-QSP: dynamic text: As you continue riding Fedor, he wraps his arms around your legs and pulls you t...
    scene.text(`As you continue riding Fedor, he wraps his arms around your legs and pulls you toward him, so that he is basically carrying you. Feeling Fedor's strong arms holding you up, increases your excitement, knowing that he is in control of the pace despite you being on top. Fedor gives your ass a firm smack as he says, "${((s as any).pcs_firstname ?? 0)} you fuck like an energized bunny." You respond, "Well this bunny is yours to fuck anytime you want, babe." His eyes light up as he responds "You always know just what to say." Fedor then gives you a few more thrusts before saying "${((s as any).pcs_nickname ?? 0)} I'm ready to cum for you, so tell me how you want it."`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/ride2.mp4');
    scene.text('You turn back to face Fedor as you reply, "Fill up my pussy, my love." Fedor gives your ass a firm smack as he increases the pace. You soon feel Fedor\'s arms holding you tighter as he groans. You can feel Fedor\'s hard cock throbbing inside you, filling you with his warm seed as you continue riding him, trying to keep his dick as far inside you as possible. You let out a loud moan as Fedor finishes pumping your pussy with his seed.');
    // TODO-QSP: dynamic text: Fedor catches his breath before looking you in the eyes "You are the most precio...
    scene.text(`Fedor catches his breath before looking you in the eyes "You are the most precious thing in my life. I love you ${((s as any).pcs_firstname ?? 0)}." You can feel tears begin to form in your eyes as you reply, "I love you too Fyodor, with all my heart." Fedor leans forward then gives you a long passionate kiss before getting dressed and leaving the room.`);
    scene.img('images/shared/sex/cum/cum81.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5, 'dom');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/ride2.mp4');
    // TODO-QSP: dynamic text: "Pull out babe." Fedor nods as he quickens his pace then he lightly pulls out of...
    scene.text(`"Pull out babe." Fedor nods as he quickens his pace then he lightly pulls out of you then groans and begins spraying his warm cum on your back and feet as you stroke his penis, trying to get every last drop out of it. After Fedor finishes catching his breath he looks you in the eyes. "${((s as any).pcs_nickname ?? 0)} I could fuck you for days straight." You give Fedor a mischievous grin as you respond, "Be careful or I might end up holding you to that." Fedor chuckles as he gets dressed and leaves the room.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum7.mp4');
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'feet', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedroom3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/caress1.mp4');
  scene.text('Fedor\'s hand slides up your leg, until it arrives at your vagina. You spread your legs wide, welcoming his hand as you feel his fingers rubbing on your clitoris and his other hand on your nipples. Fedor leans forward and gives you a passionate kiss as he continues to rub your sensitive parts. You relax, keeping your hands at your sides, only focusing on the pleasure building inside you from Fedor\'s fingers on your nipples, his lips on yours, his tongue caressing yours and his fingers rubbing your clitoris gently but firmly.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'arousal', 'vaginal_vibe', (-5), 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/caress2.mp4');
    // TODO-QSP: dynamic text: Fedor continues caressing your body as you begin leaning back when you feel your...
    scene.text(`Fedor continues caressing your body as you begin leaning back when you feel your legs trembling from the pleasure building up. Fedor doesn't stop kissing and caressing you which is making your heart aflutter with his every touch and show of affection. You can feel tears rolling down your cheeks as Fedor continues showing you pure affection. Unable to keep quiet, you pull away from Fedor's lips and tell him, "Fyodor, I love you with all my heart." Which he responds, "I love you too ${((s as any).pcs_firstname ?? 0)}. You mean the world to me."`);
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'arousal', 'vaginal_vibe', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuni', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/cuni.mp4');
    scene.text('Fedor then gives you one more kiss before lowering his mouth to your vagina as he begins licking your clitoris. You let out a loud moan as his tongue his your clitoris, pushing your pleasure to a new level. You can\'t help but let out continuous moans as Fedor brings you to the brink of pleasure. Unable to take it anymore your body spasms as waves of pleasure flow though your body, filling you with pure Ecstasy. Moaning and spasming while you lay back enjoying the pure bliss you are feeling. After you finish riding out your orgasm, Fedor kisses your forehead and says, "I\'m so happy that I can give you the release you deserve." as he then gets dressed and leaves the room.');
    qspCall(s, 'arousal', 'cuni', (-5), 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShower2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('You climb into the shower and begin lathering your body, cleaning yourself as thoroughly as possible until you can hear Fedor enter the room and you peek out of the curtain to see him taking a piss and as soon as he notices you, he gives you a wink with a mischievous grin on his face.');
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  scene.actions([
    { label: 'Invite him in', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/cleanup.jpg');
    scene.text('You give Fedor a welcoming gesture that he happily accepts. Fedor climbs into the shower and begins kissing you as you both lather each other.');
    scene.actions([
      { label: 'Jerk him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower1.mp4');
    scene.text('You reach down and grab Fedor\'s dick slowly but firmly jerking him off while continuing to kiss his lips and massage his tongue with yours as Fedor caresses your ass firmly. Fedor grabs your hips and carefully spins you toward the wall pressing your back against it without ever breaking off the kiss but then lower his head as he crouches down in front of you and begins licking your clitoris softly. You lift your leg up welcoming his tongue into your vagina which he occasionally does before returning to your clit.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower2.mp4');
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'arousal', 'cuni', (-5), 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower3.mp4');
    scene.text('After a few seconds, Fedor wraps his arm around your legs then reaches out for your other leg and lifts you off the ground and you instinctively grab onto his shoulders as he lowers you onto his dick, inserting it into your vagina causing a jolt of pleasure and a loud moan. You look Fedor in the eyes as he continues to fuck you. After a few seconds he smiles and leans forward to kiss you, Shoving his tongue into your mouth in a rough but very passionate kiss.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return the kiss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower4.mp4');
    scene.text('After a few minutes, Fedor lowers you while still fucking you, never slowing down and you can feel your foot touch the ground as Fedor continues holding your other leg up. You do you best to continue kissing Fedor but the intense pleasure is building up to quickly for you to focus on anything but it as you moan loudly and soon Fedor whispers in your ear "I\'m going to cum real soon. Tell me how you want it."');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower4.mp4');
    // TODO-QSP: dynamic text: Fedor gives you a passionate kiss as he increases the pace of his thrusts and yo...
    scene.text(`Fedor gives you a passionate kiss as he increases the pace of his thrusts and you do your best to match his thrusts with your own. After a few seconds, Fedor groans and you feel his seed filling your womb with its warmth as you continue thrusting your hips attempting to drain his dick completely. Fedor gives you a passionate kiss and then looks you in the eyes as he says, "${((s as any).pcs_firstname ?? 0)} what have I done to deserve a perfect girl like you?"`);
    scene.text('His words of affection catch you off guard as you are left speechless for a few seconds then you recover your thoughts and respond, "You\'ve treated me with love and affection and handled my heart with care and that is why you deserve everything I can offer you." You both stare at each other in silence until Fedor gives you another long kiss and then dries off and gets dressed before leaving the room.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum3.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish washing up', goto: ['FedorEv4', 'Shower'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'In my mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower4.mp4');
    scene.text('Fedor pulls out of you and you quickly drop to your knees then take his dick into your mouth. You begin sucking and massaging his dick with your tongue until you feel his penis begin throbbing in your mouth filling it with his seed and you do your best to swallow as much of it as you can but some of it leaks out the side of your mouth which quickly gets washed away by the stream of water. After you swallow most of Fedor\'s cum you look up to see a very satisfied smile on his face as he tells you "I hope you enjoy my cum as much as I enjoy seeing you swallow it." You reply, "Some people like cream on their bagels. I like cream on my throat." as you lick your lips which is followed by a laugh that Fedor joins in on. You blow a kiss at Fedor as he gets dressed and leaves the room.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/cum1.jpg');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 10, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish washing up', goto: ['FedorEv4', 'Shower'] },
    ]);
  } },
      { label: 'On my face', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower4.mp4');
    scene.text('Fedor pulls out you and begins jerking off as you kneel down in front of him. After a few seconds, Fedor groans and you feel a rapid stream of cum hitting your face, covering your face in his seed. Fedor empties his balls of all cum then looks down at you covered in his seed as the water washes the it off your body. Fedor grins. "Looks like you have some more washing to do." he leans forward and kisses your forehead before climbing out of the shower and getting dried off.');
    scene.text('You give him a sweet smile as you say, "You were amazing Fyodor. Thank you."');
    scene.text('Which he responds, "My girl deserves nothing less than the best." as he gets dressed then leaves the bathroom.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/cum2.jpg');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'hj', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish washing up', goto: ['FedorEv4', 'Shower'] },
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
    { label: 'Leave shower and jerk him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower.mp4');
    scene.text('You climb out of the shower without ever breaking eye contact then walk up to Fedor until you are both face to face, you then kneel in front of him and begin massaging his penis with your hand and his balls with the other which causes Fedor to moan as he leans forward, bringing his face to yours then kisses your lips as you continue gently stroking his penis.');
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower1.jpg');
    scene.text('You break off the kiss then lean forward, wrapping your lips around Fedor\'s penis and begin sucking and massaging it with your tongue as he occasionally rubs the top of your head with his hand and occasionally letting out a low moan, clearly enjoying the blowjob you\'re giving him.');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuni', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower2.jpg');
    scene.text('After a few seconds, Fedor lifts you up by your shoulders and lightly pushes you onto the toilet seat which causes you to flinch at how cold the seat feels on your ass but soon the cold fades and you feel a new sensation of Fedor hands parting your legs and his tongue on your clitoris. You let out a low moan as he continues licking your clitoris gently but firmly causing the pleasure in your crotch to build considerable with each stroke of his tongue.');
    qspCall(s, 'arousal', 'cuni', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower3.jpg');
    scene.text('You grab Fedor by his hair and lightly pull him off away from your clit and say, "I want to ride that big dick of yours." He responds, "Sounds good to me." with a big smile on his face as he helps you up from the toilet and takes your place, eagerly awaiting you to mount him. You waste no time and press yourself down on his dick as you let out a moan. You start thrusting Fedor\'s dick deep inside your pussy faster, feeling the pleasure building quickly with each thrust. After a few minutes, Fedor says, "I\'m gonna cum."');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Inside me', handler: (st: GameState) => {
    (s as any).IvanPregChat = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower3.jpg');
    scene.text('You continue riding Fedor\'s dick and soon you hear him groan as he begins filling your womb with his seed. You close your eyes and focus on the warmth of his cum entering you while you push yourself down on his dick, so that his seed enter deep inside you. After a few seconds of you feel the throbbing of his penis cease, so you slowly climb off him, feeling his cum leak out of your pussy.');
    // TODO-QSP: dynamic text: You turn to face Fedor and give him a passionate kiss before he says, "You are s...
    scene.text(`You turn to face Fedor and give him a passionate kiss before he says, "You are so perfect ${((s as any).pcs_firstname ?? 0)}. I want to spend my whole life with you." You give Fedor a warm smile as you respond, "I feel the same way Fyodor. Maybe one day we will be ready to take that step." Fedor replies, "That day will come ${((s as any).pcs_firstname ?? 0)}. I promise you." Fedor gets dressed then leaves the room.`);
    scene.img('images/shared/sex/cum/cum81.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['FedorEv4', 'Shower'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/shower3.jpg');
    // TODO-QSP: dynamic text: You give Fedor two more thrusts then quickly pull off him and drop to your knees...
    scene.text(`You give Fedor two more thrusts then quickly pull off him and drop to your knees in front of him just as he groans and sprays his load on your face. You open your mouth, trying to catch as much in your mouth as possible. You can feel some of his cum leaking down your face and throat. The tart taste of his cum causes a minor stinging in your throat as it goes down but you continue to swallow, knowing that it will make Fedor happy. After Fedor is finished emptying is balls he says, "Great job ${((s as any).pcs_firstname ?? 0)}, You always know just what need." You lick your lips then blow him a kiss as he gets dressed and walks out of the bathroom.`);
    scene.img('images/shared/sex/cum/facial/cumface2.mp4');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['FedorEv4', 'Shower'] },
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
    case 'Hall Sex':
      enterHallSex(s, scene);
      break;
    case '3Way':
      enter3Way(s, scene);
      break;
    case '3way1':
      enter3way1(s, scene);
      break;
    case '3way2':
      enter3way2(s, scene);
      break;
    case '3way3':
      enter3way3(s, scene);
      break;
    case 'Livingroom 1':
      enterLivingroom1(s, scene);
      break;
    case 'Livingroom 2':
      enterLivingroom2(s, scene);
      break;
    case 'Livingroom 3':
      enterLivingroom3(s, scene);
      break;
    case 'Bathroom 1':
      enterBathroom1(s, scene);
      break;
    case 'Bathroom Cam':
      enterBathroomCam(s, scene);
      break;
    case 'Bathroom Cam 2':
      enterBathroomCam2(s, scene);
      break;
    case 'Bathroom 2':
      enterBathroom2(s, scene);
      break;
    case 'Bathroom 3':
      enterBathroom3(s, scene);
      break;
    case 'Kitchen 1':
      enterKitchen1(s, scene);
      break;
    case 'Kitchen 2':
      enterKitchen2(s, scene);
      break;
    case 'Bedroom Cam':
      enterBedroomCam(s, scene);
      break;
    case 'Bedroom 1':
      enterBedroom1(s, scene);
      break;
    case 'Bedroom 2':
      enterBedroom2(s, scene);
      break;
    case 'Bedroom 3':
      enterBedroom3(s, scene);
      break;
    case 'Shower 2':
      enterShower2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const FedorEv4_sex: LocationDef = {
  name: 'FedorEv4_sex',
  title: '<<"Ivan Prokhorov">>',
  region: 'other',
  enter: enter,
};
