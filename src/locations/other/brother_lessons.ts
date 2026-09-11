import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'family_schedule', '');
  scene.build();
}

function enterHomework(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW ?? {})['last_day_homework'] = ((s as any).daystart ?? 0);
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
    ((s as any).brotherQW ?? {})['kiss'] = (((s as any).brotherQW ?? {})['kiss'] ?? 0) + (1);
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
      ((s as any).brotherQW ?? {})['Sex'] = 5;
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
      ((s as any).brotherQW ?? {})['Sex'] = 6;
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
    ((s as any).brotherQW ?? {})['kiss'] = (((s as any).brotherQW ?? {})['kiss'] ?? 0) + (1);
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
      if (((s as any).ivrand ?? 0) === 2  &&  (((s as any).brotherQW ?? 0)?.['last_sex_day_evening'] !== ((s as any).daystart ?? 0)  ||  ((s as any).brotherQW ?? 0)?.['anatomy_help'] === 1)) {
        qspCall(s, 'brother_lessons', 'showbody');
      } else {
        scene.actions([
          { label: 'Finish', goto: ['sitrPar', ''] },
        ]);
      }
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
      ((s as any).npc_QW ?? {})['A34'] = 3;
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
  ((s as any).brotherQW ?? {})['sex_ed'] = (((s as any).brotherQW ?? {})['sex_ed'] ?? 0) + (1);
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
      if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).kid ?? 0) > 0) {
        if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  ||  ((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2) {
          scene.text('"So… Like I was saying, women have breasts because of babies. When a woman is pregnant, her breasts start to produce milk which is then used to feed her newborn. You probably saw me doing this from time to time."');
        } else {
          scene.text('"So… Like I was saying, women have breasts because of babies. When a woman is pregnant, her breasts start to produce milk which is then used to feed her newborn."');
        }
      } else {
        scene.text('"So… Like I was saying, women have breasts because of babies. When a woman is pregnant, her breasts start to produce milk which is then used to feed her newborn."');
      }
    }
    if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  ||  ((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2) {
      if (((s as any).brotherQW ?? 0)?.['breastfeed_by_pc'] >= 1  &&  ((s as any).kid ?? 0) >= 0) {
        scene.text('Kolka inspecting your breasts from multiple angles. "Yeah, I remember. Your milk tasted good."');
        scene.text('You blush a bit, remembering how you breastfeed Kolka. "Uhm yes, but we are doing this here for school, so you better don\'t write that down somewhere. So the baby latches out with the mouth here and then sucks to draw out the milk."');
        scene.text('"Oh! Like this?" and before you can stop him, Kolka leans in to put your nipple in his mouth and starts sucking.');
      } else {
        if (((s as any).brotherQW ?? 0)?.['breastfeed_by_pc'] <= 0  &&  ((s as any).kid ?? 0) >= 1) {
          scene.text('Kolka inspecting your breasts from multiple angles. "Yeah, I remember. The baby sucked on your breast."');
          scene.text('You nod at Kolka. "Exactly. So the baby latches out with the mouth here and then sucks to draw out the milk." Your finger points to your nipples.');
          scene.text('"Oh! Like this?" and before you can stop him, Kolka leans in to put your nipple in his mouth and starts sucking.');
        } else {
          scene.text('"How does the milk come out?" Kolka asks, now inspecting your breasts from multiple angles. "Do you squeeze it and milk it out like cows?"');
          scene.text('You sputter in laughter saying, "What? No, silly! That would be really painful because girls nipples are very sensitive! No, the baby suckles, meaning they just use their mouth and suck to draw the milk out. That\'s why they call it \'breastfeeding.\'"');
          scene.text('"Oh! So you mean like this?" and before you can stop him, Kolka leans in to put your nipple in his mouth and starts sucking.');
        }
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
        if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 0  &&  ((s as any).brotherQW ?? 0)?.['know_pc_milk_taste'] >= 1) {
          scene.text('During writing Kolka licks his lips "Wow… I didn\'t know you had milk in your breasts… and it tastes familiar…"');
        } else {
          if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  &&  ((s as any).brotherQW ?? 0)?.['know_pc_milk_taste'] >= 1) {
            scene.text('During writing Kolka licks his lips and adds "Your milk tastes way better from the source…".');
          } else {
            if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  &&  ((s as any).brotherQW ?? 0)?.['know_pc_milk_taste'] <= 0) {
              scene.text('During writing Kolka licks his lips and adds "Hmm - I didn\'t think your milk would taste so good…".');
            } else {
              if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2  &&  ((s as any).brotherQW ?? 0)?.['know_pc_milk_taste'] >= 1) {
                scene.text('During writing Kolka licks his lips and adds "I didn\'t know you had milk again…"');
                ((s as any).brotherQW ?? {})['know_pc_lact'] = 1;
              } else {
                if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2  &&  ((s as any).brotherQW ?? 0)?.['know_pc_milk_taste'] <= 0) {
                  scene.text('During writing Kolka licks his lips and adds "I didn\'t know you had milk again… and it tastes really good."');
                  ((s as any).brotherQW ?? {})['know_pc_lact'] = 1;
                } else {
                  scene.text('During writing Kolka licks his lips and adds "Hmm - I didn\'t think your milk would taste so good…".');
                }
              }
            }
          }
        }
      }
      scene.text('You slap him on the back of his head playfully. "shh - stop that now."');
      scene.text('<i><b>sigh</b> Boys…</i>');
      scene.text('Looking at the next part of the homework it talks about the anatomy of the vulva but doesn\'t go on to the internals. At least you\'ll be able to use your arousal for the lesson now…');
      ((s as any).brotherQW ?? {})['know_pc_milk_taste'] = 1;
    } else {
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
          if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  &&  ((s as any).brotherQW ?? 0)?.['breastfeed_by_pc'] <= 0) {
            scene.text('You can tell that no milk came out, but you were nervous for a moment for him to find out about your lactation. You don\'t feel like breastfeeding Kolka at the moment.');
          } else {
            if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 2) {
              scene.text('You can tell that no milk came out, but you were nervous for a moment for him to find out that you are lactation again.');
            }
          }
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
      } else {
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
          ((s as any).brotherQW ?? {})['know_pc_lact'] = 2;
        }
        scene.text('<i><b>sigh</b> Boys…</i>');
        scene.text('Looking at the next part of the homework it talks about the anatomy of the vulva but doesn\'t go on to the internals. At least you\'ll be able to use your arousal for the lesson now…');
      }
    }
    scene.actions([
      { label: 'Continue the lesson', goto: ['brother_lessons', 'anatomylesson3'] },
    ]);
  } },
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
        ((s as any).brotherQW ?? {})['know_pc_lact'] = 1;
        ((s as any).brotherQW ?? {})['breastfeed_by_pc'] = 1;
      } else {
        if (((s as any).brotherQW ?? 0)?.['know_pc_lact'] === 1  &&  ((s as any).brotherQW ?? 0)?.['breastfeed_by_pc'] <= 0) {
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
        } else {
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
            ((s as any).brotherQW ?? {})['know_pc_lact'] = 1;
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
        }
      }
      (s as any).milkedvolume = 0;
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
    ((s as any).brotherQW ?? {})['know_pc_lact'] = 1;
    ((s as any).brotherQW ?? {})['breastfeed_by_pc'] = 1;
    ((s as any).brotherQW ?? {})['know_pc_milk_taste'] = 1;
    scene.actions([
      { label: 'Continue the lesson', goto: ['brother_lessons', 'anatomylesson3'] },
    ]);
  } },
      ]);
    } else {
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
        ((s as any).brotherQW ?? {})['know_pc_lact'] = 2;
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

function enterAnatomylesson2_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 3) + 1);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 10);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/f (1).jpg');
  if (((s as any).npc_QW ?? 0)?.['A34'] <= 4) {
    ((s as any).npc_QW ?? {})['A34'] = 4;
    // TODO-QSP: dynamic text: You check to see if the door to the hall is closed, then silently but quickly ta...
    scene.text(`You check to see if the door to the hall is closed, then silently but quickly take off your clothes. Feeling a bit embarrassed as you sit in a chair, you cover your ${((s as any).titsize ?? 0)} breasts with your hands and close your legs tightly.`);
    scene.text('You feel your brother\'s eyes staring at your body. This situation isn\'t getting any easier so you may as well start, "Well, Kolka, what do you need explained?"');
    scene.text('He continues to stare at you, apparently unable to speak.');
    scene.text('"Kolka! Are you just going to stare or do you actually need help?" There\'s a harshness to your tone, not helped by the fact that you notice a lump forming in his pants.');
    scene.text('He pleads, "No, no, I do need help!"');
    scene.text('You sigh, "Fine then, let\'s hurry up so we can get this over with." You slowly move your hands away from your breasts.');
    scene.text('Kolka nods along, "Um, yeah, okay…"');
    scene.actions([
      { label: 'Get started', goto: ['brother_lessons', 'anatomylesson2_2'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A34'] > 4) {
      // TODO-QSP: dynamic text: You check to see if the door to the hall is closed, then silently yet quickly ta...
      scene.text(`You check to see if the door to the hall is closed, then silently yet quickly take off your clothes. Feeling a bit embarrassed as you sit in a chair, you cover your ${((s as any).titsize ?? 0)} breasts with your hands and close your legs tightly.`);
      scene.text('Kolka licks his lips while ogling your body, "They say repetition is the key to learning."');
      scene.text('"Sure, they do," you reply, rolling your eyes.');
      scene.actions([
        { label: 'Get started', goto: ['brother_lessons', 'anatomylesson2_2'] },
      ]);
    }
  }
  scene.build();
}

function enterAnatomylesson2_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 2) + 2);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 10);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  if ((!((s as any).brother_anus_mem ?? 0))) {
    (s as any).brother_anus_mem = ((s as any).anpic ?? 0);
  }
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/f (2).jpg');
  if (((s as any).npc_QW ?? 0)?.['A34'] === 4) {
    if (((s as any).analPlugIn ?? 0) === 1) {
      // TODO-QSP: dynamic text: You turn your ass towards your brother and lean forward, resting your elbows on ...
      scene.text(`You turn your ass towards your brother and lean forward, resting your elbows on the chair, revealing your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy and ${((s as any).anustipe ?? 0)} anus, which has an anal plug inserted into it.`);
      qspCall(s, 'brother', 'anus_check');
    } else {
      // TODO-QSP: dynamic text: You turn around and bend over, exposing your <<$pc_desc['pussy']>> pussy and <<$...
      scene.text(`You turn around and bend over, exposing your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy and ${((s as any).anustipe ?? 0)} asshole to your brother.`);
      qspCall(s, 'brother', 'anus_check');
    }
    scene.text('"Oh…" is all Kolka can manage to say as he stares at your nakedness.');
    qspCall(s, 'brother', 'virginitydialog');
    scene.actions([
      { label: 'Continue', goto: ['brother_lessons', 'anatomylesson2_3'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A34'] > 4) {
      if (((s as any).analPlugIn ?? 0) === 1) {
        // TODO-QSP: dynamic text: You turn your ass towards your brother and lean forward, resting your elbows on ...
        scene.text(`You turn your ass towards your brother and lean forward, resting your elbows on the chair, revealing your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy and ${((s as any).anustipe ?? 0)} anus, which has an anal plug inserted into it.`);
        qspCall(s, 'brother', 'anus_check');
      } else {
        // TODO-QSP: dynamic text: You turn around and bend over, exposing your <<$pc_desc['pussy']>> pussy and <<$...
        scene.text(`You turn around and bend over, exposing your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy and ${((s as any).anustipe ?? 0)} asshole to your brother.`);
        qspCall(s, 'brother', 'anus_check');
      }
      scene.text('"Wow, nice view!" Kolka says after a short pause.');
      qspCall(s, 'brother', 'virginitydialog');
      scene.actions([
        { label: 'Continue', goto: ['brother_lessons', 'anatomylesson2_3'] },
      ]);
    }
  }
  scene.build();
}

function enterAnatomylesson2_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 3) + 1);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 10);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/f (3).jpg');
  scene.text('You sit down on your heels and turn your ass towards Kolka. You look back at him and notice the growing bulge in his pants, which is quite noticeable through his light clothing. His face grows red with excitement and his breathing is becoming slightly erratic.');
  if (((s as any).npc_QW ?? 0)?.['A34'] === 4) {
    // TODO-QSP: dynamic text: Your brother asks, "<<$pcs_nickname>>, can you show me up close?"
    scene.text(`Your brother asks, "${((s as any).pcs_nickname ?? 0)}, can you show me up close?"`);
    scene.text('"Show you what up close?" you respond.');
    scene.text('"You know," Kolka points at your naked bottom.');
    scene.text('"I don\'t know, I think this has gone too far already," you answer indignantly.');
    scene.text('"Please, show me!" Kolka pleads.');
    qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and get dressed [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and get dressed [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Give Kolka a closer look', goto: ['brother_lessons', 'anatomylesson2_4'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A34'] > 4) {
      // TODO-QSP: dynamic text: Your brother points to your legs, "<<$pcs_nickname>>, can you show me?" He moves...
      scene.text(`Your brother points to your legs, "${((s as any).pcs_nickname ?? 0)}, can you show me?" He moves his arms apart, mimicking you spreading your legs.`);
      scene.text('A small thrill runs up your spine, "Again?"');
      scene.text('"Again," he grins. "Please?"');
      qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse and get dressed [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse and get dressed [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
      scene.actions([
        { label: 'Give Kolka another close up look', goto: ['brother_lessons', 'anatomylesson2_4'] },
      ]);
    }
  }
  scene.build();
}

function enterAnatomylesson2_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 3) + 1);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 10);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/f (4).jpg');
  if (((s as any).npc_QW ?? 0)?.['A34'] === 4) {
    ((s as any).npc_QW ?? {})['A34'] = 5;
    // TODO-QSP: dynamic text: You turn and sit down in the chair then spread your legs wide apart. Using the t...
    scene.text(`You turn and sit down in the chair then spread your legs wide apart. Using the tips of your fingers, you gently pull at your labia, revealing your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy to Kolka.`);
    scene.text('"Oh…" your brother gasps, voice trembling.');
    scene.text('You let go of your lips and start to stand up, "Okay, that\'s everything? Are you happy?"');
    scene.text('Kolka clasps his hands, almost begging, "Wait, wait, show me more! Please!"');
    scene.text('You put your hand up, "That\'s enough!" You move towards your clothes on the floor.');
    // TODO-QSP: dynamic text: "Wait, <<$pcs_nickname>>!" he cries.
    scene.text(`"Wait, ${((s as any).pcs_nickname ?? 0)}!" he cries.`);
    scene.text('"I said enough!" you say in a harsh tone and begin to dress.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A34'] > 4) {
      // TODO-QSP: dynamic text: You turn and sit down in the chair then spread your legs wide. Using the tips of...
      scene.text(`You turn and sit down in the chair then spread your legs wide. Using the tips of your fingers, you gently pull at your labia, revealing your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy to Kolka.`);
      scene.text('Your sibling is mesmerized, "Wow!"');
      scene.text('"Satisfied, now?" you ask.');
      scene.text('Kolka continues to stare at your exposed pussy, "Almost…"');
      (s as any).ivrand = 0;
      if (((s as any).brotherQW ?? 0)?.['know_not_virgin'] === 1  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).ivrand ?? 0) === 1) {
        scene.text('You sigh, "What else?"');
        // TODO-QSP: dynamic text: He looks up at you, "<<$pcs_nickname>>, can you poke a finger inside?"
        scene.text(`He looks up at you, "${((s as any).pcs_nickname ?? 0)}, can you poke a finger inside?"`);
        scene.text('You cannot believe he asked you that. "What? Why?"');
        scene.text('He shrugs, "I\'m curious."');
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You spit out, "No, of course not!"');
    scene.text('"Why?" he asks in bewilderment.');
    scene.text('You immediately get up and move towards your clothing, "No fucking way, you are my brother!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          { label: 'Insert a finger into your pussy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/f (5).jpg');
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.text('Without another word, you slip a finger into your vagina and push it in and out a few times. A sudden heat erupts in your gut and you can\'t help but add a second finger. Your free hand moves to your clitoris and you start rubbing the sensitive nub.');
    if (((s as any).pcs_vag ?? 0) < 5) {
      scene.text('The slippery walls of your pussy are very tightly clasped around your fingers.');
    } else {
      if (((s as any).pcs_vag ?? 0) >= 5  &&  ((s as any).pcs_vag ?? 0) < 10) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
        scene.text('You feel your pussy\'s slippery walls around your fingers.');
      } else {
        if (((s as any).pcs_vag ?? 0) >= 10) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 4) + 2);
          scene.text('Your pussy is used to bigger insertions by now; you can feel the wetness of your walls as you move your fingers about.');
        }
      }
    }
    scene.text('You give into your desires and begin masturbating in front of your brother. Kolka simply sits in front of you, hypnotized by your erotic display.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'incest', 'masturbate');
    qspCall(s, 'arousal', 'clit_finger', 5, 'incest', 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['brother_lessons', 'anatomylesson2_5'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).npc_QW ?? 0)?.['A34'] === 5) {
          scene.text('You sigh loudly, "What else do you want?"');
          scene.text('"Can you help me relieve some tension?" Kolka asks.');
          scene.text('Confused, you ask, "How?"');
          scene.text('A small grin grows on his face, "Just lie on the floor and don\'t move! I\'ll do everything myself!"');
        } else {
          if (((s as any).npc_QW ?? 0)?.['A34'] > 5) {
            scene.text('You ask him, "What now?" You smile at him, because you\'re pretty sure you know what\'s coming.');
            scene.text('Kolka smiles back, "Will you lie on the floor again?"');
          }
        }
        qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse and get dressed [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse and get dressed [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
        scene.actions([
          { label: 'Get down on the floor', goto: ['brother_lessons', 'anatomylesson2_5'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterAnatomylesson2_5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 2) + 2);
  (s as any).ivrand = Math.floor(Math.random() * 2) + 1;
  ((s as any).brotherQW ?? {})['confidence'] = (((s as any).brotherQW ?? {})['confidence'] ?? 0) + (4);
  if (((s as any).brotherQW ?? 0)?.['confidence'] < 10  &&  ((s as any).brotherQW ?? 0)?.['Sex'] < 4) {
    qspCall(s, 'cum_call', 'stomach', 'A34', 1, 0, 0, Math.floor(Math.random() * 11) + 20);
    qspCall(s, 'cum_call', 'breasts', 'A34', 1, 0, 0, Math.floor(Math.random() * 21) + 10);
    qspCall(s, 'cum_call', 'labia', 'A34', 1, 0, 0, Math.floor(Math.random() * 21) + 10);
    qspCall(s, 'stat', '');
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 4) {
      ((s as any).brotherQW ?? {})['Sex'] = 4;
    }
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    (s as any).picrand = Math.floor(Math.random() * 2) + 1;
    scene.img(`images/characters/pavlovsk/resident/kolka/event/homework/f (6.${((s as any).picrand ?? 0)}).jpg`);
    scene.text('You get off the chair and lie down on the carpet. Overcome with lust, you instinctively begin to rub your pussy and breast.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.text('You slip your fingers into your burning pussy, the sensation causing you to moan.');
    }
    // TODO-QSP: dynamic text: You watch as Kolka pulls down his pants and his fully erect <<npc_dick['A34']>> ...
    scene.text(`You watch as Kolka pulls down his pants and his fully erect ${((s as any).npc_dick ?? 0)?.['A34']} cm cock pops free. He kneels between your spread knees and starts to jerk himself off while he watches you play with yourself. Your heart begins to beat faster and faster, you start panting as you feel a primitive heat bubbling up deep from within. Moments later, you hear Kolka groan and watch as ropes of hot cum fly out of his cock, splashing over your crotch, stomach and even your breasts. It's too much for you and soon you join your brother in ecstasy when your own release finally peaks. It takes everything inside of you to keep from screaming in bliss as your hips buck up and down, your fingers rubbing faster as you ride wave after wave of your orgasm.`);
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'masturbate', 'incest', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'foreplay', (-10), 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 2) + 1;
    scene.img(`images/characters/pavlovsk/resident/kolka/event/homework/f (7.${((s as any).picrand ?? 0)}).jpg`);
    if (((s as any).npc_QW ?? 0)?.['A34'] === 5) {
      if (((s as any).npc_QW ?? 0)?.['A34'] === 5) {
        ((s as any).npc_QW ?? {})['A34'] = 6;
      }
      scene.text('You lie there, breathless. You suddenly pop up, the taboo nature of what just occurred between you and your sibling hitting you hard.');
      scene.text('Kolka is the first to break the silence. He eyes your cum stained body. His eyes slowly make their way up to yours. "Whoa!" he exclaims, almost too loudly.');
      scene.text('"Kolka…" you whisper to him, breath suddenly filling your lungs.');
      scene.text('He doesn\'t bother to lower his volume, "That was… <i>fucking amazing</i>!"');
      // TODO-QSP: dynamic text: "Kolka, keep your voice down. Do you want <<$npc_nickname['A29']>> to hear you?"...
      scene.text(`"Kolka, keep your voice down. Do you want ${((s as any).npc_nickname ?? 0)?.['A29']} to hear you?" you chide him.`);
      scene.text('He looks towards the hallway, "No."');
      scene.text('You move his face back to yours, "Not a word to anybody, do you hear me?"');
      scene.text('"O-of course," he stammers.');
      scene.text('You struggle to your feet, your legs barely able to hold you up yet you manage to reach your clothes. You look over one more time at your brother, now sitting on the couch, a contented look on his face. If he feels any guilt over what just happened, he\'s hiding it masterfully.');
    } else {
      if (((s as any).npc_QW ?? 0)?.['A34'] > 5) {
        scene.text('You look at your brother, a huge smile is plastered across his face.');
        scene.text('"Aha…" he breathes heavily.');
        scene.text('"Lucky we didn\'t get caught!" you tell him as your fingers play with some of his cum splattered across your abdomen.');
        // TODO-QSP: dynamic text: He pulls his pants back up and starts reaching for your clothes, "Come on, <<$pc...
        scene.text(`He pulls his pants back up and starts reaching for your clothes, "Come on, ${((s as any).pcs_nickname ?? 0)}… that was fun!" He tosses your stuff at you, careful to miss the mess he's left on you.`);
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).brotherQW ?? 0)?.['Sex'] >= 4) {
      qspCall(s, 'boyStat', 'A34');
      qspCall(s, 'cum_call', 'mouth_swallow', 'A34', 1, 0, 0, Math.floor(Math.random() * 11) + 20);
      ((s as any).brotherQW ?? {})['sex_count_today'] = (((s as any).brotherQW ?? {})['sex_count_today'] ?? 0) - (1);
      ((s as any).brotherQW ?? {})['last_sex_day_evening'] = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      (s as any).picrand = Math.floor(Math.random() * 2) + 1;
      scene.img(`images/characters/pavlovsk/resident/kolka/event/homework/f (6.${((s as any).picrand ?? 0)}).jpg`);
      scene.text('You get off the chair and lie down on the carpet. Overcome with lust, you instinctively begin to rub your pussy and breast.');
      if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
        scene.text('You slip your fingers into your burning pussy, the sensation causing you to moan.');
      }
      // TODO-QSP: dynamic text: You watch as Kolka pulls down his pants and his fully erect <<npc_dick['A34']>> ...
      scene.text(`You watch as Kolka pulls down his pants and his fully erect ${((s as any).npc_dick ?? 0)?.['A34']} cm cock pops free. You follow his movements as he walks up to your head and kneels, his hardened member mere inches from your face. You open your mouth, ready to accept him orally. Kolka pushes forward slowly, your ${((s as any).pc_desc ?? 0)?.['lips']} lips moving over his head and inching down his shaft more and more until he stops. He holds you for a moment before he begins gently thrusting into your mouth. Your fingers continue to play with your own body, as you focus on your sibling. You swirl your tongue around his cock and suck, his moans growing deeper all the while.`);
      scene.text('A fire had been building inside you since you disrobed and now your body is nearly engulfed when you feel Kolka stiffen, his penis twitching inside your mouth. He whispers your name as he cums, his jism filling your mouth and you begin to greedily swallow. Your own orgasm isn\'t far behind; your entire body begins to convulse and you start to suck your brother\'s throbbing dick harder, hoping for more of his delicious cum. The world fades for a few moments…');
      qspCall(s, 'arousal', 'foreplay', 5, 'incest');
      qspCall(s, 'arousal', 'clit_finger', 5, 'incest', 'masturbate');
      qspCall(s, 'arousal', 'bj', (-5), 'incest');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum46.jpg');
    scene.text('Recovering from your orgasm, you are now aware of what has happened.');
    scene.text('Your brother pulls his softening cock out of your mouth. You give it a quick peck.');
    // TODO-QSP: dynamic text: Kolka catches his breath and looks down at you, "Nice one, <<$pcs_nickname>>! Go...
    scene.text(`Kolka catches his breath and looks down at you, "Nice one, ${((s as any).pcs_nickname ?? 0)}! Good job! Just remember: this is our little secret!" He stands and pulls his pants up before going over to the couch.`);
    scene.text('You don\'t say anything as you get slowly gather your clothes.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).brotherQW ?? 0)?.['confidence'] > 10  &&  ((s as any).brotherQW ?? 0)?.['Sex'] < 4) {
        qspCall(s, 'boyStat', 'A34');
        qspCall(s, 'cum_call', 'mouth_swallow', 'A34', 1, 0, 0, Math.floor(Math.random() * 11) + 20);
        if (((s as any).brotherQW ?? 0)?.['Sex'] < 4) {
          ((s as any).brotherQW ?? {})['Sex'] = 4;
        }
        ((s as any).brotherQW ?? {})['sex_count_today'] = (((s as any).brotherQW ?? {})['sex_count_today'] ?? 0) - (1);
        ((s as any).brotherQW ?? {})['last_sex_day_evening'] = ((s as any).daystart ?? 0);
        qspCall(s, 'stat', '');
        (s as any).picrand = Math.floor(Math.random() * 2) + 1;
        scene.img(`images/characters/pavlovsk/resident/kolka/event/homework/f (6.${((s as any).picrand ?? 0)}).jpg`);
        scene.text('You get off the chair and lie down on the carpet. Overcome with lust, you instinctively begin to rub your pussy and breast.');
        if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
          scene.text('You slip your fingers into your burning pussy, the sensation causing you to moan.');
        }
        // TODO-QSP: dynamic text: You watch as Kolka pulls down his pants and his fully erect <<npc_dick['A34']>> ...
        scene.text(`You watch as Kolka pulls down his pants and his fully erect ${((s as any).npc_dick ?? 0)?.['A34']} cm cock pops free. You follow his movements as he walks up to your head and kneels, his hardened member mere inches from your face. You open your mouth, ready to accept him orally. Kolka pushes forward slowly, your ${((s as any).pc_desc ?? 0)?.['lips']} lips moving over his head and inching down his shaft more and more until he stops. He holds you for a moment before he begins gently thrusting into your mouth. Your fingers continue to play with your own body, as you focus on your sibling. You swirl your tongue around his cock and suck, his moans growing deeper all the while.`);
        scene.text('A fire had been building inside you since you disrobed and now your body is nearly engulfed when you feel Kolka stiffen, his penis twitching inside your mouth. He whispers your name as he cums, his jism filling your mouth and you begin to greedily swallow. Your own orgasm isn\'t far behind; your entire body begins to convulse and you start to suck your brother\'s throbbing dick harder, hoping for more of his delicious cum. The world fades for a few moments…');
        qspCall(s, 'arousal', 'foreplay', 5, 'incest');
        qspCall(s, 'arousal', 'clit_finger', 5, 'incest', 'masturbate');
        qspCall(s, 'arousal', 'bj', (-5), 'incest');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum47.jpg');
    scene.text('Recovering from your orgasm, you are now aware of what has happened.');
    scene.text('You slowly move your mouth away from your brother\'s member, your face flushed with shame.');
    scene.text('Kolka signs contently, clearly out of breath. He pulls his pants up and plops down on the couch.');
    scene.text('Slowly you get up, refusing to make eye contact. The room is very quiet as you gather your clothes.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterAnatomylesson3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/9.jpg');
  scene.text('"Okay Kolka, the next part of the lesson is about the vulva," you say, leaning back and spreading your legs to give visual access to your pussy. "That means just the external parts, not what\'s inside. We\'ll go over that as part of your next lesson."');
  scene.text('"Woah…" he says, clutching his notebook but still sitting from afar.');
  scene.text('"Well come on! You just sucked on my tits, don\'t be shy now, take a closer look!"');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/10.jpg');
    scene.text('You spread your legs a little farther apart as Kolka leans in to take a look. You briefly go over everything explaining the mons pubis is where the hair grows and that the labia are the "lips" of your vagina.');
    scene.text('"Are you always this slimy down here?" he asks, in obvious reference to your wetness.');
    scene.text('"Well <i>that</i> is actually your fault!" you say.');
    scene.text('"Huh?" he looks up, concerned that he\'s in trouble.');
    scene.text('"When a girl gets stimulated, say from sex or, I don\'t know, getting their nipples sucked," you say meaningfully, causing him to blush, "They get wet down there. It comes from the Bartholin glands and it naturally lubricates the vagina to make sex more comfortable."');
    scene.text('"Ohhh! Okay!" he says, writing everything down. <i>This might just be helping him in school after all…</i> you think to yourself.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      (s as any).vagtype = 0;
    } else {
      if (((s as any).pcs_vag ?? 0) <= 25) {
        (s as any).vagtype = 1;
      } else {
        if (((s as any).pcs_vag ?? 0) <= 35) {
          (s as any).vagtype = 2;
        } else {
          (s as any).vagtype = 3;
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', 'pubes')}`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"Next is a very special part of the vagina," you start. You spread your pussy lips apart and let him look inside. "This is the hymen. Every girl is born with one and will have it until it gets torn."');
    } else {
      scene.text('"The next part I can\'t actually show you, but I might as well show you where it should be," you say. You spread your pussy lips apart and let him look inside. "Normally, there\'s something called a \'hymen\' here. You can see a diagram of it in your textbook. Every girl is born with one and will have it until it gets torn."');
    }
    scene.text('"How does it get torn?" Kolka quickly asks while continuing to stare at your pussy as if trying to imprint it into his mind.');
    scene.text('"Well, it can get torn in a number of ways, but the most common is when a girl loses her virginity. We\'ll talk about this more next time, but when a boy and a girl have sex, the boy sticks his penis inside the girl\'s vagina."');
    if (((s as any).brotherQW ?? 0)?.['Sex'] === 7) {
      scene.text('Kolka interrupts you. "Duh! I know the penis goes in, I was there!"');
      scene.text('"You asked. Now let me get back to the lesson!" you reply in annoyance and Kolka raises his hands in surrender before you continue.');
    }
    scene.text('"Anyway, the boy sticks his penis inside the girl\'s vagina and the only way to get the penis all the way inside is to push through the hymen and break it. It usually causes a small amount of bleeding. That\'s why they call it \'popping a cherry.\'"');
    if ((!((s as any).vagtype ?? 0))) {
      scene.text('He continues to look at your hymen for a few moments before asking, "So… does this mean…"');
      scene.text('"That I\'ve never had sex? Yeah Kolka. I\'m a virgin." The admittance causes you to blush for some reason, you\'re not sure why.');
    } else {
      scene.text('He takes note of your clear lack of a hymen. "So… When we… Was it painful?"');
      scene.text('"A little. There was a fairly sharp pain followed by a dull ache, but it went away before the end," you say somewhat proudly. "But don\'t assume that all girls are the same. For some unlucky ones, it may be too painful to continue once their cherry is popped, but other girls say that they barely noticed it happening."');
    }
    scene.text('He nods in acknowledgement while writing down some more notes.');
    if (((s as any).brotherQW ?? 0)?.['Sex'] === 7) {
      scene.text('"So if you\'re ever given the chance to add to your V-card collection, listen and be understanding," you tell him and he nods.');
      scene.text('After a few more questions, you continue with the lesson.');
      scene.text('After a couple more questions, you continue on with the lesson.');
      scene.actions([
        { label: 'Continue', goto: ['brother_lessons', 'anatomylesson4'] },
      ]);
    } else {
      if (((s as any).vagtype ?? 0) === 2) {
        scene.text('"Is it supposed to look this loose?" he asks, causing you to blush hard.');
      } else {
        if (((s as any).vagtype ?? 0) === 3) {
          scene.text('<br>  "Woah! It\'s like a cave in there! Are they all this wide?" he exclaims. You blush harder than you think you\'ve ever blushed in your life.');
        }
      }
      if ((((s as any).vagtype ?? 0) === 2  ||  ((s as any).vagtype ?? 0) === 3)  &&  ((s as any).stat ?? 0)?.['men_fucked'] > 0) {
        scene.actions([
          { label: '"I\'ve had a lot of sex"', handler: (st: GameState) => {
    scene.text('"I\'ve had a lot of sex…" you say slowly.');
    scene.text('After a couple more questions, you continue on with the lesson.');
    scene.actions([
      { label: 'Continue', goto: ['brother_lessons', 'anatomylesson4'] },
    ]);
  } },
          { label: '"There\'ve been a few… big ones…"', handler: (st: GameState) => {
    scene.text('"There\'ve been…" you don\'t really know how to say this without saying it. "There have been a few uhh, big guys inside me…", you trail off.');
    scene.text('After a couple more questions, you continue on with the lesson.');
    scene.actions([
      { label: 'Continue', goto: ['brother_lessons', 'anatomylesson4'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).vagtype ?? 0) === 2) {
          scene.text('"I masturbate a lot…"');
          scene.text('After a couple more questions, you continue on with the lesson.');
          scene.actions([
            { label: 'Continue', goto: ['brother_lessons', 'anatomylesson4'] },
          ]);
        } else {
          if (((s as any).vagtype ?? 0) === 3) {
            scene.text('"No… Not all…" you force out. "I masturbate a lot, okay…?" you mutter somewhat ashamed.');
            scene.text('After a couple more questions, you continue on with the lesson.');
            scene.actions([
              { label: 'Continue', goto: ['brother_lessons', 'anatomylesson4'] },
            ]);
          } else {
            scene.text('After a couple more questions, you continue on with the lesson.');
            scene.actions([
              { label: 'Continue', goto: ['brother_lessons', 'anatomylesson4'] },
            ]);
          }
        }
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomylesson4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/11.jpg');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>> is it alright if you lift your hips a bit? It's kind of h...
  scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)} is it alright if you lift your hips a bit? It's kind of hard to see everything so close to the ground."`);
  scene.text('"Uhm, sure?" you say, lifting your hips as he asked.');
  scene.text('You lean your weight back to make it easier on yourself while he continues to inspect your vagina for a little while comparing it to his textbook and write things down in his notebook.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what's this little thing at the top?" he asks. You look down...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, what's this little thing at the top?" he asks. You look down and he's using his pencil to point towards the top of your labia. After a moment, you realize he's pointing at your clit.`);
  scene.text('"Oh! That! That\'s…" You think to yourself how you want to proceed.');
  scene.actions([
    { label: 'Just explain it to him', handler: (st: GameState) => {
    scene.text('"So, remember how we talked about the Bartholin glands and why girls get wet? That right there is called the clitoris and its only purpose is to get girls wet."');
    scene.text('"Woah! Really? That\'s cool! How does it work?"');
    scene.text('"Well, it\'s the most sensitive place a girl has on her body. When someone touches it with their fingers or licks it with their tongue or if a penis rubs it in the right way, it makes a girl feel <i>really</i> good. Do that enough, a girl can orgasm from it. I bet you already know what an orgasm is though, don\'t you?" you say, causing him to blush.');
    scene.text('"Anyways, that\'s the end of this section. Did you enjoy the lesson today?" you ask, followed by more of his furious nodding.');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, you're the best!" You smile back at him before going ...
    scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!" You smile back at him before going to get dressed.`);
    scene.actions([
      { label: 'End the lesson', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Give him a "practical" lesson', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/10.jpg');
    scene.text('With a sly look on your face, you decide to go through with your idea.');
    scene.text('"Kolka…" you start. "Did you like sucking on my nipples?" He blushes when you bring it up. "Oh come on, don\'t be shy. Tell me the truth: did you enjoy it?"');
    scene.text('"Y-yeah…" he says, hesitantly.');
    scene.text('"Well, since you liked that, why don\'t I let you try a more \'hands on\' approach to show you what you\'re asking about?" He looks at you quizzically. You spread your legs open some more and roll your hips a little. "You see Kolka, what you\'re asking about is called the clitoris and it exists for exactly one purpose: to give girls pleasure." His jaw drops as he stares at you with wide eyes.');
    scene.text('"It\'s the most sensitive place a girl has on her body," you continue. "When someone touches it with their fingers or licks it with their tongue, it makes a girl feel <i>really</i> good. Do that enough and do it right, a girl can orgasm from it…" You trail off and look him right in the eye. "You want to see what that looks like?"');
    scene.text('"Yeah!" he almost shouts.');
    scene.text('You curl your index finger, motioning for him to come closer as you get up on the couch and invite him in between your legs. "Well then hurry up and get your head down here! Come find out what a girl tastes like!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).brother_lesson_oral = 1;
    qspCall(s, 'arousal', 'cuni', 10, 'no_orgasm_msg');
    scene.img('images/shared/sex/kuni/pussylick1.mp4');
    scene.text('You instruct him as best you can as he leans in and starts giving you head. It\'s a little rough at first but with your encouragement he starts to focus more on your clit, licking and swirling his tongue around it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/kuni/pussylick3.mp4');
    scene.text('Before you know it, he\'s found a rhythm and is licking you like there\'s no tomorrow. Your eyes roll back in your head and every other sensation fades and blurs into the background except the feeling of your brother\'s tongue on your clit.');
    scene.text('He stops briefly and you vaguely hear him say, "Girls taste good," before diving back in and returning you to bliss.');
    scene.actions([
      { label: '"I\'m cumming!"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kuni/pussylickorgasm.mp4');
    scene.text('All your muscles start to tense up and you can feel a powerful orgasm approaching. Unable to do anything but moan as quietly as you can, you feel yourself explode in climax, your body violently quivering.');
    scene.text('Even through your orgasm, Kolka continues to lick you. His tongue on your hyper-sensitive clit is too much and you try to pull away but your brother is unrelenting, grabbing onto your legs and pulling you back, trying to keep drinking the flood of juices spilling from your honeypot.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/12.jpg');
    scene.text('After what seems like an eternity of excruciating pleasure, your orgasm winds down and you find the mental acuity to speak, though your brother continues to lap up your girl cum.');
    scene.text('As tempting as it is to let him go another round, you push his head away, saying, "Okay Kolka, that\'s enough," before laying back in exhaustion. You look at him with a weak smile. "Good job bro…"');
    scene.text('"Really?" he says, grinning. "I did good?"');
    scene.text('Your smile gets a bit more strength when you reply, "Good? Kolka you blew my fucking mind!"');
    scene.text('"Well, I had a great teacher didn\'t I?" he says before starting to lick your pussy again.');
    // TODO-QSP: dynamic text: "Ohhh! Kolka~!" you say, pushing his head away with more than a small amount of ...
    scene.text(`"Ohhh! Kolka~!" you say, pushing his head away with more than a small amount of regret. "As much as I'd love to let you keep going, we have to stop now. We don't want ${((s as any).npc_nickname ?? 0)?.['A29']} or dad to catch us."`);
    scene.text('"Yeah I know…" he says in a disappointed tone. "You just taste so good I want more!"');
    scene.text('You\'re so tempted but your fear outweighs your temptation right now. "Maybe some other time kiddo," you say before you find the strength to put your clothes on while Kolka packs up his schoolwork.');
    scene.actions([
      { label: 'End the lesson', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
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
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConception1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A34');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/10.jpg');
  scene.text('"The next section of your book," you say as you get undressed. "Is about conception."');
  scene.text('You lay back, spreading your legs to show Kolka your pussy while pointing between your hips with your fingers.');
  scene.text('"When a man has sex with a woman, he puts his penis into her vagina. And then when he ejaculates-"');
  scene.text('"Ejaculates?" your brother interrupts.');
  scene.text('"Cums," you say, rolling your eyes affectionately. "When he cums inside, the semen comes out and pushes into the uterus…" You run your finger over your skin, tracing the path sperm would take through your vagina, past your cervix, and into your womb.');
  scene.actions([
    { label: 'Offer him a "practical" lesson', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/11.jpg');
    scene.text('"How about we explain this practically?" you ask and Kolka freezes in place.');
    scene.text('"Like what…?" he asks hesitantly, wide eyed.');
    scene.text('"Like…" You spread your legs a little wider. "We practice how it\'s done."');
    scene.text('"Is… uhh… is this safe?" he asks. "I mean, if we\'re practicing… y\'know… are you going to get pregnant?"');
  }, goto: ['brother_lessons', 'anatomylesson_conception_sex_bc'] },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionSexBc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    scene.actions([
      { label: 'You\'re on birth control', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['creampie_allowance'] = ((s as any).daystart ?? 0);
    // TODO-QSP: dynamic text: "Don't worry," you coo. "I'm on the <<$birth_control['type']>>."
    scene.text(`"Don't worry," you coo. "I'm on the ${((s as any).birth_control ?? 0)?.['type']}."`);
    scene.actions([
      { label: 'Continue with the lesson', goto: ['brother_lessons', 'anatomylesson_conception_sex1'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).thinkpreg ?? 0) + ((s as any).knowpreg ?? 0) >= 1) {
      scene.actions([
        { label: 'You\'re already pregnant', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['creampie_allowance'] = ((s as any).daystart ?? 0);
    scene.text('"It might be kind of difficult for you to get me pregnant," you say with a wry smile.');
    scene.text('"Huh? Why?"');
    scene.text('"Cause I\'m already pregnant," you grin and Kolka\'s jaw drops. "Some extra sperm isn\'t going to make a difference."');
    scene.actions([
      { label: 'Continue with the lesson', goto: ['brother_lessons', 'anatomylesson_conception_sex1'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
        scene.text('You give into your desires and begin masturbating in front of your brother. Kolka simply sits in front of you, hypnotized by your erotic display.');
        qspCall(s, 'arousal', 'vaginal_finger', 5, 'incest', 'masturbate');
        qspCall(s, 'arousal', 'clit_finger', (-5), 'incest', 'masturbate');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'I have a condom', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A34', 0, 'normal');
    scene.img('images/shared/sex/cock/condom1.jpg');
    scene.text('"I\'ve got a condom," you smile and produce one you prepared just for the lesson.');
    scene.text('Your brother tears open the packet and slowly rolls it into his shaft. As it bottoms out at the base, he frowns.');
    scene.text('"I don\'t like how it feels."');
    scene.actions([
      { label: 'You\'ll get used to it', handler: (st: GameState) => {
    scene.text('"You\'ll get used to it," you smirk.');
    scene.actions([
      { label: 'Continue with the lesson', goto: ['brother_lessons', 'anatomylesson_conception_sex1'] },
    ]);
  } },
      { label: 'Typical', handler: (st: GameState) => {
    scene.text('"You\'re <i>such</i> a boy," you say, rolling your eyes.');
    scene.text('"What\'s that supposed to mean?"');
    scene.text('"Boys <i>always</i> complain about using condoms."');
    scene.actions([
      { label: 'Continue with the lesson', goto: ['brother_lessons', 'anatomylesson_conception_sex1'] },
    ]);
  } },
      { label: 'Laugh', handler: (st: GameState) => {
    scene.text('Unable to help it, you burst into giggles at the expression on his face.');
    scene.text('"What?"');
    scene.text('"You\'re just <i>such a boy</i>," you chortle. "Couldn\'t have had a more stereotypical reaction to wearing a rubber."');
    scene.actions([
      { label: 'Continue with the lesson', goto: ['brother_lessons', 'anatomylesson_conception_sex1'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        scene.actions([
          { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['creampie_allowance'] = ((s as any).daystart ?? 0);
    scene.text('"Don\'t worry," you coo. "It\'s a safe day in my cycle. I won\'t get pregnant."');
    scene.actions([
      { label: 'Continue with the lesson', goto: ['brother_lessons', 'anatomylesson_conception_sex1'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'You\'ll have to pull out', handler: (st: GameState) => {
    ((s as any).brotherQW ?? {})['pullout_day'] = ((s as any).daystart ?? 0);
    scene.text('"You\'ll just have to pull out," you smirk. He seems pretty nervous about that.');
    scene.actions([
      { label: 'Continue with the lesson', goto: ['brother_lessons', 'anatomylesson_conception_sex1'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterAnatomylessonConceptionSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 3, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/vag/miss/enter2.mp4');
  scene.text('"Go slow," you advise. He nods nervously and slowly starts pushing the head of his cock into the folds of your pussy.');
  scene.actions([
    { label: 'Continue', goto: ['brother_lessons', 'anatomylesson_conception_sex2'] },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 4, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/vag/miss/slow2.mp4');
  scene.text('Taking your advice, Kolka begins plodding into you slowly and methodically.');
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_enjoy'
  } },
    { label: 'Read from the textbook', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_tutor'
  } },
    { label: 'Coach him on sex', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_coach'
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionEnjoy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 7, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.text('Your eyes roll back in your head as you melt into the sensation of your brother\'s cock thrusting into your pussy. It\'s so warm, so <i>deep</i> inside you.');
  qspCall(s, 'brother_lessons', 'anatomylesson_conception_cum');
  scene.build();
}

function enterAnatomylessonConceptionTutor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 7, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.text('You pick up his textbook and keep reading from it while he keeps thrusting between your legs.');
  scene.text('"… and when sexual excitement reaches a critically high level, muscles inside the penis and the testes contract to force or shoot semen into the womb. This is called ejaculation."');
  scene.text('"During ejaculation, sperm cells swim up through the vagina into the fallopian tubes where they attempt to fertilize an egg if one has been released by the ovaries. Although the female orgasm is not necessary for conception, modern science believes that the contractions it causes can aid in the movement of the sperm through the cervix, potentially influencing conception."');
  qspCall(s, 'brother_lessons', 'anatomylesson_conception_cum');
  scene.build();
}

function enterAnatomylessonConceptionCoach(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 7, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.text('"Feel how my pussy is reacting to your cock," you murmur to your brother. "Don\'t just thrust mindlessly. Listen to your partner\'s body."');
  scene.text('His brow furrows in concentration and soon you have him responding to not just your verbal cues, but your nonverbal ones too.');
  scene.text('"That\'s a good boy," you grin.');
  qspCall(s, 'brother_lessons', 'anatomylesson_conception_cum');
  scene.build();
}

function enterAnatomylessonConceptionCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" Kolka cries. "I'm gonna cum!"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}!" Kolka cries. "I'm gonna cum!"`);
  if (((s as any).brotherQW ?? 0)?.['creampie_allowance'] === ((s as any).daystart ?? 0)) {
    scene.text('"Go ahead," you murmur to him. "Just let it out."');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_creampie'
  } },
    ]);
  } else {
    if (((s as any).brotherQW ?? 0)?.['pullout_day'] === ((s as any).daystart ?? 0)) {
      scene.text('"Pull out!" you yelp frantically.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 1) >= 7) {
      scene.actions([{ label: 'Continue', goto: ['brother_lessons', 'anatomylesson_conception_pullout_fail'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['brother_lessons', 'anatomylesson_conception_pullout'] }]);
    }
  } },
      ]);
    } else {
      scene.text('"Go ahead," you murmur to him. "Just let it out in the condom."');
      scene.actions([
        { label: 'Let him cum in the condom', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_condom_cum'
  } },
      ]);
    }
  }
  scene.build();
}

function enterAnatomylessonConceptionCreampie(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
  scene.text('Kolka shudders, holding you tight with his cock twitching inside you, and you feel a warmth blossom inside your hips.');
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    scene.text('The sensation of his cum pouring into your womb makes your eyes roll back and your toes curl with pleasure. You let your head fall back, squirming with enjoyment as your brother hugs you tight, emptying his balls inside you.');
    scene.text('After a few long moments, his grip loosens and you\'re pretty sure he\'s finished cumming.');
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_creampie_sp...
  } },
    ]);
  } },
    { label: 'Wait it out', handler: (st: GameState) => {
    scene.text('You sit tight--no pun intended-- as your brother empties his balls into your womb. His teenage cock pulses strongly, maintaining its strength and hardness all the way through his orgasm while he nestles his face between your breasts.');
    scene.text('After a few long moments, his grip loosens and you\'re pretty sure he\'s finished cumming.');
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_creampie_sp...
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionCreampieSpill(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/vagcreampie/miss1.mp4');
  scene.text('Kolka begins to pull back from you gingerly. His cock must still be sensitive after his orgasm. As it slips from your pussy, a slurry of white liquid dribbles out, running down the crack of your ass.');
  scene.text('"Woah…" His eyes are wide and you aren\'t sure if he\'s amazed by the sight or still blown away by the feeling of blowing a load inside his sister.');
  scene.actions([
    { label: 'Keep teaching the lesson', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
    scene.text('"Sooo…" Fighting through your own exhaustion, you pick up the textbook from the floor beside you. "<i>That</i> was ejaculation. All that white stuff coming out of me is semen, though you probably know that already. Semen is filled with millions of sperm which should be swimming through my uterus right now and making its way into my fallopian tubes where it try to find an egg to fertilize. This process can happen in hours if there\'s an egg present or days as the sperm can live long enough to wait for an egg to be released."');
    scene.text('You look past the book to see the expression on your brother\'s face. He\'s probably not listening. Oh well.');
    scene.text('"I guess that\'s enough teaching for today," you grin.');
    scene.actions([
      { label: 'Clean up', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionPullout(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/stomach/bellycum5.mp4');
  scene.text('Wide eyed Kolka barely pulls his cock out of you in time before he cums, covering your belly in his sperm. He pants, giving you a tired grin.');
  scene.actions([
    { label: 'Keep teaching the lesson', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
    scene.text('"Sooo…" you say, picking up the textbook from the floor beside you. "<i>That</i> was ejaculation. You didn\'t do it inside me, thank you by the way, but if you did, all of this-" you gesture to the cum spattered across your belly, "would be flowing through my uterus and making its way into my fallopian tubes where it would fertilize an egg if there is one present."');
    scene.text('You look past the book to see the expression on your brother\'s face. He\'s probably not listening. Oh well.');
    scene.text('"I guess that\'s enough teaching for today," you grin.');
    scene.actions([
      { label: 'Clean up', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionPulloutFail(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
  scene.text('For a brief moment you feel Kolka\'s hips start to move backwards. Then suddenly he pushes into you with all of his weight. His cock pulses within you and heat floods your womb.');
  scene.actions([
    { label: 'Freeze in shock', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/3.jpg');
    scene.text('Your entire body tenses in panic as you realize your brother is emptying his balls into you. You\'re so shocked by it that he rides out his entire orgasm inside your pussy while you barely even draw a breath. It\'s only once he finishes that he realizes what he\'s done and withdraws sheepishly from you.');
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_pullout_fai...
  } },
    ]);
  } },
    { label: 'Freak out', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/stop_it1.mp4');
    scene.text('"Kolka!" you gasp. "Kolka what the fuck are you doing?!"');
    scene.text('He isn\'t listening, totally oblivious as he orgasms inside of you. You try to push him off of you, but he\'s letting his entire weight lie on your hips and you don\'t have the leverage to get him out. You keep squealing his name in panic but it isn\'t until you no longer feel him twitching inside of you that he seems to regain his senses.');
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_pullout_fai...
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionPulloutFailEnd(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/vagcreampie/oops2.jpg');
  scene.text('"Kolka," you gasp. "Did you just…?"');
  scene.text('Your rhetorical question goes unanswered as thick white liquid spills out from your pussy.');
  scene.text('"Erm, uhm… Sorry…" he mumbles, blushing fiercely.');
  scene.actions([
    { label: 'Forgive him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('<i>Oh brother,</i> you think to yourself, realizing the even greater irony at the choice of phrase you picked. <i>What was I thinking?</i>');
    scene.text('"I suppose I should have seen this coming," you sigh. "Asking a teenage boy to pull out of a girl probably wasn\'t the smartest idea." Kolka cringes more at that, repeating himself.');
    scene.text('"Sorry…"');
    scene.text('"What I mean is that it\'s not your fault." You shake your head. "We really should have just used a condom. But there\'s nothing for it now. Come on, let\'s clean up."');
    scene.actions([
      { label: 'Clean up', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
    ]);
  } },
    { label: 'Scold him', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/vagcreampie/oops1.jpg');
    scene.text('"You idiot!" you snap, causing him to cringe back from you. "What were you thinking! What are you going to do if I get pregnant?!"');
    scene.text('He doesn\'t reply but continues to cower from you, blushing bright red the whole time.');
    scene.text('<i>Oh brother,</i> you think to yourself with a hand to your head, realizing the even greater irony at the choice of phrase you picked.');
    scene.text('"Ugh, whatever. Let\'s clean up."');
    scene.actions([
      { label: 'Clean up', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
    ]);
  } },
    { label: 'Boys will be boys', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('"I suppose I should have seen this coming," you sigh with a wry smile. Kolka cringes more at that, repeating himself.');
    scene.text('"Sorry…"');
    scene.text('"It\'s okay. Asking a teenage boy to pull out is kind of like asking them not to want to fuck a girl. It\'s just what you do," you laugh. "We really should have just used a condom. But there\'s nothing for it now. Come on, let\'s clean up."');
    scene.actions([
      { label: 'Clean up', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionCondomCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
  scene.text('Kolka shudders, holding you tight with his cock twitch in your pussy and you feel the condom swell inside you.');
  scene.actions([
    { label: 'Pull apart', handler: (st: GameState) => {
    if ((!((s as any).condom_break ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['brother_lessons', 'anatomylesson_conception_condom_pull_apart'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['brother_lessons', 'anatomylesson_conception_condom_break'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionCondomPullApart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/condom1.jpg');
  scene.text('Carefully, your brother pulls himself out from inside you, the end of the condom bulging with his cum. He tries to slip it off himself and quickly fumbles, allowing the semen to escape the open end and spatter on your belly.');
  scene.text('"Here, let me show you," you laugh, taking it from him. "Hold it like this and…"');
  scene.text('Demonstrating a different part of sex education, you teach him the basics of how to dispose of a condom without making a mess.');
  scene.text('"There!" you say, letting the neatly tied condom drop onto your belly, landing on your skin with his misplaced spatter beside it. "Get it now?"');
  scene.text('"I think so," he nods eagerly.');
  scene.text('"Good. Because we should really clean up before mom and dad beat our asses."');
  scene.actions([
    { label: 'Clean up', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionCondomBreak(s: GameState, scene: SceneBuilder): void {
  scene.text('You feel Kolka shifting inside you, preparing to pull out when you feel a <i>pop</i> and your womb suddenly <i>bursts</i> with warmth.');
  scene.actions([
    { label: 'Freeze', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/3.jpg');
    scene.text('You freeze in shock. Kolka must have felt it too, or at least your body tense up, because he stiffens just the same and his eyes go wide.');
    // TODO-QSP: dynamic text: "Uhh, <<$pcs_nickname>>? What happened?"
    scene.text(`"Uhh, ${((s as any).pcs_nickname ?? 0)}? What happened?"`);
    scene.text('"I think… the condom broke…?"');
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    // TODO-QSP: xgt 'brother_lessons', 'anatomylesson_conception_condom_brea...
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionCondomBreak2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/vagcreampie/oops2.jpg');
  scene.text('Sure enough, as Kolka removes his cock from your pussy, the thin latex covering his shaft is visibly torn, white cum all over it and even more dribbling from from your snatch like a broken faucet. Your brother is blushing bright red, surprisingly sheepish for something that isn\'t his fault.');
  scene.text('"Erm, so… what do we do?" he asks hesitantly.');
  if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger') {
    scene.actions([
      { label: 'Should be a safe day', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('"Don\'t worry too much about it," you tell him, flashing a reassuring smile. "It should be a safe day in my cycle so I\'m pretty sure I won\'t get pregnant."');
    scene.text('"Cycle?" he asks, cocking his head.');
    scene.text('"I guess that\'s something else I have to teach you next time," you laugh. "Come on. Let\'s get cleaned up before mom and dad beat our asses."');
    scene.actions([
      { label: 'Clean up', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('"I think… we clean this up," you sigh, looking around at the mess you\'ve made in your family\'s living room.');
    scene.actions([
      { label: 'Continue', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
    ]);
  } },
    { label: 'You\'ll get a morning after pill', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('"I\'ll get a morning after pill," you tell him. He still looks embarrassed so you nudge him on the shoulder. "Hey, it\'s not your fault the condom broke."');
    scene.text('"But still. What if you get pregnant?"');
    scene.text('"I won\'t. That\'s what the pill is for. But come on, let\'s clean this up before we get in trouble."');
    scene.actions([
      { label: 'Clean up', goto: ['brother_lessons', 'anatomylesson_conception_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnatomylessonConceptionEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 20;
  qspCall(s, 'outfit', 'wear_last_worn');
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
  scene.text('You and Kolka clean up, wipe off, and get dressed.');
  scene.text('"So, did you learn something today?" you ask. He nods back vigorously.');
  scene.text('"Can we do it again sometime?" he asks, eagerly.');
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    scene.text('"Sure." You ruffle his hair, happy to have made him happy. And maybe hopefully he learned something too.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
    { label: 'Maybe', handler: (st: GameState) => {
    scene.text('"Maybe," you say, giving him a look and ruffling his hair, happy to have made him happy. And maybe hopefullyy he learned something too.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
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
    case 'anatomylesson2_1':
      enterAnatomylesson2_1(s, scene);
      break;
    case 'anatomylesson2_2':
      enterAnatomylesson2_2(s, scene);
      break;
    case 'anatomylesson2_3':
      enterAnatomylesson2_3(s, scene);
      break;
    case 'anatomylesson2_4':
      enterAnatomylesson2_4(s, scene);
      break;
    case 'anatomylesson2_5':
      enterAnatomylesson2_5(s, scene);
      break;
    case 'anatomylesson3':
      enterAnatomylesson3(s, scene);
      break;
    case 'anatomylesson4':
      enterAnatomylesson4(s, scene);
      break;
    case 'anatomylesson_conception1':
      enterAnatomylessonConception1(s, scene);
      break;
    case 'anatomylesson_conception_sex_bc':
      enterAnatomylessonConceptionSexBc(s, scene);
      break;
    case 'anatomylesson_conception_sex1':
      enterAnatomylessonConceptionSex1(s, scene);
      break;
    case 'anatomylesson_conception_sex2':
      enterAnatomylessonConceptionSex2(s, scene);
      break;
    case 'anatomylesson_conception_enjoy':
      enterAnatomylessonConceptionEnjoy(s, scene);
      break;
    case 'anatomylesson_conception_tutor':
      enterAnatomylessonConceptionTutor(s, scene);
      break;
    case 'anatomylesson_conception_coach':
      enterAnatomylessonConceptionCoach(s, scene);
      break;
    case 'anatomylesson_conception_cum':
      enterAnatomylessonConceptionCum(s, scene);
      break;
    case 'anatomylesson_conception_creampie':
      enterAnatomylessonConceptionCreampie(s, scene);
      break;
    case 'anatomylesson_conception_creampie_spill':
      enterAnatomylessonConceptionCreampieSpill(s, scene);
      break;
    case 'anatomylesson_conception_pullout':
      enterAnatomylessonConceptionPullout(s, scene);
      break;
    case 'anatomylesson_conception_pullout_fail':
      enterAnatomylessonConceptionPulloutFail(s, scene);
      break;
    case 'anatomylesson_conception_pullout_fail_end':
      enterAnatomylessonConceptionPulloutFailEnd(s, scene);
      break;
    case 'anatomylesson_conception_condom_cum':
      enterAnatomylessonConceptionCondomCum(s, scene);
      break;
    case 'anatomylesson_conception_condom_pull_apart':
      enterAnatomylessonConceptionCondomPullApart(s, scene);
      break;
    case 'anatomylesson_conception_condom_break':
      enterAnatomylessonConceptionCondomBreak(s, scene);
      break;
    case 'anatomylesson_conception_condom_break2':
      enterAnatomylessonConceptionCondomBreak2(s, scene);
      break;
    case 'anatomylesson_conception_end':
      enterAnatomylessonConceptionEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const brother_lessons: LocationDef = {
  name: 'brother_lessons',
  title: 'Kolka',
  region: 'other',
  enter: enter,
};
