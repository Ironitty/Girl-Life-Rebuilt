import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEventKendra(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_stay.jpg');
  scene.text('The class is pretty uneventful for the most part, but you notice Kendra sitting next to a black guy and occasionally looking over at you, usually followed by him looking at you. As the class goes on, his looks get more lustful. You don\'t know what she\'s telling him, but you\'re sure it\'s about you.');
  scene.text('As Professor Bryant finishes his lecture, he informs the class that he won\'t be able to stay to help anyone and if they need to ask him something, then they should come and see him in his office later or wait for the next class.');
  scene.text('With class finished, everyone gets up and heads for the exit. You glance over once more at Kendra, who motions for you to follow. Once the class clears out, she sits on the professor\'s desk while the boy leans against the desk.');
  scene.text('"What did you want, mistress?" you obediently ask.');
  scene.text('Kendra glances at the boy, then you. "I told my friend here what a good little white slave slut you are, so you\'re going to show him just how well you obey me."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    { label: 'Wait for her to answer', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_explain.jpg');
    scene.text('Kendra glances at the boy, then you. "I told my friend here what a good little white slave slut you are, so you\'re going to show him just how well you obey me."');
    scene.text('You glance at him and notice that he\'s looking at you with lust in his eyes, so you have no doubt of what she promised him you would do. "I want you to get on your knees in front of him," she orders.');
    qspCall(s, 'willpower', 'humiliation', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'loathe');
    ((s as any).kendraQW = (s as any).kendraQW ?? {})['sub'] = ((s as any).kendraQW['sub'] ?? 0) - (1);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/girl/kendra/sex/classroom/kendra_resist.jpg');
    scene.text('You shake your head. "Sorry mistress, I can\'t… I\'m not a whore that you can just pimp out."');
    scene.text('An angry scowl appears on her face. "Listen you little fucking cunt, either get down on your knees or we\'re done!"');
    qspCall(s, 'willpower', 'humiliation', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse again', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'loathe');
    ((s as any).kendraQW = (s as any).kendraQW ?? {})['sub'] = (-1);
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
      ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
      ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
      if (((s as any).tits ?? 0) === 2) {
        scene.text('You glance over at Anushka\'s tits, you notice her breasts are the same size as your own, but have a nice firm shape to them. You know that you both have smaller than average tits, most girls are at least a little bigger than either of you.');
      } else {
        if (((s as any).tits ?? 0) < 5) {
          scene.text('You glance over at Anushka\'s tits, you notice her breasts have a nice firm shape to them. But you can\'t help but smile a bit as you know your breasts are a bit bigger than her\'s. You know she is a bit on the small side, while you are a bit on the large size.');
        } else {
          scene.text('You glance over at Anushka\'s tits, you notice her breasts have a nice firm shape to them. But you can\'t help but smile a bit as you know your breasts are way bigger than her\'s. You know she is a bit on the small side, but she shouldn\'t feel bad as your tits are bigger than almost every girl you have ever meet.');
        }
      }
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
      scene.text(`Anushka strips down to just her panties and takes a seat on his leg again. While you strip down until you are naked, as you wasn't wearing any panties. "Damn what a dirty little slut you are." Djibril says when he notices you are not wearing panties, while he reaches over and start to rub your bare clit, while he rubs Anushka's clit through her panties. "Got to get these pussies nice and wet, for my big black dick." He says with a cheeky grin after a moment he adds. "Loose the panties like ${((s as any).pcs_nickname || '')}." He tells Anushka.`);
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
  } else {
    scene.text('Once class ends, you grab Anushka\'s hand before she moves. She stays seated, but glances in Djibril\'s direction. "You wanting to offer up your little white pussy, to some big black cock, to pay some more of those reparations?" You can hear the quotes around reparations as she says it.');
    scene.text('You giggle a bit and glances in his direction. "Something like that, don\'t you think we owe him our pussies."');
    scene.text('She shakes her head a bit as she scoffs. "No, I don\'t owe anyone, but I could use a good fucking, so I\'m down for some BBC." The two of you wait for everyone to leave class.');
    scene.actions([
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
      ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
      ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfricanStudiesDjibrilNushBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'npcStat', 'A144', 'a');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff9.jpg');
  // TODO-QSP: dynamic text: Anushka are you both get down on your knees, so Djibril long massive thick black...
  scene.text(`Anushka are you both get down on your knees, so Djibril long massive thick black cock is right in your faces. You open up your mouth and take the end of his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick in your mouth as you start to suck on it. Anushka for her part kneels next to you and watches you suck his black dick, she seems fairly eager for her turn to suck it. "Oh fuck yeah, that feels so good." Djibril says as he moans slightly.`);
  qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID ?? 0), 'exhibitionism');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Give his dick to her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff10.jpg');
    scene.text('You pop his dick out of your mouth, while using your hand to turn it towards Anushka\'s face. She understands what you want, as she leans forward and takes his black cock into her mouth and starts sucking it at once. You let go of his dick and lean back a little to give her room to work, as she sucks his dick. "Damn you look so pretty with a black dick in your mouth." He says. A few moments later he adds. "Ok enough of that, I want to fuck your tight little white pussy." He says to Anushka, who pulls her head back to stop sucking his dick.');
    qspCall(s, 'arousal', 'voyeur_sex', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch what happens next', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff11.jpg');
    // TODO-QSP: dynamic text: Djibril gets up and lays down on the floor, before grabbing Anushka and pulling ...
    scene.text(`Djibril gets up and lays down on the floor, before grabbing Anushka and pulling her suddenly over to him, she sequels a moment in surprise as he manhandles her until she is straddling him and then pushes her down. As she lowers herself down, she grabs his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock with one hand and lines it up with her pussy. She slowly impales herself, you watch as his black cock slowly disappears inside of her white pussy. She moans loudly as she takes more and more of his cock inside of her. "OH FUCK!… Your so big…" She looks at you, she looks so turned on, as she leans a bit towards you, while she rides Djibril.`);
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff12.jpg');
    // TODO-QSP: dynamic text: You lean over to meet her, as the two of you kiss. She moans into your mouth, as...
    scene.text(`You lean over to meet her, as the two of you kiss. She moans into your mouth, as the two of you make out, as she rides Djibrils cock. Amidst this you hear some smacks of flesh on flesh, you are sure he is smacking her ass while she rides him. "Ok hope off, it's ${((s as any).pcs_nickname || '')} turn to ride my dick." Anushka are you stop kissing as she climbs off him, you see his dick glistening and wet from her pussy juices. You could just mount him or you could taste her on him and suck his dick first.`);
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush_ridehim'] },
      { label: 'Suck his dick first', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff13.jpg');
    scene.text('Anushka gets off him and lays on her side on the floor next to him, he pulls her head over to his and they start to kiss. While you kneels next to him and lower your head to his wet dick, instead of mounting him. You take his wet dick into your mouth, you can taste Anushka\'s pussy juices on his dick as you start sucking his dick. You feel yourself getting wetter as you suck his dick and taste your friends pussy on it. Soon you want to ride him as well, you stop sucking his dick and start to straddle him.');
    qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Now mount him', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush_ridehim'] },
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

function enterAfricanStudiesDjibrilNushRidehim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'npcStat', 'A144', 'a');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff14.jpg');
  // TODO-QSP: dynamic text: You straddle him reverse cowgirl style and slowly lower yourself down, until the...
  scene.text(`You straddle him reverse cowgirl style and slowly lower yourself down, until the you feel the tip of his wet dick, press against your slit. You lower yourself a bit more and you feel his wet dick easily slide into your wet pussy. As you keep going you feel his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick stretch your pussy, as it slides in. Anushka places her hand on your back as she says to you. "That's it, take his massive black cock into your white pussy, let it stretch you out, that's it. Keep going." With her encouragement you slide down until his dick is balls deep in your pussy as you start to slowly ride him.`);
  qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride his dick some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff15.jpg');
    scene.text('You ride his dick, slowly picking up the pace as your body gets use to his massive cock stretching out your pussy. "Doesn\'t that feel so good, that big black cock filling your pussy?" Anushka asks you.');
    scene.text('You barely notice she is speaking to you at first, but then you look at her and nod. "YES!… it feels… amazing." You reply to her.');
    scene.text('Just then you feel a slap on your ass. "Ok get up." Djibril says to you, so you do as he asks and stands up, as you do his dick slides out of your twat, which now suddenly feels so empty.');
    qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch what happens next', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff16.jpg');
    scene.text('Djibril gets up from where he was laying. He grabs Anushka and just shoves her over to a table and bends her over it. Anushka gasps a little in surprise as she gets man handled into place. Once she is bent over he just shoves his wet dick into her pussy, which causes her to moan loudly. Then he just starts fucking her hard and fast. You move around in front of her so she is looking at you as she gets fucked. She leans forward to kiss you.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) - (2);
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff17.jpg');
    scene.text('You lean in and kiss her as she gets fucked by Djibril, soon he is pounding her little pussy balls deep as you are her make out. She moans into your mouth as she gets fucked. "Fuck yeah, this little white pussy feels so good." He smacks her ass cheeks as he fucks her pussy hard, fast, and deep. A couple of minutes goes by of this until he pulls out of her and looks at you. "Get over here so I can fuck you again." Anushka stands up from where she was leaning over the table, as you walk around you see his wet dick hanging there, a part of you wants to suck Anushka pussy juices off his dick again, so you can taste her, or you could just let him fuck you.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush_getfucked'] },
      { label: 'Suck his dick first', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff18.jpg');
    scene.text('You walk around and drop to your knees in front of him. "I want to taste her pussy on you."');
    scene.text('He just grins down at you as you say that, while Anushka watches. "It will be the sweetest tasting cock you ever sucked." She tells you, without waiting further you take his dick into your mouth and start sucking his wet cock, you can taste Anushka\'s pussy on it as you suck it. After a minute or so of this, he reach down and pulls you up on your feet as he says. "I want to fuck you some more."');
    qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush_getfucked'] },
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

function enterAfricanStudiesDjibrilNushGetfucked(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A82');
  qspCall(s, 'npcStat', 'A144', 'a');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff19.jpg');
  scene.text('He grabs you and turns you around, then lifts up your left leg. He uses one hand to guide his dick to your wet pussy, without waiting he slides it back into you. You feel his thick long cock filling your pussy up, causing you to moan in pleasure. Short after you feel some soft fingers rubbing your clit. When you glance down you see Anushka on her knees, using one hand to rub your clit while Djibril fucks you, the pleasure is so overwhelming from the two of them it is almost more than you can bare.');
  qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID ?? 0));
  qspCall(s, 'arousal', 'clit_finger', (-2), ((s as any).npcID1 ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff20.jpg');
    scene.text('As Djibril keeps fucking you, you feel Anushka\'s fingers move from rubbing your clit. Only to be quickly replaced by her mouth, she kisses, sucks, and licks your clit as Djibril continues to fuck you. You reach down and run your hands through her hair as she licks your clit, slowly moaning louder and louder.');
    scene.text('Suddenly Djibril pulls out of you, he roughly turns you around until you are facing him. Which also causes Anushka\'s lips to come off your clit as well, he pushes you roughly down to your knees as he grunts as he says. "FUCK!… I\'m about to cum." Anushka and you scoot a little closer so your faces around right in front of his dick, you reach up and take hold of his thick dick in your hand and start stroke him. You could just jerk him off and let him cum on both of your faces, but you notice Anushka has her eyes close, mouth open and tongue stuck out. You could direct his dick to her mouth and have him cum in her mouth.');
    qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'cuni', (-2), ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Jerk him off on your faces', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff21.jpg');
    scene.text('You stroke his dick a couple of more times then you see spurts of cum, come flying out of his dick. With each stroke more cum squirts out of his dick, most of it ends up on Anushka\'s face, while a little bit ends up on your face. Once you have squeezed the last drop of cum out of his dick, he steps away from the two of you, he looks down at the two of you and grins. "The most beautiful sight in all the world, a couple of white girls with a black mans cum on their face."');
    scene.text('Anushka for her part giggles slightly at his comment, she seems to enjoy being cummed on and possible even more the dirty talk. "I love it when black guys cum on my face, almost as much as I love eating a black mans cum."');
    scene.text('He laughs a moment then steps closer again. "Well let me help you with that." With that he sticks his dick back in her mouth, she wraps her lips tightly around the shaft, as he grabs her by the hair and strokes his dick with her mouth, obviously to make sure every last drop of his cum is out. With that he lets go of her and pulls his dick out of her mouth. "Later I will fill that pretty little mouth of yours up with my cum."');
    scene.text('Anushka gets off her knees at that and scoffs a laugh. "If your lucky maybe or maybe not." He laughs at her banter back, he starts to get dressed, while she grabs some wipes out of her pack and starts to clean Djibril\'s cum off her face. You follow suit and start to clean his cum off your own face.');
    qspCall(s, 'arousal', 'hj', 1, ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_cleanup', 'head');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush_cleanup'] },
    ]);
  } },
      { label: 'Shoot his cum in Anushka\'s mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/uni/african_studies/djibril/djibril_nush_mff22.jpg');
    scene.text('You grin to yourself, it seems like such a waste not to fill Anushka\'s mouth with Djibril\'s cum. You point the tip of his dick right into her open mouth and even encourage him to step a little closer which he obliges so the head of his black dick is nearly in her mouth. You stroke his cock with your hand a couple of more times, before the first thick splurt of cum shoots out of Djibirls dick right into Anushka\'s open mouth, her head jerks slightly in surprise, once that moment of surprise passes she doesn\'t move and keeps her mouth wide open.');
    scene.text('She sinks down a little lower and tilts her head back, once a little bit of his cum dribbles out the corner of her mouth. You keep the tip of Djibril\'s cock pointed into Anushka open mouth, as you stroke it, slowly filling her mouth up with his cum. After a few more strokes you have milked just about every drop out of his dick, once you have he says. "Such a good little snowbunny, now swallow my cum." Anushka does as she is told and swallows his cum, after opening her eyes to stare back at him as she swallows down all of his cum. "Damn! You just love that African cum don\'t you?"');
    scene.text('Anushka nods with a grin. "I love cum from black cocks, it tastes amazing."');
    scene.text('She barely finishes saying that before Djibril shoves his dick in her mouth again. "Then let me help you, lets make sure you got every last drop of cum." He says as he grabs her hair, as he fucks her mouth for a minute or so.');
    scene.text('Then Djirbil pulls his dick back out of Anushka mouth and lets go of her hair. "Oh yum, there was a little cum left in your dick." She says while biting her lower lip, you can\'t tell if she is just engaging in dirty talk or if she really means it what she is saying.');
    scene.text('Djibril barks a laugh. "Fuck girl, you\'re just to much." She giggles in return, with that little exchange over, he starts to get dressed while she cleans up the little bit of cum that dribble down her chin, before she starts to get dressed as well, you follow suit and start getting dressed as well.');
    qspCall(s, 'arousal', 'hj', 1, ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['uni_lessons_electives_african_studies2', 'african_studies_djibril_nush_cleanup'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfricanStudiesDjibrilNushCleanup(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big82.jpg');
  scene.text('Djibril finishes getting dressed first, once he is he says. "Thanks girls, that was amazing, maybe we can do it again soon."');
  scene.text('Anushka glances to you for a moment and smirks before looking back to him. "Sure maybe, if your lucky… or maybe not."');
  scene.text('He barks a slight laugh. "Ok sure, well I\'m going to get going, see you girls around." With that he leaves out of the room, you finish getting dressed before Anushka finishes, as she takes some time to check on her makeup and fix it up a bit. You could just be on your way, or you could hang around and see if Anushka wants to do something now.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    { label: 'Wait for Anushka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    // TODO-QSP: dynamic text: A few minutes later, Anushka finishes getting herself all cleaned up and and clo...
    scene.text(`A few minutes later, Anushka finishes getting herself all cleaned up and and clothes back in order. She gives you a knowing little smile. "Well that was fun, at least I had fun. Did you have fun ${((s as any).pcs_nickname || '')}?"`);
    scene.text('You can\'t help but blush and nod. "Yeah I did, anyways I wanted to see if you wanted to do something now."');
    scene.text('She arches a shapely brow with a inquisitive look on her face. "Like what?"');
    scene.actions([
      { label: 'Let\'s have fun', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "I really wanted to go have some fun and thought you might want to hang out or something…"');
    scene.text('She\'s shaking her head before you finish. "Can\'t. I need to get some studying done at the library before tonight."');
    scene.text('You sigh, dejected. "Oh, okay. Maybe some other time?"');
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later."');
      scene.text('She puts some extra sway in her hips as she walks away, really rocking her ass. You smile and shake your head before turning to leave yourself.');
    } else {
      ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
      scene.text('She nods. "Totally. Maybe over the weekend when I\'ve got some free time? Catch you later, but you should stop by my place sometime."');
      scene.text('She tells you where the apartment she shares with the boys from the band is located and she puts some extra sway in her hips as she walks away, really rocking her ass.');
      scene.text('You smile and shake your head before turning to leave yourself.');
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
      { label: 'We could go study', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(s, 'uni_lessons_electives', 'study_with_friends');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile. "I know you likely need to study. Mind if I come?"');
    scene.text('She shrugs. "Sure, if you want, but I really do have to study." Her tone makes it clear she doesn\'t have time to mess around like she did back in Pavlovsk.');
    scene.text('"Yeah, I understand," you reply.');
    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
      scene.text('The two of you walk over to the library and find a quiet spot to study. Anushka seems really intent on her studies and doesn\'t talk much while the two of you study.');
      scene.text('After a few hours, her phone starts beeping. "I need to get going. See you later."');
      scene.text('With that, she gathers her stuff and leaves.');
    } else {
      ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
  ]);
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
    case 'african_studies_djibril_nush_bj':
      enterAfricanStudiesDjibrilNushBj(s, scene);
      break;
    case 'african_studies_djibril_nush_ridehim':
      enterAfricanStudiesDjibrilNushRidehim(s, scene);
      break;
    case 'african_studies_djibril_nush_getfucked':
      enterAfricanStudiesDjibrilNushGetfucked(s, scene);
      break;
    case 'african_studies_djibril_nush_cleanup':
      enterAfricanStudiesDjibrilNushCleanup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons_electives_african_studies2: LocationDef = {
  name: 'uni_lessons_electives_african_studies2',
  title: 'The class is pretty uneventful for the most part, but you no',
  region: 'other',
  enter: enter,
};
