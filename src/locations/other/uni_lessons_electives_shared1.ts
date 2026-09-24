import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAnushkaStudy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'uni_lessons_electives', 'study_with_friends');
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  scene.text('You smile. "Yeah, that sounds like a good idea. Mind if I come?"');
  scene.text('She shrugs. "Sure, if you want, but I really do have to study." Her tone makes it clear she doesn\'t have time to mess around like she did back in Pavlovsk.');
  scene.text('"Yeah, I understand," you reply.');
  scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
  if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
    scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later."');
    scene.text('With that, she gathers her stuff and leaves.');
  } else {
    ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
    scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later, but you should stop by my place sometime."');
    scene.text('She tells you where the apartment she shares with the boys from the band is located before she gathers her stuff and leaves.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up', goto: ['uni_library', 'start'] },
  ]);
  scene.build();
}

function enterObeyKendra(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A84', 'adore');
  qspCall(s, 'npcgeneratec', '0', 'Black Guy', (Math.floor(Math.random() * 5) + 18), 2, 1, 'like');
  qspCall(s, 'npcgeneratec', 'gen_dick', 'gigantic');
  qspCall(s, 'npcgeneratec', 'set_dick', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcStat', '$npclastgenerated');
  qspCall(s, 'npcStat', 'A84', 'a');
  ((s as any).kendraQW = (s as any).kendraQW ?? {})['sub'] = ((s as any).kendraQW['sub'] ?? 0) + (1);
  scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_kneel.jpg');
  scene.text('You walk over and the young man stands up and turns to face you. He looks a little surprised at what\'s happening, but licks his lip. His eyes follow you as you drop down on your knees in front of him and he grins before glancing over at Kendra. "God damn, I can\'t believe it. This bitch will do anything you say!" His voice is filled with surprise and what sounds like admiration.');
  scene.text('You can hear the amusement in her tone as Kendra replies to him. "Told you. I have a lot of white slaves at this place who love being owned by an ebony goddess. Isn\'t that right, slave?"');
  scene.text('"Yes mistress," you obediently reply.');
  scene.text('"Fuuccck, this is hot." He reaches down and adjusts his dick as it starts to harden inside his pants.');
  scene.text('Kendra softly laughs. "You may refer to her as little white slut, little white bitch, or slave. Now unbutton his pants and take his dick out. Do you understand me, slave?"');
  qspCall(s, 'arousal', 'BDSM', 1, ((s as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Unbutton his pants', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra1.jpg');
    scene.text('You do as you\'re commanded and unbutton his pants before you reach into his underwear and pull out his quickly hardening dick. It\'s very long and very thick, but your thoughts are interrupted by Kendra. "Don\'t just sit there, you dumb fucking white bitch. Open that pretty little white mouth of yours and start sucking on that big black cock!"');
    qspCall(st, 'arousal', 'BDSM', 1, ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
    qspCall(st, 'arousal', 'hj', (-1), ((st as any).npcID ?? 0), 'humiliation', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his cock', handler: (st: GameState) => {
    ((st as any).kendraQW = (st as any).kendraQW ?? {})['classroom_sex'] = ((st as any).kendraQW['classroom_sex'] ?? 0) + (0);
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra2.jpg');
    // TODO-QSP: dynamic text: You open your mouth while grabbing his <<dick>>cm <<$dick_girth>> dick with your...
    scene.text(`You open your mouth while grabbing his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick with your hand and guiding it into your mouth. You stroke the shaft of his cock with one hand while you close your lips around and start sucking on it. You can hear him softly moan as you do.`);
    scene.text('"I\'m training this little white slut on how to suck black cock, like all little white bitches should."');
    scene.text('You keep sucking, not really paying attention to what they\'re saying.');
    scene.text('"Call her what I told you to call her, like she deserves and wants to be called," kendra demands. "Or I can just tell her to stop and we can leave."');
    scene.text('"Sorry!" he quickly responds and hesitates for only a moment. "This little white slut really knows how to suck black cock. You trained her well."');
    scene.text('"That\'s better," she replies. You can hear the amused tone in her voice.');
    qspCall(st, 'arousal', 'BDSM', (-1), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
    qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'humiliation', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra3.jpg');
    scene.text('You feel Kendra\'s hand against the back of your head as you continue obediently sucking on his dick. "Come on you stupid white slut, I know you can do better than this. Take that big black cock deeper!"');
    scene.text('She starts pushing your head forward, forcing you to take his cock deeper into your mouth. You feel the head of it pushing against the back of your throat as she keeps forcing your head forward. "Don\'t just stand there! Grab the bitch\'s head and make the white slut gag on your cock!"');
    qspCall(st, 'arousal', 'BDSM', (-1), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
    qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'humiliation', 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra4.jpg');
    scene.text('He places his hand on the back of your head as well, but instead of forcing your head forward he just holds it so you can\'t pull away. He then forces his dick down your throat until your nose is pressing against his stomach and you can feel his balls against your chin. As you struggle to breathe, he pulls back and allows you to gasp before he does it again, letting up just enough so you can breathe.');
    scene.text('"That\'s it, choke this white slut with your black cock!"');
    qspCall(st, 'arousal', 'BDSM', (-1), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
    qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'humiliation', 'sub', 'deepthroat', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get face fucked', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra5.jpg');
    scene.text('He starts roughly face fucking you, holding one hand on your head so you can\'t pull away while Kendra lends a hand. You keep gasping and gagging as he shoves his dick down your throat.');
    scene.text('"Okay, enough of that. Let the white slut stand up."');
    scene.text('You feel her grab your hair and pull your head away until his dick pops out of your mouth, followed by her pulling you up into a standing position. "Get on your feet, slave!" she barks.');
    qspCall(st, 'arousal', 'BDSM', (-1), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
    qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'humiliation', 'sub', 'deepthroat', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra6.jpg');
    scene.text('She starts stripping your clothes off. "Take off your clothes as well," she orders and the young man quickly obeys.');
    scene.text('She pushes you forward once you\'re naked. "Stroke his dick, slut." She smiles when you obediently do as you\'re told. "You\'re such an obedient little white slut. I\'m going to give you a reward," she says as she roughly pulls you towards her and gives you a passionate kiss. "Now lay your white ass on the desk."');
    qspCall(st, 'arousal', 'BDSM', (-1), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
    qspCall(st, 'arousal', 'hj', 1, ((st as any).npcID ?? 0), 'humiliation', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lay on the desk', goto: ['uni_lessons_electives_shared1', 'obey_kendra_laydown'] },
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

function enterObeyKendraLaydown(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra7.jpg');
  // TODO-QSP: dynamic text: You obey your ebony mistress and lay on your back on the professor''s desk, prop...
  scene.text(`You obey your ebony mistress and lay on your back on the professor's desk, propping your shoulders up with your elbows as Kendra scoots you over so your ass is near the edge of the desk, pushing your legs wide apart as she does. The guy steps up between your legs and Kendra reaches over and grabs his cock to guide it to your pussy. You feel his ${((s as any).dick_length ?? '')}cm ${((s as any).dick_girth ?? '')} black cock slide into your wet pussy, stretching and filling it, causing you to moan softly. "Listen to her moaning like a fucking slut." As he slides his dick deeper into you, she continues talking. "That's right, rip that tight little white pussy apart with that huge black cock!" She lets go of his dick as he slides it balls deep inside you.`);
  qspCall(s, 'arousal', 'BDSM', (-1), ((s as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
  qspCall(s, 'arousal', 'vaginal', 1, ((s as any).npcID ?? 0), 'humiliation', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra8.jpg');
    scene.text('He starts roughly thrusting into you, causing you to slide along the top of the desk, pushing you ever so slightly towards the other side. "Fuck yeah, you got a nice tight little pussy!" You then notice him glance past you. "I love tearing this little white pussy up with my big black dick!" You can only assume she gave him a look that made him add to what he was saying before you glance over and notice her starting to strip off her clothes. Once she\'s naked, she pushes you down so you\'re fully laying on your back.');
    qspCall(st, 'arousal', 'BDSM', (-1), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
    qspCall(st, 'arousal', 'vaginal', 2, ((st as any).npcID ?? 0), 'humiliation', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Kendra takes a seat', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra9.jpg');
    scene.text('She straddles your face and sits on it. You stick out your tongue and do the best you can to lick her pussy as she starts roughly riding your face. "Fuck this little white slave like the useless slut she is! Fuck her like you mean it or leave!" she says in the dominant tone of voice that you\'ve heard many times before as you feel him start thrusting hard and fast into your pussy, hammering away at it.');
    qspCall(st, 'arousal', 'vaginal', 2, ((st as any).npcID ?? 0), 'humiliation', 'sub', 'rough');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'rough', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra10.jpg');
    scene.text('As he hammers away at your pussy, you feel him rubbing your clit with one of his fingers, which makes you moan louder. Kendra either doesn\'t notice or doesn\'t care as she keeps riding your face. "That\'s right you dirty little white slut, worship my ebony pussy! Just like that…" she moans and starts getting even rougher. Just as you think she\'s about to climax, she suddenly climbs off you and slides off the desk. "Stop fucking her. Get off the desk, slut."');
    qspCall(st, 'arousal', 'vaginal', 2, ((st as any).npcID ?? 0), 'humiliation', 'sub', 'rough');
    qspCall(st, 'arousal', 'clit_finger', (-2), ((st as any).npcID ?? 0), 'humiliation', 'sub', 'rough');
    qspCall(st, 'arousal', 'cuni_give', (-2), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'rough', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Slide off the desk', goto: ['uni_lessons_electives_shared1', 'obey_kendra_offdesk'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterObeyKendraOffdesk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra11.jpg');
  scene.text('Once he pulls his dick out of you, you slide off the desk as your mistress commands, eager to obey her.');
  scene.text('"Kneel, slut!" she demands and you obediently drop to your knees as the guy comes over to stand next to you. "Now suck that nasty pussy juice of yours off his dick."');
  scene.text('You open your mouth just in time for him to eagerly stick his cock back in your mouth. You do your best to slurp up all your pussy juices off it before she issues another command. "Stand up and bend over the desk." You again obey and do as your mistress commands.');
  qspCall(s, 'arousal', 'BDSM', (-1), ((s as any).npcID1 ?? 0), 'humiliation', 'sub');
  qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID ?? 0), 'humiliation', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Bend over', handler: (st: GameState) => {
    (st as any).dick = 20;
    (st as any).dick_girth = 'thick';
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra12.jpg');
    scene.text('You bend over the desk, placing your elbows on the desk with your ass facing Kendra and the boy. You glance back to watch them, feeling very exposed and vulnerable standing like this in a classroom, knowing someone could come back at any moment. Kendra spreads your ass checks apart and spits on your asshole before she turns to the guy. "I want you to fuck this white slut\'s asshole dry, fuck it raw until she cries." He gives her a slightly surprised look. "Do what I tell you! This white slut loves having her ass ripped apart by huge black cocks."');
    // TODO-QSP: dynamic text: When you don''t say anything, he moves up behind you and rubs the tip of his coc...
    scene.text(`When you don't say anything, he moves up behind you and rubs the tip of his cock against your asshole. He pushes hard until the head of his cock pops painfully into your ass, causing you to gasp and whine in pain. "Go on, shove that big black cock of yours into that tiny tight asshole and rip it up!" Kendra barks as you close your eyes against the growing pain. You let out a pained yelp as his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick is shoved deeper into your unlubed asshole.`);
    qspCall(st, 'arousal', 'BDSM', (-1), ((st as any).npcID1 ?? 0), 'humiliation', 'sub');
    qspCall(st, 'arousal', 'anal', 2, ((st as any).npcID ?? 0), 'humiliation', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get your ass fucked', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra13.jpg');
    scene.text('You hiss in pain as he finally bottoms his dick out in your ass. You feel his balls slap against the wet slit of your pussy as he starts roughly fucking your asshole. "That\'s it, tear that little white asshole up!" Kendra says, sounding almost orgasmic. She climbs on the desk in front of you and backs her ass up to your face. You start to lick her pussy as your ass gets fucked, but she grabs your head and pulls it up until your tongue is licking her asshole. "Oooh yeah. Lick my ass, slut!"');
    scene.text('You feel his hand join hers on the back of your head as he pushes your face deeper between her ebony cheeks.');
    qspCall(st, 'arousal', 'anal', 2, ((st as any).npcID ?? 0), 'humiliation', 'sub', 'rough');
    qspCall(st, 'arousal', 'rimming', (-2), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'rough', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Eat her ass', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra14.jpg');
    scene.text('As she moans from you eating her ass, he pulls his hand away from your head and grabs your hips. Holding your hips in place with his hands, he starts really hammering his cock balls deep into your ass, each thrust causing his balls to slap against your pussy. Kendra moans in pleasure while your sounds of pain are muffled by your face being buried in her ass. "Fuuuck! This ass is too tight, I\'m about to bust a nut!"');
    qspCall(st, 'arousal', 'anal', 2, ((st as any).npcID ?? 0), 'humiliation', 'sub', 'rough');
    qspCall(st, 'arousal', 'rimming', (-2), ((st as any).npcID1 ?? 0), 'humiliation', 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get on your knees', goto: ['uni_lessons_electives_shared1', 'obey_kendra_takecum'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterObeyKendraTakecum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra15.jpg');
  scene.text('Kendra suddenly pulls away from you. "Don\'t cum in her ass!" she says and he pulls out of you, much to your relief. "Get down on your knees, slut!" she says while point at the floor next to her. You slide off the desk again and get down on your knees next to her before she kneels down behind you and reaches around to roughly pull your jaw so your mouth is open as wide as it will go. "Stick out your tongue, slut." You do as you\'re told as she looks up at the guy. "Shoot your load in her dirty mouth."');
  scene.text('He stands in front of you stroking his dick while aiming at your face. A few seconds later, the first stream of cum hits your chin before the next one goes right into your open mouth. Several more follow, with some going in your mouth while others hit you in the face around your mouth. He finally lets out one more loud groan and then relaxes, having spent his full load.');
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 0);
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay put', handler: (st: GameState) => {
    qspCall(st, 'fame', 'city', 'sex', 5);
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra16.jpg');
    scene.text('"Don\'t swallow that prime African cum until I tell you to!" Kendra demands, so you stay perfectly still with your mouth full of cum, letting the cum from your chin drip onto her hand. "Why don\'t you take a picture of this dirty fucking white slut covered in your cum so you can show all your friends?"');
    scene.text('He grins at the notion before grabbing his phone and taking a picture of you with his cum in your mouth as Kendra holds your mouth open. He takes several more pictures before he puts the phone down on the desk and starts getting dressed. Kendra gets up as well and starts to get dressed as well, looking down at you as she does. "Stay… And don\'t swallow."');
    scene.text('Once they\'re both fully dressed and cleaned up, Kendra turns to you again while you still kneel on the floor naked covered in cum. "Swallow, slut!"');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra17.jpg');
    scene.text('You obediently swallow the cum as he watches and shakes his head. "I can\'t believe she just does everything you say like that. That\'s so fucking cool."');
    scene.text('Kendra laughs. "All these white bitches are submissive sluts. All of them are desperate to be owned by some ebony god or goddess so they can worship black cocks and cunts."');
    scene.text('He just shrugs. "What do I know, maybe you\'re right. Either way I had an amazing time and would like to do it again."');
    scene.text('She grins. "I know you would. Maybe if you\'re a good boy and you treat me right, I\'ll let you have another go at her or one of my other white bitches. Anyway, I need to go to the library, so grab my books and carry them for me."');
    scene.text('He only hesitates for only a moment before he gathers up her stuff, carrying everything for her but her purse. "You may clean and dress yourself once we\'ve left the room, slave. Understand?"');
    scene.text('You nod your head. "Yes, mistress."');
    scene.text('She gives you a friendly, maybe even proud, smile. "You\'re such a good little white bitch. I\'ll have you full trained in no time." She then turns to the guy. "Let\'s go."');
    scene.text('She slowly walks out with him following closely behind. Once they\'re gone, you start to get cleaned and dressed.');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 0);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
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
    case 'anushka_study':
      enterAnushkaStudy(s, scene);
      break;
    case 'obey_kendra':
      enterObeyKendra(s, scene);
      break;
    case 'obey_kendra_laydown':
      enterObeyKendraLaydown(s, scene);
      break;
    case 'obey_kendra_offdesk':
      enterObeyKendraOffdesk(s, scene);
      break;
    case 'obey_kendra_takecum':
      enterObeyKendraTakecum(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons_electives_shared1: LocationDef = {
  name: 'uni_lessons_electives_shared1',
  title: 'You smile. "Yeah, that sounds like a good idea. Mind if I co',
  region: 'other',
  enter: enter,
};
