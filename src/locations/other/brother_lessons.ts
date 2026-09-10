import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHomework(s: GameState, scene: SceneBuilder): void {
  (s as any).brotherQW['last_day_homework'] = ((s as any).daystart ?? 0);
  if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 1);
  }
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 21) + 50);
  (s as any).ivrand = Math.floor(Math.random() * 2) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).npc_QW ?? 0)?.['A34'] >= 2  &&  ((s as any).npc_rel ?? 0)?.['A34'] >= 60  &&  ((s as any).ivrand ?? 0) === 1) {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/homework_touch.mp4');
    if (((s as any).npc_QW ?? 0)?.['A34'] >= 3  &&  ((s as any).locat ?? 0)?.['Stepdad'] !== 10) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
      scene.text('Partway through your sibling study session, you suddenly feel Kolka\'s hand stroking your leg.');
      if (((s as any).brotherkisstalk ?? 0) === 1  ||  ((s as any).brotherQW ?? 0)?.['Sex'] > 5) {
        scene.actions([
          { label: 'Turn and kiss', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss.mp4');
    scene.text('You chew on your lip for a moment, enjoying the feeling of your brother\'s caresses. Turning towards him, you lean in slowly and give him a delicate kiss while he continues to stroke your leg.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).brotherQW['kiss'] = ((s as any).brotherQW['kiss'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A34', 3);
    scene.actions([
      { label: 'End the kiss', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('Breaking away from the kiss with a smile, you gently move his hand away from your leg.');
    scene.text('"Sorry Kolka, not today. Maybe some other time. Let\'s keep studying for now, alright?"');
    scene.text('"Alright…" He\'s clearly disappointed but seems to pay attention to your help for the rest of the hour anyways.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
      { label: 'Make out with your brother', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss_lips.mp4');
    scene.text('You hungrily continue to kiss your brother, pressing your face hard against his. It becomes impossible for you to focus on anything except your lips and the dance of tongues happening between them.');
    qspCall(s, 'npc_relationship', 'modify', 'A34', 2);
    (s as any).motherhw = Math.floor(Math.random() * 5) + 1;
    if (((s as any).motherhw ?? 0) === 5) {
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>!"
      scene.text(`"${((s as any).pcs_firstname ?? 0)}!"`);
      scene.actions([
        { label: '"Eek-!"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('You squeak loudly in response to hearing your mother shouting your name from the kitchen. You and Kolka swiftly pull back from each other, stiff as boards as you purposely look opposite directions from each other.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>!" your mother calls again. "What are you doing right now? I ...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}!" your mother calls again. "What are you doing right now? I need your help in the kitchen! Are you busy?"`);
    scene.text('"I-I\'m, uhh, helping Kolka with his homework right now!" you stammer, trying to force down the adrenaline in your body and keep your voice from shaking.');
    scene.text('"Oh, that\'s alright then. You can help me later. Make sure your brother gets his grades up!"');
    scene.text('Sighing with relief, you and your brother share a panicked look before turning back to the table with his homework on it. For the rest of the hour, the two of you don\'t make eye contact, let alone even <i>think</i> about doing something that might get you caught again.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('Not a lot of homework gets done after that, but you don\'t think your brother minds too much.');
      scene.actions([
        { label: 'Finish', goto: ['sitrPar', ''] },
      ]);
    }
  } },
      { label: 'Slip your hand down his pants', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/hj.jpg');
    scene.text('Lust takes control of your mind as you force your tongue down your brother\'s throat, slipping your hand into his pants to grab hold of his already hardened cock. You yank it out to begin vigorously jerking him off, never stopping your kiss for a moment. He groans into your mouth but you just keep working your hand on his cock.');
    (s as any).brotherhj = ((s as any).brotherhj ?? 0) + (1);
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 5) {
      (s as any).brotherQW['Sex'] = 5;
    }
    qspCall(s, 'npc_relationship', 'modify', 'A34', 3);
    if (((s as any).motherhw ?? 0) === 5) {
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>!"
      scene.text(`"${((s as any).pcs_firstname ?? 0)}!"`);
      scene.actions([
        { label: '"Eek-!"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('You squeak loudly in response to hearing your mother shouting your name from the kitchen and leap back from Kolka as he hurriedly pulls his shirt over his cock to hide it.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>!" your mother calls again. "What are you doing right now? I ...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}!" your mother calls again. "What are you doing right now? I need your help in the kitchen! Are you busy?"`);
    scene.text('"I-I\'m, uhh, helping Kolka with his homework right now!" you stammer, trying to force down the adrenaline in your body and keep your voice from shaking.');
    scene.text('"Oh, that\'s alright then. You can help me later. Make sure your brother gets his grades up!"');
    scene.text('Sighing with relief, you and your brother share a panicked look before turning back to the table with his homework on it. For the rest of the hour, the two of you don\'t make eye contact, let alone even <i>think</i> about doing something that might get you caught again.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('After a few minutes, you feel him start to stiffen under you.');
      scene.text('"Sis," he mumbles through the kiss. "I\'m… I\'m gonna…"');
      scene.actions([
        { label: 'Continue jerking him off', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'hands', 'A34', 1);
    scene.img('images/shared/sex/handjob/kotovhj.jpg');
    scene.text('Picking up the pace for a quick burst of speed, you feel his hot cum burst all over your hand. Pulling back, you smile at the look of bliss on his face before leaning in for one more loving kiss.');
    // TODO-QSP: dynamic text: "I think we'll have to call the session early if that's alright with you," you s...
    scene.text(`"I think we'll have to call the session early if that's alright with you," you say, purposefully looking down at the sticky cum covering your hands. "I'm gonna go get cleaned up. You should soon too unless you want ${((s as any).npc_nickname ?? 0)?.['A29']} to catch you with your dick out like that."`);
    scene.text('"Y-yeah…" he mumbles back, still dazed from his orgasm.');
    scene.actions([
      { label: 'Finish and get up', goto: ['sitrPar', ''] },
    ]);
  } },
        { label: 'Put your mouth over his tip', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A34', 3);
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
      (s as any).brotherQW['Sex'] = 6;
    }
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/swallow.mp4');
    scene.text('You jerk him off a little faster, waiting for him to stiffen up and the signs that he\'s about to cum. Right at the last moment, you break away from the kiss and wrap your lips around the tip of his cock. You immediately feel him explode inside your mouth, the hot salty taste of his cum pouring out over your tongue.');
    scene.text('He spurts several times and you wait a several seconds more until nothing more comes out. After spending a moment to make sure he\'s finished, you suck hard to gather up all the cum in your mouth while pulling your lips back from his tip and leaving his cock completely clean and cum free. As your lips leave his cock, you tilt back your head to look at him, swallowing in the same motion. Kolka stares at you in disbelief of what you just did.');
    scene.text('"I didn\'t want to leave a mess," you smile bashfully.');
    scene.actions([
      { label: 'Go back to homework', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('After making sure his trousers are back in order and his freshly milked cock has been put back in place, you and your brother go back to his homework for the rest of the hour. Though it feels like he\'s sitting a lot closer to you than he was before…');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
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
      } else {
        scene.actions([
          { label: 'Turn and kiss', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss.mp4');
    scene.text('Turning slowly, you meet Kolka\'s eyes. The feeling of his hand on your leg makes you blush and your heart quicken. Before you know what you\'re doing, you lean forward and feel your brother\'s lips pressing against your own. You close your eyes and melt into the kiss, an endless moment of bliss passing by as you do.');
    scene.text('As your eyes flicker open and see the shocked expression on your brother\'s face, the realization of what you\'ve done suddenly hits you all at once. You pull back immediately, blushing even harder than before and swiftly avert your gaze back to the table with loose pieces of homework scattered about it. Not knowing what else to do, you frantically try to go back to the last thing you were helping him with. For the rest of the hour, your brother seems be stuttering and making a lot more mistakes than before. Eventually, you call your study session with him quits and awkwardly get up to leave, neither of you acknowledging what happened.');
    (s as any).brotherQW['kiss'] = ((s as any).brotherQW['kiss'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A34', 5);
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Ignore and continue', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
      qspCall(s, 'npc_relationship', 'modify', 'A34', 2);
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.text('You continue to do the homework, trying hard not to pay attention to Kolka\'s hand on your leg. Kolka knowing that you do not mind continues to have nice feel of your leg. You feel the warm rush of excitement.');
    (s as any).ivrand = Math.floor(Math.random() * 3) + 1;
    if (((s as any).ivrand ?? 0) === 1  &&  ((s as any).brotherQW ?? 0)?.['last_sex_day_evening'] !== ((s as any).daystart ?? 0)) {
      if ((((s as any).sub ?? 0) > 0  &&  ((s as any).brotherQW ?? 0)?.['know_slut'] === 1)  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 150  ||  ((s as any).brotherQW ?? 0)?.['know_slut'] === 2) {
        scene.text('Kolka boldly slides his hands further upwards, continuing to stroke the insides of your leg, while he tells you:');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, help me with another matter now!"
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, help me with another matter now!"`);
        if (((s as any).pcs_horny ?? 0) > 90) {
          scene.actions([
            { label: 'I thought you would never ask', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherSexStart');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Sure, I\'m always willing to help my little brother', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherSexStart');
  } },
            { label: 'Maybe next time…', goto: ['sitrPar', ''] },
          ]);
        }
      } else {
        scene.text('After you finish explaining the new material, Kolka goes red with excitement and asks:');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, Can you help me out here now?"
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, Can you help me out here now?"`);
        if (((s as any).pcs_horny ?? 0) > 80) {
          scene.actions([
            { label: 'How could I say no if you keep asking so nice?', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherSexStart');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'I think I could teach you a thing or two', handler: (st: GameState) => {
    qspCall(st, 'brother', 'brotherSexStart');
  } },
            { label: 'Maybe next time…', goto: ['sitrPar', ''] },
          ]);
        }
      }
    } else {
      qspCall(s, 'brother_lessons', 'showbody');
      scene.actions([
        { label: 'Finish', goto: ['sitrPar', ''] },
      ]);
    }
  } },
        { label: 'Remove hand and continue', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
    qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/homework1.jpg');
    scene.text('You whisper:');
    scene.text('"Don\'t, our parents will see us." You remove his hand from your leg.');
    scene.text('Kolka mutters something under his breath with grim resentment on his face.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
      ]);
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
      scene.text('As you explain the material, Kolka suddenly begins to slowly stroke your leg with his hand. You freeze in surprise, not knowing what to do.');
      scene.actions([
        { label: 'Ignore and continue', handler: (st: GameState) => {
    if (((s as any).npc_QW ?? 0)?.['A34'] < 3) {
      (s as any).npc_QW['A34'] = 3;
    }
    qspCall(s, 'npc_relationship', 'modify', 'A34', 2);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.text('You decide to continue to do homework, trying not to pay attention to Kolka\'s hand on your leg. He realizes that you don\'t mind so he continues to stroke higher up your leg.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
        { label: 'Remove hand and continue', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
    scene.text('You decide to remove his hand and continue to do homework. Kolka begins to blush and starts to try hard to solve the problems. While not looking you in the eye.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
      ]);
    }
  } else {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/homework1.jpg');
    scene.text('You help your brother with his homework for an hour.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  }
  scene.build();
}

function enterShowbody(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 3);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/homework1.jpg');
  if (((s as any).brotherQW ?? 0)?.['sex_ed'] < 1) {
    if (((s as any).brotherQW ?? 0)?.['anatomy_help'] === 0) {
      scene.text('After you both finish studying, Kolka suddenly goes quiet and his cheeks turn a bright red.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>…" he starts. "I have to learn about human anatomy, but I am h...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}…" he starts. "I have to learn about human anatomy, but I am having trouble with it. Can you help me?"`);
      scene.text('"What do you mean?" you ask, a little confused.');
      scene.text('"Well, um…" Kolka hesitated, "Can you show me what girls look like…');
      scene.actions([
        { label: '"No way"', handler: (st: GameState) => {
    scene.text('"How the fuck can I do that? Should I just take my clothes off in front of you and let you gawk at me? I\'m your sister!"');
    scene.text('"Yes, you are right. I\'m sorry…" Kolka responded in embarrassment.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: '"Huh…"', handler: (st: GameState) => {
    scene.text('You briefly reflect on your brother\'s request and reply, "How would you want me to do that? Should I just take my clothes off in front of you and let you gawk at me!?"');
    scene.text('"Well… That would help but you could also explain each part." He adds.');
    scene.text('You sigh and shake your head, "Surely your text books have pictures"');
    scene.text('"There are pictures, but everything is so badly written, and the teacher skipped the lesson, saying "You already know everything." He explains with flushed face.');
    scene.text('"Okay, I will help you, but only if you don\'t tell anyone. Agreed? I\'m serious, not a single person!" You say in a strict tone.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I promise not a word to anyone!"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, I promise not a word to anyone!"`);
    scene.text('After his promise you consider what to do.');
    scene.actions([
      { label: 'Undress', goto: ['brother_lessons', 'anatomylesson_conception1'] },
      { label: 'Don\'t do it', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: '"What do you mean?"', handler: (st: GameState) => {
    scene.text('"What do you mean?" you ask quizzically.');
    scene.text('"Uhmm… Well… T-the diagrams of b-bodies in this book a-aren\'t very good… I d-don\'t really get them…" he stammers. "So… I was hoping t-that… m-maybe I could just s-see the real thing… i-if… y-you know… y-you\'d let me s-see yours…" When he\'s finished speaking he looks down, seemingly ashamed for even asking.');
    scene.actions([
      { label: '"What?! No way!"', handler: (st: GameState) => {
    scene.text('It finally dawns on you what he\'s asking and you pull back in disgust. "What the hell?! No way! I\'m not about to let you use me as a science project! Ugh! Get a grip Kolka!"');
    // TODO-QSP: dynamic text: "I'm sorry <<$pcs_firstname>>…" he whimpers. "I shouldn't have asked…"
    scene.text(`"I'm sorry ${((s as any).pcs_firstname ?? 0)}…" he whimpers. "I shouldn't have asked…"`);
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Well, nothing beats practical learning', handler: (st: GameState) => {
    scene.text('Now that you finally understand what he\'s suggesting, you muse over it for a moment.');
    scene.text('<i>Well… practical learning is pretty helpful… Might help to show him the real thing,</i> you think to yourself while Kolka visibly squirms in front of you.');
    scene.text('"Okay. Sure."');
    scene.text('Kolka looks up at you in surprise. "Really? You\'ll really do it?"');
    scene.text('"Yeah, I\'ll do it," you say. "Like you said, it might help if you get to see the real thing. I\'m happy to do it to help my little brother," you smile.');
    qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 2) + 2);
    scene.actions([
      { label: 'Undress', goto: ['brother_lessons', 'anatomylesson1'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('Towards the end of the study session, Kolka seems to remember something.');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, remember when you said that you would help me with my an...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, remember when you said that you would help me with my anatomy homework? You know, when…" he stops and cups his hands, leaning in to whisper, "…when you were in the shower? Are you still willing to help me with that?"`);
      scene.actions([
        { label: '"Not right now"', handler: (st: GameState) => {
    scene.text('"Of course I am Kolka, just not right now," you say. "I\'m a little busy at the moment, but if you ask me again later, maybe some other day, okay?"');
    scene.text('"Okay!" he nods, taking it as a promise.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: '"Of course!"', handler: (st: GameState) => {
    scene.text('"Yeah of course!" you say. "How could I forget a promise to my little brother?"');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>! So, before I told you I was having trouble understand...
    scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}! So, before I told you I was having trouble understanding the pictures and diagrams," he says, holding out the book to you. "Is there anything you can do to help me understand it better?" You take the book and flip through the pages he's supposed to be studying. Looks like basic anatomy right now, but later on it seems to move into sexual reproduction and general sex ed.`);
    scene.text('How do you want to try and teach it to Kolka?');
    scene.actions([
      { label: 'Use the book and try to find a way to explain it', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/homework1.jpg');
    scene.text('You do your best to go through the text with your brother and explain it to him but he\'s still really struggling with it. Even you have to admit, those pictures and diagrams really aren\'t very good.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Use your body as an example and explain it that way', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('"I think I have a pretty good idea…" you say mischievously while he looks at you quizzically.');
    scene.actions([
      { label: 'Undress', goto: ['brother_lessons', 'anatomylesson1'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: After finishing the rest of his homework, Kolka pipes up, "<<$pcs_nickname>>, I ...
    scene.text(`After finishing the rest of his homework, Kolka pipes up, "${((s as any).pcs_nickname ?? 0)}, I could still use some more help with my anatomy homework. Will you help me?"`);
    scene.actions([
      { label: '"Not right now"', handler: (st: GameState) => {
    scene.text('"I\'m sorry Kolka," you say. "I\'m a little busy at the moment, maybe next time okay?"');
    scene.text('"Okay!" he nods, packing up the rest of his schoolwork.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: '"Sure!"', handler: (st: GameState) => {
    scene.text('"Sure," you grin at him. "Just let me get \'presentable\' for you," you say with a wink before you start undressing.');
    scene.actions([
      { label: 'Undress', goto: ['brother_lessons', 'anatomylesson1'] },
    ]);
  } },
      { label: '"Maybe I try something else this time"', handler: (st: GameState) => {
    scene.text('"I will help you, but only if you don\'t tell anyone. Agreed? I\'m serious, not a single person!" You say in a strict tone.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I promise not a word to anyone!"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, I promise not a word to anyone!"`);
    scene.text('After his promise you consider what to do.');
    scene.actions([
      { label: 'Undress', goto: ['brother_lessons', 'anatomylesson_conception1'] },
      { label: 'Don\'t do it', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterAnatomylesson1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brotherQW ?? 0)?.['sex_ed'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['brother_lessons', 'anatomylesson2'] }]);
  }
  (s as any).brotherQW['sex_ed'] = ((s as any).brotherQW['sex_ed'] ?? 0) + (1);
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/1.jpg');
  scene.text('After taking a look around to make sure you\'re in the clear, you quickly strip down until you\'re completely naked in front of your brother.');
  if (((s as any).brotherQW ?? 0)?.['anatomy_help'] === 1) {
    scene.text('<br>  "Woah! What are you doing?" Kolka exclaims.');
    scene.text('<br>  "I\'m doing what you asked me to do!" you say with a grin. "I\'m going to help you understand the material better! Nothing should help you more with anatomy than being able to look at someone else\'s body right?"');
  }
  scene.actions([
    { label: 'Start the lesson', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/2.jpg');
    scene.text('"So looking at your book it says you\'re learning about arteries and veins right now. Arteries are some of the tubes that carry blood around your body. And they all start here," you say, putting your hand around your left breast. "When you breathe in, your lungs take in oxygen which the rest of the body needs to survive. But in order to get it to the rest of the body, your heart needs pathways to deliver it. The oxygen attaches itself to your red blood vessels, and your arteries are the pathways that deliver it. So, for example if your body wants to get oxygenated blood from your heart to your brain it travels along an artery that passes right through…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/3.jpg');
    scene.text('"… here!" you say, pointing to your neck. "This is your carotid artery, and it supplies all of your head and your neck with oxygenated blood. Come here and feel it!"');
    scene.text('Your brother timidly moves closer and puts his finger on your neck.');
    scene.text('"Push in gently. Do you feel the little \'ba-bump, ba-bump, ba-bump, ba-bump?\' That\'s my heartbeat and you can feel the pulse through this artery. Since arteries come directly from the heart, they are the easiest ways to feel someone\'s pulse!"');
    scene.text('"Woah!" your brother says in amazement. "That\'s cool!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/4.jpg');
    scene.text('You lay back and spend the rest of the lesson letting Kolka use your body as a map, tracing your blood vessels with his finger to understand where they all go and where they branch out from.');
    scene.text('As the lesson goes on, you suddenly realize that the gentle touch all over your body is actually turning you on a little bit. The tracing of his fingers feel like a lover\'s caress and you feel warmth in your hips signaling that you\'re starting to get wet.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/5.jpg');
    scene.text('Eventually, Kolka has traced out all the arteries and veins you have and you bring the lesson to a close.');
    if (((s as any).lactation ?? 0)?.['active'] > 0) {
      scene.text('He even traces every vein and artery that can be seen through your breasts skin.');
    }
    scene.text('You quickly sit up to hide the growing wetness between you legs and ask him, "So how was that? Do you think you have a better understanding of the material now?"');
    // TODO-QSP: dynamic text: "Yeah!" he says excitedly. "I think I get it now! You really helped me out <<$pc...
    scene.text(`"Yeah!" he says excitedly. "I think I get it now! You really helped me out ${((s as any).pcs_nickname ?? 0)}!" He unexpectedly wraps his arms around you, giving you a big hug. You're surprised by this, mostly because you weren't expecting him to do something like this while you were still naked.`);
    scene.text('"You\'re the best sister ever!" he cries.');
    scene.text('You hug him back, feeling the warmth of your bare skin spreading into his shirt. "Aww, thanks Kolka."');
    scene.text('He pulls back from the hug, eagerly sitting in front of you. "Will you help me with this again sometime?"');
    // TODO-QSP: dynamic text: "Of course I will. But you need to let me get dressed before <<$npc_nickname['A2...
    scene.text(`"Of course I will. But you need to let me get dressed before ${((s as any).npc_nickname ?? 0)?.['A29']} or dad sees me helping you out like this. I don't think they'd approve. Do you?" He twists his mouth up and shakes his head. "I didn't think so. So make sure you don't tell anyone else about this. But if you need more help, just ask me and I'll see what I can do," you say, giving him a sweet smile before getting dressed again.`);
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
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

function enterAnatomylesson2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brothersexed ?? 0) === 2) {
    scene.actions([{ label: 'Continue', goto: ['brother_lessons', 'anatomylesson_conception1'] }]);
  }
  (s as any).brothersexed = 2;
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/1.jpg');
  scene.text('You quickly get undressed taking small peeks at the book while you do so you know what you\'re helping him with. It looks like this section is about female genitals.');
  scene.text('Once you\'re completely naked you kneel down again and say, "Alright Kolka. All ready for today\'s lesson?" He nods eagerly. "Okay! Let\'s begin then!"');
  scene.actions([
    { label: 'Begin the lesson', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/6.jpg');
    scene.text('"So, your lesson today is about female genitals. We\'ll start with the most obvious one because I know you love to look at them: breasts!" You pull your arms back behind your head to give him a good view. "Women have breasts because they\'re used to feed babies-" you start to say before Kolka interrupts you.');
    scene.text('"Can I get a closer look? You know… for uhh… scientific reasons?" he says. The look on his face says he\'s genuinely curious but you\'re still a little skeptical he isn\'t doing this just to get close to your tits.');
    scene.text('<i>Oh, whatever. As long as he learns something right?</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/7.jpg');
    scene.text('"Uhh-ha… Okay I guess," you say with a bit of a nervous giggle. You stick your chest out some more and Kolka brings his face right next to your breasts.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/8.jpg');
    scene.text('A few awkward long moments go by of Kolka closely examining your breasts and nipples before you realize that he\'s not going to sit back down. You sigh and figure you might as well get on with the lesson in the mean time. At least he\'ll be able to see them clearly.');
    if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).kid ?? 0) <= 0) {
      scene.text('"So… Like I was saying, women have breasts because of babies. When a woman is pregnant, her breasts start to produce milk which is then used to feed her newborn. In some cases, there can also be milk without having a baby."');
    } else {
      if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  ||  ((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2) {
        scene.text('"So… Like I was saying, women have breasts because of babies. When a woman is pregnant, her breasts start to produce milk which is then used to feed her newborn. You probably saw me doing this from time to time."');
      } else {
        scene.text('"So… Like I was saying, women have breasts because of babies. When a woman is pregnant, her breasts start to produce milk which is then used to feed her newborn."');
      }
      scene.text('"So… Like I was saying, women have breasts because of babies. When a woman is pregnant, her breasts start to produce milk which is then used to feed her newborn."');
    }
    if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  ||  ((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2) {
      if (((s as any).brotherQW ?? 0)?.['breastfeed_by_pc'] >= 1  &&  ((s as any).kid ?? 0) >= 0) {
        scene.text('Kolka inspecting your breasts from multiple angles. "Yeah, I remember. Your milk tasted good."');
        scene.text('You blush a bit, remembering how you breastfeed Kolka. "Uhm yes, but we are doing this here for school, so you better don\'t write that down somewhere. So the baby latches out with the mouth here and then sucks to draw out the milk."');
        scene.text('"Oh! Like this?" and before you can stop him, Kolka leans in to put your nipple in his mouth and starts sucking.');
      } else {
        scene.text('Kolka inspecting your breasts from multiple angles. "Yeah, I remember. The baby sucked on your breast."');
        scene.text('You nod at Kolka. "Exactly. So the baby latches out with the mouth here and then sucks to draw out the milk." Your finger points to your nipples.');
        scene.text('"Oh! Like this?" and before you can stop him, Kolka leans in to put your nipple in his mouth and starts sucking.');
        scene.text('"How does the milk come out?" Kolka asks, now inspecting your breasts from multiple angles. "Do you squeeze it and milk it out like cows?"');
        scene.text('You sputter in laughter saying, "What? No, silly! That would be really painful because girls nipples are very sensitive! No, the baby suckles, meaning they just use their mouth and suck to draw the milk out. That\'s why they call it \'breastfeeding.\'"');
        scene.text('"Oh! So you mean like this?" and before you can stop him, Kolka leans in to put your nipple in his mouth and starts sucking.');
      }
    } else {
      scene.text('"How does the milk come out?" Kolka asks, now inspecting your breasts from multiple angles. "Do you squeeze it and milk it out like cows?"');
      scene.text('You sputter in laughter saying, "What? No, silly! That would be really painful because girls nipples are very sensitive! No, the baby suckles, meaning they just use their mouth and suck to draw the milk out. That\'s why they call it \'breastfeeding.\'"');
      scene.text('"Oh! So you mean like this?" and before you can stop him, Kolka leans in to put your nipple in his mouth and starts sucking.');
    }
    scene.actions([
      { label: '"Hey! Stop that!"', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    (s as any).temp_var = qspFunc(s, 'lact_lib', '$get_breastmilk', 0, 1);
    (s as any).milkedvolume = ((s as any).temp_var ?? 0)/6;
    if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).milkedvolume ?? 0) >=5) {
      scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/7.jpg');
      scene.text('You push him back immediately. "Hey! What do you think you\'re doing?! You can\'t just do that to a girl!"');
      scene.text('"But you were sayin-"');
      if (((s as any).brotherQW ?? 0)?.['breastfeed_by_pc'] <= 0) {
        scene.text('"I know what I was saying! You\'re not a baby Kolka. You can\'t just start sucking on someone\'s nippes like that. I told you…" you trail off, nervously noticing the wetness beginning to seep from your pussy. Your nipple tingles, that means that Kolka probably got some milk out "… girl\'s nipples are very sensitive…"');
      } else {
        scene.text('"I know what I was saying! You can\'t just start sucking on someone\'s nippes like that. I told you…" you trail off, nervously noticing the wetness beginning to seep from your pussy. Your nipple tingles, that means that Kolka probably got some milk out "… girl\'s nipples are very sensitive…"');
      }
      // TODO-QSP: dynamic text: "Oh." he says very matter of factly. "Right. You did just say that. I forgot. I'...
      scene.text(`"Oh." he says very matter of factly. "Right. You did just say that. I forgot. I'm sorry ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('"It\'s okay," you reply, gently massaging your nipple and trying your best not to accidentally wipe your love juice on anything. "Just, don\'t do that so suddenly like that okay? At least ask next time."');
      scene.text('"Wait so if I ask I can do it?" he pipes up.');
      scene.text('"No!" you say with a stern smile. "I mean… I\'ll think about it. But expect the answer to be more likely no than yes okay?"');
      scene.text('"Mkay," he says, while writing down some things in his notebook.');
      if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 0  &&  ((s as any).brotherQW ?? 0)?.['know_pc_milk_taste'] <= 0) {
        scene.text('During writing Kolka licks his lips "I didn\'t know you had milk in your breasts. It tastes good!"');
      } else {
        scene.text('During writing Kolka licks his lips "Wow… I didn\'t know you had milk in your breasts… and it tastes familiar…"');
        if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  &&  ((s as any).brotherQW ?? 0)?.['know_pc_milk_taste'] >= 1) {
          scene.text('During writing Kolka licks his lips and adds "Your milk tastes way better from the source…".');
        } else {
          scene.text('During writing Kolka licks his lips and adds "Hmm - I didn\'t think your milk would taste so good…".');
          if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2  &&  ((s as any).brotherQW ?? 0)?.['know_pc_milk_taste'] >= 1) {
            scene.text('During writing Kolka licks his lips and adds "I didn\'t know you had milk again…"');
            (s as any).brotherQW['know_pc_lact'] = 1;
          } else {
            scene.text('During writing Kolka licks his lips and adds "I didn\'t know you had milk again… and it tastes really good."');
            (s as any).brotherQW['know_pc_lact'] = 1;
            scene.text('During writing Kolka licks his lips and adds "Hmm - I didn\'t think your milk would taste so good…".');
          }
          scene.text('You slap him on the back of his head playfully. "shh - stop that now."');
          scene.text('<i><b>sigh</b> Boys…</i>');
          scene.text('Looking at the next part of the homework it talks about the anatomy of the vulva but doesn\'t go on to the internals. At least you\'ll be able to use your arousal for the lesson now…');
          (s as any).brotherQW['know_pc_milk_taste'] = 1;
          if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).milkedvolume ?? 0) < 5) {
            scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/7.jpg');
            scene.text('You push him back immediately. "Hey! What do you think you\'re doing?! You can\'t just do that to a girl!"');
            scene.text('"But you were sayin-"');
            if (((s as any).brotherQW ?? 0)?.['breastfeed_by_pc'] <= 0) {
              scene.text('"I know what I was saying! You\'re not a baby Kolka. You can\'t just start sucking on someone\'s nippes like that. I told you…" you trail off, nervously noticing the wetness beginning to seep from your pussy. "… girl\'s nipples are very sensitive…"');
            } else {
              scene.text('"I know what I was saying! You can\'t just start sucking on someone\'s nippes like that. I told you…" you trail off, nervously noticing the wetness beginning to seep from your pussy. "… girl\'s nipples are very sensitive…"');
            }
            if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] <= 0) {
              scene.text('You can tell that no milk came out, but you were nervous for a moment for him to find out about your lactation.');
            } else {
              scene.text('You can tell that no milk came out, but you were nervous for a moment for him to find out about your lactation. You don\'t feel like breastfeeding Kolka at the moment.');
              if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2) {
                scene.text('You can tell that no milk came out, but you were nervous for a moment for him to find out that you are lactation again.');
              }
              // TODO-QSP: dynamic text: "Oh." he says very matter of factly. "Right. You did just say that. I forgot. I'...
              scene.text(`"Oh." he says very matter of factly. "Right. You did just say that. I forgot. I'm sorry ${((s as any).pcs_nickname ?? 0)}."`);
              scene.text('"It\'s okay," you reply, gently massaging your nipple and trying your best not to accidentally wipe your love juice on anything. "Just, don\'t do that so suddenly like that okay? At least ask next time."');
              scene.text('"Wait so if I ask I can do it?" he pipes up.');
              scene.text('"No!" you say with a stern smile. "I mean… I\'ll think about it. But expect the answer to be more likely no than yes okay?"');
              scene.text('"Mkay," he says, while writing down some things in his notebook.');
              scene.text('<i><b>sigh</b> Boys…</i>');
              scene.text('You ');
              scene.text('Looking at the next part of the homework it talks about the anatomy of the vulva but doesn\'t go on to the internals. At least you\'ll be able to use your arousal for the lesson now…');
              scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/7.jpg');
              scene.text('You push him back immediately. "Hey! What do you think you\'re doing?! You can\'t just do that to a girl!"');
              scene.text('"But you were sayin-"');
              scene.text('"I know what I was saying! You\'re not a baby Kolka. You can\'t just start sucking on someone\'s nippes like that. I told you…" you trail off, nervously noticing the wetness beginning to seep from your pussy. "… girl\'s nipples are very sensitive…"');
              // TODO-QSP: dynamic text: "Oh." he says very matter of factly. "Right. You did just say that. I forgot. I'...
              scene.text(`"Oh." he says very matter of factly. "Right. You did just say that. I forgot. I'm sorry ${((s as any).pcs_nickname ?? 0)}."`);
              scene.text('"It\'s okay," you reply, gently massaging your nipple and trying your best not to accidentally wipe your love juice on anything. "Just, don\'t do that so suddenly like that okay? At least ask next time."');
              scene.text('"Wait so if I ask I can do it?" he pipes up.');
              scene.text('"No!" you say with a stern smile. "I mean… I\'ll think about it. But expect the answer to be more likely no than yes okay?"');
              scene.text('"Mkay," he says, while writing down some things in his notebook.');
              if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1) {
                scene.text('Kolka looks up at you for a moment "Did you stop having milk?"');
                scene.text('You nod at Kolka and tell him to concentrate on the studies.');
                (s as any).brotherQW['know_pc_lact'] = 2;
              }
              scene.text('<i><b>sigh</b> Boys…</i>');
              scene.text('Looking at the next part of the homework it talks about the anatomy of the vulva but doesn\'t go on to the internals. At least you\'ll be able to use your arousal for the lesson now…');
            }
            scene.actions([
              { label: 'Continue the lesson', goto: ['brother_lessons', 'anatomylesson3'] },
            ]);
          }
          scene.actions([
            { label: '"Wai-! Sto-… Ohhh…"', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (40);
    qspCall(s, 'stat', '');
    if (((s as any).lactation ?? 0)?.['active'] > 0) {
      (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 0, 5);
      (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) + (qspFunc(s, 'lact_lib', '$get_breastmilk', 5, 5));
      if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] <= 0) {
        scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/8.jpg');
        scene.text('"Kolk-! Ahh~! Wai- Uh~! Sto-… Ohh~!" you try to voice protests but they get lost in your stifled moans.');
        scene.text('Your brother continues to suck eagerly on your nipple with increased vigor, now grabbing your other breast to use as leverage and keep his face close. You squirm under his advances, trying to push him off but you\'re too weak, your body floundering in pleasure. You can tell that his definitely getting out your breast milk.');
        scene.text('He pulls his lips off with a pop. "Wow! There really is any milk coming out!" he says surprised. At last! A respite! You start to catch your breath and just as you\'re about to tell him not to do that again, he leans forward and starts sucking again.');
        scene.text('"Ahh~!" A cry briefly escapes your lips before you clamp your own hand over them to make sure the rest of your family doesn\'t overhear you. You can only imagine your mother\'s reaction if she came in to find your brother sucking on your tits like this.');
        // TODO-QSP: dynamic text: After 5 minutes of sucking and squirming, your brother finally stops. "<<$pcs_ni...
        scene.text(`After 5 minutes of sucking and squirming, your brother finally stops. "${((s as any).pcs_nickname ?? 0)}, I didn't know you had milk - and it is so delicious!"`);
        if (((s as any).milkedvolume ?? 0) >= 500) {
          scene.text('He goes on "… and there is so much of it!"');
        }
        scene.text('Then he notices your heavy breathing. "Hey, are you okay? Is there something wrong with you?"');
        (s as any).brotherQW['know_pc_lact'] = 1;
        (s as any).brotherQW['breastfeed_by_pc'] = 1;
      } else {
        scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/8.jpg');
        scene.text('"Kolk-! Ahh~! Wai- Uh~! Sto-… Ohh~!" you try to voice protests but they get lost in your stifled moans.');
        scene.text('Your brother continues to suck eagerly on your nipple with increased vigor, now grabbing your other breast to use as leverage and keep his face close. You squirm under his advances, trying to push him off but you\'re too weak, your body floundering in pleasure. You can tell that his definitely getting out your breast milk.');
        scene.text('He pulls his lips off with a pop. "Wow! This milk tastes so good!" he says energetic. At last! A respite! You start to catch your breath and just as you\'re about to tell him not to do that again, he leans forward and starts sucking again.');
        scene.text('"Ahh~!" A cry briefly escapes your lips before you clamp your own hand over them to make sure the rest of your family doesn\'t overhear you. You can only imagine your mother\'s reaction if she came in to find your brother sucking on your tits like this.');
        // TODO-QSP: dynamic text: After 5 minutes of sucking and squirming, your brother finally stops. "<<$pcs_ni...
        scene.text(`After 5 minutes of sucking and squirming, your brother finally stops. "${((s as any).pcs_nickname ?? 0)}, it is so delicious, I want seconds!"`);
        if (((s as any).milkedvolume ?? 0) >= 500) {
          scene.text('He goes on "… and you probably can make enough milk for that!"');
        }
        scene.text('Then he notices your heavy breathing. "Hey, are you okay? Is there something wrong with you?"');
        if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2) {
          scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/8.jpg');
          scene.text('"Kolk-! Ahh~! Wai- Uh~! Sto-… Ohh~!" you try to voice protests but they get lost in your stifled moans.');
          scene.text('Your brother continues to suck eagerly on your nipple with increased vigor, now grabbing your other breast to use as leverage and keep his face close. You squirm under his advances, trying to push him off but you\'re too weak, your body floundering in pleasure. You can tell that his definitely getting out your breast milk.');
          scene.text('He pulls his lips off with a pop. "Wow! I didn\'t know you had milk again - this milk tastes so good!" he says energetic. At last! A respite! You start to catch your breath and just as you\'re about to tell him not to do that again, he leans forward and starts sucking again.');
          scene.text('"Ahh~!" A cry briefly escapes your lips before you clamp your own hand over them to make sure the rest of your family doesn\'t overhear you. You can only imagine your mother\'s reaction if she came in to find your brother sucking on your tits like this.');
          // TODO-QSP: dynamic text: After 5 minutes of sucking and squirming, your brother finally stops. "<<$pcs_ni...
          scene.text(`After 5 minutes of sucking and squirming, your brother finally stops. "${((s as any).pcs_nickname ?? 0)}, it is so delicious, I want seconds!"`);
          if (((s as any).milkedvolume ?? 0) >= 500) {
            scene.text('He goes on "… and you probably can make enough milk for that!"');
          }
          scene.text('Then he notices your heavy breathing. "Hey, are you okay? Is there something wrong with you?"');
          (s as any).brotherQW['know_pc_lact'] = 1;
        } else {
          scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/8.jpg');
          scene.text('"Kolk-! Ahh~! Wai- Uh~! Sto-… Ohh~!" you try to voice protests but they get lost in your stifled moans.');
          scene.text('Your brother continues to suck eagerly on your nipple with increased vigor, now grabbing your other breast to use as leverage and keep his face close. You squirm under his advances, trying to push him off but you\'re too weak, your body floundering in pleasure. You can tell that his definitely getting out your breast milk.');
          scene.text('He pulls his lips off with a pop. "Wow! This milk tastes so good!" he says energetic. At last! A respite! You start to catch your breath and just as you\'re about to tell him not to do that again, he leans forward and starts sucking again.');
          scene.text('"Ahh~!" A cry briefly escapes your lips before you clamp your own hand over them to make sure the rest of your family doesn\'t overhear you. You can only imagine your mother\'s reaction if she came in to find your brother sucking on your tits like this.');
          // TODO-QSP: dynamic text: After 5 minutes of sucking and squirming, your brother finally stops. "<<$pcs_ni...
          scene.text(`After 5 minutes of sucking and squirming, your brother finally stops. "${((s as any).pcs_nickname ?? 0)}, it is so delicious, I want seconds!"`);
          if (((s as any).milkedvolume ?? 0) >= 500) {
            scene.text('He goes on "… and you probably can make enough milk for that!"');
          }
          scene.text('Then he notices your heavy breathing. "Hey, are you okay? Is there something wrong with you?"');
        }
        (s as any).milkedvolume = 0;
        (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 0, 2);
        (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) + (qspFunc(s, 'lact_lib', '$get_breastmilk', 5, 2));
        (s as any).milkedvolume = 0;
        if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1) {
          scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/8.jpg');
          scene.text('"Kolk-! Ahh~! Wai- Uh~! Sto-… Ohh~!" you try to voice protests but they get lost in your stifled moans.');
          scene.text('Your brother continues to suck eagerly on your nipple with increased vigor, now grabbing your other breast to use as leverage and keep his face close. You squirm under his advances, trying to push him off but you\'re too weak, your body floundering in pleasure.');
          scene.text('He pulls his lips off with a pop. "Huh. Why isn\'t any milk coming out?" he asks. At last! A respite! You start to catch your breath and just as you\'re about to tell him not to do that again, he leans forward and starts sucking again.');
          scene.text('"Ahh~!" A cry briefly escapes your lips before you clamp your own hand over them to make sure the rest of your family doesn\'t overhear you. You can only imagine your mother\'s reaction if she came in to find your brother sucking on your tits like this.');
          // TODO-QSP: dynamic text: After another minute of sucking and squirming, your brother finally relents. "<<...
          scene.text(`After another minute of sucking and squirming, your brother finally relents. "${((s as any).pcs_nickname ?? 0)}, I thought your milk will come out. I've been sucking all this time and nothing's come out. Why's that?" Then he notices your heavy breathing. "Hey, are you okay? Is there something wrong with you?"`);
          (s as any).brotherQW['know_pc_lact'] = 2;
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/7.jpg');
    scene.text('"Kolka…" you sigh deeply before continuing. "First of all, you can\'t just suck on a girl\'s nipples like that! I told you…" you trail off, taking notice of the love juices dripping from your snatch and nervously smiling. "… they\'re very sensitive… Second of all, I don\'t have milk anymore."');
    scene.text('"Oh. Sorry." Kolka looks a bit sad that no milk came.');
    scene.text('"It\'s okay… It felt kind of good to be honest…" you admit with some embarrassment. "Just… ask next time? Please?"');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>," he says, writing some things down in his notebook.
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}," he says, writing some things down in his notebook.`);
    scene.text('You sigh again. Taking a look in the textbook, it says the next part of the homework is about the external female organs: the vulva. You slyly smile to yourself.');
    scene.text('<i>Well, at least I didn\'t get wet for nothing.</i>');
    scene.actions([
      { label: 'Continue the lesson', goto: ['brother_lessons', 'anatomylesson3'] },
    ]);
  } },
          ]);
        } else {
          scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/8.jpg');
          scene.text('"Kolk-! Ahh~! Wai- Uh~! Sto-… Ohh~!" you try to voice protests but they get lost in your stifled moans.');
          scene.text('Your brother continues to suck on your nipple with increased vigor, now grabbing your other breast to use as leverage and keep his face close. You squirm under his advances, trying to push him off but you\'re too weak, your body floundering in pleasure.');
          scene.text('He pulls his lips off with a pop. "Huh. Why isn\'t any milk coming out?" he asks. At last! A respite! You start to catch your breath and just as you\'re about to tell him not to do that again, he leans forward and starts sucking again.');
          scene.text('"Ahh~!" A cry briefly escapes your lips before you clamp your own hand over them to make sure the rest of your family doesn\'t overhear you. You can only imagine your mother\'s reaction if she came in to find your brother sucking on your tits like this.');
          // TODO-QSP: dynamic text: After another minute of sucking and squirming, your brother finally relents. "<<...
          scene.text(`After another minute of sucking and squirming, your brother finally relents. "${((s as any).pcs_nickname ?? 0)}, I thought you said milk came out. I've been sucking all this time and nothing's come out. Why's that?" Then he notices your heavy breathing. "Hey, are you okay? Is there something wrong with you?"`);
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/7.jpg');
    scene.text('"Kolka…" you sigh deeply before continuing. "First of all, you can\'t just suck on a girl\'s nipples like that! I told you…" you trail off, taking notice of the love juices dripping from your snatch and nervously smiling. "… they\'re very sensitive… Second of all, I\'m not pregnant dummy! Breasts only produce milk if you\'re pregnant or recently gave birth."');
    scene.text('"Oh. Sorry."');
    scene.text('"It\'s okay… It felt kind of good to be honest…" you admit with some embarrassment. "Just… ask next time? Please?"');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>," he says, writing some things down in his notebook.
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}," he says, writing some things down in his notebook.`);
    scene.text('You sigh again. Taking a look in the textbook, it says the next part of the homework is about the external female organs: the vulva. You slyly smile to yourself.');
    scene.text('<i>Well, at least I didn\'t get wet for nothing.</i>');
    scene.actions([
      { label: 'Continue the lesson', goto: ['brother_lessons', 'anatomylesson3'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/7.jpg');
    scene.text('"Kolka…" you sigh deeply before continuing. "First of all, you can\'t just suck on a girl\'s nipples like that! I told you…" you trail off, taking notice of the love juices dripping from your snatch and nervously smiling. "… they\'re very sensitive…"');
    scene.text('"Oh. Sorry."');
    scene.text('"It\'s okay… It felt kind of good to be honest…" you admit with some embarrassment. "Just… ask next time? Please?"');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>," he says, writing some things down in his notebook.
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}," he says, writing some things down in his notebook.`);
    if (((s as any).kid ?? 0) <= 0  &&  ((s as any).brotherQW ?? 0)?.['know_pc_lact'] <= 0) {
      scene.text('Kolka looks up for short "Wait… haven\'t you said only pregnant women have milk?');
      scene.text('You blush a bit "I also said, that it can happen under other circumstances…');
    }
    scene.text('You sigh again. Taking a look in the textbook, it says the next part of the homework is about the external female organs: the vulva. You slyly smile to yourself.');
    scene.text('<i>Well, at least I didn\'t get wet for nothing.</i>');
    (s as any).brotherQW['know_pc_lact'] = 1;
    (s as any).brotherQW['breastfeed_by_pc'] = 1;
    (s as any).brotherQW['know_pc_milk_taste'] = 1;
    scene.actions([
      { label: 'Continue the lesson', goto: ['brother_lessons', 'anatomylesson3'] },
    ]);
  } },
        ]);
      }
    }
  } },
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
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'homework':
      enterHomework(s, scene);
      break;
    case 'showbody':
      enterShowbody(s, scene);
      break;
    case 'anatomylesson1':
      enterAnatomylesson1(s, scene);
      break;
    case 'anatomylesson2':
      enterAnatomylesson2(s, scene);
      break;
    default:
      enterHomework(s, scene);
      break;
  }
}

export const brother_lessons: LocationDef = {
  name: 'brother_lessons',
  title: 'Kolka',
  region: 'other',
  description: ['Partway through your sibling study session, you suddenly feel Kolka\'s hand stroking your leg.'],
  enter: enter,
};
