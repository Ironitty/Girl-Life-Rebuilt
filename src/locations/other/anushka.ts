import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPlan(s: GameState, scene: SceneBuilder): void {
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-2));
    qspCall(s, 'npc_relationship', 'modify', 'A158', (-2));
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (3);
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
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A158', (-1));
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
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
        scene.actions([
          { label: 'Pull away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      { label: 'Go home', goto: ['gschool_detention', 'end'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Pull away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Take a drink', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Pull away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
  } },
  ]);
  scene.build();
}

function enterHerTurn(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Detention</b></center>');
  scene.img('images/locations/pavlovsk/school/detention/sex/detcbj1.jpg');
  scene.text('Her hands are suddenly gone and you feel her head next to yours. You stop sucking to make room for her, the two of you passing Valentin\'s cock back and forth and taking turns. He seems perfectly content to let the two of you do as you please, so long as you please him.');
  scene.text('When it\'s your turn to suck his dick again, Anushka takes your shirt off and works on getting you out of the rest of your clothes. As soon as she has you completely naked, she kneels back down next to you. You move to let her suck his cock, and while she\'s busy, you return the favor by stripping her down as well.');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'group');
  qspCall(s, 'stat', '');
  scene.text('As soon as her panties are off, she pulls her mouth off Valentin\'s dick with a loud plop, and the two of you start helping him undress. Once he\'s naked, she pushes him back on the couch and encourages you to straddle his lap.');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detcvag.jpg');
    // TODO-QSP: dynamic text: She's right… you're sopping wet and ready. As you lower yourself down, she guide...
    scene.text(`She's right… you're sopping wet and ready. As you lower yourself down, she guides his cock into your pussy. You feel his ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} cock slowly filling and stretching you open, moaning softly as it does.`);
    scene.text('You lift yourself up and begin riding his dick. As if that stimulation wasn\'t enough for you, Anushka leans forward and starts licking your clit while he bucks his hips up to fuck you from below. You\'re totally lost in pleasure with your body unable to keep up with all the sensations. All control over the situation has completely passed to your companions, and as they keep going, you can feel yourself getting close already.');
    scene.text('Just when you\'re right on the edge and release is finally within your grasp, Anushka pulls you off his cock and takes your place. She slams her pussy down and impales herself time and time again. You\'re certain she did it on purpose, but you still return the favor by licking her clit as he fucks her.');
    qspCall(s, 'arousal', 'vaginal', 15, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni', (-15), ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-5), ((s as any).npcID ?? 0), 'group', 'lesbian');
    ((s as any).npc_had_sex ?? {})['A144'] = 1;
    ((s as any).npc_had_sex ?? {})['A158'] = 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detcanal1.jpg');
    scene.text('Unlike you, she leaves no doubt as to who is in control when she pulls herself off to make him change position. She lies down on the couch, opens her legs and spreads her ass cheeks. Her expectation is obvious and Valentin, being a perfect gentleman, obliges her. He slips his dick into her ass with ease. Even without any additional lubrication, he begins fucking her right away as she motions you over to straddle her face.');
    scene.text('Her tongue laps at your clit and slit as soon as they\'re within reach. Every now and then her tongue darts inside you as well. Meanwhile, Valentin lays himself down on his side and pounds her ass from behind. This allows him to lick and suck on your nipples while she eats you out. This goes on for some time, all three of you audibly content with this position until Anushka makes the two of you move again.');
    qspCall(s, 'arousal', 'cuni', 10, ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'breasts', (-10), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detcanal.jpg');
    scene.text('She gets up and has you get in her place, straddling your face almost as soon as you\'re on your back. You have no reservations about giving her pussy a through licking after the enthusiasm she treated you to, so you go to town immediately. Meanwhile, she lifts up your legs and spreads them apart to have Valentin kneel down between them.');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    // TODO-QSP: dynamic text: You feel him rubbing the tip of his dick against your asshole before pushing the...
    scene.text(`You feel him rubbing the tip of his dick against your asshole before pushing the tip of his ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} cock into your anus.`);
    scene.text('Not knowing how much experience you have, he starts off slow to allow you to get used to it. As soon as he feels you relax, he starts hammering your ass just as hard and fast as he was pounding Anushka\'s. She grinds her pussy against your face as he claims your ass, each of them taking turns playing with your nipples. This adds another instrument to the orchestra of pain and pleasure that fills your mind. You\'ve completely lost all sense of time by now, but you don\'t really care.');
    qspCall(s, 'arousal', 'anal', 15, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni_give', (-15), ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detccum.jpg');
    scene.text('Through the haze of pleasure, you hear Valentin panting and grunting. Anushka climbs off your face and pulls him away from you, which leaves your ass suddenly feeling empty. She kneels down in front of him while pulling you down to join her. She grabs his dick and rapidly starts jerking it. A few seconds later, a stream of cum spurts out and hits you in the face. The next spurt she aims at her own face followed by your tits, then her own tits. She spreads his spunk between the two of you, coating both of your tits and faces with his sticky cum.');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0));
    // TODO-QSP: dynamic text: When he's finished, she diligently licks you clean and you return the favor. Whe...
    scene.text(`When he's finished, she diligently licks you clean and you return the favor. When all the cum has been collected, she gives you a deep and passionate kiss, both of you making sure to share the cum you licked up together. With that done, the three of you get dressed. As Valentin unlocks the lounge door, he gives you a smirk. "Okay, I admit it, you're not as much of a killjoy as I thought, ${((s as any).pcs_nickname ?? 0)}. Nush was right; you're a pretty cool chick, not to mention a damn good fuck!" You blush and give Anushka a sideways glance to find her grinning at you.`);
    qspCall(s, 'arousal', 'kiss', 5, ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.text('Going back to the library, you see that the teacher is still out like a light and all the other students are gone. There\'s less than an hour of detention left, so the three of you leave the school. Once outside, you each go your separate ways.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_grounds', 'main'] },
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
    { label: 'No fucking', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detcowgirl.jpg');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('You blush as you shake your head. "Sorry, but I don\'t want to get fucked. I\'m still a virgin."');
      scene.text('They both look at you with surprise. "I\'ll happily pop your cheery for you," Valentin says, which earns him a slap on the shoulder from Anushka.');
      scene.text('"Shut up, you dog! A girl picks her time and with whom she wants to lose it." She then turns to you. "Don\'t worry about it," she says before she climbs on top of him herself. She mounts him cowgirl style and starts riding him hard and fast. You kneel down next to them on the couch, squeezing and kissing her ass as she rides him.');
    } else {
      scene.text('You shake your head. "Sorry, I\'ll suck him or lick you, but I don\'t want to get fucked."');
      scene.text('Without saying a word, Anushka climbs on top of him herself, mounting him cowgirl style before she starts riding him hard and fast. You kneel down next to them on the couch, squeezing and kissing her ass as she rides him.');
    }
    qspCall(s, 'arousal', 'voyeur', 5);
    scene.actions([
      { label: 'Suck him again', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detcwbj.jpg');
    scene.text('After riding him for a while, she pulls off of him, letting his cock slide out of her sopping wet pussy. She reaches over to grab your head and pushes it down towards his waiting dick. You quickly open your mouth and start sucking, tasting her pussy juices all over it. She lets you suck her juices off his dick for a while before pulling your head away and easing herself back down onto his shaft. This time, however, she lets his cock slide up her ass.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detcowanal.jpg');
    scene.text('You watch as she rides him hard and fast, bucking and grinding against him as she really picks up the pace. Moaning loudly, she hammers herself down on his cock and takes it as deep in her asshole as it can go. She takes a loud shuddering breath, her body shaking all over as her eyes roll up in the back of her head.');
    qspCall(s, 'arousal', 'voyeur', 10);
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0));
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/sex/detccum.jpg');
    scene.text('As Anushka\'s orgasm finishes, you hear Valentin pant and grunt as her ass squeezes and twitches around his cock. You know he\'s getting close and it seems Anushka does as well. She quickly climbs off him and kneels down in front of him, pulling you down as well so you can join her. She grabs his dick and rapidly starts jerking it. A few seconds later, a stream of cum spurts out and hits you in the face. The next spurt she aims at her own face followed by your tits, then her own tits. She spreads his spunk between the two of you, coating both of your tits and faces with his sticky cum.');
    // TODO-QSP: dynamic text: When he's finished, she diligently licks you clean and you return the favor. Whe...
    scene.text(`When he's finished, she diligently licks you clean and you return the favor. When all the cum has been collected, she gives you a deep and passionate kiss, both of you making sure to share the cum you licked up together. With that done, the three of you get dressed. As Valentin unlocks the lounge door, he gives you a smirk. "Okay, I admit it. You're not as much of a killjoy as I thought, ${((s as any).pcs_nickname ?? 0)}. Nush was right; you're a pretty cool chick. Not to mention you really know how to suck cock." You give Anushka a sideways glance and find her grinning at you.`);
    qspCall(s, 'arousal', 'kiss', 5, ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.text('Going back to the library, you see that the teacher is still out like a light and all the other students are gone. There\'s less than an hour of detention left, so the three of you leave the school. Once outside, you each go your separate ways.');
    scene.actions([
      { label: 'Go home', goto: ['gschool_grounds', 'main'] },
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

function enterWedgieFight(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.text('<center><b>Detention</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/wedgiefight.jpg');
  scene.text('You\'re not about to let go first, because you know Anushka well enough to know she has a twisted sense of humor. "No, you let go first then I will!"');
  scene.text('"Yeah, right! Like I\'ll fall for that!" she replies as the two of you wrestle around, still pulling on each other\'s panties before she suddenly switches tactics. Instead of yanking your panties up, she starts trying to yank your clothes off. You panic for a moment and let go of her to hold onto your own clothes before she gets them off you, but she still manages to show half your ass off to everyone that is watching. Now you know you\'re in a losing position. If you let go of your clothes, she\'ll pull them off, but if all you do is hold onto them, then you can\'t do anything to her in response. Before you can figure out a different plan of attack, the teacher walks in.');
  scene.text('"What are the two of you doing?!" he asks as he holds up his hand. "Actually, I don\'t care, because both of you will come with me. The rest of you behave until I get back." He then grabs both you and Anushka by the arm and drags you both out of the library to the principal\'s office.');
  scene.actions([
    { label: 'In trouble', handler: (st: GameState) => {
    scene.text('<center><b>Principal\'s Office</b></center>');
    scene.img('images/characters/shared/headshots_main/big134.jpg');
    scene.text('He knocks and waits until he\'s told to enter before dragging you both in. Once inside, he releases the two of you and addresses the principal. "These two were trying to pull each other\'s clothes off in the middle of the library!"');
    // TODO-QSP: dynamic text: The principal seems a little surprised by this. "Miss Konstantinov! I've come to...
    scene.text(`The principal seems a little surprised by this. "Miss Konstantinov! I've come to expect this kind of behavior from you, but <b>you</b> Miss ${((s as any).pcs_lastname ?? 0)}? I'd hoped you would know better. It seems that hope was in vain." She nods to the teacher. "I'll deal with them." He leaves the office and closes the door behind him.`);
    scene.actions([
      { label: 'Punishment', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', (-5), 'humiliation');
    qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/detention/ffspank1.jpg');
    scene.text('"Very well, since you both wanted to be naked so badly, take off your clothes," she demands as she pulls a chair close to her leather couch and takes a seat. Anushka quickly takes off all her clothes, seemingly not caring in the slightest. You, however, are a little slower, but finally manage to remove your clothes as well. Once you\'re both naked, Miss Volkov motions you over. As soon as you\'re within arms reach, she grabs you and pulls you across her lap. She proceeds to spank your bare ass until your cheeks are cherry red and stinging. Anushka takes a seat on the couch, silently watching you get spanked.');
    scene.actions([
      { label: 'Next', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/ffspank2.jpg');
    scene.text('Once she\'s satisfied, she pulls you up and points to the corner of her office. "Go stand over there. Leave your clothes where they are, and face the corner." You do as you\'re told, gingerly rubbing your ass. You glance back when you hear the slap of flesh on flesh. Anushka is laid out across Miss Volkov\'s lap and getting her ass spanked as well. As time passes, you can hear Anushka moaning. She\'s either pretending to like it or really is enjoying it. Miss Volkov seems annoyed at this and spends considerably more time spanking Anushka\'s already glowing ass than she did with you. Finally, she seems to grow tired of it and lifts Anushka off her lap. She points to your corner and barks her command. "Go and join your friend."');
    scene.actions([
      { label: 'Standing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/ffspank3.jpg');
    scene.text('You and Anushka stand facing the corner together. Your ass is seriously stinging, and if anything, Anushka\'s must be much redder than yours. Apparently expecting one of you to disobey her, Miss Volkov keeps an eye on you for a while. However, neither of you do. The two of you stay standing naked facing the corner, your asses on fire.');
    scene.actions([
      { label: 'Rebel', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', (-20), 'humiliation');
    (s as any).minut = ((s as any).minut ?? 0) + (120 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/detention/ffspank4.jpg');
    scene.text('After a while, Miss Volkov either loses interest or forgets about you. Either way, she stops paying attention to you. Sometime later, Anushka gives you a quick grin and leans over, like she wants to say something. When you lean closer to hear, you\'re surprised when she kisses you instead. It\'s a soft, quick kiss, but you can feel some real passion behind it. A few hours later, Miss Volkov finally speaks to you again. "Alright you two, you can get dressed and go home. I don\'t want to see you in here again."');
    // TODO-QSP: dynamic text: You quickly gather up your clothes and get dressed again. As the two of you head...
    scene.text(`You quickly gather up your clothes and get dressed again. As the two of you head out, Anushka turns to you. "Hey ${((s as any).pcs_nickname ?? 0)}, you want to come by my place?"`);
    scene.actions([
      { label: 'Can\'t', handler: (st: GameState) => {
    scene.text('You shake your head. "Sorry Nush, I have some things I need to do. Maybe some other time."');
    scene.text('She shrugs. "Sure. Whatever…" she replies noncommittally.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/walk_homeg1.jpg');
    scene.text('The two of you walk back to her building, where you head up to the fourth floor to her family\'s apartment.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
      (s as any).AnushkaLoc = 5;
      scene.actions([{ label: 'Continue', goto: ['anushapt', 'livingroom'] }]);
    } else {
      (s as any).AnushkaLoc = 2;
      scene.actions([{ label: 'Continue', goto: ['anush_bedroom', 'anushroom'] }]);
    }
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

function enterTemptation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur', 5);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  qspCall(s, 'gschool_events', 'rand_teacher_arg');
  scene.text('<center><b>Detention</b></center>');
  scene.img('images/locations/pavlovsk/school/detention/detflash.mp4');
  scene.text('As you\'re sitting at a table, bored out of your mind and waiting for detention to end, you look around and notice that Anushka has snuck off into the book stacks. You can just barely see her between the books and the row above. Once she catches you looking, she smiles, pulls up her shirt and flashes her breasts at you. This is quickly followed by her motioning you over.');
  scene.actions([
    { label: 'Can\'t risk it', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You look around and consider it, but decide it\'s too risky. When she looks back over, you shake your head. You can tell she\'s disappointed, and she soon disappears somewhere among the book stacks. The rest of detention passes very slowly, and you don\'t see her again.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    { label: 'Might be fun', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    // TODO-QSP: dynamic text: You look around. When you're sure that there is no one watching, you get up and ...
    scene.text(`You look around. When you're sure that there is no one watching, you get up and quickly slip in behind one of the shelves, making your way over to where you saw Anushka. As you get close, you spot her much further back in the library, silently waving at you. You follow her to the very back of the library, far away from everyone else, where she gives you a grin that you're all too aware means she's cooking up trouble. "${((s as any).pcs_nickname ?? 0)}! Let's have some fun."`);
    scene.actions([
      { label: 'What kind of fun?', handler: (st: GameState) => {
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/getnaked.jpg');
    scene.text('Her playful tone and obvious excitement is making you nervous. "What kind of fun?" you ask as you glance back in the direction you came to make sure no one else is coming this way.');
    scene.text('"The best kind of fun! The thrilling, exciting and risky kind of course," you hear her say behind you. As you turn back towards her, you see that her top is gone, and you have no idea where it went. Her shorts are around her ankles while her panties are already around her knees. You\'re completely stunned. How in the hell did she get naked so fast?');
    scene.text('"Well? Come on, take your clothes off," she says, expecting you to start stripping as well. You really have no idea what to expect from her. Even if half the stuff you\'ve heard is true, she might want to molest you, have you paint each other blue then howl at the moon, or just swap clothes with each other.');
    scene.text('As you just stand there lost in your own thoughts and gaping like a fish, she decides to clear things up. "Come on, haven\'t you ever wanted to run around the school naked before? It\'s thrilling knowing you could be caught at any time." She\'s clearly done this before and she\'s right. It would be <i>very</i> easy to get caught, but then again, it might also be quite thrilling.');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] >= 3) {
      scene.actions([
        { label: 'Get naked', goto: ['anushka', 'naked'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'exhib', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'I would like to, but… [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'I would like to, but… [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/getnaked.jpg');
    scene.text('You blush at the thought and bite your lip. It could be fun and you actually would like to, but you\'re still not completely sold. "I don\'t know, Nush… What if we get caught?"');
    // TODO-QSP: dynamic text: She can see your reluctance, but also your willingness. She steps up close and s...
    scene.text(`She can see your reluctance, but also your willingness. She steps up close and starts pulling your shirt up. "You worry too much, ${((s as any).pcs_nickname ?? 0)}. You've got to live in the moment. Besides, it'll be so much fun."`);
    scene.text('As she pulls your shirt over your head, you nod your head slightly. "Okay, let\'s do this," you say as you start taking off the rest of your clothes.');
    scene.actions([
      { label: 'Get naked', goto: ['anushka', 'naked'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-5));
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/getnaked.jpg');
    scene.text('You step back and shake your head. "Sorry, but I just don\'t want to risk getting caught."');
    scene.text('Her grin fades. "That\'s what makes it fun, so come on!"');
    scene.text('"Sorry, I just can\'t." You turn and head back to your table in detention. The rest of detention passes very slowly, and you don\'t see her again.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNaked(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
  qspCall(s, 'arousal', 'flash', 3, 'exhibitionism');
  scene.text('<center><b>Detention</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/getnaked2.jpg');
  scene.text('As you start stripping off the rest of your clothes, she steps out of her shorts and panties. "That\'s the spirit! I knew you were a fun girl." Once the two of you are both naked, she gathers up your clothes and stuffs them behind some books on the bottom shelf of one of the bookcases. She gives your naked body a quick look over before heading towards the library\'s side door. "Come on, we have to go out this way."');
  scene.actions([
    { label: 'Into the halls', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 3, 'exhibitionism');
    scene.text('<center><b>Halls</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/halls.jpg');
    scene.text('As the two of you walk down the halls, Anushka seems completely at ease walking around without any clothes on. She really doesn\'t care if anyone catches her naked; hell, maybe she would even enjoy it more. As you walk around, you start getting a bit more comfortable with the situation. The two of you talk about normal stuff, like what\'s going on in school, any good movies you\'ve watched, and so on before you suddenly hear the noise of a machine being turned on and notice that the sound is getting closer.');
    scene.text('"Shit, the janitor is buffing the floors already!" she exclaims as she looks around.');
    scene.text('You try to cover yourself up and get ready to make a run for it, but Anushka grabs your hand and pulls you into one of the classrooms.');
    scene.actions([
      { label: 'Cornered', handler: (st: GameState) => {
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
    scene.text('You quickly duck into the room and pull the door closed behind you. You can still hear the janitor slowly coming in your direction as he polishes the floor. Anushka leads you into the back corner of the classroom where someone would need to come all the way into the room to see you. She pulls a poster off the wall and lays it down on the floor before sitting on top of it.');
    scene.text('You don\'t have much of a choice, so you sit down next to her. You notice she continues to seem completely comfortable being naked while you find yourself unconsciously using your hands to cover up. She pulls a joint out from behind her ear, which you never even noticed was there, and lights it with the single match that was stuck in the end of the joint. When she sees your dumbfounded look, she gives you a quick smile. "I knew we were going to be running around naked, and I wanted to bring it, so I prepared." She takes a long drag off the joint and then offers it to you.');
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-1));
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Detention</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
    scene.text('You shake your head. "No thanks. I\'m paranoid enough about getting caught bare-assed without adding that to the situation." She snorts in mild amusement at your answer and just smokes it herself. While the two of you make small talk, you hear the machine getting steadily closer.');
    scene.actions([
      { label: 'Wait for the janitor to pass', handler: (st: GameState) => {
    (st as any).anushLimitedQuestions = 4;
  }, goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Smoke the joint with her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'drugs', 'joint');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/weed.jpg');
    scene.text('You smile and take it from her. You take a long drag from the joint, hoping it will take your mind off the thought of getting caught by the janitor. You pass it back and forth between you as you make small talk while listening to the machine steadily getting closer.');
    scene.actions([
      { label: 'Wait for the janitor to pass', handler: (st: GameState) => {
    (st as any).anushLimitedQuestions = 4;
  }, goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterChatwhilewaiting(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
  scene.text('You\'re waiting for the janitor to pass.');
  if (((s as any).anushLimitedQuestions ?? 0) > 0) {
    if ((!((s as any).anushTalkedofDolls ?? 0))) {
      scene.actions([
        { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).anushLimitedQuestions = ((s as any).anushLimitedQuestions ?? 0) - (1);
    (s as any).anushTalkedofDolls = 1;
    scene.text('<center><b>Classroom</b></center>');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/characters/pavlovsk/school/girl/anushka/weed.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
    }
    scene.text('The two of you chat about a variety of things, mostly school, music, clothes and what has been going on in Pavlovsk lately.');
    scene.actions([
      { label: 'Ask where she buys her clothes', handler: (st: GameState) => {
    scene.text('<center><b>Classroom</b></center>');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/characters/pavlovsk/school/girl/anushka/weed.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
    }
    if (((s as any).anushkaQW ?? 0)?.['dolls'] === 0) {
      ((s as any).anushkaQW ?? {})['dolls'] = 2;
    }
    scene.text('You\'re curious where she gets her clothes, since it\'s obvious she doesn\'t get them locally. None of the local stores carry clothes like the ones she wears, and you rarely even see them much in the city. "Where do you buy your clothes? Online?"');
    scene.text('She lifts an eyebrow before looking down at her naked body and grinning, causing you to laugh. "Dolls, well… Patchwork Dolls to be exact. It\'s near the university in the city." She proceeds to tell you how to find the place.');
    scene.text('"If you stop by, tell Savva or Viola I said they still owe me a round from last time."');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if ((!((s as any).anushAskedofAlyona ?? 0))) {
      scene.actions([
        { label: 'Ask about Alyona', handler: (st: GameState) => {
    (s as any).anushLimitedQuestions = ((s as any).anushLimitedQuestions ?? 0) - (1);
    (s as any).anushAskedofAlyona = 1;
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/\'+iif(rand(0, 1) = 0, \'weed\', \'hiding\')+\'.jpg');
    scene.text('You\'ve heard some messed up things about Alyona, so you\'re curious about her friendship with Anushka. "You\'re friends with Alyona, right?" you ask and she nods. "How\'s she doing?"');
    scene.text('Anushka\'s eyes narrow ever so slightly and her tone takes on a cooler, much less playful edge to it. "Why?"');
    scene.text('You rarely see Anushka in a bad mood, but her body language and tone suggest that you should tread carefully on this subject. "I was just curious. I heard some stuff and wanted to know if she was alright is all."');
    scene.text('She looks at you for a second before she softens. "She has a fucked up life, more fucked up than anyone I know, but she\'s dealing with it and getting by well enough considering."');
    scene.actions([
      { label: 'Let it drop', goto: ['anushka', 'chatwhilewaiting'] },
      { label: 'Is it that bad?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-2));
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/weed.jpg');
    scene.text('You know this might be a bad call, but you want to know. "Is it really that bad?"');
    scene.text('She arches her brows at you, as if to ask if you\'re serious. "I should tell you to ask her yourself, but she would likely blow you off or knock your teeth out. Probably both. Let\'s just say her father is an abusive drunk and her mother, when conscious, is as meek as a mouse and lets him do whatever he wants. Her older brother is just as bad, so yeah, it\'s really that bad, so just drop it."');
    scene.text('Knowing you\'ve pushed things as far as you dare, you change the subject.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if ((!((s as any).anushAskedGrad ?? 0))) {
      scene.actions([
        { label: 'Ask what she plans to do after graduation', handler: (st: GameState) => {
    (s as any).anushLimitedQuestions = ((s as any).anushLimitedQuestions ?? 0) - (1);
    (s as any).anushAskedGrad = 1;
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/\'+iif(rand(0, 1) = 0, \'weed\', \'hiding\')+\'.jpg');
    scene.text('Curious about her plans for the future, you decide to ask what she plans to do once school is over. "Once we graduate, what do you plan to do? Are you going to focus on the band more?"');
    scene.text('"Sort of. I mean I plan to keep playing with the band and hopefully we can make it big, but I\'m not going to depend on that. I plan to go to the university so I have a back-up plan in case the band never takes off."');
    scene.text('You\'re a bit surprised, since you always hear that she\'s doing badly in school like all the other gopniks. "Oh… I didn\'t know you were doing that good in school."');
    scene.text('She laughs. "Yeah, everyone is surprised by that, but I checked what grades I needed to go to the university and I make sure mine stay above that. Yeah, I\'m a smart bitch as well as a good looking one. What about you?"');
    if (((s as any).rex_love ?? 0) === 1) {
      // TODO-QSP: act 'Get married to Rex': gt 'anushka', 'telling_marrige_dreams', 'Rex'
    }
    if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
      // TODO-QSP: act 'Get married to Artem': gt 'anushka', 'telling_marrige_dreams', 'Artem'
    }
    if (((s as any).kotovLoveQW ?? 0) === 1) {
      // TODO-QSP: act 'Get married to Vitek': gt 'anushka', 'telling_marrige_dreams', 'Vitek'
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 5) {
      // TODO-QSP: act 'Get married to Fedor': gt 'anushka', 'telling_marrige_dreams', 'Fedor'
    }
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      // TODO-QSP: act 'Get married to Niko': gt 'anushka', 'telling_marrige_dreams', 'Niko'
    }
    (s as any).i = 0;
    // TODO-QSP: :marrid_looop
    if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
        // TODO-QSP: dynamic 'act ''Get married to <<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''anushka'', ''telling_marr...
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'marrid_looop'
    }
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/\'+iif(rand(0, 1) = 0, \'weed\', \'hiding\')+\'.jpg');
    scene.text('"I\'m not so sure, but I have a few options I guess," you tell her.');
    scene.text('She nods. "Well, you should decide before you get stuck in this crappy little town married to some asshole whose kids you\'re popping out every few years. Not judging you, unless that\'s what you want. I\'m just saying…"');
    scene.text('You\'re not sure what more to say about it, so you decide to change the subject.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      { label: 'Go to the university', handler: (st: GameState) => {
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/\'+iif(rand(0, 1) = 0, \'weed\', \'hiding\')+\'.jpg');
    scene.text('You get a bit excited. "I\'m planning to attend the university as well. I\'m glad I\'ll know someone there now at least."');
    scene.text('She becomes thoughtful for a second. "Maybe we should think about being roommates when we go? As you said, then we know each other and already get along. Let\'s talk about it more when the time comes, yeah?"');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask about her reputation', handler: (st: GameState) => {
    (s as any).anushLimitedQuestions = ((s as any).anushLimitedQuestions ?? 0) - (1);
    scene.text('<center><b>Classroom</b></center>');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/characters/pavlovsk/school/girl/anushka/weed.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
    }
    scene.text('You know it can be a touchy subject, but you\'re just too curious. "Um Nush, do you ever worry, you know… about your reputation?"');
    // TODO-QSP: dynamic text: She laughs. "Which one? Where I'm a nympho? A slut? A whore? A lesbian? Or do yo...
    scene.text(`She laughs. "Which one? Where I'm a nympho? A slut? A whore? A lesbian? Or do you mean that I'm a party girl that spends all her time getting drunk or stoned and wasting her life away? Or maybe how I'm the band whore? You'll need to be a bit more specific there, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Uh… All of it, I guess?" You\'re not sure what else to say, since her reputation is based on all of that and more.');
    scene.text('She shakes her head. "Nope, not even in the slightest. Half of it isn\'t even true anyway, and the stuff that is shouldn\'t be an issue. If I feel like fucking someone, then I do. Just because I like it." she shrugs slightly before continuing. "While I party a lot and screw around, that\'s not what makes me, <b>me</b>. All that is just small parts of me. I do what I want, and that makes <b>me</b> happy. Those who understand that are my friends. The rest… Well, fuck\'em."');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      { label: 'Ask about her getting naked', handler: (st: GameState) => {
    (s as any).anushLimitedQuestions = ((s as any).anushLimitedQuestions ?? 0) - (1);
    scene.text('<center><b>Classroom</b></center>');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/characters/pavlovsk/school/girl/anushka/weed.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
    }
    scene.text('Looking at her naked like this, you just have to ask. "So what\'s the deal with always getting naked? I mean I know of a few times, and if even half the gossip is true, this is a pretty normal state for you." You add a bit of friendly ribbing to your tone.');
    scene.text('Snorting, she seems to think about it before shrugging. "Honestly, I don\'t know. I\'m proud of my body and not ashamed of it. I don\'t see why it should be a big thing anyway. Plus, I like the thrill that you get from doing something that\'s a little taboo, where you can get caught, I just love it! Like knowing the janitor is going to be passing by this room shortly, maybe coming in and catching us without a stitch on…" She bites her lower lip and looks mildly turned on. "I just love the thrill of almost getting caught… or actually getting caught."');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      { label: 'Ask about the band', handler: (st: GameState) => {
    (s as any).anushLimitedQuestions = ((s as any).anushLimitedQuestions ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/\'+iif(rand(0, 1) = 0, \'weed\', \'hiding\')+\'.jpg');
    if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
      ((s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
      qspCall(s, 'calendar', 'add', 'band_practice_event');
      scene.text('"How is the band going?" you ask.');
      scene.text('She nods. "Pretty good, but you should come by and hear us play."');
      scene.text('"Yeah, that sounds great," you reply.');
      scene.text('"Nice. I\'ll text you the next time we practice so you can come check us out. I think, well, hope you\'ll like our music. We\'re not as good as Rad likes to think we are, but we\'re getting there." She adds your phone number to her cell phone so she can text you in the future.');
    } else {
      scene.text('"Is the band still going well?"');
      scene.text('She lights up. "Yeah, we\'re working on a semi permanent gig at a place where we\'ll get to play every week, which would be awesome. You should totally come by to some more of our practices. Better yet, come to one of the shows. You could help out and be our roadie. You know, help us carry the heavy shit, get all set up, then break it all down again."');
      scene.text('You nod. "Sounds good, but let me know the next time. If I have time, I\'ll help out."');
      scene.text('She gives you a quick sideways hug, and you can feel her breast push against the side of your arm. "Sweet. I\'ll text you when we have our next gig or practice. That way you can come listen."');
    }
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      { label: 'Ask if she has a boyfriend', handler: (st: GameState) => {
    (s as any).anushLimitedQuestions = ((s as any).anushLimitedQuestions ?? 0) - (1);
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/\'+iif(rand(0, 1) = 0, \'weed\', \'hiding\')+\'.jpg');
    scene.text('You know that she\'s seeing some guys and girls, so it\'s not really a secret. You\'re not sure if you should even ask, but you\'re curious. "Do you have a boyfriend? Or a girlfriend?"');
    scene.text('She shakes her head. "Nope, not really looking right now. I\'m young and carefree. I plan to, as they say, sow my wild oats while I can. I\'m not against the idea mind you. If that right person came along and just blew me away, then I would likely consider it." She pauses for a second and gives you a wicked grin. "Why do you ask? Are you wanting to fill that <i>slot?</i>"');
    scene.text('The way she says it makes you blush. She leaves no doubt about what she means and makes it sound so dirty, yet so exciting at the same time.');
    if (((s as any).rex_love ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0)  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  (Array.isArray((s as any).pcs_rel_type) ? ((s as any).pcs_rel_type as any[]).indexOf('boyfriend') : -1) >= 0) {
      scene.actions([
        { label: 'I have a boyfriend', handler: (st: GameState) => {
    scene.text('<center><b>Classroom</b></center>');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/characters/pavlovsk/school/girl/anushka/weed.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
    }
    scene.text('"I have a boyfriend you know," you reply.');
    scene.text('She grins at you. "Right. Who are you dating again?"');
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      scene.actions([
        { label: 'Niko', handler: (st: GameState) => {
    scene.text('"Niko," you tell her.');
    // TODO-QSP: dynamic text: She looks at you, concerned. "<<$pcs_nickname>>, he's bad news, and I don't mean...
    scene.text(`She looks at you, concerned. "${((s as any).pcs_nickname ?? 0)}, he's bad news, and I don't mean in the 'fun bad boy' sort of way. I mean he isn't what he seems." Noticing her bad mouthing your boyfriend is clearly annoying you, she holds up her hand. "Hey, it's your life so do what you want. Just… just be careful with him.`);
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      ]);
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 5) {
      scene.actions([
        { label: 'Fedor', handler: (st: GameState) => {
    scene.text('"Fedor," you tell her.');
    if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
      scene.text('She arches a slender brow. "Fedor? Are you serious? After he sucked Vasily\'s dick in front of the whole school?"');
      scene.text('You frown at her. You expected her to be more understanding. "He\'s not gay! He didn\'t have a choice. You think he should have let those criminals chop his fingers off since he couldn\'t pay them?"');
      scene.text('She holds up her hands. "I didn\'t say he was gay. I don\'t care if he\'s gay or bisexual or whatever. I was… Never mind, forget it. If he makes you happy, then I\'m happy for you."');
      scene.text('You nod, accepting her apology of sorts, and you both let the topic drop.');
      scene.actions([
        { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
      ]);
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 6) {
        scene.text('She arches a slender brow. "Fedor? Really? Come on now, if you were going to date a jock why not go for one of the better athletes like Lazar or Ivan? I mean <b>Fedor</b>? He\'s like an Ivan-lite," she says with a giggle.');
        scene.text('You\'re mad at her for talking smack about your boyfriend, but she can\'t keep a straight face and you realize that she\'s just yanking your chain. "Yeah, I like him. He\'s sweet."');
        // TODO-QSP: dynamic text: She snorts. "Yeah sure he is… Uh-huh. Be honest <<$pcs_nickname>>, it's because ...
        scene.text(`She snorts. "Yeah sure he is… Uh-huh. Be honest ${((s as any).pcs_nickname ?? 0)}, it's because he has a really big dick, isn't it?" she asks with a grin while pretending to hold a really big imaginary dick between her legs.`);
        scene.text('You roll your eyes. "I just like him, okay?" As you think about it, you bite your lip and add "Well, maybe it is pretty big…"');
        scene.text('She laughs. "I knew it! Hmm, you think he\'d be up for a threesome?" she asks as she winks and makes a kissy face at you.');
        scene.actions([
          { label: 'Maybe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).anushkaQW ?? {})['fedor_3some'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You blush slightly. "Let me think about it, then I\'ll talk to him. I\'ll let you know."');
    scene.text('She laughs at that. "He\'s a guy. They all want to fuck two girls at once, but sure, let me know." You roll your eyes at her comment, even if it was true and decide to change the subject.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
          { label: 'I\'ll ask him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).anushkaQW ?? {})['fedor_3some'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You can\'t help but grin. You think about it and it does sound fun. "Sure. I\'ll ask him and see what he thinks. It could be fun," you tell her.');
    scene.text('She giggles. "Sex is always fun, unless you\'re doing it wrong. Anyway, I\'m sure if you ask nicely he will agree. He is a guy after all."');
    scene.text('You shake your head. "Yeah, most likely. I\'ll let you know what he says."');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
          { label: 'No, I don\'t think so', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You shake your head. "Sorry, but he\'s all mine," you tell her with a grin.');
    scene.text('She makes a tsking sound. "Too bad. If you change your mind, then let me know." You\'re not sure what else to say, so you change the subject.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
        ]);
      } else {
        scene.text('She arches a slender brow. "Fedor? Really? Come on now, if you were going to date a jock why not go for one of the better athletes like Lazar or Ivan? I mean, <b>Fedor</b>? He\'s like an Ivan-lite," she says with a giggle.');
        scene.text('You\'re mad at her for talking smack about your boyfriend, but she can\'t keep a straight face and you realize she\'s just yanking your chain. "Yeah, I like him. He\'s sweet."');
        // TODO-QSP: dynamic text: She snorts. "Yeah sure he is… Uh-huh. Be honest <<$pcs_nickname>>, it's because ...
        scene.text(`She snorts. "Yeah sure he is… Uh-huh. Be honest ${((s as any).pcs_nickname ?? 0)}, it's because he has a really big dick, isn't it?" she says with a grin while pretending to hold a really big imaginary dick between her legs.`);
        scene.text('You roll your eyes. "I just like him, okay?" Thinking about it, you bite your lip and add "Well, maybe it is pretty big…"');
        // TODO-QSP: dynamic text: She laughs. "I knew it!" She pretends to hump the air doggystyle while talking i...
        scene.text(`She laughs. "I knew it!" She pretends to hump the air doggystyle while talking in a gruff voice trying to sound like Fedor. "Yeah, take my big dick ${((s as any).pcs_nickname ?? 0)}! Take it!" She switches to a girly voice and tries to sound like you. "Yes… yes… Fedor fuck me with your big dick… YES!" She bursts out laughing and you can't help but to join in.`);
        scene.actions([
          { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).kotovLoveQW ?? 0) === 1) {
      scene.actions([
        { label: 'Vitek', handler: (st: GameState) => {
    scene.text('"Vitek," you tell her.');
    scene.text('She just stares at you. "Really? Yeah, I get that he has that bad boy vibe going for him, but you really could do better."');
    scene.text('She notices your facial expression from her bad mouthing your boyfriend, so she holds up her hand. "Hey, it\'s your life, so do what you want, but doesn\'t it feel like you\'re dating Lena at the same time because of how much she talks about how great he is? At least, when she isn\'t bitching about him ruining her sex life. You would think she wants to suck his dick or something," she says with a smirk. You just roll your eyes and she lets it drop.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      ]);
    }
    if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.actions([
        { label: 'Artem', handler: (st: GameState) => {
    scene.text('"Artem," you tell her.');
    scene.text('She arches a slender brow slightly. "Artem? The nerd?" She seems to consider it for a moment. "Well, I guess he is kind of cute, and I bet you have him totally pussy whipped to do whatever you want. Yeah ok, I can see the appeal." she says with a giggle.');
    scene.text('You shake your head at her comment. "He\'s sweet and really nice to me."');
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      scene.text('She snorts. "Yeah, I\'m sure he is… So do you guys dress up and pretend to be elves or something when you fuck?"');
      scene.text('You roll your eyes. "What? Why would you ask that?"');
      scene.text('She grins. "You know that game all the nerds play? D&D, or something like that?"');
      scene.text('You shake your head. "No, we don\'t, because we make love."');
      scene.text('She makes a face like she\'s about to be sick and you shove her slightly. "Cut it out." With that, you both laugh before you talk about some of the dates you and Artem have been on.');
      scene.actions([
        { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
      ]);
    } else {
      scene.text('She snorts. "Yeah, I\'m sure he is, but the real question is - Is he any good at fucking?"');
      scene.text('You roll your eyes at her. "There\'s more to life than just sex you know!" Seeing the look on her face you add, "Okay yeah, he\'s pretty good at it… Good enough anyway."');
      scene.text('She grins. "Oh \'good enough\', huh? I\'m sure that\'s a ringing endorsement that strokes his ego," she says while pretending to stroke her imaginary dick. "Hmm, well maybe I should find out for myself. Do you think he\'d be up for a threesome?" she asks as she winks and makes a kissy face at you.');
      scene.actions([
        { label: 'Maybe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).artemQW ?? {})['nush3some_ask'] = (((s as any).artemQW ?? {})['nush3some_ask'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You blush slightly. "Let me think about it and talk to him. We will see, but I\'ll let you know if we do."');
    scene.text('Anushka laughs at that. "He\'s a guy. They all want to fuck two girls at once, but sure, let me know." You roll your eyes slightly at her comment, even if there\'s probably some truth to it. You decide to change the subject.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
        { label: 'I\'ll ask him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).artemQW ?? {})['nush3some_ask'] = (((s as any).artemQW ?? {})['nush3some_ask'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You can\'t help but grin. You think about it and it does sound fun. "Sure. I\'ll ask him and see what he thinks. He\'s kind of shy though, so I don\'t know what he\'ll say," you tell her.');
    scene.text('She giggles. "He\'s a boy and all boys want to fuck as much as they can. Having sex with two girls at once is like the most common fantasy they all have, and I doubt he\'s any different. Besides, maybe I can teach him a new trick or two for you?" she says in a teasing tone with a wink.');
    scene.text('You shake your head. "I doubt that, but I\'ll ask him."');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
        { label: 'No, I don\'t think so', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You shake your head. "Sorry, but he\'s all mine." you tell her with a grin.');
    scene.text('She makes a tsking sound. "Too bad. If you change your mind, let me know." You\'re not sure what else to say to that, so you change the subject.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).rex_love ?? 0) === 1) {
      scene.actions([
        { label: 'Rex', handler: (st: GameState) => {
    scene.text('"Who?" she asks as she cocks her head slightly. "Wait, isn\'t the the guy that throws parties all the time?"');
    scene.text('You nod. "Yeah, that\'s him."');
    scene.text('She now has an inquisitive look on her face. "How did you meet him? Isn\'t he a few years older than you?" she asks.');
    scene.text('You smile at her. "I was invited to his party," you tell her, then add "He\'s friends with my sister. She invited me to his party and that\'s where we met." You talk about the night you met him and your first date.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      ]);
    }
    (s as any).i = 0;
    // TODO-QSP: :lover_looop
    if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
        // TODO-QSP: dynamic 'act ''<<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''anushka'', ''tell_about_generic_boyfrein...
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'lover_looop'
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Maybe', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/scnakiss.jpg');
    scene.text('You feel put on the spot since that\'s not what you meant. Or maybe subconsciously you do mean it, which is why you asked. Either way, a part of you would really like to be Anushka\'s girlfriend. "I guess… maybe. I have been thinking about it a little…"');
    scene.text('With your eyes downcast, you don\'t see her reaction and you\'re not sure you want to know it. However, you feel her place a finger under your chin so you\'re looking at her. Her face is mere inches from yours and you can feel her breath on your face. You\'re looking into her eyes when the two of you suddenly start kissing. A long, deep passionate kiss with just a hint of lust to it. You don\'t know if you kissed her or she kissed you, but it sure is amazing.');
    scene.text('Finally, the kiss ends and she leans back and sucks on her lower lip while looking at you before she gives you a smirking smile. "Like I said, I\'m not looking, but I\'m not against it. Let\'s just see where the ride takes us." Before things can go further, she asks about the homework from one of your classes, so you get it. She doesn\'t want to rush things, but she isn\'t saying no either.');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
    scene.text('You shake your head because this conversation really went off the rails and is not at all what you meant. "No, I mean I like you, but not like that. Not that…" She reaches up and places a finger over your lips to stop you from going on. She seems amused by your response.');
    scene.text('"It\'s fine. I\'m just yanking your chain. I like things just as how they are too."');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).anushLimitedQuestions ?? 0) <= 0) {
      scene.actions([
        { label: 'You hear that?', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 3, 'exhibitionism');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/hallcheck.jpg');
    scene.text('You\'re about to say something when she raises her hand to stop you. "You hear that?"');
    scene.text('You listen, but don\'t hear anything. "No, I don\'t hear anything."');
    scene.text('She grins at you. "Yeah, that means the janitor\'s moved on, so we can head out. Come on, let\'s go." She gets up and heads for the door. She opens it slowly and looks out both ways before she steps out and hurries down the hall with you following just behind her.');
    // TODO-QSP: dynamic text: The two of you quickly make your way back to the library where you stashed your ...
    scene.text(`The two of you quickly make your way back to the library where you stashed your clothes and start to get dressed again. Just as the two of you get your clothes back on, the bell that signals detention is over starts ringing. She looks at you and smiles. "Perfect timing as always. I'll see you later ${((s as any).pcs_nickname ?? 0)}, unless you want to come over?"`);
    scene.actions([
      { label: 'Can\'t today', goto: ['gschool_grounds', 'main'] },
      { label: 'Go with Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/walk_homeg1.jpg');
    scene.text('The two of you walk back to the apartment complex and to her building. You go up to the fourth floor where she leads you into her family\'s apartment and takes you into the living room.');
    scene.actions([
      { label: 'Continue', goto: ['anushapt', 'firstvisit'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterTellAboutGenericBoyfreind(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Classroom</b></center>');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/characters/pavlovsk/school/girl/anushka/weed.jpg');
  } else {
    scene.img('images/characters/pavlovsk/school/girl/anushka/hiding.jpg');
  }
  scene.text('"I have a boyfriend you know," you reply.');
  scene.text('She grins at you. "Right. Who are you dating again?"');
  // TODO-QSP: dynamic text: "<<$ARGS[1]>>," you tell her.
  scene.text(`"${((s as any).locArgs?.[1] ?? 0)}," you tell her.`);
  scene.text('"Who?" She asks as she cocks her head slightly.');
  scene.text('You shake your head slightly. "You\'ve never met him. I just met him."');
  scene.text('She smiles. "Just some guy you met, huh?" You laugh and start telling her about him.');
  scene.actions([
    { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
  ]);
  scene.build();
}

function enterTellingMarrigeDreams(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Classroom</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/\'+iif(rand(0, 1) = 0, \'weed\', \'hiding\')+\'.jpg');
  // TODO-QSP: dynamic text: You sigh in a way only those in love can sigh. "Hopefully <<$ARGS[1]>> and I can...
  scene.text(`You sigh in a way only those in love can sigh. "Hopefully ${((s as any).locArgs?.[1] ?? 0)} and I can get married soon."`);
  scene.text('She gives you a somewhat skeptical look before shrugging. "Well, best of luck with that."');
  scene.text('You\'re not sure what more to say on the topic.');
  scene.actions([
    { label: 'Talk about something else', goto: ['anushka', 'chatwhilewaiting'] },
  ]);
  scene.build();
}

function enterMeetAfterSchool(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/walk_homeg1.jpg');
  scene.text('You find Anushka waiting for you outside the school. "You ready?" she asks, and you nod your head. The two of you walk back to the apartment complex and to her building. You go up to the fourth floor where she leads you into her family\'s apartment and takes you into the living room.');
  scene.actions([
    { label: 'Continue', goto: ['anushapt', 'firstvisit'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'plan':
      enterPlan(s, scene);
      break;
    case 'Her turn':
      enterHerTurn(s, scene);
      break;
    case 'wedgie fight':
      enterWedgieFight(s, scene);
      break;
    case 'temptation':
      enterTemptation(s, scene);
      break;
    case 'naked':
      enterNaked(s, scene);
      break;
    case 'chatwhilewaiting':
      enterChatwhilewaiting(s, scene);
      break;
    case 'tell_about_generic_boyfreind':
      enterTellAboutGenericBoyfreind(s, scene);
      break;
    case 'telling_marrige_dreams':
      enterTellingMarrigeDreams(s, scene);
      break;
    case 'meet_after_school':
      enterMeetAfterSchool(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const anushka: LocationDef = {
  name: 'anushka',
  title: 'Detention',
  region: 'other',
  enter: enter,
};
