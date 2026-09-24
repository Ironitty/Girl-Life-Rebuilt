import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/ignat.jpg');
  scene.text('You\'re walking through campus when you\'re approached by a guy who looks young enough to be a student, but you don\'t remember ever seeing him around campus before.');
  if (((s as any).fame ?? 0)?.['city_slut'] >= 250) {
    scene.text('He frowns when he gets close enough to get a better look at you. "Oh, it\'s <i>you</i>. I\'ve heard all about you, all of it bad."');
    scene.text('He looks you over with disgust. "Sorry, but I\'m looking for a girl who\'s… less easy."');
    scene.text('"What\'s that supposed to mean?" you scowl.');
    scene.text('He scoffs dismissively and gives you a dirty look before he turns and leaves, leaving you feeling a little insulted.');
    scene.text('It seems your reputation as a slut precedes you…');
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } else {
    scene.text('"Hey, beautiful," he says with a charming, almost flirty smile.');
    scene.text('"Hi?" you reply in a wary tone as you step back from him.');
    scene.text('He smiles again. "Relax, I\'m not going to hurt you. I\'m Ignat."');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>…" you reply.
    scene.text(`"${((s as any).pcs_nickname ?? '')}…" you reply.`);
    // TODO-QSP: dynamic text: "Sexy name for a sexy girl," he grins. "So here''s the deal. I''m an art student...
    scene.text(`"Sexy name for a sexy girl," he grins. "So here's the deal. I'm an art student and I'm looking for a model to do a… private shoot with me. I'll pay you ${qspFunc(s, 'money', 'string_profit', 3000)} for your time."`);
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).porn_studio = (st as any).porn_studio ?? {})['pickup_porn'] = (-1);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/ignat.jpg');
    scene.text('There\'s something about him and the way he\'s looking at you, something that tells you not to trust him.');
    scene.text('"Sorry, but I don\'t have time right now…" you mumble in response.');
    scene.text('He shrugs his shoulders before stepping aside and allowing you to continue on your way.');
    scene.text('You look back and see him approach another girl, who seems more inclined to accept his offer.');
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } },
      { label: 'Accept', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('You accept his offer. It\'s easy money and sounds like fun.');
    scene.text('He leads you to his car and you climb inside. He turns to you with a wad of cash in his hand.');
    scene.text('"I just need to film a quick scene of you smiling while accepting this money. I\'ll need it back after, but I promise I\'ll pay you after the shoot."');
    scene.text('You nod and he pulls out a handheld camera to film you accepting the money. You give the camera a little smile as Ignat smiles at you.');
    scene.text('After this is done, he continues filming you for a few minutes before he starts the car and drives the short distance to an apartment block on the edge of the island, where he takes you up to his apartment and leads you inside.');
    scene.text('You follow him into the bedroom, where you find multiple cameras and lights set up around the bed.');
    if (((st as any).pcs_intel ?? 0) >= 50) {
      scene.actions([
        { label: 'Call him out', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('"You think I\'m an idiot, don\'t you?" you ask in an unimpressed tone. "You clearly want to film a porno with me."');
    scene.text('"Well aren\'t you a smart one?" he smiles. "Yes, that\'s exactly what we\'re going to do."');
    scene.text('He\'s eyeing you up and down with a lustful look in his eyes.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('You back away from him and turn to head for the door. "Fuck you! I\'m not having sex with you, especially not on camera for a bunch of creeps to watch on the internet!"');
    scene.text('He scoffs. "People are going to learn you\'re a slut one way or the other. The question is, how many do you <i>want</i> to find out?"');
    scene.text('You turn back and see a cruel smile on his face. "Either we do this and <i>some</i> of your fellow students might see it online, or I\'ll see to it that <i>all</i> of them know that you let the black guys in the dorm run trains on you every night."');
    if (((st as any).DjibrilQW ?? 0)?.['african_gangbang'] === 1) {
      scene.text('Your eyes go wide. Does he actually know about what you\'ve been doing with Djibril and his friends?!');
    } else {
      scene.text('He\'s probably just bluffing, but it would destroy your reputation if he actually did carry out such a threat.');
    }
    scene.text('"So what will it be? A porno that pretty much nobody will see or everyone on campus knowing that you like taking big black cocks in every hole at once?"');
    qspCall(st, 'willpower', 'misc', 'force', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'force', 'medium');
    qspCall(st, 'willpower', 'pay', 'force');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      qspCall(st, 'fame', 'city', 'sex', 2);
    }
    qspCall(st, 'stat', '');
    scene.text('"Go suck your own dick, asshole!" you scornfully reply and head for the door.');
    scene.text('"Have it your way. Just know that everyone on campus will know that you\'re a filthy whore who craves big black cocks!"');
    scene.text('You flip him off as you leave and walk back to campus to clear your head.');
    scene.actions([
      { label: 'Continue', goto: ['uni_grounds', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', handler: (st: GameState) => {
    ((st as any).porn_studio = (st as any).porn_studio ?? {})['pickup_porn'] = 1;
    qspCall(st, 'stat', '');
    if (((st as any).DjibrilQW ?? 0)?.['african_gangbang'] === 1) {
      scene.text('You can\'t be sure if he actually knows about what you\'ve been doing with Djibril and his friends or if he\'s just bluffing, but you also have a feeling he\'ll actually carry out his threat and expose you, so you resign yourself to his demands.');
      scene.text('"I knew you were a smart girl," he smirks. "Now get undressed."');
    } else {
      scene.text('You can\'t be sure if he\'s bluffing or not and you feel that he\'ll actually carry out his threat, so you resign yourself to his demands.');
      scene.text('"I knew you were a smart girl," he smirks. "Now get undressed."');
    }
    scene.actions([
      { label: 'Do as he wants', goto: ['pickup_porn', 'reluctant_start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Let\'s do it then', handler: (st: GameState) => {
    ((st as any).porn_studio = (st as any).porn_studio ?? {})['pickup_porn'] = 1;
    qspCall(st, 'stat', '');
    scene.text('You smile. "Then you should have just said that! I like getting freaky and doing it on camera sounds hot…"');
    scene.text('He looks taken aback by your response. "Oh, okay. Get undressed and we can start…"');
    scene.text('You smile at his reaction as you do as he asks.');
    scene.actions([
      { label: 'Continue', goto: ['pickup_porn', 'enthusiastic_start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Question him', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('You look at him in confusion. "Uhhh… What\'s this?"');
    scene.text('"Don\'t worry about the cameras. They\'re just for recording from different angles," he replies.');
    scene.text('"And what are we recording exactly?" you ask hesitantly.');
    scene.text('"An… erotic shoot, so to speak," he replies as he rubs his hand against your arm. "You\'re a sexy girl, and I want to show your beauty to everyone who\'ll watch."');
    scene.text('You back away slightly. "Watch? You mean you\'re going to upload this to the internet?"');
    scene.text('"Yes. Everyone loves my work when I upload it."');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You don\'t like the way this is going and shake your head. "No! I can\'t do this!"');
    scene.text('You rush out of his apartment and hurry back to campus without stopping.');
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do it', handler: (st: GameState) => {
    ((st as any).porn_studio = (st as any).porn_studio ?? {})['pickup_porn'] = 1;
    qspCall(st, 'stat', '');
    scene.text('You\'re not sure if you can trust him, but something manages to tempt you into doing what he wants. You\'re not sure if it\'s because of the money or if the idea itself is appealing to you.');
    scene.actions([
      { label: 'Continue', goto: ['pickup_porn', 'hesitant_start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterReluctantStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A193');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/foreplay/spread_legs.jpg');
  scene.text('You begrudgingly nod and start undressing as he smiles and grabs his camera.');
  scene.text('You finish undressing and sit on the bed as he starts filming. You avoid looking into the camera and reluctantly tell him your name as he motions for you to spread your legs.');
  scene.text('You reluctantly do so and he moves in for a few closeups. "What an amazing looking pussy! I can\'t wait to fuck it!" he laughs as he runs his hand over your crotch.');
  // TODO-QSP: dynamic text: After getting a few more shots of you and asking a few more questions, he stands...
  scene.text(`After getting a few more shots of you and asking a few more questions, he stands and pulls his pants down to let his fully erect ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock spring free while motioning for you get in position.`);
  scene.text('You glare at him out of camera shot, but get on your knees in front of him.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.img('image=shared/sex/blowjob/kotovbj114.mp4');
    scene.text('You grab his cock and jerk it in your hand before taking it into your mouth.');
    scene.text('He moans lightly before looking down at you. "Let me see those pretty eyes as you suck my dick, baby."');
    scene.text('You begrudgingly do as you\'re told and maintain eye contact with the camera above you for the duration of the blowjob, his reactions telling you that he likes what he\'s seeing.');
    scene.actions([
      { label: 'Penetration', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/miss/enter1.mp4');
    scene.text('After a few minutes, he has you pop his dick of your mouth and lie back on the bed with your legs spread wide.');
    scene.text('He gets another close up of your pussy before stepping in between your legs and rubbing his dick against your lips before pushing it into your awaiting hole, causing you both to moan as he slides inside you.');
    scene.text('"Oh shit, you\'re so fucking tight! I can feel you squeezing around me!"');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/miss/hard3.mp4');
    scene.text('He doesn\'t hold back and immediately starts pounding your pussy. You instinctively cover your face every time you see the camera getting a shot of you, but he\'s enjoying himself too much to say anything about it.');
    scene.actions([
      { label: 'Get fucked some more', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/doggy/kotovsex11.mp4');
    scene.text('He pulls out and flips you up onto your knees before inserting himself back into your pussy. He then resumes fucking you just as hard, if not harder than before.');
    scene.text('"Look into the camera there. I want to see the pleasure on your face."');
    scene.text('You put on a fake show of moaning at the camera in front of you as he keeps pounding you.');
    scene.actions([
      { label: 'Get fucked even more', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/cowgirl/med1.mp4');
    scene.text('He then pulls out and lies flat on the bed before grabbing his camera. He holds it up close as you mount him and slide down onto his dick.');
    scene.text('You lean back on your hands and start riding him as he moves his camera around, getting as many shots of you as he can.');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'face', 'A193');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('shared/sex/cum/facial/cumface3.mp4');
    scene.text('He says he\'s about to cum and you quickly pull yourself off of his cock before he stands up on the bed next to you and jerks his cock.');
    scene.text('A few seconds later, you\'re hit in the face by a blast of cum that\'s followed by several more as he groans loudly.');
    scene.text('Once he\'s finished, you sit on your knees on the bed as he films a shot of your cum covered face.');
    scene.text('You give the camera a fake smile before he stops filming and you glare at him. "Are we done now?"');
    scene.actions([
      { label: 'Finished', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'money', 'earn', 3000);
    (st as any).cumspclnt = 1;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('He nods, seemingly satisfied with his footage before he throws you a rag to clean your face. "You\'re a good fuck. You ever considered a career in porn?"');
    scene.text('You ignore his comment and wipe the cum off your face before you start getting dressed. "Just give me the money so I can get out of here."');
    scene.text('"Of course, of course. Every slut needs her payment," he smiles as he hands you a wad of cash.');
    scene.text('You quickly stuff it in your purse and hurry out of the apartment without looking back.');
    scene.actions([
      { label: 'Leave his apartment', goto: ['city_island', ''] },
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

function enterHesitantStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/foreplay/doggy2.jpg');
  scene.text('You nod and start undressing as he smiles and grabs his camera. "We\'ll do a little interview to introduce you to the audience first."');
  scene.text('You finish undressing and sit on the bed as he starts filming. You smile at the camera and tell him your name as he moves in for a few closeups, telling you to get on all fours for him.');
  if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')  ||  qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
    scene.text('"Damn girl, you\'ve got one amazing ass! Do you work out or were you just blessed with good genes?" he asks as you feel his hand running over your ass.');
    scene.text('You look back and smile at the camera while giving your ass a little shake.');
    scene.text('"Nice view of that sexy pussy from back here too!" he laughs.');
  } else {
    scene.text('"Nice view of that sexy pussy from back here," he laughs and you look back and smile at the camera as you feel his hand running over your crotch.');
  }
  // TODO-QSP: dynamic text: After getting a few more shots of you and asking a few more questions, he stands...
  scene.text(`After getting a few more shots of you and asking a few more questions, he stands and pulls his pants down to let his fully erect ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock spring free while motioning for you get in position.`);
  qspCall(s, 'willpower', 'misc', 'force', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'force', 'medium');
    qspCall(st, 'willpower', 'pay', 'force');
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('You knew there was a catch. He wants to film a porno with you! You quickly climb off the bed and start getting dressed.');
    scene.text('"What the fuck? We were in the middle of something!" he exclaims.');
    scene.text('"You didn\'t say anything about fucking you, douchebag! I didn\'t agree to that and I\'m leaving!"');
    scene.text('He looks like he\'s about to say something, but just scoffs and lets you leave.');
    scene.text('You hurry out of his apartment and don\'t stop until you reach the university.');
    scene.actions([
      { label: 'Leave', goto: ['uni_grounds', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.img('image=shared/sex/blowjob/kotovbj114.mp4');
    scene.text('You smile and get on your knees. You then grab his cock and jerk it before taking it into your mouth.');
    scene.text('He moans lightly before looking down at you. "Let me see those pretty eyes as you suck my dick, baby."');
    scene.text('You do as you\'re told and maintain eye contact with the camera above you for the duration of the blowjob, his reactions telling you that he likes what he\'s seeing.');
    scene.actions([
      { label: 'Penetration', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/miss/enter1.mp4');
    scene.text('After a few minutes, he has you pop his dick of your mouth and lie back on the bed with your legs spread wide.');
    scene.text('He gets another close up of your pussy before stepping in between your legs and rubbing his dick against your lips before pushing it into your awaiting hole, causing you both to moan as he slides inside you.');
    scene.text('"Oh shit, you\'re so fucking tight! I can feel you squeezing around me!"');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/miss/hard1.mp4');
    scene.text('He doesn\'t hold back and immediately starts pounding your pussy, causing you to moan loudly in pleasure.');
    scene.text('You\'re enjoying yourself too much to care about the camera getting shots of your face.');
    scene.actions([
      { label: 'Get fucked some more', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/doggy/kotovsex11.mp4');
    scene.text('He pulls out and flips you up onto your knees before inserting himself back into your pussy. He resumes fucking you just as hard, if not harder than before, causing you to shriek loudly in pleasure.');
    scene.text('"Look into the camera there. I want to see the pleasure on your face."');
    scene.text('You gaze into the camera in front of you in between moans of pleasure as he keeps pounding you.');
    scene.actions([
      { label: 'Get fucked even more', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/cowgirl/med1.mp4');
    scene.text('He then pulls out and lies flat on the bed before grabbing his camera. He holds it up close as you mount him and slide down onto his dick.');
    scene.text('You lean back on your hands and start riding him, moaning as his shaft slides in and out of you. He moves his camera around, getting as many shots of you as he can.');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'face', 'A193');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('shared/sex/cum/facial/cumface3.mp4');
    scene.text('He says he\'s about to cum and you quickly pull yourself off of his cock before he stands up on the bed next to you and jerks his cock.');
    scene.text('A few seconds later, you\'re hit in the face by a blast of cum that\'s followed by several more as he groans loudly.');
    scene.text('Once he\'s finished, you sit on your knees on the bed as he films a shot of your cum covered face. You give the camera a smile before he stops filming.');
    scene.actions([
      { label: 'Finished', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'money', 'earn', 3000);
    (st as any).cumspclnt = 1;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('He nods, seemingly satisfied with his footage before he passes you a rag to clean your face. "You\'re a good fuck. You ever considered a career in porn?"');
    scene.text('You\'re not sure what to make of his comment and just wipe the cum off your face before you start getting dressed. "Can I get my money now?"');
    scene.text('"Of course," he smiles as he hands you a wad of cash.');
    scene.text('You quickly stuff it in your purse and hurry out of the apartment as the realization of what you\'ve just done suddenly hits you.');
    scene.actions([
      { label: 'Leave his apartment', goto: ['city_island', ''] },
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

function enterEnthusiasticStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/foreplay/spread_legs.jpg');
  scene.text('You start undressing as he smiles and grabs his camera. Once you\'re finished undressing, you lie back on the bed and spread your legs as he starts filming.');
  scene.text('You smile at the camera and tell him your name as he moves in for a few closeups.');
  if (((s as any).tits ?? 0) >= 4) {
    scene.text('"Damn girl, you\'ve got one amazing rack! What size are you?" he asks as he cups your breast in his hand.');
    scene.text('"Big enough for guys to play with," you giggle.');
  } else {
    if (((s as any).tits ?? 0) >= 2) {
      scene.text('"I like a pair of tits that just fit right in your hand," he laughs and you giggle as his hand cups your breast and his thumb teases your nipple.');
    } else {
      scene.text('He\'s clearly unimpressed with your lack of sizeable breasts, but continues filming you anyway.');
    }
  }
  // TODO-QSP: dynamic text: After getting a few more shots of you and asking a few more questions, he stands...
  scene.text(`After getting a few more shots of you and asking a few more questions, he stands and pulls his pants down to let his fully erect ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock spring free while motioning for you get in position.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.img('image=shared/sex/blowjob/kotovbj114.mp4');
    scene.text('You smile and get on your knees. You then grab his cock and jerk it before taking it into your mouth.');
    scene.text('He moans lightly before looking down at you. "Let me see those pretty eyes as you suck my dick, baby."');
    scene.text('You do as you\'re told and maintain eye contact with the camera above you for the duration of the blowjob, his reactions telling you that he likes what he\'s seeing.');
    scene.actions([
      { label: 'Penetration', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/miss/enter1.mp4');
    scene.text('After a few minutes, he has you pop his dick of your mouth and lie back on the bed with your legs spread wide.');
    scene.text('He gets another close up of your pussy before stepping in between your legs and rubbing his dick against your lips before pushing it into your awaiting hole, causing you both to moan as he slides inside you.');
    scene.text('"Oh shit, you\'re so fucking tight! I can feel you squeezing around me!"');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/miss/hard1.mp4');
    scene.text('He doesn\'t hold back and immediately starts pounding your pussy, causing you to moan loudly in pleasure.');
    scene.text('You\'re enjoying yourself too much to care about the camera getting shots of your face.');
    scene.actions([
      { label: 'Get fucked some more', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/doggy/kotovsex11.mp4');
    scene.text('He pulls out and flips you up onto your knees before inserting himself back into your pussy. He resumes fucking you just as hard, if not harder than before, causing you to shriek loudly in pleasure.');
    scene.text('"Look into the camera there. I want to see the pleasure on your face."');
    scene.text('You gaze into the camera in front of you in between moans of pleasure as he keeps pounding you.');
    scene.actions([
      { label: 'Get fucked even more', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('shared/sex/vag/cowgirl/med1.mp4');
    scene.text('He then pulls out and lies flat on the bed before grabbing his camera. He holds it up close as you mount him and slide down onto his dick.');
    scene.text('You lean back on your hands and start riding him, moaning as his shaft slides in and out of you. He moves his camera around, getting as many shots of you as he can.');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'face', 'A193');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('shared/sex/cum/facial/cumface3.mp4');
    scene.text('He says he\'s about to cum and you quickly pull yourself off of his cock before he stands up on the bed next to you and jerks his cock.');
    scene.text('A few seconds later, you\'re hit in the face by a blast of cum that\'s followed by several more as he groans loudly.');
    scene.text('Once he\'s finished, you sit on the bed as he films a shot of your cum covered face. You give the camera a flirty smile and wave before he stops filming.');
    scene.actions([
      { label: 'Finished', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'money', 'earn', 3000);
    (st as any).cumspclnt = 1;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('He nods, seemingly satisfied with his footage before he passes you a rag to clean your face. "You\'re a good fuck. You ever considered a career in porn?"');
    scene.text('You giggle and blush at his comment and wipe the cum off your face before you start getting dressed. "That was fun."');
    scene.text('"I think you\'re one of the best girls I\'ve ever fucked. Here, you\'ve earned this," he smiles as he hands you a wad of cash.');
    scene.text('You quickly stuff it in your purse before leaving the apartment.');
    scene.actions([
      { label: 'Leave his apartment', goto: ['city_island', ''] },
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

function enterTalentScoutMeet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/porn_bed.jpg');
  scene.text('You quietly walk through the lobby and head up to the room where the talent scout is waiting for you.');
  scene.text('You knock on the door and he quickly answers it, ushering you inside before closing the door.');
  scene.text('"This way," he says and you follow him into the lavish bedroom, where you find cameras and lights set up around the bed. "I need to finish setting a few things up, but go ahead and strip down. We\'ll start soon."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Reluctantly undress', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('Last minute doubt starts creeping into your mind as you strip down, the talent scout watching from the corner of his eye as he adjusts a camera set up to face the bed.');
    scene.text('"I know you might be a little hesitant right now, but let\'s start with some pictures and let you get used to the camera. Sit up on the bed for me."');
    scene.actions([
      { label: 'Sit on the bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting1.jpg');
    scene.text('Your heart races as you climb onto the bed and watch as he grabs a camera and points it at you.');
    scene.text('"Nerves are normal," he says. "Just relax and try not to focus too much on the camera. It will come to you eventually and all that hesitation will melt away."');
    scene.text('You do as he says and start posing while trying to ignore the camera. Your confidence slowly grows and you find yourself starting to enjoy it as you spend the next 5 minutes posing for him.');
    scene.text('"Okay, that should be enough pictures," he says as he places the camera down and sets one of the video cameras facing the bed to start recording. "Time to start filming."');
    scene.actions([
      { label: 'Continue', goto: ['pickup_porn', 'talent_scout_sex'] },
    ]);
  } },
    ]);
  } },
    { label: 'Quickly strip down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('You\'re eager to get started and quickly strip out of your clothes, surprsing the talent scout as he adjusts a camera set up to face the bed.');
    scene.text('"I would ask if you\'re ready to get started, but I see you\'re more than eager, so let\'s get started. Sit up on the bed for me and we\'ll start with a few pictures."');
    scene.actions([
      { label: 'Sit on the bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting1.jpg');
    scene.text('You feel a rush of excitment as you climb onto the bed and watch as he grabs a camera and points it at you.');
    scene.text('"You\'re just <i>oozing</i> confidence right now, girl! Love that smile!"');
    scene.text('You smile, greatly enjoying yourself as you spend the next 5 minutes posing for him.');
    scene.text('"Okay, that should be enough pictures," he says as he places the camera down and sets one of the video cameras facing the bed to start recording. "Time to start filming."');
    scene.actions([
      { label: 'Continue', goto: ['pickup_porn', 'talent_scout_sex'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTalentScoutSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'the porn talent scout', (Math.floor(Math.random() * 11) + 35));
  qspCall(s, 'npcStat', '$npclastgenerated');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/sex/club_casting2.jpg');
  scene.text('"Get on all fours for me," he says as he undresses.');
  scene.text('You do as he says and position yourself so your pussy and asshole can be seen by the camera as he finishes undressing.');
  scene.text('You spend the next few minutes letting him and the camera take in the sight of your naked body as he makes a few compliments about your attractiveness.');
  scene.text('He then takes the camera off its tripod and joins you on the bed, his hand running over your ass and pussy as he makes more comments about your body.');
  if (((s as any).tits ?? 0) >= 4) {
    scene.text('He pays special attention to your breasts, complimenting not only their size, but their shape.');
  }
  if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
    scene.text('He can\'t keep his eyes or his hands off your ass, complimenting not only its size, but its firmness as well.');
  }
  scene.text('He then moves the scene on, motioning for you to suck his dick as he climbs off the bed.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting3.jpg');
    scene.text('You smile and crawl over to the edge of the bed before you slide off and get on your knees, his already rock hard cock awaiting you. You jerk it in your hand a few times before taking it into your mouth.');
    scene.text('He moans before looking down at you. "Let me see those pretty eyes as you suck my dick, girl."');
    scene.text('You do as you\'re told and maintain eye contact with the camera above you for the duration of the blowjob, his reactions telling you that he likes what he\'s seeing.');
    scene.text('Once he\'s happy, he moves the scene on.');
    scene.actions([
      { label: 'Get on your back', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting4.jpg');
    scene.text('You pop his dick of your mouth and lie back on the bed with your legs spread wide.');
    scene.text('He gets a close up of your pussy before stepping in between your legs and rubbing his dick against your lips before pushing it into your awaiting hole, causing you both to moan as he slides inside you.');
    scene.text('You moan loudly in pleasure as he starts fucking you, alternating between filming his dick thrusting into your pussy and capturing your reaction.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'arousal', 'vaginal_finger', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting5.jpg');
    scene.text('He suddenly pulls out and grins at you before having you flip over and get onto your hands and knees, spreading your legs slightly before you feel his finger thrusting into your pussy, causing you to moan softly before he pulls it out and his cock stretches your pussy once more.');
    scene.text('He resumes fucking you a little harder than before, causing you to moan loudly in pleasure as you try your best to look as sexy as you can, knowing he\'s filming you from his point of view.');
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He can\'t seem to resist your ass, his hand constantly running over your jiggling cheeks as he thrusts into you.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', (-3));
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting6.jpg');
    scene.text('You feel him tense up a little before he suddenly pulls out of you, panting as you gaze back and see his cock glistening with your pussy juices.');
    scene.text('"Damn, does your pussy feel good!" he quips as he joins you on the bed, laying on his back as crawl over to him.');
    scene.text('You take his cock into your mouth and give him a quick blowjob, getting a taste of your juices as you gaze into the camera before he motions for you to get into the reverse cowgirl position.');
    scene.text('You grin before you swing your leg over him and take hold of his cock, guiding it to your wet slit before you slide down onto it.');
    scene.text('You start riding while gazing back, looking more at him than the camera, which he\'s holding steady to get a good POV shot of your ass. You grin before reaching back and spreading your ass, giving the camera a good view of his cock sliding in and out of your pussy.');
    scene.text('He nods in appreciation and motions for you to ride him faster. You do as he asks and the room is soon filled with the sound of your ass slapping against his thighs as you moan loudly. His reaction tells you that he\'s close to blowing his load, but is holding out to get as much footage as he can.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 2);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting7.jpg');
    scene.text('His grunts grow louder and you gaze back to see what he wants you to do. He signals that he wants to cum in your mouth, so you quickly pull yourself off of his dick and kneel between his legs before taking it into your mouth and sucking.');
    scene.text('A few seconds later, he tenses up and you feel spurts of warm, sticky cum shooting into your throat. You keep your lips wrapped firmly around his shaft until he stops.');
    scene.text('He sighs in satisfaction as you pop his cock out of your mouth, his cum mixing in with your saliva as it runs down his shaft.');
    scene.text('"You\'re a really good cocksucker, you know that?" he quips and you respond by licking up the cum from his shaft and making a show of swallowing it.');
    scene.text('After showing him your clean tongue, you give the camera a flirty smile and a wave before he stops filming and places the camera down.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('He flops back on the bed. "Fuck, that was amazing! There\'s just one more thing we need to do before we finish up."');
    scene.text('"Oh?" you reply. "And what\'s that?"');
    scene.text('"We like to do post sex interviews with the girls, preferably in the shower for that extra erotic factor. We can start as soon as you wish."');
    scene.actions([
      { label: 'Ask for some water first', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water_stats');
    qspCall(st, 'din_van', 'showerdin');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting8.jpg');
    scene.text('"Do you have any water I could drink first?" you ask. "I worked up quite the thrist there."');
    scene.text('"Oh sure," he says and quickly hands you a bottle of water.');
    scene.text('After rehydrating yourself, you tell him you\'re ready to continue and he grabs his camera and starts filming you again as you walk into the ensuite bathroom and turn the shower on.');
    scene.text('You flirt with him and let him record your naked body some more before you step into the shower and start cleaning yourself.');
    scene.text('He continues to record you as you rinse your hair and lather up your body, all while listening to him compliment your body and answering his questions about yourself, the sex you just had, and whether or not you\'ll join the industry.');
    if (((st as any).tits ?? 0) >= 4  &&  qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He makes sure to capture you from every angle, paying special attention to both your breasts and ass. At one point, he even has you press them up against the glass door of the shower.');
    } else {
      if (((st as any).tits ?? 0) >= 4) {
        scene.text('He makes sure to capture you from every angle, paying special attention to your breasts. At one point, he even has you lather them up before pressing them up against the glass door of the shower.');
      } else {
        if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
          scene.text('He makes sure to capture you from every angle, paying special attention to your ass. At one point, he even has you lather it up before pressing it up against the glass door of the shower.');
        } else {
          scene.text('He makes sure to capture you from every angle.');
        }
      }
    }
    scene.text('You finish your shower by answering a few more questions and showing off your naked body one more time before you step out of the shower and wrap yourself in a towel.');
    scene.text('You smile and strike a final teasing pose for the camera before he stops recording, looking very happy.');
    scene.text('"Amazing work," he says. "Get yourself dressed and we can talk about your payment."');
    scene.actions([
      { label: 'Finished', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'money', 'earn', 6000);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('You nod and walk back into the bedroom, where you drop your towel and start pulling your clothes back on.');
    scene.text('"You\'re a pretty good fuck," he says as he starts getting dressed himself. "I seriously think you have what it takes to work in porn."');
    scene.text('You blush at his comment as you finish getting dressed.');
    scene.text('"In any case, you\'re one of the best girls I\'ve ever fucked. Here, you\'ve earned this," he smiles as he hands you a wad of cash.');
    scene.text('You quickly stuff it in your purse before bidding him farewell and leaving the room.');
    scene.actions([
      { label: 'Leave the room', goto: ['pickup_porn', 'casting_aftermath'] },
    ]);
  } },
    ]);
  } },
      { label: 'Go for a shower', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/locations/city/redlight/stripclub/sex/club_casting8.jpg');
    scene.text('You tell him you\'re ready to continue and he grabs his camera and starts filming you again as you walk into the ensuite bathroom and turn the shower on.');
    scene.text('You flirt with him and let him record your naked body some more before you step into the shower and start cleaning yourself.');
    scene.text('He continues to record you as you rinse your hair and lather up your body, all while listening to him compliment your body and answering his questions about yourself, the sex you just had, and whether or not you\'ll join the industry.');
    if (((st as any).tits ?? 0) >= 4  &&  qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He makes sure to capture you from every angle, paying special attention to both your breasts and ass. At one point, he even has you press them up against the glass door of the shower.');
    } else {
      if (((st as any).tits ?? 0) >= 4) {
        scene.text('He makes sure to capture you from every angle, paying special attention to your breasts. At one point, he even has you lather them up before pressing them up against the glass door of the shower.');
      } else {
        if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
          scene.text('He makes sure to capture you from every angle, paying special attention to your ass. At one point, he even has you lather it up before pressing it up against the glass door of the shower.');
        } else {
          scene.text('He makes sure to capture you from every angle.');
        }
      }
    }
    scene.text('You finish your shower by answering a few more questions and showing off your naked body one more time before you step out of the shower and wrap yourself in a towel.');
    scene.text('You smile and strike a final teasing pose for the camera before he stops recording, looking very happy.');
    scene.text('"Amazing work," he says. "Get yourself dressed and we can talk about your payment."');
    scene.actions([
      { label: 'Finished', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'money', 'earn', 6000);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/university/porn_bed.jpg');
    scene.text('You nod and walk back into the bedroom, where you drop your towel and start pulling your clothes back on.');
    scene.text('"You\'re a pretty good fuck," he says as he starts getting dressed himself. "I seriously think you have what it takes to work in porn."');
    scene.text('You blush at his comment as you finish getting dressed.');
    scene.text('"In any case, you\'re one of the best girls I\'ve ever fucked. Here, you\'ve earned this," he smiles as he hands you a wad of cash.');
    scene.text('You quickly stuff it in your purse before bidding him farewell and leaving the room.');
    scene.actions([
      { label: 'Leave the room', goto: ['pickup_porn', 'casting_aftermath'] },
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

function enterCastingAftermath(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/hotel.corr.jpg');
  scene.text('Once out in the corrider, you let out a deep breath, your emotions about what just happened flooding your mind.');
  // TODO-QSP: end
  scene.actions([
    { label: 'It was fun', handler: (st: GameState) => {
    scene.text('You smile. That was pretty fun! Not only was the sex good, but you got paid for it!');
    scene.text('You count the money again before heading on your way to the lobby.');
    scene.actions([
      { label: 'Leave', goto: ['city_hotel', ''] },
    ]);
  } },
    { label: 'Regret it', handler: (st: GameState) => {
    scene.text('As the adrenaline wears off, you suddenly feel shame and regret at your actions.');
    scene.text('You were paid to have sex with a complete stranger, and it\'s about to appear on the internet! Was the money really worth it?');
    scene.text('You can\'t help but think of yourself as a whore as you rush to the lobby. What will people think of you if they find out what happened here?');
    scene.actions([
      { label: 'Leave', goto: ['city_hotel', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDiscoverVideo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/items/accesories/computer/porno.jpg');
  // TODO-QSP: dynamic text: As you browse through the selection of videos, your attention is suddenly drawn ...
  scene.text(`As you browse through the selection of videos, your attention is suddenly drawn to one titled "College Exploits #78 - ${((s as any).pcs_firstname ?? '')}".`);
  scene.text('Curious, you click on it and discover that it\'s a video of you and that guy who paid you for that "erotic shoot."');
  scene.text('After watching yourself get fucked from both his point of view and the camera on the bed, you scroll down and read some of the comments.');
  scene.text('"Such a hot bitch! Ignat the chad scores again!"');
  scene.text('"That tight little pussy milked the cum right out of him!"');
  scene.text('"Where on earth does he find all these gorgeous girls to fuck? I want some of that pussy too!"');
  scene.text('"I wish it was my cock that slut was sucking…"');
  scene.text('"That whore loved having her pretty face plastered with cum!"');
  if (((s as any).tits ?? 0) >= 4) {
    scene.text('"Damn, look at the tits on her! Watching those bad boys bounce was the best part of the video!"');
  }
  if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')  ||  qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
    scene.text('"Absolute PAWG! The things I would do to an ass like that!"');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Cry', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'fame', 'city', 'sex', 2);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('Suddenly feeling dirty and ashamed, you bury your head in your hands and start crying as questions start flooding your mind:');
    scene.text('Why did you agree to do that?');
    scene.text('How many people have already seen it?');
    scene.text('How are you going to look your classmates in the eye now?');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'porno'] },
    ]);
  } },
    { label: 'Whatever', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 3) {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (30);
    } else {
      if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
      } else {
        if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
        } else {
          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
        }
      }
    }
    qspCall(st, 'fame', 'city', 'sex', 2);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You shrug off the comments. There\'s nothing you can do about it now and it\'s not like these guys will ever have a chance with you.');
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 0) {
      scene.text('You\'re not sure why, but you feel a little turned on at the idea of them jerking off to you getting fucked.');
    } else {
      if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
        scene.text('Even so, you still feel a little aroused at the idea of them watching you get fucked.');
      } else {
        if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
          scene.text('Even so, you still find yourself more than a little turned on at the idea of them watching you get fucked.');
        } else {
          scene.text('Even so, you feel yourself getting wet at the idea of countless people on the internet watching you get fucked and let out a little moan.');
        }
      }
    }
    scene.text('You\'re certain that dozens of girls here film actual porn all the time, so what harm can one crappy amateur video of you do?');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'porno'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWatchCastingCall(s: GameState, scene: SceneBuilder): void {
  ((s as any).strip_club = (s as any).strip_club ?? {})['porn_scout_pickup'] = 3;
  scene.img('images/pc/items/accesories/computer/porno.jpg');
  scene.text('As you browse through the selection of videos, your attention is suddenly drawn to one titled "Casting Corner #44", the thumbnail of which looks familiar...');
  scene.text('Curious, you click on it and discover that it\'s the video of you and the porn talent scout who wanted to "test run" you.');
  scene.text('After watching yourself get fucked from both his point of view and the cameras at the side of the bed, you scroll down and read the comments, almost all of them having been replied to by the talent scout.');
  if (((s as any).pcs_hotcat ?? 0) === 10) {
    scene.text('@BigWhiteDuke: "Damn! And I thought the slut with the big bubble butt was smoking hot! You lucky bastard!"');
    scene.text('@CastingCorner: "This girl was 100% the hottest one I\'ve had yet, that\'s for sure!"');
  } else {
    scene.text('@BigWhiteDuke: "Hot, but not as hot as that slut with the big bubble butt. You\'re still one lucky bastard, my friend."');
    scene.text('@CastingCorner: "This girl was definitely a cutie, that\'s for sure!"');
  }
  scene.text('@OneInThePink: "That looked like one tight little pussy you had there, bro!"');
  scene.text('@CastingCorner: "100%, but would you believe that I had the pleasure of fucking a girl who was even tighter? So tight that I almost came after only a few minutes inside her? Check her out here!"');
  scene.text('@Anon_69: "Where can I a gorgeous girl like her to suck my dick?"');
  scene.text('@CastingCorner: "You just have to look in the right places and say the right thing. You\'ll have their panties dropped in no time!"');
  scene.text('@SpitOrSwallow: "How do you convince these girls to swallow your cum?"');
  scene.text('@CastingCorner: "I don\'t. They\'re so eager to please you all that they just gulp it right down!"');
  scene.text('"@Harder_Than_A_Rock: Damn do these girls really know how to tease a guy when they\'re showering at the end!"');
  scene.text('@CastingCorner: "Watching them in the shower is almost as good as the sex. Almost."');
  if (((s as any).tits ?? 0) >= 4) {
    scene.text('@PuffyNipsSociety: "Look at the tits on her! Watching those bad boys bounce was the best part of the video!"');
    scene.text('@CastingCorner: "100% some of the best tits I\'ve ever had!"');
  }
  if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')  ||  qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
    scene.text('@PAWG_Worshipper: "WHAT AN ASS! Think you could get her and that other PAWG babe you fucked back for a threesome?"');
    scene.text('@CastingCorner: "I don\'t think I\'d survive that threesome, but fucking them at the same time would be a dream come true!"');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Cry', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'fame', 'city', 'sex', 2);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('Suddenly feeling dirty and ashamed, you bury your head in your hands and start crying.');
    scene.text('Why did you agree to do that? How many people have already seen it?!');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'porno'] },
    ]);
  } },
    { label: 'Whatever', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 3) {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (30);
    } else {
      if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
      } else {
        if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
        } else {
          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
        }
      }
    }
    qspCall(st, 'fame', 'city', 'sex', 2);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You shrug off the comments. There\'s nothing you can do about it now and it\'s not like these guys will ever have a chance with you.');
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 0) {
      scene.text('You\'re not sure why, but you feel a little turned on at the idea of them jerking off to you getting fucked.');
    } else {
      if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
        scene.text('Even so, you still feel a little aroused at the idea of them watching you get fucked.');
      } else {
        if (((st as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
          scene.text('Even so, you still find yourself more than a little turned on at the idea of them watching you get fucked.');
        } else {
          scene.text('Even so, you feel yourself getting wet at the idea of countless people on the internet watching you get fucked and let out a little moan.');
        }
      }
    }
    scene.text('Dozens of girls film <i>actual</i> porn all the time, so what harm can one crappy video of you do?');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'porno'] },
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
    case 'reluctant_start':
      enterReluctantStart(s, scene);
      break;
    case 'hesitant_start':
      enterHesitantStart(s, scene);
      break;
    case 'enthusiastic_start':
      enterEnthusiasticStart(s, scene);
      break;
    case 'talent_scout_meet':
      enterTalentScoutMeet(s, scene);
      break;
    case 'talent_scout_sex':
      enterTalentScoutSex(s, scene);
      break;
    case 'casting_aftermath':
      enterCastingAftermath(s, scene);
      break;
    case 'discover_video':
      enterDiscoverVideo(s, scene);
      break;
    case 'watch_casting_call':
      enterWatchCastingCall(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pickup_porn: LocationDef = {
  name: 'pickup_porn',
  title: 'You\'re walking through campus when you\'re approached by a gu',
  region: 'other',
  enter: enter,
};
