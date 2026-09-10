import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEventKendra(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_stay.jpg');
  scene.text('The class is pretty uneventful for the most part, but you notice Kendra sitting next to a black guy and occasionally looking over at you, usually followed by him looking at you. As the class goes on, his looks get more lustful. You don\'t know what she\'s telling him, but you\'re sure it\'s about you.');
  scene.text('As Professor Bryant finishes his lecture, he informs the class that he won\'t be able to stay to help anyone and if they need to ask him something, then they should come and see him in his office later or wait for the next class.');
  scene.text('With class finished, everyone gets up and heads for the exit. You glance over once more at Kendra, who motions for you to follow. Once the class clears out, she sits on the professor\'s desk while the boy leans against the desk.');
  scene.text('"What did you want, mistress?" you obediently ask.');
  scene.text('Kendra glances at the boy, then you. "I told my friend here what a good little white slave slut you are, so you\'re going to show him just how well you obey me."');
  scene.actions([
    { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    { label: 'Wait for her to answer', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_explain.jpg');
    scene.text('Kendra glances at the boy, then you. "I told my friend here what a good little white slave slut you are, so you\'re going to show him just how well you obey me."');
    scene.text('You glance at him and notice that he\'s looking at you with lust in his eyes, so you have no doubt of what she promised him you would do. "I want you to get on your knees in front of him," she orders.');
    qspCall(s, 'willpower', 'humiliation', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'loathe');
    (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) - (1);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_resist.jpg');
    scene.text('You shake your head. "Sorry mistress, I can\'t… I\'m not a whore that you can just pimp out."');
    scene.text('An angry scowl appears on her face. "Listen you little fucking cunt, either get down on your knees or we\'re done!"');
    qspCall(s, 'willpower', 'humiliation', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse again [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'loathe');
    (s as any).kendraQW['sub'] = (-1);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_resist.jpg');
    scene.text('You shake your head. "No! I\'m not going to let you pimp me out!"');
    scene.text('She looks even angrier before she takes a deep breath. "Fine! Get the fuck out of here, you useless cunt! Don\'t come crawling back to me, we\'re done!"');
    scene.text('She gets up and walks out with the young man following her. You have a feeling you just closed a door with her that will never be reopened.');
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
      { label: 'Wait for Anushka', goto: ['uni_lessons_electives_african_studies1', 'africa_nush'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Obey', goto: ['uni_lessons_electives_shared1', 'obey_kendra'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Obey', goto: ['uni_lessons_electives_shared1', 'obey_kendra'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfricanStudiesDjibrilNush(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff1.jpg');
  if (((s as any).djibrilQW ?? 0)?.['nush_sveta_af101'] === 0) {
    scene.text('Once class ends, you grab Anushka\'s hand before she moves. She stays seated and looks at you with a questioning look. "Lets wait and see what Djibril is going to do."');
    scene.text('She giggles a bit and glances in his direction. "Ok sure, but likely he is going to come over to try and get us to pay some reparations with our pussies." You can\'t disagree with what she just said and maybe that\'s what you are hoping is about to happen. The two of you wait for everyone to leave class.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff2.jpg');
    scene.text('Once everyone else leaves, Djibril stops at the door and then comes back over to where you and Anushka are sitting. "What did you girls think of class today? I personally found it very interesting." You can tell by his look exactly what he found it interesting and what part of class he liked the most by the way he is looking at the two of you. You know boys love it when girls show off for them and you know Anushka loves showing off her body. But you know if you suggest it this will lead to sex, is that what you really want?');
    scene.text('Once class ends, you grab Anushka\'s hand before she moves. She stays seated, but glances in Djibril\'s direction. "You wanting to offer up your little white pussy, to some big black cock, to pay some more of those reparations?" You can hear the quotes around reparations as she says it.');
    scene.text('You giggle a bit and glances in his direction. "Something like that, don\'t you think we owe him our pussies."');
    scene.text('She shakes her head a bit as she scoffs. "No, I don\'t owe anyone, but I could use a good fucking, so I\'m down for some BBC." The two of you wait for everyone to leave class.');
    scene.actions([
      { label: 'No sex', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff1.jpg');
    scene.text('You bite your lower lip looking at him and then to Anushka, you can tell she is all ready to get her little pussy plowed by his big black dick. Yet you are not, you thought maybe but no. You stand up and grab Anushka by her hand pulling her up with you as you say to Djibril. "It was ok, but we need to get going… bye."');
    scene.text('His grin fades, you can tell he was really expecting to have sex with the two of you. "Oh… ok… maybe next time?"');
    scene.text('Anushka gives you a questioning look but doesn\'t say anything, you can tell she is surprised by your choice. You turn your head to Djibril as you lead Anushka out of the room by her hand. "Sure… maybe next time."');
    scene.text('Once you are out of the room she finally speak. "What was that about?"');
    scene.text('You shrug a bit. "I don\'t know, at first I did but then I changed my mind. So where are you off to?" you ask as you start walking together.');
    scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile and slowing down a little.');
    scene.actions([
      { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later." She puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    } else {
      (s as any).anushkaCityQW['first_visit'] = 1;
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later, but you should stop by my place sometime."');
      scene.text('She tells you where the apartment she shares with the boys from the band is located and puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Ask if you can come along', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(s, 'uni_lessons_electives', 'study_with_friends');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile. "Yeah, that sounds like a good idea. Mind if I come?"');
    scene.text('She shrugs. "Sure, if you want, but I really do have to study." Her tone makes it clear she doesn\'t have time to mess around like she did back in Pavlovsk.');
    scene.text('"Yeah, I understand," you reply.');
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
      scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later."');
      scene.text('With that, she gathers her stuff and leaves.');
    } else {
      (s as any).anushkaCityQW['first_visit'] = 1;
      scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
      scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later, but you should stop by my place sometime."');
      scene.text('She tells you where the apartment she shares with the boys from the band is located before she gathers her stuff and leaves.');
    }
    scene.actions([
      { label: 'Get up', goto: ['uni_library', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Whisper a suggestion to Anushka', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff3.jpg');
    scene.text('You lean over to Anushka and whisper in her ear. "Why don\'t you show him your titties, bet he would like that."');
    scene.text('She giggles slightly, while he tries to lean in to hear what you are saying. "What are you girls talking about?" He asks.');
    scene.text('Once you stop whispering you both lean back in place while Anushka looks at him. "Do you like white girls?" She asks him.');
    scene.text('He nods. "I love all kinds but I love you white Russian girls the most." She reaches up to her top, you know she is about to expose her breasts to him.');
    scene.actions([
      { label: 'See his reaction', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A82');
    qspCall(s, 'npcStat', 'A144', 'a');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff4.jpg');
    scene.text('She pulls down her top enough to show off one bare breasts. "Do you like what you see?" She asks him him.');
    scene.text('He walks over very close to the two of you, as he watches her bare breasts. "Yeah I love it, why don\'t you show me some more." Now that he is standing right next to you, with his crotch at about your face height, you can\'t help but notice the bulge in his pants, as his dick starts getting hard. You really want to feel his dick through his pants, as it gets hard.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Feel his crotch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff5.jpg');
    scene.text('You reach over and place your hand on his crotch, you can feel his big black dick begin to stir even more under your touch. He glances down at you as he says. "What don\'t you show my your titties as well?" Anushka is already starting to take off her top completely at his words.');
    qspCall(s, 'arousal', 'voyeur', (-1));
    qspCall(s, 'arousal', 'foreplay', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take off your top', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff6.jpg');
    scene.text('Both Anushka and you take off your tops, as you do he sits down on a chair to watch, losing his shirt as well. Once you are all three topless he pats his thighs, to get the two of you to sit on his legs. Anushka doesn\'t hesitate and sits down at once, you do a moment later. "Fuck you both have such nice titties."');
    if (((s as any).tits ?? 0) < 2) {
      scene.text('You glance over at Anushka\'s tits, you notice her breasts are a little small, but have a nice firm shape to them. Her bust is bigger than yours, but then again pretty much every girls tits are bigger than yours. You know she is on the smaller side herself.');
    } else {
      scene.text('You glance over at Anushka\'s tits, you notice her breasts are the same size as your own, but have a nice firm shape to them. You know that you both have smaller than average tits, most girls are at least a little bigger than either of you.');
      if (((s as any).tits ?? 0) < 5) {
        scene.text('You glance over at Anushka\'s tits, you notice her breasts have a nice firm shape to them. But you can\'t help but smile a bit as you know your breasts are a bit bigger than her\'s. You know she is a bit on the small side, while you are a bit on the large size.');
      } else {
        scene.text('You glance over at Anushka\'s tits, you notice her breasts have a nice firm shape to them. But you can\'t help but smile a bit as you know your breasts are way bigger than her\'s. You know she is a bit on the small side, but she shouldn\'t feel bad as your tits are bigger than almost every girl you have ever meet.');
      }
      scene.text('"Now how about the two of you loose some more of those clothes." He tells you as he lifts you both off his legs, so you are once more standing and in a better position to keep stripping for him.');
      qspCall(s, 'arousal', 'voyeur', (-1));
      qspCall(s, 'arousal', 'flash', 1);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'strip some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff7.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Anushka strips down to just her panties and takes a seat on his leg again. While you strip down to just your panties as well. "Damn you guys are so fucking hot." Djibril says, while he reaches over and start to rub your clit through your panties, while he rubs Anushka\'s clit through her panties with his other hand. "Got to get these pussies nice and wet, for my big black dick." He says with a cheeky grin after a moment he adds. "Loose the panties now."');
    } else {
      // TODO-QSP: dynamic text: Anushka strips down to just her panties and takes a seat on his leg again. While...
      scene.text(`Anushka strips down to just her panties and takes a seat on his leg again. While you strip down until you are naked, as you wasn't wearing any panties. "Damn what a dirty little slut you are." Djibril says when he notices you are not wearing panties, while he reaches over and start to rub your bare clit, while he rubs Anushka's clit through her panties. "Got to get these pussies nice and wet, for my big black dick." He says with a cheeky grin after a moment he adds. "Loose the panties like ${((s as any).pcs_nickname ?? 0)}." He tells Anushka.`);
    }
    qspCall(s, 'arousal', 'voyeur_sex', (-1));
    qspCall(s, 'arousal', 'clit_finger', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Do what he wants', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff8.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Anushka starts pulling her panties down, you follow suit and pull your panties down as well. Soon the two of you are completely naked, standing exposed in front of Djibril who admires your bodies for a couple of minutes before he starts unbutton his pants. Once he has the unbuttoned he pulls them down, causing his big black dick to spring free. "Why don\'t you get down on your knees and suck my big black cock with those pretty white mouths of yours."');
    } else {
      scene.text('Anushka starts pulling her panties down, you watch as she pulls her panties past her little shaved pussy, exposing it for both Djibril and you to admire. Soon the two of you are completely naked, standing exposed in front of Djibril who admires your bodies for a couple of minutes before he starts unbutton his pants. Once he has the unbuttoned he pulls them down, causing his big black dick to spring free. "Why don\'t you get down on your knees and suck my big black cock with those pretty white mouths of yours."');
    }
    qspCall(s, 'arousal', 'voyeur', (-1));
    qspCall(s, 'arousal', 'flash', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down on your knees', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush_bj'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff2.jpg');
    scene.text('Once everyone else leaves, Djibril stops at the door and then comes back over to where you and Anushka are sitting. "What did you girls think of class today? I personally found what he said even more interesting than last time." You can tell by the way he is looking at the two of you, the he is hoping to fuck both of you again.');
    scene.text('You bite your lower lip looking at him and then to Anushka, you can tell she is all ready to get her little pussy plowed by his big black dick. Yet you are not, you thought maybe but no. You stand up and grab Anushka by her hand pulling her up with you as you say to Djibril. "It was ok, but we need to get going… bye."');
    scene.text('His grin fades, you can tell he was really expecting to have sex with the two of you. "Oh… ok… maybe next time?"');
    scene.text('Anushka gives you a questioning look but doesn\'t say anything, you can tell she is surprised by your choice. You turn your head to Djibril as you lead Anushka out of the room by her hand. "Sure… maybe next time."');
    scene.text('Once you are out of the room she finally speak. "What was that about?"');
    scene.text('You shrug a bit. "I don\'t know, at first I did but then I changed my mind. So where are you off to?" you ask as you start walking together.');
    scene.text('"Going to the library to study some before work. You want to come?" she asks while giving you a friendly smile and slowing down a little.');
    scene.actions([
      { label: 'Let\'s have fun instead', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later." She puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    } else {
      (s as any).anushkaCityQW['first_visit'] = 1;
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later, but you should stop by my place sometime."');
      scene.text('She tells you where the apartment she shares with the boys from the band is located and puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Ask if you can come along', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(s, 'uni_lessons_electives', 'study_with_friends');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile. "Yeah, that sounds like a good idea. Mind if I come?"');
    scene.text('She shrugs. "Sure, if you want, but I really do have to study." Her tone makes it clear she doesn\'t have time to mess around like she did back in Pavlovsk.');
    scene.text('"Yeah, I understand," you reply.');
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
      scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later."');
      scene.text('With that, she gathers her stuff and leaves.');
    } else {
      (s as any).anushkaCityQW['first_visit'] = 1;
      scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
      scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later, but you should stop by my place sometime."');
      scene.text('She tells you where the apartment she shares with the boys from the band is located before she gathers her stuff and leaves.');
    }
    scene.actions([
      { label: 'Get up', goto: ['uni_library', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff2.jpg');
    scene.text('Once everyone else leaves, Djibril stops at the door and then comes back over to where you and Anushka are sitting. "What did you girls think of class today? I personally found what he said even more interesting than last time." You can tell by the way he is looking at the two of you, the he is hoping to fuck both of you again.');
    scene.actions([
      { label: 'Respond to him', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A82');
    qspCall(s, 'npcStat', 'A144', 'a');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff4.jpg');
    scene.text('Before can say something, Anushka pulls down her top enough to show off one of her tits. "So you going to fuck our little white pussies with your big black cock… or did you really just want to talk about class?"');
    scene.text('He seems a bit surprised for just a moment, then he grins really big. "Get naked for me and I will show you what I want to do."');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Strip down for him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff8.jpg');
    scene.text('He sits down, pulling off his shirt as he watches the two of you slowly strip down naked. Anushka makes a bit of a show of it, turning it into a little bit of a strip tease for him, you can see the bulge in his pants growing by the time the two of you are completely naked. He quickly pulls his pants down, where his large black cock springs free. "Come over here girls and suck my dick." He tells the two of you.');
    qspCall(s, 'arousal', 'voyeur', (-2));
    qspCall(s, 'arousal', 'flash', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down on your knees', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush_bj'] },
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'event_kendra':
      enterEventKendra(s, scene);
      break;
    case 'african_studies_djibril_nush':
      enterAfricanStudiesDjibrilNush(s, scene);
      break;
    default:
      enterEventKendra(s, scene);
      break;
  }
}

export const uni_lessons_electives_african_studies2: LocationDef = {
  name: 'uni_lessons_electives_african_studies2',
  title: 'The class is pretty uneventful for the most part, but you no',
  region: 'other',
  description: ['The class is pretty uneventful for the most part, but you notice Kendra sitting next to a black guy and occasionally looking over at you, usually followed by him looking at you. As the class goes on, his looks get more lustful. You don\'t know what she\'s telling him, but you\'re sure it\'s about you.'],
  enter: enter,
};
