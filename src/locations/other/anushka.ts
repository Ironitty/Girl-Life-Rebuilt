import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (120 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.text('<center><b>Detention</b></center>');
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  // TODO-QSP: dynamic text: Valentin sits across from you while Anushka takes the seat next to you. She slid...
  scene.text(`Valentin sits across from you while Anushka takes the seat next to you. She slides her arm around your shoulders and pulls you close to her. "${((s as any).pcs_nickname ?? 0)}, we need your help with a plan."`);
  // TODO-QSP: dynamic text: "What plan?" you ask. You look from her to Valentin, then back. Anushka's answer...
  scene.text(`"What plan?" you ask. You look from her to Valentin, then back. Anushka's answer comes so fast that you're certain she was waiting for that exact question. "We want to drug Mr ${((s as any).rand_teacher ?? 0)}… You know, so we can go have fun." You're almost certain you misheard her, but she casually ignores your shocked expression and explains the part she expects you to play. "I'll go up and distract him. When I do, we need you to drop these in his drink." She places several pills in your hand.`);
  scene.text('You look at the pills, turning them uncertainly in your fingers before looking up at them again. "What exactly will these do to him?"');
  scene.text('Valentin answers before Anushka can. "They\'ll make him tired is all. He\'ll sleep for a few hours and feel a little groggy for the rest of the day, but nothing serious. We\'re not trying to kill him, just make detention a less boring. Are you in or not?"');
  qspCall(s, 'willpower', 'crime', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-2));
    qspCall(s, 'npc_relationship', 'modify', 'A158', (-2));
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (3);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You shake your head and hand the pills back. "Sorry guys, but I can\'t be part of that. It just… doesn\'t feel right."');
    scene.text('Valentin looks over at Anushka. "See? I told you she wouldn\'t be game."');
    scene.text('Anushka shakes her head and gives you a disgusted look. "I thought you were cool. What a fucking loser you are." They both get up and move over to another table and you spend the rest of the detention playing on your phone, trying to ignore the glares they shoot in your direction.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/anushdes.jpg');
    scene.text('You nod. "Okay, let\'s do this." Anushka grabs your head to turn your face towards hers and gives you a long, deep kiss with so much tongue and passion that even Valentin starts feeling a little awkward. Once she breaks the kiss, she turns towards him. "See? I told you she would do it." Valentin just shrugs slightly and smirks at you. You\'re still catching your breath from her kiss as Anushka crushes up the pills, with obvious skill, into a fine powder in less than a minute. She gets up and motions for you to follow her.');
    qspCall(s, 'arousal', 'kiss', 3);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: She walks up to the side of the teacher's desk where Mr <<$rand_teacher>> is sit...
    scene.text(`She walks up to the side of the teacher's desk where Mr ${((s as any).rand_teacher ?? 0)} is sitting, his unguarded drink conveniently located at the opposite end. You causally stroll over and sit down on the edge of the table, using your body to block his drink from view from the rest of the room as Mr ${((s as any).rand_teacher ?? 0)} looks at the two of you questioningly. "Can I help you girls?"`);
    scene.text('Anushka leans forward and pulls her shirt apart and bra slightly down, which nearly exposes her nipples and definitely gives him a better view of her cleavage. However, her mock-anxious tone is what takes the cake. "Sir, what do you think that spot is? Should I be worried?"');
    scene.text('He seems flustered by her actions, but quickly gets himself under control. "What spot? I don\'t see anything."');
    scene.text('She leans in a bit closer and pushes her breasts together even more. "Right there… between my breasts."');
    // TODO-QSP: dynamic text: He leans in slightly closer to get a better look, and as he does, you drop the p...
    scene.text(`He leans in slightly closer to get a better look, and as he does, you drop the powdered pills in his drink. Anushka gives you an almost imperceptible nod before she lets go of her shirt to hide her cleavage again. "Oh… it's gone!" She turns to you. "See? I told you it was just some lint." She gives Mr ${((s as any).rand_teacher ?? 0)} another look and smiles. "Thanks anyway." Anushka gets up and walks back to your table with you following right behind her. He looks at the two of you for a second before shaking his head. He takes a big gulp from his cup, then another one a few minutes later. Within half an hour, he is slumped back in his chair, snoring, and saliva is running down his chin.`);
    scene.actions([
      { label: 'Go to the Teachers\' Lounge', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npcStat', 'A144');
    qspCall(s, 'npcStat', 'A158', 'a');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/det3sum.jpg');
    scene.text('Once the teacher starts snoring, Valentin gets up. "Come on, let\'s go." Anushka follows suit and pulls you up as well. You wander down the halls until you reach the teachers\' lounge. Valentin pulls some lockpicks out and expertly uses them to unlock the door. You and your companions head inside quickly, and he locks the door behind you. While he does, Anushka pulls you towards a big leather couch. You both flop down on the comfy couch, and Valentin sits down between you a few seconds later. He pulls a small flask from his jacket pocket and takes a quick gulp from it before passing it to Anushka. She takes a healthy swig and passes it to you.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A158', (-1));
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/det3sum.jpg');
    scene.text('You shake your head, denying the offered drink. He snorts and she rolls her eyes before pulling out a joint and lighting it up. Before long, the two of them are ignoring you while having a smoke and a drink together. It doesn\'t take long for the two of them to start making out next to you and you watch in fascination as he starts pulling his pants down.');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      scene.text('As Anushka and Valentin make out, she reaches down to close her hand around his cock and immediately starts to jerk him. After she has him good and hard, she lowers her head to start sucking his cock.');
      scene.text('Valentin gives his head a little jerk towards the door, which indicates that you should move away. Feeling a bit uncomfortable, you get up and move further away from them. You spend the rest of your time keeping yourself busy by playing on your phone, trying very hard to ignore the sounds of the two of them having sex on the couch.');
      qspCall(s, 'arousal', 'voyeur', 20);
      scene.actions([
        { label: 'Go home', goto: ['gschool_detention', 'end'] },
      ]);
    } else {
      scene.text('As Anushka and Valentin make out, she reaches down to close her hand around his cock and immediately starts to jerk him. After she has him good and hard, she reaches toward you with both hands to grab your head and push you down into his lap.');
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        qspCall(s, 'npc_relationship', 'modify', 'A158', (-1));
        qspCall(s, 'willpower', 'pay', 'resist');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/detention/sex/det3sum.jpg');
        scene.text('You pull away before your face gets too close to his cock. Anushka doesn\'t really try to stop you when she feels you resist. "Sorry guys, but I just wanted out of detention. I really don\'t want to have an orgy with the two of you."');
        scene.text('Anushka seems completely unfazed. Before you even finish speaking, she lowers her head and starts sucking Valentin\'s cock.');
        scene.text('Valentin gives his head a little jerk towards the door, which indicates that you should move away. "If you don\'t want to party, then get lost."');
        scene.text('The two of them completely ignore you from that point on. Feeling a bit uncomfortable, you get up and move further away from them. You spend the rest of your time keeping yourself busy by playing on your phone, trying very hard to ignore the sounds of the two of them having sex on the couch.');
        qspCall(s, 'arousal', 'voyeur', 20);
        scene.actions([
          { label: 'Pull away [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
          { label: 'Go home', goto: ['gschool_detention', 'end'] },
        ]);
      }
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    scene.img('images/locations/pavlovsk/school/detention/sex/det3sum.jpg');
    scene.text('You reflexively open your mouth to wrap your lips around the head and start sucking his dick. She keeps forcing your head down, which makes you gag slightly on his length every so often, but she doesn\'t really have to force you. You\'re getting seriously turned on at the thought of having a threesome in the teachers\' lounge.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'rough', 'group');
    scene.actions([
      { label: 'Her turn', goto: ['anushka', 'Her turn'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Take a drink', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 13;
    qspCall(s, 'drugs', 'alcohol', 'moonshine', 1);
    qspCall(s, 'drugs', 'joint', 1);
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detcbj.jpg');
    scene.text('You take the offered drink and take a swig as well. You immediately regret it because you choke and cough from the burning liquid. This results in them both laughing. Whatever is in the flask is much stronger than you expected. Anushka soon takes out a joint and lights it up before passing it around. After only a few drinks each, the flask is empty, and the joint doesn\'t last much longer. With the flask empty and the joint smoked to ashes, you\'re feeling pretty buzzed and watch in dazed fascination as Valentin pulls his pants down.');
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      scene.text('As Anushka and Valentin make out, she reaches down to close her hand around his cock and immediately starts to jerk him. After she has him good and hard, she lowers her head to start sucking Valentin\'s cock.');
      scene.text('Valentin gives his head a little jerk towards the door, which indicates that you should move away. Feeling a bit uncomfortable, you get up and move further away from them. You spend the rest of your time keeping yourself busy by playing on your phone, trying very hard to ignore the sounds of the two of them having sex on the couch.');
      qspCall(s, 'arousal', 'voyeur', 20);
      scene.actions([
        { label: 'Go home', goto: ['gschool_detention', 'end'] },
      ]);
    } else {
      scene.text('As Anushka and Valentin make out, she reaches down to close her hand around his cock and immediately starts to jerk him. After she has him good and hard, she reaches toward you with both hands to grab your head and push you down into his lap.');
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Pull away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Pull away', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A158', (-1));
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/detention/sex/det3sum.jpg');
    scene.text('You pull away before your face gets too close to his cock. Anushka doesn\'t really try to stop you when she feels you resist. "Sorry guys, but I just wanted out of detention. I really don\'t want to have an orgy with the two of you."');
    scene.text('Anushka seems completely unfazed, and before you even finish speaking, she lowers her head to start sucking Valentin\'s cock.');
    scene.text('Valentin shakes his head. "Be quiet and watch. Maybe you\'ll learn something today."');
    scene.text('The two of them completely ignore you from that point on. Feeling a bit uncomfortable, you get up and move further away from them. You spend the rest of your time keeping yourself busy by playing on your phone and watching the two of them fuck on the couch. You wonder if you made the right decision.');
    qspCall(s, 'arousal', 'voyeur', 20);
    scene.actions([
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Suck him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    scene.img('images/locations/pavlovsk/school/detention/sex/det3sum.jpg');
    scene.text('You reflexively open your mouth to wrap your lips around the head and start sucking his dick. She keeps forcing your head down, which makes you gag slightly on his length every so often, but she doesn\'t really have to force you. You\'re pretty quickly getting turned on by this dream-like situation.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'rough', 'group');
    scene.actions([
      { label: 'Her turn', goto: ['anushka', 'Her turn'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const anushka: LocationDef = {
  name: 'anushka',
  title: 'Detention',
  region: 'other',
  description: ['You look at the pills, turning them uncertainly in your fingers before looking up at them again. "What exactly will these do to him?"'],
  enter: enter,
};
