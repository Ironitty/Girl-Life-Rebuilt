import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
      { label: 'Change your mind and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Change your mind and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A82', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang1.jpg');
    if (((st as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang2.jpg');
    if (((st as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
      scene.text('The guys on either side of you move closer as you sense the lust from them from the way they act, the tone of their voice, how they look at you, and how their hands constantly graze your legs and brush against your body.');
      scene.text('Djibril then gets up and walks over. He stands in front of you and offers you his hand. "Stand up."');
    } else {
      scene.text('The guys on either side of you move closer and their hands begin to paw at you, squeezing your thigh, brushing your hair back or running a finger across your cheek. One of them even cups your breast and gives it a squeeze.');
      scene.text('Djibril then gets up and walks over. He stands in front of you and offers you his hand. "Stand up."');
      scene.text('You remember from last time where this leads.');
    }
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang3.jpg');
    if (((st as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
      scene.text('You take his hand and he pulls you up. "You\'re very pretty, like all Russian girls. Now you\'ll you make us feel good, like all the other Russian girls do."');
      scene.text('As he says this, he places his hand on top of your head and pushes you down. You end up sinking to your knees, noticing that they have all stood up and surrounded you with their dicks out.');
      scene.text('"Go on, grab it. You know you want to," one of them says.');
    } else {
      scene.text('You take his hand and he pulls you up. "You ready to make us all feel good again?" he asks and you quickly get down on your knees as they all surround you with their dicks out.');
      scene.text('"Come on, slut. What are you waiting for? Start stroking our cocks," one of them says.');
    }
    qspCall(st, 'willpower', 'gangbang', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change you mind and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A82', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbangno.jpg');
    if (((st as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
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
    qspCall(st, 'npc_relationship', 'modify', 'A82', 1);
    qspCall(st, 'fame', 'city', 'sex', 3);
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A82'] = 1;
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['african_gangbang'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang4.jpg');
    scene.text('You reach up, wrapping your fingers around the dick of the one that spoke up with your left hand while you reach over and grab Djibril\'s massive cock with your right hand. You start stroking them both while looking up at them.');
    scene.text('After a few minutes, the other two get tired of waiting and you have to switch which dicks you\'re stroking. Djibril places his hand on your head and pulls you over to his dick before he starts rubbing the tip of it on your lips. You can feel his precum smearing across your lips.');
    qspCall(st, 'arousal', 'hj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang5.jpg');
    scene.text('You open your mouth as wide as you can and start sucking Djibril\'s monster cock before you start stroking two of the other three cocks with your hands.');
    scene.text('"Come on, Djibril. Don\'t hog that mouth to yourself!" you hear one of them say.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang6.jpg');
    scene.text('You stop sucking Djibril\'s dick and switch to sucking one of the other dicks while jerking off two more. They keep encouraging you to switch and soon you soon lose track of whose dick you\'re sucking. Whoever you\'re not servicing slowly removes your clothes.');
    scene.text('"Hurry and get her naked! I want to fuck her!" you hear one of them say.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang8.jpg');
    scene.text('You decide not to say anything, and they take your silence as consent. They pull you up as Djibril sits on the couch and you get on all fours on the couch next to him and start stroking his massive cock again as another man kneels behind you. You feel him rubbing the head of his dick against your slit, getting his cock wet with your juices.');
    scene.text('Seconds later, you feel it pushing inside you, filling your pussy completely. He starts fucking your pussy slowly at first, but gradually starts fucking you harder and faster while smacking your ass.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), 'gangbang', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Tag team fuck', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang9.jpg');
    scene.text('You keep sucking Djibril\'s cock as you get fucked balls deep by another before you hear one of them say that it\'s his turn. The one inside you pulls out, but your pussy doesn\'t stay empty for long. Another cock is shoved inside you seconds later and the other three take turns fucking your pussy as you keep sucking off Djibril.');
    scene.text('You notice them giving each other fist bumps when they switch, like they\'re some kind of tag team.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), 'gangbang', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Use your hands', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang10.jpg');
    scene.text('Djibril pulls your mouth off of his dick and stands up. "Alright, you guys have had enough fun. It\'s my turn." He steps away and another guy sits down in his spot. You start jerking him off as one of the others kneels on the couch and shoves his dick in your mouth. You feel a dick pull out of your pussy, only to be replaced straight after. You\'re sure that it\'s now Djibril fucking you.');
    scene.text('Several minutes go by as you get fucked, alternating between sucking and jerking the other cocks before Djibril pulls out of you and you feel the head of his dick rubbing against your asshole.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), 'gangbang', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang10.jpg');
    scene.text('You say nothing and keep sucking their dicks and jerking them off. They take your silence as consent and you feel someone applying lube to your ass before you feel Djibril pressing his dick against your asshole again. The pressure builds until it pops into your ass and stretches it.');
    scene.text('His massive dick stretches your ass to its limits as he starts slowly fucking your ass, but gradually picking up speed. The others switch whose dick you\'re sucking so they all get a turn.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(st, 'arousal', 'anal', (-5), 'gangbang', 'sub', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'More butt fucking', goto: ['djibrilev1', 'gangbang_anal'] },
    ]);
  } },
      { label: 'Just suck them off', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang7.jpg');
    scene.text('You take the dick out of your mouth long enough to say "Sorry, I don\'t want to be fucked in the ass."');
    scene.text('You hear them muttering as you get off the couch and onto your knees before they all crowd around you. You redouble your efforts with your mouth and your hands, trying to make sure none of them are left unattended for too long.');
    scene.text('One of them soon starts moaning and you can tell he\'s close, so you focus on the rest. Before long, you have all four of them ready to cum.');
    qspCall(st, 'arousal', 'bj', 15, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-15), 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-15), 'gangbang', 'sub');
    qspCall(st, 'stat', '');
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
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang7.jpg');
    scene.text('You take the dick out of your mouth long enough to say "Sorry, I don\'t want to have sex. But I\'ll suck you all off."');
    scene.text('You hear them muttering before one of them looks down at you. "Then hurry up and get on with it."');
    scene.text('You redouble your efforts with your mouth and hands, trying to make sure none of them are left unattended for too long. Soon, one of them starts moaning and you can tell he\'s close, so you focus on the rest.');
    scene.text('Before long, you have all four of them ready to cum.');
    qspCall(st, 'arousal', 'bj', 15, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-15), 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-15), 'gangbang', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'They start cumming', goto: ['djibrilev1', 'gangbang_cum'] },
    ]);
  } },
      { label: 'Just anal', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang10.jpg');
    scene.text('You take the dick out of your mouth long enough to say "You can fuck my ass if you want."');
    scene.text('They laugh at that, and seem pleased with the idea.');
    scene.text('"I get first crack at her ass!" you hear Djibril loudly exclaim as they pull you up and one of them sits on the couch while another kneels on it. You get on all fours next to them and start stroking the one sitting on the couch while sucking the one kneeling on it.');
    scene.text('You feel someone applying lube to your ass, and seconds later feel a dick pressing against your asshole. The pressure builds until it pops into your ass and stretches it. Judging by how huge the cock feels, it must be Djibril.');
    scene.text('He starts fucking you slowly at first, but as things progress, he starts fucking you harder and faster as the others take turns letting you suck their dicks.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'sub');
    qspCall(st, 'arousal', 'anal', (-5), 'gangbang', 'sub', 'lube');
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Next cock in the ass', handler: (st: GameState) => {
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang12.jpg');
    scene.text('They switch, and a third one is now fucking your stretched out asshole as you continue sucking the cock in front of you and the other two jerk off while watching you.');
    scene.text('The guy in your ass is thrusting his full length into you and you can feel his balls smacking against your slit with each thrust.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'sub');
    qspCall(st, 'arousal', 'anal', (-5), 'gangbang', 'sub', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Just anal', handler: (st: GameState) => {
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang13.jpg');
    scene.text('Finally, the last guy gets his turn fucking your ass. It slides in easily, and he starts fucking you hard and fast straight away. At this point, you\'re stretched out enough that it\'s starting to feel good.');
    scene.text('A few minutes later, they start taking turns and before long one of the guys starts groaning like he\'s close and the others soon follow suit. They pull you off the couch and onto your knees in front of them.');
    qspCall(st, 'arousal', 'anal', 10, 'gangbang', 'sub', 'lube');
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['djibrilev1', 'gangbang_dress'] },
    { label: 'Take a selfie', goto: ['djibrilev1', 'gangbang_selfie'] },
  ]);
  scene.build();
}

function enterGangbangSelfie(s: GameState, scene: SceneBuilder): void {
  ((s as any).djibrilphoto = (s as any).djibrilphoto ?? {})[2] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/phone/djibril/2.jpg');
  scene.text('Once they\'re finished, they start getting cleaned up and dressed as you reach over to your purse, pull out your phone and hold it up to take a selfie of your cum covered face.');
  scene.text('You take a few until you find one you like, which you then save. With that done, you start to get dressed yourself.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['djibrilev1', 'gangbang_dress'] },
  ]);
  scene.build();
}

function enterGangbangDress(s: GameState, scene: SceneBuilder): void {
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['invite'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/gangbang/gangbang_leave_cum.jpg');
  scene.text('You gather up your clothes and start getting dressed as Djibril smiles at you.');
  scene.text('"That was fun and I hope we can do it again some time. Anyway, I need to go to the library and get some studying done. but feel free to stop by again any time. Talk to you later."');
  scene.text('You wave at him as he leaves with his friends without saying another word. You can feel their cum starting to dry on your face and decide that it\'s time to leave.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).cumloc ?? 0)[11] === 1  ||  (((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)) {
      qspCall(st, 'fame', 'city', 'sex', 5);
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
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['dorm_sex'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_knees.jpg');
  // TODO-QSP: dynamic text: Once on your knees, you pull his sweatpants and underwear down and his <<dick>>c...
  scene.text(`Once on your knees, you pull his sweatpants and underwear down and his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} dick springs free, nearly hitting you in the face as it does. Each time you see it, you're still amazed by it's size. You lean forward and give the tip a quick kiss.`);
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'fame', 'city', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_bj1.jpg');
    scene.text('You open your mouth as wide as you can and take his huge cock into your mouth before you start bobbing your head back and forth, sucking his dick and taking it as deep as you can into your mouth. He lets out a soft moan of pleasure and you feel yourself starting to get wet.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Tell him to fuck you', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_bj2.jpg');
    scene.text('You suck his dick for a few more minutes before you pop it out of your mouth and stroke it with your hand as you look up at him. "I want you to fuck me now."');
    scene.text('He grins down at you. "That\'s good, because I want to fuck your tight little white ass."');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him fuck your ass', goto: ['djibrilev1', 'sveta_sex1_anal'] },
      { label: 'Suck him off', goto: ['djibrilev1', 'sveta_sex1_bj_cum'] },
    ]);
  } },
      { label: 'Keep sucking him off', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_bj2.jpg');
    scene.text('You suck his dick for a few more minutes before he grins down at you. "I want to fuck your tight little white ass now."');
    scene.text('You keep sucking his dick while considering his request.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
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
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A82'] = 1;
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_bj3.jpg');
  scene.text('You look up at him. "I would rather just suck you off today."');
  scene.text('He looks down at you and grins. "Okay, maybe next time then."');
  scene.text('You go back to sucking his dick until you hear him starting to moan louder, followed by his dick starting to twitch in your mouth before you feel his hot cum shooting into your mouth.');
  scene.text('Once he\'s finished, he pulls his dick out of your mouth and you feel the cum on your tongue.');
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Show him your tongue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_mouthful.jpg');
    scene.text('You open your mouth and show him your tongue coated in his cum.');
    // TODO-QSP: dynamic text: He laughs a little. "Fuck, that was amazing. You''re truly an amazing girl, <<$p...
    scene.text(`He laughs a little. "Fuck, that was amazing. You're truly an amazing girl, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('He watches you, likely waiting to see if you\'re going to swallow his cum or spit it out.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'cum_call', 'mouth', 'A82', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_kiss.jpg');
    scene.text('You swallow his cum down while making a big show of it.');
    // TODO-QSP: dynamic text: "Fuck, that was so hot <<$pcs_nickname>>." He pulls up his pants before pulling ...
    scene.text(`"Fuck, that was so hot ${((st as any).pcs_nickname ?? '')}." He pulls up his pants before pulling you up to your feet and giving you a quick kiss. "I'd love to hang out more, but I've got some homework I need to get done."`);
    scene.text('You grin at him. "Okay."');
    scene.text('You turn and head for the door, but not before he slaps you on the ass. You giggle as he goes to his desk and you head out.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      { label: 'Spit', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
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
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A82'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_undress.jpg');
  scene.text('You nod at him with a smile. "Okay, you can fuck my ass if you want."');
  scene.text('You start to strip and he helps you undress. Once you\'re fully naked, he bends you over his couch before walking over to his nightstand and pulling out a bottle of lube. He lubes up his massive dick as he walks back over before you feel him squirt some onto your asshole.');
  scene.text('He uses his fingers to work it into your ass and loosen you up a little before he tosses the bottle aside and scoots up behind you. You feel the large head of his cock pressing against your asshole.');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get butt fucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_fuck1.jpg');
    // TODO-QSP: dynamic text: The pressure builds until his cock finally pops in, causing you to cry out and h...
    scene.text(`The pressure builds until his cock finally pops in, causing you to cry out and hiss a little in pain as his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick stretches your asshole. He starts slowly fucking you, but as you start to relax and moan in pleasure, he starts going faster and deeper.`);
    qspCall(st, 'arousal', 'anal', 5, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'A little deeper', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_fuck2.jpg');
    scene.text('You bite your lower lip and look back at him as he slides his cock even deeper into you. His dick continues to stretch out your ass as you both moan in pleasure.');
    qspCall(st, 'arousal', 'anal', 5, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Balls deep', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_fuck3.jpg');
    scene.text('He pushes even deeper and you feel his balls slapping against your pussy. Despite the size, you start moaning loudly in pleasure as your asshole finishes stretching out to accommodate him.');
    scene.text('"Yes… Yes… Ooohh… Keep fucking me!" you tell him as the pleasure keeps building.');
    scene.text('He takes this as a sign and grabs hold of your hips before he starts hammering your ass balls deep.');
    qspCall(st, 'arousal', 'anal', 5, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Creampie', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/sveta/anal_buttcum.jpg');
    scene.text('He starts groaning loudly before you feel his cock twitching inside you as he shoots his load deep into your ass, burying himself balls deep in you until he stops cumming.');
    // TODO-QSP: dynamic text: He then pulls out and collapses down beside you on the couch as you roll over on...
    scene.text(`He then pulls out and collapses down beside you on the couch as you roll over on your side next to him. "Fuck, that was amazing ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('You lay side by side for a few minutes, catching your breath as you feel his cum leaking out of your gaping asshole. "Mhm… That was wonderful Djibril, truly wonderful. I enjoyed that so much."');
    scene.text('He laughs before he stands up and starts cleaning up and getting dressed. "Thanks. I actually believe you."');
    scene.text('You wipe the cum leaking out of your ass off and get dressed as well. "I really mean it."');
    scene.text('Once you\'re dressed, you give him a passionate kiss.');
    scene.text('He breaks the kiss after a few seconds. "I\'d love to hang out more, but I\'ve got some homework I need to get done."');
    scene.text('You grin at him. "Okay."');
    scene.text('You turn and head for the door, but you barely make it a step when he slaps you on the ass. You giggle as he walks over to his desk.');
    qspCall(st, 'arousal', 'anal', 1, 'lube');
    qspCall(st, 'cum_call', 'anus', 'A82', 1);
    qspCall(st, 'arousal', 'end');
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
  qspCall(s, 'exp_gain', 'gaming', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/djibril_anya.jpg');
  scene.text('You sit around playing video games with Djibril before you finally hear a knock on the door. Djibril answers it and you see Anya standing there as he looks her over while she introduces herself to him.');
  scene.text('He invites her in and they walk over and sit on the couch with you. The three of you talk for a few minutes, but you can tell everyone is eager to get things going.');
  scene.text('"You guys ready to have some fun? I don\'t mind sharing him with you, sis," you smile at her.');
  if (((s as any).DjibrilQW ?? 0)?.['anya_inv'] >= 2) {
    scene.text('"Or, if you want, he can call over some of his friends and share us with them. What do you think?" you ask as you glance at Djibril, who seems happy with either option.');
    scene.text('She thinks for a few seconds. "I\'m good with whatever," she replies.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Invite his friends', goto: ['djibrilev1', 'djibril_sveta_anya_gangbang1'] },
    { label: 'Just the three of us', goto: ['djibrilev1', 'djibril_sveta_anya1'] },
  ]);
  scene.build();
}

function enterDjibrilSvetaAnya1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'npcStat', 'A33', 'a');
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['anya_count'] = ((s as any).DjibrilQW['anya_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya1.jpg');
  scene.text('After the three of you talk for a few minutes, he reaches down and starts rubbing both of your thighs. Anya starts kissing him as he unbuttons and then pulls his pants off, freeing his large black dick.');
  scene.text('As he keeps kissing your sister, he reaches over to take your head in his hand, and push it towards his hard cock.');
  qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'fame', 'city', 'sex', 1);
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya2.jpg');
    scene.text('You wrap your lips around his dick and start bobbing your head up and down, sucking him off while he fondles and kisses your sister.');
    scene.text('After a few minutes, you slide off the couch onto your knees and glance up to see they\'ve stopped kissing and Anya is watching you suck his dick.');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Share his dick', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya3.jpg');
    scene.text('Anya slides off the couch onto her knees as you take his dick out of your mouth and offer it to her. The two of you then take turns sucking it while the other plays with his balls.');
    scene.text('While she\'s sucking his dick, he reaches down and pulls you back up onto the couch before pulling your clothes aside to expose your pussy.');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya4.jpg');
    scene.text('He slides off the couch onto the floor and Anya lays down next to him to keep sucking his dick as he leans in and starts licking your pussy. You lay back and moan in pleasure.');
    scene.text('After a few minutes, he tells you to get on all fours.');
    qspCall(st, 'arousal', 'cuni', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Doggy style', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A82');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya5.jpg');
    // TODO-QSP: dynamic text: You roll over and get on all fours on the couch as he moves up behind you and sl...
    scene.text(`You roll over and get on all fours on the couch as he moves up behind you and slides his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick into your pussy. He strips off the rest of his clothes before he starts slowly fucking you and Anya undresses before she climbs up onto the couch and starts making out with him.`);
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Missionary', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya6.jpg');
    scene.text('Without warning, he suddenly grabs you and flips you over. You squeal in surprcxise before he quickly slides his cock back into your pussy and starts fucking you again.');
    scene.text('Anya sits on the back of the couch above you and he takes your hand and pulls it up to her pussy. You start rubbing and fingering it, making her moan as he removes his hand from yours and starts rubbing her leg.');
    scene.text('As she gets more aroused, she grabs your hand and forces it against her pussy.');
    qspCall(st, 'arousal', 'vaginal_finger_give', 5, ((st as any).npcID1 ?? 0), 'group', 'lesbian', 'incest');
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Eat her out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya7.jpg');
    scene.text('As Djibril keeps fucking you, Anya removes your hand from her pussy and slides down to sit on your face. You start licking her pussy as Djibril fucks you and she moans even louder as she starts riding your face.');
    qspCall(st, 'arousal', 'cuni_give', 5, ((st as any).npcID1 ?? 0), 'group', 'lesbian', 'incest');
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anya get fucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya8.jpg');
    scene.text('Djibril suddenly pulls out of you and grabs Anya, pulling her off your face before he sits on the couch and drags her over to him.');
    scene.text('She straddles and lowers herself down onto him. "Oh fuck, it\'s so big…" she moans.');
    scene.text('You turn around and start playing with his balls as Anya rides him, moaning loudly the whole time. After a few minutes, she gets off him and pulls your head over to his dick.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya9.jpg');
    scene.text('You take hold of his dick in your hand and start stroking it as you wrap your lips around it. You can taste Anya\'s wetness on it as you start sucking it.');
    scene.text('After a few minutes of this, she pulls your head up and he turns and lays on his back before she straddles him again.');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Sit on Djibril\'s face', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya10.jpg');
    scene.text('Wanting some of your own, you move over and straddle his face. He starts licking your soaking wet pussy as Anya keeps riding him, leaning forward to suck on your nipples as she does.');
    qspCall(st, 'arousal', 'foreplay', 5, ((st as any).npcID1 ?? 0), 'group', 'lesbian', 'incest');
    qspCall(st, 'arousal', 'cuni', (-5), ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get buttfucked', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A82');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya11.jpg');
    scene.text('A few minutes go by before Djibril grabs you and lifts you up before throwing you on the couch on your back. He grabs a bottle of lube out of his end table and pulls your legs apart before lubing up your asshole.');
    // TODO-QSP: dynamic text: Once he''s worked the lube in, he moves up between your legs and slides his slic...
    scene.text(`Once he's worked the lube in, he moves up between your legs and slides his slick ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock into your asshole. You cry out in a mix of pain and pleasure as he stretches you out.`);
    scene.text('Anya kneels beside the couch and starts rubbing your clit and fingering your pussy as he fucks your ass.');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'vaginal_finger', 5, ((st as any).npcID1 ?? 0), 'group', 'lesbian', 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Hard anal', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya12.jpg');
    scene.text('As Djibril starts hammering your ass, Anya stops playing with your pussy and starts playing with her own as she watches him fuck your ass.');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/djibril_anya13.jpg');
    scene.text('Djibril suddenly pulls out of your ass with a grunt and starts cumming on Anya\'s face. She opens her mouth as his cum covers her face and splatters into her mouth.');
    scene.text('Once he\'s done, he walks over to the other end of the couch and collapses onto it. "Fuck, that was amazing! You were both amazing."');
    scene.text('You lay on your back for a few minutes catching your breath. "Mhm, that was wonderful Djibril, truly wonderful. I really enjoyed that."');
    // TODO-QSP: dynamic text: Anya gets up and grabs a tissue to clean his cum off her face. "It was. Call me ...
    scene.text(`Anya gets up and grabs a tissue to clean his cum off her face. "It was. Call me when you want to do this again, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('He laughs as he gets up and starts cleaning up and getting dressed. "Any time girls, any time."');
    scene.text('You start getting dressed before you give him a passionate kiss. Once you break the kiss, Anya gives him one too.');
    // TODO-QSP: dynamic text: "I''d love to hang out more, but I''ve got to get back home. Don''t stay out too...
    scene.text(`"I'd love to hang out more, but I've got to get back home. Don't stay out too late, ${((st as any).pcs_nickname ?? '')}. You know how Mom gets."`);
    scene.text('You roll your eyes slightly before turning to Djibril. "I guess I should get going."');
    scene.text('He nods. "I understand. You two stay safe getting back home."');
    scene.text('With that, you turn and head for the door.');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'end');
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
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['anya_gangbang_count'] = ((s as any).DjibrilQW['anya_gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang1.jpg');
  scene.text('You grin at her before looking at Djibril. "Okay, call your friends."');
  scene.text('He grins and pulls out his phone to send some texts. A few minutes later, he stops and looks up at you. "A few of them are on their way over. They should be here any minu…" He doesn\'t finish his sentence before there\'s a knock at the door. He gets up and opens it to let in a trio of other African men.');
  // TODO-QSP: dynamic text: They''re looking at you and Anya with lustful hunger in their eyes as Djibril in...
  scene.text(`They're looking at you and Anya with lustful hunger in their eyes as Djibril introduces you to them. You've met one of them before, but the other two are new to you. "This is ${((s as any).pcs_nickname ?? '')} and her sister, Anya."`);
  scene.text('The three of them crowd around you and Anya. "So this is the girl you told us about?" one of them asks and the one you know nods. They laugh and say something in a language you don\'t understand.');
  scene.text('"She\'s as beautiful as you claimed, as is her sister," the other one says. "Stand up girls. Let us look at you."');
  scene.text('You glance at Anya, who smiles at you and you both stand up. Djibril walks over and joins you as the men start pawing at your bodies and undressing you.');
  qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID ?? 0), 'gangbang');
  qspCall(s, 'arousal', 'foreplay', (-2), ((s as any).npcID2 ?? 0), 'gangbang');
  qspCall(s, 'arousal', 'foreplay', (-2), ((s as any).npcID3 ?? 0), 'gangbang');
  qspCall(s, 'arousal', 'foreplay', (-2), ((s as any).npcID4 ?? 0), 'gangbang');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck some dick', handler: (st: GameState) => {
    qspCall(st, 'fame', 'city', 'sex', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang2.jpg');
    scene.text('The guys start stripping as well and the four of them are soon naked. They push you and Anya down to your knees and Anya starts sucking Djibril\'s dick and stroking another while you attend to the other two men.');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID3 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID4 ?? 0), 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck some more cock', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang3.jpg');
    scene.text('The guys swap positions as you and Anya suck and stroke their cocks. Before too long, they want more, one of them sitting on the couch and pulling Anya on top of him.');
    scene.text('She climbs onto his dick and starts riding it while Djibril sits next to him and pulls you towards him.');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID4 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID3 ?? 0), 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Sit on his dick', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang4.jpg');
    scene.text('Djibril lifts you off the ground and sits you down on his dick. He lubes up your ass before tossing the bottle to one of the guys standing next to Anya. Djibril then guides his dick up your ass and you cry out as his cock stretches your back door until it\'s balls deep inside you.');
    scene.text('His friend wastes no time and slips his smaller but still fairly well hung cock into your pussy and both of them start fucking you. You glance over at Anya, just in time to see the last guy start fucking her in the ass as well.');
    scene.text('After a few minutes, they switch positions so each of them gets a turn with your pussy and ass.');
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID2 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'anal', (-5), ((st as any).npcID ?? 0), 'lube', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Swap partners', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang5.jpg');
    scene.text('A few minutes later, you find yourself being passed to the other pair as Anya is placed on the couch doggy style. You feel a dick slide into your pussy, followed by another sliding into your gaping ass.');
    scene.text('After a few minutes, they switch positions so they each get a turn of your pussy and ass.');
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID3 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'anal', (-5), ((st as any).npcID4 ?? 0), 'lube', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anya get fucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang6.jpg');
    scene.text('After several minutes, they place you on the ground again. Your legs feel weak, but you manage to sit on one of the beds. Perhaps because of this, all four gather around Anya and take turns fucking her holes.');
    scene.text('You think she\'s enjoying it, but it\'s hard to tell with her mouth being full of cock.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang7.jpg');
    scene.text('One of them suddenly says that he\'s about to cum and pulls you over to the couch, getting you down on your knees just as he starts cumming over your face.');
    scene.text('Djibril soon pulls out of Anya and starts cumming on your face while the other two pull out of her and she joins you on her knees as they start cumming on her face.');
    qspCall(st, 'arousal', 'bj', 5, 'gangbang');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID3 ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get kissed', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anya/anya_gangbang8.jpg');
    scene.text('Anya turns her head towards you and starts kissing you. When she breaks the kiss, she starts licking some of the cum off your face and you return the favor. The guys hoot and holler as they watch the display.');
    scene.text('When you finish, they start getting dressed as Anya grabs some tissues and hands you some. You each clean up your faces, after which you both start getting dressed.');
    scene.text('"We have to do this again," one of them says and another says something in a language you don\'t understand, which causes them all to laugh.');
    scene.text('Anya gives you a bemused look before another says "I love Russian girls. They\'re so beautiful and they all love to fuck."');
    // TODO-QSP: dynamic text: Anya stands up. "This was fun. Maybe we can do this again some time? Call me, <<...
    scene.text(`Anya stands up. "This was fun. Maybe we can do this again some time? Call me, ${((st as any).pcs_nickname ?? '')}." She turns to the guys and waves at them as she walks to the door, sauntering as she goes. "Later, boys…"`);
    scene.text('You shake your head at her antics and can\'t help but giggle at their reactions to it.');
    // TODO-QSP: dynamic text: Anya stops at the door. "I''d love to hang out more, but I''ve got to get back h...
    scene.text(`Anya stops at the door. "I'd love to hang out more, but I've got to get back home. Don't stay out too late, ${((st as any).pcs_nickname ?? '')}. You know how Mom gets."`);
    scene.text('You roll your eyes slightly before turning to Djibril. "I guess I should get going."');
    scene.text('He nods. "I understand. You two stay safe getting back home."');
    scene.text('With that, you turn and head for the door.');
    qspCall(st, 'arousal', 'kiss', 3, ((st as any).npcID1 ?? 0), 'lesbian', 'incest');
    qspCall(st, 'arousal', 'end');
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
  qspCall(s, 'exp_gain', 'gaming', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'drugs', 'alcohol', 'wine', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some1.jpg');
  if (((s as any).DjibrilQW ?? 0)?.['sveta_nush'] === 0) {
    scene.text('You sit and play video games with Djibril for a while before there\'s a knock on the door. Djibril gets up to answer it and when he pulls the door open, you see Anushka standing there dressed very nicely. He looks her over as she introduces herself to him.');
    // TODO-QSP: dynamic text: "Hi I''m Anushka, but everyone calls me Nush. <<$pcs_nickname>> has told me a lo...
    scene.text(`"Hi I'm Anushka, but everyone calls me Nush. ${((s as any).pcs_nickname ?? '')} has told me a lot about you," she says to him.`);
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
    (s as any).temp = (Math.floor(Math.random() * 8) + 1);
    if (((s as any).temp ?? 0) === 1) {
      scene.text('She looks him over lustfully, then glances at you. "I want all the dick to myself. Is that okay with you?"');
      scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
      scene.text('She grins at Djibril. "I want all the dicks. Call your friends," she says as she pats his thigh.');
      scene.actions([
        { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush_gangbang1'] },
        { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
      if (((s as any).temp ?? 0) <= 3) {
        scene.text('She looks him over lustfully, then looks to you while biting her lower lip. "I\'m up for getting ploughed by all of them if you are."');
        scene.actions([
          { label: 'Have Djibril invite his friends', goto: ['djibrilev1', 'djibril_sveta_nush_gangbang1'] },
        ]);
      } else {
        if (((s as any).temp ?? 0) <= 5) {
          scene.text('You glance at Djibril, who seems happy with any of the options.');
          scene.text('She looks him over lustfully before glancing at you. "I want him all to myself. Is that okay with you?"');
          scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
          scene.actions([
            { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush1'] },
            { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
      }
    }
  } else {
    if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 1) {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        scene.text('You glance at Djibril, who seems happy with any of the options.');
        scene.text('She looks him over lustfully before glancing at you. "I want him all to myself. Is that okay with you?"');
        scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
        scene.actions([
          { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush1'] },
          { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
      if (((s as any).pcs_hotcat ?? 0) <= 5  &&  ((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 2) {
        if ((Math.floor(Math.random() * 4) + 1) === 1) {
          scene.text('She looks him over lustfully, then glances at you. "I want all the dick to myself. Is that okay with you?"');
          scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
          scene.text('She grins at Djibril. "I want all the dicks. Call your friends," she says as she pats his thigh.');
          scene.actions([
            { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush_gangbang1'] },
            { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
    qspCall(st, 'stat', '');
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
      } else {
        scene.text('You glance at Djibril, who seems happy with any of the options.');
        scene.text('She looks him over lustfully before glancing at you. "I want him all to myself. Is that okay with you?"');
        scene.text('You can\'t help but feel a little disappointed, but you nod in response. "Sure, of course."');
        scene.actions([
          { label: 'Stay and watch', goto: ['djibrilev1', 'djibril_nush1'] },
          { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDjibrilSvetaNush1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'npcStat', 'A33', 'a');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some2.jpg');
  scene.text('As you sit and chat while drinking a glass of wine, Djibril gets a little bold and points at his crotch. "So which one of you beautiful girls is going to suck my dick?"');
  scene.text('Anushka glances at you and giggles, clearly finding his antics amusing instead of crude.');
  scene.text('You glance at him and can\'t help but grin. "Pull out your dick first! We can\'t suck it in your pants."');
  scene.text('He grins and wastes no time unbuttoning his pants and pulling out his semi hard cock.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Push her head to his lap', handler: (st: GameState) => {
    qspCall(st, 'fame', 'city', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some3.jpg');
    if (((st as any).DjibrilQW ?? 0)?.['sveta_nush'] === 0) {
      scene.text('Anushka bites her lower lip as she sets her empty glass down. You put your hand on the back of her head and push her head over to his lap.');
      scene.text('With her face only a few inches from his cock, she reaches over to take hold of it with her hand and starts stroking it. "Oh my god, it\'s so fucking big!"');
      scene.text('You think she\'s just stroking his ego and it seems to work, as her comments make him grin. "You\'re one of those Russian girls that just loves a big black cock, aren\'t you?"');
      scene.text('She bites her lower lip and looks a little bashful. Now you know she\'s just playing him.');
      scene.text('She keeps stroking him. "Oh yes, I\'ve never seen one so big! I don\'t know if it will fit, but I want to find out…"');
    } else {
      scene.text('Anushka bites her lower lip as she sets her empty glass down. You put your hand on the back of her head and push her head over to his lap.');
      scene.text('With her face only a few inches from his cock, she reaches over to take hold of it with her hand and starts stroking it. "Fuck, no matter how many times I see it, I always forget just how huge your big black cock is."');
      scene.text('You know she\'s just stroking his ego at this point, but her comments still make him grin widely in pleasure. "You\'re just a big black cock slut who just loves getting fucked by one, aren\'t you? Tell me how much you love it."');
      scene.text('She bites her lower lip and moans slightly as she keeps stroking him. "Oh yes, I love it when your big… black… cock… stretches my tight… little… white holes."');
    }
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Push her head down further', handler: (st: GameState) => {
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['sveta_nush'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some4.jpg');
    scene.text('"Don\'t tease him! Suck his dick, Nush!" you tell her as you push her head down onto his hard cock.');
    scene.text('She opens her mouth and starts sucking his massive member while stroking it at the same time.');
    scene.text('Djibril moans as she does and leans back on the couch to take another sip of wine. "Oh fuck, that feels so good!"');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'group', 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make out with him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some5.jpg');
    scene.text('You crawl up over her, place a hand on the back of her neck and force her head down even more until you hear her gag.');
    scene.text('"Oh fuck YEAH!" is the response you get out of Djibril as you turn your attention to him and start kissing him. He returns your kisses with passion as you keep forcing Anushka to deepthroat him before he stops. "I want you to lick her pussy and get it nice and wet for me."');
    qspCall(st, 'arousal', 'foreplay', 2, ((st as any).npcID ?? 0), 'group', 'dom');
    qspCall(st, 'arousal', 'voyeur_sex', (-2), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Eat Anushka out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some6.jpg');
    scene.text('Djibril encourages Anushka to stand up and bend over so she can keep sucking his dick as you kneel on the couch next to her and push her dress up over her hips before pulling her panties aside.');
    scene.text('You lean over and start licking her slit, her pussy already soaking wet as you work your tongue inside her. You can hear her moaning around his dick as you do.');
    scene.text('After a few minutes, Djibril has you stop. "Get on the couch, spread your legs and show me that pretty pussy of yours."');
    qspCall(st, 'arousal', 'cuni_give', 3, ((st as any).npcID1 ?? 0), 'group', 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some7.jpg');
    scene.text('Once you\'re on your back and stripped from the waist down, he grabs Anushka by the hair and pulls her off his dick before dragging her head over between your legs. "Eat her pussy and get it nice and wet for me."');
    scene.text('She kneels on the couch, places her face between your legs and starts licking your pussy, her tongue darting inside you to tongue fuck you.');
    scene.text('Djibril watches before he half kneels on the couch and half stands behind Anushka. She moans loudly, but keeps eating you out.');
    scene.text('"Fuck, your pussy is so tight!" he moans as he starts slowly but steadily fucking her as she eats you out. A few minutes go by until he suddenly sits on the couch behind her and looks you in the eye. "Come over here and suck my dick, taste your friend\'s juices."');
    qspCall(st, 'arousal', 'cuni', 3, ((st as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck Djibril', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some8.jpg');
    // TODO-QSP: dynamic text: As you get up and Anushka slides off the couch, he looks at her and says "Strip ...
    scene.text(`As you get up and Anushka slides off the couch, he looks at her and says "Strip ${((st as any).pcs_nickname ?? '')} for me."`);
    scene.text('Anushka starts pulling your clothes off and once you\'re completely naked, you get on your knees on the couch before bending forward to suck his dick. You can taste Anushka\'s pussy juices on his dick.');
    scene.text('Djibril reaches up and slaps you on the ass. "Come on Nush, don\'t leave her hanging. Keep that pussy nice and wet for me."');
    scene.text('You feel her tongue dart back inside your pussy, causing you to moan around his dick. A few more minutes go by before he pulls your mouth off his cock. "Strip your friend for me."');
    qspCall(st, 'arousal', 'cuni', 3, ((st as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(st, 'arousal', 'bj', (-3), ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Strip her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some9.jpg');
    scene.text('As you stop sucking him, she stops eating you out. You turn around and strip her before she puts one foot up on the couch and spreads her legs wide while looking at you. You then get down and start licking her soaking wet pussy, slipping your tongue between her lips as you do.');
    scene.text('He watches the two of you for a few minutes while stroking his dick before he stands up.');
    scene.text('"I can\'t take this anymore. I\'ve got to fuck both of you. Come over here girls." You both approach him and he gets Anushka down on all fours on the couch, then encourages you to climb on top of her.');
    scene.text('You stand above her as he pushes you forward so you\'re both bent over, one on top of the other with your backsides facing him.');
    qspCall(st, 'arousal', 'cuni_give', 2, ((st as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some10.jpg');
    // TODO-QSP: dynamic text: You feel the tip of his dick sliding against your wet clit before he pushes his ...
    scene.text(`You feel the tip of his dick sliding against your wet clit before he pushes his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock inside you.`);
    scene.text('He starts off slowly fucking you, letting you get used to his size, but as you moan more loudly, he starts fucking you a little faster. Just as it\'s really starting to feel good, he suddenly pulls out of you.');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Nush\'s turn', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some11.jpg');
    scene.text('"Ooooh… Fuck… It\'s too big!" Her cries seem like a mix of pain and pleasure and she starts taking deep breaths.');
    scene.text('You feel his stomach smack against your ass with each thrust as he fucks Anushka. "Fuck yeah! Your ass feels so good!"');
    scene.text('She continues moaning and groaning in a mix of pain and pleasure as he fucks her ass. As he keeps fucking her, you feel the cool liquid from the lube being squirted on your asshole before he works the lube into you with his fingers.');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some12.jpg');
    scene.text('She gasps and goes silent as you feel the tip of his dick against your asshole before he pushes his dick into your ass.');
    scene.text('He\'s slow and shallow at first, but slowly starts pushing his huge cock deeper inside you as he fucks you. "Mhm, damn another tight ass to stretch out."');
    scene.text('After a few minutes, he pulls out of you and pushes you forward.');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID ?? 0), 'group', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anushka\'s turn again', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some13.jpg');
    scene.text('As he moves you forward, your legs go around her waist and the back of your thighs are against the top of her hips, resulting in your clit resting against her back. You hear Anushka gasp again, followed by the sounds of slapping flesh as you feel her hips bouncing against your thighs, which holds her in place for Djibril as he starts fucking her hard and fast.');
    scene.text('"Oooh… fuck… OH FUCK!" she cries out as her body bounces back and forth, her lower back rubbing against your clit as she does.');
    scene.text('The louder she gets, the harder he fucks her. "Fuck yeah! I\'m going to tear this little ass up!"');
    scene.text('He slaps you on the ass. "Don\'t worry sweetness, your ass is next." He slaps you on the ass a few more times as he keeps hammering Anushka\'s asshole.');
    scene.text('A few minutes later, she starts crying out and you feel her whole body start shaking and quivering underneath you. "Don\'t stop… Don\'t stop… Fuck… I\'m cumming!"');
    scene.text('He does what she asks and doesn\'t stop. He fucks her through her orgasm, only slowing down once she comes down.');
    qspCall(st, 'arousal', 'foreplay', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back to you', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some14.jpg');
    scene.text('You suddenly feel his dick slide back into your asshole and he starts fucking it hard and fast. You can hear him grunting as he approaches orgasm himself.');
    scene.text('A few minutes go by until he pulls back out of you and stands by the coffee table. "Fuck… I\'m about to cum. Come over here, girls!"');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID ?? 0), 'group', 'lube', 'rough');
    qspCall(st, 'arousal', 'foreplay', (-3), ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'He\'s cumming', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some15.jpg');
    scene.text('You quickly climb off Anushka and get on your knees in front of Djibril as Anushka quickly joins you on the other side of him. He jerks his dick a few times and starts cumming.');
    scene.text('When he finishes, he squeezes the last few drops out on each of your faces. "OOOOH… FUCK, that was amazing." He pauses for a second before adding "Damn, look at the mess you girls made! Why don\'t you lick the table clean?"');
    qspCall(st, 'arousal', 'foreplay', 2, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick it up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_3some16.jpg');
    scene.text('He grabs you both by the hair and forces you down against the table. The cum from your face just adds to the mess. "Come on, lick it up."');
    scene.text('Anushka starts licking it up and you follow suit as he holds your head down until the two of you have licked up every last drop off the table. He then lets go and flops down on the couch. "Good girls, good girls…" Then he laughs out loud. "Fuck, that was amazing. I hope you girls enjoyed that as much as I did."');
    scene.text('Anuska gets up and grabs some tissues to clean the cum off her face, offering one to you. You take it and start cleaning your face as well.');
    scene.text('"Yeah I had fun, even if my ass is going to be a little sore tomorrow," she says with a smile.');
    scene.text('You smile at him as you toss the used tissue away. "Yeah, I had a great time as always."');
    scene.text('You all start getting dressed while joking and flirting. Once Anushka is dressed, she smiles at you. "I need to get going. I\'d like to do some shopping before I take the train home."');
    scene.text('He nods. "Cool, cool. Yeah, I had a blast. I hope you come by again, Nush. Be safe."');
    scene.text('She has a bemused look on her face. "Maybe. See you guys later."');
    scene.text('"I should really get going too," you tell Djibril.');
    scene.text('He nods. "Yeah, I\'ve got some school work I need to do. See you later, sweetness."');
    scene.text('With that, you make your way out of the room.');
    qspCall(st, 'arousal', 'foreplay', 2, ((st as any).npcID ?? 0), 'group', 'sub', 'humiliation');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'arousal', 'end');
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDjibrilNush1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_djibril1.jpg');
  scene.text('You get up and make room for them by taking a seat on one of the beds. He stands and pulls her up with him before he moves behind her and starts nuzzling her neck and undressing her.');
  scene.text('He soon has her clothes removed and his dark hands roam over her pale naked body as she moans and leans against him. He then pushes her down to her knees and pulls his dick out of his pants.');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her suck his dick', handler: (st: GameState) => {
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['sveta_nush'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_djibril2.jpg');
    scene.text('She turns as he pushes her down and gets on her knees in front of him, sucking his dick while using her hands to pull his pants and underwear off.');
    scene.text('He places his hand on the back of her head and starts forcing her to deepthroat him. You can hear her gagging, but she doesn\'t seem to be struggling or resisting.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Anushka get fucked', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A82');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_djibril3.jpg');
    // TODO-QSP: dynamic text: He grabs her by the hair and pulls her up before leading her back over to the co...
    scene.text(`He grabs her by the hair and pulls her up before leading her back over to the couch, where he pushes her onto her knees and moves in behind her to slide his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick into her wet pussy.`);
    scene.text('She looks back at him, crying out as she furrows her brow. "Oh fuck, you\'re so big!"');
    scene.text('He smiles back at her. "Don\'t worry, I\'ll have this tight little pussy stretched out in no time."');
    scene.text('She has a slightly bemused look on her face. "Fuck you!"');
    scene.text('He laughs. "I think you\'re confused. You\'re the one getting fucked," he says as he slams himself balls deep into her, making her cry out and cutting off any reply she might have had.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'They play rough', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_djibril4.jpg');
    scene.text('He pushes her head down against the couch and starts hammering away at her pussy, her moans getting louder as she reaches back to play with her clit.');
    scene.text('"Yeah, you love getting your little white pussy pounded by a big black cock, don\'t you?"');
    scene.text('She seems unable or unwilling to reply to him, so you decide to offer some advice to him. "She also loves big black cock up her tight little ass."');
    scene.text('He glances at you and grins. "Is that right? You love getting your little white ass fucked by black cock?"');
    scene.text('"She loves all cock up her ass. She\'s a total butt slut," you add.');
    scene.text('He laughs at your comment and slaps her ass. "That right? You a butt slut? You want me to fuck your ass?"');
    scene.text('He slaps her ass again before she finally answers. "YES!" She seems to have trouble focusing on anything but the fucking she\'s getting.');
    scene.text('He slaps her ass again, then turns his head to you as he keeps fucking her pussy. "Toss me that bottle of lube." He points at the end table and you get up and open the drawer, pulling out the bottle of lube.');
    scene.text('You hand it to him and he squirts some on her asshole before tossing the bottle aside as he works the lube into her ass with his fingers.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Up the ass', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A82');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_djibril5.jpg');
    scene.text('He pulls out of her and grabs her by the hair before leading her over to the window, where he grabs a chair from his desk and slides it in front of the window. He lifts her up and puts her in the chair facing the window.');
    scene.text('"Look out there," he says as he grips her hair and makes her look at the window. From your position, you can see one of the other dorms and parts of the city. You know his window also looks out over the quad.');
    scene.text('"Everyone looking in this window is going to see your little white ass getting fucked by my big black cock, and they\'re all going to know that you\'re not just a butt slut, but that you\'re a black cock butt slut."');
    scene.text('She doesn\'t respond to what he says as he grabs his dick and slides it between her cheeks. Her hands grip the back of the chair hard as she cries out. "OH FUCK!!"');
    scene.text('"That\'s right. Your ass is mine, you little butt slut," he tells her as he starts fucking her in the ass.');
    scene.text('"Oh fuck, it\'s too big… Not so deep!" she whines.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Butt slut', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A82');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_djibril6.jpg');
    scene.text('Her whines start turning into moans of pleasure as she stops gripping the back of the chair slightly and leans forward, relaxing and starting to really enjoying the butt fucking Djibril is giving her. "Yes… yes… Oooh… Fuck me, fuck me!"');
    scene.text('You\'ve seen Anushka have sex enough to know she likes it rough once she gets into it.');
    scene.text('"Well? Hurry up and fuck her!" you tell Djibril.');
    scene.text('He glances over at you.');
    scene.text('"She asked you to fuck her. Now pound that little asshole hard and deep until your balls are bouncing off her pussy!" you tell him.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal pounding', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_djibril7.jpg');
    scene.text('He takes your advice and starts fucking her ass harder, slowly working himself deeper until his balls start slapping against her pussy. She starts making a high pitched whining noise, but you\'ve heard her make it before. He glances at you and you just nod for him to continue, so he does.');
    scene.text('Within a few minutes, she starts saying "OH… OH… Harder… Harder… OH… Fuck me harder… Ooo… Ooo…"');
    scene.text('He does as she asks and pulls most of the way out of her and starts fucking her hard until she starts crying out and her whole body starts shaking as she has a massive orgasm.');
    scene.text('Before she even finishes, he starts grunting as well, but he manages to ride out her orgasm. Once she stops, he quickly jerks out of her and pulls her off the chair onto the floor.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Happy facial', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_djibril8.jpg');
    scene.text('She barely gets on her knees in front of him before he starts cumming on her face. She grins as the spurts of cum splatter her face as she grabs his dick and milks it, squeezing every last drop of cum out of him.');
    scene.text('When he finishes, he walks over and collapses on the couch. "Oh my god, that was fucking amazing! You okay?"');
    scene.text('She nods as she grabs her phone and takes a selfie with her face still covered in his cum before she grabs some tissues to clean up. "Yeah, I loved it. I love my ass getting fucked hard and rough."');
    scene.text('He laughs. "Works for me. I love fucking you hard and rough."');
    scene.text('Once her face is clean, she starts getting dressed and lets out a small sigh. "My ass is going to be sore tomorrow though…" She glances at you and winks. "But it was totally worth it."');
    // TODO-QSP: dynamic text: Once she''s fully dressed, she smiles at the two of you. "Thanks for the fun, bu...
    scene.text(`Once she's fully dressed, she smiles at the two of you. "Thanks for the fun, but I should get going. See you later, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('She walks out the door as Djibril glances over at you. "I don\'t want to be rude, but I\'ve got some homework I need to do."');
    scene.text('You get up and nod. "It\'s okay, I should get going too," you tell him and head for the door.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'arousal', 'end');
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

function enterDjibrilSvetaNushGangbang1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'npcStat', 'A144', 'a');
  qspCall(s, 'npcStat', 'A242', 'b');
  qspCall(s, 'npcStat', 'A243', 'c');
  qspCall(s, 'npcStat', 'A244', 'd');
  qspCall(s, 'npcStat', 'A245', 'e');
  qspCall(s, 'npcStat', 'A246', 'f');
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['sveta_nush'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang1.jpg');
  scene.text('You think for a second before smiling at Djibril. "Call your friends."');
  // TODO-QSP: dynamic text: He grins and pulls out his phone and starts texting. Within a few minutes, there...
  scene.text(`He grins and pulls out his phone and starts texting. Within a few minutes, there's a knock at the door and Djibril invites five of his friends in. He checks his phone before introducing the two of you to his friends. "This is ${((s as any).pcs_nickname ?? '')} and her friend, Nush. They want to have some fun with us."`);
  scene.text('The guys chuckle and look at the two of you. This is a seemingly regular thing since they seem to know exactly what\'s about to happen and start stripping down. You recognize all but one of them from your own gangbang.');
  scene.text('The group surrounds the two of you and as you both start to get up, Djibril positions you in the middle of the couch as a few of them start talking to each other in a language you don\'t understand and laughing. Even without understanding them, you get the gist of it. They\'re talking about who gets to fuck which one of you first.');
  scene.text('Some of them seem more interested in you and some of them more interested in Anushka. Once their conversation is done, it seems things have been decided. The guys get up and pull the two of you off the couch and onto the floor, where you both squat down as they finish undressing.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck dick', handler: (st: GameState) => {
    qspCall(st, 'fame', 'city', 'sex', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang2.jpg');
    scene.text('Three of them surround each of you, their dicks in your face. You start sucking one of them while giving another a handjob. The other one paws at your body and pulls your top away, exposing your breasts as you glance over at Anushka and notice that she\'s in the same position as you.');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID2 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'hj', (-3), ((st as any).npcID3 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'foreplay', (-3), ((st as any).npcID4 ?? 0), 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck more dicks', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang3.jpg');
    scene.text('The dick in your mouth is soon replaced with another. You suck each of their dicks while jerking off others. After a few minutes of this, they seem to be ready for more.');
    scene.text('One of them sits on the couch and is joined by a second as they start lubing up their dicks. Anushka is then guided over to one of the guys sitting on the couch as you\'re pulled over to the other one.');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID3 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID4 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'hj', (-3), ((st as any).npcID2 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'hj', (-3), ((st as any).npcID5 ?? 0), 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Sit on a dick', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang4.jpg');
    scene.text('You\'re pushed onto the guy\'s lap and he lines his dick up with your asshole. As you\'re pushed down, his dick pops into your ass and you place your feet on the couch in an effort to control the speed and depth, but he quickly grabs you by the hips and starts forcing you down further, impaling you on his dick while using his hands to speed up your motion.');
    scene.text('You start rubbing your clit as you glance over at Anushka and see she has a dick up her ass as another guy fucks her pussy, and a third walks over behind the couch and sticks his dick in her mouth.');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID4 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'clit_finger', (-3), 'self', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Another dick up the butt', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang5.jpg');
    scene.text('The one fucking Anushka in the ass turns towards you and tells his friend to swap. You\'re lifted off the dick in your ass, as is Anushka.');
    scene.text('The one under her scoots over under you and you\'re lowered back down, his dick sliding into your asshole. One of the other guys slides under Anushka as she\'s lowered down, his dick sliding up her ass as another one sticks his dick in her pussy. The one that was fucking her pussy then moves around behind the couch and sticks his dick in her mouth.');
    scene.text('After a few minutes, one of the guys speaks up. "Come on, I want to fuck one of them in the ass."');
    scene.text('"Let\'s pull a train on their asses!" another chimes in.');
    scene.text('There are murmurs of agreement and they all seem to like the idea.');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID6 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'clit_finger', (-3), 'self', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Doggy style', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang6.jpg');
    scene.text('You\'re lifted up and placed on the couch on your knees, with your face pressed against the cushion. Anushka is given similar treatment with your heads touching one another. You\'re barely in position when you feel a dick slide back into your ass.');
    scene.text('Another does the same to Anushka, and after a few minutes, the ones fucking the two of you pull out and are replaced.');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID2 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID3 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID4 ?? 0), 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal train', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang7.jpg');
    scene.text('Minutes pass as they all take turns fucking your ass. At some point, Anushka starts crying out and her body shakes as she has an orgasm, which only a few minutes later is followed by a second one.');
    scene.text('This seems to excite and encourage the guys, who start getting a lot rougher with the two of you. The ones waiting their turns watch while jerking off.');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID5 ?? 0), 'gangbang');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID6 ?? 0), 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang8.jpg');
    scene.text('As the guys start grunting and getting close, they pull out and lightly jerk off while others take their place. All of them soon seem to be on the edge and you\'re both pulled off the couch and placed on the floor, where you both squat down and one starts cumming on your face, then a second.');
    qspCall(st, 'arousal', 'foreplay', 2, 'gangbang');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID3 ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'More facials', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_sveta_gangbang9.jpg');
    scene.text('They take turns cumming on your faces until the last cums on Anushka\'s face. With your faces covered in their cum, they back off and start getting dressed and cleaned up as Anushka grabs her phone and takes a selfie of her face covered in cum before grabbing some tissues and handing you one.');
    scene.text('You both start cleaning up before you start getting dressed.');
    scene.text('Before you finish dressing, one of them turns to Djibril. "Damn man, I don\'t know where you find bitches like this, but thanks for the invite!"');
    scene.text('Several of the others say similar things, all impressed with his ability to find hot girls like you and Anushka and thanking him for the invite.');
    scene.text('By the time you finish dressing, they\'ve all walked out the door, leaving you and Anushka alone with Djibril. "Sorry about that. They don\'t mean anything by it."');
    scene.text('Anushka laughs. "It\'s cool. You guys used us for sex and we used you for sex. No harm, no foul." She walks over and gives him a fist bump like several of the guys did. "Thanks for the invite."');
    scene.text('He nods. "Uh… You\'re welcome?" He glances at you, amused by her attitude.');
    // TODO-QSP: dynamic text: Once she''s dressed, she smiles at you. "Thanks for the fun, but I should get go...
    scene.text(`Once she's dressed, she smiles at you. "Thanks for the fun, but I should get going. See you later, ${((st as any).pcs_nickname ?? '')}." Just before walking out, she puts her hand on her ass and you hear her mutter "Fuck, my ass is going to be sore tomorrow…"`);
    scene.text('She walks out the door as Djibril glances over at you. "I don\'t want to be rude, but I\'ve got some homework I need to do."');
    scene.text('You get up and nod. "It\'s okay, I should get going too," you tell him and head for the door.');
    qspCall(st, 'arousal', 'foreplay', 5, ((st as any).npcID ?? 0), 'gangbang');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID6 ?? 0), 1);
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'arousal', 'end');
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
  scene.build();
}

function enterDjibrilNushGangbang1(s: GameState, scene: SceneBuilder): void {
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['sveta_nush'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang1.jpg');
  scene.text('Djibril pulls his phone out and sends a few texts. Within a few minutes, there\'s a knock on the door and two other black guys come in. You recognize both of them from your gangbang and make room for them by taking a seat on one of the beds.');
  scene.text('After they close the door, Djibril sits on her left side and one of the others on her right, while the last one sits on the bed next to you.');
  scene.text('The one sitting on the right introduces himself. "I am Lebogang, but most call me Lebo. Him over there," He points to the guy sitting next to you. "That\'s Ermias."');
  scene.text('She shakes his offered hand. "Pleased to meet you, your Russian is very good. I\'m Anushka, but everyone except my mother calls me Nush."');
  scene.text('He laughs. "Nush… I like it. And thank you. Like Djibril, I have worked hard on mastering your language." He gestures to Djibril. "So my man here tells me one black cock isn\'t enough for you, that you need as many as you can get. Is that right, baby?"');
  scene.text('She rubs his and Djibril\'s thighs with her hands as she answers. "I need your big… black… cocks… in all my holes… I just love getting used." She\'s practically purring and loving the attention.');
  scene.text('Lebogang looks at Djibril. "Damn man, you found us a wild one this time!" Then he looks at Anushka. "We can help you out with that, for sure."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her make out', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A82');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang2.jpg');
    scene.text('Lebogang stands up and pulls her up into a kiss as Djibril stands up as well. After a few seconds, he grabs her waist and pulls her over to him to start kissing her as Lebogang crowds up behind her.');
    scene.text('Ermias keeps watching, but you notice the growing bulge in his pants. You can\'t really blame him; you can feel yourself getting wet watching this.');
    qspCall(st, 'arousal', 'voyeur', 2, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'She loves it rough', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang3.jpg');
    scene.text('Djibril and Lebogang start pawing at Anushka, groping her breasts, ass, thighs and even rubbing her crotch through her dress before they each grab one side of her dress and pull it up, showing off her black panties underneath. She laughs at that and runs her hands over their bodies in return.');
    scene.text('Ermias seems to have seen enough. He gets up and rapidly walks over to the three of them, pulling his enormous hard cock from his pants as he does.');
    scene.text('Once he reaches them, he roughly shoves Anushka down to her knees and smacks her in the face with his hard cock, which is even longer and thicker than Djibril\'s.');
    scene.text('"Suck my dick, slut!"');
    qspCall(st, 'arousal', 'voyeur', 2, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'She sucks a dick', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang4.jpg');
    scene.text('Anushka looks wide eyed at the monstrous cock in front of her before she opens her mouth and starts sucking on it as Djibril and Lebogang pull their dicks out too. Lebo\'s dick is fairly long and thick, but looks a bit undersized next to his friends.');
    scene.text('Djibril and Lebogang start stroking their dicks while Ermias places his hand on the back of Anushka\'s head and forces her to deepthroat him. You can hear her gagging when he does.');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'She sucks more dicks', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang5.jpg');
    scene.text('"Hey man, share!" Lebogang interrupts and Ermias steps aside and releases Anushka\'s head. She gasps and catches her breath, but only for a moment as Lebogang sticks his dick in her mouth and she starts sucking it while stroking Djibril.');
    scene.text('After a while, she starts sucking Djibril and stroking Ermias, all three of them enjoying her attention when they have it.');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch her get fucked', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A243');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang6.jpg');
    scene.text('Ermias sits down on the couch. "Bring her over, I want to fuck her."');
    // TODO-QSP: dynamic text: Lebogang and Djibril pull her up by her hands and carry her to the couch, placin...
    scene.text(`Lebogang and Djibril pull her up by her hands and carry her to the couch, placing her in Ermias' lap. As they lower her down, Ermias lines his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick up so it slides into her pussy. She moans loudly for a moment, but then Djibril shoves his dick back in her mouth as Lebogang grabs one of her hands and pulls it up to his dick, which she starts stroking.`);
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'They take turns', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang7.jpg');
    scene.text('Lebogang sits on the arm rest next to Ermias. "Pass her over. It\'s my turn."');
    scene.text('Ermias and Lebogang manhandle her over until Lebogang\'s dick slides inside her pussy and he starts fucking her. Ermias moves over next to the arm rest and turns her head to face him, then sticks his massive dick in her mouth.');
    scene.text('She jerks Djibril off while sucking Ermias as Lebogang fucks her pussy, moaning loudly and loving every moment of it.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Djibril\'s turn', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang8.jpg');
    scene.text('After a few minutes, Djibril moves over and pushes Ermias aside. "My turn."');
    scene.text('He then lifts her off Lebogang and lays her on her back on the arm rest before he plunges his cock into her soaking wet pussy and starts fucking her hard and fast.');
    scene.text('Lebogang gets up and places his dick right in her face from one side, while Ermias does the same from the other. Anushka jerks them both off and alternates between sucking on their dicks as Djibril fucks her before she starts crying out. "YES… OH GOD… YES… Fuck me… harder…"');
    scene.text('She has a massive orgasm as Djibril continues to fuck her.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Djibril her ass up', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A82');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang9.jpg');
    scene.text('Djibril pulls out of her and flips her over onto her stomach on the arm rest before he slides his dick between her ass cheeks.');
    // TODO-QSP: dynamic text: "Wait…" she starts, but she never finishes her sentence as he shoves his hips fo...
    scene.text(`"Wait…" she starts, but she never finishes her sentence as he shoves his hips forward and his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock pops into her ass. "AAAAH! FUCK!" She places a hand on his chest to try and stop him from going deeper.`);
    scene.text('Ermias sits by her head and places her hand on his dick. She starts stroking it while trying to keep Djibril from tearing her ass up.');
    scene.text('Djibril stops trying to force it in more and apologises before he turns to Lebogang. "Give me that lube."');
    scene.text('Lebogang grabs a bottle and passes it to Djibril, who proceeds to pour a lot of lube onto his dick. With his dick now lubed up, he starts working deeper into her ass and starting to slowly fuck her a little faster.');
    scene.text('After a while, she seems to relax and starts to moan a little before she starts sucking Lebogang\'s dick.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Next in her ass', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang10.jpg');
    scene.text('After a few minutes, Ermias speaks up. "My turn. I want to fuck her ass before you two break it!" he says with a laugh.');
    scene.text('Djibril chuckles and pulls out of her ass before stepping aside. Ermias moves behind Anushka and slides his enormous dick into her ass before he roughly starts fucking her ass hard and fast, causing her to cry out and place a hand against his hips to try and slow him down. "AAAhhh… Too big… You\'re too big! Not so rough!"');
    scene.text('He pushes her hand aside and slams himself balls deep into her ass. "Take it, bitch!"');
    scene.text('Anushka moans and cries out in a mix of pain and pleasure as Ermias pounds her ass before Djibril smacks his arm with the back of his hand. Ermias sighs, but slows down a little as Djirbil grabs a towel and starts cleaning his dick off.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Two for one', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A242');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang11.jpg');
    scene.text('Lebogang then stands up. "Okay, my turn before you two wear her ass out."');
    scene.text('Ermias pulls out of her and you can hear the relieved sigh that escapes her lips. Djibril waves her over and she crawls over to him. He pushes her head down on his dick, which she starts sucking as Lebogang comes up behind her and pulls her towards him.');
    // TODO-QSP: dynamic text: Lebogang lubes up his <<dick>>cm <<$dick_girth>> cock before sliding it into her...
    scene.text(`Lebogang lubes up his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock before sliding it into her ass. He takes it slow as Ermias watches and jerks off. As Anushka starts moaning louder, Lebogang starts fucking her harder and faster until her body is wracked by another orgasm.`);
    scene.text('As soon as her orgasm passes, Lebogang pulls out of her. "I\'m cumming, I\'m cumming!"');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Facials', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/dorm/anushka/nush_gangbang12.jpg');
    scene.text('The boys quickly manhandle Anushka to the floor, where she sits with her legs apart and her face tilted up, mouth open and tongue stuck out. They gather around her and start jerking off. Lebogang soon starts cumming on her face, quickly followed by the other two. Her face is quickly covered by their cum and a fair bit of it lands in her mouth. Once they\'ve finished squeezing out every last drop, they move away, clean up and start getting dressed.');
    scene.text('Anushka crawls over to her purse and takes out her phone to take a selfie of her face covered in cum. After taking a few, she seems happy with the pictures. Putting her phone away, she grabs some tissues and starts cleaning up her face before getting dressed. The boys talk briefly before Lebogang and Ermias head for the door, Ermias slapping Anushka hard on the ass as he does, which earns him a slightly dirty look from her before they walk out.');
    scene.text('Djibril watches as she dresses. "Are you alright? I hope me and my friends didn\'t hurt you."');
    scene.text('She grins at him. "It\'s fine, I get it. We all get carried away in the moment. Just remember… Lube. Lots of lube."');
    scene.text('He laughs and nods. "Lots of lube, got it."');
    // TODO-QSP: dynamic text: Once she''s dressed, she smiles at you. "Thanks for the fun, but I should get go...
    scene.text(`Once she's dressed, she smiles at you. "Thanks for the fun, but I should get going. See you later, ${((st as any).pcs_nickname ?? '')}." Just before walking out, she puts her hand on her ass and you hear her mutter "Fuck, my ass is going to be sore tomorrow…"`);
    scene.text('She walks out the door as Djibril glances over at you. "I don\'t want to be rude, but I\'ve got some homework I need to do."');
    scene.text('You get up and nod. "It\'s okay, I should get going too," you tell him and head for the door.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'gangbang');
    qspCall(st, 'arousal', 'end');
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
    case 'djibril_sveta_nush1':
      enterDjibrilSvetaNush1(s, scene);
      break;
    case 'djibril_nush1':
      enterDjibrilNush1(s, scene);
      break;
    case 'djibril_sveta_nush_gangbang1':
      enterDjibrilSvetaNushGangbang1(s, scene);
      break;
    case 'djibril_nush_gangbang1':
      enterDjibrilNushGangbang1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const djibrilev1: LocationDef = {
  name: 'djibrilev1',
  title: 'The dorm room is fairly small, with a large chair and a couc',
  region: 'other',
  enter: enter,
};
