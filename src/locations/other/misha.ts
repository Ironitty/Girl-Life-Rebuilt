import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'boyStat', 'A54');
  scene.img(`images/characters/pavlovsk/resident/misha/sex/misha.pre0,${Math.floor(Math.random() * 2) + 0}.jpg`);
  scene.text('You enter Uncle Misha\'s apartment. He lets you in, and you take a seat as he glances down the hallway once more to see if anyone saw you walk in. Content that the hallway is empty, he closes the door behind him. He immediately reaches for his pants and pulls out his giant cock with a lewd grin.');
  scene.text('Uncle Misha approaches you, his cock bobbing up and down. Noticing your reluctance, he puts his hand below your chin and makes you look him in the eye. "Come on, girl, we both know why you\'re here. You want to service my hard cock. Get to it."');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to service him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to service him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/misha.exit0,0.jpg');
    scene.text('You have no intentions of "servicing him" and stand up. Although he has always been pleasant to you, you know from the stories your mother told that Uncle Misha is used to getting his way and can get rather violent when he doesn\'t. So you try to placate him. "I\'m sorry, uncle, I didn\'t mean to lead you on. I merely wanted to see if you were up for a chat."');
    // TODO-QSP: dynamic text: Fortunately, he's not upset with you at all. The smug grin on Uncle Misha's face...
    scene.text(`Fortunately, he's not upset with you at all. The smug grin on Uncle Misha's face never leaves, his cock still hanging out of his pants. "No problem, ${((s as any).pcs_nickname ?? 0)}. I recognized that look in your eyes when I pulled my dick out. You'll be back. They all come back." You ignore his laughter as you pull the door shut behind you.`);
    scene.actions([
      { label: 'Exit to the stairwell', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Take his dick in your mouth', handler: (st: GameState) => {
    scene.img(`images/characters/pavlovsk/resident/misha/sex/misha0,${Math.floor(Math.random() * 8) + 0}.jpg`);
    scene.text('Even though the size of his giant cock intimidates you a little, you nod. He\'s right… you wouldn\'t have been here if this wasn\'t what you wanted. Right?');
    scene.text('You take your uncle\'s penis in your hand, giving it a few short tugs. A bead of precum forms on the head of his dick. You accept that as your cue to get started. You move your face closer to his penis and close your lips around it, licking a dollop of precum off. It actually tastes kind of nice. You can feel his dick stiffen further in your mouth, and the thought of you being responsible for this gives you an odd sense of accomplishment.');
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    (s as any).dmishaday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: He's content just letting you suck him off for a bit, especially when you gather...
    scene.text(`He's content just letting you suck him off for a bit, especially when you gather your courage and start to apply your skills. Then, after a while, he pulls back, saying, "Alright, ${((s as any).pcs_nickname ?? 0)}, that was nice, but not what I had in mind for today. It's time for the main course!"`);
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      // TODO-QSP: act 'You put your condom on his cock': $temp = {gs 'dinsex','pc_puts_condom'}
      // TODO-QSP: xgt 'misha', '1_2nd_part'
    }
    scene.actions([
      { label: 'Uncle Misha puts his condom on', handler: (st: GameState) => {
    // TODO-QSP: $temp = {gs 'dinsex','boy_puts_his_condom'}
    // TODO-QSP: xgt 'misha', '1_2nd_part'
  } },
      { label: 'You tell Misha that he doesn\'t need a condom', handler: (st: GameState) => {
    // TODO-QSP: $temp = ''
    // TODO-QSP: xgt 'misha', '1_2nd_part'
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter1_2ndPart(s: GameState, scene: SceneBuilder): void {
  (s as any).mish_rand1 = Math.floor(Math.random() * 101) + 0;
  if (((s as any).mish_rand1 ?? 0) <= 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/misha/sex/mi...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/misha/sex/misha1,${Math.floor(Math.random() * 8) + 0}.jpg"></center>`);
  }
  if (((s as any).mish_rand1 ?? 0) > 60) {
    // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/characters/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/misha/sex/misha1,${Math.floor(Math.random() * 4) + 0}.mp4"></video></center>`);
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1, '', '', 20);
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 20);
    scene.img(`images/characters/pavlovsk/resident/misha/sex/misha.cum0,${Math.floor(Math.random() * 2) + 0}.jpg`);
    scene.text('Panting heavily, uncle Misha pulls his hard cock away from your pussy.');
    scene.text('He motions for you to get on your knees. His breathing is ragged, and his face is flustered. Once you\'re in position, he furiously masturbates his dick as you sit there waiting for his load, not sure whether to close your eyes or to keep looking at him. You decide to be brave and look him in the eye, which turns him on a great deal. He rewards you by focusing on your mouth and making sure not to cum near your eyes. You do what feels right and stick out your tongue, trying to catch at least some of it.');
    // TODO-QSP: dynamic text: Uncle Misha takes a minute to catch his breath and admire his handiwork on your ...
    scene.text(`Uncle Misha takes a minute to catch his breath and admire his handiwork on your face before leaning down and kissing you on the forehead. He throws a couple of crumpled bills on the floor. "Very nice, ${((s as any).pcs_nickname ?? 0)}. Here, take these for your efforts," he says as you scramble to pick them up, indicating he's done with you now and expects you to leave.`);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'money', 'earn', 200);
    (s as any).npc_had_sex[$boy] = 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave Uncle Misha\'s apartment', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/father.misha.pre0,0.jpg');
  scene.text('They both drop their pants to their ankles, revealing their stiff cocks.');
  // TODO-QSP: dynamic text: Your stepfather instructs you, "Well, <<$pcs_nickname>>, given your history, I'm...
  scene.text(`Your stepfather instructs you, "Well, ${((s as any).pcs_nickname ?? 0)}, given your history, I'm sure you know what to do with these. Get started."`);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get on your knees and suck them off', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A28', '1');
    qspCall(s, 'boyStat', 'A28', '2');
    qspCall(s, 'boyStat', 'A54', '<<rand(1,2)>>');
    (s as any).fatherandmisha = 1;
    // TODO-QSP: npc_had_sex[$boy[1]] = 1
    // TODO-QSP: npc_had_sex[$boy[2]] = 1
    (s as any).npc_rel['A28'] = ((s as any).npc_rel['A28'] ?? 0) + (3);
    scene.img(`images/locations/pavlovsk/resident/apartment/garage/father/sex/father.misha0,${Math.floor(Math.random() * 2) + 0}.jpg`);
    scene.text('You meekly nod and fall to your knees in front of them, reaching for their hard dicks.');
    scene.text('Since they have been talking about "punishment" non-stop, you do your best to keep them happy. Maybe they\'ll go easy on you? You obediently put your lips around your stepfather\'s dick, diligently sucking him off while you massage your uncle\'s rod with your hand at the same time. A while later, the roles are reversed, and Uncle Misha\'s dick is deep down your throat as you try to keep your stepfather happy.');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[1], 'sub', 'deepthroat', 'group'
    // TODO-QSP: gs 'arousal', 'hj', -5, $npcID[2], 'sub', 'group'
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub', 'deepthroat', 'group'
    // TODO-QSP: gs 'arousal', 'hj', -5, $npcID[1], 'sub', 'group'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/resident/apartment/garage/father/sex/father.misha1,${Math.floor(Math.random() * 6) + 0}.jpg`);
    scene.text('If your goal was to avoid punishment, you were too eager to achieve that. Uncle Misha notices how eager you are to comply and snorts. "Hmm, look at her… this is hardly a punishment. She looks like the happiest girl in the world, sucking our dicks like that."');
    // TODO-QSP: dynamic text: Your stepfather agrees. "You're right. <<$pcs_nickname>> should be punished prop...
    scene.text(`Your stepfather agrees. "You're right. ${((s as any).pcs_nickname ?? 0)} should be punished properly." Then turning his attention to you, he says, "Go on, ${((s as any).pcs_nickname ?? 0)}, spread those cute little legs of yours. After that, it's time for your real punishment."`);
    // TODO-QSP: dynamic text: You open your legs wide and <<lcase(mid($boydesc[2],1,1))>><<mid($boydesc[2],2,l...
    scene.text(`You open your legs wide and ${qspUntranslated(s, "lcase(mid(boydesc[2],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[2]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[2]", { location: "misha" })).length)-1)))} enters your pussy, while you suck your ${qspUntranslated(s, "lcase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))}. Neither of them is too gentle about it. Within seconds, you find yourself gagging on cock on one end and being roughly pounded on the other. After a while, they change positions. You can tell this is definitely not the first time they've used a girl together. You're surprised at the number of positions they manage to fuck you in, but at the same time, are too horny to care and just enjoy your "punishment".`);
    // TODO-QSP: gs 'arousal', 'bj', 15, $npcID[1], 'sub', 'deepthroat', 'group', 'rough'
    // TODO-QSP: gs 'arousal', 'vaginal', -15, $npcID[2], 'sub', 'group', 'rough'
    // TODO-QSP: gs 'arousal', 'bj', 15, $npcID[2], 'sub', 'deepthroat', 'group', 'rough'
    // TODO-QSP: gs 'arousal', 'vaginal', -15, $npcID[1], 'sub', 'group', 'rough'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    // TODO-QSP: :misha_tootight
    (s as any).stepmisha = Math.floor(Math.random() * 13) + 0;
    if (((s as any).stepmisha ?? 0) === 0) {
      scene.img(`images/characters/pavlovsk/resident/misha/sex/misha.cum0,${Math.floor(Math.random() * 2) + 0}.jpg`);
      // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
      // TODO-QSP: gs 'cum_call', 'face', $boy[2], 1
      scene.text('Eventually, they\'re close enough to reach orgasm, telling you to get on your knees and take it on your face like a good little slut. You simply get down on your knees and do everything they say, having way too much of a good time to cause any trouble. They drop their loads on your face one at a time while you try to lick off any bits of cum that drop close enough to your mouth. Then, being fully satisfied by you, they drop back into their chairs and resume their drinking, not paying any more attention to you.');
      qspCall(s, 'arousal', 'end');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/father.misha1,5.jpg');
      // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[1], 'sub', 'group', 'rough'
      // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[2], 'sub', 'group', 'rough'
      // TODO-QSP: gs 'cum_call', '', $boy[2], 1
      // TODO-QSP: gs 'cum_call', 'anus', $boy[1], 1
      scene.text('Finally, Uncle Misha fills up your pussy, while your stepfather comes inside your ass.');
      qspCall(s, 'arousal', 'end');
      if (((s as any).stepmisha ?? 0) === 2) {
        scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/garagefuck.mp4');
        // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[2], 'sub', 'group', 'rough'
        // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[1], 'sub', 'group', 'rough'
        // TODO-QSP: gs 'cum_call', '', $boy[1], 1
        // TODO-QSP: gs 'cum_call', 'anus', $boy[2], 1
        scene.text('Finally, your stepfather fills up your pussy, while Uncle Misha comes inside your ass.');
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).pcs_vag ?? 0) < 15) {
          // TODO-QSP: jump 'misha_tootight'
        }
        scene.img('images/shared/sex/group/doublevag2.mp4');
        // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[1], 'sub', 'group', 'rough'
        // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[2], 'sub', 'group', 'rough'
        // TODO-QSP: gs 'cum_call', '', $boy[1], 1
        // TODO-QSP: gs 'cum_call', '', $boy[2], 1
        qspCall(s, 'npc_relationship', 'modify', 'A28', 2);
        scene.text('Finally, they force their cocks in your pussy simultaneously and push up inside you. The gravity helps them move you down on them to the hilt, but you still feel incredibly complete with their dicks.');
        scene.text('For a few minutes, your pussy feels almost too tight. You moan and hang on while they piston inside your tight cunt, and in the end, they both cum inside of you simultaneously.');
        qspCall(s, 'arousal', 'end');
        if (((s as any).stepmisha ?? 0) === 5) {
          scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/father.misha1,0.jpg');
          // TODO-QSP: gs 'arousal', 'bj', 10, $npcID[1], 'sub', 'group', 'rough'
          // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[2], 'sub', 'group', 'rough'
          // TODO-QSP: gs 'cum_call', '', $boy[2], 1
          // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
          // TODO-QSP: dynamic text: Finally your <<lcase(mid($boydesc[2],1,1))>><<mid($boydesc[2],2,len($boydesc[2])...
          scene.text(`Finally your ${qspUntranslated(s, "lcase(mid(boydesc[2],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[2]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[2]", { location: "misha" })).length)-1)))} fills up your pussy, while your ${qspUntranslated(s, "lcase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))} fills up your mouth.`);
          qspCall(s, 'arousal', 'end');
        } else {
          scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/father.gar.1,0.jpg');
          // TODO-QSP: gs 'arousal', 'bj', 10, $npcID[2], 'sub', 'group', 'rough'
          // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[1], 'sub', 'group', 'rough'
          // TODO-QSP: gs 'cum_call', '', $boy[1], 1
          // TODO-QSP: gs 'cum_call', 'mouth', $boy[2], 1
          // TODO-QSP: dynamic text: Finally your <<lcase(mid($boydesc[1],1,1))>><<mid($boydesc[1],2,len($boydesc[1])...
          scene.text(`Finally your ${qspUntranslated(s, "lcase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))} fills up your pussy, while your ${qspUntranslated(s, "lcase(mid(boydesc[2],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[2]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[2]", { location: "misha" })).length)-1)))} fills up your mouth.`);
          qspCall(s, 'arousal', 'end');
          if (((s as any).stepmisha ?? 0) >= 7  &&  ((s as any).stepmisha ?? 0) <= 8) {
            // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[2], 'sub', 'group', 'rough'
            // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[1], 'sub', 'group', 'rough'
            // TODO-QSP: gs 'cum_call', '', $boy[1], 1
            // TODO-QSP: gs 'cum_call', '', $boy[2], 1
            scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/firstguy.mp4');
            // TODO-QSP: dynamic text: "Seriously, come already!" says <<lcase(mid($boydesc[1],1,1))>><<mid($boydesc[1]...
            scene.text(`"Seriously, come already!" says ${qspUntranslated(s, "lcase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))}, while watching his brother fuck you.`);
            scene.text('"Hang on, I\'m going to cum inside her puss… ahh… yeah, that\'s it!"');
            // TODO-QSP: dynamic text: <<ucase(mid($boydesc[2],1,1))>><<mid($boydesc[2],2,len($boydesc[2])-1)>> pulls o...
            scene.text(`${qspUntranslated(s, "ucase(mid(boydesc[2],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[2]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[2]", { location: "misha" })).length)-1)))} pulls out of your pussy, causing the pumped-in sperm to start to flow out, but it doesn't have much time.`);
            scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/secondguy.mp4');
            // TODO-QSP: dynamic text: <<ucase(mid($boydesc[1],1,1))>><<mid($boydesc[1],2,len($boydesc[1])-1)>> immedia...
            scene.text(`${qspUntranslated(s, "ucase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))} immediately jumps to the newly available hole, and stuffs his prick inside.`);
            // TODO-QSP: dynamic text: "Ohh, yeah!" groans your <<lcase(mid($boydesc[1],1,1))>><<mid($boydesc[1],2,len(...
            scene.text(`"Ohh, yeah!" groans your ${qspUntranslated(s, "lcase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))}, cumming almost immediately inside your womb. "That's how you fuck a whore properly!"`);
            // TODO-QSP: dynamic text: "All right, get lost, <<$pcs_nickname>>!" says <<lcase(mid($boydesc[2],1,1))>><<...
            scene.text(`"All right, get lost, ${((s as any).pcs_nickname ?? 0)}!" says ${qspUntranslated(s, "lcase(mid(boydesc[2],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[2]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[2]", { location: "misha" })).length)-1)))}, while slapping your ass. "We are done."`);
            (s as any).cump = 3;
            qspCall(s, 'arousal', 'end');
          } else {
            // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[2], 'sub', 'group', 'rough'
            // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[1], 'sub', 'group', 'rough'
            // TODO-QSP: gs 'cum_call', 'anus', $boy[1], 1
            // TODO-QSP: gs 'cum_call', 'anus', $boy[2], 1
            scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/firstguy.mp4');
            // TODO-QSP: dynamic text: "Seriously, come already!" says <<$boydesc[2]>>, watching his brother fucking yo...
            scene.text(`"Seriously, come already!" says ${qspUntranslated(s, "boydesc[2]", { location: "misha" })}, watching his brother fucking you.`);
            scene.text('"Hang on, I\'m going to cum inside her ass soon… ahh… yeah, that\'s it!"');
            // TODO-QSP: dynamic text: <<ucase(mid($boydesc[1],1,1))>><<mid($boydesc[1],2,len($boydesc[1])-1)>> pulls o...
            scene.text(`${qspUntranslated(s, "ucase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))} pulls out of your gaping anus, causing the pumped-in sperm to start to flow out, but it doesn't have much time.`);
            scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/secondguy.mp4');
            // TODO-QSP: dynamic text: <<ucase(mid($boydesc[2],1,1))>><<mid($boydesc[2],2,len($boydesc[2])-1)>> immedia...
            scene.text(`${qspUntranslated(s, "ucase(mid(boydesc[2],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[2]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[2]", { location: "misha" })).length)-1)))} immediately jumps to the newly available hole, and stuffs his prick inside.`);
            // TODO-QSP: dynamic text: "Ohh, yeah!" groans your <<lcase(mid($boydesc[2],1,1))>><<mid($boydesc[2],2,len(...
            scene.text(`"Ohh, yeah!" groans your ${qspUntranslated(s, "lcase(mid(boydesc[2],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[2]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[2]", { location: "misha" })).length)-1)))}, cumming almost immediately inside your colon. "That's how you fuck a whore properly!"`);
            // TODO-QSP: dynamic text: "All right, get lost, <<$pcs_nickname>>!" says <<lcase(mid($boydesc[1],1,1))>><<...
            scene.text(`"All right, get lost, ${((s as any).pcs_nickname ?? 0)}!" says ${qspUntranslated(s, "lcase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))}, while slapping your ass. "We are done."`);
            qspCall(s, 'arousal', 'end');
            if (((s as any).pcs_ass ?? 0) < 15) {
              // TODO-QSP: jump 'misha_tootight'
            }
            scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/doubleanal.mp4');
            // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[2], 'sub', 'group', 'rough'
            // TODO-QSP: gs 'arousal', 'anal', -10, $npcID[1], 'sub', 'group', 'rough'
            // TODO-QSP: gs 'cum_call', 'anus', $boy[2], 1
            // TODO-QSP: gs 'cum_call', 'anus', $boy[1], 1
            qspCall(s, 'npc_relationship', 'modify', 'A28', 2);
            qspCall(s, 'stat', '');
            scene.text('Finally, they both force their cocks in your ass simultaneously and push up inside of you. The gravity helps you slide down on them to the hilt, but you still feel incredibly complete with their dicks.');
            scene.text('For a few minutes, your anus feels almost too full. You moan and hang on while they piston inside of your ass, and in the end, they both cum inside you simultaneously.');
            qspCall(s, 'arousal', 'end');
          }
          scene.actions([
            { label: 'Regain your composure and get up', goto: ['GarGazel', ''] },
          ]);
        }
      }
    }
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
    case '1':
      enter1(s, scene);
      break;
    case '1_2nd_part':
      enter1_2ndPart(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    default:
      enter1(s, scene);
      break;
  }
}

export const misha: LocationDef = {
  name: 'misha',
  title: 'You enter Uncle Misha\'s apartment. He lets you in, and you t',
  region: 'other',
  description: ['You enter Uncle Misha\'s apartment. He lets you in, and you take a seat as he glances down the hallway once more to see if anyone saw you walk in. Content that the hallway is empty, he closes the door behind him. He immediately reaches for his pants and pulls out his giant cock with a lewd grin.'],
  enter: enter,
};
