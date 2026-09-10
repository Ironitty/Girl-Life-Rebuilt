import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDjibrilgb(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang1.jpg');
  if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
    scene.text('The dorm room is fairly small, with a large chair and a couch in one corner while two beds sit on the other side of the room. You take a seat on the couch with three of the guys while Djibril takes a seat on the chair.');
    scene.text('They all talk to you, and the longer you talk with them, the more they compliment your looks. The way they\'re all looking at you leaves little doubt that they would all like to have sex with you.');
  } else {
    scene.text('The dorm room is fairly small, with a large chair and a couch in one corner while two beds sit on the other side of the room. You take a seat on the couch with three of the guys while Djibril takes a seat on the chair.');
    scene.text('You remember what happened the last time you were here, and so do they. They\'re a lot less smooth-talking and complimentary, and a lot more sexual and aggressive with their comments. You\'re sure all they want to do is gangbang you again.');
  }
  qspCall(s, 'willpower', 'gangbang', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Change your mind and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang1.jpg');
    if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
      scene.text('There are too many of them and you start to feel a little worried about so many men lusting after you. You get up, apologise, and quickly head for the door. They try to talk you into staying, but you tell them you don\'t have time and head out.');
    } else {
      scene.text('You thought you were in the mood for another gangbang, but now that you\'re here, you\'re having second thoughts. You check your phone and tell them you have to go. They try and talk you into staying, but you make excuses and start heading towards the door.');
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Keep talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang2.jpg');
    if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
      scene.text('The guys on either side of you move closer as you sense the lust from them from the way they act, the tone of their voice, how they look at you, and how their hands constantly graze your legs and brush against your body.');
      scene.text('Djibril then gets up and walks over. He stands in front of you and offers you his hand. "Stand up."');
    } else {
      scene.text('The guys on either side of you move closer and their hands begin to paw at you, squeezing your thigh, brushing your hair back or running a finger across your cheek. One of them even cups your breast and gives it a squeeze.');
      scene.text('Djibril then gets up and walks over. He stands in front of you and offers you his hand. "Stand up."');
      scene.text('You remember from last time where this leads.');
    }
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang3.jpg');
    if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
      scene.text('You take his hand and he pulls you up. "You\'re very pretty, like all Russian girls. Now you\'ll you make us feel good, like all the other Russian girls do."');
      scene.text('As he says this, he places his hand on top of your head and pushes you down. You end up sinking to your knees, noticing that they have all stood up and surrounded you with their dicks out.');
      scene.text('"Go on, grab it. You know you want to," one of them says.');
    } else {
      scene.text('You take his hand and he pulls you up. "You ready to make us all feel good again?" he asks and you quickly get down on your knees as they all surround you with their dicks out.');
      scene.text('"Come on, slut. What are you waiting for? Start stroking our cocks," one of them says.');
    }
    qspCall(s, 'willpower', 'gangbang', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change you mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbangno.jpg');
    if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
      scene.text('You shake your head and quickly stand up before pushing out from between them.');
      scene.text('"Sorry, I can\'t do this," you say as you rush for the door.');
      scene.text('You can hear them grumbling, but none of them try and stop you as you leave.');
    } else {
      scene.text('You shake your head and quickly stand up before pushing out from between them. "Sorry, I can\'t do this. Maybe some other time…" you mumble as you hurriedly head for the door.');
      scene.text('You hear Djibril speak up. "Come on, you can\'t leave us like this!"');
      scene.text('You mutter another apology and can hear the rest grumbling, but none of them try and stop you as you leave.');
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Start stroking them', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    qspCall(s, 'fame', 'city', 'sex', 3);
    (s as any).npc_had_sex['A82'] = 1;
    (s as any).DjibrilQW['african_gangbang'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang4.jpg');
    scene.text('You reach up, wrapping your fingers around the dick of the one that spoke up with your left hand while you reach over and grab Djibril\'s massive cock with your right hand. You start stroking them both while looking up at them.');
    scene.text('After a few minutes, the other two get tired of waiting and you have to switch which dicks you\'re stroking. Djibril places his hand on your head and pulls you over to his dick before he starts rubbing the tip of it on your lips. You can feel his precum smearing across your lips.');
    qspCall(s, 'arousal', 'hj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang5.jpg');
    scene.text('You open your mouth as wide as you can and start sucking Djibril\'s monster cock before you start stroking two of the other three cocks with your hands.');
    scene.text('"Come on, Djibril. Don\'t hog that mouth to yourself!" you hear one of them say.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang6.jpg');
    scene.text('You stop sucking Djibril\'s dick and switch to sucking one of the other dicks while jerking off two more. They keep encouraging you to switch and soon you soon lose track of whose dick you\'re sucking. Whoever you\'re not servicing slowly removes your clothes.');
    scene.text('"Hurry and get her naked! I want to fuck her!" you hear one of them say.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang8.jpg');
    scene.text('You decide not to say anything, and they take your silence as consent. They pull you up as Djibril sits on the couch and you get on all fours on the couch next to him and start stroking his massive cock again as another man kneels behind you. You feel him rubbing the head of his dick against your slit, getting his cock wet with your juices.');
    scene.text('Seconds later, you feel it pushing inside you, filling your pussy completely. He starts fucking your pussy slowly at first, but gradually starts fucking you harder and faster while smacking your ass.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'vaginal', (-5), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tag team fuck', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang9.jpg');
    scene.text('You keep sucking Djibril\'s cock as you get fucked balls deep by another before you hear one of them say that it\'s his turn. The one inside you pulls out, but your pussy doesn\'t stay empty for long. Another cock is shoved inside you seconds later and the other three take turns fucking your pussy as you keep sucking off Djibril.');
    scene.text('You notice them giving each other fist bumps when they switch, like they\'re some kind of tag team.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'vaginal', (-5), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Use your hands', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang10.jpg');
    scene.text('Djibril pulls your mouth off of his dick and stands up. "Alright, you guys have had enough fun. It\'s my turn." He steps away and another guy sits down in his spot. You start jerking him off as one of the others kneels on the couch and shoves his dick in your mouth. You feel a dick pull out of your pussy, only to be replaced straight after. You\'re sure that it\'s now Djibril fucking you.');
    scene.text('Several minutes go by as you get fucked, alternating between sucking and jerking the other cocks before Djibril pulls out of you and you feel the head of his dick rubbing against your asshole.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(s, 'arousal', 'vaginal', (-5), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang10.jpg');
    scene.text('You say nothing and keep sucking their dicks and jerking them off. They take your silence as consent and you feel someone applying lube to your ass before you feel Djibril pressing his dick against your asshole again. The pressure builds until it pops into your ass and stretches it.');
    scene.text('His massive dick stretches your ass to its limits as he starts slowly fucking your ass, but gradually picking up speed. The others switch whose dick you\'re sucking so they all get a turn.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(s, 'arousal', 'anal', (-5), 'gangbang', 'sub', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'More butt fucking', goto: ['djibrilev1', 'gangbang_anal'] },
    ]);
  } },
      { label: 'Just suck them off', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang7.jpg');
    scene.text('You take the dick out of your mouth long enough to say "Sorry, I don\'t want to be fucked in the ass."');
    scene.text('You hear them muttering as you get off the couch and onto your knees before they all crowd around you. You redouble your efforts with your mouth and your hands, trying to make sure none of them are left unattended for too long.');
    scene.text('One of them soon starts moaning and you can tell he\'s close, so you focus on the rest. Before long, you have all four of them ready to cum.');
    qspCall(s, 'arousal', 'bj', 15, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-15), 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-15), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'They start cumming', goto: ['djibrilev1', 'gangbang_cum'] },
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
    scene.actions([
      { label: 'Just suck them off', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang7.jpg');
    scene.text('You take the dick out of your mouth long enough to say "Sorry, I don\'t want to have sex. But I\'ll suck you all off."');
    scene.text('You hear them muttering before one of them looks down at you. "Then hurry up and get on with it."');
    scene.text('You redouble your efforts with your mouth and hands, trying to make sure none of them are left unattended for too long. Soon, one of them starts moaning and you can tell he\'s close, so you focus on the rest.');
    scene.text('Before long, you have all four of them ready to cum.');
    qspCall(s, 'arousal', 'bj', 15, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-15), 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-15), 'gangbang', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'They start cumming', goto: ['djibrilev1', 'gangbang_cum'] },
    ]);
  } },
      { label: 'Just anal', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang10.jpg');
    scene.text('You take the dick out of your mouth long enough to say "You can fuck my ass if you want."');
    scene.text('They laugh at that, and seem pleased with the idea.');
    scene.text('"I get first crack at her ass!" you hear Djibril loudly exclaim as they pull you up and one of them sits on the couch while another kneels on it. You get on all fours next to them and start stroking the one sitting on the couch while sucking the one kneeling on it.');
    scene.text('You feel someone applying lube to your ass, and seconds later feel a dick pressing against your asshole. The pressure builds until it pops into your ass and stretches it. Judging by how huge the cock feels, it must be Djibril.');
    scene.text('He starts fucking you slowly at first, but as things progress, he starts fucking you harder and faster as the others take turns letting you suck their dicks.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(s, 'arousal', 'anal', (-5), 'gangbang', 'sub', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'More butt fucking', goto: ['djibrilev1', 'gangbang_anal'] },
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

function enterGangbangAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang11.jpg');
  scene.text('You feel Djibril pull out of your asshole, but it\'s immediately filled by another dick. This one is a little smaller, so it slides in fairly easily.');
  scene.text('You keep sucking off one guy and jerking off another as the one behind you fucks your lubed up backdoor, occasionally smacking your ass cheeks with his hands as he does.');
  qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
  qspCall(s, 'arousal', 'anal', (-5), 'gangbang', 'sub', 'lube');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Next cock in the ass', handler: (st: GameState) => {
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang12.jpg');
    scene.text('They switch, and a third one is now fucking your stretched out asshole as you continue sucking the cock in front of you and the other two jerk off while watching you.');
    scene.text('The guy in your ass is thrusting his full length into you and you can feel his balls smacking against your slit with each thrust.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'anal', (-5), 'gangbang', 'sub', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Just anal', handler: (st: GameState) => {
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang13.jpg');
    scene.text('Finally, the last guy gets his turn fucking your ass. It slides in easily, and he starts fucking you hard and fast straight away. At this point, you\'re stretched out enough that it\'s starting to feel good.');
    scene.text('A few minutes later, they start taking turns and before long one of the guys starts groaning like he\'s close and the others soon follow suit. They pull you off the couch and onto your knees in front of them.');
    qspCall(s, 'arousal', 'anal', 10, 'gangbang', 'sub', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'They start cumming', goto: ['djibrilev1', 'gangbang_cum'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGangbangCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbangcum.jpg');
  scene.text('Kneeling in the middle of them, you jerk two of them off at a time, switching cocks every few seconds. One of them soon reaches climax and his cum starts splattering across your face and into your mouth. The rest soon start cumming as well; most of it ends up covering your face and neck while some ends up in your mouth, which you quickly swallow.');
  qspCall(s, 'arousal', 'hj', 5, 'gangbang', 'sub');
  qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'sub');
  qspCall(s, 'cum_call', 'face', 'A82', 1);
  qspCall(s, 'cum_call', 'face', 'A242', 1);
  qspCall(s, 'cum_call', 'face', 'A244', 1);
  qspCall(s, 'cum_call', 'face', 'A245', 1);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Get dressed', goto: ['djibrilev1', 'gangbang_dress'] },
    { label: 'Take a selfie', goto: ['djibrilev1', 'gangbang_selfie'] },
  ]);
  scene.build();
}

function enterGangbangSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).djibrilphoto[2] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/phone/djibril/2.jpg');
  scene.text('Once they\'re finished, they start getting cleaned up and dressed as you reach over to your purse, pull out your phone and hold it up to take a selfie of your cum covered face.');
  scene.text('You take a few until you find one you like, which you then save. With that done, you start to get dressed yourself.');
  scene.actions([
    { label: 'Get dressed', goto: ['djibrilev1', 'gangbang_dress'] },
  ]);
  scene.build();
}

function enterGangbangDress(s: GameState, scene: SceneBuilder): void {
  (s as any).DjibrilQW['invite'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang_leave_cum.jpg');
  scene.text('You gather up your clothes and start getting dressed as Djibril smiles at you.');
  scene.text('"That was fun and I hope we can do it again some time. Anyway, I need to go to the library and get some studying done. but feel free to stop by again any time. Talk to you later."');
  scene.text('You wave at him as he leaves with his friends without saying another word. You can feel their cum starting to dry on your face and decide that it\'s time to leave.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
      qspCall(s, 'fame', 'city', 'sex', 5);
      scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang_leave_cum.jpg');
      scene.text('You take a final look around to make sure you didn\'t leave anything behind as you think about what just happened. As you make your way down the dorm hallway, you notice people looking at you. Some laugh, others look on with lost expressions and some give you looks of utter disgust.');
      scene.text('You finally notice your reflection on some glass and see your face is still covered in their cum. You quickly exit the dorm and run across the quad to the street.');
    } else {
      scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang_leave.jpg');
      scene.text('With your face cleaned up, you take a final look around to make sure you didn\'t leave anything behind as you think about what just happened. You can\'t help but smile about it as you head out the door and make your way out of the dorm.');
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSvetaSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  (s as any).DjibrilQW['dorm_sex'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_knees.jpg');
  // TODO-QSP: dynamic text: Once on your knees, you pull his sweatpants and underwear down and his <<dick>>c...
  scene.text(`Once on your knees, you pull his sweatpants and underwear down and his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick springs free, nearly hitting you in the face as it does. Each time you see it, you're still amazed by it's size. You lean forward and give the tip a quick kiss.`);
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_bj1.jpg');
    scene.text('You open your mouth as wide as you can and take his huge cock into your mouth before you start bobbing your head back and forth, sucking his dick and taking it as deep as you can into your mouth. He lets out a soft moan of pleasure and you feel yourself starting to get wet.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tell him to fuck you', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_bj2.jpg');
    scene.text('You suck his dick for a few more minutes before you pop it out of your mouth and stroke it with your hand as you look up at him. "I want you to fuck me now."');
    scene.text('He grins down at you. "That\'s good, because I want to fuck your tight little white ass."');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck your ass', goto: ['djibrilev1', 'sveta_sex1_anal'] },
      { label: 'Suck him off', goto: ['djibrilev1', 'sveta_sex1_bj_cum'] },
    ]);
  } },
      { label: 'Keep sucking him off', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_bj2.jpg');
    scene.text('You suck his dick for a few more minutes before he grins down at you. "I want to fuck your tight little white ass now."');
    scene.text('You keep sucking his dick while considering his request.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck your ass', goto: ['djibrilev1', 'sveta_sex1_anal'] },
      { label: 'Suck him off', goto: ['djibrilev1', 'sveta_sex1_bj_cum'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSvetaSex1BjCum(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_had_sex['A82'] = 1;
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_bj3.jpg');
  scene.text('You look up at him. "I would rather just suck you off today."');
  scene.text('He looks down at you and grins. "Okay, maybe next time then."');
  scene.text('You go back to sucking his dick until you hear him starting to moan louder, followed by his dick starting to twitch in your mouth before you feel his hot cum shooting into your mouth.');
  scene.text('Once he\'s finished, he pulls his dick out of your mouth and you feel the cum on your tongue.');
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Show him your tongue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_mouthful.jpg');
    scene.text('You open your mouth and show him your tongue coated in his cum.');
    // TODO-QSP: dynamic text: He laughs a little. "Fuck, that was amazing. You're truly an amazing girl, <<$pc...
    scene.text(`He laughs a little. "Fuck, that was amazing. You're truly an amazing girl, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('He watches you, likely waiting to see if you\'re going to swallow his cum or spit it out.');
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'cum_call', 'mouth', 'A82', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_kiss.jpg');
    scene.text('You swallow his cum down while making a big show of it.');
    // TODO-QSP: dynamic text: "Fuck, that was so hot <<$pcs_nickname>>." He pulls up his pants before pulling ...
    scene.text(`"Fuck, that was so hot ${((s as any).pcs_nickname ?? 0)}." He pulls up his pants before pulling you up to your feet and giving you a quick kiss. "I'd love to hang out more, but I've got some homework I need to get done."`);
    scene.text('You grin at him. "Okay."');
    scene.text('You turn and head for the door, but not before he slaps you on the ass. You giggle as he goes to his desk and you head out.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      { label: 'Spit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_kiss.jpg');
    scene.text('You get up and spit his load out into the trash can by the couch.');
    scene.text('"Fuck, I needed that," he groans as he pulls up his pants before pulling you over to him and giving you a quick kiss. "I\'d love to hang out more, but I\'ve got some homework I need to get done."');
    scene.text('You grin at him. "Okay."');
    scene.text('You turn and head for the door, but not before he slaps you on the ass. You giggle as he goes to his desk and you head out.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSvetaSex1Anal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  (s as any).npc_had_sex['A82'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_undress.jpg');
  scene.text('You nod at him with a smile. "Okay, you can fuck my ass if you want."');
  scene.text('You start to strip and he helps you undress. Once you\'re fully naked, he bends you over his couch before walking over to his nightstand and pulling out a bottle of lube. He lubes up his massive dick as he walks back over before you feel him squirt some onto your asshole.');
  scene.text('He uses his fingers to work it into your ass and loosen you up a little before he tosses the bottle aside and scoots up behind you. You feel the large head of his cock pressing against your asshole.');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get butt fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_fuck1.jpg');
    // TODO-QSP: dynamic text: The pressure builds until his cock finally pops in, causing you to cry out and h...
    scene.text(`The pressure builds until his cock finally pops in, causing you to cry out and hiss a little in pain as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick stretches your asshole. He starts slowly fucking you, but as you start to relax and moan in pleasure, he starts going faster and deeper.`);
    qspCall(s, 'arousal', 'anal', 5, 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'A little deeper', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_fuck2.jpg');
    scene.text('You bite your lower lip and look back at him as he slides his cock even deeper into you. His dick continues to stretch out your ass as you both moan in pleasure.');
    qspCall(s, 'arousal', 'anal', 5, 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Balls deep', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_fuck3.jpg');
    scene.text('He pushes even deeper and you feel his balls slapping against your pussy. Despite the size, you start moaning loudly in pleasure as your asshole finishes stretching out to accommodate him.');
    scene.text('"Yes… Yes… Ooohh… Keep fucking me!" you tell him as the pleasure keeps building.');
    scene.text('He takes this as a sign and grabs hold of your hips before he starts hammering your ass balls deep.');
    qspCall(s, 'arousal', 'anal', 5, 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Creampie', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_buttcum.jpg');
    scene.text('He starts groaning loudly before you feel his cock twitching inside you as he shoots his load deep into your ass, burying himself balls deep in you until he stops cumming.');
    // TODO-QSP: dynamic text: He then pulls out and collapses down beside you on the couch as you roll over on...
    scene.text(`He then pulls out and collapses down beside you on the couch as you roll over on your side next to him. "Fuck, that was amazing ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You lay side by side for a few minutes, catching your breath as you feel his cum leaking out of your gaping asshole. "Mhm… That was wonderful Djibril, truly wonderful. I enjoyed that so much."');
    scene.text('He laughs before he stands up and starts cleaning up and getting dressed. "Thanks. I actually believe you."');
    scene.text('You wipe the cum leaking out of your ass off and get dressed as well. "I really mean it."');
    scene.text('Once you\'re dressed, you give him a passionate kiss.');
    scene.text('He breaks the kiss after a few seconds. "I\'d love to hang out more, but I\'ve got some homework I need to get done."');
    scene.text('You grin at him. "Okay."');
    scene.text('You turn and head for the door, but you barely make it a step when he slaps you on the ass. You giggle as he walks over to his desk.');
    qspCall(s, 'arousal', 'anal', 1, 'lube');
    qspCall(s, 'cum_call', 'anus', 'A82', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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

function enterDjibrilAnya(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/djibril_anya.jpg');
  scene.text('You sit around playing video games with Djibril before you finally hear a knock on the door. Djibril answers it and you see Anya standing there as he looks her over while she introduces herself to him.');
  scene.text('He invites her in and they walk over and sit on the couch with you. The three of you talk for a few minutes, but you can tell everyone is eager to get things going.');
  scene.text('"You guys ready to have some fun? I don\'t mind sharing him with you, sis," you smile at her.');
  if (((s as any).DjibrilQW ?? 0)?.['anya_inv'] >= 2) {
    scene.text('"Or, if you want, he can call over some of his friends and share us with them. What do you think?" you ask as you glance at Djibril, who seems happy with either option.');
    scene.text('She thinks for a few seconds. "I\'m good with whatever," she replies.');
  }
  scene.actions([
    { label: 'Invite his friends', goto: ['djibrilev1', 'djibril_sveta_anya_gangbang1'] },
    { label: 'Just the three of us', goto: ['djibrilev1', 'djibril_sveta_anya1'] },
  ]);
  scene.build();
}

function enterDjibrilSvetaAnya1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'npcStat', 'A33', 'a');
  (s as any).DjibrilQW['anya_count'] = ((s as any).DjibrilQW['anya_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya1.jpg');
  scene.text('After the three of you talk for a few minutes, he reaches down and starts rubbing both of your thighs. Anya starts kissing him as he unbuttons and then pulls his pants off, freeing his large black dick.');
  scene.text('As he keeps kissing your sister, he reaches over to take your head in his hand, and push it towards his hard cock.');
  qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'sex', 1);
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya2.jpg');
    scene.text('You wrap your lips around his dick and start bobbing your head up and down, sucking him off while he fondles and kisses your sister.');
    scene.text('After a few minutes, you slide off the couch onto your knees and glance up to see they\'ve stopped kissing and Anya is watching you suck his dick.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Share his dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya3.jpg');
    scene.text('Anya slides off the couch onto her knees as you take his dick out of your mouth and offer it to her. The two of you then take turns sucking it while the other plays with his balls.');
    scene.text('While she\'s sucking his dick, he reaches down and pulls you back up onto the couch before pulling your clothes aside to expose your pussy.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya4.jpg');
    scene.text('He slides off the couch onto the floor and Anya lays down next to him to keep sucking his dick as he leans in and starts licking your pussy. You lay back and moan in pleasure.');
    scene.text('After a few minutes, he tells you to get on all fours.');
    qspCall(s, 'arousal', 'cuni', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doggy style', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A82');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya5.jpg');
    // TODO-QSP: dynamic text: You roll over and get on all fours on the couch as he moves up behind you and sl...
    scene.text(`You roll over and get on all fours on the couch as he moves up behind you and slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into your pussy. He strips off the rest of his clothes before he starts slowly fucking you and Anya undresses before she climbs up onto the couch and starts making out with him.`);
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Missionary', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya6.jpg');
    scene.text('Without warning, he suddenly grabs you and flips you over. You squeal in surprcxise before he quickly slides his cock back into your pussy and starts fucking you again.');
    scene.text('Anya sits on the back of the couch above you and he takes your hand and pulls it up to her pussy. You start rubbing and fingering it, making her moan as he removes his hand from yours and starts rubbing her leg.');
    scene.text('As she gets more aroused, she grabs your hand and forces it against her pussy.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 5, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'incest');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat her out', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya7.jpg');
    scene.text('As Djibril keeps fucking you, Anya removes your hand from her pussy and slides down to sit on your face. You start licking her pussy as Djibril fucks you and she moans even louder as she starts riding your face.');
    qspCall(s, 'arousal', 'cuni_give', 5, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'incest');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Anya get fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya8.jpg');
    scene.text('Djibril suddenly pulls out of you and grabs Anya, pulling her off your face before he sits on the couch and drags her over to him.');
    scene.text('She straddles and lowers herself down onto him. "Oh fuck, it\'s so big…" she moans.');
    scene.text('You turn around and start playing with his balls as Anya rides him, moaning loudly the whole time. After a few minutes, she gets off him and pulls your head over to his dick.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya9.jpg');
    scene.text('You take hold of his dick in your hand and start stroking it as you wrap your lips around it. You can taste Anya\'s wetness on it as you start sucking it.');
    scene.text('After a few minutes of this, she pulls your head up and he turns and lays on his back before she straddles him again.');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit on Djibril\'s face', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya10.jpg');
    scene.text('Wanting some of your own, you move over and straddle his face. He starts licking your soaking wet pussy as Anya keeps riding him, leaning forward to suck on your nipples as she does.');
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'incest');
    qspCall(s, 'arousal', 'cuni', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get buttfucked', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A82');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya11.jpg');
    scene.text('A few minutes go by before Djibril grabs you and lifts you up before throwing you on the couch on your back. He grabs a bottle of lube out of his end table and pulls your legs apart before lubing up your asshole.');
    // TODO-QSP: dynamic text: Once he's worked the lube in, he moves up between your legs and slides his slick...
    scene.text(`Once he's worked the lube in, he moves up between your legs and slides his slick ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your asshole. You cry out in a mix of pain and pleasure as he stretches you out.`);
    scene.text('Anya kneels beside the couch and starts rubbing your clit and fingering your pussy as he fucks your ass.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'vaginal_finger', 5, ((s as any).npcID1 ?? 0), 'group', 'lesbian', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hard anal', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya12.jpg');
    scene.text('As Djibril starts hammering your ass, Anya stops playing with your pussy and starts playing with her own as she watches him fuck your ass.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya13.jpg');
    scene.text('Djibril suddenly pulls out of your ass with a grunt and starts cumming on Anya\'s face. She opens her mouth as his cum covers her face and splatters into her mouth.');
    scene.text('Once he\'s done, he walks over to the other end of the couch and collapses onto it. "Fuck, that was amazing! You were both amazing."');
    scene.text('You lay on your back for a few minutes catching your breath. "Mhm, that was wonderful Djibril, truly wonderful. I really enjoyed that."');
    // TODO-QSP: dynamic text: Anya gets up and grabs a tissue to clean his cum off her face. "It was. Call me ...
    scene.text(`Anya gets up and grabs a tissue to clean his cum off her face. "It was. Call me when you want to do this again, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('He laughs as he gets up and starts cleaning up and getting dressed. "Any time girls, any time."');
    scene.text('You start getting dressed before you give him a passionate kiss. Once you break the kiss, Anya gives him one too.');
    // TODO-QSP: dynamic text: "I'd love to hang out more, but I've got to get back home. Don't stay out too la...
    scene.text(`"I'd love to hang out more, but I've got to get back home. Don't stay out too late, ${((s as any).pcs_nickname ?? 0)}. You know how Mom gets."`);
    scene.text('You roll your eyes slightly before turning to Djibril. "I guess I should get going."');
    scene.text('He nods. "I understand. You two stay safe getting back home."');
    scene.text('With that, you turn and head for the door.');
    qspCall(s, 'arousal', 'anal', 1, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDjibrilSvetaAnyaGangbang1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'npcStat', 'A33', 'a');
  qspCall(s, 'npcStat', 'A244', 'b');
  qspCall(s, 'npcStat', 'A245', 'c');
  qspCall(s, 'npcStat', 'A246', 'd');
  (s as any).DjibrilQW['anya_gangbang_count'] = ((s as any).DjibrilQW['anya_gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang1.jpg');
  scene.text('You grin at her before looking at Djibril. "Okay, call your friends."');
  scene.text('He grins and pulls out his phone to send some texts. A few minutes later, he stops and looks up at you. "A few of them are on their way over. They should be here any minu…" He doesn\'t finish his sentence before there\'s a knock at the door. He gets up and opens it to let in a trio of other African men.');
  // TODO-QSP: dynamic text: They're looking at you and Anya with lustful hunger in their eyes as Djibril int...
  scene.text(`They're looking at you and Anya with lustful hunger in their eyes as Djibril introduces you to them. You've met one of them before, but the other two are new to you. "This is ${((s as any).pcs_nickname ?? 0)} and her sister, Anya."`);
  scene.text('The three of them crowd around you and Anya. "So this is the girl you told us about?" one of them asks and the one you know nods. They laugh and say something in a language you don\'t understand.');
  scene.text('"She\'s as beautiful as you claimed, as is her sister," the other one says. "Stand up girls. Let us look at you."');
  scene.text('You glance at Anya, who smiles at you and you both stand up. Djibril walks over and joins you as the men start pawing at your bodies and undressing you.');
  qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID ?? 0), 'gangbang');
  qspCall(s, 'arousal', 'foreplay', (-2), ((s as any).npcID2 ?? 0), 'gangbang');
  qspCall(s, 'arousal', 'foreplay', (-2), ((s as any).npcID3 ?? 0), 'gangbang');
  qspCall(s, 'arousal', 'foreplay', (-2), ((s as any).npcID4 ?? 0), 'gangbang');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck some dick', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang2.jpg');
    scene.text('The guys start stripping as well and the four of them are soon naked. They push you and Anya down to your knees and Anya starts sucking Djibril\'s dick and stroking another while you attend to the other two men.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID3 ?? 0), 'gangbang');
    qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID4 ?? 0), 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck some more cock', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang3.jpg');
    scene.text('The guys swap positions as you and Anya suck and stroke their cocks. Before too long, they want more, one of them sitting on the couch and pulling Anya on top of him.');
    scene.text('She climbs onto his dick and starts riding it while Djibril sits next to him and pulls you towards him.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID4 ?? 0), 'gangbang');
    qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID3 ?? 0), 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit on his dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang4.jpg');
    scene.text('Djibril lifts you off the ground and sits you down on his dick. He lubes up your ass before tossing the bottle to one of the guys standing next to Anya. Djibril then guides his dick up your ass and you cry out as his cock stretches your back door until it\'s balls deep inside you.');
    scene.text('His friend wastes no time and slips his smaller but still fairly well hung cock into your pussy and both of them start fucking you. You glance over at Anya, just in time to see the last guy start fucking her in the ass as well.');
    scene.text('After a few minutes, they switch positions so each of them gets a turn with your pussy and ass.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID2 ?? 0), 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID ?? 0), 'lube', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swap partners', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang5.jpg');
    scene.text('A few minutes later, you find yourself being passed to the other pair as Anya is placed on the couch doggy style. You feel a dick slide into your pussy, followed by another sliding into your gaping ass.');
    scene.text('After a few minutes, they switch positions so they each get a turn of your pussy and ass.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID3 ?? 0), 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID4 ?? 0), 'lube', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Anya get fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang6.jpg');
    scene.text('After several minutes, they place you on the ground again. Your legs feel weak, but you manage to sit on one of the beds. Perhaps because of this, all four gather around Anya and take turns fucking her holes.');
    scene.text('You think she\'s enjoying it, but it\'s hard to tell with her mouth being full of cock.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang7.jpg');
    scene.text('One of them suddenly says that he\'s about to cum and pulls you over to the couch, getting you down on your knees just as he starts cumming over your face.');
    scene.text('Djibril soon pulls out of Anya and starts cumming on your face while the other two pull out of her and she joins you on her knees as they start cumming on her face.');
    qspCall(s, 'arousal', 'bj', 5, 'gangbang');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID3 ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get kissed', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang8.jpg');
    scene.text('Anya turns her head towards you and starts kissing you. When she breaks the kiss, she starts licking some of the cum off your face and you return the favor. The guys hoot and holler as they watch the display.');
    scene.text('When you finish, they start getting dressed as Anya grabs some tissues and hands you some. You each clean up your faces, after which you both start getting dressed.');
    scene.text('"We have to do this again," one of them says and another says something in a language you don\'t understand, which causes them all to laugh.');
    scene.text('Anya gives you a bemused look before another says "I love Russian girls. They\'re so beautiful and they all love to fuck."');
    // TODO-QSP: dynamic text: Anya stands up. "This was fun. Maybe we can do this again some time? Call me, <<...
    scene.text(`Anya stands up. "This was fun. Maybe we can do this again some time? Call me, ${((s as any).pcs_nickname ?? 0)}." She turns to the guys and waves at them as she walks to the door, sauntering as she goes. "Later, boys…"`);
    scene.text('You shake your head at her antics and can\'t help but giggle at their reactions to it.');
    // TODO-QSP: dynamic text: Anya stops at the door. "I'd love to hang out more, but I've got to get back hom...
    scene.text(`Anya stops at the door. "I'd love to hang out more, but I've got to get back home. Don't stay out too late, ${((s as any).pcs_nickname ?? 0)}. You know how Mom gets."`);
    scene.text('You roll your eyes slightly before turning to Djibril. "I guess I should get going."');
    scene.text('He nods. "I understand. You two stay safe getting back home."');
    scene.text('With that, you turn and head for the door.');
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'incest');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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

function enterDjibrilNush(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'drugs', 'alcohol', 'wine', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some1.jpg');
  if (((s as any).DjibrilQW ?? 0)?.['sveta_nush'] === 0) {
    scene.text('You sit and play video games with Djibril for a while before there\'s a knock on the door. Djibril gets up to answer it and when he pulls the door open, you see Anushka standing there dressed very nicely. He looks her over as she introduces herself to him.');
    // TODO-QSP: dynamic text: "Hi I'm Anushka, but everyone calls me Nush. <<$pcs_nickname>> has told me a lot...
    scene.text(`"Hi I'm Anushka, but everyone calls me Nush. ${((s as any).pcs_nickname ?? 0)} has told me a lot about you," she says to him.`);
    scene.text('He laughs a little. "Hello Nush, all good I hope. Come in, come in."');
    scene.text('She giggles. "Oh, you could say that…" she says with a pointed look at his crotch before they walk over and sit on the couch. Anushka sits next to you and he sits on the other side of her as he pours the three of you a drink.');
    scene.text('You all talk and drink for a few minutes as Anushka quickly downs her drink before pouring another and downing that one almost as fast. You can tell by the way Djibril is looking at the two of you that he\'s eager to get started.');
  } else {
    scene.text('You sit and play video games with Djibril for a while before there\'s a knock on the door. Djibril gets up to answer it and when he pulls the door open, you see Anushka standing there dressed very nicely. He looks her over with hungry eyes as he invites her in.');
    scene.text('"Nice of you to come again, Nush. Come in, come in." he says to her.');
    scene.text('She bites her lower lip and gives him a lustful look. "I look forward to coming… over a lot, that is."');
    scene.text('He laughs as they walk over to the couch. "Well, I look forward to you coming again. Come in and get a drink."');
    scene.text('You can\'t help but shake your head at them as Anushka sits next to you and he sits on the other side of her as he pours the three of you a drink.');
    scene.text('You all talk and drink for a few minutes as Anushka quickly downs her drink before pouring another and downing that one almost as fast. You can tell by the way Djibril is looking at the two of you that he\'s eager to get started.');
  }
  scene.text('"You guys ready to have some fun? I don\'t mind sharing him with you Nush, but I can just watch if you want…" you tell her with a smile.');
  if (((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 2) {
    scene.text('"Or, if you want, he can call over some of his friends and share us with them. Or him and his friends could fuck you until you can\'t walk. What do you think?" you ask as you glance at Djibril, who seems happy with any of the options.');
  }
  if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 2) {
    (s as any).temp = Math.floor(Math.random() * 8) + 1;
    if (((s as any).temp ?? 0) === 1) {
      scene.text('She looks him over lustfully, then glances at you. "I want all the dick to myself. Is that okay with you?"');
      scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
      scene.text('She grins at Djibril. "I want all the dicks. Call your friends," she says as she pats his thigh.');
      scene.actions([
        { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush_gangbang1'] },
        { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some1.jpg');
    scene.text('You stand up. "I\'ll leave you guys to it then."');
    scene.text('Anushka smiles at you as she scoots over against Djibril and starts running her hands down his body while he looks at you. "Okay, thanks for stopping by. Come by any time you want."');
    scene.text('He then turns his full attention to Anushka and you make your way over to the door. You glance back and see them kissing before you walk out and close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      ]);
    } else {
      scene.text('She looks him over lustfully, then looks to you while biting her lower lip. "I\'m up for getting ploughed by all of them if you are."');
      if (((s as any).temp ?? 0) <= 5) {
        scene.text('You glance at Djibril, who seems happy with any of the options.');
        scene.text('She looks him over lustfully before glancing at you. "I want him all to myself. Is that okay with you?"');
        scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
        scene.actions([
          { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush1'] },
          { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some1.jpg');
    scene.text('You stand up. "I\'ll leave you guys to it then."');
    scene.text('Anushka smiles at you as she scoots over against Djibril and starts running her hands down his body while he looks at you. "Okay, thanks for stopping by. Come by any time you want."');
    scene.text('He then turns his full attention to Anushka and you make your way over to the door. You glance back and see them kissing before you walk out and close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      } else {
        scene.text('She looks him over lustfully, then looks at you while biting her lower lip. "How about we keep it to just the three of us?"');
        scene.text('You nod and Djibril pours each of you a glass of wine.');
        scene.actions([
          { label: 'Just the three of you', goto: ['djibrilev1', 'djibril_sveta_nush1'] },
        ]);
      }
      if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 1) {
        if (Math.floor(Math.random() * 3) + 1 === 1) {
          scene.text('You glance at Djibril, who seems happy with any of the options.');
          scene.text('She looks him over lustfully before glancing at you. "I want him all to myself. Is that okay with you?"');
          scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
          scene.actions([
            { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush1'] },
            { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some1.jpg');
    scene.text('You stand up. "I\'ll leave you guys to it then."');
    scene.text('Anushka smiles at you as she scoots over against Djibril and starts running her hands down his body while he looks at you. "Okay, thanks for stopping by. Come by any time you want."');
    scene.text('He then turns his full attention to Anushka and you make your way over to the door. You glance back and see them kissing before you walk out and close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
          ]);
        } else {
          scene.text('She looks him over lustfully, then looks at you while biting her lower lip. "Yeah, I\'m cool with sharing him."');
          scene.text('You nod and Djibril pours each of you a glass of wine.');
          scene.actions([
            { label: 'Just the three of you', goto: ['djibrilev1', 'djibril_sveta_nush1'] },
          ]);
        }
      } else {
        if (Math.floor(Math.random() * 4) + 1 === 1) {
          scene.text('She looks him over lustfully, then glances at you. "I want all the dick to myself. Is that okay with you?"');
          scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
          scene.text('She grins at Djibril. "I want all the dicks. Call your friends," she says as she pats his thigh.');
          scene.actions([
            { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush_gangbang1'] },
            { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some1.jpg');
    scene.text('You stand up. "I\'ll leave you guys to it then."');
    scene.text('Anushka smiles at you as she scoots over against Djibril and starts running her hands down his body while he looks at you. "Okay, thanks for stopping by. Come by any time you want."');
    scene.text('He then turns his full attention to Anushka and you make your way over to the door. You glance back and see them kissing before you walk out and close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
          ]);
        } else {
          scene.text('You glance at Djibril, who seems happy with any of the options.');
          scene.text('She looks him over lustfully before glances at you. "I\'m not in the mood for a gangbang, but I do want him all to myself. Is that okay with you?"');
          scene.text('You can\'t help but feel a little disappointed, but you nod. "Sure, of course."');
          scene.actions([
            { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush1'] },
            { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some1.jpg');
    scene.text('You stand up. "I\'ll leave you guys to it then."');
    scene.text('Anushka smiles at you as she scoots over against Djibril and starts running her hands down his body while he looks at you. "Okay, thanks for stopping by. Come by any time you want."');
    scene.text('He then turns his full attention to Anushka and you make your way over to the door. You glance back and see them kissing before you walk out and close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
          ]);
        }
        scene.text('You glance at Djibril, who seems happy with any of the options.');
        scene.text('She looks him over lustfully before glancing at you. "I want him all to myself. Is that okay with you?"');
        scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
        scene.actions([
          { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush1'] },
          { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some1.jpg');
    scene.text('You stand up. "I\'ll leave you guys to it then."');
    scene.text('Anushka smiles at you as she scoots over against Djibril and starts running her hands down his body while he looks at you. "Okay, thanks for stopping by. Come by any time you want."');
    scene.text('He then turns his full attention to Anushka and you make your way over to the door. You glance back and see them kissing before you walk out and close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Have Djibril invite his friends', goto: ['djibrilev1', 'djibril_sveta_nush_gangbang1'] },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'djibrilgb':
      enterDjibrilgb(s, scene);
      break;
    case 'gangbang_anal':
      enterGangbangAnal(s, scene);
      break;
    case 'gangbang_cum':
      enterGangbangCum(s, scene);
      break;
    case 'gangbang_selfie':
      enterGangbangSelfie(s, scene);
      break;
    case 'gangbang_dress':
      enterGangbangDress(s, scene);
      break;
    case 'sveta_sex1':
      enterSvetaSex1(s, scene);
      break;
    case 'sveta_sex1_bj_cum':
      enterSvetaSex1BjCum(s, scene);
      break;
    case 'sveta_sex1_anal':
      enterSvetaSex1Anal(s, scene);
      break;
    case 'djibril_anya':
      enterDjibrilAnya(s, scene);
      break;
    case 'djibril_sveta_anya1':
      enterDjibrilSvetaAnya1(s, scene);
      break;
    case 'djibril_sveta_anya_gangbang1':
      enterDjibrilSvetaAnyaGangbang1(s, scene);
      break;
    case 'djibril_nush':
      enterDjibrilNush(s, scene);
      break;
    default:
      enterDjibrilgb(s, scene);
      break;
  }
}

export const djibrilev1: LocationDef = {
  name: 'djibrilev1',
  title: 'The dorm room is fairly small, with a large chair and a couc',
  region: 'other',
  description: ['The dorm room is fairly small, with a large chair and a couch in one corner while two beds sit on the other side of the room. You take a seat on the couch with three of the guys while Djibril takes a seat on the chair.'],
  enter: enter,
};
