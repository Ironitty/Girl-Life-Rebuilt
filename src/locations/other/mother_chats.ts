import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterRapeTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).rape_talk_mom = ((s as any).rape_count ?? 0);
  if ((!((s as any).motherKnowRaped ?? 0))) {
    (s as any).motherKnowRaped = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/hug_sad1.jpg');
  // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>>…" you say to get her attention. However, before she ca...
  scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']}…" you say to get her attention. However, before she can respond or even turn to look at you, the emotions and trauma take over. "I've been raped!" You barely manage to say it before the flood gates open and you're sobbing in front of her.`);
  // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> goes pale in shock, immediately stops what she's d...
  scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} goes pale in shock, immediately stops what she's doing and runs over to you. "Oh no! ${((s as any).pcs_nickname ?? 0)}!"`);
  scene.text('She quickly wraps you in her arms and doesn\'t say anything as she holds you tightly against her. You can feel her tears wetting your cheek, running down alongside your own.');
  // TODO-QSP: dynamic text: Your crying gets worse and you start sobbing uncontrollably in your <<$npc_nickn...
  scene.text(`Your crying gets worse and you start sobbing uncontrollably in your ${((s as any).npc_nickname ?? 0)?.['A29']}'s arms as she hugs you tighter until your tears subside.`);
  // TODO-QSP: dynamic text: Once you've stopped crying, she sits down with you. "<<$pcs_nickname>>, I love y...
  scene.text(`Once you've stopped crying, she sits down with you. "${((s as any).pcs_nickname ?? 0)}, I love you and I'm here for you and will support you through this. If there's anything you need, just come to me. If you want to talk about it or…"`);
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/cry_together1.jpg');
    // TODO-QSP: dynamic text: You shake your head slowly. "No <<$npc_nickname['A29']>>, I just wanted to tell ...
    scene.text(`You shake your head slowly. "No ${((s as any).npc_nickname ?? 0)?.['A29']}, I just wanted to tell you. I guess to get it off my chest. Thank you for listening."`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you with a sad smile. "Whatever you want ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you with a sad smile. "Whatever you want darling, just let me know. I haven't really done anything."`);
    // TODO-QSP: dynamic text: You smile at her. "Yes, you did <<$npc_nickname['A29']>>! You listened and gave ...
    scene.text(`You smile at her. "Yes, you did ${((s as any).npc_nickname ?? 0)?.['A29']}! You listened and gave me a hug, which was what I needed."`);
    scene.text('Tears well up in your eyes again and she pulls you back into her arms and cuddles you, holding you tight as you both let out all your pain and anguish.');
    // TODO-QSP: dynamic text: As you eventually calm down, your <<$npc_nickname['A29']>> looks at you as she s...
    scene.text(`As you eventually calm down, your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you as she strokes your face and smiles. "I'm glad you spoke to me about this rather than carrying the burden by yourself. If you want to talk more about this or anything else, I'm here for you; I love you and will support you. <i>Always</i>!"`);
    scene.text('You feel that your chat with her has helped you and you continue to hug her and cry on her shoulder for a while.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Talk a bit more about the event', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/hug_sad2.jpg');
    scene.text('"I just wanted to tell you," you reply. "I don\'t really know what else there is to say."');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you with concern. "Well, did he do anythi...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you with concern. "Well, did he do anything else? I mean… Sorry, this isn't coming out right."`);
    scene.text('She stops and you both start crying again as you hug each other for a while longer.');
    scene.actions([
      { label: 'You don\'t know', handler: (st: GameState) => {
    (s as any).mc_inventory['morning_after_pill'] = ((s as any).mc_inventory['morning_after_pill'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: "I don't know, <<$npc_nickname['A29']>>! It's only recently happened and I just ...
    scene.text(`"I don't know, ${((s as any).npc_nickname ?? 0)?.['A29']}! It's only recently happened and I just didn't know what to do!"`);
    // TODO-QSP: dynamic text: After a very brief pause, your <<$npc_nickname['A29']>> adds her immediate thoug...
    scene.text(`After a very brief pause, your ${((s as any).npc_nickname ?? 0)?.['A29']} adds her immediate thought. "Erm… ${((s as any).pcs_nickname ?? 0)}, I take it you've taken the morning after pill? If not, then you need to do that as you don't want to end up pregnant. I can get one for you."`);
    // TODO-QSP: dynamic text: You nod. "Okay <<$npc_nickname['A29']>>. Thanks."
    scene.text(`You nod. "Okay ${((s as any).npc_nickname ?? 0)?.['A29']}. Thanks."`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you with mounting concern. "I guess we sh...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you with mounting concern. "I guess we should also report it to the police and most importantly get you checked over at the clinic as you don't know if he's got anything unpleasant. I'll come with you if you want so you don't have to go through that on your own."`);
    scene.actions([
      { label: 'Already done', handler: (st: GameState) => {
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"I already reported it to the police, but I don\'t expect them to do anything, especially as I couldn\'t give them a good description of him." Your body shakes involuntarily at the thought as you pause before continuing.');
    scene.text('"I\'ve also been to the clinic, but it\'s too soon to know anything definite so I\'ll have to go back for a second check to make sure."');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you. "<<$pcs_nickname>>, ff you want me t...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you. "${((s as any).pcs_nickname ?? 0)}, ff you want me to go with you please just let me know; you don't have to do that alone."`);
    // TODO-QSP: dynamic text: "I think I'd rather just go by myself, <<$npc_nickname['A29']>>. The embarrassme...
    scene.text(`"I think I'd rather just go by myself, ${((s as any).npc_nickname ?? 0)?.['A29']}. The embarrassment of letting the doctor examine me down there after what happened…"`);
    scene.text('Tears well up in your eyes again and she pulls you back into her arms and cuddles you, holding you tight as you both let out all your pain and anguish.');
    // TODO-QSP: dynamic text: As you calm down, your <<$npc_nickname['A29']>> looks at you as she strokes your...
    scene.text(`As you calm down, your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you as she strokes your face and smiles. "At least you talked to me about this rather than keeping it all bottled up inside."`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> makes you both a cup of tea and shuts the kitchen ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} makes you both a cup of tea and shuts the kitchen door. As you drink it, she spends some time focusing on and comforting you.`);
    scene.text('She concludes by saying "If you want to talk about this or anything else, then I\'m here for you. I love and support you. <i>Always</i>."');
    scene.text('You feel that your chat with her has helped you and you continue to hug her and cry on her shoulder for a while.');
    scene.actions([
      { label: 'Continue', goto: ['kuhrPar', ''] },
    ]);
  } },
      { label: 'No police and will go to the clinic', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost10.jpg');
    scene.text('"Is there any point in reporting it to the police? I didn\'t get a clear look at the bastard and even if I did I doubt they\'d do anything. The clinic would be a good idea, though. Who knows what he\'s got and what the consequence may be!?"');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks as though she's going to say something, but ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks as though she's going to say something, but has second thoughts and just shakes her head sadly.`);
    scene.text('Tears well up in your eyes again and she pulls you back into her arms and cuddles you, holding you tight as you both let out all your pain and anger.');
    // TODO-QSP: dynamic text: As you calm down, your <<$npc_nickname['A29']>> looks at you as she strokes your...
    scene.text(`As you calm down, your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you as she strokes your face and smiles. "Okay, how about you get yourself freshened up and I'll wait here for you. I'll go to the clinic with you so you don't need to do all this by yourself."`);
    scene.actions([
      { label: 'Go to the clinic', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/clinic/hospital.jpg');
    scene.text('You nod and return a few minutes later to head to the clinic together. On the way, you ask her to remain in the waiting room as the whole thing is traumatic enough.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you and smiles. "Of course, if that's wha...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you and smiles. "Of course, if that's what you want, darling."`);
    // TODO-QSP: dynamic text: A little while later, you return to your <<$npc_nickname['A29']>> and tell her t...
    scene.text(`A little while later, you return to your ${((s as any).npc_nickname ?? 0)?.['A29']} and tell her that, while the doctor didn't find anything, you have to come back soon for a second check.`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks at you. "If you want me to go with you, plea...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you. "If you want me to go with you, please just let me know."`);
    // TODO-QSP: dynamic text: "Thanks <<$npc_nickname['A29']>>, but I think I'd rather just go by myself. The ...
    scene.text(`"Thanks ${((s as any).npc_nickname ?? 0)?.['A29']}, but I think I'd rather just go by myself. The embarrassment of letting the doctor examine me down there after what happened…"`);
    scene.text('Tears well up in your eyes again and she pulls you back into her arms and cuddles you, holding you tight as you both let out all your pain and anguish.');
    // TODO-QSP: dynamic text: As you calm down, your <<$npc_nickname['A29']>> looks at you as she strokes your...
    scene.text(`As you calm down, your ${((s as any).npc_nickname ?? 0)?.['A29']} looks at you as she strokes your face and smiles. "At least you talked to me about this rather than carrying the burden by yourself. Let's go home."`);
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
    }
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost9.jpg');
    // TODO-QSP: dynamic text: You both go return home, where your <<$npc_nickname['A29']>> leads you into the ...
    scene.text(`You both go return home, where your ${((s as any).npc_nickname ?? 0)?.['A29']} leads you into the kitchen, shuts the door and makes you both a cup of tea. As you drink it, she spends some time focusing on and comforting you.`);
    scene.text('She concludes by saying "If you want to talk about this or anything else, then I want you to feel that you can come to me. I love and support you. <i>Always</i>."');
    scene.text('You feel that your chat with her has helped you and you continue to hug her and cry on her shoulder for a while.');
    scene.actions([
      { label: 'Continue', goto: ['kuhrPar', ''] },
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

function enterMiscarriageTalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pregTalkFamily = 2;
  qspCall(s, 'npc_relationship', 'modify', 'A29', 20);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/prost6.jpg');
  // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>>," you start hesitantly. "I need to tell you something…...
  scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']}," you start hesitantly. "I need to tell you something…"`);
  if (((s as any).npc_rel ?? 0)?.['A29'] > 80) {
    scene.text('"What is it, dear?" she asks, turning to smile at you.');
  } else {
    // TODO-QSP: dynamic text: "Hmm? What is it, <<$pcs_nickname>>?" she asks distractedly.
    scene.text(`"Hmm? What is it, ${((s as any).pcs_nickname ?? 0)}?" she asks distractedly.`);
    scene.text('"What now?" she asks with a deep sigh while turning to frown at you. "You didn\'t somehow get your baby pregnant, did you?"');
  }
  // TODO-QSP: dynamic text: "I lost the baby…" you say, suddenly bursting into tears. Your <<$npc_nickname['...
  scene.text(`"I lost the baby…" you say, suddenly bursting into tears. Your ${((s as any).npc_nickname ?? 0)?.['A29']} goes pale in shock, but only spends a single second frozen in place before striding across the room and wrapping you in her arms.`);
  // TODO-QSP: dynamic text: "Oh, I'm so sorry <<$pcs_nickname>>!" she coos, gripping you tight against her. ...
  scene.text(`"Oh, I'm so sorry ${((s as any).pcs_nickname ?? 0)}!" she coos, gripping you tight against her. You can feel her tears wetting your cheek, running down alongside your own. She just keeps repeating "I'm sorry, I'm sorry, I'm sorry…"`);
  // TODO-QSP: dynamic text: Your crying gets worse and you start sobbing uncontrollably in your <<$npc_nickn...
  scene.text(`Your crying gets worse and you start sobbing uncontrollably in your ${((s as any).npc_nickname ?? 0)?.['A29']}'s arms.`);
  qspCall(s, 'npc_relationship', 'modify', 'A29', 20);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Admit relief', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/hug_sad2.jpg');
    scene.text('After a few minutes, you finally gather yourself together enough to speak. "To be honest, I think I\'m a little relieved," you confess. "I don\'t know if I was ready to be a mother yet. Does that make me a bad person?"');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> doesn't respond immediately, but hugs you closer. ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} doesn't respond immediately, but hugs you closer. After a few seconds, she smiles at you and strokes your face.`);
    // TODO-QSP: dynamic text: "You've been very brave, <<$pcs_nickname>>. Even if you didn't feel ready, you w...
    scene.text(`"You've been very brave, ${((s as any).pcs_nickname ?? 0)}. Even if you didn't feel ready, you would have been a wonderful mother. But hush now. Just let it all out."`);
    scene.text('In view of your history with her, you fully expected a lecture about the responsibilities that come with being a parent. However, her reaction is a pleasant surprise and you feel that your chat with her has helped you as you continue to hug her and cry on her shoulder for a while.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Upset at the loss of your baby as you wanted it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/cry_together1.jpg');
    scene.text('"I worried I was too young to be a mother," you start babbling through sobs. "... but I loved that baby so much! I was ready to do anything for my little baby! And now it\'s gone without even taking it\'s first breath!"');
    // TODO-QSP: dynamic text: You wail loudly, your babbles descending into unintelligible sobs as your <<$npc...
    scene.text(`You wail loudly, your babbles descending into unintelligible sobs as your ${((s as any).npc_nickname ?? 0)?.['A29']} holds you tighter in her arms. When your sobbing starts to subside, she kisses you softly on the cheek and whispers in your ear.`);
    // TODO-QSP: dynamic text: "I'm so sorry <<$pcs_nickname>>," she murmurs and pulls back to hold your face d...
    scene.text(`"I'm so sorry ${((s as any).pcs_nickname ?? 0)}," she murmurs and pulls back to hold your face directly in front of hers. "I know what it's like to want to do anything and everything to protect your baby. I can't imagine the pain of what you're going through right now…"`);
    scene.text('Tears well up in your eyes again and she pulls you back into her arms and cuddles you, holding you tight as you both let out all your pain and anguish.');
    scene.text('You feel that your chat with her has helped you as you continue to hug her and cry on her shoulder for a while.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Not ready to be a mother but still upset at the loss of your baby', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).will_counter = ((s as any).will_counter ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/hug_sad1.jpg');
    scene.text('"I was so scared when I found out I was pregnant," you start babbling through sobs. "I wasn\'t ready for that responsibility and was terrified I wasn\'t going to be able to care for my baby but… but I loved that baby so much! It wasn\'t even born yet, but I was ready to do anything for my little baby! And now it\'s gone without even it\'s first breath!"');
    // TODO-QSP: dynamic text: You wail loudly, babbles descending into unintelligible sobs as your <<$npc_nick...
    scene.text(`You wail loudly, babbles descending into unintelligible sobs as your ${((s as any).npc_nickname ?? 0)?.['A29']} holds you tighter in her arms. When your sobbing starts to subside, she kisses you softly on the cheek and whispers in your ear.`);
    // TODO-QSP: dynamic text: "I'm so sorry <<$pcs_nickname>>," she murmurs and pulls back to hold your face d...
    scene.text(`"I'm so sorry ${((s as any).pcs_nickname ?? 0)}," she murmurs and pulls back to hold your face directly in front of hers. "I know what it's like to want to do anything and everything to protect your baby. I can't imagine the pain of what you're going through right now…"`);
    scene.text('Tears well up in your eyes again and she pulls you back into her arms and cuddles you, holding you tight as you both let out all your pain and anguish.');
    scene.text('You feel that your chat with her has helped you as you continue to hug her and cry on her shoulder for a while.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLostVirginityTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/stop_talk.jpg');
  scene.text('You rip your arm out of your mother\'s grasp. "How could you treat me like that?!" you hiss. "I\'m not a naughty little girl you can pull around by the ear anymore! Yes, I had sex, but that doesn\'t make me a whore or a slut!"');
  // TODO-QSP: dynamic text: "I wanted the best for you and your sister!" your <<$npc_nickname['A29']>> shout...
  scene.text(`"I wanted the best for you and your sister!" your ${((s as any).npc_nickname ?? 0)?.['A29']} shouts back. "All this trouble I went through to bring you up properly as a decent young lady and this is what I get! As long as you're living in my house, you'll do as I say!"`);
  if ((!((s as any).momslut ?? 0))) {
    scene.actions([
      { label: 'So you want me to move out?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/walking.jpg');
    scene.text('"So you\'re saying you want me to move out?" you snap.');
    scene.text('"Aaaargh! You insufferable brat!" she screeches back, practically tearing out her hair in frustration.');
    qspCall(s, 'mother_chats', 'lost_virgin_leave_alone');
    scene.actions([
      { label: 'Get your stuff and leave (You will not be permanently banned from parents home)', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'block_access', 'parents_home');
    (s as any).mother['kickedout_timer'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/resident/mom/walking.jpg');
    scene.text('"If you don\'t want me at home, then I won\'t be!" you scream.');
    qspCall(s, 'mother', 'get_belongings');
    // TODO-QSP: dynamic text: You turn and leave, slamming the door behind you. You'll need to find somewhere ...
    scene.text(`You turn and leave, slamming the door behind you. You'll need to find somewhere to live until your ${((s as any).npc_nickname ?? 0)?.['A29']} calms down. Maybe Vlad or Anya will have a word with her when they see you aren't home? You could try your uncle upstairs or the hotel for now.`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to Five Eight', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'So you want me to move out?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/walking.jpg');
    scene.text('Equally furious at the treatment you\'ve received, you continue. "So you\'re saying you don\'t want me at home any more?!"');
    scene.text('You take a deep breath and continue. "Oh and while we\'re on the subject of sex, you\'re in no position to preach to me as I\'ve seen you cheating on Vlad!"');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> just glares at you and opens her mouth, but all th...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} just glares at you and opens her mouth, but all that comes out is a frustrated growl. She shoos you away with her arms and turns away from you.`);
    qspCall(s, 'mother_chats', 'lost_virgin_leave_alone');
    scene.actions([
      { label: 'Leave home (You will not be permanently banned from parents home)', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'block_access', 'parents_home');
    (s as any).mother['kickedout_timer'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/resident/mom/walking.jpg');
    scene.text('"I\'m done with taking all this crap! Until you can treat me with respect, you\'ve just lost a daughter!"');
    qspCall(s, 'mother', 'get_belongings');
    // TODO-QSP: dynamic text: You turn and leave, slamming the door behind you. You'll need to find somewhere ...
    scene.text(`You turn and leave, slamming the door behind you. You'll need to find somewhere to live at least until your ${((s as any).npc_nickname ?? 0)?.['A29']} calms down. Maybe Vlad or Anya will have a word with her when they see you aren't home? You could try your uncle upstairs or the hotel for now.`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to Five Eight', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLostVirginityTalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/stop_talk.jpg');
  scene.text('You rip yourself out of your mother\'s grasp. "I\'m not a naughty little girl you can pull around by the ear anymore!" you hiss. "Yes, I had sex, but that doesn\'t make me a whore or a slut!"');
  // TODO-QSP: dynamic text: "I wanted the best for you and your sister!" your <<$npc_nickname['A29']>> shout...
  scene.text(`"I wanted the best for you and your sister!" your ${((s as any).npc_nickname ?? 0)?.['A29']} shouts back. "All this trouble I went through to bring you up properly as a decent young lady and this is what I get! As long as you're living in my house, you'll do as I say!"`);
  if ((!((s as any).momslut ?? 0))) {
    scene.actions([
      { label: 'So you want me to move out?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"So you\'re saying you want me to move out?" you snap.');
    scene.text('"Aaaargh! You insufferable brat!" she screeches back, practically tearing out her hair in frustration.');
    qspCall(s, 'mother_chats', 'lost_virgin_leave_alone');
    scene.actions([
      { label: 'Get your stuff and leave (You will not be permanently banned from parents home)', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'block_access', 'parents_home');
    (s as any).mother['kickedout_timer'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/resident/mom/walking.jpg');
    scene.text('"If you don\'t want me at home, then I won\'t be!" you scream.');
    qspCall(s, 'mother', 'get_belongings');
    // TODO-QSP: dynamic text: You turn and leave, slamming the door behind you. You'll need to find somewhere ...
    scene.text(`You turn and leave, slamming the door behind you. You'll need to find somewhere to live until your ${((s as any).npc_nickname ?? 0)?.['A29']} calms down. Maybe Vlad or Anya will have a word with her when they see you aren't home? You could try your uncle upstairs or the hotel for now.`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'So you want me to move out?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/walking.jpg');
    scene.text('Equally furious at the treatment you\'ve received, you continue. "So you\'re saying you don\'t want me at home any more?!"');
    scene.text('You take a deep breath and continue. "Oh and while we\'re on the subject of sex, you\'re in no position to preach to me as I\'ve seen you cheating on Vlad!"');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> just glares at you and opens her mouth, but all th...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} just glares at you and opens her mouth, but all that comes out is a frustrated growl. She shoos you away with her arms and turns away from you.`);
    qspCall(s, 'mother_chats', 'lost_virgin_leave_alone1');
    scene.actions([
      { label: 'Leave home (You will not be permanently banned from parents home)', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'block_access', 'parents_home');
    (s as any).mother['kickedout_timer'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/resident/mom/walking.jpg');
    scene.text('"I\'m done with taking all this crap! Until you can treat me with respect, you\'ve just lost a daughter!"');
    qspCall(s, 'mother', 'get_belongings');
    // TODO-QSP: dynamic text: You turn and leave, slamming the door behind you. You'll need to find somewhere ...
    scene.text(`You turn and leave, slamming the door behind you. You'll need to find somewhere to live at least until your ${((s as any).npc_nickname ?? 0)?.['A29']} calms down. Maybe Vlad or Anya will have a word with her when they see you aren't home? You could try your uncle upstairs or the hotel for now.`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLostVirginLeaveAlone(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Leave her alone for now', handler: (st: GameState) => {
    scene.text('Right now, it doesn\'t matter how you feel or what you say. It\'s clear that neither you or your mother are going to listen to anything.');
    scene.text('Realizing that this can only end poorly, you throw up your hands. "I don\'t want to talk about this right now! I\'ll be back when I think this won\'t just end in a fight between us."');
    scene.text('You storm off, your mother still raving even as you walk away. Better that than a full blown argument in the middle of the street, though.');
    scene.actions([
      { label: 'Return to Five Eight', goto: ['pav_complex', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLostVirginLeaveAlone1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Leave her alone for now', handler: (st: GameState) => {
    scene.text('Right now, it doesn\'t matter how you feel or what you say. It\'s clear that neither you or your mother are going to listen to anything.');
    scene.text('Realizing that this can only end poorly, you throw up your hands. "I don\'t want to talk about this right now! I\'m going to my room before this ends in a fight between us."');
    scene.text('You storm off, your mother still raving even as you walk away. Better that than a full blown argument in the middle of the apartment, though.');
    scene.actions([
      { label: 'Go to your room', goto: ['bedrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterReconciliationTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Approach your <<$npc_nickname[\'A29\']>>', handler: (st: GameState) => {
    (s as any).mother['kickedout_timer'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'love');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/stop_talk.jpg');
    // TODO-QSP: dynamic text: You approach your <<$npc_nickname['A29']>> warily and greet her. "Hey <<$npc_nic...
    scene.text(`You approach your ${((s as any).npc_nickname ?? 0)?.['A29']} warily and greet her. "Hey ${((s as any).npc_nickname ?? 0)?.['A29']}, what are you doing here? How did you know where I was?"`);
    // TODO-QSP: dynamic text: She responds with a sad smile as she looks at you. "Never mind that, <<$pcs_nick...
    scene.text(`She responds with a sad smile as she looks at you. "Never mind that, ${((s as any).pcs_nickname ?? 0)}. I asked around as I haven't stopped loving you and you're very important to me."`);
    scene.text('After a very brief pause, she continues before you can say anything. "I feel bad about what happened the other day and think that we really need to try and resolve our differences. Please come with me to the café so we can have a chat. Please."');
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    (s as any).mother['kickedout_pending'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/stop_talk.jpg');
    scene.text('You\'re not ready to deal with this right now. However, you realize that it would have taken a lot for her to come and meet you, so you carefully formulate your response.');
    scene.text('"I need a little more time. I\'ll come home and talk to you when I\'m ready."');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>," she sighs. "I guess I'll just have to say it now... I ...
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}," she sighs. "I guess I'll just have to say it now... I just wanted to say I'm sorry that things went so far and to tell you that I miss you. In fact, we all miss you and you're welcome to return home. I do love you ${((s as any).pcs_nickname ?? 0)}, I hope you know that!"`);
    // TODO-QSP: dynamic text: You don't reply, but give your <<$npc_nickname['A29']>> a quick hug before leavi...
    scene.text(`You don't reply, but give your ${((s as any).npc_nickname ?? 0)?.['A29']} a quick hug before leaving.`);
    scene.text('You\'ll have to think about whether you want to return home or if you\'re happier as you are.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Go to the café', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'love');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/sveta_mum_restaurant.jpg');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> picks a table in a corner of the café and waits fo...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} picks a table in a corner of the café and waits for you to sit down. You notice that she looks very sad as you walk up to her.`);
    scene.text('She gives you a weak smile. "Please sit down. I\'ll get us some tea."');
    scene.text('A minute later, she returns with the tea and joins you. There\'s an awkward silence as she fidgets in her seat before she finally brushes her hair back and takes a deep breath.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>… I'm sorry about my behaviour at the clinic. I was very angry...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}… I'm sorry about my behaviour at the clinic. I was very angry and…" She pauses before continuing. "You were right. I overreacted and… I'm sorry for that."`);
    scene.text('When it\'s clear you aren\'t going to reply, she takes another deep breath and continues speaking.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/grounds/sveta_mum_restaurant.jpg');
    scene.text('"I know I can be a bit overbearing at times," she starts before you interrupt her.');
    scene.text('"More than a bit!" you reply, unable to help yourself.');
    // TODO-QSP: dynamic text: There's another pause as your <<$npc_nickname['A29']>> reflects on your response...
    scene.text(`There's another pause as your ${((s as any).npc_nickname ?? 0)?.['A29']} reflects on your response.`);
    scene.text('"Yes, you\'re probably right, but I wanted to apologise for my reaction at the clinic and tell you that you\'re welcome to return home. In fact, we\'d all like to see you back at home. <i>I</i> would like to see you back at home."');
    scene.actions([
      { label: 'Accept her offer', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'love');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mum_gyno1.jpg');
    scene.text('"Yes, I would like that," you smile gently.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> gets up and rushes around the table to give you a ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} gets up and rushes around the table to give you a hug, nearly knocking her tea over in the process. "Thank you, ${((s as any).pcs_nickname ?? 0)}!"`);
    qspCall(s, 'mother_chats', 'reconciliation_replies');
  } },
      { label: 'You need to think about it', handler: (st: GameState) => {
    (s as any).mother['kickedout_pending'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mum_gyno2.jpg');
    scene.text('You take a moment, slowly tracing your finger around the rim of your teacup, carefully considering what she just said, but you eventually shake your head.');
    scene.text('"This is too sudden," you reply. "I\'m still not sure if I\'ve forgiven you for what you done."');
    // TODO-QSP: dynamic text: You stand up and grab your bag. "I'm glad you apologised <<$npc_nickname['A29']>...
    scene.text(`You stand up and grab your bag. "I'm glad you apologised ${((s as any).npc_nickname ?? 0)?.['A29']}, but I don't know if I want to come back home since I can see something similar happening again in the future. Thanks for the tea."`);
    // TODO-QSP: dynamic text: You turn and silenty leave your unfinished tea and your <<$npc_nickname['A29']>>...
    scene.text(`You turn and silenty leave your unfinished tea and your ${((s as any).npc_nickname ?? 0)?.['A29']} behind.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enterReconciliationReplies(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You\'re not going to stop having sex', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost7.jpg');
    // TODO-QSP: dynamic text: "Don't think this means that I'm going to stop having sex though, <<$npc_nicknam...
    scene.text(`"Don't think this means that I'm going to stop having sex though, ${((s as any).npc_nickname ?? 0)?.['A29']}," you say, your voice muffled by her tight hug. She pulls back suddenly, staring at you with wide eyes. "I'm never going to be able to go back to being a virgin, so you're going to have to accept that and understand that sex is a part of my life now."`);
    scene.text('She continues looking at you in concern for a few more seconds before giving you a gentle smile. "I guess we\'ll just have to work things out as we go," she chuckles ruefully. "Come on, let\'s go home."');
    scene.text('You nod and take her arm before walking back to the apartments together.');
    scene.actions([
      { label: 'Go home', goto: ['korrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKnock(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['student'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['mother_chats', 'knock_uni'] }]);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
  scene.text('You have decided to return home. Unfortunately, when you arrive, you find that the door is locked. After a moment\'s consideration, you decide to knock and see if your parents are in and if they\'ll let you return. After all, what have you got to lose? The worst that could happen is that they turn you away.');
  scene.text('You take a deep breath and knock on the door.');
  // TODO-QSP: dynamic text: A few seconds later, the door opens and you see your <<$npc_nickname['A29']>> st...
  scene.text(`A few seconds later, the door opens and you see your ${((s as any).npc_nickname ?? 0)?.['A29']} standing in front of you with a shocked but happy expression on her face.`);
  scene.text('She looks at you and starts to speak. "So the wanderer returns, huh?! Where on earth have you been?! Do you realise how worried we\'ve been?!"');
  scene.text('Before you can respond, she continues. "Never mind, you\'re here now and that\'s all that matters. Well? don\'t just stand there! Come in! Despite our... differences, I still love and care about you."');
  scene.text('She stands aside and gives you a hug as you enter.');
  scene.actions([
    { label: 'I\'m just visiting', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost2.jpg');
    if (((s as any).mother ?? 0)?.['kickedout_visit'] === 0) {
      (s as any).mother['kickedout_visit'] = 1;
      qspCall(s, 'npc_relationship', 'modify', 'A29', 10);
      // TODO-QSP: dynamic text: "I'm not moving back in, <<$npc_nickname['A29']>>. I have my own place now and j...
      scene.text(`"I'm not moving back in, ${((s as any).npc_nickname ?? 0)?.['A29']}. I have my own place now and just wanted to visit to see if we can at least get back on talking terms."`);
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks sad. "Oh... Well, wouldn't you reconsider? I...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks sad. "Oh... Well, wouldn't you reconsider? I... No, <i>we</i> miss you."`);
      // TODO-QSP: dynamic text: "No <<$npc_nickname['A29']>>, I'm happy where I am; here's the address so you ca...
      scene.text(`"No ${((s as any).npc_nickname ?? 0)?.['A29']}, I'm happy where I am; here's the address so you can visit if you want. However, I'd really like it if we could at least <i>try</i> and talk?"`);
      // TODO-QSP: dynamic text: She just nods and hugs you again. "Okay <<$pcs_nickname>>, I guess that'll have ...
      scene.text(`She just nods and hugs you again. "Okay ${((s as any).pcs_nickname ?? 0)}, I guess that'll have to do for now. Come in and I'll make us some tea."`);
      // TODO-QSP: dynamic text: You follow your <<$npc_nickname['A29']>> into the kitchen and chat with her over...
      scene.text(`You follow your ${((s as any).npc_nickname ?? 0)?.['A29']} into the kitchen and chat with her over tea, after which you get up to leave.`);
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> gives you another hug before you leave and you pro...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} gives you another hug before you leave and you promise to visit again soon before you depart.`);
    } else {
      // TODO-QSP: dynamic text: "Don't worry about me, <<$npc_nickname['A29']>>. I have my own place now, so I'm...
      scene.text(`"Don't worry about me, ${((s as any).npc_nickname ?? 0)?.['A29']}. I have my own place now, so I'm not moving back in. I just wanted to visit and let you know that I'm fine."`);
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> looks sad. "Oh... Well we all miss you, <<$pcs_nic...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} looks sad. "Oh... Well we all miss you, ${((s as any).pcs_nickname ?? 0)}. Please... Wouldn't you reconsider?"`);
      // TODO-QSP: dynamic text: "No <<$npc_nickname['A29']>>, I'm happy where I am; here's the address so you ca...
      scene.text(`"No ${((s as any).npc_nickname ?? 0)?.['A29']}, I'm happy where I am; here's the address so you can visit if you want. However, I'd really like it if we could at least <i>try</i> and talk?"`);
      // TODO-QSP: dynamic text: She just nods and hugs you again. "Okay <<$pcs_nickname>>, I guess that'll have ...
      scene.text(`She just nods and hugs you again. "Okay ${((s as any).pcs_nickname ?? 0)}, I guess that'll have to do for now. Come in and I'll make us some tea."`);
      // TODO-QSP: dynamic text: You follow your <<$npc_nickname['A29']>> into the kitchen and chat with her over...
      scene.text(`You follow your ${((s as any).npc_nickname ?? 0)?.['A29']} into the kitchen and chat with her over tea, after which you get up to leave.`);
      // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> gives you another hug before you leave and you pro...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} gives you another hug before you leave and you promise to visit again soon before you depart.`);
    }
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    { label: 'Move back in', handler: (st: GameState) => {
    (s as any).mother['kickedout_pending'] = 0;
    qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    qspCall(s, 'npc_relationship', 'modify', 'A29', 10);
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mum_gyno1.jpg');
    // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>>... I've been considering things and wanted to ask if i...
    scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']}... I've been considering things and wanted to ask if it would be okay if I moved back in? I brought my stuff with me on the off chance-"`);
    // TODO-QSP: dynamic text: "Yes, of course <<$pcs_nickname>>, welcome home! Let me make a cup of tea and we...
    scene.text(`"Yes, of course ${((s as any).pcs_nickname ?? 0)}, welcome home! Let me make a cup of tea and we can chat before you go to your room and unpack."`);
    // TODO-QSP: dynamic text: You follow your <<$npc_nickname['A29']>> into the kitchen and chat with her over...
    scene.text(`You follow your ${((s as any).npc_nickname ?? 0)?.['A29']} into the kitchen and chat with her over tea, after which you both get up. "Thanks ${((s as any).npc_nickname ?? 0)?.['A29']}. I guess I'd better go and unpack."`);
    // TODO-QSP: dynamic text: She smiles at you and hugs you tightly. "I'm so happy you decided to come home, ...
    scene.text(`She smiles at you and hugs you tightly. "I'm so happy you decided to come home, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.actions([
      { label: 'Return to your room', goto: ['bedrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKnockUni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
  scene.text('When you arrive at your parents\' apartment, you find that the door is locked, so you knock and wait.');
  // TODO-QSP: dynamic text: A few seconds later, the door opens and you see your <<$npc_nickname['A29']>> st...
  scene.text(`A few seconds later, the door opens and you see your ${((s as any).npc_nickname ?? 0)?.['A29']} standing in front of you with a happy expression on her face. "${((s as any).pcs_nickname ?? 0)}, what a nice surprise! Come in and I'll make us a cup of tea."`);
  // TODO-QSP: dynamic text: You follow your <<$npc_nickname['A29']>> into the kitchen, where you share a tea...
  scene.text(`You follow your ${((s as any).npc_nickname ?? 0)?.['A29']} into the kitchen, where you share a tea with her and have a chat.`);
  scene.text('"You can stay over for the night if you wish," she says as you finish your tea.');
  // TODO-QSP: dynamic text: "Thanks <<$npc_nickname['A29']>>," you reply as you get up and leave the kitchen...
  scene.text(`"Thanks ${((s as any).npc_nickname ?? 0)?.['A29']}," you reply as you get up and leave the kitchen.`);
  scene.actions([
    { label: 'Stop talking', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterLoverTalks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8) {
    qspCall(s, 'mother_chats', 'natbel');
  }
  scene.build();
}

function enterNatbel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'kuhrPar'  &&  qspFunc(s, 'homes_properties', 'is_current_home', 'parents_home')) {
    if (((s as any).NatBelQW ?? 0)?.['mother_talk'] === 0) {
      scene.actions([
        { label: 'Tell your <<$npc_nickname[\'A29\']>> about Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).NatbelQW['mother_talk'] = 1;
    (s as any).NatbelQW['mother_talkday'] = ((s as any).daystart ?? 0);
    (s as any).motherKnowSpravka = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You decide that you need to get this over with since the longer it goes on, the ...
    scene.text(`You decide that you need to get this over with since the longer it goes on, the harder it'll get and the more likely your ${((s as any).npc_nickname ?? 0)?.['A29']} will find out by accident.`);
    // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>>, I need to speak to you about something..." you mumble...
    scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']}, I need to speak to you about something..." you mumble slightly.`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> doesn't reply, so you continue. "I need to tell yo...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} doesn't reply, so you continue. "I need to tell you something that's important to me; I've become very good friends with a girl who lives upstairs. She's been helping me with my studies and homework. You might have noticed my grades have improved recently..."`);
    // TODO-QSP: dynamic text: You pause and your <<$npc_nickname['A29']>> smiles at you, obviously pleased tha...
    scene.text(`You pause and your ${((s as any).npc_nickname ?? 0)?.['A29']} smiles at you, obviously pleased that your school work is improving.`);
    scene.text('You continue. "Okay, well... Things have sort of developed from there..."');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> interjects. "What are you telling me, <<$pcs_nickn...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} interjects. "What are you telling me, ${((s as any).pcs_nickname ?? 0)}? It can't be just that you've got a good friend who's clever?"`);
    // TODO-QSP: dynamic text: You shake your head. "No <<$npc_nickname['A29']>> we've become... <i>more</i> th...
    scene.text(`You shake your head. "No ${((s as any).npc_nickname ?? 0)?.['A29']} we've become... <i>more</i> than just friends..."`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> explodes. "WHAT?! NO!!! After all we've done to br...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} explodes. "WHAT?! NO!!! After all we've done to bring you up properly, you go off and spoil yourself... And with a girl! Aaargh! Just... Get out of my sight! I can't speak to you right now or I'll say something I'll regret!"`);
    scene.text('Realising that this won\'t end well, you turn and leave. Maybe you can continue this once she\'s had a chance to think things through?');
    scene.actions([
      { label: 'Stop talking', goto: ['KorrPar', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: '<<$npc_nickname[\'A29\']>> reconciliation', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).NatbelQW['mother_talk'] = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost2.jpg');
    // TODO-QSP: dynamic text: You see your <<$npc_nickname['A29']>> in the kitchen and try to continue the con...
    scene.text(`You see your ${((s as any).npc_nickname ?? 0)?.['A29']} in the kitchen and try to continue the conversation about Natasha. "${((s as any).npc_nickname ?? 0)?.['A29']}, can we talk please? I don't want to leave things as they ended the last time."`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> turns to you and sighs. "Okay <<$pcs_nickname>>. I...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} turns to you and sighs. "Okay ${((s as any).pcs_nickname ?? 0)}. I guess we should clear the air."`);
    scene.text('After a brief pause to gather her thoughts, she continues. "I know I was angry, but only because I care for you. It\'s normal at your age to experiment as I did but you mustn\'t let people know. It could ruin your reputation and cause problems for you. Also if you grow out of it, you\'ll never be able to find a nice man."');
    scene.text('She holds her hand up to stop you from responding, then continues.');
    scene.text('"I know that girls your age experiment; I did too, but it was just for fun and I didn\'t tell anyone. When you told me, I was shocked but thinking about it reminded me of something I had forgotten all about. Your aunt Luda, not that you would guess by her choice in men, had a serious girlfriend when she was at university. What was her name? Ah yes, Greta."');
    scene.text('"Anyway, the two of them were as one. You couldn\'t split them apart for a second; Luda even said they would buy a pharmacy and grow old together. It lasted about two years and then she suddenly started dating African guys. I won\'t share the details, but she\'s lucky she can still walk! Anyway what I realise is that this is normal at your age and I shouldn\'t have shouted at you. Just be careful; there are people that don\'t understand who may hurt you if they knew."');
    scene.actions([
      { label: 'It\'s still early days', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
    // TODO-QSP: dynamic text: You smie, happy that your <<$npc_nickname['A29']>> is no longer so angry about t...
    scene.text(`You smie, happy that your ${((s as any).npc_nickname ?? 0)?.['A29']} is no longer so angry about the situation.`);
    // TODO-QSP: dynamic text: "Thanks <<$npc_nickname['A29']>>. It's still early days in our relationship, but...
    scene.text(`"Thanks ${((s as any).npc_nickname ?? 0)?.['A29']}. It's still early days in our relationship, but I didn't want to keep it a secret from you in case you found out from someone else, and that would have only made matters worse."`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> smiles and nods her agreement as you conclude the ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} smiles and nods her agreement as you conclude the conversation. "Thanks for listening to me, ${((s as any).npc_nickname ?? 0)?.['A29']}. I guess time will tell as to where this goes, but as of now she's important to me."`);
    // TODO-QSP: dynamic text: "I know, <<$pcs_nickname>>. I also know that it would have been very difficult f...
    scene.text(`"I know, ${((s as any).pcs_nickname ?? 0)}. I also know that it would have been very difficult for you to tell me this, but thank you for having the courage to do so."`);
    scene.text('She gives you a hug before returning to what she was doing.');
    scene.actions([
      { label: 'Stop talking', goto: ['KorrPar', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'rape_talk':
      enterRapeTalk(s, scene);
      break;
    case 'miscarriage_talk1':
      enterMiscarriageTalk1(s, scene);
      break;
    case 'lost_virginity_talk':
      enterLostVirginityTalk(s, scene);
      break;
    case 'lost_virginity_talk1':
      enterLostVirginityTalk1(s, scene);
      break;
    case 'lost_virgin_leave_alone':
      enterLostVirginLeaveAlone(s, scene);
      break;
    case 'lost_virgin_leave_alone1':
      enterLostVirginLeaveAlone1(s, scene);
      break;
    case 'reconciliation_talk':
      enterReconciliationTalk(s, scene);
      break;
    case 'reconciliation_replies':
      enterReconciliationReplies(s, scene);
      break;
    case 'knock':
      enterKnock(s, scene);
      break;
    case 'knock_uni':
      enterKnockUni(s, scene);
      break;
    case 'lover_talks':
      enterLoverTalks(s, scene);
      break;
    case 'natbel':
      enterNatbel(s, scene);
      break;
    default:
      enterRapeTalk(s, scene);
      break;
  }
}

export const mother_chats: LocationDef = {
  name: 'mother_chats',
  title: 'She quickly wraps you in her arms and doesn\'t say anything a',
  region: 'other',
  description: ['She quickly wraps you in her arms and doesn\'t say anything as she holds you tightly against her. You can feel her tears wetting your cheek, running down alongside your own.'],
  enter: enter,
};
