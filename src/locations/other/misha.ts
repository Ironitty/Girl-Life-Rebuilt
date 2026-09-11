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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to service him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    (s as any).npc_had_sex[String((s as any).boy ?? 0)] = 1;
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
    qspCall(s, 'boyStat', 'A54', '' + qspUntranslated(s, "rand(1,2)>", { location: "misha" }) + '');
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
    if ((!((s as any).stepmisha ?? 0))) {
      scene.img(`images/characters/pavlovsk/resident/misha/sex/misha.cum0,${Math.floor(Math.random() * 2) + 0}.jpg`);
      // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
      // TODO-QSP: gs 'cum_call', 'face', $boy[2], 1
      scene.text('Eventually, they\'re close enough to reach orgasm, telling you to get on your knees and take it on your face like a good little slut. You simply get down on your knees and do everything they say, having way too much of a good time to cause any trouble. They drop their loads on your face one at a time while you try to lick off any bits of cum that drop close enough to your mouth. Then, being fully satisfied by you, they drop back into their chairs and resume their drinking, not paying any more attention to you.');
      qspCall(s, 'arousal', 'end');
    } else {
      if (((s as any).stepmisha ?? 0) === 1) {
        scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/father.misha1,5.jpg');
        // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[1], 'sub', 'group', 'rough'
        // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[2], 'sub', 'group', 'rough'
        // TODO-QSP: gs 'cum_call', '', $boy[2], 1
        // TODO-QSP: gs 'cum_call', 'anus', $boy[1], 1
        scene.text('Finally, Uncle Misha fills up your pussy, while your stepfather comes inside your ass.');
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).stepmisha ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/garagefuck.mp4');
          // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[2], 'sub', 'group', 'rough'
          // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[1], 'sub', 'group', 'rough'
          // TODO-QSP: gs 'cum_call', '', $boy[1], 1
          // TODO-QSP: gs 'cum_call', 'anus', $boy[2], 1
          scene.text('Finally, your stepfather fills up your pussy, while Uncle Misha comes inside your ass.');
          qspCall(s, 'arousal', 'end');
        } else {
          if ((((s as any).stepmisha ?? 0) === 3  ||  ((s as any).stepmisha ?? 0) === 4)) {
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
          } else {
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
              if (((s as any).stepmisha ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/father.gar.1,0.jpg');
                // TODO-QSP: gs 'arousal', 'bj', 10, $npcID[2], 'sub', 'group', 'rough'
                // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[1], 'sub', 'group', 'rough'
                // TODO-QSP: gs 'cum_call', '', $boy[1], 1
                // TODO-QSP: gs 'cum_call', 'mouth', $boy[2], 1
                // TODO-QSP: dynamic text: Finally your <<lcase(mid($boydesc[1],1,1))>><<mid($boydesc[1],2,len($boydesc[1])...
                scene.text(`Finally your ${qspUntranslated(s, "lcase(mid(boydesc[1],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[1]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[1]", { location: "misha" })).length)-1)))} fills up your pussy, while your ${qspUntranslated(s, "lcase(mid(boydesc[2],1,1))", { location: "misha" })}${((qspUntranslated(s, "boydesc[2]", { location: "misha" })).slice((2)-1, ((2)-1)+(((qspUntranslated(s, "boydesc[2]", { location: "misha" })).length)-1)))} fills up your mouth.`);
                qspCall(s, 'arousal', 'end');
              } else {
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
                  if (((s as any).stepmisha ?? 0) >= 9  &&  ((s as any).stepmisha ?? 0) <= 10) {
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
                  } else {
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
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Regain your composure and get up', goto: ['GarGazel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWallet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  if (((s as any).mishaQW ?? 0)?.['dirty_girl'] >= 1) {
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty1.jpg');
    scene.text('You smile a bit and nod. "Ok, I\'ll go get your cigarettes." He gives you a friendly smile as he leans against the rail to wait for you. You turn and head into his apartment, looking around the living room, but not finding them. Then, you go into his kitchen and see them laying on the counter. You notice this time, his wallet is nowhere to be seen. As you start to grab them, you hear someone behind you and turn around to see Uncle Misha standing there. "I can\'t stop thinking about you since I had you last time, I want you again. After all, I did let you go, you little thief." He says, while his eyes roam over you hungrily.');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty2.jpg');
    scene.text('You shake your head no. "No… that was a one time thing, that\'s all."');
    scene.text('He looks at you, not mad, but obviously disappointed. "Fine fine, go on then," he says as he reaches around you to grab his pack of smokes. You don\'t wait for him to say more, heading out of his apartment and going on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ok we can do it again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty3.jpg');
    scene.text('You can\'t believe you are thinking about this, but you are. He is old enough to be your grandpa, yet you really enjoyed the fucking he gave you last time. So you nod yes to him and see a big smile break out on his face. He places a bottle on the counter; you realize he had a small bottle of lube in his hand this whole time, as he reaches for you and starts to remove your clothes.');
    scene.actions([
      { label: 'Get stripped', goto: ['misha', 'dirty_bj'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet1.jpg');
    scene.text('You smile a bit and nod. "Ok, I will go get your cigarettes." He gives you a friendly smile as he leans against the rail to wait for you. You turn and head into his apartment, seeing the pack of smokes sitting on a small table in his living room. You also notice his wallet lying on the table. You have a sudden thought… you could take it. He always has money, surely he could spare a little? You could definitely use it. You shake your head at the thought, as if trying to dismiss it. You really shouldn\'t steal his wallet… should you?');
    scene.actions([
      { label: 'Just grab the cigarettes', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/event/mishasmoke.jpg');
    scene.text('No, you won\'t steal from him. You just pick up the pack of smokes and head back out into the hallway. Handing the pack over, he gives you a friendly smile while pulling one out and lighting it at once. As Uncle Misha smokes his cigarette, you engage with him in some small talk. When he finishes the cigarette, he apologizes and says he has to go.');
    scene.actions([
      { label: 'Say goodbye', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
      { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet2.jpg');
    scene.text('You can\'t believe you are thinking about this, but you are. You put your hand on the wallet, then look towards the door to see if he has come in. You stand there a moment looking, waiting… and nothing. All it would take is picking up the wallet and slipping it in your clothes.');
    scene.actions([
      { label: 'Take the wallet', goto: ['misha', 'take_wallet'] },
      { label: 'Leave the wallet', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/event/mishasmoke.jpg');
    scene.text('No, you won\'t steal from him. You just pick up the pack of smokes and head back out into the hallway. Handing the pack over, he gives you a friendly smile, pulling one out and lighting it at once. While Uncle Misha smokes his cigarette, you engage with him in some small talk. When he finishes the cigarette, he apologizes and says he has to go.');
    scene.actions([
      { label: 'Say goodbye', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterTakeWallet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet3.jpg');
  scene.text('You pick up the wallet and slide it into your clothes, then you grab the pack of smokes. You take a calming breath. You can\'t look nervous or guilty or he will know something is up. After a couple of breaths, you are ready to go face him.');
  scene.actions([
    { label: 'Turn around and leave', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).mishaQW['caught'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet4.jpg');
    scene.text('As you turn and walk to the hallway, you see him standing their watching you and your heart drops. You took too long or he just had a sixth sense what you might be up to. Maybe he didn\'t notice! You do your best to smile and walk past him, handing him the pack of smokes. He takes the pack from you and, for a moment, you think you got away with it. But just as you start to walk past him, he grabs you by the clothes right where his wallet is. He looks down at it and then at you. He doesn\'t look nearly as mad as you thought he would. Maybe this won\'t be so bad. "I trusted you, young lady. I think we need to have a talk," he says as he leads you back into his living room.');
    scene.actions([
      { label: 'Walk back into the living room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet5.jpg');
    scene.text('Once you are back by the table, he pulls his wallet free from your clothes and shakes his head. "I am so hurt by your betrayal. I should call the police or, at the very least, call your mother over here." You feel your blood run cold. He wouldn\'t call the police… but that might be better than your mother and stepfather finding out about this.');
    scene.text('"Please don\'t, I promise I will never do it again," you beg him.');
    scene.text('He frowns as he says, "I would like to believe you, but I just don\'t. You won\'t learn unless you are punished. Now sit down."');
    scene.actions([
      { label: 'Take the seat and wait', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet6.jpg');
    scene.text('He sighs and, after a moment, he finally speaks up. "I won\'t call the police this time or tell your mother. But in return, you have to come over here once a week and clean my whole apartment for a month straight. If you don\'t, I\'ll tell your parents. Deal?"');
    scene.actions([
      { label: 'Beg him for something else', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet7.jpg');
    scene.text('You don\'t think you would have time to clean his apartment, plus you really don\'t want to. "Please Uncle Misha, I don\'t have time." You see his face darken. "Anything, I will do anything else for you to forget this ever happened."');
    scene.text('He stops at your words. "Now girl, you should know better than to tell a man you would do anything."');
    scene.text('You swallow and realize what he means by that and watch as he points to his crotch. "If you will truly do anything, get on your knees and suck my cock like a good little girl. Get me nice and hard so I can fuck you."');
    scene.actions([
      { label: 'Suck his cock', goto: ['misha', 'wallet_bj'] },
      { label: 'Agree to be his maid instead', goto: ['misha', 'maid_agree'] },
    ]);
  } },
      { label: 'Agree to be his maid', goto: ['misha', 'maid_agree'] },
    ]);
  } },
      { label: 'Take the seat and beg him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet7.jpg');
    scene.text('"Please, Uncle Misha! Anything, I will do anything for you to forget this ever happened," you beg him.');
    scene.text('He stops at your words. "Now girl, you should know better than to tell a man you would do anything."');
    scene.text('You swallow and realize what he means by that and watch as he points to his crotch. "If you will truly do anything, get on your knees and suck my cock like a good little girl. Get me nice and hard so I can fuck you."');
    scene.actions([
      { label: 'Suck his cock', goto: ['misha', 'wallet_bj'] },
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).mishaQW['maid'] = 1;
    qspCall(s, 'stat', '');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet6.jpg');
    scene.text('You shake your head. "No! I\'am not a whore and you shouldn\'t treat me like one."');
    scene.text('His face darkens in anger for a moment. "No, but you are a thief. You are the one begging, saying you\'ll do \'anything\'." You start to say something about how that is NOT what you meant, but he holds up a hand to stop you. Then he sighs and, after a moment, he finally speaks up. "I won\'t call the police this time or tell your mother. But in return, you have to come over here once a week and clean my whole apartment for a month straight. If you don\'t, I\'ll tell your parents. Deal?"');
    scene.actions([
      { label: 'Suck his cock instead', goto: ['misha', 'wallet_bj'] },
      { label: 'Agree to be his maid instead', goto: ['misha', 'maid_agree'] },
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

function enterMaidAgree(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'small');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).mishaQW['maid'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet_maid.jpg');
  // TODO-QSP: $agreeText
  scene.text('His face softens a bit. "Ah, we were all young once. You hold up your end of the deal and we will forget all about it. Now get out of here before I change my mind!" You thank him again and then hurriedly leave his apartment. Now you\'ve got to come up with enough time to clean his place.');
  scene.actions([
    { label: 'Say goodbye', goto: ['pod_ezd', 'etaj_2'] },
  ]);
  scene.build();
}

function enterWalletBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A54');
  (s as any).mishaQW['dirty_girl'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet8.jpg');
  scene.text('As you slide off of the chair in front of him, he undoes his belt and unbuttons his pants. His pants fall down around his ankles, exposing his fairly long and very thick cock in front of you as you squat in front of him. You take his soft dick into your mouth and you feel it quickly start to harden as you suck on it. "Ohh yeah, you are a dirty little girl. Bet you\'ve had a lot of cocks in your mouth, haven\'t you?" You can tell by how he said it that he isn\'t expecting a response.');
  qspCall(s, 'arousal', 'bj', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep sucking his dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet9.jpg');
    scene.text('You stay squatting in front of him sucking his thick dick. As you do, you ponder the life choices you made to get you to this place. Sucking an old man\'s dick… surely you could have made better choices than this. Oh well, nothing to be done for it but get this done. "Strip so I can see that taut young body of yours."');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet10.jpg');
    scene.text('You do as you are told, you knew where this was going when you agreed to it. As you take off your clothes, Uncle Misha does the same thing, stripping naked as well. Once you are both naked, he smacks you in the face with his dick without saying a word. You know what he wants and you start sucking his dick again.');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking his cock', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet11.jpg');
    scene.text('As you suck his dick, he places a hand behind the back of your head and forces you to take his fat dick all the way into your mouth and throat, until your nose is smashed against his chubby belly. For a couple of minutes, he does that before finally turning you loose. As he does, he says, "Get up and bend over the table like a good little girl."');
    qspCall(s, 'arousal', 'bj', 2, 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get up and bend over', goto: ['misha', 'wallet_vag'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalletVag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A54');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet12.jpg');
  // TODO-QSP: dynamic text: Taking his dick out of your mouth, you stand up and face the table. Once you do,...
  scene.text(`Taking his dick out of your mouth, you stand up and face the table. Once you do, you bend over it, glancing back to see him step up behind you. Moments later, you feel the tip of his dick rubbing against your wet slit. Once he is sure both are nice and wet, he slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into your wet pussy. Then he starts to slowly stroke his dick inside of you.`);
  qspCall(s, 'arousal', 'vaginal', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Enjoy the fucking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet13.jpg');
    scene.text('"Damn, you\'re a tight little thing, aren\'t you?" he says as he steadily fucks you; not too fast, not too hard, but a nice good steady rhythm. You find yourself quickly starting to moan from the dicking Uncle Misha is giving you. Apparently, experience really does make a difference! He seems able to just hit the perfect speed while fucking you.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked some more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet14.jpg');
    scene.text('He picks up the pace a little, but it is still near perfect. Your moans get louder and louder as he does, and just as it is really building up inside of you, he suddenly pulls out. You glance back, thinking at first he might have started cumming, but instead, you see him walk over to the end table by the couch and open the drawer. He walks back over holding a tube full of lube in his hand. Once he is back over to you, he squirts some of the lube into the crack of your ass. With his fingers, he rubs the lube in really well, until your asshole is nice and slick. "Let\'s see if this ass is as tight as your pussy was." is all he says as he tosses the lube aside.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait', goto: ['misha', 'wallet_anal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalletAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A54');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet15.jpg');
  // TODO-QSP: dynamic text: You feel his dick slide between your butt checks as he rubs the tip of his cock ...
  scene.text(`You feel his dick slide between your butt checks as he rubs the tip of his cock against your asshole. Then, he starts pushing it forward until the tip of his dick pops into your asshole, causing you to gasp for a moment. He stops moving until you relax, then he slowly forces his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick all the way into your asshole. Following that, he starts to slowly fuck your ass, his massive dick causing your hole to stretch. "OH… even tighter than I was hoping for."`);
  qspCall(s, 'arousal', 'anal', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Enjoy the ass fucking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet16.jpg');
    scene.text('You tightly grip the edge of the table as his massive cock stretches your ass. He isn\'t too rough and you soon find yourself enjoying the feeling of his cock plowing your asshole, moans escaping your lips as you close your eyes and enjoy it. He laughs a bit. "I always knew you were a dirty girl, you\'ve got the genes for it."');
    qspCall(s, 'arousal', 'anal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet17.jpg');
    scene.text('He grips your hips with his hands as he starts to grunt more and pick up the pace. He roughly fucks your ass hard and deep until it sounds like he is getting close to an orgasm. Sure enough, after only a minute or two, he pulls his dick out of your ass. Pulling you off the table, you feel his hand press you down onto your knees.');
    qspCall(s, 'arousal', 'anal', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/wallet/wallet17.jpg');
    scene.text('You slide off the table and, kneeling in front of him, open your mouth. Big spurts of cum splash over your face, with a little bit of it getting into your mouth. As he cums on you, you idly wonder how long it has been since he got any pussy. By the amount of cum, you would guess a while. Once he finishes, he continues to pant hard, like he is out of breath. He grabs the pack of smokes, then goes over and half sits, half falls onto the couch. "Fuck, I am not as young as I used to be, but damn was that fun." With that, he lights up a cigarette and takes a long drag off of it. "Why don\'t you clean yourself up and get going?" Then he leans back to relax as he watches you clean the cum off your face and get dressed. Once dressed, not knowing what to say, you just leave.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Say goodbye', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDirtyBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A54');
  (s as any).mishaQW['dirty_girl'] = ((s as any).mishaQW['dirty_girl'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty4.jpg');
  scene.text('As you stand there, he strips off all your clothes, then turns you around to get a nice view of your ass. He delivers a firm slap to your ass, hard enough to make you give a little yelp. "Damn, you are such a dirty girl." As you turn back to face him, he grabs and lifts you. He is surprisingly strong for his age, as he has no problems lifting you up and setting you on the counter. As you sit on the counter naked, he pushes your legs apart, exposing your moist pussy to him. He then slowly gets down on his knees in front of you.');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty5.jpg');
    scene.text('He leans his head in and starts licking your pussy, causing it to quickly become wet. You moan as his mouth works your pussy, draping one of your legs over him as you lean back against the cabinets and enjoy yourself. After only a couple of minutes of this, he gets up slowly, then backs up a couple of steps and starts to unbutton his pants. "Now get over here, girl, and return the favor."');
    qspCall(s, 'arousal', 'cuni', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty6.jpg');
    scene.text('You do as you are told, sliding off the counter top. Walking over the couple of steps to him, you then drop down to your knees and takes his soft dick into your mouth. It doesn\'t take much sucking before his massively thick dick is filling your whole mouth.');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking his cock', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty7.jpg');
    scene.text('As you suck his dick, he places a hand behind the back of your head and forces you to take his fat dick all the way into your mouth and throat until your nose is smashed against his chubby belly. For a couple of minutes, he does that before turning you loose. As he does, he says, "Get up and bend over the table like the dirty little girl that you are."');
    qspCall(s, 'arousal', 'bj', 2, 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get up and bend over', goto: ['misha', 'dirty_vag'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDirtyVag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A54');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty8.jpg');
  // TODO-QSP: dynamic text: Taking his dick out of your mouth, you stand up and face the table. Once you do,...
  scene.text(`Taking his dick out of your mouth, you stand up and face the table. Once you do, you bend over it. Glancing back, you see him step up behind you. Moments later, you feel the tip of his dick rubbing against your wet slit. Once he is sure both are nice and wet, he slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into your wet pussy. Then, he starts to fuck your pussy; slowly, at first, working himself deeper and deeper into you.`);
  qspCall(s, 'arousal', 'vaginal', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Enjoy the fucking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty9.jpg');
    scene.text('"Damn, you\'re a tight little thing, aren\'t you?" He gives your ass cheek a slap with his hand. He steadily fucks you; not too fast, not too hard, but a nice steady rhythm. You find yourself quickly starting to moan from the dicking Uncle Misha is giving you. Grabbing onto your hips with both hands, he starts picking up the speed and fucking you harder and faster.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked some more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty10.jpg');
    scene.text('He picks up the pace a little, but it is still near perfect, your moans getting louder and louder as he does. Just then, you notice something squirting into the crack of your ass as he fucks your twat. You glance back and see him holding a tube filled with lube in his hand. He sits the lube aside and, with his fingers, rubs the lube in really well until your ass is nice and slick. "Let\'s see how well that tight little nubile ass of yours holds up this time," he says as he pulls his dick out of you.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait', goto: ['misha', 'dirty_anal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDirtyAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A54');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty11.jpg');
  // TODO-QSP: dynamic text: You feel his dick slide between your butt checks as he rubs the tip of his cock ...
  scene.text(`You feel his dick slide between your butt checks as he rubs the tip of his cock against your asshole. Then, he starts pushing it forward until the tip of his dick pops into your asshole, causing you to gasp softly. He stops moving until you relax, then he slowly forces his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick all the way into your asshole. Following that, he starts to slowly fuck your ass, his massive dick causing your hole to stretch. "OH… just as tight as last time. Don't worry, I'll stretch it out for you, girl."`);
  qspCall(s, 'arousal', 'anal', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Enjoy the ass fucking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty12.jpg');
    scene.text('You tightly grip the edge of the table as his massive cock stretches your ass. He isn\'t too rough, and you soon find yourself enjoying the feeling of his cock plowing your butt, moans escaping your lips as you close your eyes and enjoy it. He laughs a bit as he picks up the pace and starts fucking you harder and faster. "You love getting your ass pounded, don\'t you? Shouldn\'t be surprised…" The last part he seems to say more to himself than you.');
    qspCall(s, 'arousal', 'anal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty13.jpg');
    scene.text('He grips your hips with his hands as he starts to grunt more and pick up the pace. He roughly fucks your ass hard and deep, your hips bouncing against the edge of the table with every thrust, causing the table to creak and groan from the force of the pounding. After a couple of minutes, it sounds like he is getting close to an orgasm and, sure enough, he pulls his dick out of your ass, pulls you off of the table, and you feel his hand press you down to your knees.');
    qspCall(s, 'arousal', 'anal', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/misha/sex/dirty_girl/dirty14.jpg');
    scene.text('You slide off the table and kneel in front of him, opening your mouth. Big spurts of cum splash over your tits, a little bit of it getting onto your chin. He cums a lot again. Maybe this is just normal for him. Once he finishes, he continues to pant hard, like he is out of breath. He grabs the pack of smokes, then goes over and half sits, half falls onto one of the kitchen chairs. "Damn girl, you are going to give me a heart attack at this rate, but what a way to go." With that, he lights up a cigarette and takes a long drag off of it. "Why don\'t you clean yourself up and get going?" Then he leans back to relax as he watches you clean the cum off you and get dressed. Once dressed, not knowing what to say, you just leave.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Say goodbye', goto: ['pod_ezd', 'etaj_2'] },
    ]);
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
    case 'wallet':
      enterWallet(s, scene);
      break;
    case 'take_wallet':
      enterTakeWallet(s, scene);
      break;
    case 'maid_agree':
      enterMaidAgree(s, scene);
      break;
    case 'wallet_bj':
      enterWalletBj(s, scene);
      break;
    case 'wallet_vag':
      enterWalletVag(s, scene);
      break;
    case 'wallet_anal':
      enterWalletAnal(s, scene);
      break;
    case 'dirty_bj':
      enterDirtyBj(s, scene);
      break;
    case 'dirty_vag':
      enterDirtyVag(s, scene);
      break;
    case 'dirty_anal':
      enterDirtyAnal(s, scene);
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
