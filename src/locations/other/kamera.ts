import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).hour = ((s as any).hour ?? 0) + (48);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Prison cell</b></center>');
  scene.img('images/locations/city/industrial/police/c1.jpg');
  scene.text('You spend the next two days alone, in a prison cell. Other than someone wordlessly giving you barely enough food to survive on, you\'re completely ignored. No one came for further questioning, no one asked to see how you\'re doing… nothing! It\'s as if you no longer exist!');
  scene.text('Unsure what to do, you walk through the cell and stare at the ceiling for hours on end, lying alone on your bunk.');
  scene.text('Just when you thought the girl\'s warnings were hollow threats, your cell door opens and a mature woman steps into your cell. She\'s wearing the same prison overalls you\'re wearing, and grins evilly while she stares you down. She has a dominant aura about her, and looks fairly strong.');
  scene.text('The door is slammed shut behind you, effectively locking her in with you. Is she your new cellmate or something?');
  scene.actions([
    { label: 'Greet her', handler: (st: GameState) => {
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
    scene.img('images/locations/city/industrial/police/sex/c2.jpg');
    scene.text('When you\'re about to open your mouth to greet her, she roughly grabs you by your hair and pulls you from your bunk to the floor.');
    scene.text('She quickly pulled her overall open at the same time, and you can\'t help but stare at the enormous strap-on directly in front of your face!');
    scene.text('She grins evilly: "Start sucking, slut."');
    scene.actions([
      { label: 'Open your mouth hesitantly', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/police/sex/c3.jpg');
    scene.text('The woman immediately forces her strap-on down your throat, the moment you part your lips. She keeps it in your throat until you feel you\'re about to pass out and struggle violently, but only lets you go long enough to gasp for air.');
    scene.text('She immediately grabs you by the hair and forces the length down your throat again, fucking your throat expertly with her strap-on. Every time you\'re allowed to breathe, you only get barely enough time.');
    scene.text('After a while, she gets bored and pulls you up by your hair.');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/police/sex/c5.jpg');
    scene.text('As you stand up, the woman pushes you against the wall. When you lean against the wall to keep yourself from falling, you feel her push her huge strap-on against your ass. She shows you no mercy and rams it in forcefully, making you cry out. Tears stream down your cheek while she pushes more and more of her length into your anus.');
    scene.text('"Scream all you want, little slut. You\'re mine now!" the woman grunts in your ear, and begins to fuck you with the strap-on. It hurts incredibly much, and you can\'t hold back and begin to yell and cry every time she thrusts her length inside you.');
    scene.text('"Music to my ears! I love it when they scream…" she laughs cruelly. You try to quiet down and not give her the satisfaction, but she\'s too rough with you and you can\'t hold it in for long. She continues to ream your ass for nearly half an hour, thoroughly enjoying your loud screaming and crying.');
    scene.text('Finally, she pulls out and takes the strap-on out of the harness before getting dressed again.');
    scene.text('You get away as far from her as you can and slide down to the floor in a corner, softly crying. She spits on the ground in front of you indignantly, and knocks on the cell door with the strap-on in her hand. To your surprise, it opens almost immediately.');
    scene.text('"I\'m done", she says to someone you can\'t see.');
    scene.text('You hear the girl\'s voice who interrogated you before say: "Good job, we\'ve been watching you through the cameras. Hold onto the strap-on for a while… you might need it again soon."');
    scene.text('After that, the door closes and you\'re alone again.');
    qspCall(s, 'arousal', 'anal_strap', 10, 'sub', 'lesbian', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Crawl into bed and sleep', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    (s as any).minut = ((s as any).minut ?? 0) + 240;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/police/sex/c6.jpg');
    scene.text('A few hours later you wake up because your vagina hurts. When you open your eyes you see why: a female prison guard is trying to thrust her baton inside you! She hasn\'t gotten it in yet, and is impatiently rubbing the tip of the baton against your pussy lips to try and gain access.');
    scene.text('When you try to squirm away from her, she slaps you in the face and hisses: "Lie still. It\'s time for your daily visit, scum… or are you ready to confess yet?"');
    scene.text('She manages to slide in the baton when you stop moving, and she begins to thrust the nightstick forcefully inside you, obviously trying to make it as painful for you as possible. You scream and groan with every thrust, but to be honest… it\'s not that painful.');
    scene.text('"Well, what\'s it going to be? Are you going to talk?" she gasps between breaths. Fucking you has got her seriously worked up.');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to talk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to talk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/police/sex/c7.jpg');
    scene.text('"I don\'t know what you\'re talking about, officer…" you repeat the phrase you\'ve been saying the whole time to her in a sultry voice, pretending you\'re enjoying her treatment. To be honest, it\'s actually starting to feel good.');
    scene.text('To taunt her even more, you move one finger to your anus and gently begin to massage it.');
    scene.text('The girl is speechless for a moment, and then begins to thrust her baton inside you even faster. You\'re really beginning to enjoy this, moaning loudly and thrusting your hips against the baton, begging her to fuck you hard.');
    scene.text('"Thank you officer, thank you…" you moan, when you feel your orgasm overtake you. You black out for a second, completely oblivious to your surroundings.');
    scene.text('When you regain your focus, the girl stands a bit awkwardly next to you. This wasn\'t supposed to happen! Her orders were to squeeze a confession out of you, not to give you a good fucking with her baton!');
    scene.text('You can tell that she has an obvious damp spot in her panties; bringing you to an unintended orgasm aroused her a great deal! She has a somewhat frustrated look in her eyes when she looks at you, knowing she failed. She has a firm grip on her nightstick.');
    qspCall(s, 'arousal', 'vaginal_dildo', 90, 'sub', 'lesbian', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Rudely tell her to get lost', goto: ['gameover', 'force', '7'] },
      { label: 'Kiss her pussy through her panties', handler: (st: GameState) => {
    (s as any).mentovka = 1;
    scene.img('images/locations/city/industrial/police/sex/c8.jpg');
    scene.text('Figuring you\'re probably better off keeping her on your side, you wordlessly squirm towards her and move your head between her legs, with her standing over you. You begin to kiss her pussy softly through her panties, coaxing a groan out of her.');
    scene.text('She immediately understands what you want to do, and quickly takes off her clothes. She doesn\'t even have to encourage you when she squats above your head again, since you eagerly bury your face between her legs and explore every inch of her pussy. She\'s softly stroking your hair while you lick her eager cunt, completely forgetting about her role.');
    scene.text('A few minutes later, she groans loudly and her body begins to shiver. She\'s orgasming! You do your best to keep her steady and lick her until it\'s over, and then slowly help her down to your bunk where you cuddle for a minute.');
    scene.text('There, she looks at you awkwardly and quickly puts her clothes back on, getting ready to leave your cell. In the doorway she softly mutters: "You really didn\'t do it, huh? I… I\'ll have the paperwork done. You\'ll be released soon."');
    qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait to see if she keeps her word', handler: (st: GameState) => {
    (s as any).gnewQW = 3;
    scene.img('images/locations/city/industrial/police/c1.jpg');
    scene.text('You get dressed again and wait for her to come back. About half an hour later, the door swings open and sure enough, there she is! She\'s holding your belongings, and lets you change into your own clothes before escorting you to the exit. When you\'re at the doorstep she whispers: "You were great, I really needed that. Thanks!" and slams the door shut before you can respond.');
    scene.text('You\'re free!');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Freedom!', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell her what she wants to know', handler: (st: GameState) => {
    (s as any).gopdeath = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 180;
    (s as any).vsehsdaladay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('You nod: "Okay, okay! I\'ll confess, if it gets me out of trouble!"');
    scene.text('The girl gives you a pleased nod and reassures you that you\'ll be fully pardoned, as long as you tell her what she wants to know. She then she presses a few buttons on the camera and begins to ask you questions.');
    scene.text('You answer all of them. How many of them there were, their names, what you did with the stolen goods… you even mention random things you overheard, when you were just chatting with the Gopniks! Anything she might be interested in, anything that might get you out of here!');
    scene.text('You\'re released after your confession, but your days may be numbered. Once the Gopniks find out you ratted them out, who knows what they\'ll do to you…');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the police station', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Punch her and turn the tables', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/police/sex/c4.jpg');
    scene.text('You\'re very much not impressed by her! You give her a firm punch on the head, making her cry out and collapse to the floor. She never even saw it coming.');
    scene.text('While she\'s knocked out, you take off her strap-on and put it on yourself. When she starts to regain consciousness, you rub the huge strap-on against her pussy and smile deviously: "Next time the warden sends you for an errand, don\'t forget: sometimes the sluts fight back!"');
    scene.text('You thrust her strap-on into her own snatch with one fierce motion, making her cry out in pain. As you begin to fuck her, her cries soon turn into moans! She\'s even rubbing her clit while you fuck her, a few minutes in. She orgasms loudly, briefly making you recoil. Hopefully they won\'t send any guards in to check on what\'s happening!');
    scene.text('After a few more minutes, you get bored with her. She\'s no longer considering it a punishment, anyway. You pull the dildo out of her and take off the harness, throwing it on the ground in front of her.');
    scene.text('She quickly and quietly puts it back on and grabs hold of her clothes, clearly scared of what else you might do to her. She quickly knocks the door, and jumps out into the corridor without even bothering to get dressed. Pathetic…');
    scene.text('You\'re all alone again.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 10, 'dom', 'lesbian', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).gnewQW = 3;
    (s as any).hour = ((s as any).hour ?? 0) + (20);
    scene.img('images/locations/city/industrial/police/c1.jpg');
    scene.text('As you sit on the bed waiting for whatever happens next, several doom scenarios cross your mind. Does the warden know what you did to that inmate? Will he send several inmates into your cell at once, next time? You doubt you\'ll be able to take on several women at once…');
    scene.text('For the next day, no one comes other than the usual food delivery.');
    scene.text('Then, the door swings open: it\'s the police chief! He has his possessions in your hand, and grunts: "We\'re releasing you. Here\'s your stuff back. Get out of here before I change my mind."');
    scene.text('He leaves you alone for a moment so you can get dressed, and then escorts you to the exit. No one mentions the failed attempt of the other inmate while they walk you out the door, but you can tell people are not happy about it. Who knows what kind of trouble that woman is into now, for failing to break you?');
    scene.text('With a cruel smile on your face, you leave the facility. That\'s her problem, not yours.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the police station', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const kamera: LocationDef = {
  name: 'kamera',
  title: '<center><b>Prison cell</b></center>',
  region: 'other',
  description: ['You spend the next two days alone, in a prison cell. Other than someone wordlessly giving you barely enough food to survive on, you\'re completely ignored. No one came for further questioning, no one asked to see how you\'re doing… nothing! It\'s as if you no longer exist!'],
  enter: enter,
};
