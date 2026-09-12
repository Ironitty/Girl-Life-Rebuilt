import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterScheduler(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['maya'] = '';
  if (((s as any).ballet_first_visit ?? 0) === 1) {
    if (((s as any).hour ?? 0) === 6) {
      if (!(s as any).maya) (s as any).maya = {}; (s as any).maya['home'] = 1;
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['maya'] = 'bedroom';
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16) {
        if (!(s as any).maya) (s as any).maya = {}; (s as any).maya['home'] = 0;
        if (((s as any).hour ?? 0) === 12) {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['maya'] = 'living_room';
        } else {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['maya_room'] = 'shops';
        }
      } else {
        if (((s as any).hour ?? 0)=== 17  &&  ((s as any).hour ?? 0) < 18) {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['maya'] = 'kitchen';
        } else {
          if (((s as any).hour ?? 0) === 18  &&  ((s as any).hour ?? 0) < 22) {
            (s as any).temp_locat_maya_roll = Math.floor(Math.random() * 2) + 1;
            if (((s as any).temp_locat_maya_roll ?? 0) === 1) {
              if (!(s as any).maya) (s as any).maya = {}; (s as any).maya['home'] = 1;
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['maya'] = 'living_room';
            } else {
              if (!(s as any).maya) (s as any).maya = {}; (s as any).maya['home'] = 0;
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['maya'] = 'dance_school';
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGrave(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A274']}/274-1.jpg`);
  // TODO-QSP: dynamic text: <<$npc_firstname['A274']>> enters your room, "<<$pcs_nickname>>, do you have som...
  scene.text(`${((s as any).npc_firstname ?? 0)?.['A274']} enters your room, "${((s as any).pcs_nickname ?? 0)}, do you have some free time?"`);
  // TODO-QSP: dynamic text: "Sure, what do you need, <<$npc_firstname['A274']>>? Some more practice?"
  scene.text(`"Sure, what do you need, ${((s as any).npc_firstname ?? 0)?.['A274']}? Some more practice?"`);
  // TODO-QSP: dynamic text: "I need to go somewhere, but I don't want to go alone," <<$npc_firstname['A274']...
  scene.text(`"I need to go somewhere, but I don't want to go alone," ${((s as any).npc_firstname ?? 0)?.['A274']} says, avoiding the question, her eyes looking at the floor.`);
  scene.text('"Are you okay?" you ask, concerned about her. You briefly think you saw the pain in her eyes before she looked away, but you remain unsure.');
  scene.text('"I just need to go to the graveyard tonight. It\'s something I need to do. I will understand if you don\'t want to come." Something in her voice leaves you puzzled, but you\'re not sure what it is.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the graveyard', handler: (st: GameState) => {
    // TODO-QSP: mayaqw['grave'] = 2
  }, goto: ['npc_274_init', 'graveyard_memorial'] },
    { label: 'Say sorry, you\'re studying', handler: (st: GameState) => {
    // TODO-QSP: mayaqw['grave'] = 1
    // TODO-QSP: npc_trust['A274'] -= 5
  }, goto: ['pushkin_ballet_res', 'bedroom'] },
  ]);
  scene.build();
}

function enterGraveyardMemorial(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = 'Pushkin Graveyard';
  scene.img('' + qspUntranslated(s, "setloc['imagepath']>", { location: "npc_274_init" }) + 'ballet_events/graveyard.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  // TODO-QSP: dynamic text: You agree to <<$npc_firstname['A274']>>'s strange request. You grab your coat be...
  scene.text(`You agree to ${((s as any).npc_firstname ?? 0)?.['A274']}'s strange request. You grab your coat before the two of you head out of your bedroom. You take the short walk from your residence to the graveyard, a quiet location. ${((s as any).npc_firstname ?? 0)?.['A274']} has been quiet during your walk, totally unlike her usual boisterous self. However, you're unsure how to break the silence when she touches your arm.`);
  // TODO-QSP: dynamic text: You pause and look towards her. "Thank you, <<$pcs_nickname>>, for coming with m...
  scene.text(`You pause and look towards her. "Thank you, ${((s as any).pcs_nickname ?? 0)}, for coming with me. You're probably wondering why we're here." Grief fills her eyes, showing the pain that she's been holding back. ${((s as any).npc_firstname ?? 0)?.['A274']} starts to walk again until you come to a grave.`);
  // TODO-QSP: dynamic text: Standing at the grave, you see the name Anitchka Semionova engraved on the grave...
  scene.text(`Standing at the grave, you see the name Anitchka Semionova engraved on the gravestone. You realize that this must be her mother who died 6 years ago, looking at the dates. You look at ${((s as any).npc_firstname ?? 0)?.['A274']} and see the tears start to form in her eyes.`);
  if (((s as any).locArgs?.[1] ?? 0) === 'graveyard_wait') {
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You pick up your coat and start walking to the bench near the main entrance, bru...
    scene.text(`You pick up your coat and start walking to the bench near the main entrance, brushing the grass and leaves from your coat. You sit down and look towards ${((s as any).npc_firstname ?? 0)?.['A274']} but can't see her. You pull out your phone and play a game to distract yourself.`);
    // TODO-QSP: dynamic text: You look up, hearing footsteps, and it's <<$npc_firstname['A274']>> coming back....
    scene.text(`You look up, hearing footsteps, and it's ${((s as any).npc_firstname ?? 0)?.['A274']} coming back. Her eyes were red and puffy from crying. You stand up to meet her, "You look a fright, ${((s as any).npc_firstname ?? 0)?.['A274']}. Let me fix your makeup."`);
    // TODO-QSP: dynamic text: Before she can say anything, you pull her to the bench and start cleaning her up...
    scene.text(`Before she can say anything, you pull her to the bench and start cleaning her up. As you quickly finish the touch-up, ${((s as any).npc_firstname ?? 0)?.['A274']} just sits there, lost in her own world.`);
    // TODO-QSP: dynamic text: "There, that's better. I don't have all my makeup with me, but at least you're p...
    scene.text(`"There, that's better. I don't have all my makeup with me, but at least you're presentable now," you give a small laugh and smile to show you're joking, and she laughs with you. The first genuine sign all evening that she's coming out of whatever bothers her is, "Thank you, ${((s as any).pcs_nickname ?? 0)}. I don't know if I could have done this without you.`);
    // TODO-QSP: dynamic text: "Don't worry about it," you reply. "Come on, we need to get back, or we'll get i...
    scene.text(`"Don't worry about it," you reply. "Come on, we need to get back, or we'll get into trouble with ${((s as any).npc_firstname ?? 0)?.['A286']}!" ${((s as any).npc_firstname ?? 0)?.['A274']} gives you a quick hug in gratitude, and somehow her hand finds yours as you make your way back to your residence.`);
    scene.actions([
      { label: 'Head back', goto: ['npc_274_init', 'post_grave'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Hug <<$npc_firstname[\'A274\']>>', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A274', 'like');
    if (!(s as any).npc_trust) (s as any).npc_trust = {}; (s as any).npc_trust['A274'] = ((s as any).npc_trust['A274'] ?? 0) + (5);
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You step in, pulling her close to you. You smell the soft, floral fragrance she ...
    scene.text(`You step in, pulling her close to you. You smell the soft, floral fragrance she wears, and she starts to cry. You just hold her waiting for the storm of tears to pass. You reach into your purse to take out a tissue and hand it to ${((s as any).npc_firstname ?? 0)?.['A274']}.`);
    scene.actions([
      { label: 'Talk to <<$npc_firstname[\'A274\']>>', handler: (st: GameState) => {
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: <<$npc_firstname['A274']>> gives you a warm smile as she takes the tissue. "Sorr...
    scene.text(`${((s as any).npc_firstname ?? 0)?.['A274']} gives you a warm smile as she takes the tissue. "Sorry for being such a mess, ${((s as any).pcs_nickname ?? 0)}. This is why I dance. I owe it to my mum. She was a ballet dancer herself, and I inherited her talent."`);
    // TODO-QSP: dynamic text: You squeeze her hand to encourage her. Then, you put your coat on the ground for...
    scene.text(`You squeeze her hand to encourage her. Then, you put your coat on the ground for both of you to sit on. "Take your time, ${((s as any).npc_firstname ?? 0)?.['A274']}", you coax her softly.`);
    // TODO-QSP: dynamic text: "I'm not usually this bad," <<$npc_firstname['A274']>> replies. "It's just that ...
    scene.text(`"I'm not usually this bad," ${((s as any).npc_firstname ?? 0)?.['A274']} replies. "It's just that getting a place on this course is a major achievement for me. Do you mind and give me a moment alone, please?" She looks vulnerable as she makes the request.`);
    // TODO-QSP: dynamic text: "Sure, <<$npc_firstname['A274']>>. I'll be beside those trees."
    scene.text(`"Sure, ${((s as any).npc_firstname ?? 0)?.['A274']}. I'll be beside those trees."`);
    scene.actions([
      { label: 'Wait', goto: ['npc_274_init', 'graveyard_memorial', '\'graveyard_wait\''] },
    ]);
  } },
    ]);
  } },
    { label: 'Talk to <<$npc_firstname[\'A274\']>>', handler: (st: GameState) => {
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: <<$npc_firstname['A274']>> gives you a warm smile as she takes the tissue. "Sorr...
    scene.text(`${((s as any).npc_firstname ?? 0)?.['A274']} gives you a warm smile as she takes the tissue. "Sorry for being such a mess, ${((s as any).pcs_nickname ?? 0)}. This is why I dance. I owe it to my mum. She was a ballet dancer herself, and I inherited her talent."`);
    // TODO-QSP: dynamic text: You squeeze her hand to encourage her. Then, you put your coat on the ground for...
    scene.text(`You squeeze her hand to encourage her. Then, you put your coat on the ground for both of you to sit on. "Take your time, ${((s as any).npc_firstname ?? 0)?.['A274']}", you coax her softly.`);
    // TODO-QSP: dynamic text: "I'm not usually this bad," <<$npc_firstname['A274']>> replies. "It's just that ...
    scene.text(`"I'm not usually this bad," ${((s as any).npc_firstname ?? 0)?.['A274']} replies. "It's just that getting a place on this course is a major achievement for me. Do you mind and give me a moment alone, please?" She looks vulnerable as she makes the request.`);
    // TODO-QSP: dynamic text: "Sure, <<$npc_firstname['A274']>>. I'll be beside those trees."
    scene.text(`"Sure, ${((s as any).npc_firstname ?? 0)?.['A274']}. I'll be beside those trees."`);
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You pick up your coat and start walking to the bench near the main entrance brus...
    scene.text(`You pick up your coat and start walking to the bench near the main entrance brushing the grass and leaves from your coat. You sit down and look towards ${((s as any).npc_firstname ?? 0)?.['A274']} but can't see her. You pull out your phone and play a game to distract yourself.`);
    // TODO-QSP: dynamic text: You look up, hearing footsteps, and it's <<$npc_firstname['A274']>> coming back....
    scene.text(`You look up, hearing footsteps, and it's ${((s as any).npc_firstname ?? 0)?.['A274']} coming back. Her eyes were red and puffy from crying. You stand up to meet her, "You look a fright, ${((s as any).npc_firstname ?? 0)?.['A274']}. Let me fix your makeup."`);
    // TODO-QSP: dynamic text: Before she can say anything, you pull her to the bench and start cleaning her up...
    scene.text(`Before she can say anything, you pull her to the bench and start cleaning her up. As you quickly finish the touch-up, ${((s as any).npc_firstname ?? 0)?.['A274']} just sits there, lost in her own world.`);
    // TODO-QSP: dynamic text: "There, that's better. I don't have all my makeup with me, but at least you're p...
    scene.text(`"There, that's better. I don't have all my makeup with me, but at least you're presentable now," you give a small laugh and smile to show you're joking, and she laughs with you. The first genuine sign all evening that she's coming out of whatever bothers her is, "Thank you, ${((s as any).pcs_nickname ?? 0)}. I don't know if I could have done this without you.`);
    // TODO-QSP: dynamic text: "Don't worry about it," you reply. "Come on, we need to get back, or we'll get i...
    scene.text(`"Don't worry about it," you reply. "Come on, we need to get back, or we'll get into trouble with ${((s as any).npc_firstname ?? 0)?.['A286']}!"`);
    scene.actions([
      { label: 'Head back', goto: ['npc_274_init', 'post_grave'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPostGrave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mayaqw ?? 0)?.['grave'] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('<center><h2>Residential Bedroom</h2></center>');
    scene.img('images/locations/pushkin/ballet_residence/bedroom.jpg');
    // TODO-QSP: dynamic text: <<$npc_firstname['A274']>> enters your room, and you can see she's been crying. ...
    scene.text(`${((s as any).npc_firstname ?? 0)?.['A274']} enters your room, and you can see she's been crying. "${((s as any).pcs_nickname ?? 0)}, do you have a moment?"`);
    scene.text('"Sure," you reply, wondering if you will get answers as to why she\'s has been crying. She sits on your bed and stays silent for a few moments.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, how much do you know about me?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, how much do you know about me?"`);
    scene.text('"Nothing, we only just met this week!" you say.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: mayaqw['grave'] = 3
  }, goto: ['npc_274_init', 'post_grave'] },
    ]);
  }
  if (((s as any).mayaqw ?? 0)?.['grave'] === 2) {
    qspCall(s, 'npc_relationship', 'modify', 'A274', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.text('<center><h2>Residential Bedroom</h2></center>');
    scene.img('images/locations/pushkin/ballet_residence/bedroom.jpg');
    // TODO-QSP: dynamic text: You enter your room together and see that <<$npc_firstname['A274']>> is still su...
    scene.text(`You enter your room together and see that ${((s as any).npc_firstname ?? 0)?.['A274']} is still subdued. "You want some tea ${((s as any).npc_firstname ?? 0)?.['A274']}?" she looks up and nods before she starts dabbing her eyes with the handkerchief. `);
    scene.actions([
      { label: 'Go to the kitchen', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/ballet_events/gasha_raid.jpg');
    scene.text('You quickly leave the room and bump into Gasha doing a snack raid. She jumps as she sees you, almost dropping her loot. She has a guilty expression. You\'re about to say something, but she\'s off before you can get a word out, leaving you to shake your head in amusement.');
    scene.actions([
      { label: 'Make tea', handler: (st: GameState) => {
    scene.text('<center><h2>Residential Kitchen</h2></center>');
    scene.img('images/locations/pushkin/ballet_residence/kitchen.jpg');
    // TODO-QSP: dynamic text: You make some strong tea and head back to your room. <<$npc_firstname['A274']>> ...
    scene.text(`You make some strong tea and head back to your room. ${((s as any).npc_firstname ?? 0)?.['A274']} is laying on your bed with her eyes closed.`);
    // TODO-QSP: dynamic text: You approach her and lead down to touch her hand. "<<$npc_firstname['A274']>>, y...
    scene.text(`You approach her and lead down to touch her hand. "${((s as any).npc_firstname ?? 0)?.['A274']}, you awake?"`);
    // TODO-QSP: dynamic text: She opens her eyes and gives you a small smile, "Yes, <<$pcs_nickname>>. You bro...
    scene.text(`She opens her eyes and gives you a small smile, "Yes, ${((s as any).pcs_nickname ?? 0)}. You brought the tea, thank you. You've been too good to me tonight."`);
    // TODO-QSP: dynamic text: <<$npc_firstname['A274']>> settles down and starts to talk. "<<$pcs_nickname>>, ...
    scene.text(`${((s as any).npc_firstname ?? 0)?.['A274']} settles down and starts to talk. "${((s as any).pcs_nickname ?? 0)}, how much do you know about me?"`);
    scene.text('"Nothing, we only just meet this week!" you reply, giving a small laugh.');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    // TODO-QSP: mayaqw['grave'] = 4
  }, goto: ['npc_274_init', 'post_grave'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mayaqw ?? 0)?.['grave'] >= 3) {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    if (((s as any).mayaqw ?? 0)?.['grave'] === 3) {
      scene.text('<center><h2>Residential Bedroom</h2></center>');
      scene.img('images/locations/pushkin/ballet_residence/bedroom.jpg');
    } else {
      scene.text('<center><h2>Residential Bedroom</h2></center>');
      scene.img('images/locations/pushkin/ballet_events/tea_bed.jpg');
    }
    scene.text('"Yeah, that\'s true. Sorry, I\'m used to everyone knowing who I am. You\'re the first person that treats me like a person rather than some fragile piece of China."');
    scene.text('"Why?" you ask.');
    scene.text('"I\'m the daughter of Anitchka Semionova."');
    scene.text('"Wait," you ask in surprise. "<i>THAT</i> Anitchka Semionova?" You remember the stories you heard when you attended dance school about her career and how wonderful she was as a dancer and that she was a local celebrity.');
    // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>. That Anitchka Semionova, she was my mother. Now you und...
    scene.text(`"Yes, ${((s as any).pcs_nickname ?? 0)}. That Anitchka Semionova, she was my mother. Now you understand, I've always had to live in her shadow."`);
    scene.text('"My mother was a freelance ballet coryphée and was touring when she was given the news of terminal cancer." she starts crying again. You draw her into your arms, comforting her, and she rests her head on your shoulder.');
    scene.text('"It\'s okay, she\'s been dead six years, but being at this school reminded me of how much she\'d have been proud of me and getting a place on this course." She dabs the tears from her face, looking down at the floor.');
    scene.text('"It\'s getting late, and we\'ve got a lot to prepare for. I should be going," she says in a soft voice.');
    // TODO-QSP: dynamic text: "Are you sure, <<$npc_firstname['A274']>>?"
    scene.text(`"Are you sure, ${((s as any).npc_firstname ?? 0)?.['A274']}?"`);
    scene.text('"Yes, thank you for the tea." She gives you the first warm smile of the evening.');
    scene.text('"Any time. You know where you can find me if you need to talk."');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>." With that, she slips quietly out of the room, lo...
    scene.text(`"Thank you, ${((s as any).pcs_nickname ?? 0)}." With that, she slips quietly out of the room, lost in her thoughts, leaving you to your own about the evening's revelations.`);
    scene.actions([
      { label: 'Watch', goto: ['pushkin_ballet_res', 'bedroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSummerSchool(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletEv ?? 0)?.['trigger'] === 'late') {
    if (((s as any).mayaqw ?? 0)?.['grave'] === 4) {
      (s as any).mood = ((s as any).mood ?? 0) + (10);
      scene.img(`${((s as any).npc_img_path ?? 0)?.['A274']}/274-1.jpg`);
      // TODO-QSP: dynamic text: <<$npc_firstname['A274']>> is bubbling with enthuasism when she finds you runnin...
      scene.text(`${((s as any).npc_firstname ?? 0)?.['A274']} is bubbling with enthuasism when she finds you running behind schedule, "Come on ${((s as any).pcs_nickname ?? 0)} you're going to be late!"`);
      // TODO-QSP: dynamic text: Her mood is infectious and soon you quickly grab your dance bag and head to scho...
      scene.text(`Her mood is infectious and soon you quickly grab your dance bag and head to school with ${((s as any).npc_firstname ?? 0)?.['A274']}.`);
      scene.actions([
        { label: 'Go to School', goto: ['pushkin_ballet_class', 'start'] },
      ]);
    } else {
      scene.img(`${((s as any).npc_img_path ?? 0)?.['A286']}/286.jpg`);
      // TODO-QSP: dynamic text: <<$npc_firstname['A286']>> finds you running late in your morning preparations, ...
      scene.text(`${((s as any).npc_firstname ?? 0)?.['A286']} finds you running late in your morning preparations, "Come on ${((s as any).pcs_nickname ?? 0)}, you're going to be late!"`);
      scene.actions([
        { label: 'Go to School', goto: ['pushkin_ballet_class', 'start'] },
      ]);
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'piano') {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: As you pass through the common room you are drawn to the conservatoire by the so...
    scene.text(`As you pass through the common room you are drawn to the conservatoire by the sound of piano music. You enter the room and see a group of girls drawn from various years gathered around the baby grand piano with a young teenager doing some warm-up exercises on the piano. There is some laughter from the girls when one of the violinists starts to do some comedic improvisation. Then you notice ${((s as any).npc_firstname ?? 0)?.['A274']} step up to the young pianist and quietly say something to her, and when she shakes her head she steps aside to let ${((s as any).npc_firstname ?? 0)?.['A274']} sit at the piano. ${((s as any).npc_firstname ?? 0)?.['A274']} performs some warm up exercises and then settles into playing the piano. It takes a few moments for you to recognise the piece but the name eludes you until another girl starts to sing the lyrics and you realise ${((s as any).npc_firstname ?? 0)?.['A274']}'s playing ‘My Immortal’. As they reach the chorus a few more girls start to join in singing the song, but after a few bars of the chorus ${((s as any).npc_firstname ?? 0)?.['A274']} abruptly stops and dashes from the room, surprising everyone at her abrupt departure.`);
    scene.actions([
      { label: 'Follow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: As you make your way through the girls, you meet <<$npc_firstname['A286']>> who ...
    scene.text(`As you make your way through the girls, you meet ${((s as any).npc_firstname ?? 0)?.['A286']} who is there to stop you.`);
    // TODO-QSP: dynamic text: “Don't <<$pcs_nickname>>, she won't appreciate it.” <<$npc_firstname['A286']>>'s...
    scene.text(`“Don't ${((s as any).pcs_nickname ?? 0)}, she won't appreciate it.” ${((s as any).npc_firstname ?? 0)?.['A286']}'s tone is firm and she's insistent that you listen to her.`);
    scene.text('“Why? Is she OK?”');
    scene.text('“You know she lost her mother, and she has never let her go. Come with me, I\'ll explain downstairs” she says in a voice so quiet only you can hear her.');
    // TODO-QSP: dynamic text: You are led downstairs to where <<$npc_firstname['A286']>> lives in the warden's...
    scene.text(`You are led downstairs to where ${((s as any).npc_firstname ?? 0)?.['A286']} lives in the warden's apartment. As you enter you are greeted by a grey cat who meows a greeting to ${((s as any).npc_firstname ?? 0)?.['A286']} and starts to entwine himself between her legs.`);
    // TODO-QSP: dynamic text: “Meet Fyodor. He likes to think he is an opera singer with his meows.” <<$npc_fi...
    scene.text(`“Meet Fyodor. He likes to think he is an opera singer with his meows.” ${((s as any).npc_firstname ?? 0)?.['A286']} says with a small smile.`);
    scene.text('“Fyodor?” You ask.');
    scene.text('“Yes, after Fyodor Shalyapin, the great opera singer.”');
    // TODO-QSP: dynamic text: You continue to look blankly at <<$npc_firstname['A286']>>. 
    scene.text(`You continue to look blankly at ${((s as any).npc_firstname ?? 0)?.['A286']}. `);
    // TODO-QSP: dynamic text: “Never mind, you obviously missed that part of your education. We are here to ta...
    scene.text(`“Never mind, you obviously missed that part of your education. We are here to talk about ${((s as any).npc_firstname ?? 0)?.['A274']}. Would you like some tea?”`);
    // TODO-QSP: dynamic text: “Now, where to start?” <<$npc_firstname['A286']>> muses to herself as she stares...
    scene.text(`“Now, where to start?” ${((s as any).npc_firstname ?? 0)?.['A286']} muses to herself as she stares out through the apartment window composing her thoughts. As you sit waiting Fyodor comes over to you and starts to rub against your legs. You reach down and start to scritch him behind the ears, and he starts to purr loudly.`);
    if (((s as any).mayaqw ?? 0)?.['grave'] >= 3) {
      // TODO-QSP: dynamic text: “You know <<$npc_firstname['A274']>> lost her mother six years ago? I saw you le...
      scene.text(`“You know ${((s as any).npc_firstname ?? 0)?.['A274']} lost her mother six years ago? I saw you leave with her to visit her grave.”`);
      scene.text('“Yes, I went with her but I am not sure why she asked me?”');
    } else {
      // TODO-QSP: dynamic text: “I am not sure how to put this, but <<$npc_firstname['A274']>> lost her mother s...
      scene.text(`“I am not sure how to put this, but ${((s as any).npc_firstname ?? 0)?.['A274']} lost her mother six years ago. She often plays the piano as a way to escape her grief.”`);
      scene.text('“You said her mother died six years ago? Isn\'t that a long time?”');
      // TODO-QSP: dynamic text: “Yes, but <<$npc_firstname['A274']>> and her mother had a falling out over what ...
      scene.text(`“Yes, but ${((s as any).npc_firstname ?? 0)?.['A274']} and her mother had a falling out over what career ${((s as any).npc_firstname ?? 0)?.['A274']} wanted to follow, and when her mother died suddenly she never got the chance to repair the rift that had opened between them.”`);
    }
    // TODO-QSP: dynamic text: “But why was <<$npc_firstname['A274']>> chosen as my dance partner?”
    scene.text(`“But why was ${((s as any).npc_firstname ?? 0)?.['A274']} chosen as my dance partner?”`);
    if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
      scene.text('“I am not sure why, but I think you are more alike than you realise. You both have a passion for dance and the arts. Your dance styles are complementary, which is why she was chosen as your partner.”');
    } else {
      // TODO-QSP: dynamic text: “You both have an otherworldly grace to your dance style. You are very alike in ...
      scene.text(`“You both have an otherworldly grace to your dance style. You are very alike in that you draw the audience's focus whenever you dance. It's almost magical how you both do this, and when you both dance together it's both entrancing and captivating. You are both destined to be great ballerinas, but you still have a lot to learn. However, with ${((s as any).npc_firstname ?? 0)?.['A274']} you will catch up quickly if you apply yourself.”`);
    }
    // TODO-QSP: dynamic text: “I think when you start performing with <<$npc_firstname['A274']>> or solo your ...
    scene.text(`“I think when you start performing with ${((s as any).npc_firstname ?? 0)?.['A274']} or solo your performances will be in great demand, and if you ever need support the School will be here for you, just like ${((s as any).npc_firstname ?? 0)?.['A274']} when she lost her mother. I will not go into her story but suffice it to say the School has a vested interest in ${((s as any).npc_firstname ?? 0)?.['A274']}. She had all but given up on being a ballet dancer and instead she wanted to become a gymnast, but after her mother died she almost gave up everything until we encouraged her to become a ballerina again. Her grandparents travel in Europe, they have little contact with ${((s as any).npc_firstname ?? 0)?.['A274']}, so we made her a ward.”`);
    scene.text('“What has this to do with me and what happened to her father?”');
    // TODO-QSP: dynamic text: “<<$npc_firstname['A274']>> may learn to trust you, and we would like you to res...
    scene.text(`“${((s as any).npc_firstname ?? 0)?.['A274']} may learn to trust you, and we would like you to respect that trust. You are one of the few people that she seems to be opening up to.” There is a hint of a threat in ${((s as any).npc_firstname ?? 0)?.['A286']}'s voice but you are unsure why. “We still do not know who ${((s as any).npc_firstname ?? 0)?.['A274']}'s father is. We have not been able to find out who, but the little we do know leads us to suspect he was a composer that Anitchka fell in love with when she was touring. Unfortunately we have no details or other information, despite our best efforts.”`);
    // TODO-QSP: dynamic text: “OK, but I am not sure about <<$npc_firstname['A274']>> – or even if a friendshi...
    scene.text(`“OK, but I am not sure about ${((s as any).npc_firstname ?? 0)?.['A274']} – or even if a friendship will develop?”`);
    scene.text('“If it does, it does, but remember she is our ward and under our protection if any harm comes to her.”');
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      // TODO-QSP: dynamic text: “One other bit of advice, be wary of <<$npc_firstname['A283']>>. He has taken a ...
      scene.text(`“One other bit of advice, be wary of ${((s as any).npc_firstname ?? 0)?.['A283']}. He has taken a personal interest in you both.”`);
      scene.text('“Why?”');
      // TODO-QSP: dynamic text: “It's rare for <<$npc_firstname['A283']>> to take an interest in students, espec...
      scene.text(`“It's rare for ${((s as any).npc_firstname ?? 0)?.['A283']} to take an interest in students, especially those who have the most potential. Since he was injured, he has become increasingly bitter over the years – I have said too much, just be aware that his attention might not be in your own or ${((s as any).npc_firstname ?? 0)?.['A274']}'s best interests.” With this ${((s as any).npc_firstname ?? 0)?.['A286']} stands up, and you get the hint it's time to leave.`);
    } else {
      // TODO-QSP: dynamic text: “<<$npc_firstname['A274']>> has to deal with a lot of grief, and remember she's ...
      scene.text(`“${((s as any).npc_firstname ?? 0)?.['A274']} has to deal with a lot of grief, and remember she's been made a ward of the school because of her mother.”`);
      scene.text('“Her mother?”');
      scene.text('“Yes, but it\'s not my place to say why. Please leave her be as she won\'t appreciate you intruding into her privacy. I know you have been made her dance partner, but let her open up in her own time if she wants to.”');
    }
    // TODO-QSP: dynamic text: With that <<$npc_firstname['A286']>> moves away from the doorway and you are lef...
    scene.text(`With that ${((s as any).npc_firstname ?? 0)?.['A286']} moves away from the doorway and you are left wondering what just occurred, and why Bronya was watching you in the first place.`);
    scene.actions([
      { label: 'Accept cup of tea', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: “Thank you <<$npc_firstname['A286']>>, just milk please. You wait a few moments ...
    scene.text(`“Thank you ${((s as any).npc_firstname ?? 0)?.['A286']}, just milk please. You wait a few moments as ${((s as any).npc_firstname ?? 0)?.['A286']} busies herself with pouring you a cup of tea.”`);
  } },
      { label: 'Decline cup of tea', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You hold up your hand to decline the offer of tea and give a small smile to <<$n...
    scene.text(`You hold up your hand to decline the offer of tea and give a small smile to ${((s as any).npc_firstname ?? 0)?.['A286']}. “No thanks, I'm fine thank you.”`);
  } },
      { label: 'Return to your room', goto: ['pushkin_ballet_res', 'bedroom'] },
    ]);
  } },
      { label: 'Stay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You watch <<$npc_firstname['A274']>> dash out of the conservatoire leaving you w...
    scene.text(`You watch ${((s as any).npc_firstname ?? 0)?.['A274']} dash out of the conservatoire leaving you wondering what triggered her flight from the room. Another student sits on the piano stool and you recognise the distinctive notes of Zombie. You sit down for a few minutes listening to the girl playing the piece. As you turn to leave a singer steps up and starts singing to the track.`);
    scene.actions([
      { label: 'Return to your room', goto: ['pushkin_ballet_res', 'bedroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'scheduler':
      enterScheduler(s, scene);
      break;
    case 'grave':
      enterGrave(s, scene);
      break;
    case 'graveyard_memorial':
      enterGraveyardMemorial(s, scene);
      break;
    case 'post_grave':
      enterPostGrave(s, scene);
      break;
    case 'summer_school':
      enterSummerSchool(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npc_274_init: LocationDef = {
  name: 'npc_274_init',
  title: '"Are you okay?" you ask, concerned about her. You briefly th',
  region: 'other',
  enter: enter,
};
